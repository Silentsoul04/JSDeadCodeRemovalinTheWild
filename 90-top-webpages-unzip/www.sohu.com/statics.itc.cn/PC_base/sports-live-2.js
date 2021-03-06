!(function(t) {
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { exports: {}, id: r, loaded: !1 });
    return t[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  var e = {};
  (n.m = t), (n.c = e), (n.p = ""), n(0);
})([
  function(t, n, e) {
    var r = e(1);
    !(function(t, n, e) {
      t.plugin.define("test_plugin", r);
    })(window.sohu_mp, window.Backbone, window.jQuery);
  },
  function(t, n, e) {
    e(2);
    t.exports = {
      initialize: function(t) {
        console.log(1), this.xdomainrequest(jQuery), this.pullData(t);
      },
      sportsDataUrl: "//ydgf.sohu.com/schedule/index.json",
      headerUrl: "//apiv2.sohu.com/apiV2/re/headers?channelId=17",
      events: {
        "mousemove #sport2017Live": "showLive",
        "mousemove #sport2017Old": "showOld"
      },
      xdomainrequest: function(t) {
        if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
          var n = /^https?:\/\//i,
            e = /^get|post$/i,
            r = new RegExp("^" + location.protocol, "i");
          t.ajaxTransport("* text html xml json", function(i, s, o) {
            if (
              i.crossDomain &&
              i.async &&
              e.test(i.type) &&
              n.test(i.url) &&
              r.test(i.url)
            ) {
              var p = null;
              return {
                send: function(n, e) {
                  var r = "",
                    o = (s.dataType || "").toLowerCase();
                  (p = new XDomainRequest()),
                    /^\d+$/.test(s.timeout) && (p.timeout = s.timeout),
                    (p.ontimeout = function() {
                      e(500, "timeout");
                    }),
                    (p.onload = function() {
                      var n =
                          "Content-Length: " +
                          p.responseText.length +
                          "\r\nContent-Type: " +
                          p.contentType,
                        r = { code: 200, message: "success" },
                        i = { text: p.responseText };
                      try {
                        if ("html" === o || /text\/html/i.test(p.contentType))
                          i.html = p.responseText;
                        else if (
                          "json" === o ||
                          ("text" !== o && /\/json/i.test(p.contentType))
                        )
                          try {
                            i.json = t.parseJSON(p.responseText);
                          } catch (t) {
                            (r.code = 500), (r.message = "parseerror");
                          }
                        else if (
                          "xml" === o ||
                          ("text" !== o && /\/xml/i.test(p.contentType))
                        ) {
                          var s = new ActiveXObject("Microsoft.XMLDOM");
                          s.async = !1;
                          try {
                            s.loadXML(p.responseText);
                          } catch (t) {
                            s = void 0;
                          }
                          if (
                            !s ||
                            !s.documentElement ||
                            s.getElementsByTagName("parsererror").length
                          )
                            throw ((r.code = 500),
                            (r.message = "parseerror"),
                            "Invalid XML: " + p.responseText);
                          i.xml = s;
                        }
                      } catch (t) {
                        throw t;
                      } finally {
                        e(r.code, r.message, i, n);
                      }
                    }),
                    (p.onprogress = function() {}),
                    (p.onerror = function() {
                      e(500, "error", { text: p.responseText });
                    }),
                    s.data &&
                      (r =
                        "string" === t.type(s.data) ? s.data : t.param(s.data)),
                    p.open(i.type, i.url),
                    p.send(r);
                },
                abort: function() {
                  p && p.abort();
                }
              };
            }
          });
        }
      },
      render: function(t) {
        var n = e(6);
        this.template = _.template(n);
        var t = this.fixItem(t);
        this.$el.html(this.template(t));
      },
      nextTick: function(t) {
        setTimeout(t, 0);
      },
      pullData: function(t) {
        var n = this;
        $.ajax({
          url: n.sportsDataUrl,
          dataType: "json",
          type: "GET",
          success: function(t) {
            n.render(t);
            if (t.start && t.start.length === 0) {
                n.showOld();
                n.$el.find("#sport2017Live").remove();
            }
            if (t.end && t.end.length === 0) {
              n.showLive();
              n.$el.find('#sport2017Old').remove();
            }
          },
          error: function(t) {
            t &&
            t.responseJSON &&
            t.responseJSON.start &&
            t.responseJSON.end &&
            t.responseJSON.o
              ? n.render(t.responseJSON)
              : (n.$el.find("#sport2017EndList").html("??????????????????"),
                n.$el.find("#sport2017LiveList").html("??????????????????"),
                console.log("???????????????????????????"),
                console.log(t));
          }
        });
      },
      fixItem: function(t) {
        return (
          t.start.forEach(function(t) {
            t.ttt = new Date(Date.parse(t.match_date.replace(/-/g, "/")));
          }),
          t
        );
      },
      showLive: function() {
        this.$el.find("#sport2017Live").attr("class", "active"),
          console.log(this.$el.find("#sport2017Live").attr("class")),
          this.$el.find("#sport2017Old").attr("class", ""),
          this.$el
            .find("#sport2017EndList")
            .attr("class", "sport2017-list none"),
          this.$el.find("#sport2017LiveList").attr("class", "sport2017-list");
      },
      showOld: function() {
        this.$el.find("#sport2017Old").attr("class", "active"),
          this.$el.find("#sport2017Live").attr("class", ""),
          this.$el
            .find("#sport2017LiveList")
            .attr("class", "sport2017-list none"),
          this.$el.find("#sport2017EndList").attr("class", "sport2017-list");
      },
      pullSwiperData: function(t) {
        var n = this;
        $.ajax({
          url: this.headerUrl,
          dataType: "jsonp",
          type: "GET",
          success: function(e) {
            var r = [];
            e.list.forEach(function(t) {
              r.push({ focusImg: t.focusImg, path: t.path, title: t.title });
            }),
              t &&
                t.api("create_swiper", { el: n.$el.find(".swiper"), data: r });
          },
          error: function(t) {
            console.log("????????????????????????");
          }
        });
      }
    };
  },
  function(t, n, e) {
    var r = e(3);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    e(5)(r, {});
    r.locals && (t.exports = r.locals);
  },
  function(t, n, e) {
    (n = t.exports = e(4)()),
      n.push([
        t.id,
        '#hot-news-business {\n  width: 300px;\n}\n#sport2017 {\n  width: 300px;\n  height: auto;\n  background: #f9f9f9;\n  color: #191919;\n  padding-bottom: 15px;\n}\n#sport2017 .sport2017_tab div.active {\n  border-bottom: 2px solid #fdd000;\n}\n#sport2017 .sport2017_tab div {\n  width: 60px;\n  height: 28px;\n  font-size: 14px;\n  cursor: pointer;\n}\n#sport2017Live {\n  float: left;\n  text-align: center;\n}\n#sport2017Old {\n  float: right;\n  text-align: center;\n}\n#sport2017 .sport2017-list.none {\n  display: none;\n}\n#sport2017 .sport2017-list {\n  width: 100%;\n  margin-top: 10px;\n}\n#sport2017 .sport2017-list a {\n  text-decoration: none;\n}\n#sport2017 .sport2017-list .sport2017-item {\n  position: relative;\n  width: 100%;\n  height: 66px;\n  cursor: pointer;\n}\n#sport2017 .sport2017-list .sport2017-item:hover .sport2017-f {\n  display: block;\n}\n#sport2017 .sport2017-list .sport2017-content {\n  position: relative;\n  width: 270px;\n  border-bottom: 1px solid #eee;\n  height: 100%;\n  margin: 0 auto;\n  color: #191919;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017pic {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin-top: 15px;\n  display: inline-block;\n  vertical-align: top;\n  float: left;\n  overflow: hidden;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017home {\n  display: inline-block;\n  vertical-align: middle;\n  width: 70px;\n  height: 40px;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 12px;\n  float: left;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017home div {\n  line-height: 16px;\n  min-height: 22px;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017away {\n  display: inline-block;\n  vertical-align: middle;\n  width: 70px;\n  height: 40px;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 12px;\n  margin-left: 0px;\n  float: left;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017away div {\n  line-height: 16px;\n  min-height: 22px;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017score {\n  color: #f43d60;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017vs {\n  width: 60px;\n  height: 40px;\n  font-size: 16px;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 12px;\n  margin-left: 0px;\n  line-height: 20px;\n  float: left;\n  color: #6c6f75;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017vs .sport2017type {\n  font-size: 12px;\n  color: #6c6f75;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017pic:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  display: block;\n  background: url(//i0.itc.cn/20170327/366b_4668e365_e1ef_1288_e80a_16f0cba37d06_1.png) center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-f {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  text-align: center;\n}\n#sport2017 .sport2017-list .sport2017-content:hover.sport2017-f {\n  display: block;\n}\n#sport2017 .sport2017-list .sport2017-content .sport2017tip {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 17px;\n  text-align: center;\n  height: 58px;\n  padding: 2px 3px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-f {\n  color: #fa2f6d;\n  background: url(//i0.itc.cn/20170303/366b_04cb47be_dd57_7de0_89a4_614dfb385dd9_2.png) repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-f .live-link {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #fa2f6d;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 23px;\n  padding-right: 30px;\n  display: inline-block;\n  background: url(//i0.itc.cn/20170306/366b_dfcfc505_51ae_d67f_98bd_0c13b6f6865b_1.png) left center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-f .live-data {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #fa2f6d;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 23px;\n  background: url(//i3.itc.cn/20170306/366b_47ea2754_57d3_3d24_9e6f_c33ae3778ca6_1.png) left center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-f .will-link {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #0b63dd;\n  padding-left: 50px;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 23px;\n  display: inline-block;\n  padding-right: 30px;\n  background: url(//i1.itc.cn/20170306/366b_6ce0d448_d88c_94ae_26f8_aa7abbe4dd72_1.png) 30% center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-f .will-data {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #0b63dd;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 23px;\n  background: url(//i1.itc.cn/20170306/366b_2fa51434_63fb_8fba_ea5e_38c0d8dfe355_1.png) left center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f .end-link {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #191919;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 23px;\n  padding-right: 30px;\n  display: inline-block;\n  background: url(//i3.itc.cn/20170306/366b_bedf33b8_f77a_8a0d_71e4_5eff28a7a44c_1.png) left center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f .end-data {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #191919;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 23px;\n  padding-right: 30px;\n  display: inline-block;\n  background: url(//i3.itc.cn/20170306/366b_a9d402dc_210d_c65e_342b_350c4a2d1692_1.png) left center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f .end-result {\n  width: 30px;\n  height: 20px;\n  line-height: 20px;\n  color: #191919;\n  padding-left: 20px;\n  font-size: 14px;\n  margin-top: 23px;\n  display: inline-block;\n  background: url(//i2.itc.cn/20170306/366b_62a5b9e1_977d_e9e4_6caf_2dfd317f53e5_1.png) left center no-repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-f {\n  color: #0b62dc;\n  background: url(//i1.itc.cn/20170303/366b_04cb47be_dd57_7de0_89a4_614dfb385dd9_1.png) repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-f {\n  color: #191919;\n  background: url(//i3.itc.cn/20170303/366b_04cb47be_dd57_7de0_89a4_614dfb385dd9_3.png) repeat;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017score {\n  color: #999999;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-will .sport2017-content .sport2017tip {\n  background: #e2eeff;\n  color: #5094f1;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-live .sport2017-content .sport2017tip {\n  background: #ffe3e8;\n  color: #fa2f6d;\n  height: 42px;\n  padding: 10px 3px;\n  font-size: 12px;\n  line-height: 14px;\n}\n#sport2017 .sport2017-list .sport2017-item.sport2017-end .sport2017-content .sport2017tip {\n  background: #e9e9e9;\n  color: #999999;\n  height: 42px;\n  padding: 10px 3px;\n  font-size: 12px;\n  line-height: 14px;\n}\n#sport2017 .menu li {\n  font-size: 14px;\n  float: left;\n  height: 36px;\n  line-height: 36px;\n  width: 33.3%;\n  text-align: center;\n  cursor: pointer;\n}\n#sport2017 .menuC2 li {\n  width: 50%;\n  border-radius: 3px;\n}\n#sport2017 .menu {\n  width: 270px;\n  margin: 15px auto 0;\n  height: 31px;\n}\n#sport2017 .menu li.active {\n  background-color: #eee;\n  color: #191919;\n}\n',
        ""
      ]);
  },
  function(t, n) {
    t.exports = function() {
      var t = [];
      return (
        (t.toString = function() {
          for (var t = [], n = 0; n < this.length; n++) {
            var e = this[n];
            e[2] ? t.push("@media " + e[2] + "{" + e[1] + "}") : t.push(e[1]);
          }
          return t.join("");
        }),
        (t.i = function(n, e) {
          "string" == typeof n && (n = [[null, n, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var s = this[i][0];
            "number" == typeof s && (r[s] = !0);
          }
          for (i = 0; i < n.length; i++) {
            var o = n[i];
            ("number" == typeof o[0] && r[o[0]]) ||
              (e && !o[2]
                ? (o[2] = e)
                : e && (o[2] = "(" + o[2] + ") and (" + e + ")"),
              t.push(o));
          }
        }),
        t
      );
    };
  },
  function(t, n, e) {
    function r(t, n) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e],
          i = h[r.id];
        if (i) {
          i.refs++;
          for (var s = 0; s < i.parts.length; s++) i.parts[s](r.parts[s]);
          for (; s < r.parts.length; s++) i.parts.push(l(r.parts[s], n));
        } else {
          for (var o = [], s = 0; s < r.parts.length; s++)
            o.push(l(r.parts[s], n));
          h[r.id] = { id: r.id, refs: 1, parts: o };
        }
      }
    }
    function i(t) {
      for (var n = [], e = {}, r = 0; r < t.length; r++) {
        var i = t[r],
          s = i[0],
          o = i[1],
          p = i[2],
          a = i[3],
          l = { css: o, media: p, sourceMap: a };
        e[s] ? e[s].parts.push(l) : n.push((e[s] = { id: s, parts: [l] }));
      }
      return n;
    }
    function s(t, n) {
      var e = g(),
        r = b[b.length - 1];
      if ("top" === t.insertAt)
        r
          ? r.nextSibling
            ? e.insertBefore(n, r.nextSibling)
            : e.appendChild(n)
          : e.insertBefore(n, e.firstChild),
          b.push(n);
      else {
        if ("bottom" !== t.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
          );
        e.appendChild(n);
      }
    }
    function o(t) {
      t.parentNode.removeChild(t);
      var n = b.indexOf(t);
      n >= 0 && b.splice(n, 1);
    }
    function p(t) {
      var n = document.createElement("style");
      return (n.type = "text/css"), s(t, n), n;
    }
    function a(t) {
      var n = document.createElement("link");
      return (n.rel = "stylesheet"), s(t, n), n;
    }
    function l(t, n) {
      var e, r, i;
      if (n.singleton) {
        var s = m++;
        (e = x || (x = p(n))),
          (r = d.bind(null, e, s, !1)),
          (i = d.bind(null, e, s, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((e = a(n)),
            (r = f.bind(null, e)),
            (i = function() {
              o(e), e.href && URL.revokeObjectURL(e.href);
            }))
          : ((e = p(n)),
            (r = c.bind(null, e)),
            (i = function() {
              o(e);
            }));
      return (
        r(t),
        function(n) {
          if (n) {
            if (
              n.css === t.css &&
              n.media === t.media &&
              n.sourceMap === t.sourceMap
            )
              return;
            r((t = n));
          } else i();
        }
      );
    }
    function d(t, n, e, r) {
      var i = e ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = w(n, i);
      else {
        var s = document.createTextNode(i),
          o = t.childNodes;
        o[n] && t.removeChild(o[n]),
          o.length ? t.insertBefore(s, o[n]) : t.appendChild(s);
      }
    }
    function c(t, n) {
      var e = n.css,
        r = n.media;
      if ((r && t.setAttribute("media", r), t.styleSheet))
        t.styleSheet.cssText = e;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(e));
      }
    }
    function f(t, n) {
      var e = n.css,
        r = n.sourceMap;
      r &&
        (e +=
          "\n/*# sourceMappingURL=data:application/json;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
          " */");
      var i = new Blob([e], { type: "text/css" }),
        s = t.href;
      (t.href = URL.createObjectURL(i)), s && URL.revokeObjectURL(s);
    }
    var h = {},
      v = function(t) {
        var n;
        return function() {
          return void 0 === n && (n = t.apply(this, arguments)), n;
        };
      },
      u = v(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
      }),
      g = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }),
      x = null,
      m = 0,
      b = [];
    t.exports = function(t, n) {
      (n = n || {}),
        void 0 === n.singleton && (n.singleton = u()),
        void 0 === n.insertAt && (n.insertAt = "bottom");
      var e = i(t);
      return (
        r(e, n),
        function(t) {
          for (var s = [], o = 0; o < e.length; o++) {
            var p = e[o],
              a = h[p.id];
            a.refs--, s.push(a);
          }
          if (t) {
            r(i(t), n);
          }
          for (var o = 0; o < s.length; o++) {
            var a = s[o];
            if (0 === a.refs) {
              for (var l = 0; l < a.parts.length; l++) a.parts[l]();
              delete h[a.id];
            }
          }
        }
      );
    };
    var w = (function() {
      var t = [];
      return function(n, e) {
        return (t[n] = e), t.filter(Boolean).join("\n");
      };
    })();
  },
  function(t, n) {
    t.exports =
      '\x3c!-- <div class="titleR"><span class="tt"><a href="//sports.sohu.com/">??????</a></span></div> --\x3e\r\n\x3c!-- <div class="swiper"></div> --\x3e\r\n\r\n<div id="sport2017" class="clearfix">\r\n\t\x3c!--<div class=\\"sport2017_tab\\">\\r\\n        <div id=\\"sport2017Live\\" class=\\"active\\">????????????</div>\\r\\n        <div id=\\"sport2017Old\\" class=\\"\\">????????????</div>\\r\\n    </div>--\x3e    \r\n\t<div class="sport2017_tab menu menuC2"> \r\n\t    <ul> \r\n    \t\t<li id="sport2017Live" class="active">????????????</li>\r\n    \t\t<li id="sport2017Old" class="">????????????</li> \r\n    \t</ul> \r\n    </div>\r\n    <div id="sport2017LiveList" class="sport2017-list">   \r\n    <%for (var i=0;i<start.length;i++){ %>\r\n        <% if(start[i].status=="0"){%>\r\n        <div class="sport2017-item sport2017-will">\r\n            <div class="sport2017-content">\r\n\t            <div class="sport2017pic"><img src="<%= start[i].home.pic %>" width="30" height="30" alt="" /></div>\r\n\t            <div class="sport2017home">\r\n\t\t            <div><%= start[i].home.name %></div>\r\n\t\t            <div class="sport2017score">\r\n\t\t            \t<%= start[i].ttt.getMonth()+1 %>???<%= start[i].ttt.getDate() %>???\r\n\t\t            </div>\r\n\t            </div> \r\n\t            <div class="sport2017vs">\r\n\t                <div>vs</div>\r\n\t                <div class="sport2017type"><%= start[i].gametype %></div>                \r\n\t            </div>               \r\n\t            <div class="sport2017away">\r\n\t                <div><%= start[i].away.name %></div>                    \r\n\t                <div class="sport2017score"> \r\n\t                \t<%= start[i].ttt.getHours() %>:<%= start[i].ttt.getMinutes()=="0"?"00":start[i].ttt.getMinutes() %>\r\n\t                </div> \r\n\t            </div>       \r\n\t            <div class="sport2017pic"><img src="<%= start[i].away.pic %>" width="30" height="30" alt="" /></div>\r\n\t            \x3c!-- <div class="sport2017tip" style="line-height: 13px;height: 50px;padding: 6px 3px;">????????????\r\n               \t</div> --\x3e\r\n            </div>\r\n            <div class="sport2017-f">\r\n\t            <% if(start[i].url.live !="") {%>\r\n\t            <a href="<%= start[i].url.live %>" target="_blank" class="will-link">??????</a>\r\n\t            <%}%>\r\n\t            <% if(start[i].url.stat !="") {%>               \r\n\t            <a href="<%= start[i].url.stat %>" target="_blank" class="will-data">??????</a><%}%>                \r\n            </div>            \r\n        </div>\r\n        <%}%>\r\n        <% if(start[i].status=="1"){%>\r\n        <div class="sport2017-item sport2017-live">\r\n        \t<div class="sport2017-content">\r\n        \t\t<div class="sport2017pic"><img src="<%= start[i].home.pic %>" width="30" height="30" alt="" /></div>\r\n        \t\t<div class="sport2017home">\r\n        \t\t\t<div><%= start[i].home.name %></div>\r\n        \t\t\t<div class="sport2017score"><%= start[i].home.score %></div>\r\n        \t\t</div>\r\n        \t\t<div class="sport2017vs">\r\n        \t\t\t<div>vs</div>\r\n        \t\t\t<div class="sport2017type"><%= start[i].gametype %></div>\r\n        \t\t</div>\r\n        \t\t<div class="sport2017away">\r\n        \t\t\t<div><%= start[i].away.name %></div>\r\n        \t\t\t<div class="sport2017score"><%= start[i].away.score %></div>\r\n        \t\t</div>\r\n        \t\t<div class="sport2017pic"><img src="<%= start[i].away.pic %>" width="30" height="30" alt="" /></div>\r\n        \t\t\x3c!-- <div class="sport2017tip">?????????</div> --\x3e\r\n        \t</div>                       \r\n        \t<div class="sport2017-f">                        \r\n        \t<% if(start[i].url.live !="") {%>                      \r\n        \t\t<a href="<%= start[i].url.live %>" target="_blank" class="live-link">??????</a>\r\n        \t<%}%>\r\n        \t<% if(start[i].url.stat !="") {%>\r\n        \t\t<a href="<%= start[i].url.stat %>" target="_blank" class="live-data">??????</a>\r\n        \t<%}%>\r\n        \t</div>\r\n        </div>\r\n        <%}%>\r\n    <%}%>\r\n    </div>\r\n    <div id="sport2017EndList" class="sport2017-list none">\r\n    <%  for (var i=0;i<end.length;i++){ %>\r\n        <% if(end[i].status=="2"){%>\r\n        <div class="sport2017-item sport2017-end">\r\n        \t<div class="sport2017-content">\r\n        \t\t<div class="sport2017pic"><img src="<%= end[i].home.pic %>" width="30" height="30" alt="" /></div>\r\n        \t\t<div class="sport2017home">\r\n        \t\t\t<div><%= end[i].home.name %></div>\r\n        \t\t\t<div class="sport2017score"><%= end[i].home.score %></div>\r\n        \t\t</div>\r\n        \t\t<div class="sport2017vs">\r\n        \t\t\t<div>vs</div>\r\n        \t\t\t<div class="sport2017type"><%= end[i].gametype %></div>\r\n        \t\t</div>\r\n       \t\t\t<div class="sport2017away">\r\n        \t\t\t<div><%= end[i].away.name %></div>\r\n        \t\t\t<div class="sport2017score"><%= end[i].away.score %></div>\r\n       \t \t\t</div>\r\n        \t\t<div class="sport2017pic"><img src="<%= end[i].away.pic %>" width="30" height="30" alt="" /></div>\r\n        \t\t\x3c!-- <div class="sport2017tip">?????????</div> --\x3e\r\n       \t\t</div>\r\n        <div class="sport2017-f">\r\n        <%if(end[i].url.photos !=\'\') {%>\r\n        \t<a href="<%= end[i].url.photos %>" target="_blank" class="end-link" <%= (end[i].url.stat ==\'\')&&(end[i].url.news ==\'\')?"style=\'padding-right:0\'":""%>>??????</a>\r\n        <%}%>\r\n        <%if(end[i].url.stat !=\'\') {%>\r\n        \t<a href="<%= end[i].url.stat %>" target="_blank" class="end-data" <%= (end[i].url.photos ==\'\')&&(end[i].url.news ==\'\')?"style=\'padding-right:0\'":""%>>??????</a>\r\n        <%}%>\r\n        <%if(end[i].url.news !=\'\') {%>\r\n        \t<a href="<%= end[i].url.news %>" target="_blank" class="end-result" <%= (end[i].url.photos ==\'\')&&(end[i].url.stat ==\'\')?"style=\'padding-right:0\'":""%>>??????</a>\r\n        <%}%>\r\n        </div>\r\n    </div>\r\n    <%}%>\r\n<%}%>\r\n</div>\r\n</div>\r\n';
  }
]);
