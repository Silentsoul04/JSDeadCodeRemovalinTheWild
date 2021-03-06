_$.extend({ // 2013 "RESPONSIVE DESIGN" - 1.1.5

    prevLink: function(srcElm, tag) {
        var e = srcElm,
            o = e;
        for (; e; e = e["previousSibling"]) {
            if (e.nodeType === 1 && e != o) {
                break;
            }
        }
        return e;
    },
    coverage: function(elm, coverage) {
        var m = elm.parentNode,
            isModal = ((m.className).indexOf("ws-modal") != -1),
            m = (isModal) ? _$.prevLink(m, "a") : _$.prevLink(elm, "a"),
            h = m.getAttribute("href"),
            o = m.href,
            b = doc.getElementsByTagName("body")[0],
            g = b.getAttribute("style"),
            f = doc.getElementsByTagName("html")[0];
        if (!doc.lang) {
            _$.getDocLang();
        }
        if (win.popup) {
            win.coverage.kill()
        }

        function y(e) {
            if (win.popupIsShow) {
                e.preventDefault()
            }
        }

        function error() {
            _$.removeClass(win.popup, "ws-mob-loading");
            _$.addClass(win.popup, "ws-mob-error");
            win.popup.heading.innerHTML = "Error";
            win.popup.content.innerHTML = "<p>" + _$.label("wsE") + "</p>"
        }

        function sux(uccess, xml) {
            _$.removeClass(win.popup, "ws-mob-loading");
            var x = xml.getElementsByTagName("document"),
                m = xml.getElementsByTagName("message");
            if (x.length) {
                var c = "";
                for (var i = 0, l = x.length; i < l; i++) {
                    var q = x[i];
                    r = q.getAttribute("lang");
                    a = q.getAttribute("label");
                    t = q.getAttribute("type");
                    e = q.getAttribute("href");
                    u = a.split("(")[0];
                    c += '<li><a href="' + e + '" hreflang="' + r + '" lang="' + r + '" title="' + a + '">' + u + ' (' + r + ')</a></li>';
                }
                win.popup.heading.innerHTML = "Choose translations";
                win.popup.content.innerHTML = "<ul>" + c + "</ul>";
                if (win.popupScroller) {
                    win.popupScroller.destroy();
                    win.popupScroller = null;
                }
                if (isIE && isIE < 9) {} else {
                    win.popupScroller = new iScroll('ws-mob-wrapper');
                }
                win.popup.content.style.overflow = "auto";

                // close on click
                var allLinks = (win.popup.content).getElementsByTagName("a");
                if (allLinks.length) {
                    for (var i = 0, l = allLinks.length; i < l; i++) {
                        _$.addEvent(allLinks[i], "click", function() {
                            win.coverage.kill();
                            return false;
                        });
                    }
                }


            } else if (m[0]) {
                _$.addClass(win.popup, "ws-mob-error");
                win.popup.heading.innerHTML = _$.label("wsR");
                win.popup.content.innerHTML = "<p>" + m[0].childNodes[0].nodeValue + "</p>"
            }
        }
        var c = '<div class="ws-mob"><div class="ws-mob-header"><span>';
        c += (!isModal) ? _$.label("wsL") : "Choose translations";
        c += '</span><a href="javascript:coverage.kill()"><b>X</b><span></span></a>';
        c += '</div><div id="ws-mob-wrapper" class="ws-mob-wrapper"><div id="ws-mob-content" class="ws-mob-content"><ul>';
        if (isModal) {
            var q = elm.parentNode.getElementsByTagName("span")[2];
            c += (q.innerHTML).replace(/<a/ig, "<li><a").replace(/<\/a>/ig, "</a></li>");
        }
        c += '</ul></div></div></div>';
        var j = doc.createElement("div"),
            m = win.innerWidth || docType.clientWidth;
        j.innerHTML = c;
        win.popupIsShow = true;
        b.appendChild(j);
        j.className = (isMobile) ? "ws-mob-box" : "ws-mob-box-desktop";
        j.className += (m <= 533 && isMobile) ? " ws-mob-full" : "";
        j.className += (isModal) ? " ws-mob-modal" : " ws-mob-loading";
        win.popup = j;
        win.popup.heading = j.getElementsByTagName("span")[0];
        win.popup.content = j.getElementsByTagName("div")[3];

        function ch(ange) {
            if (win.popupIsShow) {
                setTimeout(function() {
                    var v = _$.getViewport(),
                        st = docType.scrollTop || doc.body.scrollTop;
                    win.popup.style.top = st + "px";
                    win.popup.style.height = v.h + "px";
                }, 250);
            }
        }
        var v = _$.getViewport(),
            st = docType.scrollTop || doc.body.scrollTop;
        win.popup.style.top = st + "px";
        win.popup.style.height = v.h + "px";
        j.getElementsByTagName("a")[0].focus();
        _$.addEvent(doc, "touchmove", y);
        if (isModal) {
            if (isIE && isIE < 9) {} else {
                win.popupScroller = new iScroll('ws-mob-wrapper');
            }
        }
        win.coverage.kill = function() {
            _$.remove(win.popup);
            win.popup = null;
            if (win.popupScroller) {
                win.popupScroller.destroy();
                win.popupScroller = null
            };
            win.popupIsShow = false;
            elm.focus()
        }
        if (!win.popupOrientation) {
            _$.addEvent(win, "orientationchange", ch);
            win.popupOrientation = true;
        }
        if (!isModal) {
            setTimeout(function() {
                _$.load({
                    "url": coverage,
                    "success": sux,
                    "error": error
                });
            }, 500)
        }
    }

});
window.coverage = _$.coverage;
var webservice = {
    popup: _$.coverage
};

// iScroll Lite base on iScroll v4.1.6 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org Released under MIT license, http://cubiq.org/license
(function() {
    var m = Math,
        mround = function(r) {
            return r >> 0
        },
        vv = (/webkit/i).test(navigator.appVersion) ? 'webkit' : (/firefox/i).test(navigator.userAgent) ? 'Moz' : 'opera' in window ? 'O' : '',
        isAndroid = (/android/gi).test(navigator.appVersion),
        isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
        isPlaybook = (/playbook/gi).test(navigator.appVersion),
        isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
        has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
        hasTouch = 'ontouchstart' in window && !isTouchPad,
        hasTransform = vv + 'Transform' in document.documentElement.style,
        hasTransitionEnd = isIDevice || isPlaybook,
        nextFrame = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                return setTimeout(a, 17)
            }
        })(),
        cancelFrame = (function() {
            return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        })(),
        RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
        START_EV = hasTouch ? 'touchstart' : 'mousedown',
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
        END_EV = hasTouch ? 'touchend' : 'mouseup',
        CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
        trnOpen = 'translate' + (has3d ? '3d(' : '('),
        trnClose = has3d ? ',0)' : ')',
        iScroll = function(a, b) {
            var c = this,
                doc = document,
                i;
            c.wrapper = typeof a == 'object' ? a : doc.getElementById(a);
            c.wrapper.style.overflow = 'hidden';
            c.scroller = c.wrapper.children[0];
            c.options = {
                hScroll: true,
                vScroll: true,
                x: 0,
                y: 0,
                bounce: true,
                bounceLock: false,
                momentum: true,
                lockDirection: true,
                useTransform: true,
                useTransition: false,
                onRefresh: null,
                onBeforeScrollStart: function(e) {
                    e.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null
            };
            for (i in b) c.options[i] = b[i];
            c.x = c.options.x;
            c.y = c.options.y;
            c.options.useTransform = hasTransform ? c.options.useTransform : false;
            c.options.hScrollbar = c.options.hScroll && c.options.hScrollbar;
            c.options.vScrollbar = c.options.vScroll && c.options.vScrollbar;
            c.options.useTransition = hasTransitionEnd && c.options.useTransition;
            c.scroller.style[vv + 'TransitionProperty'] = c.options.useTransform ? '-' + vv.toLowerCase() + '-transform' : 'top left';
            c.scroller.style[vv + 'TransitionDuration'] = '0';
            c.scroller.style[vv + 'TransformOrigin'] = '0 0';
            if (c.options.useTransition) c.scroller.style[vv + 'TransitionTimingFunction'] = 'cubic-bezier(0.33,0.66,0.66,1)';
            if (c.options.useTransform) c.scroller.style[vv + 'Transform'] = trnOpen + c.x + 'px,' + c.y + 'px' + trnClose;
            else c.scroller.style.cssText += ';position:absolute;top:' + c.y + 'px;left:' + c.x + 'px';
            c.refresh();
            c._bind(RESIZE_EV, window);
            c._bind(START_EV);
            if (!hasTouch) c._bind('mouseout', c.wrapper)
        };
    iScroll.prototype = {
        enabled: true,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        handleEvent: function(e) {
            var a = this;
            switch (e.type) {
                case START_EV:
                    if (!hasTouch && e.button !== 0) return;
                    a._start(e);
                    break;
                case MOVE_EV:
                    a._move(e);
                    break;
                case END_EV:
                case CANCEL_EV:
                    a._end(e);
                    break;
                case RESIZE_EV:
                    a._resize();
                    break;
                case 'mouseout':
                    a._mouseout(e);
                    break;
                case 'webkitTransitionEnd':
                    a._transitionEnd(e);
                    break
            }
        },
        _resize: function() {
            this.refresh()
        },
        _pos: function(x, y) {
            x = this.hScroll ? x : 0;
            y = this.vScroll ? y : 0;
            if (this.options.useTransform) {
                this.scroller.style[vv + 'Transform'] = trnOpen + x + 'px,' + y + 'px' + trnClose + ' scale(' + this.scale + ')'
            } else {
                x = mround(x);
                y = mround(y);
                this.scroller.style.left = x + 'px';
                this.scroller.style.top = y + 'px'
            }
            this.x = x;
            this.y = y
        },
        _start: function(e) {
            var a = this,
                point = hasTouch ? e.touches[0] : e,
                matrix, x, y;
            if (!a.enabled) return;
            if (a.options.onBeforeScrollStart) a.options.onBeforeScrollStart.call(a, e);
            if (a.options.useTransition) a._transitionTime(0);
            a.moved = false;
            a.animating = false;
            a.zoomed = false;
            a.distX = 0;
            a.distY = 0;
            a.absDistX = 0;
            a.absDistY = 0;
            a.dirX = 0;
            a.dirY = 0;
            if (a.options.momentum) {
                if (a.options.useTransform) {
                    matrix = getComputedStyle(a.scroller, null)[vv + 'Transform'].replace(/[^0-9-.,]/g, '').split(',');
                    x = matrix[4] * 1;
                    y = matrix[5] * 1
                } else {
                    x = getComputedStyle(a.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
                    y = getComputedStyle(a.scroller, null).top.replace(/[^0-9-]/g, '') * 1
                }
                if (x != a.x || y != a.y) {
                    if (a.options.useTransition) a._unbind('webkitTransitionEnd');
                    else cancelFrame(a.aniTime);
                    a.steps = [];
                    a._pos(x, y)
                }
            }
            a.startX = a.x;
            a.startY = a.y;
            a.pointX = point.pageX;
            a.pointY = point.pageY;
            a.startTime = e.timeStamp || Date.now();
            if (a.options.onScrollStart) a.options.onScrollStart.call(a, e);
            a._bind(MOVE_EV);
            a._bind(END_EV);
            a._bind(CANCEL_EV)
        },
        _move: function(e) {
            var a = this,
                point = hasTouch ? e.touches[0] : e,
                deltaX = point.pageX - a.pointX,
                deltaY = point.pageY - a.pointY,
                newX = a.x + deltaX,
                newY = a.y + deltaY,
                timestamp = e.timeStamp || Date.now();
            if (a.options.onBeforeScrollMove) a.options.onBeforeScrollMove.call(a, e);
            a.pointX = point.pageX;
            a.pointY = point.pageY;
            if (newX > 0 || newX < a.maxScrollX) {
                newX = a.options.bounce ? a.x + (deltaX / 2) : newX >= 0 || a.maxScrollX >= 0 ? 0 : a.maxScrollX
            }
            if (newY > 0 || newY < a.maxScrollY) {
                newY = a.options.bounce ? a.y + (deltaY / 2) : newY >= 0 || a.maxScrollY >= 0 ? 0 : a.maxScrollY
            }
            a.distX += deltaX;
            a.distY += deltaY;
            a.absDistX = m.abs(a.distX);
            a.absDistY = m.abs(a.distY);
            if (a.absDistX < 6 && a.absDistY < 6) {
                return
            }
            if (a.options.lockDirection) {
                if (a.absDistX > a.absDistY + 5) {
                    newY = a.y;
                    deltaY = 0
                } else if (a.absDistY > a.absDistX + 5) {
                    newX = a.x;
                    deltaX = 0
                }
            }
            a.moved = true;
            a._pos(newX, newY);
            a.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            a.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
            if (timestamp - a.startTime > 300) {
                a.startTime = timestamp;
                a.startX = a.x;
                a.startY = a.y
            }
            if (a.options.onScrollMove) a.options.onScrollMove.call(a, e)
        },
        _end: function(e) {
            if (hasTouch && e.touches.length != 0) return;
            var a = this,
                point = hasTouch ? e.changedTouches[0] : e,
                target, ev, momentumX = {
                    dist: 0,
                    time: 0
                },
                momentumY = {
                    dist: 0,
                    time: 0
                },
                duration = (e.timeStamp || Date.now()) - a.startTime,
                newPosX = a.x,
                newPosY = a.y,
                newDuration;
            a._unbind(MOVE_EV);
            a._unbind(END_EV);
            a._unbind(CANCEL_EV);
            if (a.options.onBeforeScrollEnd) a.options.onBeforeScrollEnd.call(a, e);
            if (!a.moved) {
                if (hasTouch) {
                    target = point.target;
                    while (target.nodeType != 1) target = target.parentNode;
                    if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                        ev = document.createEvent('MouseEvents');
                        ev.initMouseEvent('click', true, true, e.view, 1, point.screenX, point.screenY, point.clientX, point.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                        ev._fake = true;
                        target.dispatchEvent(ev)
                    }
                }
                a._resetPos(200);
                if (a.options.onTouchEnd) a.options.onTouchEnd.call(a, e);
                return
            }
            if (duration < 300 && a.options.momentum) {
                momentumX = newPosX ? a._momentum(newPosX - a.startX, duration, -a.x, a.scrollerW - a.wrapperW + a.x, a.options.bounce ? a.wrapperW : 0) : momentumX;
                momentumY = newPosY ? a._momentum(newPosY - a.startY, duration, -a.y, (a.maxScrollY < 0 ? a.scrollerH - a.wrapperH + a.y : 0), a.options.bounce ? a.wrapperH : 0) : momentumY;
                newPosX = a.x + momentumX.dist;
                newPosY = a.y + momentumY.dist;
                if ((a.x > 0 && newPosX > 0) || (a.x < a.maxScrollX && newPosX < a.maxScrollX)) momentumX = {
                    dist: 0,
                    time: 0
                };
                if ((a.y > 0 && newPosY > 0) || (a.y < a.maxScrollY && newPosY < a.maxScrollY)) momentumY = {
                    dist: 0,
                    time: 0
                }
            }
            if (momentumX.dist || momentumY.dist) {
                newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);
                a.scrollTo(mround(newPosX), mround(newPosY), newDuration);
                if (a.options.onTouchEnd) a.options.onTouchEnd.call(a, e);
                return
            }
            a._resetPos(200);
            if (a.options.onTouchEnd) a.options.onTouchEnd.call(a, e)
        },
        _resetPos: function(a) {
            var b = this,
                resetX = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
                resetY = b.y >= 0 || b.maxScrollY > 0 ? 0 : b.y < b.maxScrollY ? b.maxScrollY : b.y;
            if (resetX == b.x && resetY == b.y) {
                if (b.moved) {
                    if (b.options.onScrollEnd) b.options.onScrollEnd.call(b);
                    b.moved = false
                }
                return
            }
            b.scrollTo(resetX, resetY, a || 0)
        },
        _mouseout: function(e) {
            var t = e.relatedTarget;
            if (!t) {
                this._end(e);
                return
            }
            while (t = t.parentNode)
                if (t == this.wrapper) return;
            this._end(e)
        },
        _transitionEnd: function(e) {
            var a = this;
            if (e.target != a.scroller) return;
            a._unbind('webkitTransitionEnd');
            a._startAni()
        },
        _startAni: function() {
            var b = this,
                startX = b.x,
                startY = b.y,
                startTime = Date.now(),
                step, easeOut, animate;
            if (b.animating) return;
            if (!b.steps.length) {
                b._resetPos(400);
                return
            }
            step = b.steps.shift();
            if (step.x == startX && step.y == startY) step.time = 0;
            b.animating = true;
            b.moved = true;
            if (b.options.useTransition) {
                b._transitionTime(step.time);
                b._pos(step.x, step.y);
                b.animating = false;
                if (step.time) b._bind('webkitTransitionEnd');
                else b._resetPos(0);
                return
            }
            animate = function() {
                var a = Date.now(),
                    newX, newY;
                if (a >= startTime + step.time) {
                    b._pos(step.x, step.y);
                    b.animating = false;
                    if (b.options.onAnimationEnd) b.options.onAnimationEnd.call(b);
                    b._startAni();
                    return
                }
                a = (a - startTime) / step.time - 1;
                easeOut = m.sqrt(1 - a * a);
                newX = (step.x - startX) * easeOut + startX;
                newY = (step.y - startY) * easeOut + startY;
                b._pos(newX, newY);
                if (b.animating) b.aniTime = nextFrame(animate)
            };
            animate()
        },
        _transitionTime: function(a) {
            this.scroller.style[vv + 'TransitionDuration'] = a + 'ms'
        },
        _momentum: function(a, b, c, d, e) {
            var f = 0.0006,
                speed = m.abs(a) / b,
                newDist = (speed * speed) / (2 * f),
                newTime = 0,
                outsideDist = 0;
            if (a > 0 && newDist > c) {
                outsideDist = e / (6 / (newDist / speed * f));
                c = c + outsideDist;
                speed = speed * c / newDist;
                newDist = c
            } else if (a < 0 && newDist > d) {
                outsideDist = e / (6 / (newDist / speed * f));
                d = d + outsideDist;
                speed = speed * d / newDist;
                newDist = d
            }
            newDist = newDist * (a < 0 ? -1 : 1);
            newTime = speed / f;
            return {
                dist: newDist,
                time: mround(newTime)
            }
        },
        _offset: function(a) {
            var b = -a.offsetLeft,
                top = -a.offsetTop;
            while (a = a.offsetParent) {
                b -= a.offsetLeft;
                top -= a.offsetTop
            }
            return {
                left: b,
                top: top
            }
        },
        _bind: function(a, b, c) {
            (b || this.scroller).addEventListener(a, this, !!c)
        },
        _unbind: function(a, b, c) {
            (b || this.scroller).removeEventListener(a, this, !!c)
        },
        destroy: function() {
            var a = this;
            a.scroller.style[vv + 'Transform'] = '';
            a._unbind(RESIZE_EV, window);
            a._unbind(START_EV);
            a._unbind(MOVE_EV);
            a._unbind(END_EV);
            a._unbind(CANCEL_EV);
            a._unbind('mouseout', a.wrapper);
            if (a.options.useTransition) a._unbind('webkitTransitionEnd');
            if (a.options.onDestroy) a.options.onDestroy.call(a)
        },
        refresh: function() {
            var a = this,
                offset;
            a.wrapperW = a.wrapper.clientWidth;
            a.wrapperH = a.wrapper.clientHeight;
            a.scrollerW = a.scroller.offsetWidth;
            a.scrollerH = a.scroller.offsetHeight;
            a.maxScrollX = a.wrapperW - a.scrollerW;
            a.maxScrollY = a.wrapperH - a.scrollerH;
            a.dirX = 0;
            a.dirY = 0;
            a.hScroll = a.options.hScroll && a.maxScrollX < 0;
            a.vScroll = a.options.vScroll && (!a.options.bounceLock && !a.hScroll || a.scrollerH > a.wrapperH);
            offset = a._offset(a.wrapper);
            a.wrapperOffsetLeft = -offset.left;
            a.wrapperOffsetTop = -offset.top;
            a.scroller.style[vv + 'TransitionDuration'] = '0';
            a._resetPos(200)
        },
        scrollTo: function(x, y, a, b) {
            var c = this,
                step = x,
                i, l;
            c.stop();
            if (!step.length) step = [{
                x: x,
                y: y,
                time: a,
                relative: b
            }];
            for (i = 0, l = step.length; i < l; i++) {
                if (step[i].relative) {
                    step[i].x = c.x - step[i].x;
                    step[i].y = c.y - step[i].y
                }
                c.steps.push({
                    x: step[i].x,
                    y: step[i].y,
                    time: step[i].time || 0
                })
            }
            c._startAni()
        },
        scrollToElement: function(a, b) {
            var c = this,
                pos;
            a = a.nodeType ? a : c.scroller.querySelector(a);
            if (!a) return;
            pos = c._offset(a);
            pos.left += c.wrapperOffsetLeft;
            pos.top += c.wrapperOffsetTop;
            pos.left = pos.left > 0 ? 0 : pos.left < c.maxScrollX ? c.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < c.maxScrollY ? c.maxScrollY : pos.top;
            b = b === undefined ? m.max(m.abs(pos.left) * 2, m.abs(pos.top) * 2) : b;
            c.scrollTo(pos.left, pos.top, b)
        },
        disable: function() {
            this.stop();
            this._resetPos(0);
            this.enabled = false;
            this._unbind(MOVE_EV);
            this._unbind(END_EV);
            this._unbind(CANCEL_EV)
        },
        enable: function() {
            this.enabled = true
        },
        stop: function() {
            cancelFrame(this.aniTime);
            this.steps = [];
            this.moved = false;
            this.animating = false
        }
    };
    if (typeof exports !== 'undefined') exports.iScroll = iScroll;
    else window.iScroll = iScroll
})();

/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/
(function(a) {
    function m() {
        d.setAttribute("content", g), h = !0
    }

    function n() {
        d.setAttribute("content", f), h = !1
    }

    function o(b) {
        l = b.accelerationIncludingGravity, i = Math.abs(l.x), j = Math.abs(l.y), k = Math.abs(l.z), (!a.orientation || a.orientation === 180) && (i > 7 || (k > 6 && j < 8 || k < 8 && j > 6) && i > 5) ? h && n() : h || m()
    }
    var b = navigator.userAgent;
    if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(b) && b.indexOf("AppleWebKit") > -1)) return;
    var c = a.document;
    if (!c.querySelector) return;
    var d = c.querySelector("meta[name=viewport]"),
        e = d && d.getAttribute("content"),
        f = e + ",maximum-scale=1",
        g = e + ",maximum-scale=10",
        h = !0,
        i, j, k, l;
    if (!d) return;
    a.addEventListener("orientationchange", m, !1), a.addEventListener("devicemotion", o, !1)
})(this);