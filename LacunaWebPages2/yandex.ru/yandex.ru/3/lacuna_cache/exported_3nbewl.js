
                    home.loadManager.subscribe('js', function() {
                        BEM.DOM.decl({
                            block: 'collections2',
                            baseMix: ['mix-tabber', 'mix-tabber-labels']
                        }, {
                            onSetMod: {
                                js: {
                                    inited: function() {
                                        this.__base.apply(this, arguments);
                                        var e = BEM.blocks['i-history-storage'].getItem('collections2.category');
                                        e && e !== this.params.defaultTab && this._selectTab(e), this._loadImages(), this._logScroll();
                                    }
                                }
                            },
                            _logScroll: function() {
                                var e = this.findBlockInside(this._$panel, 'scroller');
                                e && e.addScrollStats('collections.scroll', this.elem('item').width() / 2);
                            },
                            _onPanelChange: function(e, t) {
                                this._loadImages(), BEM.channel('i-sight').trigger('edges-update'), BEM.blocks['i-multiline-overflow'].calcOverflow(t, 4, 'collections2'), this._storeHistory(e), this._logScroll(), home.stat.logDOMShow(t);
                            },
                            _getPanelHTML: function(e, t) {
                                var o = 'channels' === e,
                                    i = this.params.darkMode;
                                return home.view('collections2__panel', {
                                    'imageloader-theme': i ? 'dark' : 'light',
                                    'imageloader-mod': o ? '' : ' imageloader_different_yes',
                                    content: o ? home.view('collections2__channels', {
                                        list: t.list,
                                        more: this.params.more
                                    }) : home.view('collections2__feed', {
                                        list: t.list
                                    })
                                });
                            },
                            _loadImages: function() {
                                var e = this.findBlockInside(this._$panel, 'imageloader');
                                e && e.setMod('visible', 'yes');
                            },
                            _storeHistory: function(e) {
                                e !== this.params.defaultTab ? BEM.blocks['i-history-storage'].setItem('collections2.category', e) : BEM.blocks['i-history-storage'].removeItem('collections2.category');
                            }
                        }, {
                            live: function() {
                                return this.__base.apply(this, arguments), !1;
                            }
                        }), BEM.channel('i-sight').on('block_viewed_no:before', function(e, t) {
                            t.hasClass('collections2-loader') && t.bem('collections2-loader').setMod('visible', 'yes');
                        }), BEM.DOM.decl('collections2-loader', {
                            onSetMod: {
                                visible: {
                                    yes: function() {
                                        this._hasBeenLoaded = !1, this._loadBlockData();
                                    }
                                }
                            },
                            _loadBlockData: function() {
                                this._hasBeenLoaded || (this._hasBeenLoaded = !0, $.ajax({
                                    url: this.params.apiUrl,
                                    xhrFields: {
                                        withCredentials: !0
                                    },
                                    dataType: 'json',
                                    context: this,
                                    timeout: this.__self.ajaxTimeout
                                }).asPromise().then(function(e) {
                                    if (!this._checkData(e)) return home.error.logError({
                                        block: this.__self.getName(),
                                        sourceType: 'backend',
                                        message: 'Incorrect data'
                                    }), Promise.reject();
                                    var t = BEM.DOM.replace(this.domElem, this._drawBlock(e.block[0]));
                                    BEM.channel('i-sight').trigger('edges-update'), home.stat.logDOMShow(t);
                                }.bind(this), function(e) {
                                    throw home.error.logError({
                                        block: this.__self.getName()
                                    }, e), e;
                                }.bind(this))['catch'](function() {
                                    this.destruct();
                                }.bind(this)));
                            },
                            _checkData: function(e) {
                                return Array.isArray(e.block) && e.block.length && e.block[0].data && Array.isArray(e.block[0].data.list);
                            },
                            _drawBlock: function(e) {
                                return home.view('collections2__layout', {
                                    tabs: e.data.list,
                                    more: this.params.more,
                                    titleUrl: this.params.titleUrl,
                                    darkMode: this.params.darkMode
                                });
                            }
                        }, {
                            ajaxTimeout: 15000,
                            live: !0
                        });
                        ! function() {
                            var e = {};
                            home.lang = home.lang && 'undefined' != typeof jQuery ? jQuery.extend(home.lang, e) : e;
                        }(),
                        function() {
                            var e = home.view.define;
                            home.view;
                            e('collections2__tabs-data', function(e) {
                                var t = {};
                                return e.tabs.forEach(function(e) {
                                    t[e.id] = {
                                        list: e.list
                                    };
                                }), t;
                            }), e('collections2__image-type', function(e) {
                                var t = [{
                                    name: 'vertical',
                                    size: '280x404'
                                }, {
                                    name: 'square',
                                    size: '404x404'
                                }, {
                                    name: 'horizontal',
                                    size: '300x192'
                                }];
                                e.exclude && (t = t.reduce(function(t, l) {
                                    return l.name !== e.exclude && t.push(l), t;
                                }, []));
                                var l = Math.round(Math.random() * (t.length - 1));
                                return e.prev && t[l].name === e.prev.name && (l = l < t.length - 1 ? l + 1 : l - 1), t[l];
                            }), e('collections2__feed', function(e, t, l) {
                                var o, i = null;
                                return e.list.map(function(c, a) {
                                    var n, r, s, _ = a === e.list.length - 1;
                                    return n = i ? o : l('collections2__image-type', {
                                        prev: o,
                                        exclude: _ && !i ? 'horizontal' : ''
                                    }), o = n, r = l('collections2__feed-item', {
                                        mod: ' collections2__feed-item_type_' + n.name,
                                        stat: t.stat.getAttr('collections.feed.' + a + '(id=' + c.channel_id + ')', null, {
                                            precise: !0
                                        }),
                                        img: c.images[n.size],
                                        href: c.card_link
                                    }), 'horizontal' !== n.name || i ? (s = l('collections2__column', {
                                        items: (i || '') + r
                                    }), i = null) : (s = '', i = r), s;
                                }).join('');
                            }), e('collections2__channels', function(e, t, l) {
                                var o = e.list.map(function(e, o) {
                                    var i = e.image || e.images['296x296'];
                                    return l('collections2__item', {
                                        href: e.link,
                                        stat: t.stat.getAttr('collections.channel.' + o + '(id=' + e.channel_id + ')', null, {
                                            precise: !0
                                        }),
                                        img: i,
                                        title: e.title,
                                        color1: e.color_wiz.back,
                                        color2: home.color(e.color_wiz.back).lighter(40)
                                    });
                                }).join('');
                                return o += l('collections2__item-more', {
                                    href: e.more.href,
                                    img: e.more.img,
                                    stat: t.stat.getAttr('collections.more')
                                });
                            }), e('collections2__tabs', function(e, t, l) {
                                var o = e.tabs.map(function(t, o) {
                                    var i = 0 === o;
                                    return l('mix-tabber__tab', {
                                        mix: home.getBEMClassname('collections2__tab', {
                                            mods: {
                                                selected: i ? 'yes' : 'no',
                                                dummy: t.dummy ? 'yes' : undefined
                                            }
                                        }),
                                        mods: {
                                            selected: i ? 'yes' : 'no'
                                        },
                                        content: t.title,
                                        attrs: {
                                            tabindex: i ? '0' : '-1',
                                            'aria-selected': i ? 'true' : 'false',
                                            'data-key': t.id,
                                            'data-stat-select': 'collections.tab.select.' + t.id,
                                            id: e.blockId + '_tab_' + t.id,
                                            'aria-controls': i ? 'collections2_' + t.id : undefined
                                        }
                                    });
                                }).join('');
                                if (o.length > 0) return l('div', {
                                    mix: 'collections2__tabs' + (e.darkMode ? ' mix-tabber_theme_lightgray' : ''),
                                    content: l('collections2__tabs-wrapper', {
                                        content: o
                                    })
                                });
                            }), e('collections2__layout', function(e, t, l) {
                                var o = l('collections2__tabs', {
                                        tabs: e.tabs,
                                        blockId: 'collections2',
                                        darkMode: e.darkMode
                                    }),
                                    i = e.tabs[0],
                                    c = 'channels' === i.id,
                                    a = l('mix-tabber__panel', {
                                        block: 'collections2',
                                        id: 'collections2',
                                        key: i.id,
                                        attrs: {
                                            'aria-labelledby': 'collections2_tab_' + i.id
                                        },
                                        content: l('collections2__panel', {
                                            'imageloader-theme': e.darkMode ? 'dark' : 'light',
                                            'imageloader-mod': c ? '' : ' imageloader_different_yes',
                                            content: c ? l('collections2__channels', {
                                                list: i.list,
                                                more: e.more
                                            }) : l('collections2__feed', i)
                                        })
                                    });
                                return l('block', {
                                    block: 'collections2',
                                    rootMod: 'i-bem mix-tabber_size_narrow' + (e.darkMode ? ' collections2_theme_dark' : ''),
                                    href: e.titleUrl,
                                    title: 'Коллекции',
                                    stat: t.stat.getAttr('collections.title'),
                                    attrs: home.getAttributes({
                                        'data-bem': home.getBEMParams({
                                            collections2: {
                                                data: l('collections2__tabs-data', e),
                                                darkMode: e.darkMode
                                            }
                                        }),
                                        role: 'complementary',
                                        'aria-label': 'Коллекции',
                                        'data-blockname': 'collections'
                                    }),
                                    content: l('collections2__panels', {
                                        tabs: o,
                                        panels: a
                                    })
                                });
                            }), e('collections2__item-more', function(e, t, l) {
                                var o;
                                return '<a class="collections2__item collections2__more imageloader__card" href="' + (e.href !== o ? e.href : '') + '"' + (e.stat !== o ? e.stat : '') + '><div class="collections2__item__inner"><div class="collections2__item-img imageloader__image imageloader__image_loaded_no" style="background-image:url(' + (e.img !== o ? e.img : '') + ')"><div class="collections2__more-text"><div class="collections2__more-text-inner">Картинки, подобранные по&nbsp;вашим интересам</div></div></div><div class="collections2__item-title">Персональная лента</div></div></a>';
                            }), e('collections2__column', function(e, t, l) {
                                return '<div class="collections2__column imageloader__column">' + (void 0 !== e.items ? e.items : '') + '</div>';
                            }), e('collections2__feed-item', function(e, t, l) {
                                var o;
                                return '<a class="collections2__feed-item imageloader__card' + (e.mod !== o ? e.mod : '') + '" href="' + (e.href !== o ? e.href : '') + '"' + (e.stat !== o ? e.stat : '') + '><div class="collections2__feed-img imageloader__image imageloader__image_loaded_no" style="background-image:url(' + (e.img !== o ? e.img : '') + ')"></div></a>';
                            }), e('collections2__item', function(e, t, l) {
                                var o;
                                return '<a class="collections2__item imageloader__card" href="' + (e.href !== o ? e.href : '') + '"' + (e.stat !== o ? e.stat : '') + '><div class="collections2__item-img imageloader__image imageloader__image_loaded_no" style="background-image:url(' + (e.img !== o ? e.img : '') + ')"></div><div class="collections2__item-title i-multiline-overflow">' + (e.title !== o ? e.title : '') + '</div><div class="collections2__item-shadows collections2__item-shadows_1" style="background-color:' + (e.color1 !== o ? e.color1 : '') + '"></div><div class="collections2__item-shadows collections2__item-shadows_2" style="background-color:' + (e.color2 !== o ? e.color2 : '') + '"></div></a>';
                            }), e('collections2__tabs-wrapper', function(e, t, l) {
                                return '<div class="scroller__hider collections2__tabs-wrapper"><div class="scroller collections2__tabs-scroller" data-bem="{&quot;scroller&quot;:{}}"><div class="scroller__list collections2__tabs-list">' + (void 0 !== e.content ? e.content : '') + '</div></div></div>';
                            }), e('collections2__panel', function(e, t, l) {
                                var o;
                                return '<div class="collections2__panel-inner scroller__hider"><div class="i-bem imageloader imageloader_tracking_yes collections2__scroller scroller imageloader__scroller imageloader_theme_' + (e['imageloader-theme'] !== o ? e['imageloader-theme'] : '') + (e['imageloader-mod'] !== o ? e['imageloader-mod'] : '') + '" data-bem="{&quot;imageloader&quot;:' + home.parseRules.bem(e, t, 'js') + '}"><div class="collections2__page">' + (e.content !== o ? e.content : '') + '</div></div></div>';
                            }), e('collections2__panels', function(e, t, l) {
                                var o;
                                return '<div class="collections2__panels">' + (e.panels !== o ? e.panels : '') + '</div>' + (e.tabs !== o ? e.tabs : '');
                            }), e('block__title_type_text', function(e, t, l) {
                                var o, i;
                                return '<div class="' + (e.block !== i ? e.block : t.block !== i ? t.block : (o = l('block', e)) !== i ? o : '') + '__title block__title-text' + (e['locate-mod'] !== i ? e['locate-mod'] : t['locate-mod'] !== i ? t['locate-mod'] : (o = l('locate-mod', e)) !== i ? o : '') + (e.blockTitleMod !== i ? e.blockTitleMod : t.blockTitleMod !== i ? t.blockTitleMod : (o = l('blockTitleMod', e)) !== i ? o : '') + '"' + home.parseRules.bem(e, t, 'titleAttrs.attrs') + (e.stat !== i ? e.stat : '') + '>' + (e.title !== i ? e.title : t.title !== i ? t.title : (o = l('title', e)) !== i ? o : '') + '</div>' + (e.locate !== i ? e.locate : t.locate !== i ? t.locate : (o = l('locate', e)) !== i ? o : '') + (e.switcher !== i ? e.switcher : t.switcher !== i ? t.switcher : (o = l('switcher', e)) !== i ? o : '');
                            }), e('block', function(e, t, l) {
                                var o, i;
                                return '<div class="' + (e.block !== i ? e.block : t.block !== i ? t.block : (o = l('block', e)) !== i ? o : '') + ' ' + (e.rootMod !== i ? e.rootMod : t.rootMod !== i ? t.rootMod : (o = l('rootMod', e)) !== i ? o : '') + ' block"' + (e.attrs !== i ? e.attrs : t.attrs !== i ? t.attrs : (o = l('attrs', e)) !== i ? o : '') + '><div class="block__title">' + ((o = l('block__title', e)) !== i ? o : '') + '</div><div class="' + (e.block !== i ? e.block : t.block !== i ? t.block : (o = l('block', e)) !== i ? o : '') + '__content block__content">' + (e.content !== i ? e.content : t.content !== i ? t.content : (o = l('content', e)) !== i ? o : '') + '</div>' + (e.after !== i ? e.after : t.after !== i ? t.after : (o = l('after', e)) !== i ? o : '') + '</div>';
                            }), e('block__title_type_link', function(e, t, l) {
                                var o, i;
                                return '<a class="' + (e.block !== i ? e.block : t.block !== i ? t.block : (o = l('block', e)) !== i ? o : '') + '__title block__title-text' + (e['locate-mod'] !== i ? e['locate-mod'] : t['locate-mod'] !== i ? t['locate-mod'] : (o = l('locate-mod', e)) !== i ? o : '') + (e.blockTitleMod !== i ? e.blockTitleMod : t.blockTitleMod !== i ? t.blockTitleMod : (o = l('blockTitleMod', e)) !== i ? o : '') + '" href="' + (e.href !== i ? e.href : '') + '"' + (e.stat !== i ? e.stat : '') + home.parseRules.bem(e, t, 'titleAttrs.attrs') + '>' + (e.title !== i ? e.title : t.title !== i ? t.title : (o = l('title', e)) !== i ? o : '') + '</a>' + (e.locate !== i ? e.locate : t.locate !== i ? t.locate : (o = l('locate', e)) !== i ? o : '') + (e.switcher !== i ? e.switcher : t.switcher !== i ? t.switcher : (o = l('switcher', e)) !== i ? o : '');
                            }), e('block__title-link', function(e, t, l) {
                                var o = e.titleAttrs || {};
                                return e.target && (o.target = e.target), e.rel && (o.rel = e.rel), '_blank' === o.target && 'undefined' == typeof o.rel && (o.rel = 'noopener'), e.titleAttrs = o, l('block__title_type_link', e);
                            }), e('block__title', function(e, t, l) {
                                return e.locate && (e.locate = l('block__title-locate', e), e['locate-mod'] = ' block__title-locate'), e.switcher && (e.switcher = l('block__title-switcher', e)), e.href ? l('block__title-link', e) : l('block__title_type_text', e);
                            }), e('div', function(e, t, l) {
                                var o, i;
                                return '<div class="' + (e.mix !== i ? e.mix : t.mix !== i ? t.mix : (o = l('mix', e)) !== i ? o : '') + '"' + home.parseRules.bem(e, t, 'attrs') + '>' + (e.content !== i ? e.content : t.content !== i ? t.content : (o = l('content', e)) !== i ? o : '') + '</div>';
                            });
                        }();;
                        home.bundles.notify('collections2');
                    });
                