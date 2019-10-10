var a;
! function(E) {
    function t(G) {
        if (q[G]) return q[G].exports;
        var B = q[G] = {
            i: G,
            l: !1,
            exports: {}
        };
        return E[G].call(B.exports, B, B.exports, t), B.l = !0, B.exports
    }
    var q = {};
    t.m = E;
    t.c = q;
    t.d = function(q, B, T) {
        t.o(q, B) || Object.defineProperty(q, B, {
            configurable: !1,
            enumerable: !0,
            get: T
        })
    };
    t.n = function(q) {
        var B = q && q.__esModule ? function() {
            return q.default
        } : function() {
            return q
        };
        return t.d(B, "a", B), B
    };
    t.o = function(q, B) {
        return Object.prototype.hasOwnProperty.call(q, B)
    };
    t.p = "";
    t(t.s = 4)
}([function(E, t, q) {
        function G(q) {
            for (var M = 1 <
                    arguments.length && void 0 !== arguments[1] ? arguments[1] : [], H = "", A = 1; A <= q; A += 1) H += -1 !== M.indexOf(A) ? "1" : "0";
            return R(H, Math.max(0, q - H.length))
        }

        function B(q) {
            for (var M = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new Set, H = 0, A = 0; A < q.length; A += 1) H = Math.max(H, q[A].id);
            for (A = 0; A < M.length; A += 1) H = Math.max(H, M[A]);
            for (var A = "", B = 1; B <= H; B += 1) A += -1 !== M.indexOf(B) ? "1" : "0";
            return A
        }

        function T(q, B) {
            for (var H = [], A = [], M = q.map(function(A) {
                    return A.id
                }), D = 0; D < q.length; D += 1) {
                var t = q[D].id;
                if (-1 !== B.indexOf(t) &&
                    H.push(t), (-1 === B.indexOf(t) || D === q.length - 1 || -1 === M.indexOf(t + 1)) && H.length) {
                    var t = H.shift(),
                        N = H.pop(),
                        H = [];
                    A.push({
                        isRange: "number" == typeof N,
                        startVendorId: t,
                        endVendorId: N
                    })
                }
            }
            return A
        }

        function D(q) {
            var B = 0;
            return q.forEach(function(q) {
                q.id > B && (B = q.id)
            }), B
        }
        var da = Object.assign || function(q) {
            for (var B = 1; B < arguments.length; B++) {
                var t = arguments[B],
                    A;
                for (A in t) Object.prototype.hasOwnProperty.call(t, A) && (q[A] = t[A])
            }
            return q
        };
        t = q(1);
        var aa = t.encodeToBase64,
            R = t.padRight;
        E.exports = {
            convertVendorsToRanges: T,
            encodeConsentString: function(q) {
                var t = q.maxVendorId,
                    H = q.vendorList,
                    A = void 0 === H ? {} : H,
                    H = q.allowedPurposeIds,
                    J = q.allowedVendorIds,
                    Z = A.vendors,
                    Z = void 0 === Z ? [] : Z,
                    A = A.purposes,
                    N = void 0 === A ? [] : A;
                t || (t = D(Z));
                A = aa(da({}, q, {
                    maxVendorId: t,
                    purposeIdBitString: B(N, H),
                    isRange: !1,
                    vendorIdBitString: G(t, J)
                }));
                J = T(Z, J);
                q = aa(da({}, q, {
                    maxVendorId: t,
                    purposeIdBitString: B(N, H),
                    isRange: !0,
                    defaultConsent: !1,
                    numEntries: J.length,
                    vendorRangeList: J
                }));
                return A.length < q.length ? A : q
            },
            getMaxVendorId: D,
            encodeVendorIdsToBits: G,
            encodePurposeIdsToBits: B
        }
    },
    function(E, t, q) {
        function G(q) {
            for (var A = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "0", B = "", t = 0; t < q; t += 1) B += A;
            return B
        }

        function B(q, A) {
            return G(Math.max(0, A)) + q
        }

        function T(q, A) {
            return q + G(Math.max(0, A))
        }

        function D(q, A) {
            var t = "";
            return "number" != typeof q || isNaN(q) || (t = parseInt(q, 10).toString(2)), A >= t.length && (t = B(t, A - t.length)), t.length > A && (t = t.substring(0, A)), t
        }

        function da(A) {
            return D(!0 === A ? 1 : 0, 1)
        }

        function aa(A, q) {
            return A instanceof Date ? D(A.getTime() / 100, q) : D(A, q)
        }

        function R(A, q) {
            return D(A.toUpperCase().charCodeAt(0) -
                65, q)
        }

        function N(A) {
            var q = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 12;
            return R(A.slice(0, 1), q / 2) + R(A.slice(1), q / 2)
        }

        function M(A, q, t) {
            return parseInt(A.substr(q, t), 2)
        }

        function H(A, q, t) {
            return new Date(100 * M(A, q, t))
        }

        function A(A, q) {
            return 1 === parseInt(A.substr(q, 1), 2)
        }

        function J(A) {
            A = M(A);
            return String.fromCharCode(A + 65).toLowerCase()
        }

        function Z(A, q, t) {
            A = A.substr(q, t);
            return J(A.slice(0, t / 2)) + J(A.slice(t / 2))
        }

        function va(A) {
            var q = A.input,
                t = A.field,
                B = t.name;
            A = t.type;
            var H = t.numBits,
                G = t.encoder,
                J = t.validator;
            if ("function" == typeof J && !J(q)) return "";
            if ("function" == typeof G) return G(q);
            H = "function" == typeof H ? H(q) : H;
            q = q[B];
            q = null == q ? "" : q;
            switch (A) {
                case "int":
                    return D(q, H);
                case "bool":
                    return da(q);
                case "date":
                    return aa(q, H);
                case "bits":
                    return T(q, H - q.length).substring(0, H);
                case "list":
                    return q.reduce(function(A, q) {
                        return A + wa({
                            input: q,
                            fields: t.fields
                        })
                    }, "");
                case "language":
                    return N(q, H);
                default:
                    throw Error("ConsentString - Unknown field type " + A + " for encoding");
            }
        }

        function wa(A) {
            var q = A.input;
            return A.fields.reduce(function(A, t) {
                return A + va({
                    input: q,
                    field: t
                })
            }, "")
        }

        function Ea(q) {
            var t = q.input,
                B = q.output,
                D = q.startPosition;
            q = q.field;
            var G = q.type,
                J = q.numBits,
                T = q.decoder,
                N = q.validator,
                E = q.listCount;
            if ("function" == typeof N && !N(B)) return {
                newPosition: D
            };
            if ("function" == typeof T) return T(t, B, D);
            J = "function" == typeof J ? J(B) : J;
            switch (G) {
                case "int":
                    return {
                        fieldValue: M(t, D, J)
                    };
                case "bool":
                    return {
                        fieldValue: A(t, D)
                    };
                case "date":
                    return {
                        fieldValue: H(t, D, J)
                    };
                case "bits":
                    return {
                        fieldValue: t.substr(D, J)
                    };
                case "list":
                    G = 0;
                    "function" == typeof E ? G = E(B) : "number" == typeof E && (G = E);
                    B = D;
                    D = [];
                    for (E = 0; E < G; E += 1) J = Ha({
                        input: t,
                        fields: q.fields,
                        startPosition: B
                    }), B = J.newPosition, D.push(J.decodedObject);
                    return {
                        fieldValue: D,
                        newPosition: B
                    };
                case "language":
                    return {
                        fieldValue: Z(t, D, J)
                    };
                default:
                    throw Error("ConsentString - Unknown field type " + G + " for decoding");
            }
        }

        function Ha(q) {
            var A = q.input,
                t = q.startPosition,
                B = void 0 === t ? 0 : t;
            return {
                decodedObject: q.fields.reduce(function(q, t) {
                    var D = t.name,
                        H = t.numBits,
                        J = Ea({
                            input: A,
                            output: q,
                            startPosition: B,
                            field: t
                        }),
                        G = J.fieldValue,
                        J = J.newPosition;
                    return void 0 !== G && (q[D] = G), void 0 !== J ? B = J : "number" == typeof H && (B += H), q
                }, {}),
                newPosition: B
            }
        }

        function Ia(q, A) {
            var t = q.version;
            if ("number" != typeof t) throw Error("ConsentString - No version field to encode");
            if (A[t]) return wa({
                input: q,
                fields: A[t].fields
            });
            throw Error("ConsentString - No definition for version " + t);
        }
        var xa = q(7);
        t = q(2);
        var Q = t.versionNumBits,
            pa = t.vendorVersionMap;
        E.exports = {
            padRight: T,
            padLeft: B,
            encodeField: va,
            encodeDataToBits: Ia,
            encodeIntToBits: D,
            encodeBoolToBits: da,
            encodeDateToBits: aa,
            encodeLanguageToBits: N,
            encodeLetterToBits: R,
            encodeToBase64: function(q) {
                var A = Ia(q, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : pa);
                if (A) {
                    for (var A = T(A, 7 - (A.length + 7) % 8), t = "", B = 0; B < A.length; B += 8) t += String.fromCharCode(parseInt(A.substr(B, 8), 2));
                    return xa.encode(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }
                return null
            },
            decodeBitsToIds: function(q) {
                return q.split("").reduce(function(q, A, t) {
                    return "1" === A && -1 === q.indexOf(t +
                        1) && q.push(t + 1), q
                }, [])
            },
            decodeBitsToInt: M,
            decodeBitsToDate: H,
            decodeBitsToBool: A,
            decodeBitsToLanguage: Z,
            decodeBitsToLetter: J,
            decodeFromBase64: function(q, A) {
                for (var t = q; 0 != t.length % 4;) t += "\x3d";
                for (var t = t.replace(/-/g, "+").replace(/_/g, "/"), t = xa.decode(t), D = "", J = 0; J < t.length; J += 1) var H = t.charCodeAt(J).toString(2),
                    D = D + B(H, 8 - H.length);
                return function(q) {
                    var A = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : pa,
                        t = M(q, 0, Q);
                    if ("number" != typeof t) throw Error("ConsentString - Unknown version number in the string to decode");
                    if (!pa[t]) throw Error("ConsentString - Unsupported version " + t + " in the string to decode");
                    return Ha({
                        input: q,
                        fields: A[t].fields
                    }).decodedObject
                }(D, A)
            }
        }
    },
    function(E, t, q) {
        E.exports = {
            versionNumBits: 6,
            vendorVersionMap: {
                1: {
                    version: 1,
                    metadataFields: "version created lastUpdated cmpId cmpVersion consentScreen vendorListVersion".split(" "),
                    fields: [{
                            name: "version",
                            type: "int",
                            numBits: 6
                        }, {
                            name: "created",
                            type: "date",
                            numBits: 36
                        }, {
                            name: "lastUpdated",
                            type: "date",
                            numBits: 36
                        }, {
                            name: "cmpId",
                            type: "int",
                            numBits: 12
                        },
                        {
                            name: "cmpVersion",
                            type: "int",
                            numBits: 12
                        }, {
                            name: "consentScreen",
                            type: "int",
                            numBits: 6
                        }, {
                            name: "consentLanguage",
                            type: "language",
                            numBits: 12
                        }, {
                            name: "vendorListVersion",
                            type: "int",
                            numBits: 12
                        }, {
                            name: "purposeIdBitString",
                            type: "bits",
                            numBits: 24
                        }, {
                            name: "maxVendorId",
                            type: "int",
                            numBits: 16
                        }, {
                            name: "isRange",
                            type: "bool",
                            numBits: 1
                        }, {
                            name: "vendorIdBitString",
                            type: "bits",
                            numBits: function(q) {
                                return q.maxVendorId
                            },
                            validator: function(q) {
                                return !q.isRange
                            }
                        }, {
                            name: "defaultConsent",
                            type: "bool",
                            numBits: 1,
                            validator: function(q) {
                                return q.isRange
                            }
                        },
                        {
                            name: "numEntries",
                            numBits: 12,
                            type: "int",
                            validator: function(q) {
                                return q.isRange
                            }
                        }, {
                            name: "vendorRangeList",
                            type: "list",
                            listCount: function(q) {
                                return q.numEntries
                            },
                            validator: function(q) {
                                return q.isRange
                            },
                            fields: [{
                                name: "isRange",
                                type: "bool",
                                numBits: 1
                            }, {
                                name: "startVendorId",
                                type: "int",
                                numBits: 16
                            }, {
                                name: "endVendorId",
                                type: "int",
                                numBits: 16,
                                validator: function(q) {
                                    return q.isRange
                                }
                            }]
                        }
                    ]
                }
            }
        }
    },
    function(E, t, q) {
        t = q(1);
        var G = t.decodeBitsToIds,
            B = t.decodeFromBase64;
        E.exports = {
            decodeConsentString: function(q) {
                var t = B(q);
                q = t.maxVendorId;
                var E = t.created,
                    T = t.lastUpdated,
                    R = t.isRange,
                    N = t.defaultConsent,
                    M = t.vendorIdBitString,
                    H = t.vendorRangeList,
                    A = t.cmpVersion,
                    J = t.consentScreen,
                    Z = t.consentLanguage,
                    t = {
                        version: t.version,
                        cmpId: t.cmpId,
                        vendorListVersion: t.vendorListVersion,
                        allowedPurposeIds: G(t.purposeIdBitString),
                        maxVendorId: q,
                        created: E,
                        lastUpdated: T,
                        cmpVersion: A,
                        consentScreen: J,
                        consentLanguage: Z
                    };
                if (R)
                    for (R = H.reduce(function(q, A) {
                            for (var t = A.startVendorId, B = A.endVendorId, B = A.isRange ? B : t; t <= B; t += 1) q[t] = !0;
                            return q
                        }, {}), t.allowedVendorIds = [], M = 1; M <= q; M += 1)(N && !R[M] || !N && R[M]) && -1 === t.allowedVendorIds.indexOf(M) && t.allowedVendorIds.push(M);
                else t.allowedVendorIds = G(M);
                return t
            }
        }
    },
    function(E, t, q) {
        window.consentString = q(5)
    },
    function(E, t, q) {
        t = q(6).ConsentString;
        var G = q(3).decodeConsentString;
        q = q(0).encodeConsentString;
        E.exports = {
            ConsentString: t,
            decodeConsentString: G,
            encodeConsentString: q
        }
    },
    function(E, t, q) {
        var G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(q) {
                return typeof q
            } : function(q) {
                return q && "function" == typeof Symbol &&
                    q.constructor === Symbol && q !== Symbol.prototype ? "symbol" : typeof q
            },
            B = function() {
                function q(q, t) {
                    for (var A = 0; A < t.length; A++) {
                        var B = t[A];
                        B.enumerable = B.enumerable || !1;
                        B.configurable = !0;
                        "value" in B && (B.writable = !0);
                        Object.defineProperty(q, B.key, B)
                    }
                }
                return function(A, t, B) {
                    return t && q(A.prototype, t), B && q(A, B), A
                }
            }();
        t = q(0);
        var T = t.encodeConsentString,
            D = t.getMaxVendorId,
            da = t.encodeVendorIdsToBits,
            aa = t.encodePurposeIdsToBits,
            R = q(3).decodeConsentString,
            N = q(2).vendorVersionMap,
            M = /^[a-z]{2}$/;
        q = function() {
            function q() {
                var t =
                    0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                if (!(this instanceof q)) throw new TypeError("Cannot call a class as a function");
                !0;
                this.created = new Date;
                this.lastUpdated = new Date;
                this.version = 1;
                this.consentLanguage = this.consentScreen = this.cmpVersion = this.cmpId = this.vendorListVersion = this.vendorList = null;
                this.allowedPurposeIds = [];
                this.allowedVendorIds = [];
                t && Object.assign(this, R(t))
            }
            return B(q, [{
                    key: "getConsentString",
                    value: function() {
                        var q = !(0 < arguments.length && void 0 !== arguments[0]) ||
                            arguments[0];
                        if (!this.vendorList) throw Error("ConsentString - A vendor list is required to encode a consent string");
                        return !0 === q && (this.lastUpdated = new Date), T({
                            version: this.getVersion(),
                            vendorList: this.vendorList,
                            allowedPurposeIds: this.allowedPurposeIds,
                            allowedVendorIds: this.allowedVendorIds,
                            created: this.created,
                            lastUpdated: this.lastUpdated,
                            cmpId: this.cmpId,
                            cmpVersion: this.cmpVersion,
                            consentScreen: this.consentScreen,
                            consentLanguage: this.consentLanguage,
                            vendorListVersion: this.vendorListVersion
                        })
                    }
                },
                {
                    key: "getMaxVendorId",
                    value: function() {
                        return D(this.vendorList.vendors)
                    }
                }, {
                    key: "getParsedVendorConsents",
                    value: function() {
                        return da(D(this.vendorList.vendors), this.allowedVendorIds)
                    }
                }, {
                    key: "getParsedPurposeConsents",
                    value: function() {
                        return aa(this.vendorList.purposes, this.allowedPurposeIds)
                    }
                }, {
                    key: "getMetadataString",
                    value: function() {
                        return T({
                            version: this.getVersion(),
                            created: this.created,
                            lastUpdated: this.lastUpdated,
                            cmpId: this.cmpId,
                            cmpVersion: this.cmpVersion,
                            consentScreen: this.consentScreen,
                            vendorListVersion: this.vendorListVersion
                        })
                    }
                },
                {
                    key: "getVersion",
                    value: function() {
                        return this.version
                    }
                }, {
                    key: "getVendorListVersion",
                    value: function() {
                        return this.vendorListVersion
                    }
                }, {
                    key: "setGlobalVendorList",
                    value: function(q) {
                        if ("object" !== (void 0 === q ? "undefined" : G(q))) throw Error("ConsentString - You must provide an object when setting the global vendor list");
                        if (!q.vendorListVersion || !Array.isArray(q.purposes) || !Array.isArray(q.vendors)) throw Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU\u2019s GDPR Consent and Transparency Framework");
                        this.vendorList = {
                            vendorListVersion: q.vendorListVersion,
                            lastUpdated: q.lastUpdated,
                            purposes: q.purposes,
                            features: q.features,
                            vendors: q.vendors.slice(0).sort(function(q, t) {
                                return q.id < t.id ? -1 : 1
                            })
                        };
                        this.vendorListVersion = q.vendorListVersion
                    }
                }, {
                    key: "setCmpId",
                    value: function(q) {
                        this.cmpId = q
                    }
                }, {
                    key: "getCmpId",
                    value: function() {
                        return this.cmpId
                    }
                }, {
                    key: "setCmpVersion",
                    value: function(q) {
                        this.cmpVersion = q
                    }
                }, {
                    key: "getCmpVersion",
                    value: function() {
                        return this.cmpVersion
                    }
                }, {
                    key: "setConsentScreen",
                    value: function(q) {
                        this.consentScreen =
                            q
                    }
                }, {
                    key: "getConsentScreen",
                    value: function() {
                        return this.consentScreen
                    }
                }, {
                    key: "setConsentLanguage",
                    value: function(q) {
                        if (!1 === M.test(q)) throw Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");
                        this.consentLanguage = q
                    }
                }, {
                    key: "getConsentLanguage",
                    value: function() {
                        return this.consentLanguage
                    }
                }, {
                    key: "setPurposesAllowed",
                    value: function(q) {
                        this.allowedPurposeIds = q
                    }
                }, {
                    key: "getPurposesAllowed",
                    value: function() {
                        return this.allowedPurposeIds
                    }
                }, {
                    key: "setPurposeAllowed",
                    value: function(q, t) {
                        var A = this.allowedPurposeIds.indexOf(q);
                        !0 === t ? -1 === A && this.allowedPurposeIds.push(q) : !1 === t && -1 !== A && this.allowedPurposeIds.splice(A, 1)
                    }
                }, {
                    key: "isPurposeAllowed",
                    value: function(q) {
                        return -1 !== this.allowedPurposeIds.indexOf(q)
                    }
                }, {
                    key: "setVendorsAllowed",
                    value: function(q) {
                        this.allowedVendorIds = q
                    }
                }, {
                    key: "getVendorsAllowed",
                    value: function() {
                        return this.allowedVendorIds
                    }
                }, {
                    key: "setVendorAllowed",
                    value: function(q, t) {
                        var A = this.allowedVendorIds.indexOf(q);
                        !0 === t ? -1 === A && this.allowedVendorIds.push(q) :
                            !1 === t && -1 !== A && this.allowedVendorIds.splice(A, 1)
                    }
                }, {
                    key: "isVendorAllowed",
                    value: function(q) {
                        return -1 !== this.allowedVendorIds.indexOf(q)
                    }
                }
            ], [{
                key: "decodeMetadataString",
                value: function(q) {
                    var t = R(q),
                        A = {};
                    return N[t.version].metadataFields.forEach(function(q) {
                        A[q] = t[q]
                    }), A
                }
            }]), q
        }();
        E.exports = {
            ConsentString: q
        }
    },
    function(E, t, q) {
        (function(G, B) {
            var E;
            ! function(D) {
                D = ("object" == typeof G && G && G.exports, "object" == typeof B && B);
                D.global !== D && D.window;
                var T = function(q) {
                    this.message = q
                };
                (T.prototype = Error()).name =
                    "InvalidCharacterError";
                var aa = /[\t\n\f\r ]/g,
                    R = {
                        encode: function(q) {
                            q = String(q);
                            if (/[^\0-\xFF]/.test(q)) throw new T("The string to be encoded contains characters outside of the Latin1 range.");
                            for (var t, B, A, D, E = q.length % 3, G = "", N = -1, R = q.length - E; ++N < R;) t = q.charCodeAt(N) << 16, B = q.charCodeAt(++N) << 8, A = q.charCodeAt(++N), G += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((D = t + B + A) >> 18 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(D >> 12 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(D >>
                                6 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63 & D);
                            return 2 == E ? (t = q.charCodeAt(N) << 8, B = q.charCodeAt(++N), G += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((D = t + B) >> 10) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(D >> 4 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(D << 2 & 63) + "\x3d") : 1 == E && (D = q.charCodeAt(N), G += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(D >>
                                2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(D << 4 & 63) + "\x3d\x3d"), G
                        },
                        decode: function(q) {
                            var t = (q = String(q).replace(aa, "")).length;
                            0 == t % 4 && (t = (q = q.replace(/==?$/, "")).length);
                            if (1 == t % 4 || /[^+a-zA-Z0-9/]/.test(q)) throw new T("Invalid character: the string to be decoded is not correctly encoded.");
                            for (var B, A, D = 0, E = "", G = -1; ++G < t;) A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(q.charAt(G)), B = D % 4 ? 64 * B + A : A, D++ % 4 && (E += String.fromCharCode(255 & B >>
                                (-2 * D & 6)));
                            return E
                        },
                        version: "0.1.0"
                    };
                void 0 === (E = function() {
                    return R
                }.call(t, q, t, G)) || (G.exports = E)
            }()
        }).call(t, q(8)(E), q(9))
    },
    function(E, t) {
        E.exports = function(q) {
            return q.webpackPolyfill || (q.deprecate = function() {}, q.paths = [], q.children || (q.children = []), Object.defineProperty(q, "loaded", {
                enumerable: !0,
                get: function() {
                    return q.l
                }
            }), Object.defineProperty(q, "id", {
                enumerable: !0,
                get: function() {
                    return q.i
                }
            }), q.webpackPolyfill = 1), q
        }
    },
    function(E, t) {
        var q;
        q = function() {
            return this
        }();
        try {
            q = q || Function("return this")() ||
                eval("this")
        } catch (G) {
            "object" == typeof window && (q = window)
        }
        E.exports = q
    }
]);
"undefined" == typeof __cmp && (__cmp = {});
(function(E) {
    E.__cmp = function() {
        var t = [];
        ! function() {
            if (__cmp.a)
                for (var q = 0; q < __cmp.a.length; q++) {
                    var B = {},
                        E = __cmp.a[q];
                    B.commandmethod = E[0];
                    B.parameter = E[1];
                    B.callback = E[2];
                    t.push(B)
                }
        }();
        (function B() {
            if (!E.frames.__cmpLocator)
                if (document.body) {
                    var q = document.body,
                        t = document.createElement("iframe");
                    t.setAttribute("style", "display:none");
                    t.name = "__cmpLocator";
                    q.appendChild(t)
                } else setTimeout(B, 5)
        })();
        (E.attachEvent || E.addEventListener)("message", function(q) {
            E.__cmp.receiveMessage(q)
        }, !1);
        var q = function(q,
            t, D) {
            if (D) switch (q) {
                case "ping":
                    Optanon.getPingRequest(D);
                    break;
                case "getVendorConsents":
                    (t = function(q) {
                        var t = [];
                        if (q) {
                            if (Array.isArray(q)) q.forEach(function(q) {
                                isNaN(q) || t.push(q)
                            });
                            else {
                                if (isNaN(q)) return;
                                t.push(q)
                            }
                            return t
                        }
                    }(t)) && Array.isArray(t) && 0 < t.length ? Optanon.getVendorConsentsRequest(D, t) : Optanon.getVendorConsentsRequest(D);
                    break;
                case "getConsentData":
                    Optanon.getConsentDataRequest(D)
            }
        };
        return q.receiveMessage = function(t) {
            var B = t.data,
                D = t.origin,
                E = t.source;
            if (B && B.__cmpCall) {
                var aa = B.__cmpCall.callId,
                    R = B.__cmpCall.command;
                q(R, B.__cmpCall.parameter, function(q, t) {
                    E.postMessage({
                        __cmpReturn: {
                            returnValue: q,
                            success: t,
                            callId: aa,
                            command: R
                        }
                    }, D)
                })
            } else B && B.OnetrustIABCookies && Optanon.updateConsentFromCookies(B.OnetrustIABCookies)
        }, q.proccessQueue = function() {
            if (t)
                for (var B = 0; B < t.length; B++) q(t[B].commandmethod, t[B].parameter, t[B].callback)
        }, q
    }()
})(window);
var c;
"undefined" == typeof Optanon && (Optanon = OneTrust = {});
(function() {
    function E() {
        var e = K();
        return e.ConsentModel && e.ConsentModel.Name.toLowerCase() === Ja.IMPLIEDCONSENT
    }

    function t(e) {
        var x = [];
        for (e = 0; e < P.length; e++) Mb(P[e], ":1") && Ka(P[e].replace(":1", "")) && x.push(P[e].replace(":1", ""));
        e = "," + x.toString().toLowerCase() + ",";
        window.OnetrustActiveGroups = e;
        window.OptanonActiveGroups = e;
        "undefined" != typeof dataLayer ? dataLayer.constructor === Array && (dataLayer.push({
            OnetrustActiveGroups: e
        }), dataLayer.push({
            OptanonActiveGroups: e
        })) : window.dataLayer = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: e
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: e
        }];
        setTimeout(function() {
            var e = new CustomEvent("consent.onetrust", {
                detail: x
            });
            window.dispatchEvent(e)
        })
    }

    function q() {
        var e = La("https://optanon.blob.core.windows.net/skins/4.6.0/default_flat_bottom_two_button_black/v2/css/optanon.css"),
            x = document.createElement("link");
        x.type = "text/css";
        x.href = e;
        x.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(x);
        e = document.querySelectorAll("link");
        for (x = 0; x < e.length; x++) e[x].href.includes("onetrust-rtl.css") &&
            (Y = !0), e[x].href.includes("default_responsive") && (Va = !0);
        e = (e = (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#FFFFFF")) ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null) ? 186 < .299 * e.r + .587 * e.g + .114 * e.b ? "#000000" : "#ffffff" : "";
        x = document.createElement("style");
        x.innerHTML = "#optanon ul#optanon-menu li { background-color: #F8F8F8 !important }#optanon ul#optanon-menu li.menu-item-selected { background-color: #FFFFFF !important }#optanon #optanon-popup-wrapper .optanon-white-button-middle { background-color: #FFFFFF !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle { background-color: #FFFFFF !important; border-color: #FFFFFF !important; }#optanon #optanon-popup-wrapper .optanon-white-button-middle button { color: " +
            e + " !important }.optanon-alert-box-wrapper .optanon-alert-box-button-middle button { color: " + e + " !important }#optanon #optanon-popup-bottom { background-color: #FFFFFF !important }#optanon.modern #optanon-popup-top, #optanon.modern #optanon-popup-body-left-shading { background-color: #FFFFFF !important }.optanon-alert-box-wrapper { background-color:#262626 !important }.optanon-alert-box-wrapper .optanon-alert-box-bg p { color:#D9D9D9 !important }#optanon #optanon-popup-wrapper,\n#optanon #optanon-popup-bg {\n  z-index: 9999999999;\n}\n\n.optanon-alert-box-wrapper {\n  z-index: 99999;\n}\n\n#optanon *,\n.optanon-alert-box-wrapper * {\n  font-family: CNN,CNNSans,Helvetica Neue,Helvetica,Arial,sans-serif !important;\n  text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\n.optanon-alert-box-wrapper .optanon-alert-box-bg p {\n    font-size: 14px;\n    line-height: 1.62;\n}\n\n.optanon-alert-box-wrapper .optanon-button-more .optanon-alert-box-button-middle a {\n    border-bottom: none;\n}\n\n.optanon-alert-box-wrapper .optanon-button-allow .optanon-alert-box-button-middle a:before,.optanon-alert-box-wrapper .optanon-button-more .optanon-alert-box-button-middle a:before {\n    display: none;\n}\n\n.optanon-alert-box-wrapper .optanon-alert-box-button-middle {\n    border-radius: 4px;\n}\n\n.optanon-alert-box-wrapper .optanon-alert-box-bg p a {\n    border-bottom: 1px solid #ff3f3f;\n    color: #D9D9D9;\n}\n\n.optanon-alert-box-wrapper .optanon-alert-box-bg p a:hover {\nborder-bottom-color: transparent;\n    color: #ff3f3f;\n}\n\n.optanon-alert-box-wrapper .optanon-alert-box-corner-close a {\n    background: #262626;\n}\n\n#optanon #optanon-popup-top .optanon-close {\n    background: #fff;\n    right: 16px;\n    top: 28px;\n}\n\n#optanon #optanon-popup-top .optanon-close:before,\n#optanon #optanon-popup-top .optanon-close:after,\n.optanon-alert-box-wrapper .optanon-alert-box-corner-close a:before,\n.optanon-alert-box-wrapper .optanon-alert-box-corner-close a:after {\n    content: '';\n    height: 22px;\n    border-left: 2px solid #fff;\n    position: absolute;\n    left: 10px;\n}\n\n#optanon #optanon-popup-top .optanon-close:before,\n.optanon-alert-box-wrapper .optanon-alert-box-corner-close a:before {\n    transform: rotate(-45deg);\n}\n\n#optanon #optanon-popup-top .optanon-close:after,\n.optanon-alert-box-wrapper .optanon-alert-box-corner-close a:after {\n    transform: rotate(45deg);\n}\n\n#optanon #optanon-popup-top .optanon-close:before,\n#optanon #optanon-popup-top .optanon-close:after {\n    border-left-color: #262626;\n}\n\n#optanon #optanon-menu li {\n    background: none !important;\n}\n\n#optanon #optanon-menu li p {\n    margin-left: 16px;\n}\n\n#optanon #optanon-main-info-text a {\n    text-decoration: underline;\n}\n\n.optanon-alert-box-wrapper .banner-content .banner-policy-link {\ntext-decoration: none !important;\n}";
        document.getElementsByTagName("head")[0].appendChild(x)
    }

    function G() {
        if (Wa()) B(location.href);
        else {
            var e = "true" === W("OptanonConsent", "AwaitingReconsent"),
                x = K(),
                F = ja("OptanonAlertBoxClosed"),
                x = x.LastReconsentDate;
            F && x && new Date(x) > new Date(F) && !e ? (B(location.href), ia("OptanonConsent", "AwaitingReconsent", !0)) : (B("NotLandingPage"), ia("OptanonConsent", "AwaitingReconsent", !1), Nb && Optanon.SetAlertBoxClosed(!0))
        }
    }

    function B(e) {
        ia("OptanonConsent", "landingPath", e)
    }

    function T() {
        var e = K();
        z = jQuery.noConflict(!0);
        var x = qa();
        if (e.IsIABEnabled) {
            if (!L.vendorList) {
                var F = "https://vendorlist.consensu.org/vendorlist.json";
                x.vendorListVersion && 0 < x.vendorListVersion && (F = "https://vendorlist.consensu.org/v-" + x.vendorListVersion + "/vendorlist.json");
                z.getJSON(F, function(e) {
                    L.vendorList = e
                })
            }
            e.euOnly || (window.jsonFeed = function(e) {
                W("OptanonConsent", "EU") || ia("OptanonConsent", "EU", e.displayPopup);
                ib(e.displayPopup)
            })
        }
        z(window).on("load", Optanon.LoadBanner);
        window.jsonFeed = function(x) {
            W("OptanonConsent", "EU") || ia("OptanonConsent",
                "EU", x.displayPopup);
            ib(x.displayPopup);
            1 == x.displayPopup || "true" == x.displayPopup || "true" == ya || 1 == ya ? Optanon.loadDefaultBannerGroup(x) : e.euOnly ? (W("OptanonConsent", "EU") && jb("OptanonConsent", "EU", ya), D(), Ma = !0, z(window).one("otloadbanner", function() {
                M();
                var x = !1;
                0 < z(".optanon-show-settings").length && z(".optanon-show-settings").attr("data-ignore-geolocation") && "true" === z(".optanon-show-settings").attr("data-ignore-geolocation").toLowerCase() && (x = !0);
                x ? (H(), xa(), pa(), Jb(), e.IsIABEnabled && va(), kb || Optanon.AllowAll(!0)) :
                    (z(".optanon-show-settings").remove(), z(".optanon-close-consent").remove(), z(".optanon-close-ui").remove(), z(".optanon-toggle-display").remove(), z(".optanon-allow-all").remove(), Optanon.AllowAll(!0));
                0 < z("#optanon-cookie-policy").length && hb();
                da()
            })) : Optanon.loadDefaultBannerGroup()
        }
    }

    function D() {
        E() && !Wa() && "true" === W("OptanonConsent", "AwaitingReconsent") && (K(), z(".optanon-alert-box-wrapper").fadeOut(200), z("#optanon-popup-bg").hide(), Optanon.Close(!0), ja("OptanonAlertBoxClosed") || Optanon.SetAlertBoxClosed(!0))
    }

    function da() {
        0 < z(".banner-policy-link").length ? z(".banner-policy-link").focus() : R();
        var e = void 0,
            x = void 0,
            F = void 0,
            q = z(".banner-policy-link"),
            t = z('.banner-close-button, .optanon-alert-box-button-container button:not([class\x3d"optanon-alert-box-close"]'),
            F = z('.optanon-alert-box-wrapper [href], .optanon-alert-box-wrapper input, .optanon-alert-box-wrapper select, .optanon-alert-box-wrapper textarea, .optanon-alert-box-wrapper button:not([class\x3d"optanon-alert-box-close"]'),
            A = 0 < q.length,
            e = A ? z(q) :
            z(F[F.length - 1]),
            x = z(F[0]);
        if (e) e.on("keydown", function(e) {
            var F = x;
            A ? (9 !== e.keyCode || e.shiftKey || (e.preventDefault(), R()), 9 === e.keyCode && e.shiftKey && (e.preventDefault(), F.focus())) : 9 === e.keyCode && e.shiftKey && (e.preventDefault(), N())
        });
        if (x) x.on("keydown", function(x) {
            var F = e;
            9 !== x.keyCode || x.shiftKey || (x.preventDefault(), F.focus())
        });
        if (0 < t.length) z(t[t.length - 1]).on("keydown", aa)
    }

    function aa(e) {
        9 === e.keyCode && e.shiftKey && (e.preventDefault(), N())
    }

    function R() {
        var e = z(".optanon-alert-box-button-container .cookie-settings-button"),
            x = z(".optanon-alert-box-button-container .accept-cookies-button"),
            F = z(".banner-close-button");
        z(".banner-policy-link");
        0 < e.length ? e.focus() : 0 < x.length ? x.focus() : 0 < F.length && F.focus()
    }

    function N() {
        var e = z(".optanon-alert-box-button-container .cookie-settings-button"),
            x = z(".optanon-alert-box-button-container .accept-cookies-button"),
            F = z(".banner-close-button"),
            q = z(".banner-policy-link");
        0 < q.length ? q.focus() : 0 < F.length ? F.focus() : 0 < x.length ? x.focus() : 0 < e.length && e.focus()
    }

    function M() {
        z("script").filter(function() {
            return z(this).attr("type") &&
                "text/plain" == z(this).attr("type").toLowerCase() && z(this).attr("class") && z(this).attr("class").toLowerCase().match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/)
        }).each(function() {
            var e = z(this).attr("class").toLowerCase().split("optanon-category-")[1].split("-"),
                x = !0;
            if (e && 0 < e.length) {
                for (var F = 0; F < e.length; F++)
                    if (!Na(e[F], Ma)) {
                        x = !1;
                        break
                    }
                x && z(this).replaceWith(z(this).attr("type", "text/javascript")[0].outerHTML)
            }
        })
    }

    function H() {
        var e, x = K(),
            F, q, t;
        lb(x);
        z("body").prepend('\x3cdiv id\x3d"optanon" class\x3d"modern"\x3e\x3c/div\x3e');
        e = '\x3cdiv id\x3d"optanon-popup-bg"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-wrapper" role\x3d"dialog" aria-modal\x3d"true" tabindex\x3d"-1"\x3e\x3cdiv id\x3d"optanon-popup-top"\x3e';
        x.ShowPreferenceCenterCloseButton && (x.CloseText || (x.CloseText = "Close"), e = e + "\x3cbutton onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Close Button');\" aria-label\x3d\"" + x.CloseText + '" class\x3d"optanon-close-link optanon-close optanon-close-ui" title\x3d"' + x.CloseText + '"\x3e\x3cdiv id\x3d"optanon-close" style\x3d"background: url(' +
            La("https://optanon.blob.core.windows.net/skins/4.6.0/default_flat_bottom_two_button_black/v2/images/optanon-pop-up-close.png") + ');width:34px;height:34px;"\x3e\x3c/div\x3e\x3c/button\x3e');
        t = "'" + La("https://optanon.blob.core.windows.net/logos/10/10:cnn.com/logo-cnn.png") + "'";
        e = e + '\x3c/div\x3e\x3cdiv id\x3d"optanon-popup-body"\x3e\x3cdiv id\x3d"optanon-popup-body-left"\x3e\x3cdiv id\x3d"optanon-popup-body-left-shading"\x3e\x3c/div\x3e\x3cdiv id\x3d"optanon-branding-top-logo" style\x3d"background-image: url(' +
            t + ') !important;"\x3e\x3c/div\x3e\x3cul id\x3d"optanon-menu" aria-label\x3d"Navigation Menu" role\x3d"tablist"\x3e\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
        z("#optanon").html(e);
        x.Language && x.Language.Culture && z("#optanon-popup-wrapper").attr("lang", x.Language.Culture);
        for (t = 0; t < x.Groups.length; t += 1)
            if (e = x.Groups[t], X(e) == ra || ka(e) && fa(e)) {
                F = X(e) == ra;
                q = -1 != z.inArray(Q(e) + ":1", P);
                F = z('\x3cli class\x3d"menu-item-necessary ' + (F || q ? "menu-item-on" : "menu-item-off") + '" title\x3d"' + X(e) +
                    '"\x3e\x3cp class\x3d"preference-menu-item"\x3e\x3cbutton role\x3d"tab" aria-selected\x3d"' + (0 === t ? "true" : "false") + '" aria-controls\x3d"tab-' + t + '" id\x3d"' + X(e).split(" ")[0] + "-" + X(e).split(" ")[1] + '"\x3e' + X(e) + "\x3c/button\x3e\x3c/p\x3e\x3c/li\x3e");
                X(e) == ra && F.removeClass("menu-item-necessary").addClass("menu-item-about");
                switch (e.OptanonGroupId) {
                    case 2:
                        F.removeClass("menu-item-necessary").addClass("menu-item-performance");
                        break;
                    case 3:
                        F.removeClass("menu-item-necessary").addClass("menu-item-functional");
                        break;
                    case 4:
                        F.removeClass("menu-item-necessary").addClass("menu-item-advertising");
                        break;
                    case 8:
                        F.removeClass("menu-item-necessary").addClass("menu-item-social")
                }
                F.data("group", e);
                F.data("optanonGroupId", Q(e));
                F.click(J);
                z("#optanon #optanon-menu").append(F)
            }
        e = z('\x3cli class\x3d"menu-item-moreinfo menu-item-off" title\x3d"' + x.AboutText + '"\x3e\x3cp class\x3d"preference-menu-item"\x3e\x3ca target\x3d"_blank" aria-label\x3d"' + x.AboutText + '" href\x3d"' + x.AboutLink + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" +
            x.AboutText + "\x3c/a\x3e\x3c/p\x3e\x3c/li\x3e");
        z("#optanon #optanon-menu").append(e);
        z("#optanon #optanon-popup-body").append('\x3cdiv id\x3d"optanon-popup-body-right"\x3e\x3cp role\x3d"heading" aria-level\x3d"2" class\x3d"legacy-preference-banner-title h2" aria-label\x3d"' + x.MainText + '"\x3e' + x.MainText + '\x3c/p\x3e\x3cdiv class\x3d"vendor-header-container"\x3e\x3cp class\x3d"header-3" role\x3d"heading" aria-level\x3d"3"\x3e\x3c/p\x3e\x3cdiv id\x3d"optanon-popup-more-info-bar"\x3e\x3cdiv class\x3d"optanon-status"\x3e' +
            A(x, "chkMain") + ('\x3cdiv class\x3d"optanon-status-always-active optanon-status-on"\x3e' + (Va && !x.ShowPreferenceCenterCloseButton ? '\x3cp class\x3d"no-closeBtn"\x3e' : "\x3cp\x3e") + x.AlwaysActiveText + "\x3c/p\x3e\x3c/div\x3e") + '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-main-info-text" role\x3d"tabpanel"\x3e\x3c/div\x3e' + (x.IsIABEnabled && x.VendorLevelOptOut ? '\x3cdiv id\x3d"optanon-vendor-consent-text"\x3e\x3cbutton class\x3d"vendor-consent-link" aria-label\x3d"View Vendor Consent"\x3eView Vendor Consent\x3c/button\x3e\x3c/div\x3e' :
                "") + '\x3c/div\x3e\x3cdiv class\x3d"optanon-bottom-spacer"\x3e\x3c/div\x3e');
        z("#optanon #optanon-popup-wrapper").append('\x3cdiv id\x3d"optanon-popup-bottom"\x3e \x3ca href\x3d"https://onetrust.com/poweredbyonetrust" target\x3d"_blank"\x3e\x3cdiv id\x3d"optanon-popup-bottom-logo" style\x3d"background: url(' + La("https://optanon.blob.core.windows.net/skins/4.6.0/default_flat_bottom_two_button_black/v2/images/cookie-collective-top-bottom.png") + ');width:155px;height:35px;" title\x3d"powered by OneTrust"\x3e\x3c/div\x3e\x3c/a\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-save-settings-button optanon-close optanon-close-consent"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3cbutton title\x3d"' +
            x.AllowAllText + '" aria-label\x3d"' + x.AllowAllText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Save Settings');\"\x3e" + x.AllowAllText + '\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-button-wrapper optanon-allow-all-button optanon-allow-all"\x3e\x3cdiv class\x3d"optanon-white-button-left"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-middle"\x3e\x3cbutton title\x3d"' +
            x.ConfirmText + '" aria-label\x3d"' + x.ConfirmText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Allow All');\"\x3e" + x.ConfirmText + '\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-white-button-right"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        Xa()
    }

    function A(e, x) {
        return '\x3cdiv class\x3d"optanon-status-editable"\x3e\x3cform\x3e\x3cspan class\x3d"fieldset"\x3e' + (Y ? '\x3cp class\x3d"togglerChk mainToggle"\x3e' : Va && !e.ShowPreferenceCenterCloseButton ? '\x3cp class\x3d"no-closeBtn"\x3e' :
            "\x3cp\x3e") + (Y ? '\x3cspan class\x3d"toggleChk"\x3e\x3c/span\x3e' : "") + '\x3cinput type\x3d"checkbox" value\x3d"check" id\x3d"' + x + '" checked class\x3d"legacy-group-status optanon-status-checkbox" /\x3e\x3clabel for\x3d"' + x + '"\x3e' + (Y ? "" : e.ActiveText) + "\x3c/label\x3e\x3c/p\x3e\x3c/span\x3e\x3c/form\x3e\x3c/div\x3e"
    }

    function J() {
        var e = K(),
            x = z(this).data("group"),
            F = Ya(x),
            q;
        q = this.childNodes[0].children[0].id;
        var t = q.split("-")[0] + "-description";
        lb(e);
        var A = X(x);
        z("#optanon #optanon-menu li").removeClass("menu-item-selected");
        z(this).addClass("menu-item-selected");
        z("#optanon p.header-3").text(A);
        document.querySelector("#optanon-popup-body-right").children[2].setAttribute("id", t);
        document.querySelector("#optanon-popup-body-right").children[2].setAttribute("aria-labelledby", q);
        document.querySelector("#optanon #" + t).innerHTML = Ga(x);
        q = document.querySelectorAll(".preference-menu-item button");
        for (t = 0; t < q.length; t++) "true" === q[t].attributes[1].value && q[t].setAttribute("aria-selected", !1), q[t].parentElement.parentElement.classList.contains("menu-item-selected") &&
            q[t].setAttribute("aria-selected", !0);
        x && !e.HideToolbarCookieList && (q = Lb(x), z("#optanon .optanon-main-info-text").append(q));
        Z(x, e);
        if (F && 0 < F.length)
            for (x = 0; x < F.length; x += 1) Z(F[x], e);
        var x = document.querySelector("#optanon .optanon-status-checkbox"),
            B = document.querySelectorAll("#optanon .optanon-subgroup-checkbox");
        q = document.createElement("span");
        q.classList.add("sr-only");
        q.innerText = A;
        x.nextSibling.insertBefore(q, x.firstChild);
        0 < B.length && F.forEach(function(e, x) {
            var q = document.createElement("span");
            q.classList.add("sr-only");
            q.innerText = X(e);
            B[x].nextSibling.insertBefore(q, B.firstChild)
        });
        A == ra ? z("#optanon #optanon-popup-more-info-bar").hide() : z("#optanon #optanon-popup-more-info-bar").show();
        e.IsIABEnabled && e.VendorLevelOptOut && Ha();
        return !1
    }

    function Z(e, x) {
        if ("always active" == ba(e).toLowerCase() || "always active" == ba(e.Parent).toLowerCase()) z("#optanon .optanon-status-always-active").show(), z("#optanon .optanon-status-editable").hide();
        else {
            z("#optanon .optanon-status-editable").show();
            z("#optanon .optanon-status-always-active").hide();
            z("#optanon .optanon-status-editable .optanon-status-checkbox").prop("id", "chk" + e.GroupId);
            z("#optanon .optanon-status-editable label").attr("for", "chk" + e.GroupId);
            var q = -1 != z.inArray(Q(e) + ":1", P),
                ea = z(ka(e) ? "#chk" + e.GroupId : "#optanon #chk" + Q(e)),
                t = Y ? ea.prev(".toggleChk") : ea.next("label");
            q ? (ea.prop("checked", !0), ea.parent().addClass("optanon-status-on"), t.text(x.ActiveText)) : (ea.prop("checked", !1), ea.parent().removeClass("optanon-status-on"), x.InactiveText && t.text(x.InactiveText))
        }
    }

    function va() {
        var e =
            K(),
            x = qa(),
            q, x = x ? x.activeVendors : null;
        z("#optanon-popup-body-left").append('\x3cdiv id\x3d"optanon-vendor-consent-back"\x3e\x3cbutton class\x3d"vendor-consent-back-link" aria-label\x3d"Back"\x3eBack\x3c/button\x3e\x3c/div\x3e');
        z("#optanon-popup-body-right").append('\x3cdiv id\x3d"optanon-vendor-consent-list"\x3e\x3c/div\x3e');
        if (x && 0 < x.length)
            for (q = 0; q < x.length; q++) {
                var ea = x[q],
                    t;
                if (t = x[q].policyUrl) {
                    var A = /^(http)s?:\/\//i;
                    t = t.match(/^:\/\//) ? "http" + t : t.match(A) ? t : "http://" + t
                } else t = void 0;
                ea.policyUrl =
                    t;
                z("#optanon-vendor-consent-list").append('\x3cdiv class\x3d"vendor-item"\x3e\x3cdiv class\x3d"vendor-detail"\x3e\x3cdiv class\x3d"vendor-name"\x3e' + x[q].vendorName + '\x3c/div\x3e\x3ca class\x3d"vendor-privacy-policy" rel\x3d"nofollow" target\x3d"_blank" href\x3d"' + x[q].policyUrl + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Preferences Cookie Policy');\"\x3e" + x[q].policyUrl + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"vendor-toggle-content"\x3e' + Ia(e, x[q].vendorId) +
                    "\x3c/div\x3e\x3c/div\x3e")
            }
        z("#optanon #optanon-popup-body-right .vendor-header-container").append('\x3cdiv class\x3d"optanon-vendor-list-allow-all"\x3e\x3cdiv class\x3d"optanon-vendor-allow-all-editable"\x3e\x3cform\x3e\x3cspan class\x3d"fieldset"\x3e\x3cinput type\x3d"checkbox" aria-checked\x3d"false" value\x3d"check" id\x3d"chkVendorListAllowAll" checked class\x3d"optanon-vendor-status" /\x3e\x3clabel for\x3d"chkVendorListAllowAll"\x3e\x3cspan class\x3d"vendor-allow-all-text"\x3eAllow All\x3c/span\x3e\x3c/label\x3e\x3c/span\x3e\x3c/form\x3e\x3c/div\x3e\x3c/div\x3e');
        z("#optanon-popup-body-right #optanon-vendor-consent-list").hide();
        z("#optanon-popup-body-left #optanon-vendor-consent-back").hide();
        z("#optanon-popup-body-right .optanon-vendor-list-allow-all").hide();
        Ea()
    }

    function wa() {
        z("#optanon-popup-body-left #optanon-menu").hide();
        z("#optanon-popup-body-right .optanon-main-info-text").hide();
        z("#optanon-popup-body-right #optanon-vendor-consent-text").hide();
        z("#optanon-popup-body-left #optanon-vendor-consent-back").show();
        z("#optanon-popup-body-right #optanon-vendor-consent-list").show();
        z("#optanon-popup-body-right .optanon-vendor-list-allow-all").show()
    }

    function Ea() {
        K();
        var e = z(".optanon-vendor-status-editable .optanon-vendor-status");
        if (L.vendors && e && 0 < e.length)
            for (var x = 0; x < e.length; x++) {
                var q = -1 != z.inArray(e[x].id + ":true", L.vendors),
                    t = z("#lblVendorToggle_" + e[x].id);
                Y && t.parent().siblings();
                e[x].checked = q ? !0 : !1
            }
        e = z(".optanon-vendor-status-editable .optanon-vendor-status");
        x = z(".optanon-vendor-status-editable .optanon-vendor-status:checked");
        e && x && (x.length >= e.length / 2 ? z("#chkVendorListAllowAll").prop("checked", !0) : z("#chkVendorListAllowAll").prop("checked", !1))
    }

    function Ha() {
        var e = K();
        z(".menu-item-about").hasClass("menu-item-selected") && e.IsIABEnabled && e.VendorLevelOptOut ? "none" === z("#optanon-vendor-consent-list").css("display") ? z("#optanon-vendor-consent-text").show() : (wa(), z("#optanon-vendor-consent-text").hide()) : z("#optanon-vendor-consent-text").hide()
    }

    function Ia(e, x) {
        return '\x3cdiv class\x3d"optanon-vendor-status-editable"\x3e\x3cform\x3e' + (Y ? '\x3cspan class\x3d"toggleChk"\x3e' + e.ActiveText + "\x3c/span\x3e" :
            "") + '\x3cspan class\x3d"fieldset"\x3e\x3cinput type\x3d"checkbox" aria-checked\x3d"false" value\x3d"check" id\x3d"' + x + '" checked class\x3d"optanon-vendor-status vendor-group-status" /\x3e\x3clabel class\x3d"vendor-status-label" for\x3d"' + x + '" id\x3d"' + ("lblVendorToggle_" + x) + '"\x3e' + (Y ? "" : e.ActiveText) + "\x3c/label\x3e\x3c/span\x3e\x3c/form\x3e\x3c/div\x3e"
    }

    function xa() {
        var e = K();
        z(document).on("click", ".optanon-close-consent", function() {
            Optanon.Close();
            mb(!0, !0);
            return !1
        });
        z(document).on("click",
            ".optanon-close-ui",
            function() {
                sa(Ja.KEEPCENTERTILEBANNEROPEN);
                return !1
            });
        z(document).on("click", ".optanon-toggle-display", function() {
            Optanon.ToggleInfoDisplay();
            return !1
        });
        z(document).on("click", ".optanon-allow-all", function() {
            Optanon.AllowAll();
            mb(!0, !0);
            return !1
        });
        z(document).on("keydown", "#optanon", function(e) {
            27 == e.keyCode && sa(Ja.KEEPCENTERTILEBANNEROPEN)
        });
        z(document).on("click", "#optanon-vendor-consent-text", function() {
            wa(e);
            return !1
        });
        z(document).on("change", ".vendor-group-status", function() {
            z(this).is(":checked") ?
                Y ? this.classList.contains("optanon-vendor-status") ? z(this).parent().siblings()[0].innerText = e.ActiveText : z(this).prev(".toggleChk").text(e.ActiveText) : z(this).next("label").text(e.ActiveText) : Y ? this.classList.contains("optanon-vendor-status") ? z(this).parent().siblings()[0].innerText = e.InactiveText : z(this).prev(".toggleChk").text(e.InactiveText) : z(this).next("label").text(e.InactiveText)
        });
        z(document).on("change", ".optanon-vendor-allow-all-editable #chkVendorListAllowAll", function() {
            z(this).is(":checked") ?
                (z(".optanon-vendor-status-editable .optanon-vendor-status").prop("checked", !0), z(".optanon-vendor-status-editable " + (Y ? ".toggleChk" : ".vendor-status-label")).text(e.ActiveText)) : (z(".optanon-vendor-status-editable .optanon-vendor-status:checked").prop("checked", !1), z(".optanon-vendor-status-editable " + (Y ? ".toggleChk" : ".vendor-status-label")).text(e.InactiveText))
        });
        z(document).on("click", "#optanon-vendor-consent-back", function() {
            z("#optanon-popup-body-left #optanon-menu").show();
            z("#optanon-popup-body-right .optanon-main-info-text").show();
            z("#optanon-popup-body-right #optanon-vendor-consent-text").show();
            z("#optanon-popup-body-right #optanon-popup-more-info-bar").hide();
            z("#optanon-popup-body-right #optanon-vendor-consent-list").hide();
            z("#optanon-popup-body-left #optanon-vendor-consent-back").hide();
            z("#optanon-popup-body-right .optanon-vendor-list-allow-all").hide();
            return !1
        });
        z("#optanon").on("change", ".optanon-status-checkbox", function() {
            var x = z(this).data("group") || z("#optanon #optanon-menu li.menu-item-selected").data("group");
            if (z(this).is(":checked")) {
                var q = X(x);
                Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Preferences Toggle On", q);
                z("#optanon #optanon-menu li.menu-item-selected").removeClass("menu-item-off");
                z("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-on");
                z(this).parent().addClass("optanon-status-on");
                q = ha(P, Q(x) + ":0"); - 1 != q && (P[q] = Q(x) + ":1", e.IsIABEnabled && la(x, "true", !0));
                (Y ? z(this).prev(".toggleChk") : z(this).next("label")).text(e.ActiveText)
            } else q = X(x), Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent",
                "Preferences Toggle Off", q), z("#optanon #optanon-menu li.menu-item-selected ").removeClass("menu-item-on"), z("#optanon #optanon-menu li.menu-item-selected").addClass("menu-item-off"), z(this).parent().removeClass("optanon-status-on"), q = ha(P, Q(x) + ":1"), -1 != q && (P[q] = Q(x) + ":0", e.IsIABEnabled && la(x, "false", !0)), x = Y ? z(this).prev(".toggleChk") : z(this).next("label"), e.InactiveText && x.text(e.InactiveText);
            Xa()
        })
    }

    function Q(e) {
        return e.CustomGroupId ? e.CustomGroupId : 0 == e.OptanonGroupId ? "0_" + e.GroupId : e.OptanonGroupId
    }

    function pa() {
        z(".optanon-show-settings").wrap('\x3cdiv class\x3d"optanon-show-settings-popup-wrapper"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-button"\x3e').wrap('\x3cdiv class\x3d"optanon-show-settings-middle"\x3e');
        z(".optanon-show-settings-middle").before('\x3cdiv class\x3d"optanon-show-settings-left"\x3e\x3c/div\x3e');
        z(".optanon-show-settings-middle").after('\x3cdiv class\x3d"optanon-show-settings-right"\x3e\x3c/div\x3e');
        z(".optanon-show-settings-button").addClass("optanon-toggle-display")
    }

    function Jb() {
        z(".optanon-show-settings-button").click(function() {
            Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Privacy Settings Click")
        })
    }

    function Kb() {
        if (!Optanon.IsAlertBoxClosedAndValid()) {
            var e = K();
            z(".optanon-alert-box-wrapper").show().animate({
                bottom: "0px"
            }, 1E3);
            e.ForceConsent && (Za(e.AlertNoticeText) || z("#optanon-popup-bg").css({
                "z-index": "7000"
            }).show());
            z(".optanon-alert-box-close").click(function() {
                var e = K();
                z(".optanon-alert-box-wrapper").fadeOut(200);
                z("#optanon-popup-bg").hide();
                1 == e.CloseShouldAcceptAllCookies ? Optanon.AllowAll() : Optanon.Close(!1);
                Optanon.SetAlertBoxClosed(!0)
            });
            if (e.OnClickAcceptAllCookies) {
                for (var x = document.querySelector("body").children, q = 0; q < x.length; q++) x[q].classList.contains("optanon-alert-box-wrapper") || x[q].classList.contains("optanon-show-settings") || "optanon" === x[q].id || x[q].addEventListener("click", Ua);
                document.querySelector(".optanon-alert-box-close").addEventListener("click", Fa);
                document.querySelector(".optanon-allow-all-button").addEventListener("click",
                    Fa);
                document.querySelector(".optanon-save-settings-button").addEventListener("click", Fa);
                document.querySelector(".optanon-button-allow").addEventListener("click", Fa)
            }
            e.ScrollAcceptsAllCookiesAndClosesBanner && (window.addEventListener("scroll", gb), document.querySelector(".optanon-alert-box-close").addEventListener("click", oa), document.querySelector(".optanon-allow-all-button").addEventListener("click", oa), document.querySelector(".optanon-save-settings-button").addEventListener("click", oa), document.querySelector(".optanon-button-allow").addEventListener("click",
                oa))
        }
    }

    function Ua(e) {
        var x = document.querySelector("body").children;
        Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent", "Banner Auto Close");
        Optanon.AllowAll();
        nb(".optanon-alert-box-wrapper", 40);
        Optanon.SetAlertBoxClosed(!0);
        for (var q = 0; q < x.length; q++) x[q].removeEventListener("click", Ua);
        e.stopPropagation()
    }

    function gb() {
        var e = this.pageYOffset,
            x = document.getElementById("optanon-popup-wrapper"),
            x = !(!x.offsetWidth || !x.offsetHeight);
        200 < e && !x && (Optanon.TriggerGoogleAnalyticsEvent("OneTrust Cookie Consent",
            "Banner Auto Close"), Optanon.AllowAll(), nb(".optanon-alert-box-wrapper", 40), Optanon.SetAlertBoxClosed(!0), oa())
    }

    function oa() {
        window.removeEventListener("scroll", gb)
    }

    function Fa() {
        for (var e = document.querySelector("body").children, x = 0; x < e.length; x++) e[x].removeEventListener("click", Ua);
        oa()
    }

    function hb() {
        var e, x, q, t, A, B, U = K(),
            D, E;
        for (q = 0; q < U.Groups.length; q += 1)
            if (e = U.Groups[q], ka(e) && fa(e)) {
                D = z('\x3cdiv class\x3d"optanon-cookie-policy-group"\x3e\x3c/div\x3e');
                D.append('\x3ch2 class\x3d"optanon-cookie-policy-group-name"\x3e' +
                    X(e) + "\x3c/h2\x3e");
                D.append('\x3cp class\x3d"optanon-cookie-policy-group-description"\x3e' + Ga(e) + "\x3c/p\x3e");
                if (0 < e.Cookies.length)
                    for (D.append('\x3cp class\x3d"optanon-cookie-policy-cookies-used"\x3e' + U.CookiesUsedText + "\x3c/p\x3e"), D.append('\x3cul class\x3d"optanon-cookie-policy-group-cookies-list"\x3e\x3c/ul\x3e'), t = 0; t < e.Cookies.length; t += 1) x = e.Cookies[t], x = ob(x), D.find(".optanon-cookie-policy-group-cookies-list").append("\x3cli\x3e" + (Y ? '\x3cdiv class\x3d"keep-ltr"\x3e' : "\x3cdiv\x3e") + x + "\x3c/div\x3e\x3c/li\x3e");
                e = Ya(e);
                if (0 < e.length) {
                    U.CookiesText || (U.CookiesText = "Cookies");
                    U.CategoriesText || (U.CategoriesText = "Categories");
                    U.LifespanText || (U.LifespanText = "Lifespan");
                    U.LifespanTypeText || (U.LifespanTypeText = "Session");
                    U.LifespanDurationText || (U.LifespanDurationText = "days");
                    t = z('\x3ctable class\x3d"optanon-cookie-policy-subgroup-table"\x3e\x3c/table\x3e');
                    t.append("\x3ctr\x3e\x3c/tr\x3e");
                    x = "";
                    U.IsLifespanEnabled && (x = "\x26nbsp;(" + U.LifespanText + ")");
                    t.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-left"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' +
                        U.CategoriesText + "\x3c/p\x3e\x3c/th\x3e");
                    t.find("tr").append('\x3cth class\x3d"optanon-cookie-policy-right"\x3e\x3cp class\x3d"optanon-cookie-policy-subgroup-table-column-header"\x3e' + U.CookiesText + x + "\x3c/p\x3e\x3c/th\x3e");
                    for (x = 0; x < e.length; x += 1) {
                        E = z('\x3ctr class\x3d"optanon-cookie-policy-subgroup"\x3e\x3c/tr\x3e');
                        E.append('\x3ctd class\x3d"optanon-cookie-policy-left"\x3e\x3c/td\x3e');
                        A = pb(e[x]);
                        E.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-name"\x3e' +
                            A + "\x3c/p\x3e");
                        E.find(".optanon-cookie-policy-left").append('\x3cp class\x3d"optanon-cookie-policy-subgroup-description"\x3e' + Ga(e[x]) + "\x3c/p\x3e");
                        E.append('\x3ctd class\x3d"optanon-cookie-policy-right"\x3e\x3c/td\x3e');
                        E.find(".optanon-cookie-policy-right").append('\x3cul class\x3d"optanon-cookie-policy-subgroup-cookies-list"\x3e\x3c/ul\x3e');
                        if (U.IsLifespanEnabled)
                            for (A = 0; A < e[x].Cookies.length; A += 1) {
                                B = e[x].Cookies[A];
                                var G = "",
                                    G = B.IsSession ? U.LifespanTypeText : 0 === B.Length ? "\x3c 1 " + U.LifespanDurationText :
                                    B.Length + " " + U.LifespanDurationText;
                                E.find(".optanon-cookie-policy-subgroup-cookies-list").append((Y ? '\x3cli class\x3d"keep-ltr"\x3e' : "\x3cli\x3e") + B.Name + "\x26nbsp;(" + G + ")\x3c/li\x3e")
                            } else
                                for (A = 0; A < e[x].Cookies.length; A += 1) B = e[x].Cookies[A], E.find(".optanon-cookie-policy-subgroup-cookies-list").append((Y ? '\x3cli class\x3d"keep-ltr"\x3e' : "\x3cli\x3e") + B.Name + "\x3c/li\x3e");
                        t.append(E)
                    }
                    D.append(t)
                }
                z("#optanon-cookie-policy").append(D);
                qb()
            }
        z(window).resize(function() {
            qb()
        })
    }

    function Lb(e) {
        var x =
            K(),
            q = z('\x3cdiv class\x3d"optanon-cookie-list"\x3e\x3c/div\x3e'),
            t = Ya(e),
            A, B;
        (e.Cookies && 0 < e.Cookies.length || t && 0 < t.length) && q.append('\x3ch4 class\x3d"optanon-cookies-used"\x3e' + x.CookiesUsedText + "\x3c/h4\x3e");
        if (e.Cookies && 0 < e.Cookies.length) {
            B = z('\x3cp class\x3d"optanon-group-cookies-list"\x3e\x3c/p\x3e');
            for (x = 0; x < e.Cookies.length; x += 1) A = e.Cookies[x], A = ob(A), B.append(A + (x < e.Cookies.length - 1 ? ", " : ""));
            q.append(B)
        }
        if (t && 0 < t.length)
            for (e = 0; e < t.length; e += 1) x = z('\x3cp class\x3d"optanon-subgroup-cookies-list subgroup-cookies-list"\x3e\x3c/p\x3e'),
                A = pb(t[e]), B = Ga(t[e]), x.append('\x3cspan class\x3d"optanon-subgroup-header"\x3e' + A + (B ? ":" : "") + " \x3c/span\x3e"), A = z('\x3cdiv class\x3d"optanon-subgroup-cookies"\x3e\x3c/div\x3e'), x.append(A), B && x.append('\x3cdiv class\x3d"optanon-subgroup-description"\x3e' + B + "\x3c/div\x3e"), q.append(x);
        return q
    }

    function Ga(e) {
        return e && e.GroupLanguagePropertiesSets && e.GroupLanguagePropertiesSets[0] && e.GroupLanguagePropertiesSets[0].GroupDescription && e.GroupLanguagePropertiesSets[0].GroupDescription.Text ? e.GroupLanguagePropertiesSets[0].GroupDescription.Text.replace(/\r\n/g,
            "\x3cbr\x3e") : ""
    }

    function X(e) {
        return e && e.GroupLanguagePropertiesSets && e.GroupLanguagePropertiesSets[0] && e.GroupLanguagePropertiesSets[0].GroupName ? e.GroupLanguagePropertiesSets[0].GroupName.Text : ""
    }

    function ba(e) {
        var x = K();
        return e && e.GroupLanguagePropertiesSets && e.GroupLanguagePropertiesSets[0] && e.GroupLanguagePropertiesSets[0].DefaultStatus ? rb && x.IsDntEnabled && e.GroupLanguagePropertiesSets[0].IsDntEnabled ? "do not track" : e.GroupLanguagePropertiesSets[0].DefaultStatus.Text : ""
    }

    function pb(e) {
        if (!e) return "";
        var x = X(e);
        e = e.Cookies[0];
        return e ? x = '\x3ca href\x3d"http://cookiepedia.co.uk/host/' + e.Host + '" target\x3d"_blank" style\x3d"text-decoration: underline;"\x3e' + x + "\x3c/a\x3e" : x
    }

    function ob(e) {
        return e ? '\x3ca href\x3d"http://cookiepedia.co.uk/cookies/' + e.Name + '" target\x3d"_blank" style\x3d"text-decoration: underline;"\x3e' + e.Name + "\x3c/a\x3e" : ""
    }

    function qb() {
        z("#optanon-cookie-policy .optanon-cookie-policy-subgroup").each(function() {
            z(this).find(".optanon-cookie-policy-left").height("auto");
            z(this).find(".optanon-cookie-policy-right").height("auto");
            z(this).find(".optanon-cookie-policy-left").height() >= z(this).find(".optanon-cookie-policy-right").height() ? z(this).find(".optanon-cookie-policy-right").height(z(this).find(".optanon-cookie-policy-left").height()) : z(this).find(".optanon-cookie-policy-left").height(z(this).find(".optanon-cookie-policy-right").height())
        })
    }

    function Ob() {
        z("#optanon #optanon-menu li").removeClass("menu-item-selected");
        z("#optanon #optanon-menu li").each(function() {
            z(this).text() == ra && z(this).click()
        });
        Xa();
        var e = z("#optanon-popup-wrapper"),
            x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            q = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        e.css("margin-top", "10px");
        720 > x ? e.css("top", "10px") : e.outerHeight() > q ? e.css("top", Math.max(0, (q - e.outerHeight()) / 2 + z(window).scrollTop()) + "px") : e.css("top", Math.max(0, (q - e.outerHeight()) / 2) + "px");
        x = document.querySelector("#optanon #optanon-popup-bg");
        q = document.querySelector("#optanon #optanon-popup-wrapper");
        x.classList.add("fade-in");
        q.classList.add("fade-in");
        x.style.display = "block";
        q.style.display = "block";
        e.focus()
    }

    function sa(e) {
        var x = K();
        x.ForceConsent ? Za(x.AlertNoticeText) || e !== Ja.KEEPCENTERTILEBANNEROPEN ? z("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400) : (z("#optanon-popup-bg").css({
            "z-index": "7000"
        }), z("#optanon #optanon-popup-wrapper").fadeOut(400)) : z("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").fadeOut(400)
    }

    function sb(e) {
        if (ba(e)) {
            var x = ba(e).toLowerCase();
            e.Parent && (x = ba(e.Parent).toLowerCase());
            return "always active" == x || "inactive landingpage" == x || "active" == x || "do not track" == x && !rb
        }
        return !0
    }

    function tb() {
        var e, x = K(),
            q;
        if (W("OptanonConsent", "groups")) {
            kb = !1;
            W("OptanonConsent", "groups") && !$a && ($a = !0);
            e = !1;
            q = za(W("OptanonConsent", "groups"));
            var t = za(W("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, "")),
                z = K(),
                A, B, D;
            if (W("OptanonConsent", "groups")) {
                for (B = 0; B < z.Groups.length; B += 1) A = z.Groups[B], fa(A) && (D = ha(t, Q(A)), -1 == D && (e = !0, sb(A) ? q.push(Q(A) + ":1") : q.push(Q(A) + ":0")));
                for (B = q.length -
                    1; 0 <= B; --B) {
                    D = !1;
                    for (t = 0; t < z.Groups.length; t += 1)
                        if (A = z.Groups[t], fa(A) && Q(A) == q[B].replace(/:0/g, "").replace(/:1/g, "")) {
                            D = !0;
                            break
                        }
                    D || (e = !0, q.splice(B, 1))
                }
                e && ta("OptanonConsent", q)
            }(P = za(W("OptanonConsent", "groups"))) && x.IsIABEnabled && ab(P)
        } else {
            P = [];
            for (q = 0; q < x.Groups.length; q += 1) e = x.Groups[q], fa(e) && (sb(e) ? (P.push(Q(e) + ":1"), x.IsIABEnabled && Ka(Q(e)) ? la(e, "true") : la(e, "false")) : (P.push(Q(e) + ":0"), x.IsIABEnabled && la(e, "false")));
            $a = !0
        }
        if (x = ja("eupubconsent")) {
            if (e = new consentString.ConsentString(x),
                x = e.getVendorsAllowed(), e && x)
                for (e = 0; e < x.length; e++) L.vendors.push(x[e].toString() + ":true")
        } else ub()
    }

    function vb() {
        var e;
        W("OptanonConsent", "consentId") || ia("OptanonConsent", "consentId", Pb());
        e = W("OptanonConsent", "consentId");
        var x = {
                consentPayload: {
                    identifier: "some identifier",
                    requestInformation: "eyJhbGciOiJSUzUxMiJ9.eyJvdEp3dFZlcnNpb24iOjEsInByb2Nlc3NJZCI6ImU2YTA3MjlkLWU0YmUtNDA5NS05OWY2LTQzNDAyZjcwNGNmMiIsInByb2Nlc3NWZXJzaW9uIjoxLCJpYXQiOiIyMDE5LTAyLTExVDEwOjQ4OjE3LjkwMyIsIm1vYyI6IkNPT0tJRSIsInN1YiI6IkNvb2tpZSBVbmlxdWUgSWQiLCJpc3MiOm51bGwsInRlbmFudElkIjoiOTY1MWUxZjYtYzM1Yi00Mzc3LWJlN2YtNWEwYzkzZjBlY2I4IiwiZGVzY3JpcHRpb24iOiJUaGlzIGNvbGxlY3Rpb24gcG9pbnQgY2FwdHVyZXMgdGhlIGN1cnJlbnQgc2l0ZSB2aXNpdG9yIGNvbnNlbnQgcHJlZmVyZW5jZXMgZm9yIHRoZSBkb21haW4gc3BlY2lmaWVkLiIsImNvbnNlbnRUeXBlIjoiQ09PS0lFQkFOTkVSIiwiZG91YmxlT3B0SW4iOmZhbHNlLCJwb2xpY3lfdXJpIjoiZDU0MjY2MTAtZjJmZC00OTU5LTlmYTktZDMzNDQzYWZiZDJhIiwiYWxsb3dOb3RHaXZlbkNvbnNlbnRzIjpmYWxzZSwicHVycG9zZXMiOlt7ImlkIjoiYTczMWMxZWYtMjEzMS00NjYzLTg0N2MtYTNlYzRiMWI0MzE1IiwidmVyc2lvbiI6MSwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdfV0sImRzRGF0YUVsZW1lbnRzIjpbXX0.O3qxRq82uSDcYoE7-RQwMbCoXvsc08_23EK9jCJ_pnBXAjsZKn5MyYJ3OvKCeWZt6FdgqLOcg9aokwHJWjQZZhe9bKQwSf4f4__77gvdRSAxUhQGjpjfGRkG1wcqmcaaxMoCAFY_OCJ2C62LFZidQEvyi_Tz8BNfc2Fu0cNVXloOjWymQfdWm_-Rshob_gRMcWo-6_Gesj7LlnX63xK53FXdkBZEtO3CjRqNkuL5DvUPzDBuXUQf_Sd1TYC6RVaN9JgGKCEUPhFAwRXWMvR0yvv-41oxBVNVVG3hzVKeTZFUWz7dH5J0b3yK5SMifyf6qRdkE8V_Q8wx_do9DxNceOTnmZDtxbSeRIPqawUA0jvDK2ZK6OY_vl9xinhUHcaYu9FW2FTT93MSt-yNPc3_eP2RNIiEpvJl49S6hPzj36I6Ni1Gzxh6N5oFXgYuPoTGn2a4S-8sglVk7-cfFuvyUkTR1rYiqYxIlfsMfPQVcQk4s-fLuUBGJXOXZDOTAEVvhlPC52SjZ9DqspqsoJN_mZ1G9MxtDS1W5Q4nDV247TVI6KJd6nnku2IG3nf1E4hhd2wYOdFXFlswe4CFIy3oMulHkY8Viu7MPo9tOaG8H0h7IzDuDH8C6nhAINeBFZ0jy-2H8gI7vig3HNhRSKIT1sDPdzmXLgSI5Cz0jIep754",
                    purposes: [{
                        Id: "a731c1ef-2131-4663-847c-a3ec4b1b4315"
                    }],
                    test: !0
                },
                consentApi: "https://privacyportal-eu.onetrust.com/request/v1/consentreceipts"
            },
            q = K();
        x && x.consentApi && e && (x.consentPayload.identifier = e, x.consentPayload.customPayload = {
            activeGroup: P.toString().toLowerCase(),
            Date: new Date,
            language: q.Language.Culture
        }, x.consentPayload.purposes[0].id && (x.consentPayload.purposes[0].Id = x.consentPayload.purposes[0].id, delete x.consentPayload.purposes[0].id), Qb({
            url: x.consentApi,
            type: "post",
            dataType: "json",
            contentType: "application/json",
            success: function(e) {},
            error: function(e) {
                console.log("ERROR", e)
            },
            data: JSON.stringify(x.consentPayload)
        }))
    }

    function wb(e) {
        var x = K(),
            q;
        for (q = 0; q < x.Groups.length; q += 1)
            if (Q(x.Groups[q]) == e) return x.Groups[q]
    }

    function ab(e) {
        for (var x, q = 0; q < e.length; q++)
            if (-1 === e[q].indexOf("_")) {
                var t = e[q].split(":");
                x = wb(t[0]);
                "1" == t[1] && Ka(t[0]) ? la(x, "true") : la(x, "false")
            }
    }

    function la(e, x, q) {
        if (ka(e) && e.Purposes && 0 < e.Purposes.length)
            for (var t = 0; t < e.Purposes.length; t++)
                if (q) {
                    var F = ha(L.purpose,
                        e.Purposes[t].purposes.purposeId + ":" + ("true" != x)); - 1 != F && (L.purpose[F] = e.Purposes[t].purposes.purposeId + ":" + x)
                } else F = ha(L.purpose, e.Purposes[t].purposes.purposeId + ":" + x), -1 == F && L.purpose.push(e.Purposes[t].purposes.purposeId + ":" + x)
    }

    function ub() {
        var e, x = qa();
        if (x && x.activeVendors && 0 < x.activeVendors.length)
            for (e = 0; e < x.activeVendors.length; e++) L.vendors.push(x.activeVendors[e].vendorId.toString() + ":true")
    }

    function ta(e, x) {
        x ? ia(e, "groups", x.toString().toLowerCase()) : ia(e, "groups", P.toString().toLowerCase())
    }

    function jb(e, x, q) {
        var t = {},
            F = ja(e),
            z, A, B, D, E = !1;
        F.split("\x26").forEach(function(e) {
            e.includes(x) && e.split("\x3d")[1] !== q.toString() && (E = !0, D = F.replace(e, x + "\x3d" + q))
        });
        if (E) {
            B = D.split("\x26");
            if (D)
                for (z = 0; z < B.length; z += 1) A = B[z].split("\x3d"), t[decodeURIComponent(A[0])] = decodeURIComponent(A[1]).replace(/\+/g, " ");
            t.datestamp = (new Date).toString();
            t.version = "4.6.0";
            t = xb(t);
            Aa(e, t, 365)
        }
    }

    function ia(e, x, q) {
        var t = {},
            F = ja(e),
            z, A, B = K();
        if (F)
            for (z = F.split("\x26"), F = 0; F < z.length; F += 1) A = z[F].split("\x3d"),
                t[decodeURIComponent(A[0])] = decodeURIComponent(A[1]).replace(/\+/g, " ");
        t[x] = q;
        t.datestamp = (new Date).toString();
        t.version = "4.6.0";
        x = xb(t);
        Aa(e, x, 365);
        "OptanonConsent" === e && B.IsIABEnabled && L && L.purpose && L.vendors && (ma = Oa(), Aa("eupubconsent", ma, 30), B.IsIabThirdPartyCookieEnabled && na && yb("euconsent", ma, 30, !1))
    }

    function W(e, x) {
        var q = ja(e),
            t, z, A;
        if (q) {
            t = {};
            z = q.split("\x26");
            for (q = 0; q < z.length; q += 1) A = z[q].split("\x3d"), t[decodeURIComponent(A[0])] = decodeURIComponent(A[1]).replace(/\+/g, " ");
            return x && t[x] ?
                t[x] : x && !t[x] ? "" : t
        }
        return ""
    }

    function Aa(e, x, q) {
        var t;
        q ? (t = new Date, t.setTime(t.getTime() + 864E5 * q), q = "; expires\x3d" + t.toGMTString()) : q = "";
        t = ["cnn.com"];
        1 >= t.length && (t[1] = "");
        document.cookie = e + "\x3d" + x + q + "; path\x3d/" + t[1] + "; domain\x3d." + t[0]
    }

    function ja(e) {
        e += "\x3d";
        var x = document.cookie.split(";"),
            q, t;
        for (q = 0; q < x.length; q += 1) {
            for (t = x[q];
                " " == t.charAt(0);) t = t.substring(1, t.length);
            if (0 == t.indexOf(e)) return t.substring(e.length, t.length)
        }
        return null
    }

    function yb(e, x, q, t) {
        var F, z, A;
        if (K().IsIabThirdPartyCookieEnabled &&
            document.body) {
            if (!t && "init" !== na) {
                var ea = qa();
                F = new consentString.ConsentString(na);
                x = new consentString.ConsentString(x);
                z = Rb(L.purpose);
                A = ea.activeVendors.map(function(e) {
                    return e.vendorId
                });
                F.allowedPurposeIds = F.allowedPurposeIds.filter(function(e) {
                    return 0 > z.indexOf(e)
                });
                F.allowedVendorIds = F.allowedVendorIds.filter(function(e) {
                    return 0 > A.indexOf(e)
                });
                z = F.allowedPurposeIds.concat(x.allowedPurposeIds);
                A = F.allowedVendorIds.concat(x.allowedVendorIds);
                na = x = Oa(z, A)
            }
            e = window.location.protocol + "//cookies.onetrust.mgr.consensu.org/?name\x3d" +
                e + "\x26value\x3d" + x + "\x26expire\x3d" + q + "\x26isFirstRequest\x3d" + t;
            document.getElementById("onetrustIabCookie") ? document.getElementById("onetrustIabCookie").contentWindow.location.replace(e) : (q = document.createElement("iframe"), q.style.display = "none", q.id = "onetrustIabCookie", q.src = e, document.body.appendChild(q))
        }
    }

    function Na(e, x) {
        var q = null != e && "undefined" != typeof e,
            t, z;
        if (!x) {
            tb();
            t = ua(P, e + ":1");
            a: {
                z = K();
                var A;
                for (A = 0; A < z.Groups.length; A += 1)
                    if (z.Groups[A].CustomGroupId) {
                        if (z.Groups[A].CustomGroupId ==
                            e) {
                            z = !0;
                            break a
                        }
                    } else if (z.Groups[A].OptanonGroupId == e) {
                    z = !0;
                    break a
                }
                z = !1
            }
            z = !z;
            return q && (t && Ka(e) || z) ? !0 : !1
        }
        return !0
    }

    function Ka(e) {
        e = wb(e);
        e = ka(e) ? e : e.Parent;
        return "inactive landingpage" != ba(e).toLowerCase() ? !0 : Wa() ? !1 : !0
    }

    function Wa() {
        var e = W("OptanonConsent", "landingPath");
        return e && e !== location.href ? !1 : !0
    }

    function za(e) {
        return e ? e.toLowerCase().split(",") : []
    }

    function Pa() {
        var e;
        e = K();
        e.CustomJs && (new Function(e.CustomJs))();
        if ("function" == typeof OptanonWrapper && "undefined" != OptanonWrapper) {
            OptanonWrapper();
            for (e = 0; e < Ba.length; e += 1) ua(bb, Ba[e]) || bb.push(Ba[e]);
            Ba = [];
            for (e = 0; e < Ca.length; e += 1) ua(cb, Ca[e]) || cb.push(Ca[e]);
            Ca = []
        }
    }

    function lb(e) {
        e.Groups.unshift({
            GroupLanguagePropertiesSets: [{
                GroupName: {
                    Text: ra
                },
                GroupDescription: {
                    Text: e.MainInfoText
                }
            }]
        })
    }

    function zb(e) {
        if (e = document.getElementById(e))
            for (; e.hasChildNodes();) e.removeChild(e.lastChild)
    }

    function Qa(e) {
        if (e = document.getElementById(e)) e.style.display = "block"
    }

    function Ab(e) {
        (e = document.getElementById(e)) && e.parentNode.removeChild(e)
    }

    function ua(e,
        x) {
        var q;
        for (q = 0; q < e.length; q += 1)
            if (e[q].toString().toLowerCase() == x.toString().toLowerCase()) return !0;
        return !1
    }

    function ha(e, x) {
        var q;
        for (q = 0; q < e.length; q += 1)
            if (e[q] == x) return q;
        return -1
    }

    function Mb(e, x) {
        return -1 != e.indexOf(x, e.length - x.length)
    }

    function xb(e) {
        var x = "",
            q;
        for (q in e) e.hasOwnProperty(q) && ("" != x && (x += "\x26"), x += q + "\x3d" + encodeURIComponent(e[q]).replace(/%20/g, "+"));
        return x
    }

    function Pb() {
        var e = (new Date).getTime();
        "undefined" !== typeof performance && "function" === typeof performance.now &&
            (e += performance.now());
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(x) {
            var q = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            return ("x" === x ? q : q & 3 | 8).toString(16)
        })
    }

    function Bb(e) {
        var x = {};
        e.map(function(e) {
            e = e.split(":");
            x[parseInt(e[0])] = "true" === e[1]
        });
        return x
    }

    function Cb(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }

    function Db(e) {
        var x = [];
        e.forEach(function(e) {
            0 > x.indexOf(e) && x.push(e)
        });
        return x
    }

    function Rb(e) {
        return e.map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }

    function Xa() {
        var e = 0,
            q, t = K(),
            A;
        for (A = 0; A < t.Groups.length; A += 1)
            if (q = t.Groups[A], fa(q) && ua(P, Q(q) + ":0") && (e += 1, 1 <= e)) return z("#optanon .optanon-allow-all-button").show(), !0;
        z("#optanon .optanon-allow-all-button").hide();
        return !1
    }

    function mb(e, q) {
        z(".optanon-alert-box-wrapper").fadeOut(400);
        e && (Eb || !Eb && !Optanon.IsAlertBoxClosedAndValid()) && Optanon.SetAlertBoxClosed(q)
    }

    function fa(e) {
        var q, t = K(),
            z = !1,
            A, B, D = null != e.Cookies && 0 < e.Cookies.length;
        if (ka(e)) {
            A = e.Purposes && 0 < e.Purposes.length && t.IsIABEnabled;
            for (B = 0; B < t.Groups.length; B += 1) {
                q = t.Groups[B];
                var E = null != q.Cookies && 0 < q.Cookies.length;
                if (null != q.Parent && X(e) && X(q.Parent) == X(e) && q.ShowInPopup && E) {
                    z = !0;
                    break
                }
            }
            return e.ShowInPopup && (D || z || A)
        }
        return e.ShowInPopup && D
    }

    function ka(e) {
        return e && null == e.Parent
    }

    function Ya(e) {
        var q, t = K(),
            z = [],
            A;
        for (A = 0; A < t.Groups.length; A += 1) {
            q = t.Groups[A];
            var B = null != q.Cookies && 0 < q.Cookies.length;
            null != q.Parent && X(q.Parent) == X(e) && q.ShowInPopup && B && z.push(q)
        }
        return z
    }

    function K() {
        db || (db = {
            cctId: "d5426610-f2fd-4959-9fa9-d33443afbd2a",
            euOnly: !1,
            MainText: "Privacy Preference Center",
            MainInfoText: "When you visit our web site, we may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalised web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, if you disable the use of cookies in your browser, it may impact your experience of the site and the services we are able to offer.",
            AboutText: "Cookie Policy",
            AboutCookiesText: "Your Privacy",
            ConfirmText: "Accept all",
            AllowAllText: "Save preferences",
            CookiesUsedText: "Cookies used",
            ShowAlertNotice: !0,
            AboutLink: "https://www.cnn.com/privacy#turner_cookies",
            HideToolbarCookieList: !1,
            ActiveText: "Active",
            AlwaysActiveText: "Always Active",
            AlertNoticeText: 'We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and advertising. To manage or opt out of the use of cookies \x3ca href\x3d"//www.cnn.com/cookie" onclick\x3d"javascript:OneTrust.ToggleInfoDisplay(); return false"\x3eclick here\x3c/a\x3e.  By continuing to use this website or closing this banner, you accept our use of \x3ca href\x3d"//www.cnn.com/cookie" onclick\x3d"javascript:OneTrust.ToggleInfoDisplay(); return false"\x3efirst and third-party cookies\x3c/a\x3e',
            AlertCloseText: "Close",
            AlertMoreInfoText: "More information",
            AlertAllowCookiesText: "I accept",
            CloseShouldAcceptAllCookies: !0,
            LastReconsentDate: 1551230281820,
            BannerTitle: "",
            ForceConsent: !1,
            InactiveText: "Inactive",
            CookiesText: "Cookies",
            CategoriesText: "Categories",
            HasScriptArchive: !0,
            IsLifespanEnabled: !1,
            LifespanText: "Lifespan",
            IsIABEnabled: !0,
            VendorLevelOptOut: !0,
            Groups: [{
                    ShowInPopup: !0,
                    Order: 0,
                    OptanonGroupId: 1,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Always Active"
                        },
                        GroupDescription: {
                            Text: "These cookies are necessary for the website to function and cannot be switched off in our systems.  These are used to let you login, to ensure site security and to provide shopping cart functionality. Without this type of technology, our Services won't work properly or won't be able to provide certain features and functionalities."
                        },
                        GroupName: {
                            Text: "Strictly Necessary Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "OptanonConsent",
                        Host: "cnn.com",
                        IsSession: !1,
                        Length: 365
                    }, {
                        Name: "OptanonAlertBoxClosed",
                        Host: "cnn.com",
                        IsSession: !1,
                        Length: 365
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5227
                }, {
                    ShowInPopup: !0,
                    Order: 1,
                    OptanonGroupId: 2,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive LandingPage"
                        },
                        GroupDescription: {
                            Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                        },
                        GroupName: {
                            Text: "Performance Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5223
                }, {
                    ShowInPopup: !0,
                    Order: 2,
                    OptanonGroupId: 3,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive LandingPage"
                        },
                        GroupDescription: {
                            Text: "These cookies are used to remember choices you have made such as language or region, and to provide personalized content recommendations."
                        },
                        GroupName: {
                            Text: "Personalisation Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5224
                }, {
                    ShowInPopup: !0,
                    Order: 3,
                    OptanonGroupId: 4,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive LandingPage"
                        },
                        GroupDescription: {
                            Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                        },
                        GroupName: {
                            Text: "Advertising Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [{
                            purposes: {
                                purposeId: 5,
                                purposeName: "Measurement",
                                description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                            }
                        },
                        {
                            purposes: {
                                purposeId: 1,
                                purposeName: "Information storage and access",
                                description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                            }
                        }, {
                            purposes: {
                                purposeId: 2,
                                purposeName: "Personalisation",
                                description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                            }
                        },
                        {
                            purposes: {
                                purposeId: 3,
                                purposeName: "Ad selection, delivery, reporting",
                                description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                            }
                        },
                        {
                            purposes: {
                                purposeId: 4,
                                purposeName: "Content selection, delivery, reporting",
                                description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                            }
                        }
                    ],
                    CustomGroupId: null,
                    GroupId: 5225
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 100,
                        OptanonGroupId: 8,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used by social media services to enable you to share our content with your friends and networks.  These cookies may track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites you visit."
                            },
                            GroupName: {
                                Text: "Social Media Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5226
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Facebook"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "datr",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 409
                    }, {
                        Name: "fr",
                        Host: ".facebook.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "lu",
                        Host: "www.facebook.com",
                        IsSession: !1,
                        Length: 2915109
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73551
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "MediaMath Inc."
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "uuidc",
                        Host: ".mathtag.com",
                        IsSession: !1,
                        Length: 392
                    }, {
                        Name: "uuid",
                        Host: ".mathtag.com",
                        IsSession: !1,
                        Length: 392
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37178
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Audience Manager"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "dpm",
                        Host: ".dpm.demdex.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37174
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to remember choices you have made such as language or region, and to provide personalized content recommendations."
                            },
                            GroupName: {
                                Text: "Personalisation Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5224
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Gigya"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "gig_hasGmid",
                        Host: ".cnn.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73737
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Site Catalyst"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "s_ppv",
                        Host: ".cnn.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73762
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Chartbeat"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_chartbeat2",
                        Host: "edition.cnn.com",
                        IsSession: !1,
                        Length: 394
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73733
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Turn"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "uid",
                        Host: ".turn.com",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37179
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "OpenX"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "pd",
                        Host: ".openx.net",
                        IsSession: !1,
                        Length: 14
                    }, {
                        Name: "i",
                        Host: ".openx.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37175
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Site Catalyst"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "s_cc",
                        Host: ".cnn.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73736
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Bid Switch"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "c",
                        Host: ".bidswitch.net",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "tuuid_lu",
                        Host: ".bidswitch.net",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "tuuid",
                        Host: ".bidswitch.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37171
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Optimizely"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "optimizelyEndUserId",
                        Host: ".cnn.com",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73732
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Chartbeat"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_cb_ls",
                        Host: "money.cnn.com",
                        IsSession: !1,
                        Length: 394
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73761
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Chartbeat"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_chartbeat4",
                        Host: "money.cnn.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73749
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "4finance"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "bsw_uid",
                        Host: "rtb.4finance.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "tuuid_lu",
                        Host: "rtb.4finance.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "tuuid",
                        Host: "rtb.4finance.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37184
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            }, {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "everest_g_v2",
                        Host: ".everesttech.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37180
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Bing"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "MUIDB",
                        Host: "bat.bing.com",
                        IsSession: !1,
                        Length: 389
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37176
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Site Catalyst"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "s_sq",
                        Host: ".cnn.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73735
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "BlueKai"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "bku",
                        Host: ".bluekai.com",
                        IsSession: !1,
                        Length: 179
                    }, {
                        Name: "bkdc",
                        Host: ".bluekai.com",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37172
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Twitter Analytics"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "lang",
                        Host: "analytics.twitter.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73731
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Site Catalyst"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "s_fid",
                        Host: ".cnn.com",
                        IsSession: !1,
                        Length: 730
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73764
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "DoubleClick"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "GED_PLAYLIST_ACTIVITY",
                        Host: "edition.cnn.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73748
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Bing"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_uetsid",
                        Host: ".cnn.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73552
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adelphic"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "cu",
                        Host: ".ipredictive.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37181
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to remember choices you have made such as language or region, and to provide personalized content recommendations."
                            },
                            GroupName: {
                                Text: "Personalisation Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5224
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Microsoft MSN"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_cb_svref",
                        Host: "money.cnn.com",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73738
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 100,
                        OptanonGroupId: 8,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used by social media services to enable you to share our content with your friends and networks.  These cookies may track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites you visit."
                            },
                            GroupName: {
                                Text: "Social Media Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5226
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Twitter"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "auth_token",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 5394
                        }, {
                            Name: "twll",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 1742
                        }, {
                            Name: "secure_session",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 5394
                        }, {
                            Name: "guest_id",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 409
                        }, {
                            Name: "__utma",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 409
                        }, {
                            Name: "personalization_id",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 729
                        }, {
                            Name: "remember_checked",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 1742
                        },
                        {
                            Name: "remember_checked_on",
                            Host: ".twitter.com",
                            IsSession: !1,
                            Length: 1742
                        }
                    ],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 53714
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Beemray"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "beemraycookie_beemray",
                        Host: "edition.cnn.com",
                        IsSession: !1,
                        Length: 3649
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73734
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 2,
                        OptanonGroupId: 3,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to remember choices you have made such as language or region, and to provide personalized content recommendations."
                            },
                            GroupName: {
                                Text: "Personalisation Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5224
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "ShareThis"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_stid",
                        Host: ".bea4.cnn.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73763
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Audience Manager"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "demdex",
                        Host: ".demdex.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 37173
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 1,
                        OptanonGroupId: 2,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to analyse how visitors use a website, for instance which pages visitors visit most often, in order to provide a better user experience. We also use this technology to check if you have opened our emails, so we can see if they are being delivered correctly and are of interest."
                            },
                            GroupName: {
                                Text: "Performance Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [],
                        CustomGroupId: null,
                        GroupId: 5223
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Adobe Site Catalyst"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "s_vi",
                        Host: "cnn.com",
                        IsSession: !1,
                        Length: 2915109
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73751
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 0,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Google"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "GoogleAdServingTest",
                        Host: "edition.cnn.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 73747
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 8,
                    Parent: null,
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Inactive LandingPage"
                        },
                        GroupDescription: {
                            Text: "These cookies are used by social media services to enable you to share our content with your friends and networks.  These cookies may track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites you visit."
                        },
                        GroupName: {
                            Text: "Social Media Cookies"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5226
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 103,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "YouTube"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "SID",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 542
                    }, {
                        Name: "HSID",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 542
                    }, {
                        Name: "demographics",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 352
                    }, {
                        Name: "VISITOR_INFO1_LIVE",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 55
                    }, {
                        Name: "PREF",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 1872
                    }, {
                        Name: "APISID",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 542
                    }, {
                        Name: "SSID",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 542
                    }, {
                        Name: "LOGIN_INFO",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "YSC",
                        Host: ".youtube.com",
                        IsSession: !0,
                        Length: 0
                    }, {
                        Name: "SAPISID",
                        Host: ".youtube.com",
                        IsSession: !1,
                        Length: 542
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5230
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 104,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "The Trade Desk"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "TDID",
                        Host: ".adsrvr.org",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "TDCPM",
                        Host: ".adsrvr.org",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5231
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 105,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Rubicon"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "rsid",
                            Host: ".rubiconproject.com",
                            IsSession: !0,
                            Length: 0
                        }, {
                            Name: "khaos",
                            Host: ".rubiconproject.com",
                            IsSession: !1,
                            Length: 364
                        }, {
                            Name: "audit",
                            Host: ".rubiconproject.com",
                            IsSession: !1,
                            Length: 364
                        }, {
                            Name: "ruid",
                            Host: ".rubiconproject.com",
                            IsSession: !1,
                            Length: 2915109
                        }, {
                            Name: "ses15",
                            Host: ".rubiconproject.com",
                            IsSession: !1,
                            Length: 1
                        },
                        {
                            Name: "vis15",
                            Host: ".rubiconproject.com",
                            IsSession: !1,
                            Length: 1
                        }
                    ],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5232
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 106,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Outbrain"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                            Name: "apnxs",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "rcktfl",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "mdfrc",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "_ofcap_DOC1",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 6
                        }, {
                            Name: "recs_ead689848469074a23553ed41d5ce4c2",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 0
                        },
                        {
                            Name: "obuid",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "cdws",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "ttd",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "bdswch",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "recs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                            Host: "outbrain.com",
                            IsSession: !1,
                            Length: 2915109
                        }, {
                            Name: "obuidt_7ee8e34411c4",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }, {
                            Name: "obuidt_ace41b59309f",
                            Host: ".outbrain.com",
                            IsSession: !1,
                            Length: 89
                        }
                    ],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5233
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 107,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Tapad"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "TapAd_DID",
                        Host: ".tapad.com",
                        IsSession: !1,
                        Length: 59
                    }, {
                        Name: "TapAd_TS",
                        Host: ".tapad.com",
                        IsSession: !1,
                        Length: 59
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5234
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 108,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Nielsen"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "V5",
                        Host: ".imrworldwide.com",
                        IsSession: !1,
                        Length: 542
                    }, {
                        Name: "IMRID",
                        Host: ".imrworldwide.com",
                        IsSession: !1,
                        Length: 542
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5235
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 109,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Casale Media"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "CMPRO",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "CMID",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "CMDD",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "CMST",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "CMPS",
                        Host: ".casalemedia.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "CMSC",
                        Host: ".casalemedia.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5236
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 110,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Media.net"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "visitor-id",
                        Host: ".media.net",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5237
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 112,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Datalogix"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "na_id",
                        Host: ".nexac.com",
                        IsSession: !1,
                        Length: 730
                    }, {
                        Name: "na_tc",
                        Host: ".nexac.com",
                        IsSession: !1,
                        Length: 730
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5239
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 113,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Sizmek"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "A6",
                        Host: ".serving-sys.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "u2",
                        Host: ".serving-sys.com",
                        IsSession: !1,
                        Length: 89
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5240
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 114,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Google.com"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "APISID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 541
                    }, {
                        Name: "SSID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 541
                    }, {
                        Name: "SID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 541
                    }, {
                        Name: "SAPISID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 541
                    }, {
                        Name: "HSID",
                        Host: ".google.com",
                        IsSession: !1,
                        Length: 541
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5241
                },
                {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 115,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Media Innovation Group"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "id",
                        Host: ".mookie1.com",
                        IsSession: !1,
                        Length: 394
                    }, {
                        Name: "mdata",
                        Host: ".mookie1.com",
                        IsSession: !1,
                        Length: 394
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5242
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 116,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Bombora"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "u",
                        Host: ".ml314.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "pi",
                        Host: ".ml314.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5243
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 117,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Gigya"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "ucid",
                        Host: ".gigya.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "gmid",
                        Host: ".gigya.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "hasGmid",
                        Host: ".gigya.com",
                        IsSession: !1,
                        Length: 180
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5244
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 118,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "MarkMonitor"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_gat_gtag_UA_106148096_3",
                        Host: ".2mdn.net",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "_ga",
                        Host: ".2mdn.net",
                        IsSession: !1,
                        Length: 729
                    }, {
                        Name: "_gid",
                        Host: ".2mdn.net",
                        IsSession: !1,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5245
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 119,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            }, {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Google"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "NID",
                        Host: ".gstatic.com",
                        IsSession: !1,
                        Length: 182
                    }, {
                        Name: "CONSENT",
                        Host: ".gstatic.com",
                        IsSession: !1,
                        Length: 7182
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5246
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 120,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "SkimLinks"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "skimSESS",
                        Host: ".skimresources.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "skimCSP",
                        Host: ".skimresources.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "skimORIGIN",
                        Host: ".skimresources.com",
                        IsSession: !1,
                        Length: 364
                    }, {
                        Name: "skimGUID",
                        Host: ".skimresources.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5247
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 121,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Rocketfuel"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rud",
                        Host: ".rfihub.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "eud",
                        Host: ".rfihub.com",
                        IsSession: !1,
                        Length: 389
                    }, {
                        Name: "ruds",
                        Host: ".rfihub.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5248
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 122,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "ComScore"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "UID",
                        Host: ".scorecardresearch.com",
                        IsSession: !1,
                        Length: 719
                    }, {
                        Name: "UIDR",
                        Host: ".scorecardresearch.com",
                        IsSession: !1,
                        Length: 719
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5249
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 123,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Twitter"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "lang",
                        Host: "syndication.twitter.com",
                        IsSession: !0,
                        Length: 0
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5250
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 124,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Live Ramp Inc"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "rtn1-z",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 179
                    }, {
                        Name: "ck1",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 179
                    }, {
                        Name: "rlas3",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 179
                    }, {
                        Name: "drtn13754081",
                        Host: ".rlcdn.com",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5251
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 125,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Krux"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "_kuid_",
                        Host: ".krxd.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5252
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 126,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Amazon"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "ad-id",
                        Host: ".amazon-adsystem.com",
                        IsSession: !1,
                        Length: 199
                    }, {
                        Name: "ad-privacy",
                        Host: ".amazon-adsystem.com",
                        IsSession: !1,
                        Length: 199
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5253
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 127,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "AppNexus Inc"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "sess",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "uuid2",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "anj",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 89
                    }, {
                        Name: "icu",
                        Host: ".adnxs.com",
                        IsSession: !1,
                        Length: 89
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5254
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 128,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            }, {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Semasio"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "SEUNCY",
                        Host: ".semasio.net",
                        IsSession: !1,
                        Length: 179
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5255
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 129,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "DoubleClick"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "DSID",
                        Host: ".doubleclick.net",
                        IsSession: !1,
                        Length: 0
                    }, {
                        Name: "id",
                        Host: ".doubleclick.net",
                        IsSession: !1,
                        Length: 541
                    }, {
                        Name: "IDE",
                        Host: ".doubleclick.net",
                        IsSession: !1,
                        Length: 2915109
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5256
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 131,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            }, {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Criteo"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "uid",
                        Host: ".criteo.com",
                        IsSession: !1,
                        Length: 364
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5258
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 132,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "Quantcast"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "mc",
                        Host: ".quantserve.com",
                        IsSession: !1,
                        Length: 395
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5259
                }, {
                    ShowInPopup: !0,
                    Order: 100,
                    OptanonGroupId: 133,
                    Parent: {
                        ShowInPopup: !0,
                        Order: 3,
                        OptanonGroupId: 4,
                        Parent: null,
                        GroupLanguagePropertiesSets: [{
                            DefaultStatus: {
                                Text: "Inactive LandingPage"
                            },
                            GroupDescription: {
                                Text: "These cookies are used to limit the number of times you see an advertisement, or to customize advertising across our Services and make it more relevant to you and to allow us to measure the effectiveness of advertising campaigns and track whether ads have been properly displayed."
                            },
                            GroupName: {
                                Text: "Advertising Cookies"
                            },
                            IsDntEnabled: !1
                        }],
                        Cookies: [],
                        Purposes: [{
                                purposes: {
                                    purposeId: 5,
                                    purposeName: "Measurement",
                                    description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 1,
                                    purposeName: "Information storage and access",
                                    description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
                                }
                            }, {
                                purposes: {
                                    purposeId: 2,
                                    purposeName: "Personalisation",
                                    description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 3,
                                    purposeName: "Ad selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
                                }
                            },
                            {
                                purposes: {
                                    purposeId: 4,
                                    purposeName: "Content selection, delivery, reporting",
                                    description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
                                }
                            }
                        ],
                        CustomGroupId: null,
                        GroupId: 5225
                    },
                    GroupLanguagePropertiesSets: [{
                        DefaultStatus: {
                            Text: "Active"
                        },
                        GroupDescription: {
                            Text: ""
                        },
                        GroupName: {
                            Text: "24/7 Media"
                        },
                        IsDntEnabled: !1
                    }],
                    Cookies: [{
                        Name: "OAX",
                        Host: ".247realmedia.com",
                        IsSession: !1,
                        Length: 730
                    }],
                    Purposes: [],
                    CustomGroupId: null,
                    GroupId: 5260
                }
            ],
            ConsentModel: {
                Name: "Owner Defined"
            },
            Language: {
                Culture: "en-GB"
            },
            showBannerCloseButton: !0,
            ShowPreferenceCenterCloseButton: !0,
            FooterDescriptionText: "",
            IsDntEnabled: !1,
            CustomJs: null,
            LifespanTypeText: null,
            LifespanDurationText: null,
            IsConsentLoggingEnabled: !0,
            IsIabThirdPartyCookieEnabled: !1,
            CloseText: "Close",
            BannerCloseButtonText: "Close",
            OnClickAcceptAllCookies: !0,
            ScrollAcceptsAllCookiesAndClosesBanner: !1
        });
        return db
    }

    function qa() {
        var e = {
            cookieVersion: "1",
            createdTime: "2019-03-22T12:46:16.629",
            updatedTime: "2019-03-22T12:46:16.629",
            cmpId: "28",
            cmpVersion: "1",
            consentScreen: "1",
            consentLanguage: "en",
            vendorListVersion: 138,
            maxVendorId: 604,
            encodingType: "0",
            vendorLevelOptOut: !0,
            activeVendors: [{
                    vendorId: 141,
                    vendorName: "1020, Inc. dba Placecast and Ericsson Emodo",
                    policyUrl: "https://www.ericsson-emodo.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 141
                }, {
                    vendorId: 58,
                    vendorName: "33Across",
                    policyUrl: "http://www.33across.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 58
                }, {
                    vendorId: 272,
                    vendorName: "A.Mob",
                    policyUrl: "https://www.we-are-adot.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 272
                }, {
                    vendorId: 518,
                    vendorName: "Accelerize Inc.",
                    policyUrl: "https://getcake.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 518
                }, {
                    vendorId: 318,
                    vendorName: "Accorp Sp. z o.o.",
                    policyUrl: "http://www.instytut-pollster.pl/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 318
                }, {
                    vendorId: 231,
                    vendorName: "Acuityads Inc.",
                    policyUrl: "https://www.acuityads.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 231
                }, {
                    vendorId: 331,
                    vendorName: "ad6media",
                    policyUrl: "https://www.ad6media.fr/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 331
                }, {
                    vendorId: 57,
                    vendorName: "ADARA MEDIA UNLIMITED",
                    policyUrl: "https://adara.com/privacy-promise/",
                    "new": !1,
                    deleted: !1,
                    id: 57
                }, {
                    vendorId: 377,
                    vendorName: "AddApptr GmbH",
                    policyUrl: "https://www.addapptr.com/data-privacy",
                    "new": !1,
                    deleted: !1,
                    id: 377
                },
                {
                    vendorId: 196,
                    vendorName: "AdElement Media Solutions Pvt Ltd",
                    policyUrl: "http://adelement.com/privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 196
                }, {
                    vendorId: 320,
                    vendorName: "Adelphic LLC",
                    policyUrl: "https://adelphic.com/platform/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 320
                }, {
                    vendorId: 50,
                    vendorName: "Adform A/S",
                    policyUrl: "https://site.adform.com/privacy-policy-opt-out/",
                    "new": !1,
                    deleted: !1,
                    id: 50
                }, {
                    vendorId: 553,
                    vendorName: "Adhese",
                    policyUrl: "https://adhese.com/privacy-and-cookie-policy",
                    "new": !1,
                    deleted: !1,
                    id: 553
                },
                {
                    vendorId: 556,
                    vendorName: "adhood.com",
                    policyUrl: "http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang\x3den",
                    "new": !1,
                    deleted: !1,
                    id: 556
                }, {
                    vendorId: 15,
                    vendorName: "Adikteev",
                    policyUrl: "https://www.adikteev.com/eu/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 15
                }, {
                    vendorId: 454,
                    vendorName: "Adimo",
                    policyUrl: "https://adimo.co/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 454
                }, {
                    vendorId: 39,
                    vendorName: "ADITION technologies AG",
                    policyUrl: "https://www.adition.com/datenschutz",
                    "new": !1,
                    deleted: !1,
                    id: 39
                }, {
                    vendorId: 14,
                    vendorName: "Adkernel LLC",
                    policyUrl: "http://adkernel.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 14
                }, {
                    vendorId: 47,
                    vendorName: "ADMAN - Phaistos Networks, S.A.",
                    policyUrl: "http://www.adman.gr/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 47
                }, {
                    vendorId: 149,
                    vendorName: "ADman Interactive SL",
                    policyUrl: "http://admanmedia.com/politica",
                    "new": !1,
                    deleted: !1,
                    id: 149
                }, {
                    vendorId: 9,
                    vendorName: "AdMaxim Inc.",
                    policyUrl: "http://www.admaxim.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 9
                }, {
                    vendorId: 22,
                    vendorName: "admetrics GmbH",
                    policyUrl: "https://admetrics.io/en/privacy_policy/",
                    "new": !1,
                    deleted: !1,
                    id: 22
                }, {
                    vendorId: 511,
                    vendorName: "Admixer EU GmbH",
                    policyUrl: "https://admixer.net/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 511
                }, {
                    vendorId: 74,
                    vendorName: "Admotion SRL",
                    policyUrl: "http://www.admotion.com/policy/",
                    "new": !1,
                    deleted: !1,
                    id: 74
                }, {
                    vendorId: 264,
                    vendorName: "Adobe Advertising Cloud",
                    policyUrl: "https://www.adobe.com/nz/privacy/marketing-cloud.html",
                    "new": !1,
                    deleted: !1,
                    id: 264
                }, {
                    vendorId: 565,
                    vendorName: "Adobe Audience Manager",
                    policyUrl: "https://www.adobe.com/privacy/policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 565
                }, {
                    vendorId: 130,
                    vendorName: "AdRoll Inc",
                    policyUrl: "https://www.adrollgroup.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 130
                }, {
                    vendorId: 224,
                    vendorName: "adrule mobile GmbH",
                    policyUrl: "https://www.adrule.net/de/datenschutz/",
                    "new": !1,
                    deleted: !1,
                    id: 224
                }, {
                    vendorId: 6,
                    vendorName: "AdSpirit GmbH",
                    policyUrl: "http://www.adspirit.de/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 6
                }, {
                    vendorId: 66,
                    vendorName: "adsquare GmbH",
                    policyUrl: "https://www.adsquare.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 66
                }, {
                    vendorId: 410,
                    vendorName: "Adtelligent Inc.",
                    policyUrl: "https://adtelligent.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 410
                }, {
                    vendorId: 211,
                    vendorName: "AdTheorent, Inc",
                    policyUrl: "http://adtheorent.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 211
                }, {
                    vendorId: 326,
                    vendorName: "AdTiming Technology Company Limited",
                    policyUrl: "http://www.adtiming.com/en/privacypolicy.html",
                    "new": !1,
                    deleted: !1,
                    id: 326
                }, {
                    vendorId: 199,
                    vendorName: "ADUX",
                    policyUrl: "http://www.adux.com/donnees-personelles/",
                    "new": !1,
                    deleted: !1,
                    id: 199
                }, {
                    vendorId: 27,
                    vendorName: "ADventori SAS",
                    policyUrl: "https://www.adventori.com/with-us/legal-notice/",
                    "new": !1,
                    deleted: !1,
                    id: 27
                }, {
                    vendorId: 41,
                    vendorName: "Adverline",
                    policyUrl: "https://www.adverline.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 41
                }, {
                    vendorId: 259,
                    vendorName: "ADYOULIKE SA",
                    policyUrl: "https://www.adyoulike.com/privacy_policy.php",
                    "new": !1,
                    deleted: !1,
                    id: 259
                }, {
                    vendorId: 359,
                    vendorName: "Aerserv LLC",
                    policyUrl: "https://www.aerserv.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 359
                }, {
                    vendorId: 3,
                    vendorName: "affilinet",
                    policyUrl: "https://www.affili.net/de/footeritem/datenschutz",
                    "new": !1,
                    deleted: !1,
                    id: 3
                }, {
                    vendorId: 501,
                    vendorName: "Alliance Gravity Data Media",
                    policyUrl: "https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles",
                    "new": !1,
                    deleted: !1,
                    id: 501
                }, {
                    vendorId: 23,
                    vendorName: "Amobee, Inc. ",
                    policyUrl: "https://www.amobee.com/trust/privacy-guidelines",
                    "new": !1,
                    deleted: !1,
                    id: 23
                }, {
                    vendorId: 155,
                    vendorName: "AntVoice",
                    policyUrl: "https://www.antvoice.com/en/privacypolicy/",
                    "new": !1,
                    deleted: !1,
                    id: 155
                }, {
                    vendorId: 354,
                    vendorName: "Apester Ltd",
                    policyUrl: "https://apester.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 354
                }, {
                    vendorId: 528,
                    vendorName: "AppLift GmbH ",
                    policyUrl: "https://www.applift.com/privacy-notice",
                    "new": !1,
                    deleted: !1,
                    id: 528
                }, {
                    vendorId: 32,
                    vendorName: "AppNexus Inc.",
                    policyUrl: "https://www.appnexus.com/en/company/platform-privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 32
                }, {
                    vendorId: 495,
                    vendorName: "Arcspire Limited",
                    policyUrl: "https://s3.eu-west-2.amazonaws.com/public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 495
                }, {
                    vendorId: 215,
                    vendorName: "ARMIS SAS",
                    policyUrl: "https://armis.tech/en/armis-personal-data-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 215
                }, {
                    vendorId: 509,
                    vendorName: "ATG Ad Tech Group GmbH",
                    policyUrl: "http://advandeo.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 509
                }, {
                    vendorId: 394,
                    vendorName: "AudienceProject Aps",
                    policyUrl: "https://privacy.audienceproject.com",
                    "new": !1,
                    deleted: !1,
                    id: 394
                }, {
                    vendorId: 167,
                    vendorName: "Audiens S.r.l.",
                    policyUrl: "http://www.audiens.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 167
                }, {
                    vendorId: 598,
                    vendorName: "audio content \x26amp; control GmbH",
                    policyUrl: "https://www.audio-cc.com/audiocc_privacy_policy.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 598
                }, {
                    vendorId: 496,
                    vendorName: "Automattic Inc.",
                    policyUrl: "https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 496
                }, {
                    vendorId: 122,
                    vendorName: "Avid Media Ltd",
                    policyUrl: "http://www.avidglobalmedia.eu/privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 122
                }, {
                    vendorId: 461,
                    vendorName: "B2B Media Group EMEA GmbH",
                    policyUrl: "https://www.selfcampaign.com/static/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 461
                }, {
                    vendorId: 549,
                    vendorName: "Bandsintown Amplified LLC",
                    policyUrl: "http://corp.bandsintown.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 549
                }, {
                    vendorId: 38,
                    vendorName: "Beemray Oy",
                    policyUrl: "https://www.beemray.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 38
                }, {
                    vendorId: 12,
                    vendorName: "BeeswaxIO Corporation",
                    policyUrl: "https://www.beeswax.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 12
                }, {
                    vendorId: 389,
                    vendorName: "Bidmanagement GmbH",
                    policyUrl: "https://www.adspert.net/en/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 389
                }, {
                    vendorId: 462,
                    vendorName: "bidstack ltd",
                    policyUrl: "https://bidstack.com/policy/",
                    "new": !1,
                    deleted: !1,
                    id: 462
                }, {
                    vendorId: 128,
                    vendorName: "BIDSWITCH GmbH",
                    policyUrl: "http://www.bidswitch.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 128
                }, {
                    vendorId: 185,
                    vendorName: "Bidtellect, Inc",
                    policyUrl: "https://www.bidtellect.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 185
                }, {
                    vendorId: 30,
                    vendorName: "BidTheatre AB",
                    policyUrl: "https://www.bidtheatre.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 30
                }, {
                    vendorId: 439,
                    vendorName: "Bit Q Holdings Limited",
                    policyUrl: "https://bitqueen.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 439
                }, {
                    vendorId: 94,
                    vendorName: "Blis Media Limited",
                    policyUrl: "http://www.blis.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 94
                }, {
                    vendorId: 374,
                    vendorName: "Bmind a Sales Maker Company, S.L.",
                    policyUrl: "http://www.bmind.es/legal-notice/",
                    "new": !1,
                    deleted: !1,
                    id: 374
                }, {
                    vendorId: 163,
                    vendorName: "Bombora Inc.",
                    policyUrl: "https://bombora.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 163
                }, {
                    vendorId: 256,
                    vendorName: "Bounce Exchange, Inc",
                    policyUrl: "https://www.bouncex.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 256
                }, {
                    vendorId: 422,
                    vendorName: "Brand Metrics Sweden AB",
                    policyUrl: "https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 422
                }, {
                    vendorId: 235,
                    vendorName: "Bucksense Inc",
                    policyUrl: "http://www.bucksense.com/platform-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 235
                }, {
                    vendorId: 494,
                    vendorName: "Cablato Limited",
                    policyUrl: "https://cablato.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 494
                }, {
                    vendorId: 2,
                    vendorName: "Captify Technologies Limited",
                    policyUrl: "http://www.captify.co.uk/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 2
                }, {
                    vendorId: 315,
                    vendorName: "Celtra, Inc.",
                    policyUrl: "https://www.celtra.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 315
                }, {
                    vendorId: 156,
                    vendorName: "Centro, Inc.",
                    policyUrl: "https://www.centro.net/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 156
                }, {
                    vendorId: 520,
                    vendorName: "ChannelSight ",
                    policyUrl: "https://www.channelsight.com/privacypolicy/",
                    "new": !1,
                    deleted: !1,
                    id: 520
                }, {
                    vendorId: 519,
                    vendorName: "Chargeads",
                    policyUrl: "https://www.chargeplatform.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 519
                }, {
                    vendorId: 572,
                    vendorName: "CHEQ AI TECHNOLOGIES LTD.",
                    policyUrl: "http://www.cheq.ai/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 572
                }, {
                    vendorId: 493,
                    vendorName: "Clicksco Digital Limited",
                    policyUrl: "https://carbondmp.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 493
                }, {
                    vendorId: 319,
                    vendorName: "Clipcentric, Inc.",
                    policyUrl: "https://clipcentric.com/privacy.bhtml",
                    "new": !1,
                    deleted: !1,
                    id: 319
                }, {
                    vendorId: 243,
                    vendorName: "Cloud Technologies S.A.",
                    policyUrl: "http://onaudience.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 243
                }, {
                    vendorId: 277,
                    vendorName: "Codewise Sp. z o.o. Sp. k",
                    policyUrl: "https://voluumdsp.com/end-user-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 277
                },
                {
                    vendorId: 179,
                    vendorName: "Collective Europe Ltd.",
                    policyUrl: "https://www.timeincuk.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 179
                }, {
                    vendorId: 182,
                    vendorName: "Collective, Inc. dba Visto",
                    policyUrl: "https://www.vistohub.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 182
                }, {
                    vendorId: 592,
                    vendorName: "Colpirio.com",
                    policyUrl: "https://privacy-policy.colpirio.com/en/",
                    "new": !1,
                    deleted: !1,
                    id: 592
                }, {
                    vendorId: 285,
                    vendorName: "Comcast International France SAS",
                    policyUrl: "http://freewheel.tv/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 285
                }, {
                    vendorId: 416,
                    vendorName: "Commanders Act",
                    policyUrl: "https://www.commandersact.com/en/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 416
                }, {
                    vendorId: 77,
                    vendorName: "comScore, Inc.",
                    policyUrl: "https://www.comscore.com/About-comScore/Privacy-Policy",
                    "new": !1,
                    deleted: !1,
                    id: 77
                }, {
                    vendorId: 56,
                    vendorName: "Confiant Inc.",
                    policyUrl: "https://www.confiant.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 56
                }, {
                    vendorId: 143,
                    vendorName: "Connatix Native Exchange Inc.",
                    policyUrl: "https://connatix.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 143
                }, {
                    vendorId: 138,
                    vendorName: "ConnectAd Realtime GmbH",
                    policyUrl: "http://connectadrealtime.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 138
                }, {
                    vendorId: 248,
                    vendorName: "Converge-Digital",
                    policyUrl: "https://converge-digital.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 248
                }, {
                    vendorId: 24,
                    vendorName: "Conversant Europe Ltd.",
                    policyUrl: "https://www.conversantmedia.eu/legal/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 24
                }, {
                    vendorId: 85,
                    vendorName: "Crimtan Holdings Limited",
                    policyUrl: "https://crimtan.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 85
                }, {
                    vendorId: 91,
                    vendorName: "Criteo SA",
                    policyUrl: "https://www.criteo.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 91
                }, {
                    vendorId: 298,
                    vendorName: "Cuebiq Inc.",
                    policyUrl: "https://www.cuebiq.com/privacypolicy/",
                    "new": !1,
                    deleted: !1,
                    id: 298
                }, {
                    vendorId: 346,
                    vendorName: "Cybba, Inc.",
                    policyUrl: "http://cybba.com/about/legal/data-processing-agreement/",
                    "new": !1,
                    deleted: !1,
                    id: 346
                }, {
                    vendorId: 570,
                    vendorName: "Czech Publisher Exchange z.s.p.o.",
                    policyUrl: "https://www.cpex.cz/pro-uzivatele/ochrana-soukromi/",
                    "new": !1,
                    deleted: !1,
                    id: 570
                }, {
                    vendorId: 71,
                    vendorName: "Dataxu, Inc. ",
                    policyUrl: "https://www.dataxu.com/about-us/privacy/data-collection-platform/",
                    "new": !1,
                    deleted: !1,
                    id: 71
                }, {
                    vendorId: 440,
                    vendorName: "DEFINE MEDIA GMBH",
                    policyUrl: "http://www.definemedia.de/datenschutz-conative/",
                    "new": !1,
                    deleted: !1,
                    id: 440
                }, {
                    vendorId: 209,
                    vendorName: "Delta Projects AB",
                    policyUrl: "http://www.deltaprojects.com/data-collection-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 209
                }, {
                    vendorId: 397,
                    vendorName: "Demandbase, Inc. ",
                    policyUrl: "https://www.demandbase.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 397
                }, {
                    vendorId: 266,
                    vendorName: "Digilant Spain, SLU",
                    policyUrl: "https://www.digilant.com/es/politica-privacidad/",
                    "new": !1,
                    deleted: !1,
                    id: 266
                }, {
                    vendorId: 214,
                    vendorName: "Digital Control GmbH \x26amp; Co. KG",
                    policyUrl: "http://advolution.de/privacy.php",
                    "new": !1,
                    deleted: !1,
                    id: 214
                }, {
                    vendorId: 133,
                    vendorName: "digitalAudience",
                    policyUrl: "https://digitalaudience.io/legal/privacy-cookies/",
                    "new": !1,
                    deleted: !1,
                    id: 133
                }, {
                    vendorId: 343,
                    vendorName: "DIGITEKA Technologies",
                    policyUrl: "https://www.ultimedia.com/POLICY.html",
                    "new": !1,
                    deleted: !1,
                    id: 343
                }, {
                    vendorId: 229,
                    vendorName: "Digitize New Media Ltd",
                    policyUrl: "http://www.digitize.ie/online-privacy",
                    "new": !1,
                    deleted: !1,
                    id: 229
                }, {
                    vendorId: 64,
                    vendorName: "DigiTrust / IAB Tech Lab",
                    policyUrl: "http://www.digitru.st/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 64
                }, {
                    vendorId: 144,
                    vendorName: "district m inc.",
                    policyUrl: "https://districtm.net/en/page/platforms-data-and-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 144
                }, {
                    vendorId: 126,
                    vendorName: "DoubleVerify Inc.\u200b",
                    policyUrl: "https://www.doubleverify.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 126
                }, {
                    vendorId: 498,
                    vendorName: "Dr. Banner",
                    policyUrl: "https://drbanner.com/privacypolicy_en/",
                    "new": !1,
                    deleted: !1,
                    id: 498
                }, {
                    vendorId: 118,
                    vendorName: "Drawbridge, Inc.",
                    policyUrl: "http://www.drawbridge.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 118
                }, {
                    vendorId: 381,
                    vendorName: "DTS (Filiale de Solocal Group)",
                    policyUrl: "https://client.adhslx.com/privacy.html ",
                    "new": !1,
                    deleted: !1,
                    id: 381
                }, {
                    vendorId: 434,
                    vendorName: "DynAdmic",
                    policyUrl: "http://eu.dynadmic.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 434
                }, {
                    vendorId: 584,
                    vendorName: "Dynamic 1001 GmbH",
                    policyUrl: "https://dynamic-tracking.com/Datenschutz.aspx",
                    "new": !1,
                    deleted: !1,
                    id: 584
                }, {
                    vendorId: 168,
                    vendorName: "EASYmedia GmbH",
                    policyUrl: "https://login.rtbmarket.com/gdpr",
                    "new": !1,
                    deleted: !1,
                    id: 168
                }, {
                    vendorId: 402,
                    vendorName: "Effiliation",
                    policyUrl: "https://inter.effiliation.com/politique-confidentialite.html",
                    "new": !1,
                    deleted: !1,
                    id: 402
                }, {
                    vendorId: 8,
                    vendorName: "Emerse Sverige AB",
                    policyUrl: "https://www.emerse.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 8
                }, {
                    vendorId: 183,
                    vendorName: "EMX Digital LLC",
                    policyUrl: "https://emxdigital.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 183
                }, {
                    vendorId: 29,
                    vendorName: "Etarget SE",
                    policyUrl: "https://www.etarget.sk/privacy.php",
                    "new": !1,
                    deleted: !1,
                    id: 29
                }, {
                    vendorId: 413,
                    vendorName: "Eulerian Technologies",
                    policyUrl: "https://www.eulerian.com/en/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 413
                }, {
                    vendorId: 312,
                    vendorName: "Exactag GmbH",
                    policyUrl: "https://www.exactag.com/en/data-privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 312
                }, {
                    vendorId: 1,
                    vendorName: "Exponential Interactive, Inc",
                    policyUrl: "http://exponential.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 1
                }, {
                    vendorId: 120,
                    vendorName: "Eyeota Ptd Ltd",
                    policyUrl: "https://www.eyeota.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 120
                }, {
                    vendorId: 347,
                    vendorName: "Ezoic Inc.",
                    policyUrl: "https://www.ezoic.com/terms/",
                    "new": !1,
                    deleted: !1,
                    id: 347
                }, {
                    vendorId: 529,
                    vendorName: "Fidzup",
                    policyUrl: "https://www.fidzup.com/en/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 529
                }, {
                    vendorId: 100,
                    vendorName: "Fifty Technology Limited",
                    policyUrl: "https://fifty.io/privacy-policy.php",
                    "new": !1,
                    deleted: !1,
                    id: 100
                }, {
                    vendorId: 78,
                    vendorName: "Flashtalking, Inc.",
                    policyUrl: "http://www.flashtalking.com/privacypolicy/",
                    "new": !1,
                    deleted: !1,
                    id: 78
                }, {
                    vendorId: 471,
                    vendorName: "FlexOffers.com, LLC",
                    policyUrl: "https://www.flexoffers.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 471
                }, {
                    vendorId: 408,
                    vendorName: "FM Labs LLC",
                    policyUrl: "https://fidelity-media.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 408
                }, {
                    vendorId: 175,
                    vendorName: "FORTVISION",
                    policyUrl: "http://fortvision.com/POC/index.html",
                    "new": !1,
                    deleted: !1,
                    id: 175
                }, {
                    vendorId: 350,
                    vendorName: "Free Stream Media Corp. dba Samba TV",
                    policyUrl: "https://samba.tv/legal/privacy-policy-2-28-2018/",
                    "new": !1,
                    deleted: !1,
                    id: 350
                }, {
                    vendorId: 262,
                    vendorName: "Fyber ",
                    policyUrl: "https://www.fyber.com/legal/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 262
                }, {
                    vendorId: 316,
                    vendorName: "Gamned",
                    policyUrl: "https://www.gamned.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 316
                }, {
                    vendorId: 455,
                    vendorName: "GDMServices, Inc. d/b/a FiksuDSP",
                    policyUrl: "https://fiksu.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 455
                }, {
                    vendorId: 328,
                    vendorName: "Gemius SA",
                    policyUrl: "https://www.gemius.com/cookie-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 328
                }, {
                    vendorId: 87,
                    vendorName: "Genius Sports Media Limited",
                    policyUrl: "http://www.geniussports.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 87
                }, {
                    vendorId: 369,
                    vendorName: "Getintent USA, inc.",
                    policyUrl: "https://getintent.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 369
                }, {
                    vendorId: 536,
                    vendorName: "GlobalWebIndex",
                    policyUrl: "http://legal.trendstream.net/non-panellist_privacy_policy",
                    "new": !1,
                    deleted: !1,
                    id: 536
                }, {
                    vendorId: 274,
                    vendorName: "Golden Bees",
                    policyUrl: "http://goldenbees.fr/notre-politique-de-confidentialite/",
                    "new": !1,
                    deleted: !1,
                    id: 274
                }, {
                    vendorId: 17,
                    vendorName: "Greenhouse Group BV (with its trademark LemonPI)",
                    policyUrl: "https://www.lemonpi.io/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 17
                }, {
                    vendorId: 98,
                    vendorName: "GroupM",
                    policyUrl: "https://www.groupm.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 98
                }, {
                    vendorId: 61,
                    vendorName: "GumGum, Inc.",
                    policyUrl: "https://gumgum.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 61
                }, {
                    vendorId: 467,
                    vendorName: "Haensel AMS GmbH",
                    policyUrl: "https://haensel-ams.com/data-privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 467
                }, {
                    vendorId: 550,
                    vendorName: "Happydemics",
                    policyUrl: "https://www.iubenda.com/privacy-policy/69056167/full-legal",
                    "new": !1,
                    deleted: !1,
                    id: 550
                }, {
                    vendorId: 110,
                    vendorName: "Hottraffic BV (DMA Institute)",
                    policyUrl: "https://www.dma-institute.com/privacy-compliancy/",
                    "new": !1,
                    deleted: !1,
                    id: 110
                }, {
                    vendorId: 206,
                    vendorName: "Hybrid Adtech GmbH",
                    policyUrl: "https://hybrid.ai/data_protection_policy",
                    "new": !1,
                    deleted: !1,
                    id: 206
                }, {
                    vendorId: 131,
                    vendorName: "ID5 Technology SAS",
                    policyUrl: "https://www.id5.io/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 131
                }, {
                    vendorId: 551,
                    vendorName: "Illuma Technology Limited",
                    policyUrl: "https://www.weareilluma.com/endddd",
                    "new": !1,
                    deleted: !1,
                    id: 551
                }, {
                    vendorId: 105,
                    vendorName: "Impression Desk Technologies Limited",
                    policyUrl: "https://impressiondesk.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 105
                }, {
                    vendorId: 253,
                    vendorName: "Improve Digital International BV",
                    policyUrl: "https://www.improvedigital.com/platform-privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 253
                }, {
                    vendorId: 10,
                    vendorName: "Index Exchange, Inc. ",
                    policyUrl: "https://www.indexexchange.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 10
                }, {
                    vendorId: 479,
                    vendorName: "INFINIA MOBILE S.L.",
                    policyUrl: "http://www.infiniamobile.com/privacy_policy",
                    "new": !1,
                    deleted: !1,
                    id: 479
                }, {
                    vendorId: 333,
                    vendorName: "InMobi Pte Ltd",
                    policyUrl: "https://www.inmobi.com/privacy-policy-for-eea",
                    "new": !1,
                    deleted: !1,
                    id: 333
                }, {
                    vendorId: 535,
                    vendorName: "INNITY",
                    policyUrl: "https://www.innity.com/privacy-policy.php",
                    "new": !1,
                    deleted: !1,
                    id: 535
                }, {
                    vendorId: 452,
                    vendorName: "Innovid Inc.",
                    policyUrl: "http://www.innovid.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 452
                }, {
                    vendorId: 150,
                    vendorName: "Inskin Media LTD",
                    policyUrl: "http://www.inskinmedia.com/privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 150
                }, {
                    vendorId: 265,
                    vendorName: "Instinctive, Inc.",
                    policyUrl: "https://instinctive.io/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 265
                }, {
                    vendorId: 596,
                    vendorName: "InsurAds Technologies SA.",
                    policyUrl: "https://www.insurads.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 596
                }, {
                    vendorId: 19,
                    vendorName: "Intent Media, Inc.",
                    policyUrl: "https://intentmedia.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 19
                }, {
                    vendorId: 189,
                    vendorName: "Intowow Innovation Ltd.",
                    policyUrl: "http://www.intowow.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 189
                }, {
                    vendorId: 436,
                    vendorName: "INVIBES GROUP",
                    policyUrl: "http://www.invibes.com/terms",
                    "new": !1,
                    deleted: !1,
                    id: 436
                }, {
                    vendorId: 113,
                    vendorName: "iotec global Ltd.",
                    policyUrl: "https://www.iotecglobal.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 113
                }, {
                    vendorId: 129,
                    vendorName: "IPONWEB GmbH",
                    policyUrl: "https://www.iponweb.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 129
                }, {
                    vendorId: 527,
                    vendorName: "Jampp LTD",
                    policyUrl: "https://jampp.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 527
                }, {
                    vendorId: 568,
                    vendorName: "Jointag S.r.l.",
                    policyUrl: "https://www.jointag.com/privacy/kariboo/publisher/third/",
                    "new": !1,
                    deleted: !1,
                    id: 568
                }, {
                    vendorId: 62,
                    vendorName: "Justpremium BV",
                    policyUrl: "http://justpremium.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 62
                }, {
                    vendorId: 314,
                    vendorName: "Keymantics",
                    policyUrl: "https://www.keymantics.com/assets/privacy-policy.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 314
                }, {
                    vendorId: 548,
                    vendorName: "LBC France",
                    policyUrl: "https://www.leboncoin.fr/dc/cookies",
                    "new": !1,
                    deleted: !1,
                    id: 548
                }, {
                    vendorId: 244,
                    vendorName: "Leadplace - Temelio",
                    policyUrl: "https://temelio.com/vie-privee",
                    "new": !1,
                    deleted: !1,
                    id: 244
                }, {
                    vendorId: 560,
                    vendorName: "Leiki Ltd.",
                    policyUrl: "http://www.leiki.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 560
                }, {
                    vendorId: 221,
                    vendorName: "LEMO MEDIA GROUP LIMITED",
                    policyUrl: "http://www.lemomedia.com/terms.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 221
                }, {
                    vendorId: 67,
                    vendorName: "LifeStreet Corporation",
                    policyUrl: "http://www.lifestreet.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 67
                }, {
                    vendorId: 330,
                    vendorName: "Linicom",
                    policyUrl: "https://www.linicom.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 330
                }, {
                    vendorId: 497,
                    vendorName: "Little Big Data sp.z.o.o.",
                    policyUrl: "http://dtxngr.com/legal/",
                    "new": !1,
                    deleted: !1,
                    id: 497
                }, {
                    vendorId: 148,
                    vendorName: "Liveintent Inc.",
                    policyUrl: "https://liveintent.com/services-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 148
                },
                {
                    vendorId: 97,
                    vendorName: "LiveRamp, Inc.",
                    policyUrl: "https://www.liveramp.com/service-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 97
                }, {
                    vendorId: 587,
                    vendorName: "Localsensor B.V.",
                    policyUrl: "https://www.localsensor.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 587
                }, {
                    vendorId: 65,
                    vendorName: "Location Sciences AI Ltd",
                    policyUrl: "https://www.locationsciences.ai/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 65
                }, {
                    vendorId: 109,
                    vendorName: "LoopMe Ltd",
                    policyUrl: "https://loopme.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 109
                }, {
                    vendorId: 95,
                    vendorName: "Lotame Solutions, Inc.",
                    policyUrl: "https://www.lotame.com/about-lotame/privacy/",
                    "new": !1,
                    deleted: !0,
                    id: 95
                }, {
                    vendorId: 508,
                    vendorName: "Lucid Holdings, LLC",
                    policyUrl: "https://luc.id/gdpr",
                    "new": !1,
                    deleted: !1,
                    id: 508
                }, {
                    vendorId: 75,
                    vendorName: "M32 Media Inc",
                    policyUrl: "https://m32.media/privacy-cookie-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 75
                }, {
                    vendorId: 153,
                    vendorName: "MADVERTISE MEDIA",
                    policyUrl: "http://madvertise.com/en/gdpr/",
                    "new": !1,
                    deleted: !1,
                    id: 153
                }, {
                    vendorId: 317,
                    vendorName: "mainADV Srl",
                    policyUrl: "http://www.mainad.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 317
                }, {
                    vendorId: 578,
                    vendorName: "MAIRDUMONT NETLETIX GmbH\x26amp;Co. KG",
                    policyUrl: "https://mairdumont-netletix.com/datenschutz",
                    "new": !1,
                    deleted: !1,
                    id: 578
                }, {
                    vendorId: 270,
                    vendorName: "Marfeel Solutions S.L",
                    policyUrl: "https://www.marfeel.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 270
                }, {
                    vendorId: 112,
                    vendorName: "Maytrics GmbH",
                    policyUrl: "https://maytrics.com/node/2",
                    "new": !1,
                    deleted: !1,
                    id: 112
                }, {
                    vendorId: 142,
                    vendorName: "Media.net Advertising FZ-LLC",
                    policyUrl: "https://www.media.net/en/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 142
                }, {
                    vendorId: 79,
                    vendorName: "MediaMath, Inc.",
                    policyUrl: "http://www.mediamath.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 79
                }, {
                    vendorId: 184,
                    vendorName: "mediarithmics SAS",
                    policyUrl: "https://www.mediarithmics.com/en-us/content/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 184
                }, {
                    vendorId: 193,
                    vendorName: "Mediasmart Mobile S.L.",
                    policyUrl: "http://mediasmart.io/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 193
                }, {
                    vendorId: 358,
                    vendorName: "MGID Inc.",
                    policyUrl: "https://www.mgid.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 358
                }, {
                    vendorId: 101,
                    vendorName: "MiQ",
                    policyUrl: "http://wearemiq.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 101
                }, {
                    vendorId: 279,
                    vendorName: "Mirando GmbH \x26amp; Co KG",
                    policyUrl: "https://wwwmirando.de/datenschutz/",
                    "new": !1,
                    deleted: !1,
                    id: 279
                }, {
                    vendorId: 289,
                    vendorName: "mobalo GmbH",
                    policyUrl: "https://www.mobalo.com/datenschutz/",
                    "new": !1,
                    deleted: !1,
                    id: 289
                }, {
                    vendorId: 311,
                    vendorName: "Mobfox US LLC",
                    policyUrl: "https://www.mobfox.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 311
                }, {
                    vendorId: 302,
                    vendorName: "Mobile Professionals BV",
                    policyUrl: "https://mobpro.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 302
                }, {
                    vendorId: 403,
                    vendorName: "Mobusi Mobile Advertising S.L.",
                    policyUrl: "https://www.mobusi.com/privacy.en.html",
                    "new": !1,
                    deleted: !1,
                    id: 403
                }, {
                    vendorId: 344,
                    vendorName: "My6sense Inc.",
                    policyUrl: "https://my6sense.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 344
                }, {
                    vendorId: 362,
                    vendorName: "Myntelligence Limited",
                    policyUrl: "http://www.myntelligence.com/privacy-page/",
                    "new": !1,
                    deleted: !1,
                    id: 362
                }, {
                    vendorId: 530,
                    vendorName: "Near Pte Ltd",
                    policyUrl: "https://near.co/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 530
                }, {
                    vendorId: 450,
                    vendorName: "Neodata Group srl",
                    policyUrl: "https://www.neodatagroup.com/en/security-policy",
                    "new": !1,
                    deleted: !1,
                    id: 450
                }, {
                    vendorId: 34,
                    vendorName: "NEORY GmbH",
                    policyUrl: "https://www.neory.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 34
                }, {
                    vendorId: 160,
                    vendorName: "Netsprint SA",
                    policyUrl: "http://spoldzielnia.nsaudience.pl/opt-out/",
                    "new": !1,
                    deleted: !1,
                    id: 160
                }, {
                    vendorId: 48,
                    vendorName: "NetSuccess, s.r.o.",
                    policyUrl: "https://www.inres.sk/pp/",
                    "new": !1,
                    deleted: !1,
                    id: 48
                }, {
                    vendorId: 521,
                    vendorName: "netzeffekt GmbH",
                    policyUrl: "https://www.netzeffekt.de/en/imprint",
                    "new": !1,
                    deleted: !1,
                    id: 521
                }, {
                    vendorId: 37,
                    vendorName: "NEURAL.ONE",
                    policyUrl: "https://web.neural.one/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 37
                }, {
                    vendorId: 468,
                    vendorName: "Neustar, Inc.",
                    policyUrl: "https://www.home.neustar/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 468
                }, {
                    vendorId: 502,
                    vendorName: "NEXD",
                    policyUrl: "https://nexd.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 502
                }, {
                    vendorId: 373,
                    vendorName: "Nielsen Marketing Cloud",
                    policyUrl: "http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 373
                }, {
                    vendorId: 388,
                    vendorName: "numberly",
                    policyUrl: "http://ads.1000mercis.com/fr.html",
                    "new": !1,
                    deleted: !1,
                    id: 388
                }, {
                    vendorId: 25,
                    vendorName: "Oath (EMEA) Limited",
                    policyUrl: "https://policies.oath.com/ie/en/oath/privacy/index.html",
                    "new": !1,
                    deleted: !1,
                    id: 25
                }, {
                    vendorId: 31,
                    vendorName: "Ogury Ltd.",
                    policyUrl: "https://www.ogury.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 31
                }, {
                    vendorId: 304,
                    vendorName: "On Device Research Limited",
                    policyUrl: "https://s.on-device.com/privacyPolicy",
                    "new": !1,
                    deleted: !1,
                    id: 304
                }, {
                    vendorId: 147,
                    vendorName: "One Person Health, Inc. (DBA Adacado)",
                    policyUrl: "https://www.adacado.com/privacy-policy-april-25-2018/",
                    "new": !1,
                    deleted: !1,
                    id: 147
                }, {
                    vendorId: 241,
                    vendorName: "OneTag Ltd",
                    policyUrl: "https://www.onetag.net/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 241
                }, {
                    vendorId: 255,
                    vendorName: "Onnetwork Sp. z o.o.",
                    policyUrl: "https://www.onnetwork.tv/pp_services.php",
                    "new": !1,
                    deleted: !1,
                    id: 255
                }, {
                    vendorId: 438,
                    vendorName: "Ooyala Inc",
                    policyUrl: "https://ooyala.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 438
                }, {
                    vendorId: 69,
                    vendorName: "OpenX",
                    policyUrl: "https://www.openx.com/legal/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 69
                }, {
                    vendorId: 349,
                    vendorName: "Optomaton UG",
                    policyUrl: "http://optomaton.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 349
                }, {
                    vendorId: 385,
                    vendorName: "Oracle",
                    policyUrl: "https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 385
                }, {
                    vendorId: 464,
                    vendorName: "Oracle AddThis",
                    policyUrl: "http://www.addthis.com/privacy/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 464
                }, {
                    vendorId: 303,
                    vendorName: "Orion Semantics",
                    policyUrl: "http://static.orion-semantics.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 303
                }, {
                    vendorId: 227,
                    vendorName: "ORTEC B.V.",
                    policyUrl: "https://www.ortecadscience.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 227
                }, {
                    vendorId: 164,
                    vendorName: "Outbrain UK Ltd",
                    policyUrl: "https://www.outbrain.com/legal/",
                    "new": !1,
                    deleted: !1,
                    id: 164
                }, {
                    vendorId: 543,
                    vendorName: "PaperG, Inc. dba Thunder Industries",
                    policyUrl: "https://www.makethunder.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 543
                }, {
                    vendorId: 390,
                    vendorName: "Parsec Media Inc.",
                    policyUrl: "http://www.parsec.media/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 390
                }, {
                    vendorId: 323,
                    vendorName: "Perform Media Services Ltd",
                    policyUrl: "http://www.performgroup.com/media-privacy-notice",
                    "new": !1,
                    deleted: !1,
                    id: 323
                }, {
                    vendorId: 139,
                    vendorName: "Permodo GmbH",
                    policyUrl: "https://permodo.com/de/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 139
                }, {
                    vendorId: 516,
                    vendorName: "Pexi B.V.",
                    policyUrl: "https://pexi.nl/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 516
                }, {
                    vendorId: 480,
                    vendorName: "pilotx.tv",
                    policyUrl: "https://pilotx.tv/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 480
                }, {
                    vendorId: 127,
                    vendorName: "PIXIMEDIA SAS",
                    policyUrl: "https://piximedia.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 127
                }, {
                    vendorId: 140,
                    vendorName: "Platform161",
                    policyUrl: "https://platform161.com/cookie-and-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 140
                }, {
                    vendorId: 444,
                    vendorName: "Playbuzz Ltd. ",
                    policyUrl: "https://www.playbuzz.com/PrivacyPolicy",
                    "new": !1,
                    deleted: !1,
                    id: 444
                }, {
                    vendorId: 490,
                    vendorName: "PLAYGROUND XYZ EMEA LTD",
                    policyUrl: "https://playground.xyz/privacy/privacy-policy.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 490
                }, {
                    vendorId: 177,
                    vendorName: "plista GmbH",
                    policyUrl: "https://www.plista.com/about/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 177
                }, {
                    vendorId: 376,
                    vendorName: "Pocketmath Pte Ltd",
                    policyUrl: "https://www.pocketmath.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 376
                }, {
                    vendorId: 297,
                    vendorName: "Polar Mobile Group Inc.",
                    policyUrl: "https://privacy.polar.me",
                    "new": !1,
                    deleted: !1,
                    id: 297
                }, {
                    vendorId: 236,
                    vendorName: "PowerLinks Media Limited",
                    policyUrl: "https://www.powerlinks.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 236
                }, {
                    vendorId: 593,
                    vendorName: "Programatica de publicidad S.L.",
                    policyUrl: "https://datmean.com/politica-privacidad/",
                    "new": !1,
                    deleted: !1,
                    id: 593
                }, {
                    vendorId: 427,
                    vendorName: "Proxi.cloud Sp. z o.o.",
                    policyUrl: "https://proxi.cloud/info/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 427
                }, {
                    vendorId: 418,
                    vendorName: "PROXISTORE",
                    policyUrl: "https://www.proxistore.com/common/en/cgv",
                    "new": !1,
                    deleted: !1,
                    id: 418
                }, {
                    vendorId: 525,
                    vendorName: "PUB OCEAN LIMITED",
                    policyUrl: "https://rta.pubocean.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 525
                }, {
                    vendorId: 226,
                    vendorName: "Publicis Media GmbH",
                    policyUrl: "https://www.publicismedia.de/datenschutz/",
                    "new": !1,
                    deleted: !1,
                    id: 226
                }, {
                    vendorId: 407,
                    vendorName: "Publishers Internationale Pty Ltd",
                    policyUrl: "https://www.pi-rate.com.au/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 407
                }, {
                    vendorId: 76,
                    vendorName: "PubMatic, Inc.",
                    policyUrl: "https://pubmatic.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 76
                }, {
                    vendorId: 512,
                    vendorName: "PubNative GmbH",
                    policyUrl: "https://pubnative.net/privacy-notice/",
                    "new": !1,
                    deleted: !1,
                    id: 512
                }, {
                    vendorId: 81,
                    vendorName: "PulsePoint, Inc.",
                    policyUrl: "https://www.pulsepoint.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 81
                }, {
                    vendorId: 35,
                    vendorName: "Purch Group, Inc.",
                    policyUrl: "http://www.purch.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 35
                }, {
                    vendorId: 499,
                    vendorName: "PurposeLab, LLC",
                    policyUrl: "https://purposelab.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 499
                }, {
                    vendorId: 250,
                    vendorName: "Qriously",
                    policyUrl: "https://www.qriously.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 250
                }, {
                    vendorId: 11,
                    vendorName: "Quantcast International Limited",
                    policyUrl: "https://www.quantcast.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 11
                }, {
                    vendorId: 291,
                    vendorName: "Qwertize",
                    policyUrl: "https://www.qwertize.com/en/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 291
                }, {
                    vendorId: 442,
                    vendorName: "R-Advertising",
                    policyUrl: "http://www.tradedoubler.com/en/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 442
                }, {
                    vendorId: 60,
                    vendorName: "Rakuten Marketing LLC",
                    policyUrl: "https://rakutenmarketing.com/legal-notices/services-privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 60
                }, {
                    vendorId: 290,
                    vendorName: "Readpeak Oy",
                    policyUrl: "http://readpeak.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 290
                }, {
                    vendorId: 574,
                    vendorName: "Realeyes O\u00dc",
                    policyUrl: "https://www.realeyesit.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 574
                }, {
                    vendorId: 191,
                    vendorName: "realzeit GmbH",
                    policyUrl: "https://realzeitmedia.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 191
                }, {
                    vendorId: 545,
                    vendorName: "ReigNN Platform Ltd.",
                    policyUrl: "https://www.reignn.com/user-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 545
                }, {
                    vendorId: 192,
                    vendorName: "remerge GmbH",
                    policyUrl: "https://remerge.io/privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 192
                }, {
                    vendorId: 125,
                    vendorName: "Research Now Group, Inc",
                    policyUrl: "https://www.valuedopinions.co.uk/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 125
                }, {
                    vendorId: 158,
                    vendorName: "Reveal Mobile, Inc",
                    policyUrl: "https://revealmobile.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 158
                }, {
                    vendorId: 478,
                    vendorName: "RevLifter Ltd",
                    policyUrl: "https://www.revlifter.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 478
                }, {
                    vendorId: 375,
                    vendorName: "RevX Inc.",
                    policyUrl: "https://www.revx.io/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 375
                }, {
                    vendorId: 194,
                    vendorName: "Rezonence Limited",
                    policyUrl: "https://rezonence.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 194
                }, {
                    vendorId: 36,
                    vendorName: "RhythmOne, LLC",
                    policyUrl: "https://www.rhythmone.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 36
                }, {
                    vendorId: 108,
                    vendorName: "Rich Audience",
                    policyUrl: "https://richaudience.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 108
                }, {
                    vendorId: 554,
                    vendorName: "RMSi Radio Marketing Service interactive GmbH",
                    policyUrl: "https://www.rms.de/datenschutz/",
                    "new": !1,
                    deleted: !1,
                    id: 554
                }, {
                    vendorId: 308,
                    vendorName: "Rockabox Media Ltd",
                    policyUrl: "http://scoota.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 308
                }, {
                    vendorId: 260,
                    vendorName: "RockYou, Inc.",
                    policyUrl: "https://rockyou.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 260
                }, {
                    vendorId: 4,
                    vendorName: "Roq.ad GmbH",
                    policyUrl: "https://www.roq.ad/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 4
                }, {
                    vendorId: 257,
                    vendorName: "R-TARGET",
                    policyUrl: "http://www.r-target.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 257
                }, {
                    vendorId: 16,
                    vendorName: "RTB House S.A.",
                    policyUrl: "https://www.rtbhouse.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 16
                }, {
                    vendorId: 169,
                    vendorName: "RTK.IO, Inc",
                    policyUrl: "http://www.rtk.io/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 169
                }, {
                    vendorId: 119,
                    vendorName: "S4M",
                    policyUrl: "http://www.s4m.io/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 119
                }, {
                    vendorId: 506,
                    vendorName: "salesforce.com, inc.",
                    policyUrl: "https://www.salesforce.com/company/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 506
                }, {
                    vendorId: 351,
                    vendorName: "Samba TV UK Limited",
                    policyUrl: "https://samba.tv/legal/privacy-policy-2-28-2018/",
                    "new": !1,
                    deleted: !1,
                    id: 351
                }, {
                    vendorId: 269,
                    vendorName: "Sanoma Media Finland",
                    policyUrl: "https://sanoma.fi/tietoa-meista/tietosuoja/",
                    "new": !1,
                    deleted: !1,
                    id: 269
                }, {
                    vendorId: 86,
                    vendorName: "Scene Stealer Limited",
                    policyUrl: "http://scenestealer.tv/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 86
                }, {
                    vendorId: 465,
                    vendorName: "Schibsted Product and Tech UK",
                    policyUrl: "https://www.schibsted.com/",
                    "new": !1,
                    deleted: !1,
                    id: 465
                }, {
                    vendorId: 157,
                    vendorName: "Seedtag Advertising S.L",
                    policyUrl: "https://www.seedtag.com/en/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 157
                }, {
                    vendorId: 33,
                    vendorName: "ShareThis, Inc.",
                    policyUrl: "http://www.sharethis.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 33
                }, {
                    vendorId: 80,
                    vendorName: "Sharethrough, Inc",
                    policyUrl: "https://platform-cdn.sharethrough.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 80
                }, {
                    vendorId: 337,
                    vendorName: "SheMedia, LLC",
                    policyUrl: "http://corporate.shemedia.com/faq/ad-services-privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 337
                }, {
                    vendorId: 505,
                    vendorName: "Shopalyst Inc",
                    policyUrl: "https://www.shortlyst.com/eu/privacy_terms.html",
                    "new": !1,
                    deleted: !1,
                    id: 505
                }, {
                    vendorId: 513,
                    vendorName: "Shopstyle",
                    policyUrl: "https://www.shopstyle.co.uk/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 513
                }, {
                    vendorId: 59,
                    vendorName: "Sift Media, Inc",
                    policyUrl: "https://www.sift.co/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 59
                }, {
                    vendorId: 261,
                    vendorName: "Signal Digital Inc.",
                    policyUrl: "https://www.signal.co/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 261
                },
                {
                    vendorId: 429,
                    vendorName: "Signals",
                    policyUrl: "https://signalsdata.com/platform-cookie-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 429
                }, {
                    vendorId: 73,
                    vendorName: "Simplifi Holdings Inc.",
                    policyUrl: "https://www.simpli.fi/site-privacy-policy2/",
                    "new": !1,
                    deleted: !1,
                    id: 73
                }, {
                    vendorId: 435,
                    vendorName: "SINGLESPOT SAS ",
                    policyUrl: "https://www.singlespot.com/privacy_policy?locale\x3dfr",
                    "new": !1,
                    deleted: !1,
                    id: 435
                }, {
                    vendorId: 53,
                    vendorName: "Sirdata",
                    policyUrl: "https://www.sirdata.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 53
                }, {
                    vendorId: 68,
                    vendorName: "Sizmek Technologies, Inc. ",
                    policyUrl: "https://www.sizmek.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 68
                }, {
                    vendorId: 46,
                    vendorName: "Skimbit Ltd",
                    policyUrl: "https://skimlinks.com/pages/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 46
                }, {
                    vendorId: 102,
                    vendorName: "SlimCut Media SAS",
                    policyUrl: "http://www.slimcutmedia.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 102
                }, {
                    vendorId: 82,
                    vendorName: "Smaato, Inc.",
                    policyUrl: "https://www.smaato.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 82
                }, {
                    vendorId: 161,
                    vendorName: "Smadex SL",
                    policyUrl: "http://smadex.com/end-user-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 161
                }, {
                    vendorId: 45,
                    vendorName: "Smart Adserver",
                    policyUrl: "https://smartadserver.com/end-user-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 45
                }, {
                    vendorId: 546,
                    vendorName: "Smart Traffik",
                    policyUrl: "https://smart-traffik.io/politique-de-confidentialite",
                    "new": !1,
                    deleted: !1,
                    id: 546
                }, {
                    vendorId: 531,
                    vendorName: "Smartclip Hispania SL",
                    policyUrl: "http://rgpd-smartclip.com/",
                    "new": !1,
                    deleted: !1,
                    id: 531
                }, {
                    vendorId: 115,
                    vendorName: "smartclip Holding AG",
                    policyUrl: "http://privacy-portal.smartclip.net/",
                    "new": !1,
                    deleted: !1,
                    id: 115
                }, {
                    vendorId: 134,
                    vendorName: "SMARTSTREAM.TV GmbH",
                    policyUrl: "https://www.smartstream.tv/en/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 134
                }, {
                    vendorId: 534,
                    vendorName: "SmartyAds Inc.",
                    policyUrl: "https://smartyads.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 534
                }, {
                    vendorId: 145,
                    vendorName: "Snapsort Inc., operating as Sortable",
                    policyUrl: "https://sortable.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 145
                }, {
                    vendorId: 268,
                    vendorName: "Social Tokens Ltd. ",
                    policyUrl: "http://woobi.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 268
                }, {
                    vendorId: 295,
                    vendorName: "Sojern, Inc.",
                    policyUrl: "https://www.sojern.com/privacy/product-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 295
                }, {
                    vendorId: 341,
                    vendorName: "Somo Audience Corp",
                    policyUrl: "https://somoaudience.com/legal/",
                    "new": !1,
                    deleted: !1,
                    id: 341
                }, {
                    vendorId: 104,
                    vendorName: "Sonobi, Inc",
                    policyUrl: "http://sonobi.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 104
                }, {
                    vendorId: 13,
                    vendorName: "Sovrn Holdings Inc",
                    policyUrl: "https://www.sovrn.com/sovrn-privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 13
                }, {
                    vendorId: 249,
                    vendorName: "Spolecznosci Sp. z o.o. Sp. k.",
                    policyUrl: "https://www.spolecznosci.pl/polityka-prywatnosci",
                    "new": !1,
                    deleted: !1,
                    id: 249
                }, {
                    vendorId: 208,
                    vendorName: "Spotad",
                    policyUrl: "http://www.spotad.co/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 208
                }, {
                    vendorId: 165,
                    vendorName: "SpotX",
                    policyUrl: "https://www.spotx.tv/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 165
                }, {
                    vendorId: 576,
                    vendorName: "StartApp Inc.",
                    policyUrl: "https://www.startapp.com/policy/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 576
                }, {
                    vendorId: 230,
                    vendorName: "Steel House, Inc.",
                    policyUrl: "https://steelhouse.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 230
                }, {
                    vendorId: 392,
                    vendorName: "Str\u00f6er Mobile Performance GmbH",
                    policyUrl: "https://stroeermobileperformance.com/?dl\x3dprivacy",
                    "new": !1,
                    deleted: !1,
                    id: 392
                }, {
                    vendorId: 473,
                    vendorName: "Sub2 Technologies Ltd",
                    policyUrl: "http://www.sub2tech.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 473
                }, {
                    vendorId: 114,
                    vendorName: "Sublime",
                    policyUrl: "http://ayads.co/privacy.php",
                    "new": !1,
                    deleted: !1,
                    id: 114
                }, {
                    vendorId: 517,
                    vendorName: "SunMedia ",
                    policyUrl: "https://www.sunmedia.tv/en/cookies",
                    "new": !1,
                    deleted: !1,
                    id: 517
                }, {
                    vendorId: 197,
                    vendorName: "Switch Concepts Limited",
                    policyUrl: "https://www.switchconcepts.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 197
                }, {
                    vendorId: 198,
                    vendorName: "SYNC",
                    policyUrl: "https://redirect.sync.tv/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 198
                }, {
                    vendorId: 275,
                    vendorName: "TabMo SAS",
                    policyUrl: "http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html",
                    "new": !1,
                    deleted: !1,
                    id: 275
                }, {
                    vendorId: 42,
                    vendorName: "Taboola Europe Limited",
                    policyUrl: "https://www.taboola.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 42
                }, {
                    vendorId: 466,
                    vendorName: "TACTIC\u2122 Real-Time Marketing AS",
                    policyUrl: "https://tacticrealtime.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 466
                }, {
                    vendorId: 89,
                    vendorName: "Tapad, Inc. ",
                    policyUrl: "https://www.tapad.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 89
                }, {
                    vendorId: 475,
                    vendorName: "TAPTAP Networks SL",
                    policyUrl: "http://www.taptapnetworks.com/privacy_policy/",
                    "new": !1,
                    deleted: !1,
                    id: 475
                }, {
                    vendorId: 132,
                    vendorName: "Teads ",
                    policyUrl: "https://teads.tv/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 132
                }, {
                    vendorId: 522,
                    vendorName: "Tealium Inc",
                    policyUrl: "https://tealium.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 522
                }, {
                    vendorId: 124,
                    vendorName: "Teemo SA",
                    policyUrl: "https://teemo.co/fr/confidentialite/",
                    "new": !1,
                    deleted: !1,
                    id: 124
                }, {
                    vendorId: 202,
                    vendorName: "Telaria, Inc",
                    policyUrl: "https://telaria.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 202
                }, {
                    vendorId: 90,
                    vendorName: "Teroa S.A.",
                    policyUrl: "https://www.e-planning.net/en/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 90
                }, {
                    vendorId: 44,
                    vendorName: "The ADEX GmbH",
                    policyUrl: "https://www.theadex.com/privacy-opt-out/",
                    "new": !1,
                    deleted: !1,
                    id: 44
                }, {
                    vendorId: 345,
                    vendorName: "The Kantar Group Limited",
                    policyUrl: "http://www.kantar.com/cookies-policies",
                    "new": !1,
                    deleted: !1,
                    id: 345
                }, {
                    vendorId: 524,
                    vendorName: "The Ozone Project Limited",
                    policyUrl: "https://ozoneproject.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 524
                }, {
                    vendorId: 382,
                    vendorName: "The Reach Group GmbH",
                    policyUrl: "https://www.reachgroup.com/en/privacy-statement/",
                    "new": !1,
                    deleted: !1,
                    id: 382
                }, {
                    vendorId: 52,
                    vendorName: "The Rubicon Project, Inc. ",
                    policyUrl: "http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 52
                }, {
                    vendorId: 21,
                    vendorName: "The Trade Desk",
                    policyUrl: "https://www.thetradedesk.com/general/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 21
                }, {
                    vendorId: 180,
                    vendorName: "Thirdpresence Oy",
                    policyUrl: "http://www.thirdpresence.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 180
                }, {
                    vendorId: 357,
                    vendorName: "Totaljobs Group Ltd ",
                    policyUrl: "https://www.totaljobs.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 357
                }, {
                    vendorId: 49,
                    vendorName: "Tradelab, SAS",
                    policyUrl: "http://tradelab.com/en/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 49
                }, {
                    vendorId: 423,
                    vendorName: "travel audience GmbH",
                    policyUrl: "https://travelaudience.com/product-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 423
                }, {
                    vendorId: 88,
                    vendorName: "TreSensa, Inc.",
                    policyUrl: "https://www.tresensa.com/eu-privacy",
                    "new": !1,
                    deleted: !1,
                    id: 88
                }, {
                    vendorId: 387,
                    vendorName: "Triapodi Ltd.",
                    policyUrl: "https://appreciate.mobi/page.html#/end-user-privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 387
                }, {
                    vendorId: 491,
                    vendorName: "Triboo Data Analytics",
                    policyUrl: "https://www.shinystat.com/it/informativa_sito.html",
                    "new": !1,
                    deleted: !1,
                    id: 491
                }, {
                    vendorId: 28,
                    vendorName: "TripleLift, Inc.",
                    policyUrl: "https://triplelift.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 28
                }, {
                    vendorId: 540,
                    vendorName: "Tunnl BV",
                    policyUrl: "https://tunnl.com/privacy.html",
                    "new": !1,
                    deleted: !1,
                    id: 540
                }, {
                    vendorId: 500,
                    vendorName: "Turbo",
                    policyUrl: "http://www.turboadv.com/white-rabbit-privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 500
                }, {
                    vendorId: 482,
                    vendorName: "UberMedia, Inc.",
                    policyUrl: "http://ubermedia.com/company/products-privacy-policy/#ADDITIONAL_NOTICE",
                    "new": !1,
                    deleted: !1,
                    id: 482
                }, {
                    vendorId: 159,
                    vendorName: "Underdog Media LLC ",
                    policyUrl: "https://underdogmedia.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 159
                }, {
                    vendorId: 162,
                    vendorName: "Unruly Group Ltd",
                    policyUrl: "https://unruly.co/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 162
                }, {
                    vendorId: 514,
                    vendorName: "Uprival LLC",
                    policyUrl: "https://uprival.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 514
                }, {
                    vendorId: 43,
                    vendorName: "Vdopia DBA Chocolate Platform",
                    policyUrl: "https://chocolateplatform.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 43
                }, {
                    vendorId: 368,
                    vendorName: "VECTAURY",
                    policyUrl: "https://www.vectaury.io/en/personal-data",
                    "new": !1,
                    deleted: !1,
                    id: 368
                }, {
                    vendorId: 26,
                    vendorName: "Venatus Media Limited",
                    policyUrl: "https://www.venatusmedia.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 26
                }, {
                    vendorId: 7,
                    vendorName: "Vibrant Media Limited",
                    policyUrl: "https://www.vibrantmedia.com/en/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 7
                }, {
                    vendorId: 190,
                    vendorName: "video intelligence AG",
                    policyUrl: "https://www.vi.ai/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 190
                }, {
                    vendorId: 288,
                    vendorName: "Video Media Groep B.V.",
                    policyUrl: "http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf",
                    "new": !1,
                    deleted: !1,
                    id: 288
                }, {
                    vendorId: 547,
                    vendorName: "Video Reach",
                    policyUrl: "https://www.videoreach.de/about/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 547
                }, {
                    vendorId: 380,
                    vendorName: "Vidoomy Media SL",
                    policyUrl: "http://vidoomy.com/privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 380
                }, {
                    vendorId: 571,
                    vendorName: "ViewPay",
                    policyUrl: "http://viewpay.tv/mentions-legales/",
                    "new": !1,
                    deleted: !1,
                    id: 571
                }, {
                    vendorId: 276,
                    vendorName: "Viralize SRL",
                    policyUrl: "https://viralize.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 276
                }, {
                    vendorId: 83,
                    vendorName: "Visarity Technologies GmbH",
                    policyUrl: "http://primo.design/docs/PrivacyPolicyPrimo.html",
                    "new": !1,
                    deleted: !1,
                    id: 83
                }, {
                    vendorId: 339,
                    vendorName: "Vuble",
                    policyUrl: "https://www.vuble.tv/us/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 339
                },
                {
                    vendorId: 601,
                    vendorName: "WebAds B.V",
                    policyUrl: "http://privacy.webads.eu/",
                    "new": !1,
                    deleted: !1,
                    id: 601
                }, {
                    vendorId: 171,
                    vendorName: "Webedia",
                    policyUrl: "http://www.webedia-group.com/site/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 171
                }, {
                    vendorId: 400,
                    vendorName: "Whenever Media Ltd",
                    policyUrl: "https://www.whenevermedia.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 400
                }, {
                    vendorId: 18,
                    vendorName: "Widespace AB",
                    policyUrl: "https://www.widespace.com/legal/privacy-policy-notice/",
                    "new": !1,
                    deleted: !1,
                    id: 18
                }, {
                    vendorId: 51,
                    vendorName: "xAd, Inc. dba GroundTruth",
                    policyUrl: "https://www.groundtruth.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 51
                }, {
                    vendorId: 523,
                    vendorName: "X-Mode Social, Inc.",
                    policyUrl: "http://xmode.io/privacy-policy.html",
                    "new": !1,
                    deleted: !1,
                    id: 523
                }, {
                    vendorId: 489,
                    vendorName: "YellowHammer Media Group",
                    policyUrl: "http://www.yhmg.com/privacy-policy/",
                    "new": !1,
                    deleted: !1,
                    id: 489
                }, {
                    vendorId: 173,
                    vendorName: "Yieldmo, Inc.",
                    policyUrl: "https://www.yieldmo.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 173
                }, {
                    vendorId: 340,
                    vendorName: "Yieldr UK",
                    policyUrl: "https://www.yieldr.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 340
                }, {
                    vendorId: 154,
                    vendorName: "YOC AG",
                    policyUrl: "https://yoc.com/privacy/",
                    "new": !1,
                    deleted: !1,
                    id: 154
                }, {
                    vendorId: 398,
                    vendorName: "Yormedia Solutions Ltd",
                    policyUrl: "http://www.yormedia.com/privacy-and-cookies-notice/",
                    "new": !1,
                    deleted: !1,
                    id: 398
                }, {
                    vendorId: 234,
                    vendorName: "Zebestof",
                    policyUrl: "http://www.zebestof.com/en/about-us-2/privacy-en/",
                    "new": !1,
                    deleted: !1,
                    id: 234
                }, {
                    vendorId: 210,
                    vendorName: "Zemanta, Inc.",
                    policyUrl: "http://www.zemanta.com/legal/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 210
                }, {
                    vendorId: 321,
                    vendorName: "Ziff Davis LLC",
                    policyUrl: "http://www.ziffdavis.com/privacy-policy",
                    "new": !1,
                    deleted: !1,
                    id: 321
                }, {
                    vendorId: 515,
                    vendorName: "ZighZag",
                    policyUrl: "https://zighzag.com/privacy",
                    "new": !1,
                    deleted: !1,
                    id: 515
                }
            ],
            iabVendorJson: '{"lastUpdated":"2019-03-14T16:00:20Z","vendorListVersion":138,"purposes":[{"id":1,"name":"Information storage and access","description":"The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."},{"id":2,"name":"Personalisation","description":"The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."},{"id":3,"name":"Ad selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."},{"id":4,"name":"Content selection, delivery, reporting","description":"The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."},{"id":5,"name":"Measurement","description":"The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."}],"features":[{"id":1,"name":"Matching Data to Offline Sources","description":"Combining data from offline sources that were initially collected in other contexts."},{"id":2,"name":"Linking Devices","description":"Allow processing of a user\'s data to connect such user across multiple devices."},{"id":3,"name":"Precise Geographic Location Data","description":"Allow processing of a user\'s precise geographic location data in support of a purpose for which that certain third party has consent."}],"vendors":[{"policyUrl":"https://www.emerse.com/privacy-policy/","purposeIds":[1,2,4],"featureIds":[1,2],"legIntPurposeIds":[3,5],"id":8,"name":"Emerse Sverige AB"},{"policyUrl":"https://www.beeswax.com/privacy.html","purposeIds":[1,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":12,"name":"BeeswaxIO Corporation"},{"policyUrl":"https://triplelift.com/privacy/","purposeIds":[1,3],"featureIds":[3],"legIntPurposeIds":[],"id":28,"name":"TripleLift, Inc."},{"policyUrl":"http://www.admaxim.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":9,"name":"AdMaxim Inc."},{"policyUrl":"https://www.adventori.com/with-us/legal-notice/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":27,"name":"ADventori SAS"},{"policyUrl":"https://policies.oath.com/ie/en/oath/privacy/index.html","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3,5],"id":25,"name":"Oath (EMEA) Limited"},{"policyUrl":"https://www.venatusmedia.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":26,"name":"Venatus Media Limited"},{"policyUrl":"http://exponential.com/privacy","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":1,"name":"Exponential Interactive, Inc"},{"policyUrl":"http://www.adspirit.de/privacy","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":6,"name":"AdSpirit GmbH"},{"policyUrl":"https://www.bidtheatre.com/privacy-policy","purposeIds":[2],"featureIds":[2,3],"legIntPurposeIds":[1,3],"id":30,"name":"BidTheatre AB"},{"policyUrl":"https://www.conversantmedia.eu/legal/privacy-policy","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":24,"name":"Conversant Europe Ltd."},{"policyUrl":"https://www.etarget.sk/privacy.php","purposeIds":[1,2,3,4,5],"featureIds":[1],"legIntPurposeIds":[],"id":29,"name":"Etarget SE"},{"policyUrl":"https://www.adition.com/datenschutz","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":39,"name":"ADITION technologies AG"},{"policyUrl":"https://www.quantcast.com/privacy/","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[2,3,4,5],"id":11,"name":"Quantcast International Limited"},{"policyUrl":"https://www.adikteev.com/eu/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":15,"name":"Adikteev"},{"policyUrl":"https://www.roq.ad/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":4,"name":"Roq.ad GmbH"},{"policyUrl":"https://www.vibrantmedia.com/en/privacy-policy/","purposeIds":[2,3,4,5],"featureIds":[],"legIntPurposeIds":[1],"id":7,"name":"Vibrant Media Limited"},{"policyUrl":"http://www.captify.co.uk/privacy-policy/","purposeIds":[1,2,3],"featureIds":[2],"legIntPurposeIds":[5],"id":2,"name":"Captify Technologies Limited"},{"policyUrl":"https://web.neural.one/privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":37,"name":"NEURAL.ONE"},{"policyUrl":"https://www.sovrn.com/sovrn-privacy/","purposeIds":[1,2,3],"featureIds":[2,3],"legIntPurposeIds":[],"id":13,"name":"Sovrn Holdings Inc"},{"policyUrl":"https://www.neory.com/privacy.html","purposeIds":[1,2,4,5],"featureIds":[],"legIntPurposeIds":[3],"id":34,"name":"NEORY GmbH"},{"policyUrl":"https://www.appnexus.com/en/company/platform-privacy-policy","purposeIds":[1],"featureIds":[2,3],"legIntPurposeIds":[3],"id":32,"name":"AppNexus Inc."},{"policyUrl":"https://www.indexexchange.com/privacy","purposeIds":[1],"featureIds":[2,3],"legIntPurposeIds":[],"id":10,"name":"Index Exchange, Inc. "},{"policyUrl":"https://adara.com/privacy-promise/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":57,"name":"ADARA MEDIA UNLIMITED"},{"policyUrl":"http://www.avocet.io/privacy-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3],"id":63,"name":"Avocet Systems Limited"},{"policyUrl":"https://www.groundtruth.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":51,"name":"xAd, Inc. dba GroundTruth"},{"policyUrl":"http://tradelab.com/en/privacy/","purposeIds":[1,2,3],"featureIds":[1,2,3],"legIntPurposeIds":[5],"id":49,"name":"Tradelab, SAS"},{"policyUrl":"https://smartadserver.com/end-user-privacy-policy/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3,5],"id":45,"name":"Smart Adserver"},{"policyUrl":"http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[2,3,4,5],"id":52,"name":"The Rubicon Project, Inc. "},{"policyUrl":"http://www.purch.com/privacy-policy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[3,5],"id":35,"name":"Purch Group, Inc."},{"policyUrl":"https://www.dataxu.com/about-us/privacy/data-collection-platform/","purposeIds":[1,2,3],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":71,"name":"Dataxu, Inc. "},{"policyUrl":"http://www.mediamath.com/privacy-policy/","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":79,"name":"MediaMath, Inc."},{"policyUrl":"https://www.criteo.com/privacy/","purposeIds":[1,2,3],"featureIds":[1,2],"legIntPurposeIds":[],"id":91,"name":"Criteo SA"},{"policyUrl":"https://crimtan.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":85,"name":"Crimtan Holdings Limited"},{"policyUrl":"https://www.rtbhouse.com/privacy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":16,"name":"RTB House S.A."},{"policyUrl":"http://scenestealer.tv/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":86,"name":"Scene Stealer Limited"},{"policyUrl":"http://www.blis.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":94,"name":"Blis Media Limited"},{"policyUrl":"https://www.simpli.fi/site-privacy-policy2/","purposeIds":[2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[1],"id":73,"name":"Simplifi Holdings Inc."},{"policyUrl":"http://www.lifestreet.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":67,"name":"LifeStreet Corporation"},{"policyUrl":"http://www.sharethis.com/privacy/","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[5],"id":33,"name":"ShareThis, Inc."},{"policyUrl":"https://n.rich/privacy-notice","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,2,3,4,5],"id":20,"name":"N Technologies Inc."},{"policyUrl":"https://www.madisonlogic.com/privacy/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":55,"name":"Madison Logic, Inc."},{"policyUrl":"https://www.sirdata.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":53,"name":"Sirdata"},{"policyUrl":"https://www.openx.com/legal/privacy-policy/","purposeIds":[1,2,3],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":69,"name":"OpenX"},{"policyUrl":"https://www.groupm.com/privacy-policy","purposeIds":[1,2,3,4],"featureIds":[1,2,3],"legIntPurposeIds":[5],"id":98,"name":"GroupM"},{"policyUrl":"http://justpremium.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":62,"name":"Justpremium BV"},{"policyUrl":"https://intentmedia.com/privacy-policy/","purposeIds":[1],"featureIds":[2],"legIntPurposeIds":[2,3,4,5],"id":19,"name":"Intent Media, Inc."},{"policyUrl":"https://chocolateplatform.com/privacy-policy/","purposeIds":[1,3],"featureIds":[3],"legIntPurposeIds":[],"id":43,"name":"Vdopia DBA Chocolate Platform"},{"policyUrl":"https://www.rhythmone.com/privacy-policy","purposeIds":[5],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4],"id":36,"name":"RhythmOne, LLC"},{"policyUrl":"https://platform-cdn.sharethrough.com/privacy-policy","purposeIds":[3,5],"featureIds":[],"legIntPurposeIds":[1],"id":80,"name":"Sharethrough, Inc"},{"policyUrl":"https://www.pulsepoint.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":81,"name":"PulsePoint, Inc."},{"policyUrl":"https://www.amobee.com/trust/privacy-guidelines","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":23,"name":"Amobee, Inc. "},{"policyUrl":"https://m32.media/privacy-cookie-policy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":75,"name":"M32 Media Inc"},{"policyUrl":"https://www.lemonpi.io/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[2],"legIntPurposeIds":[],"id":17,"name":"Greenhouse Group BV (with its trademark LemonPI)"},{"policyUrl":"https://gumgum.com/privacy-policy","purposeIds":[1,2,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":61,"name":"GumGum, Inc."},{"policyUrl":"http://www.active-agent.com/de/unternehmen/datenschutzerklaerung/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":40,"name":"Active Agent AG"},{"policyUrl":"https://pubmatic.com/privacy-policy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[2,3,4,5],"id":76,"name":"PubMatic, Inc."},{"policyUrl":"https://www.tapad.com/privacy","purposeIds":[1],"featureIds":[2],"legIntPurposeIds":[2,3,5],"id":89,"name":"Tapad, Inc. "},{"policyUrl":"https://skimlinks.com/pages/privacy-policy","purposeIds":[1,2,3],"featureIds":[2],"legIntPurposeIds":[5],"id":46,"name":"Skimbit Ltd"},{"policyUrl":"https://www.adsquare.com/privacy","purposeIds":[1,2,3,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":66,"name":"adsquare GmbH"},{"policyUrl":"https://impressiondesk.com/privacy-policy/","purposeIds":[1,3,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":105,"name":"Impression Desk Technologies Limited"},{"policyUrl":"https://www.adverline.com/privacy/","purposeIds":[2],"featureIds":[],"legIntPurposeIds":[1,3],"id":41,"name":"Adverline"},{"policyUrl":"https://www.affili.net/de/footeritem/datenschutz","purposeIds":[2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":3,"name":"affilinet"},{"policyUrl":"https://www.smaato.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":82,"name":"Smaato, Inc."},{"policyUrl":"https://rakutenmarketing.com/legal-notices/services-privacy-policy","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":60,"name":"Rakuten Marketing LLC"},{"policyUrl":"http://www.yieldlab.de/meta-navigation/datenschutz/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,3],"id":70,"name":"Yieldlab AG"},{"policyUrl":"https://site.adform.com/privacy-policy-opt-out/","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[2,3,4,5],"id":50,"name":"Adform A/S"},{"policyUrl":"https://www.inres.sk/pp/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":48,"name":"NetSuccess, s.r.o."},{"policyUrl":"https://fifty.io/privacy-policy.php","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[5],"id":100,"name":"Fifty Technology Limited"},{"policyUrl":"https://www.thetradedesk.com/general/privacy-policy","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3,5],"id":21,"name":"The Trade Desk"},{"policyUrl":"https://www.dma-institute.com/privacy-compliancy/","purposeIds":[1,5],"featureIds":[],"legIntPurposeIds":[],"id":110,"name":"Hottraffic BV (DMA Institute)"},{"policyUrl":"https://www.taboola.com/privacy-policy","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[2,3,4,5],"id":42,"name":"Taboola Europe Limited"},{"policyUrl":"https://maytrics.com/node/2","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":112,"name":"Maytrics GmbH"},{"policyUrl":"https://www.comscore.com/About-comScore/Privacy-Policy","purposeIds":[1,5],"featureIds":[2],"legIntPurposeIds":[],"id":77,"name":"comScore, Inc."},{"policyUrl":"https://loopme.com/privacy/","purposeIds":[1,2,3,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":109,"name":"LoopMe Ltd"},{"policyUrl":"https://www.eyeota.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1],"legIntPurposeIds":[],"id":120,"name":"Eyeota Ptd Ltd"},{"policyUrl":"http://adloox.com/disclaimer","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":93,"name":"Adloox SA"},{"policyUrl":"https://teads.tv/privacy-policy/","purposeIds":[1,2],"featureIds":[1,2],"legIntPurposeIds":[3,4,5],"id":132,"name":"Teads "},{"policyUrl":"https://admetrics.io/en/privacy_policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":22,"name":"admetrics GmbH"},{"policyUrl":"http://www.slimcutmedia.com/privacy-policy/","purposeIds":[1,2],"featureIds":[],"legIntPurposeIds":[3],"id":102,"name":"SlimCut Media SAS"},{"policyUrl":"https://richaudience.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":108,"name":"Rich Audience"},{"policyUrl":"https://www.widespace.com/legal/privacy-policy-notice/","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":18,"name":"Widespace AB"},{"policyUrl":"https://www.sizmek.com/privacy-policy/","purposeIds":[1],"featureIds":[2],"legIntPurposeIds":[2,3,4,5],"id":68,"name":"Sizmek Technologies, Inc. "},{"policyUrl":"http://www.avidglobalmedia.eu/privacy-policy.html","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":122,"name":"Avid Media Ltd"},{"policyUrl":"https://www.liveramp.com/service-privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":97,"name":"LiveRamp, Inc."},{"policyUrl":"http://www.admotion.com/policy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":74,"name":"Admotion SRL"},{"policyUrl":"http://connectadrealtime.com/privacy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[3],"id":138,"name":"ConnectAd Realtime GmbH"},{"policyUrl":"http://www.nanointeractive.com/privacy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,5],"id":72,"name":"Nano Interactive GmbH"},{"policyUrl":"https://piximedia.com/privacy/","purposeIds":[1,2,4],"featureIds":[3],"legIntPurposeIds":[3,5],"id":127,"name":"PIXIMEDIA SAS"},{"policyUrl":"https://www.stroeer.de/fileadmin/user_upload/Datenschutz.pdf","purposeIds":[],"featureIds":[2,3],"legIntPurposeIds":[1,2,3,5],"id":136,"name":"Str\u00f6er SSP GmbH"},{"policyUrl":"http://showheroes.com/privacy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[5],"id":111,"name":"ShowHeroes GmbH"},{"policyUrl":"https://www.confiant.com/privacy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":56,"name":"Confiant Inc."},{"policyUrl":"https://teemo.co/fr/confidentialite/","purposeIds":[1,2,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":124,"name":"Teemo SA"},{"policyUrl":"https://yoc.com/privacy/","purposeIds":[1,2],"featureIds":[3],"legIntPurposeIds":[3,5],"id":154,"name":"YOC AG"},{"policyUrl":"https://www.beemray.com/privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":38,"name":"Beemray Oy"},{"policyUrl":"http://wearemiq.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":101,"name":"MiQ"},{"policyUrl":"http://admanmedia.com/politica","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[5],"id":149,"name":"ADman Interactive SL"},{"policyUrl":"https://www.admedo.com/privacy-policy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3],"id":151,"name":"Admedo Ltd"},{"policyUrl":"http://madvertise.com/en/gdpr/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":153,"name":"MADVERTISE MEDIA"},{"policyUrl":"https://underdogmedia.com/privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[],"legIntPurposeIds":[],"id":159,"name":"Underdog Media LLC "},{"policyUrl":"https://www.seedtag.com/en/privacy-policy/","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":157,"name":"Seedtag Advertising S.L"},{"policyUrl":"https://sortable.com/privacy","purposeIds":[1,5],"featureIds":[],"legIntPurposeIds":[],"id":145,"name":"Snapsort Inc., operating as Sortable"},{"policyUrl":"https://www.id5.io/privacy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":131,"name":"ID5 Technology SAS"},{"policyUrl":"https://revealmobile.com/privacy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":158,"name":"Reveal Mobile, Inc"},{"policyUrl":"https://www.adacado.com/privacy-policy-april-25-2018/","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":147,"name":"One Person Health, Inc. (DBA Adacado)"},{"policyUrl":"https://www.adrollgroup.com/privacy","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[2,3],"id":130,"name":"AdRoll Inc"},{"policyUrl":"https://www.iponweb.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":129,"name":"IPONWEB GmbH"},{"policyUrl":"http://www.bidswitch.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":128,"name":"BIDSWITCH GmbH"},{"policyUrl":"https://login.rtbmarket.com/gdpr","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":168,"name":"EASYmedia GmbH"},{"policyUrl":"https://www.outbrain.com/legal/","purposeIds":[1,2,3,5],"featureIds":[1],"legIntPurposeIds":[4],"id":164,"name":"Outbrain UK Ltd"},{"policyUrl":"https://districtm.net/en/page/platforms-data-and-privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[],"legIntPurposeIds":[],"id":144,"name":"district m inc."},{"policyUrl":"https://bombora.com/privacy","purposeIds":[1,2],"featureIds":[1,2],"legIntPurposeIds":[3,4,5],"id":163,"name":"Bombora Inc."},{"policyUrl":"https://www.yieldmo.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":173,"name":"Yieldmo, Inc."},{"policyUrl":"https://www.tresensa.com/eu-privacy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[2,3],"id":88,"name":"TreSensa, Inc."},{"policyUrl":"http://www.flashtalking.com/privacypolicy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":78,"name":"Flashtalking, Inc."},{"policyUrl":"https://www.sift.co/privacy","purposeIds":[1,2,3],"featureIds":[3],"legIntPurposeIds":[],"id":59,"name":"Sift Media, Inc"},{"policyUrl":"http://ayads.co/privacy.php","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[5],"id":114,"name":"Sublime"},{"policyUrl":"http://fortvision.com/POC/index.html","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":175,"name":"FORTVISION"},{"policyUrl":"https://digitalaudience.io/legal/privacy-cookies/","purposeIds":[1,3,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":133,"name":"digitalAudience"},{"policyUrl":"http://adkernel.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":14,"name":"Adkernel LLC"},{"policyUrl":"http://www.thirdpresence.com/privacy","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3],"id":180,"name":"Thirdpresence Oy"},{"policyUrl":"https://emxdigital.com/privacy/","purposeIds":[1,2],"featureIds":[2,3],"legIntPurposeIds":[3,4,5],"id":183,"name":"EMX Digital LLC"},{"policyUrl":"http://www.33across.com/privacy-policy","purposeIds":[1,2,3,5],"featureIds":[2],"legIntPurposeIds":[],"id":58,"name":"33Across"},{"policyUrl":"https://platform161.com/cookie-and-privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":140,"name":"Platform161"},{"policyUrl":"https://www.e-planning.net/en/privacy.html","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[2,3,4,5],"id":90,"name":"Teroa S.A."},{"policyUrl":"https://www.ericsson-emodo.com/privacy-policy/","purposeIds":[1,2,3,4],"featureIds":[3],"legIntPurposeIds":[5],"id":141,"name":"1020, Inc. dba Placecast and Ericsson Emodo"},{"policyUrl":"https://www.media.net/en/privacy-policy","purposeIds":[1,2],"featureIds":[3],"legIntPurposeIds":[3,5],"id":142,"name":"Media.net Advertising FZ-LLC"},{"policyUrl":"http://www.deltaprojects.com/data-collection-policy/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[2,3,5],"id":209,"name":"Delta Projects AB"},{"policyUrl":"http://www.advanced-store.com/de/datenschutz/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3],"id":195,"name":"advanced store GmbH"},{"policyUrl":"https://www.switchconcepts.com/privacy-policy","purposeIds":[1,3,5],"featureIds":[],"legIntPurposeIds":[],"id":197,"name":"Switch Concepts Limited"},{"policyUrl":"https://www.vi.ai/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":190,"name":"video intelligence AG"},{"policyUrl":"http://www.semasio.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,4,5],"id":84,"name":"Semasio GmbH"},{"policyUrl":"https://www.locationsciences.ai/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":65,"name":"Location Sciences AI Ltd"},{"policyUrl":"http://www.zemanta.com/legal/privacy","purposeIds":[1,2,3,4,5],"featureIds":[1],"legIntPurposeIds":[],"id":210,"name":"Zemanta, Inc."},{"policyUrl":"https://www.tapjoy.com/legal/#privacy-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":200,"name":"Tapjoy, Inc."},{"policyUrl":"https://retargeter.com/service-privacy-policy/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":188,"name":"Sellpoints Inc."},{"policyUrl":"https://www.ipromote.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3],"id":217,"name":"2KDirect, Inc. (dba iPromote)"},{"policyUrl":"https://www.centro.net/privacy-policy/","purposeIds":[1],"featureIds":[1],"legIntPurposeIds":[2,3,4,5],"id":156,"name":"Centro, Inc."},{"policyUrl":"https://rezonence.com/privacy-policy/","purposeIds":[3,5],"featureIds":[],"legIntPurposeIds":[1],"id":194,"name":"Rezonence Limited"},{"policyUrl":"https://www.publicismedia.de/datenschutz/","purposeIds":[1],"featureIds":[1],"legIntPurposeIds":[2,3,4,5],"id":226,"name":"Publicis Media GmbH"},{"policyUrl":"https://redirect.sync.tv/privacy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":198,"name":"SYNC"},{"policyUrl":"https://www.ortecadscience.com/privacy-policy/","purposeIds":[2],"featureIds":[1,2,3],"legIntPurposeIds":[1,3,4,5],"id":227,"name":"ORTEC B.V."},{"policyUrl":"https://www.ligatus.com/en/privacy-policy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,5],"id":225,"name":"Ligatus GmbH"},{"policyUrl":"http://adssets.com/policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3,5],"id":205,"name":"Adssets AB"},{"policyUrl":"https://www.timeincuk.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":179,"name":"Collective Europe Ltd."},{"policyUrl":"https://www.ogury.com/privacy/","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[5],"id":31,"name":"Ogury Ltd."},{"policyUrl":"https://www.1plusx.com/privacy-policy/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":92,"name":"1plusX AG"},{"policyUrl":"https://www.antvoice.com/en/privacypolicy/","purposeIds":[1,2,3],"featureIds":[2],"legIntPurposeIds":[],"id":155,"name":"AntVoice"},{"policyUrl":"http://privacy-portal.smartclip.net/","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,5],"id":115,"name":"smartclip Holding AG"},{"policyUrl":"https://www.doubleverify.com/privacy/","purposeIds":[5],"featureIds":[],"legIntPurposeIds":[],"id":126,"name":"DoubleVerify Inc.\u200b"},{"policyUrl":"http://mediasmart.io/privacy/","purposeIds":[1,3],"featureIds":[3],"legIntPurposeIds":[],"id":193,"name":"Mediasmart Mobile S.L."},{"policyUrl":"https://www.ignitionone.com/privacy-policy/","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,2,3,4,5],"id":245,"name":"IgnitionOne"},{"policyUrl":"https://www.emetriq.com/datenschutz/","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,2,3,5],"id":213,"name":"emetriq GmbH"},{"policyUrl":"https://temelio.com/vie-privee","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":244,"name":"Leadplace - Temelio"},{"policyUrl":"https://www.adrule.net/de/datenschutz/","purposeIds":[2,4],"featureIds":[3],"legIntPurposeIds":[1,3,5],"id":224,"name":"adrule mobile GmbH"},{"policyUrl":"https://www.amillionads.com/privacy-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3],"id":174,"name":"A Million Ads Limited"},{"policyUrl":"https://remerge.io/privacy-policy.html","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":192,"name":"remerge GmbH"},{"policyUrl":"http://rockerbox.com/privacy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,3,5],"id":232,"name":"Rockerbox, Inc"},{"policyUrl":"https://www.bouncex.com/privacy/","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[2,4,5],"id":256,"name":"Bounce Exchange, Inc"},{"policyUrl":"http://www.zebestof.com/en/about-us-2/privacy-en/","purposeIds":[1,2,3],"featureIds":[1,2],"legIntPurposeIds":[5],"id":234,"name":"Zebestof"},{"policyUrl":"https://www.smartology.net/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":246,"name":"Smartology Limited"},{"policyUrl":"https://www.onetag.net/privacy/","purposeIds":[1,2,3,4],"featureIds":[1,2,3],"legIntPurposeIds":[5],"id":241,"name":"OneTag Ltd"},{"policyUrl":"https://liquidm.com/privacy-policy/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,5],"id":254,"name":"LiquidM Technology GmbH"},{"policyUrl":"https://armis.tech/en/armis-personal-data-privacy-policy/","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3],"id":215,"name":"ARMIS SAS"},{"policyUrl":"http://www.audiens.com/privacy","purposeIds":[1,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":167,"name":"Audiens S.r.l."},{"policyUrl":"https://zergnet.com/privacy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,4,5],"id":240,"name":"7Hops.com Inc. (ZergNet)"},{"policyUrl":"http://www.bucksense.com/platform-privacy-policy/","purposeIds":[1],"featureIds":[2,3],"legIntPurposeIds":[2,3,4,5],"id":235,"name":"Bucksense Inc"},{"policyUrl":"https://www.bidtellect.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":185,"name":"Bidtellect, Inc"},{"policyUrl":"https://www.adello.com/privacy-policy/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,5],"id":258,"name":"Adello Group AG"},{"policyUrl":"http://www.rtk.io/privacy.html","purposeIds":[1,4],"featureIds":[1,3],"legIntPurposeIds":[2,3,5],"id":169,"name":"RTK.IO, Inc"},{"policyUrl":"http://www.spotad.co/privacy-policy/","purposeIds":[2,3],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":208,"name":"Spotad"},{"policyUrl":"http://adtheorent.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":211,"name":"AdTheorent, Inc"},{"policyUrl":"http://www.digitize.ie/online-privacy","purposeIds":[2,4],"featureIds":[],"legIntPurposeIds":[],"id":229,"name":"Digitize New Media Ltd"},{"policyUrl":"https://www.bannerflow.com/privacy ","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3],"id":273,"name":"Bannerflow AB"},{"policyUrl":"http://sonobi.com/privacy-policy/","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3],"id":104,"name":"Sonobi, Inc"},{"policyUrl":"https://unruly.co/privacy/","purposeIds":[2],"featureIds":[1],"legIntPurposeIds":[1,3,5],"id":162,"name":"Unruly Group Ltd"},{"policyUrl":"https://www.spolecznosci.pl/polityka-prywatnosci","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":249,"name":"Spolecznosci Sp. z o.o. Sp. k."},{"policyUrl":"https://www.iotecglobal.com/privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[],"legIntPurposeIds":[],"id":113,"name":"iotec global Ltd."},{"policyUrl":"https://www.valuedopinions.co.uk/privacy","purposeIds":[1,3,5],"featureIds":[],"legIntPurposeIds":[],"id":125,"name":"Research Now Group, Inc"},{"policyUrl":"https://goodwaygroup.com/privacy-policy/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":170,"name":"Goodway Group, Inc."},{"policyUrl":"http://spoldzielnia.nsaudience.pl/opt-out/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":160,"name":"Netsprint SA"},{"policyUrl":"http://www.intowow.com/privacy/","purposeIds":[1,3],"featureIds":[3],"legIntPurposeIds":[],"id":189,"name":"Intowow Innovation Ltd."},{"policyUrl":"https://wwwmirando.de/datenschutz/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":279,"name":"Mirando GmbH \x26amp; Co KG"},{"policyUrl":"https://sanoma.fi/tietoa-meista/tietosuoja/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":269,"name":"Sanoma Media Finland"},{"policyUrl":"https://viralize.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":276,"name":"Viralize SRL"},{"policyUrl":"http://www.geniussports.com/privacy-policy/","purposeIds":[2,4],"featureIds":[2,3],"legIntPurposeIds":[1,3,5],"id":87,"name":"Genius Sports Media Limited"},{"policyUrl":"https://www.vistohub.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":182,"name":"Collective, Inc. dba Visto"},{"policyUrl":"https://www.onnetwork.tv/pp_services.php","purposeIds":[2,3,5],"featureIds":[],"legIntPurposeIds":[1],"id":255,"name":"Onnetwork Sp. z o.o."},{"policyUrl":"https://faq.revcontent.com/customer/en/portal/articles/2703838-revcontent-s-privacy-and-cookie-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":203,"name":"Revcontent, LLC"},{"policyUrl":"https://rockyou.com/privacy-policy/","purposeIds":[3],"featureIds":[3],"legIntPurposeIds":[1,2,5],"id":260,"name":"RockYou, Inc."},{"policyUrl":"http://www.lkqd.com/privacy-policy/","purposeIds":[],"featureIds":[2,3],"legIntPurposeIds":[1,2,3,4,5],"id":237,"name":"LKQD, a division of Nexstar Digital, LLC."},{"policyUrl":"http://goldenbees.fr/notre-politique-de-confidentialite/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":274,"name":"Golden Bees"},{"policyUrl":"http://spot.im/privacy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":280,"name":"Spot.IM Ltd."},{"policyUrl":"https://www.tritondigital.com/privacy-policies","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":239,"name":"Triton Digital Canada Inc."},{"policyUrl":"https://www.plista.com/about/privacy/","purposeIds":[1,2,3,4],"featureIds":[],"legIntPurposeIds":[5],"id":177,"name":"plista GmbH"},{"policyUrl":"https://privacy.timeonegroup.com/en/","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,2,3,4,5],"id":201,"name":"TimeOne"},{"policyUrl":"http://www.inskinmedia.com/privacy-policy.html","purposeIds":[2,3],"featureIds":[],"legIntPurposeIds":[1],"id":150,"name":"Inskin Media LTD"},{"policyUrl":"https://www.jadudamobile.com/datenschutzerklaerung/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,4,5],"id":252,"name":"Jaduda GmbH"},{"policyUrl":"https://converge-digital.com/privacy-policy/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3,4,5],"id":248,"name":"Converge-Digital"},{"policyUrl":"http://smadex.com/end-user-privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":161,"name":"Smadex SL"},{"policyUrl":"http://freewheel.tv/privacy-policy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":285,"name":"Comcast International France SAS"},{"policyUrl":"https://www.primis.tech/wp-content/uploads/2018/02/primisPrivacyPolicy2018.pdf","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":228,"name":"McCann Discipline LTD"},{"policyUrl":"https://www.adclear.de/datenschutzerklaerung/","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,2,3,4,5],"id":299,"name":"AdClear GmbH"},{"policyUrl":"https://voluumdsp.com/end-user-privacy-policy/","purposeIds":[1,2,3,4],"featureIds":[1,2],"legIntPurposeIds":[5],"id":277,"name":"Codewise Sp. z o.o. Sp. k"},{"policyUrl":"https://www.adyoulike.com/privacy_policy.php","purposeIds":[2,4],"featureIds":[],"legIntPurposeIds":[1,3,5],"id":259,"name":"ADYOULIKE SA"},{"policyUrl":"https://www.mobalo.com/datenschutz/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":289,"name":"mobalo GmbH"},{"policyUrl":"https://www.we-are-adot.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":272,"name":"A.Mob"},{"policyUrl":"https://steelhouse.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":230,"name":"Steel House, Inc."},{"policyUrl":"https://www.improvedigital.com/platform-privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":253,"name":"Improve Digital International BV"},{"policyUrl":"https://s.on-device.com/privacyPolicy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":304,"name":"On Device Research Limited"},{"policyUrl":"https://www.keymantics.com/assets/privacy-policy.pdf","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":314,"name":"Keymantics"},{"policyUrl":"http://www.r-target.com/privacy","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[],"id":257,"name":"R-TARGET"},{"policyUrl":"http://www.mainad.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":317,"name":"mainADV Srl"},{"policyUrl":"https://integralads.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":278,"name":"Integral Ad Science, Inc."},{"policyUrl":"https://www.qwertize.com/en/privacy","purposeIds":[1,2,4],"featureIds":[],"legIntPurposeIds":[3,5],"id":291,"name":"Qwertize"},{"policyUrl":"https://www.sojern.com/privacy/product-privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[2],"legIntPurposeIds":[],"id":295,"name":"Sojern, Inc."},{"policyUrl":"https://www.celtra.com/privacy-policy/","purposeIds":[1,3],"featureIds":[3],"legIntPurposeIds":[],"id":315,"name":"Celtra, Inc."},{"policyUrl":"https://www.spotx.tv/privacy-policy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":165,"name":"SpotX"},{"policyUrl":"http://www.adman.gr/privacy","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":47,"name":"ADMAN - Phaistos Networks, S.A."},{"policyUrl":"https://www.smartstream.tv/en/privacy","purposeIds":[1,2,3],"featureIds":[1,2],"legIntPurposeIds":[],"id":134,"name":"SMARTSTREAM.TV GmbH"},{"policyUrl":"https://www.knorex.com/privacy","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":325,"name":"Knorex Pte Ltd"},{"policyUrl":"https://www.gamned.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":316,"name":"Gamned"},{"policyUrl":"http://www.instytut-pollster.pl/privacy-policy/","purposeIds":[2,3,4],"featureIds":[],"legIntPurposeIds":[1,5],"id":318,"name":"Accorp Sp. z o.o."},{"policyUrl":"http://www.adux.com/donnees-personelles/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":199,"name":"ADUX"},{"policyUrl":"https://www.powerlinks.com/privacy-policy/","purposeIds":[1,2,5],"featureIds":[3],"legIntPurposeIds":[3,4],"id":236,"name":"PowerLinks Media Limited"},{"policyUrl":"https://www.jivox.com/privacy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,4,5],"id":294,"name":"Jivox Corporation"},{"policyUrl":"https://connatix.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":143,"name":"Connatix Native Exchange Inc."},{"policyUrl":"https://privacy.polar.me","purposeIds":[2],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":297,"name":"Polar Mobile Group Inc."},{"policyUrl":"https://clipcentric.com/privacy.bhtml","purposeIds":[1,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":319,"name":"Clipcentric, Inc."},{"policyUrl":"http://readpeak.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":290,"name":"Readpeak Oy"},{"policyUrl":"http://www.performgroup.com/media-privacy-notice","purposeIds":[2],"featureIds":[1,2],"legIntPurposeIds":[1,3,4,5],"id":323,"name":"Perform Media Services Ltd"},{"policyUrl":"http://www.s4m.io/privacy-policy/","purposeIds":[2],"featureIds":[1,3],"legIntPurposeIds":[1,3],"id":119,"name":"S4M"},{"policyUrl":"https://mobpro.com/privacy.html","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":302,"name":"Mobile Professionals BV"},{"policyUrl":"http://www.usemax.de/?l\x3dprivacy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":212,"name":"usemax advertisement (Emego GmbH)"},{"policyUrl":"https://www.adobe.com/nz/privacy/marketing-cloud.html","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":264,"name":"Adobe Advertising Cloud"},{"policyUrl":"https://videologygroup.com/en/privacy-policy","purposeIds":[],"featureIds":[1],"legIntPurposeIds":[1,2,3,5],"id":309,"name":"Videology Ltd."},{"policyUrl":"https://www.theadex.com/privacy-opt-out/","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":44,"name":"The ADEX GmbH"},{"policyUrl":"https://www.welect.de/datenschutz","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":282,"name":"Welect GmbH"},{"policyUrl":"https://www.stackadapt.com/privacy","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":238,"name":"StackAdapt"},{"policyUrl":"https://weborama.com/privacy_en/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":284,"name":"WEBORAMA"},{"policyUrl":"https://liveintent.com/services-privacy-policy/","purposeIds":[1],"featureIds":[2],"legIntPurposeIds":[],"id":148,"name":"Liveintent Inc."},{"policyUrl":"http://www.digitru.st/privacy-policy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":64,"name":"DigiTrust / IAB Tech Lab"},{"policyUrl":"https://www.zeotap.com/privacy_policy/","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,2,3,4,5],"id":301,"name":"zeotap GmbH"},{"policyUrl":"http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html","purposeIds":[1,2,3],"featureIds":[1,3],"legIntPurposeIds":[],"id":275,"name":"TabMo SAS"},{"policyUrl":"https://www.vibbo.com/privacidad.htm?ca\x3d0_s","purposeIds":[],"featureIds":[],"legIntPurposeIds":[4],"id":310,"name":"Schibsted Classified Media Spain, S.L."},{"policyUrl":"https://permodo.com/de/privacy.html","purposeIds":[1,2,3],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":139,"name":"Permodo GmbH"},{"policyUrl":"http://www.adtiming.com/en/privacypolicy.html","purposeIds":[3,5],"featureIds":[],"legIntPurposeIds":[1,2,4],"id":326,"name":"AdTiming Technology Company Limited"},{"policyUrl":"https://www.fyber.com/legal/privacy-policy/","purposeIds":[3],"featureIds":[3],"legIntPurposeIds":[],"id":262,"name":"Fyber "},{"policyUrl":"https://www.ad6media.fr/privacy","purposeIds":[1,2,4],"featureIds":[2,3],"legIntPurposeIds":[3,5],"id":331,"name":"ad6media"},{"policyUrl":"http://www.kantar.com/cookies-policies","purposeIds":[1,3,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":345,"name":"The Kantar Group Limited"},{"policyUrl":"http://scoota.com/privacy-policy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[2,3],"id":308,"name":"Rockabox Media Ltd"},{"policyUrl":"https://www.marfeel.com/privacy-policy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":270,"name":"Marfeel Solutions S.L"},{"policyUrl":"https://www.inmobi.com/privacy-policy-for-eea","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":333,"name":"InMobi Pte Ltd"},{"policyUrl":"https://telaria.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":202,"name":"Telaria, Inc"},{"policyUrl":"https://www.gemius.com/cookie-policy.html","purposeIds":[1,2,3,4,5],"featureIds":[2],"legIntPurposeIds":[],"id":328,"name":"Gemius SA"},{"policyUrl":"https://www.wizaly.com/terms-of-use#privacy-policy","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,5],"id":281,"name":"Wizaly"},{"policyUrl":"https://apester.com/privacy-policy/","purposeIds":[2],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":354,"name":"Apester Ltd"},{"policyUrl":"https://adelphic.com/platform/privacy/","purposeIds":[1,2,3],"featureIds":[2,3],"legIntPurposeIds":[],"id":320,"name":"Adelphic LLC"},{"policyUrl":"https://www.aerserv.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":359,"name":"Aerserv LLC"},{"policyUrl":"https://instinctive.io/privacy","purposeIds":[2,3,4],"featureIds":[],"legIntPurposeIds":[1,5],"id":265,"name":"Instinctive, Inc."},{"policyUrl":"http://optomaton.com/privacy.html","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[],"id":349,"name":"Optomaton UG"},{"policyUrl":"http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf","purposeIds":[2],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":288,"name":"Video Media Groep B.V."},{"policyUrl":"https://www.digilant.com/es/politica-privacidad/","purposeIds":[1,2,3,4,5],"featureIds":[1],"legIntPurposeIds":[],"id":266,"name":"Digilant Spain, SLU"},{"policyUrl":"https://www.vuble.tv/us/privacy","purposeIds":[2,3,4,5],"featureIds":[],"legIntPurposeIds":[1],"id":339,"name":"Vuble"},{"policyUrl":"http://static.orion-semantics.com/privacy.html","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":303,"name":"Orion Semantics"},{"policyUrl":"https://www.signal.co/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":261,"name":"Signal Digital Inc."},{"policyUrl":"http://primo.design/docs/PrivacyPolicyPrimo.html","purposeIds":[5],"featureIds":[],"legIntPurposeIds":[],"id":83,"name":"Visarity Technologies GmbH"},{"policyUrl":"https://www.ultimedia.com/POLICY.html","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[1,2,3,4,5],"id":343,"name":"DIGITEKA Technologies"},{"policyUrl":"https://www.linicom.com/privacy/","purposeIds":[2],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":330,"name":"Linicom"},{"policyUrl":"https://www.acuityads.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":231,"name":"Acuityads Inc."},{"policyUrl":"http://mindlytix.com/privacy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":216,"name":"Mindlytix SAS"},{"policyUrl":"https://permutive.com/privacy","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1],"id":360,"name":"Permutive Technologies, Inc."},{"policyUrl":"https://permutive.com/privacy","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1],"id":361,"name":"Permutive Ltd."},{"policyUrl":"https://www.mobfox.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":311,"name":"Mobfox US LLC"},{"policyUrl":"https://www.mgid.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1],"legIntPurposeIds":[],"id":358,"name":"MGID Inc."},{"policyUrl":"https://www.meetrics.com/en/data-privacy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":152,"name":"Meetrics GmbH"},{"policyUrl":"http://www.yieldlove.com/cookie-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":251,"name":"Yieldlove GmbH"},{"policyUrl":"http://seeding-alliance.de/datenschutz","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,4,5],"id":371,"name":"Seeding Alliance GmbH"},{"policyUrl":"https://my6sense.com/privacy-policy/","purposeIds":[1,3,5],"featureIds":[],"legIntPurposeIds":[2,4],"id":344,"name":"My6sense Inc."},{"policyUrl":"https://www.ezoic.com/terms/","purposeIds":[2,4,5],"featureIds":[],"legIntPurposeIds":[1],"id":347,"name":"Ezoic Inc."},{"policyUrl":"http://www.bigabid.com/data-protection/gdpr","purposeIds":[],"featureIds":[2,3],"legIntPurposeIds":[1,2,3,4,5],"id":218,"name":"Bigabid Media Ltd"},{"policyUrl":"https://samba.tv/legal/privacy-policy-2-28-2018/","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":350,"name":"Free Stream Media Corp. dba Samba TV"},{"policyUrl":"https://samba.tv/legal/privacy-policy-2-28-2018/","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":351,"name":"Samba TV UK Limited"},{"policyUrl":"https://somoaudience.com/legal/","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3],"id":341,"name":"Somo Audience Corp"},{"policyUrl":"https://realzeitmedia.com/privacy.html","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":191,"name":"realzeit GmbH"},{"policyUrl":"http://vidoomy.com/privacy-policy.html","purposeIds":[1,2],"featureIds":[2,3],"legIntPurposeIds":[3,4,5],"id":380,"name":"Vidoomy Media SL"},{"policyUrl":"https://www.communicationads.net/aboutus/privacy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1],"id":378,"name":"communicationAds GmbH \x26amp; Co. KG"},{"policyUrl":"https://getintent.com/privacy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":369,"name":"Getintent USA, inc."},{"policyUrl":"https://www.mediarithmics.com/en-us/content/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":184,"name":"mediarithmics SAS"},{"policyUrl":"https://www.vectaury.io/en/personal-data","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":368,"name":"VECTAURY"},{"policyUrl":"http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html","purposeIds":[1,2],"featureIds":[1,2],"legIntPurposeIds":[5],"id":373,"name":"Nielsen Marketing Cloud"},{"policyUrl":"http://advolution.de/privacy.php","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":214,"name":"Digital Control GmbH \x26amp; Co. KG"},{"policyUrl":"http://ads.1000mercis.com/fr.html","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":388,"name":"numberly"},{"policyUrl":"https://www.qriously.com/privacy","purposeIds":[2,3,4],"featureIds":[],"legIntPurposeIds":[1],"id":250,"name":"Qriously"},{"policyUrl":"https://atp.io/privacy-policy","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,5],"id":223,"name":"Audience Trading Platform Ltd."},{"policyUrl":"http://pixalate.com/privacypolicy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,5],"id":384,"name":"Pixalate, Inc."},{"policyUrl":"https://appreciate.mobi/page.html#/end-user-privacy-policy","purposeIds":[1,3,5],"featureIds":[],"legIntPurposeIds":[],"id":387,"name":"Triapodi Ltd."},{"policyUrl":"https://www.exactag.com/en/data-privacy/","purposeIds":[1,5],"featureIds":[],"legIntPurposeIds":[],"id":312,"name":"Exactag GmbH"},{"policyUrl":"https://affectv.com/privacy-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":178,"name":"Affectv Ltd"},{"policyUrl":"https://www.addapptr.com/data-privacy","purposeIds":[1,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":377,"name":"AddApptr GmbH"},{"policyUrl":"https://www.reachgroup.com/en/privacy-statement/","purposeIds":[1,2,4,5],"featureIds":[],"legIntPurposeIds":[3],"id":382,"name":"The Reach Group GmbH"},{"policyUrl":"https://hybrid.ai/data_protection_policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":206,"name":"Hybrid Adtech GmbH"},{"policyUrl":"https://www.mobusi.com/privacy.en.html","purposeIds":[1,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":403,"name":"Mobusi Mobile Advertising S.L."},{"policyUrl":"https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[5],"id":385,"name":"Oracle"},{"policyUrl":"https://www.easy-ads.com/privacypolicy.htm","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,5],"id":404,"name":"Duplo Media AS"},{"policyUrl":"https://www.twiago.com/datenschutz/","purposeIds":[],"featureIds":[2,3],"legIntPurposeIds":[1,2,3,4,5],"id":242,"name":"twiago GmbH"},{"policyUrl":"https://www.pocketmath.com/privacy-policy","purposeIds":[1,2,3,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":376,"name":"Pocketmath Pte Ltd"},{"policyUrl":"https://inter.effiliation.com/politique-confidentialite.html","purposeIds":[2,3,4,5],"featureIds":[2],"legIntPurposeIds":[],"id":402,"name":"Effiliation"},{"policyUrl":"https://www.eulerian.com/en/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":413,"name":"Eulerian Technologies"},{"policyUrl":"http://seenergy.com/privacy.html","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,5],"id":391,"name":"Seenergy Netherlands B.V."},{"policyUrl":"https://www.whenevermedia.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":400,"name":"Whenever Media Ltd"},{"policyUrl":"http://www.webedia-group.com/site/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":171,"name":"Webedia"},{"policyUrl":"http://www.yormedia.com/privacy-and-cookies-notice/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":398,"name":"Yormedia Solutions Ltd"},{"policyUrl":"https://seenthis.co/privacy-notice-2018-04-18.pdf","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1],"id":415,"name":"Seenthis AB"},{"policyUrl":"https://www.nativo.com/interest-based-ads","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":263,"name":"Nativo, Inc."},{"policyUrl":"http://gobrowsi.com/browsi-privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,5],"id":329,"name":"Browsi Mobile Ltd"},{"policyUrl":"http://www.parsec.media/privacy-policy","purposeIds":[1,3],"featureIds":[1,3],"legIntPurposeIds":[5],"id":390,"name":"Parsec Media Inc."},{"policyUrl":"https://www.adspert.net/en/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":389,"name":"Bidmanagement GmbH"},{"policyUrl":"http://corporate.shemedia.com/faq/ad-services-privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":337,"name":"SheMedia, LLC"},{"policyUrl":"https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":422,"name":"Brand Metrics Sweden AB"},{"policyUrl":"https://liqwid.solutions/privacy-policy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,4,5],"id":421,"name":"LeftsnRight, Inc. dba LIQWID"},{"policyUrl":"https://tradetracker.com/privacy-policy/","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,3,5],"id":426,"name":"TradeTracker"},{"policyUrl":"https://privacy.audienceproject.com","purposeIds":[1,2],"featureIds":[1,2],"legIntPurposeIds":[3,4,5],"id":394,"name":"AudienceProject Aps"},{"policyUrl":"http://avazuinc.com/opt-out/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,3,4],"id":287,"name":"Avazu Inc."},{"policyUrl":"http://onaudience.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":243,"name":"Cloud Technologies S.A."},{"policyUrl":"https://www.sociomantic.com/privacy/en/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":338,"name":"dunnhumby Germany GmbH"},{"policyUrl":"https://www.isitelab.io/default.aspx","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,3,4,5],"id":405,"name":"IgnitionAi Ltd"},{"policyUrl":"https://www.commandersact.com/en/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":416,"name":"Commanders Act"},{"policyUrl":"http://eu.dynadmic.com/privacy-policy/","purposeIds":[1,3],"featureIds":[1,3],"legIntPurposeIds":[2,4],"id":434,"name":"DynAdmic"},{"policyUrl":"https://www.singlespot.com/privacy_policy?locale\x3dfr","purposeIds":[1,2,3],"featureIds":[1,3],"legIntPurposeIds":[],"id":435,"name":"SINGLESPOT SAS "},{"policyUrl":"https://www.arrivalist.com/privacy","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,3,5],"id":409,"name":"Arrivalist Co."},{"policyUrl":"http://www.ziffdavis.com/privacy-policy","purposeIds":[1,2,3,5],"featureIds":[2],"legIntPurposeIds":[],"id":321,"name":"Ziff Davis LLC"},{"policyUrl":"http://www.invibes.com/terms","purposeIds":[2,3,4],"featureIds":[1,2,3],"legIntPurposeIds":[1,5],"id":436,"name":"INVIBES GROUP"},{"policyUrl":"http://www.tradedoubler.com/en/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":442,"name":"R-Advertising"},{"policyUrl":"http://www.myntelligence.com/privacy-page/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":362,"name":"Myntelligence Limited"},{"policyUrl":"https://www.proxistore.com/common/en/cgv","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3],"id":418,"name":"PROXISTORE"},{"policyUrl":"https://mobilejourney.com/Privacy-Policy","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,3,5],"id":449,"name":"Mobile Journey B.V."},{"policyUrl":"https://www.tradedoubler.com/en/privacy-policy/","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,5],"id":443,"name":"Tradedoubler AB"},{"policyUrl":"https://signalsdata.com/platform-cookie-policy/","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":429,"name":"Signals"},{"policyUrl":"http://beachfront.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":335,"name":"Beachfront Media LLC"},{"policyUrl":"https://www.pi-rate.com.au/privacy.html","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3,4,5],"id":407,"name":"Publishers Internationale Pty Ltd"},{"policyUrl":"https://proxi.cloud/info/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":427,"name":"Proxi.cloud Sp. z o.o."},{"policyUrl":"http://www.bmind.es/legal-notice/","purposeIds":[1,2,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":374,"name":"Bmind a Sales Maker Company, S.L."},{"policyUrl":"https://ooyala.com/privacy","purposeIds":[1,2,3],"featureIds":[2,3],"legIntPurposeIds":[],"id":438,"name":"Ooyala Inc"},{"policyUrl":"https://www.neodatagroup.com/en/security-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,3],"legIntPurposeIds":[],"id":450,"name":"Neodata Group srl"},{"policyUrl":"http://www.innovid.com/privacy-policy","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[5],"id":452,"name":"Innovid Inc."},{"policyUrl":"https://www.playbuzz.com/PrivacyPolicy","purposeIds":[2],"featureIds":[3],"legIntPurposeIds":[1,3,4,5],"id":444,"name":"Playbuzz Ltd. "},{"policyUrl":"https://www.cxense.com/about-us/privacy-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,4,5],"id":412,"name":"Cxense ASA"},{"policyUrl":"https://adimo.co/privacy-policy/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[5],"id":454,"name":"Adimo"},{"policyUrl":"https://springserve.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3],"id":293,"name":"SpringServe, LLC"},{"policyUrl":"https://fiksu.com/privacy-policy/","purposeIds":[1,2,3],"featureIds":[2,3],"legIntPurposeIds":[],"id":455,"name":"GDMServices, Inc. d/b/a FiksuDSP"},{"policyUrl":"https://www.cuebiq.com/privacypolicy/","purposeIds":[1,2,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":298,"name":"Cuebiq Inc."},{"policyUrl":"https://travelaudience.com/product-privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":423,"name":"travel audience GmbH"},{"policyUrl":"https://www.demandbase.com/privacy-policy/","purposeIds":[1],"featureIds":[1,2,3],"legIntPurposeIds":[2,3,4,5],"id":397,"name":"Demandbase, Inc. "},{"policyUrl":"https://client.adhslx.com/privacy.html ","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":381,"name":"DTS (Filiale de Solocal Group)"},{"policyUrl":"http://www.adrino.pl/ciasteczkowa-polityka/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":425,"name":"ADRINO Sp. z o.o."},{"policyUrl":"https://impact.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,5],"id":365,"name":"Forensiq LLC"},{"policyUrl":"https://adludio.com/privacypolicy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":447,"name":"Adludio Ltd"},{"policyUrl":"https://adtelligent.com/privacy-policy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":410,"name":"Adtelligent Inc."},{"policyUrl":"https://privacy.mbr-targeting.com/?optedIn\x3dtrue","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3],"id":137,"name":"mbr targeting GmbH"},{"policyUrl":"http://www.programmatic-exchange.com/privacy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,5],"id":395,"name":"PREX Programmatic Exchange GmbH\x26amp;Co KG"},{"policyUrl":"https://bidstack.com/policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":462,"name":"bidstack ltd"},{"policyUrl":"https://tacticrealtime.com/privacy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":466,"name":"TACTIC\u2122 Real-Time Marketing AS"},{"policyUrl":"https://www.yieldr.com/privacy","purposeIds":[1,2,3,4,5],"featureIds":[1,3],"legIntPurposeIds":[],"id":340,"name":"Yieldr UK"},{"policyUrl":"https://www.whiteops.com/privacy","purposeIds":[],"featureIds":[1,3],"legIntPurposeIds":[1,5],"id":431,"name":"White Ops, Inc."},{"policyUrl":"https://netzwerk.uppr.de/privacy-policy.do","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3,5],"id":459,"name":"uppr GmbH"},{"policyUrl":"http://www.telecoming.com/privacy-policy/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,4],"id":336,"name":"Telecoming S.A."},{"policyUrl":"http://www.adunity.com/privacy-policy.html","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3],"id":430,"name":"Ad Unity Ltd"},{"policyUrl":"http://cybba.com/about/legal/data-processing-agreement/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":346,"name":"Cybba, Inc."},{"policyUrl":"https://zetaglobal.com/privacy-policy/","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,2,3,4,5],"id":469,"name":"Zeta Global"},{"policyUrl":"http://www.definemedia.de/datenschutz-conative/","purposeIds":[2,3,4],"featureIds":[],"legIntPurposeIds":[1,5],"id":440,"name":"DEFINE MEDIA GMBH"},{"policyUrl":"https://www.revx.io/privacy-policy","purposeIds":[1,2,3],"featureIds":[3],"legIntPurposeIds":[],"id":375,"name":"RevX Inc."},{"policyUrl":"http://adelement.com/privacy-policy.html","purposeIds":[1,2,4],"featureIds":[3],"legIntPurposeIds":[3,5],"id":196,"name":"AdElement Media Solutions Pvt Ltd"},{"policyUrl":"http://woobi.com/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":268,"name":"Social Tokens Ltd. "},{"policyUrl":"http://www.taptapnetworks.com/privacy_policy/","purposeIds":[1,2,3],"featureIds":[1,2,3],"legIntPurposeIds":[4,5],"id":475,"name":"TAPTAP Networks SL"},{"policyUrl":"http://www.hbfstech.com/fr/privacy.html","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2],"id":474,"name":"hbfsTech"},{"policyUrl":"http://marketing.targetspot.com/Targetspot/Legal/TargetSpot%20Privacy%20Policy%20-%20June%202018.pdf","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":448,"name":"TARGETSPOT BELGIUM SPRL"},{"policyUrl":"http://www.ibillboard.com/en/privacy-information/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,3,4,5],"id":428,"name":"Internet BillBoard a.s."},{"policyUrl":"https://www.selfcampaign.com/static/privacy","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":461,"name":"B2B Media Group EMEA GmbH"},{"policyUrl":"http://hiro-media.com/privacy.php","purposeIds":[],"featureIds":[1],"legIntPurposeIds":[1,2,3,4,5],"id":476,"name":"HIRO Media Ltd"},{"policyUrl":"https://pilotx.tv/privacy/","purposeIds":[2,3],"featureIds":[1,2,3],"legIntPurposeIds":[1,4,5],"id":480,"name":"pilotx.tv"},{"policyUrl":"https://www.cerebroad.com/privacy-policy","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":366,"name":"CerebroAd.com s.r.o."},{"policyUrl":"https://stroeermobileperformance.com/?dl\x3dprivacy","purposeIds":[2,3,4],"featureIds":[3],"legIntPurposeIds":[1,5],"id":392,"name":"Str\u00f6er Mobile Performance GmbH"},{"policyUrl":"http://www.lemomedia.com/terms.pdf","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":221,"name":"LEMO MEDIA GROUP LIMITED"},{"policyUrl":"https://www.totaljobs.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":357,"name":"Totaljobs Group Ltd "},{"policyUrl":"https://delivered-by-madington.com/dat-privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,5],"id":486,"name":"Madington"},{"policyUrl":"https://www.home.neustar/privacy","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[2,3,4,5],"id":468,"name":"Neustar, Inc."},{"policyUrl":"http://www.adcolony.com/privacy-policy","purposeIds":[],"featureIds":[1],"legIntPurposeIds":[1,2,3,5],"id":458,"name":"AdColony, Inc."},{"policyUrl":"https://www.revlifter.com/privacy-policy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[2],"id":478,"name":"RevLifter Ltd"},{"policyUrl":"http://www.yhmg.com/privacy-policy/","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":489,"name":"YellowHammer Media Group"},{"policyUrl":"https://adledge.com/data-privacy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[5],"id":484,"name":"Adledge"},{"policyUrl":"https://carbondmp.com/privacy.html","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[5],"id":493,"name":"Clicksco Digital Limited"},{"policyUrl":"https://s3.eu-west-2.amazonaws.com/public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":495,"name":"Arcspire Limited"},{"policyUrl":"https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/","purposeIds":[1,2,3,4],"featureIds":[],"legIntPurposeIds":[],"id":496,"name":"Automattic Inc."},{"policyUrl":"https://www.kupona.de/dsgvo/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3,5],"id":424,"name":"KUPONA GmbH"},{"policyUrl":"https://fidelity-media.com/privacy-policy/","purposeIds":[2],"featureIds":[3],"legIntPurposeIds":[1,3,4,5],"id":408,"name":"FM Labs LLC"},{"policyUrl":"http://www.sub2tech.com/privacy-policy/","purposeIds":[3,4,5],"featureIds":[],"legIntPurposeIds":[1,2],"id":473,"name":"Sub2 Technologies Ltd"},{"policyUrl":"https://haensel-ams.com/data-privacy/","purposeIds":[3,5],"featureIds":[2],"legIntPurposeIds":[],"id":467,"name":"Haensel AMS GmbH"},{"policyUrl":"https://opinary.com/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":488,"name":"Opinary GmbH"},{"policyUrl":"https://playground.xyz/privacy/privacy-policy.pdf","purposeIds":[1,3,5],"featureIds":[],"legIntPurposeIds":[],"id":490,"name":"PLAYGROUND XYZ EMEA LTD"},{"policyUrl":"http://www.addthis.com/privacy/privacy-policy/","purposeIds":[1,2,3,4],"featureIds":[2],"legIntPurposeIds":[5],"id":464,"name":"Oracle AddThis"},{"policyUrl":"https://www.shinystat.com/it/informativa_sito.html","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":491,"name":"Triboo Data Analytics"},{"policyUrl":"https://purposelab.com/privacy/","purposeIds":[5],"featureIds":[],"legIntPurposeIds":[],"id":499,"name":"PurposeLab, LLC"},{"policyUrl":"http://www.turboadv.com/white-rabbit-privacy-policy/","purposeIds":[1,2,3,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":500,"name":"Turbo"},{"policyUrl":"https://nexd.com/privacy-policy","purposeIds":[3,5],"featureIds":[3],"legIntPurposeIds":[1,2,4],"id":502,"name":"NEXD"},{"policyUrl":"https://www.schibsted.com/","purposeIds":[1,2,3,4,5],"featureIds":[1],"legIntPurposeIds":[],"id":465,"name":"Schibsted Product and Tech UK"},{"policyUrl":"http://dtxngr.com/legal/","purposeIds":[1,2,4],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":497,"name":"Little Big Data sp.z.o.o."},{"policyUrl":"https://lotadata.com/privacy_policy","purposeIds":[],"featureIds":[1],"legIntPurposeIds":[1,5],"id":492,"name":"LotaData, Inc."},{"policyUrl":"https://luc.id/gdpr","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":508,"name":"Lucid Holdings, LLC"},{"policyUrl":"https://pubnative.net/privacy-notice/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":512,"name":"PubNative GmbH"},{"policyUrl":"https://www.flexoffers.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":471,"name":"FlexOffers.com, LLC"},{"policyUrl":"https://cablato.com/privacy","purposeIds":[1,2,4,5],"featureIds":[],"legIntPurposeIds":[],"id":494,"name":"Cablato Limited"},{"policyUrl":"https://pexi.nl/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":516,"name":"Pexi B.V."},{"policyUrl":"https://www.adswizz.com/our-privacy-policy/","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,5],"id":507,"name":"AdsWizz Inc."},{"policyUrl":"http://ubermedia.com/company/products-privacy-policy/#ADDITIONAL_NOTICE","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":482,"name":"UberMedia, Inc."},{"policyUrl":"https://www.shortlyst.com/eu/privacy_terms.html","purposeIds":[1,2],"featureIds":[],"legIntPurposeIds":[],"id":505,"name":"Shopalyst Inc"},{"policyUrl":"https://www.sunmedia.tv/en/cookies","purposeIds":[1,2],"featureIds":[2],"legIntPurposeIds":[3],"id":517,"name":"SunMedia "},{"policyUrl":"https://getcake.com/privacy-policy/","purposeIds":[1],"featureIds":[2,3],"legIntPurposeIds":[5],"id":518,"name":"Accelerize Inc."},{"policyUrl":"https://admixer.net/privacy","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":511,"name":"Admixer EU GmbH"},{"policyUrl":"http://www.infiniamobile.com/privacy_policy","purposeIds":[1,2,3],"featureIds":[2,3],"legIntPurposeIds":[],"id":479,"name":"INFINIA MOBILE S.L."},{"policyUrl":"https://www.shopstyle.co.uk/privacy","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":513,"name":"Shopstyle"},{"policyUrl":"http://advandeo.com/privacy-policy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":509,"name":"ATG Ad Tech Group GmbH"},{"policyUrl":"https://www.netzeffekt.de/en/imprint","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[3,5],"id":521,"name":"netzeffekt GmbH"},{"policyUrl":"https://www.nugg.ad/en/privacy/general-information.html","purposeIds":[],"featureIds":[1],"legIntPurposeIds":[1,2,3,5],"id":487,"name":"nugg.ad GmbH"},{"policyUrl":"https://zighzag.com/privacy","purposeIds":[1,3],"featureIds":[1,2],"legIntPurposeIds":[5],"id":515,"name":"ZighZag"},{"policyUrl":"https://www.channelsight.com/privacypolicy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[5],"id":520,"name":"ChannelSight "},{"policyUrl":"https://ozoneproject.com/privacy-policy","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":524,"name":"The Ozone Project Limited"},{"policyUrl":"https://www.fidzup.com/en/privacy/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":529,"name":"Fidzup"},{"policyUrl":"https://www.applift.com/privacy-notice","purposeIds":[1,2,3,5],"featureIds":[],"legIntPurposeIds":[],"id":528,"name":"AppLift GmbH "},{"policyUrl":"https://jampp.com/privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":527,"name":"Jampp LTD"},{"policyUrl":"https://www.salesforce.com/company/privacy/","purposeIds":[1,2,3],"featureIds":[2],"legIntPurposeIds":[],"id":506,"name":"salesforce.com, inc."},{"policyUrl":"https://smartyads.com/privacy-policy","purposeIds":[1,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":534,"name":"SmartyAds Inc."},{"policyUrl":"https://www.innity.com/privacy-policy.php","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":535,"name":"INNITY"},{"policyUrl":"https://uprival.com/privacy-policy/","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[],"id":514,"name":"Uprival LLC"},{"policyUrl":"https://tealium.com/privacy/","purposeIds":[2,3,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":522,"name":"Tealium Inc"},{"policyUrl":"https://near.co/privacy","purposeIds":[1,2,3,5],"featureIds":[3],"legIntPurposeIds":[],"id":530,"name":"Near Pte Ltd"},{"policyUrl":"https://www.addefend.com/en/privacy-policy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":539,"name":"AdDefend GmbH"},{"policyUrl":"https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":501,"name":"Alliance Gravity Data Media"},{"policyUrl":"https://www.chargeplatform.com/privacy","purposeIds":[1,2],"featureIds":[1,2,3],"legIntPurposeIds":[3,4,5],"id":519,"name":"Chargeads"},{"policyUrl":"http://xmode.io/privacy-policy.html","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":523,"name":"X-Mode Social, Inc."},{"policyUrl":"http://www.runads.com/privacy-policy","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":537,"name":"RUN, Inc."},{"policyUrl":"http://rgpd-smartclip.com/","purposeIds":[1,2,3,5],"featureIds":[],"legIntPurposeIds":[],"id":531,"name":"Smartclip Hispania SL"},{"policyUrl":"http://legal.trendstream.net/non-panellist_privacy_policy","purposeIds":[1],"featureIds":[1,2],"legIntPurposeIds":[3,5],"id":536,"name":"GlobalWebIndex"},{"policyUrl":"https://densou.dk/Policy.html","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":542,"name":"Densou Trading Desk ApS"},{"policyUrl":"https://rta.pubocean.com/privacy-policy/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[5],"id":525,"name":"PUB OCEAN LIMITED"},{"policyUrl":"https://www.kochava.com/support-privacy/","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,5],"id":544,"name":"Kochava Inc."},{"policyUrl":"https://www.makethunder.com/privacy","purposeIds":[1,2],"featureIds":[],"legIntPurposeIds":[3,4,5],"id":543,"name":"PaperG, Inc. dba Thunder Industries"},{"policyUrl":"http://www.videmob.com/privacy.html","purposeIds":[],"featureIds":[2,3],"legIntPurposeIds":[1,2,3,4],"id":334,"name":"Cydersoft"},{"policyUrl":"https://www.weareilluma.com/endddd","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[3],"id":551,"name":"Illuma Technology Limited"},{"policyUrl":"https://tunnl.com/privacy.html","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":540,"name":"Tunnl BV"},{"policyUrl":"https://www.videoreach.de/about/privacy-policy/","purposeIds":[1,3],"featureIds":[],"legIntPurposeIds":[],"id":547,"name":"Video Reach"},{"policyUrl":"https://smart-traffik.io/politique-de-confidentialite","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3,4,5],"id":546,"name":"Smart Traffik"},{"policyUrl":"https://www.deepintent.com/platform-privacy-policy/","purposeIds":[],"featureIds":[3],"legIntPurposeIds":[1,2,3,4,5],"id":541,"name":"DeepIntent, Inc."},{"policyUrl":"https://www.reignn.com/user-privacy-policy/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":545,"name":"ReigNN Platform Ltd."},{"policyUrl":"https://bitqueen.com/privacy","purposeIds":[1,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":439,"name":"Bit Q Holdings Limited"},{"policyUrl":"https://adhese.com/privacy-and-cookie-policy","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":553,"name":"Adhese"},{"policyUrl":"http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang\x3den","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":556,"name":"adhood.com"},{"policyUrl":"https://www.iubenda.com/privacy-policy/69056167/full-legal","purposeIds":[5],"featureIds":[1,3],"legIntPurposeIds":[],"id":550,"name":"Happydemics"},{"policyUrl":"http://www.leiki.com/privacy","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[4],"id":560,"name":"Leiki Ltd."},{"policyUrl":"https://www.rms.de/datenschutz/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":554,"name":"RMSi Radio Marketing Service interactive GmbH"},{"policyUrl":"https://drbanner.com/privacypolicy_en/","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3],"id":498,"name":"Dr. Banner"},{"policyUrl":"https://www.adobe.com/privacy/policy.html","purposeIds":[1,2,5],"featureIds":[],"legIntPurposeIds":[],"id":565,"name":"Adobe Audience Manager"},{"policyUrl":"http://www.drawbridge.com/privacy/","purposeIds":[1],"featureIds":[2],"legIntPurposeIds":[],"id":118,"name":"Drawbridge, Inc."},{"policyUrl":"http://www.cheq.ai/privacy","purposeIds":[1],"featureIds":[],"legIntPurposeIds":[5],"id":572,"name":"CHEQ AI TECHNOLOGIES LTD."},{"policyUrl":"http://viewpay.tv/mentions-legales/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":571,"name":"ViewPay"},{"policyUrl":"https://www.jointag.com/privacy/kariboo/publisher/third/","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":568,"name":"Jointag S.r.l."},{"policyUrl":"https://www.cpex.cz/pro-uzivatele/ochrana-soukromi/","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":570,"name":"Czech Publisher Exchange z.s.p.o."},{"policyUrl":"https://www.otto.de/shoppages/service/datenschutz","purposeIds":[],"featureIds":[2],"legIntPurposeIds":[1,2,3,4,5],"id":559,"name":"Otto (GmbH \x26amp; Co KG)"},{"policyUrl":"https://www.leboncoin.fr/dc/cookies","purposeIds":[1,2,3,4,5],"featureIds":[2,3],"legIntPurposeIds":[],"id":548,"name":"LBC France"},{"policyUrl":"http://kairosfire.com","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3],"id":569,"name":"Kairos Fire"},{"policyUrl":"https://www.pg.com/privacy/english/privacy_statement.shtml","purposeIds":[],"featureIds":[1,2],"legIntPurposeIds":[1,2,3,4,5],"id":577,"name":"Neustar on behalf of The Procter \x26amp; Gamble Company "},{"policyUrl":"https://www.sourcepoint.com/privacy-policy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[1,2,3,4,5],"id":590,"name":"Sourcepoint Technologies, Inc."},{"policyUrl":"https://www.localsensor.com/privacy.html","purposeIds":[1,2,3,4,5],"featureIds":[1,3],"legIntPurposeIds":[],"id":587,"name":"Localsensor B.V."},{"policyUrl":"https://mairdumont-netletix.com/datenschutz","purposeIds":[1,2,3,4,5],"featureIds":[3],"legIntPurposeIds":[],"id":578,"name":"MAIRDUMONT NETLETIX GmbH\x26amp;Co. KG"},{"policyUrl":"https://goldbach.com/ch/de/datenschutz","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":580,"name":"Goldbach Group AG"},{"policyUrl":"https://datmean.com/politica-privacidad/","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":593,"name":"Programatica de publicidad S.L."},{"policyUrl":"https://www.realeyesit.com/privacy","purposeIds":[1,2,3,4,5],"featureIds":[1,2],"legIntPurposeIds":[],"id":574,"name":"Realeyes O\u00dc"},{"policyUrl":"https://www.mobilewalla.com/business-services-privacy-policy","purposeIds":[],"featureIds":[1,2,3],"legIntPurposeIds":[1,2,3,4,5],"id":581,"name":"Mobilewalla, Inc."},{"policyUrl":"https://www.audio-cc.com/audiocc_privacy_policy.pdf","purposeIds":[1],"featureIds":[3],"legIntPurposeIds":[3,4,5],"id":598,"name":"audio content \x26amp; control GmbH"},{"policyUrl":"https://www.insurads.com/privacy.html","purposeIds":[3],"featureIds":[3],"legIntPurposeIds":[5],"id":596,"name":"InsurAds Technologies SA."},{"policyUrl":"https://www.startapp.com/policy/privacy-policy/","purposeIds":[2],"featureIds":[3],"legIntPurposeIds":[1,3,4,5],"id":576,"name":"StartApp Inc."},{"policyUrl":"https://privacy-policy.colpirio.com/en/","purposeIds":[1,2,3,4,5],"featureIds":[],"legIntPurposeIds":[],"id":592,"name":"Colpirio.com"},{"policyUrl":"http://corp.bandsintown.com/privacy","purposeIds":[1,2,3,4,5],"featureIds":[2],"legIntPurposeIds":[],"id":549,"name":"Bandsintown Amplified LLC"},{"policyUrl":"https://betterbanners.com/en/privacy","purposeIds":[],"featureIds":[],"legIntPurposeIds":[3,5],"id":597,"name":"Better Banners A/S"},{"policyUrl":"https://dynamic-tracking.com/Datenschutz.aspx","purposeIds":[3],"featureIds":[],"legIntPurposeIds":[1],"id":584,"name":"Dynamic 1001 GmbH"},{"policyUrl":"http://privacy.webads.eu/","purposeIds":[1,2,3],"featureIds":[],"legIntPurposeIds":[],"id":601,"name":"WebAds B.V"},{"policyUrl":"https://maximusx.com/privacy-policy/","purposeIds":[],"featureIds":[2,3],"legIntPurposeIds":[1,3,4,5],"id":599,"name":"Maximus Live LLC"},{"policyUrl":"https://www.teamjoin.fr/privacy.html","purposeIds":[1,2,3,4,5],"featureIds":[1,2,3],"legIntPurposeIds":[],"id":604,"name":"Join"}]}'
        };
        e.iabVendorJson && !L.vendorList && (L.vendorList = JSON.parse(e.iabVendorJson));
        return e
    }

    function Sb() {
        for (var e = K(), q = document.getElementsByTagName("script"), t = 0; t < q.length; ++t) {
            var z;
            z = q[t];
            var A = e.cctId;
            z = z.getAttribute("src") ? -1 !== z.getAttribute("src").indexOf(A) : !1;
            if (z) {
                Ra = Fb(q[t].src);
                break
            }
        }
    }

    function La(e) {
        var q = Fb(e);
        Ra && q && Ra.hostname !== q.hostname && (e = e.replace(q.hostname, Ra.hostname));
        return e
    }

    function Fb(e) {
        var q = document.createElement("a");
        q.href = e;
        return q
    }

    function Gb(e) {
        B("NotLandingPage");
        P && ab(P);
        if (!e) {
            e = [];
            var q = z(".optanon-vendor-status-editable .optanon-vendor-status:checked");
            if (q)
                for (var A = 0; A < q.length; A++) e.push(q[A].id + ":true");
            L.vendors = e
        }
        ta("OptanonConsent");
        M();
        t(!1)
    }

    function eb(e) {
        var q = document.querySelector("#optanon-popup-wrapper");
        13 === e.keyCode && q.focus()
    }

    function Tb(e) {
        var q = document.querySelector(".optanon-toggle-display.cookie-settings-button");
        27 === e.keyCode && (q.focus(), fb(e))
    }

    function fb(e) {
        var q = document.querySelector(".optanon-close-ui"),
            t = document.querySelector("#optanon-popup-top").children[0],
            z = document.querySelector("#optanon-popup-bottom").children,
            A = document.querySelector("#optanon-menu").children,
            B = document.querySelector("#optanon-vendor-consent-text"),
            D = document.querySelector("#optanon");
        if (13 === e.keyCode || 27 === e.keyCode) sa(), document.querySelector(".optanon-toggle-display.cookie-settings-button").focus(), t ? t.removeEventListener("keydown", Sa) : A[0].removeEventListener("keydown", Sa), 0 < z.length && ("block" === document.querySelector(".optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all").style.display ?
            z[z.length - 1].removeEventListener("keydown", Ta) : z[z.length - 2].removeEventListener("keydown", Ta)), A[A.length - 1].removeEventListener("keydown", Hb), D.removeEventListener("keyup", eb), B && B.removeEventListener("keyup", eb), q && q.removeEventListener("keydown", fb)
    }

    function Hb(e) {
        9 !== e.keyCode || e.shiftKey || (document.querySelector(".optanon-white-button-middle \x3e button").removeAttribute("tabindex"), document.querySelector(".optanon-allow-all \x3e .optanon-white-button-middle \x3e button").removeAttribute("tabindex"))
    }

    function Ta(e) {
        var q = document.querySelector("#optanon-popup-wrapper"),
            t = t = document.querySelector(".optanon-allow-all \x3e .optanon-white-button-middle \x3e button");
        9 === e.keyCode && q.focus();
        9 !== e.keyCode || e.shiftKey || (document.querySelector(".optanon-white-button-middle \x3e button").removeAttribute("tabindex"), t.removeAttribute("tabindex"));
        9 === e.keyCode && e.shiftKey && document.querySelector("#optanon-popup-bottom \x3e a").focus()
    }

    function Sa(e) {
        var q = document.querySelector(".optanon-allow-all \x3e .optanon-white-button-middle \x3e button"),
            t = document.querySelector(".optanon-white-button-middle \x3e button");
        9 === e.keyCode && e.shiftKey && (t.setAttribute("tabindex", 5), q.setAttribute("tabindex", 4));
        9 !== e.keyCode || e.shiftKey || (t.removeAttribute("tabindex"), q.removeAttribute("tabindex"))
    }

    function Ub(e, q) {
        e = e.filter(function(e) {
            e = parseInt(e.split(":")[0]);
            return -1 < this.indexOf(e)
        }, q);
        q.filter(function(e) {
            return -1 >= this.indexOf(e + ":true")
        }, e).forEach(function(q) {
            e.push(q + ":false")
        });
        return e
    }

    function Oa(e, q) {
        if (K().IsIABEnabled) {
            var x = qa();
            if (x) {
                var t =
                    new consentString.ConsentString;
                t.setGlobalVendorList(L.vendorList ? L.vendorList : {});
                t.setCmpId(parseInt(x.cmpId));
                t.setCmpVersion(parseInt(x.cmpVersion));
                t.setConsentLanguage(x.consentLanguage.toLocaleLowerCase());
                t.setConsentScreen(parseInt(x.consentScreen));
                t.setPurposesAllowed(e ? e : Cb(L.purpose));
                t.setVendorsAllowed(q ? q : Cb(Db(L.vendors)));
                return t.getConsentString()
            }
        } else return null
    }

    function ib(e) {
        Da = 1 == e || "true" == e ? !0 : !1
    }

    function Za(e) {
        var q = !1,
            t = Ib(window.location.href),
            A = z("\x3cdiv\x3e\x3c/div\x3e");
        A.html(e);
        e = z("a", A);
        for (A = 0; A < e.length; A++)
            if (Ib(e[A].href) == t) {
                q = !0;
                break
            }
        return q
    }

    function Ib(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }

    function Vb() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, q) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var x = Object(e), t = 1; t < arguments.length; t++) {
                    var z = arguments[t];
                    if (null != z)
                        for (var A in z) Object.prototype.hasOwnProperty.call(z, A) && (x[A] = z[A])
                }
                return x
            },
            writable: !0,
            configurable: !0
        })
    }

    function Wb() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e, q, t) {
                if (null == this) throw new TypeError("this is null or not defined");
                var x = Object(this),
                    z = x.length >>> 0;
                q >>= 0;
                q = 0 > q ? Math.max(z + q, 0) : Math.min(q, z);
                t = void 0 === t ? z : t >> 0;
                for (z = 0 > t ? Math.max(z + t, 0) : Math.min(t, z); q < z;) x[q] = e, q++;
                return x
            }
        })
    }

    function Xb() {
        var e = 0;
        z(".banner-content a").length && z(".banner-content a").each(function(q, t) {
            z(t).addClass("banner-policy-link");
            z(t).attr("tabindex",
                ++e);
            z(t).attr("aria-label", z(t).text())
        });
        z(".cookie-settings-button").length && z(".cookie-settings-button").attr("tabindex", ++e);
        z(".accept-cookies-button").length && z(".accept-cookies-button").attr("tabindex", ++e);
        z(".banner-close-button").length && z(".banner-close-button").attr("tabindex", ++e)
    }

    function nb(e, q) {
        var x = document.querySelector(e),
            t = setInterval(function() {
                x.style.opacity || (x.style.opacity = 1);
                0 < x.style.opacity ? x.style.opacity -= .1 : (x.style.display = "none", clearInterval(t))
            }, q)
    }

    function Qb(e) {
        var q =
            void 0,
            t = void 0,
            z = void 0,
            A = void 0,
            B = null,
            D = void 0,
            E = new XMLHttpRequest,
            q = e.type,
            t = e.url,
            z = e.success,
            A = e.error,
            B = e.data,
            D = e.contentType;
        E.open(q, t, !0);
        E.setRequestHeader("Content-Type", D);
        E.onload = function() {
            if (200 <= this.status && 400 > this.status) {
                var e = JSON.parse(this.response);
                z(e)
            } else A({
                message: "Error Loading Data",
                statusCode: this.status
            })
        };
        E.onerror = function(e) {
            A(e)
        };
        "post" === q.toLowerCase() || "put" === q.toLowerCase() ? E.send(B) : E.send()
    }

    function Yb() {
        $.ajax({
            type: "GET",
            crossDomain: !0,
            dataType: "json",
            url: "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/countries/EU?callback\x3d?"
        }).fail(function(e) {
            200 !== e.status && window.jsonFeed({
                displayPopup: !0
            })
        })
    }

    function Zb() {
        var e = document.createElement("script"),
            q = document.createElement("script");
        e.type = "text/javascript";
        e.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        e.integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8\x3d";
        e.crossOrigin = "anonymous";
        q.type = "text/javascript";
        q.src = "https://code.jquery.com/jquery-1.11.2.min.js";
        q.integrity =
            "sha256-Ls0pXSlb7AYs7evhd+VLnWsZ/AqEHcXBeMZUycz/CcA\x3d";
        q.crossOrigin = "anonymous";
        document.getElementsByTagName("head")[0].appendChild(e);
        e.onload = e.onreadystatechange = function() {
            this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (Yb(), T())
        }
    }
    String.prototype.includes || (String.prototype.includes = function(e, q) {
        "number" !== typeof q && (q = 0);
        return q + e.length > this.length ? !1 : -1 !== this.indexOf(e, q)
    });
    var Ma = !1,
        rb = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack,
        Eb = function() {
            var e = !0,
                q, t = K(),
                z;
            for (z = 0; z < t.Groups.length; z += 1)
                if (q = t.Groups[z], fa(q) && (!ba(q) || ba(q) && ("active" == ba(q).toLowerCase() || "inactive landingpage" == ba(q).toLowerCase() || "do not track" == ba(q).toLowerCase()))) {
                    e = !1;
                    break
                }
            return e
        }(),
        Nb = function() {
            var e = !0,
                q, t = K(),
                z;
            for (z = 0; z < t.Groups.length; z += 1)
                if (q = t.Groups[z], fa(q) && (q = ba(q).toLowerCase(), "inactive landingpage" !== q && "always active" !== q)) {
                    e = !1;
                    break
                }
            return e
        }(),
        $a = !1,
        P, bb = [],
        cb = [],
        Ba = [],
        Ca = [],
        ra = K().AboutCookiesText,
        Ra = null,
        Y = !1,
        Va = !1,
        L = {
            purpose: [],
            vendors: [],
            vendorList: null
        },
        Da = !0,
        na = "",
        ma = "",
        kb = !0,
        db, ya = !1,
        Ja = {
            KEEPCENTERTILEBANNEROPEN: "keepBannerOpen",
            IMPLIEDCONSENT: "implied consent",
            FIRSTPAGEVIEW: "firstPageView"
        },
        z;
    this.loadDefaultBannerGroup = function(e) {
        var q = K();
        W("OptanonConsent", "EU") && jb("OptanonConsent", "EU", e && e.displayPopup ? e.displayPopup : ya);
        D();
        z(window).one("otloadbanner", function() {
            M();
            H();
            xa();
            var e = K(),
                t = '\x3cdiv class\x3d"optanon-alert-box-wrapper  hide-cookie-setting-button" role\x3d"alertdialog" aria-labelledby\x3d"alert-box-title" aria-describedby\x3d"alert-box-message" style\x3d"display:none"\x3e\x3cdiv class\x3d"optanon-alert-box-bottom-top"\x3e';
            e.showBannerCloseButton && (e.BannerCloseButtonText || (e.BannerCloseButtonText = "Close"), t = t + '\x3cdiv class\x3d"optanon-alert-box-corner-close"\x3e\x3cbutton class\x3d"optanon-alert-box-close banner-close-button" aria-label\x3d"' + e.BannerCloseButtonText + '" title\x3d"' + e.BannerCloseButtonText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Close Button');\"\x3e\x3c/button\x3e\x3c/div\x3e");
            t = t + '\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-bg"\x3e\x3cdiv class\x3d"optanon-alert-box-logo"\x3e \x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-body"\x3e\x3cp class\x3d"optanon-alert-box-title legacy-banner-title' +
                (e.BannerTitle ? "" : " sr-only") + '" id\x3d"alert-box-title" role\x3d"heading" aria-level\x3d"2"\x3e' + (e.BannerTitle ? e.BannerTitle : "Cookie Notice") + "\x3c/p\x3e";
            t = t + '\x3cp class\x3d"banner-content" id\x3d"alert-box-message"\x3e' + e.AlertNoticeText + '\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix"\x3e\x3c/div\x3e\x3cdiv class\x3d"optanon-alert-box-button-container"\x3e\x3cdiv class\x3d"optanon-alert-box-button optanon-button-close"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3cbutton class\x3d"optanon-alert-box-close" aria-label\x3d"' +
                e.AlertCloseText + '"\x3e' + e.AlertCloseText + "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e";
            0 >= t.indexOf("hide-accept-button") && (t = t + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-allow"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle accept-cookie-container"\x3e\x3cbutton class\x3d"optanon-allow-all accept-cookies-button" title\x3d"' + e.AlertAllowCookiesText + '" aria-label\x3d"' + e.AlertAllowCookiesText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Accept Cookies');\"\x3e" +
                e.AlertAllowCookiesText + "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e");
            0 >= t.indexOf("hide-cookie-setting-button") && (t = t + '\x3cdiv class\x3d"optanon-alert-box-button optanon-button-more"\x3e\x3cdiv class\x3d"optanon-alert-box-button-middle"\x3e\x3cbutton class\x3d"optanon-toggle-display cookie-settings-button" title\x3d"' + e.AlertMoreInfoText + '" aria-label\x3d"' + e.AlertMoreInfoText + "\" onClick\x3d\"Optanon.TriggerGoogleAnalyticsEvent('OneTrust Cookie Consent', 'Banner Open Preferences');\"\x3e" + e.AlertMoreInfoText +
                "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e");
            t += '\x3c/div\x3e\x3cdiv class\x3d"optanon-clearfix optanon-alert-box-bottom-padding"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
            z("#optanon").before(t);
            Xb();
            Kb();
            na || yb("euconsent", "", 0, !0);
            q.IsIABEnabled && va();
            0 < z(".optanon-show-settings").length && pa();
            0 < z("#optanon-cookie-policy").length && hb();
            Pa();
            W("OptanonConsent", "groups") || ta("OptanonConsent");
            da()
        })
    };
    this.useGeoLocationService = !0;
    this.LoadBanner = function() {
        z(window).trigger("otloadbanner")
    };
    this.Init =
        function() {
            Vb();
            Wb();
            Sb();
            tb();
            (function() {
                function e(e, q) {
                    q = q || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var t = document.createEvent("CustomEvent");
                    t.initCustomEvent(e, q.bubbles, q.cancelable, q.detail);
                    return t
                }
                if ("function" === typeof window.CustomEvent) return !1;
                e.prototype = window.Event.prototype;
                window.CustomEvent = e
            })();
            t(!1);
            q();
            G();
            Zb()
        };
    this.InsertScript = function(e, q, t, z, A, B) {
        var x = null != z && "undefined" != typeof z,
            F;
        if (Na(A, x && "undefined" != typeof z.ignoreGroupCheck && 1 == z.ignoreGroupCheck || Ma) && !ua(bb,
                A)) {
            Ba.push(A);
            x && "undefined" != typeof z.deleteSelectorContent && 1 == z.deleteSelectorContent && zb(q);
            A = document.createElement("script");
            null != t && "undefined" != typeof t && (F = !1, A.onload = A.onreadystatechange = function() {
                F || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (F = !0, t())
            });
            A.type = "text/javascript";
            A.src = e;
            B && (A.async = B);
            switch (q) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(A);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(A);
                    break;
                default:
                    document.getElementById(q) && (document.getElementById(q).appendChild(A), x && "undefined" != typeof z.makeSelectorVisible && 1 == z.makeSelectorVisible && Qa(q))
            }
            if (x && "undefined" != typeof z.makeElementsVisible)
                for (e = 0; e < z.makeElementsVisible.length; e += 1) Qa(z.makeElementsVisible[e]);
            if (x && "undefined" != typeof z.deleteElements)
                for (x = 0; x < z.deleteElements.length; x += 1) Ab(z.deleteElements[x])
        }
    };
    this.InsertHtml = function(e, q, t, z, A) {
        var x = null != z && "undefined" != typeof z;
        if (Na(A, x && "undefined" != typeof z.ignoreGroupCheck &&
                1 == z.ignoreGroupCheck || Ma) && !ua(cb, A)) {
            Ca.push(A);
            x && "undefined" != typeof z.deleteSelectorContent && 1 == z.deleteSelectorContent && zb(q);
            A = document.getElementById(q);
            var B;
            A && (B = document.createElement("div"), B.innerHTML = e, A.appendChild(B));
            x && "undefined" != typeof z.makeSelectorVisible && 1 == z.makeSelectorVisible && Qa(q);
            if (x && "undefined" != typeof z.makeElementsVisible)
                for (e = 0; e < z.makeElementsVisible.length; e += 1) Qa(z.makeElementsVisible[e]);
            if (x && "undefined" != typeof z.deleteElements)
                for (x = 0; x < z.deleteElements.length; x +=
                    1) Ab(z.deleteElements[x]);
            null != t && "undefined" != typeof t && t()
        }
    };
    this.Close = function(e) {
        K();
        !e && E();
        sa();
        Gb(e);
        vb();
        Pa()
    };
    this.AllowAll = function(e) {
        var q, A = K(),
            D;
        B("NotLandingPage");
        P = [];
        for (D = 0; D < A.Groups.length; D += 1) q = A.Groups[D], fa(q) && P.push(Q(q) + ":1");
        P && A.IsIABEnabled && (L.purpose = [], ab(P));
        ub();
        Ea();
        z("#optanon #optanon-menu li").removeClass("menu-item-off");
        z("#optanon #optanon-menu li").addClass("menu-item-on");
        sa();
        ta("OptanonConsent");
        M();
        t(!0);
        e || vb();
        Pa()
    };
    this.ToggleInfoDisplay = function() {
        var e =
            K();
        e.ForceConsent && (Za(e.AlertNoticeText) || z("#optanon-popup-bg").css({
            "z-index": "2147483645"
        }));
        if (z("#optanon #optanon-popup-bg, #optanon #optanon-popup-wrapper").is(":hidden")) {
            Ob();
            for (var e = document.querySelector("#optanon-vendor-consent-text"), q = document.querySelector("#optanon-popup-top").children, A = document.querySelector("#optanon-popup-bottom").children, B = document.querySelector("#optanon-menu").children, D = document.querySelector(".optanon-close-ui"), E = document.querySelector("#optanon"), G = [], H = [], J = 0; J < q.length; J++) "none" !== q[J].style.display && G.push(q[J]);
            for (J = 0; J < A.length; J++) "none" !== A[J].style.display && H.push(A[J]);
            0 < G.length ? q[0].addEventListener("keydown", Sa) : B[0].addEventListener("keydown", Sa);
            0 < H.length && ("block" === document.querySelector(".optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all").style.display ? H[H.length - 1].addEventListener("keydown", Ta) : H[H.length - 2].addEventListener("keydown", Ta));
            B[B.length - 1].addEventListener("keydown", Hb);
            E.addEventListener("keyup",
                Tb);
            e && e.addEventListener("keyup", eb);
            D && D.addEventListener("keydown", fb)
        } else sa(), ta("OptanonConsent"), M(), t(!1), Pa()
    };
    this.BlockGoogleAnalytics = function(e, q) {
        window["ga-disable-" + e] = !Na(q)
    };
    this.TriggerGoogleAnalyticsEvent = function(e, q, t, z) {
        "undefined" != typeof _gaq && _gaq.push(["_trackEvent", e, q, t, z]);
        "undefined" != typeof ga && ga("send", "event", e, q, t, z);
        "undefined" != typeof dataLayer && dataLayer.constructor === Array && dataLayer.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: q,
            optanonLabel: t,
            optanonValue: z
        })
    };
    this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid = function() {
        var e = K(),
            q = ja("OptanonAlertBoxClosed"),
            e = e.LastReconsentDate;
        if (null === q) return !1;
        if (!e) return !0;
        (q = new Date(e) > new Date(q)) && Optanon.ReconsentGroups();
        return !q
    };
    this.ReconsentGroups = function() {
        var e = !1,
            q = za(W("OptanonConsent", "groups")),
            t = za(W("OptanonConsent", "groups").replace(/:0/g, "").replace(/:1/g, "")),
            z = K();
        if (W("OptanonConsent", "groups")) {
            for (var A = 0; A < z.Groups.length; A += 1) {
                var B = z.Groups[A];
                if (fa(B)) {
                    var D = ha(t,
                        Q(B));
                    if (-1 != D) {
                        var E = ba(B).toLowerCase(); - 1 < ["inactive", "inactive landingpage", "do not track"].indexOf(E) && (e = !0, E = "inactive landingpage" === E ? ":1" : ":0", q[D] = Q(B) + E)
                    }
                }
            }
            e && ta("OptanonConsent", q)
        }
    };
    this.SetAlertBoxClosed = function(e) {
        var q = (new Date).toISOString();
        e ? Aa("OptanonAlertBoxClosed", q, 365) : Aa("OptanonAlertBoxClosed", q)
    };
    this.GetDomainData = function() {
        return K()
    };
    this.OnConsentChanged = function(e) {
        window.addEventListener("consent.onetrust", e)
    };
    this.getPingRequest = function(e) {
        e && (K().IsIABEnabled ?
            e({
                gdprAppliesGlobally: Da,
                cmpLoaded: L.vendorList && null != Da
            }, !0) : e({}, !1))
    };
    this.getVendorConsentsRequest = function(e, q) {
        if (e) {
            var t = K();
            if (t.IsIABEnabled) {
                var x = qa(),
                    z = Db(L.vendors);
                q && Array.isArray(q) && (z = Ub(z, q));
                x ? (t = {
                    metadata: ma ? ma : Oa(),
                    gdprApplies: Da,
                    hasGlobalScope: t.IsIabThirdPartyCookieEnabled,
                    cookieVersion: x.cookieVersion,
                    created: x.createdTime,
                    lastUpdated: x.updatedTime,
                    cmpId: x.cmpId,
                    cmpVersion: x.cmpVersion,
                    consentLanguage: x.consentLanguage,
                    consentScreen: x.consentScreen,
                    vendorListVersion: x.vendorListVersion,
                    maxVendorId: x.maxVendorId,
                    purposeConsents: Bb(L.purpose),
                    vendorConsents: Bb(z)
                }, e(t, !0)) : e({}, !1)
            } else e({}, !1)
        }
    };
    this.getConsentDataRequest = function(e) {
        if (e) {
            var q = K();
            q.IsIABEnabled ? (q = {
                gdprApplies: Da,
                hasGlobalScope: q.IsIabThirdPartyCookieEnabled,
                consentData: ma ? ma : Oa()
            }, e(q, !0)) : e({}, !1)
        }
    };
    this.updateConsentFromCookies = function(e) {
        var q = [],
            t;
        if ((na = e) && "init" !== na) {
            e = new consentString.ConsentString(e);
            if (L && L.purpose) {
                for (var z = 0; z < L.purpose.length; z++) {
                    var A = L.purpose[z].split(":");
                    t = ha(e.allowedPurposeIds,
                        A[0]);
                    if (-1 != t) {
                        L.purpose[z] = A[0] + ":true";
                        a: {
                            var A = A[0],
                                B = K();
                            if (B && B.Groups)
                                for (var D = 0; D < B.Groups.length; D++)
                                    if (t = B.Groups[D], ka(t) && t.Purposes && 0 < t.Purposes.length)
                                        for (var E = 0; E < t.Purposes.length; E++)
                                            if (t.Purposes[E].purposes.purposeId == A) break a;t = void 0
                        }
                        t && t.GroupId && -1 == ha(q, t) && q.push(t)
                    }
                }
                for (z = 0; z < q.length; z++) A = q[z], t = ha(P, Q(A) + ":0"), -1 != t && (P[t] = Q(A) + ":1")
            }
            if (L && L.vendors)
                for (q = 0; q < L.vendors.length; q++) z = L.vendors[q].split(":"), t = ha(e.allowedVendorIds, z[0]), -1 != t && (L.vendors[q] = z[0] + ":true");
            Gb()
        }
    };
    this.setGeoLocation = function(e) {
        ya = e
    }
}).call(Optanon);
if ("function" !== typeof window.jsonFeed) var jsonFeed = function(E) {
    Optanon.setGeoLocation(E.displayPopup)
};
Optanon.Init();
window.__cmp.proccessQueue();