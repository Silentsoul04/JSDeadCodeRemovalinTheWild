home.loadManager.subscribe('js', function() {
    BEM.DOM.decl({
        block: 'afisha2',
        baseBlock: 'geoblock2',
        baseMix: ['mix-tabber', 'mix-tabber-loader', 'mix-tabber-labels']
    }, {
        onSetMod: {
            js: function() {
                this.__base.apply(this, arguments), this._cinemas = {
                    favorite: [],
                    geo: []
                }, this.params.logged && !home.getData('geohelper.disabled') && this._loadFavorites(), this._addScrollStats(this.elem('panel')), BEM.blocks['i-multiline-overflow'].calcOverflow(this.elem('panel'), 2, 'afisha2'), BEM.blocks['select-native'].on(this.domElem, 'change', function(e, t) {
                    this.setMod('cinemas-selected', 'yes'), this._selectTab(t, {
                        parentKey: 'cinema'
                    });
                }, this);
            }
        },
        _isFilms: function(e) {
            return 0 === e.indexOf('cinema');
        },
        _loadData: function(e) {
            return this._isFilms(e) ? this._loadFilmsData(e) : this._loadShowsData(e);
        },
        _loadFilmsData: function(e) {
            return $.ajax({
                dataType: 'json',
                url: 'https://' + home.getData('geo.geohelperHost') + '/geohelper/get_cinema_sessions',
                xhrFields: {
                    withCredentials: !0
                },
                timeout: BEM.blocks['i-const'].GEOHELPER_TIMEOUT,
                data: {
                    id: e.replace('cinema_', ''),
                    geoid: home.getData('geo.id'),
                    lang: home.getData('common.locale')
                }
            }).asPromise().then(function(e) {
                return {
                    events: e || []
                };
            });
        },
        _loadShowsData: function(e) {
            return $.ajax({
                dataType: 'json',
                url: '/portal/api/data/1',
                xhrFields: {
                    withCredentials: !0
                },
                timeout: BEM.blocks['i-const'].GEOHELPER_TIMEOUT,
                data: {
                    block: 'afisha_inserts',
                    content: 'touch',
                    lang: home.getData('common.locale'),
                    page_geo: home.getData('geo.id'),
                    event_type: e
                }
            }).asPromise().then(function(t) {
                var a = [];
                return t.block && t.block[0] && t.block[0].data && Array.isArray(t.block[0].data[e]) && (a = t.block[0].data[e]), {
                    events: a
                };
            });
        },
        _loadFavorites: function() {
            var e = 'https://' + home.getData('geo.geohelperHost') + '/geohelper/nogeoget';
            $.ajax({
                dataType: 'json',
                url: e,
                context: this,
                xhrFields: {
                    withCredentials: !0
                },
                timeout: BEM.blocks['i-const'].GEOHELPER_TIMEOUT,
                data: {
                    geoid: home.getData('geo.id'),
                    lang: home.getData('common.locale'),
                    unsessions: 1
                }
            }).then(function(e) {
                if (e && e.afisha) {
                    var t = e.afisha.filter(function(e) {
                        return e.isFavorite;
                    });
                    t.length && this._setCinemas('favorite', t);
                }
            }, function(t, a, i) {
                home.error.logAjaxError({
                    block: 'afisha2',
                    message: '_loadFavorites: ajax',
                    url: e,
                    source: 'geohelper_nogeoget'
                }, t, a, i);
            });
        },
        _update: function(e, t) {
            var a = (t.afisha || []).filter(function(e) {
                return !e.isFavorite;
            });
            this.setMod('cinemas-geo', a.length ? 'yes' : 'no'), a.length ? (this._setCinemas('geo', a), this._setLocationStatus(null)) : this._setLocationStatus('empty', home.l10n('afisha.noCinemas'), !0);
        },
        _loadImages: function() {
            var e = this.findBlockInside(this._$panel, 'imageloader');
            e && e.setMod('visible', 'yes');
        },
        _addScrollStats: function(e) {
            var t = e || this._$panel,
                a = this.findBlockInside(t, 'scroller');
            a && a.addScrollStats('afisha.scroll', t.find('.afisha2__event').width() / 2);
        },
        _renderLoader: function(e) {
            return home.view('afisha2__panel', {
                dummy: !0,
                key: e
            });
        },
        _getCinema: function(e) {
            return this._cinemas.favorite.concat(this._cinemas.geo).filter(function(t) {
                return t && t.id === e;
            })[0];
        },
        _setCinemas: function(e, t) {
            this._cinemas[e] = t, this._appendCinemas();
        },
        _appendCinemas: function() {
            var e = this._cinemas.favorite.concat(this._cinemas.geo),
                t = this._cinemas.geo.length ? home.l10n('afisha.defaultTabLong') : home.l10n('afisha.myCinemas'),
                a = this._select ? this._select.getValue() : 'cinema',
                i = this._cinemas.favorite.length > 0,
                s = '';
            if (this.setMod('cinemas', e.length ? 'yes' : 'no'), e.length) {
                var n = [{
                    title: t,
                    value: 'cinema',
                    selected: 'cinema' === a,
                    counter: 'afisha.select.cinema.all'
                }];
                e.forEach(function(e) {
                    var s = 'cinema_' + e.id,
                        o = a === s;
                    o && (t = e.title), n.push({
                        title: (!e.isFavorite && i ? '\u27A4 ' : '') + e.title,
                        value: s,
                        counter: 'afisha.select.cinema.' + (e.isFavorite ? 'favorite' : 'geo'),
                        selected: o
                    });
                }), s = home.view('select-native', {
                    items: n,
                    textSelector: '.button__text',
                    element: home.view('button', {
                        mods: {
                            theme: 'afisha2'
                        },
                        mix: 'afisha2__cinemas-select-button',
                        stat: '',
                        content: t
                    }),
                    attrs: {
                        'data-statlog': 'afisha.select.cinema.button'
                    },
                    selectAttrs: {
                        title: t
                    }
                });
            }
            this.elem('cinemas-select').html(s), this._select = this.findBlockInside('select-native');
        },
        _getPanelHTML: function(e, t) {
            if (t && t.events) return home.view('afisha2__panel', {
                events: t.events,
                key: e,
                cinema: this._getCinema(e.replace('cinema_', ''))
            });
        },
        _getPanelRetry: function(e) {
            return home.view('afisha2__error', {
                text: home.l10n('afisha.scheduleError'),
                mix: this._isFilms(e) ? 'afisha2__error_type_films' : '',
                button: home.view('button', {
                    mods: {
                        theme: 'afisha2'
                    },
                    attrs: {
                        'data-statlog': 'afisha.retry.' + (this._isFilms(e) ? 'cinema' : e),
                        'data-key': e
                    },
                    stat: '',
                    mix: 'afisha2__retry-button afisha2__error-button',
                    content: home.l10n('afisha.scheduleTryAgain')
                })
            });
        },
        _showLocateProgress: function(e) {
            e.geohelper && this._setLocationStatus(null, home.l10n('afisha.searchInProgress'));
        },
        _appendGuideLink: function(e, t) {
            this.domElem.find('.afisha2__locate-main').append(t);
        },
        _changeTab: function(e, t) {
            'cinema' === e && !t.parentKey && this._select ? this._selectTab(this._select.getValue(), {
                parentKey: 'cinema'
            }) : this.__base.apply(this, arguments), this.toggleMod(this.elem('cinemas'), 'hidden', 'yes', !this._isFilms(e));
        },
        _onPanelChange: function(e, t) {
            this.__base.apply(this, arguments), this._loadImages(), this._addScrollStats(), BEM.blocks['i-multiline-overflow'].calcOverflow(t, 2, 'afisha2');
        }
    }, {
        live: function() {
            return this.__base.apply(this, arguments), !1;
        }
    }), BEM.DOM.decl('select-native', {
        onSetMod: {
            js: function() {
                this._items = this.params.items || [];
            }
        },
        _onChange: function() {
            var e = this.getValue(),
                t = this.domElem.find(this.params.textSelector);
            this._items.forEach(function(a) {
                a.value === e && (t && t.text(a.title), a.counter && home.stat.logPath('click', a.counter));
            }), this.trigger('change', e);
        },
        getValue: function() {
            return this.elem('select').val();
        }
    }, {
        live: function() {
            return this.liveBindTo('select', 'change', function() {
                this._onChange();
            }), !0;
        }
    });
    ! function() {
        var e = {
            afisha: {
                defaultTabLong: 'Все кинотеатры',
                myCinemas: 'Мои кинотеатры',
                noCinemas: 'Кинотеатров рядом не найдено',
                scheduleError: 'Не удалось загрузить данные',
                scheduleTryAgain: 'Попробовать еще раз',
                searchInProgress: 'Идёт поиск кинотеатров '
            },
            months_short_genetive: {
                apr: 'апр',
                aug: 'авг',
                dec: 'дек',
                feb: 'фев',
                jan: 'янв',
                jul: 'июл',
                jun: 'июн',
                mar: 'мар',
                may: 'май',
                nov: 'ноя',
                oct: 'окт',
                sep: 'сен'
            }
        };
        home.lang = home.lang && 'undefined' != typeof jQuery ? jQuery.extend(home.lang, e) : e;
    }(),
    function() {
        var e = home.view.define;
        home.view;
        e('afisha2__event-film-events', function(e, t, a) {
            var n, i = e.film;
            if (i && Array.isArray(i.events)) return n = i.events.map(function(n) {
                var s = n.href ? 'afisha2__film-event_ticket_yes' : 'afisha2__film-event_ticket_no',
                    r = e.cinema ? t.stat.getAttr('afisha.timetable.' + (e.cinema.isFavorite ? 'favorite' : 'geo')) : '';
                return a('home-link', {
                    mix: 'afisha2__film-event ' + s,
                    href: n.href || i.href,
                    content: n.time,
                    stat: r,
                    attrs: {
                        target: n.href ? '_blank' : undefined
                    }
                });
            }).join(''), a('div', {
                mix: 'afisha2__film-events',
                content: n
            });
        }), e('afisha2__show-generate-images', function(e) {
            var t = {
                    1: '/s276x153',
                    2: '/s552x306',
                    3: '/s828x459'
                },
                a = e.event,
                n = {};
            if (a.image_url)
                for (var i in t) t.hasOwnProperty(i) && (n[i] = a.image_url + t[i]);
            return home.getBEMParams(n);
        }), e('afisha2__film-generate-images', function(e) {
            var t = {
                    1: '100x143_noncrop',
                    2: '200x286_noncrop',
                    3: '300x429_noncrop'
                },
                a = e.film,
                n = {};
            if (a.posters && a.posters.base)
                for (var i in t) t.hasOwnProperty(i) && (n[i] = a.posters.base + '/' + t[i]);
            return home.getBEMParams(n);
        }), e('afisha2__more-cinema', function(e, t, a) {
            var n = e.cinema;
            return n && n.href ? a('div', {
                mix: 'afisha2__event',
                content: a('home-link', {
                    mix: 'afisha2__more-cinema',
                    href: n.href,
                    stat: t.stat.getAttr('afisha.more.cinema'),
                    content: a('span', {
                        mod: 'afisha2__more-cinema-icon'
                    }) + a('span', {
                        mod: 'afisha2__more-cinema-text',
                        content: 'Расписание на другие дни'
                    })
                })
            }) : '';
        }), e('afisha2__event-film', function(e, t, a) {
            var n = e.event,
                i = n.posters && n.posters.base;
            return a('div', {
                mix: 'afisha2__event',
                content: a('afisha-event-film', {
                    event: n,
                    href: n.href,
                    stat: t.stat.getAttr(e.counter),
                    mix: 'afisha2__event-film imageloader__card',
                    imageMix: 'imageloader__image imageloader__image_loaded_no',
                    imageAttrs: {
                        'data-image': a('afisha2__film-generate-images', {
                            film: n
                        }),
                        style: i ? 'background-image:url(' + n.posters.base + '/100x143_noncrop)' : ''
                    }
                }) + a('afisha2__event-film-events', {
                    film: n,
                    cinema: e.cinema
                })
            });
        }), e('afisha2__event-show', function(e, t, a) {
            var n = e.event,
                i = n && n.image_url;
            return a('div', {
                mix: 'afisha2__event',
                content: a('afisha-event-show', {
                    event: n,
                    href: n.url,
                    stat: t.stat.getAttr(e.counter),
                    mix: 'afisha2__event-show imageloader__card',
                    imageMix: 'imageloader__image imageloader__image_loaded_no',
                    imageAttrs: {
                        'data-image': a('afisha2__show-generate-images', {
                            event: n
                        }),
                        style: i ? 'background-image:url(' + n.image_url + '/s276x153)' : ''
                    }
                })
            });
        }), e('afisha2__panel-shows', function(e, t, a) {
            var n = e.events;
            if (e.dummy) {
                var i = a('div', {
                    mix: 'afisha2__event',
                    content: a('afisha-event-show', {
                        mix: 'afisha2__event-show afisha2__event-show_dummy',
                        dummy: !0
                    })
                });
                return a('afisha2__panel-contents', {
                    items: Array(4).join(i)
                });
            }
            return Array.isArray(n) && n.length ? a('afisha2__panel-contents', {
                items: n.map(function(t) {
                    return a('afisha2__event-show', {
                        event: t,
                        counter: 'afisha.link.' + e.key + '.all'
                    });
                }).join('')
            }) : a('afisha2__error', {
                text: 'Извините, для вашего региона данных нет'
            });
        }), e('afisha2__panel-cinema', function(e, t, a) {
            var n = e.events,
                i = -1,
                s = -1,
                r = 'afisha.link.cinema.' + (e.cinema ? e.cinema.isFavorite ? 'favorite' : 'geo' : 'all');
            if (e.dummy) {
                var o = a('div', {
                    mix: 'afisha2__event',
                    content: a('afisha-event-film', {
                        mix: 'afisha2__event-film afisha2__event-film_dummy',
                        dummy: !0
                    })
                });
                return a('afisha2__panel-contents', {
                    items: Array(6).join(o)
                });
            }
            return Array.isArray(n) && n.length ? a('afisha2__panel-contents', {
                items: n.map(function(t) {
                    var n = t.release || t.premiere_badge,
                        o = r + (n ? '.new.' + ++s : '.regular.' + ++i);
                    return a('afisha2__event-film', {
                        event: t,
                        cinema: e.cinema,
                        counter: o
                    });
                }).join('') + a('afisha2__more-cinema', {
                    cinema: e.cinema
                })
            }) : a('afisha2__error', {
                text: 'Сегодня в кинотеатре сеансов нет',
                mix: 'afisha2__error_type_films',
                button: e.cinema && e.cinema.href ? home.view('button', {
                    mix: 'afisha2__error-button',
                    mods: {
                        theme: 'afisha2'
                    },
                    attrs: {
                        'data-statlog': 'afisha.no_timetable.' + (e.cinema.isFavorite ? 'favorite' : 'geo')
                    },
                    stat: '',
                    url: e.cinema.href,
                    content: 'Расписание на завтра'
                }) : ''
            });
        }), e('afisha2__panel', function(e, t, a) {
            return 0 === e.key.indexOf('cinema') ? a('afisha2__panel-cinema', e) : a('afisha2__panel-shows', e);
        }), e('afisha2__error', function(e, t, a) {
            var n;
            return '<div class="afisha2__error ' + (e.mix !== n ? e.mix : '') + '"><div class="afisha2__error-centered"><div>' + (e.text !== n ? e.text : '') + '</div>' + (e.button !== n ? e.button : '') + '</div></div>';
        }), e('afisha2__panel-contents', function(e, t, a) {
            return '<div class="afisha2__panel-contents scroller__hider"><div class="afisha2__scroller scroller imageloader imageloader_theme_dark imageloader__scroller" data-bem="{&quot;scroller&quot;:{}, &quot;imageloader&quot;:{}}"><div class="afisha2__list">' + (void 0 !== e.items ? e.items : '') + '</div></div></div>';
        }), e('button', function(e) {
            var t = e.mods || {},
                a = 'button',
                n = e.attrs || {};
            return e.url ? a = 'a' : e.tag && (a = e.tag), t.theme || ('yes' === t.pseudo ? t.theme = 'pseudo' : t.theme = 'normal'), n.role = 'button', e.tabindex && (n.tabindex = e.tabindex), e.url ? (n.href = e.url, e.target && (n.target = e.target), t.disabled && (n['aria-disabled'] = !0), '_blank' === n.target && 'undefined' == typeof n.rel && (n.rel = 'noopener')) : (n.type = e.type || 'button', e.name && (n.name = e.name), e.value && (n.value = e.value), t.disabled && (n.disabled = 'disabled')), '<' + a + ' class="' + home.getBEMClassname('button', {
                mods: t,
                mix: e.mix
            }) + ' i-bem" data-bem="{&quot;button&quot;:{}}"' + home.getAttributes(n) + (e.stat || '') + '><span class="button__text">' + (e.content || '') + '</span></' + a + '>';
        }), e('home-link', function(e, t, a) {
            var n = 'a',
                i = e.attrs || {},
                s = e.mods || {},
                r = e.inlineIcon || '';
            return e.href ? i.href = e.href : n = e.tag || 'span', e.title && (i.title = e.title), e.role && (i.role = e.role), e.tabindex && (i.tabindex = e.tabindex), e.target && (i.target = e.target), '_blank' === i.target && 'undefined' == typeof i.rel && (i.rel = 'noopener'), a('home-link__tmpl', {
                attrs: i,
                tag: n,
                mix: e.mix,
                mods: s,
                content: e.content,
                stat: e.stat,
                icon: r
            });
        }), e('home-link__tmpl', function(e, t, a) {
            var n;
            return '<' + (e.tag !== n ? e.tag : '') + ' class="' + home.parseRules.bem(e, t, 'home-link.class') + '"' + home.parseRules.bem(e, t, 'attrs') + (e.stat !== n ? e.stat : '') + '>' + (e.icon !== n ? e.icon : '') + (e.content !== n ? e.content : '') + '</' + (e.tag !== n ? e.tag : '') + '>';
        }), e('span', function(e, t, a) {
            var n;
            return '<span class="' + (e.mod !== n ? e.mod : '') + '"' + home.parseRules.bem(e, t, 'attrs') + '>' + (e.content !== n ? e.content : '') + '</span>';
        }), e('div', function(e, t, a) {
            var n, i;
            return '<div class="' + (e.mix !== i ? e.mix : t.mix !== i ? t.mix : (n = a('mix', e)) !== i ? n : '') + '"' + home.parseRules.bem(e, t, 'attrs') + '>' + (e.content !== i ? e.content : t.content !== i ? t.content : (n = a('content', e)) !== i ? n : '') + '</div>';
        }), e('select-native', function(e, t, a) {
            var n = e.mix || '',
                i = e.attrs || {},
                s = e.selectAttrs || {},
                r = e.items || [],
                o = e.element || '',
                m = '';
            return r.forEach(function(e) {
                m += a('select-native__option', {
                    title: e.title,
                    attrs: {
                        selected: e.selected ? 'selected' : undefined,
                        disabled: e.disabled ? 'disabled' : undefined,
                        value: e.value
                    }
                }), delete e.selected;
            }), i['data-bem'] = home.getBEMParams({
                'select-native': {
                    textSelector: e.textSelector || '.select-native__text',
                    items: r
                }
            }), a('select-native__layout', {
                mix: n,
                attrs: i,
                selectAttrs: s,
                options: m,
                element: o
            });
        }), e('select-native__option', function(e, t, a) {
            return '<option class="select-native__option" ' + home.parseRules.bem(e, t, 'attrs') + '>' + (void 0 !== e.title ? e.title : '') + '</option>';
        }), e('select-native__layout', function(e, t, a) {
            var n;
            return '<span class="select-native i-bem ' + (e.mix !== n ? e.mix : '') + '" ' + home.parseRules.bem(e, t, 'attrs') + '>' + (e.element !== n ? e.element : '') + '<select class="select-native__select" ' + home.parseRules.bem(e, t, 'selectAttrs.attrs') + '>' + (e.options !== n ? e.options : '') + '</select></span>';
        }), e('afisha-event-film', function(e, t, a) {
            var n = e.event || {},
                i = Boolean(e.dummy),
                s = (e.mix || '') + ' afisha-event-film',
                r = {
                    imageMix: e.imageMix || '',
                    imageAttrs: e.imageAttrs || {}
                };
            return i ? (s += ' afisha-event-film_dummy', r.content = a('span', {
                mod: 'afisha-event-film__dummy-text'
            })) : (r.imageAttrs['data-image'] || (r.imageMix += ' afisha-event-film__image_empty_' + Math.floor(5 * Math.random())), r.content = a('span', {
                mod: 'afisha-event-film__title',
                content: home.prepareSpaces(n.full || n.name)
            }) + a('span', {
                mod: 'afisha-event-film__genre',
                content: n.genre || ''
            })), n.release && (n.premiere_badge = 'премьера'), r.premiere = n.premiere_badge ? a('span', {
                mod: 'afisha-event-film__premiere',
                content: home.capitalize(n.premiere_badge.toLowerCase())
            }) : '', a('home-link', {
                href: e.href,
                mix: s,
                stat: e.stat,
                content: a('afisha-event-film__layout', r),
                target: a('new-tab-links__check') ? '_blank' : ''
            });
        }), e('afisha-event-film__layout', function(e, t, a) {
            var n;
            return '<span class="afisha-event-film__image-wrapper"><span class="afisha-event-film__image ' + (e.imageMix !== n ? e.imageMix : '') + '"' + home.parseRules.bem(e, t, 'imageAttrs.attrs') + '></span>' + (e.premiere !== n ? e.premiere : '') + '</span><span class="afisha-event-film__content">' + (e.content !== n ? e.content : '') + '</span>';
        }), e('afisha-event-show__dates', function(e, t, a) {
            var n = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
                i = e.dates,
                s = [],
                r = [];

            function o(e) {
                var t = new Date(e);
                isNaN(t.valueOf()) || (s.push(t.getMonth()), r.push(t.getDate()));
            }
            return o(i[0]), i[0].split('-')[1] === i[i.length - 1].split('-')[1] ? (o(i[1]), s.length = 1) : (o(i[i.length - 1]), r.length = 0), a('span', {
                mod: 'afisha-event-show__date afisha-event-show__date_days_' + r.length,
                content: (r.length ? a('span', {
                    mod: 'afisha-event-show__day',
                    content: r.join(', ')
                }) : '') + s.map(function(e) {
                    return a('span', {
                        mod: 'afisha-event-show__month',
                        content: t.l10n('months_short_genetive.' + n[e])
                    });
                }).join('')
            });
        }), e('afisha-event-show', function(e, t, a) {
            var n = e.event || {},
                i = Boolean(e.dummy),
                s = (e.mix || '') + ' afisha-event-show',
                r = {
                    innerMix: e.innerMix || '',
                    imageMix: e.imageMix || '',
                    imageAttrs: e.imageAttrs || {}
                };
            if (n.place || (n.place = 'Событие идет на нескольких площадках'), n.title && n.description && n.place && (s += ' afisha-event-show_content_full'), n.price) {
                var o = n.price / 100;
                r.price = a('span', {
                    mod: 'afisha-event-show__price',
                    content: 'от %s'.replace('%s', o + ' ' + a('rouble', {}))
                });
            }
            return i ? (s += ' afisha-event-show_dummy', r.content = a('span', {
                mod: 'afisha-event-show__dummy-text'
            })) : (!r.imageAttrs['data-image'] && n.type && (r.imageMix += 'afisha-event-show__image_empty_' + n.type + '_' + Math.floor(4 * Math.random())), r.dates = Array.isArray(n.dates) && n.dates.length ? a('afisha-event-show__dates', {
                dates: n.dates
            }) : '', r.content = ['title', 'description', 'place'].reduce(function(e, t) {
                return n[t] && (e += a('span', {
                    mod: 'afisha-event-show__' + t,
                    content: n[t]
                })), e;
            }, '')), a('home-link', {
                mix: s,
                href: e.href,
                stat: e.stat,
                content: a('afisha-event-show__layout', r),
                target: a('new-tab-links__check') ? '_blank' : ''
            });
        }), e('afisha-event-show__layout', function(e, t, a) {
            var n;
            return '<span class="afisha-event-show__inner ' + (e.innerMix !== n ? e.innerMix : '') + '"><span class="afisha-event-show__image ' + (e.imageMix !== n ? e.imageMix : '') + '" ' + home.parseRules.bem(e, t, 'imageAttrs.attrs') + '></span>' + (e.price !== n ? e.price : '') + '<span class="afisha-event-show__content"><span class="afisha-event-show__text">' + (e.content !== n ? e.content : '') + '</span>' + (e.dates !== n ? e.dates : '') + '</span></span>';
        }), e('rouble', function(e, t, a) {
            return '<span class="rouble' + (void 0 !== e.mod ? e.mod : '') + '">\u20BD</span>';
        });
    }();;
    home.bundles.notify('afisha2');
});