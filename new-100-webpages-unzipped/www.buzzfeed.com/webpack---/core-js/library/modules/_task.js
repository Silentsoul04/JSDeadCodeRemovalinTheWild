var ctx = require('./_ctx'),
    invoke = require('./_invoke'),
    html = require('./_html'),
    cel = require('./_dom-create'),
    global = require('./_global'),
    process = global.process,
    setTask = global.setImmediate,
    clearTask = global.clearImmediate,
    MessageChannel = global.MessageChannel,
    counter = 0,
    queue = {},
    ONREADYSTATECHANGE = 'onreadystatechange',
    defer, channel, port;
var run = function() {
    var id = +this;
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var listener = function(event) {
    run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function() {
            invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
    };
    clearTask = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (require('./_cof')(process) == 'process') {
        defer = function(id) {
            process.nextTick(ctx(run, id, 1));
        };
        // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
            global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listener, false);
        // IE8-
    } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run.call(id);
            };
        };
        // Rest old browsers
    } else {
        defer = function(id) {
            setTimeout(ctx(run, id, 1), 0);
        };
    }
}
module.exports = {
    set: setTask,
    clear: clearTask
};


//////////////////
// WEBPACK FOOTER
// ./~/core-js/library/modules/_task.js
// module id = 110
// module chunks = 1 2