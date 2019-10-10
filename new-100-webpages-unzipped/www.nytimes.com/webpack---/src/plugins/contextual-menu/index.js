/* global webpackPluginVhsVersion */

import dom from 'corleone';
import reducer from './reducer';
import template from './template.html';
import './styles.scss';

export default {
    name: 'contextualMenu',
    enable: true,
    proto: {
        pluginClassName: 'vhs-plugin-contextual-menu',
        template,
        state: {},

        _initialize() {
            this.onDocumentClickBound = this.onDocumentClick.bind(this);
            this.mapGlobalToLocalState();
            this.subscribeToStore();
            this.bindEventListeners();
        },

        subscribeToStore() {
            this._player.store.subscribe(() => {
                this.mapGlobalToLocalState();
            });
        },

        mapGlobalToLocalState() {
            const state = this._player.store.getState();

            this.state = {
                ...this.state,
                ...state.plugins.contextualMenu
            };
        },

        bindEventListeners() {
            this._container.addEventListener('contextmenu', event => {
                if (event.nodeName !== 'INPUT') {
                    this.onContextmenu(event);
                }
            });
        },

        onDocumentClick(event) {
            const target = event.target;
            const isRightClick = event.button === 2;
            const isContextualMenuElement =
                target.classList.contains(this.pluginClassName) &&
                document.querySelector(`.${this.pluginClassName}`) &&
                document.querySelector(`.${this.pluginClassName}`).contains(target);

            if (this.contextMenu && !isRightClick && !isContextualMenuElement) {
                this.destroy();
            }
        },

        onContextmenu(event) {
            event.preventDefault();

            document.addEventListener('click', this.onDocumentClickBound);
            this.render();
            this.resolvePosition(event.pageY, event.pageX);
        },

        resolvePosition(cursorPositionY, cursorPositionX) {
            // Calculate the optimal context menu position
            let top = cursorPositionY;
            let left = cursorPositionX;
            const viewPortWidth = document.documentElement.clientWidth;
            const viewPortHeight = document.documentElement.clientHeight;
            const elementWidth = this.contextMenu.clientWidth;
            const elementHeight = this.contextMenu.clientWidth;
            // If the context menu doesn't have enough space between the cursor and the
            // right edge of the viewport, position the context menu to the left of the cursor.
            if (viewPortHeight - cursorPositionY - 5 < elementHeight) {
                top = cursorPositionY - elementHeight;
            }
            if (viewPortWidth - cursorPositionX - 5 < elementWidth) {
                left = cursorPositionX - elementWidth;
            }

            // Position the context menu
            this.contextMenu.style.top = `${top}px`;
            this.contextMenu.style.left = `${left}px`;
        },

        getMenuItems() {
            const {
                isGetVideoCanonicalActive,
                isGetVideoCanonicalAtCurrentTimeActive,
                isGetEmbedCodeActive,
                isGetVideoIdActive
            } = this.state;

            return [{
                    isActive: !!isGetVideoCanonicalActive,
                    text: 'Get Video URL',
                    eventName: 'get-video-canonical'
                },
                {
                    isActive: !!isGetVideoCanonicalAtCurrentTimeActive,
                    text: 'Get Video URL at Current Time',
                    eventName: 'get-video-canonical-at-current-time'
                },
                {
                    isActive: !!isGetEmbedCodeActive,
                    text: 'Get Embed Code',
                    eventName: 'get-embed-code'
                },
                {
                    isActive: !!isGetVideoIdActive,
                    text: 'Get Video ID',
                    eventName: 'get-video-id'
                },
                {
                    isActive: false,
                    isVersion: true,
                    text: `VHS Version ${webpackPluginVhsVersion}`
                }
            ];
        },

        render() {
            const self = this;

            // Don't render if the context menu as been rendered
            if (this.contextMenu) {
                return;
            }

            const data = {
                pluginClassName: this.pluginClassName,
                items: this.getMenuItems()
            };

            this.contextMenu = dom.create(this.template(data));
            document.body.appendChild(this.contextMenu);

            Array.prototype.forEach.call(
                this.contextMenu.querySelectorAll('li'),
                (li, index) => {
                    const currentItem = self.getMenuItems()[index];

                    if (!!currentItem && currentItem.isActive === true) {
                        li.onclick = () => {
                            self.destroy();
                            self._emit('item:clicked', currentItem);
                            self._emit(`plugin:copySlate:open:${currentItem.eventName}`);
                        };
                    }
                }
            );

            self._emit('rendered');
        },

        destroy() {
            if (this.contextMenu) {
                document.removeEventListener('click', this.onDocumentClickBound);
                Array.prototype.forEach.call(
                    this.contextMenu.querySelectorAll('li'),
                    li => {
                        li.onclick = undefined;
                    }
                );
                dom.remove(this.contextMenu);
                this.contextMenu = null;
            }
        },

        reducer() {
            return {
                contextualMenu: reducer
            };
        }
    }
};



// WEBPACK FOOTER //
// ./src/plugins/contextual-menu/index.js