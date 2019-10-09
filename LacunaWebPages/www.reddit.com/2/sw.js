// The following two listeners force more regular service worker updates (once the new service worker code
// caches clears) and forces the service worker to claim all clients, which is necessary
// for ensuring matchAll's find all reddit tabs/windows.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => {
    const activate = async () => {
        await self.clients.claim();
        // Force any clients listening to re-register with the service worker. This is necessary
        // if/when the service worker cycles (e.g., after a code change is detected)
        await sendCommandToAllClients(event, 'registerWithServiceWorker', {});
    };

    // Note that waitUntil is an asynchronous call itself. It only asks the service worker to
    // allow the async function given to finish.
    event.waitUntil(activate());
});

const V2_EVENT_BOILER_PLATE_KEY = 'v2_event_boiler_plate';

const clientIdToClientData = {};

// Clean out dead clients from clientIdToClientData
const cleanseClientData = async () => {
    const clientList = await self.clients.matchAll({
        includeUncontrolled: true,
        type: 'window'
    });
    const currentClientIds = new Set(clientList.filter(client => !!client).map(client => client.id));
    const oldClientIds = Object.keys(clientIdToClientData);
    for (const oldClientId of oldClientIds) {
        if (!currentClientIds.has(oldClientId)) {
            delete clientIdToClientData[oldClientId];
        }
    }
};

// Listen for messages from client -> SW
self.addEventListener('message', event => {
    const {
        data: {
            command
        }
    } = event;

    // Handle client registration updates. The purpose of this mechanism
    // is to maintain a client -> capabilities mapping so that we know
    // which clients are currently showing a chat frame. event.source.id
    // changes after any reload of the browser tab, so if the user changes
    // the tab to /chat, which may not support receiving logging, the
    // source.id will no longer match. Unless the tab calls registerClient
    // again, it will no longer be used for logging.
    if (command === 'registerClient') {
        const clientId = event.source.id;
        clientIdToClientData[clientId] = {};

        // Receive the latest v2 event boiler plate from the client
        const {
            data: {
                v2EventBoilerPlate
            }
        } = event;
        if (v2EventBoilerPlate !== undefined) {
            idbKeyval.set(V2_EVENT_BOILER_PLATE_KEY, JSON.stringify(v2EventBoilerPlate));
        }

        // Note the following two commands can happen in any order.

        // It's possible we're going from 0->1 client. Process any waiting commands.
        event.waitUntil(
            processQueuedCommands(),
        );

        // Find any old client registrations that are no longer valid and delete them
        event.waitUntil(
            cleanseClientData(),
        );
    }
});

// Send a command to all Reddit clients.
const sendCommandToAllClients = async (event, command, data) => {
    const clientList = await self.clients.matchAll({
        includeUncontrolled: true,
        type: 'window'
    });
    for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (!client) {
            continue;
        }
        client.postMessage({
            command,
            ...data,
        });
    }
};

// List of commands to send once a Reddit client is available to process them
let queuedCommands = [];

// Find a client to send commands to
const processQueuedCommands = async () => {
    if (queuedCommands.length === 0) return;

    const clientList = await self.clients.matchAll({
        includeUncontrolled: true,
        type: 'window'
    });
    // Find a client to send to. We only want to send to one client so that we don't
    // double log this interaction.
    const client = clientList.find(client => !!client && (client.id in clientIdToClientData));
    if (client) {
        // Drain and send all commands
        for (const c of queuedCommands) {
            client.postMessage(c);
        }
        queuedCommands = [];
    }
};

// Send a command to exactly one Reddit client, if one is available to receive and process it.
const sendCommandToOneClient = async (event, command, data) => {
    queuedCommands.unshift({
        command,
        ...data,
    });
    // Limit number of commands in the hopper
    queuedCommands.length = Math.min(queuedCommands.length, 100);

    await processQueuedCommands();
};

// Command to log an interaction as a V2 event
const logInteraction = async (event, interactionType, payload) => {
    let v2Event;

    // Grab the event boiler plate from persistent storage
    const v2EventJSON = await idbKeyval.get(V2_EVENT_BOILER_PLATE_KEY);
    if (v2EventJSON !== undefined) {
        v2Event = JSON.parse(v2EventJSON);
    }

    if (v2Event === undefined) {
        return;
    }

    const isoTimestamp = (new Date).toISOString();

    // Supplement the boilerplate event
    v2Event.action = interactionType;
    if (v2Event.notification === undefined) {
        v2Event.notification = {};
    }
    v2Event.notification.id = payload.correlation_id;
    v2Event.notification.type = payload.message_type;
    v2Event.correlationId = payload.correlation_id;
    v2Event.timestamp = isoTimestamp;
    if (v2Event.platform === undefined) {
        v2Event.platform = {};
    }
    v2Event.platform.device_id = payload.device_id;

    // Construct the http request
    const endpoint = '/';
    const request = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            events: [v2Event],
        }),
    };

    // Ship it!
    try {
        await fetch(endpoint, request);
    } catch (e) {
        console.error(e);
    }
};

// Handle a push received from a push manager
self.addEventListener('push', event => {
    const data = event.data.json();
    const title = data.title;
    const options = data.options;

    if (!options['icon']) {
        options['icon'] = 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png';
    }

    event.waitUntil(
        logInteraction(event, 'receive', options['data']),
    );

    /**
     * @typedef AutoDismiss
     * @property {('device_default'|'timed'|'infinite')} behavior
     *  default - Do whatever the browser would normally do
     *  infinite - Keep the notification up until the user engages with it
     *  timed - Keep the notification up for dismiss_time_ms milliseconds
     * @property {number} dismiss_time_ms
     *  The time the notification will be visible if behavior === 'timed'
     */

    /** @type AutoDismiss */
    // data.options.data ... I might start crying.
    const autoDismissOptions = options.data.auto_dismiss_options;
    if (autoDismissOptions !== undefined) {
        if (autoDismissOptions.behavior !== 'device_default') {
            // For behavior of timed or infinite we ask the browser to keep the notification up until interaction
            options['requireInteraction'] = true;
        }
    } else {
        options['requireInteraction'] = false;
    }

    // Show the notification
    event.waitUntil(
        self.registration.showNotification(title, options)
        .then(() => self.registration.getNotifications())
        .then(notifications => {
            // Auto dismiss logic
            if (autoDismissOptions === undefined ||
                autoDismissOptions.behavior !== "timed") {
                return;
            }

            // Find the new notification by correlation id
            let notification;
            for (let i = 0; i < notifications.length; i++) {
                if (notifications[i].data.correlationId === data.correlationId) {
                    notification = notifications[i];
                    if (notification === undefined) continue;

                    setTimeout(notification.close.bind(notification), autoDismissOptions.dismiss_time_ms);
                }
            }
        }),
    );
});

// Handle a notification click
self.addEventListener('notificationclick', event => {
    event.notification.close();

    const targetLink = event.notification.data['link'];

    event.waitUntil(
        logInteraction(event, 'click', event.notification.data),
    );

    event.waitUntil(clients.matchAll({
        type: "window",
    }).then(clientList => {
        for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url === targetLink && 'focus' in client) {
                return client.focus();
            }
        }
        if (clients.openWindow) {
            try {
                return clients.openWindow(targetLink);
            } catch (e) {
                console.error(e);
            }
        }
    }));
});

// Handler for when the user closes a notification
self.addEventListener('notificationclose', event => {
    event.waitUntil(
        logInteraction(event, 'close', event.notification.data),
    );
});

// https://github.com/jakearchibald/idb-keyval/blob/master/dist/idb-keyval-iife.min.js
/* tslint:disable */
/*
Copyright 2016, Jake Archibald

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var idbKeyval = function(e) {
    "use strict";
    class t {
        constructor(e = "keyval-store", t = "keyval") {
            this.storeName = t, this._dbp = new Promise((r, n) => {
                const o = indexedDB.open(e, 1);
                o.onerror = (() => n(o.error)), o.onsuccess = (() => r(o.result)), o.onupgradeneeded = (() => {
                    o.result.createObjectStore(t)
                })
            })
        }
        _withIDBStore(e, t) {
            return this._dbp.then(r => new Promise((n, o) => {
                const s = r.transaction(this.storeName, e);
                s.oncomplete = (() => n()), s.onabort = s.onerror = (() => o(s.error)), t(s.objectStore(this.storeName))
            }))
        }
    }
    let r;

    function n() {
        return r || (r = new t), r
    }
    return e.Store = t, e.get = function(e, t = n()) {
        let r;
        return t._withIDBStore("readonly", t => {
            r = t.get(e)
        }).then(() => r.result)
    }, e.set = function(e, t, r = n()) {
        return r._withIDBStore("readwrite", r => {
            r.put(t, e)
        })
    }, e.del = function(e, t = n()) {
        return t._withIDBStore("readwrite", t => {
            t.delete(e)
        })
    }, e.clear = function(e = n()) {
        return e._withIDBStore("readwrite", e => {
            e.clear()
        })
    }, e.keys = function(e = n()) {
        const t = [];
        return e._withIDBStore("readonly", e => {
            (e.openKeyCursor || e.openCursor).call(e).onsuccess = function() {
                this.result && (t.push(this.result.key), this.result.continue())
            }
        }).then(() => t)
    }, e
}({});
/* tslint:enable */

// The PWA "add to home" feature requires a fetch event listener in the service
// worker, even if that listener doesn't _do_ anything...
self.addEventListener('fetch', () => {});