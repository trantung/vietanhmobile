/* Minification failed. Returning unminified contents.
(48,11573): run-time error JS1004: Expected ';'
 */
/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
(function(n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    function ri(n) {
        var t = n.length,
            r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function ui(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if (typeof t == "string") {
            if (re.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }

    function hr(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n
    }

    function ee(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
    }

    function a() {
        (u.addEventListener || event.type === "load" || u.readyState === "complete") && (cr(), i.ready())
    }

    function yr(n, t, r) {
        if (r === undefined && n.nodeType === 1) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u), typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else r = undefined
        }
        return r
    }

    function ei(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando,
                l = n.nodeType,
                o = l ? i.cache : n,
                f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string") return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
                toJSON: i.noop
            }), (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), r !== undefined && (e[i.camelCase(t)] = r), typeof t == "string" ? (s = e[t], s == null && (s = e[i.camelCase(t)])) : s = e, s
        }
    }

    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var e, s, h = n.nodeType,
                f = h ? i.cache : n,
                o = h ? n[i.expando] : i.expando;
            if (f[o]) {
                if (t && (e = u ? f[o] : f[o].data, e)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), s = t.length; s--;) delete e[t[s]];
                    if (u ? !ei(e) : !i.isEmptyObject(e)) return
                }(u || (delete f[o].data, ei(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = null)
            }
        }
    }

    function vt() {
        return !0
    }

    function it() {
        return !1
    }

    function dr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function gr(n) {
        var i = nu.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function f(n, t) {
        var e, u, s = 0,
            r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : undefined;
        if (!r)
            for (r = [], e = n.childNodes || n;
                (u = e[s]) != null; s++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function we(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ou(n) {
        return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type, n
    }

    function su(n) {
        var t = ve.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function li(n, t) {
        for (var u, r = 0;
            (u = n[r]) != null; r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hu(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function be(n, t) {
        var u, e, f;
        if (t.nodeType === 1) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            u === "script" && t.text !== n.text ? (ou(t).text = n.text, su(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
        }
    }

    function cu(t, r) {
        var f, u = i(r.createElement(t)).appendTo(r.body),
            e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
        return u.detach(), e
    }

    function yt(n) {
        var r = u,
            t = ai[n];
        return t || (t = cu(n, r), t !== "none" && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
    }

    function au(n, t) {
        return {
            get: function() {
                var i = n();
                if (i != null) {
                    if (i) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
    }

    function pu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--;)
            if (t = yu[i] + r, t in n) return t;
        return u
    }

    function wu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)(r = n[u], r.style) && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || f !== "none" || (r.style.display = ""), r.style.display === "" && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r), (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; u < s; u++)(r = n[u], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }

    function bu(n, t, i) {
        var r = no.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function ku(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function du(n, t, u) {
        var o = !0,
            f = t === "width" ? n.offsetWidth : n.offsetHeight,
            e = k(n),
            s = r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box";
        if (f <= 0 || f == null) {
            if (f = d(n, t, e), (f < 0 || f == null) && (f = n.style[t]), pt.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + ku(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function nf() {
        return setTimeout(function() {
            rt = undefined
        }), rt = i.now()
    }

    function kt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function tf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function fo(n, t, u) {
        var f, a, p, v, s, w, h, b, l = this,
            y = {},
            o = n.style,
            c = n.nodeType && et(n),
            e = i._data(n, "fxshow");
        u.queue || (s = i._queueHooks(n, "fx"), s.unqueued == null && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function() {
            s.unqueued || w()
        }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx").length || s.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY], h = i.css(n, "display"), b = h === "none" ? i._data(n, "olddisplay") || yt(n.nodeName) : h, b === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && yt(n.nodeName) !== "inline" ? o.zoom = 1 : o.display = "inline-block"));
        u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l.always(function() {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f], ro.exec(a)) {
                if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
                    if (a === "show" && e && e[f] !== undefined) c = !0;
                    else continue;
                y[f] = e && e[f] || i.style(n, f)
            } else h = undefined;
        if (i.isEmptyObject(y))(h === "none" ? yt(n.nodeName) : h) === "inline" && (o.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (f in y) v = tf(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
        }
    }

    function eo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function rf(n, t, r) {
        var e, o, s = 0,
            l = bt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: rt || nf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (eo(h, u.opts.specialEasing); s < l; s++)
            if (e = bt[s].call(u, n, h, u.opts), e) return e;
        return i.map(h, tf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function af(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u.charAt(0) === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function vf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function ao(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0] in i) u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u) return u !== r[0] && r.unshift(u), i[u]
    }

    function vo(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function di(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || po.test(n) ? u(n, i) : di(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }

    function pf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function go() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function wf(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var c = [],
        l = c.slice,
        ir = c.concat,
        ii = c.push,
        rr = c.indexOf,
        ct = {},
        df = ct.toString,
        tt = ct.hasOwnProperty,
        r = {},
        ur = "1.11.2",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ne = /^-ms-/,
        te = /-([\da-z])/gi,
        ie = function(n, t) {
            return t.toUpperCase()
        },
        p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, of, gt, gi, ti, nr, tr, bf, kf;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if ((o = arguments[u]) != null)
                for (f in o)(r = n[f], t = o[f], n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function(n) {
            return i.type(n) === "array"
        },
        isWindow: function(n) {
            return n != null && n == n.window
        },
        isNumeric: function(n) {
            return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n) return tt.call(n, t);
            for (t in n);
            return t === undefined || tt.call(n, t)
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ct[df.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(ne, "ms-").replace(te, ie)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = ri(n);
            if (i) {
                if (e) {
                    for (; r < f; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; r < f; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(gf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (ri(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ii.call(r, n)), r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr) return rr.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; i < r;) n[u++] = t[i++];
            if (r !== r)
                while (t[i] !== undefined) n[u++] = t[i++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = ri(n),
                f = [];
            if (o)
                for (; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return (typeof t == "string" && (f = n[t], t = n, n = f), !i.isFunction(n)) ? undefined : (u = l.call(arguments, 2), r = function() {
                return n.apply(t || this, u.concat(l.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function r(n, t, i, r) {
            var p, s, a, c, w, y, d, v, nt, g;
            if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t || o, i = i || [], c = t.nodeType, typeof n != "string" || !n || c !== 1 && c !== 9 && c !== 11) return i;
            if (!r && l) {
                if (c !== 11 && (p = hr.exec(n)))
                    if (a = p[1]) {
                        if (c === 9)
                            if (s = t.getElementById(a), s && s.parentNode) {
                                if (s.id === a) return i.push(s), i
                            } else return i;
                        else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a) return i.push(s), i
                    } else {
                        if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((a = p[3]) && u.getElementsByClassName) return b.apply(i, t.getElementsByClassName(a)), i
                    }
                if (u.qsa && (!e || !e.test(n))) {
                    if (v = d = f, nt = t, g = c !== 1 && n, c === 1 && t.nodeName.toLowerCase() !== "object") {
                        for (y = ft(n), (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", w = y.length; w--;) y[w] = v + vt(y[w]);
                        nt = dt.test(n) && ti(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)), i
                    } catch (tt) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return oi(n.replace(lt, "$1"), t, i, r)
        }

        function gt() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function c(n) {
            return n[f] = !0, n
        }

        function v(n) {
            var t = o.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ni(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function tt(n) {
            return c(function(t) {
                return t = +t, c(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ti(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }

        function bi() {}

        function vt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function ii(n, t, i) {
            var r = t.dir,
                u = i && r === "parentNode",
                e = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (t.nodeType === 1 || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o)) return !0
                        }
            }
        }

        function ri(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function vr(n, t, i) {
            for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
            return i
        }

        function yt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function ui(n, t, i, r, u, e) {
            return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(u, e)), c(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || vr(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? yt(k, p, n, o, s) : k,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = yt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = yt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function fi(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                    return n === o
                }, c, !0), a = ii(function(n) {
                    return nt(o, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(lt, "$1"), u, i < r && fi(n.slice(i, r)), r < s && fi(n = n.slice(r)), r < s && vt(n))
                    }
                    e.push(u)
                }
            return ri(e)
        }

        function yr(n, i) {
            var u = i.length > 0,
                f = n.length > 0,
                e = function(e, s, h, c, l) {
                    var y, d, w, k = 0,
                        v = "0",
                        g = e && [],
                        p = [],
                        nt = ht,
                        tt = e || f && t.find.TAG("*", l),
                        it = a += nt == null ? 1 : Math.random() || .1,
                        rt = tt.length;
                    for (l && (ht = s !== o && s); v !== rt && (y = tt[v]) != null; v++) {
                        if (f && y) {
                            for (d = 0; w = n[d++];)
                                if (w(y, s, h)) {
                                    c.push(y);
                                    break
                                }
                            l && (a = it)
                        }
                        u && ((y = !w && y) && k--, e && g.push(y))
                    }
                    if (k += v, u && v !== k) {
                        for (d = 0; w = i[d++];) w(g, p, s, h);
                        if (e) {
                            if (k > 0)
                                while (v--) g[v] || p[v] || (p[v] = gi.call(c));
                            p = yt(p)
                        }
                        b.apply(c, p);
                        l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                    }
                    return l && (a = it, ht = nt), g
                };
            return u ? c(e) : e
        }
        var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date,
            h = n.document,
            a = 0,
            ki = 0,
            si = gt(),
            hi = gt(),
            ci = gt(),
            wt = function(n, t) {
                return n === t && (rt = !0), 0
            },
            li = -2147483648,
            di = {}.hasOwnProperty,
            g = [],
            gi = g.pop,
            nr = g.push,
            b = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            vi = ut.replace("w", "w#"),
            yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]",
            kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)",
            tr = new RegExp(i + "+", "g"),
            lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            ir = new RegExp("^" + i + "*," + i + "*"),
            rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
            fr = new RegExp(kt),
            er = new RegExp("^" + vi + "$"),
            at = {
                ID: new RegExp("^#(" + ut + ")"),
                CLASS: new RegExp("^\\.(" + ut + ")"),
                TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + yi),
                PSEUDO: new RegExp("^" + kt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + bt + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            },
            or = /^(?:input|select|textarea|button)$/i,
            sr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            dt = /[+~]/,
            cr = /'|\\/g,
            y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            },
            pi = function() {
                k()
            };
        try {
            b.apply(g = ai.call(h.childNodes), h.childNodes);
            g[h.childNodes.length].nodeType
        } catch (pr) {
            b = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        u = r.support = {};
        ei = r.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        k = r.setDocument = function(n) {
            var a, c, r = n ? n.ownerDocument || n : h;
            return r === o || r.nodeType !== 9 || !r.documentElement ? o : (o = r, s = r.documentElement, c = r.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)), l = !ei(r), u.attributes = v(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), u.getElementsByTagName = v(function(n) {
                return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
            }), u.getElementsByClassName = ot.test(r.getElementsByClassName), u.getById = v(function(n) {
                return s.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
            }), u.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
                if (l) return t.getElementsByClassName(n)
            }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                n.querySelectorAll(":checked").length || e.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
            }), v(function(n) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                e.push(",.*:")
            })), (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
                u.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", kt)
            }), e = e.length && new RegExp(e.join("|")), d = d.length && new RegExp(d.join("|")), a = ot.test(s.compareDocumentPosition), et = a || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, wt = a ? function(n, t) {
                if (n === t) return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : i & 4 ? -1 : 1
            } : function(n, t) {
                if (n === t) return rt = !0, 0;
                var i, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && s) {
                    if (o === s) return wi(n, t)
                } else return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
            }, r)
        };
        r.matches = function(n, t) {
            return r(n, null, null, t)
        };
        r.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== o && k(n), t = t.replace(ur, "='$1']"), u.matchesSelector && l && (!d || !d.test(t)) && (!e || !e.test(t))) try {
                var i = ct.call(n, t);
                if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
            } catch (f) {}
            return r(t, o, null, [n]).length > 0
        };
        r.contains = function(n, t) {
            return (n.ownerDocument || n) !== o && k(n), et(n, t)
        };
        r.attr = function(n, i) {
            (n.ownerDocument || n) !== o && k(n);
            var f = t.attrHandle[i.toLowerCase()],
                r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : undefined;
            return r !== undefined ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
        };
        r.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        r.uniqueSort = function(n) {
            var r, f = [],
                t = 0,
                i = 0;
            if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(0), n.sort(wt), rt) {
                while (r = n[i++]) r === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return w = null, n
        };
        st = r.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = r.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(u) {
                        var f = r.attr(u, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    w = b = n === "only" && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                    return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
                        for (var r, f = u(n, i), e = f.length; e--;) r = nt(n, f[e]), n[r] = !(t[r] = f[e])
                    }) : function(n) {
                        return u(n, 0, e)
                    }) : u
                }
            },
            pseudos: {
                not: c(function(n) {
                    var t = [],
                        r = [],
                        i = pt(n.replace(lt, "$1"));
                    return i[f] ? c(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return r(n, t).length > 0
                    }
                }),
                contains: c(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return sr.test(n.nodeName)
                },
                input: function(n) {
                    return or.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[it] = lr(it);
        for (it in {
                submit: !0,
                reset: !0
            }) t.pseudos[it] = ar(it);
        return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = r.tokenize = function(n, i) {
            var e, f, s, o, u, h, c, l = hi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (u = n, h = [], c = t.preFilter; u;) {
                (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                e = !1;
                (f = rr.exec(u)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }), u = u.slice(e.length));
                for (o in t.filter)(f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), u = u.slice(e.length));
                if (!e) break
            }
            return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
        }, pt = r.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = ci[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, yr(e, u));
                i.selector = n
            }
            return i
        }, oi = r.select = function(n, i, r, f) {
            var s, e, o, a, v, c = typeof n == "function" && n,
                h = !f && ft(n = c.selector || n);
            if (r = r || [], h.length === 1) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], i) c && (i = i.parentNode);
                    else return r;
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[a = o.type]) break;
                    if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && vt(e), !n) return b.apply(r, f), r;
                        break
                    }
                }
            }
            return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i), r
        }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !!rt, k(), u.sortDetached = v(function(n) {
            return n.compareDocumentPosition(o.createElement("div")) & 1
        }), v(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ni("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), u.attributes && v(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ni("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), v(function(n) {
            return n.getAttribute("disabled") == null
        }) || ni(bt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), r
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext,
        er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        re = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
                u = this,
                f = u.length;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < f; t++)
                    if (i.contains(u[t], this)) return !0
            }));
            for (t = 0; t < f; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !!ui(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document,
        ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        fe = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if (typeof n == "string") {
                if (r = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : ue.exec(n), r && (r[1] || !t)) {
                    if (r[1]) {
                        if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
                            for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    if (f = u.getElementById(r[2]), f && f.parentNode) {
                        if (f.id !== r[2]) return ft.find(n);
                        this.length = 1;
                        this[0] = f
                    }
                    return this.context = u, this.selector = n, this
                }
                return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n)
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? typeof ft.ready != "undefined" ? ft.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
    fe.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && u.nodeType !== 9 && (r === undefined || u.nodeType !== 1 || !i(u).is(r));) u.nodeType === 1 && f.push(u), u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? fi[n] || ee(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [],
            r = !n.once && [],
            l = function(i) {
                for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && e < f; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1;
                t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            },
            s = {
                add: function() {
                    if (t) {
                        var r = t.length;
                        (function e(r) {
                            i.each(r, function(r, u) {
                                var f = i.type(u);
                                f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
                            })
                        })(arguments);
                        o ? f = t.length : u && (c = r, l(u))
                    }
                    return this
                },
                remove: function() {
                    return t && i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (u <= f && f--, u <= e && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : !!(t && t.length)
                },
                empty: function() {
                    return t = [], f = 0, this
                },
                disable: function() {
                    return t = r = u = undefined, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return r = undefined, u || s.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(n, i) {
                    return t && (!h || r) && (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = l.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? l.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (lt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(), u.readyState === "complete") setTimeout(i.ready);
            else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1);
        else {
            u.attachEvent("onreadystatechange", a);
            n.attachEvent("onload", a);
            var r = !1;
            try {
                r = n.frameElement == null && u.documentElement
            } catch (e) {}
            r && r.doScroll && function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    cr();
                    i.ready()
                }
            }()
        }
        return lt.promise(t)
    };
    o = typeof undefined;
    for (lr in i(r)) break;
    r.ownLast = lr !== "0";
    r.inlineBlockNeedsLayout = !1;
    i(function() {
            var f, t, n, i;
            (n = u.getElementsByTagName("body")[0], n && n.style) && (t = u.createElement("div"), i = u.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = f = t.offsetWidth === 3, f && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var n = u.createElement("div");
            if (r.deleteExpando == null) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (t) {
                    r.deleteExpando = !1
                }
            }
            n = null
        }();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()],
            r = +n.nodeType || 1;
        return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0],
                o = r && r.attributes;
            if (n === undefined) {
                if (this.length && (e = i.data(r), r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--;) o[f] && (u = o[f].name, u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)), yr(r, u, e[u])));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : undefined
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1,
                e = i.Deferred(),
                u = this,
                o = this.length,
                s = function() {
                    --f || e.resolveWith(u, [u])
                };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
            return s(), e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = ["Top", "Right", "Bottom", "Left"],
        et = function(n, t) {
            return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
        },
        b = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = r == null;
            if (i.type(r) === "object") {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        },
        oi = /^(?:checkbox|radio)$/i;
    (function() {
        var t = u.createElement("input"),
            n = u.createElement("div"),
            i = u.createDocumentFragment();
        if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", r.leadingWhitespace = n.firstChild.nodeType === 3, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>", t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
                r.noCloneEvent = !1
            }), n.cloneNode(!0).click()), r.deleteExpando == null) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
    })(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i,
        oe = /^key/,
        se = /^(?:mouse|pointer|contextmenu)|click/,
        br = /^(?:focusinfocus|focusoutblur)$/,
        kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
                        return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(c.elem, arguments) : undefined
                    }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;)(w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e) && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
                    type: e,
                    origType: d,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: k.join(".")
                }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                    if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), !e) {
                        for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], (f || k === o.origType) && (!r || r.guid === o.guid) && (!s || s.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                    b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                }
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u],
                s = tt.call(t, "type") ? t.type : t,
                v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((o = h = f = f || u, f.nodeType !== 3 && f.nodeType !== 8) && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, typeof t == "object" && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = f), r = r == null ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0;
                    (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = undefined;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [],
                h = l.call(arguments),
                c = (i._data(this, "events") || {})[n.type] || [],
                u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0;
                    (r = s[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = r.elem, o = 0;
                        (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), f !== undefined && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (!n.button || n.type !== "click"))
                for (; r != this; r = r.parentNode || this)
                    if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                        for (u = [], o = 0; o < s; o++) e = t[o], f = e.selector + " ", u[f] === undefined && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type,
                f = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks : oe.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
            return n.target || (n.target = f.srcElement || u), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button,
                    o = t.fromElement;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? vt : it) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            (this.isDefaultPrevented = vt, n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            (this.isPropagationStopped = vt, n) && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = vt;
            n && n.stopImmediatePropagation && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target,
                    t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : undefined;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }), i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (si.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"), !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if (typeof n == "object") {
                typeof t != "string" && (r = r || t, t = undefined);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (r == null && u == null ? (u = t, r = t = undefined) : u == null && (typeof t == "string" ? (u = r, r = undefined) : (u = r, r = t, t = undefined)), u === !1) u = it;
            else if (!u) return this;
            return f === 1 && (e = u, u = function(n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = it), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        he = / jQuery\d+="(?:null|\d+)"/g,
        tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
        hi = /^\s+/,
        iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ru = /<([\w:]+)/,
        uu = /<tbody/i,
        ce = /<|&#?\w+;/,
        le = /<(?:script|style|link)/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fu = /^$|\/(?:java|ecma)script/i,
        ve = /^true\/(.*)/,
        ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
        },
        pe = gr(u),
        ci = pe.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = f(s), h = f(n), o = 0;
                    (c = h[o]) != null; ++o) e[o] && be(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n), e = e || f(s), o = 0;
                        (c = h[o]) != null; o++) hu(c, e[o]);
                else hu(n, s);
            return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; y < k; y++)
                if (o = n[y], o || o === 0)
                    if (i.type(o) === "object") i.merge(l, o.nodeType ? [o] : o);
                    else if (ce.test(o)) {
                for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody)
                    for (o = p === "table" && !uu.test(o) ? h.firstChild : a[1] === "<table>" && !uu.test(o) ? h : 0, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(o));
            for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), we), y = 0; o = l[y++];)
                if ((!e || i.inArray(o, e) === -1) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u))
                    for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
            return h = null, v
        },
        cleanData: function(n, t) {
            for (var u, s, f, e, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special;
                (u = n[a]) != null; a++)
                if ((t || i.acceptData(u)) && (f = u[h], e = f && l[f], e)) {
                    if (e.events)
                        for (s in e.events) y[s] ? i.event.remove(u, s) : i.removeEvent(u, s, e.handle);
                    l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
                }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0;
                (r = e[u]) != null; u++) t || r.nodeType !== 1 || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) {
                for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return b(this, function(n) {
                var t = this[0] || {},
                    u = 0,
                    e = this.length;
                if (n === undefined) return t.nodeType === 1 ? t.innerHTML.replace(he, "") : undefined;
                if (typeof n == "string" && !le.test(n) && (r.htmlSerialize || !tu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !s[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; u < e; u++) t = this[u] || {}, t.nodeType === 1 && (i.cleanData(f(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0,
                l = this.length,
                p = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a);
            if (y || l > 1 && typeof a == "string" && !r.checkClone && ae.test(a)) return this.each(function(i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, s.childNodes.length === 1 && (s = h), h)) {
                for (o = i.map(f(s, "script"), ou), c = o.length; e < l; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; e < c; e++) u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ye, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {},
        function() {
            var n;
            r.shrinkWrapBlocks = function() {
                if (n != null) return n;
                n = !1;
                var t, i, r;
                if (i = u.getElementsByTagName("body")[0], i && i.style) return t = u.createElement("div"), r = u.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(r).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(u.createElement("div")).style.width = "5px", n = t.offsetWidth !== 3), i.removeChild(r), n
            }
        }();
    var lu = /^margin/,
        pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
        k, d, ke = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
        }, d = function(n, t, r) {
            var e, o, s, u, f = n.style;
            return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : undefined, r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), pt.test(u) && lu.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), u === undefined ? u : u + ""
        }) : u.documentElement.currentStyle && (k = function(n) {
            return n.currentStyle
        }, d = function(n, t, i) {
            var o, f, e, r, u = n.style;
            return i = i || k(n), r = i ? i[t] : undefined, r == null && u && u[t] && (r = u[t]), pt.test(r) && !ke.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = t === "fontSize" ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), r === undefined ? r : r + "" || "auto"
        }),
        function() {
            function c() {
                var i, r, f, t;
                (r = u.getElementsByTagName("body")[0], r && r.style) && (i = u.createElement("div"), f = u.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", r.appendChild(f).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, h = !0, n.getComputedStyle && (o = (n.getComputedStyle(i, null) || {}).top !== "1%", s = (n.getComputedStyle(i, null) || {
                    width: "4px"
                }).width === "4px", t = i.appendChild(u.createElement("div")), t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight), i.removeChild(t)), i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", e = t[0].offsetHeight === 0, e && (t[0].style.display = "", t[1].style.display = "none", e = t[0].offsetHeight === 0), r.removeChild(f))
            }
            var f, t, l, o, s, e, h;
            (f = u.createElement("div"), f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", l = f.getElementsByTagName("a")[0], t = l && l.style, t) && (t.cssText = "float:left;opacity:.5", r.opacity = t.opacity === "0.5", r.cssFloat = !!t.cssFloat, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", r.clearCloneStyle = f.style.backgroundClip === "content-box", r.boxSizing = t.boxSizing === "" || t.MozBoxSizing === "" || t.WebkitBoxSizing === "", i.extend(r, {
                reliableHiddenOffsets: function() {
                    return e == null && c(), e
                },
                boxSizingReliable: function() {
                    return s == null && c(), s
                },
                pixelPosition: function() {
                    return o == null && c(), o
                },
                reliableMarginRight: function() {
                    return h == null && c(), h
                }
            }))
        }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var vi = /alpha\([^)]*\)/i,
        de = /opacity\s*=\s*([^)]*)/,
        ge = /^(none|table(?!-c[ea]).+)/,
        no = new RegExp("^(" + at + ")(.*)$", "i"),
        to = new RegExp("^([+-])=(" + at + ")", "i"),
        io = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vu = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        yu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, h, e, s = i.camelCase(t),
                    c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)), e = i.cssHooks[t] || i.cssHooks[s], u !== undefined) {
                    if (h = typeof u, h === "string" && (o = to.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), u == null || u !== u) return;
                    if (h !== "number" || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit"), !e || !("set" in e) || (u = e.set(n, u, f)) !== undefined) try {
                        c[t] = u
                    } catch (l) {}
                } else return e && "get" in e && (o = e.get(n, !1, f)) !== undefined ? o : c[t]
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return (t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = d(n, t, u)), f === "normal" && t in vu && (f = vu[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return ge.test(i.css(n, "display")) && n.offsetWidth === 0 ? i.swap(n, io, function() {
                    return du(n, t, u)
                }) : du(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return bu(n, u, f ? ku(n, t, f, r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                f = u && u.filter || r.filter || "";
            (r.zoom = 1, (t >= 1 || t === "") && i.trim(f.replace(vi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), t === "" || u && !u.filter)) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        }, d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        lu.test(n) || (i.cssHooks[n + t].set = bu)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return wu(this, !0)
        },
        hide: function() {
            return wu(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : e.propHooks._default.set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, wt, ro = /^(?:toggle|show|hide)$/,
        gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
        uo = /queueHooks$/,
        bt = [fo],
        st = {
            "*": [function(n, t) {
                var f = this.createTween(n, t),
                    s = f.cur(),
                    u = gu.exec(t),
                    e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
                    r = (i.cssNumber[n] || e !== "px" && +s) && gu.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20;
                if (r && r[3] !== e) {
                    e = e || r[3];
                    u = u || [];
                    r = +s || 1;
                    do o = o || ".5", r = r / o, i.style(f.elem, n, r + e); while (o !== (o = f.cur() / s) && o !== 1 && --h)
                }
                return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
            }]
        };
    i.Animation = i.extend(rf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], st[r] = st[r] || [], st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? bt.unshift(n) : bt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
                e = i.speed(t, r, u),
                f = function() {
                    var t = rf(this, i.extend({}, n), e);
                    (o || i._data(this, "finish")) && t.stop(!0)
                };
            return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return typeof n != "string" && (r = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var o = !0,
                    t = n != null && n + "queueHooks",
                    e = i.timers,
                    f = i._data(this);
                if (t) f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f) f[t] && f[t].stop && uo.test(t) && u(f[t]);
                for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r), o = !1, e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, f = i._data(this),
                    r = f[n + "queue"],
                    e = f[n + "queueHooks"],
                    u = i.timers,
                    o = r ? r.length : 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: kt("show"),
        slideUp: kt("hide"),
        slideToggle: kt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers,
            t = 0;
        for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        wt || (wt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(wt);
        wt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var n, t, f, i, e;
            t = u.createElement("div");
            t.setAttribute("className", "t");
            t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
            i = t.getElementsByTagName("a")[0];
            f = u.createElement("select");
            e = f.appendChild(u.createElement("option"));
            n = t.getElementsByTagName("input")[0];
            i.style.cssText = "top:1px";
            r.getSetAttribute = t.className !== "t";
            r.style = /top/.test(i.getAttribute("style"));
            r.hrefNormalized = i.getAttribute("href") === "/a";
            r.checkOn = !!n.value;
            r.optSelected = e.selected;
            r.enctype = !!u.createElement("form").enctype;
            f.disabled = !0;
            r.optDisabled = !e.disabled;
            n = u.createElement("input");
            n.setAttribute("value", "");
            r.input = n.getAttribute("value") === "";
            n.value = "t";
            n.setAttribute("type", "radio");
            r.radioValue = n.value === "t"
        }();
    uf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(uf, "") : r == null ? "" : r) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : i.trim(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++)
                        if (t = s[e], (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), f) return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
                        if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                            r.selected = f = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return f || (n.selectedIndex = -1), u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    var ut, ff, v = i.expr.attrHandle,
        yi = /^(?:checked|selected)$/i,
        g = r.getSetAttribute,
        dt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute === o) return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff : ut)), r !== undefined)
                    if (r === null) i.removeAttr(n, t);
                    else return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""), r);
                else return u && "get" in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t), f == null ? undefined : f)
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && n.nodeType === 1)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t), u && (n.value = u), t
                    }
                }
            }
        }
    });
    ff = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = v[t], v[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, v[t] = f), u
        } : function(n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    dt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            if (i.nodeName(n, "input")) n.defaultValue = t;
            else return ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", i === "value" || t === n.getAttribute(i) ? t : void 0
        }
    }, v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }, i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: ut.set
    }, i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, t === "" ? !1 : t, i)
        }
    }, i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || undefined
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    ef = /^(?:input|select|textarea|button|object)$/i;
    of = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = undefined;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) return o = e !== 1 || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ef.test(n.nodeName) || of.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; e < c; e++)
                    if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : " "), r) {
                        for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = arguments.length === 0 || typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; e < c; e++)
                    if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : ""), r) {
                        for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (r === "string")
                    for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0) return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now(),
        wi = /\?/,
        oo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null,
            u = i.trim(t + "");
        return u && !i.trim(u.replace(oo, function(n, t, i, u) {
            return (f && t && (r = 0), r === 0) ? n : (f = i || t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    };
    i.parseXML = function(t) {
        var r, u;
        if (!t || typeof t != "string") return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch (f) {
            r = undefined
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var nt, y, so = /#.*$/,
        sf = /([?&])_=[^&]*/,
        ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        co = /^(?:GET|HEAD)$/,
        lo = /^\/\//,
        hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        cf = {},
        bi = {},
        lf = "*/".concat("*");
    try {
        y = location.href
    } catch (ns) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = hf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: af(cf),
        ajaxTransport: af(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                e !== 2 && (e = 2, k && clearTimeout(k), l = undefined, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, s && (y = ao(r, u, s)), y = vo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), n === 204 || r.type === "HEAD" ? c = "nocontent" : n === 304 ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", n < 0 && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = undefined, a && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), a && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof n == "object" && (t = n, n = undefined);
            t = t || {};
            var s, c, f, b, k, a, l, v, r = i.ajaxSetup({}, t),
                o = r.context || r,
                d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                g = i.Deferred(),
                tt = i.Callbacks("once memory"),
                p = r.statusCode || {},
                it = {},
                rt = {},
                e = 0,
                ut = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (e === 2) {
                            if (!v)
                                for (v = {}; t = ho.exec(b);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return e === 2 ? b : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return e || (r.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (e < 2)
                                for (t in n) p[t] = [p[t], n[t]];
                            else u.always(n[u.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return l && l.abort(t), w(0, t), this
                    }
                };
            if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(so, "").replace(lo, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], r.crossDomain == null && (s = hf.exec(r.url.toLowerCase()), r.crossDomain = !!(s && (s[1] !== nt[1] || s[2] !== nt[2] || (s[3] || (s[1] === "http:" ? "80" : "443")) !== (nt[3] || (nt[1] === "http:" ? "80" : "443"))))), r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)), vf(cf, r, t, u), e === 2) return u;
            a = i.event && r.global;
            a && i.active++ == 0 && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !co.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = sf.test(f) ? f.replace(sf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + lf + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2)) return u.abort();
            ut = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[c](r[c]);
            if (l = vf(bi, r, t, u), l) {
                u.readyState = 1;
                a && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    l.send(it, w)
                } catch (ft) {
                    if (e < 2) w(-1, ft);
                    else throw ft;
                }
            } else w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && (n.style && n.style.display || i.css(n, "display")) === "none"
    };
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var yo = /%20/g,
        po = /\[\]$/,
        yf = /\r?\n/g,
        wo = /^(?:submit|button|image|reset|file)$/i,
        bo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) di(r, n[r], t, f);
        return u.join("&").replace(yo, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && bo.test(this.nodeName) && !wo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(yf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(yf, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pf() || go()
    } : pf;
    var ko = 0,
        ni = {},
        ht = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
        for (var n in ni) ni[n](undefined, !0)
    }), r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(),
                        o = ++ko;
                    if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (e in n.xhrFields) f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r) r[e] !== undefined && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function(r, e) {
                        var s, c, h;
                        if (t && (e || f.readyState === 4))
                            if (delete ni[o], t = undefined, f.onreadystatechange = i.noop, e) f.readyState !== 4 && f.abort();
                            else {
                                h = {};
                                s = f.status;
                                typeof f.responseText == "string" && (h.text = f.responseText);
                                try {
                                    c = f.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = h.text ? 200 : 404
                            }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    };
                    n.async ? f.readyState === 4 ? setTimeout(t) : f.onreadystatechange = ni[o] = t : t()
                },
                abort: function() {
                    t && t(undefined, !0)
                }
            }
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                    };
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    if (t) t.onload(undefined, !0)
                }
            }
        }
    }), gi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return e || i.error(f + " was not called"), e[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            e = arguments
        }, u.always(function() {
            n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = undefined
        }), "script"
    }), i.parseHTML = function(n, t, r) {
        if (!n || typeof n != "string") return null;
        typeof t == "boolean" && (r = t, t = !1);
        t = t || u;
        var f = er.exec(n),
            e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, nr = i.fn.load, i.fn.load = function(n, t, r) {
        if (typeof n != "string" && nr) return nr.apply(this, arguments);
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e >= 0 && (u = i.trim(n.slice(e, n.length)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (s = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, tr = n.document.documentElement, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, u = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                e = r && r.ownerDocument;
            if (e) return (t = e.documentElement, !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = wf(e), {
                top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            })
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                        top: 0,
                        left: 0
                    },
                    u = this[0];
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || tr
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return b(this, function(n, u, f) {
                var e = wf(n);
                if (f === undefined) return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
                e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
            }, n, u, arguments.length, null)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
            if (r) return r = d(n, t), pt.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || typeof u != "boolean"),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return b(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : undefined, e, null)
            }
        })
    }), i.fn.size = function() {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }), bf = n.jQuery, kf = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = kf), t && n.jQuery === i && (n.jQuery = bf), i
    }, typeof t === o && (n.jQuery = n.$ = i), i
});;
/*!
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function(n, t, i) {
    function r(i) {
        var r = t.console;
        e[i] || (e[i] = !0, n.migrateWarnings.push(i), r && r.warn && !n.migrateMute && (r.warn("JQMIGRATE: " + i), n.migrateTrace && r.trace && r.trace()))
    }

    function o(t, i, u, f) {
        if (Object.defineProperty) try {
            Object.defineProperty(t, i, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(f), u
                },
                set: function(n) {
                    r(f);
                    u = n
                }
            });
            return
        } catch (e) {}
        n._definePropertyBroken = !0;
        t[i] = u
    }
    var e = {},
        l, a, v;
    n.migrateWarnings = [];
    !n.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active");
    n.migrateTrace === i && (n.migrateTrace = !0);
    n.migrateReset = function() {
        e = {};
        n.migrateWarnings.length = 0
    };
    document.compatMode === "BackCompat" && r("jQuery is not compatible with Quirks Mode");
    var s = n("<input/>", {
            size: 1
        }).attr("size") && n.attrFn,
        h = n.attr,
        g = n.attrHooks.value && n.attrHooks.value.get || function() {
            return null
        },
        nt = n.attrHooks.value && n.attrHooks.value.set || function() {
            return i
        },
        tt = /^(?:input|button)$/i,
        it = /^[238]$/,
        rt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ut = /^(?:checked|selected)$/i;
    o(n, "attrFn", s || {}, "jQuery.attrFn is deprecated");
    n.attr = function(t, u, f, e) {
        var o = u.toLowerCase(),
            c = t && t.nodeType;
        return e && (h.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !it.test(c) && (s ? u in s : n.isFunction(n.fn[u]))) ? n(t)[u](f) : (u === "type" && f !== i && tt.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !n.attrHooks[o] && rt.test(o) && (n.attrHooks[o] = {
            get: function(t, r) {
                var u, f = n.prop(t, r);
                return f === !0 || typeof f != "boolean" && (u = t.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : i
            },
            set: function(t, i, r) {
                var u;
                return i === !1 ? n.removeAttr(t, r) : (u = n.propFix[r] || r, u in t && (t[u] = !0), t.setAttribute(r, r.toLowerCase())), r
            }
        }, ut.test(o) && r("jQuery.fn.attr('" + o + "') may use property instead of attribute")), h.call(n, t, u, f))
    };
    n.attrHooks.value = {
        get: function(n, t) {
            var i = (n.nodeName || "").toLowerCase();
            return i === "button" ? g.apply(this, arguments) : (i !== "input" && i !== "option" && r("jQuery.fn.attr('value') no longer gets properties"), t in n ? n.value : null)
        },
        set: function(n, t) {
            var i = (n.nodeName || "").toLowerCase();
            if (i === "button") return nt.apply(this, arguments);
            i !== "input" && i !== "option" && r("jQuery.fn.attr('value', val) no longer sets properties");
            n.value = t
        }
    };
    var f, u, c = n.fn.init,
        ft = n.parseJSON,
        et = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    n.fn.init = function(t, i, u) {
        var f;
        return t && typeof t == "string" && !n.isPlainObject(i) && (f = et.exec(n.trim(t))) && f[0] && (t.charAt(0) !== "<" && r("$(html) HTML strings must start with '<' character"), f[3] && r("$(html) HTML text after last tag is ignored"), f[0].charAt(0) === "#" && (r("HTML string cannot start with a '#' character"), n.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), n.parseHTML) ? c.call(this, n.parseHTML(f[2], i, !0), i, u) : c.apply(this, arguments)
    };
    n.fn.init.prototype = n.fn;
    n.parseJSON = function(n) {
        return !n && n !== null ? (r("jQuery.parseJSON requires a valid JSON string"), null) : ft.apply(this, arguments)
    };
    n.uaMatch = function(n) {
        n = n.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    };
    n.browser || (f = n.uaMatch(navigator.userAgent), u = {}, f.browser && (u[f.browser] = !0, u.version = f.version), u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0), n.browser = u);
    o(n, "browser", n.browser, "jQuery.browser is deprecated");
    n.sub = function() {
        function t(n, i) {
            return new t.fn.init(n, i)
        }
        n.extend(!0, t, this);
        t.superclass = this;
        t.fn = t.prototype = this();
        t.fn.constructor = t;
        t.sub = this.sub;
        t.fn.init = function(r, u) {
            return u && u instanceof n && !(u instanceof t) && (u = t(u)), n.fn.init.call(this, r, u, i)
        };
        t.fn.init.prototype = t.fn;
        var i = t(document);
        return r("jQuery.sub() is deprecated"), t
    };
    n.ajaxSetup({
        converters: {
            "text json": n.parseJSON
        }
    });
    l = n.fn.data;
    n.fn.data = function(t) {
        var f, u, e = this[0];
        return e && t === "events" && arguments.length === 1 && (f = n.data(e, t), u = n._data(e, t), (f === i || f === u) && u !== i) ? (r("Use of jQuery.fn.data('events') is deprecated"), u) : l.apply(this, arguments)
    };
    a = /\/(java|ecma)script/i;
    v = n.fn.andSelf || n.fn.addBack;
    n.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), v.apply(this, arguments)
    };
    n.clean || (n.clean = function(t, i, u, f) {
        i = i || document;
        i = !i.nodeType && i[0] || i;
        i = i.ownerDocument || i;
        r("jQuery.clean() is deprecated");
        var o, e, h, c, s = [];
        if (n.merge(s, n.buildFragment(t, i).childNodes), u)
            for (h = function(n) {
                    if (!n.type || a.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                }, o = 0;
                (e = s[o]) != null; o++) n.nodeName(e, "script") && h(e) || (u.appendChild(e), typeof e.getElementsByTagName != "undefined" && (c = n.grep(n.merge([], e.getElementsByTagName("script")), h), s.splice.apply(s, [o + 1, 0].concat(c)), o += c.length));
        return s
    });
    var ot = n.event.add,
        st = n.event.remove,
        ht = n.event.trigger,
        ct = n.fn.toggle,
        y = n.fn.live,
        p = n.fn.die,
        w = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        b = new RegExp("\\b(?:" + w + ")\\b"),
        k = /(?:^|\s)hover(\.\S+|)\b/,
        d = function(t) {
            return typeof t != "string" || n.event.special.hover ? t : (k.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(k, "mouseenter$1 mouseleave$1"))
        };
    n.event.props && n.event.props[0] !== "attrChange" && n.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    n.event.dispatch && o(n.event, "handle", n.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    n.event.add = function(n, t, i, u, f) {
        n !== document && b.test(t) && r("AJAX events should be attached to document: " + t);
        ot.call(this, n, d(t || ""), i, u, f)
    };
    n.event.remove = function(n, t, i, r, u) {
        st.call(this, n, d(t) || "", i, r, u)
    };
    n.fn.error = function() {
        var n = Array.prototype.slice.call(arguments, 0);
        return (r("jQuery.fn.error() is deprecated"), n.splice(0, 0, "error"), arguments.length) ? this.bind.apply(this, n) : (this.triggerHandler.apply(this, n), this)
    };
    n.fn.toggle = function(t, i) {
        if (!n.isFunction(t) || !n.isFunction(i)) return ct.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var u = arguments,
            e = t.guid || n.guid++,
            f = 0,
            o = function(i) {
                var r = (n._data(this, "lastToggle" + t.guid) || 0) % f;
                return n._data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), u[r].apply(this, arguments) || !1
            };
        for (o.guid = e; f < u.length;) u[f++].guid = e;
        return this.click(o)
    };
    n.fn.live = function(t, i, u) {
        if (r("jQuery.fn.live() is deprecated"), y) return y.apply(this, arguments);
        n(this.context).on(t, this.selector, i, u);
        return this
    };
    n.fn.die = function(t, i) {
        return (r("jQuery.fn.die() is deprecated"), p) ? p.apply(this, arguments) : (n(this.context).off(t, this.selector || "**", i), this)
    };
    n.event.trigger = function(n, t, i, u) {
        return i || b.test(n) || r("Global events are undocumented and deprecated"), ht.call(this, n, t, i || document, u)
    };
    n.each(w.split("|"), function(t, i) {
        n.event.special[i] = {
            setup: function() {
                var t = this;
                return t !== document && (n.event.add(document, i + "." + n.guid, function() {
                    n.event.trigger(i, null, t, !0)
                }), n._data(this, i, n.guid++)), !1
            },
            teardown: function() {
                return this !== document && n.event.remove(document, i + "." + n._data(this, i)), !1
            }
        }
    })
})(jQuery, window);
//# sourceMappingURL=jquery-migrate-1.2.1.min.js.map
;
(function(n, t, i) {
    typeof module != "undefined" && module.exports ? module.exports = i() : typeof define == "function" && define.amd ? define(i) : t[n] = i()
})("jquery-scrollto", this, function() {
    var i, n, t;
    return i = n = window.jQuery || require("jquery"), n.propHooks.scrollTop = n.propHooks.scrollLeft = {
        get: function(n, t) {
            var i = null;
            return (n.tagName === "HTML" || n.tagName === "BODY") && (t === "scrollLeft" ? i = window.scrollX : t === "scrollTop" && (i = window.scrollY)), i == null && (i = n[t]), i
        }
    }, n.Tween.propHooks.scrollTop = n.Tween.propHooks.scrollLeft = {
        get: function(t) {
            return n.propHooks.scrollTop.get(t.elem, t.prop)
        },
        set: function(n) {
            n.elem.tagName === "HTML" || n.elem.tagName === "BODY" ? (n.options.bodyScrollLeft = n.options.bodyScrollLeft || window.scrollX, n.options.bodyScrollTop = n.options.bodyScrollTop || window.scrollY, n.prop === "scrollLeft" ? n.options.bodyScrollLeft = Math.round(n.now) : n.prop === "scrollTop" && (n.options.bodyScrollTop = Math.round(n.now)), window.scrollTo(n.options.bodyScrollLeft, n.options.bodyScrollTop)) : n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    }, t = {
        config: {
            duration: 400,
            easing: "swing",
            callback: undefined,
            durationMode: "each",
            offsetTop: 0,
            offsetLeft: 0
        },
        configure: function(i) {
            return n.extend(t.config, i || {}), this
        },
        scroll: function(i, r) {
            var l, u, a, s, y, nt, h, c, p, w, b, k, e, d, g, o, f, v;
            return l = i.pop(), u = l.$container, a = l.$target, nt = u.prop("tagName"), s = n("<span/>").css({
                position: "absolute",
                top: "0px",
                left: "0px"
            }), y = u.css("position"), u.css({
                position: "relative"
            }), s.appendTo(u), b = s.offset().top, k = a.offset().top, e = k - b - parseInt(r.offsetTop, 10), d = s.offset().left, g = a.offset().left, o = g - d - parseInt(r.offsetLeft, 10), h = u.prop("scrollTop"), c = u.prop("scrollLeft"), s.remove(), u.css({
                position: y
            }), f = {}, v = function() {
                return i.length === 0 ? typeof r.callback == "function" && r.callback() : t.scroll(i, r), !0
            }, r.onlyIfOutside && (p = h + u.height(), w = c + u.width(), h < e && e < p && (e = h), c < o && o < w && (o = c)), e !== h && (f.scrollTop = e), o !== c && (f.scrollLeft = o), u.prop("scrollHeight") === u.width() && delete f.scrollTop, u.prop("scrollWidth") === u.width() && delete f.scrollLeft, f.scrollTop != null || f.scrollLeft != null ? u.animate(f, {
                duration: r.duration,
                easing: r.easing,
                complete: v
            }) : v(), !0
        },
        fn: function(i) {
            var e, o, r, u, f, s, h;
            if (e = [], f = n(this), f.length === 0) return this;
            for (o = n.extend({}, t.config, i), r = f.parent(), u = r.get(0); r.length === 1 && u !== document.body && u !== document;) s = r.css("overflow-y") !== "visible" && u.scrollHeight !== u.clientHeight, h = r.css("overflow-x") !== "visible" && u.scrollWidth !== u.clientWidth, (s || h) && (e.push({
                $container: r,
                $target: f
            }), f = r), r = r.parent(), u = r.get(0);
            return e.push({
                $container: n("html"),
                $target: f
            }), o.durationMode === "all" && (o.duration /= e.length), t.scroll(e, o), this
        }
    }, n.ScrollTo = n.ScrollTo || t, n.fn.ScrollTo = n.fn.ScrollTo || t.fn, t
});;
(function(n) {
    n.isScrollToFixed = function(t) {
        return !!n(t).data("ScrollToFixed")
    };
    n.ScrollToFixed = function(t, i) {
        function et() {
            r.trigger("preUnfixed.ScrollToFixed");
            o();
            r.trigger("unfixed.ScrollToFixed");
            c = -1;
            w = r.offset().top;
            h = r.offset().left;
            u.options.offsets && (h += r.offset().left - r.position().left);
            tt == -1 && (tt = h);
            f = r.css("position");
            a = !0;
            u.options.bottom != -1 && (r.trigger("preFixed.ScrollToFixed"), b(), r.trigger("fixed.ScrollToFixed"))
        }

        function it() {
            var n = u.options.limit;
            return n ? typeof n == "function" ? n.apply(r) : n : 0
        }

        function l() {
            return f === "fixed"
        }

        function rt() {
            return f === "absolute"
        }

        function v() {
            return !(l() || rt())
        }

        function b() {
            l() || (e.css({
                display: r.css("display"),
                width: r.outerWidth(!0),
                height: r.outerHeight(!0),
                float: r.css("float")
            }), cssOptions = {
                position: "fixed",
                top: u.options.bottom == -1 ? y() : "",
                bottom: u.options.bottom == -1 ? "" : u.options.bottom,
                "margin-left": "0px"
            }, u.options.dontSetWidth || (cssOptions.width = r.width()), r.css(cssOptions), r.addClass("scroll-to-fixed-fixed"), u.options.className && r.addClass(u.options.className), f = "fixed")
        }

        function ut() {
            var n = it(),
                t = h;
            u.options.removeOffsets && (t = 0, n = n - w);
            cssOptions = {
                position: "absolute",
                top: n,
                left: t,
                "margin-left": "0px",
                bottom: ""
            };
            u.options.dontSetWidth || (cssOptions.width = r.width());
            r.css(cssOptions);
            f = "absolute"
        }

        function o() {
            v() || (c = -1, e.css("display", "none"), r.css({
                width: "",
                position: p,
                left: "",
                top: nt.top,
                "margin-left": ""
            }), r.removeClass("scroll-to-fixed-fixed"), u.options.className && r.removeClass(u.options.className), f = null)
        }

        function k(n) {
            n != c && (r.css("left", h - n), c = n)
        }

        function y() {
            var n = u.options.marginTop;
            return n ? typeof n == "function" ? n.apply(r) : n : 0
        }

        function d() {
            var t;
            if (n.isScrollToFixed(r)) {
                t = a;
                a || et();
                var f = n(window).scrollLeft(),
                    e = n(window).scrollTop(),
                    i = it();
                u.options.minWidth && n(window).width() < u.options.minWidth ? v() && t || (s(), r.trigger("preUnfixed.ScrollToFixed"), o(), r.trigger("unfixed.ScrollToFixed")) : u.options.bottom == -1 ? i > 0 && e >= i - y() ? rt() && t || (s(), r.trigger("preAbsolute.ScrollToFixed"), ut(), r.trigger("unfixed.ScrollToFixed")) : e >= w - y() ? (l() && t || (s(), r.trigger("preFixed.ScrollToFixed"), b(), c = -1, r.trigger("fixed.ScrollToFixed")), k(f)) : v() && t || (s(), r.trigger("preUnfixed.ScrollToFixed"), o(), r.trigger("unfixed.ScrollToFixed")) : i > 0 ? e + n(window).height() - r.outerHeight(!0) >= i - (y() || -ot()) ? l() && (s(), r.trigger("preUnfixed.ScrollToFixed"), p === "absolute" ? ut() : o(), r.trigger("unfixed.ScrollToFixed")) : (l() || (s(), r.trigger("preFixed.ScrollToFixed"), b()), k(f), r.trigger("fixed.ScrollToFixed")) : k(f)
            }
        }

        function ot() {
            return u.options.bottom ? u.options.bottom : 0
        }

        function s() {
            var n = r.css("position");
            n == "absolute" ? r.trigger("postAbsolute.ScrollToFixed") : n == "fixed" ? r.trigger("postFixed.ScrollToFixed") : r.trigger("postUnfixed.ScrollToFixed")
        }
        var u = this;
        u.$el = n(t);
        u.el = t;
        u.$el.data("ScrollToFixed", u);
        var a = !1,
            r = u.$el,
            f, p, nt, w = 0,
            h = 0,
            tt = -1,
            c = -1,
            e = null;
        var g = function() {
                r.is(":visible") && (a = !1, d())
            },
            ft = function() {
                d()
            },
            ht = function() {
                var n = document.body,
                    t, i, r, u, f;
                return document.createElement && n && n.appendChild && n.removeChild ? (t = document.createElement("div"), !t.getBoundingClientRect) ? null : (t.innerHTML = "x", t.style.cssText = "position:fixed;top:100px;", n.appendChild(t), i = n.style.height, r = n.scrollTop, n.style.height = "3000px", n.scrollTop = 500, u = t.getBoundingClientRect().top, n.style.height = i, f = u === 100, n.removeChild(t), n.scrollTop = r, f) : null
            },
            st = function(n) {
                n = n || window.event;
                n.preventDefault && n.preventDefault();
                n.returnValue = !1
            };
        u.init = function() {
            u.options = n.extend({}, n.ScrollToFixed.defaultOptions, i);
            u.$el.css("z-index", u.options.zIndex);
            e = n("<div />");
            f = r.css("position");
            p = r.css("position");
            nt = n.extend({}, r.offset());
            v() && u.$el.after(e);
            n(window).bind("resize.ScrollToFixed", g);
            n(window).bind("scroll.ScrollToFixed", ft);
            u.options.preFixed && r.bind("preFixed.ScrollToFixed", u.options.preFixed);
            u.options.postFixed && r.bind("postFixed.ScrollToFixed", u.options.postFixed);
            u.options.preUnfixed && r.bind("preUnfixed.ScrollToFixed", u.options.preUnfixed);
            u.options.postUnfixed && r.bind("postUnfixed.ScrollToFixed", u.options.postUnfixed);
            u.options.preAbsolute && r.bind("preAbsolute.ScrollToFixed", u.options.preAbsolute);
            u.options.postAbsolute && r.bind("postAbsolute.ScrollToFixed", u.options.postAbsolute);
            u.options.fixed && r.bind("fixed.ScrollToFixed", u.options.fixed);
            u.options.unfixed && r.bind("unfixed.ScrollToFixed", u.options.unfixed);
            u.options.spacerClass && e.addClass(u.options.spacerClass);
            r.bind("resize.ScrollToFixed", function() {
                e.height(r.height())
            });
            r.bind("scroll.ScrollToFixed", function() {
                r.trigger("preUnfixed.ScrollToFixed");
                o();
                r.trigger("unfixed.ScrollToFixed");
                d()
            });
            r.bind("detach.ScrollToFixed", function(t) {
                st(t);
                r.trigger("preUnfixed.ScrollToFixed");
                o();
                r.trigger("unfixed.ScrollToFixed");
                n(window).unbind("resize.ScrollToFixed", g);
                n(window).unbind("scroll.ScrollToFixed", ft);
                r.unbind(".ScrollToFixed");
                u.$el.removeData("ScrollToFixed")
            });
            g()
        };
        u.init()
    };
    n.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3
    };
    n.fn.scrollToFixed = function(t) {
        return this.each(function() {
            new n.ScrollToFixed(this, t)
        })
    }
})(jQuery);;
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (i.style[t] !== undefined) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.1";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f));
            i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.1";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t = t + "Text";
        u.resetText == null && i.data("resetText", i[f]());
        setTimeout(n.proxy(function() {
            i[f](u[t] == null ? this.options[t] : u[t]);
            t == "loadingText" ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : i.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")) : this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = this.sliding = this.interval = this.$active = this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            this.options.pause != "hover" || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.1";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = n == "prev" ? -1 : 1,
            r = this.getItemIndex(t),
            u = (r + i) % this.$items.length;
        return this.$items.eq(u)
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            v = i == "next" ? "first" : "last",
            a = this,
            o, s, h, c;
        if (!u.length) {
            if (!this.options.wrap) return;
            u = this.$element.find(".item")[v]()
        }
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), this.$element.trigger(s), s.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
            !r && f.toggle && i == "show" && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n(this.options.trigger).filter('[href="#' + i.id + '"], [data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.1";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return u.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : n.extend({}, u.data(), {
                trigger: this
            });
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        t && t.which === 3 || (n(e).remove(), n(i).each(function() {
            var r = n(this),
                i = u(r),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && ((i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented()) || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function u(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function o(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.1";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = u(f), o = i.hasClass("open"), r(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r);
                if (e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger("shown.bs.dropdown", e)
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, r;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = u(e), s = o.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && o.find(i).trigger("focus"), e.trigger("click");
            (h = " li:not(.divider):visible a", f = o.find('[role="menu"]' + h + ', [role="listbox"]' + h), f.length) && (r = f.index(t.target), t.which == 38 && r > 0 && r--, t.which == 40 && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = o;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e));
            typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$backdrop = this.isShown = null;
            this.scrollbarWidth = 0;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.1";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.options.backdrop && r.adjustBackdrop();
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in").attr("aria-hidden", !1);
                r.enforceFocus();
                u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                f ? r.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    };
    t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n('<div class="modal-backdrop ' + f + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", n.proxy(function(n) {
                    n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop();
        this.adjustDialog()
    };
    t.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var f = n(this),
                r = f.data("bs.tooltip"),
                u = typeof i == "object" && i,
                e = u && u.selector;
            (r || i != "destroy") && (e ? (r || f.data("bs.tooltip", r = {}), r[e] || (r[e] = new t(this, u))) : r || f.data("bs.tooltip", r = new t(this, u)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.1";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(this.options.viewport.selector || this.options.viewport), f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            o = u == "hover" ? "mouseenter" : "focusin";
            s = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i && i.$tip && i.$tip.is(":visible")) {
            i.hoverState = "in";
            return
        }
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
        i.timeout = setTimeout(function() {
            i.hoverState == "out" && i.hide()
        }, i.options.delay.hide)
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            if (y) {
                var w = i,
                    b = this.options.container ? n(this.options.container) : this.$element.parent(),
                    e = this.getPosition(b);
                i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i;
                r.removeClass(w).addClass(i)
            }
            p = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(p, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                n == "out" && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top = t.top + o;
        t.left = t.left + s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        i == "top" && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function e() {
            r.hoverState != "in" && u.detach();
            r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this,
            u = this.tip(),
            f = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(f), !f.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? u.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = u.tagName == "BODY",
            i = u.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.width && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        return this.$tip = this.$tip || n(this.options.template)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type)
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var f = n(this),
                r = f.data("bs.popover"),
                u = typeof i == "object" && i,
                e = u && u.selector;
            (r || i != "destroy") && (e ? (r || f.data("bs.popover", r = {}), r[e] || (r[e] = new t(this, u))) : r || f.data("bs.popover", r = new t(this, u)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.1";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    t.prototype.tip = function() {
        return this.$tip || (this.$tip = n(this.options.template)), this.$tip
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        var u = n.proxy(this.process, this);
        this.$body = n("body");
        this.$scrollElement = n(i).is("body") ? n(window) : n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", u);
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.1";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var i = "offset",
            r = 0,
            t;
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        t = this;
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.1";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function o() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            e ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu") && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            e = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && e ? f.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = this.unpin = this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.1";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= f.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var o = this.affixed == null,
            s = o ? u : f.top,
            h = o ? e : t;
        return i != null && s <= i ? "top" : r != null && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = n("body").height();
            if (typeof r != "object" && (u = f = r), typeof f == "function" && (f = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = i == "bottom" ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            t.offsetBottom != null && (t.offset.bottom = t.offsetBottom);
            t.offsetTop != null && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);;
! function(n) {
    "use strict";

    function t(n) {
        return function(t) {
            if (t && this === t.target) return n.apply(this, arguments)
        }
    }
    var r = function(n, t) {
            this.init(n, t)
        },
        i;
    r.prototype = {
        constructor: r,
        init: function(t, i) {
            if (this.$element = n(t), this.options = n.extend({}, n.fn.modalmanager.defaults, this.$element.data(), typeof i == "object" && i), this.stack = [], this.backdropCount = 0, this.options.resize) {
                var r, u = this;
                n(window).on("resize.modal", function() {
                    r && clearTimeout(r);
                    r = setTimeout(function() {
                        for (var n = 0; n < u.stack.length; n++) u.stack[n].isShown && u.stack[n].layout()
                    }, 10)
                })
            }
        },
        createModal: function(t, i) {
            n(t).modal(n.extend({
                manager: this
            }, i))
        },
        appendModal: function(i) {
            this.stack.push(i);
            var r = this;
            i.$element.on("show.modalmanager", t(function() {
                var t = function() {
                    i.isShown = !0;
                    var t = n.support.transition && i.$element.hasClass("fade");
                    r.$element.toggleClass("modal-open", r.hasOpenModal()).toggleClass("page-overflow", n(window).height() < r.$element.height());
                    i.$parent = i.$element.parent();
                    i.$container = r.createContainer(i);
                    i.$element.appendTo(i.$container);
                    r.backdrop(i, function() {
                        i.$element.show();
                        t && i.$element[0].offsetWidth;
                        i.layout();
                        i.$element.addClass("in").attr("aria-hidden", !1);
                        var u = function() {
                            r.setFocus();
                            i.$element.trigger("shown")
                        };
                        t ? i.$element.one(n.support.transition.end, u) : u()
                    })
                };
                i.options.replace ? r.replace(t) : t()
            }));
            i.$element.on("hidden.modalmanager", t(function() {
                if (r.backdrop(i), i.$element.parent().length)
                    if (i.$backdrop) {
                        var t = n.support.transition && i.$element.hasClass("fade");
                        t && i.$element[0].offsetWidth;
                        n.support.transition && i.$element.hasClass("fade") ? i.$backdrop.one(n.support.transition.end, function() {
                            i.destroy()
                        }) : i.destroy()
                    } else i.destroy();
                else r.destroyModal(i)
            }));
            i.$element.on("destroyed.modalmanager", t(function() {
                r.destroyModal(i)
            }))
        },
        getOpenModals: function() {
            for (var t = [], n = 0; n < this.stack.length; n++) this.stack[n].isShown && t.push(this.stack[n]);
            return t
        },
        hasOpenModal: function() {
            return this.getOpenModals().length > 0
        },
        setFocus: function() {
            for (var t, n = 0; n < this.stack.length; n++) this.stack[n].isShown && (t = this.stack[n]);
            t && t.focus()
        },
        destroyModal: function(n) {
            n.$element.off(".modalmanager");
            n.$backdrop && this.removeBackdrop(n);
            this.stack.splice(this.getIndexOfModal(n), 1);
            var t = this.hasOpenModal();
            this.$element.toggleClass("modal-open", t);
            t || this.$element.removeClass("page-overflow");
            this.removeContainer(n);
            this.setFocus()
        },
        getModalAt: function(n) {
            return this.stack[n]
        },
        getIndexOfModal: function(n) {
            for (var t = 0; t < this.stack.length; t++)
                if (n === this.stack[t]) return t
        },
        replace: function(i) {
            for (var r, u = 0; u < this.stack.length; u++) this.stack[u].isShown && (r = this.stack[u]);
            r ? (this.$backdropHandle = r.$backdrop, r.$backdrop = null, i && r.$element.one("hidden", t(n.proxy(i, this))), r.hide()) : i && i()
        },
        removeBackdrop: function(n) {
            n.$backdrop.remove();
            n.$backdrop = null
        },
        createBackdrop: function(t, i) {
            var r;
            return this.$backdropHandle ? (r = this.$backdropHandle, r.off(".modalmanager"), this.$backdropHandle = null, this.isLoading && this.removeSpinner()) : r = n(i).addClass(t).appendTo(this.$element), r
        },
        removeContainer: function(n) {
            n.$container.remove();
            n.$container = null
        },
        createContainer: function(r) {
            var u;
            if (u = n('<div class="modal-scrollable">').css("z-index", i("modal", this.getOpenModals().length)).appendTo(this.$element), r && r.options.backdrop != "static") u.on("click.modal", t(function() {
                r.hide()
            }));
            else if (r) u.on("click.modal", t(function() {
                r.attention()
            }));
            return u
        },
        backdrop: function(t, r) {
            var e = t.$element.hasClass("fade") ? "fade" : "",
                o = t.options.backdrop && this.backdropCount < this.options.backdropLimit,
                u, f;
            t.isShown && o ? (u = n.support.transition && e && !this.$backdropHandle, t.$backdrop = this.createBackdrop(e, t.options.backdropTemplate), t.$backdrop.css("z-index", i("backdrop", this.getOpenModals().length)), u && t.$backdrop[0].offsetWidth, t.$backdrop.addClass("in"), this.backdropCount += 1, u ? t.$backdrop.one(n.support.transition.end, r) : r()) : !t.isShown && t.$backdrop ? (t.$backdrop.removeClass("in"), this.backdropCount -= 1, f = this, n.support.transition && t.$element.hasClass("fade") ? t.$backdrop.one(n.support.transition.end, function() {
                f.removeBackdrop(t)
            }) : f.removeBackdrop(t)) : r && r()
        },
        removeSpinner: function() {
            this.$spinner && this.$spinner.remove();
            this.$spinner = null;
            this.isLoading = !1
        },
        removeLoading: function() {
            this.$backdropHandle && this.$backdropHandle.remove();
            this.$backdropHandle = null;
            this.removeSpinner()
        },
        loading: function(t) {
            var r, f, u;
            t = t || function() {};
            this.$element.toggleClass("modal-open", !this.isLoading || this.hasOpenModal()).toggleClass("page-overflow", n(window).height() < this.$element.height());
            this.isLoading ? this.isLoading && this.$backdropHandle ? (this.$backdropHandle.removeClass("in"), u = this, n.support.transition ? this.$backdropHandle.one(n.support.transition.end, function() {
                u.removeLoading()
            }) : u.removeLoading()) : t && t(this.isLoading) : (this.$backdropHandle = this.createBackdrop("fade", this.options.backdropTemplate), this.$backdropHandle[0].offsetWidth, r = this.getOpenModals(), this.$backdropHandle.css("z-index", i("backdrop", r.length + 1)).addClass("in"), f = n(this.options.spinner).css("z-index", i("modal", r.length + 1)).appendTo(this.$element).addClass("in"), this.$spinner = n(this.createContainer()).append(f).on("click.modalmanager", n.proxy(this.loading, this)), this.isLoading = !0, n.support.transition ? this.$backdropHandle.one(n.support.transition.end, t) : t())
        }
    };
    i = function() {
        var i, t = {};
        return function(r, u) {
            if (typeof i == "undefined") {
                var f = n('<div class="modal hide" />').appendTo("body"),
                    e = n('<div class="modal-backdrop hide" />').appendTo("body");
                t.modal = +f.css("z-index");
                t.backdrop = +e.css("z-index");
                i = t.modal - t.backdrop;
                f.remove();
                e.remove();
                e = f = null
            }
            return t[r] + i * u
        }
    }();
    n.fn.modalmanager = function(t, i) {
        return this.each(function() {
            var f = n(this),
                u = f.data("modalmanager");
            u || f.data("modalmanager", u = new r(this, t));
            typeof t == "string" && u[t].apply(u, [].concat(i))
        })
    };
    n.fn.modalmanager.defaults = {
        backdropLimit: 999,
        resize: !0,
        spinner: '<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"><\/div><\/div><\/div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    };
    n.fn.modalmanager.Constructor = r;
    n(function() {
        n(document).off("show.bs.modal").off("hidden.bs.modal")
    })
}(jQuery);;
! function(n) {
    "use strict";
    var t = function(n, t) {
        this.init(n, t)
    };
    t.prototype = {
        constructor: t,
        init: function(t, i) {
            var u = this,
                r;
            this.options = i;
            this.$element = n(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", n.proxy(this.hide, this));
            this.options.remote && this.$element.find(".modal-body").load(this.options.remote, function() {
                var t = n.Event("loaded");
                u.$element.trigger(t)
            });
            r = typeof this.options.manager == "function" ? this.options.manager.call(this) : this.options.manager;
            r = r.appendModal ? r : n(r).modalmanager().data("modalmanager");
            r.appendModal(this)
        },
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = n.Event("show");
            this.isShown || (this.$element.trigger(t), t.isDefaultPrevented()) || (this.escape(), this.tab(), this.options.loading && this.loading())
        },
        hide: function(t) {
            (t && t.preventDefault(), t = n.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.tab(), this.isLoading && this.loading(), n(document).off("focusin.modal"), this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden", !0), n.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        layout: function() {
            var i = this.options.height ? "height" : "max-height",
                r = this.options.height || this.options.maxHeight,
                t, u;
            this.options.width ? (this.$element.css("width", this.options.width), t = this, this.$element.css("margin-left", function() {
                return /%/ig.test(t.options.width) ? -(parseInt(t.options.width) / 2) + "%" : -(n(this).width() / 2) + "px"
            })) : (this.$element.css("width", ""), this.$element.css("margin-left", ""));
            this.$element.find(".modal-body").css("overflow", "").css(i, "");
            r && this.$element.find(".modal-body").css("overflow", "auto").css(i, r);
            u = n(window).height() - 10 < this.$element.height();
            u || this.options.modalOverflow ? this.$element.css("margin-top", 0).addClass("modal-overflow") : this.$element.css("margin-top", 0 - this.$element.height() / 2).removeClass("modal-overflow")
        },
        tab: function() {
            var t = this;
            if (this.isShown && this.options.consumeTab) this.$element.on("keydown.tabindex.modal", "[data-tabindex]", function(i) {
                if (i.keyCode && i.keyCode == 9) {
                    var r = n(this),
                        u = n(this);
                    t.$element.find("[data-tabindex]:enabled:not([readonly])").each(function(t) {
                        r = t.shiftKey ? r.data("tabindex") > n(this).data("tabindex") ? r = n(this) : u = n(this) : r.data("tabindex") < n(this).data("tabindex") ? r = n(this) : u = n(this)
                    });
                    r[0] !== n(this)[0] ? r.focus() : u.focus();
                    i.preventDefault()
                }
            });
            else this.isShown || this.$element.off("keydown.tabindex.modal")
        },
        escape: function() {
            var n = this;
            if (this.isShown && this.options.keyboard) {
                this.$element.attr("tabindex") || this.$element.attr("tabindex", -1);
                this.$element.on("keyup.dismiss.modal", function(t) {
                    t.which == 27 && n.hide()
                })
            } else this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var t = this,
                i = setTimeout(function() {
                    t.$element.off(n.support.transition.end);
                    t.hideModal()
                }, 500);
            this.$element.one(n.support.transition.end, function() {
                clearTimeout(i);
                t.hideModal()
            })
        },
        hideModal: function() {
            var n = this.options.height ? "height" : "max-height",
                t = this.options.height || this.options.maxHeight;
            t && this.$element.find(".modal-body").css("overflow", "").css(n, "");
            this.$element.hide().trigger("hidden")
        },
        removeLoading: function() {
            this.$loading.remove();
            this.$loading = null;
            this.isLoading = !1
        },
        loading: function(t) {
            var i, r, u;
            t = t || function() {};
            i = this.$element.hasClass("fade") ? "fade" : "";
            this.isLoading ? this.isLoading && this.$loading ? (this.$loading.removeClass("in"), u = this, n.support.transition && this.$element.hasClass("fade") ? this.$loading.one(n.support.transition.end, function() {
                u.removeLoading()
            }) : u.removeLoading()) : t && t(this.isLoading) : (r = n.support.transition && i, this.$loading = n('<div class="loading-mask ' + i + '">').append(this.options.spinner).appendTo(this.$element), r && this.$loading[0].offsetWidth, this.$loading.addClass("in"), this.isLoading = !0, r ? this.$loading.one(n.support.transition.end, t) : t())
        },
        focus: function() {
            var n = this.$element.find(this.options.focusOn);
            n = n.length ? n : this.$element;
            n.focus()
        },
        attention: function() {
            if (this.options.attentionAnimation) {
                this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);
                var n = this;
                setTimeout(function() {
                    n.$element.addClass("animated").addClass(n.options.attentionAnimation)
                }, 0)
            }
            this.focus()
        },
        destroy: function() {
            var t = n.Event("destroy");
            (this.$element.trigger(t), t.isDefaultPrevented()) || (this.$element.off(".modal").removeData("modal").removeClass("in").attr("aria-hidden", !0), this.$parent !== this.$element.parent() ? this.$element.appendTo(this.$parent) : this.$parent.length || (this.$element.remove(), this.$element = null), this.$element.trigger("destroyed"))
        }
    };
    n.fn.modal = function(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("modal"),
                e = n.extend({}, n.fn.modal.defaults, f.data(), typeof i == "object" && i);
            u || f.data("modal", u = new t(this, e));
            typeof i == "string" ? u[i].apply(u, [].concat(r)) : e.show && u.show()
        })
    };
    n.fn.modal.defaults = {
        keyboard: !0,
        backdrop: !0,
        loading: !1,
        show: !0,
        width: null,
        height: null,
        maxHeight: null,
        modalOverflow: !1,
        consumeTab: !0,
        focusOn: null,
        replace: !1,
        resize: !1,
        attentionAnimation: "shake",
        manager: "body",
        spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"><\/div><\/div><\/div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    };
    n.fn.modal.Constructor = t;
    n(function() {
        n(document).off("click.modal").on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var i = n(this),
                r = i.attr("href"),
                u = n(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                f = u.data("modal") ? "toggle" : n.extend({
                    remote: !/#/.test(r) && r
                }, u.data(), i.data());
            t.preventDefault();
            u.modal(f).one("hide", function() {
                i.focus()
            })
        })
    })
}(window.jQuery);;
(function(n) {
    n.fn.Thumbelina = function(t) {
        var l = this,
            u = n("ul", this),
            f = 0,
            r = 0,
            i = 0,
            s = 0,
            h = 0,
            e, o, c, a;
        u.addClass("thumbelina").wrap('<div style="position:absolute;overflow:hidden;width:100%;height:100%;">');
        t = n.extend({}, n.fn.Thumbelina.defaults, t);
        o = t.orientation === "vertical" ? {
            outerSizeFunc: "outerHeight",
            cssAttr: "top",
            display: "block"
        } : {
            outerSizeFunc: "outerWidth",
            cssAttr: "left",
            display: "inline-block"
        };
        n("li", u).css({
            display: o.display
        });
        c = function(n, t) {
            n.bind("mousedown mouseup touchend touchstart", function(n) {
                return f = n.type === "mouseup" || n.type === "touchend" ? 0 : t, !1
            })
        };
        c(t.$bwdBut, 1);
        c(t.$fwdBut, -1);
        e = o.outerSizeFunc;
        a = function() {
            var n;
            if (f || r !== i || s !== l[e]()) s = l[e](), h = 0;
            else if (h++, h > 100) return;
            i += t.maxSpeed * f;
            n = s - u[e]();
            n > 0 && (n = 0);
            i < n && (i = n);
            i > 0 && (i = 0);
            i === n ? t.$fwdBut.addClass("disabled") : t.$fwdBut.removeClass("disabled");
            i === 0 ? t.$bwdBut.addClass("disabled") : t.$bwdBut.removeClass("disabled");
            r += (i - r) / t.easing;
            Math.abs(i - r) < .001 && (r = i);
            u.css(o.cssAttr, Math.floor(r))
        };
        setInterval(function() {
            a()
        }, 1e3 / 60)
    };
    n.fn.Thumbelina.defaults = {
        orientation: "horizontal",
        easing: 10,
        maxSpeed: 8,
        $bwdBut: null,
        $fwdBut: null
    }
})(jQuery);
//# sourceMappingURL=thumbelina.min.js.map
;
(function(n) {
    var t = function(t, i) {
        var u = n.extend({}, n.fn.nivoSlider.defaults, i),
            r = {
                currentSlide: 0,
                currentImage: "",
                totalSlides: 0,
                running: !1,
                paused: !1,
                stop: !1,
                controlNavEl: !1
            },
            f = n(t),
            e, s, v, o, h, l;
        if (f.data("nivo:vars", r).addClass("nivoSlider"), e = f.children(), e.each(function() {
                var t = n(this),
                    i = "",
                    u, f;
                t.is("img") || (t.is("a") && (t.addClass("nivo-imageLink"), i = t), t = t.find("img:first"));
                u = u === 0 ? t.attr("width") : t.width();
                f = f === 0 ? t.attr("height") : t.height();
                i !== "" && i.css("display", "none");
                t.css("display", "none");
                r.totalSlides++
            }), u.randomStart && (u.startSlide = Math.floor(Math.random() * r.totalSlides)), u.startSlide > 0 && (u.startSlide >= r.totalSlides && (u.startSlide = r.totalSlides - 1), r.currentSlide = u.startSlide), r.currentImage = n(e[r.currentSlide]).is("img") ? n(e[r.currentSlide]) : n(e[r.currentSlide]).find("img:first"), n(e[r.currentSlide]).is("a") && n(e[r.currentSlide]).css("display", "block"), s = n("<img/>").addClass("nivo-main-image"), s.attr("src", r.currentImage.attr("src")).show(), f.append(s), n(window).resize(function() {
                f.children("img").width(f.width());
                s.attr("src", r.currentImage.attr("src"));
                s.stop().height("auto");
                n(".nivo-slice").remove();
                n(".nivo-box").remove()
            }), f.append(n('<div class="nivo-caption"><\/div>')), v = function(t) {
                var u = n(".nivo-caption", f),
                    i;
                r.currentImage.attr("title") != "" && r.currentImage.attr("title") != undefined ? (i = r.currentImage.attr("title"), i.substr(0, 1) == "#" && (i = n(i).html()), u.css("display") == "block" ? setTimeout(function() {
                    u.html(i)
                }, t.animSpeed) : (u.html(i), u.stop().fadeIn(t.animSpeed))) : u.stop().fadeOut(t.animSpeed)
            }, v(u), o = 0, !u.manualAdvance && e.length > 1 && (o = setInterval(function() {
                a(f, e, u, !1)
            }, u.pauseTime)), u.directionNav) {
            f.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + u.prevText + '<\/a><a class="nivo-nextNav">' + u.nextText + "<\/a><\/div>");
            n(f).on("click", "a.nivo-prevNav", function() {
                if (r.running) return !1;
                clearInterval(o);
                o = "";
                r.currentSlide -= 2;
                a(f, e, u, "prev")
            });
            n(f).on("click", "a.nivo-nextNav", function() {
                if (r.running) return !1;
                clearInterval(o);
                o = "";
                a(f, e, u, "next")
            })
        }
        if (u.controlNav) {
            for (r.controlNavEl = n('<div class="nivo-controlNav"><\/div>'), f.after(r.controlNavEl), h = 0; h < e.length; h++) u.controlNavThumbs ? (r.controlNavEl.addClass("nivo-thumbs-enabled"), l = e.eq(h), l.is("img") || (l = l.find("img:first")), l.attr("data-thumb") && r.controlNavEl.append('<a class="nivo-control" rel="' + h + '"><img src="' + l.attr("data-thumb") + '" alt="" /><\/a>')) : r.controlNavEl.append('<a class="nivo-control" rel="' + h + '">' + (h + 1) + "<\/a>");
            n("a:eq(" + r.currentSlide + ")", r.controlNavEl).addClass("active");
            n("a", r.controlNavEl).bind("click", function() {
                if (r.running || n(this).hasClass("active")) return !1;
                clearInterval(o);
                o = "";
                s.attr("src", r.currentImage.attr("src"));
                r.currentSlide = n(this).attr("rel") - 1;
                a(f, e, u, "control")
            })
        }
        u.pauseOnHover && f.hover(function() {
            r.paused = !0;
            clearInterval(o);
            o = ""
        }, function() {
            r.paused = !1;
            o !== "" || u.manualAdvance || (o = setInterval(function() {
                a(f, e, u, !1)
            }, u.pauseTime))
        });
        f.bind("nivo:animFinished", function() {
            s.attr("src", r.currentImage.attr("src"));
            r.running = !1;
            n(e).each(function() {
                n(this).is("a") && n(this).css("display", "none")
            });
            n(e[r.currentSlide]).is("a") && n(e[r.currentSlide]).css("display", "block");
            o !== "" || r.paused || u.manualAdvance || (o = setInterval(function() {
                a(f, e, u, !1)
            }, u.pauseTime));
            u.afterChange.call(this)
        });
        var c = function(t, i, r) {
                var e, u, f;
                for (n(r.currentImage).parent().is("a") && n(r.currentImage).parent().css("display", "block"), n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show(), e = n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height(), u = 0; u < i.slices; u++) f = Math.round(t.width() / i.slices), u === i.slices - 1 ? t.append(n('<div class="nivo-slice" name="' + u + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (f + u * f - f) + 'px;" /><\/div>').css({
                    left: f * u + "px",
                    width: t.width() - f * u + "px",
                    height: e + "px",
                    opacity: "0",
                    overflow: "hidden"
                })) : t.append(n('<div class="nivo-slice" name="' + u + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (f + u * f - f) + 'px;" /><\/div>').css({
                    left: f * u + "px",
                    width: f + "px",
                    height: e + "px",
                    opacity: "0",
                    overflow: "hidden"
                }));
                n(".nivo-slice", t).height(e);
                s.stop().animate({
                    height: n(r.currentImage).height()
                }, i.animSpeed)
            },
            y = function(t, i, r) {
                var e, o, f, u;
                for (n(r.currentImage).parent().is("a") && n(r.currentImage).parent().css("display", "block"), n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show(), e = Math.round(t.width() / i.boxCols), o = Math.round(n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / i.boxRows), f = 0; f < i.boxRows; f++)
                    for (u = 0; u < i.boxCols; u++) u === i.boxCols - 1 ? (t.append(n('<div class="nivo-box" name="' + u + '" rel="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * f + "px; left:-" + e * u + 'px;" /><\/div>').css({
                        opacity: 0,
                        left: e * u + "px",
                        top: o * f + "px",
                        width: t.width() - e * u + "px"
                    })), n('.nivo-box[name="' + u + '"]', t).height(n('.nivo-box[name="' + u + '"] img', t).height() + "px")) : (t.append(n('<div class="nivo-box" name="' + u + '" rel="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * f + "px; left:-" + e * u + 'px;" /><\/div>').css({
                        opacity: 0,
                        left: e * u + "px",
                        top: o * f + "px",
                        width: e + "px"
                    })), n('.nivo-box[name="' + u + '"]', t).height(n('.nivo-box[name="' + u + '"] img', t).height() + "px"));
                s.stop().animate({
                    height: n(r.currentImage).height()
                }, i.animSpeed)
            },
            a = function(t, i, r, u) {
                var f = t.data("nivo:vars"),
                    e, p, ut, it, k, rt;
                if (f && f.currentSlide === f.totalSlides - 1 && r.lastSlide.call(this), (!f || f.stop) && !u) return !1;
                r.beforeChange.call(this);
                u ? (u === "prev" && s.attr("src", f.currentImage.attr("src")), u === "next" && s.attr("src", f.currentImage.attr("src"))) : s.attr("src", f.currentImage.attr("src"));
                f.currentSlide++;
                f.currentSlide === f.totalSlides && (f.currentSlide = 0, r.slideshowEnd.call(this));
                f.currentSlide < 0 && (f.currentSlide = f.totalSlides - 1);
                f.currentImage = n(i[f.currentSlide]).is("img") ? n(i[f.currentSlide]) : n(i[f.currentSlide]).find("img:first");
                r.controlNav && (n("a", f.controlNavEl).removeClass("active"), n("a:eq(" + f.currentSlide + ")", f.controlNavEl).addClass("active"));
                v(r);
                n(".nivo-slice", t).remove();
                n(".nivo-box", t).remove();
                e = r.effect;
                p = "";
                r.effect === "random" && (p = ["sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse"], e = p[Math.floor(Math.random() * (p.length + 1))], e === undefined && (e = "fade"));
                r.effect.indexOf(",") !== -1 && (p = r.effect.split(","), e = p[Math.floor(Math.random() * p.length)], e === undefined && (e = "fade"));
                f.currentImage.attr("data-transition") && (e = f.currentImage.attr("data-transition"));
                f.running = !0;
                var o = 0,
                    h = 0,
                    a = "",
                    l = "",
                    d = "",
                    b = "";
                if (e === "sliceDown" || e === "sliceDownRight" || e === "sliceDownLeft") c(t, r, f), o = 0, h = 0, a = n(".nivo-slice", t), e === "sliceDownLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                    var i = n(this);
                    i.css({
                        top: "0px"
                    });
                    h === r.slices - 1 ? setTimeout(function() {
                        i.animate({
                            opacity: "1.0"
                        }, r.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + o) : setTimeout(function() {
                        i.animate({
                            opacity: "1.0"
                        }, r.animSpeed)
                    }, 100 + o);
                    o += 50;
                    h++
                });
                else if (e === "sliceUp" || e === "sliceUpRight" || e === "sliceUpLeft") c(t, r, f), o = 0, h = 0, a = n(".nivo-slice", t), e === "sliceUpLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                    var i = n(this);
                    i.css({
                        bottom: "0px"
                    });
                    h === r.slices - 1 ? setTimeout(function() {
                        i.animate({
                            opacity: "1.0"
                        }, r.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + o) : setTimeout(function() {
                        i.animate({
                            opacity: "1.0"
                        }, r.animSpeed)
                    }, 100 + o);
                    o += 50;
                    h++
                });
                else if (e === "sliceUpDown" || e === "sliceUpDownRight" || e === "sliceUpDownLeft") c(t, r, f), o = 0, h = 0, ut = 0, a = n(".nivo-slice", t), e === "sliceUpDownLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                    var i = n(this);
                    h === 0 ? (i.css("top", "0px"), h++) : (i.css("bottom", "0px"), h = 0);
                    ut === r.slices - 1 ? setTimeout(function() {
                        i.animate({
                            opacity: "1.0"
                        }, r.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + o) : setTimeout(function() {
                        i.animate({
                            opacity: "1.0"
                        }, r.animSpeed)
                    }, 100 + o);
                    o += 50;
                    ut++
                });
                else if (e === "fold") c(t, r, f), o = 0, h = 0, n(".nivo-slice", t).each(function() {
                    var i = n(this),
                        u = i.width();
                    i.css({
                        top: "0px",
                        width: "0px"
                    });
                    h === r.slices - 1 ? setTimeout(function() {
                        i.animate({
                            width: u,
                            opacity: "1.0"
                        }, r.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + o) : setTimeout(function() {
                        i.animate({
                            width: u,
                            opacity: "1.0"
                        }, r.animSpeed)
                    }, 100 + o);
                    o += 50;
                    h++
                });
                else if (e === "fade") c(t, r, f), l = n(".nivo-slice:first", t), l.css({
                    width: t.width() + "px"
                }), l.animate({
                    opacity: "1.0"
                }, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                });
                else if (e === "slideInRight") c(t, r, f), l = n(".nivo-slice:first", t), l.css({
                    width: "0px",
                    opacity: "1"
                }), l.animate({
                    width: t.width() + "px"
                }, r.animSpeed * 2, "", function() {
                    t.trigger("nivo:animFinished")
                });
                else if (e === "slideInLeft") c(t, r, f), l = n(".nivo-slice:first", t), l.css({
                    width: "0px",
                    opacity: "1",
                    left: "",
                    right: "0px"
                }), l.animate({
                    width: t.width() + "px"
                }, r.animSpeed * 2, "", function() {
                    l.css({
                        left: "0px",
                        right: ""
                    });
                    t.trigger("nivo:animFinished")
                });
                else if (e === "boxRandom") y(t, r, f), d = r.boxCols * r.boxRows, h = 0, o = 0, b = w(n(".nivo-box", t)), b.each(function() {
                    var i = n(this);
                    h === d - 1 ? setTimeout(function() {
                        i.animate({
                            opacity: "1"
                        }, r.animSpeed, "", function() {
                            t.trigger("nivo:animFinished")
                        })
                    }, 100 + o) : setTimeout(function() {
                        i.animate({
                            opacity: "1"
                        }, r.animSpeed)
                    }, 100 + o);
                    o += 20;
                    h++
                });
                else if (e === "boxRain" || e === "boxRainReverse" || e === "boxRainGrow" || e === "boxRainGrowReverse") {
                    y(t, r, f);
                    d = r.boxCols * r.boxRows;
                    h = 0;
                    o = 0;
                    var g = 0,
                        nt = 0,
                        tt = [];
                    for (tt[g] = [], b = n(".nivo-box", t), (e === "boxRainReverse" || e === "boxRainGrowReverse") && (b = n(".nivo-box", t)._reverse()), b.each(function() {
                            tt[g][nt] = n(this);
                            nt++;
                            nt === r.boxCols && (g++, nt = 0, tt[g] = [])
                        }), it = 0; it < r.boxCols * 2; it++) {
                        for (k = it, rt = 0; rt < r.boxRows; rt++) k >= 0 && k < r.boxCols && (function(i, u, f, o, s) {
                            var h = n(tt[i][u]),
                                c = h.width(),
                                l = h.height();
                            (e === "boxRainGrow" || e === "boxRainGrowReverse") && h.width(0).height(0);
                            o === s - 1 ? setTimeout(function() {
                                h.animate({
                                    opacity: "1",
                                    width: c,
                                    height: l
                                }, r.animSpeed / 1.3, "", function() {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + f) : setTimeout(function() {
                                h.animate({
                                    opacity: "1",
                                    width: c,
                                    height: l
                                }, r.animSpeed / 1.3)
                            }, 100 + f)
                        }(rt, k, o, h, d), h++), k--;
                        o += 100
                    }
                }
            },
            w = function(n) {
                for (var i, r, t = n.length; t; i = parseInt(Math.random() * t, 10), r = n[--t], n[t] = n[i], n[i] = r);
                return n
            },
            p = function(n) {
                this.console && typeof console.log != "undefined" && console.log(n)
            };
        return this.stop = function() {
            n(t).data("nivo:vars").stop || (n(t).data("nivo:vars").stop = !0, p("Stop Slider"))
        }, this.start = function() {
            n(t).data("nivo:vars").stop && (n(t).data("nivo:vars").stop = !1, p("Start Slider"))
        }, u.afterLoad.call(this), this
    };
    n.fn.nivoSlider = function(i) {
        return this.each(function() {
            var r = n(this),
                u;
            if (r.data("nivoslider")) return r.data("nivoslider");
            u = new t(this, i);
            r.data("nivoslider", u)
        })
    };
    n.fn.nivoSlider.defaults = {
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 800,
        pauseTime: 5e3,
        startSlide: 0,
        directionNav: !0,
        controlNav: !0,
        controlNavThumbs: !1,
        pauseOnHover: !0,
        manualAdvance: !1,
        prevText: "Phim trước",
        nextText: "Phim tiếp theo",
        randomStart: !1,
        beforeChange: function() {},
        afterChange: function() {},
        slideshowEnd: function() {},
        lastSlide: function() {},
        afterLoad: function() {}
    };
    n.fn._reverse = [].reverse
})(jQuery);;
/*!
 * Tipped - A Complete Javascript Tooltip Solution - v4.2.1
 * (c) 2012-2014 Nick Stakenburg
 *
 * http://www.tippedjs.com
 *
 * License: http://www.tippedjs.com/license
 */
eval(function(n, t, i, r, u, f) {
    if (u = function(n) {
            return (n < t ? "" : u(parseInt(n / t))) + ((n = n % t) > 35 ? String.fromCharCode(n + 29) : n.toString(36))
        }, !"".replace(/^/, String)) {
        while (i--) f[u(i)] = r[i] || u(i);
        r = [function(n) {
            return f[n]
        }];
        u = function() {
            return "\\w+"
        };
        i = 1
    }
    while (i--) r[i] && (n = n.replace(new RegExp("\\b" + u(i) + "\\b", "g"), r[i]));
    return n
}('!11(a){"11"==78 40&&40.79?40(["7a"],a):41&&!22.5T&&(22.5T=a(41))}(11($){11 1i(a){14 b={};3m(14 c 4l a)b[c]=a[c]+"1i";1c b}11 5U(a){1c 3c*a/1k.3d}11 9i(a){1c a*1k.3d/3c}11 9j(a){1c 1/1k.4m(a)}11 5V(a){1c 7b.9k.2O(7b,a.2u(" ","").1X(","))}11 33(a,b){3m(14 c 4l b)b[c]&&b[c].7c&&b[c].7c===9l?(a[c]=$.1u({},a[c])||{},33(a[c],b[c])):a[c]=b[c];1c a}11 3B(){1c 6.2E.2O(6,Y.2P(1R))}11 4V(){1c 6.2E.2O(6,Y.2P(1R))}11 5W(){6.2E.2O(6,Y.2P(1R))}11 5X(){6.2E.2O(6,Y.2P(1R))}11 2F(){6.2E.2O(6,Y.2P(1R))}11 42(a){6.1d=a}14 X=22.5T||{};$.1u(X,{5Y:"4.2.1"}),X.43={7d:{5Z:!1,2j:{4n:!0},3e:!1,2k:{4W:"4o",2p:5},2d:!1,3n:!0,4X:7e,4Y:7e,3o:75,60:25,4p:!1,2v:{1d:"3p"},7f:!1,1g:"17",2G:!1,1K:{x:0,y:0},9m:!1,4q:!1,2p:!0,1Q:!0,2Q:!0,2H:{1d:"61"},62:"9n",2e:!0,1h:!0,1D:"1d",3f:!0},3C:{2j:!1,2v:{1d:"3p",1A:"3p"},2H:{1d:"3g",1A:"3g"}}},$.1z("4Z".1X(" "),11(a,b){X.43[b]={}});14 Y=63.23.51,2f={9o:11(a,b){14 c=a;1c 11(){14 a=[$.1y(c,6)].3D(Y.2P(1R));1c b.2O(6,a)}},2R:11(a){1c a&&1==a.9p},52:11(a,b){14 c=Y.2P(1R,2);1c 44(11(){1c a.2O(a,c)},b)},7g:11(a){1c 2f.52.2O(6,[a,1].3D(Y.2P(1R,1)))},9q:11(a){1c{x:a.53,y:a.64}},1d:{65:11(){11 a(a){3m(14 b=a;b&&b.7h;)b=b.7h;1c b}1c 11(b){14 c=a(b);1c!(!c||!c.54)}}()}},7i=11(){14 a=0,b="9r-45-";1c 11(c){3m(c=c||b,a++;3E.9s(c+a);)a++;1c c+a}}(),2l=11(a){11 b(b){14 c=2w 9t(b+"([\\\\d.]+)").9u(a);1c c?3q(c[1]):!0}1c{2q:!(!22.9v||-1!==a.2I("66"))&&b("9w "),66:a.2I("66")>-1&&(!!22.67&&67.5Y&&3q(67.5Y())||7.55),9x:a.2I("7j/")>-1&&b("7j/"),7k:a.2I("7k")>-1&&-1===a.2I("9y")&&b("9z:"),7l:!!a.3F(/9A.*9B.*9C/),68:a.2I("68")>-1&&b("68/"),9D:a.2I("7m")>-1&&b("7m/"),69:a.2I("69")>-1&&b("69 "),6a:a.2I("6a")>-1&&b("6a/")}}(9E.9F),2S=11(){11 a(a){1c c(a,"7n")}11 b(a,b){3m(14 c 4l a)1l(2g 0!==d.4r[a[c]])1c"7n"==b?a[c]:!0;1c!1}11 c(a,c){14 d=a.3G(0).6b()+a.9G(1),f=(a+" "+e.9H(d+" ")+d).1X(" ");1c b(f,c)}14 d=3E.9I("1v"),e="9J 9K O 9L 9M".1X(" ");1c{1e:{4s:c("4s"),2x:c("2x"),46:a},2Q:c("9N")&&c("9O"),7o:11(){9P{1c!!("9Q"4l 22||22.7p&&3E 3h 7p)}9R(a){1c!1}}(),9S:11(){14 a=$("<9T>").1e({56:"4t(#9U#9V)"});1c!c("2x")&&a[0].9W}()}}(),1m={7q:["9X","9Y","9Z","a0","a1","a2","a3","a4","a5","a6","a7","a8"],4u:{7r:/^(17|13|1x|1q)(17|13|1x|1q|2J|2a)$/,1Y:/^(17|1x)/,57:/(2J|2a)/,2T:/^(17|1x|13|1q)/},a9:11(){14 a={17:"1b",13:"18",1x:"1b",1q:"18"};1c 11(b){1c a[b]}}(),57:11(a){1c!!a.58().3F(6.4u.57)},59:11(a){1c!6.57(a)},1S:11(a){1c a.58().3F(6.4u.1Y)?"1Y":"2m"},1U:11(a){14 b=2n,c=a.58().3F(6.4u.2T);1c c&&c[1]&&(b=c[1]),b},1X:11(a){1c a.58().3F(6.4u.7r)},7s:{17:"1x",1x:"17",13:"1q",1q:"13"},4v:11(a,b){14 c=6.1X(a);1c b?6.4w(6.4v(6.4w(a))):6.7s[c[1]]+c[2]},4w:11(a){1l(1m.59(a)){14 b=6.1X(a);1c b[2]+b[1]}1c a},5a:11(a,b,c){14 d=$.1u({},a),e={1Y:"x",2m:"y"},f={x:"y",y:"x"},g={17:{1q:"x"},1x:{13:"x"},13:{1x:"y"},1q:{17:"y"}},h=1m.1S(b);1l(h==1m.1S(c)){1l(1m.1U(b)!=1m.1U(c)){14 i=f[e[h]];d[i]*=-1}}24{14 j=d.x;d.x=d.y,d.y=j;14 k=g[1m.1U(b)][1m.1U(c)];k&&(d[k]*=-1),d[e[1m.1S(c)]]=0}1c d},7t:11(a,b,c,d){14 e=1k.4x(a,c),f=1k.1E(a,c),g=1k.4x(b,d),h=1k.1E(b,d);1c{13:e,17:g,18:1k.1E(f-e,0),1b:1k.1E(h-g,0)}},6c:11(a,b,c,d,e,f){14 g=6.7t(c,d,e,f);1c a>=g.13&&a<=g.13+g.18&&b>=g.17&&b<=g.17+g.1b},4y:11(a,b,c){1c 6.6c(a,b,c.1g.13,c.1g.17,c.1g.13+c.1j.18,c.1g.17+c.1j.1b)},47:11(a,b,c,d){1c 1k.aa(1k.7u(1k.4z(c-a),2)+1k.7u(1k.4z(d-b),2))},6d:11(){14 a=11(a,b,c,d,e,f){14 g=(f-b)*(c-a)-(d-b)*(e-a);1c g>0?!0:0>g?!1:!0};1c 11(b,c,d,e,f,g,h,i,j){1l(!j)1c a(b,c,f,g,h,i)!=a(d,e,f,g,h,i)&&a(b,c,d,e,f,g)!=a(b,c,d,e,h,i);14 k,l,m,n;k=d-b,l=e-c,m=h-f,n=i-g;14 o,p;1l(o=(-l*(b-f)+k*(c-g))/(-m*l+k*n),p=(m*(c-g)-n*(b-f))/(-m*l+k*n),o>=0&&1>=o&&p>=0&&1>=p){14 q=b+p*k,r=c+p*l;1c{x:q,y:r}}1c!1}}()},6e={4o:11(){14 a;1c a=2l.7l?{18:22.48,1b:22.2U}:{1b:$(22).1b(),18:$(22).18()}}},6f={7v:{53:0,64:0},5b:{18:30,1b:30},4A:{x:2,y:10},7w:11(a){14 b=a&&"7x"==$.1G(a.53)?a:6.7v;1c{13:b.53-1k.1V(.5*6.5b.18)+6.4A.x,17:b.64-1k.1V(.5*6.5b.1b)+6.4A.y}},7y:11(){1c 6.5b}},7z=11(){11 a(a){1c("0"+3r(a).ab(16)).51(-2)}11 b(b){1c b=b.3F(/^3H?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*(\\d+))?\\)$/),"#"+a(b[1])+a(b[2])+a(b[3])}14 c={7A:"#7B",ac:"#ad",ae:"#7B",af:"#ag",ah:"#ai",aj:"#ak",al:"#am",an:"#ao",ap:"#aq",ar:"#as",at:"#au",av:"#aw",ax:"#ay",az:"#aA",aB:"#aC",aD:"#aE",aF:"#aG"};1c{7C:11(a){1l(/^3H?\\(/.49(a))1c b(a);c[a]&&(a=c[a]);14 d=a.2u("#","");1c/^(?:[0-9a-aH-F]{3}){1,2}$/.49(d)||c.7A,3==d.2o&&(d=d.3G(0)+d.3G(0)+d.3G(1)+d.3G(1)+d.3G(2)+d.3G(2)),"#"+d}}}();3B.5c=2S.1e.2x&&2S.1e.4s,$.1u(3B.23,{2E:11(){6.1a=$.1u({},1R[0]||{}),6.2b(),6.7D()},2b:11(){14 a=2*(6.1a.2o+6.1a.1Q),b={1b:a,18:a};6.1d=$("<1v>").1r("19-4B").1e(1i(b)),6.1d.1w(6.5d=$("<1v>").1r("19-4B-7E")),6.1d.1e({"1P-13":-.5*b.18+"1i","1P-17":-.5*b.1b+"1i"});3m(14 c=6.1a.6g,d=0;c>d;d++){14 e,f;6.5d.1w(e=$("<1v>").1r("19-4B-3I").1w(f=$("<1v>").1r("19-4B-7F"))),f.1e({"1o-2c":6.1a.2c,18:6.1a.18+"1i",1b:6.1a.2o+"1i","1P-13":-.5*6.1a.18+"1i","1f-1Q":1k.1V(.5*6.1a.18)+"1i"}),e.1e({3J:(1/c*(d+1)).aI(2)});14 g={};g[2S.1e.46("2x")]="7E("+aJ/c*(d+1)+"6h)",e.1e(g)}},7D:11(){14 a={};a[2S.1e.46("4s")]="19-4B 1s aK aL("+6.1a.6g+")",6.5d.1e(a)},4a:11(){14 a={};a[2S.1e.46("4s")]="aM",6.5d.1e(a),6.1d.3n()}}),$.1u(4V.23,{2E:11(a){1c a="aN"==$.1G(a)?a:[a],6.aO=a,6.5e=[],$.1z(a,$.1y(11(a,b){14 c=$(b).1n(":1T");c||$(b).20(),6.5e.2K({1d:b,1T:c})},6)),6},3i:11(){$.1z(6.5e,11(a,b){b.1T||$(b.1d).20()}),6.5e=2n}});14 Z=11(){14 a=[];1c{2z:11(b){3m(14 c=2n,d=0;d<a.2o;d++)a[d]&&a[d].4t==b.4t&&(a[d].1G||"7G").6b()==(b.1G||"7G").6b()&&$.7H(a[d].26||{})==$.7H(b.26||{})&&(c=a[d]);1c c},aP:11(b,c,d){14 e=6.2z(b);e||(e=$.1u({7I:{}},b),a.2K(e)),e.7I[c]=d},21:11(b){3m(14 c=0;c<a.2o;c++)a[c]&&a[c].4t==b&&6i a[c]},7J:11(){a=[]}}}(),7K={4C:11(){11 a(b){1c e=X.43.7d,f=33($.1u({},e),X.43.3C),a=d,d(b)}11 b(a){1c a.3F(/^(17|13|1x|1q)$/)&&(a+="2J"),a.2u("2a","2J").2u(" ",""),a}11 c(a){14 b,c={};1l(a.56){14 d={2H:{1d:"3g",1A:!1},2v:{1d:"3p",1A:"3g"}};34(a.56){1M"1L":$.1u(c,d);27;1M"2y":$.1u(c,d,{1D:"2y"});27;1M"7L":$.1u(c,{1D:"2y",2H:{1d:"3g",1A:"3g"},2v:{1d:"3p",1A:"3p"},7M:!0})}b=33($.1u({},c),a)}24 b=a;1c b}11 d(a){14 d=a.1W?a.1W:ba.1a.4D,g=$.1u({},X.43[d]||{});g.1W||(g.1W=ba.1a.4D||"4Z");14 h=33($.1u({},f),c(g)),i=33($.1u({},h),c(a));1l(i[5V("aQ,7N,aR,aS")]=5V("3K,97,aT,7N"),i.2j){14 j=f.2j||{},k=e.2j;"6j"==$.1G(i.2j)&&(i.2j={4n:j.4n||k.4n,1G:j.1G||k.1G}),i.2j=!1}14 l,m=m=i.1g&&i.1g.1D||"2A"==$.1G(i.1g)&&i.1g||f.1g&&f.1g.1D||"2A"==$.1G(f.1g)&&f.1g||e.1g&&e.1g.1D||e.1g;m=b(m);14 n=i.1g&&i.1g.1A||f.1g&&f.1g.1A||e.1g&&e.1g.1A||ba.1m.6k(m);1l(n=b(n),i.1g?"2A"==$.1G(i.1g)?(i.1g=b(i.1g),l={1D:i.1g,1A:ba.1m.7O(i.1g)}):(l={1A:n,1D:m},i.1g.1A&&(l.1A=b(i.1g.1A)),i.1g.1D&&(l.1D=b(i.1g.1D))):l={1A:n,1D:m},1m.59(l.1D)&&1m.1S(l.1D)!=1m.1S(l.1A)&&(l.1D=1m.4w(l.1D)),"2y"==i.1D){14 o=1m.1S(l.1D);l.1D="1Y"==o?l.1D.2u(/(13|1q)/,"2J"):l.1D.2u(/(17|1x)/,"2J")}i.1g=l;14 p;1l("2y"==i.1D?(p=$.1u({},e.1K),$.1u(p,X.43.3C.1K||{}),p=1m.5a(e.1K,e.1g,l.1D,!0),a.1K&&(p=$.1u(p,a.1K||{}))):p={x:i.1K.x,y:i.1K.y},i.1K=p,i.2v&&"3L-2r"==i.2v&&(i.5f=!0,i.2v=!1,i.4Y=0),"2y"==i.1D&&i.3o&&i.3o<3K&&(i.3o=3K),"7L"==i.56&&i.3o&&i.3o<7P&&(i.3o=7P),i.2H){14 q=i.2H;"2A"==$.1G(q)&&(q={1d:q}),i.2H=q}1l(i.2v){14 r=i.2v;"2A"==$.1G(r)&&(r={1d:r}),i.2v=r}1c i.2G&&"2A"!=$.1G(i.2G)&&(i.2G=!1),2l.2q&&2l.2q<9&&$.1u(i,{4X:0,4Y:0,60:0}),i.2e&&(3B.5c?"6j"==$.1G(i.2e)&&(i.2e=f.2e||e.2e||{}):i.2e=!1),i.3e||(i.3e=3E.54),i.2k&&"2A"==$.1G(i.2k)&&(i.2k={4W:i.2k,2p:f.2k&&f.2k.2p||e.2p&&e.2k.2p}),i.2Q&&(i.2Q=2S.2Q),i}14 e,f;1c a}()};$.1u(5W.23,{2E:11(a){6.1A=a,6.1d=a.7Q,6.1A.1H[(6.1A.1a.2Q?"21":"2B")+"4E"]("19-6l-2Q")[(6.1A.1a.1Q?"21":"2B")+"4E"]("19-6l-1Q");14 b,c,d,e,f,g=2S.1e.46("aU");6.1d.1w(b=$("<1v>").1r("19-28").1w($("<1v>").1r("19-3I").1w($("<1v>").1r("19-6m").1w(c=$("<1v>").1r("19-1o").1w(d=$("<1v>").1r("19-1o-1J")))))).1w(e=$("<1v>").1r("19-2V-5g").1w(f=$("<1v>").1r("19-2V-7F"))),c.1e({18:5h,1b:5h,aV:1}),6.1p={1f:3r(c.1e("1f-17-18")),1Q:3r(g?c.1e(g):0),2p:3r(a.2h.1e("2p-17")),3s:c.1e("1f-17-2c"),3j:d.1e("1o-2c"),aW:d.1e("3J"),2L:{1j:{18:e.6n(!0),1b:e.5i(!0)},1a:{6g:3r(f.1e("z-5j"))||12,2o:3q(f.1e("1b")),18:3q(f.1e("18")),1Q:3q(f.1e("1P-1x")),2c:7z.7C(a.2h.1e("2c"))}}},e.21(),b.21(),6.3M=1m.1U(a.1a.1g.1A)||"17",6.1B={},a.1a.1h?(6.1d.1w(6.28=$("<1v>").1r("19-28")),6.1B.1j={18:5h,1b:5h},6.6o("13"),6.1B.4F=6.aX.3N().1j.2r.1b,6.1B.1j=2n,6.4b()):6.1B.4F=0},4b:11(){6.28&&($.1z("17 1q 1x 13".1X(" "),$.1y(11(a,b){6["4G"+b]&&6["4G"+b].4b()},6)),6.28.21(),6.28=2n,6.2L&&(6.2L.21(),6.2L=2n))},2b:11(){6.4b(),6.1d.1w(6.28=$("<1v>").1r("19-28")),$.1z("17 1q 1x 13".1X(" "),$.1y(11(a,b){6.6o(b)},6)),6.1d.1w(6.2L=$("<1v>").1r("19-2V-5g").1L()),6.6p()},7R:11(){14 a,b=$("<1v>").1r("19-3I").1w(a=$("<1v>").1r("19-6m").1w($("<1v>").1r("19-1o-2Q"))).1w($("<1v>").1r("19-1N-1h").1w($("<1v>").1r("19-1N-1h-2T 19-1N-1h-2T-3t")).1w($("<1v>").1r("19-1h")).1w($("<1v>").1r("19-1N-1h-2T 19-1N-1h-2T-3O")));1c $.1z("17 1q 1x 13".1X(" "),$.1y(11(b,c){a.1w($("<1v>").1r("19-1o-1O 19-1o-1O-"+c).1w($("<1v>").1r("19-1o-1O-1N").1w($("<1v>").1r("19-1o-1O-1N-7S").1w($("<1v>").1r("19-1o").1w($("<1v>").1r("19-1o-1C")).1w($("<1v>").1r("19-1o-1J"))).1w($("<1v>").1r("19-1o-1f-7T").1L()))))},6)),b}(),7U:11(a){14 b=6.7R.7V();b.1r("19-3I-"+a),b.1t(".19-1o-2Q").1e(1i({"1f-1Q":6.1p.1Q})),b.1t(".19-1h").2W("26-1h-1g",a);14 c=1k.1E(6.1p.1Q-6.1p.1f,0);b.1t(".19-1o-1C").1e(1i({"1f-17-13-1Q":c,"1f-17-1q-1Q":c})),b.1t(".19-1o-1J").1e(1i({"1f-1x-13-1Q":c,"1f-1x-1q-1Q":c}));14 d={3j:6.1p.3s},e=1m.1S(a),f="1Y"==e;d[f?"1b":"18"]=6.1p.1f+"1i";14 g={17:"1x",1x:"17",13:"1q",1q:"13"};1c d[g[a]]=0,b.1t(".19-1N-1h-2T").1e(d),b},6o:11(a){14 b=6["aY"+a]=6.7U(a);1l(6.28.1w(b),6.1A.1a.1h){14 c=b.1t(".19-1h");6["4G"+a]=2w 5X(c,6,{})}},5k:11(){3B.5c&&(6.4H(6.1p.2L.1j),6.2L.20(),6.2e||(6.2e=2w 3B($.1u({},6.1A.1a.2e||{},6.1p.2L.1a)),6.2L.1w(6.2e.1d)))},3P:11(){3B.5c&&6.2e&&6.2e&&(6.2e.4a(),6.2e=2n,6.2L.1L())},7W:11(){14 a=6.1B.28[6.3M],b=$.1u({},a.1o.1j);1l(6.1A.1C&&!6.1A.1n("35")){6.1d.1t(".19-1o-1C, .19-1o-1J").20(),6.1d.1t(".19-1o").1e({"1o-2c":"2X"});14 c=$.1u({},b),d=1k.1E(6.1p.1Q-6.1p.1f,0),e={"1f-17-13-1Q":d,"1f-17-1q-1Q":d,"1f-1x-13-1Q":d,"1f-1x-1q-1Q":d},f=2w 4V(6.1A.1H),g=6.1A.2M.2U();c.1b-=g,6.1d.1t(".19-1o-1C").1e(1i({1b:g,18:b.18})),e["1f-17-13-1Q"]=0,e["1f-17-1q-1Q"]=0,f.3i(),6.1d.1t(".19-1o-1J").1e(1i(c)).1e(1i(e))}24 6.1d.1t(".19-1o-1C, .19-1o-1J").1L(),6.1d.1t(".19-1o").1e({"1o-2c":6.1p.3j});6.1p.1f&&(6.1d.1t(".19-1o").1e({"1f-2c":"2X"}),6.1d.1t(".19-1o-1f-7T").1e($.1u({},1i(b),{"1f-1Q":6.1p.1Q,"1f-2c":6.1p.3s,"1f-18":6.1p.1f+"1i"})).20())},6p:11(){6.7X();14 a=6.1B.28[6.3M],b=$.1u({},a.1o.1j);6.1d.1t(".19-1o").1e(1i(b)),6.1d.1t(".19-1o, .19-1o-2Q").1e(1i(b)),6.1d.1t(".19-1o-2Q").1e(1i({18:b.18+2*6.1p.1f,1b:b.1b+2*6.1p.1f})),6.7W(),6.1d.1t(".19-1o-1O-1N, .19-1o-1O-1N-7S").7Y("4r"),6.28.1e(1i(a.1j)),6.1d.1e(1i(a.1j)),6.1A.1H.1e(1i(a.1j)),$.1z(6.1B.28,$.1y(11(a,b){14 c=6.1d.1t(".19-3I-"+a),d=6.1B.28[a].1j;c.1e(1i(d)),c.1t(".19-6m").1e(1i(b.1o.1g)).1e(1i({18:d.18-b.1o.1g.13,1b:d.1b-b.1o.1g.17})),c.1t(".19-1N-1h").1e(1i(b.1N.1j)).1e(1i(b.1N.1g));14 e=1m.1S(a);1l("2m"==e){c.1t(".19-1o-1O-17, .19-1o-1O-1x").1e({1b:6.1B.2i+"1i"}),c.1t(".19-1o-1O-1x").1e({17:b.1j.1b-6.1B.2i+"1i"}).1t(".19-1o-1O-1N").1e({"1P-17":-1*b.1j.1b+6.1B.2i+"1i"}),6.1A.1a.1h?c.1t(".19-1o-1O-"+("13"==a?"13":"1q")).1L():c.1t(".19-1o-1O-1q").1L(),"1q"==a?c.1t(".19-1o-1O-13").1e({18:b.1j.18-b.6q-6.1p.1f+"1i"}):c.1t(".19-1o-1O-1q").1e({"1P-13":6.1p.1f+"1i"}).1t(".19-1o-1O-1N").1e({"1P-13":-1*6.1p.1f+"1i"}),6.1A.1a.1h||c.1t(".19-1o-1O-13").1e({18:b.1j.18+"1i"});14 f=c.1t(".19-1o-1O-13, .19-1o-1O-1q");f.1e({1b:b.1j.1b-2*6.1B.2i+"1i","1P-17":6.1B.2i+"1i"}),f.1t(".19-1o-1O-1N").1e({"1P-17":-1*6.1B.2i+"1i"})}24{c.1t(".19-1o-1O-13, .19-1o-1O-1q").1e({18:6.1B.2i+"1i"}),c.1t(".19-1o-1O-1q").1e({13:b.1j.18-6.1B.2i+"1i"}).1t(".19-1o-1O-1N").1e({"1P-13":-1*b.1j.18+6.1B.2i+"1i"}),6.1A.1a.1h?c.1t(".19-1o-1O-"+("17"==a?"17":"1x")).1L():c.1t(".19-1o-1O-1x").1L(),"1x"==a?c.1t(".19-1o-1O-17").1e({1b:b.1j.1b-b.6q-6.1p.1f+"1i"}):c.1t(".19-1o-1O-1x").1e({"1P-17":6.1p.1f+"1i"}).1t(".19-1o-1O-1N").1e({"1P-17":-1*6.1p.1f+"1i"}),6.1A.1a.1h||c.1t(".19-1o-1O-17").1e({1b:b.1j.1b+"1i"});14 f=c.1t(".19-1o-1O-17, .19-1o-1O-1x");f.1e({18:b.1j.18-2*6.1B.2i+"1i","1P-13":6.1B.2i+"1i"}),f.1t(".19-1o-1O-1N").1e({"1P-13":-1*6.1B.2i+"1i"})}},6)),6.2L.1e({17:a.1o.1g.17+6.1p.1f,13:a.1o.1g.13+6.1p.1f}),6.1B.3u={},$.1z(1m.7q,$.1y(11(a,b){6.1B.3u[b]=6.7Z(b)},6))},7X:11(){14 a=(6.1p.2p,6.1p.1Q,6.1p.1f),b=6.1B.4F||0,c=$.1u({},6.1B.1j||{});6.1B={28:{},1j:c,4F:b},6.1B.2i=1k.1E(6.1p.1f,6.1p.1Q)||0;14 d={18:0,1b:0},e=0,f=0;6.1A.1a.1h&&(d=6.6r.3N().1j.2r,e=6.6r.1p.1K,f=1k.1E(d.1b-6.1p.1f,0)),6.1B.6s=d,6.1B.80=e,1m.1S(6.3M),$.1z("17 1q 1x 13".1X(" "),$.1y(11(b,e){14 g=1m.1S(e),h="2m"==g,i={18:c.18+2*a,1b:c.1b+2*a},j=i[h?"1b":"18"]-2*6.1B.2i,k={1j:i,6q:f,1g:{17:0,13:0},1o:{1j:$.1u({},c),1g:{17:0,13:0}}};34(6.1B.28[e]=k,k.1j[h?"18":"1b"]+=f,("17"==e||"13"==e)&&(k.1o.1g[e]+=f),$.1u(k,{1N:{1g:{17:0,13:0},1j:{18:1k.1V(h?d.1b:j),1b:1k.1V(h?j:d.1b)}}}),e){1M"17":1M"1x":k.1N.1g.13+=6.1B.2i,"1x"==e&&(k.1N.1g.17+=i.1b-a-f);27;1M"13":1M"1q":k.1N.1g.17+=6.1B.2i,"1q"==e&&(k.1N.1g.13+=i.18-a-f)}},6))},4H:11(a){14 b=6.1B.1j;b&&b.18==a.18&&b.1b==a.1b||(6.1B.1j=a,6.2b())},81:11(a){6.3M=a,6.1d.1t(".19-3I").1L(),6.1d.1t(".19-3I-"+6.3M).20(),6.6p()},7Z:11(a){14 b=1m.1U(a),c=1m.1S(a);6.1B.1j;14 d=6.1B.2i,e=6["4G"+b],f=6.1B.80,g=6.1A.1a.1h?e.3N().1j.2r.18:0,h=d+f+.5*g,i={1h:{}},j={13:0,1q:0,5l:0,5m:0},k={17:0,13:0},l={17:0,13:0},m=6.1B.28[b],h=0;1l("1Y"==c){14 n=m.1j.18;6.1A.1a.1h&&(n=m.1N.1j.18,2*f>n-g&&(f=1k.2Y(.5*(n-g))||0),h=d+f+.5*g);14 o=n-2*f,p=1m.1X(a),q=f;34(p[2]){1M"13":j.1q=o-g,k.13=h;27;1M"2J":q+=1k.1V(.5*o-.5*g),j.13=q-f,j.1q=q-f,k.13=l.13=1k.1V(.5*m.1j.18);27;1M"1q":q+=o-g,j.13=o-g,k.13=m.1j.18-h,l.13=m.1j.18}"1x"==p[1]&&(k.17+=m.1j.1b,l.17+=m.1j.1b),$.1u(i.1h,{1g:{13:q},3t:{18:q},3O:{13:q+g,18:n-q-g}})}24{14 r=m.1j.1b;6.1A.1a.1h&&(r=m.1N.1j.1b,2*f>r-g&&(f=1k.2Y(.5*(r-g))||0),h=d+f+.5*g);14 s=r-2*f,p=1m.1X(a),t=f;34(p[2]){1M"17":j.5m=s-g,k.17=h;27;1M"2J":t+=1k.1V(.5*s-.5*g),j.5l=t-f,j.5m=t-f,k.17=l.17=1k.1V(.5*m.1j.1b);27;1M"1x":t+=s-g,j.5l=s-g,k.17=m.1j.1b-h,l.17=m.1j.1b}"1q"==p[1]&&(k.13+=m.1j.18,l.13+=m.1j.18),$.1u(i.1h,{1g:{17:t},3t:{1b:t},3O:{17:t+g,1b:r-t-g}})}1c i.5n=j,i.1h.1I=k,i.1I=l,i},82:11(a,b){14 c=6.1B.83;1l(c!=a){6.1B.83=a;14 d=1m.1U(a);6.81(d)}6.1A.1a.1h&&6.84(a,b)},84:11(a,b){14 c=6.1B.4A;1l(!c||c.1g!=a||c.1N.x!=b.x||c.1N.y!=b.y){6.1B.4A={1g:a,1N:b};14 d=1m.1U(a),e={1Y:"x",2m:"y"}[1m.1S(a)],f={x:{13:"13",18:"18"},y:{13:"17",18:"1b"}}[e],g=6["4G"+d],h=33({},6.1B.3u[a].1h);b&&0!==b[e]&&(h.3t[f.18]+=b[e],h.1g[f.13]+=b[e],h.3O[f.13]+=b[e],h.3O[f.18]-=b[e]),6.3M=d,g.1d.1e(1i(h.1g)),g.1d.85(".19-1N-1h-2T-3t").1e(1i(h.3t)),g.1d.85(".19-1N-1h-2T-3O").1e(1i(h.3O))}}}),$.1u(5X.23,{2E:11(a,b){6.1d=$(a),6.1d[0]&&(6.1W=b,6.1d.6t("19-1h-3C"),6.1p=$.1u({},b.1p,{18:6.1d.48(),1b:6.1d.2U(),1K:3r(6.1d.1e("1P-13")),5o:3r(6.1d.1e("1P-17"))}),6.1d.1r("19-1h-3C"),6.1a=$.1u({},1R[2]||{}),6.2Z=6.1d.2W("26-1h-1g")||"17",6.86=3K,6.2b())},4b:11(){6.1d.3Q("")},2b:11(){6.4b();14 a=6.1p.3j,b=a.2I("3H")>-1&&3q(a.2u(/^.*,(.+)\\)/,"$1")),c=b&&1>b;6.4I=c&&2S.1e.2x,6.1p.1f||(6.4I=!1),6[(6.4I?"2b":"aZ")+"b0"]()},b1:11(){6.1d.1w(6.36=$("<1v>").1r("19-1h-36").1w(6.6u=$("<1v>").1r("19-1h-6u").1w(6.2x=$("<1v>").1r("19-1h-2x").1w(6.4c=$("<1v>").1r("19-1h-2T").1w(6.1f=$("<1v>").1r("19-1h-1f")).1w($("<1v>").1r("19-1h-1f-3R")).1w($("<1v>").1r("19-1h-5p")))))),6.2x.1w(6.87=6.4c.7V().1r("19-1h-2T-b2")),6.b3=6.4c.2B(6.87);14 a=6.3N(),b=a.1j,c=6.86,d=1m.1U(6.2Z);1l(6.1d.1t(".19-1h-36").1e({18:l?b.1Z.1b:b.1Z.18,1b:l?b.1Z.18:b.1Z.1b}),"17"==d||"13"==d){14 e={};e["1P-"+d]=6.1p.5o,6.1d.1t(".19-1h-36").1e(e)}6.2x.1e({18:b.1Z.18*c+"1i",1b:b.1Z.1b*c+"1i"});14 f=2S.1e.46("2x"),g={"1o-2c":"2X","1f-1x-2c":6.1p.3j,"1f-13-18":.5*b.1Z.18*c+"1i","1f-1x-18":b.1Z.1b*c+"1i"};g[f]="6v("+a.1f*c+"1i, 0)",6.1d.1t(".19-1h-5p").1e(g);14 h=6.1p.3s;37=h.2I("3H")>-1&&3q(h.2u(/^.*,(.+)\\)/,"$1")),37&&1>37?h=(h.88(0,h.89(","))+")").2u("3H","8a"):37=1;14 i={"1o-2c":"2X","1f-1q-18":a.1f*c+"1i",18:a.1f*c+"1i","1P-13":-2*a.1f*c+"1i","1f-2c":h,3J:37};i[f]="4J("+a.4J+"6h) 6v("+a.1f*c+"1i, "+-1*6.1p.1f*c+"1i)",6.1d.1t(".19-1h-1f").1e(i);14 h=6.1p.3s;37=h.2I("3H")>-1&&3q(h.2u(/^.*,(.+)\\)/,"$1")),37&&1>37?h=(h.88(0,h.89(","))+")").2u("3H","8a"):37=1;14 j={18:a.1f*c+"1i","1f-1q-18":a.1f*c+"1i","1f-1q-2c":h,1o:h,3J:37,"1P-13":-2*a.1f*c+"1i"};1l(j[f]="4J("+a.4J+"6h) 6v("+a.1f*c+"1i, "+(b.1Z.1b-6.1p.1f)*c+"1i)",6.1d.1t(".19-1h-1f-3R").1e(j),6.3v(6.2Z),c>1){14 k={};k[f]="b4("+1/c+","+1/c+")",6.6u.1e(k)}14 l=/^(13|1q)$/.49(6.2Z);6.1p.1f||6.1d.1t(".19-1h-1f, .19-1h-1f-3R").1L(),6.1d.1e({18:l?b.2r.1b:b.2r.18,1b:l?b.2r.18:b.2r.1b})},b5:11(){6.1d.1w(6.36=$("<1v>").1r("19-1h-36").1w($("<1v>").1r("19-1h-8b").1w($("<1v>").1r("19-1h-1f").1w($("<1v>").1r("19-1h-1f-3R")).1w($("<1v>").1r("19-1h-1f-2a-1K").1w($("<1v>").1r("19-1h-1f-2a-1K-6w").1w($("<1v>").1r("19-1h-1f-2a"))))).1w($("<1v>").1r("19-1h-5p"))));14 a=6.3N(),b=a.1j,c=/^(13|1q)$/.49(6.2Z),d=/^(1x)$/.49(6.2Z),e=/^(1q)$/.49(6.2Z),f=1m.1U(6.2Z);1l(6.1d.1e({18:c?b.2r.1b:b.2r.18,1b:c?b.2r.18:b.2r.1b}),6.1d.1t(".19-1h-8b").2B(6.1d.1t(".19-1h-36")).1e({18:c?b.1Z.1b:b.1Z.18,1b:c?b.1Z.18:b.1Z.1b}),"17"==f||"13"==f){14 g={};g["1P-"+f]=6.1p.5o,6.1d.1t(".19-1h-36").1e(g)}6.1d.1t(".19-1h-1f").1e({18:"3K%",1o:"2X"});14 h={3J:2l.2q&&2l.2q<9?6.1p.8c:1};h[c?"1b":"18"]="3K%",h[c?"18":"1b"]=6.1p.1f+"1i",h[d?"17":"1x"]=0,$.1u(h,e?{13:0}:{1q:0}),6.1d.1t(".19-1h-1f-3R").1e(h);14 i={18:0,"1o-2c":"2X",3J:2l.2q&&2l.2q<9?6.1p.8c:1},j=.5*b.1Z.18+"1i 38 2X",k={"1o-2c":"2X"};1l(.5*b.1Z.18-a.1f+"1i 38 2X",c){14 l={13:"4d",17:"50%","1P-17":-.5*b.1Z.18,"1f-17":j,"1f-1x":j};1l($.1u(i,l),i[e?"1q":"13"]=0,i[e?"1f-13":"1f-1q"]=b.1Z.1b+"1i 38 "+6.1p.3s,$.1u(k,l),k[e?"1f-13":"1f-1q"]=b.1Z.1b+"1i 38 "+6.1p.3j,k[e?"1q":"13"]=a.17,k[e?"13":"1q"]="4d",2l.2q&&2l.2q<8){14 m=.5*6.1p.18+"1i 38 2X";$.1u(k,{"1P-17":-.5*6.1p.18,"1f-17":m,"1f-1x":m}),k[e?"1f-13":"1f-1q"]=6.1p.1b+"1i 38 "+6.1p.3j}6.1d.1t(".19-1h-1f-2a-1K").1e({"1P-13":-1*6.1p.1f*(e?-1:1)}).1t(".19-1h-1f-2a-1K-6w").1e({"1P-13":6.1p.1f*(e?-1:1)})}24{14 l={"1P-13":-.5*b.1Z.18,"1f-13":j,"1f-1q":j};1l($.1u(i,l),i[d?"1f-17":"1f-1x"]=b.1Z.1b+"1i 38 "+6.1p.3s,$.1u(k,l),k[d?"1f-17":"1f-1x"]=b.1Z.1b+"1i 38 "+6.1p.3j,k[d?"1x":"17"]=a.17,k[d?"17":"1x"]="4d",2l.2q&&2l.2q<8){14 m=.5*6.1p.18+"1i 38 2X";$.1u(k,{"1P-13":-.5*6.1p.18,"1f-13":m,"1f-1q":m}),k[d?"1f-17":"1f-1x"]=6.1p.1b+"1i 38 "+6.1p.3j}6.1d.1t(".19-1h-1f-2a-1K").1e({"1P-17":-1*6.1p.1f*(d?-1:1)}).1t(".19-1h-1f-2a-1K-6w").1e({"1P-17":6.1p.1f*(d?-1:1)})}6.1d.1t(".19-1h-1f-2a").1e(i),6.1d.1t(".19-1h-1f-3R").1e({"1o-2c":6.1p.3s}),6.1d.1t(".19-1h-5p").1e(k),6.1p.1f||6.1d.1t(".19-1h-1f").1L()},3v:11(a){6.2Z=a,6.2x.2W("6x","19-1h-2x 19-1h-2x-"+a)},3N:11(){14 a=6.1p.1b,b=6.1p.18,c=6.1p.1f;6.4I&&1k.2Y(b)%2&&(b=1k.1E(1k.2Y(b)-1,0));14 d=5U(1k.6y(.5*b/a)),e=90-d,f=c/1k.4m((90-e)*1k.3d/3c),g=c/1k.4m((90-d)*1k.3d/3c),h={18:1k.1V(b+2*f),1b:1k.1V(a+g)},i=1k.1E(c,6.1p.1Q),j=1k.4x(6.1W.1B.1j.18+2*c-2*i,6.1W.1B.1j.1b+2*c-2*i);1l(6.4I&&1k.2Y(j)%2&&(j=1k.1E(1k.2Y(j)-1,0)),j&&h.18>j){14 k=j;h.18=k,h.1b=.5*k/1k.8d(d*1k.3d/3c),h.1b=1k.1V(h.1b)}a=h.1b,b=.5*h.18;14 l=5U(1k.6y(a/b)),m=90-l,n=c/1k.4m(m*1k.3d/3c),o=3c*1k.6y(a/b)/1k.3d,p=-1*(90-o),q=90-o,r=c*1k.8d(q*1k.3d/3c),g=c/1k.4m((90-q)*1k.3d/3c),s=$.1u({},h),t=$.1u({},h);t.1b+=6.1p.5o;14 u=!0;1c 2*c>=h.18&&(u=!1,h={18:0,1b:c}),{b6:u,2r:t,1j:{1Z:s,2r:t},17:g,1f:n,4J:p,3R:r}}});14 ba={2s:{},1a:{4D:"4Z",5q:b7},5r:11(){6.3C(),6.5s=$.1y(6.8e,6),$(22).2C("8f 8g",6.5s)},3C:11(){ba.8h(),6.5s&&$(22).5t("8f 8g",6.5s)},8e:11(){6.5u&&(22.5v(6.5u),6.5u=2n),6.5u=2f.52($.1y(11(){14 a=6.4K();$.1z(a,11(a,b){b.1g()})},6),15)},4L:11(a,b){14 c,d=[],e=[];1l(2f.2R(a)?(c=$(a).26("2t-3w"))&&(d=d.3D(c)):$(a).1z(11(a,b){(c=$(b).26("2t-3w"))&&(d=d.3D(c))}),!d[0]&&!b){14 f=6.6z($(a).4e(".19-1A")[0]);f&&f.1d&&(c=$(f.1d).26("2t-3w")||[],c&&(d=d.3D(c)))}1c d.2o>0&&$.1z(d,$.1y(11(a,b){14 c;(c=6.2s[b])&&e.2K(c)},6)),e},6A:11(a){14 b=[];1c 2f.2R(a)&&(b=6.4L(a)),b[0]&&b[0].1d},2z:11(a){14 b=$.1u({39:!1},1R[1]||{}),c=[];1c 2f.2R(a)?c=6.4L(a):a 3h $?a.1z($.1y(11(a,b){14 d=6.4L(b,!0);d.2o>0&&(c=c.3D(d))},6)):"2A"==$.1G(a)&&$.1z(6.2s,11(b,d){d.1d&&$(d.1d).1n(a)&&c.2K(d)}),b.39&&$.1z(c,11(a,b){b.1n("39",!0)}),c},6z:11(a){1l(!a)1c 2n;14 b=2n;1c $.1z(6.2s,11(c,d){d.1n("2b")&&d.1H[0]===a&&(b=d)}),b},b8:11(a){14 b=[];1c $.1z(6.2s,11(c,d){d.1d&&$(d.1d).1n(a)&&b.2K(d)}),b},8i:11(){14 a=[];1c $.1z(6.2s,11(b,c){c.1n("8j")&&a.2K(c)}),a},20:11(a){$(6.2z(a)).1z(11(a,b){b.20(!1,!0)})},1L:11(a){$(6.2z(a)).1z(11(a,b){b.1L()})},5w:11(a){$(6.2z(a)).1z(11(a,b){b.5w()})},8k:11(a){$.1z(6.4K(),11(b,c){a&&a==c||c.1L()})},8l:11(a){$(6.2z(a)).1z(11(a,b){b.3S()})},8m:11(a){$(6.2z(a)).1z(11(a,b){b.3S()})},3S:11(a){$(6.2z(a)).1z(11(a,b){b.3S()})},4K:11(){14 a=[];1c $.1z(6.2s,11(b,c){c.1T()&&a.2K(c)}),a},b9:11(a){14 b=!1;1c 2f.2R(a)&&$.1z(6.4K()||[],11(c,d){1c d.1d==a?(b=!0,!1):2g 0}),b},8n:11(){14 a,b=0;1c $.1z(6.2s,11(c,d){d.29>b&&(b=d.29,a=d)}),a},8o:11(){6.4K().2o<=1&&$.1z(6.2s,11(a,b){b.1n("2b")&&!b.1a.29&&b.1H.1e({29:b.29=+ba.1a.5q})})},bb:11(){$.1z(6.2s,$.1y(11(a,b){b.1a.2j&&(b.1F&&b.1F.3x&&(b.1F.3x.3T(),b.1F.3x=2n),b.1n("31",!1),b.1n("35",!1))},6)),Z.7J()},2B:11(a){6.2s[a.45]=a},21:11(a){14 b=6.4L(a);$.1z(b,$.1y(11(a,b){14 c=b.45;6i 6.2s[c],2l.2q&&2l.2q<9?2f.7g(11(){b.21()}):b.21()},6))},bc:11(){14 a=6.8i(),b=[];a.2o>0&&$.1z(a,11(a,c){c.1n("3U")&&(b.2K(c),c.4M())}),$.1z(6.2s,$.1y(11(a,b){b.1d&&!2f.1d.65(b.1d)&&6.21(b.1d)},6)),$.1z(b,11(a,b){b.3n()})},8h:11(){$.1z(6.2s,$.1y(11(a,b){b.1d&&6.21(b.1d)},6)),6.2s={}},bd:11(a){6.1a.4D=a||"4Z"},6B:11(a){6.1a.5q=a||0}};1c ba.1m={4f:{13:"1q",1q:"13",17:"1x",1x:"17",2J:"2J",2a:"2a"},6k:11(a){14 b=1m.1X(a),c=b[1],d=b[2],e=1m.1S(a),f=$.1u({1Y:!0,2m:!0},1R[1]||{});1c"1Y"==e?(f.2m&&(c=6.4f[c]),f.1Y&&(d=6.4f[d])):(f.2m&&(d=6.4f[d]),f.1Y&&(c=6.4f[c])),c+d},7O:11(a){14 b=1m.1X(a);1c 6.6k(b[1]+6.4f[b[2]])}},$.1u(2F.23,{2E:11(a,b){1l(6.1d=a,6.1d){14 c;"6C"!=$.1G(b)||2f.2R(b)||b 3h $?c=1R[2]||{}:(c=b,b=2n);14 d=$(a).26("2t-1a");d&&(c=33($.1u({},c),be("({"+d+"})"))),6.1a=7K.4C(c),6.1F={1j:{18:0,1b:0},5x:[],3y:{},32:{},1n:{5y:!1,3U:!1,3x:!1,1T:!1,31:!1,2b:!1,bf:!1,6D:!1,"bg-3V":!1},bh:""},6.5z={5A:$({})};14 e=$(a).2W("1C")||$(a).26("2t-3i-1C");1l(!b){14 f=$(a).2W("26-2t");f?b=f:e&&(b=e)}1l((!b||b 3h $&&!b[0])&&!(6.1a.2j&&6.1a.2j.4t||6.1a.2G))1c 6.bi=!0,2g 0;e&&($(a).26("2t-3i-1C",e),$(a)[0].bj("1C","")),6.1J=b,6.1C=$(6.1d).26("2t-1C"),"8p"!=$.1G(6.1a.1C)&&(6.1C=6.1a.1C),6.29=6.1a.29||+ba.1a.5q;14 g=$(a).26("2t-3w");g||(g=[]);14 h=7i();6.45=h,g.2K(h),$(a).26("2t-3w",g);14 i=$(6.1d).4e(".19-1A")[0],6E;i&&(6E=ba.6z(i))&&6E.1n("8j",!0);14 j=6.1a.1D;6.1D="2y"==j?6.1d:"1d"!=j&&j?2f.2R(j)?j:j 3h $&&j[0]?j[0]:6.1d:6.1d,6.1a.2G&&(6.1J=$("#"+6.1a.2G)[0]),6.1a.2j&&(6.bk=6.1J),6.8q(),ba.2B(6)}},21:11(){6.5t(),6.8r(),6.8s(),6.3P(),6.8t(),6.6F(),6.1n("2b")&&6.1H&&(6.1H.21(),6.1H=2n);14 a=$(6.1d).26("2t-3w")||[],b=$.bl(6.45,a);1l(b>-1&&(a.bm(b,1),$(6.1d).26("2t-3w",a)),a.2o<1){14 c,d="2t-3i-1C";(c=$(6.1d).26(d))&&$(6.1d).2W("1C",c).8u("2t-3i-1C"),$(6.1d).8u("2t-3w")}14 e=$(6.1d).2W("6x")||"",f=e.2u(/(19-bn-45-)\\d+/g,"").2u(/^\\s\\s*/,"").2u(/\\s\\s*$/,"");$(6.1d).2W("6x",f)},3n:11(){6.1a.3n&&!6.1n("3U")&&(6.1H.3n(),6.1n("3U",!0))},4M:11(){1l(6.1n("3U")){14 a;1l("2A"==$.1G(6.1a.3e)){14 b=6.1D;"2y"==b&&(b=6.1d),a=$(b).4e(6.1a.3e).4c()}24 a=$(6.1a.3e);a[0]||(a=$(3E.54)),a.1w(6.1H),6.1n("3U",!1)}},8q:11(){6.1n("3U",!0);14 a={13:"-8v",17:"-8v",3J:0,29:6.29};6.1H=$("<1v>").1r("19-1A").1r("19-1W-"+ba.1a.4D).1r("19-62-"+6.1a.62).1e(a).1L(),6.8w()},2b:11(){6.1n("2b")||(6.4M(),2l.2q&&2l.2q<7&&6.1H.1w(6.bo=$("<bp>").1r("19-bq").2W({br:0,6G:"bs:\'\';"})),6.1H.1w(6.7Q=$("<1v>").1r("19-1W")).1w(6.bt=$("<1v>").1r("19-1J-8x").1w(6.4N=$("<1v>").1r("19-1J-36").1w(6.2M=$("<1v>").1r("19-1C-8x").1w(6.6H=$("<1v>").1r("19-1C-36").1w(6.5B=$("<1v>").1r("19-1C-5C").1w(6.8y=$("<1v>").1r("19-1C-5C-8z").1w(6.8A=$("<1v>").1r("19-1C"))))).1w(6.4g=$("<1v>").1r("19-2d").1w($("<1v>").1r("19-2d-5g").3Q("&8B;")))).1w(6.8C=$("<1v>").1r("19-1J-5C").1w(6.8D=$("<1v>").1r("19-1J-5C-8z").1w(6.2h=$("<1v>").1r("19-1J"))).1w(6.5D=$("<1v>").1r("19-2d").1w($("<1v>").1r("19-2d-5g").3Q("&8B;")))))),6.1W=2w 5W(6),6.4N.1e({"1f-1Q":1k.1E(6.1W.1p.1Q-6.1W.1p.1f,0)+"1i"}),6.8E(),6.1n("2b",!0))},8E:11(){6.1H.bu(".19-2d, .2d-1A","3L",$.1y(11(){6.1n("39",!1),6.1L(!0)},6))},8w:11(){6.2C(6.1d,"3g",6.5E),6.2C(6.1H,"3g",6.5E),6.2C(6.1d,"3p",11(a){6.6I(a)}),6.2C(6.1H,"3p",11(a){6.6I(a)}),6.1a.2H&&$.1z(6.1a.2H,$.1y(11(a,b){14 c,d=!1;34(a){1M"1d":c=6.1d,6.1a.2v&&6.1a.2H&&"3L"==6.1a.2v.1d&&"3L"==6.1a.2H.1d&&(d=!0,6.1n("6D",d));27;1M"1A":c=6.1H;27;1M"1D":c=6.1D}c&&6.2C(c,b,"3L"==b&&d?11(){6.1n("39",!1),6.5w()}:11(){6.1n("39",!1),6.8F()})},6)),6.1a.2v&&$.1z(6.1a.2v,$.1y(11(a,b){14 c;34(a){1M"1d":1l(6.1n("6D")&&"3L"==b)1c;c=6.1d;27;1M"1A":c=6.1H;27;1M"1D":c=6.1D}c&&6.2C(c,b,11(){6.1n("39",!1),6.8G()})},6)),6.1a.5f&&($(6.1d).1r("19-5f"),6.2C(3E.bv,2S.7o?"bw":"3L",$.1y(11(a){1l(6.1T()){14 b=$(a.1D).4e(".19-1A, .19-5f")[0];(!b||b&&b!=6.1H[0]&&b!=6.1d)&&6.1L()}},6))),"2y"==6.1a.1D&&6.2C(6.1d,"3g 61",$.1y(11(a){6.1F.8H=a},6));14 a=!1;6.1a.2H&&"2y"==6.1a.1D&&!6.1a.7M&&(a=!0),a&&6.2C(6.1d,"61",11(){6.1n("2b")&&(6.1n("39",!1),6.1g())})}}),$.1u(2F.23,{4a:11(){1l(6.1H){14 a=6.5z.5A;a.2D([]),6.1H.4a(1,0)}},8F:11(){6.1n("3k")||(6.3l("1L"),6.1n("1T")||6.6J("20")||6.5F("20",$.1y(11(){6.3l("20"),6.20()},6),6.1a.3o||1))},20:11(){1l(6.3l("1L"),!6.1T()&&!6.1n("3k")&&$(6.1D).1n(":1T")){6.1n("1T",!0),6.4M(),6.4a();14 a=6.5z.5A,b=!1,c=!1;6.1n("31")||6.1n("35")||a.2D($.1y(11(a){6.bx={18:0,1b:0},6.8I($.1y(11(d){1c d?(6.1n("1T",!1),6.3n(),2g 0):(6.1g(),6.4O(),b=!0,6.1T()&&"11"==$.1G(6.1a.4q)&&(c=!0,6.1a.4q(6.2h[0],6.1d)),a(),2g 0)},6))},6)),a.2D($.1y(11(a){b||(6.1g(),6.4O()),a()},6)),a.2D($.1y(11(a){6.1n("31")&&6.2h.1e({6K:"1T"}),a()},6)),a.2D($.1y(11(a){1l(6.1n("31")&&!c&&"11"==$.1G(6.1a.4q)){14 b=2w 4V(6.1H);6.1a.4q(6.2h[0],6.1d),b.3i(),a()}24 a()},6)),a.2D($.1y(11(a){6.6L(6.1a.4X,11(){a()})},6)),6.1a.4p&&a.2D($.1y(11(){6.5E()},6))}},6L:11(a,b){a=("7x"==$.1G(a)?a:6.1a.4X)||0,b=b||("11"==$.1G(1R[0])?1R[0]:!1),6.1a.7f&&ba.8k(6),6.1H.8J(a,1,$.1y(11(){b&&b()},6))},8G:11(){6.3l("20"),6.6J("1L")||!6.1T()||6.1n("3k")||6.5F("1L",$.1y(11(){6.3l("1L"),6.1L()},6),6.1a.60||1)},1L:11(a,b){1l(6.3l("20"),6.1T()&&!6.1n("3k")){6.1n("1T",!1),6.4a();14 c=6.5z.5A;c.2D($.1y(11(b){6.8K(a,b)},6)),c.2D(11(a){ba.8o(),a()}),"11"==$.1G(6.1a.8L)&&6.1n("31")&&c.2D($.1y(11(a){6.1a.8L(6.2h[0],6.1d),a()},6));14 d=6.1a.2j;d&&!d.4n&&c.2D($.1y(11(a){6.1n("31",!1),6.1n("35",!1),a()},6)),"11"==$.1G(b)&&c.2D(11(a){b(),a()}),c.2D($.1y(11(a){6.3n(),a()},6))}},8K:11(a,b){b=b||("11"==$.1G(1R[0])?1R[0]:!1),6.4M(),6.1H.8J(a?0:6.1a.4Y,0,$.1y(11(){6.1a.2j&&6.1F.3x&&(6.6F(),6.3P()),6.1H.1L(),b&&b()},6))},5w:11(){6.1n("3k")||6[6.1T()?"1L":"20"]()},4O:11(){1l(6.1n("2b")&&!6.1a.29){14 a=ba.8n();a&&a!=6&&6.29<=a.29&&(6.29=a.29+1,6.1H.1e({"z-5j":6.29}),6.8M&&(6.8M.1e({"z-5j":6.29}),6.29=a.29+2,6.1H.1e({"z-5j":6.29})))}}}),$.1u(2F.23,{8N:11(){!6.4P&&6.1J&&2f.1d.65(6.1J)&&($(6.1J).26("19-3i-2G-5G",$(6.1J).1e("5G")),6.4P=$("<1v>").1L(),$(6.1J).3t($(6.4P).1L()))},8s:11(){14 a;6.1J,6.4P&&6.1J&&((a=$(6.1J).26("19-3i-2G-5G"))&&$(6.1J).1e({5G:a}),$(6.4P).3t(6.1J).21())},5k:11(){6.1a.2e&&!6.1n("2V")&&(6.1n("2V",!0),6.1H.1r("19-1n-2V"),6.1W.5k(),6.1g(),6.4O(),6.6L())},3P:11(){6.1a.2e&&6.1n("2V")&&(6.1n("2V",!1),6.1H.6t("19-1n-2V"),6.1W.3P())},8t:11(){6.1F.3f&&(6.1F.3f.3T(),6.1F.3f=2n)},6F:11(){6.1F.3x&&(6.1F.3x.3T(),6.1F.3x=2n,6.1n("31",!1),6.1n("35",!1))},8I:11(a){1l(!6.1n("35")&&!6.1n("35")){6.1n("35",!0),6.2b();14 b=6.1a.2G?"2G":6.1a.2j?"2j":2f.2R(6.1J)?"1d":"11"==$.1G(6.1J)?"11":"3Q";34(6.2h.1e({6K:"by"}),b){1M"3Q":1M"1d":1M"2G":1l(6.1n("31"))1c a&&a(),2g 0;6.6M({1J:6.1J,1C:6.1C},a);27;1M"11":1l(6.1n("31"))1c a&&a(),2g 0;14 c=6.1J.2P(6.1d);1l(!c)1c 6.1n("35",!1),a&&a(!0),2g 0;6.6M(c,a)}}},6M:11(a,b){14 c={};c="2A"==$.1G(a)||2f.2R(a)||a 3h $?{1J:a,1C:!1}:a;14 a=c.1J,d=c.1C;6.1J=a,6.1C=d,6.8N(),(2f.2R(a)||a 3h $)&&$(a).20(),6.2h.3Q(6.1J),6.8A.3Q(d&&"2A"==$.1G(d)?d:""),6.2M[d?"20":"1L"](),6.4g[(6.1C||6.1a.1C)&&6.1a.2d?"20":"1L"]();14 e=6.1a.2d,f=e&&!(6.1a.1C||6.1C),g=e&&!(6.1a.1C||6.1C)&&"5H"!=e,h=e&&(6.1a.1C||6.1C)&&"5H"!=e;6.5D[f?"20":"1L"](),6.1H[(g?"2B":"21")+"4E"]("19-8O-bz-2d"),6.1H[(h?"2B":"21")+"4E"]("19-8O-1C-2d"),6.2h[(6.1a.2p?"21":"2B")+"4E"]("19-1J-6l-2p"),6.8P($.1y(11(){6.8Q(b)},6))},8P:11(a){1c!$.8R.3f||!6.1a.3f||6.2h.1t("2N").2o<1?(a&&a(),2g 0):(6.5k(),6.1F.3f=6.2h.3f($.1y(11(){6.3P(),a&&a()},6)),2g 0)},8Q:11(a){6.3P(),6.1T()&&6.2h.1e({6K:"1T"}),6.1n("31",!0),6.1n("35",!1),"11"==$.1G(6.1a.5Z)&&6.1a.5Z(6.2h[0],6.1d),a&&a()}}),$.1u(2F.23,{4h:11(a,b){14 a=a||6.1a.1g.1D,b=b||6.1a.1g.1A,c=6.1W.1p.1f;6.1H.1r("19-1A-8S");14 d=6.1H.2W("4r");6.1H.7Y("4r");14 e={17:c,1q:c,1x:c,13:c};1l(6.1a.1h){14 f=0;1l("2m"==1m.1S(b)){14 g=1m.1U(b);e[g]=6.1W.1B.4F;14 h=6.4i(b),i=6.8T(a),j=!1;1m.4y(i.3a,i.3W,h)||1m.4y(i.3z,i.3X,h)?j=!0:$.1z("17 1q 1x 13".1X(" "),$.1y(11(a,b){14 c=6.3Y(h,b);1c 1m.6d(i.3a,i.3W,i.3z,i.3X,c.3a,c.3W,c.3z,c.3X)?(j=!0,!1):2g 0},6)),j&&(f="13"==g?i.3a-h.1g.13:h.1g.13+h.1j.18-i.3a,e[g]+=f)}}1l(6.1a.1K&&"1Y"==1m.1S(b)){14 k=1m.5a(6.1a.1K,6.1a.1g.1D,a);0!==k.x&&(e.1q+=1k.4z(k.x))}14 f;1l(6.1a.2k&&(f=6.1a.2k.2p)){$.1z(e,11(a){e[a]+=f});14 l=1m.1S(b),g=1m.1U(b);"2m"==l?e["13"==g?"1q":"13"]-=f:e["17"==g?"1x":"17"]-=f}14 m=6e.4o(),n=6.1a.2d&&!(6.1a.1C||6.1C)&&"5H"!=6.1a.2d,o={18:0,1b:0};n&&(o={18:6.5D.6n(!0),1b:6.5D.5i(!0)}),6.8D.1e({"2p-1q":o.18+"1i"}),6.4N.1e({18:m.18-e.13-e.1q+"1i"});14 p={18:6.2h.48()+o.18,1b:1k.1E(6.2h.2U(),o.1b||0)},q={18:0,1b:0};1l(6.1C){14 r={18:0,1b:0};6.2M.2B(6.6H).1e({18:"4d",1b:"4d"}),6.1a.2d&&"5H"!=6.1a.2d&&(r={18:6.4g.6n(!0),1b:6.4g.5i(!0)},6.4g.1L()),6.5I&&p.18>6.1a.5J&&6.5B.1e({18:p.18+"1i"}),6.8y.1e({"2p-1q":r.18+"1i"});14 s=3r(6.2M.1e("1f-1x-18"));q={18:6.1C?6.2M.48():0,1b:1k.1E(6.1C?6.2M.2U()+s:0,r.1b+s)},q.18>m.18-e.13-e.1q&&(q.18=m.18-e.13-e.1q,6.6H.1e({18:q.18}),q.1b=1k.1E(6.1C?6.2M.2U()+s:0,r.1b+s)),p.18=1k.1E(q.18,p.18),p.1b+=q.1b,6.2M.1e({1b:1k.1E(6.1C?6.2M.2U():0,r.1b)+"1i"}),6.1a.2d&&6.4g.20()}1l(6.4N.1e({18:p.18+"1i"}),p.1b!=1k.1E(6.2h.2U(),o.1b)+(6.1C?6.5B.5i():0)&&p.18++,6.1n("2V")&&(p=6.1W.1p.2L.1j),6.4H(p),e={17:c,1q:c,1x:c,13:c},6.1a.1h){14 t=1m.1U(b);e[t]=6.1W.6r.3N().1j.2r.1b}6.4N.1e({"1P-17":e.17+"1i","1P-13":+e.13+"1i",18:p.18+"1i"}),(6.1C||6.1a.2d)&&6.2M.1e({1b:6.2M.2U()+"1i",18:p.18+"1i"}),6.1H.6t("19-1A-8S"),6.1H.2W("4r",d);14 u=6.8C.2B(6.5B);1c 6.1a.5J&&p.18>6.1a.5J&&!6.5I&&!6.1n("2V")&&(u.1e({18:6.1a.5J+"1i"}),6.5I=!0,6.4h(a,b),6.5I=!1,u.1e({18:"4d"})),{1J:p,1C:q}},4H:11(a){6.1W.4H(a)},8U:11(a,b){14 c=6.4i(a,b),d=6.4Q(),e=d.1g,f=d.1j,g=c.1g,h=c.1j,i={17:1k.1E(e.17-g.17,0),1x:1k.1E(g.17+h.1b-(e.17+f.1b),0),13:1k.1E(e.13-g.13,0),1q:1k.1E(g.13+h.18-(e.13+f.18),0)};1c e.17>g.17+h.1b&&(i.17-=e.17-(g.17+h.1b)),e.17+f.1b<g.17&&(i.1x-=g.17-(e.17+f.1b)),e.13>g.13+h.18&&g.13+h.18>=e.13&&(i.13-=e.13-(g.13+h.18)),e.13+f.18<g.13&&(i.1q-=g.13-(e.13+f.18)),6.1F.32.bA=i,i},3S:11(){6.1n("2b")&&6.1T()&&6.1g()},1g:11(){1l(6.1T()){6.1n("8V",!0),6.1F.32={},6.1F.1j;14 a=6.1a.1g.1D,b=6.1a.1g.1A,c=b,d=a;6.4h(d,c);14 e=6.5K(d,c),f=33(e),g=[];1l(6.1a.2k){14 h=!1,i={};1l($.1z("17 1q 1x 13".1X(" "),$.1y(11(a,b){(i[b]=6.8W(b,c,!0))&&(h=!0)},6)),h||(f.3Z=!0),f.3Z)6.3v(f);24{g.6N({1g:f,4R:d,4S:c});14 j=1m.4v(a);1l(d=j,c=1m.4v(b),i[1m.1U(d)]?(6.4h(d,c),f=6.5K(d,c)):f.3Z=!1,f.3Z)6.3v(f,c);24{g.6N({1g:f,4R:d,4S:c});14 k,l=a,m=6.8U(c,!0),n="1Y"==1m.1S(l)?["13","1q"]:["17","1x"];k=m[n[0]]===m[n[1]]?"1Y"==1m.1S(l)?"13":"17":n[m[n[0]\]>m[n[1]]?0:1];14 o=1m.1X(l)[1],p=k+o,q=1m.4v(p);1l(d=p,c=q,i[1m.1U(d)]?(6.4h(d,c),f=6.5K(d,c)):f.3Z=!1,f.3Z)6.3v(f,c);24{g.6N({1g:f,4R:d,4S:c});14 r,s=[];1l($.1z(g,11(a,b){1l(b.1g.17>=0&&b.1g.13>=0)r=b;24{14 c=b.1g.17>=0?1:1k.4z(b.1g.17),d=b.1g.13>=0?1:1k.4z(b.1g.13);s.2K({8X:b,6O:c*d})}}),!r){14 t=s[s.2o-1];$.1z(s,11(a,b){b.6O<t.6O&&(t=b)}),r=t.8X}6.4h(r.4R,r.4S,!0),6.3v(r.1g,r.4S)}}}}24 6.3v(f);6.1F.1j=6.1W.1B.1j,6.1n("8V",!1)}},5K:11(a,b){14 b=b||6.1a.1g.1A,c=6.6P(),d={13:0,17:0},e={13:0,17:0};1m.1U(a);14 f=6.1W.1B,g=f.28[1m.1U(b)],h=1m.1S(a),i=1m.1X(a);1l("1Y"==h){14 j=1k.2Y(.5*c.18);34(i[2]){1M"13":e.13=j;27;1M"2J":d.13=c.18-j,e.13=d.13;27;1M"1q":d.13=c.18,e.13=c.18-j}"1x"==i[1]&&(d.17=c.1b,e.17=c.1b)}24{14 j=1k.2Y(.5*c.1b);34(i[2]){1M"17":e.17=j;27;1M"2J":d.17=c.1b-j,e.17=d.17;27;1M"1x":e.17=c.1b-j,d.17=c.1b}"1q"==i[1]&&(d.13=c.18,e.13=c.18)}14 k=6.6Q(),l=$.1u({},c,{17:k.17,13:k.13,1I:d,1E:e}),m={18:g.1j.18,1b:g.1j.1b,17:0,13:0,1I:f.3u[b].1I,1h:f.3u[b].1h};1l(m.17=l.17+l.1I.17,m.13=l.13+l.1I.13,m.17-=m.1I.17,m.13-=m.1I.13,6.1a.1h){14 n=f.6s.18,o={1h:{17:m.17+m.1h.1I.17,13:m.13+m.1h.1I.13},1I:{17:l.17+l.1I.17,13:l.13+l.1I.13},1E:{17:l.17+l.1E.17,13:l.13+l.1E.13}};1l(!1m.6c(o.1h.13,o.1h.17,o.1I.13,o.1I.17,o.1E.13,o.1E.17)){14 o={1h:{17:m.17+m.1h.1I.17,13:m.13+m.1h.1I.13},1I:{17:l.17+l.1I.17,13:l.13+l.1I.13},1E:{17:l.17+l.1E.17,13:l.13+l.1E.13}},p={1I:1m.47(o.1h.13,o.1h.17,o.1I.13,o.1I.17),1E:1m.47(o.1h.13,o.1h.17,o.1E.13,o.1E.17)},q=1k.4x(p.1I,p.1E),r=o[p.1I<=p.1E?"1I":"1E"],s="1Y"==1m.1S(b)?"13":"17",t=1m.47(o.1I.13,o.1I.17,o.1E.13,o.1E.17);1l(t>=n){14 u={17:0,13:0},v=r[s]<o.1h[s]?-1:1;u[s]=q*v,u[s]+=1k.2Y(.5*n)*v,m.13+=u.13,m.17+=u.17}24{$.1u(o,{2a:{17:1k.1V(l.17+.5*c.1b),13:1k.1V(l.13+.5*c.13)}});14 w={1I:1m.47(o.2a.13,o.2a.17,o.1I.13,o.1I.17),1E:1m.47(o.2a.13,o.2a.17,o.1E.13,o.1E.17)},q=p[w.1I<=w.1E?"1I":"1E"],x={17:0,13:0},v=r[s]<o.1h[s]?-1:1;x[s]=q*v,m.13+=x.13,m.17+=x.17}}}1l(6.1a.1K){14 y=$.1u({},6.1a.1K);y=1m.5a(y,6.1a.1g.1D,a),m.17+=y.y,m.13+=y.x}14 z=6.5L({17:m.17,13:m.13},b),A=z.1Y&&z.2m,B={x:0,y:0},C=1m.1S(b);1l(!z[C]){14 D="1Y"==C,E=D?["13","1q"]:["5l","5m"],F=D?"x":"y",G=D?"13":"17",H=z.4T[F],I=6.4i(b),J=I.1g[D?"13":"17"];1l(0!==H){14 K=f.3u[b].5n,L=K[E[0>-1*H?0:1]],M=0>H?-1:1;1l(L>=H*M&&m[G]+H>=J)m[G]+=H,B[F]=-1*H,A=!0;24 1l(1m.1S(a)==1m.1S(b)){1l(m[G]+=L*M,B[F]=-1*L*M,m[G]<J){14 N=J-m[G],O=K[E[0]]+K[E[1]],N=1k.4x(N,O);m[G]+=N;14 P=B[F]-N;P>=f.3u[b].5n[E[0]]&&P<=f.3u[b].5n[E[1]]&&(B[F]-=N)}z=6.5L({17:m.17,13:m.13},b);14 Q=z.4T[F],R=33({},m);6.1a.1K&&(R.13-=6.1a.1K.x,R.17-=6.1a.1K.y);14 o={1h:{17:R.17+m.1h.1I.17,13:R.13+m.1h.1I.13}};o.1h[G]+=B[F];14 S=6.4Q(),n=f.6s.18,T=1k.2Y(.5*n),U=J+I.1j[D?"18":"1b"];1l("x"==F){14 V=S.1g.13+T;Q>0&&(V+=S.1j.18-2*T),(0>Q&&o.1h.13+Q>=V&&R.13+Q>=J||Q>0&&o.1h.13+Q<=V&&R.13+Q<=U)&&(R.13+=Q)}24{14 W=S.1g.17+T;Q>0&&(W+=S.1j.1b-2*T),(0>Q&&o.1h.17+Q>=W&&R.17+Q>=J||Q>0&&o.1h.17+Q<=W&&R.17+Q<=U)&&(R.17+=Q)}m=R,6.1a.1K&&(m.13+=6.1a.1K.x,m.17+=6.1a.1K.y)}}z=6.5L({17:m.17,13:m.13},b),A=z.1Y&&z.2m}1c{17:m.17,13:m.13,3Z:A,1N:B}},3v:11(a,b){14 c=6.2Z;1l(!c||c.17!=a.17||c.13!=a.13){14 d;1l(6.1a.3e!=3E.54){1l("2A"==$.1G(6.1a.3e)){14 e=6.1D;"2y"==e&&(e=6.1d),d=$(e).4e(6.1a.3e).4c()}24 d=$(d);1l(d[0]){14 f=d.1K();1K={17:1k.1V(f.17),13:1k.1V(f.13)},6R={17:1k.1V(d.8Y()),13:1k.1V(d.8Z())},a.17-=1K.17,a.17+=6R.17,a.13-=1K.13,a.13+=6R.13}}6.2Z=a,6.1H.1e({17:a.17,13:a.13})}6.1W.82(b||6.1a.1g.1A,a.1N||{x:0,y:0})},3Y:11(a,b){14 c=a.1g.13,d=a.1g.17,e=a.1g.13,f=a.1g.17;34(b){1M"17":e+=a.1j.18;27;1M"1x":d+=a.1j.1b,e+=a.1j.18,f+=a.1j.1b;27;1M"13":f+=a.1j.1b;27;1M"1q":c+=a.1j.18,e+=a.1j.18,f+=a.1j.1b}1c{3a:c,3W:d,3z:e,3X:f}},8W:11(a,b,c){14 d=6.4i(b,c),e=6.4Q(),f=6.3Y(e,a);1l(1m.4y(f.3a,f.3W,d)||1m.4y(f.3z,f.3X,d))1c!0;14 g=!1;1c $.1z("17 1q 1x 13".1X(" "),$.1y(11(a,b){14 c=6.3Y(d,b);1c 1m.6d(f.3a,f.3W,f.3z,f.3X,c.3a,c.3W,c.3z,c.3X)?(g=!0,!1):2g 0},6)),g},5L:11(a,b){14 c={1Y:!0,2m:!0,4T:{y:0,x:0}};1l(6.1a.2k){14 d=6.4i(b),e=6.1W.1B.28[1m.1U(b)].1j;6.1a.2k&&((a.13<d.1g.13||a.13+e.18>d.1g.13+d.1j.18)&&(c.1Y=!1,c.4T.x=a.13<d.1g.13?d.1g.13-a.13:d.1g.13+d.1j.18-(a.13+e.18)),(a.17<d.1g.17||a.17+e.1b>d.1g.17+d.1j.1b)&&(c.2m=!1,c.4T.y=a.17<d.1g.17?d.1g.17-a.17:d.1g.17+d.1j.1b-(a.17+e.1b)))}1c c},4i:11(a,b){14 c={17:$(22).8Y(),13:$(22).8Z()},d=6.1D;"2y"==d&&(d=6.1d);14 e,f=$(d).4e(6.1a.2k.4W).4c()[0];e=f&&"4o"!=6.1a.2k.4W?{1j:{18:$(f).48(),1b:$(f).2U()},1g:$(f).1K()}:{1j:6e.4o(),1g:c};14 g=6.1a.2k.2p;1l(g&&!b){14 h=1k.1E(e.1j.1b,e.1j.18);1l(2*g>h&&(g=1k.1E(1k.2Y(.5*h),0)),g){e.1j.18-=2*g,e.1j.1b-=2*g,e.1g.17+=g,e.1g.13+=g;14 i=1m.1S(a);"2m"==i?(e.1j.18+=g,"13"==1m.1U(a)&&(e.1g.13-=g)):(e.1j.1b+=g,"17"==1m.1U(a)&&(e.1g.17-=g))}}1c 6.1F.32.bB=e,e},6Q:11(){14 a;1l("2y"==6.1a.1D)1l(6.1n("39")){14 b=$(6.1d).1K();a={17:1k.1V(b.17),13:1k.1V(b.13)}}24 a=6f.7w(6.1F.8H);24{14 b=$(6.1D).1K();a={17:1k.1V(b.17),13:1k.1V(b.13)}}1c 6.1F.32.4R=a,a},6P:11(){1l(6.1F.32.6S)1c 6.1F.32.6S;14 a;1c a="2y"==6.1a.1D?6f.7y():{18:$(6.1D).48(),1b:$(6.1D).2U()},6.1F.32.6S=a,a},4Q:11(){1l(6.1F.32.6T)1c 6.1F.32.6T;14 a={1g:6.6Q(),1j:6.6P()};1c 6.1F.32.6T=a,a},8T:11(a){14 b=6.4Q(),c="13";1l("2m"==1m.1S(a))1c 6.3Y(b,1m.1U(a));1l(1m.59(a)){14 d=1m.4w(a);1c c=1m.1U(d),6.3Y(b,c)}14 e=6.3Y(b,c),f=1k.1V(.5*b.1j.18);1c e.3a+=f,e.3z+=f,e}}),$.1u(2F.23,{5E:11(){6.1n("5y",!0),6.1T()&&6.4O(),6.1a.4p&&6.3l("6U")},6I:11(){6.1n("5y",!1),6.1a.4p&&6.5F("6U",$.1y(11(){6.3l("6U"),6.1n("5y")||6.1L()},6),6.1a.4p)}}),$.1u(2F.23,{2C:11(a,b,c,d){b=b;14 e=$.1y(c,d||6);6.1F.5x.2K({1d:a,91:b,92:e}),$(a).2C(b,e)},5t:11(){$.1z(6.1F.5x,11(a,b){$(b.1d).5t(b.91,b.92)}),6.1F.5x=[]}}),$.1u(2F.23,{8l:11(){6.1n("3k")||6.1n("3k",!0)},8m:11(){6.1n("3k")&&6.1n("3k",!1)}}),$.1u(2F.23,{1n:11(a,b){1c"6j"==$.1G(b)&&(6.1F.1n[a]=b),6.1F.1n[a]},1T:11(){1c 6.1n("1T")}}),$.1u(2F.23,{5F:11(a,b,c){6.1F.3y[a]=2f.52(b,c)},6J:11(a){1c 6.1F.3y[a]},3l:11(a){6.1F.3y[a]&&(22.5v(6.1F.3y[a]),6i 6.1F.3y[a])},8r:11(){$.1z(6.1F.3y,11(a,b){22.5v(b)}),6.1F.3y={}}}),$.1u(X,{5r:11(){ba.5r()},4C:11(a,b,c){1c 42.4C(a,b,c),6.2z(a)},2z:11(a){1c 2w 42(a)},6A:11(a){1c ba.6A(a)},6B:11(a){1c ba.6B(a),6}}),$.1z("21 3S".1X(" "),11(a,b){X[b]=11(a){1c 6.2z(a)[b](),6}}),$.1u(42,{4C:11(a,b){1l(a){"6C"==$.1G(a)&&(a=$(a)[0]);14 c=1R[2]||{};1c 2f.2R(a)?2w 2F(a,b,c):$(a).1z(11(a,d){2w 2F(d,b,c)}),6}}}),$.1u(42.23,{93:11(){1c ba.2z(6.1d,{39:!0})},21:11(){1c ba.21(6.1d),6}}),$.1z("3S".1X(" "),11(a,b){42.23[b]=11(){1c $.1z(6.93(),11(a,c){c[b]()}),6}}),X.5r(),X}),11(a){"11"==78 40&&40.79?40(["7a"],a):41&&!22.94&&(22.94=a(41))}(11(a){11 b(c,d,e){1l(!(6 3h b))1c 2w b(c,d,e);14 f=a.1G(1R[1]),g="6C"===f?1R[1]:{},h="11"===f?1R[1]:"11"===a.1G(1R[2])?1R[2]:!1;1c 6.1a=a.1u({6V:"3b"},g),6.3A=2w 41.bC,h&&6.6W(h),6.6X=0,6.3V=[],6.95(c),6}a.1u(b.23,{95:11(b){14 d="2A"==a.1G(b)?a(b):b 3h 41||b.2o>0?b:[b];a.1z(d,a.1y(11(b,d){14 e=a(),f=a(d);e=f.1n("2N")?e.2B(f):e.2B(f.1t("2N")),e.1z(a.1y(11(b,d){6.3V.2K(2w c(d,a.1y(11(a){6.5M(a)},6),a.1y(11(a){6.5M(a)},6),6.1a))},6))},6)),6.3V.2o<1&&44(a.1y(11(){6.5N()},6))},3T:11(){6.5M=6.6Y=6.6Z=6.5N=11(){},a.1z(6.3V,11(a,b){b.3T()}),6.3V=[]},5M:11(a){6.6X++,a.70||(6.96=!0),6.6Y(a),6.6X==6.3V.2o&&6[6.96?"6Z":"5N"]()},6Y:11(a){6.3A.bD(6,a)},6Z:11(){6.3A.bE(6)},5N:11(){6.3A.bF(6)},6W:11(a){1c 6.3A.6W(a),6},98:11(a){1c 6.3A.98(a),6},99:11(a){1c 6.3A.99(a),6},9b:11(a){1c 6.3A.9b(a),6}}),a.8R.3f=11(){1c b.2O(b,[6].3D(63.23.51.2P(1R)))};14 c=11(){1c 6.2E.2O(6,63.23.51.2P(1R))};1c a.1u(c.23,{71:{3b:11(){1c"3b"4l 2w 9c}()},2E:11(b,c,d){1c 6.2N=a(b)[0],6.9d=c,6.72=d,6.70=!1,6.1a=a.1u({6V:"3b",73:9e},1R[3]||{}),6.71.3b&&"5O"!=6.1a.6V?6.2N.bG&&"8p"!=a.1G(6.2N.3b)?(44(a.1y(11(){6.2N.3b>0?6.5P():6.4j()},6)),2g 0):(a(6.2N).2C("4j",a.1y(11(){44(a.1y(11(){6.4j()},6))},6)),6.4U=[[9e,10],[bH,50],[bI,3K],[bJ,bK]],6.4k=0,6.5Q=0,6.5R=6.4U[6.4k][1],6.74(),2g 0):(44(a.1y(6.76,6)),2g 0)},74:11(){6.5S=44(a.1y(11(){1l(6.2N.3b>0)1c 6.5P(),2g 0;1l(6.5Q+=6.5R,6.1a.73&&6.5Q>=6.1a.73&&!6.9f&&(6.9f=!0,6.76()),6.5Q>6.4U[6.4k][0]){1l(!6.4U[6.4k+1])1c 6.4j(),2g 0;6.4k++,6.5R=6.4U[6.4k][1]}6.74()},6),6.5R)},76:11(){14 b=2w 9c;6.77=b,b.5O=a.1y(11(){b.5O=11(){},6.71.3b||(6.2N.3b=b.18,6.2N.bL=b.1b),6.5P()},6),b.bM=a.1y(6.4j,6),b.6G=6.2N.6G},3T:11(){6.77&&(6.77.5O=11(){}),6.5S&&(5v(6.5S),6.5S=2n)},5P:11(){6.9g||(6.9g=!0,6.70=!0,6.9d(6))},4j:11(){6.9h||(6.9h=!0,6.3T(),6.72&&6.72(6))}}),b});', 62, 731, "||||||this|||||||||||||||||||||||||||||||||||||||||||||||||||||||||function||left|var|||top|width|tpd|options|height|return|element|css|border|position|stem|px|dimensions|Math|if|Position|is|background|_css|right|addClass||find|extend|div|append|bottom|proxy|each|tooltip|_vars|title|target|max|_cache|type|_tooltip|connection|content|offset|hide|case|shift|box|margin|radius|arguments|getOrientation|visible|getSide|round|skin|split|horizontal|inside|show|remove|window|prototype|else||data|break|frames|zIndex|center|build|color|close|spinner|_|void|_content|cut|ajax|containment|Browser|vertical|null|length|padding|IE|outside|tooltips|tipped|replace|hideOn|new|transform|mouse|get|string|add|bind|queue|initialize|Tooltip|inline|showOn|indexOf|middle|push|loadingIcon|_titleWrapper|img|apply|call|shadow|isElement|Support|side|innerHeight|loading|attr|transparent|floor|_position||updated|layouts|deepExtend|switch|updating|spacer|alpha|solid|api|x1|naturalWidth|180|PI|container|voila|mouseenter|instanceof|restore|backgroundColor|disabled|clearTimer|for|detach|showDelay|mouseleave|parseFloat|parseInt|borderColor|before|connections|setPosition|uids|xhr|timers|x2|deferred|Spin|reset|concat|document|match|charAt|rgba|frame|opacity|100|click|_side|getMath|after|stopLoading|html|corner|refresh|abort|detached|images|y1|y2|getSideLine|contained|define|jQuery|Collection|Skins|setTimeout|uid|prefixed|getDistance|innerWidth|test|stop|destroy|first|auto|closest|inversedPosition|_close|updateDimensionsToContent|getContainmentLayout|error|_ipos|in|cos|cache|viewport|hideAfter|onShow|style|animation|url|regex|flip|inverseCornerPlane|min|isPointWithinBoxLayout|abs|_shift|spin|create|defaultSkin|Class|maxStemHeight|stem_|setDimensions|_useTransform|skew|getVisible|_getTooltips|attach|_contentSpacer|raise|elementMarker|getTargetLayout|targetPosition|stemPosition|correction|intervals|Visible|selector|fadeIn|fadeOut|dark||slice|delay|pageX|body||behavior|isCenter|toLowerCase|isCorner|adjustOffsetBasedOnPosition|_dimensions|supported|_rotate|_restore|hideOnClickOutside|icon|999|outerHeight|index|startLoading|up|down|move|spacing|triangle|startingZIndex|init|_resizeHandler|unbind|_resizeTimer|clearTimeout|toggle|events|active|queues|showhide|_titleRelative|relative|_inner_close|setActive|setTimer|display|overlap|_maxWidthPass|maxWidth|getPositionBasedOnTarget|getContainment|_progress|_resolve|onload|success|_time|_delay|_polling|Tipped|degrees|sfcc|Skin|Stem|version|afterUpdate|hideDelay|mousemove|size|Array|pageY|isAttached|Opera|opera|Chrome|Android|IEMobile|toUpperCase|isPointWithinBox|intersectsLine|Bounds|Mouse|lines|deg|delete|boolean|getInversedPosition|no|backgrounds|outerWidth|insertFrame|updateDimensions|stemPx|stem_top|stemDimensions|removeClass|downscale|translate|inverse|class|atan|getTooltipByTooltipElement|findElement|setStartingZIndex|object|toggleable|parentTooltip|abortAjax|src|_titleSpacer|setIdle|getTimer|visibility|_show|_update|unshift|negativity|getTargetDimensions|getTargetPosition|scroll|targetDimensions|targetLayout|idle|method|always|_processed|_notify|_reject|isLoaded|supports|errorCallback|pollFallbackAfter|poll||fallback|_fallbackImg|typeof|amd|jquery|String|constructor|base|200|hideOthers|defer|parentNode|getUID|AppleWebKit|Gecko|MobileSafari|CrMo|prefix|touch|DocumentTouch|positions|toOrientation|_flip|getBoxFromPoints|pow|_buffer|getPosition|number|getDimensions|Color|_default|000000|toRGB|start|rotate|line|GET|param|callbacks|clear|Options|sticky|fixed|107|getTooltipPositionFromTarget|150|_skin|_frame|further|hack|_getFrame|clone|updateBackground|updateVars|removeAttr|getConnectionLayout|stemOffset|setSide|setStemPosition|_stemPosition|setStemShift|siblings|_m|last|substring|lastIndexOf|rgb|notransform|borderOpacity|tan|onWindowResize|resize|orientationchange|removeAll|getNests|nest|hideAll|disable|enable|getHighestTooltip|resetZ|undefined|preBuild|clearTimers|restoreElementToMarker|abortImageLoad|removeData|10000px|createPreBuildObservers|wrapper|_titleRelativePadder|padder|_title|times|_contentRelative|_contentRelativePadder|createPostBuildObservers|showDelayed|hideDelayed|event|update|fadeTo|_hide|afterHide|_tooltipShadow|createElementMarker|has|sanitizeContent|finishUpdate|fn|measuring|getPaddingLine|getContainmentSpace|positioning|isSideWithinContainment|result|scrollTop|scrollLeft||eventName|handler|items|Voila|_add|_broken||done|fail||progress|Image|successCallback|1e3|_usedPollFallback|_calledSuccess|_calledError|radian|sec|fromCharCode|Object|onHide|medium|wrap|nodeType|pointer|_tipped|getElementById|RegExp|exec|attachEvent|MSIE|WebKit|KHTML|rv|Apple|Mobile|Safari|ChromeMobile|navigator|userAgent|substr|join|createElement|Webkit|Moz|ms|Khtml|boxShadow|pointerEvents|try|ontouchstart|catch|vml|group|default|VML|adj|topleft|topmiddle|topright|righttop|rightmiddle|rightbottom|bottomright|bottommiddle|bottomleft|leftbottom|leftmiddle|lefttop|toDimension|sqrt|toString|aqua|00ffff|black|blue|0000ff|fuchsia|ff00ff|gray|808080|green|008000|lime|00ff00|maroon|800000|navy|000080|olive|808000|purple|800080|red|ff0000|silver|c0c0c0|teal|008080|white|ffffff|yellow|ffff00|fA|toFixed|360|infinite|steps|none|array|elements|set|115|105|110|114|borderTopLeftRadius|zoom|backgroundOpacity|stem_left|frame_|buildNo|Transform|buildTransform|inversed|sides|scale|buildNoTransform|enabled|999999|getBySelector|isVisibleByElement||clearAjaxCache|removeDetached|setDefaultSkin|eval|skinned|sanatizing|fnCallContent|_aborted|setAttribute|__content|inArray|splice|delegation|iframeShim|iframe|iframeshim|frameBorder|javascript|_contentWrapper|delegate|documentElement|touchend|_onResizeDimensions|hidden|inner|containmentSpace|containmentLayout|Deferred|notify|reject|resolve|complete|2e3|4e3|2e4|500|naturalHeight|onerror".split("|"), 0, {}));;
(function(n) {
    n.fn.extend({
        hideMaxListItems: function(t) {
            var t = n.extend({
                max: 3,
                speed: 1e3,
                moreText: "READ MORE",
                lessText: "READ LESS",
                moreHTML: '<p class="maxlist-more"><a href="#"><\/a><\/p>'
            }, t);
            return this.each(function() {
                var i = t,
                    u = n(this).children("li").length,
                    r;
                if (u > 0 && i.speed > 0 ? (r = Math.round(i.speed / u), r < 1 && (r = 1)) : r = 0, u > 0 && u > i.max) {
                    n(this).children("li").each(function(t) {
                        t + 1 > i.max && (n(this).hide(0), n(this).addClass("maxlist-hidden"))
                    });
                    var e = u - i.max,
                        f = i.moreText,
                        o = i.lessText;
                    e > 0 && (f = f.replace("[COUNT]", e), o = o.replace("[COUNT]", e));
                    n(this).after(i.moreHTML);
                    n(this).next(".maxlist-more").children("a").text(f);
                    n(this).next(".maxlist-more").children("a").click(function(t) {
                        var u = n(this).parent().prev("ul, ol").children("li"),
                            e;
                        u = u.slice(i.max);
                        n(this).text() == f ? (n(this).text(o), e = 0, function() {
                            n(u[e++] || []).slideToggle(r, arguments.callee)
                        }()) : (n(this).text(f), e = u.length - 1, function() {
                            n(u[e--] || []).slideToggle(r, arguments.callee)
                        }());
                        t.preventDefault()
                    })
                }
            })
        }
    })
})(jQuery);;
/*! Jssor */
function $JssorObject$() {
    function u(n, i) {
        $JssorDebug$.$Execute(function() {
            if (n == undefined || n == null) throw new Error("param 'eventName' is null or empty.");
            if (typeof i != "function") throw "param 'handler' must be a function.";
            $Jssor$.$Each(t, function(t) {
                if (t.$EventName == n && t.$Handler === i) throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");
            })
        });
        t.push({
            $EventName: n,
            $Handler: i
        })
    }

    function f(n, i) {
        $JssorDebug$.$Execute(function() {
            if (n == undefined || n == null) throw new Error("param 'eventName' is null or empty.");
            if (typeof i != "function") throw "param 'handler' must be a function.";
        });
        $Jssor$.$Each(t, function(r, u) {
            r.$EventName == n && r.$Handler === i && t.splice(u, 1)
        })
    }

    function e() {
        t = []
    }

    function r() {
        $Jssor$.$Each(i, function(n) {
            $Jssor$.$RemoveEvent(n.$Obj, n.$EventName, n.$Handler)
        });
        i = []
    }
    var n = this,
        t = [],
        i = [];
    n.$Listen = function(n, t, r, u) {
        $JssorDebug$.$Execute(function() {
            if (!n) throw new Error("param 'obj' is null or empty.");
            if (t == undefined || t == null) throw new Error("param 'eventName' is null or empty.");
            if (typeof r != "function") throw "param 'handler' must be a function.";
            $Jssor$.$Each(i, function(i) {
                if (i.$Obj === n && i.$EventName == t && i.$Handler === r) throw new Error("The handler listened to the event already, cannot listen to the same event of the same object with the same handler twice.");
            })
        });
        $Jssor$.$AddEvent(n, t, r, u);
        i.push({
            $Obj: n,
            $EventName: t,
            $Handler: r
        })
    };
    n.$Unlisten = function(n, t, r) {
        $JssorDebug$.$Execute(function() {
            if (!n) throw new Error("param 'obj' is null or empty.");
            if (t == undefined || t == null) throw new Error("param 'eventName' is null or empty.");
            if (typeof r != "function") throw "param 'handler' must be a function.";
        });
        $Jssor$.$Each(i, function(u, f) {
            u.$Obj === n && u.$EventName == t && u.$Handler === r && ($Jssor$.$RemoveEvent(n, t, r), i.splice(f, 1))
        })
    };
    n.$UnlistenAll = r;
    n.$On = n.addEventListener = u;
    n.$Off = n.removeEventListener = f;
    n.$TriggerEvent = function(n) {
        var i = [].slice.call(arguments, 1);
        $Jssor$.$Each(t, function(t) {
            t.$EventName == n && t.$Handler.apply(window, i)
        })
    };
    n.$Destroy = function() {
        r();
        e();
        for (var t in n) delete n[t]
    };
    $JssorDebug$.$C_AbstractClass(n)
}

function $JssorAnimator$(n, t, i, r, u, f) {
    function lt(n) {
        h += n;
        o += n;
        c += n;
        k += n;
        s += n;
        b += n;
        rt = n
    }

    function pt(t, i) {
        var r = t - h + n * i;
        return lt(r), o
    }

    function d(n, l) {
        var a = n,
            v, p, k, d, g;
        y && (a >= o || a <= h) && (a = ((a - h) % y + y) % y + h);
        (!ut || w || l || s != a) && (v = Math.min(a, o), v = Math.max(v, h), (!ut || w || l || v != b) && (f && (p = (v - c) / (t || 1), i.$Reverse && (p = 1 - p), k = $Jssor$.$Cast(u, f, p, ot, ht, st, i), $Jssor$.$Each(k, function(n, t) {
            ft[t] && ft[t](r, n)
        })), e.$OnInnerOffsetChange(b - c, v - c)), b = v, $Jssor$.$Each(nt, function(t, i) {
            var r = n < s ? nt[nt.length - i - 1] : t;
            r.$GoToPosition(n - rt, l)
        }), d = s, g = n, s = a, ut = !0, e.$OnPositionChange(d, g))
    }

    function et(n, t, i) {
        $JssorDebug$.$Execute(function() {
            t !== 0 && t !== 1 && $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.")
        });
        t && n.$Locate(o, 1);
        i || (o = Math.max(o, n.$GetPosition_OuterEnd() + rt));
        nt.push(n)
    }

    function at() {
        if (l) {
            var t = $Jssor$.$GetNow(),
                r = Math.min(t - tt, i.$IntervalMax),
                n = s + r * v;
            tt = t;
            n * v >= a * v && (n = a);
            d(n);
            !w && n * v >= a * v ? vt(it) : p(at)
        }
    }

    function g(n, t, i) {
        l || (l = !0, w = i, it = t, n = Math.max(n, h), n = Math.min(n, o), a = n, v = a < s ? -1 : 1, e.$OnStart(), tt = $Jssor$.$GetNow(), p(at))
    }

    function vt(n) {
        l && (w = l = it = !1, e.$OnStop(), n && n())
    }
    var p;
    n = n || 0;
    var e = this,
        l, yt, a, v, w, tt = 0,
        ot, st, ht, it, rt = 0,
        s = 0,
        b = 0,
        ut, c = n,
        k = n + t,
        h, o, y, nt = [],
        ft;
    p = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    $Jssor$.$IsBrowserSafari() && $Jssor$.$BrowserVersion() < 7 && (p = null, $JssorDebug$.$Log("Custom animation frame for safari before 7."));
    p = p || function(n) {
        $Jssor$.$Delay(n, i.$Interval)
    };
    e.$Play = function(n, t, i) {
        g(n ? s + n : o, t, i)
    };
    e.$PlayToPosition = g;
    e.$PlayToBegin = function(n, t) {
        g(h, n, t)
    };
    e.$PlayToEnd = function(n, t) {
        g(o, n, t)
    };
    e.$Stop = vt;
    e.$Continue = function(n) {
        g(n)
    };
    e.$GetPosition = function() {
        return s
    };
    e.$GetPlayToPosition = function() {
        return a
    };
    e.$GetPosition_Display = function() {
        return b
    };
    e.$GoToPosition = d;
    e.$GoToBegin = function() {
        d(h, !0)
    };
    e.$GoToEnd = function() {
        d(o, !0)
    };
    e.$Move = function(n) {
        d(s + n)
    };
    e.$CombineMode = function() {
        return yt
    };
    e.$GetDuration = function() {
        return t
    };
    e.$IsPlaying = function() {
        return l
    };
    e.$IsOnTheWay = function() {
        return s > c && s <= k
    };
    e.$SetLoopLength = function(n) {
        y = n
    };
    e.$Locate = pt;
    e.$Shift = lt;
    e.$Join = et;
    e.$Combine = function(n) {
        et(n, 0)
    };
    e.$Chain = function(n) {
        et(n, 1)
    };
    e.$GetPosition_InnerBegin = function() {
        return c
    };
    e.$GetPosition_InnerEnd = function() {
        return k
    };
    e.$GetPosition_OuterBegin = function() {
        return h
    };
    e.$GetPosition_OuterEnd = function() {
        return o
    };
    e.$OnPositionChange = e.$OnStart = e.$OnStop = e.$OnInnerOffsetChange = $Jssor$.$EmptyFunction;
    e.$Version = $Jssor$.$GetNow();
    i = $Jssor$.$Extend({
        $Interval: 16,
        $IntervalMax: 50
    }, i);
    $JssorDebug$.$Execute(function() {
        i = $Jssor$.$Extend({
            $LoopLength: undefined,
            $Setter: undefined,
            $Easing: undefined
        }, i)
    });
    y = i.$LoopLength;
    ft = $Jssor$.$Extend({}, $Jssor$.$StyleSetter(), i.$Setter);
    h = c = n;
    o = k = n + t;
    st = i.$Round || {};
    ht = i.$During || {};
    ot = $Jssor$.$Extend({
        $Default: $Jssor$.$IsFunction(i.$Easing) && i.$Easing || $JssorEasing$.$EaseSwing
    }, i.$Easing)
}

function $JssorPlayerClass$() {
    function i(n) {
        function r(u) {
            var f = $Jssor$.$EventSrc(u);
            t = f.pInstance;
            $Jssor$.$RemoveEvent(f, "dataavailable", r);
            $Jssor$.$Each(i, function(n) {
                n != t && n.$Remove()
            });
            n.pTagName = t.tagName;
            i = null
        }

        function u(t) {
            var u, f;
            return t.pInstance || (f = $Jssor$.$AttributeEx(t, "pHandler"), $JssorPlayer$[f] && ($Jssor$.$AddEvent(t, "dataavailable", r), u = new $JssorPlayer$[f](n, t), i.push(u), $JssorDebug$.$Execute(function() {
                $Jssor$.$Type(u.$Remove) != "function" && $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + f + "'.")
            }))), u
        }
        var f = this,
            t, i = [];
        f.$InitPlayerController = function() {
            if (!n.pInstance && !u(n)) {
                var t = $Jssor$.$Children(n);
                $Jssor$.$Each(t, function(n) {
                    u(n)
                })
            }
        }
    }
    var t = this,
        n = [];
    t.$EVT_SWITCH = 21;
    t.$FetchPlayers = function(t) {
        t = t || document.body;
        var r = $Jssor$.$FindChildren(t, "player");
        $Jssor$.$Each(r, function(t) {
            n[t.pId] || (t.pId = n.length, n.push(new i(t)));
            var r = n[t.pId];
            r.$InitPlayerController()
        })
    }
}
var $JssorDebug$ = new function() {
        function n(t) {
            if (t.constructor === n.caller) throw new Error("Cannot create instance of an abstract class.");
        }
        this.$DebugMode = !0;
        this.$Log = function(n, t) {
            var i = window.console || {},
                r = this.$DebugMode;
            r && i.log ? i.log(n) : r && t && alert(n)
        };
        this.$Error = function(n, t) {
            var r = window.console || {},
                i = this.$DebugMode;
            if (i && r.error ? r.error(n) : i && alert(n), i) throw t || new Error(n);
        };
        this.$Fail = function(n) {
            throw new Error(n);
        };
        this.$Assert = function(n, t) {
            var i = this.$DebugMode;
            if (i && !n) throw new Error("Assert failed " + t || "");
        };
        this.$Trace = function(n) {
            var t = window.console || {},
                i = this.$DebugMode;
            i && t.log && t.log(n)
        };
        this.$Execute = function(n) {
            var t = this.$DebugMode;
            t && n()
        };
        this.$LiveStamp = function(n, t) {
            var r = this.$DebugMode,
                i;
            r && (i = document.createElement("DIV"), i.setAttribute("id", t), n.$Live = i)
        };
        this.$C_AbstractProperty = function() {
            throw new Error("The property is abstract, it should be implemented by subclass.");
        };
        this.$C_AbstractMethod = function() {
            throw new Error("The method is abstract, it should be implemented by subclass.");
        };
        this.$C_AbstractClass = n
    },
    $JssorEasing$ = window.$JssorEasing$ = {
        $EaseLinear: function(n) {
            return n
        },
        $EaseGoBack: function(n) {
            return 1 - Math.abs((n *= 2) - 1)
        },
        $EaseSwing: function(n) {
            return -Math.cos(n * Math.PI) / 2 + .5
        },
        $EaseInQuad: function(n) {
            return n * n
        },
        $EaseOutQuad: function(n) {
            return -n * (n - 2)
        },
        $EaseInOutQuad: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n : -1 / 2 * (--n * (n - 2) - 1)
        },
        $EaseInCubic: function(n) {
            return n * n * n
        },
        $EaseOutCubic: function(n) {
            return (n -= 1) * n * n + 1
        },
        $EaseInOutCubic: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n * n : 1 / 2 * ((n -= 2) * n * n + 2)
        },
        $EaseInQuart: function(n) {
            return n * n * n * n
        },
        $EaseOutQuart: function(n) {
            return -((n -= 1) * n * n * n - 1)
        },
        $EaseInOutQuart: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n * n * n : -1 / 2 * ((n -= 2) * n * n * n - 2)
        },
        $EaseInQuint: function(n) {
            return n * n * n * n * n
        },
        $EaseOutQuint: function(n) {
            return (n -= 1) * n * n * n * n + 1
        },
        $EaseInOutQuint: function(n) {
            return (n *= 2) < 1 ? 1 / 2 * n * n * n * n * n : 1 / 2 * ((n -= 2) * n * n * n * n + 2)
        },
        $EaseInSine: function(n) {
            return 1 - Math.cos(n * Math.PI / 2)
        },
        $EaseOutSine: function(n) {
            return Math.sin(n * Math.PI / 2)
        },
        $EaseInOutSine: function(n) {
            return -1 / 2 * (Math.cos(Math.PI * n) - 1)
        },
        $EaseInExpo: function(n) {
            return n == 0 ? 0 : Math.pow(2, 10 * (n - 1))
        },
        $EaseOutExpo: function(n) {
            return n == 1 ? 1 : -Math.pow(2, -10 * n) + 1
        },
        $EaseInOutExpo: function(n) {
            return n == 0 || n == 1 ? n : (n *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (n - 1)) : 1 / 2 * (-Math.pow(2, -10 * --n) + 2)
        },
        $EaseInCirc: function(n) {
            return -(Math.sqrt(1 - n * n) - 1)
        },
        $EaseOutCirc: function(n) {
            return Math.sqrt(1 - (n -= 1) * n)
        },
        $EaseInOutCirc: function(n) {
            return (n *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - n * n) - 1) : 1 / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1)
        },
        $EaseInElastic: function(n) {
            if (!n || n == 1) return n;
            return -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - .075) * 2 * Math.PI / .3))
        },
        $EaseOutElastic: function(n) {
            if (!n || n == 1) return n;
            return Math.pow(2, -10 * n) * Math.sin((n - .075) * 2 * Math.PI / .3) + 1
        },
        $EaseInOutElastic: function(n) {
            if (!n || n == 1) return n;
            var t = .45,
                i = .1125;
            return (n *= 2) < 1 ? -.5 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - i) * 2 * Math.PI / t) : Math.pow(2, -10 * (n -= 1)) * Math.sin((n - i) * 2 * Math.PI / t) * .5 + 1
        },
        $EaseInBack: function(n) {
            var t = 1.70158;
            return n * n * ((t + 1) * n - t)
        },
        $EaseOutBack: function(n) {
            var t = 1.70158;
            return (n -= 1) * n * ((t + 1) * n + t) + 1
        },
        $EaseInOutBack: function(n) {
            var t = 1.70158;
            return (n *= 2) < 1 ? 1 / 2 * n * n * (((t *= 1.525) + 1) * n - t) : 1 / 2 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2)
        },
        $EaseInBounce: function(n) {
            return 1 - $JssorEasing$.$EaseOutBounce(1 - n)
        },
        $EaseOutBounce: function(n) {
            return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
        },
        $EaseInOutBounce: function(n) {
            return n < 1 / 2 ? $JssorEasing$.$EaseInBounce(n * 2) * .5 : $JssorEasing$.$EaseOutBounce(n * 2 - 1) * .5 + .5
        },
        $EaseInWave: function(n) {
            return 1 - Math.cos(n * Math.PI * 2)
        },
        $EaseOutWave: function(n) {
            return Math.sin(n * Math.PI * 2)
        },
        $EaseOutJump: function(n) {
            return 1 - ((n *= 2) < 1 ? (n = 1 - n) * n * n : (n -= 1) * n * n)
        },
        $EaseInJump: function(n) {
            return (n *= 2) < 1 ? n * n * n : (n = 2 - n) * n * n
        }
    },
    $JssorDirection$ = window.$JssorDirection$ = {
        $TO_LEFT: 1,
        $TO_RIGHT: 2,
        $TO_TOP: 4,
        $TO_BOTTOM: 8,
        $HORIZONTAL: 3,
        $VERTICAL: 12,
        $GetDirectionHorizontal: function(n) {
            return n & 3
        },
        $GetDirectionVertical: function(n) {
            return n & 12
        },
        $IsHorizontal: function(n) {
            return n & 3
        },
        $IsVertical: function(n) {
            return n & 12
        }
    },
    $JssorKeyCode$ = {
        $BACKSPACE: 8,
        $COMMA: 188,
        $DELETE: 46,
        $DOWN: 40,
        $END: 35,
        $ENTER: 13,
        $ESCAPE: 27,
        $HOME: 36,
        $LEFT: 37,
        $NUMPAD_ADD: 107,
        $NUMPAD_DECIMAL: 110,
        $NUMPAD_DIVIDE: 111,
        $NUMPAD_ENTER: 108,
        $NUMPAD_MULTIPLY: 106,
        $NUMPAD_SUBTRACT: 109,
        $PAGE_DOWN: 34,
        $PAGE_UP: 33,
        $PERIOD: 190,
        $RIGHT: 39,
        $SPACE: 32,
        $TAB: 9,
        $UP: 38
    },
    $Jssor$ = window.$Jssor$ = new function() {
        function s() {
            if (!k) {
                k = {
                    $Evt_Down: "mousedown",
                    $Evt_Move: "mousemove",
                    $Evt_Up: "mouseup"
                };
                var n;
                (g.pointerEnabled || (n = g.msPointerEnabled)) && t.match(/iemobile/i) ? k = {
                    $Evt_Down: n ? "MSPointerDown" : "pointerdown",
                    $Evt_Move: n ? "MSPointerMove" : "pointermove",
                    $Evt_Up: n ? "MSPointerUp" : "pointerup",
                    $Evt_Cancel: n ? "MSPointerCancel" : "pointercancel",
                    $TouchActionAttr: n ? "msTouchAction" : "touchAction",
                    $Touchable: !0,
                    $TouchOnly: !0
                } : ("ontouchstart" in window || "createTouch" in document) && (k = {
                    $Evt_Down: "touchstart",
                    $Evt_Move: "touchmove",
                    $Evt_Up: "touchend",
                    $Evt_Cancel: "touchcancel",
                    $Touchable: !0,
                    $TouchOnly: !0
                })
            }
            return k
        }

        function v(n) {
            var r, c, e;
            if (!l)
                if (oi != "Microsoft Internet Explorer" || !window.attachEvent || !window.ActiveXObject)
                    if (oi != "Netscape" || !window.addEventListener) e = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(t), e && (l = fi, i = u(e[2]));
                    else {
                        var s = t.indexOf("Firefox"),
                            f = t.indexOf("Safari"),
                            a = t.indexOf("Chrome"),
                            h = t.indexOf("AppleWebKit");
                        s >= 0 ? (l = ii, i = u(t.substring(s + 8))) : f >= 0 ? (c = t.substring(0, f).lastIndexOf("/"), l = a >= 0 ? ui : ri, i = u(t.substring(c + 1, f))) : t.match(/Trident.*rv[ :]*11\./) && (l = ht, i = o = 11);
                        h >= 0 && (d = u(t.substring(h + 12)))
                    }
            else {
                r = t.indexOf("MSIE");
                l = ht;
                o = u(t.substring(r + 5, t.indexOf(";", r))); /*@cc_on ei=@_jscript_version@*/ ;
                i = document.documentMode || o
            }
            return n == l
        }

        function h() {
            return v(ht)
        }

        function ct() {
            return h() && (i < 6 || document.compatMode == "BackCompat")
        }

        function ir() {
            return v(ii)
        }

        function si() {
            return v(ri)
        }

        function hi() {
            return v(ui)
        }

        function ci() {
            return v(fi)
        }

        function li() {
            return si() && d > 534 && d < 535
        }

        function lt() {
            return h() && i < 9
        }

        function a(n) {
            return nt || (r(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function(t) {
                if (n.style[t] != undefined) return nt = t, !0
            }), nt = nt || "transform"), nt
        }

        function ai(n) {
            return Object.prototype.toString.call(n)
        }

        function r(n, t) {
            var i, r;
            if (ai(n) == "[object Array]") {
                for (i = 0; i < n.length; i++)
                    if (t(n[i], i, n)) return !0
            } else
                for (r in n)
                    if (t(n[r], r, n)) return !0
        }

        function rr() {
            return rt || (rt = {}, r(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(n) {
                rt["[object " + n + "]"] = n.toLowerCase()
            })), rt
        }

        function y(n) {
            return n == null ? String(n) : rr()[ai(n)] || "object"
        }

        function ur(t) {
            var i, r;
            if (!t || y(t) !== "object" || t.nodeType || n.$IsWindow(t)) return !1;
            i = Object.prototype.hasOwnProperty;
            try {
                if (t.constructor && !i.call(t, "constructor") && !i.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            for (r in t);
            return r === undefined || i.call(t, r)
        }

        function p(n, t) {
            return {
                x: n,
                y: t
            }
        }

        function vi(n, t) {
            setTimeout(n, t || 0)
        }

        function ut(n, t, i) {
            var u = !n || n == "inherit" ? "" : n;
            return r(t, function(n) {
                var t = n.exec(u),
                    i, r;
                t && (i = u.substr(0, t.index), r = u.substr(t.lastIndex + 1, u.length - (t.lastIndex + 1)), u = i + r)
            }), u = i + (u.indexOf(" ") != 0 ? " " : "") + u
        }

        function yi(n, t) {
            i < 9 && (n.style.filter = t)
        }

        function fr(t, i, r) {
            if (ei < 9) {
                var u = t.style.filter,
                    f = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                    e = i ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + i[0][0] + ", M12=" + i[0][1] + ", M21=" + i[1][0] + ", M22=" + i[1][1] + ", SizingMethod='auto expand')" : "",
                    o = ut(u, [f], e);
                yi(t, o);
                n.$CssMarginTop(t, r.y);
                n.$CssMarginLeft(t, r.x)
            }
        }

        function at(n) {
            n.constructor === at.caller && n.$Construct && n.$Construct.apply(n, at.caller.arguments)
        }

        function c(n) {
            return n || window.event
        }

        function tt(n, t, i) {
            if (i != undefined) n.style[t] = i;
            else {
                var r = n.currentStyle || n.style;
                return i = r[t], i == "" && window.getComputedStyle && (r = n.ownerDocument.defaultView.getComputedStyle(n, null), r && (i = r.getPropertyValue(t) || r[t])), i
            }
        }

        function vt(n, t, i, r) {
            if (i != undefined) r && (i += "px"), tt(n, t, i);
            else return u(tt(n, t))
        }

        function er(n, t, i) {
            return vt(n, t, i, !0)
        }

        function e(n, t) {
            var i = t & 2,
                r = t ? vt : tt;
            return function(t, u) {
                return r(t, n, u, i)
            }
        }

        function or(n) {
            if (h() && o < 9) {
                var t = /opacity=([^)]*)/.exec(n.style.filter || "");
                return t ? u(t[1]) / 100 : 1
            }
            return u(n.style.opacity || "1")
        }

        function sr(n, t, i) {
            var f;
            if (h() && o < 9) {
                var e = n.style.filter || "",
                    s = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    r = Math.round(100 * t),
                    u = "";
                (r < 100 || i) && (u = "alpha(opacity=" + r + ") ");
                f = ut(e, [s], u);
                yi(n, f)
            } else n.style.opacity = t == 1 ? "" : Math.round(t * 100) / 100
        }

        function pi(t, i) {
            var u = i.$Rotate || 0,
                r = i.$Scale == undefined ? 1 : i.$Scale,
                f, e, o;
            lt() ? (f = n.$CreateMatrix(u / 180 * Math.PI, r, r), fr(t, !u && r == 1 ? null : f, n.$GetMatrixOffset(f, i.$OriginalWidth, i.$OriginalHeight))) : (e = a(t), e && (o = "rotate(" + u % 360 + "deg) scale(" + r + ")", hi() && d > 535 && "ontouchstart" in window && (o += " perspective(2000px)"), t.style[e] = o))
        }

        function wi(n, t, i, r) {
            for (r = r || "u", n = n ? n.firstChild : null; n; n = n.nextSibling)
                if (n.nodeType == 1) {
                    if (dt(n, r) == t) return n;
                    if (!i) {
                        var u = wi(n, t, i, r);
                        if (u) return u
                    }
                }
        }

        function wt(n, t, i, r) {
            var u, f;
            for (r = r || "u", u = [], n = n ? n.firstChild : null; n; n = n.nextSibling) n.nodeType == 1 && (dt(n, r) == t && u.push(n), i || (f = wt(n, t, i, r), f.length && (u = u.concat(f))));
            return u
        }

        function bi(n, t, i) {
            for (n = n ? n.firstChild : null; n; n = n.nextSibling)
                if (n.nodeType == 1) {
                    if (n.tagName == t) return n;
                    if (!i) {
                        var r = bi(n, t, i);
                        if (r) return r
                    }
                }
        }

        function ki(n, t, i) {
            var r = [],
                u;
            for (n = n ? n.firstChild : null; n; n = n.nextSibling) n.nodeType == 1 && (t && n.tagName != t || r.push(n), i || (u = ki(n, t, i), u.length && (r = r.concat(u))));
            return r
        }

        function ft(n) {
            for (var i, r, t = 1; t < arguments.length; t++)
                if (i = arguments[t], i)
                    for (r in i) n[r] = i[r];
            return n
        }

        function di(n, t) {
            var r, i;
            $JssorDebug$.$Assert(t);
            r = {};
            for (i in n) n[i] !== t[i] && (r[i] = n[i]);
            return r
        }

        function bt(n) {
            return document.createElement(n)
        }

        function kt(n, t, i) {
            if (i == undefined) return n.getAttribute(t);
            n.setAttribute(t, i)
        }

        function dt(n, t) {
            return kt(n, t) || kt(n, "data-" + t)
        }

        function w(n, t) {
            if (t == undefined) return n.className;
            n.className = t
        }

        function gi(n) {
            var t = {};
            return r(n, function(n) {
                t[n] = n
            }), t
        }

        function gt(n, t) {
            return gi((n || "").match(t || tr))
        }

        function ni(n, t) {
            var i = "";
            return r(t, function(t) {
                i && (i += n);
                i += t
            }), i
        }

        function et(n, t, i) {
            w(n, ni(" ", ft(di(gt(w(n)), gt(t)), gt(i))))
        }

        function ti(t, i, r) {
            var u = t.cloneNode(!i);
            return r || n.$RemoveAttribute(u, "id"), u
        }

        function hr(t) {
            function e() {
                $JssorDebug$.$Execute(function() {
                    if (i);
                });
                et(t, a, u[f || h || i & 2 || i])
            }

            function o() {
                h = 0;
                e();
                n.$RemoveEvent(document, s().$Evt_Up, o);
                s().$Evt_Cancel && n.$RemoveEvent(document, s().$Evt_Cancel, o)
            }

            function v(t) {
                f ? n.$CancelEvent(t) : (h = 4, e(), n.$AddEvent(document, s().$Evt_Up, o), s().$Evt_Cancel && n.$AddEvent(document, s().$Evt_Cancel, o))
            }
            var c = this,
                l, u = [],
                a, h = 0,
                i = 0,
                f = 0;
            c.$Selected = function(n) {
                if (n != undefined) i = n & 2 || n & 1, e();
                else return i
            };
            c.$Enable = function(n) {
                if (n == undefined) return !f;
                f = n ? 0 : 3;
                e()
            };
            t = n.$GetElement(t);
            l = w(t);
            r(["av", "pv", "ds", "dn"], function(n) {
                u.push(l + n)
            });
            a = ni(" ", u);
            u.splice(0, 0, "");
            $Jssor$.$AddEvent(t, s().$Evt_Down, v)
        }

        function st() {
            return b || (b = ft({
                $MarginTop: n.$CssMarginTop,
                $MarginLeft: n.$CssMarginLeft,
                $Clip: n.$SetStyleClip,
                $Transform: n.$SetStyleTransform
            }, ot)), b
        }

        function nr() {
            return st(), b.$Transform = b.$Transform, b
        }
        var n = this,
            tr = /\S+/g,
            ht = 1,
            ii = 2,
            ri = 3,
            ui = 4,
            fi = 5,
            k, l = 0,
            i = 0,
            o = 0,
            ei = 0,
            d = 0,
            g = navigator,
            oi = g.appName,
            cr = g.appVersion,
            t = g.userAgent,
            f = document.documentElement,
            nt, rt, yt, pt, u, ot, b, it;
        n.$Device = s;
        n.$IsBrowserIE = h;
        n.$IsBrowserIeQuirks = ct;
        n.$IsBrowserFireFox = ir;
        n.$IsBrowserSafari = si;
        n.$IsBrowserChrome = hi;
        n.$IsBrowserOpera = ci;
        n.$IsBrowserBadTransform = li;
        n.$IsBrowserIe9Earlier = lt;
        n.$BrowserVersion = function() {
            return i
        };
        n.$BrowserEngineVersion = function() {
            return o || i
        };
        n.$WebKitVersion = function() {
            return v(), d
        };
        n.$Delay = vi;
        n.$Inherit = function(n, t) {
            return t.call(n), ft({}, n)
        };
        n.$Construct = at;
        n.$GetElement = function(t) {
            return n.$IsString(t) && (t = document.getElementById(t)), t
        };
        n.$GetEvent = c;
        n.$EventSrc = function(n) {
            return n = c(n), n.target || n.srcElement || document
        };
        n.$EventTarget = function(n) {
            return n = c(n), n.relatedTarget || n.toElement
        };
        n.$EvtWhich = function(n) {
            return n = c(n), n.which || [0, 1, 3, 0, 2][n.button] || n.charCode || n.keyCode
        };
        n.$MousePosition = function(n) {
            n = c(n);
            var t = document.body;
            return {
                x: n.pageX || n.clientX + (f.scrollLeft || t.scrollLeft || 0) - (f.clientLeft || t.clientLeft || 0) || 0,
                y: n.pageY || n.clientY + (f.scrollTop || t.scrollTop || 0) - (f.clientTop || t.clientTop || 0) || 0
            }
        };
        n.$PageScroll = function() {
            var n = document.body;
            return {
                x: (window.pageXOffset || f.scrollLeft || n.scrollLeft || 0) - (f.clientLeft || n.clientLeft || 0),
                y: (window.pageYOffset || f.scrollTop || n.scrollTop || 0) - (f.clientTop || n.clientTop || 0)
            }
        };
        n.$WindowSize = function() {
            var n = document.body;
            return {
                x: n.clientWidth || f.clientWidth,
                y: n.clientHeight || f.clientHeight
            }
        };
        n.$SetStyleTransform = function(t, i) {
            li() ? vi(n.$CreateCallback(null, pi, t, i)) : pi(t, i)
        };
        n.$SetStyleTransformOrigin = function(n, t) {
            var i = a(n);
            i && (n.style[i + "Origin"] = t)
        };
        n.$CssScale = function(n, t) {
            var i;
            if (h() && o < 9 || o < 10 && ct()) n.style.zoom = t == 1 ? "" : t;
            else if (i = a(n), i) {
                var r = "scale(" + t + ")",
                    u = n.style[i],
                    f = new RegExp(/[\s]*scale\(.*?\)/g),
                    e = ut(u, [f], r);
                n.style[i] = e
            }
        };
        n.$EnableHWA = function(n) {
            n.style[a(n)] && n.style[a(n)] != "none" || (n.style[a(n)] = "perspective(2000px)")
        };
        n.$DisableHWA = function(n) {
            n.style[a(n)] = "none"
        };
        yt = 0;
        pt = 0;
        n.$WindowResizeFilter = function(n, t) {
            return lt() ? function() {
                var f = !0,
                    i = ct() ? n.document.body : n.document.documentElement,
                    r, u;
                i && (r = i.offsetWidth - yt, u = i.offsetHeight - pt, r || u ? (yt += r, pt += u) : f = !1);
                f && t()
            } : t
        };
        n.$MouseOverOutFilter = function(t, i) {
            return $JssorDebug$.$Execute(function() {
                    if (!i) throw new Error('Null reference, parameter "target".');
                }),
                function(r) {
                    r = c(r);
                    var f = r.type,
                        u = r.relatedTarget || (f == "mouseout" ? r.toElement : r.fromElement);
                    u && (u === i || n.$IsChild(i, u)) || t(r)
                }
        };
        n.$AddEvent = function(t, i, r, u) {
            t = n.$GetElement(t);
            $JssorDebug$.$Execute(function() {
                t || $JssorDebug$.$Fail("Parameter 'elmt' not specified.");
                r || $JssorDebug$.$Fail("Parameter 'handler' not specified.");
                t.addEventListener || t.attachEvent || $JssorDebug$.$Fail("Unable to attach event handler, no known technique.")
            });
            t.addEventListener ? (i == "mousewheel" && t.addEventListener("DOMMouseScroll", r, u), t.addEventListener(i, r, u)) : t.attachEvent && (t.attachEvent("on" + i, r), u && t.setCapture && t.setCapture())
        };
        n.$RemoveEvent = function(t, i, r, u) {
            t = n.$GetElement(t);
            t.removeEventListener ? (i == "mousewheel" && t.removeEventListener("DOMMouseScroll", r, u), t.removeEventListener(i, r, u)) : t.detachEvent && (t.detachEvent("on" + i, r), u && t.releaseCapture && t.releaseCapture())
        };
        n.$FireEvent = function(n, t) {
            var i, r;
            $JssorDebug$.$Execute(function() {
                document.createEvent || document.createEventObject || $JssorDebug$.$Fail("Unable to fire event, no known technique.");
                n.dispatchEvent || n.fireEvent || $JssorDebug$.$Fail("Unable to fire event, no known technique.")
            });
            document.createEvent ? (i = document.createEvent("HTMLEvents"), i.initEvent(t, !1, !1), n.dispatchEvent(i)) : (r = "on" + t, i = document.createEventObject(), n.fireEvent(r, i))
        };
        n.$CancelEvent = function(n) {
            n = c(n);
            n.preventDefault && n.preventDefault();
            n.cancel = !0;
            n.returnValue = !1
        };
        n.$StopEvent = function(n) {
            n = c(n);
            n.stopPropagation && n.stopPropagation();
            n.cancelBubble = !0
        };
        n.$CreateCallback = function(n, t) {
            var i = [].slice.call(arguments, 2);
            return function() {
                var r = i.concat([].slice.call(arguments, 0));
                return t.apply(n, r)
            }
        };
        n.$InnerText = function(t, i) {
            if (i == undefined) return t.textContent || t.innerText;
            var r = document.createTextNode(i);
            n.$Empty(t);
            t.appendChild(r)
        };
        n.$InnerHtml = function(n, t) {
            if (t == undefined) return n.innerHTML;
            n.innerHTML = t
        };
        n.$GetClientRect = function(n) {
            var t = n.getBoundingClientRect();
            return {
                x: t.left,
                y: t.top,
                w: t.right - t.left,
                h: t.bottom - t.top
            }
        };
        n.$ClearInnerHtml = function(n) {
            n.innerHTML = ""
        };
        n.$EncodeHtml = function(t) {
            var i = n.$CreateDiv();
            return n.$InnerText(i, t), n.$InnerHtml(i)
        };
        n.$DecodeHtml = function(t) {
            var i = n.$CreateDiv();
            return n.$InnerHtml(i, t), n.$InnerText(i)
        };
        n.$SelectElement = function(n) {
            var i, t;
            window.getSelection && (i = window.getSelection());
            t = null;
            document.createRange ? (t = document.createRange(), t.selectNode(n)) : (t = document.body.createTextRange(), t.moveToElementText(n), t.select());
            i && i.addRange(t)
        };
        n.$DeselectElements = function() {
            document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
        };
        n.$Children = function(n, t) {
            for (var r = [], i = n.firstChild; i; i = i.nextSibling)(t || i.nodeType == 1) && r.push(i);
            return r
        };
        n.$FindChild = wi;
        n.$FindChildren = wt;
        n.$FindChildByTag = bi;
        n.$FindChildrenByTag = ki;
        n.$GetElementsByTag = function(n, t) {
            return n.getElementsByTagName(t)
        };
        n.$Extend = ft;
        n.$Unextend = di;
        n.$IsUndefined = function(n) {
            return y(n) == "undefined"
        };
        n.$IsFunction = function(n) {
            return y(n) == "function"
        };
        n.$IsArray = function(n) {
            return y(n) == "array"
        };
        n.$IsString = function(n) {
            return y(n) == "string"
        };
        n.$IsNumeric = function(n) {
            return !isNaN(u(n)) && isFinite(n)
        };
        n.$IsWindow = function(n) {
            return n && n == n.window
        };
        n.$Type = y;
        n.$Each = r;
        n.$IsPlainObject = ur;
        n.$CreateElement = bt;
        n.$CreateDiv = function() {
            return bt("DIV", document)
        };
        n.$CreateSpan = function() {
            return bt("SPAN", document)
        };
        n.$EmptyFunction = function() {};
        n.$Attribute = kt;
        n.$AttributeEx = dt;
        n.$ClassName = w;
        n.$ToHash = gi;
        n.$Join = ni;
        n.$AddClass = function(n, t) {
            et(n, null, t)
        };
        n.$RemoveClass = et;
        n.$ReplaceClass = et;
        n.$ParentNode = function(n) {
            return n.parentNode
        };
        n.$HideElement = function(t) {
            n.$CssDisplay(t, "none")
        };
        n.$EnableElement = function(t, i) {
            i ? n.$Attribute(t, "disabled", !0) : n.$RemoveAttribute(t, "disabled")
        };
        n.$HideElements = function(t) {
            for (var i = 0; i < t.length; i++) n.$HideElement(t[i])
        };
        n.$ShowElement = function(t, i) {
            n.$CssDisplay(t, i ? "none" : "")
        };
        n.$ShowElements = function(t, i) {
            for (var r = 0; r < t.length; r++) n.$ShowElement(t[r], i)
        };
        n.$RemoveAttribute = function(n, t) {
            n.removeAttribute(t)
        };
        n.$CanClearClip = function() {
            return h() && i < 10
        };
        n.$SetStyleClip = function(n, t) {
            if (t) n.style.clip = "rect(" + Math.round(t.$Top) + "px " + Math.round(t.$Right) + "px " + Math.round(t.$Bottom) + "px " + Math.round(t.$Left) + "px)";
            else {
                var i = n.style.cssText,
                    r = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    u = ut(i, r, "");
                $Jssor$.$CssCssText(n, u)
            }
        };
        n.$GetNow = function() {
            return (new Date).getTime()
        };
        n.$AppendChild = function(n, t) {
            n.appendChild(t)
        };
        n.$AppendChildren = function(t, i) {
            r(i, function(i) {
                n.$AppendChild(t, i)
            })
        };
        n.$InsertBefore = function(n, t, i) {
            (i || t.parentNode).insertBefore(n, t)
        };
        n.$InsertAfter = function(t, i, r) {
            n.$InsertBefore(t, i.nextSibling, r || i.parentNode)
        };
        n.$InsertAdjacentHtml = function(n, t, i) {
            n.insertAdjacentHTML(t, i)
        };
        n.$RemoveElement = function(n, t) {
            (t || n.parentNode).removeChild(n)
        };
        n.$RemoveElements = function(t, i) {
            r(t, function(t) {
                n.$RemoveElement(t, i)
            })
        };
        n.$Empty = function(t) {
            n.$RemoveElements(n.$Children(t, !0), t)
        };
        n.$ParseInt = function(n, t) {
            return parseInt(n, t || 10)
        };
        u = parseFloat;
        n.$ParseFloat = u;
        n.$IsChild = function(n, t) {
            for (var i = document.body; t && n !== t && i !== t;) try {
                t = t.parentNode
            } catch (r) {
                return !1
            }
            return n === t
        };
        n.$CloneNode = ti;
        n.$LoadImage = function(t, r) {
            function f(t, i) {
                n.$RemoveEvent(u, "load", f);
                n.$RemoveEvent(u, "abort", e);
                n.$RemoveEvent(u, "error", e);
                r && r(u, i)
            }

            function e(n) {
                f(n, !0)
            }
            var u = new Image;
            ci() && i < 11.6 || !t ? f(!t) : (n.$AddEvent(u, "load", f), n.$AddEvent(u, "abort", e), n.$AddEvent(u, "error", e), u.src = t)
        };
        n.$LoadImages = function(t, i, u) {
            function e(n) {
                f--;
                i && n && n.src == i.src && (i = n);
                !f && u && u(i)
            }
            var f = t.length + 1;
            r(t, function(t) {
                n.$LoadImage(t.src, e)
            });
            e()
        };
        n.$BuildElement = function(n, t, i, r) {
            var u, e, f, o;
            for (r && (n = ti(n)), u = wt(n, t), u.length || (u = $Jssor$.$GetElementsByTag(n, t)), e = u.length - 1; e > -1; e--) f = u[e], o = ti(i), w(o, w(f)), $Jssor$.$CssCssText(o, f.style.cssText), $Jssor$.$InsertBefore(o, f), $Jssor$.$RemoveElement(f);
            return n
        };
        n.$Buttonize = function(n) {
            return new hr(n)
        };
        n.$Css = tt;
        n.$CssN = vt;
        n.$CssP = er;
        n.$CssOverflow = e("overflow");
        n.$CssTop = e("top", 2);
        n.$CssLeft = e("left", 2);
        n.$CssWidth = e("width", 2);
        n.$CssHeight = e("height", 2);
        n.$CssMarginLeft = e("marginLeft", 2);
        n.$CssMarginTop = e("marginTop", 2);
        n.$CssPosition = e("position");
        n.$CssDisplay = e("display");
        n.$CssZIndex = e("zIndex", 1);
        n.$CssFloat = function(n, t) {
            return tt(n, h() ? "styleFloat" : "cssFloat", t)
        };
        n.$CssOpacity = function(n, t, i) {
            if (t != undefined) sr(n, t, i);
            else return or(n)
        };
        n.$CssCssText = function(n, t) {
            if (t != undefined) n.style.cssText = t;
            else return n.style.cssText
        };
        ot = {
            $Opacity: n.$CssOpacity,
            $Top: n.$CssTop,
            $Left: n.$CssLeft,
            $Width: n.$CssWidth,
            $Height: n.$CssHeight,
            $Position: n.$CssPosition,
            $Display: n.$CssDisplay,
            $ZIndex: n.$CssZIndex
        };
        n.$StyleSetter = st;
        n.$StyleSetterEx = nr;
        n.$GetStyles = function(n, t) {
            st();
            var i = {};
            return r(t, function(t, r) {
                ot[r] && (i[r] = ot[r](n))
            }), i
        };
        n.$SetStyles = function(n, t) {
            var i = st();
            r(t, function(t, r) {
                i[r] && i[r](n, t)
            })
        };
        n.$SetStylesEx = function(t, i) {
            nr();
            n.$SetStyles(t, i)
        };
        it = new function() {
            function t(n, t) {
                for (var o, i, f, r, s = n[0].length, h = n.length, c = t[0].length, e = [], u = 0; u < h; u++)
                    for (o = e[u] = [], i = 0; i < c; i++) {
                        for (f = 0, r = 0; r < s; r++) f += n[u][r] * t[r][i];
                        o[i] = f
                    }
                return e
            }
            var n = this;
            n.$ScaleX = function(t, i) {
                return n.$ScaleXY(t, i, 0)
            };
            n.$ScaleY = function(t, i) {
                return n.$ScaleXY(t, 0, i)
            };
            n.$ScaleXY = function(n, i, r) {
                return t(n, [
                    [i, 0],
                    [0, r]
                ])
            };
            n.$TransformPoint = function(n, i) {
                var r = t(n, [
                    [i.x],
                    [i.y]
                ]);
                return p(r[0][0], r[1][0])
            }
        };
        n.$CreateMatrix = function(n, t, i) {
            var r = Math.cos(n),
                u = Math.sin(n);
            return [
                [r * t, -u * i],
                [u * t, r * i]
            ]
        };
        n.$GetMatrixOffset = function(n, t, i) {
            var r = it.$TransformPoint(n, p(-t / 2, -i / 2)),
                u = it.$TransformPoint(n, p(t / 2, -i / 2)),
                f = it.$TransformPoint(n, p(t / 2, i / 2)),
                e = it.$TransformPoint(n, p(-t / 2, i / 2));
            return p(Math.min(r.x, u.x, f.x, e.x) + t / 2, Math.min(r.y, u.y, f.y, e.y) + i / 2)
        };
        n.$Cast = function(n, t, i, r, u, f, e) {
            var o = t,
                s, a;
            if (n) {
                o = {};
                for (s in t) {
                    var k = f[s] || 1,
                        w = u[s] || [0, 1],
                        h = (i - w[0]) / w[1];
                    h = Math.min(Math.max(h, 0), 1);
                    h = h * k;
                    a = Math.floor(h);
                    h != a && (h -= a);
                    var d = r[s] || r.$Default || $JssorEasing$.$EaseSwing,
                        b = d(h),
                        c, g = n[s],
                        nt = t[s],
                        v = t[s];
                    $Jssor$.$IsNumeric(v) ? c = g + v * b : (c = $Jssor$.$Extend({
                        $Offset: {}
                    }, n[s]), $Jssor$.$Each(v.$Offset, function(n, t) {
                        var i = n * b;
                        c.$Offset[t] = i;
                        c[t] += i
                    }));
                    o[s] = c
                }(t.$Zoom || t.$Rotate) && (o.$Transform = {
                    $Rotate: o.$Rotate || 0,
                    $Scale: o.$Zoom,
                    $OriginalWidth: e.$OriginalWidth,
                    $OriginalHeight: e.$OriginalHeight
                })
            }
            if (t.$Clip && e.$Move) {
                var l = o.$Clip.$Offset,
                    y = (l.$Top || 0) + (l.$Bottom || 0),
                    p = (l.$Left || 0) + (l.$Right || 0);
                o.$Left = (o.$Left || 0) + p;
                o.$Top = (o.$Top || 0) + y;
                o.$Clip.$Left -= p;
                o.$Clip.$Right -= p;
                o.$Clip.$Top -= y;
                o.$Clip.$Bottom -= y
            }
            return o.$Clip && $Jssor$.$CanClearClip() && !o.$Clip.$Top && !o.$Clip.$Left && o.$Clip.$Right == e.$OriginalWidth && o.$Clip.$Bottom == e.$OriginalHeight && (o.$Clip = null), o
        }
    };
//# sourceMappingURL=jssor.min.js.map
;

function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0);
    this.$Revert = $Jssor$.$EmptyFunction
}
var $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = new function() {
        function tt(n) {
            return (n & p) == p
        }

        function it(n) {
            return (n & w) == w
        }

        function u(n, t, i) {
            i.push(t);
            n[t] = n[t] || [];
            n[t].push(i)
        }
        var f = this,
            n = 0,
            t = 1,
            i = 2,
            r = 3,
            y = 1,
            p = 2,
            w = 4,
            b = 8,
            k = 256,
            d = 512,
            g = 1024,
            nt = 2048,
            e = nt + y,
            o = nt + p,
            s = d + y,
            h = d + p,
            c = k + w,
            l = k + b,
            a = g + w,
            v = g + b;
        f.$FormationStraight = function(n) {
            for (var f = n.$Cols, v = n.$Rows, k = n.$Assembly, d = n.$Count, p = [], t = 0, i = 0, w = f - 1, b = v - 1, y = d - 1, g, r, i = 0; i < v; i++)
                for (t = 0; t < f; t++) {
                    g = i + "," + t;
                    switch (k) {
                        case e:
                            r = y - (t * v + (b - i));
                            break;
                        case a:
                            r = y - (i * f + (w - t));
                            break;
                        case s:
                            r = y - (t * v + i);
                        case c:
                            r = y - (i * f + t);
                            break;
                        case o:
                            r = t * v + i;
                            break;
                        case l:
                            r = i * f + (w - t);
                            break;
                        case h:
                            r = t * v + (b - i);
                            break;
                        default:
                            r = i * f + t
                    }
                    u(p, r, [i, t])
                }
            return p
        };
        f.$FormationSwirl = function(f) {
            var g = f.$Cols,
                nt = f.$Rows,
                ft = f.$Assembly,
                tt = f.$Count,
                it = [],
                rt = [],
                k = 0,
                v = 0,
                y = 0,
                w = g - 1,
                b = nt - 1,
                et = tt - 1,
                d, p, ut = 0;
            switch (ft) {
                case e:
                    v = w;
                    y = 0;
                    p = [i, t, r, n];
                    break;
                case a:
                    v = 0;
                    y = b;
                    p = [n, r, t, i];
                    break;
                case s:
                    v = w;
                    y = b;
                    p = [r, t, i, n];
                    break;
                case c:
                    v = w;
                    y = b;
                    p = [t, r, n, i];
                    break;
                case o:
                    v = 0;
                    y = 0;
                    p = [i, n, r, t];
                    break;
                case l:
                    v = w;
                    y = 0;
                    p = [t, i, n, r];
                    break;
                case h:
                    v = 0;
                    y = b;
                    p = [r, n, i, t];
                    break;
                default:
                    v = 0;
                    y = 0;
                    p = [n, i, t, r]
            }
            for (k = 0; k < tt;) {
                if (d = y + "," + v, v >= 0 && v < g && y >= 0 && y < nt && !rt[d]) rt[d] = !0, u(it, k++, [y, v]);
                else switch (p[ut++ % p.length]) {
                    case n:
                        v--;
                        break;
                    case i:
                        y--;
                        break;
                    case t:
                        v++;
                        break;
                    case r:
                        y++
                }
                switch (p[ut % p.length]) {
                    case n:
                        v++;
                        break;
                    case i:
                        y++;
                        break;
                    case t:
                        v--;
                        break;
                    case r:
                        y--
                }
            }
            return it
        };
        f.$FormationZigZag = function(f) {
            var nt = f.$Cols,
                tt = f.$Rows,
                ut = f.$Assembly,
                it = f.$Count,
                k = [],
                d = 0,
                v = 0,
                y = 0,
                w = nt - 1,
                b = tt - 1,
                ft = it - 1,
                rt, p, g = 0;
            switch (ut) {
                case e:
                    v = w;
                    y = 0;
                    p = [i, t, r, t];
                    break;
                case a:
                    v = 0;
                    y = b;
                    p = [n, r, t, r];
                    break;
                case s:
                    v = w;
                    y = b;
                    p = [r, t, i, t];
                    break;
                case c:
                    v = w;
                    y = b;
                    p = [t, r, n, r];
                    break;
                case o:
                    v = 0;
                    y = 0;
                    p = [i, n, r, n];
                    break;
                case l:
                    v = w;
                    y = 0;
                    p = [t, i, n, i];
                    break;
                case h:
                    v = 0;
                    y = b;
                    p = [r, n, i, n];
                    break;
                default:
                    v = 0;
                    y = 0;
                    p = [n, i, t, i]
            }
            for (d = 0; d < it;)
                if (rt = y + "," + v, v >= 0 && v < nt && y >= 0 && y < tt && typeof k[rt] == "undefined") {
                    u(k, d++, [y, v]);
                    switch (p[g % p.length]) {
                        case n:
                            v++;
                            break;
                        case i:
                            y++;
                            break;
                        case t:
                            v--;
                            break;
                        case r:
                            y--
                    }
                } else {
                    switch (p[g++ % p.length]) {
                        case n:
                            v--;
                            break;
                        case i:
                            y--;
                            break;
                        case t:
                            v++;
                            break;
                        case r:
                            y++
                    }
                    switch (p[g++ % p.length]) {
                        case n:
                            v++;
                            break;
                        case i:
                            y++;
                            break;
                        case t:
                            v--;
                            break;
                        case r:
                            y--
                    }
                }
            return k
        };
        f.$FormationStraightStairs = function(n) {
            var g = n.$Cols,
                nt = n.$Rows,
                y = n.$Assembly,
                d = n.$Count,
                b = [],
                k = 0,
                r = 0,
                f = 0,
                p = g - 1,
                w = nt - 1,
                rt = d - 1,
                ut, t, i;
            switch (y) {
                case e:
                case h:
                case s:
                case o:
                    t = 0;
                    i = 0;
                    break;
                case l:
                case a:
                case c:
                case v:
                    t = p;
                    i = 0;
                    break;
                default:
                    y = v;
                    t = p;
                    i = 0
            }
            for (r = t, f = i; k < d;) {
                ut = f + "," + r;
                it(y) || tt(y) ? u(b, rt - k++, [f, r]) : u(b, k++, [f, r]);
                switch (y) {
                    case e:
                    case h:
                        r--;
                        f++;
                        break;
                    case s:
                    case o:
                        r++;
                        f--;
                        break;
                    case l:
                    case a:
                        r--;
                        f--;
                        break;
                    case v:
                    case c:
                    default:
                        r++;
                        f++
                }
                if (r < 0 || f < 0 || r > p || f > w) {
                    switch (y) {
                        case e:
                        case h:
                            t++;
                            break;
                        case l:
                        case a:
                        case s:
                        case o:
                            i++;
                            break;
                        case v:
                        case c:
                        default:
                            t--
                    }
                    if (t < 0 || i < 0 || t > p || i > w) {
                        switch (y) {
                            case e:
                            case h:
                                t = p;
                                i++;
                                break;
                            case s:
                            case o:
                                i = w;
                                t++;
                                break;
                            case l:
                            case a:
                                i = w;
                                t--;
                                break;
                            case v:
                            case c:
                            default:
                                t = 0;
                                i++
                        }
                        i > w ? i = w : i < 0 ? i = 0 : t > p ? t = p : t < 0 && (t = 0)
                    }
                    f = i;
                    r = t
                }
            }
            return b
        };
        f.$FormationSquare = function(n) {
            var t = n.$Cols || 1,
                i = n.$Rows || 1,
                s = [],
                r, f, e, o, h;
            for (e = t < i ? (i - t) / 2 : 0, o = t > i ? (t - i) / 2 : 0, h = Math.round(Math.max(t / 2, i / 2)) + 1, r = 0; r < t; r++)
                for (f = 0; f < i; f++) u(s, h - Math.min(r + 1 + e, f + 1 + o, t - r + e, i - f + o), [f, r]);
            return s
        };
        f.$FormationRectangle = function(n) {
            for (var r = n.$Cols || 1, f = n.$Rows || 1, e = [], i, o = Math.round(Math.min(r / 2, f / 2)) + 1, t = 0; t < r; t++)
                for (i = 0; i < f; i++) u(e, o - Math.min(t + 1, i + 1, r - t, f - i), [i, t]);
            return e
        };
        f.$FormationRandom = function(n) {
            for (var r = [], i, t = 0; t < n.$Rows; t++)
                for (i = 0; i < n.$Cols; i++) u(r, Math.ceil(1e5 * Math.random()) % 13, [t, i]);
            return r
        };
        f.$FormationCircle = function(n) {
            for (var r = n.$Cols || 1, f = n.$Rows || 1, e = [], i, o = r / 2 - .5, s = f / 2 - .5, t = 0; t < r; t++)
                for (i = 0; i < f; i++) u(e, Math.round(Math.sqrt(Math.pow(t - o, 2) + Math.pow(i - s, 2))), [i, t]);
            return e
        };
        f.$FormationCross = function(n) {
            for (var r = n.$Cols || 1, f = n.$Rows || 1, e = [], i, o = r / 2 - .5, s = f / 2 - .5, t = 0; t < r; t++)
                for (i = 0; i < f; i++) u(e, Math.round(Math.min(Math.abs(t - o), Math.abs(i - s))), [i, t]);
            return e
        };
        f.$FormationRectangleCross = function(n) {
            for (var e = n.$Cols || 1, o = n.$Rows || 1, s = [], i, r = e / 2 - .5, f = o / 2 - .5, h = Math.max(r, f) + 1, t = 0; t < e; t++)
                for (i = 0; i < o; i++) u(s, Math.round(h - Math.max(r - Math.abs(t - r), f - Math.abs(i - f))) - 1, [i, t]);
            return s
        }
    },
    $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function(n, t, i, r, u) {
        function h(n, t) {
            var i = {
                $Interval: t,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: !1,
                $SlideOut: !1,
                $Reverse: !1,
                $Formation: $JssorSlideshowFormations$.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: $JssorEasing$.$EaseSwing,
                $Round: {},
                $Blocks: [],
                $During: {}
            };
            return $Jssor$.$Extend(i, n), i.$Count = i.$Cols * i.$Rows, $Jssor$.$IsFunction(i.$Easing) && (i.$Easing = {
                $Default: i.$Easing
            }), i.$FramesCount = Math.ceil(i.$Duration / i.$Interval), i.$GetBlocks = function(n, t) {
                var f, r, u;
                if (n /= i.$Cols, t /= i.$Rows, f = n + "x" + t, !i.$Blocks[f])
                    for (i.$Blocks[f] = {
                            $Width: n,
                            $Height: t
                        }, r = 0; r < i.$Cols; r++)
                        for (u = 0; u < i.$Rows; u++) i.$Blocks[f][u + "," + r] = {
                            $Top: u * t,
                            $Right: r * n + n,
                            $Bottom: u * t + t,
                            $Left: r * n
                        };
                return i.$Blocks[f]
            }, i.$Brother && (i.$Brother = h(i.$Brother, t), i.$SlideOut = !0), i
        }

        function a(n, t, i, r, u, f) {
            function ft(n) {
                var t = n.$Formation(n);
                return n.$Reverse ? t.reverse() : t
            }

            function tt(n) {
                $Jssor$.$DisableHWA(n);
                var t = $Jssor$.$Children(n);
                $Jssor$.$Each(t, function(n) {
                    tt(n)
                })
            }
            var k = this,
                w, d = {},
                h = {},
                l = [],
                o, e, a, v = i.$ChessMode.$Column || 0,
                y = i.$ChessMode.$Row || 0,
                s = i.$GetBlocks(u, f),
                p = ft(i),
                ut = p.length - 1,
                b = i.$Duration + i.$Delay * ut,
                g = r + b,
                c = i.$SlideOut,
                nt, it, rt;
            g += 50;
            k.$EndTime = g;
            k.$ShowFrame = function(n) {
                var t, u;
                n -= r;
                t = n < b;
                (t || nt) && (nt = t, c || (n = b - n), u = Math.ceil(n / i.$Interval), $Jssor$.$Each(h, function(n, t) {
                    var i = Math.max(u, n.$Min);
                    i = Math.min(i, n.length - 1);
                    n.$LastFrameIndex != i && (n.$LastFrameIndex || c ? i == n.$Max && c && $Jssor$.$HideElement(l[t]) : $Jssor$.$ShowElement(l[t]), n.$LastFrameIndex = i, $Jssor$.$SetStylesEx(l[t], n[i]))
                }))
            };
            t = $Jssor$.$CloneNode(t);
            tt(t);
            $Jssor$.$IsBrowserIe9Earlier() && (it = !t["no-image"], rt = $Jssor$.$FindChildrenByTag(t), $Jssor$.$Each(rt, function(n) {
                (it || n["jssor-slider"]) && $Jssor$.$CssOpacity(n, $Jssor$.$CssOpacity(n), !0)
            }));
            $Jssor$.$Each(p, function(n, t) {
                $Jssor$.$Each(n, function(n) {
                    var ct = n[0],
                        lt = n[1],
                        l = ct + "," + lt,
                        p = !1,
                        b = !1,
                        g = !1,
                        et, ot, at, k, r, vt, yt, nt, tt;
                    v && lt % 2 && ($JssorDirection$.$IsHorizontal(v) && (p = !p), $JssorDirection$.$IsVertical(v) && (b = !b), v & 16 && (g = !g));
                    y && ct % 2 && ($JssorDirection$.$IsHorizontal(y) && (p = !p), $JssorDirection$.$IsVertical(y) && (b = !b), y & 16 && (g = !g));
                    i.$Top = i.$Top || i.$Clip & 4;
                    i.$Bottom = i.$Bottom || i.$Clip & 8;
                    i.$Left = i.$Left || i.$Clip & 1;
                    i.$Right = i.$Right || i.$Clip & 2;
                    var it = b ? i.$Bottom : i.$Top,
                        rt = b ? i.$Top : i.$Bottom,
                        ut = p ? i.$Right : i.$Left,
                        ft = p ? i.$Left : i.$Right;
                    i.$Clip = it || rt || ut || ft;
                    a = {};
                    e = {
                        $Top: 0,
                        $Left: 0,
                        $Opacity: 1,
                        $Width: u,
                        $Height: f
                    };
                    o = $Jssor$.$Extend({}, e);
                    w = $Jssor$.$Extend({}, s[l]);
                    i.$Opacity && (e.$Opacity = 2 - i.$Opacity);
                    i.$ZIndex && (e.$ZIndex = i.$ZIndex, o.$ZIndex = 0);
                    et = i.$Cols * i.$Rows > 1 || i.$Clip;
                    (i.$Zoom || i.$Rotate) && (ot = !0, $Jssor$.$IsBrowserIE() && $Jssor$.$BrowserEngineVersion() < 9 && (i.$Cols * i.$Rows > 1 ? ot = !1 : et = !1), ot && (e.$Zoom = i.$Zoom ? i.$Zoom - 1 : 1, o.$Zoom = 1, ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) && (e.$Zoom = Math.min(e.$Zoom, 2)), at = i.$Rotate, e.$Rotate = at * 360 * (g ? -1 : 1), o.$Rotate = 0));
                    et && (i.$Clip && (k = i.$ScaleClip || 1, r = w.$Offset = {}, it && rt ? (r.$Top = s.$Height / 2 * k, r.$Bottom = -r.$Top) : it ? r.$Bottom = -s.$Height * k : rt && (r.$Top = s.$Height * k), ut && ft ? (r.$Left = s.$Width / 2 * k, r.$Right = -r.$Left) : ut ? r.$Right = -s.$Width * k : ft && (r.$Left = s.$Width * k)), a.$Clip = w, o.$Clip = s[l]);
                    vt = p ? 1 : -1;
                    yt = b ? 1 : -1;
                    i.x && (e.$Left += u * i.x * vt);
                    i.y && (e.$Top += f * i.y * yt);
                    $Jssor$.$Each(e, function(n, t) {
                        $Jssor$.$IsNumeric(n) && n != o[t] && (a[t] = n - o[t])
                    });
                    d[l] = c ? o : e;
                    var st = i.$FramesCount,
                        ht = Math.round(t * i.$Delay / i.$Interval);
                    for (h[l] = new Array(ht), h[l].$Min = ht, h[l].$Max = ht + st - 1, nt = 0; nt <= st; nt++) tt = $Jssor$.$Cast(o, a, nt / st, i.$Easing, i.$During, i.$Round, {
                        $Move: i.$Move,
                        $OriginalWidth: u,
                        $OriginalHeight: f
                    }), tt.$ZIndex = tt.$ZIndex || 1, h[l].push(tt)
                })
            });
            p.reverse();
            $Jssor$.$Each(p, function(i) {
                $Jssor$.$Each(i, function(i) {
                    var u = i[0],
                        f = i[1],
                        e = u + "," + f,
                        r = t;
                    (f || u) && (r = $Jssor$.$CloneNode(t));
                    $Jssor$.$SetStyles(r, d[e]);
                    $Jssor$.$CssOverflow(r, "hidden");
                    $Jssor$.$CssPosition(r, "absolute");
                    n.$AddClipElement(r);
                    l[e] = r;
                    $Jssor$.$ShowElement(r, !c)
                })
            })
        }

        function b() {
            var n = this,
                t = 0;
            $JssorAnimator$.call(n, 0, c);
            n.$OnPositionChange = function(n, i) {
                i - t > s && (t = i, o && o.$ShowFrame(i), e && e.$ShowFrame(i))
            };
            n.$Transition = l
        }
        var f = this,
            c, e, o, v, y, p = 0,
            w = r.$TransitionsOrder,
            l, s = 8;
        f.$GetTransition = function() {
            var n = 0,
                t = r.$Transitions,
                i = t.length;
            return n = w ? p++ % i : Math.floor(Math.random() * i), t[n] && (t[n].$Index = n), t[n]
        };
        f.$Initialize = function(r, u, p, w, b) {
            var k, d, nt;
            $JssorDebug$.$Execute(function() {
                e && $JssorDebug$.$Fail("slideshow runner has not been cleared.")
            });
            l = b;
            b = h(b, s);
            y = p;
            v = w;
            k = w.$Item;
            d = p.$Item;
            k["no-image"] = !w.$Image;
            d["no-image"] = !p.$Image;
            var tt = k,
                it = d,
                rt = b,
                g = b.$Brother || h({}, s);
            b.$SlideOut || (tt = d, it = k);
            nt = g.$Shift || 0;
            e = new a(n, it, g, Math.max(nt - g.$Interval, 0), t, i);
            o = new a(n, tt, rt, Math.max(g.$Interval - nt, 0), t, i);
            e.$ShowFrame(0);
            o.$ShowFrame(0);
            c = Math.max(e.$EndTime, o.$EndTime);
            f.$Index = r
        };
        f.$Clear = function() {
            n.$Clear();
            e = null;
            o = null
        };
        f.$GetProcessor = function() {
            var n = null;
            return o && (n = new b), n
        };
        ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera() || u && $Jssor$.$WebKitVersion() < 537) && (s = 16);
        $JssorObject$.call(f);
        $JssorAnimator$.call(f, -1e7, 1e7)
    },
    $JssorSlider$ = window.$JssorSlider$ = function(n, t) {
        function tf() {
            var n = this;
            $JssorAnimator$.call(n, -1e8, 2e8);
            n.$GetCurrentSlideInfo = function() {
                var t = n.$GetPosition_Display(),
                    i = Math.floor(t),
                    r = e(i),
                    u = t - Math.floor(t);
                return {
                    $Index: r,
                    $VirtualIndex: i,
                    $Position: u
                }
            };
            n.$OnPositionChange = function(n, t) {
                var i = Math.floor(t);
                i != t && t > n && i++;
                tu(i, !0);
                r.$TriggerEvent($JssorSlider$.$EVT_POSITION_CHANGE, e(t), e(n), t, n)
            }
        }

        function rf() {
            var n = this;
            $JssorAnimator$.call(n, 0, 0, {
                $LoopLength: f
            });
            $Jssor$.$Each(p, function(t) {
                k & 1 && t.$SetLoopLength(f);
                n.$Chain(t);
                t.$Shift(yi / su)
            })
        }

        function uf() {
            var n = this,
                t = yr.$Elmt;
            $JssorAnimator$.call(n, -1, 2, {
                $Easing: $JssorEasing$.$EaseLinear,
                $Setter: {
                    $Position: br
                },
                $LoopLength: f
            }, t, {
                $Position: 1
            }, {
                $Position: -2
            });
            n.$Wrapper = t;
            $JssorDebug$.$Execute(function() {
                $Jssor$.$Attribute(yr.$Elmt, "debug-id", "slide_container")
            })
        }

        function ff(n, t) {
            var f = this,
                o, s, h, c, a;
            $JssorAnimator$.call(f, -1e8, 2e8, {
                $IntervalMax: 100
            });
            f.$OnStart = function() {
                yt = !0;
                dt = null;
                r.$TriggerEvent($JssorSlider$.$EVT_SWIPE_START, e(l.$GetPosition()), l.$GetPosition())
            };
            f.$OnStop = function() {
                yt = !1;
                c = !1;
                var n = l.$GetCurrentSlideInfo();
                r.$TriggerEvent($JssorSlider$.$EVT_SWIPE_END, e(l.$GetPosition()), l.$GetPosition());
                n.$Position || vf(n.$VirtualIndex, u)
            };
            f.$OnPositionChange = function(n, t) {
                var r, u;
                c ? r = a : (r = s, h && (u = t / h, r = i.$SlideEasing(u) * (s - o) + o));
                l.$GoToPosition(r)
            };
            f.$PlayCarousel = function(n, t, i, r) {
                $JssorDebug$.$Execute(function() {
                    f.$IsPlaying() && $JssorDebug$.$Fail("The carousel is already playing.")
                });
                o = n;
                s = t;
                h = i;
                l.$GoToPosition(n);
                f.$GoToPosition(0);
                f.$PlayToPosition(i, r)
            };
            f.$StandBy = function(n) {
                c = !0;
                a = n;
                f.$Play(n, null, !0)
            };
            f.$SetStandByPosition = function(n) {
                a = n
            };
            f.$MoveCarouselTo = function(n) {
                l.$GoToPosition(n)
            };
            l = new tf;
            l.$Combine(n);
            l.$Combine(t)
        }

        function ef() {
            var t = this,
                n = iu();
            $Jssor$.$CssZIndex(n, 0);
            $Jssor$.$Css(n, "pointerEvents", "none");
            t.$Elmt = n;
            t.$AddClipElement = function(t) {
                $Jssor$.$AppendChild(n, t);
                $Jssor$.$ShowElement(n)
            };
            t.$Clear = function() {
                $Jssor$.$HideElement(n);
                $Jssor$.$Empty(n)
            }
        }

        function of(n, t) {
            function ot(t) {
                b && b.$Revert();
                v && v.$Revert();
                ni(n, t);
                et = !0;
                v = new st.$Class(n, st, 1);
                $JssorDebug$.$LiveStamp(v, "caption_slider_" + hi + "_in");
                b = new st.$Class(n, st);
                $JssorDebug$.$LiveStamp(b, "caption_slider_" + hi + "_out");
                $JssorDebug$.$Execute(function() {
                    hi++
                });
                b.$GoToBegin();
                v.$GoToBegin()
            }

            function ri() {
                v.$Version < st.$Version && ot()
            }

            function pt(n, u, f) {
                var c, v;
                if (!rt && (rt = !0, h && f)) {
                    var e = f.width,
                        o = f.height,
                        l = e,
                        a = o;
                    e && o && i.$FillMode && (i.$FillMode & 3 && (!(i.$FillMode & 4) || e > ut || o > ft) && (c = !1, v = ut / ft * o / e, i.$FillMode & 1 ? c = v > 1 : i.$FillMode & 2 && (c = v < 1), l = c ? e * ft / o : ut, a = c ? ft : o * ut / e), $Jssor$.$CssWidth(h, l), $Jssor$.$CssHeight(h, a), $Jssor$.$CssTop(h, (ft - a) / 2), $Jssor$.$CssLeft(h, (ut - l) / 2));
                    $Jssor$.$CssPosition(h, "absolute");
                    r.$TriggerEvent($JssorSlider$.$EVT_LOAD_END, t)
                }
                $Jssor$.$HideElement(u);
                n && n(s)
            }

            function fi(n, i, r, f) {
                if (f == dt && u == t && at && !te) {
                    var o = e(n);
                    w.$Initialize(o, t, i, s, r);
                    i.$HideContentForSlideshow();
                    ii.$Locate(o, 1);
                    ii.$GoToPosition(o);
                    a.$PlayCarousel(n, n, 0)
                }
            }

            function ei(i) {
                if (i == dt && u == t) {
                    if (!c) {
                        var r = null;
                        w && (w.$Index == t ? r = w.$GetProcessor() : w.$Clear());
                        ri();
                        c = new sf(n, t, r, s.$GetCaptionSliderIn(), s.$GetCaptionSliderOut());
                        c.$SetPlayer(l)
                    }
                    c.$IsPlaying() || c.$Replay()
                }
            }

            function wt(n, r, u) {
                var f, e, h;
                n == t ? (n != r ? p[r] && p[r].$ParkOut() : !u && c && c.$AdjustIdleOnPark(), l && l.$Enable(), f = dt = $Jssor$.$GetNow(), s.$LoadImage($Jssor$.$CreateCallback(null, ei, f))) : (e = Math.abs(t - n), h = o + i.$LazyLoading - 1, (!vt || e <= h) && s.$LoadImage())
            }

            function oi() {
                u == t && c && (c.$Stop(), l && l.$Quit(), l && l.$Disable(), c.$OpenSlideshowPanel())
            }

            function si() {
                u == t && c && c.$Stop()
            }

            function ct(t) {
                if (kt) {
                    $Jssor$.$StopEvent(t);
                    for (var i = $Jssor$.$EventSrc(t); i && n !== i;) {
                        i.tagName == "A" && $Jssor$.$CancelEvent(t);
                        try {
                            i = i.parentNode
                        } catch (r) {
                            break
                        }
                    }
                }
            }

            function ci(n) {
                kt || r.$TriggerEvent($JssorSlider$.$EVT_CLICK, t, n)
            }

            function bt() {
                l = g.pInstance;
                c && c.$SetPlayer(l)
            }

            function ni(n, t, r) {
                if ($JssorDebug$.$Execute(function() {
                        $Jssor$.$Attribute(n, "jssor-slider") && $JssorDebug$.$Log("Child slider found.")
                    }), !$Jssor$.$Attribute(n, "jssor-slider")) {
                    r = r || 0;
                    et || (n.tagName == "IMG" && (tt.push(n), n.src || (vt = !0, n["display-origin"] = $Jssor$.$CssDisplay(n), $Jssor$.$HideElement(n))), $Jssor$.$IsBrowserIe9Earlier() && $Jssor$.$CssZIndex(n, ($Jssor$.$CssZIndex(n) || 0) + 1), i.$HWA && $Jssor$.$WebKitVersion() && (!ui || $Jssor$.$WebKitVersion() < 534 || !vi && !$Jssor$.$IsBrowserChrome()) && $Jssor$.$EnableHWA(n));
                    var u = $Jssor$.$Children(n);
                    $Jssor$.$Each(u, function(i) {
                        var u = i.tagName,
                            e = $Jssor$.$AttributeEx(i, "u"),
                            f;
                        e != "player" || g || (g = i, g.pInstance ? bt() : $Jssor$.$AddEvent(g, "dataavailable", bt));
                        e == "caption" ? $Jssor$.$IsBrowserIE() || t || (u == "A" && ($Jssor$.$RemoveEvent(i, "click", ct), $Jssor$.$Attribute(i, "jssor-content", null)), f = $Jssor$.$CloneNode(i, !1, !0), $Jssor$.$InsertBefore(f, i, n), $Jssor$.$RemoveElement(i, n), i = f, t = !0) : et || r || h || (u == "A" ? ($Jssor$.$AttributeEx(i, "u") == "image" ? (h = $Jssor$.$FindChildByTag(i, "IMG"), $JssorDebug$.$Execute(function() {
                            h || $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + n.outerHTML)
                        })) : h = $Jssor$.$FindChild(i, "image", !0), h && (it = i, $Jssor$.$SetStyles(it, ht), y = $Jssor$.$CloneNode(it, !0), $Jssor$.$AddEvent(y, "click", ct), $Jssor$.$CssDisplay(y, "block"), $Jssor$.$SetStyles(y, ht), $Jssor$.$CssOpacity(y, 0), $Jssor$.$Css(y, "backgroundColor", "#000"))) : u == "IMG" && $Jssor$.$AttributeEx(i, "u") == "image" && (h = i), h && (h.border = 0, $Jssor$.$SetStyles(h, ht)));
                        $Jssor$.$Attribute(i, "jssor-content") || ($Jssor$.$AddEvent(i, "click", ct), $Jssor$.$Attribute(i, "jssor-content", !0));
                        ni(i, t, r + 1)
                    })
                }
            }
            var s = this,
                v, b, d, li = n,
                k, h, tt = [],
                it, y, lt, rt, vt, et, c, g, l, yt, nt;
            $JssorAnimator$.call(s, -o, o + 1, {
                $SlideItemAnimator: !0
            });
            s.$LoadImage = function(n, i) {
                i = i || k;
                tt.length && !rt ? ($Jssor$.$ShowElement(i), lt || (lt = !0, r.$TriggerEvent($JssorSlider$.$EVT_LOAD_START, t), $Jssor$.$Each(tt, function(n) {
                    n.src || (n.src = $Jssor$.$AttributeEx(n, "src2"), $Jssor$.$CssDisplay(n, n["display-origin"]))
                })), $Jssor$.$LoadImages(tt, h, $Jssor$.$CreateCallback(null, pt, n, i))) : pt(n, i)
            };
            s.$GoForNextSlide = function() {
                var n;
                if (w && (n = w.$GetTransition(f), n)) {
                    var s = dt = $Jssor$.$GetNow(),
                        r = t + uu,
                        o = p[e(r)];
                    return o.$LoadImage($Jssor$.$CreateCallback(null, fi, r, o, n, s), k)
                }
                gt(u + i.$AutoPlaySteps * uu)
            };
            s.$TryActivate = function() {
                wt(t, t, !0)
            };
            s.$ParkOut = function() {
                l && l.$Quit();
                l && l.$Disable();
                s.$UnhideContentForSlideshow();
                c && c.$Abort();
                c = null;
                ot()
            };
            s.$StampSlideItemElements = function(t) {
                t = yt + "_" + t;
                $JssorDebug$.$Execute(function() {
                    h && $Jssor$.$Attribute(h, "debug-id", t + "_slide_item_image_id");
                    $Jssor$.$Attribute(n, "debug-id", t + "_slide_item_item_id")
                });
                $JssorDebug$.$Execute(function() {
                    $Jssor$.$Attribute(d, "debug-id", t + "_slide_item_wrapper_id")
                });
                $JssorDebug$.$Execute(function() {
                    $Jssor$.$Attribute(k, "debug-id", t + "_loading_container_id")
                })
            };
            s.$HideContentForSlideshow = function() {
                $Jssor$.$HideElement(n)
            };
            s.$UnhideContentForSlideshow = function() {
                $Jssor$.$ShowElement(n)
            };
            s.$EnablePlayer = function() {
                l && l.$Enable()
            };
            s.$OnInnerOffsetChange = function(n, t) {
                var i = o - t;
                br(d, i)
            };
            s.$GetCaptionSliderIn = function() {
                return v
            };
            s.$GetCaptionSliderOut = function() {
                return b
            };
            s.$Index = t;
            $JssorObject$.call(s);
            nt = $Jssor$.$FindChild(n, "thumb", !0);
            nt && (s.$Thumb = $Jssor$.$CloneNode(nt), $Jssor$.$RemoveAttribute(nt, "id"), $Jssor$.$HideElement(nt));
            $Jssor$.$ShowElement(n);
            k = $Jssor$.$CloneNode(ti);
            $Jssor$.$CssZIndex(k, 1e3);
            $Jssor$.$AddEvent(n, "click", ci);
            ot(!0);
            s.$Image = h;
            s.$Link = y;
            s.$Item = n;
            s.$Wrapper = d = n;
            $Jssor$.$AppendChild(d, k);
            r.$On(203, wt);
            r.$On(28, si);
            r.$On(24, oi);
            $JssorDebug$.$Execute(function() {
                yt = gf++
            });
            $JssorDebug$.$Execute(function() {
                $Jssor$.$Attribute(d, "debug-id", "slide-" + t)
            })
        }

        function sf(n, t, f, e, o) {
            function rt() {
                $Jssor$.$Empty(pt);
                au && v && k.$Link && $Jssor$.$AppendChild(pt, k.$Link);
                $Jssor$.$ShowElement(pt, !v && k.$Image)
            }

            function ft() {
                g && (g = !1, r.$TriggerEvent($JssorSlider$.$EVT_ROLLBACK_END, t, h, a, l, h, c), s.$GoToPosition(l));
                s.$Replay()
            }

            function ot(n) {
                it = n;
                s.$Stop();
                s.$Replay()
            }
            var s = this,
                a = 0,
                nt = 0,
                b, ut, l, h, c, v, g, tt, it, k = p[t];
            $JssorAnimator$.call(s, 0, 0);
            s.$Replay = function() {
                var n = s.$GetPosition_Display(),
                    i, f, e;
                y || yt || it || u != t || (n || (b && !v && (v = !0, s.$OpenSlideshowPanel(!0), r.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_START, t, a, nt, b, c)), rt()), f = $JssorSlider$.$EVT_STATE_CHANGE, n != c && (n == h ? i = c : n == l ? i = h : n ? n > h ? (g = !0, i = h, f = $JssorSlider$.$EVT_ROLLBACK_START) : i = s.$GetPlayToPosition() : i = l), r.$TriggerEvent(f, t, n, a, l, h, c), e = at && (!et || d), n == c ? (h == c || et & 12) && !e || k.$GoForNextSlide() : (e || n != h) && s.$PlayToPosition(i, ft))
            };
            s.$AdjustIdleOnPark = function() {
                h == c && h == s.$GetPosition_Display() && s.$GoToPosition(l)
            };
            s.$Abort = function() {
                w && w.$Index == t && w.$Clear();
                var n = s.$GetPosition_Display();
                n < c && r.$TriggerEvent($JssorSlider$.$EVT_STATE_CHANGE, t, -n - 1, a, l, h, c)
            };
            s.$OpenSlideshowPanel = function(n) {
                f && $Jssor$.$CssOverflow(ai, n && f.$Transition.$Outside ? "" : "hidden")
            };
            s.$OnInnerOffsetChange = function(n, i) {
                v && i >= b && (v = !1, rt(), k.$UnhideContentForSlideshow(), w.$Clear(), r.$TriggerEvent($JssorSlider$.$EVT_SLIDESHOW_END, t, a, nt, b, c));
                r.$TriggerEvent($JssorSlider$.$EVT_PROGRESS_CHANGE, t, i, a, l, h, c)
            };
            s.$SetPlayer = function(n) {
                n && !tt && (tt = n, n.$On($JssorPlayer$.$EVT_SWITCH, ot))
            };
            f && s.$Chain(f);
            b = s.$GetPosition_OuterEnd();
            ut = s.$GetPosition_OuterEnd();
            s.$Chain(e);
            l = e.$GetPosition_OuterEnd();
            h = l + ($Jssor$.$ParseFloat($Jssor$.$AttributeEx(n, "idle")) || i.$AutoPlayInterval);
            o.$Shift(h);
            s.$Combine(o);
            c = s.$GetPosition_OuterEnd()
        }

        function br(n, t) {
            var u = c > 0 ? c : wt,
                i = or * t * (u & 1),
                r = sr * t * (u >> 1 & 1);
            i = Math.round(i);
            r = Math.round(r);
            $Jssor$.$IsBrowserIE() && $Jssor$.$BrowserVersion() >= 10 && $Jssor$.$BrowserVersion() < 11 ? n.style.msTransform = "translate(" + i + "px, " + r + "px)" : ($Jssor$.$CssLeft(n, i), $Jssor$.$CssTop(n, r))
        }

        function hf(n) {
            var t = $Jssor$.$EventSrc(n);
            ct || $Jssor$.$AttributeEx(t, "nodrag") || !yf() || lf(n)
        }

        function kr() {
            pr = yt;
            du = a.$GetPlayToPosition();
            nt = l.$GetPosition()
        }

        function dr() {
            kr();
            (y || !d && et & 12) && (a.$Stop(), r.$TriggerEvent($JssorSlider$.$EVT_FREEZE))
        }

        function gr(n) {
            var r, t, u;
            n && kr();
            y || !d && et & 12 || a.$IsPlaying() || (r = l.$GetPosition(), t = Math.ceil(nt), n && Math.abs(g) >= i.$MinDragOffsetToSlide && (t = Math.ceil(r) + wi), k & 1 || (t = Math.min(f - o, Math.max(t, 0))), u = Math.abs(t - r), u = 1 - Math.pow(1 - u, 5), !kt && pr ? a.$Continue(du) : r == t ? (er.$EnablePlayer(), er.$TryActivate()) : a.$PlayCarousel(r, t, u * vu))
        }

        function cf(n) {
            $Jssor$.$CancelEvent(n)
        }

        function lf(n) {
            var t, i;
            y = !0;
            hr = !1;
            dt = null;
            $Jssor$.$AddEvent(document, pu, nu);
            ku = $Jssor$.$GetNow() - 50;
            kt = 0;
            dr();
            pr || (c = 0);
            bu ? (t = n.touches[0], lr = t.clientX, ar = t.clientY) : (i = $Jssor$.$MousePosition(n), lr = i.x, ar = i.y, $Jssor$.$IsBrowserFireFox() && $Jssor$.$BrowserVersion() < 4 && $Jssor$.$CancelEvent(n));
            g = 0;
            pi = 0;
            wi = 0;
            r.$TriggerEvent($JssorSlider$.$EVT_DRAG_START, e(nt), nt, n)
        }

        function nu(n) {
            var e, s, h, l, t, v, i, r;
            y && (bu ? (s = n.touches, s && s.length > 0 && (e = {
                x: s[0].clientX,
                y: s[0].clientY
            })) : e = $Jssor$.$MousePosition(n), e && (h = e.x - lr, l = e.y - ar, Math.floor(nt) != nt && (c = c || wt & ct), (h || l) && !c && (c = ct == 3 ? Math.abs(l) > Math.abs(h) ? 2 : 1 : ct, ui && c == 1 && Math.abs(l) - Math.abs(h) > 3 && (hr = !0)), c && (t = l, v = sr, c == 1 && (t = h, v = or), k & 1 || (t > 0 && (i = v * u, r = t - i, r > 0 && (t = i + Math.sqrt(r) * 5)), t < 0 && (i = v * (f - o - u), r = -t - i, r > 0 && (t = -i - Math.sqrt(r) * 5))), g - pi < -2 ? wi = 0 : g - pi > 2 && (wi = -1), pi = g, g = t, wr = nt - g / v / (ri || 1), g && c && !hr && ($Jssor$.$CancelEvent(n), yt ? a.$SetStandByPosition(wr) : a.$StandBy(wr)))))
        }

        function di() {
            if (pf(), y) {
                y = !1;
                ku = $Jssor$.$GetNow();
                $Jssor$.$RemoveEvent(document, pu, nu);
                kt = g;
                a.$Stop();
                var n = l.$GetPosition();
                r.$TriggerEvent($JssorSlider$.$EVT_DRAG_END, e(n), n, e(nt), nt);
                gr(!0)
            }
        }

        function af(n) {
            return ne = p[u], eu = u, u = e(n), er = p[u], tu(n), u
        }

        function vf(n, t) {
            c = 0;
            af(n);
            r.$TriggerEvent($JssorSlider$.$EVT_PARK, e(n), t)
        }

        function tu(n, t) {
            fr = n;
            $Jssor$.$Each(lt, function(i) {
                i.$SetCurrentIndex(e(n), n, t)
            })
        }

        function yf() {
            var t = $JssorSlider$.$DragRegistry || 0,
                n = vt;
            return ui && n & 1 && (n &= 1), $JssorSlider$.$DragRegistry |= n, ct = n & ~t
        }

        function pf() {
            ct && ($JssorSlider$.$DragRegistry &= ~vt, ct = 0)
        }

        function iu() {
            var n = $Jssor$.$CreateDiv();
            return $Jssor$.$SetStyles(n, ht), $Jssor$.$CssPosition(n, "absolute"), n
        }

        function e(n) {
            return (n % f + f) % f
        }

        function wf(n, t) {
            t && (k ? k & 2 && (n = e(n + fr), t = !1) : (n = Math.min(Math.max(n + fr, 0), f - o), t = !1));
            gt(n, i.$SlideDuration, t)
        }

        function gi() {
            $Jssor$.$Each(lt, function(n) {
                n.$Show(n.$Options.$ChanceToShow <= d)
            })
        }

        function bf() {
            d || (d = 1, gi(), y || (et & 12 && gr(), et & 3 && p[u].$TryActivate()))
        }

        function kf() {
            d && (d = 0, gi(), !y && et & 12 && dr())
        }

        function df() {
            ht = {
                $Width: ut,
                $Height: ft,
                $Top: 0,
                $Left: 0
            };
            $Jssor$.$Each(rt, function(n) {
                $Jssor$.$SetStyles(n, ht);
                $Jssor$.$CssPosition(n, "absolute");
                $Jssor$.$CssOverflow(n, "hidden");
                $Jssor$.$HideElement(n)
            });
            $Jssor$.$SetStyles(ti, ht)
        }

        function oi(n, t) {
            gt(n, t, !0)
        }

        function gt(n, t, r) {
            var s, u, c, h;
            yu && (!y || i.$NaviQuitDrag) && (yt = !0, y = !1, a.$Stop(), t == undefined && (t = vu), s = vr.$GetPosition_Display(), u = n, r && (u = s + n, u = n > 0 ? Math.ceil(u) : Math.floor(u)), k & 2 && (u = e(u)), k & 1 || (u = Math.max(0, Math.min(u, f - o))), c = (u - s) % f, u = s + c, h = s == u ? 0 : t * Math.abs(c), h = Math.min(h, t * o * 1.5), a.$PlayCarousel(s, u, h || 1))
        }

        function ni() {
            return $Jssor$.$CssWidth(h || n)
        }

        function si() {
            return $Jssor$.$CssHeight(h || n)
        }

        function nr(t, i) {
            var u, o, s, f, e;
            if (t == undefined) return $Jssor$.$CssWidth(n);
            h || ($JssorDebug$.$Execute(function() {
                var t = $Jssor$.$Css(n, "width"),
                    i = $Jssor$.$Css(n, "height"),
                    r = $Jssor$.$CssP(n, "width"),
                    u = $Jssor$.$CssP(n, "height");
                t && t.indexOf("px") != -1 || $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                i && i.indexOf("px") != -1 || $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                t.indexOf("%") != -1 && $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel. e.g. 'width: 600px;'");
                i.indexOf("%") != -1 && $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel. e.g. 'height: 300px;'");
                r || $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive number. e.g. 'width: 600px;'");
                u || $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive number. e.g. 'height: 300px;'")
            }), u = $Jssor$.$CreateDiv(document), $Jssor$.$ClassName(u, $Jssor$.$ClassName(n)), $Jssor$.$CssCssText(u, $Jssor$.$CssCssText(n)), $Jssor$.$CssDisplay(u, "block"), $Jssor$.$CssPosition(u, "relative"), $Jssor$.$CssTop(u, 0), $Jssor$.$CssLeft(u, 0), $Jssor$.$CssOverflow(u, "visible"), h = $Jssor$.$CreateDiv(document), $Jssor$.$CssPosition(h, "absolute"), $Jssor$.$CssTop(h, 0), $Jssor$.$CssLeft(h, 0), $Jssor$.$CssWidth(h, $Jssor$.$CssWidth(n)), $Jssor$.$CssHeight(h, $Jssor$.$CssHeight(n)), $Jssor$.$SetStyleTransformOrigin(h, "0 0"), $Jssor$.$AppendChild(h, u), o = $Jssor$.$Children(n), $Jssor$.$AppendChild(n, h), $Jssor$.$Css(n, "backgroundImage", ""), s = {
                navigator: it && it.$Scale == !1,
                arrowleft: v && v.$Scale == !1,
                arrowright: v && v.$Scale == !1,
                thumbnavigator: b && b.$Scale == !1,
                thumbwrapper: b && b.$Scale == !1
            }, $Jssor$.$Each(o, function(t) {
                $Jssor$.$AppendChild(s[$Jssor$.$AttributeEx(t, "u")] ? n : u, t)
            }));
            $JssorDebug$.$Execute(function() {
                (!t || t < 0) && $JssorDebug$.$Fail("'$ScaleWidth' error, 'dimension' should be positive value.")
            });
            $JssorDebug$.$Execute(function() {
                ru || (ru = r.$Elmt.scrollWidth)
            });
            ri = t / (i ? $Jssor$.$CssHeight : $Jssor$.$CssWidth)(h);
            $Jssor$.$CssScale(h, ri);
            f = i ? ri * ni() : t;
            e = i ? t : ri * si();
            $Jssor$.$CssWidth(n, f);
            $Jssor$.$CssHeight(n, e);
            $Jssor$.$Each(lt, function(n) {
                n.$Relocate(f, e)
            })
        }
        var r = this,
            ru, hi, i, ci, li, ht, rt, fu, ki, fi, gu, nf, ei;
        r.$PlayTo = gt;
        r.$GoTo = function(n) {
            gt(n, 1)
        };
        r.$Next = function() {
            oi(1)
        };
        r.$Prev = function() {
            oi(-1)
        };
        r.$Pause = function() {
            at = !1
        };
        r.$Play = function() {
            at || (at = !0, p[u] && p[u].$TryActivate())
        };
        r.$SetSlideshowTransitions = function(n) {
            $JssorDebug$.$Execute(function() {
                n && n.length || $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.")
            });
            i.$SlideshowOptions.$Transitions = n
        };
        r.$SetCaptionTransitions = function(n) {
            $JssorDebug$.$Execute(function() {
                n && n.length || $JssorDebug$.$Error("Can not set caption transitions, no transitions specified")
            });
            st.$CaptionTransitions = n;
            st.$Version = $Jssor$.$GetNow()
        };
        r.$SlidesCount = function() {
            return rt.length
        };
        r.$CurrentIndex = function() {
            return u
        };
        r.$IsAutoPlaying = function() {
            return at
        };
        r.$IsDragging = function() {
            return y
        };
        r.$IsSliding = function() {
            return yt
        };
        r.$IsMouseOver = function() {
            return !d
        };
        r.$LastDragSucceded = function() {
            return kt
        };
        r.$OriginalWidth = r.$GetOriginalWidth = ni;
        r.$OriginalHeight = r.$GetOriginalHeight = si;
        r.$ScaleHeight = r.$GetScaleHeight = function(t) {
            if (t == undefined) return $Jssor$.$CssHeight(n);
            nr(t, !0)
        };
        r.$ScaleWidth = r.$SetScaleWidth = r.$GetScaleWidth = nr;
        r.$GetVirtualIndex = function(n) {
            var t = Math.ceil(e(yi / su)),
                i = e(n - u + t);
            return i > o ? n - u > f / 2 ? n -= f : n - u <= -f / 2 && (n += f) : n = u + i - t, n
        };
        $JssorObject$.call(r);
        $JssorDebug$.$Execute(function() {
            var t = $Jssor$.$GetElement(n);
            t || $JssorDebug$.$Fail("Outer container '" + n + "' not found.")
        });
        r.$Elmt = n = $Jssor$.$GetElement(n);
        hi = 1;
        i = $Jssor$.$Extend({
            $FillMode: 0,
            $LazyLoading: 1,
            $StartIndex: 0,
            $AutoPlay: !1,
            $Loop: 1,
            $HWA: !0,
            $NaviQuitDrag: !0,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: $JssorEasing$.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $DisplayPieces: 1,
            $ParkingPosition: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, t);
        $JssorDebug$.$Execute(function() {
            i = $Jssor$.$Extend({
                $ArrowKeyNavigation: undefined,
                $SlideWidth: undefined,
                $SlideHeight: undefined,
                $SlideshowOptions: undefined,
                $CaptionSliderOptions: undefined,
                $BulletNavigatorOptions: undefined,
                $ArrowNavigatorOptions: undefined,
                $ThumbnailNavigatorOptions: undefined
            }, i)
        });
        var wt = i.$PlayOrientation & 3,
            uu = (i.$PlayOrientation & 4) / -4 || 1,
            tt = i.$SlideshowOptions,
            st = $Jssor$.$Extend({
                $Class: $JssorCaptionSliderBase$,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, i.$CaptionSliderOptions),
            it = i.$BulletNavigatorOptions,
            v = i.$ArrowNavigatorOptions,
            b = i.$ThumbnailNavigatorOptions;
        $JssorDebug$.$Execute(function() {
            tt && !tt.$Class && $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            i.$CaptionSliderOptions && !i.$CaptionSliderOptions.$Class && $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            it && !it.$Class && $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            v && !v.$Class && $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.")
        });
        $JssorDebug$.$Execute(function() {
            b && !b.$Class && $JssorDebug$.$Fail("Option $ThumbnailNavigatorOptions error, class not specified.")
        });
        var bt = !i.$UISearchMode,
            h, s = $Jssor$.$FindChild(n, "slides", bt),
            ti = $Jssor$.$FindChild(n, "loading", bt) || $Jssor$.$CreateDiv(document),
            tr = $Jssor$.$FindChild(n, "navigator", bt),
            ir = $Jssor$.$FindChild(n, "arrowleft", bt),
            rr = $Jssor$.$FindChild(n, "arrowright", bt),
            ur = $Jssor$.$FindChild(n, "thumbnavigator", bt);
        $JssorDebug$.$Execute(function() {
            if (tr && !it) throw new Error("Bullet navigator container defined but $BulletNavigatorOptions not specified.");
            if ((ir || rr) && !v) throw new Error("arrowleft or arrowright defined, but $ArrowNavigatorOptions not specified.");
            if (ur && !b) throw new Error("Thumbnail navigator container defined, but $ThumbnailNavigatorOptions not specified.");
        });
        ci = $Jssor$.$CssWidth(s);
        li = $Jssor$.$CssHeight(s);
        $JssorDebug$.$Execute(function() {
            isNaN(ci) && $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified in pixel (like style='width: 600px;').");
            ci == undefined && $JssorDebug$.$Fail("Width of slides container not specified, it should be specified in pixel (like style='width: 600px;').");
            isNaN(li) && $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified in pixel (like style='height: 300px;').");
            li == undefined && $JssorDebug$.$Fail("Height of slides container not specified, it should be specified in pixel (like style='height: 300px;').");
            var n = $Jssor$.$CssOverflow(s),
                t = $Jssor$.$Css(s, "overflowX"),
                i = $Jssor$.$Css(s, "overflowY");
            n != "hidden" && (t != "hidden" || i != "hidden") && $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').")
        });
        $JssorDebug$.$Execute(function() {
            $Jssor$.$IsNumeric(i.$DisplayPieces) || $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1.");
            i.$DisplayPieces < 1 && $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1.");
            i.$DisplayPieces > 1 && i.$DragOrientation && i.$DragOrientation != wt && $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1.");
            $Jssor$.$IsNumeric(i.$ParkingPosition) || $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value.");
            i.$ParkingPosition && i.$DragOrientation && i.$DragOrientation != wt && $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.")
        });
        rt = [];
        fu = $Jssor$.$Children(s);
        $Jssor$.$Each(fu, function(n) {
            n.tagName != "DIV" || $Jssor$.$AttributeEx(n, "u") || rt.push(n)
        });
        $JssorDebug$.$Execute(function() {
            rt.length < 1 && $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.")
        });
        var gf = 0,
            eu, u = -1,
            fr, ne, er, f = rt.length,
            ut = i.$SlideWidth || ci,
            ft = i.$SlideHeight || li,
            ou = i.$SlideSpacing,
            or = ut + ou,
            sr = ft + ou,
            su = wt & 1 ? or : sr,
            o = Math.min(i.$DisplayPieces, f),
            ai, c, ct, hr, lt = [],
            hu, cu, lu, au, te, at, ee = i.$AutoPlaySteps,
            et = i.$PauseOnHover,
            oe = i.$AutoPlayInterval,
            vu = i.$SlideDuration,
            cr, vi, yi, yu = o < f,
            k = yu ? i.$Loop : 0,
            vt, kt, d = 1,
            yt, y, dt, lr = 0,
            ar = 0,
            g, pi, wi, vr, l, ii, a, yr = new ef,
            ri;
        at = i.$AutoPlay;
        r.$Options = t;
        df();
        $Jssor$.$Attribute(n, "jssor-slider", !0);
        $Jssor$.$CssZIndex(s, $Jssor$.$CssZIndex(s) || 0);
        $Jssor$.$CssPosition(s, "absolute");
        ai = $Jssor$.$CloneNode(s, !0);
        $Jssor$.$InsertBefore(ai, s);
        tt && (au = tt.$ShowLink, cr = tt.$Class, $JssorDebug$.$Execute(function() {
            tt.$Transitions && tt.$Transitions.length || $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.")
        }), vi = o == 1 && f > 1 && cr && (!$Jssor$.$IsBrowserIE() || $Jssor$.$BrowserVersion() >= 8));
        yi = vi || o >= f || !(k & 1) ? 0 : i.$ParkingPosition;
        vt = (o > 1 || yi ? wt : -1) & i.$DragOrientation;
        var bi = s,
            p = [],
            w, pt, ot = $Jssor$.$Device(),
            ie = ot.$Evt_Down,
            pu = ot.$Evt_Move,
            re = ot.$Evt_Up,
            wu = ot.$Evt_Cancel,
            bu = ot.$TouchOnly,
            ui = ot.$Touchable,
            ku, nt, pr, du, wr;
        for (ot.$TouchActionAttr && vt && (ki = "auto", vt == 2 ? ki = "pan-x" : vt && (ki = "pan-y"), $Jssor$.$Css(bi, ot.$TouchActionAttr, ki)), ii = new uf, vi && (w = new cr(yr, ut, ft, tt, ui)), $Jssor$.$AppendChild(ai, ii.$Wrapper), $Jssor$.$CssOverflow(s, "hidden"), pt = iu(), $Jssor$.$Css(pt, "backgroundColor", "#000"), $Jssor$.$CssOpacity(pt, 0), $Jssor$.$InsertBefore(pt, bi.firstChild, bi), fi = 0; fi < rt.length; fi++) gu = rt[fi], nf = new of(gu, fi), p.push(nf);
        $Jssor$.$HideElement(ti);
        $JssorDebug$.$Execute(function() {
            $Jssor$.$Attribute(ti, "debug-id", "loading-container")
        });
        vr = new rf;
        a = new ff(vr, ii);
        $JssorDebug$.$Execute(function() {
            $Jssor$.$Attribute(bi, "debug-id", "slide-board")
        });
        vt && ($Jssor$.$AddEvent(s, ie, hf), $Jssor$.$AddEvent(s, "dragstart", cf), $Jssor$.$AddEvent(document, re, di), $Jssor$.$AddEvent(window, "blur", function() {
            di()
        }), wu && $Jssor$.$AddEvent(document, wu, di));
        et &= ui ? 10 : 5;
        tr && it && (hu = new it.$Class(tr, it, ni(), si()), lt.push(hu));
        v && ir && rr && (v.$Loop = k, v.$DisplayPieces = o, cu = new v.$Class(ir, rr, v, ni(), si()), lt.push(cu));
        ur && b && (b.$StartIndex = i.$StartIndex, lu = new b.$Class(ur, b), lt.push(lu));
        $Jssor$.$Each(lt, function(n) {
            n.$Reset(f, p, ti);
            n.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, wf)
        });
        nr(ni());
        $Jssor$.$AddEvent(n, "mouseout", $Jssor$.$MouseOverOutFilter(bf, n));
        $Jssor$.$AddEvent(n, "mouseover", $Jssor$.$MouseOverOutFilter(kf, n));
        gi();
        i.$ArrowKeyNavigation && $Jssor$.$AddEvent(document, "keydown", function(n) {
            n.keyCode == $JssorKeyCode$.$LEFT ? oi(-1) : n.keyCode == $JssorKeyCode$.$RIGHT && oi(1)
        });
        ei = i.$StartIndex;
        k & 1 || (ei = Math.max(0, Math.min(ei, f - o)));
        a.$PlayCarousel(ei, ei, 0)
    },
    $JssorSlideo$ = window.$JssorSlideo$ = $JssorSlider$,
    $JssorCaptionSlider$, $JssorCaptionSlideo$;
$JssorSlider$.$EVT_CLICK = 21;
$JssorSlider$.$EVT_DRAG_START = 22;
$JssorSlider$.$EVT_DRAG_END = 23;
$JssorSlider$.$EVT_SWIPE_START = 24;
$JssorSlider$.$EVT_SWIPE_END = 25;
$JssorSlider$.$EVT_LOAD_START = 26;
$JssorSlider$.$EVT_LOAD_END = 27;
$JssorSlider$.$EVT_FREEZE = 28;
$JssorSlider$.$EVT_POSITION_CHANGE = 202;
$JssorSlider$.$EVT_PARK = 203;
$JssorSlider$.$EVT_SLIDESHOW_START = 206;
$JssorSlider$.$EVT_SLIDESHOW_END = 207;
$JssorSlider$.$EVT_PROGRESS_CHANGE = 208;
$JssorSlider$.$EVT_STATE_CHANGE = 209;
$JssorSlider$.$EVT_ROLLBACK_START = 210;
$JssorSlider$.$EVT_ROLLBACK_END = 211;
var $JssorNavigatorEvents$ = {
        $NAVIGATIONREQUEST: 1,
        $INDEXCHANGE: 2,
        $RESET: 3
    },
    $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function(n, t) {
        function k(n) {
            n != -1 && b[n].$Selected(n == o)
        }

        function d(n) {
            r.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, n * s)
        }
        var r = this,
            g, nt;
        $JssorObject$.call(r);
        n = $Jssor$.$GetElement(n);
        var h, tt, c, l, a, o = 0,
            i, s, f, p, w, e, u, v, y, it = [],
            b = [];
        r.$Elmt = n;
        r.$GetCurrentIndex = function() {
            return a
        };
        r.$SetCurrentIndex = function(n) {
            if (n != a) {
                var i = o,
                    t = Math.floor(n / s);
                o = t;
                a = n;
                k(i);
                k(t)
            }
        };
        r.$Show = function(t) {
            $Jssor$.$ShowElement(n, t)
        };
        r.$Relocate = function(t, r) {
            g && i.$Scale != !1 || (i.$AutoCenter & 1 && $Jssor$.$CssLeft(n, (t - c) / 2), i.$AutoCenter & 2 && $Jssor$.$CssTop(n, (r - l) / 2), g = !0)
        };
        r.$Reset = function(t) {
            var r, ut, a, ft;
            if (!nt) {
                tt = t;
                h = Math.ceil(t / s);
                o = 0;
                var g = v + p,
                    rt = y + w,
                    k = Math.ceil(h / f) - 1;
                for (c = v + g * (e ? f - 1 : k), l = y + rt * (e ? k : f - 1), $Jssor$.$CssWidth(n, c), $Jssor$.$CssHeight(n, l), r = 0; r < h; r++) ut = $Jssor$.$CreateSpan(), $Jssor$.$InnerText(ut, r + 1), a = $Jssor$.$BuildElement(u, "numbertemplate", ut, !0), $Jssor$.$CssPosition(a, "absolute"), ft = r % (k + 1), $Jssor$.$CssLeft(a, e ? r % f * g : g * ft), $Jssor$.$CssTop(a, e ? rt * ft : Math.floor(r / (k + 1)) * rt), $Jssor$.$AppendChild(n, a), it[r] = a, i.$ActionMode & 1 && $Jssor$.$AddEvent(a, "click", $Jssor$.$CreateCallback(null, d, r)), i.$ActionMode & 2 && $Jssor$.$AddEvent(a, "mouseover", $Jssor$.$MouseOverOutFilter($Jssor$.$CreateCallback(null, d, r), a)), b[r] = $Jssor$.$Buttonize(a);
                nt = !0
            }
        };
        r.$Options = i = $Jssor$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, t);
        $JssorDebug$.$Execute(function() {
            i = $Jssor$.$Extend({
                $Steps: undefined,
                $Lanes: undefined
            }, i)
        });
        u = $Jssor$.$FindChild(n, "prototype");
        $JssorDebug$.$Execute(function() {
            u || $JssorDebug$.$Fail("Navigator item prototype not defined.");
            isNaN($Jssor$.$CssWidth(u)) && $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified.");
            isNaN($Jssor$.$CssHeight(u)) && $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.")
        });
        v = $Jssor$.$CssWidth(u);
        y = $Jssor$.$CssHeight(u);
        $Jssor$.$RemoveElement(u, n);
        s = i.$Steps || 1;
        f = i.$Lanes || 1;
        p = i.$SpacingX;
        w = i.$SpacingY;
        e = i.$Orientation - 1
    },
    $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function(n, t, i, r) {
        function a(n) {
            u.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, n, !0)
        }

        function v(r) {
            $Jssor$.$ShowElement(n, r || !i.$Loop && f == 0);
            $Jssor$.$ShowElement(t, r || !i.$Loop && f >= l - i.$DisplayPieces);
            c = r
        }
        var u = this,
            c, l, f, e, o, s, h, y, p;
        $JssorObject$.call(u);
        $JssorDebug$.$Execute(function() {
            n || $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");
            t || $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");
            isNaN($Jssor$.$CssWidth(n)) && $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
            isNaN($Jssor$.$CssWidth(t)) && $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
            isNaN($Jssor$.$CssHeight(n)) && $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
            isNaN($Jssor$.$CssHeight(t)) && $JssorDebug$.$Fail("Height of 'arrow right' not specified.")
        });
        s = $Jssor$.$CssWidth(n);
        h = $Jssor$.$CssHeight(n);
        u.$GetCurrentIndex = function() {
            return f
        };
        u.$SetCurrentIndex = function(n, t, i) {
            i ? f = t : (f = n, v(c))
        };
        u.$Show = v;
        u.$Relocate = function(i, u) {
            y && e.$Scale != !1 || (e.$AutoCenter & 1 && ($Jssor$.$CssLeft(n, (r - s) / 2), $Jssor$.$CssLeft(t, (r - s) / 2)), e.$AutoCenter & 2 && ($Jssor$.$CssTop(n, (u - h) / 2), $Jssor$.$CssTop(t, (u - h) / 2)), y = !0)
        };
        u.$Reset = function(i) {
            l = i;
            f = 0;
            p || ($Jssor$.$AddEvent(n, "click", $Jssor$.$CreateCallback(null, a, -o)), $Jssor$.$AddEvent(t, "click", $Jssor$.$CreateCallback(null, a, o)), $Jssor$.$Buttonize(n), $Jssor$.$Buttonize(t), p = !0)
        };
        u.$Options = e = $Jssor$.$Extend({
            $Steps: 1
        }, i);
        o = e.$Steps
    },
    $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function(n, t) {
        function g(n, t) {
            function v() {
                h.$Selected(o == t)
            }

            function a() {
                if (!l.$LastDragSucceded()) {
                    var n = r - t % r,
                        i = l.$GetVirtualIndex((t + n) / r - 1),
                        u = i * r + r - n;
                    f.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, u)
                }
            }
            var s = this,
                u, h, c;
            $JssorDebug$.$Execute(function() {
                s.$Wrapper = undefined
            });
            s.$Index = t;
            s.$Highlight = v;
            c = n.$Thumb || n.$Image || $Jssor$.$CreateDiv();
            s.$Wrapper = u = $Jssor$.$BuildElement(e, "thumbnailtemplate", c, !0);
            h = $Jssor$.$Buttonize(u);
            i.$ActionMode & 1 && $Jssor$.$AddEvent(u, "click", a);
            i.$ActionMode & 2 && $Jssor$.$AddEvent(u, "mouseover", $Jssor$.$MouseOverOutFilter(a, u))
        }
        var f = this,
            b, d, o, i, y = [],
            p, w, r, s, h, a, v, c, l, u, e, k;
        $JssorObject$.call(f);
        n = $Jssor$.$GetElement(n);
        f.$GetCurrentIndex = function() {
            return o
        };
        f.$SetCurrentIndex = function(n, t, i) {
            var u = o;
            o = n;
            u != -1 && y[u].$Highlight();
            y[n].$Highlight();
            i || l.$PlayTo(l.$GetVirtualIndex(Math.floor(t / r)))
        };
        f.$Show = function(t) {
            $Jssor$.$ShowElement(n, t)
        };
        f.$Relocate = $Jssor$.$EmptyFunction;
        f.$Reset = function(t, f) {
            var nt, ft;
            if (!k) {
                b = t;
                d = Math.ceil(b / r);
                o = -1;
                c = Math.min(c, f.length);
                var e = i.$Orientation & 1,
                    tt = a + (a + s) * (r - 1) * (1 - e),
                    it = v + (v + h) * (r - 1) * e,
                    rt = tt + (tt + s) * (c - 1) * e,
                    ut = it + (it + h) * (c - 1) * (1 - e);
                $Jssor$.$CssPosition(u, "absolute");
                $Jssor$.$CssOverflow(u, "hidden");
                i.$AutoCenter & 1 && $Jssor$.$CssLeft(u, (p - rt) / 2);
                i.$AutoCenter & 2 && $Jssor$.$CssTop(u, (w - ut) / 2);
                $Jssor$.$CssWidth(u, rt);
                $Jssor$.$CssHeight(u, ut);
                nt = [];
                $Jssor$.$Each(f, function(n, t) {
                    var o = new g(n, t),
                        f = o.$Wrapper,
                        i = Math.floor(t / r),
                        c = t % r;
                    $Jssor$.$CssLeft(f, (a + s) * c * (1 - e));
                    $Jssor$.$CssTop(f, (v + h) * c * e);
                    nt[i] || (nt[i] = $Jssor$.$CreateDiv(), $Jssor$.$AppendChild(u, nt[i]));
                    $Jssor$.$AppendChild(nt[i], f);
                    y.push(o)
                });
                ft = $Jssor$.$Extend({
                    $HWA: !1,
                    $AutoPlay: !1,
                    $NaviQuitDrag: !1,
                    $SlideWidth: tt,
                    $SlideHeight: it,
                    $SlideSpacing: s * e + h * (1 - e),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: i.$Orientation,
                    $DragOrientation: i.$DisableDrag ? 0 : i.$Orientation
                }, i);
                l = new $JssorSlider$(n, ft);
                k = !0
            }
        };
        f.$Options = i = $Jssor$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, t);
        $JssorDebug$.$Execute(function() {
            i = $Jssor$.$Extend({
                $Lanes: undefined,
                $Width: undefined,
                $Height: undefined
            }, i)
        });
        p = $Jssor$.$CssWidth(n);
        w = $Jssor$.$CssHeight(n);
        $JssorDebug$.$Execute(function() {
            p || $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified.");
            w || $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.")
        });
        u = $Jssor$.$FindChild(n, "slides", !0);
        e = $Jssor$.$FindChild(u, "prototype");
        $JssorDebug$.$Execute(function() {
            e || $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.")
        });
        a = $Jssor$.$CssWidth(e);
        v = $Jssor$.$CssHeight(e);
        $Jssor$.$RemoveElement(e, u);
        r = i.$Lanes || 1;
        s = i.$SpacingX;
        h = i.$SpacingY;
        c = i.$DisplayPieces
    };
$JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function(n, t, i) {
    function s(n, t) {
        function a(n, t) {
            var i = {};
            return $Jssor$.$Each(l, function(r, u) {
                var f = $Jssor$.$AttributeEx(n, r + (t || "")),
                    e;
                f && (e = {}, r == "t" ? e.$Value = f : f.indexOf("%") + 1 ? e.$Percent = $Jssor$.$ParseFloat(f) / 100 : e.$Value = $Jssor$.$ParseFloat(f), i[u] = e)
            }), i
        }

        function y() {
            return f[Math.floor(Math.random() * f.length)]
        }

        function v(n) {
            var i, t;
            return n == "*" ? i = y() : n && (t = f[$Jssor$.$ParseInt(n)] || f[n], $Jssor$.$IsArray(t) && (n != h ? (h = n, r[n] = 0, c[n] = t[Math.floor(Math.random() * t.length)]) : r[n]++, t = c[n], $Jssor$.$IsArray(t) && (t = t.length && t[r[n] % t.length], $Jssor$.$IsArray(t) && (t = t[Math.floor(Math.random() * t.length)]))), i = t, $Jssor$.$IsString(i) && (i = v(i))), i
        }
        var e = [],
            h, c = [],
            r = [],
            p = $Jssor$.$Children(n);
        return $Jssor$.$Each(p, function(n) {
            var r = [],
                f;
            r.$Elmt = n;
            f = $Jssor$.$AttributeEx(n, "u") == "caption";
            $Jssor$.$Each(i ? [0, 3] : [2], function(i, e) {
                var l, h, c;
                f && (i == 2 && $Jssor$.$AttributeEx(n, "t3") || (h = a(n, i), i != 2 || h.$Transition || (h.$Delay = h.$Delay || {
                    $Value: 0
                }, h = $Jssor$.$Extend(a(n, 0), h))), h && h.$Transition && (l = v(h.$Transition.$Value), l && (c = $Jssor$.$Extend({
                    $Delay: 0
                }, l), $Jssor$.$Each(h, function(n, t) {
                    var i = (u[t] || u.$Default).apply(u, [c[t], h[t]]);
                    isNaN(i) || (c[t] = i)
                }), e || (h.$BeginTime ? c.$BeginTime = h.$BeginTime.$Value || 0 : o & 2 && (c.$BeginTime = 0)))), r.push(c));
                t % 2 && !e && (r.$Children = s(n, t + 1))
            });
            e.push(r)
        }), e
    }

    function h(n, t, r) {
        var e = {
                $Easing: t.$Easing,
                $Round: t.$Round,
                $During: t.$During,
                $Reverse: i && !r
            },
            p, a, v, tt;
        $JssorDebug$.$Execute(function() {
            e.$CaptionAnimator = !0
        });
        var l = n,
            y = $Jssor$.$ParentNode(n),
            h = $Jssor$.$CssWidth(l),
            c = $Jssor$.$CssHeight(l),
            it = $Jssor$.$CssWidth(y),
            rt = $Jssor$.$CssHeight(y),
            o = {},
            u = {},
            s = t.$ScaleClip || 1;
        if (t.$Opacity && (u.$Opacity = 1 - t.$Opacity), e.$OriginalWidth = h, e.$OriginalHeight = c, t.$Zoom || t.$Rotate) u.$Zoom = (t.$Zoom || 2) - 2, ($Jssor$.$IsBrowserIe9Earlier() || $Jssor$.$IsBrowserOpera()) && (u.$Zoom = Math.min(u.$Zoom, 1)), o.$Zoom = 1, p = t.$Rotate || 0, u.$Rotate = p * 360, o.$Rotate = 0;
        else if (t.$Clip) {
            var w = {
                    $Top: 0,
                    $Right: h,
                    $Bottom: c,
                    $Left: 0
                },
                b = $Jssor$.$Extend({}, w),
                f = b.$Offset = {},
                k = t.$Clip & 4,
                d = t.$Clip & 8,
                g = t.$Clip & 1,
                nt = t.$Clip & 2;
            k && d ? (f.$Top = c / 2 * s, f.$Bottom = -f.$Top) : k ? f.$Bottom = -c * s : d && (f.$Top = c * s);
            g && nt ? (f.$Left = h / 2 * s, f.$Right = -f.$Left) : g ? f.$Right = -h * s : nt && (f.$Left = h * s);
            e.$Move = t.$Move;
            u.$Clip = b;
            o.$Clip = w
        }
        return a = 0, v = 0, t.x && (a -= it * t.x), t.y && (v -= rt * t.y), (a || v || e.$Move) && (u.$Left = a, u.$Top = v), tt = t.$Duration, o = $Jssor$.$Extend(o, $Jssor$.$GetStyles(l, u)), e.$Setter = $Jssor$.$StyleSetterEx(), new $JssorAnimator$(t.$Delay, tt, e, l, o, u)
    }

    function c(n, t) {
        return $Jssor$.$Each(t, function(t, i) {
            var o;
            $JssorDebug$.$Execute(function() {
                if (t.length) {
                    var r = $Jssor$.$CssTop(t.$Elmt),
                        u = $Jssor$.$CssLeft(t.$Elmt),
                        f = $Jssor$.$CssWidth(t.$Elmt),
                        e = $Jssor$.$CssHeight(t.$Elmt),
                        n = null;
                    isNaN(r) ? n = "Style 'top' for caption not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(u) ? n = "Style 'left' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(f) ? n = "Style 'width' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'." : isNaN(e) && (n = "Style 'height' not specified. Please always specify caption like 'position: absolute; top: ...px; left: ...px; width: ...px; height: ...px;'.");
                    n && $JssorDebug$.$Error("Caption " + (i + 1) + " definition error, \r\n" + n + "\r\n" + t.$Elmt.outerHTML)
                }
            });
            var u, s = t.$Elmt,
                f = t[0],
                l = t[1];
            f && (u = h(s, f), n = u.$Locate(f.$BeginTime == undefined ? n : f.$BeginTime, 1));
            n = c(n, t.$Children);
            l && (o = h(s, l, 1), o.$Locate(n, 1), r.$Combine(o), e.$Combine(o));
            u && r.$Combine(u)
        }), n
    }
    $JssorDebug$.$Execute(function() {
        t.$CaptionTransitions || $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.")
    });
    var r = this,
        e, o = i ? t.$PlayInMode : t.$PlayOutMode,
        f = t.$CaptionTransitions,
        l = {
            $Transition: "t",
            $Delay: "d",
            $Duration: "du",
            x: "x",
            y: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            $BeginTime: "b"
        },
        u = {
            $Default: function(n, t) {
                return isNaN(t.$Value) ? n *= t.$Percent : n = t.$Value, n
            },
            $Opacity: function(n, t) {
                return this.$Default(n - 1, t)
            }
        };
    u.$Zoom = u.$Opacity;
    $JssorAnimator$.call(r, 0, 0);
    r.$Revert = function() {
        r.$GoToPosition(r.$GetPosition_OuterEnd() * (i || 0));
        e.$GoToBegin()
    };
    e = new $JssorAnimator$(0, 0);
    c(0, o ? s(n, 1) : [])
};
$JssorCaptionSlideo$ = window.$JssorCaptionSlideo$ = function(n, t, i) {
    function f(n, t) {
        var i = [],
            r = $Jssor$.$Children(n);
        return $Jssor$.$Each(r, function(n) {
            var o = $Jssor$.$AttributeEx(n, "u") == "caption";
            if (o) {
                var r = $Jssor$.$AttributeEx(n, "t"),
                    s = u[$Jssor$.$ParseInt(r)] || u[r],
                    e = $Jssor$.$AttributeEx(n, "t2"),
                    h = u[$Jssor$.$ParseInt(e)] || u[e],
                    c = {
                        $Elmt: n,
                        $Transition: s,
                        $Transition2: h
                    };
                t < 3 && i.concat(f(n, t + 1));
                i.push(c)
            }
        }), i
    }

    function e(n, t, u, f) {
        return $Jssor$.$Each(t, function(t) {
            var e = {
                    $Easing: t.$Easing,
                    $Round: t.$Round,
                    $During: t.$During,
                    $Setter: $Jssor$.$StyleSetterEx()
                },
                o = $Jssor$.$Extend($Jssor$.$GetStyles(captionItem, t), u),
                s = new $JssorAnimator$(t.$Begin || 0, (t.$End || 0) - (t.$Begin || 0), e, n, o, t),
                h;
            !f == !i && r.$Combine(s);
            u = $Jssor$.$Extend(u, $Jssor$.$Cast(o, t, 1, e.$Easing, e.$During, e.$Round, e, h))
        }), u
    }

    function o(n) {
        $Jssor$.$Each(n, function(n, t) {
            $JssorDebug$.$Execute(function() {
                if (n.length) {
                    var r = $Jssor$.$CssTop(n.$Elmt),
                        u = $Jssor$.$CssLeft(n.$Elmt),
                        f = $Jssor$.$CssWidth(n.$Elmt),
                        e = $Jssor$.$CssHeight(n.$Elmt),
                        i = null;
                    if (isNaN(r) ? i = "style 'top' not specified" : isNaN(u) ? i = "style 'left' not specified" : isNaN(f) ? i = "style 'width' not specified" : isNaN(e) && (i = "style 'height' not specified"), i) throw new Error("Caption " + (t + 1) + " definition error, " + i + ".\r\n" + n.$Elmt.outerHTML);
                }
            });
            var r = n.$Elmt,
                u = $Jssor$.$CssWidth(n),
                f = $Jssor$.$CssHeight(n),
                o = $Jssor$.$CssWidth(captionParent),
                s = $Jssor$.$CssHeight(captionParent),
                i = {
                    $Zoom: 1,
                    $Rotate: 0,
                    $Clip: {
                        $Top: 0,
                        $Right: u,
                        $Bottom: f,
                        $Left: 0
                    }
                };
            i = e(r, n.$Transition, i, !0);
            e(r, n.$Transition2, i, !1)
        })
    }
    $JssorDebug$.$Execute(function() {
        t.$CaptionTransitions ? $Jssor$.$IsArray(t.$CaptionTransitions) || $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' is not an array.") : $JssorDebug$.$Error("'$CaptionSlideoOptions' option error, '$CaptionSlideoOptions.$CaptionTransitions' not specified.")
    });
    var r = this,
        u = t.$CaptionTransitions;
    $JssorAnimator$.call(r, 0, 0);
    r.$Revert = function() {
        r.$GoToPosition(-1, !0)
    };
    o(f(n, 1))
};
//# sourceMappingURL=jssor.slider.min.js.map
;
(function(n) {
    n.omr || (n.omr = {});
    n.omr.mosaic = function(t, i) {
        var r = this;
        r.$el = n(t);
        r.el = t;
        r.$el.data("omr.mosaic", r);
        r.init = function() {
            r.options = n.extend({}, n.omr.mosaic.defaultOptions, i);
            r.load_box()
        };
        r.load_box = function() {
            r.options.preload ? (n(r.options.backdrop, r.el).hide(), n(r.options.overlay, r.el).hide(), n(window).load(function() {
                r.options.options.animation == "fade" && n(r.options.overlay, r.el).css("opacity") == 0 && n(r.options.overlay, r.el).css("filter", "alpha(opacity=0)");
                n(r.options.overlay, r.el).fadeIn(200, function() {
                    n(r.options.backdrop, r.el).fadeIn(200)
                });
                r.allow_hover()
            })) : (n(r.options.backdrop, r.el).show(), n(r.options.overlay, r.el).show(), r.allow_hover())
        };
        r.allow_hover = function() {
            var t, i;
            switch (r.options.animation) {
                case "fade":
                    n(r.el).hover(function() {
                        n(r.options.overlay, r.el).stop().fadeTo(r.options.speed, r.options.opacity)
                    }, function() {
                        n(r.options.overlay, r.el).stop().fadeTo(r.options.speed, 0)
                    });
                    break;
                case "slide":
                    startX = n(r.options.overlay, r.el).css(r.options.anchor_x) != "auto" ? n(r.options.overlay, r.el).css(r.options.anchor_x) : "0px";
                    startY = n(r.options.overlay, r.el).css(r.options.anchor_y) != "auto" ? n(r.options.overlay, r.el).css(r.options.anchor_y) : "0px";
                    t = {};
                    t[r.options.anchor_x] = r.options.hover_x;
                    t[r.options.anchor_y] = r.options.hover_y;
                    i = {};
                    i[r.options.anchor_x] = startX;
                    i[r.options.anchor_y] = startY;
                    n(r.el).hover(function() {
                        n(r.options.overlay, r.el).stop().animate(t, r.options.speed)
                    }, function() {
                        n(r.options.overlay, r.el).stop().animate(i, r.options.speed)
                    })
            }
        };
        r.init()
    };
    n.omr.mosaic.defaultOptions = {
        animation: "fade",
        speed: 150,
        opacity: 1,
        preload: 0,
        anchor_x: "left",
        anchor_y: "bottom",
        hover_x: "0px",
        hover_y: "0px",
        overlay: ".mosaic-overlay",
        backdrop: ".mosaic-backdrop"
    };
    n.fn.mosaic = function(t) {
        return this.each(function() {
            new n.omr.mosaic(this, t)
        })
    }
})(jQuery);;
window.Modernizr = function(n, t, i) {
        function y(n) {
            k.cssText = n
        }

        function u(n, t) {
            return typeof n === t
        }

        function p(n, t) {
            for (var r in n)
                if (k[n[r]] !== i) return t == "pfx" ? n[r] : !0;
            return !1
        }

        function rt(n, t, r) {
            var e, f;
            for (e in n)
                if (f = t[n[e]], f !== i) return r === !1 ? n[e] : u(f, "function") ? f.bind(r || t) : f;
            return !1
        }

        function w(n, t, i) {
            var r = n.charAt(0).toUpperCase() + n.substr(1),
                f = (n + " " + g.join(r + " ") + r).split(" ");
            return u(t, "string") || u(t, "undefined") ? p(f, t) : (f = (n + " " + nt.join(r + " ") + r).split(" "), rt(f, t, i))
        }
        var r = {},
            f = t.documentElement,
            e = "modernizr",
            b = t.createElement(e),
            k = b.style,
            ut, st = {}.toString,
            c = " -webkit- -moz- -o- -ms- ".split(" "),
            d = "Webkit Moz O ms",
            g = d.split(" "),
            nt = d.toLowerCase().split(" "),
            o = {},
            l = [],
            a = l.slice,
            s, tt = function(n, i, r, u) {
                var l, a, c, o = t.createElement("div"),
                    h = t.body,
                    s = h ? h : t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) c = t.createElement("div"), c.id = u ? u[r] : e + (r + 1), o.appendChild(c);
                return l = ["&#173;", "<style>", n, "<\/style>"].join(""), o.id = e, (h ? o : s).innerHTML += l, s.appendChild(o), h || (s.style.background = "", f.appendChild(s)), a = i(o, n), h ? o.parentNode.removeChild(o) : s.parentNode.removeChild(s), !!a
            },
            v = {}.hasOwnProperty,
            it, ft, h;
        it = !u(v, "undefined") && !u(v.call, "undefined") ? function(n, t) {
            return v.call(n, t)
        } : function(n, t) {
            return t in n && u(n.constructor.prototype[t], "undefined")
        };
        Function.prototype.bind || (Function.prototype.bind = function(n) {
            var t = this,
                i, r;
            if (typeof t != "function") throw new TypeError;
            return i = a.call(arguments, 1), r = function() {
                var f, e, u;
                return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(a.call(arguments))), Object(u) === u ? u : e) : t.apply(n, i.concat(a.call(arguments)))
            }, r
        });
        ft = function(n, i) {
            var f = n.join(""),
                u = i.length;
            tt(f, function(n) {
                for (var i = t.styleSheets[t.styleSheets.length - 1], o = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "", e = n.childNodes, f = {}; u--;) f[e[u].id] = e[u];
                r.csstransforms3d = (f.csstransforms3d && f.csstransforms3d.offsetLeft) === 9 && f.csstransforms3d.offsetHeight === 3
            }, u, i)
        }([, ["@media (", c.join("transform-3d),("), e, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]);
        o.csstransforms3d = function() {
            var n = !!w("perspective");
            return n && "webkitPerspective" in f.style && (n = r.csstransforms3d), n
        };
        for (h in o) it(o, h) && (s = h.toLowerCase(), r[s] = o[h](), l.push((r[s] ? "" : "no-") + s));
        return y(""), b = ut = null,
            function(n, t) {
                function o(n, t) {
                    var i = n.createElement("p"),
                        r = n.getElementsByTagName("head")[0] || n.documentElement;
                    return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
                }

                function s() {
                    var n = i.elements;
                    return typeof n == "string" ? n.split(" ") : n
                }

                function h(n) {
                    var t = {},
                        u = n.createElement,
                        f = n.createDocumentFragment,
                        r = f();
                    n.createElement = function(n) {
                        var f = (t[n] || (t[n] = u(n))).cloneNode();
                        return i.shivMethods && f.canHaveChildren && !c.test(n) ? r.appendChild(f) : f
                    };
                    n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/\w+/g, function(n) {
                        return t[n] = u(n), r.createElement(n), 'c("' + n + '")'
                    }) + ");return n}")(i, r)
                }

                function u(n) {
                    var t;
                    return n.documentShived ? n : (i.shivCSS && !f && (t = !!o(n, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), e || (t = !h(n)), t && (n.documentShived = t), n)
                }
                var r = n.html5 || {},
                    c = /^<|^(?:button|form|map|select|textarea)$/i,
                    f, e, i;
                (function() {
                    var n = t.createElement("a");
                    n.innerHTML = "<xyz><\/xyz>";
                    f = "hidden" in n;
                    e = n.childNodes.length == 1 || function() {
                        try {
                            t.createElement("a")
                        } catch (i) {
                            return !0
                        }
                        var n = t.createDocumentFragment();
                        return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
                    }()
                })();
                i = {
                    elements: r.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: r.shivCSS !== !1,
                    shivMethods: r.shivMethods !== !1,
                    type: "default",
                    shivDocument: u
                };
                n.html5 = i;
                u(t)
            }(this, t), r._version = "2.5.3", r._prefixes = c, r._domPrefixes = nt, r._cssomPrefixes = g, r.testProp = function(n) {
                return p([n])
            }, r.testAllProps = w, r.testStyles = tt, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + l.join(" ")), r
    }(this, this.document),
    function(n, t, i) {
        function h(n) {
            return y.call(n) == "[object Function]"
        }

        function c(n) {
            return typeof n == "string"
        }

        function l() {}

        function w(n) {
            return !n || n == "loaded" || n == "complete" || n == "uninitialized"
        }

        function f() {
            var n = a.shift();
            v = 1;
            n ? n.t ? s(function() {
                (n.t == "c" ? u.injectCss : u.injectJs)(n.s, 0, n.a, n.x, n.e, 1)
            }, 0) : (n(), f()) : v = 0
        }

        function ut(n, i, o, h, c, l, y) {
            function k(t) {
                if (!nt && w(p.readyState) && (tt.r = nt = 1, !v && f(), p.onload = p.onreadystatechange = null, t)) {
                    n != "img" && s(function() {
                        g.removeChild(p)
                    }, 50);
                    for (var u in r[i]) r[i].hasOwnProperty(u) && r[i][u].onload()
                }
            }
            var y = y || u.errorTimeout,
                p = {},
                nt = 0,
                b = 0,
                tt = {
                    t: o,
                    s: i,
                    e: c,
                    a: l,
                    x: y
                };
            r[i] === 1 && (b = 1, r[i] = [], p = t.createElement(n));
            n == "object" ? p.data = i : (p.src = i, p.type = n);
            p.width = p.height = "0";
            p.onerror = p.onload = p.onreadystatechange = function() {
                k.call(this, b)
            };
            a.splice(h, 0, tt);
            n != "img" && (b || r[i] === 2 ? (g.insertBefore(p, d ? null : e), s(k, y)) : r[i].push(p))
        }

        function ft(n, t, i, r, u) {
            return v = 0, t = t || "j", c(n) ? ut(t == "c" ? et : nt, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), a.length == 1 && f()), this
        }

        function b() {
            var n = u;
            return n.loader = {
                load: ft,
                i: 0
            }, n
        }
        var o = t.documentElement,
            s = n.setTimeout,
            e = t.getElementsByTagName("script")[0],
            y = {}.toString,
            a = [],
            v = 0,
            k = "MozAppearance" in o.style,
            d = k && !!t.createRange().compareNode,
            g = d ? o : e.parentNode,
            o = n.opera && y.call(n.opera) == "[object Opera]",
            o = !!t.attachEvent && !o,
            nt = k ? "object" : o ? "script" : "img",
            et = o ? "script" : nt,
            tt = Array.isArray || function(n) {
                return y.call(n) == "[object Array]"
            },
            p = [],
            r = {},
            it = {
                timeout: function(n, t) {
                    return t.length && (n.timeout = t[0]), n
                }
            },
            rt, u;
        u = function(n) {
            function v(n) {
                for (var n = n.split("!"), f = p.length, i = n.pop(), e = n.length, i = {
                        url: i,
                        origUrl: i,
                        prefixes: n
                    }, u, r, t = 0; t < e; t++) r = n[t].split("="), (u = it[r.shift()]) && (i = u(i, r));
                for (t = 0; t < f; t++) i = p[t](i);
                return i
            }

            function e(n, t, u, e, o) {
                var s = v(n),
                    c = s.autoCallback;
                s.url.split(".").pop().split("?").shift();
                s.bypass || (t && (t = h(t) ? t : t[n] || t[e] || t[n.split("/").pop().split("?")[0]] || f), s.instead ? s.instead(n, t, u, e, o) : (r[s.url] ? s.noexec = !0 : r[s.url] = 1, u.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : i, s.noexec, s.attrs, s.timeout), (h(t) || h(c)) && u.load(function() {
                    b();
                    t && t(s.origUrl, o, e);
                    c && c(s.origUrl, o, e);
                    r[s.url] = 2
                })))
            }

            function a(n, t) {
                function a(n, o) {
                    if (n) {
                        if (c(n)) o || (i = function() {
                            var n = [].slice.call(arguments);
                            s.apply(this, n);
                            u()
                        }), e(n, i, t, 0, f);
                        else if (Object(n) === n)
                            for (r in v = function() {
                                    var t = 0;
                                    for (var i in n) n.hasOwnProperty(i) && t++;
                                    return t
                                }(), n) n.hasOwnProperty(r) && (!o && !--v && (h(i) ? i = function() {
                                var n = [].slice.call(arguments);
                                s.apply(this, n);
                                u()
                            } : i[r] = function(n) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    n && n.apply(this, t);
                                    u()
                                }
                            }(s[r])), e(n[r], i, t, r, f))
                    } else o || u()
                }
                var f = !!n.test,
                    o = n.load || n.both,
                    i = n.callback || l,
                    s = i,
                    u = n.complete || l,
                    v, r;
                a(f ? n.yep : n.nope, !!o);
                o && a(o)
            }
            var o, t, s = this.yepnope.loader;
            if (c(n)) e(n, 0, s, 0);
            else if (tt(n))
                for (o = 0; o < n.length; o++) t = n[o], c(t) ? e(t, 0, s, 0) : tt(t) ? u(t) : Object(t) === t && a(t, s);
            else Object(n) === n && a(n, s)
        };
        u.addPrefix = function(n, t) {
            it[n] = t
        };
        u.addFilter = function(n) {
            p.push(n)
        };
        u.errorTimeout = 1e4;
        t.readyState == null && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", rt = function() {
            t.removeEventListener("DOMContentLoaded", rt, 0);
            t.readyState = "complete"
        }, 0));
        n.yepnope = b();
        n.yepnope.executeStack = f;
        n.yepnope.injectJs = function(n, i, r, o, h, c) {
            var a = t.createElement("script"),
                v, y, o = o || u.errorTimeout;
            a.src = n;
            for (y in r) a.setAttribute(y, r[y]);
            i = c ? f : i || l;
            a.onreadystatechange = a.onload = function() {
                !v && w(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null)
            };
            s(function() {
                v || (v = 1, i(1))
            }, o);
            h ? a.onload() : e.parentNode.insertBefore(a, e)
        };
        n.yepnope.injectCss = function(n, i, r, u, o, h) {
            var u = t.createElement("link"),
                c, i = h ? f : i || l;
            u.href = n;
            u.rel = "stylesheet";
            u.type = "text/css";
            for (c in r) u.setAttribute(c, r[c]);
            o || (e.parentNode.insertBefore(u, e), s(i, 0))
        }
    }(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};;
(function() {
    var n = {
            jQuery: "http://code.jquery.com/jquery-latest.min.js"
        },
        f = function() {
            (function(n) {
                n.fn.idTabs = function() {
                    for (var i, t = {}, r = 0; r < arguments.length; ++r) {
                        i = arguments[r];
                        switch (i.constructor) {
                            case Object:
                                n.extend(t, i);
                                break;
                            case Boolean:
                                t.change = i;
                                break;
                            case Number:
                                t.start = i;
                                break;
                            case Function:
                                t.click = i;
                                break;
                            case String:
                                i.charAt(0) == "." ? t.selected = i : i.charAt(0) == "!" ? t.event = i : t.start = i
                        }
                    }
                    return typeof t["return"] == "function" && (t.change = t["return"]), this.each(function() {
                        n.idTabs(this, t)
                    })
                };
                n.idTabs = function(t, r) {
                    var s = n.metadata ? n(t).metadata() : {},
                        u = n.extend({}, n.idTabs.settings, s, r),
                        o, e, f;
                    return u.selected.charAt(0) == "." && (u.selected = u.selected.substr(1)), u.event.charAt(0) == "!" && (u.event = u.event.substr(1)), u.start == null && (u.start = -1), o = function() {
                        if (n(this).is("." + u.selected)) return u.change;
                        var e = "#" + this.href.split("#")[1],
                            f = [],
                            r = [];
                        if (n("a", t).each(function() {
                                this.href.match(/#/) && (f.push(this), r.push("#" + this.href.split("#")[1]))
                            }), u.click && !u.click.apply(this, [e, r, t, u])) return u.change;
                        for (i in f) n(f[i]).removeClass(u.selected);
                        for (i in r) n(r[i]).hide();
                        return n(this).addClass(u.selected), n(e).show(), u.change
                    }, e = n("a[href*='#']", t).unbind(u.event, o).bind(u.event, o), e.each(function() {
                        n("#" + this.href.split("#")[1]).hide()
                    }), f = !1, (f = e.filter("." + u.selected)).length || typeof u.start == "number" && (f = e.eq(u.start)).length || typeof u.start == "string" && (f = e.filter("[href*='#" + u.start + "']")).length, f && (f.removeClass(u.selected), f.trigger(u.event)), u
                };
                n.idTabs.settings = {
                    start: 0,
                    change: !1,
                    click: null,
                    selected: ".selected",
                    event: "!click"
                };
                n.idTabs.version = "2.2";
                n(function() {
                    n(".idTabs").idTabs()
                })
            })(jQuery)
        },
        e = function(n, t) {
            for (t = t.split("."); n && t.length;) n = n[t.shift()];
            return n
        },
        o = document.getElementsByTagName("head")[0],
        t = function(n) {
            var t = document.createElement("script");
            t.type = "text/javascript";
            t.src = n;
            o.appendChild(t)
        },
        r = document.getElementsByTagName("script"),
        s = r[r.length - 1].src,
        u = !0;
    for (d in n) e(this, d) || (u = !1, t(n[d]));
    if (u) return f();
    t(s)
})();;
(function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" && typeof require == "function" ? n(require("jquery")) : n(jQuery)
})(function(n) {
    "use strict";

    function i(t, r) {
        var f = function() {},
            u = this,
            e = {
                ajaxSettings: {},
                autoSelectFirst: !1,
                appendTo: document.body,
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: i.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: !1,
                onSearchStart: f,
                onSearchComplete: f,
                onSearchError: f,
                preserveInput: !1,
                containerClass: "autocomplete-suggestions",
                tabDisabled: !1,
                dataType: "text",
                currentRequest: null,
                triggerSelectOnValidInput: !0,
                preventBadQueries: !0,
                lookupFilter: function(n, t, i) {
                    return n.value.toLowerCase().indexOf(i) !== -1
                },
                paramName: "query",
                transformResult: function(t) {
                    return typeof t == "string" ? n.parseJSON(t) : t
                },
                showNoSuggestionNotice: !1,
                noSuggestionNotice: "No results",
                orientation: "bottom",
                forceFixPosition: !1
            };
        u.element = t;
        u.el = n(t);
        u.suggestions = [];
        u.badQueries = [];
        u.selectedIndex = -1;
        u.currentValue = u.element.value;
        u.intervalId = 0;
        u.cachedResponse = {};
        u.onChangeInterval = null;
        u.onChange = null;
        u.isLocal = !1;
        u.suggestionsContainer = null;
        u.noSuggestionsContainer = null;
        u.options = n.extend({}, e, r);
        u.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        };
        u.hint = null;
        u.hintValue = "";
        u.selection = null;
        u.initialize();
        u.setOptions(r)
    }
    var r = function() {
            return {
                escapeRegExChars: function(n) {
                    return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                createNode: function(n) {
                    var t = document.createElement("div");
                    return t.className = n, t.style.position = "absolute", t.style.display = "none", t
                }
            }
        }(),
        t = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };
    i.utils = r;
    n.Autocomplete = i;
    i.formatResult = function(n, t) {
        var i = "(" + r.escapeRegExChars(t) + ")";
        return n.value.replace(new RegExp(i, "gi"), "<strong>$1<\/strong>")
    };
    i.prototype = {
        killerFn: null,
        initialize: function() {
            var t = this,
                f = "." + t.classes.suggestion,
                e = t.classes.selected,
                u = t.options,
                r;
            t.element.setAttribute("autocomplete", "off");
            t.killerFn = function(i) {
                n(i.target).closest("." + t.options.containerClass).length === 0 && (t.killSuggestions(), t.disableKillerFn())
            };
            t.noSuggestionsContainer = n('<div class="autocomplete-no-suggestion"><\/div>').html(this.options.noSuggestionNotice).get(0);
            t.suggestionsContainer = i.utils.createNode(u.containerClass);
            r = n(t.suggestionsContainer);
            r.appendTo(u.appendTo);
            u.width !== "auto" && r.width(u.width);
            r.on("mouseover.autocomplete", f, function() {
                t.activate(n(this).data("index"))
            });
            r.on("mouseout.autocomplete", function() {
                t.selectedIndex = -1;
                r.children("." + e).removeClass(e)
            });
            r.on("click.autocomplete", f, function() {
                t.select(n(this).data("index"))
            });
            t.fixPositionCapture = function() {
                t.visible && t.fixPosition()
            };
            n(window).on("resize.autocomplete", t.fixPositionCapture);
            t.el.on("keydown.autocomplete", function(n) {
                t.onKeyPress(n)
            });
            t.el.on("keyup.autocomplete", function(n) {
                t.onKeyUp(n)
            });
            t.el.on("blur.autocomplete", function() {
                t.onBlur()
            });
            t.el.on("focus.autocomplete", function() {
                t.onFocus()
            });
            t.el.on("change.autocomplete", function(n) {
                t.onKeyUp(n)
            });
            t.el.on("input.autocomplete", function(n) {
                t.onKeyUp(n)
            })
        },
        onFocus: function() {
            var n = this;
            n.fixPosition();
            n.options.minChars <= n.el.val().length && n.onValueChange()
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        setOptions: function(t) {
            var r = this,
                i = r.options;
            n.extend(i, t);
            r.isLocal = n.isArray(i.lookup);
            r.isLocal && (i.lookup = r.verifySuggestionsFormat(i.lookup));
            i.orientation = r.validateOrientation(i.orientation, "bottom");
            n(r.suggestionsContainer).css({
                "max-height": i.maxHeight + "px",
                width: i.width + "px",
                "z-index": i.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = {};
            this.badQueries = []
        },
        clear: function() {
            this.clearCache();
            this.currentValue = "";
            this.suggestions = []
        },
        disable: function() {
            var n = this;
            n.disabled = !0;
            clearInterval(n.onChangeInterval);
            n.currentRequest && n.currentRequest.abort()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var t = this,
                i = n(t.suggestionsContainer),
                s = i.parent().get(0),
                a, o;
            if (s === document.body || t.options.forceFixPosition) {
                var f = t.options.orientation,
                    e = i.outerHeight(),
                    h = t.el.outerHeight(),
                    u = t.el.offset(),
                    r = {
                        top: u.top,
                        left: u.left
                    };
                if (f === "auto") {
                    var v = n(window).height(),
                        c = n(window).scrollTop(),
                        l = -c + u.top - e,
                        y = c + v - (u.top + h + e);
                    f = Math.max(l, y) === l ? "top" : "bottom"
                }
                r.top += f === "top" ? -e : h;
                s !== document.body && (a = i.css("opacity"), t.visible || i.css("opacity", 0).show(), o = i.offsetParent().offset(), r.top -= o.top, r.left -= o.left, t.visible || i.css("opacity", a).hide());
                t.options.width === "auto" && (r.width = t.el.outerWidth() - 2 + "px");
                i.css(r)
            }
        },
        enableKillerFn: function() {
            var t = this;
            n(document).on("click.autocomplete", t.killerFn)
        },
        disableKillerFn: function() {
            var t = this;
            n(document).off("click.autocomplete", t.killerFn)
        },
        killSuggestions: function() {
            var n = this;
            n.stopKillSuggestions();
            n.intervalId = window.setInterval(function() {
                n.hide();
                n.stopKillSuggestions()
            }, 50)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        isCursorAtEnd: function() {
            var i = this,
                n = i.el.val().length,
                r = i.element.selectionStart,
                t;
            return typeof r == "number" ? r === n : document.selection ? (t = document.selection.createRange(), t.moveStart("character", -n), n === t.text.length) : !0
        },
        onKeyPress: function(n) {
            var i = this;
            if (!i.disabled && !i.visible && n.which === t.DOWN && i.currentValue) {
                i.suggest();
                return
            }
            if (!i.disabled && i.visible) {
                switch (n.which) {
                    case t.ESC:
                        i.el.val(i.currentValue);
                        i.hide();
                        break;
                    case t.RIGHT:
                        if (i.hint && i.options.onHint && i.isCursorAtEnd()) {
                            i.selectHint();
                            break
                        }
                        return;
                    case t.TAB:
                        if (i.hint && i.options.onHint) {
                            i.selectHint();
                            return
                        }
                        if (i.selectedIndex === -1) {
                            i.hide();
                            return
                        }
                        if (i.select(i.selectedIndex), i.options.tabDisabled === !1) return;
                        break;
                    case t.RETURN:
                        if (i.selectedIndex === -1) {
                            i.hide();
                            return
                        }
                        i.select(i.selectedIndex);
                        break;
                    case t.UP:
                        i.moveUp();
                        break;
                    case t.DOWN:
                        i.moveDown();
                        break;
                    default:
                        return
                }
                n.stopImmediatePropagation();
                n.preventDefault()
            }
        },
        onKeyUp: function(n) {
            var i = this;
            if (!i.disabled) {
                switch (n.which) {
                    case t.UP:
                    case t.DOWN:
                        return
                }
                clearInterval(i.onChangeInterval);
                i.currentValue !== i.el.val() && (i.findBestHint(), i.options.deferRequestBy > 0 ? i.onChangeInterval = setInterval(function() {
                    i.onValueChange()
                }, i.options.deferRequestBy) : i.onValueChange())
            }
        },
        onValueChange: function() {
            var t = this,
                r = t.options,
                f = t.el.val(),
                i = t.getQuery(f),
                u;
            if (t.selection && t.currentValue !== i && (t.selection = null, (r.onInvalidateSelection || n.noop).call(t.element)), clearInterval(t.onChangeInterval), t.currentValue = f, t.selectedIndex = -1, r.triggerSelectOnValidInput && (u = t.findSuggestionIndex(i), u !== -1)) {
                t.select(u);
                return
            }
            i.length < r.minChars ? t.hide() : t.getSuggestions(i)
        },
        findSuggestionIndex: function(t) {
            var r = this,
                i = -1,
                u = t.toLowerCase();
            return n.each(r.suggestions, function(n, t) {
                if (t.value.toLowerCase() === u) return i = n, !1
            }), i
        },
        getQuery: function(t) {
            var r = this.options.delimiter,
                i;
            return r ? (i = t.split(r), n.trim(i[i.length - 1])) : t
        },
        getSuggestionsLocal: function(t) {
            var f = this,
                r = f.options,
                e = t.toLowerCase(),
                o = r.lookupFilter,
                u = parseInt(r.lookupLimit, 10),
                i;
            return i = {
                suggestions: n.grep(r.lookup, function(n) {
                    return o(n, t, e)
                })
            }, u && i.suggestions.length > u && (i.suggestions = i.suggestions.slice(0, u)), i
        },
        getSuggestions: function(t) {
            var u, i = this,
                r = i.options,
                f = r.serviceUrl,
                e, o, s;
            if (r.params[r.paramName] = t, e = r.ignoreParams ? null : r.params, r.onSearchStart.call(i.element, r.params) !== !1) {
                if (n.isFunction(r.lookup)) {
                    r.lookup(t, function(n) {
                        i.suggestions = n.suggestions;
                        i.suggest();
                        r.onSearchComplete.call(i.element, t, n.suggestions)
                    });
                    return
                }
                i.isLocal ? u = i.getSuggestionsLocal(t) : (n.isFunction(f) && (f = f.call(i.element, t)), o = f + "?" + n.param(e || {}), u = i.cachedResponse[o]);
                u && n.isArray(u.suggestions) ? (i.suggestions = u.suggestions, i.suggest(), r.onSearchComplete.call(i.element, t, u.suggestions)) : i.isBadQuery(t) ? r.onSearchComplete.call(i.element, t, []) : (i.currentRequest && i.currentRequest.abort(), s = {
                    url: f,
                    data: e,
                    type: r.type,
                    dataType: r.dataType
                }, n.extend(s, r.ajaxSettings), i.currentRequest = n.ajax(s).done(function(n) {
                    var u;
                    i.currentRequest = null;
                    u = r.transformResult(n);
                    i.processResponse(u, t, o);
                    r.onSearchComplete.call(i.element, t, u.suggestions)
                }).fail(function(n, u, f) {
                    r.onSearchError.call(i.element, t, n, u, f)
                }))
            }
        },
        isBadQuery: function(n) {
            if (!this.options.preventBadQueries) return !1;
            for (var t = this.badQueries, i = t.length; i--;)
                if (n.indexOf(t[i]) === 0) return !0;
            return !1
        },
        hide: function() {
            var t = this;
            t.visible = !1;
            t.selectedIndex = -1;
            clearInterval(t.onChangeInterval);
            n(t.suggestionsContainer).hide();
            t.signalHint(null)
        },
        suggest: function() {
            if (this.suggestions.length === 0) {
                this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide();
                return
            }
            var t = this,
                i = t.options,
                s = i.groupBy,
                c = i.formatResult,
                u = t.getQuery(t.currentValue),
                l = t.classes.suggestion,
                a = t.classes.selected,
                r = n(t.suggestionsContainer),
                v = n(t.noSuggestionsContainer),
                h = i.beforeRender,
                f = "",
                e, y = function(n) {
                    var t = n.data[s];
                    return e === t ? "" : (e = t, '<div class="autocomplete-group"><strong>' + e + "<\/strong><\/div>")
                },
                o;
            if (i.triggerSelectOnValidInput && (o = t.findSuggestionIndex(u), o !== -1)) {
                t.select(o);
                return
            }
            n.each(t.suggestions, function(n, t) {
                s && (f += y(t, u, n));
                f += '<div class="' + l + '" data-index="' + n + '">' + c(t, u) + "<\/div>"
            });
            this.adjustContainerWidth();
            v.detach();
            r.html(f);
            n.isFunction(h) && h.call(t.element, r);
            t.fixPosition();
            r.show();
            i.autoSelectFirst && (t.selectedIndex = 0, r.scrollTop(0), r.children().first().addClass(a));
            t.visible = !0;
            t.findBestHint()
        },
        noSuggestions: function() {
            var t = this,
                i = n(t.suggestionsContainer),
                r = n(t.noSuggestionsContainer);
            this.adjustContainerWidth();
            r.detach();
            i.empty();
            i.append(r);
            t.fixPosition();
            i.show();
            t.visible = !0
        },
        adjustContainerWidth: function() {
            var t = this,
                r = t.options,
                i, u = n(t.suggestionsContainer);
            r.width === "auto" && (i = t.el.outerWidth() - 2, u.width(i > 0 ? i : 300))
        },
        findBestHint: function() {
            var t = this,
                i = t.el.val().toLowerCase(),
                r = null;
            i && (n.each(t.suggestions, function(n, t) {
                var u = t.value.toLowerCase().indexOf(i) === 0;
                return u && (r = t), !u
            }), t.signalHint(r))
        },
        signalHint: function(t) {
            var r = "",
                i = this;
            t && (r = i.currentValue + t.value.substr(i.currentValue.length));
            i.hintValue !== r && (i.hintValue = r, i.hint = t, (this.options.onHint || n.noop)(r))
        },
        verifySuggestionsFormat: function(t) {
            return t.length && typeof t[0] == "string" ? n.map(t, function(n) {
                return {
                    value: n,
                    data: null
                }
            }) : t
        },
        validateOrientation: function(t, i) {
            return t = n.trim(t || "").toLowerCase(), n.inArray(t, ["auto", "bottom", "top"]) === -1 && (t = i), t
        },
        processResponse: function(n, t, i) {
            var r = this,
                u = r.options;
            (n.suggestions = r.verifySuggestionsFormat(n.suggestions), u.noCache || (r.cachedResponse[i] = n, u.preventBadQueries && n.suggestions.length === 0 && r.badQueries.push(t)), t === r.getQuery(r.currentValue)) && (r.suggestions = n.suggestions, r.suggest())
        },
        activate: function(t) {
            var i = this,
                r, u = i.classes.selected,
                f = n(i.suggestionsContainer),
                e = f.find("." + i.classes.suggestion);
            return (f.find("." + u).removeClass(u), i.selectedIndex = t, i.selectedIndex !== -1 && e.length > i.selectedIndex) ? (r = e.get(i.selectedIndex), n(r).addClass(u), r) : null
        },
        selectHint: function() {
            var t = this,
                i = n.inArray(t.hint, t.suggestions);
            t.select(i)
        },
        select: function(n) {
            var t = this;
            t.hide();
            t.onSelect(n)
        },
        moveUp: function() {
            var t = this;
            if (t.selectedIndex !== -1) {
                if (t.selectedIndex === 0) {
                    n(t.suggestionsContainer).children().first().removeClass(t.classes.selected);
                    t.selectedIndex = -1;
                    t.el.val(t.currentValue);
                    t.findBestHint();
                    return
                }
                t.adjustScroll(t.selectedIndex - 1)
            }
        },
        moveDown: function() {
            var n = this;
            n.selectedIndex !== n.suggestions.length - 1 && n.adjustScroll(n.selectedIndex + 1)
        },
        adjustScroll: function(t) {
            var i = this,
                u = i.activate(t),
                r, f, o, e;
            u && (e = n(u).outerHeight(), r = u.offsetTop, f = n(i.suggestionsContainer).scrollTop(), o = f + i.options.maxHeight - e, r < f ? n(i.suggestionsContainer).scrollTop(r) : r > o && n(i.suggestionsContainer).scrollTop(r - i.options.maxHeight + e), i.options.preserveInput || i.el.val(i.getValue(i.suggestions[t].value)), i.signalHint(null))
        },
        onSelect: function(t) {
            var i = this,
                u = i.options.onSelect,
                r = i.suggestions[t];
            i.currentValue = i.getValue(r.value);
            i.currentValue === i.el.val() || i.options.preserveInput || i.el.val(i.currentValue);
            i.signalHint(null);
            i.suggestions = [];
            i.selection = r;
            n.isFunction(u) && u.call(i.element, r)
        },
        getValue: function(n) {
            var r = this,
                u = r.options.delimiter,
                t, i;
            return u ? (t = r.currentValue, i = t.split(u), i.length === 1) ? n : t.substr(0, t.length - i[i.length - 1].length) + n : n
        },
        dispose: function() {
            var t = this;
            t.el.off(".autocomplete").removeData("autocomplete");
            t.disableKillerFn();
            n(window).off("resize.autocomplete", t.fixPositionCapture);
            n(t.suggestionsContainer).remove()
        }
    };
    n.fn.autocomplete = n.fn.devbridgeAutocomplete = function(t, r) {
        var u = "autocomplete";
        return arguments.length === 0 ? this.first().data(u) : this.each(function() {
            var e = n(this),
                f = e.data(u);
            typeof t == "string" ? f && typeof f[t] == "function" && f[t](r) : (f && f.dispose && f.dispose(), f = new i(this, t), e.data(u, f))
        })
    }
});;
(function(n, t, i) {
    function f(r, f) {
        function a() {
            e.elem.children().css("margin", 0).children().css("margin", 0);
            e.elem.css({
                position: "relative",
                height: e.opts.height,
                overflow: "hidden"
            });
            e.targ.css({
                position: "absolute",
                margin: 0
            });
            setInterval(function() {
                l()
            }, 100)
        }

        function o() {
            e.timer = setInterval(function() {
                e.winFocus == 1 && c(e.opts.direction)
            }, e.opts.interval);
            n(e.opts.controls.toggle).addClass("et-run").html(e.opts.controls.stopText)
        }

        function s() {
            clearInterval(e.timer);
            e.timer = 0;
            n(e.opts.controls.toggle).removeClass("et-run").html(e.opts.controls.playText)
        }

        function c(n) {
            var t, i, r, u, f;
            e.elem.is(":visible") && (n == "up" ? (t = ":first-child", i = "-=", r = "appendTo") : (t = ":last-child", i = "+=", r = "prependTo"), u = e.targ.children(t), f = u.outerHeight(), e.targ.stop(!0, !0).animate({
                top: i + f + "px"
            }, e.opts.speed, e.opts.easing, function() {
                u.hide()[r](e.targ).fadeIn();
                e.targ.css("top", 0);
                l()
            }))
        }

        function h(n) {
            s();
            n == "up" ? c("up") : c("down")
        }

        function v() {
            var t = 0,
                i = e.elem.css("display");
            e.elem.css("display", "block");
            e.targ.children().each(function() {
                t += n(this).outerHeight()
            });
            e.elem.css({
                display: i,
                height: t
            })
        }

        function y(t) {
            var i = 0;
            e.targ.children(":lt(" + e.opts.visible + ")").each(function() {
                i += n(this).outerHeight()
            });
            t == 1 ? e.elem.stop(!0, !0).animate({
                height: i
            }, e.opts.speed) : e.elem.css("height", i)
        }

        function l() {
            e.opts.height == "auto" && e.opts.visible != 0 ? (anim = arguments.callee.caller.name == "init" ? 0 : 1, y(anim)) : e.opts.height == "auto" && v()
        }
        var e = this;
        e.opts = n.extend({}, u, f);
        e.elem = n(r);
        e.targ = n(r).children(":first-child");
        e.timer = 0;
        e.mHover = 0;
        e.winFocus = 1;
        a();
        o();
        n([t, i]).off("focus.jqet").on("focus.jqet", function() {
            e.winFocus = 1
        }).off("blur.jqet").on("blur.jqet", function() {
            e.winFocus = 0
        });
        e.opts.mousePause == 1 && e.elem.mouseenter(function() {
            e.timerTemp = e.timer;
            s()
        }).mouseleave(function() {
            e.timerTemp !== 0 && o()
        });
        n(e.opts.controls.up).on("click", function(n) {
            n.preventDefault();
            h("up")
        });
        n(e.opts.controls.down).on("click", function(n) {
            n.preventDefault();
            h("down")
        });
        n(e.opts.controls.toggle).on("click", function(n) {
            n.preventDefault();
            e.timer == 0 ? o() : s()
        });
        return {
            up: function() {
                h("up")
            },
            down: function() {
                h("down")
            },
            start: o,
            stop: s,
            options: e.opts
        }
    }
    var r = "easyTicker",
        u = {
            direction: "up",
            easing: "swing",
            speed: "slow",
            interval: 2e3,
            height: "auto",
            visible: 0,
            mousePause: 1,
            controls: {
                up: "",
                down: "",
                toggle: "",
                playText: "Play",
                stopText: "Stop"
            }
        };
    n.fn[r] = function(t) {
        return this.each(function() {
            n.data(this, r) || n.data(this, r, new f(this, t))
        })
    }
})(jQuery, window, document);
//# sourceMappingURL=jquery.easy-ticker.min.js.map
;

function changeLeftFix() {
    var n = $("footer").offset().top - $(".product-details .content > .left").outerHeight() - 10;
    $(".product-details .content > .left").scrollToFixed({
        marginTop: 41,
        limit: n,
        zIndex: 3
    })
}

function playVideo(n) {
    var t = '<iframe width="480" height="270" src="//www.youtube.com/embed/' + n + '?autoplay=1" frameborder="0" allowfullscreen><\/iframe>';
    $("#videoPlayer").fadeOut("fast", function() {
        $(this).html(t)
    }).fadeIn("fast");
    $("#product_slider_video ul li a.selected").removeClass("selected");
    $("#" + n).addClass("selected")
}

function createMessage(n, t) {
    var i = "";
    i += '<div class="modal-header">';
    i += '\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><\/button>';
    i += "\t<h3>" + n + "<\/h3>";
    i += "<\/div>";
    i += '<div class="modal-body">';
    i += t;
    i += "<\/div>";
    i += '<div class="modal-footer">';
    i += '\t<button type="button" id="btnMessageClose" class="btn red" data-dismiss="modal" tabindex="8"><i class="fa fa-times"><\/i> Đóng lại<\/button>';
    i += "<\/div>";
    $("#dialog-message").html(i);
    $("#dialog-message").modal()
}

function checkRadio() {}

function showComment(n) {
    $("#form_" + n).show()
}

function changeCity(n) {
    $("#districtContainer").load("/Ajax/GetDistrict/?cityId=" + n)
}
$(document).ready(function() {
    $(".control input[name=kwd]").autocomplete({
        serviceUrl: "/ajax/suggestion",
        groupBy: "brand",
        minChars: 2,
        formatResult: function(n, t) {
            t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var i = n.data.text.split(" "),
                r = "";
            for (j = 0; j < i.length; j++) r += t.toLowerCase().indexOf(i[j].toLowerCase()) >= 0 ? "<strong>" + i[j] + "<\/strong> " : i[j] + " ";
            return '<a href="' + n.value + '"><img src="' + n.data.image + '" /><label><span>' + r + '<\/span><span class="price">' + n.data.price + "<\/span><\/label><\/a>"
        },
        onSelect: function(n) {
            $(".control input[name=kwd]").val(n.data.text)
        }
    });
    $(".top-content > div > div > ul > li").hover(function() {
        $(this).find(".sub").stop().slideDown("fast")
    }, function() {
        $(this).find(".sub").stop().slideUp("fast")
    });
    $("#mainMenu").scrollToFixed();
    $(".member-navigation, .page-navigation").scrollToFixed({
        marginTop: 41,
        zIndex: 2,
        limit: function() {
            return $("footer").offset().top - $(this).outerHeight(!0) - 10
        }
    });
    $(".top-content").scrollToFixed({
        marginTop: 41,
        width: "100%",
        className: "filter-fix"
    });
    $("#btnProp").click(function() {
        $(this).toggleClass("actived");
        $("#propDetails").fadeToggle("fast", "linear");
        $(this).hasClass("actived") && $("#propDetails").ScrollTo()
    });
    $("#btnVideo").click(function() {
        $(this).toggleClass("actived");
        $("#productVideo").fadeToggle("fast", "linear");
        $(this).hasClass("actived") && $("#productVideo").ScrollTo()
    });
    $("#btnContent").click(function() {
        $(this).toggleClass("actived");
        $("#productContent").fadeToggle("fast", "linear")
    });
    $(".btn-buy-popup").click(function(n) {
        var r = $(this).attr("data-id"),
            t = $(".list-color a.selected").attr("data-id"),
            i;
        ("undefined" == t || t == null) && (t = 0);
        i = "/Ajax/AddCart?Items=1&ProductID=" + r + "&ColorID=" + t;
        n.preventDefault();
        $("body").modalmanager("loading");
        $("#p_ajax_cart").load(i, function() {
            setTimeout(function() {
                $("#p_ajax_cart").modal({
                    width: 800
                })
            }, 10)
        })
    });
    $(".btn-your-cart").click(function(n) {
        n.preventDefault();
        $("body").modalmanager("loading");
        $("#p_ajax_cart").load("/Ajax/Checkout", function() {
            setTimeout(function() {
                $("#p_ajax_cart").modal({
                    width: 800
                })
            }, 10)
        })
    });
    $(".btn-login").click(function(n) {
        var t = "/Ajax/Login?ReturnUrl=" + window.location.pathname;
        n.preventDefault();
        $("body").modalmanager("loading");
        $("#p_ajax").load(t, function() {
            setTimeout(function() {
                $("#p_ajax").modal({
                    width: 650
                })
            }, 10)
        })
    });
    $("#btcomment").click(function(n) {
        n.preventDefault();
        $("body").modalmanager("loading");
        $("#p_ajax").load("/Ajax/FormComment", function() {
            setTimeout(function() {
                $("#p_ajax").modal({
                    width: 650
                })
            }, 10)
        })
    });
    $(".btn-check-order").click(function(n) {
        n.preventDefault();
        $("body").modalmanager("loading");
        $("#p_ajax").load("/Ajax/CheckOrder", function() {
            setTimeout(function() {
                $("#p_ajax").modal({
                    width: 300
                })
            }, 10)
        })
    });
    $(".cartNumber").load("/Ajax/CartCounter")
});
$(document).ready(function() {
    $(".list-item").mosaic({
        animation: "fade",
        opacity: .9
    })
});
$(document).ready(function() {
    $(".hh-filter ul").hideMaxListItems({
        max: 6,
        speed: 200,
        moreText: "Xem thêm ([COUNT])",
        lessText: "Thu gọn",
        moreHTML: '<p class="maxlist-more"><a href="#">Xem thêm ([COUNT])<\/a><\/p>'
    });
    var n = $("#moreDevice").attr("data-max"),
        t = $("#moreProduct").attr("data-max");
    $("#moreDevice ul").hideMaxListItems({
        max: n,
        speed: 200,
        moreText: "Xem thêm ([COUNT])",
        lessText: "Thu gọn",
        moreHTML: '<p class="maxlist-more"><a href="#">Xem thêm ([COUNT])<\/a><\/p>'
    });
    $("#moreProduct ul").hideMaxListItems({
        max: t,
        speed: 200,
        moreText: "Xem thêm ([COUNT])",
        lessText: "Thu gọn",
        moreHTML: '<p class="maxlist-more"><a href="#">Xem thêm ([COUNT])<\/a><\/p>'
    })
});
$(document).ready(function() {
    Tipped.create(".tips", "", {
        position: "topleft",
        maxWidth: 650
    })
});
$(function() {
    $(window).scroll(function() {
        $(this).scrollTop() != 0 ? $("#bttop").fadeIn() : $("#bttop").fadeOut()
    });
    $("#bttop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800)
    })
});
Number.prototype.formatMoney = function(n, t, i) {
    var u = this,
        n = isNaN(n = Math.abs(n)) ? 2 : n,
        i = i == undefined ? "." : i,
        t = t == undefined ? "," : t,
        e = u < 0 ? "-" : "",
        f = parseInt(u = Math.abs(+u || 0).toFixed(n)) + "",
        r = (r = f.length) > 3 ? r % 3 : 0;
    return e + (r ? f.substr(0, r) + t : "") + f.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + t) + (n ? i + Math.abs(u - f).toFixed(n).slice(2) : "")
};
//# sourceMappingURL=app.min.js.map
;