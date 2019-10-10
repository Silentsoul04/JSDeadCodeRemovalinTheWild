(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        (function(process, setImmediate) {
            // vim:ts=4:sts=4:sw=4:
            /*!
             *
             * Copyright 2009-2012 Kris Kowal under the terms of the MIT
             * license found at http://github.com/kriskowal/q/raw/master/LICENSE
             *
             * With parts by Tyler Close
             * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
             * at http://www.opensource.org/licenses/mit-license.html
             * Forked at ref_send.js version: 2009-05-11
             *
             * With parts by Mark Miller
             * Copyright (C) 2011 Google Inc.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             * http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             *
             */

            (function(definition) {
                // Turn off strict mode for this function so we can assign to global.Q
                /* jshint strict: false */

                // This file will function properly as a <script> tag, or a module
                // using CommonJS and NodeJS or RequireJS module formats.  In
                // Common/Node/RequireJS, the module exports the Q API and when
                // executed as a simple <script>, it creates a Q global instead.

                // Montage Require
                if (typeof bootstrap === "function") {
                    bootstrap("promise", definition);

                    // CommonJS
                } else if (typeof exports === "object" && typeof module === "object") {
                    module.exports = definition();

                    // RequireJS
                } else if (typeof define === "function" && define.amd) {
                    define(definition);

                    // SES (Secure EcmaScript)
                } else if (typeof ses !== "undefined") {
                    if (!ses.ok()) {
                        return;
                    } else {
                        ses.makeQ = definition;
                    }

                    // <script>
                } else {
                    Q = definition();
                }

            })(function() {
                "use strict";

                var hasStacks = false;
                try {
                    throw new Error();
                } catch (e) {
                    hasStacks = !!e.stack;
                }

                // All code after this point will be filtered from stack traces reported
                // by Q.
                var qStartingLine = captureLine();
                var qFileName;

                // shims

                // used for fallback in "allResolved"
                var noop = function() {};

                // Use the fastest possible means to execute a task in a future turn
                // of the event loop.
                var nextTick = (function() {
                    // linked list of tasks (single, with head node)
                    var head = {
                        task: void 0,
                        next: null
                    };
                    var tail = head;
                    var flushing = false;
                    var requestTick = void 0;
                    var isNodeJS = false;

                    function flush() {
                        /* jshint loopfunc: true */

                        while (head.next) {
                            head = head.next;
                            var task = head.task;
                            head.task = void 0;
                            var domain = head.domain;

                            if (domain) {
                                head.domain = void 0;
                                domain.enter();
                            }

                            try {
                                task();

                            } catch (e) {
                                if (isNodeJS) {
                                    // In node, uncaught exceptions are considered fatal errors.
                                    // Re-throw them synchronously to interrupt flushing!

                                    // Ensure continuation if the uncaught exception is suppressed
                                    // listening "uncaughtException" events (as domains does).
                                    // Continue in next event to avoid tick recursion.
                                    if (domain) {
                                        domain.exit();
                                    }
                                    setTimeout(flush, 0);
                                    if (domain) {
                                        domain.enter();
                                    }

                                    throw e;

                                } else {
                                    // In browsers, uncaught exceptions are not fatal.
                                    // Re-throw them asynchronously to avoid slow-downs.
                                    setTimeout(function() {
                                        throw e;
                                    }, 0);
                                }
                            }

                            if (domain) {
                                domain.exit();
                            }
                        }

                        flushing = false;
                    }

                    nextTick = function(task) {
                        tail = tail.next = {
                            task: task,
                            domain: isNodeJS && process.domain,
                            next: null
                        };

                        if (!flushing) {
                            flushing = true;
                            requestTick();
                        }
                    };

                    if (typeof process !== "undefined" && process.nextTick) {
                        // Node.js before 0.9. Note that some fake-Node environments, like the
                        // Mocha test runner, introduce a `process` global without a `nextTick`.
                        isNodeJS = true;

                        requestTick = function() {
                            process.nextTick(flush);
                        };

                    } else if (typeof setImmediate === "function") {
                        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
                        if (typeof window !== "undefined") {
                            requestTick = setImmediate.bind(window, flush);
                        } else {
                            requestTick = function() {
                                setImmediate(flush);
                            };
                        }

                    } else if (typeof MessageChannel !== "undefined") {
                        // modern browsers
                        // http://www.nonblocking.io/2011/06/windownexttick.html
                        var channel = new MessageChannel();
                        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
                        // working message ports the first time a page loads.
                        channel.port1.onmessage = function() {
                            requestTick = requestPortTick;
                            channel.port1.onmessage = flush;
                            flush();
                        };
                        var requestPortTick = function() {
                            // Opera requires us to provide a message payload, regardless of
                            // whether we use it.
                            channel.port2.postMessage(0);
                        };
                        requestTick = function() {
                            setTimeout(flush, 0);
                            requestPortTick();
                        };

                    } else {
                        // old browsers
                        requestTick = function() {
                            setTimeout(flush, 0);
                        };
                    }

                    return nextTick;
                })();

                // Attempt to make generics safe in the face of downstream
                // modifications.
                // There is no situation where this is necessary.
                // If you need a security guarantee, these primordials need to be
                // deeply frozen anyway, and if you don’t need a security guarantee,
                // this is just plain paranoid.
                // However, this **might** have the nice side-effect of reducing the size of
                // the minified code by reducing x.call() to merely x()
                // See Mark Miller’s explanation of what this does.
                // http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
                var call = Function.call;

                function uncurryThis(f) {
                    return function() {
                        return call.apply(f, arguments);
                    };
                }
                // This is equivalent, but slower:
                // uncurryThis = Function_bind.bind(Function_bind.call);
                // http://jsperf.com/uncurrythis

                var array_slice = uncurryThis(Array.prototype.slice);

                var array_reduce = uncurryThis(
                    Array.prototype.reduce || function(callback, basis) {
                        var index = 0,
                            length = this.length;
                        // concerning the initial value, if one is not provided
                        if (arguments.length === 1) {
                            // seek to the first value in the array, accounting
                            // for the possibility that is is a sparse array
                            do {
                                if (index in this) {
                                    basis = this[index++];
                                    break;
                                }
                                if (++index >= length) {
                                    throw new TypeError();
                                }
                            } while (1);
                        }
                        // reduce
                        for (; index < length; index++) {
                            // account for the possibility that the array is sparse
                            if (index in this) {
                                basis = callback(basis, this[index], index);
                            }
                        }
                        return basis;
                    }
                );

                var array_indexOf = uncurryThis(
                    Array.prototype.indexOf || function(value) {
                        // not a very good shim, but good enough for our one use of it
                        for (var i = 0; i < this.length; i++) {
                            if (this[i] === value) {
                                return i;
                            }
                        }
                        return -1;
                    }
                );

                var array_map = uncurryThis(
                    Array.prototype.map || function(callback, thisp) {
                        var self = this;
                        var collect = [];
                        array_reduce(self, function(undefined, value, index) {
                            collect.push(callback.call(thisp, value, index, self));
                        }, void 0);
                        return collect;
                    }
                );

                var object_create = Object.create || function(prototype) {
                    function Type() {}
                    Type.prototype = prototype;
                    return new Type();
                };

                var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

                var object_keys = Object.keys || function(object) {
                    var keys = [];
                    for (var key in object) {
                        if (object_hasOwnProperty(object, key)) {
                            keys.push(key);
                        }
                    }
                    return keys;
                };

                var object_toString = uncurryThis(Object.prototype.toString);

                function isObject(value) {
                    return value === Object(value);
                }

                // generator related shims

                // FIXME: Remove this function once ES6 generators are in SpiderMonkey.
                function isStopIteration(exception) {
                    return (
                        object_toString(exception) === "[object StopIteration]" ||
                        exception instanceof QReturnValue
                    );
                }

                // FIXME: Remove this helper and Q.return once ES6 generators are in
                // SpiderMonkey.
                var QReturnValue;
                if (typeof ReturnValue !== "undefined") {
                    QReturnValue = ReturnValue;
                } else {
                    QReturnValue = function(value) {
                        this.value = value;
                    };
                }

                // long stack traces

                var STACK_JUMP_SEPARATOR = "From previous event:";

                function makeStackTraceLong(error, promise) {
                    // If possible, transform the error stack trace by removing Node and Q
                    // cruft, then concatenating with the stack trace of `promise`. See #57.
                    if (hasStacks &&
                        promise.stack &&
                        typeof error === "object" &&
                        error !== null &&
                        error.stack &&
                        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
                    ) {
                        var stacks = [];
                        for (var p = promise; !!p; p = p.source) {
                            if (p.stack) {
                                stacks.unshift(p.stack);
                            }
                        }
                        stacks.unshift(error.stack);

                        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
                        error.stack = filterStackString(concatedStacks);
                    }
                }

                function filterStackString(stackString) {
                    var lines = stackString.split("\n");
                    var desiredLines = [];
                    for (var i = 0; i < lines.length; ++i) {
                        var line = lines[i];

                        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
                            desiredLines.push(line);
                        }
                    }
                    return desiredLines.join("\n");
                }

                function isNodeFrame(stackLine) {
                    return stackLine.indexOf("(module.js:") !== -1 ||
                        stackLine.indexOf("(node.js:") !== -1;
                }

                function getFileNameAndLineNumber(stackLine) {
                    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
                    // In IE10 function name can have spaces ("Anonymous function") O_o
                    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
                    if (attempt1) {
                        return [attempt1[1], Number(attempt1[2])];
                    }

                    // Anonymous functions: "at filename:lineNumber:columnNumber"
                    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
                    if (attempt2) {
                        return [attempt2[1], Number(attempt2[2])];
                    }

                    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
                    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
                    if (attempt3) {
                        return [attempt3[1], Number(attempt3[2])];
                    }
                }

                function isInternalFrame(stackLine) {
                    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

                    if (!fileNameAndLineNumber) {
                        return false;
                    }

                    var fileName = fileNameAndLineNumber[0];
                    var lineNumber = fileNameAndLineNumber[1];

                    return fileName === qFileName &&
                        lineNumber >= qStartingLine &&
                        lineNumber <= qEndingLine;
                }

                // discover own file name and line number range for filtering stack
                // traces
                function captureLine() {
                    if (!hasStacks) {
                        return;
                    }

                    try {
                        throw new Error();
                    } catch (e) {
                        var lines = e.stack.split("\n");
                        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
                        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
                        if (!fileNameAndLineNumber) {
                            return;
                        }

                        qFileName = fileNameAndLineNumber[0];
                        return fileNameAndLineNumber[1];
                    }
                }

                function deprecate(callback, name, alternative) {
                    return function() {
                        if (typeof console !== "undefined" &&
                            typeof console.warn === "function") {
                            console.warn(name + " is deprecated, use " + alternative +
                                " instead.", new Error("").stack);
                        }
                        return callback.apply(callback, arguments);
                    };
                }

                // end of shims
                // beginning of real work

                /**
                 * Constructs a promise for an immediate reference, passes promises through, or
                 * coerces promises from different systems.
                 * @param value immediate reference or promise
                 */
                function Q(value) {
                    // If the object is already a Promise, return it directly.  This enables
                    // the resolve function to both be used to created references from objects,
                    // but to tolerably coerce non-promises to promises.
                    if (value instanceof Promise) {
                        return value;
                    }

                    // assimilate thenables
                    if (isPromiseAlike(value)) {
                        return coerce(value);
                    } else {
                        return fulfill(value);
                    }
                }
                Q.resolve = Q;

                /**
                 * Performs a task in a future turn of the event loop.
                 * @param {Function} task
                 */
                Q.nextTick = nextTick;

                /**
                 * Controls whether or not long stack traces will be on
                 */
                Q.longStackSupport = false;

                /**
                 * Constructs a {promise, resolve, reject} object.
                 *
                 * `resolve` is a callback to invoke with a more resolved value for the
                 * promise. To fulfill the promise, invoke `resolve` with any value that is
                 * not a thenable. To reject the promise, invoke `resolve` with a rejected
                 * thenable, or invoke `reject` with the reason directly. To resolve the
                 * promise to another thenable, thus putting it in the same state, invoke
                 * `resolve` with that other thenable.
                 */
                Q.defer = defer;

                function defer() {
                    // if "messages" is an "Array", that indicates that the promise has not yet
                    // been resolved.  If it is "undefined", it has been resolved.  Each
                    // element of the messages array is itself an array of complete arguments to
                    // forward to the resolved promise.  We coerce the resolution value to a
                    // promise using the `resolve` function because it handles both fully
                    // non-thenable values and other thenables gracefully.
                    var messages = [],
                        progressListeners = [],
                        resolvedPromise;

                    var deferred = object_create(defer.prototype);
                    var promise = object_create(Promise.prototype);

                    promise.promiseDispatch = function(resolve, op, operands) {
                        var args = array_slice(arguments);
                        if (messages) {
                            messages.push(args);
                            if (op === "when" && operands[1]) { // progress operand
                                progressListeners.push(operands[1]);
                            }
                        } else {
                            nextTick(function() {
                                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
                            });
                        }
                    };

                    // TODO: deprecated
                    promise.valueOf = function() {
                        if (messages) {
                            return promise;
                        }
                        var nearerValue = nearer(resolvedPromise);
                        if (isPromise(nearerValue)) {
                            resolvedPromise = nearerValue; // shorten chain
                        }
                        return nearerValue;
                    };

                    promise.inspect = function() {
                        if (!resolvedPromise) {
                            return {
                                state: "pending"
                            };
                        }
                        return resolvedPromise.inspect();
                    };

                    if (Q.longStackSupport && hasStacks) {
                        try {
                            throw new Error();
                        } catch (e) {
                            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
                            // accessor around; that causes memory leaks as per GH-111. Just
                            // reify the stack trace as a string ASAP.
                            //
                            // At the same time, cut off the first line; it's always just
                            // "[object Promise]\n", as per the `toString`.
                            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
                        }
                    }

                    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
                    // consolidating them into `become`, since otherwise we'd create new
                    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

                    function become(newPromise) {
                        resolvedPromise = newPromise;
                        promise.source = newPromise;

                        array_reduce(messages, function(undefined, message) {
                            nextTick(function() {
                                newPromise.promiseDispatch.apply(newPromise, message);
                            });
                        }, void 0);

                        messages = void 0;
                        progressListeners = void 0;
                    }

                    deferred.promise = promise;
                    deferred.resolve = function(value) {
                        if (resolvedPromise) {
                            return;
                        }

                        become(Q(value));
                    };

                    deferred.fulfill = function(value) {
                        if (resolvedPromise) {
                            return;
                        }

                        become(fulfill(value));
                    };
                    deferred.reject = function(reason) {
                        if (resolvedPromise) {
                            return;
                        }

                        become(reject(reason));
                    };
                    deferred.notify = function(progress) {
                        if (resolvedPromise) {
                            return;
                        }

                        array_reduce(progressListeners, function(undefined, progressListener) {
                            nextTick(function() {
                                progressListener(progress);
                            });
                        }, void 0);
                    };

                    return deferred;
                }

                /**
                 * Creates a Node-style callback that will resolve or reject the deferred
                 * promise.
                 * @returns a nodeback
                 */
                defer.prototype.makeNodeResolver = function() {
                    var self = this;
                    return function(error, value) {
                        if (error) {
                            self.reject(error);
                        } else if (arguments.length > 2) {
                            self.resolve(array_slice(arguments, 1));
                        } else {
                            self.resolve(value);
                        }
                    };
                };

                /**
                 * @param resolver {Function} a function that returns nothing and accepts
                 * the resolve, reject, and notify functions for a deferred.
                 * @returns a promise that may be resolved with the given resolve and reject
                 * functions, or rejected by a thrown exception in resolver
                 */
                Q.Promise = promise; // ES6
                Q.promise = promise;

                function promise(resolver) {
                    if (typeof resolver !== "function") {
                        throw new TypeError("resolver must be a function.");
                    }
                    var deferred = defer();
                    try {
                        resolver(deferred.resolve, deferred.reject, deferred.notify);
                    } catch (reason) {
                        deferred.reject(reason);
                    }
                    return deferred.promise;
                }

                promise.race = race; // ES6
                promise.all = all; // ES6
                promise.reject = reject; // ES6
                promise.resolve = Q; // ES6

                // TODO: experimental.  This method is a way to denote that a local value is
                // serializable and should be immediately dispatched to a remote upon request,
                // instead of passing a reference.
                Q.passByCopy = function(object) {
                    //freeze(object);
                    //passByCopies.set(object, true);
                    return object;
                };

                Promise.prototype.passByCopy = function() {
                    //freeze(object);
                    //passByCopies.set(object, true);
                    return this;
                };

                /**
                 * If two promises eventually fulfill to the same value, promises that value,
                 * but otherwise rejects.
                 * @param x {Any*}
                 * @param y {Any*}
                 * @returns {Any*} a promise for x and y if they are the same, but a rejection
                 * otherwise.
                 *
                 */
                Q.join = function(x, y) {
                    return Q(x).join(y);
                };

                Promise.prototype.join = function(that) {
                    return Q([this, that]).spread(function(x, y) {
                        if (x === y) {
                            // TODO: "===" should be Object.is or equiv
                            return x;
                        } else {
                            throw new Error("Can't join: not the same: " + x + " " + y);
                        }
                    });
                };

                /**
                 * Returns a promise for the first of an array of promises to become fulfilled.
                 * @param answers {Array[Any*]} promises to race
                 * @returns {Any*} the first promise to be fulfilled
                 */
                Q.race = race;

                function race(answerPs) {
                    return promise(function(resolve, reject) {
                        // Switch to this once we can assume at least ES5
                        // answerPs.forEach(function(answerP) {
                        //     Q(answerP).then(resolve, reject);
                        // });
                        // Use this in the meantime
                        for (var i = 0, len = answerPs.length; i < len; i++) {
                            Q(answerPs[i]).then(resolve, reject);
                        }
                    });
                }

                Promise.prototype.race = function() {
                    return this.then(Q.race);
                };

                /**
                 * Constructs a Promise with a promise descriptor object and optional fallback
                 * function.  The descriptor contains methods like when(rejected), get(name),
                 * set(name, value), post(name, args), and delete(name), which all
                 * return either a value, a promise for a value, or a rejection.  The fallback
                 * accepts the operation name, a resolver, and any further arguments that would
                 * have been forwarded to the appropriate method above had a method been
                 * provided with the proper name.  The API makes no guarantees about the nature
                 * of the returned object, apart from that it is usable whereever promises are
                 * bought and sold.
                 */
                Q.makePromise = Promise;

                function Promise(descriptor, fallback, inspect) {
                    if (fallback === void 0) {
                        fallback = function(op) {
                            return reject(new Error(
                                "Promise does not support operation: " + op
                            ));
                        };
                    }
                    if (inspect === void 0) {
                        inspect = function() {
                            return {
                                state: "unknown"
                            };
                        };
                    }

                    var promise = object_create(Promise.prototype);

                    promise.promiseDispatch = function(resolve, op, args) {
                        var result;
                        try {
                            if (descriptor[op]) {
                                result = descriptor[op].apply(promise, args);
                            } else {
                                result = fallback.call(promise, op, args);
                            }
                        } catch (exception) {
                            result = reject(exception);
                        }
                        if (resolve) {
                            resolve(result);
                        }
                    };

                    promise.inspect = inspect;

                    // TODO: deprecated `valueOf` and `exception` support
                    if (inspect) {
                        var inspected = inspect();
                        if (inspected.state === "rejected") {
                            promise.exception = inspected.reason;
                        }

                        promise.valueOf = function() {
                            var inspected = inspect();
                            if (inspected.state === "pending" ||
                                inspected.state === "rejected") {
                                return promise;
                            }
                            return inspected.value;
                        };
                    }

                    return promise;
                }

                Promise.prototype.toString = function() {
                    return "[object Promise]";
                };

                Promise.prototype.then = function(fulfilled, rejected, progressed) {
                    var self = this;
                    var deferred = defer();
                    var done = false; // ensure the untrusted promise makes at most a
                    // single call to one of the callbacks

                    function _fulfilled(value) {
                        try {
                            return typeof fulfilled === "function" ? fulfilled(value) : value;
                        } catch (exception) {
                            return reject(exception);
                        }
                    }

                    function _rejected(exception) {
                        if (typeof rejected === "function") {
                            makeStackTraceLong(exception, self);
                            try {
                                return rejected(exception);
                            } catch (newException) {
                                return reject(newException);
                            }
                        }
                        return reject(exception);
                    }

                    function _progressed(value) {
                        return typeof progressed === "function" ? progressed(value) : value;
                    }

                    nextTick(function() {
                        self.promiseDispatch(function(value) {
                            if (done) {
                                return;
                            }
                            done = true;

                            deferred.resolve(_fulfilled(value));
                        }, "when", [function(exception) {
                            if (done) {
                                return;
                            }
                            done = true;

                            deferred.resolve(_rejected(exception));
                        }]);
                    });

                    // Progress propagator need to be attached in the current tick.
                    self.promiseDispatch(void 0, "when", [void 0, function(value) {
                        var newValue;
                        var threw = false;
                        try {
                            newValue = _progressed(value);
                        } catch (e) {
                            threw = true;
                            if (Q.onerror) {
                                Q.onerror(e);
                            } else {
                                throw e;
                            }
                        }

                        if (!threw) {
                            deferred.notify(newValue);
                        }
                    }]);

                    return deferred.promise;
                };

                /**
                 * Registers an observer on a promise.
                 *
                 * Guarantees:
                 *
                 * 1. that fulfilled and rejected will be called only once.
                 * 2. that either the fulfilled callback or the rejected callback will be
                 *    called, but not both.
                 * 3. that fulfilled and rejected will not be called in this turn.
                 *
                 * @param value      promise or immediate reference to observe
                 * @param fulfilled  function to be called with the fulfilled value
                 * @param rejected   function to be called with the rejection exception
                 * @param progressed function to be called on any progress notifications
                 * @return promise for the return value from the invoked callback
                 */
                Q.when = when;

                function when(value, fulfilled, rejected, progressed) {
                    return Q(value).then(fulfilled, rejected, progressed);
                }

                Promise.prototype.thenResolve = function(value) {
                    return this.then(function() {
                        return value;
                    });
                };

                Q.thenResolve = function(promise, value) {
                    return Q(promise).thenResolve(value);
                };

                Promise.prototype.thenReject = function(reason) {
                    return this.then(function() {
                        throw reason;
                    });
                };

                Q.thenReject = function(promise, reason) {
                    return Q(promise).thenReject(reason);
                };

                /**
                 * If an object is not a promise, it is as "near" as possible.
                 * If a promise is rejected, it is as "near" as possible too.
                 * If it’s a fulfilled promise, the fulfillment value is nearer.
                 * If it’s a deferred promise and the deferred has been resolved, the
                 * resolution is "nearer".
                 * @param object
                 * @returns most resolved (nearest) form of the object
                 */

                // TODO: should we re-do this?
                Q.nearer = nearer;

                function nearer(value) {
                    if (isPromise(value)) {
                        var inspected = value.inspect();
                        if (inspected.state === "fulfilled") {
                            return inspected.value;
                        }
                    }
                    return value;
                }

                /**
                 * @returns whether the given object is a promise.
                 * Otherwise it is a fulfilled value.
                 */
                Q.isPromise = isPromise;

                function isPromise(object) {
                    return isObject(object) &&
                        typeof object.promiseDispatch === "function" &&
                        typeof object.inspect === "function";
                }

                Q.isPromiseAlike = isPromiseAlike;

                function isPromiseAlike(object) {
                    return isObject(object) && typeof object.then === "function";
                }

                /**
                 * @returns whether the given object is a pending promise, meaning not
                 * fulfilled or rejected.
                 */
                Q.isPending = isPending;

                function isPending(object) {
                    return isPromise(object) && object.inspect().state === "pending";
                }

                Promise.prototype.isPending = function() {
                    return this.inspect().state === "pending";
                };

                /**
                 * @returns whether the given object is a value or fulfilled
                 * promise.
                 */
                Q.isFulfilled = isFulfilled;

                function isFulfilled(object) {
                    return !isPromise(object) || object.inspect().state === "fulfilled";
                }

                Promise.prototype.isFulfilled = function() {
                    return this.inspect().state === "fulfilled";
                };

                /**
                 * @returns whether the given object is a rejected promise.
                 */
                Q.isRejected = isRejected;

                function isRejected(object) {
                    return isPromise(object) && object.inspect().state === "rejected";
                }

                Promise.prototype.isRejected = function() {
                    return this.inspect().state === "rejected";
                };

                //// BEGIN UNHANDLED REJECTION TRACKING

                // This promise library consumes exceptions thrown in handlers so they can be
                // handled by a subsequent promise.  The exceptions get added to this array when
                // they are created, and removed when they are handled.  Note that in ES6 or
                // shimmed environments, this would naturally be a `Set`.
                var unhandledReasons = [];
                var unhandledRejections = [];
                var trackUnhandledRejections = true;

                function resetUnhandledRejections() {
                    unhandledReasons.length = 0;
                    unhandledRejections.length = 0;

                    if (!trackUnhandledRejections) {
                        trackUnhandledRejections = true;
                    }
                }

                function trackRejection(promise, reason) {
                    if (!trackUnhandledRejections) {
                        return;
                    }

                    unhandledRejections.push(promise);
                    if (reason && typeof reason.stack !== "undefined") {
                        unhandledReasons.push(reason.stack);
                    } else {
                        unhandledReasons.push("(no stack) " + reason);
                    }
                }

                function untrackRejection(promise) {
                    if (!trackUnhandledRejections) {
                        return;
                    }

                    var at = array_indexOf(unhandledRejections, promise);
                    if (at !== -1) {
                        unhandledRejections.splice(at, 1);
                        unhandledReasons.splice(at, 1);
                    }
                }

                Q.resetUnhandledRejections = resetUnhandledRejections;

                Q.getUnhandledReasons = function() {
                    // Make a copy so that consumers can't interfere with our internal state.
                    return unhandledReasons.slice();
                };

                Q.stopUnhandledRejectionTracking = function() {
                    resetUnhandledRejections();
                    trackUnhandledRejections = false;
                };

                resetUnhandledRejections();

                //// END UNHANDLED REJECTION TRACKING

                /**
                 * Constructs a rejected promise.
                 * @param reason value describing the failure
                 */
                Q.reject = reject;

                function reject(reason) {
                    var rejection = Promise({
                        "when": function(rejected) {
                            // note that the error has been handled
                            if (rejected) {
                                untrackRejection(this);
                            }
                            return rejected ? rejected(reason) : this;
                        }
                    }, function fallback() {
                        return this;
                    }, function inspect() {
                        return {
                            state: "rejected",
                            reason: reason
                        };
                    });

                    // Note that the reason has not been handled.
                    trackRejection(rejection, reason);

                    return rejection;
                }

                /**
                 * Constructs a fulfilled promise for an immediate reference.
                 * @param value immediate reference
                 */
                Q.fulfill = fulfill;

                function fulfill(value) {
                    return Promise({
                        "when": function() {
                            return value;
                        },
                        "get": function(name) {
                            return value[name];
                        },
                        "set": function(name, rhs) {
                            value[name] = rhs;
                        },
                        "delete": function(name) {
                            delete value[name];
                        },
                        "post": function(name, args) {
                            // Mark Miller proposes that post with no name should apply a
                            // promised function.
                            if (name === null || name === void 0) {
                                return value.apply(void 0, args);
                            } else {
                                return value[name].apply(value, args);
                            }
                        },
                        "apply": function(thisp, args) {
                            return value.apply(thisp, args);
                        },
                        "keys": function() {
                            return object_keys(value);
                        }
                    }, void 0, function inspect() {
                        return {
                            state: "fulfilled",
                            value: value
                        };
                    });
                }

                /**
                 * Converts thenables to Q promises.
                 * @param promise thenable promise
                 * @returns a Q promise
                 */
                function coerce(promise) {
                    var deferred = defer();
                    nextTick(function() {
                        try {
                            promise.then(deferred.resolve, deferred.reject, deferred.notify);
                        } catch (exception) {
                            deferred.reject(exception);
                        }
                    });
                    return deferred.promise;
                }

                /**
                 * Annotates an object such that it will never be
                 * transferred away from this process over any promise
                 * communication channel.
                 * @param object
                 * @returns promise a wrapping of that object that
                 * additionally responds to the "isDef" message
                 * without a rejection.
                 */
                Q.master = master;

                function master(object) {
                    return Promise({
                        "isDef": function() {}
                    }, function fallback(op, args) {
                        return dispatch(object, op, args);
                    }, function() {
                        return Q(object).inspect();
                    });
                }

                /**
                 * Spreads the values of a promised array of arguments into the
                 * fulfillment callback.
                 * @param fulfilled callback that receives variadic arguments from the
                 * promised array
                 * @param rejected callback that receives the exception if the promise
                 * is rejected.
                 * @returns a promise for the return value or thrown exception of
                 * either callback.
                 */
                Q.spread = spread;

                function spread(value, fulfilled, rejected) {
                    return Q(value).spread(fulfilled, rejected);
                }

                Promise.prototype.spread = function(fulfilled, rejected) {
                    return this.all().then(function(array) {
                        return fulfilled.apply(void 0, array);
                    }, rejected);
                };

                /**
                 * The async function is a decorator for generator functions, turning
                 * them into asynchronous generators.  Although generators are only part
                 * of the newest ECMAScript 6 drafts, this code does not cause syntax
                 * errors in older engines.  This code should continue to work and will
                 * in fact improve over time as the language improves.
                 *
                 * ES6 generators are currently part of V8 version 3.19 with the
                 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
                 * for longer, but under an older Python-inspired form.  This function
                 * works on both kinds of generators.
                 *
                 * Decorates a generator function such that:
                 *  - it may yield promises
                 *  - execution will continue when that promise is fulfilled
                 *  - the value of the yield expression will be the fulfilled value
                 *  - it returns a promise for the return value (when the generator
                 *    stops iterating)
                 *  - the decorated function returns a promise for the return value
                 *    of the generator or the first rejected promise among those
                 *    yielded.
                 *  - if an error is thrown in the generator, it propagates through
                 *    every following yield until it is caught, or until it escapes
                 *    the generator function altogether, and is translated into a
                 *    rejection for the promise returned by the decorated generator.
                 */
                Q.async = async;

                function async (makeGenerator) {
                    return function() {
                        // when verb is "send", arg is a value
                        // when verb is "throw", arg is an exception
                        function continuer(verb, arg) {
                            var result;

                            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
                            // engine that has a deployed base of browsers that support generators.
                            // However, SM's generators use the Python-inspired semantics of
                            // outdated ES6 drafts.  We would like to support ES6, but we'd also
                            // like to make it possible to use generators in deployed browsers, so
                            // we also support Python-style generators.  At some point we can remove
                            // this block.

                            if (typeof StopIteration === "undefined") {
                                // ES6 Generators
                                try {
                                    result = generator[verb](arg);
                                } catch (exception) {
                                    return reject(exception);
                                }
                                if (result.done) {
                                    return Q(result.value);
                                } else {
                                    return when(result.value, callback, errback);
                                }
                            } else {
                                // SpiderMonkey Generators
                                // FIXME: Remove this case when SM does ES6 generators.
                                try {
                                    result = generator[verb](arg);
                                } catch (exception) {
                                    if (isStopIteration(exception)) {
                                        return Q(exception.value);
                                    } else {
                                        return reject(exception);
                                    }
                                }
                                return when(result, callback, errback);
                            }
                        }
                        var generator = makeGenerator.apply(this, arguments);
                        var callback = continuer.bind(continuer, "next");
                        var errback = continuer.bind(continuer, "throw");
                        return callback();
                    };
                }

                /**
                 * The spawn function is a small wrapper around async that immediately
                 * calls the generator and also ends the promise chain, so that any
                 * unhandled errors are thrown instead of forwarded to the error
                 * handler. This is useful because it's extremely common to run
                 * generators at the top-level to work with libraries.
                 */
                Q.spawn = spawn;

                function spawn(makeGenerator) {
                    Q.done(Q.async(makeGenerator)());
                }

                // FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
                /**
                 * Throws a ReturnValue exception to stop an asynchronous generator.
                 *
                 * This interface is a stop-gap measure to support generator return
                 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
                 * generators like Chromium 29, just use "return" in your generator
                 * functions.
                 *
                 * @param value the return value for the surrounding generator
                 * @throws ReturnValue exception with the value.
                 * @example
                 * // ES6 style
                 * Q.async(function* () {
                 *      var foo = yield getFooPromise();
                 *      var bar = yield getBarPromise();
                 *      return foo + bar;
                 * })
                 * // Older SpiderMonkey style
                 * Q.async(function () {
                 *      var foo = yield getFooPromise();
                 *      var bar = yield getBarPromise();
                 *      Q.return(foo + bar);
                 * })
                 */
                Q["return"] = _return;

                function _return(value) {
                    throw new QReturnValue(value);
                }

                /**
                 * The promised function decorator ensures that any promise arguments
                 * are settled and passed as values (`this` is also settled and passed
                 * as a value).  It will also ensure that the result of a function is
                 * always a promise.
                 *
                 * @example
                 * var add = Q.promised(function (a, b) {
                 *     return a + b;
                 * });
                 * add(Q(a), Q(B));
                 *
                 * @param {function} callback The function to decorate
                 * @returns {function} a function that has been decorated.
                 */
                Q.promised = promised;

                function promised(callback) {
                    return function() {
                        return spread([this, all(arguments)], function(self, args) {
                            return callback.apply(self, args);
                        });
                    };
                }

                /**
                 * sends a message to a value in a future turn
                 * @param object* the recipient
                 * @param op the name of the message operation, e.g., "when",
                 * @param args further arguments to be forwarded to the operation
                 * @returns result {Promise} a promise for the result of the operation
                 */
                Q.dispatch = dispatch;

                function dispatch(object, op, args) {
                    return Q(object).dispatch(op, args);
                }

                Promise.prototype.dispatch = function(op, args) {
                    var self = this;
                    var deferred = defer();
                    nextTick(function() {
                        self.promiseDispatch(deferred.resolve, op, args);
                    });
                    return deferred.promise;
                };

                /**
                 * Gets the value of a property in a future turn.
                 * @param object    promise or immediate reference for target object
                 * @param name      name of property to get
                 * @return promise for the property value
                 */
                Q.get = function(object, key) {
                    return Q(object).dispatch("get", [key]);
                };

                Promise.prototype.get = function(key) {
                    return this.dispatch("get", [key]);
                };

                /**
                 * Sets the value of a property in a future turn.
                 * @param object    promise or immediate reference for object object
                 * @param name      name of property to set
                 * @param value     new value of property
                 * @return promise for the return value
                 */
                Q.set = function(object, key, value) {
                    return Q(object).dispatch("set", [key, value]);
                };

                Promise.prototype.set = function(key, value) {
                    return this.dispatch("set", [key, value]);
                };

                /**
                 * Deletes a property in a future turn.
                 * @param object    promise or immediate reference for target object
                 * @param name      name of property to delete
                 * @return promise for the return value
                 */
                Q.del = // TODO: legacy
                    Q["delete"] = function(object, key) {
                        return Q(object).dispatch("delete", [key]);
                    };

                Promise.prototype.del = // TODO: legacy
                    Promise.prototype["delete"] = function(key) {
                        return this.dispatch("delete", [key]);
                    };

                /**
                 * Invokes a method in a future turn.
                 * @param object    promise or immediate reference for target object
                 * @param name      name of method to invoke
                 * @param value     a value to post, typically an array of
                 *                  invocation arguments for promises that
                 *                  are ultimately backed with `resolve` values,
                 *                  as opposed to those backed with URLs
                 *                  wherein the posted value can be any
                 *                  JSON serializable object.
                 * @return promise for the return value
                 */
                // bound locally because it is used by other methods
                Q.mapply = // TODO: As proposed by "Redsandro"
                    Q.post = function(object, name, args) {
                        return Q(object).dispatch("post", [name, args]);
                    };

                Promise.prototype.mapply = // TODO: As proposed by "Redsandro"
                    Promise.prototype.post = function(name, args) {
                        return this.dispatch("post", [name, args]);
                    };

                /**
                 * Invokes a method in a future turn.
                 * @param object    promise or immediate reference for target object
                 * @param name      name of method to invoke
                 * @param ...args   array of invocation arguments
                 * @return promise for the return value
                 */
                Q.send = // TODO: Mark Miller's proposed parlance
                    Q.mcall = // TODO: As proposed by "Redsandro"
                    Q.invoke = function(object, name /*...args*/ ) {
                        return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
                    };

                Promise.prototype.send = // TODO: Mark Miller's proposed parlance
                    Promise.prototype.mcall = // TODO: As proposed by "Redsandro"
                    Promise.prototype.invoke = function(name /*...args*/ ) {
                        return this.dispatch("post", [name, array_slice(arguments, 1)]);
                    };

                /**
                 * Applies the promised function in a future turn.
                 * @param object    promise or immediate reference for target function
                 * @param args      array of application arguments
                 */
                Q.fapply = function(object, args) {
                    return Q(object).dispatch("apply", [void 0, args]);
                };

                Promise.prototype.fapply = function(args) {
                    return this.dispatch("apply", [void 0, args]);
                };

                /**
                 * Calls the promised function in a future turn.
                 * @param object    promise or immediate reference for target function
                 * @param ...args   array of application arguments
                 */
                Q["try"] =
                    Q.fcall = function(object /* ...args*/ ) {
                        return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
                    };

                Promise.prototype.fcall = function( /*...args*/ ) {
                    return this.dispatch("apply", [void 0, array_slice(arguments)]);
                };

                /**
                 * Binds the promised function, transforming return values into a fulfilled
                 * promise and thrown errors into a rejected one.
                 * @param object    promise or immediate reference for target function
                 * @param ...args   array of application arguments
                 */
                Q.fbind = function(object /*...args*/ ) {
                    var promise = Q(object);
                    var args = array_slice(arguments, 1);
                    return function fbound() {
                        return promise.dispatch("apply", [
                            this,
                            args.concat(array_slice(arguments))
                        ]);
                    };
                };
                Promise.prototype.fbind = function( /*...args*/ ) {
                    var promise = this;
                    var args = array_slice(arguments);
                    return function fbound() {
                        return promise.dispatch("apply", [
                            this,
                            args.concat(array_slice(arguments))
                        ]);
                    };
                };

                /**
                 * Requests the names of the owned properties of a promised
                 * object in a future turn.
                 * @param object    promise or immediate reference for target object
                 * @return promise for the keys of the eventually settled object
                 */
                Q.keys = function(object) {
                    return Q(object).dispatch("keys", []);
                };

                Promise.prototype.keys = function() {
                    return this.dispatch("keys", []);
                };

                /**
                 * Turns an array of promises into a promise for an array.  If any of
                 * the promises gets rejected, the whole array is rejected immediately.
                 * @param {Array*} an array (or promise for an array) of values (or
                 * promises for values)
                 * @returns a promise for an array of the corresponding values
                 */
                // By Mark Miller
                // http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
                Q.all = all;

                function all(promises) {
                    return when(promises, function(promises) {
                        var countDown = 0;
                        var deferred = defer();
                        array_reduce(promises, function(undefined, promise, index) {
                            var snapshot;
                            if (
                                isPromise(promise) &&
                                (snapshot = promise.inspect()).state === "fulfilled"
                            ) {
                                promises[index] = snapshot.value;
                            } else {
                                ++countDown;
                                when(
                                    promise,
                                    function(value) {
                                        promises[index] = value;
                                        if (--countDown === 0) {
                                            deferred.resolve(promises);
                                        }
                                    },
                                    deferred.reject,
                                    function(progress) {
                                        deferred.notify({
                                            index: index,
                                            value: progress
                                        });
                                    }
                                );
                            }
                        }, void 0);
                        if (countDown === 0) {
                            deferred.resolve(promises);
                        }
                        return deferred.promise;
                    });
                }

                Promise.prototype.all = function() {
                    return all(this);
                };

                /**
                 * Waits for all promises to be settled, either fulfilled or
                 * rejected.  This is distinct from `all` since that would stop
                 * waiting at the first rejection.  The promise returned by
                 * `allResolved` will never be rejected.
                 * @param promises a promise for an array (or an array) of promises
                 * (or values)
                 * @return a promise for an array of promises
                 */
                Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");

                function allResolved(promises) {
                    return when(promises, function(promises) {
                        promises = array_map(promises, Q);
                        return when(all(array_map(promises, function(promise) {
                            return when(promise, noop, noop);
                        })), function() {
                            return promises;
                        });
                    });
                }

                Promise.prototype.allResolved = function() {
                    return allResolved(this);
                };

                /**
                 * @see Promise#allSettled
                 */
                Q.allSettled = allSettled;

                function allSettled(promises) {
                    return Q(promises).allSettled();
                }

                /**
                 * Turns an array of promises into a promise for an array of their states (as
                 * returned by `inspect`) when they have all settled.
                 * @param {Array[Any*]} values an array (or promise for an array) of values (or
                 * promises for values)
                 * @returns {Array[State]} an array of states for the respective values.
                 */
                Promise.prototype.allSettled = function() {
                    return this.then(function(promises) {
                        return all(array_map(promises, function(promise) {
                            promise = Q(promise);

                            function regardless() {
                                return promise.inspect();
                            }
                            return promise.then(regardless, regardless);
                        }));
                    });
                };

                /**
                 * Captures the failure of a promise, giving an oportunity to recover
                 * with a callback.  If the given promise is fulfilled, the returned
                 * promise is fulfilled.
                 * @param {Any*} promise for something
                 * @param {Function} callback to fulfill the returned promise if the
                 * given promise is rejected
                 * @returns a promise for the return value of the callback
                 */
                Q.fail = // TODO: legacy
                    Q["catch"] = function(object, rejected) {
                        return Q(object).then(void 0, rejected);
                    };

                Promise.prototype.fail = // TODO: legacy
                    Promise.prototype["catch"] = function(rejected) {
                        return this.then(void 0, rejected);
                    };

                /**
                 * Attaches a listener that can respond to progress notifications from a
                 * promise's originating deferred. This listener receives the exact arguments
                 * passed to ``deferred.notify``.
                 * @param {Any*} promise for something
                 * @param {Function} callback to receive any progress notifications
                 * @returns the given promise, unchanged
                 */
                Q.progress = progress;

                function progress(object, progressed) {
                    return Q(object).then(void 0, void 0, progressed);
                }

                Promise.prototype.progress = function(progressed) {
                    return this.then(void 0, void 0, progressed);
                };

                /**
                 * Provides an opportunity to observe the settling of a promise,
                 * regardless of whether the promise is fulfilled or rejected.  Forwards
                 * the resolution to the returned promise when the callback is done.
                 * The callback can return a promise to defer completion.
                 * @param {Any*} promise
                 * @param {Function} callback to observe the resolution of the given
                 * promise, takes no arguments.
                 * @returns a promise for the resolution of the given promise when
                 * ``fin`` is done.
                 */
                Q.fin = // TODO: legacy
                    Q["finally"] = function(object, callback) {
                        return Q(object)["finally"](callback);
                    };

                Promise.prototype.fin = // TODO: legacy
                    Promise.prototype["finally"] = function(callback) {
                        callback = Q(callback);
                        return this.then(function(value) {
                            return callback.fcall().then(function() {
                                return value;
                            });
                        }, function(reason) {
                            // TODO attempt to recycle the rejection with "this".
                            return callback.fcall().then(function() {
                                throw reason;
                            });
                        });
                    };

                /**
                 * Terminates a chain of promises, forcing rejections to be
                 * thrown as exceptions.
                 * @param {Any*} promise at the end of a chain of promises
                 * @returns nothing
                 */
                Q.done = function(object, fulfilled, rejected, progress) {
                    return Q(object).done(fulfilled, rejected, progress);
                };

                Promise.prototype.done = function(fulfilled, rejected, progress) {
                    var onUnhandledError = function(error) {
                        // forward to a future turn so that ``when``
                        // does not catch it and turn it into a rejection.
                        nextTick(function() {
                            makeStackTraceLong(error, promise);
                            if (Q.onerror) {
                                Q.onerror(error);
                            } else {
                                throw error;
                            }
                        });
                    };

                    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
                    var promise = fulfilled || rejected || progress ?
                        this.then(fulfilled, rejected, progress) :
                        this;

                    if (typeof process === "object" && process && process.domain) {
                        onUnhandledError = process.domain.bind(onUnhandledError);
                    }

                    promise.then(void 0, onUnhandledError);
                };

                /**
                 * Causes a promise to be rejected if it does not get fulfilled before
                 * some milliseconds time out.
                 * @param {Any*} promise
                 * @param {Number} milliseconds timeout
                 * @param {Any*} custom error message or Error object (optional)
                 * @returns a promise for the resolution of the given promise if it is
                 * fulfilled before the timeout, otherwise rejected.
                 */
                Q.timeout = function(object, ms, error) {
                    return Q(object).timeout(ms, error);
                };

                Promise.prototype.timeout = function(ms, error) {
                    var deferred = defer();
                    var timeoutId = setTimeout(function() {
                        if (!error || "string" === typeof error) {
                            error = new Error(error || "Timed out after " + ms + " ms");
                            error.code = "ETIMEDOUT";
                        }
                        deferred.reject(error);
                    }, ms);

                    this.then(function(value) {
                        clearTimeout(timeoutId);
                        deferred.resolve(value);
                    }, function(exception) {
                        clearTimeout(timeoutId);
                        deferred.reject(exception);
                    }, deferred.notify);

                    return deferred.promise;
                };

                /**
                 * Returns a promise for the given value (or promised value), some
                 * milliseconds after it resolved. Passes rejections immediately.
                 * @param {Any*} promise
                 * @param {Number} milliseconds
                 * @returns a promise for the resolution of the given promise after milliseconds
                 * time has elapsed since the resolution of the given promise.
                 * If the given promise rejects, that is passed immediately.
                 */
                Q.delay = function(object, timeout) {
                    if (timeout === void 0) {
                        timeout = object;
                        object = void 0;
                    }
                    return Q(object).delay(timeout);
                };

                Promise.prototype.delay = function(timeout) {
                    return this.then(function(value) {
                        var deferred = defer();
                        setTimeout(function() {
                            deferred.resolve(value);
                        }, timeout);
                        return deferred.promise;
                    });
                };

                /**
                 * Passes a continuation to a Node function, which is called with the given
                 * arguments provided as an array, and returns a promise.
                 *
                 *      Q.nfapply(FS.readFile, [__filename])
                 *      .then(function (content) {
                 *      })
                 *
                 */
                Q.nfapply = function(callback, args) {
                    return Q(callback).nfapply(args);
                };

                Promise.prototype.nfapply = function(args) {
                    var deferred = defer();
                    var nodeArgs = array_slice(args);
                    nodeArgs.push(deferred.makeNodeResolver());
                    this.fapply(nodeArgs).fail(deferred.reject);
                    return deferred.promise;
                };

                /**
                 * Passes a continuation to a Node function, which is called with the given
                 * arguments provided individually, and returns a promise.
                 * @example
                 * Q.nfcall(FS.readFile, __filename)
                 * .then(function (content) {
                 * })
                 *
                 */
                Q.nfcall = function(callback /*...args*/ ) {
                    var args = array_slice(arguments, 1);
                    return Q(callback).nfapply(args);
                };

                Promise.prototype.nfcall = function( /*...args*/ ) {
                    var nodeArgs = array_slice(arguments);
                    var deferred = defer();
                    nodeArgs.push(deferred.makeNodeResolver());
                    this.fapply(nodeArgs).fail(deferred.reject);
                    return deferred.promise;
                };

                /**
                 * Wraps a NodeJS continuation passing function and returns an equivalent
                 * version that returns a promise.
                 * @example
                 * Q.nfbind(FS.readFile, __filename)("utf-8")
                 * .then(console.log)
                 * .done()
                 */
                Q.nfbind =
                    Q.denodeify = function(callback /*...args*/ ) {
                        var baseArgs = array_slice(arguments, 1);
                        return function() {
                            var nodeArgs = baseArgs.concat(array_slice(arguments));
                            var deferred = defer();
                            nodeArgs.push(deferred.makeNodeResolver());
                            Q(callback).fapply(nodeArgs).fail(deferred.reject);
                            return deferred.promise;
                        };
                    };

                Promise.prototype.nfbind =
                    Promise.prototype.denodeify = function( /*...args*/ ) {
                        var args = array_slice(arguments);
                        args.unshift(this);
                        return Q.denodeify.apply(void 0, args);
                    };

                Q.nbind = function(callback, thisp /*...args*/ ) {
                    var baseArgs = array_slice(arguments, 2);
                    return function() {
                        var nodeArgs = baseArgs.concat(array_slice(arguments));
                        var deferred = defer();
                        nodeArgs.push(deferred.makeNodeResolver());

                        function bound() {
                            return callback.apply(thisp, arguments);
                        }
                        Q(bound).fapply(nodeArgs).fail(deferred.reject);
                        return deferred.promise;
                    };
                };

                Promise.prototype.nbind = function( /*thisp, ...args*/ ) {
                    var args = array_slice(arguments, 0);
                    args.unshift(this);
                    return Q.nbind.apply(void 0, args);
                };

                /**
                 * Calls a method of a Node-style object that accepts a Node-style
                 * callback with a given array of arguments, plus a provided callback.
                 * @param object an object that has the named method
                 * @param {String} name name of the method of object
                 * @param {Array} args arguments to pass to the method; the callback
                 * will be provided by Q and appended to these arguments.
                 * @returns a promise for the value or error
                 */
                Q.nmapply = // TODO: As proposed by "Redsandro"
                    Q.npost = function(object, name, args) {
                        return Q(object).npost(name, args);
                    };

                Promise.prototype.nmapply = // TODO: As proposed by "Redsandro"
                    Promise.prototype.npost = function(name, args) {
                        var nodeArgs = array_slice(args || []);
                        var deferred = defer();
                        nodeArgs.push(deferred.makeNodeResolver());
                        this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
                        return deferred.promise;
                    };

                /**
                 * Calls a method of a Node-style object that accepts a Node-style
                 * callback, forwarding the given variadic arguments, plus a provided
                 * callback argument.
                 * @param object an object that has the named method
                 * @param {String} name name of the method of object
                 * @param ...args arguments to pass to the method; the callback will
                 * be provided by Q and appended to these arguments.
                 * @returns a promise for the value or error
                 */
                Q.nsend = // TODO: Based on Mark Miller's proposed "send"
                    Q.nmcall = // TODO: Based on "Redsandro's" proposal
                    Q.ninvoke = function(object, name /*...args*/ ) {
                        var nodeArgs = array_slice(arguments, 2);
                        var deferred = defer();
                        nodeArgs.push(deferred.makeNodeResolver());
                        Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
                        return deferred.promise;
                    };

                Promise.prototype.nsend = // TODO: Based on Mark Miller's proposed "send"
                    Promise.prototype.nmcall = // TODO: Based on "Redsandro's" proposal
                    Promise.prototype.ninvoke = function(name /*...args*/ ) {
                        var nodeArgs = array_slice(arguments, 1);
                        var deferred = defer();
                        nodeArgs.push(deferred.makeNodeResolver());
                        this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
                        return deferred.promise;
                    };

                /**
                 * If a function would like to support both Node continuation-passing-style and
                 * promise-returning-style, it can end its internal promise chain with
                 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
                 * elects to use a nodeback, the result will be sent there.  If they do not
                 * pass a nodeback, they will receive the result promise.
                 * @param object a result (or a promise for a result)
                 * @param {Function} nodeback a Node.js-style callback
                 * @returns either the promise or nothing
                 */
                Q.nodeify = nodeify;

                function nodeify(object, nodeback) {
                    return Q(object).nodeify(nodeback);
                }

                Promise.prototype.nodeify = function(nodeback) {
                    if (nodeback) {
                        this.then(function(value) {
                            nextTick(function() {
                                nodeback(null, value);
                            });
                        }, function(error) {
                            nextTick(function() {
                                nodeback(error);
                            });
                        });
                    } else {
                        return this;
                    }
                };

                // All code before this point will be filtered from stack traces.
                var qEndingLine = captureLine();

                return Q;

            });

        }).call(this, require('_process'), require("timers").setImmediate)
    }, {
        "_process": 4,
        "timers": 5
    }],
    2: [function(require, module, exports) {
        /** @fileOverview Javascript cryptography implementation.
         *
         * Crush to remove comments, shorten variable names and
         * generally reduce transmission size.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        "use strict";
        /*jslint indent: 2, bitwise: false, nomen: false, plusplus: false, white: false, regexp: false */
        /*global document, window, escape, unescape, module, require, Uint32Array */

        /** @namespace The Stanford Javascript Crypto Library, top-level namespace. */
        var sjcl = {
            /** @namespace Symmetric ciphers. */
            cipher: {},

            /** @namespace Hash functions.  Right now only SHA256 is implemented. */
            hash: {},

            /** @namespace Key exchange functions.  Right now only SRP is implemented. */
            keyexchange: {},

            /** @namespace Block cipher modes of operation. */
            mode: {},

            /** @namespace Miscellaneous.  HMAC and PBKDF2. */
            misc: {},

            /**
             * @namespace Bit array encoders and decoders.
             *
             * @description
             * The members of this namespace are functions which translate between
             * SJCL's bitArrays and other objects (usually strings).  Because it
             * isn't always clear which direction is encoding and which is decoding,
             * the method names are "fromBits" and "toBits".
             */
            codec: {},

            /** @namespace Exceptions. */
            exception: {
                /** @constructor Ciphertext is corrupt. */
                corrupt: function(message) {
                    this.toString = function() {
                        return "CORRUPT: " + this.message;
                    };
                    this.message = message;
                },

                /** @constructor Invalid parameter. */
                invalid: function(message) {
                    this.toString = function() {
                        return "INVALID: " + this.message;
                    };
                    this.message = message;
                },

                /** @constructor Bug or missing feature in SJCL. @constructor */
                bug: function(message) {
                    this.toString = function() {
                        return "BUG: " + this.message;
                    };
                    this.message = message;
                },

                /** @constructor Something isn't ready. */
                notReady: function(message) {
                    this.toString = function() {
                        return "NOT READY: " + this.message;
                    };
                    this.message = message;
                }
            }
        };

        if (typeof module !== 'undefined' && module.exports) {
            module.exports = sjcl;
        }
        if (typeof define === "function") {
            define([], function() {
                return sjcl;
            });
        }
        /** @fileOverview Low-level AES implementation.
         *
         * This file contains a low-level implementation of AES, optimized for
         * size and for efficiency on several browsers.  It is based on
         * OpenSSL's aes_core.c, a public-domain implementation by Vincent
         * Rijmen, Antoon Bosselaers and Paulo Barreto.
         *
         * An older version of this implementation is available in the public
         * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
         * Stanford University 2008-2010 and BSD-licensed for liability
         * reasons.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /**
         * Schedule out an AES key for both encryption and decryption.  This
         * is a low-level class.  Use a cipher mode to do bulk encryption.
         *
         * @constructor
         * @param {Array} key The key as an array of 4, 6 or 8 words.
         *
         * @class Advanced Encryption Standard (low-level interface)
         */
        sjcl.cipher.aes = function(key) {
            if (!this._tables[0][0][0]) {
                this._precompute();
            }

            var i, j, tmp,
                encKey, decKey,
                sbox = this._tables[0][4],
                decTable = this._tables[1],
                keyLen = key.length,
                rcon = 1;

            if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
                throw new sjcl.exception.invalid("invalid aes key size");
            }

            this._key = [encKey = key.slice(0), decKey = []];

            // schedule encryption keys
            for (i = keyLen; i < 4 * keyLen + 28; i++) {
                tmp = encKey[i - 1];

                // apply sbox
                if (i % keyLen === 0 || (keyLen === 8 && i % keyLen === 4)) {
                    tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];

                    // shift rows and add rcon
                    if (i % keyLen === 0) {
                        tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
                        rcon = rcon << 1 ^ (rcon >> 7) * 283;
                    }
                }

                encKey[i] = encKey[i - keyLen] ^ tmp;
            }

            // schedule decryption keys
            for (j = 0; i; j++, i--) {
                tmp = encKey[j & 3 ? i : i - 4];
                if (i <= 4 || j < 4) {
                    decKey[j] = tmp;
                } else {
                    decKey[j] = decTable[0][sbox[tmp >>> 24]] ^
                        decTable[1][sbox[tmp >> 16 & 255]] ^
                        decTable[2][sbox[tmp >> 8 & 255]] ^
                        decTable[3][sbox[tmp & 255]];
                }
            }
        };

        sjcl.cipher.aes.prototype = {
            // public
            /* Something like this might appear here eventually
            name: "AES",
            blockSize: 4,
            keySizes: [4,6,8],
            */

            /**
             * Encrypt an array of 4 big-endian words.
             * @param {Array} data The plaintext.
             * @return {Array} The ciphertext.
             */
            encrypt: function(data) {
                return this._crypt(data, 0);
            },

            /**
             * Decrypt an array of 4 big-endian words.
             * @param {Array} data The ciphertext.
             * @return {Array} The plaintext.
             */
            decrypt: function(data) {
                return this._crypt(data, 1);
            },

            /**
             * The expanded S-box and inverse S-box tables.  These will be computed
             * on the client so that we don't have to send them down the wire.
             *
             * There are two tables, _tables[0] is for encryption and
             * _tables[1] is for decryption.
             *
             * The first 4 sub-tables are the expanded S-box with MixColumns.  The
             * last (_tables[01][4]) is the S-box itself.
             *
             * @private
             */
            _tables: [
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            ],

            /**
             * Expand the S-box tables.
             *
             * @private
             */
            _precompute: function() {
                var encTable = this._tables[0],
                    decTable = this._tables[1],
                    sbox = encTable[4],
                    sboxInv = decTable[4],
                    i, x, xInv, d = [],
                    th = [],
                    x2, x4, x8, s, tEnc, tDec;

                // Compute double and third tables
                for (i = 0; i < 256; i++) {
                    th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
                }

                for (x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
                    // Compute sbox
                    s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
                    s = s >> 8 ^ s & 255 ^ 99;
                    sbox[x] = s;
                    sboxInv[s] = x;

                    // Compute MixColumns
                    x8 = d[x4 = d[x2 = d[x]]];
                    tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
                    tEnc = d[s] * 0x101 ^ s * 0x1010100;

                    for (i = 0; i < 4; i++) {
                        encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
                        decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
                    }
                }

                // Compactify.  Considerable speedup on Firefox.
                for (i = 0; i < 5; i++) {
                    encTable[i] = encTable[i].slice(0);
                    decTable[i] = decTable[i].slice(0);
                }
            },

            /**
             * Encryption and decryption core.
             * @param {Array} input Four words to be encrypted or decrypted.
             * @param dir The direction, 0 for encrypt and 1 for decrypt.
             * @return {Array} The four encrypted or decrypted words.
             * @private
             */
            _crypt: function(input, dir) {
                if (input.length !== 4) {
                    throw new sjcl.exception.invalid("invalid aes block size");
                }

                var key = this._key[dir],
                    // state variables a,b,c,d are loaded with pre-whitened data
                    a = input[0] ^ key[0],
                    b = input[dir ? 3 : 1] ^ key[1],
                    c = input[2] ^ key[2],
                    d = input[dir ? 1 : 3] ^ key[3],
                    a2, b2, c2,

                    nInnerRounds = key.length / 4 - 2,
                    i,
                    kIndex = 4,
                    out = [0, 0, 0, 0],
                    table = this._tables[dir],

                    // load up the tables
                    t0 = table[0],
                    t1 = table[1],
                    t2 = table[2],
                    t3 = table[3],
                    sbox = table[4];

                // Inner rounds.  Cribbed from OpenSSL.
                for (i = 0; i < nInnerRounds; i++) {
                    a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
                    b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
                    c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
                    d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
                    kIndex += 4;
                    a = a2;
                    b = b2;
                    c = c2;
                }

                // Last round.
                for (i = 0; i < 4; i++) {
                    out[dir ? 3 & -i : i] =
                        sbox[a >>> 24] << 24 ^
                        sbox[b >> 16 & 255] << 16 ^
                        sbox[c >> 8 & 255] << 8 ^
                        sbox[d & 255] ^
                        key[kIndex++];
                    a2 = a;
                    a = b;
                    b = c;
                    c = d;
                    d = a2;
                }

                return out;
            }
        };

        /** @fileOverview Arrays of bits, encoded as arrays of Numbers.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace Arrays of bits, encoded as arrays of Numbers.
         *
         * @description
         * <p>
         * These objects are the currency accepted by SJCL's crypto functions.
         * </p>
         *
         * <p>
         * Most of our crypto primitives operate on arrays of 4-byte words internally,
         * but many of them can take arguments that are not a multiple of 4 bytes.
         * This library encodes arrays of bits (whose size need not be a multiple of 8
         * bits) as arrays of 32-bit words.  The bits are packed, big-endian, into an
         * array of words, 32 bits at a time.  Since the words are double-precision
         * floating point numbers, they fit some extra data.  We use this (in a private,
         * possibly-changing manner) to encode the number of bits actually  present
         * in the last word of the array.
         * </p>
         *
         * <p>
         * Because bitwise ops clear this out-of-band data, these arrays can be passed
         * to ciphers like AES which want arrays of words.
         * </p>
         */
        sjcl.bitArray = {
            /**
             * Array slices in units of bits.
             * @param {bitArray} a The array to slice.
             * @param {Number} bstart The offset to the start of the slice, in bits.
             * @param {Number} bend The offset to the end of the slice, in bits.  If this is undefined,
             * slice until the end of the array.
             * @return {bitArray} The requested slice.
             */
            bitSlice: function(a, bstart, bend) {
                a = sjcl.bitArray._shiftRight(a.slice(bstart / 32), 32 - (bstart & 31)).slice(1);
                return (bend === undefined) ? a : sjcl.bitArray.clamp(a, bend - bstart);
            },

            /**
             * Extract a number packed into a bit array.
             * @param {bitArray} a The array to slice.
             * @param {Number} bstart The offset to the start of the slice, in bits.
             * @param {Number} length The length of the number to extract.
             * @return {Number} The requested slice.
             */
            extract: function(a, bstart, blength) {
                // FIXME: this Math.floor is not necessary at all, but for some reason
                // seems to suppress a bug in the Chromium JIT.
                var x, sh = Math.floor((-bstart - blength) & 31);
                if ((bstart + blength - 1 ^ bstart) & -32) {
                    // it crosses a boundary
                    x = (a[bstart / 32 | 0] << (32 - sh)) ^ (a[bstart / 32 + 1 | 0] >>> sh);
                } else {
                    // within a single word
                    x = a[bstart / 32 | 0] >>> sh;
                }
                return x & ((1 << blength) - 1);
            },

            /**
             * Concatenate two bit arrays.
             * @param {bitArray} a1 The first array.
             * @param {bitArray} a2 The second array.
             * @return {bitArray} The concatenation of a1 and a2.
             */
            concat: function(a1, a2) {
                if (a1.length === 0 || a2.length === 0) {
                    return a1.concat(a2);
                }

                var last = a1[a1.length - 1],
                    shift = sjcl.bitArray.getPartial(last);
                if (shift === 32) {
                    return a1.concat(a2);
                } else {
                    return sjcl.bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
                }
            },

            /**
             * Find the length of an array of bits.
             * @param {bitArray} a The array.
             * @return {Number} The length of a, in bits.
             */
            bitLength: function(a) {
                var l = a.length,
                    x;
                if (l === 0) {
                    return 0;
                }
                x = a[l - 1];
                return (l - 1) * 32 + sjcl.bitArray.getPartial(x);
            },

            /**
             * Truncate an array.
             * @param {bitArray} a The array.
             * @param {Number} len The length to truncate to, in bits.
             * @return {bitArray} A new array, truncated to len bits.
             */
            clamp: function(a, len) {
                if (a.length * 32 < len) {
                    return a;
                }
                a = a.slice(0, Math.ceil(len / 32));
                var l = a.length;
                len = len & 31;
                if (l > 0 && len) {
                    a[l - 1] = sjcl.bitArray.partial(len, a[l - 1] & 0x80000000 >> (len - 1), 1);
                }
                return a;
            },

            /**
             * Make a partial word for a bit array.
             * @param {Number} len The number of bits in the word.
             * @param {Number} x The bits.
             * @param {Number} [0] _end Pass 1 if x has already been shifted to the high side.
             * @return {Number} The partial word.
             */
            partial: function(len, x, _end) {
                if (len === 32) {
                    return x;
                }
                return (_end ? x | 0 : x << (32 - len)) + len * 0x10000000000;
            },

            /**
             * Get the number of bits used by a partial word.
             * @param {Number} x The partial word.
             * @return {Number} The number of bits used by the partial word.
             */
            getPartial: function(x) {
                return Math.round(x / 0x10000000000) || 32;
            },

            /**
             * Compare two arrays for equality in a predictable amount of time.
             * @param {bitArray} a The first array.
             * @param {bitArray} b The second array.
             * @return {boolean} true if a == b; false otherwise.
             */
            equal: function(a, b) {
                if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) {
                    return false;
                }
                var x = 0,
                    i;
                for (i = 0; i < a.length; i++) {
                    x |= a[i] ^ b[i];
                }
                return (x === 0);
            },

            /** Shift an array right.
             * @param {bitArray} a The array to shift.
             * @param {Number} shift The number of bits to shift.
             * @param {Number} [carry=0] A byte to carry in
             * @param {bitArray} [out=[]] An array to prepend to the output.
             * @private
             */
            _shiftRight: function(a, shift, carry, out) {
                var i, last2 = 0,
                    shift2;
                if (out === undefined) {
                    out = [];
                }

                for (; shift >= 32; shift -= 32) {
                    out.push(carry);
                    carry = 0;
                }
                if (shift === 0) {
                    return out.concat(a);
                }

                for (i = 0; i < a.length; i++) {
                    out.push(carry | a[i] >>> shift);
                    carry = a[i] << (32 - shift);
                }
                last2 = a.length ? a[a.length - 1] : 0;
                shift2 = sjcl.bitArray.getPartial(last2);
                out.push(sjcl.bitArray.partial(shift + shift2 & 31, (shift + shift2 > 32) ? carry : out.pop(), 1));
                return out;
            },

            /** xor a block of 4 words together.
             * @private
             */
            _xor4: function(x, y) {
                return [x[0] ^ y[0], x[1] ^ y[1], x[2] ^ y[2], x[3] ^ y[3]];
            },

            /** byteswap a word array inplace.
             * (does not handle partial words)
             * @param {sjcl.bitArray} a word array
             * @return {sjcl.bitArray} byteswapped array
             */
            byteswapM: function(a) {
                var i, v, m = 0xff00;
                for (i = 0; i < a.length; ++i) {
                    v = a[i];
                    a[i] = (v >>> 24) | ((v >>> 8) & m) | ((v & m) << 8) | (v << 24);
                }
                return a;
            }
        };
        /** @fileOverview Bit array codec implementations.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace UTF-8 strings */
        sjcl.codec.utf8String = {
            /** Convert from a bitArray to a UTF-8 string. */
            fromBits: function(arr) {
                var out = "",
                    bl = sjcl.bitArray.bitLength(arr),
                    i, tmp;
                for (i = 0; i < bl / 8; i++) {
                    if ((i & 3) === 0) {
                        tmp = arr[i / 4];
                    }
                    out += String.fromCharCode(tmp >>> 24);
                    tmp <<= 8;
                }
                return decodeURIComponent(escape(out));
            },

            /** Convert from a UTF-8 string to a bitArray. */
            toBits: function(str) {
                str = unescape(encodeURIComponent(str));
                var out = [],
                    i, tmp = 0;
                for (i = 0; i < str.length; i++) {
                    tmp = tmp << 8 | str.charCodeAt(i);
                    if ((i & 3) === 3) {
                        out.push(tmp);
                        tmp = 0;
                    }
                }
                if (i & 3) {
                    out.push(sjcl.bitArray.partial(8 * (i & 3), tmp));
                }
                return out;
            }
        };
        /** @fileOverview Bit array codec implementations.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace Hexadecimal */
        sjcl.codec.hex = {
            /** Convert from a bitArray to a hex string. */
            fromBits: function(arr) {
                var out = "",
                    i;
                for (i = 0; i < arr.length; i++) {
                    out += ((arr[i] | 0) + 0xF00000000000).toString(16).substr(4);
                }
                return out.substr(0, sjcl.bitArray.bitLength(arr) / 4); //.replace(/(.{8})/g, "$1 ");
            },
            /** Convert from a hex string to a bitArray. */
            toBits: function(str) {
                var i, out = [],
                    len;
                str = str.replace(/\s|0x/g, "");
                len = str.length;
                str = str + "00000000";
                for (i = 0; i < str.length; i += 8) {
                    out.push(parseInt(str.substr(i, 8), 16) ^ 0);
                }
                return sjcl.bitArray.clamp(out, len * 4);
            }
        };

        /** @fileOverview Bit array codec implementations.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace Base64 encoding/decoding */
        sjcl.codec.base64 = {
            /** The base64 alphabet.
             * @private
             */
            _chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",

            /** Convert from a bitArray to a base64 string. */
            fromBits: function(arr, _noEquals, _url) {
                var out = "",
                    i, bits = 0,
                    c = sjcl.codec.base64._chars,
                    ta = 0,
                    bl = sjcl.bitArray.bitLength(arr);
                if (_url) {
                    c = c.substr(0, 62) + '-_';
                }
                for (i = 0; out.length * 6 < bl;) {
                    out += c.charAt((ta ^ arr[i] >>> bits) >>> 26);
                    if (bits < 6) {
                        ta = arr[i] << (6 - bits);
                        bits += 26;
                        i++;
                    } else {
                        ta <<= 6;
                        bits -= 6;
                    }
                }
                while ((out.length & 3) && !_noEquals) {
                    out += "=";
                }
                return out;
            },

            /** Convert from a base64 string to a bitArray */
            toBits: function(str, _url) {
                str = str.replace(/\s|=/g, '');
                var out = [],
                    i, bits = 0,
                    c = sjcl.codec.base64._chars,
                    ta = 0,
                    x;
                if (_url) {
                    c = c.substr(0, 62) + '-_';
                }
                for (i = 0; i < str.length; i++) {
                    x = c.indexOf(str.charAt(i));
                    if (x < 0) {
                        throw new sjcl.exception.invalid("this isn't base64!");
                    }
                    if (bits > 26) {
                        bits -= 26;
                        out.push(ta ^ x >>> bits);
                        ta = x << (32 - bits);
                    } else {
                        bits += 6;
                        ta ^= x << (32 - bits);
                    }
                }
                if (bits & 56) {
                    out.push(sjcl.bitArray.partial(bits & 56, ta, 1));
                }
                return out;
            }
        };

        sjcl.codec.base64url = {
            fromBits: function(arr) {
                return sjcl.codec.base64.fromBits(arr, 1, 1);
            },
            toBits: function(str) {
                return sjcl.codec.base64.toBits(str, 1);
            }
        };
        /** @fileOverview Javascript SHA-256 implementation.
         *
         * An older version of this implementation is available in the public
         * domain, but this one is (c) Emily Stark, Mike Hamburg, Dan Boneh,
         * Stanford University 2008-2010 and BSD-licensed for liability
         * reasons.
         *
         * Special thanks to Aldo Cortesi for pointing out several bugs in
         * this code.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /**
         * Context for a SHA-256 operation in progress.
         * @constructor
         * @class Secure Hash Algorithm, 256 bits.
         */
        sjcl.hash.sha256 = function(hash) {
            if (!this._key[0]) {
                this._precompute();
            }
            if (hash) {
                this._h = hash._h.slice(0);
                this._buffer = hash._buffer.slice(0);
                this._length = hash._length;
            } else {
                this.reset();
            }
        };

        /**
         * Hash a string or an array of words.
         * @static
         * @param {bitArray|String} data the data to hash.
         * @return {bitArray} The hash value, an array of 16 big-endian words.
         */
        sjcl.hash.sha256.hash = function(data) {
            return (new sjcl.hash.sha256()).update(data).finalize();
        };

        sjcl.hash.sha256.prototype = {
            /**
             * The hash's block size, in bits.
             * @constant
             */
            blockSize: 512,

            /**
             * Reset the hash state.
             * @return this
             */
            reset: function() {
                this._h = this._init.slice(0);
                this._buffer = [];
                this._length = 0;
                return this;
            },

            /**
             * Input several words to the hash.
             * @param {bitArray|String} data the data to hash.
             * @return this
             */
            update: function(data) {
                if (typeof data === "string") {
                    data = sjcl.codec.utf8String.toBits(data);
                }
                var i, b = this._buffer = sjcl.bitArray.concat(this._buffer, data),
                    ol = this._length,
                    nl = this._length = ol + sjcl.bitArray.bitLength(data);
                for (i = 512 + ol & -512; i <= nl; i += 512) {
                    this._block(b.splice(0, 16));
                }
                return this;
            },

            /**
             * Complete hashing and output the hash value.
             * @return {bitArray} The hash value, an array of 8 big-endian words.
             */
            finalize: function() {
                var i, b = this._buffer,
                    h = this._h;

                // Round out and push the buffer
                b = sjcl.bitArray.concat(b, [sjcl.bitArray.partial(1, 1)]);

                // Round out the buffer to a multiple of 16 words, less the 2 length words.
                for (i = b.length + 2; i & 15; i++) {
                    b.push(0);
                }

                // append the length
                b.push(Math.floor(this._length / 0x100000000));
                b.push(this._length | 0);

                while (b.length) {
                    this._block(b.splice(0, 16));
                }

                this.reset();
                return h;
            },

            /**
             * The SHA-256 initialization vector, to be precomputed.
             * @private
             */
            _init: [],
            /*
            _init:[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19],
            */

            /**
             * The SHA-256 hash key, to be precomputed.
             * @private
             */
            _key: [],
            /*
            _key:
              [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
               0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
               0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
               0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
               0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
               0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
               0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
               0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
            */


            /**
             * Function to precompute _init and _key.
             * @private
             */
            _precompute: function() {
                var i = 0,
                    prime = 2,
                    factor;

                function frac(x) {
                    return (x - Math.floor(x)) * 0x100000000 | 0;
                }

                outer: for (; i < 64; prime++) {
                    for (factor = 2; factor * factor <= prime; factor++) {
                        if (prime % factor === 0) {
                            // not a prime
                            continue outer;
                        }
                    }

                    if (i < 8) {
                        this._init[i] = frac(Math.pow(prime, 1 / 2));
                    }
                    this._key[i] = frac(Math.pow(prime, 1 / 3));
                    i++;
                }
            },

            /**
             * Perform one cycle of SHA-256.
             * @param {bitArray} words one block of words.
             * @private
             */
            _block: function(words) {
                var i, tmp, a, b,
                    w = words.slice(0),
                    h = this._h,
                    k = this._key,
                    h0 = h[0],
                    h1 = h[1],
                    h2 = h[2],
                    h3 = h[3],
                    h4 = h[4],
                    h5 = h[5],
                    h6 = h[6],
                    h7 = h[7];

                /* Rationale for placement of |0 :
                 * If a value can overflow is original 32 bits by a factor of more than a few
                 * million (2^23 ish), there is a possibility that it might overflow the
                 * 53-bit mantissa and lose precision.
                 *
                 * To avoid this, we clamp back to 32 bits by |'ing with 0 on any value that
                 * propagates around the loop, and on the hash state h[].  I don't believe
                 * that the clamps on h4 and on h0 are strictly necessary, but it's close
                 * (for h4 anyway), and better safe than sorry.
                 *
                 * The clamps on h[] are necessary for the output to be correct even in the
                 * common case and for short inputs.
                 */
                for (i = 0; i < 64; i++) {
                    // load up the input word for this round
                    if (i < 16) {
                        tmp = w[i];
                    } else {
                        a = w[(i + 1) & 15];
                        b = w[(i + 14) & 15];
                        tmp = w[i & 15] = ((a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) +
                            (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) +
                            w[i & 15] + w[(i + 9) & 15]) | 0;
                    }

                    tmp = (tmp + h7 + (h4 >>> 6 ^ h4 >>> 11 ^ h4 >>> 25 ^ h4 << 26 ^ h4 << 21 ^ h4 << 7) + (h6 ^ h4 & (h5 ^ h6)) + k[i]); // | 0;

                    // shift register
                    h7 = h6;
                    h6 = h5;
                    h5 = h4;
                    h4 = h3 + tmp | 0;
                    h3 = h2;
                    h2 = h1;
                    h1 = h0;

                    h0 = (tmp + ((h1 & h2) ^ (h3 & (h1 ^ h2))) + (h1 >>> 2 ^ h1 >>> 13 ^ h1 >>> 22 ^ h1 << 30 ^ h1 << 19 ^ h1 << 10)) | 0;
                }

                h[0] = h[0] + h0 | 0;
                h[1] = h[1] + h1 | 0;
                h[2] = h[2] + h2 | 0;
                h[3] = h[3] + h3 | 0;
                h[4] = h[4] + h4 | 0;
                h[5] = h[5] + h5 | 0;
                h[6] = h[6] + h6 | 0;
                h[7] = h[7] + h7 | 0;
            }
        };


        /** @fileOverview CCM mode implementation.
         *
         * Special thanks to Roy Nicholson for pointing out a bug in our
         * implementation.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace CTR mode with CBC MAC. */
        sjcl.mode.ccm = {
            /** The name of the mode.
             * @constant
             */
            name: "ccm",

            /** Encrypt in CCM mode.
             * @static
             * @param {Object} prf The pseudorandom function.  It must have a block size of 16 bytes.
             * @param {bitArray} plaintext The plaintext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} [adata=[]] The authenticated data.
             * @param {Number} [tlen=64] the desired tag length, in bits.
             * @return {bitArray} The encrypted data, an array of bytes.
             */
            encrypt: function(prf, plaintext, iv, adata, tlen) {
                var L, out = plaintext.slice(0),
                    tag, w = sjcl.bitArray,
                    ivl = w.bitLength(iv) / 8,
                    ol = w.bitLength(out) / 8;
                tlen = tlen || 64;
                adata = adata || [];

                if (ivl < 7) {
                    throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
                }

                // compute the length of the length
                for (L = 2; L < 4 && ol >>> 8 * L; L++) {}
                if (L < 15 - ivl) {
                    L = 15 - ivl;
                }
                iv = w.clamp(iv, 8 * (15 - L));

                // compute the tag
                tag = sjcl.mode.ccm._computeTag(prf, plaintext, iv, adata, tlen, L);

                // encrypt
                out = sjcl.mode.ccm._ctrMode(prf, out, iv, tag, tlen, L);

                return w.concat(out.data, out.tag);
            },

            /** Decrypt in CCM mode.
             * @static
             * @param {Object} prf The pseudorandom function.  It must have a block size of 16 bytes.
             * @param {bitArray} ciphertext The ciphertext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} [[]] adata The authenticated data.
             * @param {Number} [64] tlen the desired tag length, in bits.
             * @return {bitArray} The decrypted data.
             */
            decrypt: function(prf, ciphertext, iv, adata, tlen) {
                tlen = tlen || 64;
                adata = adata || [];
                var L,
                    w = sjcl.bitArray,
                    ivl = w.bitLength(iv) / 8,
                    ol = w.bitLength(ciphertext),
                    out = w.clamp(ciphertext, ol - tlen),
                    tag = w.bitSlice(ciphertext, ol - tlen),
                    tag2;


                ol = (ol - tlen) / 8;

                if (ivl < 7) {
                    throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
                }

                // compute the length of the length
                for (L = 2; L < 4 && ol >>> 8 * L; L++) {}
                if (L < 15 - ivl) {
                    L = 15 - ivl;
                }
                iv = w.clamp(iv, 8 * (15 - L));

                // decrypt
                out = sjcl.mode.ccm._ctrMode(prf, out, iv, tag, tlen, L);

                // check the tag
                tag2 = sjcl.mode.ccm._computeTag(prf, out.data, iv, adata, tlen, L);
                if (!w.equal(out.tag, tag2)) {
                    throw new sjcl.exception.corrupt("ccm: tag doesn't match");
                }

                return out.data;
            },

            /* Compute the (unencrypted) authentication tag, according to the CCM specification
             * @param {Object} prf The pseudorandom function.
             * @param {bitArray} plaintext The plaintext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} adata The authenticated data.
             * @param {Number} tlen the desired tag length, in bits.
             * @return {bitArray} The tag, but not yet encrypted.
             * @private
             */
            _computeTag: function(prf, plaintext, iv, adata, tlen, L) {
                // compute B[0]
                var mac, tmp, i, macData = [],
                    w = sjcl.bitArray,
                    xor = w._xor4;

                tlen /= 8;

                // check tag length and message length
                if (tlen % 2 || tlen < 4 || tlen > 16) {
                    throw new sjcl.exception.invalid("ccm: invalid tag length");
                }

                if (adata.length > 0xFFFFFFFF || plaintext.length > 0xFFFFFFFF) {
                    // I don't want to deal with extracting high words from doubles.
                    throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
                }

                // mac the flags
                mac = [w.partial(8, (adata.length ? 1 << 6 : 0) | (tlen - 2) << 2 | L - 1)];

                // mac the iv and length
                mac = w.concat(mac, iv);
                mac[3] |= w.bitLength(plaintext) / 8;
                mac = prf.encrypt(mac);


                if (adata.length) {
                    // mac the associated data.  start with its length...
                    tmp = w.bitLength(adata) / 8;
                    if (tmp <= 0xFEFF) {
                        macData = [w.partial(16, tmp)];
                    } else if (tmp <= 0xFFFFFFFF) {
                        macData = w.concat([w.partial(16, 0xFFFE)], [tmp]);
                    } // else ...

                    // mac the data itself
                    macData = w.concat(macData, adata);
                    for (i = 0; i < macData.length; i += 4) {
                        mac = prf.encrypt(xor(mac, macData.slice(i, i + 4).concat([0, 0, 0])));
                    }
                }

                // mac the plaintext
                for (i = 0; i < plaintext.length; i += 4) {
                    mac = prf.encrypt(xor(mac, plaintext.slice(i, i + 4).concat([0, 0, 0])));
                }

                return w.clamp(mac, tlen * 8);
            },

            /** CCM CTR mode.
             * Encrypt or decrypt data and tag with the prf in CCM-style CTR mode.
             * May mutate its arguments.
             * @param {Object} prf The PRF.
             * @param {bitArray} data The data to be encrypted or decrypted.
             * @param {bitArray} iv The initialization vector.
             * @param {bitArray} tag The authentication tag.
             * @param {Number} tlen The length of th etag, in bits.
             * @param {Number} L The CCM L value.
             * @return {Object} An object with data and tag, the en/decryption of data and tag values.
             * @private
             */
            _ctrMode: function(prf, data, iv, tag, tlen, L) {
                var enc, i, w = sjcl.bitArray,
                    xor = w._xor4,
                    ctr, l = data.length,
                    bl = w.bitLength(data);

                // start the ctr
                ctr = w.concat([w.partial(8, L - 1)], iv).concat([0, 0, 0]).slice(0, 4);

                // en/decrypt the tag
                tag = w.bitSlice(xor(tag, prf.encrypt(ctr)), 0, tlen);

                // en/decrypt the data
                if (!l) {
                    return {
                        tag: tag,
                        data: []
                    };
                }

                for (i = 0; i < l; i += 4) {
                    ctr[3]++;
                    enc = prf.encrypt(ctr);
                    data[i] ^= enc[0];
                    data[i + 1] ^= enc[1];
                    data[i + 2] ^= enc[2];
                    data[i + 3] ^= enc[3];
                }
                return {
                    tag: tag,
                    data: w.clamp(data, bl)
                };
            }
        };
        /** @fileOverview OCB 2.0 implementation
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace
         * Phil Rogaway's Offset CodeBook mode, version 2.0.
         * May be covered by US and international patents.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */
        sjcl.mode.ocb2 = {
            /** The name of the mode.
             * @constant
             */
            name: "ocb2",

            /** Encrypt in OCB mode, version 2.0.
             * @param {Object} prp The block cipher.  It must have a block size of 16 bytes.
             * @param {bitArray} plaintext The plaintext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} [adata=[]] The authenticated data.
             * @param {Number} [tlen=64] the desired tag length, in bits.
             * @param [false] premac 1 if the authentication data is pre-macced with PMAC.
             * @return The encrypted data, an array of bytes.
             * @throws {sjcl.exception.invalid} if the IV isn't exactly 128 bits.
             */
            encrypt: function(prp, plaintext, iv, adata, tlen, premac) {
                if (sjcl.bitArray.bitLength(iv) !== 128) {
                    throw new sjcl.exception.invalid("ocb iv must be 128 bits");
                }
                var i,
                    times2 = sjcl.mode.ocb2._times2,
                    w = sjcl.bitArray,
                    xor = w._xor4,
                    checksum = [0, 0, 0, 0],
                    delta = times2(prp.encrypt(iv)),
                    bi, bl,
                    output = [],
                    pad;

                adata = adata || [];
                tlen = tlen || 64;

                for (i = 0; i + 4 < plaintext.length; i += 4) {
                    /* Encrypt a non-final block */
                    bi = plaintext.slice(i, i + 4);
                    checksum = xor(checksum, bi);
                    output = output.concat(xor(delta, prp.encrypt(xor(delta, bi))));
                    delta = times2(delta);
                }

                /* Chop out the final block */
                bi = plaintext.slice(i);
                bl = w.bitLength(bi);
                pad = prp.encrypt(xor(delta, [0, 0, 0, bl]));
                bi = w.clamp(xor(bi.concat([0, 0, 0]), pad), bl);

                /* Checksum the final block, and finalize the checksum */
                checksum = xor(checksum, xor(bi.concat([0, 0, 0]), pad));
                checksum = prp.encrypt(xor(checksum, xor(delta, times2(delta))));

                /* MAC the header */
                if (adata.length) {
                    checksum = xor(checksum, premac ? adata : sjcl.mode.ocb2.pmac(prp, adata));
                }

                return output.concat(w.concat(bi, w.clamp(checksum, tlen)));
            },

            /** Decrypt in OCB mode.
             * @param {Object} prp The block cipher.  It must have a block size of 16 bytes.
             * @param {bitArray} ciphertext The ciphertext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} [adata=[]] The authenticated data.
             * @param {Number} [tlen=64] the desired tag length, in bits.
             * @param {boolean} [premac=false] true if the authentication data is pre-macced with PMAC.
             * @return The decrypted data, an array of bytes.
             * @throws {sjcl.exception.invalid} if the IV isn't exactly 128 bits.
             * @throws {sjcl.exception.corrupt} if if the message is corrupt.
             */
            decrypt: function(prp, ciphertext, iv, adata, tlen, premac) {
                if (sjcl.bitArray.bitLength(iv) !== 128) {
                    throw new sjcl.exception.invalid("ocb iv must be 128 bits");
                }
                tlen = tlen || 64;
                var i,
                    times2 = sjcl.mode.ocb2._times2,
                    w = sjcl.bitArray,
                    xor = w._xor4,
                    checksum = [0, 0, 0, 0],
                    delta = times2(prp.encrypt(iv)),
                    bi, bl,
                    len = sjcl.bitArray.bitLength(ciphertext) - tlen,
                    output = [],
                    pad;

                adata = adata || [];

                for (i = 0; i + 4 < len / 32; i += 4) {
                    /* Decrypt a non-final block */
                    bi = xor(delta, prp.decrypt(xor(delta, ciphertext.slice(i, i + 4))));
                    checksum = xor(checksum, bi);
                    output = output.concat(bi);
                    delta = times2(delta);
                }

                /* Chop out and decrypt the final block */
                bl = len - i * 32;
                pad = prp.encrypt(xor(delta, [0, 0, 0, bl]));
                bi = xor(pad, w.clamp(ciphertext.slice(i), bl).concat([0, 0, 0]));

                /* Checksum the final block, and finalize the checksum */
                checksum = xor(checksum, bi);
                checksum = prp.encrypt(xor(checksum, xor(delta, times2(delta))));

                /* MAC the header */
                if (adata.length) {
                    checksum = xor(checksum, premac ? adata : sjcl.mode.ocb2.pmac(prp, adata));
                }

                if (!w.equal(w.clamp(checksum, tlen), w.bitSlice(ciphertext, len))) {
                    throw new sjcl.exception.corrupt("ocb: tag doesn't match");
                }

                return output.concat(w.clamp(bi, bl));
            },

            /** PMAC authentication for OCB associated data.
             * @param {Object} prp The block cipher.  It must have a block size of 16 bytes.
             * @param {bitArray} adata The authenticated data.
             */
            pmac: function(prp, adata) {
                var i,
                    times2 = sjcl.mode.ocb2._times2,
                    w = sjcl.bitArray,
                    xor = w._xor4,
                    checksum = [0, 0, 0, 0],
                    delta = prp.encrypt([0, 0, 0, 0]),
                    bi;

                delta = xor(delta, times2(times2(delta)));

                for (i = 0; i + 4 < adata.length; i += 4) {
                    delta = times2(delta);
                    checksum = xor(checksum, prp.encrypt(xor(delta, adata.slice(i, i + 4))));
                }

                bi = adata.slice(i);
                if (w.bitLength(bi) < 128) {
                    delta = xor(delta, times2(delta));
                    bi = w.concat(bi, [0x80000000 | 0, 0, 0, 0]);
                }
                checksum = xor(checksum, bi);
                return prp.encrypt(xor(times2(xor(delta, times2(delta))), checksum));
            },

            /** Double a block of words, OCB style.
             * @private
             */
            _times2: function(x) {
                return [x[0] << 1 ^ x[1] >>> 31,
                    x[1] << 1 ^ x[2] >>> 31,
                    x[2] << 1 ^ x[3] >>> 31,
                    x[3] << 1 ^ (x[0] >>> 31) * 0x87
                ];
            }
        };
        /** @fileOverview GCM mode implementation.
         *
         * @author Juho Vähä-Herttua
         */

        /** @namespace Galois/Counter mode. */
        sjcl.mode.gcm = {
            /** The name of the mode.
             * @constant
             */
            name: "gcm",

            /** Encrypt in GCM mode.
             * @static
             * @param {Object} prf The pseudorandom function.  It must have a block size of 16 bytes.
             * @param {bitArray} plaintext The plaintext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} [adata=[]] The authenticated data.
             * @param {Number} [tlen=128] The desired tag length, in bits.
             * @return {bitArray} The encrypted data, an array of bytes.
             */
            encrypt: function(prf, plaintext, iv, adata, tlen) {
                var out, data = plaintext.slice(0),
                    w = sjcl.bitArray;
                tlen = tlen || 128;
                adata = adata || [];

                // encrypt and tag
                out = sjcl.mode.gcm._ctrMode(true, prf, data, adata, iv, tlen);

                return w.concat(out.data, out.tag);
            },

            /** Decrypt in GCM mode.
             * @static
             * @param {Object} prf The pseudorandom function.  It must have a block size of 16 bytes.
             * @param {bitArray} ciphertext The ciphertext data.
             * @param {bitArray} iv The initialization value.
             * @param {bitArray} [adata=[]] The authenticated data.
             * @param {Number} [tlen=128] The desired tag length, in bits.
             * @return {bitArray} The decrypted data.
             */
            decrypt: function(prf, ciphertext, iv, adata, tlen) {
                var out, data = ciphertext.slice(0),
                    tag, w = sjcl.bitArray,
                    l = w.bitLength(data);
                tlen = tlen || 128;
                adata = adata || [];

                // Slice tag out of data
                if (tlen <= l) {
                    tag = w.bitSlice(data, l - tlen);
                    data = w.bitSlice(data, 0, l - tlen);
                } else {
                    tag = data;
                    data = [];
                }

                // decrypt and tag
                out = sjcl.mode.gcm._ctrMode(false, prf, data, adata, iv, tlen);

                if (!w.equal(out.tag, tag)) {
                    throw new sjcl.exception.corrupt("gcm: tag doesn't match");
                }
                return out.data;
            },

            /* Compute the galois multiplication of X and Y
             * @private
             */
            _galoisMultiply: function(x, y) {
                var i, j, xi, Zi, Vi, lsb_Vi, w = sjcl.bitArray,
                    xor = w._xor4;

                Zi = [0, 0, 0, 0];
                Vi = y.slice(0);

                // Block size is 128 bits, run 128 times to get Z_128
                for (i = 0; i < 128; i++) {
                    xi = (x[Math.floor(i / 32)] & (1 << (31 - i % 32))) !== 0;
                    if (xi) {
                        // Z_i+1 = Z_i ^ V_i
                        Zi = xor(Zi, Vi);
                    }

                    // Store the value of LSB(V_i)
                    lsb_Vi = (Vi[3] & 1) !== 0;

                    // V_i+1 = V_i >> 1
                    for (j = 3; j > 0; j--) {
                        Vi[j] = (Vi[j] >>> 1) | ((Vi[j - 1] & 1) << 31);
                    }
                    Vi[0] = Vi[0] >>> 1;

                    // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
                    if (lsb_Vi) {
                        Vi[0] = Vi[0] ^ (0xe1 << 24);
                    }
                }
                return Zi;
            },

            _ghash: function(H, Y0, data) {
                var Yi, i, l = data.length;

                Yi = Y0.slice(0);
                for (i = 0; i < l; i += 4) {
                    Yi[0] ^= 0xffffffff & data[i];
                    Yi[1] ^= 0xffffffff & data[i + 1];
                    Yi[2] ^= 0xffffffff & data[i + 2];
                    Yi[3] ^= 0xffffffff & data[i + 3];
                    Yi = sjcl.mode.gcm._galoisMultiply(Yi, H);
                }
                return Yi;
            },

            /** GCM CTR mode.
             * Encrypt or decrypt data and tag with the prf in GCM-style CTR mode.
             * @param {Boolean} encrypt True if encrypt, false if decrypt.
             * @param {Object} prf The PRF.
             * @param {bitArray} data The data to be encrypted or decrypted.
             * @param {bitArray} iv The initialization vector.
             * @param {bitArray} adata The associated data to be tagged.
             * @param {Number} tlen The length of the tag, in bits.
             */
            _ctrMode: function(encrypt, prf, data, adata, iv, tlen) {
                var H, J0, S0, enc, i, ctr, tag, last, l, bl, abl, ivbl, w = sjcl.bitArray;

                // Calculate data lengths
                l = data.length;
                bl = w.bitLength(data);
                abl = w.bitLength(adata);
                ivbl = w.bitLength(iv);

                // Calculate the parameters
                H = prf.encrypt([0, 0, 0, 0]);
                if (ivbl === 96) {
                    J0 = iv.slice(0);
                    J0 = w.concat(J0, [1]);
                } else {
                    J0 = sjcl.mode.gcm._ghash(H, [0, 0, 0, 0], iv);
                    J0 = sjcl.mode.gcm._ghash(H, J0, [0, 0, Math.floor(ivbl / 0x100000000), ivbl & 0xffffffff]);
                }
                S0 = sjcl.mode.gcm._ghash(H, [0, 0, 0, 0], adata);

                // Initialize ctr and tag
                ctr = J0.slice(0);
                tag = S0.slice(0);

                // If decrypting, calculate hash
                if (!encrypt) {
                    tag = sjcl.mode.gcm._ghash(H, S0, data);
                }

                // Encrypt all the data
                for (i = 0; i < l; i += 4) {
                    ctr[3]++;
                    enc = prf.encrypt(ctr);
                    data[i] ^= enc[0];
                    data[i + 1] ^= enc[1];
                    data[i + 2] ^= enc[2];
                    data[i + 3] ^= enc[3];
                }
                data = w.clamp(data, bl);

                // If encrypting, calculate hash
                if (encrypt) {
                    tag = sjcl.mode.gcm._ghash(H, S0, data);
                }

                // Calculate last block from bit lengths, ugly because bitwise operations are 32-bit
                last = [
                    Math.floor(abl / 0x100000000), abl & 0xffffffff,
                    Math.floor(bl / 0x100000000), bl & 0xffffffff
                ];

                // Calculate the final tag block
                tag = sjcl.mode.gcm._ghash(H, tag, last);
                enc = prf.encrypt(J0);
                tag[0] ^= enc[0];
                tag[1] ^= enc[1];
                tag[2] ^= enc[2];
                tag[3] ^= enc[3];

                return {
                    tag: w.bitSlice(tag, 0, tlen),
                    data: data
                };
            }
        };
        /** @fileOverview HMAC implementation.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** HMAC with the specified hash function.
         * @constructor
         * @param {bitArray} key the key for HMAC.
         * @param {Object} [hash=sjcl.hash.sha256] The hash function to use.
         */
        sjcl.misc.hmac = function(key, Hash) {
            this._hash = Hash = Hash || sjcl.hash.sha256;
            var exKey = [
                    [],
                    []
                ],
                i,
                bs = Hash.prototype.blockSize / 32;
            this._baseHash = [new Hash(), new Hash()];

            if (key.length > bs) {
                key = Hash.hash(key);
            }

            for (i = 0; i < bs; i++) {
                exKey[0][i] = key[i] ^ 0x36363636;
                exKey[1][i] = key[i] ^ 0x5C5C5C5C;
            }

            this._baseHash[0].update(exKey[0]);
            this._baseHash[1].update(exKey[1]);
            this._resultHash = new Hash(this._baseHash[0]);
        };

        /** HMAC with the specified hash function.  Also called encrypt since it's a prf.
         * @param {bitArray|String} data The data to mac.
         */
        sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function(data) {
            if (!this._updated) {
                this.update(data);
                return this.digest(data);
            } else {
                throw new sjcl.exception.invalid("encrypt on already updated hmac called!");
            }
        };

        sjcl.misc.hmac.prototype.reset = function() {
            this._resultHash = new this._hash(this._baseHash[0]);
            this._updated = false;
        };

        sjcl.misc.hmac.prototype.update = function(data) {
            this._updated = true;
            this._resultHash.update(data);
        };

        sjcl.misc.hmac.prototype.digest = function() {
            var w = this._resultHash.finalize(),
                result = new(this._hash)(this._baseHash[1]).update(w).finalize();

            this.reset();

            return result;
        };
        /** @fileOverview Password-based key-derivation function, version 2.0.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** Password-Based Key-Derivation Function, version 2.0.
         *
         * Generate keys from passwords using PBKDF2-HMAC-SHA256.
         *
         * This is the method specified by RSA's PKCS #5 standard.
         *
         * @param {bitArray|String} password  The password.
         * @param {bitArray|String} salt The salt.  Should have lots of entropy.
         * @param {Number} [count=1000] The number of iterations.  Higher numbers make the function slower but more secure.
         * @param {Number} [length] The length of the derived key.  Defaults to the
                                    output size of the hash function.
         * @param {Object} [Prff=sjcl.misc.hmac] The pseudorandom function family.
         * @return {bitArray} the derived key.
         */
        sjcl.misc.pbkdf2 = function(password, salt, count, length, Prff) {
            count = count || 1000;

            if (length < 0 || count < 0) {
                throw sjcl.exception.invalid("invalid params to pbkdf2");
            }

            if (typeof password === "string") {
                password = sjcl.codec.utf8String.toBits(password);
            }

            if (typeof salt === "string") {
                salt = sjcl.codec.utf8String.toBits(salt);
            }

            Prff = Prff || sjcl.misc.hmac;

            var prf = new Prff(password),
                u, ui, i, j, k, out = [],
                b = sjcl.bitArray;

            for (k = 1; 32 * out.length < (length || 1); k++) {
                u = ui = prf.encrypt(b.concat(salt, [k]));

                for (i = 1; i < count; i++) {
                    ui = prf.encrypt(ui);
                    for (j = 0; j < ui.length; j++) {
                        u[j] ^= ui[j];
                    }
                }

                out = out.concat(u);
            }

            if (length) {
                out = b.clamp(out, length);
            }

            return out;
        };
        /** @fileOverview Random number generator.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         * @author Michael Brooks
         */

        /** @constructor
         * @class Random number generator
         * @description
         * <b>Use sjcl.random as a singleton for this class!</b>
         * <p>
         * This random number generator is a derivative of Ferguson and Schneier's
         * generator Fortuna.  It collects entropy from various events into several
         * pools, implemented by streaming SHA-256 instances.  It differs from
         * ordinary Fortuna in a few ways, though.
         * </p>
         *
         * <p>
         * Most importantly, it has an entropy estimator.  This is present because
         * there is a strong conflict here between making the generator available
         * as soon as possible, and making sure that it doesn't "run on empty".
         * In Fortuna, there is a saved state file, and the system is likely to have
         * time to warm up.
         * </p>
         *
         * <p>
         * Second, because users are unlikely to stay on the page for very long,
         * and to speed startup time, the number of pools increases logarithmically:
         * a new pool is created when the previous one is actually used for a reseed.
         * This gives the same asymptotic guarantees as Fortuna, but gives more
         * entropy to early reseeds.
         * </p>
         *
         * <p>
         * The entire mechanism here feels pretty klunky.  Furthermore, there are
         * several improvements that should be made, including support for
         * dedicated cryptographic functions that may be present in some browsers;
         * state files in local storage; cookies containing randomness; etc.  So
         * look for improvements in future versions.
         * </p>
         */
        sjcl.prng = function(defaultParanoia) {

            /* private */
            this._pools = [new sjcl.hash.sha256()];
            this._poolEntropy = [0];
            this._reseedCount = 0;
            this._robins = {};
            this._eventId = 0;

            this._collectorIds = {};
            this._collectorIdNext = 0;

            this._strength = 0;
            this._poolStrength = 0;
            this._nextReseed = 0;
            this._key = [0, 0, 0, 0, 0, 0, 0, 0];
            this._counter = [0, 0, 0, 0];
            this._cipher = undefined;
            this._defaultParanoia = defaultParanoia;

            /* event listener stuff */
            this._collectorsStarted = false;
            this._callbacks = {
                progress: {},
                seeded: {}
            };
            this._callbackI = 0;

            /* constants */
            this._NOT_READY = 0;
            this._READY = 1;
            this._REQUIRES_RESEED = 2;

            this._MAX_WORDS_PER_BURST = 65536;
            this._PARANOIA_LEVELS = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
            this._MILLISECONDS_PER_RESEED = 30000;
            this._BITS_PER_RESEED = 80;
        };

        sjcl.prng.prototype = {
            /** Generate several random words, and return them in an array.
             * A word consists of 32 bits (4 bytes)
             * @param {Number} nwords The number of words to generate.
             */
            randomWords: function(nwords, paranoia) {
                var out = [],
                    i, readiness = this.isReady(paranoia),
                    g;

                if (readiness === this._NOT_READY) {
                    throw new sjcl.exception.notReady("generator isn't seeded");
                } else if (readiness & this._REQUIRES_RESEED) {
                    this._reseedFromPools(!(readiness & this._READY));
                }

                for (i = 0; i < nwords; i += 4) {
                    if ((i + 1) % this._MAX_WORDS_PER_BURST === 0) {
                        this._gate();
                    }

                    g = this._gen4words();
                    out.push(g[0], g[1], g[2], g[3]);
                }
                this._gate();

                return out.slice(0, nwords);
            },

            setDefaultParanoia: function(paranoia, allowZeroParanoia) {
                if (paranoia === 0 && allowZeroParanoia !== "Setting paranoia=0 will ruin your security; use it only for testing") {
                    throw "Setting paranoia=0 will ruin your security; use it only for testing";
                }

                this._defaultParanoia = paranoia;
            },

            /**
             * Add entropy to the pools.
             * @param data The entropic value.  Should be a 32-bit integer, array of 32-bit integers, or string
             * @param {Number} estimatedEntropy The estimated entropy of data, in bits
             * @param {String} source The source of the entropy, eg "mouse"
             */
            addEntropy: function(data, estimatedEntropy, source) {
                source = source || "user";

                var id,
                    i, tmp,
                    t = (new Date()).valueOf(),
                    robin = this._robins[source],
                    oldReady = this.isReady(),
                    err = 0,
                    objName;

                id = this._collectorIds[source];
                if (id === undefined) {
                    id = this._collectorIds[source] = this._collectorIdNext++;
                }

                if (robin === undefined) {
                    robin = this._robins[source] = 0;
                }
                this._robins[source] = (this._robins[source] + 1) % this._pools.length;

                switch (typeof(data)) {

                    case "number":
                        if (estimatedEntropy === undefined) {
                            estimatedEntropy = 1;
                        }
                        this._pools[robin].update([id, this._eventId++, 1, estimatedEntropy, t, 1, data | 0]);
                        break;

                    case "object":
                        objName = Object.prototype.toString.call(data);
                        if (objName === "[object Uint32Array]") {
                            tmp = [];
                            for (i = 0; i < data.length; i++) {
                                tmp.push(data[i]);
                            }
                            data = tmp;
                        } else {
                            if (objName !== "[object Array]") {
                                err = 1;
                            }
                            for (i = 0; i < data.length && !err; i++) {
                                if (typeof(data[i]) !== "number") {
                                    err = 1;
                                }
                            }
                        }
                        if (!err) {
                            if (estimatedEntropy === undefined) {
                                /* horrible entropy estimator */
                                estimatedEntropy = 0;
                                for (i = 0; i < data.length; i++) {
                                    tmp = data[i];
                                    while (tmp > 0) {
                                        estimatedEntropy++;
                                        tmp = tmp >>> 1;
                                    }
                                }
                            }
                            this._pools[robin].update([id, this._eventId++, 2, estimatedEntropy, t, data.length].concat(data));
                        }
                        break;

                    case "string":
                        if (estimatedEntropy === undefined) {
                            /* English text has just over 1 bit per character of entropy.
                             * But this might be HTML or something, and have far less
                             * entropy than English...  Oh well, let's just say one bit.
                             */
                            estimatedEntropy = data.length;
                        }
                        this._pools[robin].update([id, this._eventId++, 3, estimatedEntropy, t, data.length]);
                        this._pools[robin].update(data);
                        break;

                    default:
                        err = 1;
                }
                if (err) {
                    throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");
                }

                /* record the new strength */
                this._poolEntropy[robin] += estimatedEntropy;
                this._poolStrength += estimatedEntropy;

                /* fire off events */
                if (oldReady === this._NOT_READY) {
                    if (this.isReady() !== this._NOT_READY) {
                        this._fireEvent("seeded", Math.max(this._strength, this._poolStrength));
                    }
                    this._fireEvent("progress", this.getProgress());
                }
            },

            /** Is the generator ready? */
            isReady: function(paranoia) {
                var entropyRequired = this._PARANOIA_LEVELS[(paranoia !== undefined) ? paranoia : this._defaultParanoia];

                if (this._strength && this._strength >= entropyRequired) {
                    return (this._poolEntropy[0] > this._BITS_PER_RESEED && (new Date()).valueOf() > this._nextReseed) ?
                        this._REQUIRES_RESEED | this._READY :
                        this._READY;
                } else {
                    return (this._poolStrength >= entropyRequired) ?
                        this._REQUIRES_RESEED | this._NOT_READY :
                        this._NOT_READY;
                }
            },

            /** Get the generator's progress toward readiness, as a fraction */
            getProgress: function(paranoia) {
                var entropyRequired = this._PARANOIA_LEVELS[paranoia ? paranoia : this._defaultParanoia];

                if (this._strength >= entropyRequired) {
                    return 1.0;
                } else {
                    return (this._poolStrength > entropyRequired) ?
                        1.0 :
                        this._poolStrength / entropyRequired;
                }
            },

            /** start the built-in entropy collectors */
            startCollectors: function() {
                if (this._collectorsStarted) {
                    return;
                }

                this._eventListener = {
                    loadTimeCollector: this._bind(this._loadTimeCollector),
                    mouseCollector: this._bind(this._mouseCollector),
                    keyboardCollector: this._bind(this._keyboardCollector),
                    accelerometerCollector: this._bind(this._accelerometerCollector),
                    touchCollector: this._bind(this._touchCollector)
                };

                if (window.addEventListener) {
                    window.addEventListener("load", this._eventListener.loadTimeCollector, false);
                    window.addEventListener("mousemove", this._eventListener.mouseCollector, false);
                    window.addEventListener("keypress", this._eventListener.keyboardCollector, false);
                    window.addEventListener("devicemotion", this._eventListener.accelerometerCollector, false);
                    window.addEventListener("touchmove", this._eventListener.touchCollector, false);
                } else if (document.attachEvent) {
                    document.attachEvent("onload", this._eventListener.loadTimeCollector);
                    document.attachEvent("onmousemove", this._eventListener.mouseCollector);
                    document.attachEvent("keypress", this._eventListener.keyboardCollector);
                } else {
                    throw new sjcl.exception.bug("can't attach event");
                }

                this._collectorsStarted = true;
            },

            /** stop the built-in entropy collectors */
            stopCollectors: function() {
                if (!this._collectorsStarted) {
                    return;
                }

                if (window.removeEventListener) {
                    window.removeEventListener("load", this._eventListener.loadTimeCollector, false);
                    window.removeEventListener("mousemove", this._eventListener.mouseCollector, false);
                    window.removeEventListener("keypress", this._eventListener.keyboardCollector, false);
                    window.removeEventListener("devicemotion", this._eventListener.accelerometerCollector, false);
                    window.removeEventListener("touchmove", this._eventListener.touchCollector, false);
                } else if (document.detachEvent) {
                    document.detachEvent("onload", this._eventListener.loadTimeCollector);
                    document.detachEvent("onmousemove", this._eventListener.mouseCollector);
                    document.detachEvent("keypress", this._eventListener.keyboardCollector);
                }

                this._collectorsStarted = false;
            },

            /* use a cookie to store entropy.
            useCookie: function (all_cookies) {
                throw new sjcl.exception.bug("random: useCookie is unimplemented");
            },*/

            /** add an event listener for progress or seeded-ness. */
            addEventListener: function(name, callback) {
                this._callbacks[name][this._callbackI++] = callback;
            },

            /** remove an event listener for progress or seeded-ness */
            removeEventListener: function(name, cb) {
                var i, j, cbs = this._callbacks[name],
                    jsTemp = [];

                /* I'm not sure if this is necessary; in C++, iterating over a
                 * collection and modifying it at the same time is a no-no.
                 */

                for (j in cbs) {
                    if (cbs.hasOwnProperty(j) && cbs[j] === cb) {
                        jsTemp.push(j);
                    }
                }

                for (i = 0; i < jsTemp.length; i++) {
                    j = jsTemp[i];
                    delete cbs[j];
                }
            },

            _bind: function(func) {
                var that = this;
                return function() {
                    func.apply(that, arguments);
                };
            },

            /** Generate 4 random words, no reseed, no gate.
             * @private
             */
            _gen4words: function() {
                for (var i = 0; i < 4; i++) {
                    this._counter[i] = this._counter[i] + 1 | 0;
                    if (this._counter[i]) {
                        break;
                    }
                }
                return this._cipher.encrypt(this._counter);
            },

            /* Rekey the AES instance with itself after a request, or every _MAX_WORDS_PER_BURST words.
             * @private
             */
            _gate: function() {
                this._key = this._gen4words().concat(this._gen4words());
                this._cipher = new sjcl.cipher.aes(this._key);
            },

            /** Reseed the generator with the given words
             * @private
             */
            _reseed: function(seedWords) {
                this._key = sjcl.hash.sha256.hash(this._key.concat(seedWords));
                this._cipher = new sjcl.cipher.aes(this._key);
                for (var i = 0; i < 4; i++) {
                    this._counter[i] = this._counter[i] + 1 | 0;
                    if (this._counter[i]) {
                        break;
                    }
                }
            },

            /** reseed the data from the entropy pools
             * @param full If set, use all the entropy pools in the reseed.
             */
            _reseedFromPools: function(full) {
                var reseedData = [],
                    strength = 0,
                    i;

                this._nextReseed = reseedData[0] =
                    (new Date()).valueOf() + this._MILLISECONDS_PER_RESEED;

                for (i = 0; i < 16; i++) {
                    /* On some browsers, this is cryptographically random.  So we might
                     * as well toss it in the pot and stir...
                     */
                    reseedData.push(Math.random() * 0x100000000 | 0);
                }

                for (i = 0; i < this._pools.length; i++) {
                    reseedData = reseedData.concat(this._pools[i].finalize());
                    strength += this._poolEntropy[i];
                    this._poolEntropy[i] = 0;

                    if (!full && (this._reseedCount & (1 << i))) {
                        break;
                    }
                }

                /* if we used the last pool, push a new one onto the stack */
                if (this._reseedCount >= 1 << this._pools.length) {
                    this._pools.push(new sjcl.hash.sha256());
                    this._poolEntropy.push(0);
                }

                /* how strong was this reseed? */
                this._poolStrength -= strength;
                if (strength > this._strength) {
                    this._strength = strength;
                }

                this._reseedCount++;
                this._reseed(reseedData);
            },

            _keyboardCollector: function() {
                this._addCurrentTimeToEntropy(1);
            },

            _mouseCollector: function(ev) {
                var x, y;

                try {
                    x = ev.x || ev.clientX || ev.offsetX || 0;
                    y = ev.y || ev.clientY || ev.offsetY || 0;
                } catch (err) {
                    // Event originated from a secure element. No mouse position available.
                    x = 0;
                    y = 0;
                }

                if (x != 0 && y != 0) {
                    sjcl.random.addEntropy([x, y], 2, "mouse");
                }

                this._addCurrentTimeToEntropy(0);
            },

            _touchCollector: function(ev) {
                var touch = ev.touches[0] || ev.changedTouches[0];
                var x = touch.pageX || touch.clientX,
                    y = touch.pageY || touch.clientY;

                sjcl.random.addEntropy([x, y], 1, "touch");

                this._addCurrentTimeToEntropy(0);
            },

            _loadTimeCollector: function() {
                this._addCurrentTimeToEntropy(2);
            },

            _addCurrentTimeToEntropy: function(estimatedEntropy) {
                if (typeof window !== 'undefined' && window.performance && typeof window.performance.now === "function") {
                    //how much entropy do we want to add here?
                    sjcl.random.addEntropy(window.performance.now(), estimatedEntropy, "loadtime");
                } else {
                    sjcl.random.addEntropy((new Date()).valueOf(), estimatedEntropy, "loadtime");
                }
            },
            _accelerometerCollector: function(ev) {
                var ac = ev.accelerationIncludingGravity.x || ev.accelerationIncludingGravity.y || ev.accelerationIncludingGravity.z;
                if (window.orientation) {
                    var or = window.orientation;
                    if (typeof or === "number") {
                        sjcl.random.addEntropy(or, 1, "accelerometer");
                    }
                }
                if (ac) {
                    sjcl.random.addEntropy(ac, 2, "accelerometer");
                }
                this._addCurrentTimeToEntropy(0);
            },

            _fireEvent: function(name, arg) {
                var j, cbs = sjcl.random._callbacks[name],
                    cbsTemp = [];
                /* TODO: there is a race condition between removing collectors and firing them */

                /* I'm not sure if this is necessary; in C++, iterating over a
                 * collection and modifying it at the same time is a no-no.
                 */

                for (j in cbs) {
                    if (cbs.hasOwnProperty(j)) {
                        cbsTemp.push(cbs[j]);
                    }
                }

                for (j = 0; j < cbsTemp.length; j++) {
                    cbsTemp[j](arg);
                }
            }
        };

        /** an instance for the prng.
         * @see sjcl.prng
         */
        sjcl.random = new sjcl.prng(6);

        (function() {
            // function for getting nodejs crypto module. catches and ignores errors.
            function getCryptoModule() {
                // Browserify attempts to inject a NodeJS compatible crypto module, which has a ton
                // of other dependencies, when you do a 'require("crypto")'. This needs to be removed,
                // as it's an absolutely massive dependency.
                return null;
            }

            try {
                var buf, crypt, ab;

                // get cryptographically strong entropy depending on runtime environment
                if (typeof module !== 'undefined' && module.exports && (crypt = getCryptoModule()) && crypt.randomBytes) {
                    buf = crypt.randomBytes(1024 / 8);
                    buf = new Uint32Array(new Uint8Array(buf).buffer);
                    sjcl.random.addEntropy(buf, 1024, "crypto.randomBytes");

                } else if (typeof window !== 'undefined' && typeof Uint32Array !== 'undefined') {
                    ab = new Uint32Array(32);
                    if (window.crypto && window.crypto.getRandomValues) {
                        window.crypto.getRandomValues(ab);
                    } else if (window.msCrypto && window.msCrypto.getRandomValues) {
                        window.msCrypto.getRandomValues(ab);
                    } else {
                        return;
                    }

                    // get cryptographically strong entropy in Webkit
                    sjcl.random.addEntropy(ab, 1024, "crypto.getRandomValues");

                } else {
                    // no getRandomValues :-(
                }
            } catch (e) {
                if (typeof window !== 'undefined' && window.console) {
                    console.log("There was an error collecting entropy from the browser:");
                    console.log(e);
                    //we do not want the library to fail due to randomness not being maintained.
                }
            }
        }());
        /** @fileOverview Convenince functions centered around JSON encapsulation.
         *
         * @author Emily Stark
         * @author Mike Hamburg
         * @author Dan Boneh
         */

        /** @namespace JSON encapsulation */
        sjcl.json = {
            /** Default values for encryption */
            defaults: {
                v: 1,
                iter: 1000,
                ks: 128,
                ts: 64,
                mode: "ccm",
                adata: "",
                cipher: "aes"
            },

            /** Simple encryption function.
             * @param {String|bitArray} password The password or key.
             * @param {String} plaintext The data to encrypt.
             * @param {Object} [params] The parameters including tag, iv and salt.
             * @param {Object} [rp] A returned version with filled-in parameters.
             * @return {Object} The cipher raw data.
             * @throws {sjcl.exception.invalid} if a parameter is invalid.
             */
            _encrypt: function(password, plaintext, params, rp) {
                params = params || {};
                rp = rp || {};

                var j = sjcl.json,
                    p = j._add({
                            iv: sjcl.random.randomWords(4, 0)
                        },
                        j.defaults),
                    tmp, prp, adata;
                j._add(p, params);
                adata = p.adata;
                if (typeof p.salt === "string") {
                    p.salt = sjcl.codec.base64.toBits(p.salt);
                }
                if (typeof p.iv === "string") {
                    p.iv = sjcl.codec.base64.toBits(p.iv);
                }

                if (!sjcl.mode[p.mode] ||
                    !sjcl.cipher[p.cipher] ||
                    (typeof password === "string" && p.iter <= 100) ||
                    (p.ts !== 64 && p.ts !== 96 && p.ts !== 128) ||
                    (p.ks !== 128 && p.ks !== 192 && p.ks !== 256) ||
                    (p.iv.length < 2 || p.iv.length > 4)) {
                    throw new sjcl.exception.invalid("json encrypt: invalid parameters");
                }

                if (typeof password === "string") {
                    tmp = sjcl.misc.cachedPbkdf2(password, p);
                    password = tmp.key.slice(0, p.ks / 32);
                    p.salt = tmp.salt;
                } else if (sjcl.ecc && password instanceof sjcl.ecc.elGamal.publicKey) {
                    tmp = password.kem();
                    p.kemtag = tmp.tag;
                    password = tmp.key.slice(0, p.ks / 32);
                }
                if (typeof plaintext === "string") {
                    plaintext = sjcl.codec.utf8String.toBits(plaintext);
                }
                if (typeof adata === "string") {
                    p.adata = adata = sjcl.codec.utf8String.toBits(adata);
                }
                prp = new sjcl.cipher[p.cipher](password);

                /* return the json data */
                j._add(rp, p);
                rp.key = password;

                /* do the encryption */
                p.ct = sjcl.mode[p.mode].encrypt(prp, plaintext, p.iv, adata, p.ts);

                //return j.encode(j._subtract(p, j.defaults));
                return p;
            },

            /** Simple encryption function.
             * @param {String|bitArray} password The password or key.
             * @param {String} plaintext The data to encrypt.
             * @param {Object} [params] The parameters including tag, iv and salt.
             * @param {Object} [rp] A returned version with filled-in parameters.
             * @return {String} The ciphertext serialized data.
             * @throws {sjcl.exception.invalid} if a parameter is invalid.
             */
            encrypt: function(password, plaintext, params, rp) {
                var j = sjcl.json,
                    p = j._encrypt.apply(j, arguments);
                return j.encode(p);
            },

            /** Simple decryption function.
             * @param {String|bitArray} password The password or key.
             * @param {Object} ciphertext The cipher raw data to decrypt.
             * @param {Object} [params] Additional non-default parameters.
             * @param {Object} [rp] A returned object with filled parameters.
             * @return {String} The plaintext.
             * @throws {sjcl.exception.invalid} if a parameter is invalid.
             * @throws {sjcl.exception.corrupt} if the ciphertext is corrupt.
             */
            _decrypt: function(password, ciphertext, params, rp) {
                params = params || {};
                rp = rp || {};

                var j = sjcl.json,
                    p = j._add(j._add(j._add({}, j.defaults), ciphertext), params, true),
                    ct, tmp, prp, adata = p.adata;
                if (typeof p.salt === "string") {
                    p.salt = sjcl.codec.base64.toBits(p.salt);
                }
                if (typeof p.iv === "string") {
                    p.iv = sjcl.codec.base64.toBits(p.iv);
                }

                if (!sjcl.mode[p.mode] ||
                    !sjcl.cipher[p.cipher] ||
                    (typeof password === "string" && p.iter <= 100) ||
                    (p.ts !== 64 && p.ts !== 96 && p.ts !== 128) ||
                    (p.ks !== 128 && p.ks !== 192 && p.ks !== 256) ||
                    (!p.iv) ||
                    (p.iv.length < 2 || p.iv.length > 4)) {
                    throw new sjcl.exception.invalid("json decrypt: invalid parameters");
                }

                if (typeof password === "string") {
                    tmp = sjcl.misc.cachedPbkdf2(password, p);
                    password = tmp.key.slice(0, p.ks / 32);
                    p.salt = tmp.salt;
                } else if (sjcl.ecc && password instanceof sjcl.ecc.elGamal.secretKey) {
                    password = password.unkem(sjcl.codec.base64.toBits(p.kemtag)).slice(0, p.ks / 32);
                }
                if (typeof adata === "string") {
                    adata = sjcl.codec.utf8String.toBits(adata);
                }
                prp = new sjcl.cipher[p.cipher](password);

                /* do the decryption */
                ct = sjcl.mode[p.mode].decrypt(prp, p.ct, p.iv, adata, p.ts);

                /* return the json data */
                j._add(rp, p);
                rp.key = password;

                if (params.raw === 1) {
                    return ct;
                } else {
                    return sjcl.codec.utf8String.fromBits(ct);
                }
            },

            /** Simple decryption function.
             * @param {String|bitArray} password The password or key.
             * @param {String} ciphertext The ciphertext to decrypt.
             * @param {Object} [params] Additional non-default parameters.
             * @param {Object} [rp] A returned object with filled parameters.
             * @return {String} The plaintext.
             * @throws {sjcl.exception.invalid} if a parameter is invalid.
             * @throws {sjcl.exception.corrupt} if the ciphertext is corrupt.
             */
            decrypt: function(password, ciphertext, params, rp) {
                var j = sjcl.json;
                return j._decrypt(password, j.decode(ciphertext), params, rp);
            },

            /** Encode a flat structure into a JSON string.
             * @param {Object} obj The structure to encode.
             * @return {String} A JSON string.
             * @throws {sjcl.exception.invalid} if obj has a non-alphanumeric property.
             * @throws {sjcl.exception.bug} if a parameter has an unsupported type.
             */
            encode: function(obj) {
                var i, out = '{',
                    comma = '';
                for (i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        if (!i.match(/^[a-z0-9]+$/i)) {
                            throw new sjcl.exception.invalid("json encode: invalid property name");
                        }
                        out += comma + '"' + i + '":';
                        comma = ',';

                        switch (typeof obj[i]) {
                            case 'number':
                            case 'boolean':
                                out += obj[i];
                                break;

                            case 'string':
                                out += '"' + escape(obj[i]) + '"';
                                break;

                            case 'object':
                                out += '"' + sjcl.codec.base64.fromBits(obj[i], 0) + '"';
                                break;

                            default:
                                throw new sjcl.exception.bug("json encode: unsupported type");
                        }
                    }
                }
                return out + '}';
            },

            /** Decode a simple (flat) JSON string into a structure.  The ciphertext,
             * adata, salt and iv will be base64-decoded.
             * @param {String} str The string.
             * @return {Object} The decoded structure.
             * @throws {sjcl.exception.invalid} if str isn't (simple) JSON.
             */
            decode: function(str) {
                str = str.replace(/\s/g, '');
                if (!str.match(/^\{.*\}$/)) {
                    throw new sjcl.exception.invalid("json decode: this isn't json!");
                }
                var a = str.replace(/^\{|\}$/g, '').split(/,/),
                    out = {},
                    i, m;
                for (i = 0; i < a.length; i++) {
                    if (!(m = a[i].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i))) {
                        throw new sjcl.exception.invalid("json decode: this isn't json!");
                    }
                    if (m[3]) {
                        out[m[2]] = parseInt(m[3], 10);
                    } else if (m[4]) {
                        out[m[2]] = m[2].match(/^(ct|adata|salt|iv)$/) ? sjcl.codec.base64.toBits(m[4]) : unescape(m[4]);
                    } else if (m[5]) {
                        out[m[2]] = m[5] === 'true';
                    }
                }
                return out;
            },

            /** Insert all elements of src into target, modifying and returning target.
             * @param {Object} target The object to be modified.
             * @param {Object} src The object to pull data from.
             * @param {boolean} [requireSame=false] If true, throw an exception if any field of target differs from corresponding field of src.
             * @return {Object} target.
             * @private
             */
            _add: function(target, src, requireSame) {
                if (target === undefined) {
                    target = {};
                }
                if (src === undefined) {
                    return target;
                }
                var i;
                for (i in src) {
                    if (src.hasOwnProperty(i)) {
                        if (requireSame && target[i] !== undefined && target[i] !== src[i]) {
                            throw new sjcl.exception.invalid("required parameter overridden");
                        }
                        target[i] = src[i];
                    }
                }
                return target;
            },

            /** Remove all elements of minus from plus.  Does not modify plus.
             * @private
             */
            _subtract: function(plus, minus) {
                var out = {},
                    i;

                for (i in plus) {
                    if (plus.hasOwnProperty(i) && plus[i] !== minus[i]) {
                        out[i] = plus[i];
                    }
                }

                return out;
            },

            /** Return only the specified elements of src.
             * @private
             */
            _filter: function(src, filter) {
                var out = {},
                    i;
                for (i = 0; i < filter.length; i++) {
                    if (src[filter[i]] !== undefined) {
                        out[filter[i]] = src[filter[i]];
                    }
                }
                return out;
            }
        };

        /** Simple encryption function; convenient shorthand for sjcl.json.encrypt.
         * @param {String|bitArray} password The password or key.
         * @param {String} plaintext The data to encrypt.
         * @param {Object} [params] The parameters including tag, iv and salt.
         * @param {Object} [rp] A returned version with filled-in parameters.
         * @return {String} The ciphertext.
         */
        sjcl.encrypt = sjcl.json.encrypt;

        /** Simple decryption function; convenient shorthand for sjcl.json.decrypt.
         * @param {String|bitArray} password The password or key.
         * @param {String} ciphertext The ciphertext to decrypt.
         * @param {Object} [params] Additional non-default parameters.
         * @param {Object} [rp] A returned object with filled parameters.
         * @return {String} The plaintext.
         */
        sjcl.decrypt = sjcl.json.decrypt;

        /** The cache for cachedPbkdf2.
         * @private
         */
        sjcl.misc._pbkdf2Cache = {};

        /** Cached PBKDF2 key derivation.
         * @param {String} password The password.
         * @param {Object} [obj] The derivation params (iteration count and optional salt).
         * @return {Object} The derived data in key, the salt in salt.
         */
        sjcl.misc.cachedPbkdf2 = function(password, obj) {
            var cache = sjcl.misc._pbkdf2Cache,
                c, cp, str, salt, iter;

            obj = obj || {};
            iter = obj.iter || 1000;

            /* open the cache for this password and iteration count */
            cp = cache[password] = cache[password] || {};
            c = cp[iter] = cp[iter] || {
                firstSalt: (obj.salt && obj.salt.length) ?
                    obj.salt.slice(0) : sjcl.random.randomWords(2, 0)
            };

            salt = (obj.salt === undefined) ? c.firstSalt : obj.salt;

            c[salt] = c[salt] || sjcl.misc.pbkdf2(password, salt, obj.iter);
            return {
                key: c[salt].slice(0),
                salt: salt.slice(0)
            };
        };

    }, {}],
    3: [function(require, module, exports) {
        'use strict'

        exports.byteLength = byteLength
        exports.toByteArray = toByteArray
        exports.fromByteArray = fromByteArray

        var lookup = []
        var revLookup = []
        var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

        var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        for (var i = 0, len = code.length; i < len; ++i) {
            lookup[i] = code[i]
            revLookup[code.charCodeAt(i)] = i
        }

        // Support decoding URL-safe base64 strings, as Node.js does.
        // See: https://en.wikipedia.org/wiki/Base64#URL_applications
        revLookup['-'.charCodeAt(0)] = 62
        revLookup['_'.charCodeAt(0)] = 63

        function getLens(b64) {
            var len = b64.length

            if (len % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4')
            }

            // Trim off extra bytes after placeholder bytes are found
            // See: https://github.com/beatgammit/base64-js/issues/42
            var validLen = b64.indexOf('=')
            if (validLen === -1) validLen = len

            var placeHoldersLen = validLen === len ?
                0 :
                4 - (validLen % 4)

            return [validLen, placeHoldersLen]
        }

        // base64 is 4/3 + up to two characters of the original data
        function byteLength(b64) {
            var lens = getLens(b64)
            var validLen = lens[0]
            var placeHoldersLen = lens[1]
            return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
        }

        function _byteLength(b64, validLen, placeHoldersLen) {
            return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
        }

        function toByteArray(b64) {
            var tmp
            var lens = getLens(b64)
            var validLen = lens[0]
            var placeHoldersLen = lens[1]

            var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

            var curByte = 0

            // if there are placeholders, only get up to the last complete 4 chars
            var len = placeHoldersLen > 0 ?
                validLen - 4 :
                validLen

            for (var i = 0; i < len; i += 4) {
                tmp =
                    (revLookup[b64.charCodeAt(i)] << 18) |
                    (revLookup[b64.charCodeAt(i + 1)] << 12) |
                    (revLookup[b64.charCodeAt(i + 2)] << 6) |
                    revLookup[b64.charCodeAt(i + 3)]
                arr[curByte++] = (tmp >> 16) & 0xFF
                arr[curByte++] = (tmp >> 8) & 0xFF
                arr[curByte++] = tmp & 0xFF
            }

            if (placeHoldersLen === 2) {
                tmp =
                    (revLookup[b64.charCodeAt(i)] << 2) |
                    (revLookup[b64.charCodeAt(i + 1)] >> 4)
                arr[curByte++] = tmp & 0xFF
            }

            if (placeHoldersLen === 1) {
                tmp =
                    (revLookup[b64.charCodeAt(i)] << 10) |
                    (revLookup[b64.charCodeAt(i + 1)] << 4) |
                    (revLookup[b64.charCodeAt(i + 2)] >> 2)
                arr[curByte++] = (tmp >> 8) & 0xFF
                arr[curByte++] = tmp & 0xFF
            }

            return arr
        }

        function tripletToBase64(num) {
            return lookup[num >> 18 & 0x3F] +
                lookup[num >> 12 & 0x3F] +
                lookup[num >> 6 & 0x3F] +
                lookup[num & 0x3F]
        }

        function encodeChunk(uint8, start, end) {
            var tmp
            var output = []
            for (var i = start; i < end; i += 3) {
                tmp =
                    ((uint8[i] << 16) & 0xFF0000) +
                    ((uint8[i + 1] << 8) & 0xFF00) +
                    (uint8[i + 2] & 0xFF)
                output.push(tripletToBase64(tmp))
            }
            return output.join('')
        }

        function fromByteArray(uint8) {
            var tmp
            var len = uint8.length
            var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
            var parts = []
            var maxChunkLength = 16383 // must be multiple of 3

            // go through the array every three bytes, we'll deal with trailing stuff later
            for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(encodeChunk(
                    uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
                ))
            }

            // pad the end with zeros, but make sure to not forget the extra bytes
            if (extraBytes === 1) {
                tmp = uint8[len - 1]
                parts.push(
                    lookup[tmp >> 2] +
                    lookup[(tmp << 4) & 0x3F] +
                    '=='
                )
            } else if (extraBytes === 2) {
                tmp = (uint8[len - 2] << 8) + uint8[len - 1]
                parts.push(
                    lookup[tmp >> 10] +
                    lookup[(tmp >> 4) & 0x3F] +
                    lookup[(tmp << 2) & 0x3F] +
                    '='
                )
            }

            return parts.join('')
        }

    }, {}],
    4: [function(require, module, exports) {
        // shim for using process in browser
        var process = module.exports = {};

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }

        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }
        (function() {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                } else {
                    cachedSetTimeout = defaultSetTimout;
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                } else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }())

        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }


        }

        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }



        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }

        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;

        process.listeners = function(name) {
            return []
        }

        process.binding = function(name) {
            throw new Error('process.binding is not supported');
        };

        process.cwd = function() {
            return '/'
        };
        process.chdir = function(dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function() {
            return 0;
        };

    }, {}],
    5: [function(require, module, exports) {
        (function(setImmediate, clearImmediate) {
            var nextTick = require('process/browser.js').nextTick;
            var apply = Function.prototype.apply;
            var slice = Array.prototype.slice;
            var immediateIds = {};
            var nextImmediateId = 0;

            // DOM APIs, for completeness

            exports.setTimeout = function() {
                return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
            };
            exports.setInterval = function() {
                return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
            };
            exports.clearTimeout =
                exports.clearInterval = function(timeout) {
                    timeout.close();
                };

            function Timeout(id, clearFn) {
                this._id = id;
                this._clearFn = clearFn;
            }
            Timeout.prototype.unref = Timeout.prototype.ref = function() {};
            Timeout.prototype.close = function() {
                this._clearFn.call(window, this._id);
            };

            // Does not start the time, just sets up the members needed.
            exports.enroll = function(item, msecs) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = msecs;
            };

            exports.unenroll = function(item) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = -1;
            };

            exports._unrefActive = exports.active = function(item) {
                clearTimeout(item._idleTimeoutId);

                var msecs = item._idleTimeout;
                if (msecs >= 0) {
                    item._idleTimeoutId = setTimeout(function onTimeout() {
                        if (item._onTimeout)
                            item._onTimeout();
                    }, msecs);
                }
            };

            // That's not how node.js implements it but the exposed api is the same.
            exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
                var id = nextImmediateId++;
                var args = arguments.length < 2 ? false : slice.call(arguments, 1);

                immediateIds[id] = true;

                nextTick(function onNextTick() {
                    if (immediateIds[id]) {
                        // fn.call() is faster so we optimize for the common use-case
                        // @see http://jsperf.com/call-apply-segu
                        if (args) {
                            fn.apply(null, args);
                        } else {
                            fn.call(null);
                        }
                        // Prevent ids from leaking
                        exports.clearImmediate(id);
                    }
                });

                return id;
            };

            exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
                delete immediateIds[id];
            };
        }).call(this, require("timers").setImmediate, require("timers").clearImmediate)
    }, {
        "process/browser.js": 4,
        "timers": 5
    }],
    6: [function(require, module, exports) {
        /*!
         * UAParser.js v0.7.20
         * Lightweight JavaScript-based User-Agent string parser
         * https://github.com/faisalman/ua-parser-js
         *
         * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
         * Licensed under MIT License
         */

        (function(window, undefined) {

            'use strict';

            //////////////
            // Constants
            /////////////


            var LIBVERSION = '0.7.20',
                EMPTY = '',
                UNKNOWN = '?',
                FUNC_TYPE = 'function',
                UNDEF_TYPE = 'undefined',
                OBJ_TYPE = 'object',
                STR_TYPE = 'string',
                MAJOR = 'major', // deprecated
                MODEL = 'model',
                NAME = 'name',
                TYPE = 'type',
                VENDOR = 'vendor',
                VERSION = 'version',
                ARCHITECTURE = 'architecture',
                CONSOLE = 'console',
                MOBILE = 'mobile',
                TABLET = 'tablet',
                SMARTTV = 'smarttv',
                WEARABLE = 'wearable',
                EMBEDDED = 'embedded';


            ///////////
            // Helper
            //////////


            var util = {
                extend: function(regexes, extensions) {
                    var mergedRegexes = {};
                    for (var i in regexes) {
                        if (extensions[i] && extensions[i].length % 2 === 0) {
                            mergedRegexes[i] = extensions[i].concat(regexes[i]);
                        } else {
                            mergedRegexes[i] = regexes[i];
                        }
                    }
                    return mergedRegexes;
                },
                has: function(str1, str2) {
                    if (typeof str1 === "string") {
                        return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                    } else {
                        return false;
                    }
                },
                lowerize: function(str) {
                    return str.toLowerCase();
                },
                major: function(version) {
                    return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                },
                trim: function(str) {
                    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                }
            };


            ///////////////
            // Map helper
            //////////////


            var mapper = {

                rgx: function(ua, arrays) {

                    var i = 0,
                        j, k, p, q, matches, match;

                    // loop through all regexes maps
                    while (i < arrays.length && !matches) {

                        var regex = arrays[i], // even sequence (0,2,4,..)
                            props = arrays[i + 1]; // odd sequence (1,3,5,..)
                        j = k = 0;

                        // try matching uastring with regexes
                        while (j < regex.length && !matches) {

                            matches = regex[j++].exec(ua);

                            if (!!matches) {
                                for (p = 0; p < props.length; p++) {
                                    match = matches[++k];
                                    q = props[p];
                                    // check if given property is actually array
                                    if (typeof q === OBJ_TYPE && q.length > 0) {
                                        if (q.length == 2) {
                                            if (typeof q[1] == FUNC_TYPE) {
                                                // assign modified match
                                                this[q[0]] = q[1].call(this, match);
                                            } else {
                                                // assign given value, ignore regex match
                                                this[q[0]] = q[1];
                                            }
                                        } else if (q.length == 3) {
                                            // check whether function or regex
                                            if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                // call function (usually string mapper)
                                                this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                            } else {
                                                // sanitize match using given regex
                                                this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                            }
                                        } else if (q.length == 4) {
                                            this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                        }
                                    } else {
                                        this[q] = match ? match : undefined;
                                    }
                                }
                            }
                        }
                        i += 2;
                    }
                },

                str: function(str, map) {

                    for (var i in map) {
                        // check if array
                        if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                            for (var j = 0; j < map[i].length; j++) {
                                if (util.has(map[i][j], str)) {
                                    return (i === UNKNOWN) ? undefined : i;
                                }
                            }
                        } else if (util.has(map[i], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                    return str;
                }
            };


            ///////////////
            // String map
            //////////////


            var maps = {

                browser: {
                    oldsafari: {
                        version: {
                            '1.0': '/8',
                            '1.2': '/1',
                            '1.3': '/3',
                            '2.0': '/412',
                            '2.0.2': '/416',
                            '2.0.3': '/417',
                            '2.0.4': '/419',
                            '?': '/'
                        }
                    }
                },

                device: {
                    amazon: {
                        model: {
                            'Fire Phone': ['SD', 'KF']
                        }
                    },
                    sprint: {
                        model: {
                            'Evo Shift 4G': '7373KT'
                        },
                        vendor: {
                            'HTC': 'APA',
                            'Sprint': 'Sprint'
                        }
                    }
                },

                os: {
                    windows: {
                        version: {
                            'ME': '4.90',
                            'NT 3.11': 'NT3.51',
                            'NT 4.0': 'NT4.0',
                            '2000': 'NT 5.0',
                            'XP': ['NT 5.1', 'NT 5.2'],
                            'Vista': 'NT 6.0',
                            '7': 'NT 6.1',
                            '8': 'NT 6.2',
                            '8.1': 'NT 6.3',
                            '10': ['NT 6.4', 'NT 10.0'],
                            'RT': 'ARM'
                        }
                    }
                }
            };


            //////////////
            // Regex map
            /////////////


            var regexes = {

                browser: [
                    [

                        // Presto based
                        /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
                        /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
                        /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
                        /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                    ],
                    [NAME, VERSION],
                    [

                        /(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                    ],
                    [
                        [NAME, 'Opera Mini'], VERSION
                    ],
                    [

                        /\s(opr)\/([\w\.]+)/i // Opera Webkit
                    ],
                    [
                        [NAME, 'Opera'], VERSION
                    ],
                    [

                        // Mixed
                        /(kindle)\/([\w\.]+)/i, // Kindle
                        /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                        // Lunascape/Maxthon/Netfront/Jasmine/Blazer

                        // Trident based
                        /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                        // Avant/IEMobile/SlimBrowser/Baidu
                        /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer

                        // Webkit/KHTML based
                        /(rekonq)\/([\w\.]*)/i, // Rekonq
                        /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
                        // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
                    ],
                    [NAME, VERSION],
                    [

                        /(konqueror)\/([\w\.]+)/i // Konqueror
                    ],
                    [
                        [NAME, 'Konqueror'], VERSION
                    ],
                    [

                        /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                    ],
                    [
                        [NAME, 'IE'], VERSION
                    ],
                    [

                        /(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                    ],
                    [
                        [NAME, 'Edge'], VERSION
                    ],
                    [

                        /(yabrowser)\/([\w\.]+)/i // Yandex
                    ],
                    [
                        [NAME, 'Yandex'], VERSION
                    ],
                    [

                        /(puffin)\/([\w\.]+)/i // Puffin
                    ],
                    [
                        [NAME, 'Puffin'], VERSION
                    ],
                    [

                        /(focus)\/([\w\.]+)/i // Firefox Focus
                    ],
                    [
                        [NAME, 'Firefox Focus'], VERSION
                    ],
                    [

                        /(opt)\/([\w\.]+)/i // Opera Touch
                    ],
                    [
                        [NAME, 'Opera Touch'], VERSION
                    ],
                    [

                        /((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i // UCBrowser
                    ],
                    [
                        [NAME, 'UCBrowser'], VERSION
                    ],
                    [

                        /(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                    ],
                    [
                        [NAME, /_/g, ' '], VERSION
                    ],
                    [

                        /(windowswechat qbcore)\/([\w\.]+)/i // WeChat Desktop for Windows Built-in Browser
                    ],
                    [
                        [NAME, 'WeChat(Win) Desktop'], VERSION
                    ],
                    [

                        /(micromessenger)\/([\w\.]+)/i // WeChat
                    ],
                    [
                        [NAME, 'WeChat'], VERSION
                    ],
                    [

                        /(brave)\/([\w\.]+)/i // Brave browser
                    ],
                    [
                        [NAME, 'Brave'], VERSION
                    ],
                    [

                        /(qqbrowserlite)\/([\w\.]+)/i // QQBrowserLite
                    ],
                    [NAME, VERSION],
                    [

                        /(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
                    ],
                    [NAME, VERSION],
                    [

                        /m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                    ],
                    [NAME, VERSION],
                    [

                        /(BIDUBrowser)[\/\s]?([\w\.]+)/i // Baidu Browser
                    ],
                    [NAME, VERSION],
                    [

                        /(2345Explorer)[\/\s]?([\w\.]+)/i // 2345 Browser
                    ],
                    [NAME, VERSION],
                    [

                        /(MetaSr)[\/\s]?([\w\.]+)/i // SouGouBrowser
                    ],
                    [NAME],
                    [

                        /(LBBROWSER)/i // LieBao Browser
                    ],
                    [NAME],
                    [

                        /xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                    ],
                    [VERSION, [NAME, 'MIUI Browser']],
                    [

                        /;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                    ],
                    [VERSION, [NAME, 'Facebook']],
                    [

                        /safari\s(line)\/([\w\.]+)/i, // Line App for iOS
                        /android.+(line)\/([\w\.]+)\/iab/i // Line App for Android
                    ],
                    [NAME, VERSION],
                    [

                        /headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
                    ],
                    [VERSION, [NAME, 'Chrome Headless']],
                    [

                        /\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                    ],
                    [
                        [NAME, /(.+)/, '$1 WebView'], VERSION
                    ],
                    [

                        /((?:oculus|samsung)browser)\/([\w\.]+)/i
                    ],
                    [
                        [NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION
                    ],
                    [ // Oculus / Samsung Browser

                        /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                    ],
                    [VERSION, [NAME, 'Android Browser']],
                    [

                        /(sailfishbrowser)\/([\w\.]+)/i // Sailfish Browser
                    ],
                    [
                        [NAME, 'Sailfish Browser'], VERSION
                    ],
                    [

                        /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                        // Chrome/OmniWeb/Arora/Tizen/Nokia
                    ],
                    [NAME, VERSION],
                    [

                        /(dolfin)\/([\w\.]+)/i // Dolphin
                    ],
                    [
                        [NAME, 'Dolphin'], VERSION
                    ],
                    [

                        /((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                    ],
                    [
                        [NAME, 'Chrome'], VERSION
                    ],
                    [

                        /(coast)\/([\w\.]+)/i // Opera Coast
                    ],
                    [
                        [NAME, 'Opera Coast'], VERSION
                    ],
                    [

                        /fxios\/([\w\.-]+)/i // Firefox for iOS
                    ],
                    [VERSION, [NAME, 'Firefox']],
                    [

                        /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                    ],
                    [VERSION, [NAME, 'Mobile Safari']],
                    [

                        /version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                    ],
                    [VERSION, NAME],
                    [

                        /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
                    ],
                    [
                        [NAME, 'GSA'], VERSION
                    ],
                    [

                        /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                    ],
                    [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
                    [

                        /(webkit|khtml)\/([\w\.]+)/i
                    ],
                    [NAME, VERSION],
                    [

                        // Gecko based
                        /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                    ],
                    [
                        [NAME, 'Netscape'], VERSION
                    ],
                    [
                        /(swiftfox)/i, // Swiftfox
                        /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                        // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                        /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,

                        // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                        /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla

                        // Other
                        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                        /(links)\s\(([\w\.]+)/i, // Links
                        /(gobrowser)\/?([\w\.]*)/i, // GoBrowser
                        /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
                        /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                    ],
                    [NAME, VERSION]
                ],

                cpu: [
                    [

                        /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                    ],
                    [
                        [ARCHITECTURE, 'amd64']
                    ],
                    [

                        /(ia32(?=;))/i // IA32 (quicktime)
                    ],
                    [
                        [ARCHITECTURE, util.lowerize]
                    ],
                    [

                        /((?:i[346]|x)86)[;\)]/i // IA32
                    ],
                    [
                        [ARCHITECTURE, 'ia32']
                    ],
                    [

                        // PocketPC mistakenly identified as PowerPC
                        /windows\s(ce|mobile);\sppc;/i
                    ],
                    [
                        [ARCHITECTURE, 'arm']
                    ],
                    [

                        /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                    ],
                    [
                        [ARCHITECTURE, /ower/, '', util.lowerize]
                    ],
                    [

                        /(sun4\w)[;\)]/i // SPARC
                    ],
                    [
                        [ARCHITECTURE, 'sparc']
                    ],
                    [

                        /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                        // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                    ],
                    [
                        [ARCHITECTURE, util.lowerize]
                    ]
                ],

                device: [
                    [

                        /\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i // iPad/PlayBook
                    ],
                    [MODEL, VENDOR, [TYPE, TABLET]],
                    [

                        /applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                    ],
                    [MODEL, [VENDOR, 'Apple'],
                        [TYPE, TABLET]
                    ],
                    [

                        /(apple\s{0,1}tv)/i // Apple TV
                    ],
                    [
                        [MODEL, 'Apple TV'],
                        [VENDOR, 'Apple']
                    ],
                    [

                        /(archos)\s(gamepad2?)/i, // Archos
                        /(hp).+(touchpad)/i, // HP TouchPad
                        /(hp).+(tablet)/i, // HP Tablet
                        /(kindle)\/([\w\.]+)/i, // Kindle
                        /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
                        /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                    ],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [

                        /(kf[A-z]+)\sbuild\/.+silk\//i // Kindle Fire HD
                    ],
                    [MODEL, [VENDOR, 'Amazon'],
                        [TYPE, TABLET]
                    ],
                    [
                        /(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i // Fire Phone
                    ],
                    [
                        [MODEL, mapper.str, maps.device.amazon.model],
                        [VENDOR, 'Amazon'],
                        [TYPE, MOBILE]
                    ],
                    [
                        /android.+aft([bms])\sbuild/i // Fire TV
                    ],
                    [MODEL, [VENDOR, 'Amazon'],
                        [TYPE, SMARTTV]
                    ],
                    [

                        /\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                    ],
                    [MODEL, VENDOR, [TYPE, MOBILE]],
                    [
                        /\((ip[honed|\s\w*]+);/i // iPod/iPhone
                    ],
                    [MODEL, [VENDOR, 'Apple'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /(blackberry)[\s-]?(\w+)/i, // BlackBerry
                        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                        // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                        /(hp)\s([\w\s]+\w)/i, // HP iPAQ
                        /(asus)-?(\w+)/i // Asus
                    ],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [
                        /\(bb10;\s(\w+)/i // BlackBerry 10
                    ],
                    [MODEL, [VENDOR, 'BlackBerry'],
                        [TYPE, MOBILE]
                    ],
                    [
                        // Asus Tablets
                        /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
                    ],
                    [MODEL, [VENDOR, 'Asus'],
                        [TYPE, TABLET]
                    ],
                    [

                        /(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
                        /(sony)?(?:sgp.+)\sbuild\//i
                    ],
                    [
                        [VENDOR, 'Sony'],
                        [MODEL, 'Xperia Tablet'],
                        [TYPE, TABLET]
                    ],
                    [
                        /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                    ],
                    [MODEL, [VENDOR, 'Sony'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /\s(ouya)\s/i, // Ouya
                        /(nintendo)\s([wids3u]+)/i // Nintendo
                    ],
                    [VENDOR, MODEL, [TYPE, CONSOLE]],
                    [

                        /android.+;\s(shield)\sbuild/i // Nvidia
                    ],
                    [MODEL, [VENDOR, 'Nvidia'],
                        [TYPE, CONSOLE]
                    ],
                    [

                        /(playstation\s[34portablevi]+)/i // Playstation
                    ],
                    [MODEL, [VENDOR, 'Sony'],
                        [TYPE, CONSOLE]
                    ],
                    [

                        /(sprint\s(\w+))/i // Sprint Phones
                    ],
                    [
                        [VENDOR, mapper.str, maps.device.sprint.vendor],
                        [MODEL, mapper.str, maps.device.sprint.model],
                        [TYPE, MOBILE]
                    ],
                    [

                        /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, // HTC
                        /(zte)-(\w*)/i, // ZTE
                        /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
                        // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
                    ],
                    [VENDOR, [MODEL, /_/g, ' '],
                        [TYPE, MOBILE]
                    ],
                    [

                        /(nexus\s9)/i // HTC Nexus 9
                    ],
                    [MODEL, [VENDOR, 'HTC'],
                        [TYPE, TABLET]
                    ],
                    [

                        /d\/huawei([\w\s-]+)[;\)]/i,
                        /(nexus\s6p)/i // Huawei
                    ],
                    [MODEL, [VENDOR, 'Huawei'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                    ],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [

                        /[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                    ],
                    [MODEL, [VENDOR, 'Microsoft'],
                        [TYPE, CONSOLE]
                    ],
                    [
                        /(kin\.[onetw]{3})/i // Microsoft Kin
                    ],
                    [
                        [MODEL, /\./g, ' '],
                        [VENDOR, 'Microsoft'],
                        [TYPE, MOBILE]
                    ],
                    [

                        // Motorola
                        /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                        /mot[\s-]?(\w*)/i,
                        /(XT\d{3,4}) build\//i,
                        /(nexus\s6)/i
                    ],
                    [MODEL, [VENDOR, 'Motorola'],
                        [TYPE, MOBILE]
                    ],
                    [
                        /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
                    ],
                    [MODEL, [VENDOR, 'Motorola'],
                        [TYPE, TABLET]
                    ],
                    [

                        /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                    ],
                    [
                        [VENDOR, util.trim],
                        [MODEL, util.trim],
                        [TYPE, SMARTTV]
                    ],
                    [

                        /hbbtv.+maple;(\d+)/i
                    ],
                    [
                        [MODEL, /^/, 'SmartTV'],
                        [VENDOR, 'Samsung'],
                        [TYPE, SMARTTV]
                    ],
                    [

                        /\(dtv[\);].+(aquos)/i // Sharp
                    ],
                    [MODEL, [VENDOR, 'Sharp'],
                        [TYPE, SMARTTV]
                    ],
                    [

                        /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                        /((SM-T\w+))/i
                    ],
                    [
                        [VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]
                    ],
                    [ // Samsung
                        /smart-tv.+(samsung)/i
                    ],
                    [VENDOR, [TYPE, SMARTTV], MODEL],
                    [
                        /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                        /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                        /sec-((sgh\w+))/i
                    ],
                    [
                        [VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]
                    ],
                    [

                        /sie-(\w*)/i // Siemens
                    ],
                    [MODEL, [VENDOR, 'Siemens'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
                        /(nokia)[\s_-]?([\w-]*)/i
                    ],
                    [
                        [VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]
                    ],
                    [

                        /android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i // Acer
                    ],
                    [MODEL, [VENDOR, 'Acer'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
                    ],
                    [MODEL, [VENDOR, 'LG'],
                        [TYPE, TABLET]
                    ],
                    [
                        /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                    ],
                    [
                        [VENDOR, 'LG'], MODEL, [TYPE, TABLET]
                    ],
                    [
                        /(lg) netcast\.tv/i // LG SmartTV
                    ],
                    [VENDOR, MODEL, [TYPE, SMARTTV]],
                    [
                        /(nexus\s[45])/i, // LG
                        /lg[e;\s\/-]+(\w*)/i,
                        /android.+lg(\-?[\d\w]+)\s+build/i
                    ],
                    [MODEL, [VENDOR, 'LG'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i // Lenovo tablets
                    ],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [
                        /android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                    ],
                    [MODEL, [VENDOR, 'Lenovo'],
                        [TYPE, TABLET]
                    ],
                    [
                        /(lenovo)[_\s-]?([\w-]+)/i
                    ],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [

                        /linux;.+((jolla));/i // Jolla
                    ],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [

                        /((pebble))app\/[\d\.]+\s/i // Pebble
                    ],
                    [VENDOR, MODEL, [TYPE, WEARABLE]],
                    [

                        /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                    ],
                    [VENDOR, MODEL, [TYPE, MOBILE]],
                    [

                        /crkey/i // Google Chromecast
                    ],
                    [
                        [MODEL, 'Chromecast'],
                        [VENDOR, 'Google']
                    ],
                    [

                        /android.+;\s(glass)\s\d/i // Google Glass
                    ],
                    [MODEL, [VENDOR, 'Google'],
                        [TYPE, WEARABLE]
                    ],
                    [

                        /android.+;\s(pixel c)[\s)]/i // Google Pixel C
                    ],
                    [MODEL, [VENDOR, 'Google'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+;\s(pixel( [23])?( xl)?)[\s)]/i // Google Pixel
                    ],
                    [MODEL, [VENDOR, 'Google'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /android.+;\s(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
                        /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
                        /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                        // Xiaomi Mi
                        /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i // Redmi Phones
                    ],
                    [
                        [MODEL, /_/g, ' '],
                        [VENDOR, 'Xiaomi'],
                        [TYPE, MOBILE]
                    ],
                    [
                        /android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i // Mi Pad tablets
                    ],
                    [
                        [MODEL, /_/g, ' '],
                        [VENDOR, 'Xiaomi'],
                        [TYPE, TABLET]
                    ],
                    [
                        /android.+;\s(m[1-5]\snote)\sbuild/i // Meizu
                    ],
                    [MODEL, [VENDOR, 'Meizu'],
                        [TYPE, MOBILE]
                    ],
                    [
                        /(mz)-([\w-]{2,})/i
                    ],
                    [
                        [VENDOR, 'Meizu'], MODEL, [TYPE, MOBILE]
                    ],
                    [

                        /android.+a000(1)\s+build/i, // OnePlus
                        /android.+oneplus\s(a\d{4})\s+build/i
                    ],
                    [MODEL, [VENDOR, 'OnePlus'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
                    ],
                    [MODEL, [VENDOR, 'RCA'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i // Dell Venue Tablets
                    ],
                    [MODEL, [VENDOR, 'Dell'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
                    ],
                    [MODEL, [VENDOR, 'Verizon'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
                    ],
                    [
                        [VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
                    ],
                    [MODEL, [VENDOR, 'NuVision'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+;\s(k88)\sbuild/i // ZTE K Series Tablet
                    ],
                    [MODEL, [VENDOR, 'ZTE'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
                    ],
                    [MODEL, [VENDOR, 'Swiss'],
                        [TYPE, MOBILE]
                    ],
                    [

                        /android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
                    ],
                    [MODEL, [VENDOR, 'Swiss'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
                    ],
                    [MODEL, [VENDOR, 'Zeki'],
                        [TYPE, TABLET]
                    ],
                    [

                        /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                        /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i // Dragon Touch Tablet
                    ],
                    [
                        [VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i // Insignia Tablets
                    ],
                    [MODEL, [VENDOR, 'Insignia'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i // NextBook Tablets
                    ],
                    [MODEL, [VENDOR, 'NextBook'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
                    ],
                    [
                        [VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]
                    ],
                    [ // Voice Xtreme Phones

                        /android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i // LvTel Phones
                    ],
                    [
                        [VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]
                    ],
                    [

                        /android.+;\s(PH-1)\s/i
                    ],
                    [MODEL, [VENDOR, 'Essential'],
                        [TYPE, MOBILE]
                    ],
                    [ // Essential PH-1

                        /android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
                    ],
                    [MODEL, [VENDOR, 'Envizen'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i // Le Pan Tablets
                    ],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [

                        /android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
                    ],
                    [MODEL, [VENDOR, 'MachSpeed'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
                    ],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [

                        /android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
                    ],
                    [MODEL, [VENDOR, 'Rotor'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
                    ],
                    [MODEL, [VENDOR, 'Amazon'],
                        [TYPE, TABLET]
                    ],
                    [

                        /android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i // Gigaset Tablets
                    ],
                    [VENDOR, MODEL, [TYPE, TABLET]],
                    [

                        /\s(tablet|tab)[;\/]/i, // Unidentifiable Tablet
                        /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                    ],
                    [
                        [TYPE, util.lowerize], VENDOR, MODEL
                    ],
                    [

                        /[\s\/\(](smart-?tv)[;\)]/i // SmartTV
                    ],
                    [
                        [TYPE, SMARTTV]
                    ],
                    [

                        /(android[\w\.\s\-]{0,9});.+build/i // Generic Android Device
                    ],
                    [MODEL, [VENDOR, 'Generic']]
                ],

                engine: [
                    [

                        /windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                    ],
                    [VERSION, [NAME, 'EdgeHTML']],
                    [

                        /webkit\/537\.36.+chrome\/(?!27)/i // Blink
                    ],
                    [
                        [NAME, 'Blink']
                    ],
                    [

                        /(presto)\/([\w\.]+)/i, // Presto
                        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                        // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
                        /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
                        /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                    ],
                    [NAME, VERSION],
                    [

                        /rv\:([\w\.]{1,9}).+(gecko)/i // Gecko
                    ],
                    [VERSION, NAME]
                ],

                os: [
                    [

                        // Windows based
                        /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                    ],
                    [NAME, VERSION],
                    [
                        /(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
                        /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, // Windows Phone
                        /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                    ],
                    [NAME, [VERSION, mapper.str, maps.os.windows.version]],
                    [
                        /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
                    ],
                    [
                        [NAME, 'Windows'],
                        [VERSION, mapper.str, maps.os.windows.version]
                    ],
                    [

                        // Mobile/Embedded OS
                        /\((bb)(10);/i // BlackBerry 10
                    ],
                    [
                        [NAME, 'BlackBerry'], VERSION
                    ],
                    [
                        /(blackberry)\w*\/?([\w\.]*)/i, // Blackberry
                        /(tizen)[\/\s]([\w\.]+)/i, // Tizen
                        /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
                        // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
                    ],
                    [NAME, VERSION],
                    [
                        /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i // Symbian
                    ],
                    [
                        [NAME, 'Symbian'], VERSION
                    ],
                    [
                        /\((series40);/i // Series 40
                    ],
                    [NAME],
                    [
                        /mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                    ],
                    [
                        [NAME, 'Firefox OS'], VERSION
                    ],
                    [

                        // Console
                        /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation

                        // GNU/Linux based
                        /(mint)[\/\s\(]?(\w*)/i, // Mint
                        /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
                        /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                        // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                        // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                        /(hurd|linux)\s?([\w\.]*)/i, // Hurd/Linux
                        /(gnu)\s?([\w\.]*)/i // GNU
                    ],
                    [NAME, VERSION],
                    [

                        /(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                    ],
                    [
                        [NAME, 'Chromium OS'], VERSION
                    ],
                    [

                        // Solaris
                        /(sunos)\s?([\w\.\d]*)/i // Solaris
                    ],
                    [
                        [NAME, 'Solaris'], VERSION
                    ],
                    [

                        // BSD based
                        /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                    ],
                    [NAME, VERSION],
                    [

                        /(haiku)\s(\w+)/i // Haiku
                    ],
                    [NAME, VERSION],
                    [

                        /cfnetwork\/.+darwin/i,
                        /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
                    ],
                    [
                        [VERSION, /_/g, '.'],
                        [NAME, 'iOS']
                    ],
                    [

                        /(mac\sos\sx)\s?([\w\s\.]*)/i,
                        /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                    ],
                    [
                        [NAME, 'Mac OS'],
                        [VERSION, /_/g, '.']
                    ],
                    [

                        // Other
                        /((?:open)?solaris)[\/\s-]?([\w\.]*)/i, // Solaris
                        /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, // AIX
                        /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                        // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
                        /(unix)\s?([\w\.]*)/i // UNIX
                    ],
                    [NAME, VERSION]
                ]
            };


            /////////////////
            // Constructor
            ////////////////
            var UAParser = function(uastring, extensions) {

                if (typeof uastring === 'object') {
                    extensions = uastring;
                    uastring = undefined;
                }

                if (!(this instanceof UAParser)) {
                    return new UAParser(uastring, extensions).getResult();
                }

                var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
                var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

                this.getBrowser = function() {
                    var browser = {
                        name: undefined,
                        version: undefined
                    };
                    mapper.rgx.call(browser, ua, rgxmap.browser);
                    browser.major = util.major(browser.version); // deprecated
                    return browser;
                };
                this.getCPU = function() {
                    var cpu = {
                        architecture: undefined
                    };
                    mapper.rgx.call(cpu, ua, rgxmap.cpu);
                    return cpu;
                };
                this.getDevice = function() {
                    var device = {
                        vendor: undefined,
                        model: undefined,
                        type: undefined
                    };
                    mapper.rgx.call(device, ua, rgxmap.device);
                    return device;
                };
                this.getEngine = function() {
                    var engine = {
                        name: undefined,
                        version: undefined
                    };
                    mapper.rgx.call(engine, ua, rgxmap.engine);
                    return engine;
                };
                this.getOS = function() {
                    var os = {
                        name: undefined,
                        version: undefined
                    };
                    mapper.rgx.call(os, ua, rgxmap.os);
                    return os;
                };
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    };
                };
                this.getUA = function() {
                    return ua;
                };
                this.setUA = function(uastring) {
                    ua = uastring;
                    return this;
                };
                return this;
            };

            UAParser.VERSION = LIBVERSION;
            UAParser.BROWSER = {
                NAME: NAME,
                MAJOR: MAJOR, // deprecated
                VERSION: VERSION
            };
            UAParser.CPU = {
                ARCHITECTURE: ARCHITECTURE
            };
            UAParser.DEVICE = {
                MODEL: MODEL,
                VENDOR: VENDOR,
                TYPE: TYPE,
                CONSOLE: CONSOLE,
                MOBILE: MOBILE,
                SMARTTV: SMARTTV,
                TABLET: TABLET,
                WEARABLE: WEARABLE,
                EMBEDDED: EMBEDDED
            };
            UAParser.ENGINE = {
                NAME: NAME,
                VERSION: VERSION
            };
            UAParser.OS = {
                NAME: NAME,
                VERSION: VERSION
            };

            ///////////
            // Export
            //////////


            // check js environment
            if (typeof(exports) !== UNDEF_TYPE) {
                // nodejs env
                if (typeof module !== UNDEF_TYPE && module.exports) {
                    exports = module.exports = UAParser;
                }
                exports.UAParser = UAParser;
            } else {
                // requirejs env (optional)
                if (typeof(define) === 'function' && define.amd) {
                    define(function() {
                        return UAParser;
                    });
                } else if (window) {
                    // browser env
                    window.UAParser = UAParser;
                }
            }

            // jQuery/Zepto specific (optional)
            // Note:
            //   In AMD env the global scope should be kept clean, but jQuery is an exception.
            //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
            //   and we should catch that.
            var $ = window && (window.jQuery || window.Zepto);
            if (typeof $ !== UNDEF_TYPE && !$.ua) {
                var parser = new UAParser();
                $.ua = parser.getResult();
                $.ua.get = function() {
                    return parser.getUA();
                };
                $.ua.set = function(uastring) {
                    parser.setUA(uastring);
                    var result = parser.getResult();
                    for (var prop in result) {
                        $.ua[prop] = result[prop];
                    }
                };
            }

        })(typeof window === 'object' ? window : this);

    }, {}],
    7: [function(require, module, exports) {
        /**
         * @file
         * Documentation for the public API exposed by the DisneyID UI v2
         * currently in development.
         *
         * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
         * @version 2.0
         */

        /**
         * The globally scoped object will give you the ability to retrieve an
         * instance of the client specifically configured to your specifications.
         * @namespace DisneyID
         * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
         * @version 2.0
         */

        'use strict';

        module.exports = {
            getLicensePlateDataBag: getLicensePlateDataBag,
            launchAdultVerification: launchAdultVerification,
            launchDisplayName: launchDisplayName,
            launchEmailVerification: launchEmailVerification,
            launchLicensePlate: launchLicensePlate,
            launchLogin: launchLogin,
            launchNewsletters: launchNewsletters,
            launchProfile: launchProfile,
            launchReauth: launchReauth,
            launchRecoverUsername: launchRecoverUsername,
            launchRegistration: launchRegistration,
            launchRequestActivity: launchRequestActivity,
            launchResetPassword: launchResetPassword,
            launchSocialRegistration: launchSocialRegistration,
            logout: logout
        };

        var Q = require('q');
        var utils = require('utils');
        var messages = require('messages');
        var session = require('session');
        var config = require('../components/outer/config');
        var licensePlate = require('../components/outer/license-plate');
        var cookie = require('cookie');
        var ERRORS = require('./errors');

        // @TODO: Should api-helper be in common? Is it even needed?
        var apiHelper = require('../outer/api-helper');

        /**
         * Launches the UI for the standard login (username/password) workflow.
         * This method will return a promise when called. The promise will be
         * rejected if 1) the DisneyID instance is not initialized or 2) the method
         * is called during an established user session. Additionally, an `error`
         * event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @fires DisneyIDInstance#error
         *
         * @category loginReg
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * @returns {Promise}
         * @example
         did.launchLogin({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchLogin(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');

            var deferred = Q.defer();

            var routePromise = apiHelper.runWorkflow('login', 'analytics-pageview', {
                loggingInfo: opts.loggingInfo,
                optionalConfigs: opts.optionalConfigs,
                allowSkip: !!opts.allowSkip
            });

            routePromise.then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Log out the user by clearing all current session data. This method will
         * return a promise when called. The promise will be rejected if the method
         * is called before an established user session. Additionally, an `error`
         * event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category session
         *
         * @fires DisneyIDInstance#logout
         * @fires DisneyIDInstance#error
         *
         * @return {Promise}
         * @example
         did.logout()
         .then(function () {
                // user logged out successfully
            })
         .fail(function (error) {
                console.log(error);
            });
         */
        function logout() {
            var deferred = Q.defer();

            session.isLoggedIn().then(function(isLoggedIn) {
                var swid = cookie.read('SWID');

                if (!isLoggedIn) {
                    deferred.reject({
                        success: true,
                        anon: false,
                        error_codes: ERRORS.SESSION_NOT_ESTABLISHED,
                        swid: swid
                    });
                } else {
                    session.token.readAll().then(function(tokens) {
                        return session.invalidateTokens(tokens);
                    }).finally(function() {
                        session.deleteAll('api').finally(function() {
                            deferred.resolve({
                                logging: {
                                    anon: false,
                                    swid: swid
                                }
                            });
                        });
                    });
                }
                // todo: get correlationId and conversationId from the logout api log.

            });

            return deferred.promise;
        }

        /**
         * Launches the UI for the direct registration workflow. This method will
         * return a promise when called. The promise will be rejected if 1) the
         * DisneyID instance is not initialized or 2) the method is called during
         * an established user session. Additionally, an `error` event will
         * emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category loginReg
         *
         * @fires DisneyIDInstance#error
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * return {Promise}
         * @example
         did.launchRegistration({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchRegistration(initialConfig, opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();
            var options = {
                optionalConfigs: opts.optionalConfigs,
                loggingInfo: opts.loggingInfo,
                allowSkip: !!opts.allowSkip
            };

            if (utils.get(options, 'optionalConfigs.providedProfile.region')) {
                options.optionalConfigs.providedProfile.region = options.optionalConfigs.providedProfile.region.toUpperCase();
            }

            apiHelper.runWorkflow('register', undefined, utils.assign(options, {
                skipSocial: true
            })).then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Launches the UI for the direct social registration workflow. This method
         * will return a promise when called. The promise will be rejected if 1)
         * the DisneyID instance is not initialized or 2) the method is called
         * during an established user session. Additionally, an `error` event will
         * emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category loginReg
         *
         * @fires DisneyIDInstance#error
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * @return {Promise}
         * @example
         did.launchSocialRegistration({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchSocialRegistration(initialConfig, opts) {
            // TODO: Social reg/login is being deprecated, removed this once BU's stop calling 'launchSocialRegistration'
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();

            opts = {
                optionalConfigs: opts.optionalConfigs,
                loggingInfo: opts.loggingInfo,
                allowSkip: !!opts.allowSkip
            };

            if (utils.get(opts, 'optionalConfigs.providedProfile.region')) {
                opts.optionalConfigs.providedProfile.region = opts.optionalConfigs.providedProfile.region.toUpperCase();
            }

            apiHelper.runWorkflow('register', 'analytics-flow-socialReg', opts).then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Launches the UI for view/edit profile workflow. This method will return
         * a promise when called. The promise will be rejected if 1) the DisneyID
         * instance is not initialized or 2) before an established user session.
         * Additionally, an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#update
         * @fires DisneyIDInstance#error
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * return {Promise}
         * @example
         did.launchProfile({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchProfile(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();

            apiHelper.runWorkflow('updateProfile', undefined, {
                loggingInfo: opts.loggingInfo,
                allowSkip: !!opts.allowSkip
            }).then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Launches the UI to initialize account recovery workflow via password
         * reset. This method will return a promise when called. The promise will
         * be rejected if 1) the DisneyID instance is not initialized or 2) the
         * method is called during an established user session. Additionally, an
         * `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category accountRecovery
         *
         * @fires DisneyIDInstance#error
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * @return {Promise}
         * @example
         did.launchResetPassword({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchResetPassword(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();

            apiHelper.runWorkflow('recoverPassword', null, {
                loggingInfo: opts.loggingInfo,
                fromAPI: true,
                allowSkip: !!opts.allowSkip
            }).then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Launches the UI to initialize account recovery workflow via recover
         * username. This method will return a promise when called. The promise
         * will be rejected if 1) the DisneyID instance is not initialized or 2)
         * the method is called during an established user session. Additionally,
         * an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category accountRecovery
         *
         * @fires DisneyIDInstance#error
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * @return {Promise}
         * @example
         did.launchRecoverUsername({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchRecoverUsername(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();

            apiHelper.runWorkflow('recoverUsername', null, {
                loggingInfo: opts.loggingInfo,
                fromAPI: true,
                allowSkip: !!opts.allowSkip
            }).then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Launches the UI for the reauth workflow. This workflow is intended
         * to be used in cases when you need to assure the user is in a high
         * trust state. This method returns a promise, that when fulfilled,
         * provides the full guest object. The promise will be rejected if the
         * method is called before an established user session.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category session
         *
         * @fires DisneyIDInstance#logout
         * @fires DisneyIDInstance#reauth
         * @fires DisneyIDInstance#error
         *
         * @returns {Promise}
         * @example
         did.launchReauth()
         .then(function (guest) {
                // Guest successfully reauthenticated
            })
         .fail(function (error) {
                console.log(error);
            });
         */
        function launchReauth(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();
            var params = {
                loggingInfo: opts.loggingInfo,
                isStandalone: true,
                allowSkip: !!opts.allowSkip
            };

            apiHelper.runWorkflow('reauth', null, params, true).then(function(data) {
                if (data.reauthSuccess) {
                    deferred.resolve({
                        data: utils.clone(data.guest)
                    });
                } else {
                    deferred.reject({
                        success: true,
                        error_codes: ERRORS.UNKNOWN_ERROR
                    });
                }
            });

            return deferred.promise;
        }

        /**
         * Launches the UI to view/edit display name workflow. This method will
         * return a promise when called. The promise will be rejected if 1) the
         * DisneyID instance is not initialized or 2) before an established user
         * session. Additionally, an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @param {Object} opts   Contains conversationId and
         *     conversationIdTimestamp
         *
         * @fires DisneyIDInstance#update
         * @fires DisneyIDInstance#error
         * return {Promise}
         * @example
         did.launchDisplayName({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7', conversationIdTimeStamp : 1425433671898}).fail(function (error) {
                console.log(error);
            });
         */
        function launchDisplayName(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();

            config.getSite().then(function(siteConfig) {
                if (!(siteConfig.displayName || {}).enabled) {
                    deferred.reject({
                        success: true,
                        error_codes: ERRORS.NOT_ENABLED
                    });
                } else {
                    var routePromise = apiHelper.runWorkflow('updateDisplayName', 'prompt-reauth-if-low-trust', {
                        loggingInfo: opts.loggingInfo,
                        allowSkip: !!opts.allowSkip
                    });

                    routePromise.then(function() {
                        deferred.resolve();
                    });
                }
            });

            return deferred.promise;
        }

        /**
         * Launches the UI to prompt the user for the specified promotions.<br><br>
         * <b>NOTE:</b> This method can be called during or before an established
         * user session with differing results: if the method is called before an
         * established user session, the user will be prompted for an email address
         * in addition to the newsletters. After a session is established, only the
         * list of newsletter options will be presented. This method will return a
         * promise when called. The promise will be rejected if 1) the DisneyID
         * instance is not initialized or 2) called with invalid promo IDs.
         * Additionally, an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @param {string} [promotionId] Newsletter promotion ID
         * @param {Object} opts        Contains conversation ID
         *     and other parameters used by Metrics
         *
         * @fires DisneyIDInstance#opt-in
         * @fires DisneyIDInstance#error
         *
         * @return {Promise}
         *
         * @example
         did.launchNewsletters(promotionIds).fail(function (error) {
                console.log(error);
            });
         */
        function launchNewsletters(opts, promotionId) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();

            if (!promotionId) {
                deferred.reject({
                    success: true,
                    error_codes: ERRORS.INVALID_ARGUMENT
                });
            } else {
                apiHelper.runWorkflow('newsletters', null, {
                    promotionId: promotionId,
                    sourceName: opts && opts.sourceName || null,
                    loggingInfo: opts.loggingInfo,
                    pageName: 'create-nrt',
                    allowSkip: !!opts.allowSkip
                }).then(function() {
                    deferred.resolve();
                });
            }

            return deferred.promise;
        }

        /**
         * Launches the UI to prompt the user to request one or more activities
         * (specifically around child permissions). This method will return a
         * promise when called. The promise will be rejected if 1) the DisneyID
         * instance is not initialized or 2) called before an established user
         * session. Additionally, an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#error
         *
         * return {Promise}
         * @example
         did.launchRequestActivity('my-activity', {conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7'})
         .fail(function (error) {
                console.log(error);
            });
         */
        function launchRequestActivity(opts, activityCode) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var deferred = Q.defer();
            var routePromise = apiHelper.runWorkflow('requestActivity', undefined, {
                activityCode: activityCode,
                loggingInfo: opts.loggingInfo,
                allowSkip: !!opts.allowSkip
            });

            routePromise.then(function() {
                deferred.resolve();
            });

            return deferred.promise;
        }

        /**
         * Launches the UI for OTP Email Verification.
         * This method will return a promise when called.
         * The promise will be rejected if 1) the DisneyID
         * instance is not initialized. Additionally, an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#error
         *
         * return {Promise}
         * @example
         did.launchEmailVerification({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7'})
         .fail(function (error) {
                console.log(error);
            });
         */
        function launchEmailVerification(opts) {
            var deferred = Q.defer();
            messages.publish('lightbox.requestShowErrorOnFatal');

            var options = {
                loggingInfo: opts.loggingInfo,
                allowSkip: !!opts.allowSkip
            };

            var result = {
                    status: 'pending'
                },
                unsubs = [];

            unsubs.push(messages.subscribe('lightbox.hide', onDone));
            unsubs.push(messages.subscribe('email-verification.success', onSuccess));
            unsubs.push(messages.subscribe('email-verification.failure', onFailure));

            apiHelper.runWorkflow('emailVerification', null, options);

            deferred.promise.finally(function() {
                // Unsubscribe from messages
                unsubs.forEach(function(unsub) {
                    unsub();
                });
            });

            return deferred.promise;

            function onSuccess() {
                result.status = 'success';
            }

            function onFailure(data) {
                result.status = 'failure';
                result.failureCode = utils.get(data, 'failureCode');
            }

            function onDone() {
                if (result.status === 'success') {
                    deferred.resolve();
                } else if (result.status === 'failure') {
                    deferred.reject({
                        error_codes: result.failureCode || 'UNKNOWN_ERROR'
                    });
                } else {
                    deferred.reject({
                        error_codes: 'CANCEL_BY_USER'
                    });
                }
            }
        }

        /**
         * Launches the UI for license plate activation entry.
         * This method will return a promise when called.
         * The promise will be rejected if 1) the DisneyID
         * instance is not initialized. Additionally, an `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#error
         *
         * return {Promise}
         * @example
         did.launchLicensePlate({conversationId : 'fcdb6a85-6911-28f3-520d-aa9096f107c7'})
         .fail(function (error) {
                console.log(error);
            });
         */
        function launchLicensePlate(opts) {
            messages.publish('lightbox.requestShowErrorOnFatal');
            var dfd = Q.defer();
            var pairingCode = opts.pairingCode;
            var unsubs = [];
            var result = {
                status: 'pending'
            };

            if (!pairingCode) {
                dfd.reject({
                    error_codes: 'MISSING_PAIRING_CODE'
                });
            } else {
                // Subscribe to messages and pause session timer
                messages.publish('session-timer.pause');
                unsubs.push(messages.subscribe('lightbox.hide', onClose));
                unsubs.push(messages.subscribe('license-plate.link-success', onSuccess));
                unsubs.push(messages.subscribe('license-plate.link-failure', onFailure));

                apiHelper.runWorkflow('licensePlate', null, {
                    activationCode: pairingCode,
                    authenticationFlow: opts.authenticationFlow,
                    loggingInfo: opts.loggingInfo,
                    showSuccessScreen: !!opts.showSuccessScreen,
                    deviceName: opts.deviceName,
                    allowSkip: !!opts.allowSkip
                }, false);
            }

            dfd.promise.finally(function() {
                // Unsubscribe from messages and unpause session timer
                messages.publish('session-timer.unpause');
                unsubs.forEach(function(unsub) {
                    unsub();
                });
            });

            return dfd.promise;

            function onSuccess() {
                result.status = 'success';
            }

            function onFailure(data) {
                result.status = 'failure';
                result.failureCode = utils.get(data, 'failureCode');
            }

            function onClose() {
                if (result.status === 'success') {
                    dfd.resolve();
                } else if (result.status === 'failure') {
                    dfd.reject({
                        error_codes: result.failureCode || 'UNKNOWN_ERROR'
                    });
                } else {
                    dfd.reject({
                        error_codes: 'CANCEL_BY_USER'
                    });
                }
            }
        }

        /**
         * Launches the API for license plate peek which retrieves databag from device link.
         * This method will return a promise when called.
         * The promise will be rejected if 1) there is no pairing code
         * 2) the pairing code is invalid
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#error
         *
         * return {Promise}
         * @example
         did.getLicensePlateDataBag({"pairingCode": 12345})
         .fail(function (error) {
                console.log(error);
            });
         */
        function getLicensePlateDataBag(opts) {

            var dfd = Q.defer();

            if (!opts.pairingCode) {
                dfd.reject({
                    error_codes: 'MISSING_PAIRING_CODE'
                });
            } else {
                licensePlate.peek(opts)
                    .then(function(response) {
                        dfd.resolve({
                            data: response
                        });
                    }, function(response) {
                        dfd.reject({
                            error_codes: response
                        });
                    });
            }

            return dfd.promise;
        }

        /**
         * Launches the UI for the adult verification workflow.
         * This method will return a promise when called. The promise will be
         * rejected if 1) the DisneyID instance is not initialized
         *
         * @memberof! DisneyIDInstance.prototype
         * @fires DisneyIDInstance#error
         *
         */
        function launchAdultVerification(initialConfig, opts) {
            var deferred = Q.defer();
            messages.publish('lightbox.requestShowErrorOnFatal');

            var options = {
                optionalConfigs: opts.optionalConfigs,
                loggingInfo: opts.loggingInfo,
                allowSkip: !!opts.allowSkip
            };

            apiHelper.runWorkflow('adultVerification', 'analytics-flow-start', options, true)
                .then(function(data) {
                    var response = {};

                    response.guest = utils.get(data, 'guest');
                    response.isAdultVerified = utils.get(data, 'isAdultVerified') || false;
                    response.maxAttemptsExceeded = utils.get(data, 'maxAttemptsExceeded') || false;
                    response.quizRequired = utils.get(data, 'quizRequired') || false;

                    deferred.resolve({
                        data: response
                    });
                });

            return deferred.promise;
        }

    }, {
        "../components/outer/config": 78,
        "../components/outer/license-plate": 80,
        "../outer/api-helper": 106,
        "./errors": 8,
        "cookie": 11,
        "messages": 21,
        "q": 1,
        "session": "session",
        "utils": 42
    }],
    8: [function(require, module, exports) {

        'use strict';

        module.exports = {
            NO_CONFIG_OPTIONS: 'No configuration options provided',
            CONFIG_SET: 'Configuration options have already been set',
            NO_CLIENT_ID: 'clientId not provided',
            NO_RESPONDER_PAGE: 'responderPage not provided',
            SESSION_ESTABLISHED: 'Session already established',
            SESSION_NOT_ESTABLISHED: 'Session not established',
            NOT_INITIALIZED: 'Not initialized',
            ALREADY_INITIALIZED: 'Already initialized',
            UNSUPPORTED_LOCALE: 'Unsupported locale',
            NOT_IMPLEMENTED: 'Not implemented',
            INVALID_ARGUMENT: 'Invalid argument',
            FAILURE_BY_DESIGN: 'FAILURE_BY_DESIGN',
            NOT_ENABLED: 'Not enabled',
            NO_CALLBACK: 'No Network Connect Callback URI passed',
            CALLBACK_MISMATCH: 'Network Connect Callback URI does not match origin',
            INVALID_COOKIE_DOMAIN: 'Provided cookieDomain is invalid',
            UNKNOWN_ERROR: 'An unknown error occurred',
            PROFILE_UPDATE_INVALID: 'PROFILE_UPDATE_INVALID'
        };


    }, {}],
    9: [function(require, module, exports) {
        'use strict';

        var utils = require('utils');

        module.exports = {
            validate: validate,
            validateExperience: validateExperience,
            getCombinedReporting: getCombinedReporting,
            getLoggingInfo: getLoggingInfo
        };

        /**
         * Validate reporting property-bag.
         *
         * @param {object} reporting
         * @returns {boolean}
         */
        function validate(reporting) {
            var nprops = 0;

            for (var prop in reporting) {
                // Prop name must contain alpha-numeric + underscore, and
                // be between 1 and 30 characters long.
                if (!/^[a-zA-Z0-9_]{1,30}$/.test(prop)) {
                    return false;
                }

                // Value must be 100 characters or less.
                if (reporting[prop].length > 100) {
                    return false;
                }

                // Must have fewer than 10 properties.
                if (++nprops > 10) {
                    return false;
                }
            }

            return true;
        }

        /**
         * Validate experience value matches expected format
         * 
         * @param {string} experience 
         */
        function validateExperience(experience) {
            if (!experience || typeof experience !== 'string') {
                return false;
            }

            if (!(/^[A-Z0-9\.\-\_]+\.EXP$/g).test(experience)) {
                return false;
            }

            return true;
        }

        /**
         * Gets the combined reporting object. If initialConfig + opts fails validation, then it will
         * fallback to initialConfig.
         *
         * @param {object} initialConfig
         * @param {object} opts
         * @return {object}
         */
        function getCombinedReporting(initialConfig, opts) {
            var overrideSourceName = utils.get(opts, 'optionalConfigs.sourceName');
            var reporting = {
                initial: utils.get(initialConfig, 'optionalConfigs.reporting') || {},
                override: utils.get(opts, 'optionalConfigs.reporting') || {}
            };

            // Pluck from deprecated sourceName field, if source is not present.
            if (!reporting.override.source && overrideSourceName) {
                reporting.override.source = overrideSourceName;
            }

            reporting.combined = utils.assign({}, reporting.initial, reporting.override);
            if (!validate(reporting.combined)) {
                return reporting.initial;
            }

            var overrideExperience = utils.get(opts, 'optionalConfigs.experience');
            var initialExperience = utils.get(initialConfig, 'optionalConfigs.experience') || utils.get(initialConfig, 'experience');

            if (overrideExperience) {
                reporting.combined.experience = overrideExperience;
            } else if (initialExperience) {
                reporting.combined.experience = initialExperience
            }

            return reporting.combined;
        }

        /**
         * Gets the loggingInfo block, given initialConfig and opts. Will also combine and
         * return the reporting object.
         *
         * @param {object} initialConfig
         * @param {object} opts
         * @return {object}
         */
        function getLoggingInfo(initialConfig, opts) {
            return {
                reporting: getCombinedReporting(initialConfig, opts),
                correlationId: opts.correlationId
            };
        }


    }, {
        "utils": 42
    }],
    10: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = '16d45c99edb';
        }());

    }, {}],
    11: [function(require, module, exports) {
        'use strict';

        var utils = require('utils');
        var messages = require('messages');
        var topHost = utils.getQueryStringParams(document.location.href).topHost || document.location.host;

        var wwwPattern = /^\.?www/;

        module.exports = {
            read: read,
            write: write,
            remove: remove,
            removeAnyBlueCookies: removeAnyBlueCookies
        };

        /**
         * Gets a cookie value from a key
         * @param  {string} key The key of the cookie property to retrieve.
         * @return {string}     The retrieved value.
         */
        function read(key) {
            return utils.getCookie(key);
        }

        /**
         * Sets a cookie.
         * @param {string}  key         The key.
         * @param {string}  value       The value.
         * @param {string}  [domain]    The domain.
         * @param {string}  [path]      The path.
         * @param {Date}    [expires]   The date the cookie expires.
         * @param {boolean} [secure]    If the cookie is secure or not.
         * @return {boolean}            Redundant.
         */
        function write(key, value, domain, path, expires, secure) {
            var deleteFromWWW = false;

            if (wwwPattern.test(domain)) {

                // Remove `www` from domain. Also attempt to remove any cookies with this key from the FQDN
                // including the `www`. The goal here is to migrate existing cookies we care about from `www`
                // to the root domain. See DIDFE-4916 for details. A similar procedure happens in `remove()`.
                domain = domain.replace(wwwPattern, '');
                deleteFromWWW = true;
            }

            utils.setCookie(key, value, domain, path, expires, secure);

            if (deleteFromWWW) {
                remove(key, 'www' + (/^\./.test(domain) ? domain : '.' + domain), path || '');
            }

            if (!domain || domain.indexOf('.') === -1) {
                messages.publish('log.send', {
                    action_name: 'log:cookie:write:baddomain',
                    success: 'false',
                    process_time: 0,
                    info: {
                        topHost: topHost,
                        domain: ('' + domain)
                    },
                    timestamp: new Date(),
                    error_codes: 'UNKNOWN_ERROR',
                    error_category: 'UNKNOWN_ERROR',
                    appid: 'DTSS-DISNEYID-UI'
                });
            }

            return true;
        }

        /**
         * Deletes a cookie.
         * @param  {string}  key      The key of of the cookie to delete.
         * @param  {string}  [domain] The domain of of the cookie to delete.
         * @param  {string}  [path]   The path of of the cookie to delete.
         * @return {boolean}           Redundant.
         */
        function remove(key, domain, path) {
            utils.deleteCookie(key, domain, path);

            // clean up from www.*. see DIDFE-4916
            if (domain && !wwwPattern.test(domain)) {
                utils.deleteCookie(key, 'www' + (/^\./.test(domain) ? '' : '.') + domain, path);
            }

            return true;
        }

        /**
         * 1) Check for BLUE and NAVY cookies
         * 2) Attempt to remove the cookie
         * 3) Return log data (if applicable)
         * 
         * @returns {object} logData
         */
        function removeAnyBlueCookies() {
            var cookiePresent = {
                    BLUE: read('BLUE'),
                    NAVY: read('oidNAVY')
                },
                hostsToCheck = utils.getCookieDomains();

            if (cookiePresent.BLUE || cookiePresent.NAVY) {
                // attempt to remove the cookie(s)
                hostsToCheck.forEach(function(host) {
                    if (cookiePresent.BLUE) {
                        remove('BLUE', host, '/');
                    }
                    if (cookiePresent.NAVY) {
                        remove('oidNAVY', host, '/');
                    }
                });

                // handle null cases
                if (cookiePresent.BLUE) {
                    remove('BLUE', null, '/');
                }
                if (cookiePresent.NAVY) {
                    remove('oidNAVY', null, '/');
                }

                var logData = {};

                if (cookiePresent.BLUE) {
                    logData.BLUE = read('BLUE') ? 'failed' : 'removed';
                }
                if (cookiePresent.NAVY) {
                    logData.NAVY = read('oidNAVY') ? 'failed' : 'removed';
                }

                return logData;
            }

            return {};
        }

    }, {
        "messages": 21,
        "utils": 42
    }],
    12: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var messages = require('messages');

            var config = {};

            module.exports = {
                getGeoIP: function() {
                    return utils.get(config, 'ip');
                },

                getCountry: function() {
                    return utils.get(config, 'country');
                },

                getTestProfileFlag: function() {
                    return utils.get(config, 'testProfileFlag');
                },

                getMarketingMode: function() {
                    return utils.getQueryStringParams(document.location.href).marketingMode;
                },

                getEpcEnabled: function() {
                    return utils.get(config, 'epcEnabled');
                },

                getShapeEnabled: function() {
                    return !!utils.get(config, 'shapeEnabled');
                },

                skipForcePasswordLogin: function() {
                    return utils.get(config, 'skipForcePasswordLogin');
                },

                init: init
            };

            function init() {
                // Listen for anyone broadcasting headers for debugging
                messages.subscribe('debug.geoIP', function(ip) {
                    config.ip = ip;
                });

                messages.subscribe('debug.country', function(country) {
                    config.country = country;
                });

                messages.subscribe('debug.testProfileFlag', function(testProfileFlag) {
                    config.testProfileFlag = testProfileFlag;
                });

                messages.subscribe('debug.clear', function() {
                    config = {};
                });

                messages.subscribe('debug.epcEnabled', function(epcEnabled) {
                    config.epcEnabled = epcEnabled;
                });

                messages.subscribe('debug.shapeEnabled', function(enabled) {
                    config.shapeEnabled = enabled;
                });

                messages.subscribe('debug.skipForcePasswordLogin', function(skipForcePasswordLogin) {
                    config.skipForcePasswordLogin = skipForcePasswordLogin;
                });
            }

            init();
        }());

    }, {
        "messages": 21,
        "utils": 42
    }],
    13: [function(require, module, exports) {
        'use strict';

        module.exports = {
            getEnvironmentFromUrl: getEnvironmentFromUrl,
            getClientIdEnvironment: getClientIdEnvironment,
            getClientIdSuffix: getClientIdSuffix,
            clientIdHasSuffix: clientIdHasSuffix
        };

        var environmentUrlMap = {
            '127.0.0.1': 'QA',
            'localhost': 'QA',
            'did.registerdisney.go.com': 'LOCAL',
            'local.registerdisney.go.com': 'LOCAL',
            'ui-local.registerdisney.go.com': 'LOCAL',
            'dev.registerdisney.go.com': 'DEV',
            'qa.registerdisney.go.com': 'QA',
            'ui-qa.registerdisney.go.com': 'QA',
            'ui-stg.dark.registerdisney.go.com': 'STAGE-DARK',
            'stg.dark.registerdisney.go.com': 'STAGE-DARK',
            'stg.registerdisney.go.com': 'STAGE',
            'stg.cdn.registerdisney.go.com': 'STAGE',
            'val.registerdisney.go.com': 'VALID',
            'ui-val.registerdisney.go.com': 'VALID',
            'dark.registerdisney.go.com': 'PROD-DARK',
            'registerdisney.go.com': 'PROD',
            'cdn.registerdisney.go.com': 'PROD'
        };

        var clientSuffixByEnv = {
            LOCAL: 'QA',
            DEV: 'DEV',
            VALID: 'VALID',
            QA: 'QA',
            'STAGE-DARK': 'STAGE',
            STAGE: 'STAGE',
            'PROD-DARK': 'PROD',
            PROD: 'PROD'
        };

        /**
         * Get running environment from URL
         * @param   {string} url
         * @returns {string}
         */
        function getEnvironmentFromUrl(url) {
            return environmentUrlMap[getHostname(url)] || 'QA';
        }

        /**
         * Get Client ID environment suffix from environment
         * @param   {string} environment
         * @returns {string}
         */
        function getClientIdEnvironment(environment) {
            return clientSuffixByEnv[environment];
        }

        /**
         * Check if Client ID has a suffix
         * @param   {clientId}   clientId
         * @returns {boolean}
         */
        function clientIdHasSuffix(clientId) {
            return !!clientId.match(/-(DEV|VALID|QA|STAGE|PROD)$/);
        }

        /**
         * Gets the Client ID environment suffix, from the specified Client ID
         * @param   {clientId}   clientId
         * @returns {boolean}
         */
        function getClientIdSuffix(clientId) {
            var env = null;

            (clientId || '').replace(/-(DEV|VALID|QA|STAGE|PROD)$/, function(notUsed, match) {
                env = match;
            });

            return env;
        }

        /**
         * Helper to get hostname from a URL
         * @param   {string} url
         * @returns {string}
         */
        function getHostname(url) {
            var parsingNode = document.createElement('a');
            parsingNode.setAttribute('href', url);
            return '' + parsingNode.hostname;
        }

    }, {}],
    14: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = {
                emittable: emittable
            };

            /**
             * Lightweight event emitter that can be attached to existing prototypes
             */

            function on(listeners, e, fn) {
                if (typeof listeners[e] === 'undefined') {
                    listeners[e] = [];
                }
                listeners[e].push(fn);
            }

            function off(listeners, e, fn) {
                if (typeof listeners[e] !== 'undefined') {
                    var len = listeners[e].length;
                    if (typeof fn === 'undefined') {
                        // Remove all listeners
                        listeners[e] = [];
                    } else {
                        // Remove only provided listener
                        while (len) {
                            if (listeners[e][len - 1] == fn) {
                                listeners[e].splice(len - 1, 1);
                            }
                            len--;
                        }
                    }
                }
            }

            function emit(listeners, e) {
                listeners = [].concat(listeners[e] || []).concat(listeners['*'] || []);

                if (listeners.length > 0) {
                    var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [];
                    listeners.forEach(function(fn) {
                        try {
                            fn.apply({
                                eventName: e
                            }, args);
                        } catch (e) {
                            setTimeout(function() {
                                throw e;
                            }, 0);
                        }
                    });
                }
            }

            function emittable(o) {
                var target = o.prototype || o,
                    listeners = {};

                target.on = function(e, fn) {
                    on.call(this, listeners, e, fn);
                };

                target.off = function(e, fn) {
                    off.call(this, listeners, e, fn);
                };

                target.emit = function() {
                    var args = Array.prototype.slice.call(arguments, 0);
                    args.unshift(listeners);
                    emit.apply(this, args);
                };

                target.clear = function() {
                    listeners = {};
                }

                return o;
            }
        }());

    }, {}],
    15: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('./event-emitter');
        }());

    }, {
        "./event-emitter": 14
    }],
    16: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            /**
             * @module exceptions
             * @type {{getKeyErrors: getKeyErrors, find: find, findAll: findAll, getErrorCodes: getErrorCodes}}
             */
            module.exports = {
                getKeyErrors: getKeyErrors,
                find: find,
                findAll: findAll,
                getErrorCodes: getErrorCodes,
                containsErrorCode: containsErrorCode
            };

            /**
             * Get key errors from response object.
             *
             * @param {Object} response
             * @return {Array<Object>}
             **/
            function getKeyErrors(response) {
                var errors = utils.get(response, 'error.errors'),
                    keyCategory = utils.get(response, 'error.keyCategory'),
                    hasNoErrors = (!errors || !keyCategory || !utils.get(errors, 'length'));

                if (hasNoErrors) {
                    return [];
                }

                return errors.filter(function(e) {
                    return e.category === keyCategory;
                });
            }

            /**
             * Method to find specific error(s) in a list of errors. The codes
             * parameter can either be a string, or a list of strings.
             *
             * @param {Array.<{}>} errors
             * @param {(string|Array.<string>)} codes
             * @return {Object}
             **/
            function find(errors, codes) {
                return findAll(errors, codes)[0];
            }

            /**
             * Method to find all errors in a list of errors, which match any
             * of the error codes provided in the codes array.
             *
             * @param {Array.<{}>} errors
             * @param {(string|Array.<string>)} codes
             * @param {(string|Array.<string>)} inputNames
             * @return {Array}
             **/
            function findAll(errors, codes, inputNames) {

                if (!Array.isArray(errors)) {
                    return [];
                }

                if (!Array.isArray(codes)) {
                    codes = [codes];
                }

                if (inputNames && !Array.isArray(inputNames)) {
                    inputNames = [inputNames];
                }

                return (errors || []).filter(function(err) {
                    return codes.indexOf(err.code) !== -1 && (!inputNames || inputNames.indexOf(err.inputName) !== -1);
                });
            }

            /**
             * Helper, to get the error_codes how we want it for logging
             *
             * @return {string} comma delimited list of error codes + input name if present
             */
            function getErrorCodes(keyErrors) {
                if (!Array.isArray(keyErrors)) {
                    return null;
                }

                return keyErrors
                    .map(function(error) {
                        return error.code + (error.inputName ? ':' + error.inputName : '');
                    });
            }

            /**
             * Helper, to check if a list of errors contain a specific error code.
             * @return {boolean}
             */
            function containsErrorCode(errors, codes) {
                return findAll(errors, codes).length > 0;
            }
        }());

    }, {
        "utils": 42
    }],
    17: [function(require, module, exports) {
        'use strict';

        var dao = require('dao');
        var utils = require('utils');
        var session = require('session');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var Q = require('q');
        var storePromise = require('./store-promise');

        module.exports = {
            get: getCompleteGuest
        };

        function getCompleteGuest(workflowName, conversationId, correlationId, reporting) {
            if (!storePromise.isGetActive) {
                storePromise.isGetActive = true;
                storePromise.guestPromise = Q.promise(function(resolve, reject) {
                    read().then(function(data) {
                        if (isCompleteGuest(data)) {
                            storePromise.isGetActive = false;

                            resolve(data);
                            return;
                        }

                        var swid = utils.get(data, 'token.swid');
                        var accessToken = utils.get(data, 'token.access_token');

                        // Transforms camel-case strings into kabab-case
                        // Example: CamelCaseString -> camel-case-string
                        var friendlyWorkflowName = workflowName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

                        var log = metrics.timed('log:get-guest-pii:' + friendlyWorkflowName, {
                            correlation_id: correlationId,
                            conversation_id: conversationId,
                            reporting: reporting
                        });

                        dao.getBySwid(swid, accessToken, conversationId, correlationId, reporting)
                            .then(function(response) {
                                if (response.isClientError()) {
                                    throw response;
                                }

                                if (!isCompleteGuest(response.data)) {
                                    var errors = getErrorsFromResponse(response);
                                    errors.error_codes.push('MISSING_GUEST_DATA');
                                    log.error(errors);
                                    reject();
                                    return;
                                }

                                var guest = utils.assign({}, response.data);
                                guest.token = utils.get(data, 'token');

                                log.success();
                                session.guest.write({
                                        guest: guest
                                    })
                                    .then(function() {
                                        storePromise.isGetActive = false;

                                        resolve(guest);
                                    })
                                    .catch(function() {
                                        storePromise.isGetActive = false;
                                    });
                            })
                            .catch(function(response) {
                                storePromise.isGetActive = false;

                                log.send(getErrorsFromResponse(response), !response.isServerError());

                                reject();
                            });
                    }, function() {
                        storePromise.isGetActive = false;

                        reject();
                    });
                });
            }

            return storePromise.guestPromise;
        }

        function getErrorsFromResponse(response) {
            var errors = exceptions.getKeyErrors(response);
            var errorCategory = utils.get(response, 'error.keyCategory');
            var errorCodes = exceptions.getErrorCodes(errors);

            return {
                error_category: errorCategory || 'NO_ERROR_CATEGORY',
                error_codes: errorCodes.length ? errorCodes : ['NO_ERROR_CODES'],
            };
        }

        function isCompleteGuest(guest) {
            return utils.get(guest, 'payload') === 'full';
        }

        function read() {
            return Q.all([
                session.token.read(),
                session.guest.read()
            ]).spread(function(token, data) {
                data.guest.token = token.token;
                return data.guest;
            });
        }


    }, {
        "./store-promise": 18,
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "q": 1,
        "session": "session",
        "utils": 42
    }],
    18: [function(require, module, exports) {
        module.exports = {
            isGetActive: false,
            guestPromise: null
        };

    }, {}],
    19: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');

            module.exports = {
                diff: profileDiff,
                merge: mergeGuest,
                generatePassword: generatePassword,
                getAge: getAge,
                getAgeband: getAgeband,
                getEntitlementsDataAttributes: getEntitlementsDataAttributes,
                removeEmptyFields: removeEmptyFields,
                removeDisallowedFields: removeDisallowedFields,
                getAddressByGuid: getAddressByGuid,
                getCollectionByType: getCollectionByType,
                getLegalCountry: getLegalCountry,
                marketingDiff: marketingDiff,
                _legalDiff: legalDiff,
                _addressesDiff: addressesDiff,
                _phonesDiff: phonesDiff,
                _merge: merge
            };

            /**
             * Get the Entitlements Data with properties
             * for blocking, and unique entitlements
             * @param {array} entitlements
             * @returns {object}
             */
            function getEntitlementsDataAttributes(entitlements) {
                if (!entitlements || !entitlements.length) {
                    return {};
                }

                var blocking = false,
                    uniqueEntitlements = [];

                entitlements.forEach(function(ent) {
                    // determine if blocking
                    var policyType = utils.get(ent, 'policyType');
                    if (policyType && policyType.toUpperCase() === 'OBLIGATION') {
                        blocking = true;
                    }

                    // add unique digitalAssetName to array
                    var assetName = utils.get(ent, 'digitalAssetName');
                    if (assetName && uniqueEntitlements.indexOf(assetName) === -1) {
                        uniqueEntitlements.push(assetName);
                    }
                });

                return {
                    blocking: blocking,
                    uniqueEntitlements: uniqueEntitlements.sort()
                };
            }

            /**
             * Get collection (addresses / phones), by type
             * @param {array} addresses
             * @param {string} type
             * @return {array}
             */
            function getCollectionByType(collection, type) {
                return collection.filter(function(item) {
                    return item.type === type;
                });
            }

            /**
             * Get address by guid
             * @param   {Array} addresses
             * @param   {String} guid
             * @returns {Object}
             */
            function getAddressByGuid(addresses, guid) {
                if (Array.isArray(addresses)) {
                    for (var i = 0; i < addresses.length; i++) {
                        if (addresses[i].addressGuid === guid) {
                            return addresses[i];
                        }
                    }
                }
            }

            /**
             * Gets the legal country for the guest
             */
            function getLegalCountry(siteConfig, profile) {
                var countryCodeProvided = utils.get(profile, 'region');
                var countryCodeDetected = utils.get(profile, 'countryCodeDetected');
                var defaultCountry = utils.get(siteConfig, 'compliance.defaultCountryCode');

                return countryCodeProvided || countryCodeDetected || defaultCountry || 'US';
            }

            /**
             * Merge fields from newGuest into originalGuest, which would be
             * modified on an update request.
             *
             * @param {object} originalGuest
             * @param {object} newGuest
             * @return {object}
             **/
            function mergeGuest(originalGuest, newGuest) {
                newGuest = utils.clone(newGuest);

                // Merge top level properties, that don't get returned on update call
                Object.keys(newGuest || {}).forEach(function(name) {
                    if (utils.get(newGuest, name) === null && utils.get(originalGuest, name)) {
                        utils.set(newGuest, name, originalGuest[name]);
                    }
                });

                // Set etag
                utils.set(originalGuest, 'etag', utils.get(newGuest, 'etag'));

                // Set recursive structures
                originalGuest.profile = merge(originalGuest.profile, newGuest.profile);
                originalGuest.displayName = merge(originalGuest.displayName, newGuest.displayName);
                originalGuest.marketing = merge(originalGuest.marketing, newGuest.marketing);
                return originalGuest;
            }

            /**
             * Helper function, to merge two guest objects.
             *
             * @param {object} origObj
             * @param {object} newObj
             **/
            function merge(origObj, newObj) {
                if (newObj === null || typeof newObj !== 'object' || Array.isArray(newObj)) {
                    return newObj;
                }

                for (var key in newObj) {
                    if (newObj.hasOwnProperty(key)) {
                        origObj = origObj || {};
                        origObj[key] = merge(origObj[key], newObj[key]);
                    }
                }

                return origObj;
            }

            /**
             * Helper function, which takes a guest and outputs only the fields
             * which are needed by the Update Profile endpoint.
             *
             * @param {object} originalGuest
             * @param {object} guest
             * @return {object}
             **/
            function profileDiff(originalGuest, guest) {
                if (typeof originalGuest === 'undefined' || typeof guest === 'undefined') {
                    return {};
                }

                var output = utils.deepTrim(utils.clone({
                    profile: (utils.objectDiff(originalGuest.profile || {}, guest.profile || {}) || {}),
                    displayName: (utils.objectDiff(originalGuest.displayName || {}, guest.displayName || {}) || {})
                }));

                // Consider to send password fields only if current password and new password
                // fields have a non empty strings
                var curPassword = (guest.password || '').trim();
                var newPassword = (guest.newPassword || '').trim();
                if (curPassword && newPassword) {
                    output.password = curPassword;
                    output.newPassword = newPassword;
                }

                // Null-out profile fields which are empty.
                Object.keys(output.profile).forEach(function(key) {
                    if (output.profile[key] === '') {
                        output.profile[key] = null;
                    }
                });

                // Null-out displayName fields which are empty.
                Object.keys(output.displayName).forEach(function(key) {
                    if (output.displayName[key] === '') {
                        output.displayName[key] = null;
                    }
                });

                addressesDiff(originalGuest, guest, output);
                phonesDiff(originalGuest, guest, output);
                marketingDiff(originalGuest, guest, output);
                legalDiff(originalGuest, guest, output);

                // Remove all top level sections which are empty
                Object.keys(output).forEach(function(name) {
                    if (typeof output[name] === 'object' && (!output[name] || Object.keys(output[name]).length === 0)) {
                        delete output[name];
                    }
                });

                return output;
            }

            /**
             * Get legal diff, for two guest objects
             * @param {object} originalGuest
             * @param {object}   guest
             * @param {object}   output
             */
            function legalDiff(originalGuest, guest, output) {
                var legalLookup = originalGuest.legalAssertions || [];
                var legalDocuments = [];

                (guest.legalAssertions || []).forEach(function(docName) {
                    if (legalLookup.indexOf(docName) === -1) {
                        legalDocuments.push(docName);
                    }
                });

                if (legalDocuments.length > 0) {
                    output.legalAssertions = legalDocuments;
                }
            }

            /**
             * Get addresses diff, for two guest objects
             * @param {object} originalGuest
             * @param {object}   guest
             * @param {object}   output
             */
            function addressesDiff(originalGuest, guest, output) {
                var adddressFields = ['line1', 'line2', 'line3', 'postalCode', 'stateProvince', 'country', 'city', 'type'];
                var addresses = utils.clone(utils.get(guest, 'profile.addresses') || []);
                var addressesOutput = [];
                var originalMap = {};

                // Build a lookup table for addresses.
                (utils.get(originalGuest, 'profile.addresses') || []).forEach(function(address) {
                    originalMap[address.addressGuid] = address;
                });

                if (utils.get(output, 'profile.addresses')) {
                    // Delete addresses from output, if the exist.
                    delete output.profile.addresses;
                }

                if (Array.isArray(addresses) && addresses.length) {
                    addresses.forEach(function(address) {
                        var guid = address.addressGuid;
                        var filteredAddress = {};

                        // Iterate over each address field, and apply it to our own output. If the field is "blank",
                        // then it will be coerced to null, to indicate to GC that it should be deleted.
                        adddressFields.forEach(function(field) {
                            filteredAddress[field] = address[field] ? address[field] : null;
                        });

                        if (typeof utils.get(originalMap, [guid, 'addressGuid'].join('.')) !== 'undefined') {
                            // If the address is an existing address, then apply the guid as well.
                            filteredAddress.addressGuid = guid;

                            // Iterate over the output we created. If the specific field is unchanged, then delete it.
                            filterDefaultKeys(filteredAddress).forEach(function(key) {
                                if (originalMap[guid][key] === address[key]) {
                                    delete filteredAddress[key];
                                }
                            });
                        }

                        // If there are any remaining fields, besides the default (preferred, addressGuid, type),
                        // then this indicates that we need to include this address in the output, otherwise
                        // the data is unchanged.
                        if (filterDefaultKeys(filteredAddress).length) {
                            addressesOutput.push(filteredAddress);
                        }
                    });

                    // If there are any addresses, then set them on the output.
                    if (addressesOutput.length) {
                        utils.set(output, 'profile.addresses', addressesOutput);
                    }
                }

                function filterDefaultKeys(map) {
                    return Object.keys(map).filter(function(key) {
                        return ['preferred', 'addressGuid', 'type'].indexOf(key) === -1;
                    });
                }
            }

            /**
             * Get phones diff, for two guest objects
             * @param {object} originalGuest
             * @param {object}   guest
             * @param {object}   output
             */
            function phonesDiff(originalGuest, guest, output) {
                if (!utils.get(output, 'profile')) {
                    return;
                }
                //Delete phones from output (will be generated below).
                if (typeof utils.get(output, 'profile.phones') !== 'undefined') {
                    delete output.profile.phones;
                }

                if (Array.isArray(utils.get(guest, 'profile.phones'))) {
                    var phones = [];
                    guest.profile.phones.forEach(function(phone) {
                        var originalPhone;
                        var changedPhone;
                        if (phone.phoneGuid && !phone.number) {
                            // Delete an existing phone without a number.
                            // Sending the phoneGuid ONLY causes GC to delete that phone entry
                            phones.push({
                                phoneGuid: phone.phoneGuid
                            });
                        } else if (phone.number && phone.type) {
                            originalPhone = getOriginalPhone(originalGuest, phone);
                            if (originalPhone) {
                                changedPhone = utils.objectDiff(originalPhone, phone);
                                // If a difference was found carry over the guid
                                if (Object.keys(changedPhone).length > 0) {
                                    changedPhone.phoneGuid = phone.phoneGuid;
                                    changedPhone.type = phone.type;
                                    phones.push(changedPhone);
                                }
                            } else {
                                phones.push(cleanObj({
                                    number: phone.number,
                                    type: phone.type,
                                    internationalPrefix: phone.internationalPrefix,
                                    countryCode: phone.countryCode
                                }));
                            }
                        }
                    });
                    // Conditionally attach to output.
                    if (phones.length) {
                        output.profile.phones = phones;
                    }
                }

                /**
                 * only return properties that are not null or undefined
                 * note: != null works the same as !== null && !== undefined
                 * @param obj
                 * @returns {{}}
                 */
                function cleanObj(obj) {
                    var rtrn = {};
                    Object.keys(obj).forEach(function(key) {
                        var tempObj;
                        if (utils.isObject(obj[key])) {
                            tempObj = cleanObj(obj[key]);
                            if (Object.keys(tempObj).length > 0) {
                                rtrn[key] = tempObj;
                            }
                        } else if (obj[key] != null) {
                            rtrn[key] = obj[key];
                        }
                    });
                    return rtrn;
                }

                function getOriginalPhone(guest, phone) {
                    var returnPhone;
                    var guestPhones = utils.get(guest, 'profile.phones');
                    if (phone.phoneGuid && guestPhones) {
                        returnPhone = guestPhones.filter(function(p) {
                            return p.phoneGuid === phone.phoneGuid;
                        })[0];
                    }
                    return returnPhone;
                }
            }

            /**
             * Get marketing diff, for two guest objects
             * @param {object} originalGuest
             * @param {object}   guest
             * @param {object}   output
             */
            function marketingDiff(originalGuest, guest, output) {
                var originalList = utils.get(originalGuest, 'marketing');
                var list = utils.get(guest, 'marketing');
                var origMap = {};

                // Turn the originalList into a map, keyed by lookupKey.
                (originalList || []).forEach(function(item) {
                    origMap[item.code] = item;
                });

                if (Array.isArray(list) && list.length) {
                    list = list.filter(function(item) {
                        return item.subscribed !== utils.get(origMap, [item.code, 'subscribed'].join('.'));
                    });

                    if (list.length) {
                        output.marketing = list;
                        return output.marketing;
                    }
                }

                return [];
            }

            function generatePassword(email) {
                var date = new Date();
                return email.substring(0, email.length > 6 ? 6 : email.length) + date.getTime() % 10000000;
            }

            /**
             * Removes NOT_ALLOWED fields from guest object
             * @param   {Object} guest
             * @param   {Object} agebandConfig
             * @return  {Object} config
             */
            function removeDisallowedFields(guest, agebandConfig, isPrimaryKid) {
                if (!isPrimaryKid && !utils.get(guest, 'profile.dateOfBirth')) {
                    return guest;
                }

                var conf = isPrimaryKid ? agebandConfig.CHILD : getAgeband(guest.profile.dateOfBirth, agebandConfig);
                var clonedGuest = utils.clone(guest);

                if (conf) {
                    Object.keys(clonedGuest.profile).forEach(function(key) {
                        // Fields not allowed are simply not included in the config. If
                        // the provided guest/profile object contains a key that does
                        // not exist in the site config, remove it otherwise the guest
                        // controller will blow up when attempting to register an
                        // account with a NOT_ALLOWED field.

                        if (!(key in conf.CREATE)) {
                            delete clonedGuest.profile[key];
                        }
                    });
                }

                var region = utils.get(guest, 'profile.region');

                if (region) {
                    utils.set(clonedGuest, 'profile.region', region);
                }

                return clonedGuest;
            }

            /**
             * Returns the ageband for the given date of birth
             * @param  {string | null} DOB
             * @param  {Object} agebandConfig
             * @param {boolean} returnsName
             * @return {string} age band
             */
            function getAgeband(DOB, agebandConfig, returnsName) {
                var age = getAge(DOB);
                var ageband;
                var agebandName;

                Object.keys(agebandConfig).forEach(function(key) {
                    var ab = agebandConfig[key];

                    if (ab && age >= ab.minAge && age <= ab.maxAge) {
                        ageband = ab;
                        agebandName = key;
                    }
                });

                return returnsName ? agebandName : ageband;
            }

            /**
             * Returns age for given date of birth
             * @param  {string} DOB ISO-8601 date of birth
             * @return {number} age
             */
            function getAge(DOB) {
                // Use Date(year, month, day) for more accurate calculations.
                // Most of the time, DOB has leading zeros. like "2016-06-25", which
                // parses to June 24th, making a child a teen, and a teen an adult one
                // day early.
                if (!/\d{4}-\d{1,2}-\d{1,2}/.test(DOB)) {
                    return;
                }

                var dateParts = DOB.split('-').map(function(d) {
                    return parseInt(d, 10);
                });
                var birthDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
                // use getUTC*() methods to avoid timezone horribleness
                var today = new Date(Date.now());
                var age = today.getUTCFullYear() - birthDate.getUTCFullYear();
                var m = today.getUTCMonth() - birthDate.getUTCMonth();

                if (m < 0 || (m === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
                    age--;
                }

                return age;
            }

            /**
             * Remove guest object properties with empty values to prevent GC from throwing errors.
             * GC also requires Phone objects to have a value for the "number" property and
             * Addresses to have at least 2 non-empty fields.
             * @param  {object} guest
             * @return {object} guest
             */
            function removeEmptyFields(guest) {
                guest = guest || {};

                for (var property in guest.profile) {
                    switch (property) {
                        case 'phones':
                            guest.profile.phones = (guest.profile.phones || []).filter(function(phone) {
                                return phone.number;
                            });
                            break;
                        case 'addresses':
                            guest.profile.addresses.forEach(function(addressType) {
                                for (var field in addressType) {
                                    if (!addressType[field]) {
                                        delete addressType[field];
                                    }
                                }
                            });
                            guest.profile.addresses = (guest.profile.addresses || []).filter(function(address) {
                                return Object.keys(address).length > 1;
                            });
                            break;
                        default:
                            if (!guest.profile[property]) {
                                delete guest.profile[property];
                            }
                    }
                }

                if (guest.displayName && !guest.displayName.proposedDisplayName) {
                    delete guest.displayName;
                }

                return guest;
            }
        }());

    }, {
        "utils": 42
    }],
    20: [function(require, module, exports) {
        (function() {
            'use strict';

            var LEVELS = {
                'ERROR': 5,
                'WARN': 4,
                'INFO': 3,
                'DEBUG': 2,
                'LOG': 1,
                'OFF': 0
            };

            var COLORS = {
                'ERROR': 'color:#FC0C1B;background-color:#FFEFEF',
                'WARN': 'color:#5B3A06;background-color:#FFFBE6',
                'INFO': 'color:#363F47;background-color:#e1e9ff',
                'DEBUG': 'color:#444;background-color:#eee',
                'LOG': 'color:#000;background-color:transparent',
                'DEFAULT': 'color:#000;background-color:transparent;font-weight:',
                'ONEID': 'color:#2887b4;background-color:transparent;font-weight:bold'
            };

            var utils = require('utils');
            var logLevel = LEVELS.INFO;
            var noop = function() {};

            var Logger = function() {
                var self = this;
                var HIGHLIGHT = (function() {
                    var ua = navigator.userAgent.toLowerCase();
                    return (ua.indexOf('firefox') > -1 || ua.indexOf('chrome') > -1);
                }());

                this.setLogLevel = setLogLevel;
                this.getLogLevel = getLogLevel;
                this.LEVELS = LEVELS;

                rebind();

                function setLogLevel(level) {
                    if (typeof LEVELS[level.toUpperCase()] === 'undefined') {
                        this.error('Invalid log level specified: ', level);
                    } else {
                        Object.keys(LEVELS).forEach(function(key) {
                            if (level.toUpperCase() === key) {
                                logLevel = LEVELS[key];
                                rebind();
                            }
                        });
                    }
                }

                function getLogLevel() {
                    var result;
                    Object.keys(LEVELS).forEach(function(key) {
                        if (logLevel === LEVELS[key]) {
                            result = key;
                        }
                    });
                    return result;
                }

                function rebind() {
                    var format = (HIGHLIGHT) ? '%c[OneID]%c %c[%s]%c: ' : '[OneID] [%s]: ';
                    for (var key in LEVELS) {
                        if (HIGHLIGHT) {
                            self[key.toLowerCase()] = (logLevel <= LEVELS[key] && logLevel !== LEVELS.OFF ?
                                window.console[key.toLowerCase()].bind(window.console, format, COLORS.ONEID, COLORS.DEFAULT, COLORS[key], key, COLORS.DEFAULT) :
                                noop);
                        } else {
                            self[key.toLowerCase()] = (logLevel <= LEVELS[key] && logLevel !== LEVELS.OFF ?
                                window.console[key.toLowerCase()].bind(window.console, format, key) :
                                noop);
                        }
                    }
                }
            };

            module.exports = new Logger();
        }());

    }, {
        "utils": 42
    }],
    21: [function(require, module, exports) {
        (function() {
            'use strict';
            var utils = require('../utils');
            var channels = {},
                uniqueIdentifier = 0;

            module.exports = {
                publish: publish,
                subscribe: subscribe,
                unsubscribe: unsubscribe
            };

            /**
             * Publishes a message
             * @param  {String} topic
             */
            function publish(topic) {
                var args = Array.prototype.slice.call(arguments, 1);

                if (typeof channels[topic] === 'undefined') {
                    return;
                }

                utils.clone(channels[topic]).forEach(function(subscriber) {
                    subscriber.callback.apply(null, args);
                });
            }

            /**
             * Subscribes to a topic
             * @param  {String}   topic
             * @param  {Function} callback
             * @return {Function} unsubscribe function, which when invoked,
             *     unsubscribes the event which was just attached.
             */
            function subscribe(topic, callback) {
                if (!(callback instanceof Function)) {
                    throw new Error('callback must be a function');
                }
                if (!channels[topic]) {
                    channels[topic] = [];
                }

                channels[topic].push({
                    callback: callback,
                    identifier: uniqueIdentifier
                });

                return (function(topic, identifier) {
                    return function() {
                        if (!Array.isArray(channels[topic])) {
                            return;
                        }

                        for (var i = 0; i < channels[topic].length; i++) {
                            if (channels[topic][i].identifier === identifier) {
                                channels[topic].splice(i, 1);
                                return;
                            }
                        }
                    };
                }(topic, uniqueIdentifier++));
            }

            /**
             * Unsubscribes from a topic
             * @param  {String}   topic
             * @param  {Function} callback
             */
            function unsubscribe(topic, callback) {
                if (!topic) {
                    channels = {};

                    return channels;
                }

                if (typeof channels[topic] === 'undefined') {
                    return;
                }

                channels[topic].forEach(function(value, index) {
                    if (value.callback === callback || !callback) {
                        channels[topic].splice(index, 1);
                    }
                });
            }
        }());

    }, {
        "../utils": 42
    }],
    22: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = Mutex;

            var utils = require('utils');
            var logger = require('logger');
            var cookie = require('cookie');

            /**
             * Mutex Class
             * @param {string} name
             */
            function Mutex(name, cookieDomain) {
                this.aquire = aquire;
                this.release = release;
                this.wait = wait;
                this.isLocked = isLocked;
                this.isLockedByUs = isLockedByUs;

                var saturateTimeout;
                var weHaveLock;
                var cookieName = 'mtx' + utils.crc32(name).toString(16);
                var cookiePath = '/';

                cookieDomain = cookieDomain || window.location.hostname;

                /**
                 * Aquire mutex
                 * @param {function} callback
                 */
                function aquire(cb) {
                    logger.log('Mutex#aquire');
                    setTimeout(function() {
                        if (isLocked()) {
                            logger.debug('mutex is locked');

                            wait(function() {
                                obtainLock(cb);
                            });

                            return;
                        }

                        obtainLock(cb);
                    }, calcRandomVariance(Mutex.RANDOM_BASE, Mutex.RANDOM_VARIANCE));

                    /**
                     * Helper function. Routine to actually obtain the lock.
                     */
                    function obtainLock() {
                        logger.debug('aquiring mutex');

                        writeMutexLoop();
                        weHaveLock = true;

                        if (typeof cb === 'function') {
                            logger.debug('calling aquire success callback');
                            cb();
                        }

                        function writeMutexLoop() {
                            writeMutex();
                            saturateTimeout = setTimeout(writeMutexLoop, Mutex.SATURATE_INTERVAL);
                        }
                    }
                }

                /**
                 * Check if mutex is locked
                 */
                function isLocked() {
                    return cookie.read(cookieName) !== null;
                }

                /**
                 * Is mutex locked by us?
                 * @returns {boolean}
                 */
                function isLockedByUs() {
                    return weHaveLock === true;
                }

                /**
                 * Release mutex
                 */
                function release() {
                    logger.log('Mutex#release');

                    if (isLockedByUs()) {
                        logger.debug('releasing mutex');

                        clearTimeout(saturateTimeout);
                        saturateTimeout = null;
                        utils.getCookieDomains().forEach(function(domain) {
                            cookie.remove(cookieName, domain, cookiePath);
                        });
                        cookie.remove(cookieName, cookieDomain, cookiePath);
                        weHaveLock = false;
                    }
                }

                /**
                 * Wait for mutex to become free
                 */
                function wait(cb) {
                    if (typeof cb !== 'function') {
                        return;
                    }

                    logger.debug('wait called');

                    // Randomly variate interval between 1 and 2 seconds;
                    var randomVariance = calcRandomVariance(Mutex.RANDOM_BASE, Mutex.RANDOM_VARIANCE);

                    logger.debug('random variance is ' + randomVariance);
                    logger.debug('wait timeout is ' + Mutex.WAIT_INTERVAL + randomVariance);

                    waitLoop();

                    function waitLoop() {
                        logger.debug('wait timeout called');

                        if (!isLocked()) {
                            logger.debug('mutex has been released');
                            return cb();
                        }

                        setTimeout(waitLoop, Mutex.WAIT_INTERVAL + randomVariance);
                    }
                }

                /**
                 * Helper function, to write mutex cookie.
                 */
                function writeMutex() {
                    logger.debug('saturating mutex');

                    var expire = new Date((new Date()).getTime() + Mutex.EXPIRE_INTERVAL);
                    cookie.write(cookieName, '0', cookieDomain, cookiePath, expire);
                }
            }

            /**
             * Calculate random variance
             * @param   {number} base
             * @param   {number} variance
             * @returns {number}
             */
            function calcRandomVariance(base, variance) {
                return Math.floor(Math.random() * variance + base);
            }

            // Interval in which the mutex cookie is re-saturated.
            Mutex.SATURATE_INTERVAL = 1000 * 5;

            // Interval in which the mutex cookie is expired.
            Mutex.EXPIRE_INTERVAL = 1000 * 20;

            // Interval to check whether or not mutex is still locked.
            Mutex.WAIT_INTERVAL = 1000 * 5;

            // Random base/floor (milliseconds).
            Mutex.RANDOM_BASE = 1000;

            // Random variance (milliseconds). Ceiling is base + variance.
            Mutex.RANDOM_VARIANCE = 1000;
        }());

    }, {
        "cookie": 11,
        "logger": 20,
        "utils": 42
    }],
    23: [function(require, module, exports) {
        (function() {
            'use strict';

            var noop = function() {};

            window.console = window.console || {};
            window.console.log = window.console.log || noop;
            window.console.error = window.console.error || noop;
            window.console.warn = window.console.warn || noop;
            window.console.debug = window.console.debug || noop;

            // DISDKAN-1092
            // ESPN-LM loads an old version of Prototype.js which stomps on the native `Array.prototype.reduce`
            // method. Use our implementation of reduce instead of the native; working with ESPN to upgrade or
            // remove Prototype.js.
            Object.defineProperty(Array.prototype, 'reduceNative', {
                enumerable: false,
                writable: true,
                value: function(callback /*, initialValue*/ ) {
                    if (this === null) {
                        throw new TypeError('Array.prototype.reduce called on null or undefined');
                    }

                    if (typeof callback !== 'function') {
                        throw new TypeError(callback + ' is not a function');
                    }

                    var t = Object(this),
                        len = t.length >>> 0,
                        k = 0,
                        value;

                    if (arguments.length == 2) {
                        value = arguments[1];
                    } else {
                        while (k < len && !k in t) {
                            k++;
                        }

                        if (k >= len) {
                            throw new TypeError('Reduce of empty array with no initial value');
                        }

                        value = t[k++];
                    }

                    for (; k < len; k++) {
                        if (k in t) {
                            value = callback(value, t[k], k, t);
                        }
                    }

                    return value;
                }
            });

        }());

    }, {}],
    24: [function(require, module, exports) {
        module.exports = {
            CLIENT: 'lightbox-client-window',
            LIGHTBOX: 'lightbox-main-iframe',
            RESPONDER: 'lightbox-responder',
            MOCK: 'lightbox-mock-api'
        };

    }, {}],
    25: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('./postmessage-transport');
        }());

    }, {
        "./postmessage-transport": 26
    }],
    26: [function(require, module, exports) {
        (function() {
            'use strict';

            /* jshint validthis:true */

            var Q = require('../../../../assets/common/js/q');
            var logger = require('logger');
            var utils = require('../utils');
            var eventEmitter = require('../event-emitter');
            var metrics = require('metrics');
            var HANDSHAKE_TIMEOUT = 60 * 1000; // 60 seconds
            var whitelist = require('./whitelist');

            module.exports = PostMessageTransport;

            var messageHandlers = {
                handshake: handleHandshake,
                handshakeAck: handleHandshakeAck,
                deferred: handleDeferred,
                message: handleMessage
            };

            PostMessageTransport.prototype.init = init;
            PostMessageTransport.prototype.registerChild = registerChild;
            PostMessageTransport.prototype.registerParent = registerParent;
            PostMessageTransport.prototype.send = send;
            PostMessageTransport.prototype.on = on;
            PostMessageTransport.prototype.emit = emit;

            function PostMessageTransport(name) {
                this.name = name;
                this.emitter = eventEmitter.emittable(Object.create(null));
                this.initialized = false;
                this.deferreds = {};
                this.targets = {};
                this.pendingTargets = {};
                this.parents = [];
            }

            function on() {
                if (this.initialized) {
                    throw 'Cannot attach new listeners once init() has been invoked';
                }

                this.emitter.on.apply(this, arguments);
            }

            function emit() {
                this.emitter.emit.apply(this, arguments);
            }

            /**
             * Initialize self, and start handshake process with parent/child windows.
             * @param {string} name [window name]
             */
            function init() {
                logger.log('PostMessageTransport#init');
                if (!this.initialized) {
                    // Add postMessage event listener
                    window.addEventListener('message', routeMessage.bind(this), false);

                    // Spin through all child/parent windows, and resolve/handshake with them.
                    resolveParents.call(this);

                    // Cleanup
                    delete this.parents;
                    this.initialized = true;
                }
            }

            /**
             * Helper method, to resolve/handshake with parent window, upon init.
             */
            function resolveParents() {
                logger.log('PostMessageTransport#resolveParents');
                var self = this;

                self.parents.forEach(function(name) {
                    var startTime = Date.now();
                    var target = self.targets[name];

                    // Send parent handshake, until it acknowledges us, or we timeout.
                    (function waitForParent() {
                        clearTimeout(target.timeout);

                        target.window.postMessage(JSON.stringify({
                            type: 'handshake',
                            name: self.name
                        }), target.origin);

                        if (target.isReady === false) {
                            if (Date.now() - startTime > HANDSHAKE_TIMEOUT) {
                                // Log error to metrics
                                logTimeout();
                                self.emit('error', 'Parent window has not responded within 60 seconds');
                            } else {
                                target.timeout = setTimeout(waitForParent, 50);
                            }
                        }
                    }());
                });
            }

            /**
             * Register a child window. Children cannot be registered after init() has been invoked.
             * @param {string} name
             * @param {string} origin
             */
            function registerChild(name, origin) {
                logger.log('PostMessageTransport#registerChild: ' + name);
                var deferred = Q.defer();
                if (this.initialized) {
                    throw 'Cannot attach child windows after init has been invoked';
                }

                // Skip targets that have already been configured.
                if (typeof this.targets[name] !== 'undefined') {
                    return;
                }

                this.targets[name] = {
                    origin: origin,
                    ready: deferred.promise
                };

                this.pendingTargets[name] = deferred;
            }

            /**
             * Register a parent window. Parents cannot be registered after init() has been invoked.
             * @param {string} name
             * @param {string} origin
             */
            function registerParent(name, origin, opts) {
                logger.log('PostMessageTransport#registerParent: ' + name)
                var deferred = Q.defer();
                if (this.initialized) {
                    throw 'Cannot attach parent windows after init has been invoked';
                }

                // Skip targets that have already been configured.
                if (typeof this.targets[name] !== 'undefined') {
                    return;
                }

                var target = {
                    window: window.parent,
                    origin: origin,
                    isReady: false,
                    ready: deferred.promise,
                    timeout: null,
                    opts: opts
                };

                this.targets[name] = target;
                this.pendingTargets[name] = deferred;
                this.parents.push(name);
            }

            /**
             * Send message to target.
             * @param {string} targetName
             * @param {string} eventName
             * @param {object} data       [[Description]]
             * @param {deferred} deferred   [[Description]]
             */
            function send(targetName, eventName, data, deferred) {
                var target = this.targets[targetName];

                if (typeof target === 'undefined') {
                    throw 'Cannot postMessage to undefined window [' + targetName + ']';
                }

                if (utils.get(target, 'opts.enforceMatchingApexDomain')) {
                    // do not message target frame if it's apex domain does not match that of this frame.
                    var toHost = utils.getLocation(target.origin).hostname;
                    var fromHost = window.location.hostname;

                    if (utils.getTLD(toHost) !== utils.getTLD(fromHost) &&
                        !whitelist.isWhitelisted(utils.getTLD(toHost))) {
                        return;
                    }
                }

                var self = this;
                var payload = {
                    type: 'message',
                    name: this.name,
                    eventName: eventName,
                    data: data
                };

                // XXX: Is there a way to simplify this, so senders don't have to explicitly pass
                // in a deferred object, in order to know when the remote is done?
                if (typeof deferred !== 'undefined') {
                    var uuid = utils.uuid();

                    this.deferreds[uuid] = deferred;
                    payload.deferredUuid = uuid;
                }

                target.ready.then(function() {
                    target.window.postMessage(JSON.stringify(payload), target.origin);
                });
            }

            /**
             * Route post-message to handler.
             * @param {object} ev [event]
             */
            function routeMessage(ev) {
                var data;

                try {
                    data = JSON.parse(ev.data);
                } catch (e) {
                    return;
                }

                if (messageHandlers.hasOwnProperty(data.type)) {
                    messageHandlers[data.type].call(this, ev, data);
                }
            }

            /**
             * Handle handshake acknowledge from parent window. We use this to resolve on our end,
             * so that messages sent to the parent get deferred after we know it's ready.
             * @param {Object} ev
             * @param {Object} data
             */
            function handleHandshakeAck(ev, data) {
                logger.log('PostMessageTransport#handleHandshakeAck');
                var self = this;
                var target = self.targets[data.name];
                if (typeof target === 'undefined') {
                    return;
                }

                clearTimeout(target.timeout);
                target.window = ev.source;
                target.isReady = true;
                self.pendingTargets[data.name].resolve();
            }

            /**
             * Handle handshake from child window. We use this to determine when a child window
             * is ready to accept messages, and also ping back so the child knows we're ready
             * to accept messages as well.
             * @param {Object} ev
             * @param {Object} data
             */
            function handleHandshake(ev, data) {
                logger.log('PostMessageTransport#handleHandshake');
                var self = this;
                var target = self.targets[data.name];
                if (typeof target === 'undefined') {
                    return;
                }

                target.window = ev.source;
                self.pendingTargets[data.name].resolve();

                target.window.postMessage(JSON.stringify({
                    type: 'handshakeAck',
                    name: self.name
                }), target.origin);
            }

            /**
             * Handle deferred resolution, from remote.
             * @param {Object}   ev
             * @param {Object}   data
             */
            function handleDeferred(ev, data) {
                if (typeof this.deferreds[data.deferredUuid] !== 'undefined') {
                    this.deferreds[data.deferredUuid][data.action].call(null, data.data);
                    delete this.deferreds[data.deferredUuid];
                }
            }

            /**
             * Handle message.
             * @param {Object}   ev
             * @param {Object}   data
             */
            function handleMessage(ev, data) {
                var self = this;

                // Emit a message if it's from a recognized source
                if (typeof data.name !== 'undefined' && typeof self.targets[data.name] !== 'undefined') {
                    var target = self.targets[data.name];

                    if (utils.get(target, 'opts.enforceMatchingApexDomain')) {
                        // drop messages from origin frame if its apex domain does not match that of this frame.
                        var fromHost = utils.getLocation(ev.origin).hostname;
                        var toHost = window.location.hostname;

                        if (utils.getTLD(fromHost) !== utils.getTLD(toHost) &&
                            !whitelist.isWhitelisted(utils.getTLD(fromHost))) {
                            return;
                        }
                    }

                    if (typeof data.deferredUuid === 'string') {
                        var dfd = Q.defer();

                        // Resolve or reject deferred on remote target.
                        dfd.promise.then(function(response) {
                            resolveDeferredOnTarget(target.window, target.origin, data.deferredUuid, 'resolve', response);
                        }, function(response) {
                            resolveDeferredOnTarget(target.window, target.origin, data.deferredUuid, 'reject', response);
                        });

                        self.emit(data.eventName, data.data, dfd);
                    } else {
                        self.emit(data.eventName, data.data);
                    }
                }
            }

            /**
             * Send message to target, telling it to resolve a deferred on their end.
             * @param {string} target
             * @param {string} origin
             * @param {string} uuid
             * @param {string} action
             * @param {object} data
             */
            function resolveDeferredOnTarget(target, origin, uuid, action, data) {
                var payload = {
                    data: data,
                    type: 'deferred',
                    deferredUuid: uuid,
                    action: action
                };

                target.postMessage(JSON.stringify(payload), origin);
            }

            function logTimeout() {
                metrics.error('log:pmt-timeout', {
                    conversation_id: utils.uuid(),
                    anon: true,
                    swid: '',
                    error_codes: 'UNKNOWN_ERROR',
                    error_category: 'UNKNOWN_ERROR',
                });
            }
        }());

    }, {
        "../../../../assets/common/js/q": 1,
        "../event-emitter": 15,
        "../utils": 42,
        "./whitelist": 28,
        "logger": 20,
        "metrics": 71
    }],
    27: [function(require, module, exports) {

        'use strict'

        module.exports = [
            "disney.com",
            "go.com",

            "abcnews.com",
            "11abcnews.com",

            "uol.com.br",
            "disneybabble.com",

            "disney.com.br",

            "espn.com",
            "espnfc.co.uk",
            "espnfc.com",
            "espnfc.com.ng",
            "espnfcasia.com",
            "espnfc.com.ar",
            "espnfc.com.au",
            "espnfc.in",
            "espnfc.mx",
            "espnfc.us",

            "espnsoccernet.com",

            "fivethirtyeight.com",

            // begin whitelist for lower environments
            "dig.com",
            "*.private",
            "6abc.com",
            "abc11.com",
            "abc13.com",
            "abc30.com",
            "abc7.com",
            "abc7chicago.com",
            "abc7news.com",
            "abc7ny.com",
            "*.network",
            "*.local",
            "disneyplanet.net",
            "adyax-dev.com",
            "diznee.net",
            "disney.com.br",
            "disney.fr",
            "disneyturkiye.com.tr",
            "disney.be",
            "disney.co.uk",
            "disney.de",
            "disney.it",
            "disney.nl",
            "disney.pl",
            "disney.es",
            "disneystore.com",
            "wdpromedia.com",
            "disneyvacations.com",
            "espnqa.com",
            "cricinfo.org",
            "espn.in",
            "espn.cl",
            "espn.co.uk",
            "espn.com.ar",
            "espn.com.au",
            "espn.com.co",
            "espn.com.mx",
            "espn.com.ve",
            "espncricinfo.com",
            "espndeportes.com",
            "cricinfo.com",
            "disneylandparis.fr",
            "ilm.com",
            "shanghaidisneyresort.com"
        ];

    }, {}],
    28: [function(require, module, exports) {

        'use strict';

        var utils = require('utils');
        var whitelist = require('./data');

        module.exports = {
            isWhitelisted: isWhitelisted
        };

        function isWhitelisted(host) {
            return utils.stringPatternMatch(host, whitelist);
        }

    }, {
        "./data": 27,
        "utils": 42
    }],
    29: [function(require, module, exports) {
        module.exports = {
            "fields": [
                "email",
                "firstName",
                "gender",
                "lastName",
                "middleName",
                "prefix",
                "suffix",
                "username",
                "languagePreference",
                "pronunciationName",
                "address.billing",
                "address.home",
                "address.other",
                "address.school",
                "address.shipping",
                "address.work",
                "phone.day",
                "phone.fax",
                "phone.mobile",
                "phone.night",
                "displayName",
                "proposedDisplayName",
                "dateOfBirth",
                "password"
            ],
            "disallowedFields": [
                "email",
                "username",
                "address.other",
                "phone.fax",
                "dateOfBirth",
                "password",
                "displayName",
                "region"
            ],
            "allowedAddressValues": [
                "line1",
                "line2",
                "line3",
                "city",
                "stateProvince",
                "postalCode",
                "country",
                "preferred"
            ],
            "allowedPhoneValues": [
                "number",
                "internationalPrefix",
                "countryCode",
                "extension",
                "preferred"
            ]
        }

    }, {}],
    30: [function(require, module, exports) {
        (function() {
            'use strict';

            var fieldsConfig = require('./fields.json');
            var ppcUtils = require('./ppc-utils.js');
            var utils = require('utils');

            module.exports = {
                getEditableAndRequiredFields: getEditableAndRequiredFields
            };

            /**
             * Gets editable and required fields from config and guest data
             * @param guest the guest object
             * @param siteConfig the site config object
             * @return {Object} formatted editable profile
             */
            function getEditableAndRequiredFields(guest, siteConfig) {
                var fields = fieldsConfig.fields.filter(function(currentField) {
                    return fieldsConfig.disallowedFields.indexOf(currentField) < 0;
                });
                var editableProfile = {
                    data: {},
                    required: {}
                };
                var profileConfigPath = 'compliance.ageBands.' + guest.profile.ageBand + '.UPDATE';
                var updatableProfileFields = utils.get(siteConfig, profileConfigPath);
                var existingProfileAddresses = ppcUtils.dictionaryFromKey(guest.profile.addresses, 'type');
                var existingProfilePhones = ppcUtils.dictionaryFromKey(guest.profile.phones, 'type');
                var addressTemplate = ppcUtils.createDataTemplate(utils.get(siteConfig, profileConfigPath + '.addresses'));
                var phoneTemplate = ppcUtils.createDataTemplate(utils.get(siteConfig, profileConfigPath + '.phones'));
                var displayNameConfig = utils.get(siteConfig, 'displayName');
                var isDisplayNameEnabled = utils.get(displayNameConfig, 'enabled');
                var type;

                fields.forEach(function(fieldValue) {
                    type = (fieldValue.split('.')[1] || '').toUpperCase();

                    if (fieldValue.indexOf('address') > -1 && updatableProfileFields.addresses) {
                        editableProfile = ppcUtils.flatten({
                            existingProfile: existingProfileAddresses,
                            template: addressTemplate,
                            config: updatableProfileFields.addresses.type,
                            allowedValues: fieldsConfig.allowedAddressValues,
                            fieldValue: fieldValue,
                            editableProfile: editableProfile,
                            type: type
                        });
                    } else if (fieldValue.indexOf('phone') > -1 && updatableProfileFields.phones) {
                        editableProfile = ppcUtils.flatten({
                            existingProfile: existingProfilePhones,
                            template: phoneTemplate,
                            config: updatableProfileFields.phones.type,
                            allowedValues: fieldsConfig.allowedPhoneValues,
                            fieldValue: fieldValue,
                            editableProfile: editableProfile,
                            type: type
                        });
                    } else if (fieldValue.toLowerCase().indexOf('displayname') > -1 && isDisplayNameEnabled) {
                        editableProfile.data[fieldValue] = utils.get(guest, 'displayName.' + fieldValue);
                    } else if (updatableProfileFields[fieldValue]) {
                        editableProfile.data[fieldValue] = utils.get(guest, 'profile.' + fieldValue);
                        editableProfile.required[fieldValue] = utils.get(updatableProfileFields, fieldValue).required || false;
                    }
                });

                return editableProfile;
            }
        }());

    }, {
        "./fields.json": 29,
        "./ppc-utils.js": 31,
        "utils": 42
    }],
    31: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = {
                dictionaryFromKey: dictionaryFromKey,
                createDataTemplate: createDataTemplate,
                flatten: flatten
            };

            /**
             * This creates a dictionary object based on a key, to create an object of key value pairs using the key as the key
             * @param {array|Object} dataSet typically an array or object
             * @param {string} key the identifier to use as the key
             * var test = [
             *   {
             *     firstName: 'blah',
             *     lastName: 'foo',
             *     type: 'bar'
             *   },
             *   {
             *     firstName: 'blah',
             *     type: 'foo'
             *   }
             * ];
             *
             * dictionaryFromKey(test, 'type');
             *
             * @returns {Object} formatted dictionary object based on key
             * {
             *   bar: {
             *     firstName: 'blah',
             *     lastName: 'foo',
             *     type: 'bar'
             *   },
             *   foo: {
             *     firstName: 'blah',
             *     type: 'foo'
             *   }
             * }
             */
            function dictionaryFromKey(dataSet, key) {
                dataSet = dataSet || [];

                return dataSet.reduceNative(function(dictionary, value) {
                    if (typeof dictionary[value[key]] === 'undefined') {
                        dictionary[value[key]] = value;
                    }

                    return dictionary;
                }, {});
            }

            /**
             * Creates an object in a pre-described format out of the editable fields in compliance
             * @param dataSet usually an array or object from compliance section of site config
             * @returns {Object} returns formatted compliance object
             */
            function createDataTemplate(dataSet) {
                dataSet = dataSet || {};

                if (dataSet && dataSet.editable === 'EDITABLE') {
                    var typesObj = dataSet.type || {};

                    return Object.keys(typesObj).reduceNative(function(typeObject, typeValue) {
                        var typeContents = typesObj[typeValue] || {};

                        typeObject[typeValue] = Object.keys(typeContents).reduceNative(function(typeContentsObject, typeContentsValue) {
                            if (typeContents[typeContentsValue].editable === 'EDITABLE' && typeContentsValue !== 'type') {
                                typeContentsObject[typeContentsValue] = null;
                            }

                            return typeContentsObject;
                        }, {});

                        return typeObject;
                    }, {});
                } else {
                    return null;
                }
            }

            /**
             * Converts complex objects into a flat object
             * {
             *   addresses: {
             *     home: {
             *       line1: null,
             *       line2: null
             *     }
             *   }
             * }
             *
             * becomes
             *
             * {
             *   address.home.line1 = null,
             *   address.home.line2 = null
             * }
             * @param args
             */
            function flatten(args) {
                var current = args.existingProfile[args.type] || args.template[args.type] || args.template.DEFAULT || null;
                var currentConfig = args.config[args.type] || args.config.DEFAULT || null;

                if (current && currentConfig) {
                    Object.keys(current).forEach(function(value) {
                        if (args.allowedValues.indexOf(value) > -1) {
                            var keyName = args.fieldValue.split('.');

                            keyName.push(value);

                            var newKey = keyName.join('.');

                            args.editableProfile.data[newKey] = current[value] || null;
                            args.editableProfile.required[newKey] = (currentConfig[value] || {}).required || false;
                        }
                    });
                }

                return args.editableProfile;
            }
        }());

    }, {}],
    32: [function(require, module, exports) {
        (function() {
            'use strict';

            var accumulator = {};

            module.exports = {
                reset: reset,
                increment: increment,
                getCount: getCount
            };

            /**
             * Increments refresh attempt counter for given state
             * @param  {Number} state enum state
             * @return {Number} current count for given state
             */
            function increment(state) {
                accumulator[state] = (accumulator[state] || 0) + 1;
                return accumulator[state];
            }

            /**
             * Resets the accumulator
             * @param {Number} state (optional) state enum to reset. If no state
             *     provided, reset all
             */
            function reset(state) {
                if (typeof state === 'undefined') {
                    accumulator = {};
                } else {
                    accumulator[state] = 0;
                }
            }

            /**
             * Gets current count for given state
             * @param  {Number} state state enum
             * @return {Number} count for given state
             */
            function getCount(state) {
                return accumulator[state] || 0;
            }
        }());

    }, {}],
    33: [function(require, module, exports) {
        var Q = require('q');
        var utils = require('utils');
        var config = require('config');

        // @TODO: Unit tests
        module.exports = function() {
            var self = this;
            var globalConfig = config.getGlobal();
            var clientId = utils.get(globalConfig, 'clientId');
            var environment = utils.get(globalConfig, 'ui.environment');

            return Q.fcall(function() {
                var options = {};
                if (utils.isEspnClientId(clientId)) {
                    options.clientIds = utils.getEspnWhitelist().map(function(clientId) {
                        return clientId + '-' + environment;
                    });
                } else {
                    options.clientIds = [clientId];
                }

                return self.read().timeout(2000);
            }).then(function(data) {
                if (utils.get(data, 'token')) {
                    // Handle signature from old/cached responder
                    var obj = {};
                    obj[clientId] = data.token;
                    return obj;
                } else {
                    return (data || {}).tokens;
                }
            });
        };

    }, {
        "config": 49,
        "q": 1,
        "utils": 42
    }],
    34: [function(require, module, exports) {
        // Based on https://github.com/coolaj86/TextEncoderLite

        function TextEncoderLite() {}

        function TextDecoderLite() {}

        module.exports = {
            TextEncoderLite: TextEncoderLite,
            TextDecoderLite: TextDecoderLite
        };

        function utf8ToBytes(string, units) {
            units = units || Infinity;
            var codePoint;
            var length = string.length;
            var leadSurrogate = null;
            var bytes = [];
            var i = 0;

            for (; i < length; i++) {
                codePoint = string.charCodeAt(i);

                // is surrogate component
                if (codePoint > 0xD7FF && codePoint < 0xE000) {
                    // last char was a lead
                    if (leadSurrogate) {
                        // 2 leads in a row
                        if (codePoint < 0xDC00) {
                            if ((units -= 3) > -1) {
                                bytes.push(0xEF, 0xBF, 0xBD);
                            }
                            leadSurrogate = codePoint;
                            continue;
                        } else {
                            // valid surrogate pair
                            codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000;
                            leadSurrogate = null;
                        }
                    } else {
                        // no lead yet

                        if (codePoint > 0xDBFF) {
                            // unexpected trail
                            if ((units -= 3) > -1) {
                                bytes.push(0xEF, 0xBF, 0xBD);
                            }
                            continue
                        } else if (i + 1 === length) {
                            // unpaired lead
                            if ((units -= 3) > -1) {
                                bytes.push(0xEF, 0xBF, 0xBD);
                            }
                            continue
                        } else {
                            // valid lead
                            leadSurrogate = codePoint;
                            continue
                        }
                    }
                } else if (leadSurrogate) {
                    // valid bmp char, but last char was a lead
                    if ((units -= 3) > -1) {
                        bytes.push(0xEF, 0xBF, 0xBD);
                    }
                    leadSurrogate = null;
                }

                // encode utf8
                if (codePoint < 0x80) {
                    if ((units -= 1) < 0) {
                        break;
                    }
                    bytes.push(codePoint);
                } else if (codePoint < 0x800) {
                    if ((units -= 2) < 0) {
                        break;
                    }
                    bytes.push(
                        codePoint >> 0x6 | 0xC0,
                        codePoint & 0x3F | 0x80
                    );
                } else if (codePoint < 0x10000) {
                    if ((units -= 3) < 0) {
                        break;
                    }
                    bytes.push(
                        codePoint >> 0xC | 0xE0,
                        codePoint >> 0x6 & 0x3F | 0x80,
                        codePoint & 0x3F | 0x80
                    );
                } else if (codePoint < 0x200000) {
                    if ((units -= 4) < 0) {
                        break;
                    }
                    bytes.push(
                        codePoint >> 0x12 | 0xF0,
                        codePoint >> 0xC & 0x3F | 0x80,
                        codePoint >> 0x6 & 0x3F | 0x80,
                        codePoint & 0x3F | 0x80
                    );
                } else {
                    throw new Error('Invalid code point');
                }
            }

            return bytes;
        }

        function utf8Slice(buf, start, end) {
            var res = '';
            var tmp = '';
            end = Math.min(buf.length, end || Infinity);
            start = start || 0;

            for (var i = start; i < end; i++) {
                if (buf[i] <= 0x7F) {
                    res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
                    tmp = '';
                } else {
                    tmp += '%' + buf[i].toString(16);
                }
            }

            return res + decodeUtf8Char(tmp);
        }

        function decodeUtf8Char(str) {
            try {
                return decodeURIComponent(str);
            } catch (err) {
                return String.fromCharCode(0xFFFD); // UTF 8 invalid char
            }
        }

        TextEncoderLite.prototype.encode = function(str) {
            var result;

            if ('undefined' === typeof Uint8Array) {
                result = utf8ToBytes(str);
            } else {
                result = new Uint8Array(utf8ToBytes(str));
            }

            return result;
        };

        TextDecoderLite.prototype.decode = function(bytes) {
            return utf8Slice(bytes, 0, bytes.length);
        };

    }, {}],
    35: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = TimeSpan;

            /**
             * @const
             */
            var SECOND_IN_MILLIS = 1000;

            /**
             * Constructor
             * @param {Date} start start date
             * @param {Date} end   end date
             */
            function TimeSpan(start, end) {
                this.start = start;
                this.end = end;
            }

            /**
             * Returns the percentage of time ellapsed between start and end,
             * given the provided current date object.
             * @param  {Date} current   current date
             * @return {Number}         0.0-1.0
             */
            TimeSpan.prototype.getPercentElapsed = function(current) {
                var endTime;

                if (!(current instanceof Date)) {
                    return null;
                }

                endTime = this.end.getTime() - this.start.getTime();
                return (current.getTime() - this.start.getTime()) / endTime;
            };

            /**
             * Returns number of seconds remaining given a current time
             * @param  {Date} current   current date
             * @return {Number}         seconds
             */
            TimeSpan.prototype.getSecondsRemaining = function(current) {
                if (!(current instanceof Date)) {
                    return null;
                }
                return (this.end.getTime() - current.getTime()) / SECOND_IN_MILLIS;
            };

            /**
             * Returns a date object representing the time at given percentage of this
             * TimeSpan
             * @param  {Number} pct 0.0-1.0
             * @return {Date}
             */
            TimeSpan.prototype.getDateAtPercent = function(pct) {
                var max = this.end.getTime() - this.start.getTime();
                return new Date(this.start.getTime() + (pct * max));
            };

            /**
             * Returns a date object representing the nearest date to the timespan end
             * that is a multiple of the given multiplier. This method will always
             * round up. Sorry for the super verbose name.
             * @param {Number} seconds must be greater than 0
             * @return {Date}
             */
            TimeSpan.prototype.getDateNearestToMultipleOfSeconds = function(seconds) {
                if (seconds <= 0) {
                    return null;
                }
                var duration = (this.end.getTime() - this.start.getTime()) / SECOND_IN_MILLIS;
                var offset = Math.ceil(duration / seconds) * seconds;
                return new Date(this.start.getTime() + (offset * SECOND_IN_MILLIS));
            };
        }());

    }, {}],
    36: [function(require, module, exports) {
        'use strict';

        module.exports = {
            // This might change in the future to
            // something more dynamic, like a value
            // in site config. If so, pull from there
            // For now, just a constant in here
            TRUST_EXPIRY: 30 * 60 * 1000, //30 minutes
            STATES: {
                low: 0,
                high: 1
            }
        };

    }, {}],
    37: [function(require, module, exports) {
        'use strict';

        module.exports = {
            isIE10: isIE10,
            isAndroidBrowser: isAndroidBrowser,
            isIOS: isIOS
        };

        var ieVersion = (function() {
            try {
                var undef;
                var v = 3;
                var div = document.createElement('div');
                var all = div.getElementsByTagName('i');

                while (
                    div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                    all[0]
                ) {;
                }

                return v > 4 ? v : undef;
            } catch (e) {
                return 0;
            }
        }());

        function isIE10() {
            return (Function('/*@cc_on return 10===document.documentMode@*/')());
        }

        function isAndroidBrowser() {
            var userAgent = navigator.userAgent.toLowerCase();
            var containsAndroid = userAgent.indexOf('android') !== -1;
            var containsChrome = userAgent.indexOf('chrome') !== -1;
            var containsWindowsPhone = userAgent.indexOf('windows phone') !== -1;

            return (containsAndroid && !containsChrome && !containsWindowsPhone);
        }

        function isIOS() {
            return /(ipad|iphone|ipod)/ig.test(navigator.userAgent);
        }

    }, {}],
    38: [function(require, module, exports) {
        'use strict';

        module.exports = crc32;

        var table = (function() {
            var table = new Array(256);

            for (var n = 0; n < table.length; n++) {
                var c = n;

                for (var k = 0; k < 8; k++) {
                    // 3988292384 === parseInt('edb88320', 16);
                    c = (c & 1) ? 3988292384 ^ (c >>> 1) : c >>> 1;
                }

                // Append to table, and coerce to unsigned
                table[n] = c >>> 0;
            }

            return table;
        }());

        function crc32(str) {
            var crc = -1;

            for (var i = 0; i < str.length; i++) {
                crc = (crc >>> 8) ^ table[(crc ^ str.charCodeAt(i)) & 0xFF];
            }

            return (crc ^ (-1)) >>> 0;
        }

    }, {}],
    39: [function(require, module, exports) {
        'use strict';

        module.exports = {
            once: once,
            memoize: memoize,
            debounceLeadingEdge: debounceLeadingEdge,
            debounce: debounceTrailingEdge
        };

        /**
         * Execute funciton exactly once, regardless of parameters passed in.
         * @param   {function} fn
         * @param   {object} context
         * @returns {mixed}
         */
        function once(fn, context) {
            var called = false;
            var returnValue;

            return function() {
                if (called === false) {
                    called = true;
                    returnValue = fn.apply(context, arguments);
                }

                return returnValue;
            };
        }

        /**
         * Memoize (cache) return value from function. An optional context can be provided
         * for the function to be called upon (useful for using memoize on class instances).
         * If a TTL is provided, then the cached return value will expire after TTL
         * milliseconds have lapsed.
         * @param   {function} fn
         * @param   {object} context
         * @param   {number} ttl
         * @returns {mixed}
         */
        function memoize(fn, context, ttl) {
            ttl = typeof ttl !== 'number' ? Infinity : ttl;
            var lookup = Object.create(null);

            return function() {
                var key = [].join.call(arguments, '-');

                if (typeof lookup[key] === 'undefined' || (lookup[key].created + ttl) < Date.now()) {
                    lookup[key] = {
                        created: Date.now(),
                        value: fn.apply(context, arguments)
                    };
                }

                return lookup[key].value;
            };
        }

        /**
         * Debounce (throttle) function call on the leading edge. The function will be
         * invoked upon the first call, and subsequent calls will be cancelled until the
         * threshold is reached.
         * @param   {function} fn
         * @param   {object} context
         * @param   {number} threshold
         * @returns {function}
         */
        function debounceLeadingEdge(fn, context, threshold) {
            var decay;
            var returnValue;

            return function() {
                var now = Date.now();

                if (typeof decay === 'undefined' || decay <= now) {
                    decay = now + threshold;
                    returnValue = fn.apply(context, arguments);

                    setTimeout(function() {
                        decay = undefined;
                        returnValue = undefined;
                    }, threshold || 0);
                }

                return returnValue;
            };
        }

        /**
         * Debounce (throttle) function call on the trailing edge. The function will be
         * invoked once the threshold has been reached, using the arguments from
         * the most recent call.
         * @param   {function} fn
         * @param   {object} context
         * @param   {number} threshold
         * @returns {function}
         */
        function debounceTrailingEdge(fn, context, threshold) {
            var timeout;
            var args;

            return function() {
                args = arguments;
                if (timeout) {
                    return;
                }

                timeout = setTimeout(function() {
                    timeout = null;
                    fn.apply(context, args);
                    args = undefined;
                }, threshold);
            };
        }

    }, {}],
    40: [function(require, module, exports) {
        // https://github.com/jfriend00/docReady

        "use strict";

        module.exports = docReady;

        var readyList = [];
        var readyFired = false;
        var readyEventHandlersInstalled = false;

        // call this when the document is ready
        // this function protects itself against being called more than once
        function ready() {
            if (!readyFired) {
                // this must be set to true before we start calling callbacks
                readyFired = true;
                for (var i = 0; i < readyList.length; i++) {
                    // if a callback here happens to add new ready handlers,
                    // the docReady() function will see that it already fired
                    // and will schedule the callback to run right after
                    // this event loop finishes so all handlers will still execute
                    // in order and no new ones will be added to the readyList
                    // while we are processing the list
                    readyList[i].fn.call(window, readyList[i].ctx);
                }
                // allow any closures held by these functions to free
                readyList = [];
            }
        }

        function readyStateChange() {
            if (document.readyState === "complete") {
                ready();
            }
        }

        function docReady(callback, context) {
            // if ready has already fired, then just schedule the callback
            // to fire asynchronously, but right away
            if (readyFired) {
                setTimeout(function() {
                    callback(context);
                }, 1);
                return;
            } else {
                // add the function and context to the list
                readyList.push({
                    fn: callback,
                    ctx: context
                });
            }
            // if document already ready to go, schedule the ready function to run
            // IE only safe when readyState is "complete", others safe when readyState is "interactive"
            if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
                setTimeout(ready, 1);
            } else if (!readyEventHandlersInstalled) {
                // otherwise if we don't have event handlers installed, install them
                if (document.addEventListener) {
                    // first choice is DOMContentLoaded event
                    document.addEventListener("DOMContentLoaded", ready, false);
                    // backup is window load event
                    window.addEventListener("load", ready, false);
                } else {
                    // must be IE
                    document.attachEvent("onreadystatechange", readyStateChange);
                    window.attachEvent("onload", ready);
                }
                readyEventHandlersInstalled = true;
            }
        }

    }, {}],
    41: [function(require, module, exports) {
        module.exports = {
            isWhitelisted: isWhitelisted,
            get: get,
            getMobile: getMobile,
            isWhitelistedMobile: isWhitelistedMobile
        };

        function get() {
            return [
                "DTSS-DEV.ESPN.WEB",
                "ESPN-AR.WEB",
                "ESPN-CL.WEB",
                "ESPN-CO.WEB",
                "ESPN-COACHES",
                "ESPN-CRICINFO.WEB",
                "ESPN-CRICKETMONTHLY.WEB",
                "ESPN-DEPORTES",
                "ESPN-ESPNAPP.WIN",
                "ESPN-ESPNARCADE",
                "ESPN-ESPNCOM",
                "ESPN-ESPNCONTESTS",
                "ESPN-ESPNRADIO",
                "ESPN-ESPNVIDEO",
                "ESPN-ESPNW",
                "ESPN-FANTASYEPRIZE",
                "ESPN-FANTASYLM",
                "ESPN-FC",
                "ESPN-INSIDER",
                "ESPN-MX.WEB",
                "ESPN-ONESITE.WEB",
                "ESPN-PASS.WEB",
                "ESPN-UK",
                "ESPN-VE.WEB",
                "ESPN-XGAMES.WEB",
                "ESPNCOM-ESPN.REGISTRATION",
                "ESPN-TEST-A.WEB",
                "ESPN-TEST-B.WEB",
                "ESPN-TEST-C.WEB",
                "ESPN-ATG-DEV.WEB",
                "DTSS-MINREG-PPC-TEST.WEB"
            ];
        }

        function getMobile() {
            return [
                'ESPN-ESPNAPP.IOS',
                'ESPN-FANTASY.IOS',
                'ESPN-ESPNAPP.AND',
                'ESPN-FANTASY.AND',
                'ESPN-FANT.STREAK.AND',
                'ESPN-FANT.STREAK.IOS'
            ];
        }

        function isWhitelisted(clientId) {
            var clientIdBase = (clientId || '').replace(/(-DEV|-QA|-STAGE|-VALID|-PROD)$/, '');
            return get().indexOf(clientIdBase) !== -1;
        }

        function isWhitelistedMobile(clientId) {
            var clientIdBase = (clientId || '').replace(/(-DEV|-QA|-STAGE|-VALID|-PROD)$/, '');
            return getMobile().indexOf(clientIdBase) !== -1;
        }

    }, {}],
    42: [function(require, module, exports) {
        'use strict';

        /**
         * @module utils
         * @type {UAParser|exports|module.exports}
         */

        var UAParser = require('ua-parser-js');
        var browserDetection = require('./browser-detection');
        var crc32 = require('./crc32');
        var textEncoding = require('../text-encoding');
        var base64js = require('base64-js');

        module.exports = {
            assign: assign,
            base64Encode: base64Encode,
            base64Decode: base64Decode,
            buildQueryString: buildQueryString,
            clone: clone,
            containsInvalidAccessTokenError: containsInvalidAccessTokenError,
            containsErrorCode: containsErrorCode,
            crc32: crc32,
            curry: require('./curry'),
            deepTrim: deepTrim,
            deleteCookie: deleteCookie,
            docReady: require('./doc-ready'), // USE: `utils.docReady(fn)`
            expires: expires,
            extend: extend,
            filterAngularProperties: filterAngularProperties,
            formatLogInfoBlock: formatLogInfoBlock,
            find: find,
            flattenArray: flattenArray,
            get: get,
            getCookie: getCookie,
            getCookieDomains: getCookieDomains,
            getErrorCodesAndCategory: getErrorCodesAndCategory,
            getEspnWhitelist: require('./espn-whitelist').get,
            getLocation: getLocation,
            getOS: getOS,
            getParentByClassName: getParentByClassName,
            getQueryStringParams: getQueryStringParams,
            getSocialProviderFromNamespace: getSocialProviderFromNamespace,
            getTLD: getTLD,
            hashString: hashString,
            heightHelper: heightHelper(),
            hideEmptySections: hideEmptySections,
            immutableAssign: immutableAssign,
            interpolate: interpolate,
            isValidDate: isValidDate,
            isAndroidBrowser: browserDetection.isAndroidBrowser,
            isBodyPositionRelative: isBodyPositionRelative,
            isEspnClientId: require('./espn-whitelist').isWhitelisted,
            isIE10: browserDetection.isIE10,
            isIOS: browserDetection.isIOS,
            isIOS8: isIOS8,
            isMobileDevice: isMobileDevice,
            isObject: isObject,
            isRetina: isRetina,
            lowercaseObjectKeys: require('../../../utils/lowercase-object-keys'),
            makeElementAccessible: makeElementAccessible,
            maskEmail: maskEmail,
            maskToken: maskToken,
            promise: require('./promise'),
            objectDiff: objectDiff,
            randomChance: randomChance,
            removeNode: removeNode,
            reorderElements: reorderElements,
            set: set,
            setCookie: setCookie,
            stringPatternMatch: stringPatternMatch,
            uniqueArray: uniqueArray,
            url: require('./url'),
            uuid: uuid
        };

        /**
         * Base-64 decode a string
         *
         * @param str
         * @returns {*|Object}
         */
        function base64Decode(str) {
            var bytes = base64js.toByteArray(str);
            return new textEncoding.TextDecoderLite('utf-8').decode(bytes);
        }

        /**
         * Base-64 encode a string
         *
         * @param {string} str
         * @return {string}
         */
        function base64Encode(str) {
            var bytes = new textEncoding.TextEncoderLite('utf-8').encode(str);
            return base64js.fromByteArray(bytes);
        }

        /**
         * Matches an input against an array of rules
         *
         * @param {string} input string
         * @param {array|string} rules
         *
         * @returns {boolean} true if input matches one of the input rules
         *
         * http://stackoverflow.com/questions/26246601/wildcard-string-comparison-in-javascript
         */
        function stringPatternMatch(str, rules) {
            if (typeof rules === 'string') {
                rules = [rules];
            }

            return (rules || []).some(function(rule) {
                // "."  => Find a single character, except newline or line terminator
                // ".*" => Matches any string that contains zero or more characters
                rule = rule.split("*").join(".*");

                // "^"  => Matches any string with the following at the beginning of it
                // "$"  => Matches any string with that in front at the end of it
                rule = "^" + rule + "$";

                //Create a regular expression object for matching string
                var regex = new RegExp(rule);

                //Returns true if it finds a match, otherwise it returns false
                return regex.test(str);
            });
        }

        /**
         * Sets a property on an object using a period delimited key string.
         * @param {Object}  obj     The object to set a property on.
         * @param {string}  chain   The period delimited key string.
         * @param {*}       value   The value to set on the property.
         * @return {Object}         The modified object.
         */
        function set(obj, chain, value) {
            var i,
                lastKey;

            if (typeof chain === 'string') {
                chain = chain.split('.');
            }

            for (i = 0, lastKey = chain.length - 1; i < lastKey; i++) {
                if (typeof obj[chain[i]] === 'undefined' || obj[chain[i]] === null) {
                    obj[chain[i]] = {};
                }

                obj = obj[chain[i]];
            }

            obj[chain[lastKey]] = value;

            return obj;
        }

        /**
         * Gets a value from a property of an object using a period delimited key
         * string.
         *
         * @param  {Object} obj     The object to get the property value from.
         * @param  {string} chain   The period delimited key string.
         * @param  {boolean} followArrays
         * @return {Object}         The value.
         */
        function get(obj, chain, followArrays) {
            if (followArrays && chain.match(/^\[(\d+)\]/)) {
                // Handle edge case, where the first link in the chain is looking
                // for an array, by wrapping the top level in an object. This
                // drastically simplifies the loop logic down below.
                chain = 'a' + chain;
                obj = {
                    'a': obj
                };
            }

            chain = chain.split('.');

            while (obj && chain.length > 0) {
                // while followArrays && chain[0] ends with '[NUMBER]'.
                while (followArrays && ('' + chain[0]).match(/.*\[\d+\]$/)) {
                    // ['a[0][1]', 'b', 'c'] becomes ['a[0]', 1, 'b', 'c']
                    // ['a[0]', 1, 'b', 'c'] becomes ['a', 0, 1, 'b', 'c']
                    ('' + chain[0]).replace(/(.*)\[(\d+)\]$/, function(match, p1, p2) {
                        chain.splice(0, 1, p1, parseInt(p2, 10));
                    });
                }

                obj = obj[chain.splice(0, 1)];
            }

            return chain.length === 0 ? obj : undefined;
        }

        /**
         * Get an object of all the query string parameters.
         * @param  {string} url
         * @return {Object}
         */
        function getQueryStringParams(url) {
            var params = {},
                qs;

            if (url) {
                qs = url.split('?')[1];
            } else {
                qs = window.location.search.substr(1);
            }

            if (qs) {
                qs.split('&').forEach(function(keyVal) {
                    keyVal = keyVal.split('=');
                    params[decodeURIComponent(keyVal[0])] = decodeURIComponent(keyVal[1]);
                });
            }

            return params;
        }

        /**
         * Builds a query string from an object.
         * If any property is an object, it is converted to a JSON string.
         * It will not include properties with falsey values.
         * @param  {Object} props A property object.
         * @return {string}       A query string.
         */
        function buildQueryString(props) {
            var key,
                value,
                pairs = [];

            for (key in props) {
                if (!props.hasOwnProperty(key) || !props[key]) {
                    continue;
                }

                value = encodeURIComponent(
                    typeof props[key] === 'object' ? JSON.stringify(props[key]) : props[key]
                );

                pairs.push(key + '=' + value);
            }

            return pairs.join('&');
        }

        /**
         * Gets a cookie value from a key.
         * @param  {string} key The key of the cookie property to retrieve.
         * @return {string}     The retrieved value.
         */
        function getCookie(key) {
            if (!key) {
                return null;
            }

            return document.cookie.replace(new RegExp('(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1') || null;
        }

        /**
         * Sets a cookie.
         * @param {string}  key         The key.
         * @param {string}  value       The value.
         * @param {string}  [domain]    The domain.
         * @param {string}  [path]      The path.
         * @param {Date}    [expires]   The date the cookie expires.
         * @param {boolean} [secure]    If the cookie is secure or not.
         * @return {boolean}            Redundant.
         */
        function setCookie(key, value, domain, path, expires, secure) {
            var cookie;

            if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
                return false;
            }

            cookie = key + '=' + value;

            if (expires && expires.constructor === Date) {
                cookie += '; expires=' + expires.toUTCString();
            }

            if (domain) {
                cookie += '; domain=' + domain;
            }

            if (path) {
                cookie += '; path=' + path;
            }

            if (secure) {
                cookie += '; secure';
            }

            document.cookie = cookie;

            return true;
        }

        /**
         * Deletes a cookie.
         * @param  {string}  key      The key of of the cookie to delete.
         * @param  {string}  [domain] The domain of of the cookie to delete.
         * @param  {string}  [path]   The path of of the cookie to delete.
         * @return {boolean}           Redundant.
         */
        function deleteCookie(key, domain, path) {
            document.cookie = encodeURIComponent(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
                (domain ? '; domain=' + domain : '') + (path ? '; path=' + path : '');

            return true;
        }

        /**
         * Generates a UUID
         * @return {string} uuid
         */
        function uuid() {
            return s4() + s4() + '-' +
                s4() + '-' +
                s4('4') + '-' +
                s4((Math.floor(Math.random() * 10) % 4 + 8).toString(16)) + '-' +
                s4() + s4() + s4();
        }

        /**
         * Generates a 4 character long hex string.
         * @param  {string} [sub] A hex value to sub the first 4 or less characters.
         * @return {string}       A 4 character long hex string.
         */
        function s4(sub) {
            var hex = Math.floor(Math.random() * 0xFFFF).toString(16),
                i = 4 - hex.length;

            for (; i > 0; i--) {
                hex = '0' + hex;
            }

            sub = ('' + sub).substring(0, 4);

            if (!isNaN(parseInt(sub, 16)) && sub.length) {
                return sub + hex.substr(sub.length);
            }

            return hex;
        }

        /**
         * Clones an object
         * @param  {Object} obj source object
         * @return {Object}
         */
        function clone(obj) {
            var temp;

            if (obj === null || typeof(obj) !== 'object') {
                return obj;
            }

            // test for date and clone based on source getTime to avoid outputting date w/current time
            if (Object.prototype.toString.call(obj) === '[object Date]') {
                return new Date(obj.getTime());
            }

            try {
                temp = new obj.constructor();
            } catch (e) {
                return;
            }

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    temp[key] = clone(obj[key]);
                }
            }
            return temp;
        }

        /**
         * Recursive function which performs a deep-trim on objects, arrays, strings.
         * @param   {mixed}   value string, object, array
         * @returns {mixed}
         */
        function deepTrim(value) {
            if (value !== null && typeof value === 'object') {
                // If the value is an object, then iterate over it and apply deepTrim()
                // recursively. Note that arrays are objects.
                Object.keys(value).forEach(function(name) {
                    value[name] = deepTrim(value[name]);
                });
            } else if (typeof value === 'string') {
                // If the value is a string, trim it.
                return value.trim();
            }

            return value;
        }

        /**
         * Removes a given node from the DOM.
         * @param {DOMNode} node A DOM node.
         */
        function removeNode(node) {
            node.parentNode.removeChild(node);
        }

        /**
         * Merges objects together into a new object
         * @param  {...Object} obj
         * @return {Object}
         */
        function immutableAssign(obj) {
            var args = [{}].concat([].slice.call(arguments));
            return assign.apply(null, args);
        }

        /**
         * @param  {DOMNode} node
         * @param  {String} className
         */
        function getParentByClassName(node, className) {
            var parents = [];
            var parent = node.parentNode;
            while (parent && parent.tagName && parent.getAttribute) {
                parents.push(parent);
                parent = parent.parentNode;
            }
            return parents.filter(function(element) {
                return element.classList.contains(className);
            })[0];
        }

        /**
         * Reorders dom elements using sequenceKey attributes.
         * Reordered elements will be placed in the dom where
         * the last element was found
         * @param {String} selector to uniquely identify the container
         * @param {String} sequence a delimited list of sequenceKeys
         * @param {String|RegExp} separator defaults to `/\s/`
         */
        function reorderElements(selector, sequence, separator, dom) {
            separator = separator === undefined ? /\s+/ : separator;

            var container;
            var fragment = (dom && dom.ownerDocument || document).createDocumentFragment();

            var elements = sequence.split(separator).map(function(key) {
                return (dom || document.body).querySelector(selector + ' [sequenceKey=' + key + ']');
            }).filter(function(element) {
                return element;
            });

            elements.forEach(function(field, i, array) {
                var spot;

                if (field) {
                    container = container || field.parentNode;

                    if (field === array[array.length - 1] && container) {
                        spot = document.createTextNode(' ');
                        container.replaceChild(spot, field);
                    }

                    fragment.appendChild(field);

                    if (spot && spot.parentNode) {
                        spot.parentNode.replaceChild(fragment, spot);
                    }
                }
            });
        }

        /**
         * Extends an object
         * @param  {Object} target
         * @return {Object}
         */
        function assign(target) {
            if (target == null) { // null-y
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);

            var hasPendingException = false;
            var pendingException;

            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource == null) { // null-y
                    continue;
                }
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    try {
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    } catch (e) {
                        if (!hasPendingException) {
                            hasPendingException = true;
                            pendingException = e;
                        }
                    }
                }

                if (hasPendingException) {
                    throw pendingException;
                }
            }
            return to;
        }

        /**
         * Returns the expiration date for given date object and ttl
         * @param {Date} date
         * @param  {Number} ttl
         * @return {Date} expiration date
         */
        function expires(date, ttl) {
            var out = new Date(date);
            if (
                isNaN(parseInt(ttl, 10)) ||
                ttl < 0 ||
                !(date instanceof Date)
            ) {
                return null;
            }
            out.setSeconds(date.getSeconds() + ttl);
            return out;
        }

        /**
         * Determines whether or not a date object is valid
         * @param  {Date}  d
         * @return {Boolean}
         */
        function isValidDate(d) {
            return (d instanceof Date) && !isNaN(d.getTime());
        }

        /**
         * An array like object that removes all standard methods for adding to the
         * array and defines an addOnce method to only allow unique items to be
         * pushed
         * @return {Array}
         */
        function uniqueArray() {
            var r = [];
            var push = r.push;
            r.push = r.unshift = r.splice = function() {
                throw 'not yet implemented for uniqueArray';
            };
            var unique = function(item) {
                return r.indexOf(item) === -1;
            };
            r.addOnce = function(item, callBack) {
                if (unique(item)) {
                    push.call(r, item);
                    if (typeof callBack === 'function') {
                        callBack();
                    }
                }
                return r.length;
            };
            return r;
        }

        /**
         * Calculate difference in between previous and current objects. Does
         * not perform diff on arrays (pass-thru of current value), does not do
         * a deep clone.
         *
         * @param {object} previous
         * @param {object} current
         * @return {object}
         **/
        function objectDiff(previous, current) {
            var changes = {};

            for (var name in current) {
                if (current.hasOwnProperty(name)) {
                    if (previous === null || typeof previous !== 'object' || !previous.hasOwnProperty(name)) {
                        changes[name] = current[name];
                    }

                    var bothObjects = (
                        current[name] !== null &&
                        previous[name] !== null && !Array.isArray(current[name]) && !Array.isArray(previous[name]) &&
                        typeof current[name] === 'object' &&
                        typeof previous[name] === 'object'
                    );

                    if (bothObjects) {
                        var differences = objectDiff(previous[name], current[name]);
                        if (Object.keys(differences).length > 0) {
                            changes[name] = differences;
                        }
                    } else if (previous[name] !== current[name] || Array.isArray(current[name])) {
                        changes[name] = current[name];
                    }

                    if (previous[name] === null && current[name] === '') {
                        delete changes[name];
                    }
                }
            }

            return changes;
        }

        /**
         * Recursive function, which removes all "Angular" properties from an object (ie
         * property names which begin with "$").
         * @param {object} obj
         * @return {object}
         */
        function filterAngularProperties(obj) {
            if (Array.isArray(obj)) {
                obj.forEach(filterAngularProperties);
            } else if (obj !== null && typeof obj === 'object') {
                Object.keys(obj).forEach(function(key) {
                    if (key[0] === '$') {
                        delete obj[key];
                    } else {
                        filterAngularProperties(obj[key]);
                    }
                });
            }

            return obj;
        }

        /**
         * Makes an element tabbable and clickable via enter/return
         * @param {jqLite|object} [element]
         * @param {function} [callback]
         */
        function makeElementAccessible(element, callback) {
            element.attr('tabindex', '0');
            element.on('keypress', function(event) {
                if (event.keyCode === 32 || event.keyCode === 13) {
                    callback(event);
                }
            });
        }

        function getOS() {
            try {
                return new UAParser(navigator.userAgent).getOS();
            } catch (e) {
                return navigator.platform;
            }
        }

        function isIOS8() {
            return /(iphone|ipod|ipad).* os 8_/.test(navigator.userAgent.toLowerCase());
        }

        function isRetina() {
            //https://github.com/imulus/retinajs/blob/master/src/retina.js
            var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';

            return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
        }

        /**
         * Checks if user is using mobile device or not
         * @returns {Boolean}
         */
        function isMobileDevice() {
            var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };

            return isMobile.any();
        }

        /**
         * Is the body position relative? This method will help you find out.
         * @returns {boolean}
         */
        function isBodyPositionRelative() {
            /* istanbul ignore next */
            return window.getComputedStyle(document.body).getPropertyValue('position') === 'relative';
        }

        /**
         * Returns an object containing error codes and category, formatted for metrics
         *
         * @param {Object} error Guest controller error object
         * @returns {Object}
         */
        function getErrorCodesAndCategory(error) {
            return {
                category: error.keyCategory,
                codes: (error.errors || []).map(function(e) {
                    return e.code;
                }).join(',')
            }
        }

        /**
         * Returns true if a guest controller error object contains an invalid access token error
         *
         * @returns {boolean}
         */
        function containsInvalidAccessTokenError(error) {
            return containsErrorCode(error, 'AUTHORIZATION_INVALID_OR_EXPIRED_TOKEN');
        }

        /**
         * Returns true if a guest controller error object contains the specified error code
         *
         * @returns {boolean}
         */
        function containsErrorCode(error, errorCode) {
            return error && (error.errors || []).some(function(e) {
                return e.code === errorCode;
            });
        }

        /**
         * Builds out the info block for our metrics design
         *
         * @param {object} info The info block to munge
         * @returns {string}
         */
        function formatLogInfoBlock(info) {
            info = info || {};
            var items = [];
            Object.keys(info).forEach(function(key) {
                var i = key;
                var val = info[key];

                if (val || typeof val === 'number' || typeof val === 'boolean') {
                    var data = Array.isArray(info[key]) ? info[key].join(',') : info[key].toString();
                    i += ('(' + data + ')');
                }
                items.push(i);
            });
            return items.join(',');
        }

        // @TODO: Comment
        function heightHelper() {
            return {
                lock: lock,
                unlock: unlock,
                measure: measure
            };

            function lock(element, duration, cb) {
                element.classList.add('no-animate');
                element.style.height = measure(element) + 'px';
                setTimeout(function() {
                    element.classList.remove('no-animate');
                    (cb || function() {})();
                }, 0);
                if (duration) {
                    setTimeout(function() {
                        unlock(element);
                    }, duration);
                }
            }

            function unlock(element) {
                element.classList.add('no-animate');
                element.style.height = null;
                setTimeout(function() {
                    element.classList.remove('no-animate');
                }, 0);
            }

            function measure(element) {
                var r = element.offsetHeight;
                if (!r) {
                    element.classList.add('state-calculating');
                    r = element.offsetHeight;
                    element.classList.remove('state-calculating');
                }
                return r;
            }
        }

        /**
         * Returns the input string with all but the first six characters masked
         *
         * @param {String} value
         * @returns {String}
         */
        function maskToken(value) {
            return (typeof value === 'string' ? value.substring(0, 6) + '...' : undefined);
        }

        /**
         * Returns masked email value, replacing part of the string with ('*')
         *
         * @param {String} email
         * @returns {String}
         */
        function maskEmail(email) {
            email = '' + email;
            var output = '';
            var index = email.indexOf('@');
            var firstHalf = email.substring(0, index);
            var secondHalf = email.substring(index);

            if (firstHalf.length > 4) {
                output += firstHalf.substring(0, 3);
            } else {
                output += firstHalf[0];
            }
            output += '****';
            output += secondHalf;
            return output;
        }

        /**
         * Returns a crc32 hash
         *
         * @param {string} value
         * @returns {string}
         */
        function hashString(value) {
            return (typeof value === 'string' && value.length ? crc32(value).toString(16) : undefined);
        }

        /**
         * Get social provider name from namespace
         * @param   {string} namespace
         * @returns {string} name
         */
        function getSocialProviderFromNamespace(namespace) {
            var NAMESPACE_TO_PROVIDER_NAME = {
                'AM-FACEBOOK': 'facebook',
                'AM-GOOGLE': 'google'
            };

            return NAMESPACE_TO_PROVIDER_NAME[namespace];
        }

        /**
         * Backbone style extend
         *
         * @param {object} protoProps prototype properties
         * @param {object} staticProps static properties
         * @returns {function}
         *
         * https://gist.github.com/mcordingley/9918508
         */
        function extend(protoProps, staticProps) {
            var parent = this,
                extended, prop;

            // Object to stand in the prototype chain
            var extender = function() {};
            extender.prototype = this.prototype;

            // Get a reference to the new class's constructor function or make one
            if (protoProps && protoProps.hasOwnProperty('constructor')) {
                extended = protoProps.constructor;
            } else {
                extended = function() {
                    return parent.apply(this, arguments);
                };
            }

            // Mix static properties into the new object definition
            for (prop in parent) {
                if (parent.hasOwnProperty(prop)) {
                    extended[prop] = parent[prop];
                }
            }

            if (staticProps) {
                for (prop in staticProps) {
                    if (staticProps.hasOwnProperty(prop)) {
                        extended[prop] = staticProps[prop];
                    }
                }
            }

            // Inherit from the parent class
            extended.prototype = new extender();
            extended.__super__ = parent.prototype;

            // Mix prototypical properties into the new object definition
            if (protoProps) {
                for (prop in protoProps) {
                    if (protoProps.hasOwnProperty(prop)) {
                        extended.prototype[prop] = protoProps[prop];
                    }
                }
            }

            // Reset the constructor property
            extended.prototype.constructor = extended;

            return extended;
        };

        function getTLD(host) {
            var m = host.match(/[^.]+(?:\.com?(?:\.[a-z]{2})?|(?:\.[a-z]+))?$/i);
            if (m && m.length) {
                return m[0].replace(/:[0-9]+$/, '');
            }
        }

        function getLocation(href) {
            var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
            return match && {
                protocol: match[1],
                host: match[2],
                hostname: match[3],
                port: match[4],
                pathname: match[5],
                search: match[6],
                hash: match[7]
            }
        }

        function isObject(obj) {
            return Object.prototype.toString.call(obj) === '[object Object]';
        }

        /**
         * Returns an array of domains in which cookies should be deleted from. It iterates from the host
         * domain, up to the "second-level" domain, and pushes each domain into an array along the way.
         * @returns {array}
         */
        function getCookieDomains() {
            var host = '' + window.location.hostname;
            var hostParts = host.split('.');
            var topDomain = getTLD(host);
            var domains = [];

            domains.push(host);

            while (host !== topDomain) {
                hostParts.shift();
                host = hostParts.join('.');
                domains.push(host);
            }

            return domains;
        }

        /**
         * Returns true based on random chance.
         * @param {Number} percentage - Number between 0 and 1 where 1 is a 100% chance of returning true.
         * @returns {boolean}
         */
        function randomChance(percentage) {
            return Math.random() <= percentage
        }

        /**
         * Finds all sections elements. Adds 'section-empty' classname to those without
         * child elems and removes that 'section-empty' from those with child elems
         */
        function hideEmptySections() {
            Array.prototype.forEach.call(document.querySelectorAll('section'), function(element) {
                element.classList[element.childNodes.length ? 'remove' : 'add']('section-empty');
            });
        }

        /*
         * es6 Array.prototype.find method. This is based off the polyfill on MDN
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
         * */
        function find(arr, predicate) {
            if (arr === null || arr === undefined) {
                throw new TypeError('Find called on null or undefined');
            }

            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            var list = Object(arr);
            var length = list.length;
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(null, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        }

        /**
         * Flattens a multidimensional array.
         * @param arr {array}
         * @returns {array}
         */
        function flattenArray(arr) {
            return arr.reduceNative(function(result, value) {
                if (Array.isArray(value)) {
                    return result.concat(flattenArray(value));
                }
                return result.concat(value);
            }, []);
        }

        var INTERPOLATION_PATTERN = /\$\{(.+?)\}/g;

        /**
         * Interpolates replacement tokens
         *
         * @param {String} value
         * @return {String}
         */
        function interpolate(dictionary, value) {
            var match;
            while ((match = INTERPOLATION_PATTERN.exec(value)) !== null) {
                var replacement = get(dictionary, match[1]);
                value = value.replace(match[0], replacement || '');
            }

            return value;
        }

    }, {
        "../../../utils/lowercase-object-keys": 111,
        "../text-encoding": 34,
        "./browser-detection": 37,
        "./crc32": 38,
        "./curry": 39,
        "./doc-ready": 40,
        "./espn-whitelist": 41,
        "./promise": 43,
        "./url": 44,
        "base64-js": 3,
        "ua-parser-js": 6
    }],
    43: [function(require, module, exports) {
        'use strict';

        module.exports = {
            complete: complete,
            timeout: timeout,
            cache: cache
        };

        /**
         * Execute callback when promise succeeds or fails. This differs from promise.finally(),
         * in that it will return the argument passed into the success/failure callback. Useful
         * for cases where you only need to perform one action on the result of a promise, and
         * failure/success isn't important (but you do need the arguments).
         * @param {Promise} promise
         * @param {function} callback
         */
        function complete(promise, callback) {
            promise.then(callback, callback);
        }

        /**
         * Reject promise after ttl milliseconds, if it has not already resolved or rejected.
         * @param {Promise}   dfd
         * @param {number} ttl
         */
        function timeout(dfd, ttl) {
            var args = [].slice.call(arguments, 2);

            setTimeout(function() {
                dfd.reject.apply(dfd, args);
            }, ttl);
        }

        /**
         * Curry, which transparently bundles multiple function calls into one actual call, while
         * the original call is still outstanding and the cache TTL hasn't expired.
         * @param   {function} fn
         * @param   {Object} context
         * @param   {number} ttl
         * @returns {function}
         */
        function cache(fn, context, ttl) {
            var promise = null;
            ttl = typeof ttl !== 'number' ? 0 : ttl;

            return function() {
                if (promise === null) {
                    promise = fn.apply(context, arguments);
                    promise.finally(function() {
                        setTimeout(function() {
                            promise = null;
                        }, ttl);
                    });
                }

                return promise;
            };
        }

    }, {}],
    44: [function(require, module, exports) {
        'use strict';

        var anchor = document.createElement('a');

        module.exports = {
            getHostName: getter('hostname')
        };

        function getter(prop) {
            return function(url) {
                anchor.href = url;
                return anchor[prop];
            };
        }

    }, {}],
    45: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * Attach a listener to the provided event name
             * @param {string} ev Event name
             * @param {function} fn Listener function
             */
            function on(ev, fn) {
                this.listeners[ev] = this.listeners[ev] || [];

                if (typeof fn === 'function') {
                    this.listeners[ev].push(fn);
                }
            }

            /**
             * Remove all occurrences of provided listener from event name.
             * If no listener is provided, all listeners are removed from
             * specified event.
             * @param {string} ev Event name
             * @param {function} fn Optional listener function
             */
            function off(ev, fn) {
                if (typeof this.listeners[ev] !== 'undefined') {
                    if (typeof fn === 'undefined') {
                        // Clear all
                        this.listeners[ev] = [];
                    } else {
                        // Remove all occurrences of this function
                        var len = this.listeners[ev].length;
                        while (len) {
                            if (fn === this.listeners[ev][len - 1]) {
                                this.listeners[ev].splice(len - 1, 1);
                            }
                            len--;
                        }
                    }
                }
            }

            /**
             * Emit an event of the specified name, executing all registered listeners.
             * If any additional parameters are provided, they will be passed along to
             * the listeners as arguments.
             * @param {string} ev Event name
             */
            function emit(ev) {
                if (typeof this.listeners[ev] !== 'undefined' && this.listeners[ev].length > 0) {
                    var args = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
                    this.listeners[ev].forEach(function(fn) {
                        fn.apply({}, args);
                    });
                }
            }

            function chainableMethod(fn) {
                return function() {
                    this.listeners = this.listeners || {};
                    fn.apply(this, arguments);
                    return this;
                };
            }

            module.exports = {
                extend: function(obj) {
                    obj.prototype.on = chainableMethod(on);
                    obj.prototype.off = chainableMethod(off);
                    obj.prototype.emit = chainableMethod(emit);
                }
            };
        }());

    }, {}],
    46: [function(require, module, exports) {

        'use strict';

        var utils = require('utils');

        module.exports = WorkflowHistory;

        function WorkflowHistory(workflow, properties) {
            this.history = [];

            if (workflow) {
                this.track(workflow, properties);
            }
        }

        WorkflowHistory.prototype.track = function(workflow, properties) {
            var self = this;

            properties = properties || [];

            workflow.on('step-start', function(data) {
                self.history.push({
                    workflowName: workflow.name,
                    stepName: data.name,
                    data: getValues(data.data, properties),
                    started: Date.now(),
                    properties: properties
                });
            });
        };

        WorkflowHistory.prototype.getTrail = function() {
            var out = '';

            try {
                return this.history.reduceNative(function(acc, curr) {
                    return acc + curr.workflowName + '/' + curr.stepName + '>';
                }, '') || '';
            } catch (e) {}

            return out;
        };

        WorkflowHistory.prototype.getData = function() {
            var self = this;
            var workflowValues = {};
            var out = '';

            try {
                out = self.history.reduceNative(function(acc, curr) {
                    workflowValues[curr.workflowName] = workflowValues[curr.workflowName] || getValues({}, curr.properties);
                    var delta = utils.objectDiff(workflowValues[curr.workflowName], curr.data);

                    if (Object.keys(delta).length > 0) {
                        acc += JSON.stringify(delta);
                        workflowValues[curr.workflowName] = curr.data;
                    }

                    acc += '>';

                    return acc;
                }, '') || '';
            } catch (e) {}

            return out;
        };

        function getValues(data, props) {
            var values = {};
            props.forEach(function(prop) {
                var raw = utils.get(data, prop.prop);
                var value = typeof prop.format === 'function' ? prop.format(raw) : raw;
                values[prop.prop] = utils.clone(value);
            });

            return values;
        }

    }, {
        "utils": 42
    }],
    47: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var logger = require('logger');
            var Emitter = require('./emitter');

            function Workflow(opts) {
                opts = opts || {};
                this.current = null;
                this.steps = [];
                this.names = [];
                this.handlers = [];
                this.callbacks = {};
                this.invokedSteps = [];
                this.name = opts.name || 'Anonymous';

                logger.debug('Workflow created: ', this.name);
            }

            Emitter.extend(Workflow);

            Workflow.prototype.step = function(name, step) {
                var workflow = this;
                step.internalName = [workflow.name, name].join('.');
                step.name = name;

                this.names.push(name);
                this.steps.push(step);
                return configureHandlers.call(this, step);
            };

            function configureHandlers(step) {
                var workflow = this;
                var handlers = {};
                this.handlers.push(handlers);

                return {
                    success: function(next) {
                        handlers.success = function(res) {
                            if (this.step) {
                                step = this.step;
                                workflow = this.workflow;
                            }
                            workflow.run((typeof next === 'function' ? next.apply(step) : next), res);
                        };
                        return this;
                    },
                    failure: function(next) {
                        handlers.failure = function(res) {
                            if (this.step) {
                                step = this.step;
                                workflow = this.workflow;
                            }
                            workflow.run((typeof next === 'function' ? next.apply(step) : next), res);
                        };
                        return this;
                    },
                    cancel: function(next) {
                        handlers.cancel = function(res) {
                            if (this.step) {
                                step = this.step;
                                workflow = this.workflow;
                            }
                            workflow.run((typeof next === 'function' ? next.apply(step) : next), res);
                        };
                        return this;
                    }
                };
            }

            Workflow.prototype.run = function(name, data) {
                var self = this;

                // If no name is provided, we will start with the first step
                var index = this.names.indexOf(name);
                if (name === null || typeof name === 'undefined' || index === -1) {
                    index = 0;
                }

                var step = this.steps[index];
                var handlers = this.handlers[index];

                if (['done', 'success', 'failure', 'cancel'].indexOf(name) > -1) {
                    return this.emit(name, data);
                }

                self.emit('step-start', {
                    name: step.name,
                    workflow: self,
                    data: data
                });

                logger.debug('Running step: ', step.internalName);
                logStepData(data);
                this.invokedSteps.push(name);
                data = data || {};

                var promise = step.start(data, this.name, {
                    emit: this.emit.bind(this)
                });

                promise.then(function() {
                    emitStepComplete();
                    handlers.success.apply({
                        workflow: self,
                        step: step
                    }, arguments);
                });

                promise.catch(function() {
                    emitStepComplete();
                    handlers.failure.apply({
                        workflow: self,
                        step: step
                    }, arguments);
                });

                promise.progress(function() {
                    emitStepComplete();
                    handlers.cancel.apply({
                        workflow: self,
                        step: step
                    }, arguments);
                });

                this.current = step;

                function emitStepComplete() {
                    self.emit('step-end', {
                        name: step.name,
                        workflow: self,
                        data: data
                    });
                }
            };

            Workflow.prototype.mock = function(name, opts) {
                var index = this.names.indexOf(name);
                var target = this.steps[index];
                var self = this;
                var step;

                if (index === -1) {
                    return;
                }

                if (typeof opts === 'string') {
                    opts = {
                        result: opts
                    };
                }

                step = new(require('./step').extend({
                    execute: function() {
                        var self = this;
                        setTimeout(function() {
                            if (typeof opts === 'function') {
                                opts.apply(self, [target]);
                            } else {
                                self.data = utils.assign(self.data, opts.data || {});
                                self[opts.result]();
                            }
                        }, 0);
                    }
                }))();

                this.steps[index] = step;

                ['success', 'failure', 'cancel'].forEach(function(handler) {
                    if (!self.handlers[index][handler]) {
                        return;
                    }

                    self.handlers[index][handler] = self.handlers[index][handler].bind({
                        workflow: self,
                        step: step
                    });
                });
            };

            Workflow.prototype.end = function() {
                // Clear out current step
                if (this.current) {
                    this.current.end();
                    this.current = null;
                }
            };

            function logStepData(data) {
                try {
                    logger.debug('  with data: ', replaceProperties(utils.clone(data)));
                } catch (e) {}
            }

            function replaceProperties(obj) {
                if (Array.isArray(obj)) {
                    obj.forEach(replaceProperties);
                } else if (obj !== null && typeof obj === 'object') {
                    Object.keys(obj).forEach(function(name) {
                        if (/email|username|loginValue|password/i.test(name)) {
                            obj[name] = '*';
                        }

                        replaceProperties(obj[name]);
                    });
                }

                return obj;
            }

            Workflow.extend = utils.extend;
            module.exports = Workflow;
        }());

    }, {
        "./emitter": 45,
        "./step": 48,
        "logger": 20,
        "utils": 42
    }],
    48: [function(require, module, exports) {
        (function() {
            'use strict';

            var Emitter = require('./emitter');
            var Q = require('q');

            /**
             * Step constructor
             * Contains this.live, this.name, this.internalName, and this.workflowName
             *
             * @param opts
             * @constructor
             */
            function Step(opts) {
                this.live = false;
                this.name = 'generic';
                this.initialize(opts);
            }

            Emitter.extend(Step);

            Step.prototype.initialize = function() {};

            Step.prototype.start = function(data, workflowName, workflow) {
                this.deferred = Q.defer();

                // Allows a step to emit an event on the workflow instance
                this.workflow = workflow;
                this.data = data || {};
                this.workflowName = workflowName || '';
                this.pre();
                this.render();
                this.execute();
                this.live = true;

                return this.deferred.promise;
            };

            Step.prototype.end = function() {
                this.post();
                this.data = null;
                this.live = false;
                this.deferred = null;
            };

            Step.prototype.success = function() {
                this.post();
                this.emit('success', this.data);
                this.deferred.resolve(this.data);
                this.live = false;
            };

            Step.prototype.cancel = function() {
                this.post();
                this.emit('cancel', this.data);
                this.deferred.notify(this.data);
                this.live = false;
            };

            Step.prototype.failure = function() {
                this.post();
                this.emit('failure', this.data);
                this.deferred.reject(this.data);
                this.live = false;
            };

            // Placeholders
            Step.prototype.render = function() {};
            Step.prototype.pre = function() {};
            Step.prototype.execute = function() {};
            Step.prototype.post = function() {};

            Step.extend = require('utils').extend;
            module.exports = Step;
        }());

    }, {
        "./emitter": 45,
        "q": 1,
        "utils": 42
    }],
    49: [function(require, module, exports) {
        'use strict';

        var config = {},
            logger = require('logger'),
            multiReg = require('../multi-reg'),
            render = require('./render'),
            utils = require('utils');

        module.exports = {
            getAlternateConfig: getAlternateConfig,
            getAudience: getAudience,
            getCarbonDomain: getCarbonDomain,
            getCSSOverride: getCSSOverride,
            getFeatureRenderConfig: getFeatureRenderConfig,
            getGlobal: getGlobal,
            getGuestControllerBaseUrl: getGuestControllerBaseUrl,
            getMobileConfig: getMobileConfig,
            getNewsletters: getNewsletters,
            getRender: getRender,
            getSite: getSite,
            getSiteConfigErrors: getSiteConfigErrors,
            getSiteMessageHandler: getSiteMessageHandler,
            getSupportedActivities: getSupportedActivities,
            getUiConfig: getUiConfig,
            isCastMemberEnabled: isCastMemberEnabled,
            isDynamicConfigFeatureEnabled: isDynamicConfigFeatureEnabled,
            isFamilyFriendly: isFamilyFriendly,
            isMobileSDK: isMobileSDK,
            isMobileVerificationEnabled: isMobileVerificationEnabled,
            isPrimaryKid: isPrimaryKid,
            isSocialEnabled: isSocialEnabled,
            setClientConfigOverrides: setClientConfigOverrides,
            setDynamicConfig: setDynamicConfig,
            setGlobal: setGlobal,
            setMobileConfig: setMobileConfig,
            setSite: setSite,
            showDob: showDob
        };

        function getAlternateConfig() {
            return utils.getQueryStringParams(location.href).alternateConfig;
        }

        function getCSSOverride() {
            return utils.getQueryStringParams(location.href).cssOverride;
        }

        function setSite(conf) {
            // ONEID-2754, aka "Multi-Reg".
            // @TODO: Remove this once "The Townhouse" is in place.
            config.site = multiReg.configure(utils.clone(conf));
        }

        function setGlobal(conf) {
            config.global = utils.clone(conf);
        }

        function setDynamicConfig(conf) {
            config.dynamicConfig = utils.clone(conf);
        }

        /**
         * Handler for 'config.mobile' message.
         * @param {object} conf
         */
        function setMobileConfig(conf) {
            logger.log('config#setMobileConfig');
            config.mobile = utils.clone(conf);
        }

        /**
         * Getter, for Global Config
         *
         * @return {Object}
         **/
        function getGlobal() {
            return utils.clone(utils.get(config, 'global'));
        }

        /**
         * Getter for Site Config
         *
         * @return {object}
         **/
        function getSite() {
            return utils.clone(utils.get(config, 'site.data'));
        }

        /**
         * Returns HTTP error
         *
         * @return {Object}
         **/
        function getSiteConfigErrors() {
            return utils.clone(utils.get(config, 'site.error'));
        }

        /**
         * Get render config, based off guest, ageBand, and flow
         *
         * @param {Object} guest
         * @param {string} ageBand
         * @param {string} flow
         * @return {Object}
         **/
        function getRender(guest, ageBand, flow) {
            var siteConfig = getSite();
            var complianceConfigFlow = (flow == 'PARTIAL') ? 'CREATE' : flow;
            var complianceConfigPath = 'compliance.ageBands.' + ageBand + '.' + complianceConfigFlow;
            var complianceConfig;
            var marketingConfigPath = 'marketing.' + ageBand + '.' + complianceConfigFlow;
            var marketingConfig;
            var displayNameConfigPath = 'displayName';
            var displayNameConfig;
            var field;

            // Get configuration for compliance and marketing.
            complianceConfig = utils.get(siteConfig, complianceConfigPath);
            marketingConfig = utils.get(siteConfig, marketingConfigPath);
            displayNameConfig = utils.get(siteConfig, displayNameConfigPath);

            field = render.profile.get(guest, complianceConfig);
            field.profile.phones = render.phones.get(guest, complianceConfig);
            field.profile.addresses = render.addresses.get(guest, complianceConfig, complianceConfigFlow);

            //TODO: reimplement once GC PPU issues have been fixed. Currently, puts account creation into a bad state when GC returns a PPU.
            //if (ageBand !== 'CHILD') {
            field.marketing = render.marketing.get(guest, marketingConfig, flow, siteConfig.epcenabled);
            //}

            if (displayNameConfig) {
                field.displayName = render.displayName.get(displayNameConfig, flow);
            }

            //logger.debug('config#getRender returning with:', field);

            return field;
        }

        function getSupportedActivities(ageBand) {
            return utils.get(getSite(), 'activityPermissions')[ageBand].map(function(activity) {
                return activity.activityCode;
            });
        }

        /**
         * Get newsletters config, for guest/ageband.
         * @param   {object} guest
         * @param   {string} ageBand
         * @param   {string} promotion
         * @returns {object}
         */
        function getNewsletters(guest, ageBand, promotion) {
            logger.log('config#getNewsletters');

            var newsletters = render.newsletters.get(guest, utils.get(getSite(), 'newsletters.' + ageBand)) || {};
            return newsletters[promotion];
        }

        /**
         * Get uiFeatures config settings
         */
        function getUiConfig() {
            logger.log('config#getUiConfig');
            return utils.get(getSite(), 'uiConfig') || {};
        }

        /**
         * Get featureRenderConfig, this is the feature rendering logic when
         * the uiConfig doesn't provide enough rendering logic on it's own
         */
        function getFeatureRenderConfig() {
            logger.log('config#getFeatureRenderConfig');
            var features = utils.get(getUiConfig(), 'features') || {};
            var featureRenderConfig = {};

            featureRenderConfig.interstitialConfig = utils.get(features, 'createInterstitial');
            featureRenderConfig.showInterstitial = utils.get(featureRenderConfig.interstitialConfig, 'enabled');
            featureRenderConfig.carouselConfig = utils.get(featureRenderConfig.interstitialConfig, 'carousel');
            featureRenderConfig.showCarousel = utils.get(featureRenderConfig.carouselConfig, 'enabled');
            featureRenderConfig.showProductLogo = utils.get(features, 'productLogo.enabled');
            featureRenderConfig.showPrimaryValueProp = utils.get(features, 'valuePropositions.enabled') && utils.get(features, 'valuePropositions.primary');
            featureRenderConfig.showSecondaryValueProp = utils.get(features, 'valuePropositions.enabled') && utils.get(features, 'valuePropositions.secondary');
            featureRenderConfig.showProductValueArea = (featureRenderConfig.showProductLogo || featureRenderConfig.showSecondaryValueProp);
            featureRenderConfig.showMaskedDob = !!(!isPrimaryKid() && utils.get(features, 'inputMask.dateOfBirth'));
            featureRenderConfig.showSelectDob = !!(!isPrimaryKid() && !utils.get(features, 'inputMask.dateOfBirth'));

            return featureRenderConfig;
        }

        /**
         * Get the audience from the `audience` string if available
         * falls back to `adultAudience` flag
         */
        function getAudience() {
            return utils.get(config, 'site.data.uiConfig.audience') || utils.get(config, 'site.data.uiConfig.adultAudience');
        }

        /**
         * Fulfills a fun function for family friendly flag
         */
        function isFamilyFriendly() {
            var audience = getAudience();
            // if audience is a string, then `audience` is one of GA|FF|PK
            // else audience is true/false
            if (typeof audience === 'string') {
                return audience === 'FF';
            }
            // audience is a boolean in this case (`adultAudience`)
            return !audience;
        }

        /**
         * Returns boolean indicating if audience is Primary Kid
         */
        function isPrimaryKid() {
            return utils.get(config, 'site.data.uiConfig.audience') === 'PK';
        }

        /**
         * Returns whether or not the date of birth intersticial is enabled.
         */
        function showDob() {
            var showDob = utils.get(config, 'site.data.uiConfig.showDOB');
            var adultAudience = utils.get(config, 'site.data.uiConfig.adultAudience');

            if (isPrimaryKid()) {
                return false;
            } else if (typeof showDob !== 'undefined') {
                return showDob;
            } else {
                return !adultAudience;
            }
        }

        /**
         * Get carbon domain from site configuration
         * @returns {Object|string}
         */
        function getCarbonDomain() {
            return utils.get(config, 'site.data.clientInfo.carbonDomain') || 'DISNEY';
        }

        /**
         * Check if social is enabled
         * @param   {object} accountMapping
         * @returns {boolean} isSocialEnabled
         */
        function isSocialEnabled() {
            return false;
        }

        /**
         * Check if castMember is enabled
         * @param {string} context
         * @returns {boolean} isCastMemberEnabled
         */
        function isCastMemberEnabled(context) {
            var castMember = utils.get(getSite(), 'uiConfig.isCastMember');
            if (!castMember) {
                return false;
            }

            var enabled = false;
            utils.get(castMember, 'contexts').forEach(function(item) {
                if (item.context === context && item.enabled) {
                    enabled = true;
                }
            });

            return enabled;
        }

        /**
         * retrieve the correct GC url based on configuration and the operation being performed.
         * @param {string} [method] HTTP method of this operation.
         * @param {string} [path] path url part - everything after the third slash up until the query string
         * @return {string} the Guest Controller base URL.
         */
        function getGuestControllerBaseUrl(method, path, globalConfiguration) {
            var gcBaseUrl = utils.get(config, 'global.services.guestController.url');
            var haPaths = utils.get(config, 'global.services.guestController.ha.support.' + method)

            // if the path is in the array for this method then use the HA url.
            if (haPaths && (haPaths.indexOf(path) != -1)) {
                gcBaseUrl = utils.get(config, 'global.services.guestController.ha.url');
            }

            return gcBaseUrl;
        }

        /**
         * Handler for 'siteconfig.read' message.
         * @param {mixed} data [not used]
         * @param {Promise} dfd
         */
        function getSiteMessageHandler(data, dfd) {
            var s = getSite();
            if (dfd) {
                dfd.resolve(s);
            }
        }

        /**
         * Handler for 'debug.clientConfigOverride' message.
         * Allows QA to override client config params
         * @param {object} overrides
         */
        function setClientConfigOverrides(overrides) {
            logger.log('config#setClientConfigOverrides', overrides);
            for (var override in overrides) {
                if (overrides.hasOwnProperty(override)) {
                    utils.set(config, 'site.data.' + override, overrides[override]);
                }
            }
        }

        /**
         * Returns boolean indicating is mobile verification is enabled for a client
         */
        function isMobileVerificationEnabled() {
            return !!utils.get(getSite(), 'enhancedLogin.allowMobileLogin.enabled');
        }

        /**
         * Returns boolean indicating whether or not the given feature is enabled
         * @returns {boolean}
         */
        function isDynamicConfigFeatureEnabled(featureName) {
            return !!utils.get(config, 'dynamicConfig.features.' + featureName);
        }

        /**
         * Use mobile config settings to determine if running in mobile SDK
         */
        function isMobileSDK() {
            logger.log('config#isMobileSDK');
            return !!utils.get(config, 'mobile');
        }

        /**
         * Get mobile config settings
         */
        function getMobileConfig() {
            logger.log('config#getMobileConfig');
            var mobileConfig = utils.get(config, 'mobile');
            return mobileConfig ? utils.clone(mobileConfig) : null;
        }

    }, {
        "../multi-reg": 64,
        "./render": 52,
        "logger": 20,
        "utils": 42
    }],
    50: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('../../../common/utils'),
                renderUtils = require('./utils'),
                addressFields = [
                    'country',
                    'postalCode',
                    'line1',
                    'line2',
                    'line3',
                    'city',
                    'stateProvince',
                    'type',
                    'preferred'
                ];

            module.exports = {
                'get': getAddressesRenderConfig
            };

            /**
             * Get render config, for addresses.
             *
             * @param {object} guest
             * @param {object} config
             * @param {string} flow
             * @return {object}
             **/
            function getAddressesRenderConfig(guest, config) {
                var addressConfig = utils.get(config, 'addresses'),
                    addressTypes = utils.get(config, 'addresses.type') || {},
                    guestAddresses = utils.get(guest, 'profile.addresses') || [],
                    output = {
                        'type': {}, // Bucket for new addresses
                        'guid': {} // Bucket for existing addresses
                    };

                Object.keys(addressTypes).forEach(function(type) {
                    var t = (type === 'DEFAULT') ? 'HOME' : type;
                    output.type[t] = addressFields.reduce(function(map, fieldName) {
                        map[fieldName] = getConfig(fieldName, type, false);
                        return map;
                    }, {});
                    output.type[t].required = addressConfig.type[type].required;

                    // output.guid
                    guestAddresses.forEach(function(address) {
                        var filterAddress = true;
                        var addressOutput = {};

                        addressFields.forEach(function(fieldName) {
                            addressOutput[fieldName] = getConfig(fieldName, address.type, !!address[fieldName]);

                            // If any of the address fields are visible, then set a
                            // flag to turn off filtering.
                            if (fieldName !== 'type' && fieldName !== 'preferred' && addressOutput[fieldName].visible === true) {
                                filterAddress = false;
                            }
                        });

                        // If all fields in the address are not visible, then remove it
                        // from the output.
                        if (filterAddress === false) {
                            output.guid[address.addressGuid] = addressOutput;
                            // Added to renderConfig for addresses to determine if user
                            // is allowed to delete this address Address fields which
                            // are required DO NOT mean an address block is required
                            // and can be deleted There's a bug somewhere bc v1 ignores
                            // this and treats a required field to equal the address is
                            // required bug filed with GCV2
                            output.guid[address.addressGuid].deletable = !addressTypes[type].required;
                        }
                    });
                });

                function getConfig(fieldName, type, hasValue) {
                    // HACK: check the config to see if a 'HOME' is defined since we 
                    // save "HOME' in the guestObj for 'DEFAULT' in the config
                    type = (type === 'HOME' && addressTypes[type] === undefined) ? 'DEFAULT' : type;

                    var field = utils.get(addressTypes[type], fieldName),
                        map;

                    if (!field) {
                        field = {
                            'editable': 'NOT_ALLOWED',
                            'required': false
                        };
                    }

                    map = renderUtils.getRules(field.editable, hasValue);
                    map.required = field.required;

                    return map;
                }

                return output;
            }
        }());

    }, {
        "../../../common/utils": 42,
        "./utils": 57
    }],
    51: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = {
                get: getDisplayNameConfig
            };

            var utils = require('../../../common/utils');

            /**
             * Get display name config, based on config and context.
             *
             * @param {object} config
             * @param {string} context
             * @return {object}
             **/
            function getDisplayNameConfig(config, context) {
                return {
                    visible: utils.get(config, 'display.' + context.toLowerCase() + '.visible') || utils.get(config, 'display.default.visible'),
                    enabled: config.enabled
                };
            }
        }());

    }, {
        "../../../common/utils": 42
    }],
    52: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * @TODO: Investigate possibility of using Folderify or globify to import
             *     contents of a directory
             */
            module.exports = {
                profile: require('./profile'),
                phones: require('./phones'),
                addresses: require('./addresses'),
                marketing: require('./marketing'),
                newsletters: require('./newsletters'),
                displayName: require('./display-name')
            };
        }());

    }, {
        "./addresses": 50,
        "./display-name": 51,
        "./marketing": 53,
        "./newsletters": 54,
        "./phones": 55,
        "./profile": 56
    }],
    53: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var marketingUtils = require('../../marketing/marketing-utils');

            module.exports = {
                get: get
            };

            /**
             * Get marketing config, based on guest, config, and context.
             *
             * @param {Object} guest
             * @param {Object} config
             * @param {string} context
             * @param {boolean} isEPC
             * @return {Object}
             */
            function get(guest, config, context, isEPC) {
                return marketingUtils.splitLists(config, (utils.get(guest, 'marketing') || []), context, isEPC);
            }
        }());

    }, {
        "../../marketing/marketing-utils": 63,
        "utils": 42
    }],
    54: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var marketingUtils = require('../../marketing/marketing-utils');

            module.exports = {
                get: get
            };

            /**
             * Get marketing config, based on guest, config, and context.
             *
             * @param {Object} guest
             * @param {Object} config
             * @return {Object}
             */
            function get(guest, config) {
                config = transformNewslettersConfig(config);

                Object.keys(config).forEach(function(campaign) {
                    config[campaign] = marketingUtils.splitLists(
                        config[campaign],
                        (utils.get(guest, 'marketing') || []),
                        'CREATE'
                    );
                });

                return config;
            }

            /**
             * Transform newsletters config, into a structure resembling marketing config.
             * @param {object} config
             * @return {object}
             */
            function transformNewslettersConfig(config) {
                var output = {};
                config = utils.clone(config) || {};

                Object.keys(config).forEach(function(campaign) {
                    var campaignConfig = {};

                    (config[campaign] || []).forEach(function(item) {
                        campaignConfig[item.name] = {
                            proxySplitRules: ['RECORDED'],
                            checked: item.checked,
                            proxy: {}
                        };

                        item.lists.forEach(function(list) {
                            campaignConfig[item.name].proxy[list.name] = {
                                checked: list.checked
                            };
                        });
                    });

                    output[campaign] = campaignConfig;
                });

                return output;
            }
        }());

    }, {
        "../../marketing/marketing-utils": 63,
        "utils": 42
    }],
    55: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('../../../common/utils'),
                renderUtils = require('./utils');

            module.exports = {
                'get': getPhonesRenderConfig
            };

            /**
             * Get render config, for phones.
             *
             * @param {object} guest
             * @param {object} config
             * @return {Array}
             **/
            function getPhonesRenderConfig(guest, config) {
                // Load site config
                var phonesObject = utils.get(config, 'phones') || {},
                    phonesList = [],
                    phonesByType = (utils.get(guest, 'profile.phones') || []).reduce(function(map, item) {
                        map[item.type] = map[item.type] || [];
                        map[item.type].push(item);
                        return map;
                    }, {});

                // Defaults for phone.type
                if (!phonesObject.type && phonesObject.editable === 'EDITABLE') {
                    phonesObject.type = {
                        'DEFAULT': {
                            'require': false,
                            'editable': 'EDITABLE'
                        }
                    };
                }

                // Loop over phonesObject, and output a data format which is much more
                // consumable.
                Object.keys((utils.get(phonesObject, 'type') || {})).forEach(function(k) {
                    var quantityMin,
                        defaultType = (k === 'DEFAULT') ? 'NIGHT' : k;

                    if (typeof utils.get(phonesObject, 'type.' + k + '.quantityMin') !== 'undefined') {
                        quantityMin = utils.get(phonesObject, 'type.' + k + '.quantityMin');
                    } else if (typeof utils.get(phonesObject, 'quantityMin') !== 'undefined') {
                        quantityMin = utils.get(phonesObject, 'quantityMin');
                    } else {
                        quantityMin = 1;
                    }

                    for (var i = 0; i < quantityMin; i++) {
                        var editable = (
                                utils.get(phonesObject, 'type.' + k + '.number.editable') ||
                                utils.get(phonesObject, 'editable') ||
                                'EDITABLE'
                            ),
                            required = utils.get(phonesObject, 'type.' + k + '.required'),
                            phone = renderUtils.getRules(editable, utils.get(phonesByType[defaultType], 'length') > 0);

                        // Map phone GUID
                        if ((utils.get(phonesByType[defaultType], 'length') || 0) > 0) {
                            var guestPhone = phonesByType[defaultType].pop();
                            phone.phoneGuid = (guestPhone || {}).phoneGuid;
                        }

                        phone.type = defaultType;
                        phone.required = (typeof required !== 'undefined') ? required : false;

                        if (phone.visible) {
                            phonesList.push(phone);
                        }
                    }
                });

                return phonesList;
            }
        }());

    }, {
        "../../../common/utils": 42,
        "./utils": 57
    }],
    56: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('../../../common/utils'),
                renderUtils = require('./utils');

            module.exports = {
                'get': getProfileRenderConfig
            };

            /**
             * Get render config, for profile.
             *
             * @param {object} guest
             * @param {object} config
             * @return {object}
             **/
            function getProfileRenderConfig(guest, config) {
                var field = {
                    'profile': {}
                };

                Object.keys(config || {}).forEach(function(name) {
                    if (name === 'phones' || name === 'addresses') {
                        return;
                    }

                    var value = utils.get(guest, 'profile.' + name);

                    field.profile[name] = renderUtils.getRules(config[name].editable, !!value);
                    field.profile[name].required = config[name].required;
                });

                return field;
            }
        }());

    }, {
        "../../../common/utils": 42,
        "./utils": 57
    }],
    57: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = {
                'getRules': getRules
            };

            /**
             * Get render rules, based on editibility and whether or not the field
             * has a value.
             *
             * @param {string} editable
             * @param {boolean} hasValue
             * @return {object}
             **/
            function getRules(editable, hasValue) {
                var rules = {};

                switch (editable) {
                    case 'EDITABLE':
                        rules.visible = true;
                        rules.disabled = false;
                        break;
                    case 'NOT_EDITABLE':
                        rules.visible = true;
                        rules.disabled = true;
                        break;
                    case 'WRITE_ONCE':
                        rules.visible = true;
                        rules.disabled = !!hasValue;
                        break;
                    case 'NOT_ALLOWED':
                        /* falls through */
                    default:
                        rules.visible = false;
                        rules.disabled = true;
                        break;
                }

                return rules;
            }
        }());

    }, {}],
    58: [function(require, module, exports) {
        var config = require('config');
        var configPromise;
        var debug = require('debug');
        var exceptions = require('exceptions');
        var HttpResponse = require('./response');
        var HttpRequest = require('./request');
        var logger = require('logger');
        var messages = require('messages');
        var Q = require('q');
        var s2 = require('session.s2');
        var sessionApiKey = require('session.apiKey');
        var utils = require('utils');

        module.exports = {
            activateSessionTransferKey: activateSessionTransferKey,
            adultVerificationForm: adultVerificationForm,
            adultVerificationQuiz: adultVerificationQuiz,
            adultVerificationStatus: adultVerificationStatus,
            apiKey: apiKey,
            apiKeyWrapper: apiKeyWrapper,
            authenticate: apiKeyWrapper(authenticate, ['loginValue', 'password', 'correlationId', 'conversationId', 'reporting', 'deviceId']),
            authenticateViaOboCookie: authenticateViaOboCookie,
            authenticateViaSessionTransferKey: apiKeyWrapper(authenticateViaSessionTransferKey, ['sessionTransferKey', 'conversationId', 'correlationId', 'reporting']),
            authenticateViaSocialNetwork: authenticateViaSocialNetwork,
            checkForAccountByEmail: apiKeyWrapper(checkForAccountByEmail, ['email', 'conversationId', 'correlationId', 'reporting']),
            checkActivityPermission: checkActivityPermission,
            checkAuthorization: checkAuthorization,
            clickbackChangePasswordByLoginValue: clickbackChangePasswordByLoginValue,
            clickbackChangePasswordBySwid: clickbackChangePasswordBySwid,
            clickbackMakePrimary: clickbackMakePrimary,
            configure: configure,
            createAccountMappingBySwid: createAccountMappingBySwid,
            deleteBySwid: deleteBySwid,
            getBySwid: getBySwid,
            getRecoveryMethods: apiKeyWrapper(getRecoveryMethods, ['loginValue', 'conversationId', 'correlationId', 'reporting']),
            invalidateRefreshTokens: invalidateRefreshTokens,
            invalidateRefreshTokensArray: invalidateRefreshTokensArray,
            licensePlatePeek: apiKeyWrapper(licensePlatePeek, ['pairingCode', 'correlationId', 'conversationId', 'reporting']),
            loginWithRecoveryToken: apiKeyWrapper(loginWithRecoveryToken, ['recoveryToken', 'swid', 'conversationId', 'correlationId', 'reporting', 'deviceId']),
            makeRequest: makeRequest,
            marketingOptionsGlobal: apiKeyWrapper(marketingOptionsGlobal, ['profile', 'marketing', 'legalAssertions', 'sourceName', 'campaign', 'correlationId', 'conversationId', 'reporting']),
            marketingOptionsGlobalProfile: apiKeyWrapper(marketingOptionsGlobalProfile, ['profile', 'marketing', 'legalAssertions', 'sourceName', 'correlationId', 'conversationId', 'reporting']),
            notifyOTPEmailVerification: notifyOTPEmailVerification,
            notifyParentalApproval: notifyParentalApproval,
            notifyRecoverPassword: apiKeyWrapper(notifyRecoverPassword, ['lookupValue', 'correlationId', 'conversationId', 'reporting']),
            notifyRecoverUsername: apiKeyWrapper(notifyRecoverUsername, ['lookupValue', 'correlationId', 'conversationId', 'reporting']),
            notifyResolveMASE: apiKeyWrapper(notifyResolveMASE, ['lookupValue', 'referenceId', 'conversationId', 'correlationId']),
            notifyUpgradeNRT: apiKeyWrapper(notifyUpgradeNRT, ['lookupValue', 'conversationId', 'correlationId']),
            redeemLicensePlate: apiKeyWrapper(redeemLicensePlate, ['activationCode', 'refreshToken', 'correlationId', 'conversationId', 'reporting']),
            redeemOtpCode: apiKeyWrapper(verifyOtpCodePasswordRecover, ['passcode', 'sessionIds', 'conversationId', 'correlationId', 'reporting']),
            refreshAuthorization: refreshAuthorization,
            register: apiKeyWrapper(register, ['guest', 'conversationId', 'correlationId', 'optionalConfigs', 'reporting']),
            requestActivityPermission: requestActivityPermission,
            requestOtpPhoneVerification: requestOtpPhoneVerification,
            requestLoginRecoveryOtp: apiKeyWrapper(requestLoginRecoveryOtp, ['recoveryType', 'data', 'conversationId', 'correlationId', 'reporting']),
            requestOtpRecovery: apiKeyWrapper(requestOtpRecovery, ['phoneGuid', 'conversationId', 'correlationId', 'reporting']),
            updateBySwid: updateBySwid,
            updatePhoneAndVerify: updatePhoneAndVerify,
            upgradeNRT: upgradeNRT,
            validate: apiKeyWrapper(validate, ['params', 'conversationId', 'correlationId', 'reporting']),
            verifyOtpCodeAuthentication: apiKeyWrapper(verifyOtpCodeAuthentication, ['passcode', 'sessionIds', 'conversationId', 'correlationId', 'reporting']),
            verifyOtpCodeEmailVerification: verifyOtpCodeEmailVerification,
            verifyOtpCodePasswordRecover: apiKeyWrapper(verifyOtpCodePasswordRecover, ['passcode', 'sessionId', 'conversationId', 'correlationId', 'reporting']),
            verifyOtpCodePhoneVerification: verifyOtpCodePhoneVerification
        };

        // Request timeout (30 seconds)
        var REQUEST_TIMEOUT = 30 * 1000;

        // Default headers
        var defaultHeaders = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '-1'
        };

        /**
         * Sets configuration data
         *
         * If configure is called and passed a promise, dao method calls will
         * wait until the promise has been resolve and the config module has
         * been configured before executing the service call.
         *
         * @todo: determine LOE to make each dao method asynchronous and wait
         *        for dao to be configured instead of assuming configuration
         *        is present (inner) or waiting if configure was explicitly
         *        called.
         */
        function configure(promise) {
            if (!promise) {
                configPromise = null;
                return;
            }
            promise.then(function(data) {
                config.setSite(data.site);
                config.setGlobal(data.global);
                config.setDynamicConfig(data.dynamicConfig);
            });
            return configPromise = promise;
        }

        /**
         * Get the path for the request.
         */
        function getRequestPath() {
            var conf = config.getGlobal();
            var base = config.getGuestControllerBaseUrl(this.method, this.path);
            var clientId = utils.get(conf, 'clientId');
            var query = utils.clone(this.query) || {};
            var marketingMode = debug.getMarketingMode();
            var epcEnabled = debug.getEpcEnabled();
            var epcToggles = [];

            if (debug.getShapeEnabled() && this.path === '/guest/login') {
                base = 'https://qa-ssec-poc.registerdisney.go.com/jgc/v6';
            }

            if (marketingMode) {
                epcToggles.push(marketingMode === 'epc' ? 'epc-override-set' : 'epc-override-unset');
            }

            if (epcEnabled) {
                epcToggles.push('epc-enabled');
            }

            if (epcToggles.length) {
                if (typeof query.feature === 'string') {
                    query.feature = query.feature.split(',').concat(epcToggles).join(',');
                } else {
                    query.feature = epcToggles.join(',');
                }
            }

            this.path = [base, 'client', clientId].join('/') + this.path;

            if (Object.keys(query).length > 0) {
                this.path += '?' + getQueryParameters();
            }

            function getQueryParameters() {
                return Object.keys(query || {})
                    .map(function(name) {
                        return [name, query[name]].map(encodeURIComponent).join('=');
                    }).join('&');
            }
        }

        function checkForAccountByEmail(params) {
            return makeRequest('POST', '/guest-flow', {
                email: params.email
            }, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            });
        }

        /**
         * Set the langPref on the request, if one is not already set.
         */
        function setLanguagePreference() {
            this.query = this.query || {};
            this.query.langPref = this.query.langPref || getLangPref();
        }

        /**
         * Get headers for the request.
         */
        function getHeaders() {
            this.headers = utils.assign(utils.clone(defaultHeaders), this.headers);

            // check for debug headers
            var geoIP = debug.getGeoIP();
            if (geoIP) {
                this.headers['x-forwarded-for'] = geoIP;
            } else {
                delete this.headers['x-forwarded-for'];
            }

            this.headers['conversation-id'] = this.headers['conversation-id'] || utils.uuid();
        }

        /**
         * Get body for the request
         */
        function getBody() {
            this.body = JSON.stringify(this.body);
        }

        /**
         * Util function, to get the language preference
         * @returns {string}
         */
        function getLangPref() {
            return utils.get(config.getGlobal(), 'language.preference') || 'en-US';
        }

        /**
         * Helper, which builds the value for the 'profileContext' property, based off the
         * 'optionalConfigs' value, which gets passed into the register methods.
         *
         * @param   {object} opts key/value pairs for sourceName, templateName, etc.
         * @returns {string} profileContext data.
         */
        function buildProfileContext(opts) {
            var validProps = ['sourceName', 'templateName', 'affiliateName', 'siteID'];

            return Object.keys(opts || {}).filter(function(name) {
                return validProps.indexOf(name) !== -1;
            }).reduceNative(function(context, name) {
                context.push(name + '=' + opts[name]);
                return context;
            }, []).join(',');
        }

        /**
         * Make Guest Controller request
         * @param   {string} method
         * @param   {string} path
         * @param   {object} body
         * @param   {object} headers
         * @param   {object} queryParameters
         * @returns {Promise}
         */
        function makeRequest(method, path, body, headers, queryParameters) {
            logger.debug('dao#makeRequest');

            var request = {
                method: method,
                path: path,
                body: body,
                headers: headers,
                query: queryParameters
            };

            if (configPromise) {
                return Q.when(configPromise)
                    .then(function() {
                        return request;
                    })
                    .then(start)
                    .catch(function(err) {
                        logger.error('dao#makeRequest');
                        throw err;
                    });
            } else {
                return Q.when(start());
            }

            function start() {
                [setLanguagePreference, getRequestPath, getHeaders, getBody].forEach(function(cb) {
                    cb.apply(request);
                });

                return executeRequest();
            }

            function executeRequest() {
                logger.debug('dao#makeRequest executeRequest');

                return HttpRequest(
                        request.method,
                        request.path,
                        request.body,
                        request.headers,
                        REQUEST_TIMEOUT
                    )
                    .then(complete)
                    .catch(function(err) {
                        logger.error('dao#makeRequest executeRequest');
                        throw err;
                    });
            }

            function complete(data) {
                logger.debug('dao#makeRequest complete');

                return Q.resolve()
                    .then(function() {
                        try {
                            data.response = JSON.parse(data.response);
                        } catch (e) {
                            // noop
                        }

                        var response = new HttpResponse(data.response, data.status, data.headers);

                        response.xhrFailureReason = data.xhrFailureReason;
                        response.xhrTimeout = data.xhrTimeout;
                        response.xhrReadyState = data.xhrReadyState;

                        if (!response.isValid()) {
                            throw response;
                        }

                        return response;
                    })
                    .then(writeS2Data)
                    .catch(function(err) {
                        logger.error('dao#makeRequest complete');
                        throw err;
                    });
            }

            /**
             * Write S2 cookie data if the response body contains it
             */
            function writeS2Data(response) {
                logger.debug('dao#makeRequest writeS2Data');

                return Q.resolve()
                    .then(function() {
                        var s2Data = utils.get(response, 'data.s2');
                        if (s2Data) {
                            logger.debug('S2 present in GC response; write cookie');
                            return s2.write(s2Data)
                                .then(function() {
                                    return response;
                                })
                                .catch(function(err) {
                                    logger.error('dao#makeRequest s2.write');
                                    throw err;
                                });
                        }
                        return response;
                    })
                    .catch(function(err) {
                        logger.error('dao#makeRequest writeS2Data');
                        throw err;
                    });
            }
        }

        /**
         * Generates the value for the "OneID-Reporting" header, given reporting props.
         *
         * @param {object} reportingProps
         * @return {mixed} string or undefined
         */
        function buildReportingHeader(reportingProps) {
            if (reportingProps === null || typeof reportingProps !== 'object' || Object.keys(reportingProps).length === 0) {
                return;
            }

            return utils.base64Encode(JSON.stringify(reportingProps));
        }

        /**
         * Authenticates a user
         *
         * @param {string} params.authorization
         * @param {string} params.loginValue
         * @param {string} params.password
         * @param {string} params.correlationId
         * @param {string} params.conversationId
         * @param {object} params.reporting
         * @param {string} params.deviceId
         * @returns {*}
         */
        function authenticate(params) {
            var headers = {};

            if (debug.getShapeEnabled() && window.iv_fetch && typeof window.iv_fetch === 'function') {
                headers = iv_fetch();
            }

            headers = utils.assign(headers, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting),
                'device-id': params.deviceId
            });

            return makeRequest('POST', '/guest/login', {
                'loginValue': params.loginValue,
                'password': params.password
            }, headers, {
                'langPref': getLangPref()
            });
        }

        /**
         * Authenticate a user via OBO Cookie
         *
         * @param oboCookie
         * @param swid
         * @param correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function authenticateViaOboCookie(oboCookie, swid, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/guest/login/on-behalf-of', {
                'swid': swid
            }, {
                'Authorization': 'BEARER ' + oboCookie,
                'conversation-id': conversationId || utils.uuid(),
                'correlation-id': correlationId || utils.uuid(),
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Checks whether or not the guest is able to operate on the current site
         *
         * @param {string} accessToken
         * @param {string} swid
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {promise}
         */
        function checkAuthorization(accessToken, swid, conversationId, correlationId, reporting) {
            return makeRequest('GET', '/guest/check-authorization/' + swid, {}, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId || utils.uuid(),
                'correlation-id': correlationId || utils.uuid(),
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Record marketing opt-ins / opt-outs for Global NRTs
         * @param   {string}  params.authorization
         * @param   {object}  params.profile
         * @param   {object}  params.marketing
         * @param   {array}   params.legalAssertions
         * @param   {object}  params.textIDs
         * @param   {string}  params.sourceName
         * @param   {string}  params.correlationId
         * @param   {string}  params.conversationId
         * @param   {object}  params.reporting
         * @returns {promise}
         */
        function marketingOptionsGlobal(params) {
            var body = {
                profile: params.profile,
                marketing: params.marketing,
                legalAssertions: params.legalAssertions,
                marketingSource: params.sourceName,
                campaign: params.campaign
            };

            return makeRequest('POST', '/marketing', body, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            }, {
                langPref: getLangPref()
            });
        }

        /**
         * Record marketing opt-ins / opt-outs for Global NRTs
         * @param   {string}  params.authorization
         * @param   {object}  params.profile
         * @param   {object}  params.marketing
         * @param   {array}   params.legalAssertions
         * @param   {object}  params.textIDs
         * @param   {string}  params.sourceName
         * @param   {string}  params.correlationId
         * @param   {string}  params.conversationId
         * @param   {object}  params.reporting
         * @returns {promise}
         */
        function marketingOptionsGlobalProfile(params) {
            var body = {
                profile: params.profile,
                marketing: params.marketing,
                legalAssertions: params.legalAssertions,
                marketingSource: params.sourceName
            };

            return makeRequest('POST', '/marketing/profile', body, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            }, {
                langPref: getLangPref()
            });
        }

        /**
         * Redeem a license plate code
         *
         * @param {string} activationCode
         * @param {string} refreshToken
         * @param {string} correlationId
         * @param {string} conversationId
         * @param {object} reporting
         * @returns {*}
         */
        function redeemLicensePlate(params) {
            return makeRequest('POST', '/license-plate/code/' + encodeURIComponent(params.activationCode) + '/activate', {
                refreshToken: params.refreshToken
            }, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            }, {
                langPref: getLangPref()
            });
        }

        /**
         * Peeks/Returns license plate data bag
         * @param   {string}  params.authorization
         * @param   {string}  params.pairingCode
         * @param   {string}  params.correlationId
         * @param   {string}  params.conversationId
         * @param   {object}  params.reporting
         * @returns {promise}
         */
        function licensePlatePeek(params) {
            return makeRequest('GET', '/license-plate/code/' + params.pairingCode, null, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            });
        }

        /**
         * Sends an email to guest prompting to resolve MASE accounts
         *
         * @param {string} params.lookupValue
         * @param {string} params.authorization
         * @param {string} [params.referenceId]
         * @returns {*}
         */
        function notifyResolveMASE(params) {
            var request = {
                'lookupValue': params.lookupValue
            };

            if (params.referenceId) {
                request.referenceId = params.referenceId;
            }

            return makeRequest('POST', '/notification/resolve-mase', request, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId
            }, {
                'langPref': getLangPref()
            });
        }

        /**
         * @ngdoc method
         * @name DisneyID.Lightbox.dao#notifyRecoverUsername
         *
         * @description
         * Sends an email to guest prompting to recover their username.
         *
         * @param {string} params.lookupValue
         * @param {string} params.authorization
         * @param {string} params.correlationId
         * @param {string} params.conversationId
         * @param {object} params.reporting
         * @returns {*}
         */
        function notifyRecoverUsername(params) {
            return makeRequest('POST', '/notification/recover-username', {
                'lookupValue': params.lookupValue
            }, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            }, {
                'langPref': getLangPref()
            });
        }

        /**
         * @ngdoc method
         * @name DisneyID.Lightbox.DaoBackend#notifyRecoverPassword
         *
         * @description
         * Sends an email to guest prompting to recover their password.
         *
         * @param {string} params.authorization
         * @param {string} params.lookupValue
         * @param {string} params.correlationId
         * @param {string} params.conversationId
         * @param {object} params.reporting
         * @returns {*}
         */
        function notifyRecoverPassword(params) {
            return makeRequest('POST', '/notification/recover-password', {
                'lookupValue': params.lookupValue
            }, {
                'Authorization': params.authorization,
                'correlation-id': params.correlationId,
                'conversation-id': params.conversationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            }, {
                'langPref': getLangPref()
            });
        }

        /**
         * Sets the Primary Account, for an account set in a resolved or
         *     unresolved MASE situation, using SWID and accessToken.
         *
         * @param {string} swid
         * @param {string} accessToken
         * @returns {*}
         */
        function clickbackMakePrimary(swid, accessToken, conversationId, correlationId) {
            return makeRequest('POST', '/clickback/make-primary/' + swid, {}, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId
            });
        }

        /**
         * validates a user's email, username, password, and or displayName
         *
         * @param {string} params.authorization
         * @param {string} params.conversationId
         * @param {string} params.correlationId
         * @param {Object} params.params
         * @param {object} params.reporting
         *
         * @returns {*}
         */
        function validate(params) {
            return makeRequest('POST', '/validate', params.params, {
                'Authorization': params.authorization,
                'conversation-id': params.conversationId,
                'correlation-id': params.correlationId,
                'oneid-reporting': buildReportingHeader(params.reporting)
            });
        }

        /**
         * Returns a guest
         *
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function getBySwid(swid, accessToken, conversationId, correlationId, reporting, queryParameters) {
            queryParameters = queryParameters || {};

            // makeRequest(method, path, body, headers, queryParameters)
            return makeRequest('GET', '/guest/' + swid, {}, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            }, queryParameters);
        }

        /**
         * Check the activity permission for the provided activity
         * @param {string} activity
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @returns {*}
         */
        function checkActivityPermission(activity, swid, accessToken, conversationId, correlationId) {
            return makeRequest('GET', '/guest/activity-permission/' + swid, null, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId
            }, {
                activityCode: activity,
                langPref: getLangPref()
            });
        }

        /**
         * Check the status for adult verification.
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function adultVerificationStatus(swid, accessToken, correlationId, reporting) {
            return makeRequest('GET', '/guest/' + swid + '/adult-verification-status/', null, {
                'Authorization': 'BEARER ' + accessToken,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Verify that guest is an adult based on adult verification form.
         * @param {object} data
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function adultVerificationForm(data, swid, accessToken, correlationId, reporting) {
            return makeRequest('POST', '/guest/' + swid + '/adult-verification-ssn/', data, {
                'Authorization': 'BEARER ' + accessToken,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Verify that guest is an adult based on adult verification quiz.
         * @param {object} data
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function adultVerificationQuiz(data, swid, accessToken, correlationId, reporting) {
            return makeRequest('POST', '/guest/' + swid + '/adult-verification-quiz/', data, {
                'Authorization': 'BEARER ' + accessToken,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Get an api key
         *
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @param {string} code
         * @returns {Promise}
         */
        function apiKey(conversationId, correlationId, reporting, code) {
            var headers = {
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            };
            if (code) {
                headers['g-recaptcha-response'] = code;
            }
            return makeRequest('POST', '/api-key', null, headers, null)
                .then(function(response) {
                    // Fix DIDFE-6198: apiKey method is always gets back a response or a key
                    // assuming as such we write the cookie and return the key.
                    var key = response.headers && response.headers['api-key'] || response;
                    if (typeof key === 'string') {
                        sessionApiKey.write(key);
                        return key;
                    }
                    throw response;
                }).catch(function(err) {
                    logger.error('dao#apiKey');
                    throw err;
                });
        }

        /**
         * Request activity permissions for the current user
         * @param {string} activity
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @returns {*}
         */
        function requestActivityPermission(activity, swid, accessToken, conversationId, correlationId) {
            return makeRequest('POST', '/guest/activity-permission/' + swid, {
                activityCode: activity
            }, {
                'Authorization': 'BEARER ' + accessToken,
                'correlation-id': correlationId,
                'conversation-id': conversationId
            }, {
                langPref: getLangPref()
            });
        }

        /**
         * Sends an email to parent to approve login
         *
         * @param {string} swid
         * @param {string} hallpassToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @returns {*}
         */
        function notifyParentalApproval(swid, hallpassToken, conversationId, correlationId, experience) {
            var queryParams = {
                'langPref': getLangPref()
            };

            if (experience) {
                queryParams.experience = experience;
            }

            return makeRequest('POST', '/notification/parental-approval/' + swid, null, {
                    'Authorization': 'BEARER ' + hallpassToken,
                    'correlation-id': correlationId,
                    'conversation-id': conversationId
                },
                queryParams
            );
        }

        /**
         * Updates a guest
         *
         * @param {{}} guest
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} profileStateIdentifier
         * @param {string} correlationId
         * @param {string} conversationId
         * @param {object} reporting
         * @returns {*}
         */
        function updateBySwid(guest, swid, accessToken, profileStateIdentifier, correlationId, conversationId, reporting) {
            guest = utils.clone(guest);
            guest.etag = profileStateIdentifier;

            return makeRequest('POST', '/guest/' + swid, guest, {
                'Authorization': 'BEARER ' + accessToken,
                'correlation-id': correlationId,
                'conversation-id': conversationId,
                'oneid-reporting': buildReportingHeader(reporting)
            }, {
                feature: 'no-password-reuse'
            });
        }

        /**
         * Authenticates a user with an account mapping to a social network
         *
         * @param {string} namespace
         * @param {string} externalId
         * @param {string} externalToken
         * @param {string} [email]
         * @param {boolean} [isOneClickCreate]
         * @param {string} correlationId
         * @param {string} conversationId
         * @param {object} reporting
         * @returns {*}
         */
        function authenticateViaSocialNetwork(payload, isOneClickCreate, correlationId, conversationId, reporting) {
            return makeRequest('POST', '/guest/login/social', payload, {
                'correlation-id': correlationId,
                'conversation-id': conversationId,
                'oneid-reporting': buildReportingHeader(reporting)
            }, isOneClickCreate ? {
                'oneClick': true
            } : {});
        }

        /**
         * Registers a new account.
         *
         * @param {string} params.authorization
         * @param {{}} params.guest
         * @param {string} params.correlationId
         * @param {string} params.conversationId
         * @param {object} params.optionalConfigs
         * @param {object} params.reporting
         * @returns {*}
         */
        function register(params) {
            // @TODO: Should this stuff source into the sourceName field???
            // @TODO: Should this stuff source into the sourceName field???
            // @TODO: Should this stuff source into the sourceName field???

            // Build 'profileContext' property, for sourceName, affiliateName, etc.
            var profileContext = buildProfileContext(params.optionalConfigs);
            if (profileContext) {
                utils.set(params, 'guest.profile.profileContext', profileContext);
            }

            /* Adds testProfileFlag = 'Y' to guest profile for test accounts
                as indicated by checkbox on the Test Site */
            var testProfileFlag = debug.getTestProfileFlag();

            if (testProfileFlag) {
                utils.set(params, 'guest.profile.testProfileFlag', 'Y');
            }

            var queryParams = {
                autogeneratePassword: !params.guest.password,
                autogenerateUsername: !params.guest.profile.username
            };

            if (utils.get(params, 'reporting.experience')) {
                queryParams.experience = params.reporting.experience;
            }

            return makeRequest('POST',
                '/guest/register',
                params.guest, {
                    'Authorization': params.authorization,
                    'correlation-id': params.correlationId,
                    'conversation-id': params.conversationId,
                    'oneid-reporting': buildReportingHeader(params.reporting)
                },
                queryParams
            );
        }

        /**
         * Refreshes the guest's authorization token
         *
         * @param {string} refreshToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function refreshAuthorization(refreshToken, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/guest/refresh-auth', {
                'refreshToken': refreshToken
            }, {
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Creates an account mapping and returns a guest
         *
         * @param {string} namespace
         * @param {string} externalId
         * @param {string} externalDisplayName
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {*}
         */
        function createAccountMappingBySwid(namespace, externalId, externalDisplayName, swid, accessToken, conversationId, correlationId, reporting) {
            var accountMapping = {
                accountMapping: {}
            };

            accountMapping.accountMapping[namespace] = {
                externalId: externalId,
                externalDisplayName: externalDisplayName
            };

            return makeRequest('PUT', '/guest/account-mapping/' + swid, accountMapping, {
                Authorization: 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Deactivate a guest account using the swid
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         */
        function deleteBySwid(swid, accessToken, conversationId, correlationId) {
            return makeRequest('DELETE', '/guest/' + swid, {}, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId
            });
        }

        /**
         * Sends an email to guest prompting to begin the Upgrade NRT workflow
         *     via clickback link
         *
         * @param {string} params.authorization
         * @param {string} params.lookupValue
         * @param {string} params.conversationId
         * @param {string} params.correlationId
         * @returns {*}
         */
        function notifyUpgradeNRT(params) {
            return makeRequest('POST', '/notification/upgrade-nrt', {
                'lookupValue': params.lookupValue
            }, {
                'Authorization': params.authorization,
                'conversation-id': params.conversationId,
                'correlation-id': params.correlationId
            }, {
                'langPref': getLangPref()
            });
        }

        /**
         *  Upgrades an nrt, sets the password and will upgrade the acocunt with a new userName
         *
         * @param {string} swid
         * @param {string} userName
         * @param {string} password
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function upgradeNRT(swid, userName, password, accessToken, conversationId, correlationId, reporting) {
            return makeRequest('PUT', '/clickback-token/upgrade-nrt/' + swid, {
                'password': password,
                'username': userName
            }, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Invalidates session tokens assigned to a swid
         * @param swid
         * @param tokens {Array}
         * @param correlationId
         * @returns {Promise}
         *
         */
        function invalidateRefreshTokens(swid, tokens, conversationId, correlationId) {
            return makeRequest('POST', '/guest/' + swid + '/logout', {
                tokenAndClientIds: utils.flattenArray([tokens])
            }, {
                'conversation-id': conversationId,
                'correlation-id': correlationId
            });
        }

        /**
         * Invalidates session tokens assigned to a swid
         * @param swid
         * @param tokens {Array}
         * @param correlationId
         * @returns {Promise}
         *
         */
        function invalidateRefreshTokensArray(swid, tokens, conversationId, correlationId) {
            return makeRequest('POST', '/guest/' + swid + '/logout', {
                tokens: tokens
            }, {
                'conversation-id': conversationId,
                'correlation-id': correlationId
            });
        }

        /**
         * Invokes the recaptcha flow
         *
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         */
        function recaptcha(conversationId, correlationId, reporting) {
            logger.debug('dao#makeRequest recaptcha');
            messages.publish('show-recaptcha-modal', conversationId, correlationId, reporting);
            return Q.Promise(function(resolve) {
                var unsub = messages.subscribe('recaptcha-solved', function(code) {
                    resolve(code);
                    unsub();
                });
            });
        }

        /**
         * Wrapper for DAO methods, which require API-Key authorization.
         *
         * @param {function} daoMethod
         * @param {Array} params
         */
        function apiKeyWrapper(daoMethod, params) {
            return function() {
                logger.debug('Dao#apiKeyWrapper');

                var args = {};
                for (var i = 0; i < params.length && i < arguments.length; i++) {
                    args[params[i]] = arguments[i];
                }

                args.conversationId = args.conversationId || utils.uuid();
                args.correlationId = args.correlationId || utils.uuid();
                var reporting = args.reporting;

                return sessionApiKey.read().then(function(key) {
                    // Return api-key from storage. If none was found, then call the api-key endpoint
                    // of GC to obtain one.
                    return key || apiKey(args.conversationId, args.correlationId, reporting);
                }).then(function(key) {
                    // Chain the promise returned by the dao method.
                    return daoMethod(utils.assign(args, {
                        authorization: 'APIKEY ' + key
                    }));
                }, function(response) {
                    logger.debug('Dao#apiKeyWrapper: apiKey() failed, calling recaptcha');

                    // If the api-key call failed, then invoke the recaptcha flow.
                    if (utils.get(response, 'error.keyCategory') === 'FAILURE_BY_DESIGN' && !!exceptions.find(utils.get(response, 'error.errors'), 'RATE_LIMITED')) {
                        return recaptcha(args.conversationId, args.correlationId, reporting).then(function(code) {
                            // Chain promise from api-key GC call.
                            return apiKey(args.conversationId, args.correlationId, reporting, code);
                        }).then(function(key) {
                            // Call dao method with api-key from recaptcha
                            return daoMethod(utils.assign(args, {
                                authorization: 'APIKEY ' + key
                            }));
                        });
                    } else {
                        throw response;
                    }
                }).then(function(response) {

                    if (exceptions.find(exceptions.getKeyErrors(response), ['API_KEY_INVALID', 'RATE_LIMITED'])) {
                        logger.debug('Dao#apiKeyWrapper: response contains api-key error');

                        // If got back API_KEY_INVALID or RATE_LIMITED, then get a new key and try a one-shot retry
                        return sessionApiKey.write(null).then(function() {
                            // Chain promise from api-key GC call.
                            return apiKey(args.conversationId, args.correlationId, reporting);
                        }).catch(function(response) {
                            logger.debug('Dao#apiKeyWrapper: apiKey() failed, calling recaptcha');
                            if (utils.get(response, 'error.keyCategory') === 'FAILURE_BY_DESIGN' && !!exceptions.find(utils.get(response, 'error.errors'), 'RATE_LIMITED')) {
                                return recaptcha(args.conversationId, args.correlationId, reporting).then(function(code) {
                                    return apiKey(args.conversationId, args.correlationId, reporting, code);
                                });
                            } else {
                                throw response;
                            }
                        }).then(function(key) {
                            return daoMethod(utils.assign(args, {
                                authorization: 'APIKEY ' + key
                            })).then(function(response) {
                                if (exceptions.find(exceptions.getKeyErrors(response), ['API_KEY_INVALID', 'RATE_LIMITED'])) {
                                    throw response;
                                }

                                return response;
                            });
                        });
                    } else if (response.headers['api-key']) {
                        // Write apiKey, if got one back
                        sessionApiKey.write(response.headers['api-key']);
                    }

                    return response;
                }, function(response) {
                    throw response;
                });
            };
        }

        /**
         * Sends OTP code for verification to the phone with the given phone GUID
         * @param {string} phoneGuid
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function requestOtpPhoneVerification(phoneGuid, accessToken, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/notification/otp/verification', {
                'phoneGuid': phoneGuid
            }, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Sends OTP code for login recovery to the phone/email based on guest selection
         * @param {string} args.authorization
         * @param {string} args.recoveryType
         * @param {string} args.recoveryData
         * @param {string} args.conversationId
         * @param {string} args.correlationId
         * @param {object} args.reporting
         * @returns {Promise.<TResult>|*}
         */
        function requestLoginRecoveryOtp(args) {
            var data = {};
            if (args.recoveryType.toUpperCase() === 'PHONE') {
                data.phoneGuid = args.data;
            } else {
                data.lookupValue = args.data;
            }
            return makeRequest('POST', '/notification/otp/recovery', data, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting)
            });
        }

        /**
         * Updates mobile phone from guest object then
         * Sends OTP code for verification
         * @param {{}} guest
         * @param {string} swid
         * @param {string} accessToken
         * @param {string} profileStateIdentifier
         * @param {string} correlationId
         * @param {string} conversationId
         * @returns {Promise}
         */
        function updatePhoneAndVerify(guest, swid, accessToken, profileStateIdentifier, correlationId, conversationId, reporting) {
            guest = utils.clone(guest);
            guest.etag = profileStateIdentifier;

            return makeRequest('POST', '/guest/' + swid, guest, {
                'send-mobile-verification': 'true',
                'Authorization': 'BEARER ' + accessToken,
                'correlation-id': correlationId,
                'conversation-id': conversationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Sends OTP code for password recovery to the phone with the given GUID
         * @param {string} args.authorization
         * @param {string} args.phoneGuid
         * @param {string} args.conversationId
         * @param {string} args.correlationId
         * @param {object} args.reporting
         * @returns {Promise.<TResult>|*}
         */
        function requestOtpRecovery(args) {
            return makeRequest('POST', '/notification/otp/recovery', {
                'phoneGuid': args.phoneGuid
            }, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting)
            });
        }

        /**
         * Sends the give passcode (otp code) to the server for verifying a mobile phone number
         *
         * @param passcode
         * @param sessionIds
         * @param swid
         * @param accessToken
         * @param conversationId
         * @param correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function verifyOtpCodePhoneVerification(passcode, sessionIds, swid, accessToken, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/guest/' + swid + '/verify/otp', {
                'passcode': passcode,
                'sessionIds': sessionIds
            }, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Verify if entered OTP code is valid for authentication scenarios
         *
         * @param args.authorization
         * @param args.passcode
         * @param args.sessionIds
         * @param args.conversationId
         * @param args.correlationId
         * @param {object} args.reporting
         * @returns {*}
         */
        function verifyOtpCodeAuthentication(args) {
            return makeRequest('POST', '/guest/login/otp', {
                'passcode': args.passcode,
                'sessionIds': args.sessionIds
            }, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting)
            });
        }

        /**
         * Redeems OTP code for password recovery
         *
         * @param args.authorization
         * @param args.passcode
         * @param args.sessionIds
         * @param args.conversationId
         * @param args.correlationId
         * @param {object} args.reporting
         * @returns {Promise}
         */
        function verifyOtpCodePasswordRecover(args) {
            return makeRequest('POST', '/otp/redeem', {
                'passcode': args.passcode,
                'sessionIds': args.sessionIds
            }, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting)
            });
        }

        /**
         * Retrieves the set of recovery methods configured for the guest with the specified login value
         * @param args.authorization
         * @param args.loginValue
         * @param args.conversationId
         * @param args.correlationId
         * @param {object} args.reporting
         * @returns {Promise}
         */
        function getRecoveryMethods(args) {
            return makeRequest('POST', '/guest/recovery-methods', {
                'loginValue': args.loginValue
            }, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting)
            });
        }

        /**
         * Allows guest to exchange recovery v2 token for a guest secured token
         * @param args.recoveryToken
         * @param args.swid
         * @param args.conversationId
         * @param args.correlationId
         * @param args.deviceId
         * @param {object} args.reporting
         * @returns {Promise}
         */
        function loginWithRecoveryToken(args) {
            return makeRequest('POST', '/guest/login/recoveryToken', {
                'recoveryToken': args.recoveryToken,
                'swid': args.swid
            }, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting),
                'device-id': args.deviceId
            });
        }

        /**
         * Updates the guest password without requiring old password.
         *
         * @param swid
         * @param newPassword
         * @param accessToken
         * @param conversationId
         * @param correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function clickbackChangePasswordBySwid(swid, newPassword, accessToken, conversationId, correlationId, reporting) {
            return makeRequest(
                'POST',
                '/clickback-token/change-password/' + swid, {
                    'newPassword': newPassword
                }, {
                    'Authorization': 'BEARER ' + accessToken,
                    'conversation-id': conversationId,
                    'correlation-id': correlationId,
                    'oneid-reporting': buildReportingHeader(reporting)
                }, {
                    feature: 'no-password-reuse'
                }
            );
        }

        /**
         * Updates the guest password without requiring old password.
         *
         * @param loginValue
         * @param newPassword
         * @param accessToken
         * @param conversationId
         * @param correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function clickbackChangePasswordByLoginValue(loginValue, newPassword, accessToken, conversationId, correlationId, reporting) {
            return makeRequest(
                'POST',
                '/clickback-token/change-password', {
                    'loginValue': loginValue,
                    'newPassword': newPassword
                }, {
                    'Authorization': 'BEARER ' + accessToken,
                    'conversation-id': conversationId,
                    'correlation-id': correlationId,
                    'oneid-reporting': buildReportingHeader(reporting)
                }, {
                    feature: 'no-password-reuse'
                }
            );
        }

        /**
         * Activates a session transfer key
         *
         * @param {string} accessToken
         * @param {string} refreshToken
         * @param {string} sessionTransferKey
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function activateSessionTransferKey(accessToken, refreshToken, sessionTransferKey, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/session/transfer/activate', {
                'refreshToken': refreshToken,
                'sessionTransferKey': sessionTransferKey
            }, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            }, {});
        }

        /**
         * Authenticates via session transfer key
         *
         * @param {string} args.sessionTransferKey
         * @param {string} args.conversationId
         * @param {string} args.correlationId
         * @param {object} args.reporting
         * @returns {Promise}
         */
        function authenticateViaSessionTransferKey(args) {
            return makeRequest('POST', '/session/transfer/redeem', {
                sessionTransferKey: args.sessionTransferKey
            }, {
                'Authorization': args.authorization,
                'conversation-id': args.conversationId,
                'correlation-id': args.correlationId,
                'oneid-reporting': buildReportingHeader(args.reporting)
            }, {
                'langPref': getLangPref()
            });
        }

        /**
         * Request an OTP be emailed to guest for
         * the purpose of verifying their email address
         *
         * @param {string} accessToken
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function notifyOTPEmailVerification(accessToken, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/notification/otp/email-verification', null, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

        /**
         * Redeem an OTP for the purpose of
         * verifying guest email address
         *
         * @param {string} accessToken
         * @param {string} otpCode
         * @param {array} sessionIds
         * @param {string} conversationId
         * @param {string} correlationId
         * @param {object} reporting
         * @returns {Promise}
         */
        function verifyOtpCodeEmailVerification(accessToken, otpCode, sessionIds, conversationId, correlationId, reporting) {
            return makeRequest('POST', '/otp/verify-email', {
                'passcode': otpCode,
                'sessionIds': sessionIds
            }, {
                'Authorization': 'BEARER ' + accessToken,
                'conversation-id': conversationId,
                'correlation-id': correlationId,
                'oneid-reporting': buildReportingHeader(reporting)
            });
        }

    }, {
        "./request": 60,
        "./response": 61,
        "config": 49,
        "debug": 12,
        "exceptions": 16,
        "logger": 20,
        "messages": 21,
        "q": 1,
        "session.apiKey": "session.apiKey",
        "session.s2": "session.s2",
        "utils": 42
    }],
    59: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('./dao');
        }());

    }, {
        "./dao": 58
    }],
    60: [function(require, module, exports) {
        var logger = require('logger');
        var Q = require('q');

        module.exports = Request;

        var parseUrl = (function() {
            logger.debug('request#parseUrl');
            var node = document.createElement('a');

            return function(url) {
                node.href = url;

                return {
                    protocol: node.protocol,
                    host: node.host,
                    hostname: node.hostname,
                    port: node.port,
                    pathname: node.pathname,
                    hash: node.hash,
                    origin: node.origin || node.protocol + '//' + node.host,
                    search: node.search
                };
            };
        }());

        /**
         *
         * @param method
         * @param url
         * @param body
         * @param headers
         * @param timeoutMs
         * @returns {*|promise}
         * @constructor
         */
        function Request(method, url, body, headers, timeoutMs) {
            logger.debug('request#Request');
            return new Q.Promise(function(resolve) {
                var xhr = new XMLHttpRequest();
                var timeout;

                xhr.open(method, url, true);

                Object.keys((headers || {})).forEach(function(name) {
                    var value = headers[name];

                    if (typeof value !== 'undefined') {
                        xhr.setRequestHeader((name || '').toLowerCase(), value);
                    }
                });

                xhr.onload = handleResponse;
                xhr.onabort = handleAbort;
                xhr.onerror = handleError;
                xhr.send(typeof body !== 'undefined' ? body : null);

                if (timeoutMs) {
                    timeout = setTimeout(handleSetTimeout, timeoutMs);
                }

                function handleResponse() {
                    logger.debug('request#Request handleResponse');
                    var statusText = xhr.statusText || '';
                    var response = ('response' in xhr) ? xhr.response : xhr.responseText;
                    var headers = xhr.getAllResponseHeaders();
                    var status = xhr.status;
                    // TODO: simplify/revisit
                    if (status === 0) {
                        status = response ? 200 : parseUrl(url).protocol === 'file' ? 404 : 0;
                    }
                    complete(status, response, headers, statusText);
                }

                function handleError() {
                    logger.debug('request#Request handleError');
                    complete(-1, null, null, '', 'onerror');
                }

                function handleAbort() {
                    logger.debug('request#Request handleAbort');
                    complete(-1, null, null, '', 'onabort');
                }

                function handleSetTimeout() {
                    logger.debug('request#Request handleSetTimeout');
                    complete(-1, null, null, '', 'setTimeout');
                }

                function complete(status, response, headers, statusText, failureReason) {
                    logger.debug('request#Request complete');
                    clearTimeout(timeout);
                    resolve({
                        status: status,
                        response: response,
                        headers: parseHeaders(headers),
                        statusText: statusText,
                        xhrFailureReason: failureReason,
                        xhrTimeout: xhr.timeout,
                        xhrReadyState: xhr.readyState
                    });
                }
            });
        }

        function parseHeaders(headerText) {
            logger.debug('request#parseHeaders');
            return (headerText || '').split('\n').map(function(item) {
                var index = item.indexOf(':') || 0;

                return [
                    item.substr(0, index).trim(),
                    item.substr(index + 1).trim()
                ];
            }).filter(function(item) {
                return !!item[0];
            }).reduceNative(function(map, item) {
                return map[item[0].toLowerCase()] = item[1], map;
            }, {});
        }

    }, {
        "logger": 20,
        "q": 1
    }],
    61: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = Response;

            /**
             * HTTP response wrapper
             *
             * @param {Object} data
             * @param {Number} status
             * @param {Function|Object} headers
             * @constructor
             */
            function Response(data, status, headers) {
                this.data = null;
                this.error = null;
                this.isValid = isValid;
                this.status = status;
                this.isClientError = isClientError;
                this.isServerError = isServerError;
                this.isNetworkError = isNetworkError;
                this.getIdentifier = getIdentifier;
                this.getResponseDebug = getResponseDebug;
                this.headers = headers;

                if (this.isValid() && typeof data === 'object') {
                    this.data = data.data || null; // NOTE: Enforces null, not
                    // undefined or empty
                    this.error = data.error || null;
                } else if (status >= Response.STATUS_SERVER_ERROR && data) {
                    this.error = data.error || null;
                }

                /**
                 * Indicates an API response other than fatal
                 *
                 * @returns {boolean}
                 */
                function isValid() {
                    return status >= Response.STATUS_INFORMATIONAL && !!getHeader(Response.HEADER_CONTENT_TYPE) ?
                        status < Response.STATUS_SERVER_ERROR && getHeader(Response.HEADER_CONTENT_TYPE)
                        .split(Response.DELIMITER_PARAMETER)
                        .indexOf(Response.MEDIA_TYPE_JSON) === 0 :
                        false;
                }

                /**
                 * Indicates a client error response
                 *
                 * @returns {boolean}
                 */
                function isClientError() {
                    return status >= Response.STATUS_CLIENT_ERROR && status < Response.STATUS_SERVER_ERROR;
                }

                /**
                 * Indicates a server error response based on known categories
                 *
                 * @returns {boolean}
                 */
                function isServerError() {
                    if (data && data.error) {
                        return Response.SERVER_ERRORS.indexOf(data.error.keyCategory) !== -1;
                    }

                    return false;
                }

                /**
                 * Indicates a network error
                 * @returns {boolean}
                 */
                function isNetworkError() {
                    return (typeof status !== 'number' || status <= 0);
                }

                /**
                 * Returns header used as an identifier to a version of profile data
                 *
                 * @returns {*}
                 */
                function getIdentifier() {
                    // @todo: ensure GC is returning ETag
                    return getHeader(Response.HEADER_ENTITY_TAG) || (data.data ? data.data.etag : undefined);
                }

                /**
                 * Get debugging information about the response, useful for logging.
                 * @returns {Object}
                 */
                function getResponseDebug() {
                    return {
                        responseData: data,
                        contentTypeHeader: getHeader(Response.HEADER_CONTENT_TYPE)
                    };
                }

                /**
                 * Returns a header
                 * @param  {string} name
                 * @return {string}
                 */
                function getHeader(name) {
                    var out;

                    if (typeof headers === 'function') {
                        out = headers(name);
                    }

                    Object.keys(headers).forEach(function(key) {
                        if (key.toLowerCase() === name.toLowerCase()) {
                            out = headers[key];
                        }
                    });

                    return out;
                }
            }

            /**
             * @const
             */
            Response.DELIMITER_PARAMETER = ';';

            /**
             * @const
             */
            Response.MEDIA_TYPE_JSON = 'application/json';

            /**
             * @const
             */
            Response.HEADER_ENTITY_TAG = 'ETag';

            /**
             * @const
             */
            Response.HEADER_CONTENT_TYPE = 'Content-Type';

            /**
             * @const
             */
            Response.STATUS_INFORMATIONAL = 100;

            /**
             * @const
             */
            Response.STATUS_CLIENT_ERROR = 400;

            /**
             * @const
             */
            Response.STATUS_SERVER_ERROR = 500;

            /**
             * @const
             */
            Response.SERVER_ERRORS = ['GC_CODE_OR_CONFIG_ERROR', 'SYSTEM_UNAVAILABLE', 'UNKNOWN_ERROR', 'SERVICE_UNAVAILABLE'];
        }());

    }, {}],
    62: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = {
                get: get,
                /**
                 * @TODO: Module is included from api.js; file does not belong in
                 *     "inner" frame Angular component
                 */
                isValid: isValid
            };

            /**
             * @const
             */
            var SUPPORTED_LOCALES = [
                'ar-XX',
                'da-DK',
                'de-DE',
                'en-AU',
                'en-US',
                'es-ES',
                'es-LA',
                'fi-FI',
                'fr-FR',
                'id-ID',
                'it-IT',
                'ja-JP',
                'ko-KR',
                'ms-MY',
                'nl-NL',
                'nn-NO',
                'pl-PL',
                'pt-BR',
                'ru-RU',
                'sv-SE',
                'th-TH',
                'tl-PH',
                'vi-VN',
                'zh-CN',
                'zh-HK'
            ];

            function get() {
                return SUPPORTED_LOCALES;
            }

            function isValid(locale) {
                return SUPPORTED_LOCALES.indexOf(locale) !== -1;
            }
        }());

    }, {}],
    63: [function(require, module, exports) {
        (function() {
            'use strict';

            var util = require('../../common/utils');

            module.exports = {
                getOptInOptOutLists: getOptInOptOutLists,
                getOptInOptOutTextIds: getOptInOptOutTextIds,
                getListNames: getProxyListNames,
                getInclusionList: getInclusionList,
                getExclusionList: getExclusionList,
                getAllListNames: getAllListNames,
                splitLists: splitProxyLists,
                applyMarketingValues: applyMarketingValues
            };

            /**
             * Transforms marketing list, from guest object, into code/value pairs.
             * @param   {array<object>} lists
             * @returns {object}
             */
            function getOptInOptOutLists(lists) {
                return (lists || []).reduce(function(map, item) {
                    map[item.code] = item.subscribed;
                    return map;
                }, {});
            }

            /**
             * Transforms marketing list, from guest object, to code/textId pairs
             * @param {array<object>} lists
             * @returns {object}
             */
            function getOptInOptOutTextIds(lists) {
                return (lists || []).reduce(function(map, item) {
                    if (item.textID) {
                        map[item.code] = item.textID;
                    }
                    return map;
                }, {});
            }

            /**
             * Get proxy list names from name/item pair
             *
             * @param {string} name
             * @param {object} item
             * @return {Array.string}
             **/
            function getProxyListNames(name, item) {
                var proxies = Object.keys((item || {}).proxy || {});

                if (proxies.length === 0) {
                    proxies.push(name);
                }

                return proxies;
            }

            /**
             * Get marketing lists, as a map, from guest.
             *
             * @param {object} marketing
             * @return {object}
             **/
            function getListsFromGuest(marketing) {
                return (marketing || []).reduce(function(map, item) {
                    map[item.code] = item;
                    return map;
                }, {});
            }

            /**
             * Get proxy splitting rules.
             *
             * @param {array} list
             * @return {object}
             **/
            function getProxyRules(list) {
                return (util.get(list, 'proxySplitRules') || []).reduce(function(map, item) {
                    map[item] = true;
                    return map;
                }, {});
            }

            /**
             * Filters a marketing list config, so it only includes marketing items in
             * "includeList".
             * needs to be removed.
             * @param   {object} lists
             * @param   {array} includeList
             * @returns {object}
             */
            function getInclusionList(lists, includeList) {
                getAllListNames(lists || {}).forEach(function(listName) {
                    if ((includeList || []).indexOf(listName) === -1) {
                        removeList(lists, listName);
                    }
                });

                return lists;
            }

            /**
             * Filters a marketing list config, so it excludes marketing items in "excludeList".
             * @param   {object} lists
             * @param   {array} excludeList
             * @returns {object}
             */
            function getExclusionList(lists, excludeList) {
                (excludeList || []).forEach(function(name) {
                    removeList(lists, name);
                });

                return lists;
            }

            /**
             * Traverses the list/proxy structure, and returns an array of all the
             * individual list names.
             * @param   {object} lists
             * @returns {array}
             */
            function getAllListNames(lists) {
                var names = [];

                Object.keys(lists || {}).forEach(function(name) {
                    if (lists[name].proxy) {
                        Object.keys(lists[name].proxy).forEach(function(name) {
                            names.push(name);
                        });
                    } else {
                        names.push(name);
                    }
                });

                return names;
            }

            /**
             * Returns true, if all proxy lists have checked === true.
             *
             * @param {object} proxy
             * @return {boolean}
             **/
            function allProxiesChecked(proxy) {
                var proxyData = Object.keys(proxy || {});

                return proxyData.length === 0 || proxyData.every(function(name) {
                    return proxy[name].checked === true;
                });
            }

            /**
             * Transform proxy map to a list.
             *
             * @param {object} proxy
             * @return {Array}
             **/
            function transformProxyMapToList(proxy) {
                return Object.keys(proxy).map(function(proxyName) {
                    return {
                        name: proxyName,
                        data: proxy[proxyName]
                    };
                });
            }

            /**
             * Split proxy out into top-level lists.
             * @param {object} lists
             * @param {string} proxyName
             */
            function splitProxy(lists, proxyName) {
                var keys = Object.keys(lists[proxyName].proxy || {});
                var proxy = lists[proxyName].proxy;

                delete lists[proxyName];

                keys.forEach(function(listName) {
                    var proxyObj = proxy[listName];
                    lists[listName] = proxyObj;
                });
            }

            /**
             * Remove list from lists object (including proxies).
             * @param   {object [lists={}]
             * @param   {string} name
             */
            function removeList(lists, name) {
                lists = lists || {};
                Object.keys(lists).forEach(function(listName) {
                    if (lists[listName].proxy && contains(lists[listName].proxy, name)) {
                        splitProxy(lists, listName);
                    }
                });

                if (contains(lists, name)) {
                    delete lists[name];
                }

                function contains(lists, name) {
                    return Object.keys(lists).indexOf(name) !== -1;
                }
            }

            /**
             * Set all lists (including proxies) to default unchecked.
             * @param {object} lists
             */
            function setAllUnchecked(lists) {
                Object.keys(lists || {}).forEach(function(listName) {
                    lists[listName].checked = false;

                    if (lists[listName].proxy) {
                        setAllUnchecked(lists[listName].proxy);
                    }
                });
            }

            /**
             * Split proxy lists, based on context and profileFields.
             *
             * @param {object} lists
             * @param {Array} marketing
             * @param {string} context
             * @param {boolean} isEPC
             * @return {object} processed result
             **/
            function splitProxyLists(lists, marketing, context, isEPC) {
                var profileFields = getListsFromGuest(util.clone(marketing));

                lists = util.clone(lists);
                if (!lists) {
                    return {};
                }

                if (context === 'UPDATE') {
                    setAllUnchecked(lists);
                }

                Object.keys(lists).forEach(function(name) {
                    if (lists[name].proxy) {
                        var splitList = false;
                        var toRemove = [];
                        var proxyRules = getProxyRules(lists[name]);
                        var listProxy = transformProxyMapToList(lists[name].proxy);

                        // Determine if list needs to be split, based on guest data.
                        for (var i = 0; i < listProxy.length; i++) {
                            // List has been previously recorded?
                            if (profileFields.hasOwnProperty(listProxy[i].name)) {

                                // Proxy splitting configuration has not been built in to EPC, as the rules should not
                                // be configurable. The UI must split only render discrete marketing entities in an
                                // update context, while removing all recorded entities in a PPU context. The following
                                // conditional will allow the UI to continue honoring the proxy splitting configuration
                                // for EPC-disabled clients, but apply the "hard-coded" logic for all EPC-enabled clients.
                                //
                                // TODO - Remove the EPC-disabled block and conditional once all clients have been
                                //        migrated to EPC and the double-write phase has ended.

                                if (!isEPC) {
                                    // Peforms proxy splitting based on the proxy split rules returned in siteConfig for
                                    // EPC-Disabled clients

                                    if (proxyRules.RECORDED || (proxyRules.DECLINE && listProxy[i].data.checked === false)) {
                                        splitList = true;
                                    }

                                    // Remove recorded item?
                                    if (proxyRules.DONT_SHOW_RECORDED) {
                                        toRemove.push(listProxy[i].name);
                                    }
                                } else {
                                    // Performs proxy splitting for EPC-Enabled clients

                                    // Since this conditional's parent block only executes when the guest's profile
                                    // contains the current entity, we can assume we're in an update scenario.
                                    // We should always split proxies in update or PPU scenarios. Additionally,
                                    // in a PPU scenario we need to remove entities that already have a recorded
                                    // response.

                                    splitList = true;

                                    if (context === 'PARTIAL') {
                                        toRemove.push(listProxy[i].name);
                                    }
                                }
                            }
                        }

                        // Perform proxy splitting step.
                        if (splitList === true) {
                            splitProxy(lists, name);
                        }

                        // Perform "DONT_SHOW_RECORDED" step.
                        toRemove.forEach(function(listName) {
                            removeList(lists, listName);
                        });
                    }
                });

                return lists;
            }

            /**
             * Apply marketing values to marketing lists object.
             *
             * @param {object} lists
             * @param {Array} marketing
             * @return {object}
             **/
            function applyMarketingValues(lists, marketing) {
                var profileFields = getListsFromGuest(marketing);

                Object.keys(lists).forEach(function(name) {
                    var listRoot = lists[name];
                    var subscribed = util.get(profileFields, [name, 'subscribed'].join('.'));
                    var checkable = typeof listRoot === 'object';

                    if (subscribed !== undefined && checkable) {
                        listRoot.checked = subscribed;
                    }

                    if (listRoot.proxy) {
                        var order;
                        // Transform proxy map into a proxy list.
                        (transformProxyMapToList(listRoot.proxy) || []).forEach(function(proxy) {
                            var name = proxy.name;
                            var data = proxy.data;

                            if (order) {
                                if (data.order < order) {
                                    order = data.order;
                                }
                            } else {
                                order = data.order;
                            }

                            listRoot.order = order;

                            // List has been previously recorded?
                            if (profileFields.hasOwnProperty(name)) {
                                // Set checked
                                data.checked = (util.get(profileFields, [name, 'subscribed'].join('.')) === true);
                            }
                        });
                        // Set roots to reflect proxy state.
                        if (checkable) {
                            listRoot.checked = allProxiesChecked(listRoot.proxy);
                        }
                    }
                });

                return lists;
            }
        }());

    }, {
        "../../common/utils": 42
    }],
    64: [function(require, module, exports) {

        module.exports = require('./multi-reg');


    }, {
        "./multi-reg": 65
    }],
    65: [function(require, module, exports) {

        // ONEID-2754, aka "Multi-Reg".
        // @TODO: Remove this once "The Townhouse" is in place.
        module.exports = {
            setEnabled: setEnabled,
            configure: configure
        };

        var utils = require('utils');
        var isEnabled = false;

        function setEnabled(enabled) {
            isEnabled = !!enabled;
        }

        function configure(initial) {
            if (isEnabled && utils.get(initial, 'data.compliance')) {
                var nameFieldConfig = {
                    editable: 'EDITABLE',
                    required: true
                };

                utils.set(initial, 'data.compliance.ageBands.ADULT.CREATE.firstName', nameFieldConfig);
                utils.set(initial, 'data.compliance.ageBands.ADULT.CREATE.lastName', nameFieldConfig);
                utils.set(initial, 'data.compliance.ageBands.TEEN.CREATE.firstName', nameFieldConfig);
                utils.set(initial, 'data.compliance.ageBands.TEEN.CREATE.lastName', nameFieldConfig);
            }

            return initial;
        }


    }, {
        "utils": 42
    }],
    66: [function(require, module, exports) {
        'use strict';
        var Q = require('q');
        var config = require('config');
        var messages = require('messages');
        var logger = require('logger');
        var utils = require('utils');
        /**
         * @ngdoc object
         * @name DisneyID.Lightbox.touchid.service:touchid(mobile)
         * @module DisneyID.Lightbox.touchid(mobile)
         *
         * @descriptiontouchid
         * Wrapper for touchid
         */

        var enabled;
        var optOut;
        var api;
        var relaunch = false;
        var optOutKey = 'touchOptOut';
        var biometricAuthType;

        function rejectWithObject() {
            return Q.reject({});
        }

        function resolveWithObject() {
            return Q.Promise(function(resolver) {
                resolver({});
            });
        }

        function configure(mobileConfig) {
            enabled = !!utils.get(mobileConfig, 'touchAuthEnabled');
            optOut = !!utils.get(mobileConfig, 'touchOptOut');
            biometricAuthType = utils.get(mobileConfig, 'biometricAuthType');

            if (!isEnabled()) {
                optOut = true;
            }
        }

        /**
         * Pass-thru from mobile SDK, for the most part. Possible return values are:
         *  'none'
         *  'fingerprint',
         *  'facial-recognition'
         *
         * @return string
         */
        function biometricMethod() {
            if (!isEnabled()) {
                return 'none';
            }

            return biometricAuthType;
        }

        module.exports = function init(reconfigure, mobileConfig) {
            if (!api || reconfigure) {
                configure(mobileConfig || config.getMobileConfig());

                api = {
                    biometricMethod: biometricMethod,
                    fingerprint: fingerprintWrapper,
                    isEnabled: isEnabled,
                    l10nBiometricKeys: l10nBiometricKeys,
                    saveCredentials: saveCredentials,
                    shouldTouchRelaunch: shouldTouchRelaunch
                };

                Object.defineProperty(api, 'optOut', {
                    get: function() {
                        return optOut;
                    },
                    set: function(value) {
                        optOut = value;

                        if (isEnabled()) {
                            messages.publish('bridge.setdata', optOutKey, optOut, Q.defer());

                            if (optOut) {
                                relaunch = false;
                                messages.publish('bridge.cleardata', ['username', 'password'], Q.defer());
                            }
                        }
                    }
                });
            }

            return api;
        };

        /**
         * @ngdoc method
         * @name DisneyID.Lightbox.touchid.service(mobile):touchid#isEnabled
         * @methodOf DisneyID.Lightbox.touchid(mobile)
         *
         * @description
         * Returns touchid isEnabled across the mobile bridge
         *
         * @return {Boolean} true if touch id is enabled and configured
         */
        function isEnabled() {
            return enabled;
        }

        /**
         * @ngdoc method
         * @name DisneyID.Lightbox.touchid.service(mobile):touchid#saveCredentials
         * @methodOf DisneyID.Lightbox.touchid(mobile)
         *
         * @description
         * saves the password across the mobile bridge
         *
         * @return {Promise}
         */
        function saveCredentials(username, password) {
            if (isEnabled() && !optOut) {
                var usernameDeferred = Q.defer();
                var passwordDeferred = Q.defer();

                messages.publish('bridge.setdata', 'username', username, usernameDeferred);
                messages.publish('bridge.setdata', 'password', password, passwordDeferred);

                return Q.all([usernameDeferred.promise, passwordDeferred.promise]);
            }

            return resolveWithObject();
        }

        function fingerprintWrapper() {
            if (!isEnabled()) {
                return rejectWithObject();
            }

            return (fingerprint).apply(null, [].slice.call(arguments));
        }

        /**
         * @ngdoc method
         * @name DisneyID.Lightbox.touchid.service(mobile):touchid#fingerprint
         * @methodOf DisneyID.Lightbox.touchid(mobile)
         *
         * @description
         * calls fingerprint across the mobile bridge
         *
         * @return {Promise}
         */
        function fingerprint() {
            var deferred = Q.defer();
            messages.publish('bridge.fingerprint', deferred);

            return deferred.promise
                .then(function(data) {
                    return data;
                }, function(data) {
                    if ((utils.get(data, 'touchid_state') || '').toLowerCase() === 'cancelled_by_user') {
                        relaunch = true;
                    }
                    throw data;
                });
        }

        // Boolean to determine to show relaunch valid
        function shouldTouchRelaunch() {
            return relaunch;
        }

        /**
         * Return proper l10n biometric login keys based on device OS
         * and biometric method
         * @returns {object}
         */
        function l10nBiometricKeys() {
            var os = utils.getOS().name;

            if (os === 'Android') {
                return {
                    buttonKey: 'FINGERPRINT_LOGIN',
                    ariaKey: 'USE_FINGERPRINT_LOGIN'
                };
            } else {
                if (biometricMethod() === 'fingerprint') {
                    return {
                        buttonKey: 'TOUCHID',
                        ariaKey: 'USETOUCHID'
                    };
                } else {
                    return {
                        buttonKey: 'FACEID',
                        ariaKey: 'USEFACEID'
                    };
                }
            }
        }

    }, {
        "config": 49,
        "logger": 20,
        "messages": 21,
        "q": 1,
        "utils": 42
    }],
    67: [function(require, module, exports) {
        'use strict';

        var config = require('./config');
        var logger = require('logger');
        var messages = require('messages');
        var metricsUtil = require('./metricsUtil');
        var utils = require('utils');

        /**
         * Starts the subscriber that listens for logs being sent from metrics.{log|error|send|timed|sendLogs}.
         * This function is required in order for logs to be received and sent to log.go.com/.
         *
         * @listens module:messages~metrics.log.send
         * @alias module:metrics.attachSubscribers
         *
         * @example
         metrics.attachSubscribers();
         metrics.init({...});
         *
         */
        module.exports = function() {
            messages.subscribe('metrics.log.send', function(givenLog) {
                var log = utils.clone(givenLog);

                if (metricsUtil.throttle(log.action_name)) {
                    return;
                }

                metricsUtil.processLog(log)
                    .then(function(processedLog) {
                        processedLog = metricsUtil.removeInvalidFields(processedLog);

                        var fields = metricsUtil.hasAllRequiredFields(processedLog);

                        if (fields.valid) {
                            config.options.handleSendLogs(processedLog);
                        } else if (Array.isArray(fields.missing)) {
                            logger.error('Missing required fields "' + fields.missing.join(', ') + '"');
                        }
                    });
            });
        };

    }, {
        "./config": 69,
        "./metricsUtil": 73,
        "logger": 20,
        "messages": 21,
        "utils": 42
    }],
    68: [function(require, module, exports) {
        'use strict';

        var logger = require('logger');
        var messages = require('messages');
        var utils = require('utils');

        module.exports = {
            log: log,
            error: error,
            send: send
        };

        /**
         * Sending error log messages.
         * @alias module:metrics.error
         * @param {String} actionName - Log Action Name
         * @param {Object} [params={}] - Params that will be attached to the log
         * @param {Boolean} isError - Log type
         *
         * @example
         // With log params
         metrics.error(metrics.actions.event.login, {info: {...}});

         * @example
         // Without log params
         metrics.error(metrics.actions.event.login);

         */
        function log(actionName, args, isError) {
            if (typeof actionName === 'string') {
                send(utils.assign({
                    action_name: actionName,
                    success: !isError
                }, utils.clone(args || {})));
            } else {
                logger.error('Invalid action name: "' + actionName + '." Must be of type string.');
            }
        }

        /**
         * Sending error log messages.
         * @alias module:metrics.error
         * @param {String} actionName - Log Action Name
         * @param {Object} [params={}] - Params that will be attached to the log
         *
         * @example
         // With log params
         metrics.error(metrics.actions.event.login, {info: {...}});

         * @example
         // Without log params
         metrics.error(metrics.actions.event.login);

         */
        function error(actionName, args) {
            log(actionName, args, true);
        }

        /**
         * Fully customizable log message
         * @alias module:metrics.send
         * @param {Object} log - Params that will be attached to the log.
         * @param {Object} shouldProcessLogs
         * @example
         metrics.send({
            action_name: metrics.actions.event.login
         });
         */
        function send(log, shouldProcessLogs) {
            messages.publish('metrics.log.send', log, shouldProcessLogs);
        }

    }, {
        "logger": 20,
        "messages": 21,
        "utils": 42
    }],
    69: [function(require, module, exports) {
        'use strict';

        module.exports = {
            webLogUrl: 'https://log.go.com/log',
            attributes: {},
            testClients: [
                'DISNEYID-UI.TEST',
                'ONEID-TEST.EXPERIENCES.WEB'
            ],
            options: {
                handleSendLogs: function() {}
            }
        };

    }, {}],
    70: [function(require, module, exports) {
        'use strict';

        // see https://github.com/janvanhelvoort/browserify-conditionalify
        var UI_CLOSE_THROTTLE = 50;

        module.exports = {

            /**
             * List of common error codes
             * @alias module:metrics.codes
             */
            codes: {
                NOT_INITIALIZED: {
                    category: 'FAILURE_BY_DESIGN',
                    code: 'ONEID_NOT_YET_INITIALIZED'
                },

                SESSION_NOT_ESTABLISHED: {
                    category: 'FAILURE_BY_DESIGN',
                    code: 'SESSION_NOT_ESTABLISHED'
                },

                READ_TOKEN_FAILURE: {
                    category: 'UNKNOWN_ERROR',
                    code: 'READ_TOKEN_FAILURE'
                },

                UNKNOWN: {
                    category: 'UNKNOWN',
                    code: 'UNKNOWN_ERROR'
                }
            },

            /**
             * @const {object} throttling  Define throttling: percentage by action_name
             * @private
             * @property    {number}    api:donotdisturb        Default value of 2
             * @property    {number}    api:getactivitystatus   Default value of 2
             * @property    {number}    api:getguest            Default value of 2
             * @property    {number}    api:getguestnewsletters Default value of 2
             * @property    {number}    api:getloggedinstatus   Default value of 2
             * @property    {number}    api:gettruststatestatus Default value of 2
             * @property    {number}    api:init                Default value of 2
             */
            throttling: {
                'api:setdonotdisturb': 2,
                'api:getactivitystatus': 2,
                'api:getguestdata': 2,
                'api:getguestnewsletters': 2,
                'api:getloggedinstatus': 2,
                'api:gettruststatestatus': 2,
                'api:init': 2,
                'event:init': 2,
                'log:ui:close': UI_CLOSE_THROTTLE
            },

            /**
             * List of all action_names
             * @alias module:metrics.actions
             */
            actions: {
                api: {
                    doNotDisturb: 'api:setdonotdisturb',
                    forceTokenRefresh: 'api:forcetokenrefresh',
                    getActivityStatus: 'api:getactivitystatus',
                    getEditableProfileFields: 'api:geteditableprofilefields',
                    getGuest: 'api:getguestdata',
                    getGuestNewsletters: 'api:getguestnewsletters',
                    getInlineNewsletters: 'api:getinlinenewsletters',
                    getLicensePlateDataBag: 'api:getLicensePlateDataBag',
                    getLoggedInStatus: 'api:getloggedinstatus',
                    getTrustStateStatus: 'api:gettruststatestatus',
                    init: 'api:init',
                    launchAdultVerification: 'api:launch:adultverification',
                    launchDisplayName: 'api:launch:displayname',
                    launchEmailVerification: 'api:launch:emailverification',
                    launchGuestFlow: 'api:launch:guestflow',
                    launchLicensePlate: 'api:launch:licenseplate',
                    launchLogin: 'api:launch:login',
                    launchNewsletters: 'api:launch:newsletters',
                    launchProfile: 'api:launch:profile',
                    launchReauth: 'api:launch:reauth',
                    launchRecoverUsername: 'api:launch:recoverusername',
                    launchRegistration: 'api:launch:registration',
                    launchRequestActivity: 'api:launch:requestactivity',
                    launchResetPassword: 'api:launch:resetpassword',
                    launchSocialRegistration: 'api:launch:socialregistration',
                    logout: 'api:logout',
                    redeemLicensePlateCode: 'api:redeemlicenseplatecode',
                    setEditableProfileFields: 'api:seteditableprofilefields',
                    setInlineNewsletters: 'api:setinlinenewsletters'
                },
                event: {
                    adultVerificationForm: 'event:adultverificationform',
                    adultVerificationQuiz: 'event:adultverificationquiz',
                    adultVerificationStatus: 'event:adultverificationstatus',
                    create: 'event:create',
                    createFB: 'event:create:fb',
                    createGoogle: 'event:create:google',
                    deactivateAccount: 'event:deactivateaccount',
                    deactivateAccountBlocked: 'event:deactivateaccountblocked',
                    dobInterstitial: 'event:dobinterstitial',
                    externalLink: 'event:externallink',
                    facebookDataMissing: 'event:facebook:datamissing',
                    getLicensePlateDataBag: 'event:getlicenseplatedatabag',
                    getPasswordRecoveryMethods: 'event:getpasswordrecoverymethods',
                    getrecoverymethods: 'event:getrecoverymethods',
                    guestFlow: 'event:guestflow',
                    init: 'event:init',
                    licensePlateChangeAccount: 'event:licenseplatechangeaccount',
                    licensePlateRedeemed: 'event:licenseplateredeemed',
                    login: 'event:login',
                    loginFB: 'event:login:fb',
                    loginGoogle: 'event:login:google',
                    loginObo: 'event:login:obo',
                    loginSessionTransfer: 'event:login:sessiontransfer',
                    loginStart: 'event:clickLogin:fromRegister',
                    loginTouchId: 'event:login:touchid',
                    loginWithRecoveryToken: 'event:login:recoverytoken',
                    logout: 'event:logout',
                    logoutAccountDeactivated: 'event:logout:accountdeactivated',
                    logoutApi: 'event:logout:api',
                    logoutGetGuest: 'event:logout:getguest',
                    logoutInit: 'event:logout:init',
                    logoutInOtherTab: 'event:logout:loggedoutinothertab',
                    logoutInvalidAccessAndRefreshToken: 'event:logout:invalidaccessandrefreshtoken',
                    logoutInvalidateSocialTokens: 'event:logout:invalidate:socialtokens',
                    logoutInvalidRefreshToken: 'event:logout:invalidrefreshtoken',
                    logoutPasswordAttemptsFailed: 'event:logout:passwordattemptsfailed',
                    logoutReauthChangeAccount: 'event:logout:reauthchangeaccount',
                    logoutRefreshFailed: 'event:logout:refreshfailed',
                    logoutTokenDataDeleted: 'event:logout:tokendatadeleted',
                    logoutUnknown: 'event:logout:unknown',
                    newsletters: 'event:newsletters',
                    otpRecoverPasswordLogin: 'event:login:otprecovery',
                    otpResetPassword: 'event:update:otpresetpassword',
                    otpUpgradeNrt: 'event:otp:upgradenrt',
                    ppu: 'event:ppu',
                    preinit: 'event:preinit',
                    reauth: 'event:reauth',
                    recaptcha: 'event:recaptcha',
                    recoverUsername: 'event:recoverusername',
                    redeemOtpCode: 'event:redeemOtpCode',
                    redeemOtpEmailVerification: 'event:emailverification:redeem',
                    refresh: 'event:refresh',
                    resetPassword: 'event:resetpassword',
                    requestOtpEmail: 'event:requestOtp:email',
                    requestOtpEmailVerification: 'event:emailverification:request',
                    requestOtpPhoneVerification: 'event:requestOtpPhoneVerification',
                    requestOtpRecovery: 'event:requestOtpRecovery',
                    requestOtpSms: 'event:requestOtp:sms',
                    resendOtpEmail: 'event:resendOtp:email',
                    resendOtpEmailVerification: 'event:emailverification:resend',
                    resendOtpPhoneVerification: 'event:resendOtpPhoneVerification',
                    resendOtpRecovery: 'event:resendOtpRecovery',
                    resendOtpSms: 'event:resendOtp:sms',
                    serviceError: 'event:serviceerror',
                    sessionTransferActivate: 'event:sessiontransfer:activate',
                    sessionTransferRedeem: 'event:sessiontransfer:redeem',
                    setInlineNewsletters: 'event:inlinemarketing',
                    socialLoginSetPassword: 'event:sociallogin:setpassword',
                    socialPasswordLinkClick: 'event:socialPasswordLinkClick',
                    tokenRefresh: 'event:token:refresh',
                    update: 'event:update',
                    updateAddress: 'event:update:address',
                    updateDisplayName: 'event:update:displayname',
                    updatePhoneRequestOtpPhoneVerification: 'event:updatePhoneRequestOtpPhoneVerification',
                    updatePPU: 'event:update:ppu',
                    verifyOtpCodeAuthentication: 'event:login:otp',
                    verifyOtpCodePasswordRecover: 'event:verifyOtpCodePasswordRecover',
                    verifyOtpCodePhoneVerification: 'event:verifyOtpCodePhoneVerification'
                }
            },

            validLogFields: [
                'action_name',
                'alternateConfig',
                'anon',
                'appid',
                'client_id',
                'connection_type',
                'context',
                'conversation_id',
                'correlation_id',
                'direct_flow_version',
                'error_category',
                'error_codes',
                'experience',
                'info',
                'make_model',
                'os',
                'process_time',
                'reporting',
                'sdk_version',
                'source',
                'success',
                'swid',
                'timestamp',
                'user_agent',
                'unid',
                'trace',
                'trace_data'
            ],

            requiredLogFields: [
                'action_name',
                'anon',
                'client_id',
                'appid',
                'success',
                'swid',
                'timestamp'
            ]
        };

    }, {}],
    71: [function(require, module, exports) {
        'use strict';

        /**
         * Module for logging application metrics to Metrics.
         *
         * @module metrics
         * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
         */

        var constants = require('./constants');
        var attachSubscribers = require('./attatchSubscribers');
        var init = require('./init');
        var timed = require('./timed');
        var logs = require('./basicLogTypes');
        var config = require('./config');

        module.exports = {
            init: init,
            actions: constants.actions,
            codes: constants.codes,
            attachSubscribers: attachSubscribers,
            error: logs.error,
            log: logs.log,
            send: logs.send,
            timed: timed,
            setReportingProperties: function(reporting, experience) {
                config.attributes.reporting = reporting;
                if (experience) {
                    config.attributes.experience = experience;
                }
            },
            setWebLogUrl: function(url) {
                config.webLogUrl = url;
            },
            setClientId: function(clientId) {
                config.attributes.client_id = clientId;
            }
        };

    }, {
        "./attatchSubscribers": 67,
        "./basicLogTypes": 68,
        "./config": 69,
        "./constants": 70,
        "./init": 72,
        "./timed": 75
    }],
    72: [function(require, module, exports) {
        'use strict';

        var config = require('./config');
        var utils = require('utils');

        /**
         * Initialize metrics.
         * @alias module:metrics.init
         * @param {String} defaultAttributes - Defines the default attributes for all log messages.
         * @param {Function} [handleSendLogs=function(){}] - Function that will send processed log to log.go.com.
         * @example
         // With log params
         var metrics = require('metrics');
         metrics.init({
            app_id: 'APP_ID',
            client_id: 'CLIENT_ID_123'
         }, handleSendLogs);

         function handleSendLogs(log){
             ...
         }
         *
         */
        module.exports = function(defaultAttributes, handleSendLogs) {
            utils.assign(config.attributes, defaultAttributes);

            if (typeof handleSendLogs === 'function') {
                config.options.handleSendLogs = handleSendLogs;
            }
        };

    }, {
        "./config": 69,
        "utils": 42
    }],
    73: [function(require, module, exports) {
        'use strict';

        var config = require('./config');
        var constants = require('./constants');
        var logger = require('logger');
        var token = require('session.token');
        var swid = require('session.swid');
        var unid = require('session.unid');
        var Q = require('q');
        var utils = require('utils');

        module.exports = {
            throttle: throttle,
            processLog: processLog,
            sortLog: sortLog,
            dedup: dedup,
            removeInvalidFields: removeInvalidFields,
            hasAllRequiredFields: hasAllRequiredFields
        };

        /**
         * Return a boolean to specify whether or not a throttle should be applied
         * to this call.
         * @function applyThrottle
         * @private
         * @param   {string} action The action_name of the metric
         * @returns {Boolean}  Whether or not to throttle the current call
         */
        function throttle(actionName) {
            actionName = (typeof actionName === 'string' ? actionName : '').toLowerCase();

            var throttleAction = constants.throttling[actionName];
            if (typeof throttleAction === 'number') {
                return !utils.randomChance(throttleAction / 100);
            }

            return false;
        }

        /**
         * Processes logs before they are logged to log.go.com
         * @function processLog
         * @private
         * @param {Object} given log
         * @returns {Promise.<Object>} Promise that returns the processed log.
         */
        function processLog(givenLog) {
            var info = utils.immutableAssign(utils.get(config, 'attributes.info') || {}, utils.get(givenLog, 'info'));
            var log = utils.immutableAssign((config.attributes || {}), givenLog);
            var reporting = utils.clone(utils.get(log, 'reporting') || utils.get(config.attributes, 'reporting') || {});

            if (Object.keys(info)) {
                log.info = info;
            }

            // @TODO: Verify and unit-test this logic
            // @TODO: Unit test this logic
            if (typeof reporting === 'object') {
                if (reporting.context) {
                    log.context = reporting.context;
                    delete reporting.context;
                }

                if (reporting.source) {
                    log.source = reporting.source;
                    delete reporting.source;
                }

                if (reporting.experience) {
                    log.experience = reporting.experience;
                    delete reporting.experience;
                }

                if (Object.keys(reporting).length) {
                    log.reporting = utils.formatLogInfoBlock(reporting);
                } else {
                    delete log.reporting;
                }
            }

            if (log.hasOwnProperty('error_codes') && (typeof log.error_codes !== 'string' && !Array.isArray(log.error_codes))) {
                log.error_codes = constants.codes.UNKNOWN.code;
                if (!log.error_category) {
                    log.error_category = constants.codes.UNKNOWN.category;
                }
            }

            if (log.error_codes) {
                if (Array.isArray(log.error_codes)) {
                    log.error_codes = log.error_codes.join();
                }
                log.error_codes = log.error_codes.replace(/\s/g, '_');
                log.error_codes = dedup(sortLog(log.error_codes));

                if (log.error_codes && !log.error_category) {
                    // Default the error_category, if one isn't provided but codes are.
                    log.error_category = 'FAILURE_BY_DESIGN';
                }
            }

            // If error codes is a blank string, remove it
            if (!log.error_codes && typeof log.error_codes === 'string') {
                delete log.error_codes;
            }

            if (typeof log.process_time !== 'number') {
                log.process_time = 1;
            }

            if (typeof log.success !== 'boolean') {
                log.success = true;
            }

            log.success = log.success.toString();
            log.timestamp = new Date().toISOString();
            log.conversation_id = log.conversation_id || utils.uuid();
            log.correlation_id = log.correlation_id || utils.uuid();

            return Q.allSettled([token.read(), swid.read(), unid.read()])
                .spread(function(tokenRead, swidRead, unidRead) {
                    var unidValue = utils.get(unidRead, 'value.unid');
                    if (typeof log.swid !== 'string') {
                        log.swid = tokenRead.state === 'rejected' ?
                            swidRead.value.swid :
                            tokenRead.value.token.swid;
                    }

                    if (typeof log.anon !== 'boolean') {
                        log.anon = !/{/.test(log.swid);
                    }
                    log.anon = log.anon.toString();

                    if (unidValue) {
                        log.unid = unidValue;
                    }

                    // attach extra-special nuggets of information to a select few log messages.
                    // the info property is extended _here_ as opposed to the point at which the log
                    // message is created, as this extra stuff comes from the outer by way of `swid.read`.
                    if (log.action_name === constants.actions.event.tokenRefresh || log.action_name.indexOf('log:') === 0) {
                        log.info = utils.immutableAssign({
                            cookieLength: swidRead.value.cookieLength
                        }, (log.info || {}));
                    }

                    if (utils.isObject(log.info)) {
                        log.info = utils.formatLogInfoBlock(log.info);
                    }

                    return log;
                });
        }


        /**
         * Sorts logs
         *
         * @function sort
         * @param log
         * @returns {String} log
         */
        function sortLog(log) {
            var logs = log.split(',');
            logs.sort(function(a, b) {
                if (a.toLowerCase() < b.toLowerCase()) {
                    return -1;
                }
                if (a.toLowerCase() > b.toLowerCase()) {
                    return 1;
                }
                return 0;
            });

            return logs;
        }


        /**
         * Removes duplicates from array of logs
         * @function dedup
         * @param logs
         * @returns {string} unique of logs.
         */
        function dedup(logs) {
            var result = logs.reduceNative(function(accum, current) {
                if (accum.indexOf(current) < 0) {
                    accum.push(current);
                }
                return accum;
            }, []);

            return result.join();
        }


        /**
         * Filters out invalid fields from a log.
         * @function removeInvalidFields
         * @private
         * @param {Object} given log
         * @returns {Object} - filtered log
         */
        function removeInvalidFields(log) {
            if (!utils.isObject(log) && !Array.isArray(log)) {
                return log;
            }

            var fields = Object.keys(log).reduceNative(function(value, field) {
                var fieldVal = log[field];
                if (constants.validLogFields.indexOf(field) === -1) {
                    value.invalid.push(field);
                } else {
                    value.valid[field] = fieldVal;
                }
                return value;
            }, {
                valid: {},
                invalid: []
            });

            if (fields.invalid.length > 0) {
                logger.error('Invalid fields: {' + fields.invalid.join(', ') + '} are not allowed in a metrics log.');
            }

            return fields.valid;
        }

        /**
         * Checks to see if a log contains all of the required fields.
         * @function hasAllRequiredFields
         * @private
         * @param {Object} given log
         * @returns {Object} reqFields
         * @returns {Boolean} reqFields.valid - If the log is valid or not
         * @returns {Array} reqFields.missing - Missing fields
         */
        function hasAllRequiredFields(log) {
            if (!utils.isObject(log) && !Array.isArray(log)) {
                return {
                    valid: false,
                    missing: []
                };
            }

            var missingFields = constants.requiredLogFields.reduceNative(function(val, fieldName) {
                if (!log.hasOwnProperty(fieldName)) {
                    val.push(fieldName);
                }
                return val;
            }, []);

            return {
                valid: missingFields.length === 0,
                missing: missingFields
            };
        }

    }, {
        "./config": 69,
        "./constants": 70,
        "logger": 20,
        "q": 1,
        "session.swid": "session.swid",
        "session.token": "session.token",
        "session.unid": "session.unid",
        "utils": 42
    }],
    74: [function(require, module, exports) {
        'use strict';

        var config = require('../config');

        module.exports = function(log) {
            var instrumented = false;

            // https://github.com/janvanhelvoort/browserify-conditionalify

            // log.client_id will only be undefined when sending a pre-init log event
            if (log.client_id && (instrumented || isTestClient(log.client_id))) {
                window.__metrics__ = (window.__metrics__ || []).concat([log]);
            }

            var queryParams = Object.keys(log)
                .reduceNative(function(arr, field) {
                    var uri = log[field];
                    if (typeof val === 'object') {
                        uri = JSON.stringify(uri);
                    }
                    arr.push(field + '=' + encodeURIComponent(uri));
                    return arr;
                }, [])
                .sort()
                .join('&');

            var path = config.webLogUrl + '?' + queryParams;

            var xhr = new XMLHttpRequest();
            xhr.open('GET', path);
            xhr.withCredentials = true;
            xhr.send(null);
        };

        function isTestClient(clientId) {
            if ((/^(LPTEST)-/).test(clientId)) {
                return true;
            }
            return config.testClients.some(function(testClientId) {
                return clientId.replace(/\-(PROD|QA|STAGE|VAL)$/g, '') === testClientId;
            });
        }

    }, {
        "../config": 69
    }],
    75: [function(require, module, exports) {
        'use strict';

        var logs = require('./basicLogTypes');
        var utils = require('utils');

        /**
         * Logging method for timed events.
         *
         * @alias module:metrics.timed
         *
         * @param {String} actionName - Log Action Name
         * @param {Object} [params={}] - Params that will be attached to the log.
         * @param {Number} [startTime=Date.now()] - Provide
         *
         * @returns {Object} metrics.timed
         * @returns {Function} metrics.timed.success - log timed successful message.
         * @returns {Function} metrics.timed.error - log timed error message.
         * @returns {Function} metrics.timed.send - log timed message. Takes a second parameter sets success status.
         *
         * @example
         // Timed success log
         var timedLog = metrics.timed(metrics.actions.event.login);

         setTimeout(function(){
            timedLog.success({info: {...}});
            }, 100);

         * @example
         // Timed success log
         var timedLog = metrics.timed(metrics.actions.event.login, {swid: 'default_swid', conversation_id: 'default_conv_id'});

         setTimeout(function(){
            timedLog.error({conversation_id: 'override_default_conv_id')});
            }, 100);

         * @example
         // Timed send log
         var defaultStartTime = Date.now();

         var timedLog = metrics.timed(metrics.actions.event.login, null, defaultStartTime);

         setTimeout(function(){
            // Will send successful log.
            timedLog.send({}, true);
            // Will send error log.
            timedLog.send({swid: 'requested_swid'}, false);
         }, 100);
         */
        module.exports = function(actionName, preArgs, startingTime) {
            var logArguments = utils.isObject(preArgs) ? preArgs : {};
            var processStart = typeof startingTime === 'number' ? startingTime : Date.now();


            function send(args, isSuccess) {
                logArguments.process_time = Date.now() - processStart;
                if (typeof isSuccess === 'boolean' ? isSuccess : true) {
                    logs.log(actionName, utils.assign({}, logArguments, args || {}));
                } else {
                    logs.error(actionName, utils.assign({}, logArguments, args || {}));
                }
            }

            return {
                error: function(args) {
                    send(args, false);
                },
                send: send,
                success: function(args) {
                    send(args);
                }
            };
        };

    }, {
        "./basicLogTypes": 68,
        "utils": 42
    }],
    76: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module reads, writes and deletes the ageBand/country cookie
             *
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @module ageband-country-cookie
             * @requires module:utils
             * @requires module:environment
             * @requires module:logger
             */

            module.exports = {
                read: read,
                write: write,
                remove: remove
            };

            var utils = require('utils');
            var env = require('../environment');
            var logger = require('logger');
            var cookie = require('cookie');

            var agebandMap = {
                X: 'ADULT',
                Y: 'TEEN',
                Z: 'CHILD'
            };

            var agebandInverseMap = {
                ADULT: 'X',
                TEEN: 'Y',
                CHILD: 'Z'
            };

            /**
             * Read ageband/country cookie. Returns null if it does not exist.
             * @function read
             * @static
             * @returns {Object|null} An object containing a guest ageBand and country code OR null if cookie doesn't exist.
             */
            function read() {
                logger.log('AgebandCountryCookie#read');
                var cookieValue = cookie.read(getCookieName()) || '';
                var ageband = agebandMap[cookieValue.substring(0, 1)];
                var country = cookieValue.substring(1);

                if (!cookieValue || !ageband || !country) {
                    return null;
                }

                return {
                    ageBand: ageband,
                    countryCode: country
                };
            }

            /**
             * Write the ageband/country cookie.
             * @function write
             * @static
             * @param {object} guest - The guest object being processed
             * @returns {boolean} True if cookie was successfully written and false if otherwise.
             */
            function write(guest) {
                logger.log('AgebandCountryCookie#write');
                var ageband = agebandInverseMap[(utils.get(guest, 'profile.ageBand') || '')];
                var country = utils.get(guest, 'profile.region') || utils.get(guest, 'profile.countryCodeDetected');
                var cookieValue = ageband + country;
                var cookieExpire;

                if (!ageband || !country) {
                    logger.debug('Failed to write country/ageband cookie');
                    return false;
                }

                cookieExpire = new Date();
                cookieExpire.setFullYear(cookieExpire.getFullYear() + 33);

                cookie.write(getCookieName(), cookieValue, env.getCookieDomain(), '/', cookieExpire, false);
                return true;
            }

            /**
             * Deletes ageband/country cookie
             * @function remove
             * @static
             */
            function remove() {
                logger.log('AgebandCountryCookie#remove');
                cookie.remove(getCookieName(), env.getCookieDomain(), '/');
            }

            /**
             * Get the cookie name for a client ID
             * @function getCookieName
             * @private
             * @returns {string} Name of the cookie.
             */
            function getCookieName() {
                return env.getClientId() + '-ac';
            }
        }());

    }, {
        "../environment": 79,
        "cookie": 11,
        "logger": 20,
        "utils": 42
    }],
    77: [function(require, module, exports) {

        'use strict';

        var messages = require('messages');

        module.exports = {
            view: messages.publish.bind(messages, 'analytics.view'),
            link: messages.publish.bind(messages, 'analytics.link')
        };


    }, {
        "messages": 21
    }],
    78: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             *
             * @module config
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:Q
             * @requires module:messages
             * @requires module:utils
             */

            var Q = require('../../../../assets/common/js/q');
            var messages = require('messages');
            var utils = require('utils');

            module.exports = {
                getSite: getSite,
                getNewsletters: getNewsletters,
                getL10N: getL10N
            };

            /**
             * Get the site configuration object
             * @function getSite
             * @static
             * @return {Promise}
             */
            function getSite() {
                var deferred = Q.defer();
                messages.publish('siteconfig.read', null, deferred);

                // Force the promise to timeout, if inner is not responsive.
                utils.promise.timeout(deferred, 1000 * 90);
                return deferred.promise;
            }

            /**
             * Get the site configuration object
             * @function getSite
             * @static
             * @return {Promise}
             */
            function getNewsletters(guest, ageGate, campaignId) {
                var deferred = Q.defer();

                messages.publish('newsletters.read', {
                    guest: guest,
                    ageBand: ageGate,
                    campaignId: campaignId
                }, deferred);

                // Force the promise to timeout, if inner is not responsive.
                utils.promise.timeout(deferred, 1000 * 90);
                return deferred.promise;
            }

            /**
             * Get the site configuration object
             * @function getL10N
             * @static
             * @return {Promise}
             */
            function getL10N(stringIds) {
                var deferred = Q.defer();
                messages.publish('l10n.get', stringIds, deferred);

                // Force the promise to timeout, if inner is not responsive.
                utils.promise.timeout(deferred, 1000 * 90);
                return deferred.promise;
            }
        }());

    }, {
        "../../../../assets/common/js/q": 1,
        "messages": 21,
        "utils": 42
    }],
    79: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module sets and gets the environment variables for a site
             *
             * @module environment
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:utils
             * @requires module:debug
             * @requires module:environment-helper
             * @requires module:ageband-country-cookie
             * @requires module:logger
             * @requires module:build-identifier
             */

            module.exports = {
                init: init,
                getOrigin: getOrigin,
                getProtocol: getProtocol,
                getPath: getPath,
                getClientId: getClientId,
                getAlternateConfig: getAlternateConfig,
                setCorrelationId: setCorrelationId,
                getClientIdEnvSuffix: getClientIdEnvSuffix,
                getCorrelationId: getCorrelationId,
                getCorrelationIdTimeStamp: getCorrelationIdTimeStamp,
                getCookieDomain: getCookieDomain,
                getLangPref: getLangPref,
                getResponderPageUrl: getResponderPageUrl,
                getStandardQueryParams: getStandardQueryParams,
                isDirectFlow: isDirectFlow,
                isInline: isInline,
                getInlineContainerSelector: getInlineContainerSelector
            };

            var messages = require('messages');
            var utils = require('../common/utils');
            var debug = require('debug');
            var envHelper = require('../common/environment-helper');
            var agebandCountryCookie = require('./ageband-country-cookie');
            var logger = require('logger');
            var buildIdentifier = require('../common/build-identifier');
            var origin;
            var protocol;
            var cookieDomain;
            var scriptPath;
            var inline = false;
            var inlineContainerSelector;

            // Environmental defaults
            var config = {
                langPref: 'en-US'
            };

            /**
             * Initializes the Environments module
             * @function init
             * @static
             * @param  {Object} params Configuration object passed to DisneyID constructor by client
             * @param  {Object} configurationOpts
             */
            function init(params, configurationOpts) {
                var host;

                utils.assign(config, params);

                config.isDirectFlow = !!utils.get(configurationOpts, 'isDirectFlow');

                // Determine origin
                // TODO:: Determine if this logic is correct... We're essentially finding
                // the host that OUR code lives on, not the host of the outer frame.
                scriptPath = params.origin || (document.querySelector('script[src$="/outer/DisneyID.js"]') || {}).src ||
                    (document.getElementById('disneyid-script') || {}).src || document.location.href;

                config.environment = envHelper.getEnvironmentFromUrl(scriptPath);
                host = utils.url.getHostName(scriptPath);

                // Origin must reflect where the Lightbox is being loaded from, not necessarily DisneyID.js.
                origin = getOriginUrl(getPath());

                // Parse the protocol
                protocol = (location.protocol.toLowerCase().indexOf('https') === -1 ? 'http' : 'https');

                // Determine cookie domain
                if (config.cookieDomain) {
                    cookieDomain = config.cookieDomain;
                } else if (params.responderPage) {
                    // @TODO: Verify that this didn't break the tests
                    cookieDomain = _getCommonHost(config.outerDomain, utils.url.getHostName(params.responderPage));
                }

                messages.subscribe('env.correlation.read', function(data, deferred) {
                    deferred.resolve(config.correlationId);
                });

                inline = params.inline;
                inlineContainerSelector = params.inlineContainerSelector;
            }

            function isInline() {
                return inline;
            }

            function getInlineContainerSelector() {
                return inlineContainerSelector;
            }

            /**
             * Return the DisneyID environment origin
             * @function getOrigin
             * @static
             * @return {String} Protocol and host of DisneyID environment
             */
            function getOrigin() {
                return origin;
            }

            /**
             * Return the top site's protocol
             * @function getProtocol
             * @static
             * @return {string} Protocol
             */
            function getProtocol() {
                return protocol;
            }

            /**
             * Gets the client Id for a site
             * @function getClientId
             * @static
             * @return {string} The client ID for a site
             */
            function getClientId() {
                // Append environment suffix, if one does not exist.
                if (typeof config.clientId !== 'undefined' && !envHelper.clientIdHasSuffix(config.clientId)) {
                    return [config.clientId, envHelper.getClientIdEnvironment(config.environment)].join('-');
                }

                return config.clientId;
            }

            /**
             * Gets alternate config property.
             */
            function getAlternateConfig() {
                return config.alternateConfig;
            }

            /**
             * Get the client Id suffix for the site
             * @function getClientIdEnvSuffix
             * @static
             * @return {string} The client ID suffix for the site
             */
            function getClientIdEnvSuffix() {
                return envHelper.getClientIdEnvironment(envHelper.getClientIdSuffix(getClientId()));
            }

            /**
             * Get the correlationId for a site
             * @function getCorrelationId
             * @static
             * @return {string} The correlationId
             */
            function getCorrelationId() {
                return config.correlationId;
            }

            /**
             * Sets the correlationId for a user
             * @function setCorrelationId
             * @static
             * @param id {string} Value for the correlation ID
             */
            function setCorrelationId(id) {
                config.correlationId = id;
            }

            /**
             * Gets the time stamp of a correlationId
             * @function getCorrelationIdTimeStamp
             * @static
             * @return {string} The time stamp of a correlationId
             */
            function getCorrelationIdTimeStamp() {
                return config.correlationIdTimeStamp;
            }

            /**
             * Gets the language preference of the environment
             * @function getLangPref
             * @static
             * @return {string} The language preference stamp of a correlationId
             */
            function getLangPref() {
                return config.langPref;
            }

            /**
             * Gets the url path of a site
             * @function getPath
             * @static
             * @return {string} The url of the site
             */
            function getPath() {
                var clone = utils.clone(getStandardQueryParams());
                var clientId = pluck('clientId', clone);
                var langPref = pluck('langPref', clone);
                var l10nContent = pluck('l10nContent', clone);
                var useQAContent = l10nContent ? 'content=' + l10nContent + '&' : '';
                var path = scriptPath.replace('outer/DisneyID.js', clientId + '/' + langPref + '?include=config,l10n,js,html&' + useQAContent) + utils.buildQueryString(clone);

                logger.debug('Lightbox Path: ' + path);
                logger.debug('Lightbox Params', clone);

                return path;

                function pluck(prop, from) {
                    var r = from[prop];
                    try {
                        delete from[prop];
                    } catch (ex) {}
                    return r;
                }
            }

            /**
             * Get the query parameters in a url
             * @function getStandardQueryParams
             * @static
             * @returns {object} An containing the query paremeters
             */
            function getStandardQueryParams() {
                var env = getClientIdEnvSuffix();
                var configEnv;

                if (env === 'STAGE') {
                    configEnv = 'STG';
                } else if (env === 'VALID') {
                    configEnv = 'VAL';
                } else {
                    configEnv = env;
                }

                var params = utils.assign({
                    clientId: getClientId(),
                    alternateConfig: getAlternateConfig(),
                    scheme: window.location.protocol.replace(':', ''),
                    postMessageOrigin: location.href,
                    cookieDomain: cookieDomain,
                    config: configEnv,
                    inline: !!getInlineContainerSelector(),
                    logLevel: logger.getLogLevel(),
                    topHost: (document.location.host || '')
                }, agebandCountryCookie.read() || {});
                ['l10nContent', 'langPref', 'countryPref', 'continentPref', 'cssOverride', 'debug', 'responderPage', 'successPageAfterCreate', 'siteURL'].forEach(function(prop) {
                    if (config[prop]) {
                        params[prop] = config[prop];
                    }
                });

                // Check debug overrides
                var country = debug.getCountry();
                if (country) {
                    params.countryCode = country;
                }

                var geoIP = debug.getGeoIP();
                if (geoIP) {
                    params.geoIP = geoIP;
                }

                if (config.marketingMode) {
                    params.marketingMode = config.marketingMode;
                }

                params.buildId = buildIdentifier;

                return params;
            }

            /**
             * getResponderPageUrl description
             * @function getResponderPageUrl
             * @static
             * @param {string} baseUrl (optional)
             * @param {object} additionalUrlParams (optional)
             * @returns {string}
             */
            function getResponderPageUrl(baseUrl, additionalUrlParams) {
                var params = {},
                    urlParts,
                    url;

                baseUrl = baseUrl || config.responderPage;

                if (!baseUrl) {
                    return;
                }

                utils.assign(params, utils.getQueryStringParams(baseUrl), getStandardQueryParams(), (additionalUrlParams || {}));

                urlParts = baseUrl.match(/(^[^\?]*)?(\?[^#]*)?(#.*$)?/);

                url = urlParts[1] + '?';
                url += utils.buildQueryString(params);

                if (urlParts[3]) {
                    url += urlParts[3];
                }

                return url;
            }

            /**
             * Get the domain on which a cookie was set
             * @function getCookieDomain
             * @static
             * @return {string} Domain of a cookie
             */
            function getCookieDomain() {
                return cookieDomain;
            }

            /**
             * Get the Common Host
             * @function _getCommonHost
             * @private
             * @param  {string} hostA
             * @param  {string} hostB
             * @returns {string} The host
             */
            function _getCommonHost(hostA, hostB) {
                var aryHostA = hostA.split('.').reverse(),
                    aryHostB = hostB.split('.').reverse(),
                    result = [];

                for (var i = 0; i < Math.min(aryHostA.length, aryHostB.length); i++) {
                    if (aryHostA[i] !== aryHostB[i]) {
                        break;
                    }
                    result.push(aryHostA[i]);
                }

                return (result.length > 1 ? result.reverse().join('.') : null);
            }

            /**
             * Helper to get origin URL, based on script path
             * @function getOriginUrl
             * @private
             * @param   {string} path
             * @returns {string}
             */
            function getOriginUrl(path) {
                var parsingNode = document.createElement('a');

                parsingNode.setAttribute('href', path);

                return (
                    parsingNode.protocol + '//' +
                    parsingNode.host
                );
            }

            /**
             * Check for a direct flow
             * @function isDirectFlow
             * @static
             * @returns {boolean} Return true if direct flow and vice versa

             */
            function isDirectFlow() {
                return config.isDirectFlow;
            }

        }());

    }, {
        "../common/build-identifier": 10,
        "../common/environment-helper": 13,
        "../common/utils": 42,
        "./ageband-country-cookie": 76,
        "debug": 12,
        "logger": 20,
        "messages": 21
    }],
    80: [function(require, module, exports) {
        'use strict';

        var Q = require('q');
        var dao = require('dao');
        var exceptions = require('exceptions');
        var metrics = require('metrics');
        var utils = require('utils');
        var analytics = require('../analytics');

        module.exports = {
            peek: peek
        };

        function peek(opts) {
            var dfd = Q.defer();
            var log = metrics.timed(metrics.actions.event.getLicensePlateDataBag, {
                correlation_id: opts.correlationId,
                conversation_id: opts.conversationId,
                reporting: opts.reporting
            });

            dao.licensePlatePeek(opts.pairingCode, opts.correlationId, opts.conversationId, opts.reporting)
                .then(function(result) {
                    if (!result.isClientError()) {
                        analytics.link({
                            lplate_peek_success: true
                        });

                        log.success();
                        dfd.resolve(result.data.content);
                    } else {
                        dfd.reject(parseErrors(result, log));
                    }
                }, function(result) {
                    dfd.reject(parseErrors(result, log));
                });

            return dfd.promise;
        }

        function parseErrors(response, log) {
            var errors = exceptions.getKeyErrors(response) || [];
            var failure = 'UNKNOWN_ERROR';
            var logData = {
                error_category: utils.get(response, 'error.keyCategory'),
                error_codes: exceptions.getErrorCodes(errors)
            };

            if (exceptions.find(errors, 'MISSING_VALUE') || exceptions.find(errors, 'INVALID_VALUE')) {
                failure = 'INVALID_PAIRING_CODE';
            }

            if (!response.isServerError()) {
                log.success(logData);
            } else {
                log.error(logData);
            }

            analytics.link({
                lplate_peek_error: true
            });

            return failure;
        }


    }, {
        "../analytics": 77,
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "q": 1,
        "utils": 42
    }],
    81: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module handles communication between window frames using the window.postMessage protocol
             * @module patch-bay
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:messages
             * @requires module:postmessage-transport
             * @requires module:postmessage-transport-frames
             */

            module.exports = {
                init: init,
                getPMT: getPMT
            };

            var messages = require('messages');
            var PostMessageTransport = require('../../common/postmessage-transport');
            var PostMessageFrames = require('../../common/postmessage-transport/frames');
            var session = require('session');
            var PMT;
            var env;

            /**
             * Initialize window frames and listen for messages
             * @function getPMT
             * @static
             * @return {object} PMT Registered frames for post message communication
             */
            function getPMT() {
                return PMT;
            }

            /**
             * Initialize window frames and listen for messages
             * @function init
             * @static
             * @param {object} environment Environment properties
             */
            function init(environment) {
                env = environment;

                // Initialize postMessage and set it up for Lightbox and Responder
                // communication
                PMT = new PostMessageTransport(PostMessageFrames.CLIENT);

                // @TODO: Cleanup. This should really be it's own component. Attaching it to instance,
                // to be cleaned up later.
                PMT.frames = PostMessageFrames;

                PMT.registerChild(PMT.frames.LIGHTBOX, env.getOrigin());

                /**
                 * @TODO: pull responder page URL from configuration. Use wildcard for
                 *     now
                 */
                PMT.registerChild(PMT.frames.RESPONDER, '*');

                /**
                 * @TODO: The following creation of message listeners should, at a
                 *     minimum, be made dynamic.
                 *
                 *        Ideally, messages should be transmitted to the parent frame
                 *     by default, based on the prefix of the message (or other
                 *     criteria that is immediately obvious given the conventions used
                 *     herein).
                 *
                 *        This, quite obviously, does not apply to those that don't
                 *     follow the conventional pattern (illustrated by the first three
                 *     listeners, for example).
                 */
                // Relay messages messages to postMessage

                // messages.subscribe RESPONDER DATA DFD
                messagesSubscribePMTSend('datadfd', PMT.frames.RESPONDER, [
                    'responder.session.write',
                    'responder.session.read',
                    'responder.guest.identifier.write',
                    'responder.guest.identifier.read',
                    'responder.dateOfBirth.write',
                    'responder.apikey.write',
                    'responder.obo.read',
                    'responder.obo.delete',
                    'responder.deviceId.write',
                    'responder.deviceId.read'
                ]);

                // messages.subscribe RESPONDER NULL DFD
                messagesSubscribePMTSend('nulldfd', PMT.frames.RESPONDER, [
                    'responder.session.delete',
                    'responder.dateOfBirth.read',
                    'responder.apikey.read'
                ]);

                // messages.subscribe LIGHTBOX DATA DFD
                messagesSubscribePMTSend('datadfd', PMT.frames.LIGHTBOX, [
                    'bluecookie.delete',
                    // setRoute
                    'inner.setRoute',
                    'guest.reload',
                    'authReloader.reloadIfChanged',
                    'workflow.run',
                    'workflow.execute',
                    'newsletters.read',
                    'l10n.get'
                ]);

                // messages.subscribe LIGHTBOX DATA only
                messagesSubscribePMTSend('data', PMT.frames.LIGHTBOX, [
                    'analytics.view',
                    'analytics.link',
                    'debug.geoIP',
                    'debug.country',
                    'debug.testProfileFlag',
                    'debug.clientConfigOverride',
                    'debug.epcEnabled',
                    'debug.skipForcePasswordLogin',
                    'debug.shapeEnabled',
                    'setLogLevel'
                ]);

                // messages.subscribe LIGHTBOX NULL DFD
                messagesSubscribePMTSend('nulldfd', PMT.frames.LIGHTBOX, [
                    'siteconfig.read'
                ]);

                // messages.subscribe LIGHTBOX no payload
                messagesSubscribePMTSend(null, PMT.frames.LIGHTBOX, [
                    'session.deleted',
                    'debug.clear',
                    'logger.enable'
                ]);

                // special case that sends undefined but accepts no input
                messages.subscribe('lightbox.show', function() {
                    PMT.send(PMT.frames.LIGHTBOX, 'lightbox.show', undefined);
                });

                // PMT.on DATA DFD
                onPMTMessagePublish('datadfd', [
                    'profile.deactivation-complete',
                    'apiEvent.ppu',
                    'env.correlation.read',
                    'session.loggedin',
                    // Inner requesting that we show the service error page
                    'lightbox.showError'
                ]);

                // PMT.on DATA only
                onPMTMessagePublish('data', [
                    'metrics.log.send',
                    'cookielength',
                    // postMessage events from the responder page
                    'session.found',
                    'session.notfound',
                    'profile.create',
                    'profile.primary-account',
                    'session.refreshed',
                    'token.refreshed',
                    'config.ready',
                    // TODO: Rename to newsletters
                    'marketing.opt-in',
                    'guest.updated',
                    'license-plate.link-success',
                    'license-plate.link-failure',
                    'email-verification.success',
                    'email-verification.failure'
                ]);

                // PMT.on NULL DFD
                onPMTMessagePublish('nulldfd', [
                    'session.reauth',
                    'apiEvent.reauth',
                    'doNotDisturb.isEnabled'
                ]);

                // PMT.on no payload
                onPMTMessagePublish(null, [
                    // hide the Lightbox
                    'age-gated',
                    'lightbox.hide',
                    'license-plate-redeemed',
                    'lightbox.heartbeat',
                    'inner.fatal',
                    'session-timer.pause',
                    'session-timer.unpause'
                ]);

                // mismatched event keys
                PMT.on('lightbox.requestshow', function(state) {
                    // Inner requesting that we show the lightbox iframe
                    messages.publish('lightbox.show', state);
                });

                // isLoggedIn
                PMT.on('session.isloggedin', function(data, dfd) {
                    session.isLoggedIn().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('s2cookie.write', function(data, dfd) {
                    session.s2.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('s2cookie.delete', function(data, dfd) {
                    session.s2.delete(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('guest.write', function(data, dfd) {
                    session.guest.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('guest.read', function(data, dfd) {
                    session.guest.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('token.write', function(data, dfd) {
                    session.token.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('token.read', function(data, dfd) {
                    session.token.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.deviceId.read', function(data, dfd) {
                    session.deviceId.read(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.deviceId.write', function(data, dfd) {
                    session.deviceId.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.delete', function(data, dfd) {
                    session.deleteAll(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.invalidateTokens', function(data, dfd) {
                    session.invalidateTokens(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.dateOfBirth.write', function(data, dfd) {
                    session.dob.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.dateOfBirth.read', function(notUsed, dfd) {
                    session.dob.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.apikey.read', function(notUsed, dfd) {
                    session.apiKey.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('trustState.write', function(data, dfd) {
                    session.trustState.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('trustState.read', function(data, dfd) {
                    session.trustState.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('trustState.readHighestEspnTs', function(data, dfd) {
                    session.trustState.readHighestEspnTs().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('trustState.delete', function(data, dfd) {
                    session.trustState.delete().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('swid.read', function(data, dfd) {
                    session.swid.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('unid.read', function(data, dfd) {
                    session.unid.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('navy.read', function(data, dfd) {
                    session.navy.read().then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.apikey.write', function(data, dfd) {
                    session.apiKey.write(data).then(dfd.resolve.bind(dfd), dfd.reject.bind(dfd));
                });

                PMT.on('session.deleted[source=inner,target=outer]', function(data, dfd) {
                    messages.publish('session.deleted', data, dfd);
                });

                PMT.on('resize', function(data) {
                    messages.publish('resize', data);
                });

                PMT.init();

                function messagesSubscribePMTSend(type, target, arrayOfEventStrs) {
                    var methods = {
                        'datadfd': function(eventStr) {
                            messages.subscribe(eventStr, function(data, dfd) {
                                PMT.send(target, eventStr, data, dfd);
                            });
                        },
                        'data': function(eventStr) {
                            messages.subscribe(eventStr, function(data) {
                                PMT.send(target, eventStr, data);
                            });
                        },
                        'nulldfd': function(eventStr) {
                            messages.subscribe(eventStr, function(notUsed, dfd) {
                                PMT.send(target, eventStr, null, dfd);
                            });
                        },
                        'default': function(eventStr) {
                            messages.subscribe(eventStr, function() {
                                PMT.send(target, eventStr);
                            });
                        }
                    };
                    if (!type || !methods.hasOwnProperty(type)) {
                        type = 'default';
                    }
                    arrayOfEventStrs.forEach(methods[type]);
                }

                function onPMTMessagePublish(type, arrayOfEventStrs) {
                    var methods = {
                        'datadfd': function(eventStr) {
                            PMT.on(eventStr, function(data, dfd) {
                                messages.publish(eventStr, data, dfd);
                            });
                        },
                        'data': function(eventStr) {
                            PMT.on(eventStr, function(data) {
                                messages.publish(eventStr, data);
                            });
                        },
                        'nulldfd': function(eventStr) {
                            PMT.on(eventStr, function(notUsed, dfd) {
                                messages.publish(eventStr, null, dfd);
                            });
                        },
                        'default': function(eventStr) {
                            PMT.on(eventStr, function() {
                                messages.publish(eventStr);
                            });
                        }
                    };
                    if (!type || !methods.hasOwnProperty(type)) {
                        type = 'default';
                    }
                    arrayOfEventStrs.forEach(methods[type]);
                }
            }
        }());

    }, {
        "../../common/postmessage-transport": 25,
        "../../common/postmessage-transport/frames": 24,
        "messages": 21,
        "session": "session"
    }],
    82: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * @module progressiveProfileCollection
             * @type {*|exports|module.exports}
             * @requires module:config
             * @requires module:session
             * @requires module:utils
             */
            var config = require('../../../components/outer/config');
            var Q = require('q');
            var session = require('session');
            var utils = require('utils');
            var ppc = require('../../../components/common/progressive-profile-collection');
            var getCompleteGuest = require('../../../components/common/get-complete-guest-object');

            /**
             * Getter and Setter methods for Progressive Profile Collection (PPC)
             */
            module.exports = {
                get: getEditableProfileFields
            };

            /**
             * Gets the editable profile fields from guest data, requested fields,
             * and allowed fields based on site config's compliance section
             */
            function getEditableProfileFields() {
                var dfd = Q.defer();

                //get guest, get siteConfig, compare and munge data, then set to allowedFields.profileFields array
                Q.spread([getCompleteGuest.get('ppc-get', utils.uuid(), utils.uuid()), config.getSite()], function(guest, siteConfig) {
                    dfd.resolve(ppc.getEditableAndRequiredFields(guest, siteConfig));
                }, function(error) {
                    dfd.reject(error);
                });

                return dfd.promise;
            }
        }());

    }, {
        "../../../components/common/get-complete-guest-object": 17,
        "../../../components/common/progressive-profile-collection": 30,
        "../../../components/outer/config": 78,
        "q": 1,
        "session": "session",
        "utils": 42
    }],
    83: [function(require, module, exports) {
        (function() {
            'use strict';

            var POLL_INTERVAL = 1000 * 10;
            var logger = require('logger');
            var messages = require('messages');
            var session = require('session');
            var utils = require('utils');
            var WorkflowHistory = require('WorkflowHistory');
            var timeout;
            var loggedIn;

            var WM = require('../workflow-manager');

            module.exports = {
                start: start
            };

            sessionStateSubscribe();

            function sessionStateSubscribe() {
                // Set logged in state, when session.loggedin message is published
                messages.subscribe('session.loggedin', onLoggedIn);

                // Set logged in state, when session.deleted message is published
                messages.subscribe('session.deleted', onSessionDeleted);
            }

            function sessionStateUnsubscribe() {
                messages.unsubscribe('session.deleted', onSessionDeleted);
                messages.unsubscribe('session.loggedin', onLoggedIn);
            }

            function onLoggedIn() {
                loggedIn = true;
            }

            function onSessionDeleted() {
                loggedIn = false;
            }

            messages.subscribe('session-timer.pause', function() {
                sessionStateUnsubscribe();
                clearTimeout(timeout);
            });

            messages.subscribe('session-timer.unpause', function() {
                sessionStateUnsubscribe();
                sessionStateSubscribe();
                session.isLoggedIn()
                    .then(function(isLoggedIn) {
                        loggedIn = isLoggedIn
                        poll();
                    });
            });

            function start() {
                logger.log('RefreshTimer#startTimer');

                session.isLoggedIn().then(function(isLoggedIn) {
                    loggedIn = isLoggedIn;
                    poll();
                });
            }

            function poll() {
                clearTimeout(timeout);

                var wf = WM.get('session-state-tasks');
                var breadcrumbs = new WorkflowHistory(wf);

                wf.on('done', function() {
                    timeout = setTimeout(poll, POLL_INTERVAL);
                });

                wf.run(null, {
                    loggingInfo: {
                        correlationId: utils.uuid(),
                        context: 'session-timer',
                        breadcrumbs: breadcrumbs
                    },
                    wasLoggedIn: loggedIn
                });
            }
        }());


    }, {
        "../workflow-manager": 105,
        "WorkflowHistory": 46,
        "logger": 20,
        "messages": 21,
        "session": "session",
        "utils": 42
    }],
    84: [function(require, module, exports) {

        'use strict'

        var shim = require('./shim');

        module.exports = {
            delete: shim('bluecookie.delete')
        };

    }, {
        "./shim": 94
    }],
    85: [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');
        var messages = require('messages');
        var agebandCountryCookie = require('../ageband-country-cookie');
        var Q = require('q');

        var session = {
            blueCookie: require('./blue-cookie'),
            trustState: require('./trust-state'),
            token: require('./token'),
            guest: require('./guest'),
            s2: require('./s2'),
            navy: require('./navy')
        };

        module.exports = function(arg) {
            var opts = {};
            if (typeof arg === 'string') {
                opts.reason = arg;
            } else if (typeof arg === 'object') {
                opts = arg;
            }

            var dfd = Q.defer();

            Q.all([
                session.blueCookie.delete(),
                session.trustState.delete(),
                session.s2.delete(),
                session.token.delete(),
                session.guest.delete(),
                session.navy.delete(),
            ]).finally(function() {
                agebandCountryCookie.remove();
                if (!opts.suppressLogoutEvent) {
                    messages.publish('session.deleted', opts.reason);
                }
                dfd.resolve();
            });

            return dfd.promise;
        };

    }, {
        "../ageband-country-cookie": 76,
        "./blue-cookie": 84,
        "./guest": 88,
        "./navy": 92,
        "./s2": "session.s2",
        "./shim": 94,
        "./token": "session.token",
        "./trust-state": 95,
        "messages": 21,
        "q": 1
    }],
    86: [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');

        module.exports = {
            read: shim('responder.deviceId.read'),
            write: shim('responder.deviceId.write')
        };


    }, {
        "./shim": 94
    }],
    87: [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');

        module.exports = {
            read: shim('responder.dateOfBirth.read'),
            write: shim('responder.dateOfBirth.write')
        };


    }, {
        "./shim": 94
    }],
    88: [function(require, module, exports) {

        'use strict';

        module.exports = {
            read: read,
            write: write,
            delete: remove
        };

        var agebandCountryCookie = require('../ageband-country-cookie');
        var token = require('./token');
        var idn = require('./idn');
        var env = require('../environment');
        var sjcl = require('../../../../assets/common/js/sjcl');
        var utils = require('utils');
        var Q = require('q');
        var versionPrefix = '00';

        /**
         * Read guest object from storage.
         *
         * @param {object} data
         * @return {promise}
         */
        function read(data) {
            data = data || {};
            var clientId = env.getClientId();
            var dfd = Q.defer();
            var tokenPromise = (!data.token) ? token.read() : Q.resolve(data);
            var checksumPromise = (!data.identifier) ? idn.read() : Q.resolve(data.identifier);

            Q.spread([checksumPromise, tokenPromise], function(checksum, token) {
                var guestData = readGuestData(checksum, utils.get(token, 'token.access_token'), clientId);

                if (utils.get(guestData, 'guest.token')) {
                    delete guestData.guest.token;
                }

                if (utils.get(guestData, 'guest.profile')) {
                    dfd.resolve(guestData);
                } else {
                    dfd.reject();
                }
            }, function() {
                dfd.reject();
            });

            return dfd.promise;
        }

        /**
         * Write guest object to storage.
         *
         * @param {object} data
         * @return {promise}
         */
        function write(data, writeToken) {
            var clientId = env.getClientId();
            var dfd = Q.defer();

            if (!utils.get(data, 'guest')) {
                return Q.resolve();
            }

            if (writeToken) {
                token.write(data).then(writeGuest);
            } else {
                writeGuest();
            }

            return dfd.promise;

            function writeGuest() {
                // Obtain token, either through data passed in, or through token.read()
                var tokenPromise = (!!utils.get(data, 'token.access_token')) ? Q.resolve(data) : token.read();

                tokenPromise.then(function(tokenData) {
                    // Write guest data, identifier cookie, and ageband-country cookie.
                    var checksum = writeGuestData(data, utils.get(tokenData, 'token.access_token'), clientId);

                    agebandCountryCookie.write(utils.get(data, 'guest'));
                    idn.write(checksum).finally(function() {
                        dfd.resolve();
                    });
                });
            }
        }

        /**
         * Deletes guest object from storage.
         *
         * @return {promise}
         */
        function remove() {
            removeGuestData(env.getClientId());
            return Q.resolve();
        }

        /**
         * Write guest data to storage.
         * @function write
         * @static
         * @param {Object} data
         * @param {string} accessToken
         * @param {string} clientId
         * @return {string} checksum
         */
        function writeGuestData(data, accessToken, clientId) {
            var guest = {
                guest: data.guest,
                created: (new Date()).toISOString()
            };

            // Encrypt guest data.
            var encrypted = encryptGuest(guest, accessToken);

            // Write encrypted data to storage.
            try {
                localStorage.setItem(clientId + '.guest', encrypted.data);
            } catch (e) {}

            return encrypted.checksum;
        }

        /**
         * Read guest data from storage.
         * @function read
         * @static
         * @param {string} checksum
         * @param {string} accessToken
         * @param {string} clientId
         * @return {Object} returns null on error.
         */
        function readGuestData(checksum, accessToken, clientId) {
            var dataFromStorage;

            try {
                dataFromStorage = localStorage.getItem(clientId + '.guest');
            } catch (e) {}

            return decryptGuest('' + checksum, accessToken, dataFromStorage);
        }

        /**
         * Delete guest data, for clientId
         * @function remove
         * @static
         * @param {string} clientId
         */
        function removeGuestData(clientId) {
            try {
                localStorage.removeItem(clientId + '.guest');
            } catch (e) {}
        }

        /**
         * Function to encrypt guest data.
         * @function encryptGuest
         * @private
         * @param {Object} data
         * @param {string} accessToken
         * @return {Object}
         *
         * @example var result = encryptGuest({
         *       guest: {}
         *   }, 'string');
         *
         * console.log(result.data);
         * console.log(result.checksum);
         *
         */
        function encryptGuest(data, accessToken) {
            var clone = utils.clone(data);
            var stringified = JSON.stringify(clone);
            var checksum = utils.crc32(JSON.stringify({
                guest: data.guest
            })).toString(16);

            return {
                data: sjcl.encrypt(checksum + accessToken, stringified),
                checksum: versionPrefix + checksum
            };
        }

        /**
         * Decrypt guest data.
         * @function decryptGuest
         * @private
         * @param {string} checksum
         * @param {string} accessToken
         * @param {string} encrypted
         * @return {Object} returns null on error
         */
        function decryptGuest(checksum, accessToken, encrypted) {
            var decrypted;

            try {
                decrypted = JSON.parse(sjcl.decrypt(checksum.substring(versionPrefix.length) + accessToken, encrypted));
            } catch (e) {
                return null;
            }

            return decrypted;
        }

    }, {
        "../../../../assets/common/js/sjcl": 2,
        "../ageband-country-cookie": 76,
        "../environment": 79,
        "./idn": 89,
        "./token": "session.token",
        "q": 1,
        "utils": 42
    }],
    89: [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');

        module.exports = {
            read: shim('responder.guest.identifier.read'),
            write: shim('responder.guest.identifier.write')
        };


    }, {
        "./shim": 94
    }],
    90: [function(require, module, exports) {
        'use strict';

        var dao = require('dao');
        var token = require('session.token');
        var metrics = require('metrics');
        var utils = require('utils');
        var Q = require('q');
        var env = require('../../../../src/components/outer/environment');
        var exceptions = require('exceptions');

        var TIMEOUT_DURATION = 2000;

        // Errors
        var ERROR_CODE_TIMEOUT = 'UI_TIMEOUT';
        var ERROR_CODE_TIMEOUT_ACCESS_TOKEN_READ = ERROR_CODE_TIMEOUT + ':access_token_read';
        var ERROR_CODE_TMEOUT_GC_LOGOUT = ERROR_CODE_TIMEOUT + ':gc_logout';
        var ERROR_CODE_ERROR_NOT_PROVIDED = 'ERROR_NOT_PROVIDED';
        var ERROR_CATEGORY_UNKNOWN_ERROR = 'UNKNOWN_ERROR'

        module.exports = {
            invalidate: invalidate
        };

        // @TODO: The interface for this doesn't really work... Since this is called from the inner context,
        // and it passes through PMT, it will lose the correlationId and conversationId parameters. This can
        // be tested by choosing to logout from reauth.
        function invalidate(tokens, correlationId, conversationId) {
            conversationId = conversationId || utils.uuid();
            correlationId = correlationId || utils.uuid();

            var info = {
                called_gc_logout_endpoint: false
            };
            var log = metrics.timed('log:logout', {
                correlation_id: correlationId,
                conversation_id: conversationId
            });

            return Q.fcall(function() {
                var refreshTokens = [];
                var swids = [];

                Object.keys(tokens).forEach(function(clientId) {
                    var token = tokens[clientId];
                    if (swids.indexOf(token.swid) === -1) {
                        swids.push(token.swid);
                    }
                    refreshTokens.push({
                        token: token.refresh_token || token.access_token,
                        clientId: clientId
                    });
                });

                if (swids.length > 1) {
                    info.multiple_tokens_swids = true;
                }

                info.refresh_token_count = refreshTokens.length;
                info.refresh_tokens = refreshTokens.map(function(token) {
                    return utils.maskToken(token.token);
                });
                info.called_gc_logout_endpoint = true;

                return dao.invalidateRefreshTokens(swids[0], refreshTokens, conversationId, correlationId)
                    .timeout(TIMEOUT_DURATION, ERROR_CODE_TMEOUT_GC_LOGOUT);
            }).then(function() {
                log.success({
                    info: info
                });
            }).catch(function(err) {
                if (err && err.code === 'ETIMEDOUT') {
                    log.success({
                        error_codes: [err.message],
                        error_category: ERROR_CATEGORY_UNKNOWN_ERROR,
                        info: info
                    });
                } else if (err && err.error) {
                    var errors = exceptions.getErrorCodes(exceptions.getKeyErrors(err));

                    log.success({
                        error_codes: errors,
                        error_category: utils.get(err, 'error.keyCategory'),
                        info: info
                    });
                } else {
                    info.error = JSON.stringify(err);
                    log.success({
                        error_codes: [ERROR_CODE_ERROR_NOT_PROVIDED],
                        error_category: ERROR_CATEGORY_UNKNOWN_ERROR,
                        info: info
                    });
                }
            });
        }

    }, {
        "../../../../src/components/outer/environment": 79,
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "q": 1,
        "session.token": "session.token",
        "utils": 42
    }],
    91: [function(require, module, exports) {

        'use strict'

        var Q = require('q');
        var token = require('./token');

        module.exports = function() {
            var dfd = Q.defer();

            token.read().then(function() {
                dfd.resolve(true);
            }, function() {
                dfd.resolve(false);
            });

            return dfd.promise;
        };

    }, {
        "./token": "session.token",
        "q": 1
    }],
    92: [function(require, module, exports) {

        'use strict';

        var Q = require('q');
        var cookie = require('cookie');
        var utils = require('utils');

        module.exports = {
            read: read,
            delete: remove
        };

        function read() {
            return Q.resolve({
                value: cookie.read('oidNAVY')
            });
        }

        function remove() {
            var domain = utils.getTLD('' + window.location.hostname);
            cookie.remove('oidNAVY', domain, '/');
            return Q.resolve();
        }

    }, {
        "cookie": 11,
        "q": 1,
        "utils": 42
    }],
    93: [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');

        module.exports = {
            read: shim('responder.obo.read'),
            delete: shim('responder.obo.delete')
        };

    }, {
        "./shim": 94
    }],
    94: [function(require, module, exports) {

        'use strict';

        var Q = require('q');
        var messages = require('messages');

        module.exports = function(messageName) {
            return function(data) {
                var dfd = Q.defer();
                messages.publish(messageName, data, dfd);
                return dfd.promise;
            };
        };


    }, {
        "messages": 21,
        "q": 1
    }],
    95: [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');
        var cookie = require('cookie');
        var env = require('../environment.js');
        var trustStateConst = require('./../../common/trust-state/constants.js');
        var utils = require('utils');
        var Q = require('q');

        module.exports = {
            read: read,
            write: write,
            delete: handleDelete,
            readHighestEspnTs: handleReadHighestEspnTs
        };

        function handleDelete() {
            cookie.remove(cookieName(), env.getCookieDomain(), '/');
            deleteTrustStateCookiesIfESPN();
            return Q.resolve();
        }

        function cookieName() {
            return env.getClientId() + '.ts';
        }

        /**
         * Write trust state cookie, representing high-trust.
         *
         * @return {promise}
         */
        function write() {
            var cookieDate = new Date(Date.now() + trustStateConst.TRUST_EXPIRY);
            var cookieValue = cookie.write(cookieName(), cookieDate.toISOString(), env.getCookieDomain(), '/', cookieDate, false);

            if (!cookieValue) {
                return Q.reject();
            }

            return Q.resolve(cookieValue);
        }

        /**
         * Get the current trust state
         *
         * @return {Promise}
         */
        function read() {
            var cookieValue = cookie.read(cookieName());

            if (cookieValue === null) {
                return Q.resolve({
                    state: false
                });
            }

            var timeLeft = Date.parse(cookieValue) - new Date().getTime();
            var isHighTrust = timeLeft < 1 ? trustStateConst.STATES.low : trustStateConst.STATES.high;

            return Q.resolve({
                state: isHighTrust,
                timeLeft: timeLeft
            });
        }

        /**
         * Read the trust state cookie, which has the highest TTL
         * @function handleReadHighestEspnTs
         * @param {null} data    No value provided
         */
        function handleReadHighestEspnTs(data) {
            // Special case for ESPN, to support multiple Client IDs. This needs to be
            // removed once ESPN has migrated their main site over to one Client ID.
            var cookieValue = findHighestTrustStateCookieForESPN();

            if (cookieValue === null) {
                return Q.reject();
            }

            return Q.resolve(cookieValue);
        }

        /**
         * Find highest trust state cookie, for ESPN Client IDs.
         * @function findHighestTrustStateCookieForESPN
         * @private
         * @returns {string} Cookie with highest trust state
         */
        function findHighestTrustStateCookieForESPN() {
            var cookieValues = utils.getEspnWhitelist().map(function(name) {
                return cookie.read(name + '-' + env.getClientIdEnvSuffix() + '.ts');
            });

            return cookieValues.sort(function(a, b) {
                a = (new Date(a)).getTime();
                b = (new Date(b)).getTime();
                return a - b;
            }).pop();
        }

        /**
         * Helper method, which deletes Trust State cookies for all of ESPN's Client IDs.
         * Logic only gets invoked if the operating Client ID is an ESPN Client ID.
         * @function deleteTrustStateCookiesIfESPN
         * @private
         */
        function deleteTrustStateCookiesIfESPN() {
            if (utils.isEspnClientId(env.getClientId())) {
                utils.getEspnWhitelist().forEach(function(name) {
                    cookie.remove(name + '-' + env.getClientIdEnvSuffix() + '.ts', env.getCookieDomain(), '/');
                });
            }
        }


    }, {
        "../environment.js": 79,
        "./../../common/trust-state/constants.js": 36,
        "./shim": 94,
        "cookie": 11,
        "q": 1,
        "utils": 42
    }],
    96: [function(require, module, exports) {

        'use strict';

        module.exports = {
            start: start,
            timeSinceLastSleep: timeSinceLastSleep
        };

        var POLL_INTERVAL = 2 * 1000; // 2 seconds
        var SLEEP_TIMEOUT = 60 * 1000; // 60 seconds
        var interval;
        var lastInvoked;
        var lastSleep;

        function start() {
            clearInterval(interval);
            interval = setInterval(function() {
                var now = Date.now();

                if (lastInvoked && now - lastInvoked >= SLEEP_TIMEOUT) {
                    lastSleep = now;
                }

                lastInvoked = now;
            }, POLL_INTERVAL);
        }

        function timeSinceLastSleep() {
            if (!lastSleep) {
                return;
            }

            return Math.floor((Date.now() - lastSleep) / 1000);
        }


    }, {}],
    97: [function(require, module, exports) {

        'use strict';

        var Q = require('q');
        var utils = require('utils');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var sleepTimer = require('../sleep-timer');
        var TokenRefreshWorkflow = require('../../../workflows/outer/token-refresh');

        // Timeouts for each step in the workflow, in seconds.
        var stepTimeouts = {
            'read-token': 15,
            'read-navy': 15,
            'check-do-not-disturb': 15,
            'aquire-mutex': 180,
            'check-refresh-status': 15,
            'refresh-with-token': 90,
            'parse-refresh-with-token-errors': 15,
            'gating': 15,
            'write-session': 15,
            'encode-guest': 15,
            'emit-refresh-events': 15,
            'logout-from-other-tab': 15,
            'logout-no-refresh': 15,
            'logout-security-flagged': 15,
            'logout-invalid-refresh': 15,
            'release-mutex': 15,
            '__UNIT_TEST__': -1
        };

        module.exports = {
            refresh: TokenRefresh
        };

        function TokenRefresh(loggingInfo) {
            var dfd = Q.defer();
            var workflow = TokenRefreshWorkflow.create();
            var timeouts = {};

            loggingInfo = loggingInfo || {};
            loggingInfo.correlationId = loggingInfo.correlationId || utils.uuid();

            var breadcrumbs = loggingInfo.breadcrumbs;

            if (breadcrumbs) {
                breadcrumbs.track(workflow, [{
                        prop: 'token.access_token',
                        format: utils.maskToken
                    },
                    {
                        prop: 'token.refresh_token',
                        format: utils.maskToken
                    },
                    {
                        prop: 'tokenData.access_token',
                        format: utils.maskToken
                    },
                    {
                        prop: 'tokenData.refresh_token',
                        format: utils.maskToken
                    },
                    {
                        prop: 'tokenData.id_token',
                        format: utils.hashString
                    },
                    {
                        prop: 'token.expires'
                    },
                    {
                        prop: 'tokenData.expires'
                    },
                    {
                        prop: 'token.refresh_expires'
                    },
                    {
                        prop: 'tokenData.refresh_expires'
                    }
                ]);
            }

            var log = metrics.timed(metrics.actions.event.tokenRefresh, {
                conversation_id: utils.uuid(),
                correlation_id: loggingInfo.correlationId,
                reporting: loggingInfo.reporting
            });

            workflow.on('step-start', function(data) {
                data = data || {};
                var stepTimeout = stepTimeouts[data.name];

                if (stepTimeout) {
                    // If this is a step we want to monitor, then schedule a function to be run
                    // at the specified timeout... If the step completes before the timeout, then
                    // the scheduled function will be cleared before being executed.
                    timeouts[data.name] = setTimeout(function() {
                        // If this callback gets invoked, it means that the step didn't complete
                        // before the timeout expired, and we should fire a log to New Relic.

                        metrics.log('log:refresh:timeout:' + data.name, {
                            conversation_id: utils.uuid(),
                            correlation_id: loggingInfo.correlationId,
                            swid: utils.get(data, 'data.token.swid'),
                            trace: breadcrumbs && breadcrumbs.getTrail(),
                            trace_data: breadcrumbs && breadcrumbs.getData(),
                            reporting: loggingInfo.reporting,
                            info: {
                                context: loggingInfo.context
                            }
                        });

                    }, stepTimeout * 1000);
                }
            });

            workflow.on('step-end', function(data) {
                // Once the step completes, cancel the scheduled timeout function.
                data = data || {};
                clearTimeout(timeouts[data.name]);
            });

            workflow.on('done', function(data) {
                var wasFailure = data.attemptedRefresh && !data.refreshSuccess;

                if (wasFailure) {
                    dfd.reject(data.finalResponse);
                } else {
                    // @TODO: `data.finalResponse` will not exist if token was refreshed by another tab.
                    dfd.resolve(data.finalResponse);
                }

                if (data.refreshSuccess) {
                    dfd.resolve(data.finalResponse);
                } else {
                    dfd.reject(data.finalResponse);
                }

                // New Relic Logging
                var response = utils.get(data, 'response');
                var oldRefresh = utils.get(data, 'token.refresh_token');
                var refresh = utils.get(data, 'tokenData.refresh_token');
                var error_category = utils.get(response, 'error.keyCategory');
                var error_codes = exceptions.getErrorCodes(exceptions.getKeyErrors(response));
                var logData = {
                    swid: utils.get(data, 'token.swid'),
                    info: {
                        expiredRefresh: data.refreshStatus === 'refresh_expired',
                        refreshStatus: data.refreshStatus,
                        context: loggingInfo.context,
                        timeAwake: sleepTimer.timeSinceLastSleep(),
                        oldRefresh: utils.maskToken(oldRefresh),
                        refresh: utils.maskToken(refresh)
                    },
                    trace: breadcrumbs && breadcrumbs.getTrail(),
                    trace_data: breadcrumbs && breadcrumbs.getData()
                };

                if (error_category) {
                    logData.error_category = error_category;
                }

                if (error_codes) {
                    logData.error_codes = error_codes;
                }

                if (!wasFailure) {
                    log.success(logData);
                } else {
                    log.error(logData);
                }
            });

            workflow.run(null, {
                loggingInfo: loggingInfo
            });
            return dfd.promise;
        }


    }, {
        "../../../workflows/outer/token-refresh": 176,
        "../sleep-timer": 96,
        "exceptions": 16,
        "metrics": 71,
        "q": 1,
        "utils": 42
    }],
    98: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module sets and gets the environment variables for a site
             *
             * @module token
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:time-span
             * @requires module:utils
             * @requires module:logger
             */

            module.exports = Token;

            /**
             * @const {object} TOKEN_LIFECYCLE_STATE
             * @property {number} VALID
             * @property {number} REFRESH_WINDOW
             * @property {number} EXPIRED
             */
            var TOKEN_LIFECYCLE_STATE = {
                VALID: 1,
                REFRESH_WINDOW: 2,
                EXPIRED: 3
            };

            var TimeSpan = require('../../common/time-span');
            var utils = require('utils');
            var logger = require('logger');

            /**
             * Token object wrapper
             * @param {Object} tokenData Token object from guest controller
             * @constructor
             */
            function Token(tokenData) {
                var self = this;

                this.data = tokenData || {};
                this.getNextRefreshAttempt = getNextRefreshAttempt;
                this.isValid = isValid;
                this.isExpired = isExpired;

                /**
                 * @typedef RefreshAttempt
                 * @type Object
                 * @property {Date} nextRefreshAttempt The next time to do a refresh
                 * @property {Enum} state
                 */
                /**
                 * Gets the date at which the next token refresh attempt should occur
                 * @function getNextRefreshAttempt
                 * @private
                 * @param  {Date} now     Value to use for the current time
                 * @param  {RetryCounter} retry Counter
                 * @return {RefreshAttempt} Next refresh options
                 */
                function getNextRefreshAttempt(now, counter) {
                    logger.log('Token#getNextRefreshAttempt');
                    var created = new Date(self.data.created);
                    var expires = new Date(self.data.expires);

                    if (!utils.isValidDate(created) || !utils.isValidDate(expires)) {
                        // TODO: @todo Use propper logging with a loglevel of error
                        logger.error('Invalid created or expires date in token object');
                        return;
                    }

                    var tokenTimeSpan = new TimeSpan(created, expires);
                    var pctElapsed = tokenTimeSpan.getPercentElapsed(now);
                    var secondsRemaining = tokenTimeSpan.getSecondsRemaining(now);
                    var nowUntilExpires = new TimeSpan(now, tokenTimeSpan.end);
                    var nextRefreshAttempt;
                    var state;

                    if (pctElapsed > 1.0) {
                        var expiredRetryCount = counter.getCount(TOKEN_LIFECYCLE_STATE.EXPIRED);
                        var expiresToNow = new TimeSpan(tokenTimeSpan.end, now);

                        state = TOKEN_LIFECYCLE_STATE.EXPIRED;

                        logger.debug('Token currently expired. Retries already attempted within this interval: ' + expiredRetryCount);

                        // Token has already expired. Depending on how many attempts we
                        // have made to refresh the token while inside the "expired"
                        // window, we will either attempt to refresh it immedietly (up
                        // to EXPIRED_TOKEN_RETRY_ATTEMPTS) or wait until the next
                        // refresh attempt window (EXPIRED_TOKEN_RETRY_INTERVAL)

                        if (expiredRetryCount < EXPIRED_TOKEN_RETRY_ATTEMPTS) {
                            logger.debug('token should be refreshed immedietly');
                            // refresh immedietly, up to EXPIRD_TOKEN_RETRY_ATTEMPTS.
                            // If these attempts have been exhausted without a
                            // sucessful token refresh, we'll wait for the next
                            // EXPIRED_TOKEN_RETRY_INTERVAL before trying again.
                            nextRefreshAttempt = now;
                        } else {
                            logger.debug('Too many attempts made within this interval. Get time nearest to interval of ' + EXPIRED_TOKEN_RETRY_INTERVAL + ' (round up)');
                            // Too many attempts were made to refresh the token during
                            // the current interval within the EXPIRED state. Reset the
                            // counter and return the next multiple of the expired
                            // token refresh interval
                            counter.reset();
                            nextRefreshAttempt = expiresToNow.getDateNearestToMultipleOfSeconds(EXPIRED_TOKEN_RETRY_INTERVAL);
                        }
                    } else if ((pctElapsed >= REFRESH_TIME_PCT && pctElapsed < 1.0) ||
                        (secondsRemaining <= REFRESH_TIME_SECONDS && self.data.ttl >= REFRESH_TIME_SECONDS_TTL_THRESHOLD)) {
                        // Token is active but within the refresh window.
                        // Subsequent refresh attempts should occur every
                        // REFRESH_TIME_RETRY_PCT of the remaining timespaan before the
                        // token's expiration.

                        state = TOKEN_LIFECYCLE_STATE.REFRESH_WINDOW;

                        if (counter.getCount(TOKEN_LIFECYCLE_STATE.REFRESH_WINDOW) === 0) {
                            // We have likely just entered the token refresh window.
                            // Try a token refresh immedietly.
                            logger.debug('Token is active, we are within the token refresh window and a refresh attempt has not yet been made. Refresh immedietly.');
                            nextRefreshAttempt = now;
                        } else {
                            // Some attemps to refresh the token have already been made
                            // so calculate when the next retry attempt should occur.
                            logger.debug('Token is active, we are within the token refresh window, and an attempt has already been made.');
                            nextRefreshAttempt = nowUntilExpires.getDateAtPercent(REFRESH_TIME_RETRY_PCT);
                        }
                    } else {
                        // Access token is valid and we are not within the refresh
                        // window. Next token refresh will be either when the token
                        // lifespan hits REFRESH_TIME_PCT or
                        // {expires}-RESFRESH_TIME_SECONDS, whichever is shorter.  If
                        // this is the first refresh attempt during this lifecycle
                        // state (e.g. if the browser was refreshed or guest just
                        // navigated to this page,) immedietly attempt a token refresh.
                        logger.debug('Valid token');

                        state = TOKEN_LIFECYCLE_STATE.VALID;

                        var pctTime = tokenTimeSpan.getDateAtPercent(REFRESH_TIME_PCT).getTime();
                        var thresholdTime = (self.data.ttl <= REFRESH_TIME_SECONDS_TTL_THRESHOLD ?
                            pctTime : tokenTimeSpan.end.getTime() - (REFRESH_TIME_SECONDS * SECOND_IN_MILLIS));

                        nextRefreshAttempt = new Date(
                            Math.min(
                                pctTime,
                                thresholdTime
                            )
                        );
                    }

                    return {
                        date: nextRefreshAttempt,
                        state: state
                    };
                }

                /**
                 * Checks for the expiration of an access token.
                 * @function isExpired
                 * @private
                 * @return {boolean} Expired or valid token
                 **/
                function isExpired() {
                    var expires = new Date(self.data.expires);
                    var expiresTime = expires.getTime();

                    return (!self.isValid() || isNaN(expiresTime) || expiresTime < (new Date()).getTime());
                }

                /**
                 * Returns true if token is valid
                 * @function isValid
                 * @private
                 * @return {Boolean} Validity of token
                 */
                function isValid() {
                    return (
                        typeof self.data.access_token === 'string' &&
                        typeof self.data.swid === 'string' &&
                        typeof self.data.ttl === 'number'
                    );
                }

                /**
                 * @const SECOND_IN_MILLIS
                 */
                var SECOND_IN_MILLIS = 1000;

                /**
                 * The token lifecycle state is considered to be within the refresh
                 * window if the amount of time remaining is less than or equal to
                 * REFRESH_TIME_PCT of the token life (and greater than
                 * REFRESH_TIME_SECONDS remaining)
                 *
                 * @const REFRESH_TIME_PCT
                 * @default 0.9
                 */
                var REFRESH_TIME_PCT = 0.9;

                /**
                 * The token lifecycle state is considered to be within the refresh
                 * window if the amount of time remaining is less than or equal to
                 * REFRESH_TIME_SECONDS (and greater than REFRESH_TIME_PCT)
                 *
                 * @const REFRESH_TIME_SECONDS
                 * @default 300
                 */
                var REFRESH_TIME_SECONDS = 300; // 5 minutes

                /**
                 * If within the refresh window and a refresh fails, the next attempt
                 * will occur at the timespan between %NOW% and expiration
                 * multiplied by REFRESH_TIME_RETRY_PCT
                 *
                 * @const REFRESH_TIME_RETRY_PCT
                 * @default 0.5
                 */
                var REFRESH_TIME_RETRY_PCT = 0.5;

                /**
                 * Only apply 5 minute refresh window rule if TTL is less than 8 minutes
                 *
                 * @const REFRESH_TIME_SECONDS_TTL_THRESHOLD
                 * @default 480
                 */
                var REFRESH_TIME_SECONDS_TTL_THRESHOLD = 480; // 8 minutes

                /**
                 * Every EXPIRED_TOKEN_RETRY_INTERVAL, we will attempt to refresh the
                 * token up to EXPIRED_TOKEN_RETRY_ATTEMPTS times.
                 *
                 * @const EXPIRED_TOKEN_RETRY_ATTEMPTS
                 * @default 3
                 */
                var EXPIRED_TOKEN_RETRY_ATTEMPTS = 3;

                /**
                 * If a token refresh during the EXPIRED window fails
                 * EXPIRED_TOKEN_RETRY_ATTEMPTS times, wait
                 * EXPIRED_TOKEN_RETRY_INTERVAL seconds before making another attempt.
                 *
                 * @const EXPIRED_TOKEN_RETRY_INTERVAL
                 * @default 300
                 */
                var EXPIRED_TOKEN_RETRY_INTERVAL = 300; // 5 minutes
            }

            Token.TOKEN_LIFECYCLE_STATE = TOKEN_LIFECYCLE_STATE;
        }());

    }, {
        "../../common/time-span": 35,
        "logger": 20,
        "utils": 42
    }],
    99: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module handles the trust-state
             *
             * @module trust-state
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:q
             * @requires module:messages
             * @requires module:trust-state-constants
             * @requires module:logger
             */

            var trustState = {
                init: init
            };

            var Q = require('../../../../assets/common/js/q');
            var messages = require('messages');
            var constants = require('./../../common/trust-state/constants.js');
            var session = require('session');
            var logger = require('logger');
            var currentState;

            module.exports = trustState;

            /**
             * Initialize the trust state
             * @function init
             * @static
             */
            function init() {
                messages.subscribe('session.loggedin', watch);
                messages.subscribe('session.reauth', watch);
                messages.subscribe('session.deleted', function() {
                    currentState = undefined;
                    reset();
                });
            }

            /**
             * Watch the trust state
             * @function watch
             * @private
             */
            function watch() {
                logger.log('TrustState#watch');
                var timeLeft;

                session.trustState.read().then(function(data) {
                    messages.publish('guest.trustStateChanged', data.state, data.timeLeft);

                    // ensure that we only have one timer
                    reset();

                    if (data.state === constants.STATES.low) {
                        session.trustState.delete();
                        return;
                    }

                    messages.publish('trustState.setTimer', data.timeLeft);

                    var timerExpiredMsg = messages.subscribe('trustState.timerExpired', function() {
                        messages.publish('guest.trustStateChanged', constants.STATES.low);
                        session.trustState.delete();

                        timerExpiredMsg();
                    });
                }, function() {
                    messages.publish('guest.trustStateChanged', constants.STATES.low);

                    reset();
                });
            }

            /**
             * Reset the trust state
             * @function reset
             * @private
             */
            function reset() {
                messages.publish('trustState.clearTimer');
            }
        }());

    }, {
        "../../../../assets/common/js/q": 1,
        "./../../common/trust-state/constants.js": 36,
        "logger": 20,
        "messages": 21,
        "session": "session"
    }],
    100: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module handles the trust-state
             *
             * @module trust-state-web
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:messages
             */

            var timer = {
                init: init
            };

            var messages = require('messages');
            var trustStateTimer;

            module.exports = timer;

            /**
             * Subscribe to all trust state messages
             * @function init
             * @static
             */
            function init() {
                messages.subscribe('trustState.setTimer', setTimer);
                messages.subscribe('trustState.clearTimer', clearTimer);
            }

            /**
             *
             * @function setTimer
             * @private
             * @param {number} timeLeft
             */
            function setTimer(timeLeft) {
                trustStateTimer = setTimeout(function() {
                    messages.publish('trustState.timerExpired');
                }, timeLeft);
            }

            /**
             *
             * @function clearTimer
             * @private
             * @param {number} timeLeft
             */
            function clearTimer() {
                clearTimeout(trustStateTimer);
                trustStateTimer = undefined;
            }
        }());

    }, {
        "messages": 21
    }],
    101: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module sets and gets the do-not-disturb flag on the site
             *
             * @module do-not-disturb
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             */

            module.exports = {
                setState: setState,
                getState: getState
            };

            var messages = require('messages');
            var doNotDisturbState;

            /**
             * Set the state of the do-not-disturb flag
             * @function setState
             * @static
             * @param {boolean} flag  True for on and false for off
             */
            function setState(flag) {
                doNotDisturbState = flag;
            }

            /**
             * Get the state of the do-not-disturb flag
             * @function getState
             * @static
             * @return {boolean} flag
             */
            function getState() {
                return doNotDisturbState;
            }

            messages.subscribe('doNotDisturb.isEnabled', function(notUsed, dfd) {
                if (dfd && dfd.resolve) {
                    dfd.resolve(!!getState());
                }
            });

        }());

    }, {
        "messages": 21
    }],
    102: [function(require, module, exports) {
        var environment = require('../../environment');
        var messages = require('messages');

        (function() {
            'use strict';

            /**
             *
             * @module web-ui
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:metrics
             * @requires module:messages
             * @requires module:utils
             * @requires module:do-not-disturb
             * @requires module:scroll
             * @requires module:logger
             * @requires module:environment
             */

            module.exports = {
                init: init,
                show: show,
                hide: hide,
                showError: showError
            };

            var metrics = require('metrics');
            var messages = require('messages');
            var utils = require('utils');
            var doNotDisturb = require('../do-not-disturb');
            var scroll = require('./scroll');
            var logger = require('logger');
            var responderLite = require('../../../../outer/responder-lite');
            var env;
            var iframe;
            var wrapper;
            var staticErrorPageLoaded = false;
            var innerLoaded = false;
            var scrollValue;
            var htmlElement = document.querySelector('html');
            var style = document.createElement('style');
            var legacyScrollEnabled = false;

            // Listen for post-messages. Once we receive 'inner.loaded', we'll set
            // innerLoaded to true, and stop listening for messages. This is so that
            // we have insight into whether or not the inner frame was able to load.
            window.addEventListener('message', innerLoadedListener, false);

            //
            // @TODO: Remove in next release, once the fix has been verified to not have any issues.
            //
            // Kill-switch for DIDFE-8538. If the following configuration is set, then the fix for DIDFE-8538 will be
            // disabled, and we will fallback to the previous behavior in production (where position is absolute, and
            // the lightbox is pushed down to the current scroll offset):
            //
            // {
            //     "configurations": {
            //         "DIDFE-8538-scrolling": {
            //              "disabled": true
            //         }
            //     }
            // }
            //
            messages.subscribe('config.ready', function(data) {
                var isScrollFixDisabled = utils.get(data, 'dynamicConfig.configurations.DIDFE-8538-scrolling.disabled');

                if (isScrollFixDisabled) {
                    legacyScrollEnabled = true;
                    style.innerHTML = getStyle(true);
                }
            });

            /**
             * Remove the event listener for messages after inner is loaded
             * @function innerLoadedListener
             * @private
             */
            function innerLoadedListener(event) {
                if (event.data === 'inner.loaded') {
                    innerLoaded = true;
                    window.removeEventListener('message', innerLoadedListener);
                }
            }

            function getInlineStyle() {
                return (
                    'iframe#disneyid-iframe{' +
                    'width:100%;' +
                    '}'
                );
            }

            function getStyle(forceAbsolute) {
                //
                // Fix for: DIDFE-8538.
                //
                // Note that we have a very long history with scrolling bugs, as is evident by:
                // DIDFE-8501, DIDFE-8458, DIDFE-6763, DIDFE-4898, DIDFE-2718, DIDFE-1472
                // ...the list keeps going
                //
                // Arguably, the "right" way to render a modal is to set the position to fixed.
                //
                // Part of the problem, is that iOS Safari handles position: fixed; different from every
                // other browser. Setting fixed position alone on iOS, results in the content being
                // unscrollable. You can work around this by adding:
                //   {
                //      overflow-y: scroll;
                //      -webkit-overflow-scrolling: touch;
                //   }
                //
                // The behavior, however, is still different from other browsers. Because of nuances in how
                // iOS does "rubber band" scrolling (ie. when you scroll beyond the content boundary), the
                // UX is still broken. When the scroll position is at the very top, or the very bottom,
                // scrolling beyond the boundary scrolls the content behind the modal. When this happens, the
                // focus tends to "get stuck" on the content behind the modal.
                //
                // Theoretically, if you could figure out how to prevent the scroll position of the modal from
                // being at the the very top or very bottom, you could prevent this behavior and fixed
                // position would work. Unfortunately, things like scroll events don't work, because the event
                // fires *after* the content has been scrolled, and doesn't take the rubber band effect or
                // momentum into consideration.
                //
                // For now, the solution is to set position to absolute on iOS.
                //
                var position = utils.isIOS() || forceAbsolute ? 'absolute' : 'fixed';

                return (
                    'div#disneyid-wrapper{' +
                    'position:' + position + ';' +
                    'display:none;' +
                    'opacity:0;' +
                    'top:0;' +
                    'left:0;' +
                    'width:100%;' +
                    'height:100%;' +
                    '}' +
                    'div#disneyid-wrapper.state-active {' +
                    'z-index:9999999;' +
                    'opacity:1;' +
                    'transition:opacity 300ms;' +
                    '-webkit-transition:opacity 300ms;' +
                    '}' +
                    'iframe#disneyid-iframe{' +
                    'width:100%;' +
                    'height:100%;' +
                    '}'
                );
            }

            /**
             * Appends all of the DOM nodes required to display the lightbox.
             * @function _appendIframe
             * @private
             */
            function _appendIframe() {
                logger.log('UI#appendIframe');

                style.setAttribute('id', 'disneyid-style');
                style.setAttribute('type', 'text/css');

                style.innerHTML = getStyle();

                wrapper = document.createElement('div');
                wrapper.setAttribute('id', 'disneyid-wrapper');

                iframe = document.createElement('iframe');
                iframe.setAttribute('id', 'disneyid-iframe');
                iframe.setAttribute('name', 'disneyid-iframe');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('title', 'Account Dialog');
                var path = env.getPath();
                iframe.setAttribute('src', path);

                wrapper.appendChild(iframe);

                document.head.appendChild(style);
                document.body.appendChild(wrapper);

                var iframeLoadTimeout = setTimeout(function() {
                    messages.publish('lightbox.showError', {
                        reason: 'inner.timeout'
                    }); // show lightbox error page if not cancelled
                }, 1000 * 90);
                messages.subscribe('lightbox.heartbeat', function() {
                    clearTimeout(iframeLoadTimeout); // cancel timeout if heartbeat is received
                });
            }

            function _appendInlineIframe() {
                logger.log('UI#appendIframeInline');

                style.setAttribute('id', 'disneyid-style');
                style.setAttribute('type', 'text/css');

                style.innerHTML = getInlineStyle();

                iframe = document.createElement('iframe');
                iframe.setAttribute('id', 'disneyid-iframe');
                iframe.setAttribute('name', 'disneyid-iframe');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('title', 'Account Dialog');
                var path = env.getPath();
                iframe.setAttribute('src', path);

                var container = document.querySelector(env.getInlineContainerSelector());
                container.appendChild(iframe);
                document.head.appendChild(style);

                var iframeLoadTimeout = setTimeout(function() {
                    messages.publish('lightbox.showError', {
                        reason: 'inner.timeout'
                    }); // show lightbox error page if not cancelled
                }, 1000 * 90);
                messages.subscribe('lightbox.heartbeat', function() {
                    clearTimeout(iframeLoadTimeout); // cancel timeout if heartbeat is received
                });
                messages.subscribe('resize', function(data) {
                    iframe.setAttribute('height', data.height + 'px');
                });
            }

            /**
             * Initilizes the lightbox.
             * @function init
             * @static
             * @param {object} environment Contains the properties of the environment
             */
            function init(environment) {
                env = environment;
                var responderUrl = env.getResponderPageUrl();

                if (env.getInlineContainerSelector()) {
                    utils.docReady(_appendInlineIframe)
                } else {
                    utils.docReady(_appendIframe);
                }

                if (responderUrl && responderUrl.indexOf('no.responder.page.com') == -1) {
                    utils.docReady(function() {
                        appendResponderIframe(responderUrl);
                    });
                } else {
                    // Responder page not provided. Loopback responder read messages to maintain support for NRT-only integrations
                    // (i.e. sites that only use did.launchNewsletters() and never expose login or registration.)
                    responderLite.attach();
                }
            }

            /**
             * Show the lightbox.
             * @function show
             * @static
             * @param {object} params
             * @param {promise} deferred
             */
            function show(params, deferred) {
                // If we have to "deferWhenDoNotDisturbEnabled",
                // and the guest currently cannot be disturbed,
                // don't show the lightbox
                if (params && params.deferWhenDoNotDisturbEnabled && doNotDisturb.getState()) {
                    return;
                }

                // Disable scroll on the outer, to resolve the "double scrollbars"
                // issue. Wait until doc ready if necessary
                utils.docReady(function() {

                    if (env.getInlineContainerSelector()) {
                        return;
                    }

                    scroll.disable();
                    setFrameFocus();

                    setTimeout(function() {
                        wrapper.className = 'state-active';
                        scrollValue = window.scrollY || window.pageYOffset;

                        //
                        // Part of fix for DIDFE-8538
                        //
                        // @TODO: Remove in next release, once the fix has been verified to not have any issues.
                        //
                        if (legacyScrollEnabled && !utils.isMobileDevice()) {
                            wrapper.style.top = scrollValue + 'px';
                        }

                        // Add a global class to the html element when the lightbox is open
                        if (htmlElement) {
                            htmlElement.classList.add('oneid-lightbox-open');
                        }
                    });

                    // This deferred reflow is here due to a bug in mobile safari
                    // that causes the `display: block` to be ignored initially
                    // See https://essjira.disney.com/browse/DIDFE-4460
                    setTimeout(function() {
                        wrapper.style.display = 'block';
                        if (deferred && deferred.resolve) {
                            deferred.resolve();
                        }
                    }, 50);

                    if (staticErrorPageLoaded) {
                        // Log static error page rendered
                        metrics.error(metrics.actions.event.serviceError, {
                            error_codes: 'UNKNOWN_ERROR',
                            error_category: 'UNKNOWN_ERROR',
                            info: {
                                static: 'true'
                            }
                        });
                    }
                });
            }

            function setFrameFocus() {
                logger.log('UI#setFrameFocus');
                var start = Date.now();
                var interval = setInterval(function() {
                    if (document.activeElement !== iframe && (Date.now() - start) < 5000) {
                        try {
                            iframe.focus();
                        } catch (e) {}
                    } else {
                        clearInterval(interval);
                    }
                }, 100);
            }

            /**
             * Sets the focus on the documents body
             * @function clearFrameFocus
             * @private
             */
            function clearFrameFocus() {
                logger.log('UI#clearFrameFocus');
                try {
                    document.querySelector('body').focus();
                } catch (e) {}
            }

            /**
             * Hides the lightbox.
             * @function hide
             * @static
             */
            function hide() {
                if (env.isInline()) {
                    return;
                }

                window.scrollTo(0, scrollValue);
                logger.log('UI#hide');
                if (wrapper) {
                    wrapper.style.display = 'none';
                    wrapper.className = '';
                }

                // Remove the global lightbox-open class from the html element
                if (htmlElement) {
                    htmlElement.classList.remove('oneid-lightbox-open');
                }

                // Enable scroll on the outer, once the UI has been closed.
                scroll.enable();
                clearFrameFocus();
            }

            /**
             * Navigates the lightbox to our fallback error pages
             * @function showError
             * @private
             * @param {object} data
             */
            function showError(data) {
                logger.log('UI#showError');
                staticErrorPageLoaded = true;
                var params = env.getStandardQueryParams();
                var reason = utils.get(data, 'reason') || 'outer';
                var dest = environment.getOrigin() + '/v2/error/' + environment.getClientId() + '/' + environment.getLangPref() + '?reason=' + encodeURIComponent(reason);

                if (params.cssOverride) {
                    dest += '&cssOverride=' + encodeURIComponent(params.cssOverride);
                }

                if (iframe) {
                    iframe.src = dest;
                }

                // Log static service error page loaded
                metrics.error(metrics.actions.event.serviceError, {
                    error_category: 'UNKNOWN_ERROR',
                    error_codes: 'UNKNOWN_ERROR',
                    info: {
                        static: true,
                        reason: reason,
                        innerLoaded: ('' + innerLoaded)
                    }
                });
            }

            /**
             * Append the responder iframe
             * @function appendResponderIframe
             * @memberof! insecure-session-adapter.Adapter
             * @private
             */
            function appendResponderIframe(url) {
                var responderEl = document.createElement('iframe');

                responderEl.setAttribute('id', 'disneyid-secure-responder');
                responderEl.setAttribute('name', 'disneyid-secure-responder');
                responderEl.setAttribute('src', url);
                responderEl.style.display = 'none';

                document.body.appendChild(responderEl);
            }

            messages.subscribe('lightbox.show', show);
            messages.subscribe('lightbox.hide', hide);
            messages.subscribe('lightbox.showError', showError);
        }());

    }, {
        "../../../../outer/responder-lite": 109,
        "../../environment": 79,
        "../do-not-disturb": 101,
        "./scroll": 103,
        "logger": 20,
        "messages": 21,
        "metrics": 71,
        "utils": 42
    }],
    103: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             *
             * @module scroll
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             */
            var utils = require('utils');

            module.exports = {
                'enable': enable,
                'disable': disable
            };

            var originalStyles;
            var enabled = false;
            var html;
            var body;

            /**
             *
             * @function disable
             * @static
             */
            function disable() {
                if (!enabled) {
                    html = window.document.querySelector('html');
                    body = window.document.querySelector('body');

                    originalStyles = {
                        html: {
                            overflow: body.style.overflow,
                            height: body.style.height
                        },
                        body: {
                            overflow: body.style.overflow,
                            height: body.style.height
                        }
                    };

                    html.style.overflow = 'hidden';
                    body.style.overflow = 'hidden';
                    if (utils.isMobileDevice() || utils.isBodyPositionRelative()) {
                        html.style.height = '100%';
                        body.style.height = '100%';
                    }
                    enabled = true;
                }
            }

            /**
             *
             * @function enable
             * @static
             */
            function enable() {
                if (enabled) {
                    html.style.overflow = originalStyles.html.overflow;
                    html.style.height = originalStyles.html.height;
                    body.style.overflow = originalStyles.body.overflow;
                    body.style.height = originalStyles.body.height;
                    enabled = false;
                }
            }
        }());

    }, {
        "utils": 42
    }],
    104: [function(require, module, exports) {
        (function() {
            'use strict';

            var messages = require('messages');
            var session = require('session');
            var utils = require('utils');

            var UNID_PATH = '//cdn.unid.go.com/js/unid.min.js';
            var AGEBAND_CHILD = 'CHILD';
            var PRIMARY_KID = 'PK';
            var FAMILY_FRIENDLY = 'FF';
            var GENERAL_AUDIENCE = 'GA';

            // we have to export the init method so our tests can reinitialize the config.ready
            // subscription that is cleared out by previous tests
            module.exports = init;

            // immediately call init to subscribe
            init(window, document);

            function init(w, d) {
                messages.subscribe('config.ready', function(config) {
                    var audience = utils.get(config, 'site.data.uiConfig.audience');
                    if (!audience || audience === PRIMARY_KID) {
                        return; // not allowed to run on PK sites at all
                    }
                    session.guest.read().then(function(guest) {
                        // Don't load UNID library if known guest is a child
                        // we will still cross-check swid values in slogger against ageBand
                        // before ingesting into the graph
                        // (this is just a check to remove swids that we know about, reduce noise)
                        var audienceOk = audience === GENERAL_AUDIENCE || audience === FAMILY_FRIENDLY;
                        var ageOk = guest && utils.get(guest, 'guest.profile.ageBand') !== AGEBAND_CHILD;
                        if (audienceOk && ageOk) {
                            load(w, d, config);
                        }
                    }, function() {
                        // Guest not logged in
                        if (audience === GENERAL_AUDIENCE) {
                            // can only load for unauthenticated guests on GA sites
                            load(w, d, config);
                        }
                    });
                });
            }

            /**
             * Loads the UNID library
             */
            function load(w, d, config) {
                // add an initial placeholder object
                // this is replaced with window.unid = {get:function(){...}, version: 'string'}
                // but by adding a default placeholder, our tests can ensure that load() was called
                // and we will see an empty unid object in cases where load was successfully called
                // but where the unid service itself fails to load JS
                // (should never happen, but good for debugging)
                w.unid = {};
                var e = d.body;
                var t = d.createElement('script');
                t.type = 'text/javascript';
                t.id = 'unid';
                t.setAttribute('data-client', config.global.clientId);
                t.src = UNID_PATH;
                e.appendChild(t);
            }

        }());

    }, {
        "messages": 21,
        "session": "session",
        "utils": 42
    }],
    105: [function(require, module, exports) {

        'use strict';

        module.exports = {
            register: register,
            get: get
        };

        var workflows = {};

        function register(name, impl) {
            workflows[name] = impl;
        }

        function get(name) {
            if (typeof workflows[name] === 'function') {
                return workflows[name]();
            }
        }


    }, {}],
    106: [function(require, module, exports) {
        'use strict';

        var q = require('../../assets/common/js/q');
        var utils = require('utils');
        var messages = require('messages');

        module.exports = {
            runWorkflow: runWorkflow,
            setRoute: setRoute
        };

        /**
         * Runs workflow.
         * @param name
         * @param step
         * @param data
         * @param execute_only
         * @returns {r.promise|*|promise|k.promise|{then, catch, finally}|Promise}
         */
        function runWorkflow(name, step, data, execute_only) {
            var dfd = q.defer();
            var evt = !!execute_only ? 'workflow.execute' : 'workflow.run';

            messages.publish(evt, {
                name: name,
                step: step,
                data: data
            }, dfd);

            return dfd.promise;
        }

        /**
         * Sets the route
         * @param name
         * @param opts
         * @param routeParameters
         * @returns {Promise}
         */
        function setRoute(name, opts, routeParameters) {
            var deferred = q.defer();
            messages.publish('inner.setRoute', {
                name: name,
                opts: opts,
                routeParameters: routeParameters
            }, deferred);

            // Timeout if promise doesn't resolve after 90 seconds.
            utils.promise.timeout(deferred, 1000 * 90);
            return deferred.promise;
        }

    }, {
        "../../assets/common/js/q": 1,
        "messages": 21,
        "utils": 42
    }],
    107: [function(require, module, exports) {
        /**
         * @file
         * Documentation for the public API exposed by the DisneyID UI v2
         * currently in development.
         *
         * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
         * @version 2.0
         */

        /**
         * The globally scoped object will give you the ability to retrieve an
         * instance of the client specifically configured to your specifications.
         * @namespace DisneyID
         * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
         * @version 2.0
         */

        'use strict';

        module.exports = {
            configure: configure,
            get: getSingleton,
            deleteInstance: deleteInstance
        };

        var DisneyID;
        var commonApi = require('../common/api');
        var Q = require('../../assets/common/js/q');
        var utils = require('utils');
        var messages = require('messages');
        var env = require('../components/outer/environment');
        var session = require('session');
        var eventEmitter = require('../components/common/event-emitter');
        var languages = require('../components/inner/language-preferences/languages');
        var metrics = require('../components/metrics');
        var doNotDisturb = require('../components/outer/ui/do-not-disturb');
        var trustState = require('../components/outer/trust-state');
        var trustStateConst = require('../components/common/trust-state/constants.js');
        var tokenRefresh = require('../components/outer/token-refresh');
        var sessionTimer = require('../components/outer/session-timer');
        var config = require('../components/outer/config');
        var progressiveProfileCollection = require('../components/outer/progressive-profile-collection');
        var logger = require('logger');
        var cookie = require('cookie');
        var apiHelper = require('./api-helper');
        var reportingHelper = require('../common/reporting');
        var WM = require('../components/outer/workflow-manager');
        var WorkflowHistory = require('WorkflowHistory');
        var ERRORS = require('../common/errors');
        var dao = require('dao');
        var ui = require('../components/outer/ui/web-ui');
        var sleepTimer = require('../components/outer/sleep-timer');

        var initialConfig;
        var configurationOpts;
        var instance;
        var state = {};
        var trustStateWeb;

        var initCompleteDfd = Q.defer();
        var criticalSessionTasksDfd = Q.defer();

        // set inside getSingleton() if responder apex domain does not match the top window apex domain
        // remains undefined otherwise.
        var responderMismatchApexDomain;

        /**
         * Retrieves the object instance for use in your Application
         *
         * @category initConfig
         * @static
         * @function get
         * @memberof DisneyID
         * @param {Object} opts The runtime configuration options (see below)
         * @throws Will throw an exception if the method is called without adequate
         *     configuration options
         * @throws Will throw an exception if the method is called a second time
         *     with configuration options
         * @returns {DisneyIDInstance} Instance of the configured DID client
         * @example
         <!-- Include DisneyID client on your page -->
         <!-- <script id="disneyid-script" src="/path/to/v2/DisneyID.js">
         </script>
         <script>
         var did = DisneyID.get({
            initialize: true,
            clientId: 'DISNEYID-UI.DEMO-QA',
            cssOverride: 'https://foo.com/bar.css',
            langPref: 'en-GB',
            responderPage: 'http://mysite.com',
            sessionId: '555555',
            debug: true,
            correlationId: 'e1e5e538-0c35-fbd6-bd4f-373acb018f9f'
            correlationIdTimeStamp: 1425433671898
        });
         </script> -->
         */
        function getSingleton(opts) {
            if (!instance) {
                if (!opts || !Object.keys(opts).length) {
                    throw new Error(ERRORS.NO_CONFIG_OPTIONS);
                }

                if (!opts.clientId) {
                    throw new Error(ERRORS.NO_CLIENT_ID);
                }

                if (typeof opts.responderPage !== 'string') {
                    throw new Error(ERRORS.NO_RESPONDER_PAGE);
                }

                if (opts.cookieDomain) {
                    if (typeof opts.cookieDomain !== 'string') {
                        throw new Error(ERRORS.INVALID_COOKIE_DOMAIN);
                    }

                    // If we've been loaded through https, then we use the hostname for validating the
                    // cookieDomain, as we will load the secure session adapter directly, otherwise we
                    // use the hostname from the responder page.
                    var hostDomain = (window.location.protocol.toLowerCase().indexOf('https') === 0 ?
                        window.location.hostname :
                        utils.url.getHostName(opts.responderPage)
                    );

                    if (!isValidCookieDomain(opts.cookieDomain, hostDomain)) {
                        throw new Error(ERRORS.INVALID_COOKIE_DOMAIN);
                    }
                }

                // check for invalid responder page configuration
                try {
                    var outerApexDomain = utils.getTLD(window.location.hostname);
                    var responderApexDomain = utils.getTLD((utils.getLocation(opts.responderPage || '') || {}).hostname);
                    if (outerApexDomain !== responderApexDomain) {
                        responderMismatchApexDomain = responderApexDomain;
                        logger.warn('responder page apex domain does not match the top window apex domain. responder apex:', responderApexDomain);
                    }
                } catch (e) {}

                // If optionalConfigs.reporting is passed in, but is invalid, then remove it.
                if (utils.get(opts, 'optionalConfigs.reporting') && !reportingHelper.validate(opts.optionalConfigs.reporting)) {
                    delete opts.optionalConfigs.reporting;
                    logger.warn('optionalConfigs.reporting does not pass validation, values will be ignored');
                }

                // Only let ESPN use this feature, until "The Townhouse" is complete.
                if (opts.hasOwnProperty('alternateConfig') && !utils.isEspnClientId(opts.clientId)) {
                    delete opts.alternateConfig;
                }

                var experience = utils.get(opts, 'experience');
                if (experience && !reportingHelper.validateExperience(experience)) {
                    delete opts.experience;
                    logger.warn('optionalConfigs.experience does not pass validation, values will be ignored');
                }

                // Clone configuration options, so they can be returned as they're
                // passed in.
                initialConfig = utils.clone(opts);

                metrics.setReportingProperties(utils.get(opts, 'optionalConfigs.reporting'), experience);

                if (!opts.correlationId) {
                    opts.correlationId = utils.uuid();
                }

                if (!opts.correlationId || !opts.correlationIdTimeStamp) {
                    opts.correlationIdTimeStamp = new Date().getTime();
                }
            }

            if (opts && instance) {
                throw new Error(ERRORS.CONFIG_SET);
            }

            if (opts && !instance) {
                if (opts.logLevel) {
                    logger.setLogLevel(opts.logLevel);
                }

                instance = new DisneyID(opts);

                instance.on('error', function(reason) {
                    logger.error(reason);
                });
            }

            return instance;
        }

        /**
         * Checks whether a cookie domain / host domain pair is valid.
         * @param   {String}  cookieDomain
         * @param   {String}  hostDomain
         * @returns {Boolean}
         */
        function isValidCookieDomain(cookieDomain, hostDomain) {
            var cookieDomainParts = cookieDomain.split('.');
            var hostDomainParts = hostDomain.split('.');

            // Cookies can only be written to second-level domains, and lower.
            if (cookieDomainParts.length < 2) {
                return false;
            }

            // Strip down hostDomainParts, until it is the same length as cookieDomainParts.
            while (hostDomainParts.length > cookieDomainParts.length) {
                hostDomainParts.shift();
            }

            // Compare the cookieDomain to the stripped down (common host) of the host domain.
            // If they match, then we have a valid cookie domain.
            return (cookieDomain === hostDomainParts.join('.'));
        }

        /**
         * Configuration to establish injection of mobile APIs
         * @param  {object} opts The configuration options
         */
        function configure(opts) {
            configurationOpts = opts || {};

            if (opts.isTest) {
                initCompleteDfd = {
                    promise: {
                        then: function(cb) {
                            cb();
                        }
                    }
                };
            }
        }

        // USED FOR TESTING
        function deleteInstance() {
            instance = undefined;
        }

        /**
         * Configured instance of the DisneyID client that contains the logical
         * interaction mechanisms for flows. This object will also emit events
         * to allow the consumer to react to specific user activities.<br><br>
         *
         * <b>NOTE:</b> This class is only accessible via the get method in {@link DisneyID} and cannot be instantiated directly
         *
         * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
         * @class DisneyIDInstance
         * @since 2.0
         */
        DisneyID = function DisneyID(opts) {
            var self = this;
            var os = utils.getOS();

            opts.outerDomain = window.location.hostname;
            env.init(opts, configurationOpts);

            metrics.setClientId(env.getClientId());
            // If a patch bay reference has been provided at configuration time,
            // initialize it with our environment-specific config data to enable
            // cross-domain and cross-frame communication.
            if (utils.get(configurationOpts, 'modules.patchBay')) {
                configurationOpts.modules.patchBay.init(env);
            }

            if (utils.get(configurationOpts, 'modules.trustStateWeb')) {
                trustStateWeb = configurationOpts.modules.trustStateWeb.init();
            }

            addPublicMethods(self);
            addSubscribers(self);
            state.initialized = false;

            if (opts.initialize) {
                self.init();
            }
        };

        eventEmitter.emittable(DisneyID);

        /**
         * TODO: We could refactor our launch methods to use the command pattern
         * so that common logic between launch calls (such as fatal error and
         * session state handling) can live in one place.
         */
        (function() {
            var fatalStateDeferred = Q.defer();

            // Barebones post message code on the static error page will publish
            // an `inner.fatal` message that indicates a fatal error has occured.
            messages.subscribe('inner.fatal', function() {
                fatalStateDeferred.resolve();
            });

            // publish `lightbox.requestShowErrorOnFatal` from within a launch
            // method to indicate that the lightbox should show the rendered static
            // error page if we find that a fatal error has occured.
            messages.subscribe('lightbox.requestShowErrorOnFatal', function() {
                fatalStateDeferred.promise.then(function() {
                    messages.publish('lightbox.show');
                });
            });
        }());

        function addPublicMethods(self) {
            var methods = utils.assign({}, commonApi, {
                doNotDisturb: doNotDisturb1,
                forceTokenRefresh: forceTokenRefresh,
                getActivityStatus: getActivityStatus,
                getEditableProfileFields: getEditableProfileFields,
                getGuest: getGuest,
                getGuestNewsletters: getGuestNewsletters,
                getInlineNewsletters: getInlineNewsletters,
                getTrustStateStatus: getTrustStateStatus,
                launchAdultVerification: launchAdultVerification,
                launchGuestFlow: launchGuestFlow,
                launchNewsletters: launchNewsletters,
                launchRegistration: launchRegistration,
                launchSocialRegistration: launchSocialRegistration,
                redeemSessionTransferKey: redeemSessionTransferKey,
                setEditableProfileFields: setEditableProfileFields,
                setInlineNewsletters: setInlineNewsletters
            });

            self.init = init;
            self.setLanguage = setLanguage;
            self.getConfig = getConfig;
            self.setDebug = setDebug;
            self.setLogLevel = setLogLevel;
            self.getLoggedInStatus = getLoggedInStatus;
            self.getDeviceId = getDeviceId;

            var checkInitAndLoggedIn = [checkInitialized, checkLoggedIn];
            var checkInitAndLoggedOut = [checkInitialized, checkLoggedOut];
            var wrappedMethods = [
                ['doNotDisturb', checkInitAndLoggedIn, 1],
                ['forceTokenRefresh', checkInitAndLoggedIn],
                ['getActivityStatus', checkInitAndLoggedIn, 1],
                ['getEditableProfileFields', checkInitAndLoggedIn],
                ['getGuest', checkInitAndLoggedIn, 1],
                ['getGuestNewsletters', checkInitAndLoggedIn],
                ['getLicensePlateDataBag', [checkInitialized]],
                ['getTrustStateStatus', checkInitAndLoggedIn],
                ['launchAdultVerification', [checkInitialized]],
                ['launchDisplayName', checkInitAndLoggedIn],
                ['launchEmailVerification', checkInitAndLoggedIn],
                ['launchLicensePlate', [checkInitialized]],
                ['launchLogin', checkInitAndLoggedOut],
                ['launchGuestFlow', checkInitAndLoggedOut, 1],
                ['launchNewsletters', [checkInitialized], 1],
                ['launchProfile', checkInitAndLoggedIn],
                ['launchReauth', checkInitAndLoggedIn],
                ['launchRecoverUsername', checkInitAndLoggedOut],
                ['launchRegistration', checkInitAndLoggedOut],
                ['launchRequestActivity', checkInitAndLoggedIn, 1],
                ['launchResetPassword', checkInitAndLoggedOut],
                ['launchSocialRegistration', checkInitAndLoggedOut],
                ['logout', []],
                ['redeemSessionTransferKey', checkInitAndLoggedOut, 1],
                ['setEditableProfileFields', checkInitAndLoggedIn, 1],
                ['getInlineNewsletters', [checkInitialized], 1],
                ['setInlineNewsletters', [checkInitialized], 1]
            ];

            wrappedMethods.forEach(function(args) {
                self[args[0]] = methodWrapper.apply(null, args);
            });

            /**
             * Precondition check for initialized.
             */
            function checkInitialized() {
                if (!state.initialized) {
                    return Q.reject(ERRORS.NOT_INITIALIZED);
                }

                return Q.resolve();
            }

            /**
             * Precondition check for logged in. Must wait for session state to be known because
             * there may be no session cookies at the time of invocation
             */
            function checkLoggedIn() {
                return criticalSessionTasksDfd.promise.then(function() {
                    return session.isLoggedIn();
                }).then(function(isLoggedIn) {
                    if (isLoggedIn !== true) {
                        throw ERRORS.SESSION_NOT_ESTABLISHED;
                    }
                });
            }

            /**
             * Precondition check for logged out.
             */
            function checkLoggedOut() {
                return criticalSessionTasksDfd.promise.then(function() {
                    return session.isLoggedIn();
                }).then(function(isLoggedIn) {
                    if (isLoggedIn !== false) {
                        throw ERRORS.SESSION_ESTABLISHED;
                    }
                });
            }

            /**
             * Checks a series of preconditions, in order. This will resolve if all of
             * them pass, and reject with an error code if one of them fails.
             *
             * @param {array} preconditions
             * @return {promise}
             */
            function checkPreconditions(preconditions) {
                if (Array.isArray(preconditions) && preconditions.length > 0) {
                    return preconditions.shift()().then(function() {
                        return checkPreconditions(preconditions);
                    });
                }

                return Q.resolve();
            }

            /**
             * Wrapper, which applies pre-condition checks and New Relic logging to an API method.
             *
             * @param {string} name
             * @param {array} preconditions
             * @param {number} optsArg
             * @return {function}
             */
            function methodWrapper(name, preconditions, optsArg) {
                return function() {
                    var opts = arguments[0] || {};
                    if (typeof optsArg !== 'undefined') {
                        opts = arguments[optsArg] || {};
                    }

                    // Validate experience
                    var experience = utils.get(opts, 'optionalConfigs.experience');
                    if (experience && !reportingHelper.validateExperience(experience)) {
                        delete opts.optionalConfigs.experience;
                        logger.warn('optionalConfigs.experience does not pass validation, values will be ignored');
                    }

                    // Get logging info. This will also process optionalConfigs.reporting, and expose it on
                    // this object (assuming it's valid).
                    opts.loggingInfo = reportingHelper.getLoggingInfo(initialConfig, processOptions(opts));

                    var args = [opts].concat([].slice.call(arguments, 0));
                    var deferred = Q.defer();
                    var log;

                    if (!!metrics.actions.api[name]) {
                        log = metrics.timed(
                            metrics.actions.api[name], {
                                conversation_id: opts.conversationId,
                                correlation_id: opts.correlationId,
                                reporting: utils.get(opts.loggingInfo, 'reporting')
                            },
                            opts.conversationIdTimeStamp
                        );
                    }

                    checkPreconditions(utils.clone(preconditions))
                        .then(function() {
                            methods[name].apply(null, args)
                                .then(function(data) {
                                    deferred.resolve(data && typeof data.data !== 'undefined' ? data.data : data);

                                    if (log) {
                                        log.success(data && data.logging ? data.logging : undefined);
                                    }
                                })
                                .fail(function(data) {
                                    var codes = utils.get(data, 'error_codes');
                                    var success = !!utils.get(data, 'success');

                                    instance.emit('error', codes);

                                    deferred.reject(utils.get(data, 'apiResponse') || codes);

                                    if (log) {
                                        delete data.apiResponse;
                                        log[success ? 'success' : 'error'](data);
                                    }
                                });
                        }, function(code) {
                            instance.emit('error', code);
                            deferred.reject(code);
                            log.success({
                                error_codes: code
                            });
                        });

                    return deferred.promise;
                };
            }
        }

        /**
         * Initialize the UI and precache necessary artifacts. Initialization
         * will also implicitly reconstitute any current session. This method
         * will return a promise that, when fulfilled, will indicate whether
         * there is a current user session logged in and if so, the user data.
         * If the DisneyID instance is already initialized, the promise will be
         * rejected and an `error` event will be emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category initConfig
         *
         * @fires DisneyIDInstance#init
         * @fires DisneyIDInstance#error
         *
         * @returns {Promise}
         * @example
         did.init()
         .then(function (data) {
                if (data.loggedIn) {
                    // We have a logged in guest
                }
            })
         .fail(function (error) {
                console.log(error);
            });
         */
        function init() {
            var opts = processOptions({});
            var deferred = Q.defer();
            var configDeferred = Q.defer();
            var initWorkflow = WM.get('initialization');
            var reporting = utils.get(initialConfig, 'optionalConfigs.reporting');
            var config = this.getConfig();

            // Observe the init workflow. Tracked properties defined here only apply to state changes
            // on the initialization workfow. Similar property lists are defined when additional
            // workflows are set up to be tracked by this WorkflowHistory instance.
            var breadcrumbs = new WorkflowHistory(initWorkflow, [{
                    prop: 'token.access_token',
                    format: utils.maskToken
                },
                {
                    prop: 'token.refresh_token',
                    format: utils.maskToken
                },
                {
                    prop: 'token.expires'
                }
            ]);

            var initialLogPayload = {
                correlation_id: opts.correlationId,
                conversation_id: opts.conversationId,
                reporting: reporting,
                info: {}
            };

            if (responderMismatchApexDomain) {
                initialLogPayload.info.responderMismatch = responderMismatchApexDomain;
            }

            if (config.cookieDomain) {
                initialLogPayload.info.cookieDomain = config.cookieDomain;
            }

            if (!Object.keys(initialLogPayload.info).length) {
                delete initialLogPayload.info;
            }

            var log = metrics.timed(metrics.actions.api.init, initialLogPayload);

            if (state.initialized) {
                deferred.reject(ERRORS.ALREADY_INITIALIZED);
                instance.emit('error', ERRORS.ALREADY_INITIALIZED);

                log.success({
                    error_codes: ERRORS.ALREADY_INITIALIZED
                });
            } else {
                sleepTimer.start();

                // Appends the inner and responder iframes; sets up message listeners
                // for lightbox.show, lightbox.hide, etc...
                ui.init(env);

                // Wait for config from inner bundle and configure the outer DAO
                messages.subscribe('config.ready', function(data) {
                    configDeferred.resolve(data);
                });
                dao.configure(configDeferred.promise);

                // `session-state-known` is emitted by the initialization workflow when the session state
                //  and guest data are known. Resolve the init() deferred and emit the `init` event.
                initWorkflow.on('session-state-known', function(data) {
                    var payload = {
                        loggedIn: data.isLoggedIn,
                        guest: data.guest
                    };
                    logger.debug('`session-state-known` emitted by initialization workflow', data);

                    var logPayload = {
                        trace: breadcrumbs.getTrail(),
                        trace_data: breadcrumbs.getData()
                    };

                    if (!data.guest) {
                        logPayload.error_codes = 'Logged in as unknown';
                    }

                    log.success(logPayload);

                    // make sure the swid cookie is correct
                    if (data.guest) {
                        var no_track = utils.get(data, 'guest.profile.ageBand') === 'CHILD';
                        session.swid.write(utils.get(data, 'guest.token.swid'), true, no_track);
                    }

                    instance.emit('init', payload);
                    deferred.resolve(payload);

                    // getGuest waits for initialization tasks to complete before invoking get-guest workflow
                    criticalSessionTasksDfd.resolve();
                });

                // `login` is emitted by the initializtaion workflow when an OBO login has completed.
                // This happens after `session-state-known`.
                initWorkflow.on('login', function(data) {
                    var no_track = utils.get(data, 'guest.profile.ageBand') === 'CHILD';
                    session.swid.write(utils.get(data, 'guest.token.swid'), true, no_track);
                    instance.emit('login', data.guest);
                });

                initWorkflow.on('done', function() {
                    sessionTimer.start();
                });

                initWorkflow.run(null, {
                    clientId: env.getClientId(),
                    cookieDomain: env.getCookieDomain(),
                    loggingInfo: {
                        correlationId: opts.correlationId,
                        reporting: reporting,
                        breadcrumbs: breadcrumbs,
                        context: 'initialization'
                    }
                });

                logger.debug('initialization workflow reference:');
                logger.debug(initWorkflow);

                trustState.init();

                // @todo: This probably belongs in the init workflow done callback,
                //        but we must ensure this change would not be non-backwards
                //        compatible.
                state.initialized = true;
            }

            deferred.promise.finally(function() {
                initCompleteDfd.resolve();
            });

            return deferred.promise;
        }

        function getDeviceId(loginValue) {
            return session.deviceId.read({
                loginValue: loginValue
            });
        }

        function launchRegistration(opts) {
            return commonApi.launchRegistration(initialConfig, opts);
        }

        function launchSocialRegistration(opts) {
            return commonApi.launchSocialRegistration(initialConfig, opts);
        }

        function launchAdultVerification(opts) {
            return commonApi.launchAdultVerification(initialConfig, opts);
        }

        function launchNewsletters(opts, promotionId) {
            var promotionInvalid = true;

            return Q.promise(function(resolve, reject) {
                config.getSite().then(function(siteConfig) {
                    var newsletters = utils.get(siteConfig, 'newsletters') || {};

                    Object.keys(newsletters).forEach(function(ageBand) {
                        var promotions = newsletters[ageBand] || {};
                        if (Object.keys(promotions).indexOf(promotionId) !== -1) {
                            promotionInvalid = false;
                        }
                    });

                    if (!promotionId || promotionInvalid) {
                        reject({
                            success: true,
                            error_codes: ERRORS.INVALID_ARGUMENT
                        });
                    } else {
                        commonApi.launchNewsletters(opts, promotionId).then(resolve, reject);
                    }
                });
            });
        }

        function getInlineNewsletters(opts, campaignId) {
            var deferred = Q.defer();
            var workflow = WM.get('get-inline-nrt');

            workflow.run('start', {
                opts: opts,
                campaignId: campaignId
            });

            workflow.on('done', function(response) {
                if (response.content.error_codes) {
                    deferred.reject({
                        error_codes: response.content.error_codes,
                        success: response.success,
                        apiResponse: response.content
                    });
                }

                deferred.resolve({
                    data: {
                        data: response.content.data,
                        error_codes: response.content.error_codes
                    }
                });
            });

            return deferred.promise;
        }

        function setInlineNewsletters(opts, data) {
            var deferred = Q.defer();
            var workflow = WM.get('set-inline-nrt');

            workflow.run('start', {
                opts: opts,
                buData: data
            });

            workflow.on('done', function(response) {
                if (response.content.error_codes) {
                    deferred.reject({
                        error_codes: response.content.error_codes,
                        success: response.success,
                        apiResponse: response.content
                    });
                }

                deferred.resolve({
                    data: {
                        data: response.content.data,
                        error_codes: response.content.error_codes
                    }
                });
            });

            return deferred.promise;
        }

        function launchGuestFlow(opts, guestCredential) {
            var deferred = Q.defer();
            var workflow = WM.get('guest-flow');

            workflow.run('validate', {
                guestCredential: guestCredential,
                opts: opts
            });

            workflow.on('done', function(response) {
                var successMesg = [
                    'SUCCESS_LAUNCH',
                    response.flowName,
                    (response.guestCredential ? 'WITH' : 'WITH_OUT'),
                    'EMAIL'
                ];

                deferred.resolve(successMesg.join('_'));

                utils.set(opts, 'optionalConfigs.email', response.guestCredential);
                utils.set(opts, 'optionalConfigs.flowName', response.flowName);
                utils.set(opts, 'optionalConfigs.flowCode', response.flowCode);

                if (response.flowName === 'LOGIN_FLOW') {
                    return commonApi.launchLogin(opts);
                } else {
                    return commonApi.launchRegistration(initialConfig, opts);
                }
            });

            return deferred.promise;
        }

        /**
         * Set the preferred language for the current user session. This preference
         * will indicate the language in which UI rendering and email sending will
         * occur. This method will return a promise when called. The promise will
         * be rejected if an unsupported locale is provided. Additionally, an
         * `error` event will emitted.
         *
         *
         * @memberof! DisneyIDInstance.prototype
         * @category initConfig
         *
         * @fires DisneyIDInstance#error
         *
         * @param {String} locale The ISO locale (i.e., "en-US")
         *
         * @returns {Promise}
         * @example
         did.setLanguage('en-BAD-ISO').fail(function (error) {
                console.log(error);
             });
         */
        function setLanguage(locale) {
            var deferred = Q.defer();

            if (!languages.isValid(locale)) {
                deferred.reject(ERRORS.UNSUPPORTED_LOCALE);
                instance.emit('error', ERRORS.UNSUPPORTED_LOCALE);
            } else {
                state.locale = locale;
                console.info(ERRORS.NOT_IMPLEMENTED);
            }

            return deferred.promise;
        }

        /**
         * This method will allow for setting some debug override properties on DID
         * @param {object} opts An object of debug properties to enforce
         * @param {string} type the type of debug operation
         */
        function setDebug(opts, type) {

            // Accept false to clear all current debug options
            if (opts === false) {
                messages.publish('debug.clear');
            } else {
                // Whitelist options we know of
                var geoIP = utils.get(opts, 'geoIP');
                if (geoIP) {
                    messages.publish('debug.geoIP', geoIP);
                }

                var country = utils.get(opts, 'country');
                if (country) {
                    messages.publish('debug.country', country);
                }

                var testProfileFlag = utils.get(opts, 'testProfileFlag');
                if (testProfileFlag) {
                    messages.publish('debug.testProfileFlag', testProfileFlag);
                }

                var metricsUrl = utils.get(opts, 'metricsUrl');
                if (metricsUrl) {
                    metrics.setWebLogUrl(metricsUrl);
                }

                var epcEnabled = utils.get(opts, 'epcEnabled');
                if (epcEnabled) {
                    messages.publish('debug.epcEnabled', epcEnabled);
                }

                var skipForcePasswordLogin = utils.get(opts, 'skipForcePasswordLogin');
                if (skipForcePasswordLogin) {
                    messages.publish('debug.skipForcePasswordLogin', skipForcePasswordLogin);
                }

                var shapeEnabled = !!utils.get(opts, 'shapeEnabled');
                if (shapeEnabled) {
                    messages.publish('debug.shapeEnabled', shapeEnabled);
                }
            }

            if (type === 'CLIENT_CONFIG' && (!/-PROD$/.test(env.getClientId()))) {
                overrideClientConfig(opts);
            }
        }

        /**
         * Sets the log level for the current page load and, optionally, the
         * browser session.
         *
         * @param {string} level LOG|DEBUG|WARN|INFO|ERROR|OFF
         * @param {boolean} perserve If true, preserves the log level using a cookie
         */
        function setLogLevel(level, preserve) {
            logger.setLogLevel(level);
            messages.publish('setLogLevel', {
                level: level
            });

            if (preserve && level.toUpperCase() !== 'OFF') {
                cookie.write('oid_loglevel', level, null, '/');
            } else if (!preserve || level.toUpperCase() === 'OFF') {
                cookie.remove('oid_loglevel', null, '/');
            }
        }

        /**
         * Returns a clone of the configuration options, exactly as they were
         * passed into DisneyID.get().
         *
         * @memberof! DisneyIDInstance.prototype
         * @category initConfig
         *
         * @returns {object}
         * @example
         var clientId = did.getConfig().clientId;
         */
        function getConfig() {
            return utils.clone(initialConfig);
        }

        /**
         * Indicates whether or not the UI should actively interrupt the user when
         * status change indicates they are no longer able to operate on the site
         * without additional profile updates (for instance, if the TOU changes
         * during a session). When set to true, the prompts will be deferred until
         * this method has been called again with false. This method returns a
         * promise when called. The promise will be rejected if 1) the method is
         * called before an established user session, 2) the method is called
         * without a valid argument.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category session
         *
         * @fires DisneyIDInstance#error
         *
         * @param {Bool} flag Sets the "do not disturb" state accordingly
         *
         * return {Promise}
         * @example
         did.doNotDisturb(true).fail(function (error) {
                console.log(error);
             });
         */
        function doNotDisturb1(opts, flag) {
            var deferred = Q.defer();

            if (flag === undefined) {
                deferred.reject({
                    success: true,
                    error_codes: ERRORS.INVALID_ARGUMENT
                });
            } else {
                doNotDisturb.setState(flag);
                if (!flag) {
                    checkCagoots();
                }

                deferred.resolve();
            }

            return deferred.promise;
        }

        /**
         * Determines whether or not we have a user logged in. If this assessment
         * requires a server call, the resolution of the promise is deferred until
         * that completes. This method returns a promise that when fulfilled,
         * provides the guests logged in state.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category session
         *
         *
         * @return {Promise}
         * @example
         did.getLoggedInStatus().then(function (loggedIn) {
            // Guest status represented by <loggedIn>
            });
         */
        function getLoggedInStatus() {
            var deferred = Q.defer();
            var options = processOptions();
            var log = metrics.timed(metrics.actions.api.getLoggedInStatus, {
                conversation_id: options.conversationId,
                correlation_id: options.correlationId
            });

            criticalSessionTasksDfd.promise.then(function() {
                // Note that isLoggedIn() never rejects.
                session.isLoggedIn().then(function() {
                    deferred.resolve.apply(deferred, arguments);
                    log.success();
                });
            });

            return deferred.promise;
        }

        /**
         * Returns all the profile fields that are allowed in an update call
         * along with the existing values in those fields if there are any
         *
         * @memberof! DisneyIDInstance.prototype
         * @category initConfig
         *
         * @returns {object}
         * @example
         * did.getEditableProfileFields(fields).then(function (data) {
         *      allowedFields = data;
         * }, function(data) {
         *      //some error logic
         * });
         */
        function getEditableProfileFields(opts) {
            var deferred = Q.defer();

            progressiveProfileCollection.get().then(function(editableProfileFields) {
                if (utils.get(editableProfileFields, 'required')) {
                    editableProfileFields.required = Object.keys(editableProfileFields.required)
                        .reduceNative(function(memo, profileKey) {
                            if (!/^phone\.mobile/.test(profileKey)) {
                                memo[profileKey] = editableProfileFields.required[profileKey];
                            }
                            return memo;
                        }, {});
                }

                deferred.resolve({
                    data: editableProfileFields
                });
            }, function() {
                deferred.reject({
                    success: true,
                    error_codes: ERRORS.UNKNOWN_ERROR
                });
            });

            return deferred.promise;
        }

        /**
         * Setter method which allows for updating profile fields with provided data
         *
         * @memberof! DisneyIDInstance.prototype
         * @category initConfig
         *
         * @returns {object}
         * @example
         * did.setEditableProfileFields(data).then(function (data) {
         *      allowedFields = data;
         * }, function(data) {
         *      //some error logic
         * });
         */
        function setEditableProfileFields(opts, data) {
            var deferred = Q.defer();
            var isUpdatingMobilePhone = Object.keys(data || {}).find(function(profileKey) {
                return /^phone\.mobile/.test(profileKey);
            });

            if (isUpdatingMobilePhone) {
                deferred.reject({
                    success: true,
                    error_codes: ERRORS.PROFILE_UPDATE_INVALID
                });

                return deferred.promise;
            }

            apiHelper.runWorkflow('ppcApi', null, {
                guestData: data,
                loggingInfo: {
                    correlationId: opts.correlationId
                }
            }, true).then(function(data) {
                if (data.isUnresolvableError) {
                    deferred.reject({
                        success: true,
                        error_codes: utils.get(data, 'output.failures[0].code', true)
                    });
                } else {
                    deferred.resolve({
                        data: data.output
                    });
                }
            }).catch(function(reason) {
                deferred.reject({
                    error_codes: reason
                });
            });

            return deferred.promise;
        }

        /**
         * Retrieves the guest object for the current user. If the full payload
         * parameter is undefined or false, the payload stored in the session data
         * is returned, unless it is expired. If the session data is expired OR
         * the full payload parameter is true, resolution is deferred until a full
         * round-trip has been completed and returns the full Guest Controller payload.
         * This method returns a promise that, when fulfilled, provides the guest data.
         * The promise will be rejected if the method is called before an established user session.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @param {Bool} [fullPayloadRequested]
         * Indicates whether caller is looking for full guest payload
         *
         * @return {Promise}
         * @example
         did.getGuest(true)
         .then(function (guest) {
                // <guest> contains full guest object
            })
         .fail(function (error) {
                console.log(error);
            });
         */
        function getGuest(opts, fullPayloadRequested) {
            var deferred = Q.defer(),
                workflow = WM.get('get-guest'),
                forceRefresh = !!opts.forceRefresh;

            fullPayloadRequested = !!fullPayloadRequested;

            // logging info
            var info = {
                forceRefresh: forceRefresh,
                fullPayloadRequested: fullPayloadRequested
            };
            var breadcrumbs = new WorkflowHistory(workflow, [{
                    prop: 'token.access_token',
                    format: utils.maskToken
                },
                {
                    prop: 'token.expires'
                }
            ]);

            workflow.on('done', function(data) {
                var category = data.errorCategory || utils.get(data, 'response.error.keyCategory') || '',
                    errorCodes = (data.errorCodes || []);

                // populate error codes for logging
                if (data.response && utils.get(data, 'response.error')) {
                    (utils.get(data.response, 'error.errors') || []).forEach(function(error) {
                        if (errorCodes.indexOf(error.code) === -1) {
                            errorCodes.push(error.code);
                        }
                    });
                }

                // if we called GC, we didn't have the fullPayload locally
                info.localCopyReturned = !data.response;

                /*
                    Feature Toggle: Reject/Resolve the old way if toggle on
                */
                if (data.getGuestFullPayloadForce) {
                    if (utils.get(data, 'guest.profile')) {
                        deferred.resolve({
                            data: data.guest,
                            logging: {
                                error_codes: errorCodes,
                                error_category: data.errorCategory,
                                info: info
                            }
                        });
                    } else {
                        deferred.reject({
                            error_codes: errorCodes,
                            error_category: data.errorCategory,
                            info: info
                        });
                    }
                } else {
                    if (data.response) {
                        /*
                            If we call GC, we should reject if
                            A) GC call resulted in guest being logged out
                            B) GC call didn't end up returning a guest object
                        */

                        // did guest get logged out?
                        if (data.logoutType) {
                            return deferred.reject({
                                success: false,
                                error_codes: errorCodes.join(','),
                                error_category: category,
                                info: info
                            });
                        }

                        // did we result in an error, with no guest object returned?
                        if (!data.response.data) {
                            return deferred.reject({
                                success: false,
                                error_codes: 'UNABLE_TO_RETRIEVE_GUEST_DATA',
                                error_category: 'FAILURE_BY_DESIGN',
                                info: info
                            });
                        }
                    }

                    deferred.resolve({
                        data: (utils.get(data, 'guest.profile')) ? data.guest : null,
                        logging: {
                            error_codes: errorCodes.join(','),
                            error_category: category,
                            info: info
                        }
                    });
                }
            });

            // Wait for initialization tasks to complete
            workflow.run(null, {
                forceRefresh: forceRefresh,
                fullPayloadRequested: fullPayloadRequested,
                loggingInfo: {
                    correlationId: opts.correlationId,
                    breadcrumbs: breadcrumbs,
                    context: 'get-guest'
                }
            });

            return deferred.promise;
        }

        /**
         * Redeems a session transfer key
         *
         * @param {string} sessionTransferKey
         * @return {Promise}
         */
        function redeemSessionTransferKey(opts, sessionTransferKey) {
            var deferred = Q.defer();
            var workflow = WM.get('session-transfer');

            var breadcrumbs = new WorkflowHistory(workflow, [{
                prop: 'sessionTransferKey'
            }]);

            workflow.on('done', function(data) {
                var errorCodes = (data.errorCodes || []).join(',');

                if (utils.get(data, 'guest.profile') && !utils.get(data, 'guestCancel')) {
                    deferred.resolve({
                        data: data.guest,
                        logging: {
                            error_codes: errorCodes,
                            error_category: data.errorCategory
                        }
                    });
                } else {
                    deferred.reject({
                        error_codes: errorCodes,
                        error_category: data.errorCategory
                    });
                }
            });

            // Wait for initialization tasks to complete
            workflow.run(null, {
                sessionTransferKey: sessionTransferKey,
                loggingInfo: {
                    correlationId: opts.correlationId,
                    breadcrumbs: breadcrumbs,
                    context: 'session-transfer'
                }
            });

            return deferred.promise;
        }

        /**
         * Actively force a refresh of the token object to reset TTL.<br><br>
         * <b>NOTE:</b> This method should be avoided unless absolutely necessary,
         * since the session management and refresh is handled implicitly within
         * the UI code base. This method will return a promise that, when
         * fulfilled, provides the new token. The promise will be rejected if the
         * method is called before an established user session. Additionally, an
         * `error` event will emitted.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category session
         *
         * @fires DisneyIDInstance#refresh
         * @fires DisneyIDInstance#error
         *
         * @return {Promise}
         * @example
         did.forceTokenRefresh()
         .then(function (token) {
                console.log("TTL:", token.ttl);
            })
         .fail(function (error) {
                console.log(error);
            });
         */
        function forceTokenRefresh(opts) {
            var deferred = Q.defer();
            var breadcrumbs = new WorkflowHistory();
            var loggingInfo = utils.assign({
                breadcrumbs: breadcrumbs,
                context: 'force-token-refresh'
            }, reportingHelper.getLoggingInfo(initialConfig, processOptions(opts)));

            tokenRefresh.refresh(loggingInfo).then(function(data) {
                deferred.resolve({
                    data: utils.get(data, 'data.token')
                });
            }, function(response) {
                var category = utils.get(response, 'error.keyCategory') || '';
                var isSuccessful = ['UNKNOWN_ERROR', 'SYSTEM_UNAVAILABLE'].indexOf(category) === -1;
                var errorCodes = [];
                (utils.get(response, 'error.errors') || []).forEach(function(error) {
                    if (errorCodes.indexOf(error.code) === -1) {
                        errorCodes.push(error.code);
                    }
                });

                deferred.reject({
                    success: isSuccessful,
                    error_codes: errorCodes.join(','),
                    error_category: category
                });
            });

            return deferred.promise;
        }

        /**
         * Retrieves a list of configured newsletter campaigns and the current
         * guest's opt-in status for them. This method returns a promise, that,
         * when fulfilled, provides the guest newsletter status. The promise will
         * be rejected if the method is called before a user session is
         * established.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#error
         *
         * @return {Promise}
         * @example
         did.getGuestNewsletters()
         .then(function (newsletters) {
                // <newsletters> contains retrieved data
            })
         .fail(function (error) {
                console.log(error);
            });
         */
        function getGuestNewsletters(opts) {
            var deferred = Q.defer();
            var workflow = WM.get('get-guest');

            workflow.on('done', function(data) {
                var errorCodes = (data.errorCodes || []).join(',');

                if (utils.get(data, 'guest.profile')) {
                    deferred.resolve({
                        data: utils.get(data, 'guest.marketing'),
                        logging: {
                            error_codes: errorCodes,
                            error_category: data.errorCategory
                        }
                    });
                } else {
                    deferred.reject({
                        error_codes: errorCodes,
                        error_category: data.errorCategory
                    });
                }
            });

            workflow.run();

            return deferred.promise;
        }

        /**
         * Retrieves the current status of one or more activites. This method
         * returns a promise that, when fulfilled, returns the activity status. The
         * promise will be rejected if the method is called before a session is
         * established.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category info
         *
         * @fires DisneyIDInstance#error
         *
         * @return {Promise}
         * @example
         *    did.getActivityStatus('my-activity')
         *    .then(function (status) {
         *       console.log(status);
         *    })
         *    .fail(function (error) {
         *       console.log(error);
         *    });
         */
        function getActivityStatus(opts, activity) {
            var deferred = Q.defer();

            apiHelper.runWorkflow('checkActivity', null, {
                activityCode: activity
            }, true).then(function(data) {
                if (!!data.error_code) {
                    deferred.reject({
                        success: true,
                        error_codes: data.error_code
                    });
                } else {
                    deferred.resolve({
                        data: data.approvalStatus
                    });
                }
            });

            return deferred.promise;
        }

        /**
         * Returns the current trust state of the guest.
         * This will return `true` if the user is in a high trust state, `false`
         * otherwise.
         *
         * @memberof! DisneyIDInstance.prototype
         * @category session
         *
         * @return {Promise}
         * @example
         *    did.getTrustStateStatus().then(function (status) {
         *        console.log(status);
         *    });
         */
        function getTrustStateStatus() {
            var deferred = Q.defer();

            session.trustState.read().then(function(data) {
                deferred.resolve({
                    data: data.state
                });
            });

            return deferred.promise;
        }

        function addSubscribers(self) {
            messages.subscribe('session.loggedin', function(notUsed, dfd) {
                getGuest().then(function(data) {
                    // Retrieve the SWID and update the cookie
                    var no_track = utils.get(data, 'profile.ageBand') === 'CHILD';
                    session.swid.write(data.token.swid, true, no_track);
                    self.emit('login', data);

                    if (dfd) {
                        dfd.resolve();
                    }
                });
            });

            messages.subscribe('apiEvent.ppu', function(data, dfd) {
                messages.publish('bridge.ppuSuccess');
                dfd.resolve();
            });

            // @TODO: Don't rename this message, until we figure out / fix the version mismatch issue.
            messages.subscribe('apiEvent.reauth', function(notUsed, dfd) {
                getGuest().then(function(data) {
                    self.emit('reauth', data);
                    dfd.resolve();
                });
            });

            messages.subscribe('session.reestablished', function() {
                getGuest(false).then(function(data) {
                    // Retrieve the SWID and update the cookie
                    var no_track = utils.get(data, 'profile.ageBand') === 'CHILD';
                    session.swid.write(data.token.swid, true, no_track);
                });
            });

            messages.subscribe('token.refreshed', function(data) {
                logger.info('token refreshed');
                self.emit('refresh', data.token);
            });

            /**
             * @TODO: Verify mobile application requires the guest delta provided
             *     by this event.
             *
             * NOTE: Requirements for this piece of logic states to provide the BU
             *     host site, not the mobile application, a unified list of
             *     specific guest properties that have been modified between the
             *     time the UI was opened and closed. This is not limited to Update
             *     Profile workflow; rather, it includes PPU called based on
             *     check-authorization, changes in display name moderation status
             *     during a workflow, changes made via concurrent logged-in
             *     sessions, etc.
             */
            messages.subscribe('lightbox.hide', function() {
                self.emit('close'); // only consumed by mobile
            });

            messages.subscribe('guest.updated', function(guestDelta) {
                self.emit('update', guestDelta);
            });

            messages.subscribe('profile.create', function(guest) {
                self.emit('create', guest);
            });

            messages.subscribe('profile.deactivation-complete', function() {
                self.emit('logout');
            });

            messages.subscribe('session.deleted', function(logoutType) {
                var registeredSwid = utils.getCookie('SWID');
                var data = {
                    action_name: metrics.actions.event.logout + ':' + logoutType,
                    anon: false,
                    swid: registeredSwid
                };

                // TODO: Fix how logout events handle process_time.
                metrics.send(data, true);

                // Upon logout, we need to re-anonymize
                session.swid.anonymize();

                self.emit('logout');

                // Reset correlationId to track new session
                // TODO: This doesn't seem to be right
                env.setCorrelationId(utils.uuid());
            });

            messages.subscribe('profile.primary-account', function(guest) {
                self.emit('primary-account', guest);
            });

            messages.subscribe('marketing.opt-in', function(marketing) {
                self.emit('opt-in', marketing);
            });

            messages.subscribe('license-plate-redeemed', function() {
                self.emit('license-plate-redeemed');
            });

            messages.subscribe('age-gated', function() {
                self.emit('age-gated');
            });

            messages.subscribe('guest.trustStateChanged', function(state) {
                if (state === trustStateConst.STATES.low) {
                    self.emit('low-trust');
                }
            });

            function getGuest() {
                var dfd = Q.defer();

                session.token.read().then(function(token) {
                    session.guest.read().then(function(guestData) {
                        var guest = utils.get(guestData, 'guest') || {};
                        guest.token = utils.get(token, 'token');
                        dfd.resolve(guest);
                    }, function() {
                        dfd.reject();
                    });
                }, function() {
                    dfd.reject();
                });

                return dfd.promise;
            }
        }

        function checkCagoots() {
            WM.get('cagoots').run(null, {
                loggingInfo: {
                    // todo: Should this have a correlationId passed in?
                    context: 'cagoots'
                }
            });
        }

        function overrideClientConfig(overrides) {
            messages.publish('debug.clientConfigOverride', overrides);
        }

        function processOptions(opts) {
            opts = opts || {};
            opts.conversationId = opts.conversationId || utils.uuid();
            opts.correlationId = opts.correlationId || utils.uuid();
            return opts;
        }

        /**
         * Indicates an error occurred
         *
         * @event DisneyIDInstance#error
         * @param {string} message describes the error
         */

        /**
         * Indicates the initialization of our client object has been completed
         *
         * @event DisneyIDInstance#init
         * @param {object} data Logged in status and guest information if any
         */

        /**
         * Indicates a new user account and profile has been successfully created
         *
         * @event DisneyIDInstance#create
         * @param {object} guest The guest object for the newly created account
         */

        /**
         * Indicates a successful update of a user's account
         * @event DisneyIDInstance#update
         * @param {array} keys An array of keys that were changed during update process
         */

        /**
         * Indicates a new user session has been established
         * @event DisneyIDInstance#login
         * @param {object} guest The guest object for the logged-in user
         */

        /**
         * Indicates a successful reauthentication has occurred
         * @event DisneyIDInstance#reauth
         * @param {object} guest The guest object for the current user
         */

        /**
         * Indicates a successful opt-in activity was performed
         * @event DisneyIDInstance#opt-in
         * @param {array} newsletters A list of the newsletters into which the user has
         *     opted
         */

        /**
         * Indicates the user closed the UI dialog actively
         * @event DisneyIDInstance#close
         */

        /**
         * Indicates the access token has been refreshed
         * @event DisneyIDInstance#refresh
         * @param {object} token The new token object
         */

        /**
         * Indicates the user has fallen into a low-trust state
         * @event DisneyIDInstance#low-trust
         */

        /**
         * Indicates the current guest session has been cleared
         * @event DisneyIDInstance#logout
         */

        /**
         * Indicates the completion of a MASE workflow
         * @event DisneyIDInstance#primary-account
         * @param {object} guest The guest object for the logged-in user
         */

    }, {
        "../../assets/common/js/q": 1,
        "../common/api": 7,
        "../common/errors": 8,
        "../common/reporting": 9,
        "../components/common/event-emitter": 15,
        "../components/common/trust-state/constants.js": 36,
        "../components/inner/language-preferences/languages": 62,
        "../components/metrics": 71,
        "../components/outer/config": 78,
        "../components/outer/environment": 79,
        "../components/outer/progressive-profile-collection": 82,
        "../components/outer/session-timer": 83,
        "../components/outer/sleep-timer": 96,
        "../components/outer/token-refresh": 97,
        "../components/outer/trust-state": 99,
        "../components/outer/ui/do-not-disturb": 101,
        "../components/outer/ui/web-ui": 102,
        "../components/outer/workflow-manager": 105,
        "./api-helper": 106,
        "WorkflowHistory": 46,
        "cookie": 11,
        "dao": 59,
        "logger": 20,
        "messages": 21,
        "session": "session",
        "utils": 42
    }],
    108: [function(require, module, exports) {
        'use strict';

        require('../components/common/polyfills/console');
        require('./workflows-bootstrap');

        var appVersion = '2.54.2';
        var api = require('./api');
        var cookie = require('cookie');
        var patchBay = require('../components/outer/patch-bay');
        var trustStateWeb = require('../components/outer/trust-state/web.js');
        var metrics = require('metrics');
        var metricsSendLogs = require('../components/metrics/requests/web');
        var logger = require('logger');
        var utils = require('utils');
        var os = utils.getOS();
        var tabId = sessionStorage.getItem('oid_tab_id');

        if (!tabId) {
            tabId = utils.uuid();
            sessionStorage.setItem('oid_tab_id', tabId);
        }

        logger.setLogLevel(cookie.read('oid_loglevel') || 'INFO');

        metrics.init({
            os: os.name ? (os.name + ' ' + os.version) : os,
            sdk_version: 'Web ' + appVersion,
            appid: 'DTSS-DISNEYID-UI',
            info: {
                tabId: tabId
            }
        }, metricsSendLogs);

        metrics.attachSubscribers();

        api.configure({
            modules: {
                patchBay: patchBay,
                trustStateWeb: trustStateWeb
            }
        });

        window.DisneyID = {
            get: function(opts) {
                return api.get(opts);
            }
        };

        if (utils.randomChance(.004)) {
            metricsSendLogs({
                action_name: metrics.actions.event.preinit,
                timestamp: new Date().toISOString(),
                appid: 'DTSS-DISNEYID-UI',
                info: utils.formatLogInfoBlock({
                    disneyid_js_url: scriptUrl(),
                    page_url: window && window.location && window.location.href,
                    log_type: 'preinit'
                })
            }, false);
        }

        function scriptUrl() {
            var url = '';
            if (document) {
                var script = Array.prototype.slice.call(document.scripts, 0).pop();
                url = script && script.getAttribute('src') || url;
            }
            return url;
        }

    }, {
        "../components/common/polyfills/console": 23,
        "../components/metrics/requests/web": 74,
        "../components/outer/patch-bay": 81,
        "../components/outer/trust-state/web.js": 100,
        "./api": 107,
        "./workflows-bootstrap": 110,
        "cookie": 11,
        "logger": 20,
        "metrics": 71,
        "utils": 42
    }],
    109: [function(require, module, exports) {

        'use strict';

        var messages = require('messages');

        module.exports = {
            attach: function() {
                messages.subscribe('responder.session.read', function(data, dfd) {
                    dfd && dfd.reject();
                });

                messages.subscribe('responder.session.delete', function(notUsed, dfd) {
                    dfd && dfd.reject();
                });

                messages.subscribe('responder.guest.identifier.read', function(data, dfd) {
                    dfd && dfd.reject();
                });

                messages.subscribe('responder.dateOfBirth.read', function(notUsed, dfd) {
                    dfd && dfd.reject();
                });

                messages.subscribe('responder.apikey.write', function(key, dfd) {
                    sessionStorage.setItem('did_api_key', key);
                    dfd.resolve();
                });

                messages.subscribe('responder.apikey.read', function(notUsed, dfd) {
                    dfd.resolve(sessionStorage.getItem('did_api_key'));
                });

                messages.subscribe('responder.obo.read', function(data, dfd) {
                    dfd && dfd.reject();
                });
            }
        };

    }, {
        "messages": 21
    }],
    110: [function(require, module, exports) {

        'use strict';

        var WM = require('../components/outer/workflow-manager');

        WM.register('cagoots', require('../workflows/outer/cagoots'));
        WM.register('get-guest', require('../workflows/outer/get-guest'));
        WM.register('initialization', require('../workflows/outer/initialization'));
        WM.register('obo', require('../workflows/outer/obo'));
        WM.register('session-state-tasks', require('../workflows/outer/session-state-tasks'));
        WM.register('session-transfer', require('../workflows/outer/session-transfer'));
        WM.register('get-inline-nrt', require('../workflows/outer/inline-newsletters/get'));
        WM.register('set-inline-nrt', require('../workflows/outer/inline-newsletters/set'));
        WM.register('guest-flow', require('../workflows/outer/guest-flow'));

    }, {
        "../components/outer/workflow-manager": 105,
        "../workflows/outer/cagoots": 121,
        "../workflows/outer/get-guest": 124,
        "../workflows/outer/guest-flow": 130,
        "../workflows/outer/initialization": 133,
        "../workflows/outer/inline-newsletters/get": 141,
        "../workflows/outer/inline-newsletters/set": 143,
        "../workflows/outer/obo": 158,
        "../workflows/outer/session-state-tasks": 162,
        "../workflows/outer/session-transfer": 168
    }],
    111: [function(require, module, exports) {
        /**
         * Return new object that mirrors input but with all key names lowercased
         * will stomp on values if the names match i.e. given Lower, lOWer, lower, the last one will be the only value retained
         * @param   {object} origObj
         * @returns {object}
         */

        function lowercaseObjectKeys(origObj) {
            return Object.keys(origObj).reduce(function(newObj, key) {
                var val = origObj[key];
                newObj[key.toLowerCase()] = (Object.prototype.toString.call(val) === '[object Object]') ? lowercaseObjectKeys(val) : val;
                return newObj;
            }, {});
        }

        module.exports = lowercaseObjectKeys;

    }, {}],
    112: [function(require, module, exports) {
        'use strict';

        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var logoutType = step.data.logoutType || 'UNKNOWN';
                session.isLoggedIn().then(function(isLoggedIn) {
                    if (isLoggedIn) {
                        session.deleteAll(logoutType).then(step.success.bind(step));
                    } else {
                        step.success();
                    }
                });
            }
        });

    }, {
        "session": "session",
        "step": 48
    }],
    113: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var exceptions = require('exceptions');

            var isAccountLinkingRegex = /accountMapping\.AM-([a-zA-Z0-9]+)\.externalId/;

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var response = step.data.response;
                    var keyErrors = exceptions.getKeyErrors(response);
                    var keyCategory = utils.get(response, 'error.keyCategory');
                    // initialize empty object to set error type booleans on.
                    // this will later be assigned to this.data.errors.
                    var errors = {};
                    var cats = categories();

                    Object.keys(cats).forEach(function(key) {
                        if (exceptions.find(keyErrors, cats[key])) {
                            errors[key] = true;
                        }
                    });

                    inferPPU(step, errors, keyErrors, cats);

                    if (keyCategory === 'PPU_ACTIONABLE_INPUT') {
                        errors.isPPU = true;
                    } else if (keyCategory === 'ADVISORY') {
                        errors.isAdvisoryError = true;
                    } else if (keyCategory === 'ACTIONABLE_INPUT') {
                        errors.isActionableInputError = true;
                    }

                    var errorData = utils.get(exceptions.find(keyErrors, 'AUTHORIZATION_CREDENTIALS'), 'data');

                    if (errors.isAuthorizationError && /^SOCIAL\_/.test((errorData || {}).accountOrigin) &&
                        errorData.passwordOrigin === 'MACHINE_GENERATED') {
                        step.data.socialProvider = {
                            GOOGLE: 'Google',
                            FACEBOOK: 'Facebook'
                        }[errorData.accountOrigin.replace(/^SOCIAL\_/, '')];
                        errors.isLoginSetPassword = true;
                    }

                    var isInvalid = (response && response.isValid && !response.isValid());
                    var isServerError = (response && response.status === 500);

                    // Server did not respond, or we got a 500
                    if (typeof response === 'undefined' || isInvalid || isServerError || keyCategory === 'SYSTEM_UNAVAILABLE') {
                        errors.isServiceError = true;
                    }

                    // Check for INVALID_VALUE on region field... In this case, the workflow may need
                    // to make a decision based off this, and some other data.
                    keyErrors.forEach(function(err) {
                        if (err.code === 'INVALID_VALUE' && err.inputName === 'profile.region') {
                            errors.isInvalidRegionError = true;
                        } else if (err.code === 'INUSE_VALUE' && isAccountLinkingRegex.test(err.inputName)) {
                            errors.isAccountLinkingError = true;
                        }
                    });

                    step.data.errors = errors;
                    step.success();
                }
            });

            function inferPPU(step, errors, keyErrors, cats) {
                if (step.workflowName === 'PPU' && !errors.isPPU) {
                    keyErrors.forEach(function(ke) {
                        if (ke.code === 'MISSING_VALUE') {
                            errors.isPPU = true;
                        } else {
                            cats.isPPU.forEach(function(category) {
                                if (!errors.isPPU) {
                                    errors.isPPU = ke.code === category;
                                }
                            });
                        }
                    });
                }
            }

            function categories() {
                return {
                    isPPU: [
                        'PPU_MARKETING',
                        'PPU_LEGAL'
                    ],
                    isMarketingPPU: [
                        'PPU_MARKETING'
                    ],
                    isGating: [
                        'GUEST_GATED_AGEBAND',
                        'GUEST_GATED_UNKNOWN',
                        'GUEST_GATED_EMBARGOED',
                        'GUEST_GATED_EMAIL',
                        'GUEST_GATED_LOCATION',
                        'GUEST_GATED_BOTH_EMAIL_VERIFICATION',
                        'GUEST_GATED_EMAIL_VERIFICATION',
                        'GUEST_GATED_PARENT_EMAIL_VERIFICATION',
                        'AUTHORIZATION_ACCOUNT_LOCKED_OUT',
                        'ACCOUNT_MAPPING_NOT_MAPPED_PROFILE_DELETE_REQUESTED',
                        'PROFILE_DISABLED',
                        'ACCOUNT_IS_CHILDED',
                        'PROFILE_USER_BANNED'
                    ],
                    isAgebandGating: [
                        'ACCOUNT_IS_CHILDED',
                        'GUEST_GATED_AGEBAND'
                    ],
                    isBanned: [
                        'PROFILE_USER_BANNED'
                    ],
                    isDisabled: [
                        'PROFILE_DISABLED',
                        'ACCOUNT_MAPPING_NOT_MAPPED_PROFILE_DELETE_REQUESTED'
                    ],
                    isSecurityFlagged: [
                        'AUTHORIZATION_ACCOUNT_SECURITY_LOCKED_OUT'
                    ],
                    isIPAS: [
                        'AUTHORIZATION_MASE_ERROR_RESOLVABLE'
                    ],
                    isPil2: [
                        'AUTHORIZATION_PARENTAL_CONSENT_REQUIRED'
                    ],
                    isAccountMappingError: [
                        'ACCOUNT_MAPPING_NOT_FOUND_BUT_EMAIL_FOUND',
                        'NRT_ACCOUNT',
                        'DISALLOWED_VALUE',
                        'UNKNOWN_ACCOUNT_STATUS'
                    ],
                    // @TODO: Should we be looking at the code to determine if the error was ACTIONABLE_INPUT,
                    // or should we be looking at the keyCategory? Presumably, the keyCategory will be
                    // ACTIONABLE_INPUT for all ACTIONABLE_INPUT errors. This could create confusion, since PPU
                    // will return a keyCategory of PPU_ACTIONABLE_INPUT with a code of MISSING_VALUE, which
                    // will trigger both isActionableInputError to be true as well as isPPU to be true. In
                    // this scenario, the order of if/else checks matter, which may not be obvious.
                    isActionableInputError: [
                        'MISSING_VALUE',
                        'INVALID_VALUE',
                        'INUSE_VALUE',
                        'DISALLOWED_VALUE'
                    ],
                    isAccountMappingNotFoundError: [
                        'ACCOUNT_MAPPING_NOT_FOUND',
                        'ACCOUNT_MAPPING_NOT_FOUND_AND_EMAIL_NOT_FOUND'
                    ],
                    isAuthorizationError: [
                        'AUTHORIZATION_CREDENTIALS',
                        'AUTHORIZATION_BAD_EXTERNAL_TOKEN',
                        'AUTHORIZATION_EXTERNAL_ID_MISMATCH'
                    ],
                    isEtagMismatch: [
                        'VALID_ETAG_REQUIRED'
                    ],
                    isServiceError: [
                        'SERVICE_ERROR',
                        'UNKNOWN_ERROR',
                        'SYSTEM_UNAVAILABLE'
                    ],
                    isMase: [
                        'AUTHORIZATION_MASE_ERROR'
                    ],
                    isOtpAuthError: [
                        'PHONE_NOT_FOUND',
                        'PHONE_NOT_VERIFIED',
                        'PHONE_VERIFICATION_NOT_ALLOWED'
                    ],
                    isOtpCodeLockedOut: [
                        'DEVICE_LINK_LOCKOUT_REACHED'
                    ],
                    isInvalidLoginValue: [
                        'LOGIN_VALUE_INVALID',
                        'PROFILE_NOT_FOUND'
                    ],
                    isInvalidOtpCode: [
                        'DEVICE_LINK_INVALID_OTP_CODE'
                    ],
                    isInvalidAccessToken: [
                        'AUTHORIZATION_INVALID_OR_EXPIRED_TOKEN'
                    ],
                    isInvalidSessionTransferKeyError: [
                        'INVALID_SESSION_TRANSFER_KEY'
                    ]
                };
            }
        }());

    }, {
        "exceptions": 16,
        "step": 48,
        "utils": 42
    }],
    114: [function(require, module, exports) {
        'use strict';

        var dao = require('dao');
        var exceptions = require('exceptions');
        var logger = require('logger');
        var metrics = require('metrics');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                // this step is only for authenticated guests
                var step = this;
                var loggingInfo = step.data.loggingInfo || {};
                var swid = utils.get(step.data.guest, 'profile.swid');
                var conversationId = utils.uuid();
                var log = metrics.timed(metrics.actions.event.newsletters, {
                    correlation_id: loggingInfo.correlationId,
                    conversation_id: conversationId,
                    reporting: loggingInfo.reporting,
                    info: {
                        additionalFields: false
                    }
                });

                logger.debug('opting in', step.data.marketingList);

                step.data.isUpdateSuccessful = false;

                // update marketing using update guest endpoint
                dao.updateBySwid({
                        marketing: step.data.marketingList
                    },
                    swid,
                    utils.get(step.data.guest, 'token.access_token'),
                    utils.get(step.data.guest, 'etag'),
                    loggingInfo.correlationId,
                    conversationId,
                    loggingInfo.reporting
                ).then(
                    function(response) {
                        var keyCategory = utils.get(response, 'error.keyCategory');
                        step.data.response = response;

                        if (response.data && (response.error === null || keyCategory === 'ADVISORY')) {
                            logger.debug('marketing optin success');

                            // Log success to Metrics.
                            logToMetrics(response);

                            // Toggle success flag and call success on the step.
                            step.data.isUpdateSuccessful = true;
                            step.success();
                        } else {
                            logger.debug('marketing optin failure');
                            logger.debug(response);

                            // Log failure to Metrics and call failure on the step.
                            logToMetrics(response);
                            step.failure();
                        }
                    },
                    function(response) {
                        logger.debug('marketing optin failure');
                        logger.debug(response);

                        // Log failure to Metrics and call failure on the step.
                        logToMetrics(response);
                        step.data.response = response;
                        step.failure();
                    }
                );

                function logToMetrics(response) {
                    var keyCategory = utils.get(response, 'error.keyCategory');
                    var errorCodes = exceptions.getErrorCodes(exceptions.getKeyErrors(response));
                    var data = {
                        swid: swid
                    };

                    if (keyCategory || errorCodes) {
                        data.error_category = keyCategory;
                        data.error_codes = errorCodes;
                    }

                    log.send(data, !response.isServerError());
                }

            }
        });

    }, {
        "dao": 59,
        "exceptions": 16,
        "logger": 20,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    115: [function(require, module, exports) {
        'use strict';

        var dao = require('dao');
        var exceptions = require('exceptions');
        var metrics = require('metrics');
        var logger = require('logger');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                // this step is only for unauthenticated guests
                var step = this;
                var loggingInfo = step.data.loggingInfo || {};
                var conversationId = utils.uuid();
                var source = utils.get(step.data, 'loggingInfo.reporting.source') || null;
                var log = metrics.timed(
                    metrics.actions.event.newsletters, {
                        correlation_id: loggingInfo.correlationId,
                        conversation_id: conversationId,
                        reporting: loggingInfo.reporting,
                        info: {
                            additionalFields: false
                        }
                    }
                );

                var userProfile = step.data.userProfile || {};

                // if GALC was enabled add the region to the user profile
                if (step.data.region) {
                    userProfile.region = step.data.region;
                }

                var marketingLists = step.data.marketingList;
                var legalAssertions = utils.get(step.data, 'legalAssertions') || [];

                logger.debug('opting in', marketingLists);

                step.data.isUpdateSuccessful = false;

                dao.marketingOptionsGlobal(
                    utils.assign(userProfile, {
                        email: step.data.email,
                        countryCodeDetected: step.data.geoDetected.country || null
                    }),
                    marketingLists,
                    legalAssertions,
                    source,
                    step.data.promotionId,
                    loggingInfo.correlationId,
                    conversationId,
                    loggingInfo.reporting
                ).then(function(response) {
                    var keyCategory = utils.get(response, 'error.keyCategory');

                    if (response.data && (response.error === null || keyCategory === 'ADVISORY')) {
                        logToMetrics(response);
                        step.data.isUpdateSuccessful = true;

                        // default to no user opt-ins
                        step.data.anyOptIns = false;
                        // loop through marketing list object to
                        // determine if they opted in to anything
                        Object.keys(marketingLists).forEach(function(key) {
                            step.data.anyOptIns = step.data.anyOptIns || marketingLists[key].subscribed === true;
                        });
                        step.success();
                    } else {
                        logToMetrics(response);
                        step.data.response = response;
                        step.failure();
                    }
                }, function(response) {
                    logToMetrics(response);
                    step.data.response = response;
                    step.failure();
                });

                function logToMetrics(response) {
                    var keyCategory = utils.get(response, 'error.keyCategory');
                    var errorCodes = exceptions.getErrorCodes(exceptions.getKeyErrors(response));
                    var data = {};

                    if (keyCategory || errorCodes) {
                        data.error_category = keyCategory;
                        data.error_codes = errorCodes;
                    }

                    log.send(data, !response.isServerError());
                }

            }
        });

    }, {
        "dao": 59,
        "exceptions": 16,
        "logger": 20,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    116: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var session = require('session');
            var Q = require('q');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var guest = step.data.guest;
                    var now = new Date();

                    // todo: MCT15 configuration and l10n content reloading

                    guest.token.created = now.toISOString();
                    guest.token.lastChecked = guest.token.created;
                    guest.token.expires = utils.expires(now, guest.token.ttl).toISOString();
                    guest.token.refresh_expires = utils.expires(now, guest.token.refresh_ttl || 0).toISOString();

                    var guestData = {
                        guest: guest,
                        token: guest.token,
                        s2: guest.s2
                    };

                    Q.all([
                        session.guest.write(guestData, true),
                        session.trustState.write()
                    ]).then(function() {
                        step.success();
                    }, function() {
                        step.failure();
                    });
                }
            });
        }());

    }, {
        "q": 1,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    117: [function(require, module, exports) {
        'use strict';

        var utils = require('utils');
        var getCompleteGuest = require('../../../../components/common/get-complete-guest-object');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var conversationId = utils.uuid();
                var correlationId = utils.get(step.data, 'loggingInfo.correlationId');
                var reporting = utils.get(step.data, 'loggingInfo.reporting') || {};
                getCompleteGuest.get(step.workflowName, conversationId, correlationId, reporting)
                    .then(function(guest) {
                        step.data.initialGuest = utils.clone(guest);
                        step.data.guest = utils.clone(guest);
                        step.success();
                    }, function() {
                        step.failure();
                    });
            }
        });

    }, {
        "../../../../components/common/get-complete-guest-object": 17,
        "step": 48,
        "utils": 42
    }],
    118: [function(require, module, exports) {
        'use strict';

        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.isLoggedIn()
                    .then(function(isLoggedIn) {
                        step.data.isLoggedIn = !!isLoggedIn;
                        step.success();
                    });
            }
        });

    }, {
        "session": "session",
        "step": 48
    }],
    119: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var session = require('session');
            var dao = require('dao');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var conversationId = utils.uuid();

                    session.token.read()
                        .then(function(tokenData) {
                            var swid = utils.get(tokenData, 'token.swid');
                            var token = utils.get(tokenData, 'token.access_token');

                            return dao.getBySwid(
                                swid,
                                token,
                                conversationId,
                                utils.get(step, 'data.loggingInfo.correlationId'),
                                utils.get(step, 'data.loggingInfo.reporting'), {
                                    feature: 'always-get-entitlements',
                                    expand: [
                                        'profile',
                                        'displayname',
                                        'linkedaccounts',
                                        'marketing',
                                        'entitlements',
                                        's2'
                                    ]
                                }
                            );
                        })
                        .then(function(response) {
                            if (response.isClientError()) {
                                return step.failure();
                            } else {
                                var currentToken = utils.get(step, 'data.guest.token');

                                step.data.guest = response.data;
                                step.data.guest.token = currentToken;
                                step.success();
                            }
                        })
                        .catch(step.failure.bind(step));
                }
            });
        }());

    }, {
        "dao": 59,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    120: [function(require, module, exports) {
        (function() {
            'use strict';

            var Q = require('q');
            var utils = require('utils');
            var session = require('session');
            var touchid = require('touchid');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var saveCredentials = Q.defer();

                    // Todo: register creds?
                    var password = utils.get(step, 'data.credentials.password') || utils.get(step, 'data.modifiedGuest.newPassword');

                    if (password && loginValue) {
                        var loginValue = utils.get(step, 'data.credentials.loginValue');
                        touchid().saveCredentials(loginValue, password)
                            .finally(function() {
                                saveCredentials.resolve();
                            });
                    } else {
                        saveCredentials.resolve();
                    }

                    Q.all([
                        session.guest.write({
                            guest: this.data.guest
                        }),
                        saveCredentials.promise
                    ]).then(step.success.bind(step), step.failure.bind(step));
                }
            });

        }());

    }, {
        "q": 1,
        "session": "session",
        "step": 48,
        "touchid": 66,
        "utils": 42
    }],
    121: [function(require, module, exports) {

        'use strict';

        var Workflow = require('workflow');

        var steps = {
            ReadToken: require('../token-refresh/steps/read-token'),
            CheckDoNotDisturb: require('../shared/steps/check-do-not-disturb'),
            ExecuteCheckAuthorization: require('./steps/execute-check-authorization'),
            ParseErrors: require('../../common/shared/steps/parse-errors'),
            Gating: require('../shared/steps/gating'),
            PPU: require('../token-refresh/steps/ppu'),
            UpdateLastChecked: require('./steps/update-last-checked')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'Cagoots'
            });

            /**
             * Reads token from storage.
             *
             * @output {object} token
             */
            workflow.step('read-token', new steps.ReadToken())
                .success('check-do-not-disturb')
                .failure('done');

            /**
             * Check the state of do-not-disturb
             *
             * @output {bool} doNotDisturbEnabled
             */
            workflow.step('check-do-not-disturb', new steps.CheckDoNotDisturb())
                .success('execute-check-authorization');

            /**
             * Execute the check-authorization call on Guest Controller.
             *
             * @input {object} token
             * @input {string} loggingInfo.correlationId
             * @output {object} response
             */
            workflow.step('execute-check-authorization', new steps.ExecuteCheckAuthorization())
                .success('update-last-checked')
                .failure('parse-errors');

            /**
             * Parse errors.
             *
             * @input {object} response
             * @output {object} errors
             */
            workflow.step('parse-errors', new steps.ParseErrors())
                .success(function() {
                    var errors = this.data.errors || {};
                    var doNotDisturbEnabled = this.data.doNotDisturbEnabled;

                    if (!doNotDisturbEnabled && errors.isGating) {
                        return 'gating';
                    } else if (!doNotDisturbEnabled && errors.isPPU) {
                        return 'ppu';
                    }

                    return 'update-last-checked';
                });

            /**
             * Invokes the gating workflow (async).
             *
             * @subflow gating
             */
            workflow.step('gating', new steps.Gating())
                .success('done');

            /**
             * Invokes the PPU workflow (sync).
             *
             * @subflow ppuloggedin
             */
            workflow.step('ppu', new steps.PPU())
                .success('update-last-checked')
                .failure('done');

            /**
             * Updates the value of the lastChecked property of the token.
             */
            workflow.step('update-last-checked', new steps.UpdateLastChecked())
                .success('done');

            return workflow;
        };


    }, {
        "../../common/shared/steps/parse-errors": 113,
        "../shared/steps/check-do-not-disturb": 172,
        "../shared/steps/gating": 173,
        "../token-refresh/steps/ppu": 182,
        "../token-refresh/steps/read-token": 183,
        "./steps/execute-check-authorization": 122,
        "./steps/update-last-checked": 123,
        "workflow": 47
    }],
    122: [function(require, module, exports) {

        'use strict';

        var utils = require('utils');
        var dao = require('dao');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var sleepTimer = require('../../../../components/outer/sleep-timer');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var token = step.data.token || {}
                var accessToken = token.access_token;
                var swid = token.swid;
                var conversationId = utils.uuid();
                var correlationId = utils.get(step.data, 'loggingInfo.correlationId') || utils.uuid();
                var reporting = utils.get(step.data, 'loggingInfo.reporting');
                var log = metrics.timed('log:checkauthorization', {
                    swid: swid,
                    conversation_id: conversationId,
                    correlation_id: correlationId,
                    reporting: reporting,
                    info: {
                        context: utils.get(step.data, 'loggingInfo.context'),
                        timeAwake: sleepTimer.timeSinceLastSleep(),
                        token: utils.maskToken(token.access_token),
                        ttl: Date.parse(token.expires) - Date.now(),
                        lastChecked: token.lastChecked
                    }
                });

                dao.checkAuthorization(accessToken, swid, conversationId, correlationId, reporting).then(function(response) {
                    step.data.response = response;
                    log.success({
                        error_category: utils.get(response, 'error.keyCategory'),
                        error_codes: exceptions.getErrorCodes(exceptions.getKeyErrors(response)),
                    });

                    if (response.isClientError()) {
                        step.failure();
                    } else {
                        step.success();
                    }
                }, function(response) {
                    step.data.response = response;
                    log.failure({
                        error_category: utils.get(response, 'error.keyCategory'),
                        error_codes: exceptions.getErrorCodes(exceptions.getKeyErrors(response)),
                    });

                    step.failure();
                });
            }
        });


    }, {
        "../../../../components/outer/sleep-timer": 96,
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    123: [function(require, module, exports) {

        'use strict';

        var utils = require('utils');
        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.token.read().then(function(tokenData) {
                    var token = (tokenData || {}).token || {};

                    // Update the lastChecked property of the token, and re-write it.
                    token.lastChecked = (new Date(Date.now())).toISOString();

                    session.token.write({
                        token: token
                    }).then(function() {
                        step.success();
                    }, function() {
                        step.success();
                    });
                }, function() {
                    step.success();
                });
            }
        });


    }, {
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    124: [function(require, module, exports) {
        'use strict';

        var Workflow = require('workflow'),
            utils = require('utils');

        var steps = {
            CheckCache: require('./steps/check-cache'),
            CheckForFeatureToggle: require('./steps/check-for-toggle'),
            EnsureLoggedOut: require('../../common/shared/steps/ensure-logged-out'),
            Execute: require('./steps/execute'),
            ParseErrors: require('../../common/shared/steps/parse-errors'),
            ReadGuestFromStorage: require('./steps/read-guest-from-storage'),
            ReadToken: require('../shared/steps/read-token'),
            SaveGuest: require('./steps/save-guest')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'GetGuest'
            });

            /**
             * Feature Toggle: Remove once done
             */
            workflow.step('check-for-feature-toggle', new steps.CheckForFeatureToggle())
                .success('read-token');

            /**
             * Read token from storage.
             *
             * @output {data.token}
             */
            workflow.step('read-token', new steps.ReadToken())
                .success('read-guest-from-storage')
                .failure('done');

            /**
             * Read the guest object from storage.
             *
             * @output {data.guest}
             * @output {data.created}
             */
            workflow.step('read-guest-from-storage', new steps.ReadGuestFromStorage())
                .success('check-cache')
                .failure('execute');

            /**
             * Check if the guest-cache is expired, and if it is, obtain a new copy of the guest.
             *
             * @input {step.data.created}
             * @output {step.data.isExpired}
             */
            workflow.step('check-cache', new steps.CheckCache())
                .success(function() {
                    var isReducedPayload = (utils.get(this.data, 'guest.payload') === 'reduced'),
                        isForce = this.data.forceRefresh;

                    // Remove when feature toggle is no longer needed for old 
                    // fullPayload functionality
                    if (this.data.getGuestFullPayloadForce && this.data.fullPayloadRequested) {
                        return 'execute';
                    }

                    if (this.data.isExpired || this.data.fullPayloadRequested && isReducedPayload || isForce) {
                        return 'execute';
                    }

                    return 'done';
                });

            /**
             * Reload the guest, by calling Guest Controller to obtain a fresh copy.
             *
             * @input {data.token}
             * @output {step.data.guest}
             */
            workflow.step('execute', new steps.Execute())
                .success('save-guest')
                .failure('parse-errors');

            /**
             * Parse errors.
             *
             * @input {object} response
             * @output {object} errors
             */
            workflow.step('parse-errors', new steps.ParseErrors())
                .success(function() {
                    // toggle to remove when done with it
                    if (this.data.getGuestFullPayloadForce) {
                        return 'done';
                    }

                    var errors = this.data.errors || {};
                    if (errors.isSecurityFlagged || errors.isDisabled) {
                        this.data.logoutType = 'getGuest';
                        return 'ensure-logged-out';
                    }
                    return 'done';
                });

            /**
             * Ensure guest is logged out
             */
            workflow.step('ensure-logged-out', new steps.EnsureLoggedOut())
                .success('done');

            /**
             * Save the guest to persistent storage.
             *
             * @input {step.data.guest}
             */
            workflow.step('save-guest', new steps.SaveGuest())
                .success('done');

            return workflow;
        };

    }, {
        "../../common/shared/steps/ensure-logged-out": 112,
        "../../common/shared/steps/parse-errors": 113,
        "../shared/steps/read-token": 175,
        "./steps/check-cache": 125,
        "./steps/check-for-toggle": 126,
        "./steps/execute": 127,
        "./steps/read-guest-from-storage": 128,
        "./steps/save-guest": 129,
        "utils": 42,
        "workflow": 47
    }],
    125: [function(require, module, exports) {

        'use strict';

        module.exports = require('step').extend({
            execute: function() {
                var EXPIRES = 3600 * 6 * 1000;

                this.data.isExpired = this.data.created ? ((this.data.created.getTime() + EXPIRES) < Date.now()) : false;
                this.success();
            }
        });

    }, {
        "step": 48
    }],
    126: [function(require, module, exports) {
        var config = require('config');

        module.exports = require('step').extend({
            execute: function() {
                this.data.getGuestFullPayloadForce = config.isDynamicConfigFeatureEnabled('getGuestFullPayloadForce');
                this.success();
            }
        });

    }, {
        "config": 49,
        "step": 48
    }],
    127: [function(require, module, exports) {

        'use strict';

        var dao = require('dao');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var conversationId = utils.uuid();
                var correlationId = utils.get(step.data, 'loggingInfo.correlationId') || utils.uuid();
                var reporting = utils.get(step.data, 'loggingInfo.reporting');
                var breadcrumbs = utils.get(step.data, 'loggingInfo.breadcrumbs');
                var swid = utils.get(step.data, 'token.swid');
                var accessToken = utils.get(step.data, 'token.access_token');
                var log = metrics.timed('log:getguest', {
                    conversation_id: conversationId,
                    correlation_id: correlationId,
                    reporting: reporting,
                    info: {
                        context: utils.get(step.data, 'loggingInfo.context'),
                    },
                    trace: breadcrumbs && breadcrumbs.getTrail(),
                    trace_data: breadcrumbs && breadcrumbs.getData()
                });

                dao.getBySwid(
                        swid,
                        accessToken,
                        conversationId,
                        correlationId,
                        reporting, {
                            feature: 'always-get-entitlements',
                            expand: [
                                'profile',
                                'displayname',
                                'linkedaccounts',
                                'accountmapping',
                                'marketing',
                                'entitlements',
                                's2'
                            ]
                        }
                    )
                    .then(function(response) {
                        step.data.response = response;
                        if (response.data) {
                            step.data.guest = response.data;
                            log.success({
                                anon: false,
                                swid: swid
                            });

                            if (utils.get(step, 'data.token')) {
                                // Set token on guest object
                                utils.set(step, 'data.guest.token', step.data.token);
                            }

                            step.success();
                        } else {
                            logFailure(response);
                            step.failure();
                        }
                    }, function(response) {
                        step.data.response = response;
                        logFailure(response);
                        step.failure();
                    });

                /**
                 * Logs a failed call
                 */
                function logFailure(response) {
                    var error = exceptions.find(utils.get(response, 'error.errors'), 'AUTHORIZATION_INVALID_OR_EXPIRED_TOKEN');
                    var payload = {
                        error_category: utils.get(response, 'error.keyCategory'),
                        error_codes: exceptions.getErrorCodes(exceptions.getKeyErrors(response))
                    };

                    // TODO - Ask GC for a more specific error code for GCv6
                    if (error && (error.developerMessage || '').indexOf('Authorization header is missing or invalid') > -1) {
                        payload.info = {
                            context: utils.get(step.data, 'loggingInfo.context'),
                            missingAuthHeader: true
                        };
                    }

                    log.send(payload, !response.isServerError());
                }
            }
        });

    }, {
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    128: [function(require, module, exports) {
        'use strict';

        var session = require('session');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.guest.read().then(function(data) {
                    if (data.created) {
                        data.created = new Date(data.created);
                    }

                    if (utils.get(step, 'data.token')) {
                        // Set token on guest object
                        utils.set(data, 'guest.token', step.data.token);
                    }

                    step.data.guest = data.guest;
                    step.data.created = data.created;
                    step.success();
                }, function() {
                    step.data.errorCodes.push('GUEST_READ_FAILURE');
                    step.failure();
                });
            }
        });

    }, {
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    129: [function(require, module, exports) {

        'use strict';

        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.guest.write({
                    guest: step.data.guest
                }).finally(function() {
                    step.success();
                });
            }
        });

    }, {
        "session": "session",
        "step": 48
    }],
    130: [function(require, module, exports) {
        'use strict';

        var Workflow = require('workflow');
        var steps = {
            CheckForAccount: require('./steps/check-for-account'),
            Validate: require('./steps/validate')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'GuestFlow'
            });

            workflow.step('validate', new steps.Validate())
                .success('check-for-account')
                .failure('done');

            workflow.step('check-for-account', new steps.CheckForAccount())
                .success('done');

            return workflow;
        };

    }, {
        "./steps/check-for-account": 131,
        "./steps/validate": 132,
        "workflow": 47
    }],
    131: [function(require, module, exports) {
        'use strict';

        var dao = require('dao');
        var utils = require('utils');
        var metrics = require('metrics');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var log;

                var complete = function(response) {
                    var responseFlow = utils.get(response, 'data.guestFlow') || null;
                    var forLogin = [
                        'LOGIN_FLOW',
                        'RECOVERY_FLOW',
                        'CONTACT_CSR_FLOW'
                    ];

                    step.data.flowName = (responseFlow && forLogin.indexOf(responseFlow) >= 0) ? 'LOGIN_FLOW' : 'REGISTRATION_FLOW';
                    step.data.flowCode = responseFlow;

                    log.send({
                        info: {
                            guest_flow_screen: step.data.flowName.split('_')[0],
                            guest_flow_code: step.data.flowCode
                        }
                    }, !response.isServerError());

                    step.success();
                };

                if (step.data.guestCredential) {
                    var conversationId = utils.get(step.data, 'opts.conversationId');
                    var correlationId = utils.get(step.data, 'opts.correlationId');
                    var reporting = utils.get(step.data, 'opts.loggingInfo.reporting');

                    log = metrics.timed(metrics.actions.event.guestFlow, {
                        correlation_id: correlationId,
                        conversation_id: conversationId,
                        reporting: reporting
                    });

                    dao.checkForAccountByEmail(
                            step.data.guestCredential,
                            conversationId,
                            correlationId,
                            reporting
                        )
                        .then(complete)
                        .catch(complete);
                } else {
                    step.data.flowName = 'REGISTRATION_FLOW';
                    step.success();
                }
            }
        });

    }, {
        "dao": 59,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    132: [function(require, module, exports) {
        'use strict';

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var validEmail = false;

                step.data.flowName = 'LOGIN_FLOW';

                if (typeof step.data.guestCredential === 'string') {
                    // simple sanitization
                    step.data.guestCredential = step.data.guestCredential.trim().replace(/<|>/gim, '');

                    // looking for '@' and at least one '.' afterwards
                    var reg = /^(.+)@([a-zA-Z0-9\-]+)(\.([a-zA-Z]+))+$/;
                    validEmail = reg.test(step.data.guestCredential);
                }
                // TODO: username?
                // if not valid email is it username?
                // currently we don't support username in the GUEST-FLOW api (2018-03-06)

                if (validEmail) {
                    step.success();
                } else {
                    step.data.flowName = 'REGISTRATION_FLOW';
                    step.data.guestCredential = null;
                    step.failure();
                }
            }
        });

    }, {
        "step": 48
    }],
    133: [function(require, module, exports) {

        'use strict';

        var Workflow = require('workflow');

        var steps = {
            anonymize: require('./steps/anonymize'),
            DeleteBlueCookies: require('./steps/delete-blue-cookies'),
            ReadToken: require('../shared/steps/read-token'),
            GetGuest: require('./steps/get-guest'),
            Events: require('./steps/events'),
            Obo: require('./steps/obo'),
            TokenRefresh: require('./steps/token-refresh')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'Initialization'
            });

            /**
             * Writes an anonymous SWID cookie if one does not already exist. Do this first becuase anything
             * we log beyond this step will need a swid (either anonymous or registered).
             */
            workflow.step('anonymize', new steps.anonymize())
                .success('delete-blue-cookies');

            /**
             * Check for existing blue or navy cookies and remove them
             */
            workflow.step('delete-blue-cookies', new steps.DeleteBlueCookies())
                .success('read-token');

            /**
             * Reads the token cookie and determines the next step based on the presense and validity of
             * the guest's access token.
             */
            workflow.step('read-token', new steps.ReadToken())
                .success(function() {
                    if (this.data.tokenIsExpired) {
                        // Token is expired. Attempt a refresh first because we may need a valid token to
                        // rehydrate the guest object if one is not available in the current localStorage
                        // context or if the identifier cookie has expired.
                        return 'token-refresh';
                    } else {
                        // We have a valid access token and can use it to read and decrypt the guest data
                        // as long as the identifier cookie has not expired. If the identifier cookie has
                        // expired, the get-guest workflow will fetch a new guest object from the Guest
                        // Controller, write it to localStorage, and then write a new identifier cookie.
                        return 'get-guest';
                    }
                })
                .failure('events');

            /**
             * @subflow tokenrefresh
             */
            workflow.step('token-refresh', new steps.TokenRefresh())
                .success('get-guest')
                .failure('events');

            /**
             * Gets the guest from localStorage and tacks it on to the workflow data object
             *
             * @subflow getguest
             */
            workflow.step('get-guest', new steps.GetGuest())
                .success('events')
                .failure('events');

            /**
             * Notifies the outer API that the synchronous portion of initialization has completed.
             * Outer API will then resolve the init() promise with the guest's session state, as well
             * as emit an `init` event on the `did` instance.
             */
            workflow.step('events', new steps.Events())
                .success('obo');

            /**
             * Starts OBO sub-flow
             *
             * @subflow obo
             */
            workflow.step('obo', new steps.Obo())
                .success('done')
                .failure('done');

            return workflow;
        };

    }, {
        "../shared/steps/read-token": 175,
        "./steps/anonymize": 134,
        "./steps/delete-blue-cookies": 135,
        "./steps/events": 136,
        "./steps/get-guest": 137,
        "./steps/obo": 138,
        "./steps/token-refresh": 139,
        "workflow": 47
    }],
    134: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var dao = require('dao');

        module.exports = require('step').extend({
            execute: function() {
                session.swid.anonymize(true).then(this.success.bind(this));
            }
        });

    }, {
        "dao": 59,
        "session": "session",
        "step": 48
    }],
    135: [function(require, module, exports) {
        'use strict';

        var cookie = require('cookie'),
            messages = require('messages');

        module.exports = require('step').extend({
            execute: function() {
                // remove any blue cookies
                var cookieRemovalData = cookie.removeAnyBlueCookies();

                // log to NR
                if (Object.keys(cookieRemovalData).length) {
                    var logData = {
                        action_name: 'log:cookie:blueremoval',
                        info: Object.assign(cookieRemovalData, {
                            context: 'outer'
                        })
                    }

                    messages.publish('metrics.log.send', logData);
                }

                this.success();
            }
        });

    }, {
        "cookie": 11,
        "messages": 21,
        "step": 48
    }],
    136: [function(require, module, exports) {

        'use strict';

        module.exports = require('step').extend({
            execute: function() {
                this.workflow.emit('session-state-known', {
                    guest: this.data.guest || null,
                    isLoggedIn: !!this.data.token
                });
                this.success();
            }
        });

    }, {
        "step": 48
    }],
    137: [function(require, module, exports) {

        'use strict';

        var WM = require('../../../../components/outer/workflow-manager');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var wf = WM.get('get-guest');
                var errorCodes = [];
                var breadcrumbs = utils.get(step.data, 'loggingInfo.breadcrumbs');

                if (breadcrumbs) {
                    breadcrumbs.track(wf, [{
                            prop: 'token.access_token',
                            format: utils.maskToken
                        },
                        {
                            prop: 'token.id_token',
                            format: utils.hashString
                        },
                        {
                            prop: 'token.expires'
                        }
                    ]);
                }

                wf.on('done', function(data) {
                    if (data.guest) {
                        step.data.guest = data.guest;
                        step.success();
                    } else {
                        step.failure();
                    }
                });

                // deep-link into `get-guest` workflow. We already have a token so
                // there's no need for `get-guest` to read the token cookie again.
                wf.run('read-guest-from-storage', {
                    token: step.data.token,
                    errorCodes: errorCodes,
                    loggingInfo: step.data.loggingInfo
                });
            }
        });

    }, {
        "../../../../components/outer/workflow-manager": 105,
        "step": 48,
        "utils": 42
    }],
    138: [function(require, module, exports) {

        'use strict';

        var WM = require('../../../../components/outer/workflow-manager');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var oboWorkflow = WM.get('obo');
                var step = this;
                var breadcrumbs = utils.get(step.data, 'loggingInfo.breadcrumbs');

                if (breadcrumbs) {
                    breadcrumbs.track(oboWorkflow);
                }

                oboWorkflow.on('done', function(data) {
                    if (data.guest) {
                        step.data.guest = data.guest;
                        step.workflow.emit('login', {
                            guest: data.guest
                        });
                        step.success();
                    } else {
                        step.failure();
                    }
                });

                oboWorkflow.run(null, {
                    token: step.data.token,
                    loggingInfo: step.data.loggingInfo
                });
            }
        });

    }, {
        "../../../../components/outer/workflow-manager": 105,
        "step": 48,
        "utils": 42
    }],
    139: [function(require, module, exports) {

        'use strict';

        var tokenRefresh = require('../../../../components/outer/token-refresh');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                tokenRefresh.refresh(step.data.loggingInfo).then(function(response) {
                    if (utils.get(response, 'data.token')) {
                        step.data.token = utils.get(response, 'data.token');
                        step.success();
                    } else {
                        step.failure();
                    }
                }, function() {
                    step.failure();
                });
            }
        });

    }, {
        "../../../../components/outer/token-refresh": 97,
        "step": 48,
        "utils": 42
    }],
    140: [function(require, module, exports) {
        'use strict';

        module.exports = {
            AGE_GATED: 'AGE_GATED',
            ALREADY_OPT_IN: 'ALREADY_OPT_IN',
            INVALID_EMAIL: 'INVALID_EMAIL',
            INVALID_LOCATION: 'INVALID_LOCATION',
            MISSING_OPT_IN: 'MISSING_OPT_IN',
            NO_DATA: 'NO_DATA',
            NO_VALID_CAMPAIGN: 'NO_VALID_CAMPAIGN',
            SERVICE_ERROR: 'SERVICE_ERROR'
        };


    }, {}],
    141: [function(require, module, exports) {
        'use strict';

        var Workflow = require('workflow');
        var steps = {
            Start: require('./steps/get/'),
            SiteConfig: require('./steps/shared/site-config'),
            GetLoggedInStatus: require('../../inner/shared/steps/get-logged-in-status'),
            GetGuest: require('../../inner/shared/steps/get-complete-guest-object'),
            CheckProfile: require('./steps/shared/check-profile'),
            CheckLocation: require('./steps/shared/check-location'),
            GuestNewsletters: require('./steps/shared/guest-newsletters'),
            Marketing: require('./steps/shared/marketing'),
            MarketingList: require('./steps/get/marketing-list'),
            GetLegal: require('./steps/get/get-legal'),
            Response: require('./steps/get/response'),
            HandleError: require('./steps/shared/handle-error')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'GetInlineNRT'
            });

            workflow.step('start', new steps.Start())
                .success('site-config')
                .failure('handle-error');

            workflow.step('site-config', new steps.SiteConfig())
                .success('get-logged-status')
                .failure('handle-error');

            workflow.step('get-logged-status', new steps.GetLoggedInStatus())
                .success(function() {
                    if (this.data.isLoggedIn) {
                        return 'get-guest';
                    }

                    return 'check-location';
                });

            workflow.step('get-guest', new steps.GetGuest())
                .success('check-profile')
                .failure('check-location');

            workflow.step('check-profile', new steps.CheckProfile())
                .success('guest-newsletters')
                .failure('handle-error');

            workflow.step('check-location', new steps.CheckLocation())
                .success('guest-newsletters')
                .failure('handle-error');

            workflow.step('guest-newsletters', new steps.GuestNewsletters())
                .success('marketing')
                .failure('handle-error');

            workflow.step('marketing', new steps.Marketing())
                .success('marketing-list')
                .failure('handle-error');

            workflow.step('marketing-list', new steps.MarketingList())
                .success('get-legal')
                .failure('handle-error');

            workflow.step('get-legal', new steps.GetLegal())
                .success('response')
                .failure('handle-error');

            workflow.step('response', new steps.Response())
                .success('done');

            workflow.step('handle-error', new steps.HandleError())
                .success('done');

            return workflow;
        };

    }, {
        "../../inner/shared/steps/get-complete-guest-object": 117,
        "../../inner/shared/steps/get-logged-in-status": 118,
        "./steps/get/": 145,
        "./steps/get/get-legal": 144,
        "./steps/get/marketing-list": 146,
        "./steps/get/response": 147,
        "./steps/shared/check-location": 152,
        "./steps/shared/check-profile": 153,
        "./steps/shared/guest-newsletters": 154,
        "./steps/shared/handle-error": 155,
        "./steps/shared/marketing": 156,
        "./steps/shared/site-config": 157,
        "workflow": 47
    }],
    142: [function(require, module, exports) {
        (function() {
            var config = require('../../../components/outer/config/index');
            var Q = require('q');

            module.exports = {
                get: get
            };

            function get(stringIds) {
                var deferred = Q.defer();

                config.getL10N(stringIds)
                    .then(function(response) {
                        deferred.resolve(response);
                    });


                return deferred.promise;
            }
        }());

    }, {
        "../../../components/outer/config/index": 78,
        "q": 1
    }],
    143: [function(require, module, exports) {
        'use strict';

        var Workflow = require('workflow');
        var steps = {
            Start: require('./steps/set/'),
            SiteConfig: require('./steps/shared/site-config'),
            GetLoggedInStatus: require('../../inner/shared/steps/get-logged-in-status'),
            GetGuest: require('../../inner/shared/steps/get-complete-guest-object'),
            CheckProfile: require('./steps/shared/check-profile'),
            CheckLocation: require('./steps/shared/check-location'),
            GuestNewsletters: require('./steps/shared/guest-newsletters'),
            Marketing: require('./steps/shared/marketing'),
            MarketingList: require('./steps/set/marketing-list'),
            ExecutePrep: require('./steps/set/execute-prep'),
            ExecuteUpdate: require('../../inner/newsletters/steps/execute-update'),
            ReloadGuest: require('../../inner/shared/steps/reload-guest-data'),
            SaveGuest: require('../../inner/shared/steps/save-guest'),
            Execute: require('../../inner/newsletters/steps/execute'),
            Response: require('./steps/set/response'),
            HandleError: require('./steps/shared/handle-error')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'SetInlineNRT'
            });

            workflow.step('start', new steps.Start())
                .success('site-config')
                .failure('handle-error');

            workflow.step('site-config', new steps.SiteConfig())
                .success('get-logged-status')
                .failure('handle-error');

            workflow.step('get-logged-status', new steps.GetLoggedInStatus())
                .success(function() {
                    if (this.data.isLoggedIn) {
                        return 'get-guest';
                    }

                    return 'check-location';
                });

            workflow.step('get-guest', new steps.GetGuest())
                .success('check-profile')
                .failure('handle-error');

            workflow.step('check-profile', new steps.CheckProfile())
                .success('guest-newsletters')
                .failure('handle-error');

            workflow.step('check-location', new steps.CheckLocation())
                .success('guest-newsletters')
                .failure('handle-error');

            workflow.step('guest-newsletters', new steps.GuestNewsletters())
                .success('marketing')
                .failure('handle-error');

            workflow.step('marketing', new steps.Marketing())
                .success('marketing-list')
                .failure('handle-error');

            workflow.step('marketing-list', new steps.MarketingList())
                .success('execute-prep')
                .failure('handle-error');

            workflow.step('execute-prep', new steps.ExecutePrep())
                .success(function() {
                    if (this.data.guest) {
                        return 'execute-update';
                    }

                    return 'execute';
                })
                .failure('handle-error');

            workflow.step('execute-update', new steps.ExecuteUpdate())
                .success('reload-guest')
                .failure('handle-error');

            /**
             * @tags calls-gc
             */
            workflow.step('reload-guest', new steps.ReloadGuest())
                .success('save-guest');

            workflow.step('save-guest', new steps.SaveGuest())
                .success('response');

            workflow.step('execute', new steps.Execute())
                .success('response')
                .failure('handle-error');

            workflow.step('response', new steps.Response())
                .success('done');

            workflow.step('handle-error', new steps.HandleError())
                .success('done');

            return workflow;
        };

    }, {
        "../../inner/newsletters/steps/execute": 115,
        "../../inner/newsletters/steps/execute-update": 114,
        "../../inner/shared/steps/get-complete-guest-object": 117,
        "../../inner/shared/steps/get-logged-in-status": 118,
        "../../inner/shared/steps/reload-guest-data": 119,
        "../../inner/shared/steps/save-guest": 120,
        "./steps/set/": 149,
        "./steps/set/execute-prep": 148,
        "./steps/set/marketing-list": 150,
        "./steps/set/response": 151,
        "./steps/shared/check-location": 152,
        "./steps/shared/check-profile": 153,
        "./steps/shared/guest-newsletters": 154,
        "./steps/shared/handle-error": 155,
        "./steps/shared/marketing": 156,
        "./steps/shared/site-config": 157,
        "workflow": 47
    }],
    144: [function(require, module, exports) {
        (function() {
            'use strict';

            var l10n = require('../../l10n');
            var Q = require('q');
            var utils = require('utils');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    getLegal(step.data.guest, step.data.siteConfig, step.data.context)
                        .then(function(response) {
                            step.data.legal = response;
                            step.success();
                        });
                }
            });

            function getLegal(guest, siteConfig, context) {
                var deferred = Q.defer();
                var data = [];

                if (!guest) {
                    var legalDocs = utils.get(siteConfig, 'legal.ADULT.CREATE');
                    var l10nIds = [];

                    for (var i = 0, ii = legalDocs.length; i < ii; i++) {
                        var legal = {};
                        var legalDoc = legalDocs[i];

                        legal.code = legalDoc.key;
                        legal.requiresActiveConsent = legalDoc.displayCheckbox;
                        legal.accepted = !legalDoc.displayCheckbox;
                        legal.content = 'legal.' + legalDoc.key + '_' + context.toLowerCase();

                        l10nIds[l10nIds.length] = legal.content;
                        data[data.length] = legal;
                    }

                    l10n.get(l10nIds)
                        .then(function(response) {
                            data.forEach(function(item) {
                                item.content = response[item.content] || null;
                            });
                        })
                        .finally(function() {
                            deferred.resolve(data);
                        });
                } else {
                    deferred.resolve(data);
                }

                return deferred.promise;
            }
        }());

    }, {
        "../../l10n": 142,
        "q": 1,
        "step": 48,
        "utils": 42
    }],
    145: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    step.data.flow = 'get';
                    step.data.context = 'CREATE';
                    step.data.success = true;
                    step.data.content = {
                        data: {},
                        error_codes: null
                    };

                    if (!step.data.campaignId) {
                        step.data.content.error_codes = ERRORS.NO_VALID_CAMPAIGN;
                        step.failure();
                    } else {
                        step.success();
                    }
                }
            });
        }());

    }, {
        "../../errors": 140,
        "step": 48
    }],
    146: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');
            var l10n = require('../../l10n');
            var Q = require('q');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    buildList(step.data.marketing)
                        .then(function(response) {
                            step.data.marketingList = response;
                            step.success();
                        })
                        .catch(function() {
                            step.data.content.data = {};
                            step.data.content.error_codes = ERRORS.SERVICE_ERROR;
                            step.data.success = false;
                            step.failure();
                        });
                }
            });

            function buildList(marketingItems) {
                var deferred = Q.defer();
                var list = [];
                var l10nIds = [];

                marketingItems.forEach(function(listItem) {
                    l10nIds[l10nIds.length] = 'epc.list.' + listItem.name + '.text';
                    list[list.length] = {
                        code: listItem.name,
                        subscribed: false,
                        preselected: listItem.checked,
                        content: l10nIds[l10nIds.length - 1]
                    };
                });

                l10n.get(l10nIds)
                    .then(function(response) {
                        list.forEach(function(item) {
                            item.content = response[item.content] || null;
                        });
                    })
                    .finally(function() {
                        deferred.resolve(list);
                    });

                return deferred.promise;
            }
        }());

    }, {
        "../../errors": 140,
        "../../l10n": 142,
        "q": 1,
        "step": 48
    }],
    147: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    step.data.content.data = {
                        campaignId: step.data.campaignId,
                        email: utils.get(step.data.guest, 'profile.email') || null,
                        legal: step.data.legal,
                        marketing: step.data.marketingList
                    };

                    step.success();
                }
            });
        }());

    }, {
        "step": 48,
        "utils": 42
    }],
    148: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var legalAssertions = [];

                    if (step.data.buData) {
                        step.data.buData.legal.forEach(function(item) {
                            if (item.accepted) {
                                legalAssertions[legalAssertions.length] = item.code;
                            }
                        });
                    }

                    step.data.loggingInfo = step.data.opts.loggingInfo;
                    step.data.email = step.data.buData.email;
                    step.data.legalAssertions = legalAssertions;
                    step.data.geoDetected = {
                        country: step.data.location
                    };

                    step.success();
                }
            });
        }());

    }, {
        "step": 48
    }],
    149: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');
            // var messages = require('messages');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    step.data.flow = 'set';
                    step.data.context = 'CREATE';
                    step.data.success = true;
                    step.data.content = {
                        data: {},
                        error_codes: null
                    };

                    if (!step.data.buData) {
                        step.data.content.error_codes = ERRORS.NO_DATA;
                        step.failure();
                    } else {
                        step.data.campaignId = step.data.buData.campaignId;
                        step.success();
                    }
                }
            });
        }());

    }, {
        "../../errors": 140,
        "step": 48
    }],
    150: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');
            var l10n = require('../../l10n');
            var Q = require('q');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    buildModel(step.data.marketing)
                        .then(function(response) {
                            step.data.marketingList = response;
                            step.success();
                        })
                        .catch(function() {
                            step.data.content.data = {};
                            step.data.content.error_codes = ERRORS.SERVICE_ERROR;
                            step.data.success = false;
                            step.failure();
                        });
                }
            });

            /**
             * Helper to update the exposed model.
             *
             * @param {Array} marketingItems
             * @return {Array}
             **/
            function buildModel(marketingItems) {
                var deferred = Q.defer();
                var model = [];
                var l10nIds = [];

                marketingItems.forEach(function(listItem) {
                    listItem.proxy.forEach(function(entityName) {
                        var name = (listItem.isProxy ? listItem.name : entityName);
                        var textIdKey = 'epc.list.' + name + '.textId';
                        var item = {
                            code: entityName,
                            subscribed: listItem.subscribed,
                            textId: textIdKey
                        };

                        l10nIds[l10nIds.length] = textIdKey;
                        model[model.length] = item;
                    });
                });

                l10n.get(l10nIds)
                    .then(function(response) {
                        model.forEach(function(item) {
                            item.textId = response[item.textId] || null;
                        });
                    })
                    .finally(function() {
                        deferred.resolve(model);
                    });

                return deferred.promise;
            }
        }());

    }, {
        "../../errors": 140,
        "../../l10n": 142,
        "q": 1,
        "step": 48
    }],
    151: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    step.data.content.data = 'SUCCESS';
                    step.data.content.error_codes = null;
                    step.success();
                }
            });
        }());

    }, {
        "step": 48
    }],
    152: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');
            var utils = require('utils');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var ipDetectCountry = utils.get(step.data.siteConfig, 'compliance.ageBands.ADULT.country') || null;

                    if (ipDetectCountry && ipDetectCountry !== 'US') {
                        step.data.content.data = {};
                        step.data.content.error_codes = ERRORS.INVALID_LOCATION;
                        step.failure();
                    }

                    step.data.location = ipDetectCountry;
                    step.success();
                }
            });
        }());

    }, {
        "../../errors": 140,
        "step": 48,
        "utils": 42
    }],
    153: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');
            var utils = require('utils');
            var gUtils = require('../../../../../components/common/guest-utils/index');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var error;

                    step.data.location = gUtils.getLegalCountry(step.data.siteConfig, step.data.guest.profile);

                    error = profileError(step.data.location, step.data.guest, utils.get(step.data, 'buData.email') || null);

                    if (error) {
                        step.data.content.data = {};
                        step.data.content.error_codes = error;
                        step.failure();
                    }

                    step.success();
                }
            });

            function profileError(location, guest, email) {
                if (utils.get(guest, 'profile.ageBand') === 'CHILD') {
                    return ERRORS.AGE_GATED;
                }

                if (location !== 'US') {
                    return ERRORS.INVALID_LOCATION;
                }

                if (email !== null && email !== utils.get(guest, 'profile.email')) {
                    return ERRORS.INVALID_EMAIL;
                }

                return false;
            }
        }());

    }, {
        "../../../../../components/common/guest-utils/index": 19,
        "../../errors": 140,
        "step": 48,
        "utils": 42
    }],
    154: [function(require, module, exports) {
        (function() {
            'use strict';

            var config = require('../../../../../components/outer/config/index');
            var ERRORS = require('../../errors');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    config.getNewsletters(step.data.guest, 'ADULT', step.data.campaignId)
                        .then(function(response) {
                            var activeMarketing;

                            if (step.data.flow === 'set') {
                                activeMarketing = {};

                                step.data.buData.marketing.forEach(function(buMark) {
                                    if (buMark.subscribed) {
                                        activeMarketing[buMark.code] = response[buMark.code];
                                        activeMarketing[buMark.code].subscribed = true;
                                    }
                                });
                            }

                            step.data.activeNewsletters = activeMarketing || response;
                            step.success();
                        })
                        .catch(function() {
                            step.data.content.data = {};
                            step.data.content.error_codes = ERRORS.NO_VALID_CAMPAIGN;
                            step.failure();
                        });
                }
            });
        }());

    }, {
        "../../../../../components/outer/config/index": 78,
        "../../errors": 140,
        "step": 48
    }],
    155: [function(require, module, exports) {
        (function() {
            'use strict';

            var utils = require('utils');
            var ERRORS = require('../../errors');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    /**
                    error hasn't already been defined
                    must be from the execute or execute-update sub-flow
                     **/
                    if (step.data.content.error_codes === null) {
                        var error = utils.get(step.data, 'response.error');

                        if (error === undefined) {
                            step.data.content.data = {};
                            step.data.content.error_codes = ERRORS.SERVICE_ERROR;
                            step.data.success = false;
                        } else if (error === null || error.keyCategory === 'ADVISORY') {
                            step.data.content.data = 'SUCCESS';
                        } else {
                            var responseCodes = [];

                            for (var i = 0, ii = error.errors.length; i < ii; i++) {
                                var currentError = error.errors[i];
                                var errorCode = [
                                    currentError.code
                                ];

                                if (currentError.inputName) {
                                    errorCode[errorCode.length] = currentError.inputName.toUpperCase();
                                }

                                responseCodes[responseCodes.length] = errorCode.join('_');
                            }

                            step.data.content.data = {};
                            step.data.content.error_codes = responseCodes[0];
                        }
                    }

                    step.success();
                }
            });
        }());

    }, {
        "../../errors": 140,
        "step": 48,
        "utils": 42
    }],
    156: [function(require, module, exports) {
        (function() {
            'use strict';

            var ERRORS = require('../../errors');
            var marketingUtils = require('../../../../../components/inner/marketing/marketing-utils.js');
            var utils = require('utils');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;
                    var marketingItems = getMarketing(step.data.guest, step.data.siteConfig, step.data.activeNewsletters, step.data.campaignId, step.data.flow);

                    if (marketingItems && typeof marketingItems === 'string') {
                        step.data.content.data = {};
                        step.data.content.error_codes = marketingItems;
                        step.failure();
                        return;
                    }

                    step.data.marketing = marketingItems;
                    step.success();
                }
            });

            function getMarketing(guest, siteConfig, activeNewsletters, campaignId, flow) {
                var allNewsletters = utils.get(siteConfig, 'newsletters') || {};
                var campaigns = utils.get(allNewsletters, 'ADULT') || {};
                var campaignKeys = Object.keys(campaigns);

                if (
                    campaignKeys.length === 0 ||
                    campaignKeys.indexOf(campaignId) === -1 ||
                    campaigns[campaignId].length === 0
                ) {
                    return ERRORS.NO_VALID_CAMPAIGN;
                }

                var marketingItems = transformMarketingLists(marketingUtils.applyMarketingValues(activeNewsletters, []));
                var items = [];

                if (guest) { // checking for all opted in
                    for (var i = 0, ii = marketingItems.length; i < ii; i++) {
                        var mItem = marketingItems[i];
                        var gItem = guest.marketing && guest.marketing.find(function(item) {
                            return item.code === mItem.name;
                        }) || false;

                        if (gItem) {
                            if (flow === 'set') {
                                if (mItem.subscribed) {
                                    items[items.length] = mItem;
                                }
                            } else {
                                if (!gItem.subscribed) {
                                    items[items.length] = mItem;
                                }
                            }
                        } else {
                            items[items.length] = mItem;
                        }
                    }

                    if (flow === 'get' && !items.length) {
                        return ERRORS.ALREADY_OPT_IN;
                    }
                }

                return items.length && items || marketingItems;

                /**
                 * Transform marketing list data, into a format which is much more
                 * consumable.
                 *
                 * @param {Object} lists
                 * @return {Array}
                 **/
                function transformMarketingLists(lists) {
                    if (!lists) {
                        return lists;
                    }

                    return Object.keys(lists)
                        .reduce(function(output, name) {
                            // The register controller attaches data to the config.
                            // Filter anything which isn't an object.
                            if (lists[name] === null || typeof lists[name] !== 'object') {
                                return output;
                            }

                            output.push({
                                name: name,
                                type: lists[name].type,
                                order: lists[name].order,
                                checked: lists[name].checked,
                                isProxy: !!lists[name].proxy,
                                proxy: marketingUtils.getListNames(name, lists[name]),
                                subscribed: !!lists[name].subscribed
                            });

                            return output;
                        }, [])
                        .sort(function(a, b) {
                            return (a.order || 0) - (b.order || 0);
                        });
                }
            }
        }());

    }, {
        "../../../../../components/inner/marketing/marketing-utils.js": 63,
        "../../errors": 140,
        "step": 48,
        "utils": 42
    }],
    157: [function(require, module, exports) {
        (function() {
            'use strict';

            var config = require('../../../../../components/outer/config/index');
            var ERRORS = require('../../errors');

            module.exports = require('step').extend({
                execute: function() {
                    var step = this;

                    config.getSite()
                        .then(function(response) {
                            step.data.siteConfig = response;
                            step.success();
                        })
                        .catch(function() {
                            step.data.content.data = {};
                            step.data.content.error_codes = ERRORS.SERVICE_ERROR;
                            step.data.success = false;
                            step.failure();
                        });
                }
            });
        }());




    }, {
        "../../../../../components/outer/config/index": 78,
        "../../errors": 140,
        "step": 48
    }],
    158: [function(require, module, exports) {

        'use strict';

        var Workflow = require('workflow');
        var utils = require('utils');

        var steps = {
            ParseErrors: require('../../common/shared/steps/parse-errors'),
            ReadOboToken: require('./steps/read-obo-token'),
            LogoutAndReload: require('./steps/logout-and-reload'),
            Execute: require('./steps/execute'),
            CreateSession: require('../../inner/shared/steps/create-session'),
            PPU: require('../shared/steps/ppu'),
            Gating: require('../shared/steps/gating')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'OBO'
            });

            /**
             * Reads the `obo` and `swid` cookies and place them on the workflow databag
             */
            workflow.step('read-obo-token', new steps.ReadOboToken())
                .success(function() {
                    if (utils.get(this.data, 'obo.token') && this.data.token) {
                        // There is currently a session but we also found an OBO token.
                        // Log the user out and refresh the page. OBO login will only
                        // occur if there is not already a session. This is done to prevent
                        // session state mismatch between the business unit's website and
                        // the OneID UI.
                        return 'logout-and-reload';
                    } else if (utils.get(this.data, 'obo.token')) {
                        // OBO token found and no current session. Attempt to log in via OBO.
                        return 'execute';
                    } else {
                        return 'done';
                    }
                })
                .failure('done');

            /**
             * Attempts to log in using the OBO token
             */
            workflow.step('execute', new steps.Execute())
                .success('create-session')
                .failure('parse-errors');

            /**
             * Stores session data
             */
            workflow.step('create-session', new steps.CreateSession())
                .success('done')
                .failure('done');

            /**
             * Parses Guest Controller login errors from the execute step and routes to the
             * next appropriate workflow step.
             */
            workflow.step('parse-errors', new steps.ParseErrors())
                .success(function() {
                    var errors = this.data.errors;
                    if (errors.isPPU) {
                        return 'ppu';
                    } else if (errors.isGating) {
                        return 'gating';
                    }
                    return 'done';
                });

            /** 
             * Launches partial profile update
             *
             * @subflow ppuloggedout
             */
            workflow.step('ppu', new steps.PPU())
                .success('create-session')
                .failure('done');

            /** 
             * Launches gating
             *
             * @subflow gating
             */
            workflow.step('gating', new steps.Gating())
                .success('done')
                .failure('done');

            /**
             * Deletes the session and reloads the page after a threshold of time. Some integrations
             * may reload the page after a logout to render a "logged out" state server-side. Force
             * a reload after a certain time to guarantee a clean state when we attempt the OBO login. 
             *
             * This step is a dead end!
             */
            workflow.step('logout-and-reload', new steps.LogoutAndReload())
                .success('done');

            return workflow;
        };

    }, {
        "../../common/shared/steps/parse-errors": 113,
        "../../inner/shared/steps/create-session": 116,
        "../shared/steps/gating": 173,
        "../shared/steps/ppu": 174,
        "./steps/execute": 159,
        "./steps/logout-and-reload": 160,
        "./steps/read-obo-token": 161,
        "utils": 42,
        "workflow": 47
    }],
    159: [function(require, module, exports) {

        'use strict';

        var dao = require('dao');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var session = require('session');
        var utils = require('utils');
        var Q = require('q');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var conversationId = utils.uuid();
                var correlationId = utils.get(step.data, 'loggingInfo.correlationId');
                var reporting = utils.get(step.data, 'loggingInfo.reporting');
                var log = metrics.timed(metrics.actions.event.loginObo, {
                    conversation_id: conversationId,
                    correlation_id: correlationId,
                    reporting: reporting
                });

                // @todo: correlationId
                Q.all([
                    dao.authenticateViaOboCookie(step.data.obo.token, step.data.obo.swid, conversationId, correlationId, reporting),
                    session.obo.delete()
                ]).then(function(args) {
                    var response = args[0];
                    step.data.response = response;
                    step.data.guest = response.data;

                    if (response.isClientError() || exceptions.find(utils.get(response, 'error.errors', []), ['PPU_MARKETING'])) {
                        logFailure(response);
                        step.failure();
                    } else {
                        log.success({
                            anon: false,
                            swid: utils.get(response, 'data.profile.swid'),
                            info: {
                                context: utils.get(step.data, 'loggingInfo.context'),
                                refresh: utils.maskToken(utils.get(response, 'data.token.refresh_token'))
                            }
                        });
                        step.success();
                    }

                }, function(response) {
                    step.data.response = response;
                    logFailure(response);
                    step.failure();
                });

                /**
                 * Logs a failure call (200 w/ PPU marketing considered "failure")
                 */
                function logFailure(response) {
                    log.send({
                        error_category: utils.get(response, 'error.keyCategory'),
                        error_codes: exceptions.getErrorCodes(exceptions.getKeyErrors(response)),
                        info: {
                            context: utils.get(step.data, 'loggingInfo.context')
                        }
                    }, !response.isServerError());
                }
            }
        });

    }, {
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "q": 1,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    160: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var Q = require('q');
        var utils = require('utils');

        var RELOAD_TIMEOUT = 2000;

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                /* istanbul ignore next */
                var reload = this.data.reload || window.location.reload.bind(window.location);
                session.deleteAll('obo').then(function() {
                    setTimeout(function() {
                        reload();
                    }, RELOAD_TIMEOUT);
                });
            }
        });


    }, {
        "q": 1,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    161: [function(require, module, exports) {

        'use strict';

        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                session.obo.read().then(function(data) {
                    if (!data.token || !data.swid) {
                        return step.failure();
                    }

                    step.data.obo = {
                        token: data.token,
                        swid: data.swid
                    };

                    step.success();
                }, function() {
                    step.failure();
                });
            }
        });

    }, {
        "session": "session",
        "step": 48
    }],
    162: [function(require, module, exports) {

        'use strict';

        var Workflow = require('workflow');

        var steps = {
            CheckState: require('./steps/check-state'),
            Cagoots: require('../shared/steps/cagoots'),
            TokenRefresh: require('../initialization/steps/token-refresh'),
            SyncLoggedIn: require('./steps/sync-logged-in'),
            SyncLoggedOut: require('./steps/sync-logged-out'),
            IncrementRefreshCounter: require('./steps/increment-refresh-counter'),
            ResetRefreshCounter: require('./steps/reset-refresh-counter')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'SessionStateTasks'
            });

            /**
             * Checks session state, and determines which tasks are required to be run...
             *
             * @output {object} nextRefreshAttempt
             * @output {bool} isLoggedIn
             * @output {object} requires
             */
            workflow.step('check-state', new steps.CheckState())
                .success(function() {
                    var requires = this.data.requires || {};

                    if (requires.sync && this.data.isLoggedIn === true) {
                        return 'sync-logged-in';
                    } else if (requires.sync && this.data.isLoggedIn === false) {
                        return 'sync-logged-out';
                    } else if (requires.tokenRefresh) {
                        return 'token-refresh';
                    } else if (requires.cagoots) {
                        return 'cagoots';
                    }

                    return 'done';
                });

            /**
             * @subflow cagoots
             */
            workflow.step('cagoots', new steps.Cagoots())
                .success('done')
                .failure('done');

            /**
             * Invoke token-refresh workflow
             *
             * @subflow tokenrefresh
             */
            workflow.step('token-refresh', new steps.TokenRefresh())
                .success('reset-refresh-counter')
                .failure('increment-refresh-counter');

            /**
             * Increment the refresh counter (happens on failed token refresh).
             */
            workflow.step('increment-refresh-counter', new steps.IncrementRefreshCounter())
                .success('done');

            /**
             * Reset the refresh counter (happens on successful token refresh).
             */
            workflow.step('reset-refresh-counter', new steps.ResetRefreshCounter())
                .success('done');

            /**
             * Synchronize session state, set state to logged in.
             */
            workflow.step('sync-logged-in', new steps.SyncLoggedIn())
                .success('done');

            /**
             * Synchronize session state, set state to logged out.
             */
            workflow.step('sync-logged-out', new steps.SyncLoggedOut())
                .success('done');

            return workflow;
        };


    }, {
        "../initialization/steps/token-refresh": 139,
        "../shared/steps/cagoots": 171,
        "./steps/check-state": 163,
        "./steps/increment-refresh-counter": 164,
        "./steps/reset-refresh-counter": 165,
        "./steps/sync-logged-in": 166,
        "./steps/sync-logged-out": 167,
        "workflow": 47
    }],
    163: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var utils = require('utils');
        var Token = require('../../../../components/outer/token');
        var counter = require('../../../../components/common/retry-counter');
        var config = require('../../../../components/outer/config');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                config.getSite().then(function(config) {
                    var cagootsInterval = utils.get(config, 'uiConfig.cagoots.interval') || 24;
                    var cagootsIntervalMs = cagootsInterval * 60 * 1000;
                    var cagootsEnabled = utils.get(config, 'uiConfig.cagoots.enabled');

                    if (typeof cagootsEnabled === 'undefined') {
                        cagootsEnabled = true;
                    }

                    session.token.read().then(function(tokenData) {
                        step.data.isLoggedIn = true;

                        if (step.data.wasLoggedIn === false) {
                            utils.set(step.data, 'requires.sync', true);
                        }

                        var token = new Token(tokenData.token);
                        var nextRefreshAttempt = token.getNextRefreshAttempt(new Date(), counter);
                        var tokenTtl = utils.get(tokenData, 'token.ttl') || 0;
                        var lastCagootsCheck = new Date(utils.get(tokenData, 'token.lastChecked') || utils.get(tokenData, 'token.created'));
                        var needsCagootsCheck = (Date.now() - lastCagootsCheck.getTime()) >= cagootsIntervalMs;

                        if ((new Date()) >= (nextRefreshAttempt.date || new Date())) {
                            utils.set(step.data, 'requires.tokenRefresh', true);
                        }

                        if (cagootsEnabled && needsCagootsCheck && !shouldSkipCagoots(tokenTtl, cagootsInterval)) {
                            utils.set(step.data, 'requires.cagoots', true);
                        }

                        step.data.nextRefreshAttempt = nextRefreshAttempt;
                        step.success();
                    }, function() {
                        step.data.isLoggedIn = false;

                        if (step.data.wasLoggedIn === true) {
                            utils.set(step.data, 'requires.sync', true);
                        }

                        step.success();
                    });
                });
            }
        });

        /**
         * Heler function, to determine if the cagoots check should be skipped.
         *
         * @param {Number} tokenTtl - Token TTL in seconds
         * @param {Number} cagootsInterval - Cagoots interval in minutes
         */
        function shouldSkipCagoots(tokenTtl, cagootsInterval) {
            var SECONDS_IN_ONE_DAY = 24 * 60 * 60;
            var cagootsIntervalSeconds = cagootsInterval * 60 * 60;

            return (tokenTtl <= SECONDS_IN_ONE_DAY && cagootsIntervalSeconds >= tokenTtl);
        }


    }, {
        "../../../../components/common/retry-counter": 32,
        "../../../../components/outer/config": 78,
        "../../../../components/outer/token": 98,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    164: [function(require, module, exports) {

        'use strict';

        var counter = require('../../../../components/common/retry-counter');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                counter.increment(utils.get(this.data, 'nextRefreshAttempt.state'));
                this.success();
            }
        });


    }, {
        "../../../../components/common/retry-counter": 32,
        "step": 48,
        "utils": 42
    }],
    165: [function(require, module, exports) {

        'use strict';

        var counter = require('../../../../components/common/retry-counter');

        module.exports = require('step').extend({
            execute: function() {
                counter.reset();
                this.success();
            }
        });


    }, {
        "../../../../components/common/retry-counter": 32,
        "step": 48
    }],
    166: [function(require, module, exports) {

        'use strict';

        var Q = require('q');
        var utils = require('utils');
        var session = require('session');
        var messages = require('messages');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.guest.read().then(function(data) {
                    var reloadDfd = Q.defer();
                    var payload = {
                        ageBand: utils.get(data, 'guest.profile.ageBand'),
                        legalCountry: utils.get(data, 'guest.profile.region') || utils.get(data, 'guest.profile.countryCodeDetected')
                    };

                    messages.publish('authReloader.reloadIfChanged', payload, reloadDfd);
                    return reloadDfd.promise;
                }).finally(function() {
                    messages.publish('session.loggedin');
                    step.success();
                });
            }
        });


    }, {
        "messages": 21,
        "q": 1,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    167: [function(require, module, exports) {

        'use strict';

        var messages = require('messages');

        module.exports = require('step').extend({
            execute: function() {
                // Emits the BU-facing logout event. The logout-listener in the inner auth-reloader will correct
                // any configuration / content mismatches.
                messages.publish('session.deleted', 'mismatchtimer');
                this.success();
            }
        });


    }, {
        "messages": 21,
        "step": 48
    }],
    168: [function(require, module, exports) {
        'use strict';

        var Workflow = require('workflow');

        var steps = {
            ParseErrors: require('../../common/shared/steps/parse-errors'),
            Execute: require('./steps/execute'),
            CreateSession: require('../../inner/shared/steps/create-session'),
            PPU: require('../shared/steps/ppu'),
            Gating: require('../shared/steps/gating'),
            Complete: require('./steps/complete')
        };

        module.exports = function() {
            var workflow = new Workflow({
                name: 'session-transfer'
            });

            /**
             * Attempts to log in using the session transfer key
             */
            workflow.step('execute', new steps.Execute())
                .success('create-session')
                .failure('parse-errors');

            /**
             * Stores session data
             */
            workflow.step('create-session', new steps.CreateSession())
                .success('complete')
                .failure('done');

            /**
             * Emits events
             */
            workflow.step('complete', new steps.Complete())
                .success('done');

            /**
             * Parses Guest Controller login errors from the execute step and routes to the
             * next appropriate workflow step.
             */
            workflow.step('parse-errors', new steps.ParseErrors())
                .success(function() {
                    var errors = this.data.errors;
                    var retryAttempted = this.data.retryAttempted;

                    if (errors.isPPU) {
                        return 'ppu';
                    } else if (errors.isGating) {
                        return 'gating';
                    } else if (errors.isInvalidSessionTransferKeyError && !retryAttempted) {
                        // Attempt one retry
                        // https://confluence.disney.com/pages/viewpage.action?pageId=366309626
                        this.data.retryAttempted = true;
                        return 'execute';
                    } else {
                        return 'done';
                    }
                });

            /** 
             * Launches partial profile update
             *
             * @subflow ppuloggedout
             */
            workflow.step('ppu', new steps.PPU())
                .success('create-session')
                .failure('done');

            /** 
             * Launches gating
             *
             * @subflow gating
             */
            workflow.step('gating', new steps.Gating())
                .success('done')
                .failure('done');

            return workflow;
        };

    }, {
        "../../common/shared/steps/parse-errors": 113,
        "../../inner/shared/steps/create-session": 116,
        "../shared/steps/gating": 173,
        "../shared/steps/ppu": 174,
        "./steps/complete": 169,
        "./steps/execute": 170,
        "workflow": 47
    }],
    169: [function(require, module, exports) {

        'use strict';

        var messages = require('messages');
        var Q = require('q');

        module.exports = require('step').extend({
            execute: function() {
                var guest = this.data.guest;
                var apiEventDfd = Q.defer();
                var step = this;

                messages.publish('session.loggedin', {
                    guest: guest,
                    token: guest.token
                }, apiEventDfd);
                step.success();
            }
        });

    }, {
        "messages": 21,
        "q": 1,
        "step": 48
    }],
    170: [function(require, module, exports) {

        'use strict';

        var dao = require('dao');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var conversationId = utils.uuid();
                var correlationId = utils.get(step.data, 'loggingInfo.correlationId');
                var reporting = utils.get(step.data, 'loggingInfo.reporting');
                var attempt = step.data.retryAttempted ? 1 : 0;
                var sessionTransferKeyHash = utils.crc32(step.data.sessionTransferKey).toString(16);
                var log = metrics.timed(metrics.actions.event.sessionTransferRedeem, {
                    conversation_id: conversationId,
                    correlation_id: correlationId,
                    reporting: reporting
                });

                dao.authenticateViaSessionTransferKey(
                    step.data.sessionTransferKey,
                    conversationId,
                    correlationId,
                    reporting
                ).then(function(response) {
                    step.data.response = response;
                    step.data.guest = response.data;

                    if (response.isClientError() || exceptions.find(utils.get(response, 'error.errors', []), ['PPU_MARKETING'])) {
                        logFailure(response);
                        step.failure();
                    } else {
                        log.success({
                            anon: false,
                            swid: utils.get(response, 'data.profile.swid'),
                            info: {
                                context: utils.get(step.data, 'loggingInfo.context'),
                                refresh: utils.maskToken(utils.get(response, 'data.token.refresh_token')),
                                attempt: attempt,
                                originClientId: utils.get(response, 'headers.origin-client-id'),
                                keyHash: sessionTransferKeyHash
                            }
                        });
                        step.success();
                    }

                }, function(response) {
                    step.data.response = response;
                    logFailure(response);
                    step.failure();
                });

                /**
                 * Logs a failure call (200 w/ PPU marketing considered "failure")
                 */
                function logFailure(response) {
                    log.send({
                        error_category: utils.get(response, 'error.keyCategory'),
                        error_codes: exceptions.getErrorCodes(exceptions.getKeyErrors(response)),
                        info: {
                            context: utils.get(step.data, 'loggingInfo.context'),
                            attempt: attempt,
                            originClientId: utils.get(response, 'headers.origin-client-id'),
                            keyHash: sessionTransferKeyHash
                        }
                    }, !response.isServerError());
                }
            }
        });

    }, {
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    171: [function(require, module, exports) {

        'use strict';

        var WM = require('../../../../components/outer/workflow-manager');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var workflow = WM.get('cagoots');

                workflow.on('done', function() {
                    step.success();
                });

                workflow.run(null, {
                    loggingInfo: step.data.loggingInfo
                });
            }
        });


    }, {
        "../../../../components/outer/workflow-manager": 105,
        "step": 48
    }],
    172: [function(require, module, exports) {

        'use strict';

        var doNotDisturb = require('../../../../components/outer/ui/do-not-disturb');

        module.exports = require('step').extend({
            execute: function() {
                this.data.doNotDisturbEnabled = doNotDisturb.getState();
                this.success();
            }
        });

    }, {
        "../../../../components/outer/ui/do-not-disturb": 101,
        "step": 48
    }],
    173: [function(require, module, exports) {

        'use strict';

        var messages = require('messages');

        module.exports = require('step').extend({
            execute: function() {
                this.data.logoutType = 'gating';

                messages.publish('workflow.run', {
                    name: 'gating',
                    step: 'ensure-logged-out',
                    data: this.data
                });

                this.success();
            }
        });

    }, {
        "messages": 21,
        "step": 48
    }],
    174: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var utils = require('utils');
        var apiHelper = require('../../../../outer/api-helper');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.isLoggedIn().then(function(loggedIn) {
                    var payload = {
                        loggingInfo: step.data.loggingInfo,
                        response: step.data.response,
                        guest: utils.get(step.data.response, 'data')
                    };
                    var workflowName = loggedIn ? 'ppuLoggedIn' : 'ppuLoggedOut';
                    apiHelper
                        .runWorkflow(workflowName, null, payload, true)
                        .then(function(data) {
                            step.data.guestCancel = !!data.guestCancel; // pass guestCancel flag up
                            if (!data.guest || !!data.guestCancel) {
                                // guest did not complete PPU
                                step.failure();
                            } else {
                                step.data.guest = data.guest;
                                step.success();
                            }
                        });
                });
            }
        });

    }, {
        "../../../../outer/api-helper": 106,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    175: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var Token = require('../../../../components/outer/token');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                step.data.errorCodes = [];

                session.token.read().then(function(tokenData) {
                    var token = new Token(tokenData.token);
                    step.data.token = tokenData.token;
                    step.data.tokenIsExpired = token.isExpired();
                    step.success();
                }, function() {
                    step.data.errorCodes.push('TOKEN_READ_FAILURE');
                    step.failure();
                });
            }
        });

    }, {
        "../../../../components/outer/token": 98,
        "session": "session",
        "step": 48
    }],
    176: [function(require, module, exports) {

        'use strict';

        var Workflow = require('workflow');
        var utils = require('utils');

        var steps = {
            ReadToken: require('./steps/read-token'),
            AquireMutex: require('./steps/aquire-mutex'),
            CheckRefreshStatus: require('./steps/check-refresh-status'),
            ReleaseMutex: require('./steps/release-mutex'),
            CheckDoNotDisturb: require('../shared/steps/check-do-not-disturb'),
            RefreshWithToken: require('./steps/refresh-with-token'),
            ParseErrors: require('../../common/shared/steps/parse-errors'),
            PPU: require('./steps/ppu'),
            Gating: require('../shared/steps/gating'),
            Logout: require('./steps/ensure-logged-out')('tokenrefresh'),
            LogoutInvalidRefresh: require('./steps/ensure-logged-out')('invalidrefresh'),
            LogoutSecurityFlagged: require('./steps/ensure-logged-out')('securityflagged'),
            LogoutNoRefresh: require('./steps/ensure-logged-out')('norefresh'),
            LogoutFromOtherTab: require('./steps/ensure-logged-out')('loggedoutinothertab'),
            WriteSession: require('./steps/write-session'),
            EmitRefreshEvents: require('./steps/emit-refresh-events'),
            EncodeGuest: require('./steps/encode-guest')
        };

        module.exports = {
            create: Factory
        };

        function Factory() {
            var workflow = new Workflow({
                name: 'TokenRefresh'
            });

            /**
             * Read the token from storage, and put it on the data-bag.
             *
             * @output {object} token
             */
            workflow.step('read-token', new steps.ReadToken())
                .success(function() {
                    if (!utils.get(this.data, 'token.refresh_token')) {
                        return 'logout-no-refresh';
                    }

                    return 'check-do-not-disturb';
                })
                .failure('release-mutex');

            /**
             * Checks do not disturb state.
             *
             * @output {bool} doNotDisturbEnabled
             */
            workflow.step('check-do-not-disturb', new steps.CheckDoNotDisturb())
                .success('aquire-mutex');

            /**
             * Aquire mutex. This step will instantiate a new instance of Mutex, and put it on the
             * workflows data-bag, if an instance doesn't exist.
             *
             * @output {Mutex} mutex
             */
            workflow.step('aquire-mutex', new steps.AquireMutex())
                .success('check-refresh-status');

            /**
             * Check the refresh-status... While we were aquiring the mutex, a refresh could have
             * occurred in another tab or window. We don't want to double-up on HTTP requests, so
             * these cases are handled as special cases.
             *
             * @input {object} token
             * @output {string} refreshStatus
             */
            workflow.step('check-refresh-status', new steps.CheckRefreshStatus())
                .success(function() {
                    if (this.data.refreshStatus === 'token_refreshed') {
                        return 'emit-refresh-events';
                    } else if (this.data.refreshStatus === 'logged_out') {
                        return 'logout-from-other-tab';
                    } else if (this.data.refreshStatus === 'refresh_expired') {
                        return 'logout-invalid-refresh';
                    }

                    return 'refresh-with-token';
                });

            /**
             * Establish session, using Refresh Token.
             *
             * @input {object} token
             * @input {string} loggingInfor.correlationId
             * @output {object} response
             * @output {object} finalResponse
             * @output {object} tokenData
             */
            workflow.step('refresh-with-token', new steps.RefreshWithToken())
                .success('write-session')
                .failure('parse-refresh-with-token-errors');

            /**
             * Parse errors from token-refresh call.
             *
             * @input {object} response
             * @output {object} errors
             */
            workflow.step('parse-refresh-with-token-errors', new steps.ParseErrors())
                .success(function() {
                    var errors = this.data.errors || {};
                    var isPPU = errors.isPPU && !errors.isMarketingPPU;
                    var isGating = errors.isGating;
                    var doNotDisturb = this.data.doNotDisturbEnabled;

                    if (errors.isSecurityFlagged) {
                        return 'logout-security-flagged';
                    } else if (doNotDisturb && this.data.tokenData) {
                        return 'write-session';
                    } else if (doNotDisturb && isGating) {
                        return 'release-mutex';
                    } else if (isPPU) {
                        return 'ppu';
                    } else if (isGating) {
                        return 'gating';
                    } else if (this.data.isInvalidRefreshToken) {
                        return 'logout-invalid-refresh';
                    }

                    // @TODO: Unit tests for order-precedence
                    return 'release-mutex';
                });

            /**
             * Launches the PPU UI, and waits for it to complete. If the PPU was successful, then
             * continue down the path which will write the token data.
             *
             * @subflow ppuloggedin
             *
             * @input {object} response
             */
            workflow.step('ppu', new steps.PPU())
                .success('write-session')
                .failure('release-mutex');

            /**
             * Shows the Gating UI, and immediately resolves (while the UI is rendered).
             *
             * @subflow gating
             *
             * @input {object} response
             */
            workflow.step('gating', new steps.Gating())
                .success('release-mutex');

            /**
             * Writes the token data to persistent storage.
             *
             * @input {object} tokenData
             */
            workflow.step('write-session', new steps.WriteSession())
                .success('encode-guest');

            /**
             * Encode guest using new access token.
             *
             * @input {object} token
             * @input {object} tokenData
             */
            workflow.step('encode-guest', new steps.EncodeGuest())
                .success('emit-refresh-events');

            /**
             * Emits the events for a successful token-refresh.
             *
             * @input {object} tokenData
             */
            workflow.step('emit-refresh-events', new steps.EmitRefreshEvents())
                .success('release-mutex');

            /**
             * Logs the guest out in the case where a logout occurred in another tab.
             */
            workflow.step('logout-from-other-tab', new steps.LogoutFromOtherTab())
                .success('release-mutex');

            /**
             * Logs the guest out for the no-refresh token scenario.
             */
            workflow.step('logout-no-refresh', new steps.LogoutNoRefresh())
                .success('release-mutex');

            /**
             * Logs the guest out for the security-flagged scenario.
             */
            workflow.step('logout-security-flagged', new steps.LogoutSecurityFlagged())
                .success('release-mutex');

            /**
             * Logs the guest out for the invalid-refresh scenario.
             */
            workflow.step('logout-invalid-refresh', new steps.LogoutInvalidRefresh())
                .success('release-mutex');

            /**
             * Release the mutex.
             *
             * @input {Mutex} mutex
             */
            workflow.step('release-mutex', new steps.ReleaseMutex())
                .success('done');

            return workflow;
        }


    }, {
        "../../common/shared/steps/parse-errors": 113,
        "../shared/steps/check-do-not-disturb": 172,
        "../shared/steps/gating": 173,
        "./steps/aquire-mutex": 177,
        "./steps/check-refresh-status": 178,
        "./steps/emit-refresh-events": 179,
        "./steps/encode-guest": 180,
        "./steps/ensure-logged-out": 181,
        "./steps/ppu": 182,
        "./steps/read-token": 183,
        "./steps/refresh-with-token": 184,
        "./steps/release-mutex": 185,
        "./steps/write-session": 186,
        "utils": 42,
        "workflow": 47
    }],
    177: [function(require, module, exports) {

        'use strict';

        var env = require('../../../../components/outer/environment');
        var Mutex = require('../../../../components/common/mutex');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                if (!step.data.mutex) {
                    step.data.mutex = new Mutex(env.getClientId());
                }

                step.data.mutex.aquire(function() {
                    step.success();
                });
            }
        });


    }, {
        "../../../../components/common/mutex": 22,
        "../../../../components/outer/environment": 79,
        "step": 48
    }],
    178: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.token.read().then(function(data) {
                    if (utils.get(data, 'token.access_token') !== utils.get(step.data, 'token.access_token')) {
                        // Token was refreshed by another tab/window
                        step.data.refreshStatus = 'token_refreshed';
                    } else {
                        var refreshExpires = utils.get(data, 'token.refresh_expires');
                        var refreshTokenExpired = refreshExpires && new Date(refreshExpires) < new Date();

                        if (refreshTokenExpired) {
                            // Refresh token is expired
                            step.data.refreshStatus = 'refresh_expired';
                        } else {
                            // Token needs to be refreshed
                            step.data.refreshStatus = 'needs_refresh';
                        }
                    }

                    step.success();
                }, function() {
                    // Guest was logged out by another tab
                    step.data.refreshStatus = 'logged_out';
                    step.success();
                });
            }
        });

    }, {
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    179: [function(require, module, exports) {

        'use strict';

        var utils = require('utils');
        var messages = require('messages');

        module.exports = require('step').extend({
            execute: function() {
                var token = utils.get(this.data, 'tokenData') || {};

                messages.publish('token.refreshed', {
                    token: token,
                    previousToken: this.data.token
                });

                this.success();
            }
        });


    }, {
        "messages": 21,
        "step": 48,
        "utils": 42
    }],
    180: [function(require, module, exports) {

        'use strict';

        var session = require('session');
        var utils = require('utils');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var oldToken = utils.get(this.data, 'token') || {};
                var newToken = utils.get(this.data, 'tokenData') || {};

                session.guest.read({
                    token: oldToken
                }).then(function(data) {
                    return session.guest.write({
                        guest: data.guest,
                        token: newToken
                    });
                }).finally(function() {
                    step.success();
                });
            }
        });


    }, {
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    181: [function(require, module, exports) {
        'use strict';

        var session = require('session');
        var messages = require('messages');
        var utils = require('utils');
        var env = require('../../../../components/outer/environment');

        module.exports = function(logoutType) {
            return require('step').extend({
                execute: function() {
                    var step = this;
                    logoutType = logoutType || 'UNKNOWN';

                    session.isLoggedIn().then(function(isLoggedIn) {
                        if (isLoggedIn) {
                            session.token.readAll().then(function(tokens) {
                                return session.invalidateTokens(tokens, utils.get(step.data, 'loggingInfo.correlationId'));
                            }).finally(function() {
                                session.deleteAll(logoutType).then(step.success.bind(step));
                            });
                        } else {
                            messages.publish('session.deleted', logoutType);
                            step.success();
                        }
                    });
                }
            });
        };


    }, {
        "../../../../components/outer/environment": 79,
        "messages": 21,
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    182: [function(require, module, exports) {

        'use strict';

        var Q = require('q');
        var messages = require('messages');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var dfd = Q.defer();

                messages.publish('workflow.execute', {
                    name: 'ppuLoggedIn',
                    data: {
                        response: step.data.response,
                        loggingInfo: step.data.loggingInfo
                    }
                }, dfd);

                dfd.promise.then(function(data) {
                    if (data.ppuSuccess) {
                        step.success();
                    } else {
                        step.failure();
                    }
                });
            }
        });


    }, {
        "messages": 21,
        "q": 1,
        "step": 48
    }],
    183: [function(require, module, exports) {

        'use strict';

        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;

                session.token.read().then(function(data) {
                    step.data.token = data.token;
                    step.success();
                }, function() {
                    step.failure();
                });
            }
        });


    }, {
        "session": "session",
        "step": 48
    }],
    184: [function(require, module, exports) {

        'use strict';

        var dao = require('dao');
        var utils = require('utils');
        var metrics = require('metrics');
        var exceptions = require('exceptions');
        var sleepTimer = require('../../../../components/outer/sleep-timer');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var conversationId = utils.uuid();
                var correlationId = utils.get(step.data, 'loggingInfo.correlationId');
                var reporting = utils.get(step.data, 'loggingInfo.reporting');
                var refreshToken = utils.get(step.data, 'token.refresh_token');
                var log = metrics.timed('log:refresh:token', {
                    conversation_id: conversationId,
                    correlation_id: correlationId,
                    reporting: reporting
                });

                step.data.attemptedRefresh = true;

                dao.refreshAuthorization(refreshToken, conversationId, correlationId, reporting).then(function(response) {
                    step.data.response = step.data.finalResponse = response;
                    step.data.isInvalidRefreshToken = isInvalidRefreshToken(response);

                    if (utils.get(response, 'data.token.access_token')) {
                        step.data.tokenData = response.data.token;
                        step.data.refreshSuccess = true;
                    } else {
                        log.success(getMetricsData(response));
                    }

                    if (step.data.tokenData && !response.isClientError()) {
                        step.success();
                    } else {
                        step.failure();
                    }
                }, function(response) {
                    log.success(getMetricsData(response));
                    step.data.response = response;
                    step.failure();
                });

                function getMetricsData(response) {
                    var breadcrumbs = utils.get(step.data, 'loggingInfo.breadcrumbs');

                    return {
                        success: response && response.isServerError ? !response.isServerError() : true,
                        error_category: utils.get(response, 'error.keyCategory'),
                        error_codes: exceptions.getErrorCodes(exceptions.getKeyErrors(response)),
                        info: {
                            context: utils.get(step.data, 'loggingInfo.context'),
                            timeAwake: sleepTimer.timeSinceLastSleep(),
                            oldRefresh: utils.maskToken(refreshToken),
                            refresh: utils.maskToken(utils.get(response, 'data.token.refresh_token')),
                            xhrFailure: response.xhrFailureReason,
                            xhrTimeout: response.xhrTimeout,
                            xhrReady: response.xhrReadyState
                        },
                        trace: breadcrumbs && breadcrumbs.getTrail(),
                        trace_data: breadcrumbs && breadcrumbs.getData()
                    };
                }
            }
        });

        function isInvalidRefreshToken(response) {
            var errors = utils.get(response, 'error.errors');
            if (!Array.isArray(errors)) {
                errors = [];
            }

            return errors.some(function(e) {
                return e && e.code === 'AUTHORIZATION_INVALID_REFRESH_TOKEN';
            });
        }


    }, {
        "../../../../components/outer/sleep-timer": 96,
        "dao": 59,
        "exceptions": 16,
        "metrics": 71,
        "step": 48,
        "utils": 42
    }],
    185: [function(require, module, exports) {

        'use strict';

        module.exports = require('step').extend({
            execute: function() {
                if (this.data.mutex) {
                    this.data.mutex.release();
                }

                this.success();
            }
        });


    }, {
        "step": 48
    }],
    186: [function(require, module, exports) {

        'use strict';

        var utils = require('utils');
        var session = require('session');

        module.exports = require('step').extend({
            execute: function() {
                var step = this;
                var token = utils.get(step.data, 'tokenData') || {};
                var now = new Date(Date.now());

                token.created = now.toISOString();
                token.lastChecked = token.created;
                token.expires = utils.expires(now, token.ttl || 0).toISOString();
                token.refresh_expires = utils.expires(now, token.refresh_ttl || 0).toISOString();

                session.token.write({
                    token: token
                }).then(function(data) {
                    step.success();
                }, function() {
                    step.failure();
                });
            }
        });


    }, {
        "session": "session",
        "step": 48,
        "utils": 42
    }],
    "session.apiKey": [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');

        module.exports = {
            read: shim('responder.apikey.read'),
            write: shim('responder.apikey.write')
        };


    }, {
        "./shim": 94
    }],
    "session.s2": [function(require, module, exports) {

        'use strict';

        var shim = require('./shim');
        var config = require('../config');
        var logger = require('logger');
        var cookie = require('cookie');
        var utils = require('utils');
        var Q = require('q');

        module.exports = {
            write: write,
            delete: handleDelete
        };

        /**
         * Writes the S2 cookie.
         *
         * @param {string} data - S2 data to write
         * @return {promise}
         */
        function write(data) {
            logger.log('outer/session/s2#write');
            var dfd = Q.defer();

            getCookieInfo().then(function(cookieInfo) {
                var cookieDate = new Date();

                cookieDate.setFullYear(cookieDate.getFullYear() + 33);
                cookie.write(cookieInfo.name, data, cookieInfo.domain, '/', cookieDate);

                if (cookie.read(cookieInfo.name) !== data && tld()) {
                    // S2 didn't write possibly due to a bad domain configuration
                    // write to top domain instead. See DIDFE-4644
                    cookie.write(cookieInfo.name, data, '.' + tld(), '/', cookieDate);
                }

                dfd.resolve();
            });

            return dfd.promise;
        }

        /**
         * Deletes the s2 cookie
         */
        function handleDelete() {
            logger.log('outer/session/s2#handleDelete');

            var dfd = Q.defer();

            getCookieInfo().then(function(cookieInfo) {
                cookie.remove(cookieInfo.name, cookieInfo.domain, '/');
                if (tld()) {
                    cookie.remove(cookieInfo.name, '.' + tld(), '/');
                }
                cookie.remove(cookieInfo.name, window.location.hostname, '/');
                dfd.resolve();
            });

            return dfd.promise;
        }

        /**
         * Helper to get the configurable name/domain of the S2 cookie.
         * @function getCookieInfo
         * @private
         * @returns {Promise}
         */
        function getCookieInfo() {
            var deferred = Q.defer();

            config.getSite().then(function(config) {
                var name = utils.get(config, 'clientInfo.s2-namespace');
                var domain = utils.get(config, 'clientInfo.s2-domain');

                deferred.resolve({
                    name: name ? name + '_s2' : 's2',
                    domain: domain ? domain : window.location.hostname
                });
            });

            return deferred.promise;
        }

        function tld() {
            return utils.getTLD(window.location.hostname);
        }

    }, {
        "../config": 78,
        "./shim": 94,
        "cookie": 11,
        "logger": 20,
        "q": 1,
        "utils": 42
    }],
    "session.swid": [function(require, module, exports) {

        'use strict'

        var shim = require('./shim');
        var Q = require('q');
        var cookie = require('cookie');
        var utils = require('utils');
        var messages = require('messages');
        var cookieLength = 0;

        var BRACKETS_PATTERN = /^\{[^}]+\}$/;
        var COOKIE_NAME = 'SWID';

        var NT_COOKIE_NAME = 'SWID_NT';

        module.exports = {
            read: read,
            write: write,
            anonymize: anonymize
        };

        // Responder will periodically push the value of `document.cookie.length` to the outer for logging.
        // When we grab the swid for logging, the cookie length rides along in that payload which is why
        // this functionality is implemented within the swid module.
        messages.subscribe('cookielength', function(length) {
            cookieLength = length;
        });

        messages.subscribe('swid.read', function() {
            var deferred = arguments[1];
            if (deferred && deferred.resolve) {
                deferred.resolve({
                    swid: cookie.read(COOKIE_NAME),
                    cookieLength: cookieLength
                });
            }
        });

        function read() {
            return Q.resolve({
                swid: cookie.read(COOKIE_NAME),
                cookieLength: cookieLength
            });
        }

        /**
         * Adds brackets to the provided swid if they don't exist
         * @function checkBrackets
         * @private
         * @param   {string} swid The SWID value
         * @returns {string} The SWID value
         */
        function checkBrackets(swid) {
            if (!BRACKETS_PATTERN.test(swid)) {
                swid = '{' + swid + '}';
            }
            return swid;
        }

        /**
         * Write the provided SWID to a cookie in our current domain space.
         * SWID cookie has a one year expiration
         * @function write
         * @static
         * @param {string} swid The SWID we wish to store
         * @param {boolean} add_brackets Whether to add brackets or not
         * @param {boolean} no_track Assert this SWID is not to be tracked
         */
        function write(swid, add_brackets, no_track) {
            var domain = getCookieDomain();
            var cookieDate = new Date();
            no_track = (typeof no_track !== 'undefined' && !!no_track) ? '1' : '0';

            cookieDate.setFullYear(cookieDate.getFullYear() + 1);

            if (add_brackets === true) {
                swid = checkBrackets(swid);
            }

            cookie.write(COOKIE_NAME, swid, domain, '/', cookieDate);
            cookie.write(NT_COOKIE_NAME, no_track, domain, '/', cookieDate);

            return Q.resolve();
        }

        function anonymize(dontAnonymizeRegisteredSwid, force) {
            var domain = getCookieDomain();
            var swid = cookie.read(COOKIE_NAME);
            if (!swid || (BRACKETS_PATTERN.test(swid) && !dontAnonymizeRegisteredSwid) || force) {
                write(utils.uuid());
                utils.deleteCookie(NT_COOKIE_NAME, domain, '/'); // clean up no_track cookie
            }

            return Q.resolve();
        }

        function getCookieDomain() {
            var tld = utils.getTLD(window.location.hostname);
            var domain = (tld ? '.' + tld : '.go.com');
            return domain;
        }

    }, {
        "./shim": 94,
        "cookie": 11,
        "messages": 21,
        "q": 1,
        "utils": 42
    }],
    "session.token": [function(require, module, exports) {

        var shim = require('./shim');
        var tokenReadAll = require('../../common/session/readAll');

        module.exports = {
            read: shim('responder.session.read'),
            readAll: tokenReadAll,
            write: shim('responder.session.write'),
            delete: shim('responder.session.delete')
        };


    }, {
        "../../common/session/readAll": 33,
        "./shim": 94
    }],
    "session.unid": [function(require, module, exports) {
        /**
         * https://confluence.disney.com/display/DSA/UNID+Client+Integration+Documentation#UNIDClientIntegrationDocumentation-ClientJSAPI
         * {
               new: Boolean,
               reason: String,
               silo: Boolean,
               unid: String
            }
         */

        var Q = require('q');

        module.exports = {
            read: read
        };

        /**
         * @param w
         * @return {promise}
         */
        function read(w) {
            // for testing allow a mock window to be passed in
            w = w || window;
            var dfd = Q.defer();
            if (w.unid && w.unid.getData) {
                w.unid.getData(function(data) {
                    dfd.resolve(data);
                });
            } else {
                dfd.resolve();
            }
            return dfd.promise;
        }

    }, {
        "q": 1
    }],
    "session": [function(require, module, exports) {

        'use strict';

        var guest = require('./guest');
        var token = require('./token');
        var obo = require('./obo');

        module.exports = {
            guest: {
                read: guest.read,
                write: guest.write
            },
            token: {
                read: token.read,
                readAll: token.readAll,
                write: token.write
            },
            obo: {
                read: obo.read,
                delete: obo.delete
            },
            deleteAll: require('./delete-all'),
            trustState: require('./trust-state'),
            s2: require('./s2'),
            dob: require('./dob'),
            apiKey: require('./api-key'),
            swid: require('./swid'),
            isLoggedIn: require('./is-logged-in'),
            blueCookie: require('./blue-cookie'),
            deviceId: require('./device-id'),
            navy: require('./navy'),
            identifier: require('./idn'),
            invalidateTokens: require('./invalidate-tokens').invalidate,
            unid: require('./unid')
        };

    }, {
        "./api-key": "session.apiKey",
        "./blue-cookie": 84,
        "./delete-all": 85,
        "./device-id": 86,
        "./dob": 87,
        "./guest": 88,
        "./idn": 89,
        "./invalidate-tokens": 90,
        "./is-logged-in": 91,
        "./navy": 92,
        "./obo": 93,
        "./s2": "session.s2",
        "./swid": "session.swid",
        "./token": "session.token",
        "./trust-state": 95,
        "./unid": "session.unid"
    }]
}, {}, [108, 104, "session", "session.apiKey", "session.s2", "session.token", "session.swid", "session.unid"]);