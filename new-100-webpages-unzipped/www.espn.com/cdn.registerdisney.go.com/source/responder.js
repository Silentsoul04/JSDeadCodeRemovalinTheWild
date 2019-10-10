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
        "_process": 3,
        "timers": 4
    }],
    2: [function(require, module, exports) {
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
    3: [function(require, module, exports) {
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
    4: [function(require, module, exports) {
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
        "process/browser.js": 3,
        "timers": 4
    }],
    5: [function(require, module, exports) {
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
    6: [function(require, module, exports) {
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
        "messages": 11,
        "utils": 26
    }],
    7: [function(require, module, exports) {
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
    8: [function(require, module, exports) {
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
    9: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('./event-emitter');
        }());

    }, {
        "./event-emitter": 8
    }],
    10: [function(require, module, exports) {
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
        "utils": 26
    }],
    11: [function(require, module, exports) {
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
        "../utils": 26
    }],
    12: [function(require, module, exports) {
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
    13: [function(require, module, exports) {
        module.exports = {
            CLIENT: 'lightbox-client-window',
            LIGHTBOX: 'lightbox-main-iframe',
            RESPONDER: 'lightbox-responder',
            MOCK: 'lightbox-mock-api'
        };

    }, {}],
    14: [function(require, module, exports) {
        (function() {
            'use strict';

            module.exports = require('./postmessage-transport');
        }());

    }, {
        "./postmessage-transport": 15
    }],
    15: [function(require, module, exports) {
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
        "../event-emitter": 9,
        "../utils": 26,
        "./whitelist": 17,
        "logger": 10,
        "metrics": 46
    }],
    16: [function(require, module, exports) {

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
    17: [function(require, module, exports) {

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
        "./data": 16,
        "utils": 26
    }],
    18: [function(require, module, exports) {
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
        "config": 29,
        "q": 1,
        "utils": 26
    }],
    19: [function(require, module, exports) {
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
    20: [function(require, module, exports) {
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
    21: [function(require, module, exports) {
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
    22: [function(require, module, exports) {
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
    23: [function(require, module, exports) {
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
    24: [function(require, module, exports) {
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
    25: [function(require, module, exports) {
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
    26: [function(require, module, exports) {
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
        "../../../utils/lowercase-object-keys": 58,
        "../text-encoding": 19,
        "./browser-detection": 21,
        "./crc32": 22,
        "./curry": 23,
        "./doc-ready": 24,
        "./espn-whitelist": 25,
        "./promise": 27,
        "./url": 28,
        "base64-js": 2,
        "ua-parser-js": 5
    }],
    27: [function(require, module, exports) {
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
    28: [function(require, module, exports) {
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
    29: [function(require, module, exports) {
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
        "../multi-reg": 39,
        "./render": 32,
        "logger": 10,
        "utils": 26
    }],
    30: [function(require, module, exports) {
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
        "../../../common/utils": 26,
        "./utils": 37
    }],
    31: [function(require, module, exports) {
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
        "../../../common/utils": 26
    }],
    32: [function(require, module, exports) {
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
        "./addresses": 30,
        "./display-name": 31,
        "./marketing": 33,
        "./newsletters": 34,
        "./phones": 35,
        "./profile": 36
    }],
    33: [function(require, module, exports) {
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
        "../../marketing/marketing-utils": 38,
        "utils": 26
    }],
    34: [function(require, module, exports) {
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
        "../../marketing/marketing-utils": 38,
        "utils": 26
    }],
    35: [function(require, module, exports) {
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
        "../../../common/utils": 26,
        "./utils": 37
    }],
    36: [function(require, module, exports) {
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
        "../../../common/utils": 26,
        "./utils": 37
    }],
    37: [function(require, module, exports) {
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
    38: [function(require, module, exports) {
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
        "../../common/utils": 26
    }],
    39: [function(require, module, exports) {

        module.exports = require('./multi-reg');


    }, {
        "./multi-reg": 40
    }],
    40: [function(require, module, exports) {

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
        "utils": 26
    }],
    41: [function(require, module, exports) {

        'use strict';

        var messages = require('messages');
        var Q = require('q');

        module.exports = patch;

        /**
         * Returns a function that publishes a message to the specified topic
         *
         * @param {string} topic
         * @returns {function}
         */
        function patch(topic) {
            return function messagesPatch(data) {
                var dfd = Q.defer();
                messages.publish(topic, data, dfd);
                return dfd.promise;
            };
        }

    }, {
        "messages": 11,
        "q": 1
    }],
    42: [function(require, module, exports) {
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
        "./config": 44,
        "./metricsUtil": 48,
        "logger": 10,
        "messages": 11,
        "utils": 26
    }],
    43: [function(require, module, exports) {
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
        "logger": 10,
        "messages": 11,
        "utils": 26
    }],
    44: [function(require, module, exports) {
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
    45: [function(require, module, exports) {
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
    46: [function(require, module, exports) {
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
        "./attatchSubscribers": 42,
        "./basicLogTypes": 43,
        "./config": 44,
        "./constants": 45,
        "./init": 47,
        "./timed": 49
    }],
    47: [function(require, module, exports) {
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
        "./config": 44,
        "utils": 26
    }],
    48: [function(require, module, exports) {
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
        "./config": 44,
        "./constants": 45,
        "logger": 10,
        "q": 1,
        "session.swid": "session.swid",
        "session.token": "session.token",
        "session.unid": "session.unid",
        "utils": 26
    }],
    49: [function(require, module, exports) {
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
        "./basicLogTypes": 43,
        "utils": 26
    }],
    50: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * This module holds constants for ageBand gating.
             *
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @module ageband-gating
             */

            module.exports = {
                /**
                 * @constant {Number}
                 * @default 1800000
                 */
                AGEBAND_TIMEOUT: 30 * 60 * 1000,

                /**
                 * @constant {string}
                 * @default  .ab2
                 */
                AGEBAND_DATA_SUFFIX: '.ab2'
            };
        }());

    }, {}],
    51: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * Compress and decompress strings
             * @module compression
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             */

            module.exports = {
                compress: compress,
                decompress: decompress
            };

            /**
             * Compresses a string by replacing repeating characters with number of
             * times it occurs followed by the character itself e.g. "aaaa" becomes
             * "4a".
             * @function compress
             * @static
             * @param  {String} data The data to compress.
             * @return {String}      The data with all repeating delimiters replaced.
             */
            function compress(data) {
                var output = '',
                    repeating = data[0];

                data.substr(1).split('').forEach(function(c) {
                    if (c !== repeating[0]) {
                        output += repeating.length > 2 ? repeating.length + repeating[0] : repeating;
                        repeating = c;
                    } else {
                        repeating += c;
                    }
                });

                output += repeating.length > 2 ? repeating.length + repeating[0] : repeating;

                return output;
            }

            /**
             * Decompresses a string compressed by compress
             * @function decompress
             * @static
             * @param  {String} data The compressed data.
             * @return {String}      The decompressed data.
             */
            function decompress(data) {
                var output = '',
                    chunks = data.split(/(\d+)/),
                    numChunks = chunks.length,
                    i,
                    j,
                    numRepeatingChars;

                for (i = 0; i < numChunks; i++) {
                    numRepeatingChars = parseInt(chunks[i], 10);

                    if (isNaN(numRepeatingChars)) {
                        output += chunks[i];
                    } else {
                        for (j = 0; j < numRepeatingChars; j++) {
                            output += chunks[i + 1][0];
                        }

                        output += chunks[i + 1].substr(1);

                        i++;
                    }
                }

                return output;
            }
        }());

    }, {}],
    52: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * Encode and decode a value
             *
             * @module value-encoding
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:schema
             * @requires module:map
             * @requires module:utils
             */

            var schema = require('./schema'),
                map = require('./map'),
                utils = require('utils'),
                uuidPattern = /^{?[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}}?$/;

            module.exports = {
                encodeVal: encodeVal,
                decodeVal: decodeVal
            };

            /**
             * Encodes a value from a given item using a schema property.
             * @function encodeVal
             * @static
             * @param  {Object} item The object containing the value to encode.
             * @param  {Object} prop The schema property to use for encoding.
             * @return {String}      The encoded value.
             */
            function encodeVal(item, prop) {
                var val;

                // We need to encode using current version of character set
                var characterSet = schema.token.vals[schema.token.currentVersion];

                // Make sure there's an item, a schema property,
                // a key, and an encoding type.
                if (!item || !prop || !prop.key || !prop.type) {
                    return;
                }

                // Get the value from the item using the key from
                // the schema property.
                val = utils.get(item, prop.key);

                if (typeof val === 'undefined' || val === null) {
                    return;
                }

                // Based on the schema property type, encode the
                // value appropriately.
                switch (prop.type) {
                    case schema.type.STRING:
                        val = encodeStr(val);
                        break;
                    case schema.type.DATE:
                        val = encodeDate(val);
                        break;
                    case schema.type.INT:
                        val = encodeInt(val);
                        break;
                    case schema.type.BOOLEAN:
                        val = encodeBoolean(val);
                        break;
                    case schema.type.UUID:
                        val = encodeUUID(val);
                        break;
                    case schema.type.STRING_RAW:
                        // no encoding
                        break;
                    case schema.type.JSON:
                        val = serializeObject(val);
                        break;
                    default:
                        val = encodeStr(val);
                }

                return val;

                /**
                 * JSON-Stringifies an object
                 */
                function serializeObject(obj) {
                    if (typeof obj !== 'object') {
                        return obj;
                    } else {
                        return utils.base64Encode(JSON.stringify(obj));
                    }
                }

                /**
                 * Encodes an integer into a string using map.
                 * @function encodeInt
                 * @private
                 * @param  {Integer}    num The integer to encode.
                 * @return {String}         The encoded string.
                 */
                function encodeInt(num) {
                    var output = '';

                    // Make sure it's an int
                    num = parseInt(num, 10);

                    // Return a blank string if it's not
                    if (isNaN(num)) {
                        return;
                    }

                    // Just return the 0 character if it's 0
                    if (num === 0) {
                        return characterSet.charAt(0);
                    }

                    // Strip off the minus sign if it's a negative int and
                    // append it to the begining of the output string
                    if (num < 0) {
                        output = map.delimiter.NEGATIVE;
                        num *= -1;
                    }

                    // Convert to map.base (Little Endian)
                    while (num > 0) {
                        var div = Math.floor(num / characterSet.length), // Divide
                            rem = num - div * characterSet.length; // Remainder

                        output += characterSet.charAt(rem);
                        num = div;
                    }

                    return output;
                }

                /**
                 * Pad an encoded int with padLength zeros (while preserving the same
                 * value). This is useful if you need to pad-align encoded values to a
                 * specific length.
                 *
                 * @function zeroPadEncodedInt
                 * @private
                 * @param {string} encodedValue
                 * @param {number} padLength
                 * @return {string}
                 **/
                function zeroPadEncodedInt(encodedValue, padLength) {
                    for (var i = 0; i < padLength; i++) {
                        encodedValue += characterSet.charAt(0);
                    }

                    return encodedValue;
                }

                /**
                 * Encodes a string into a new string using map.
                 * @function encodeStr
                 * @private
                 * @param  {String} str The string to encode.
                 * @return {String}     The encoded string.
                 */
                function encodeStr(str) {
                    var output = '',
                        val;

                    if (typeof str === 'undefined' || str === null) {
                        return;
                    }

                    // Loop through the array of characters
                    ('' + str).split('').forEach(function(c) {
                        // Get map.base value of the char code.
                        // We're offsetting the char code by 32 to skip the first
                        // 31 non-printable ASCII characters. This buys us 32 more
                        // single place chars in map.base.
                        val = encodeInt(c.charCodeAt() - 32);

                        // Add the proper delimiter if 2 or more map chars are required to
                        // represent the char code.
                        if (val.length === 2) {
                            val = map.delimiter.DOUBLE_CHAR + val;
                        } else if (val.length === 3) {
                            val = map.delimiter.TRIPLE_CHAR + val;
                        }

                        output += val;
                    });

                    return output;
                }

                /**
                 * Encodes a date object into a string using map.
                 * @function encodeDate
                 * @private
                 * @param  {Date}   date    The date object to encode.
                 * @return {String}         The encoded date object.
                 */
                function encodeDate(date) {
                    if (Object.prototype.toString.call(date) !== '[object Date]') {
                        date = new Date(date);
                    }

                    return encodeInt(date.getTime());
                }

                /**
                 * Encodes a UUID string.
                 *
                 * The UUID is parsed to a hex string. That hex string is chunked into
                 * 4x32bit numbers. Each of those numbers is encoded to a 6-byte string,
                 * using encodeInt() having padding added, if it doesn't fit in 6 bytes. A
                 * bitmask is prepended as the first byte, to store information like
                 * uppercase/lowercase and braces.
                 *
                 * Data Format:
                 *
                 *   bitmask | data 1 | data 2 | data 3 | data 4
                 *  ---------|--------|--------|--------|--------
                 *      M    | £ÌÈöMX | ´ÊRÜCX | ñ/ÿ<EX | â/ö,M'X
                 *
                 * @function encodeUUID
                 * @private
                 * @param  {String} uuid An unencoded UUID.
                 * @return {String}      An encoded UUID.
                 */
                function encodeUUID(uuid) {
                    var output = '',
                        bitMask = '',
                        bytes = 8,
                        length;

                    // Make sure the passed in UUID is a string and matches the pattern
                    if (Object.prototype.toString.call(uuid) !== '[object String]' || !uuidPattern.test(uuid)) {
                        return encodeStr(uuid);
                    }

                    // This is a feature mask to store if the UUID is upper case,
                    // contains braces, or both
                    bitMask += /^{[^}]*}$/.test(uuid) ? '1' : '0';
                    bitMask += /[A-F]/.test(uuid) ? '1' : '0';

                    // Strip all braces and dashes
                    uuid = uuid.replace(/[{\-}]/g, '');

                    // Divide string into logical chunks
                    length = Math.floor(uuid.length / bytes);

                    // Iterate over each logical string chunk
                    for (var i = 0; i < length; i++) {
                        var hexValue = uuid.substr(i * bytes, bytes),
                            value = parseInt(hexValue, 16),
                            chunk = encodeInt(value);

                        output += zeroPadEncodedInt(chunk, 6 - chunk.length);
                    }

                    // Encode Bit Mask + output
                    return '' + characterSet.charAt(parseInt(bitMask, 2)) + output;
                }

                /**
                 * Encodes a boolean into a string using map.
                 * @function encodeBoolean
                 * @private
                 * @param  {Boolean} b  The boolean value to encode.
                 * @return {String}     The encoded boolean value.
                 */
                function encodeBoolean(b) {
                    if (b === 'true' || b === '1' || b === true || b === 1) {
                        b = 1;
                    } else if (b === 'false' || b === '0' || b === false || b === 0) {
                        b = 0;
                    } else {
                        return;
                    }

                    return encodeInt(b);
                }
            }

            /**
             * Decodes a value using a schema property.
             * @function decodeVal
             * @static
             * @param  {String} val  The value to decode.
             * @param  {Object} prop A schema property.
             * @return          The decoded value.
             */
            function decodeVal(val, prop, v) {
                if (val === '') {
                    return null;
                }

                // If token encoded using old version of character set, make sure use same
                // character set to decode.
                var characterSet = schema.token.vals[v] || schema.token.vals[schema.token.currentVersion];

                // Based on the given schema property type,
                // use the appropriate method to decode the value.
                switch (prop.type) {
                    case schema.type.STRING:
                        val = decodeStr(val);
                        break;
                    case schema.type.DATE:
                        val = decodeDate(val);
                        break;
                    case schema.type.INT:
                        val = decodeInt(val);
                        break;
                    case schema.type.BOOLEAN:
                        val = decodeBoolean(val);
                        break;
                    case schema.type.UUID:
                        val = decodeUUID(val);
                        break;
                    case schema.type.STRING_RAW:
                        // no decoding
                        break;
                    case schema.type.JSON:
                        val = deserializeObject(val);
                        break;
                }

                return val;

                /**
                 *
                 * @param obj
                 * @returns {*}
                 */
                function deserializeObject(str) {
                    var obj;
                    try {
                        var json = utils.base64Decode(str);
                        obj = JSON.parse(json);
                    } catch (e) {
                        return str;
                    }

                    return obj;
                }

                /**
                 * Decodes an integer encoded by encodeInt
                 * @function decodeInt
                 * @private
                 * @param  {String}     chars   The encoded string.
                 * @return {Integer}            The decoded integer.
                 */
                function decodeInt(chars) {
                    var output = 0,
                        sign = 1,
                        multiplier = 1;

                    // Coerce chars to string, and split
                    chars = (chars || '').split('');

                    if (chars.length === 0) {
                        return;
                    }

                    // Strip off minus sign if the encoded data represents a negative int
                    if (chars[0] === map.delimiter.NEGATIVE) {
                        sign = -1;
                        chars.splice(0, 1);
                    }

                    // Convert data from map.base to base 10
                    chars.forEach(function(c) {
                        output += characterSet.indexOf(c) * multiplier;
                        multiplier *= characterSet.length;
                    });

                    // Multiply by -1 if a minus sign was found.
                    return output * sign;
                }

                /**
                 * Decodes a string encoded by encodeStr.
                 * @function decodeStr
                 * @private
                 * @param  {String} chars   The string to be decoded.
                 * @return {String}         The decoded string.
                 */
                function decodeStr(chars) {
                    var i = 0,
                        numChars = chars.length,
                        output = '',
                        lookAheadTo;

                    if (numChars === 0) {
                        return;
                    }

                    while (i < numChars) {
                        switch (chars[i]) {
                            case map.delimiter.DOUBLE_CHAR:
                                // A 2 character look ahead delimiter was found so skip over
                                // it to the value it's delimiting
                                lookAheadTo = 2;
                                i++;
                                break;
                            case map.delimiter.TRIPLE_CHAR:
                                // A 3 character look ahead delimiter was found so skip over
                                // it to the value it's delimiting
                                lookAheadTo = 3;
                                i++;
                                break;
                            default:
                                lookAheadTo = 1;
                                break;
                        }

                        // Decode the 1 char (or more if look ahead delimiter was found)
                        // back to an int, add 32, and convert that char code back into
                        // a string.
                        output += String.fromCharCode(decodeInt(chars.substr(i, lookAheadTo)) + 32);

                        i += lookAheadTo;
                    }

                    return output;
                }

                /**
                 * Decodes a date object encoded by encodeDate
                 * @function decodeDate
                 * @private
                 * @param  {String} data    The encoded data.
                 * @return {Date}           The decoded date.
                 */
                function decodeDate(data) {
                    data = decodeInt(data);

                    if (data) {
                        return new Date(data);
                    }
                }

                /**
                 * Decodes a UUID encoded by encodeuuid
                 *
                 * @function decodeUUID
                 * @private
                 * @param  {String} data The encoded UUID.
                 * @return {String}      THe decoded UUID.
                 */
                function decodeUUID(data) {
                    var bitMask = parseInt(characterSet.indexOf(data[0]), 10),
                        hasBraces = false,
                        isUpperCase = false,
                        output = '',
                        bytes = 6,
                        length,
                        temp = data;

                    if (!isNaN(bitMask)) {
                        // A feature mask was found. Use it to
                        // see if the UUID is lower case or has braces.
                        bitMask = bitMask.toString(2);
                        if (bitMask.length < 2) {
                            bitMask = '0' + bitMask;
                        }

                        hasBraces = bitMask[0] === '1';
                        isUpperCase = bitMask[1] === '1';

                        // Strip the feature mask char
                        data = data.substring(1);
                    }

                    // Divide string into logical chunks
                    length = Math.floor(data.length / bytes);

                    // Iterate over each logical string chunk
                    for (var i = 0; i < length; i++) {
                        var encodedValue = data.substr(i * bytes, bytes),
                            decodedInt = decodeInt(encodedValue),
                            hexValue = decodedInt.toString(16);

                        // Pad string
                        while (hexValue.length < 8) {
                            hexValue = '0' + hexValue;
                        }

                        output += hexValue;
                    }

                    if (isUpperCase) {
                        output = output.toUpperCase();
                    } else {
                        output = output.toLowerCase();
                    }

                    // Add back in braces (if needed) and dashes
                    // in the appropriate places.
                    var uuid = (hasBraces ? '{' : '') +
                        output.substring(0, 8) + '-' +
                        output.substring(8, 12) + '-' +
                        output.substring(12, 16) + '-' +
                        output.substring(16, 20) + '-' +
                        output.substring(20) +
                        (hasBraces ? '}' : '');

                    return uuidPattern.test(uuid) ? uuid : decodeStr(temp);
                }

                /**
                 * Decodes a boolean encoded by encodedBoolean
                 * @function decodeBoolean
                 * @private
                 * @param  {String}     data    The encoded data.
                 * @return {Boolean}            The decoded boolean.
                 */
                function decodeBoolean(data) {
                    var bool = decodeInt(data);

                    return bool === 1;
                }
            }
        }());

    }, {
        "./map": 54,
        "./schema": 55,
        "utils": 26
    }],
    53: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * Encode/decode a token or a guest object
             *
             * @module guest-encoding
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:utils
             * @requires module:map
             * @requires module:schema
             * @requires module:encoding
             * @requires module:compression
             */

            module.exports = {
                encodeToken: encodeToken,
                decodeToken: decodeToken
            };

            var utils = require('../../common/utils'),
                map = require('./map'),
                schema = require('./schema'),
                encoding = require('./encoding'),
                compression = require('./compression');

            var SPLIT_OUT_ID_TOKEN_MINIMUM_VERSION = 5;

            /**
             * Returns true if the new encoding strategy should be used for encoding/decoding for the specified schema version.
             *
             * @param {String} version
             *
             * @return {Boolean}
             *
             * @description
             * Token cookie schema 5 and above will no longer use Base Todd encoding. The schema contains two values: Base64
             * encoded JSON token string, and the raw id_token. `encodeToken()` and `decodeToken()` will manage the splitting
             * and recombining of token and its child `id_token`.
             *
             * https://essjira.disney.com/browse/DIDFE-8714
             */
            function useNewEncodingStrategy(version) {
                return parseInt(version, 10) >= SPLIT_OUT_ID_TOKEN_MINIMUM_VERSION;
            }

            /**
             * Turns a token object into a compressed, serialized, and encoded string.
             * @function encodeToken
             * @static
             * @param  {Object} token       The token object to encode.
             * @param  {String} version   The schema version to use.
             * @return {String}             The compressed, serialized, and encoded string.
             */
            function encodeToken(data, version) {
                var tokenSchema;

                version = version || schema.token.currentVersion;
                var tokenSchema = schema.token.versions[version];

                if (!tokenSchema) {
                    return;
                }

                // DIDFE-8714: new encoding strategy stores id_token outside of the token object so that it's not double base64
                // encoded. additionally, the new encoding strategy does not perform "compression" on the serialized data.
                if (useNewEncodingStrategy(schema.token.currentVersion)) {
                    var payload = {
                        token: utils.clone(data.token),
                        id_token: data.token.id_token
                    };

                    delete payload.token.id_token;
                    delete payload.token.scope;

                    return version + map.delimiter.VERSION + serialize(payload, tokenSchema);
                } else {
                    return compression.compress(version + map.delimiter.VERSION + serialize(data, tokenSchema));
                }
            }

            /**
             * Decodes and returns a token object form a token object encoded using
             * encodeToken.
             * @function decodeToken
             * @static
             * @param  {String} data The data to decode.
             * @return {Object}      The decoded object.
             */
            function decodeToken(data) {
                var databag = data.substring(data.indexOf(map.delimiter.VERSION) + 1);
                var version = data.substring(0, data.indexOf(map.delimiter.VERSION));
                var tokenSchema = schema.token.versions[version];

                if (!tokenSchema) {
                    return;
                }

                // DIDFE-8714: new encoding strategy does not perform "compression".
                if (!useNewEncodingStrategy(version)) {
                    try {
                        databag = compression.decompress(databag);
                    } catch (e) {
                        return;
                    }
                }

                var payload = deserialize(databag, tokenSchema, version);

                if (useNewEncodingStrategy(version)) {
                    // DIDFE-8714: new encoding strategy stores the token and id_token separately.
                    // re-assemble the token object here.
                    var token = payload.token;
                    token.id_token = payload.id_token;
                    return {
                        token: token
                    };
                } else {
                    return payload;
                }
            }

            /**
             * Serializes and encodes an object based on the passed in schema.
             * @function serialize
             * @private
             * @param  {Object} data        The data to serialize.
             * @param  {Object} schema      The schema to use to serialize the data.
             * @return {String}             The serialized data.
             */
            function serialize(data, schema) {
                return schema
                    .map(function(prop) {
                        return encoding.encodeVal(data, prop);
                    })
                    .join(map.delimiter.TOP);
            }

            /**
             * Generates an object from a schema and a serialized object string.
             * @function deserialize
             * @private
             * @param  {String} data    The data to deserialize and decode.
             * @param  {Object} schema  The schema to use to deserialize the data.
             * @return {Object}         The deserialized and decoded object.
             */
            function deserialize(data, schema, version) {
                var output = {};

                data
                    .split('|')
                    .forEach(function(val, i) {
                        utils.set(output, schema[i].key, encoding.decodeVal(val, schema[i], version));
                    });

                return output;
            }
        }());

    }, {
        "../../common/utils": 26,
        "./compression": 51,
        "./encoding": 52,
        "./map": 54,
        "./schema": 55
    }],
    54: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             *
             * @module map
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             */

            /**
             * @name delimiter
             * @static
             * @property    {string} TOP
             * @property    {string} VERSION
             * @property    {string} DOUBLE_CHAR
             * @property    {string} TRIPLE_CHAR
             * @property    {string} NEGATIVE
             */
            var delimiter = {
                TOP: '|',
                VERSION: '=',
                DOUBLE_CHAR: '#',
                TRIPLE_CHAR: '$',
                NEGATIVE: '-'
            };

            module.exports = {
                delimiter: delimiter
            };

        }());

    }, {}],
    55: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * The schema for the various tokens used across the site.
             * @module schema
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             */

            /**
             * @name type
             * @static
             * @property    {string} STRING     Of type string
             * @property    {string} DATE       Of type date
             * @property    {string} INT        Of type int
             * @property    {string} BOOLEAN    Of type boolean
             * @property    {string} UUID       Of type uuid
             * @property    {string} UNKNOWN    An unknown type
             */
            var type = {
                STRING: 'string',
                DATE: 'date',
                INT: 'int',
                BOOLEAN: 'boolean',
                UUID: 'uuid',
                UNKNOWN: 'unknown',
                JSON: 'json',
                STRING_RAW: 'string_raw'
            };

            module.exports = {
                /** @type {string} */
                currentVersion: '0',

                type: type,

                /** @type {object} */
                token: {
                    currentVersion: '5',
                    versions: {
                        '2': [{
                                key: 'token.access_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.swid',
                                type: type.UUID
                            },
                            {
                                key: 'token.refresh_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.ttl',
                                type: type.INT
                            },
                            {
                                key: 'token.refresh_ttl',
                                type: type.INT
                            },
                            {
                                key: 'token.sso',
                                type: type.UUID
                            },
                            {
                                key: 'token.created',
                                type: type.STRING
                            },
                            {
                                key: 'token.lastChecked',
                                type: type.STRING
                            },
                            {
                                key: 'token.expires',
                                type: type.STRING
                            },
                            {
                                key: 'token.refresh_expires',
                                type: type.STRING
                            },
                            {
                                key: 'token.authenticator',
                                type: type.STRING
                            },
                            {
                                key: 'token.blue_cookie',
                                type: type.STRING
                            },
                            {
                                key: 'token.high_trust_expires_in',
                                type: type.INT
                            },
                            {
                                key: 'token.initial_grant_in_chain_time',
                                type: type.INT
                            }
                        ],
                        '3': [{
                                key: 'token.access_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.swid',
                                type: type.UUID
                            },
                            {
                                key: 'token.refresh_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.ttl',
                                type: type.INT
                            },
                            {
                                key: 'token.refresh_ttl',
                                type: type.INT
                            },
                            {
                                key: 'token.sso',
                                type: type.UUID
                            },
                            {
                                key: 'token.created',
                                type: type.STRING
                            },
                            {
                                key: 'token.lastChecked',
                                type: type.STRING
                            },
                            {
                                key: 'token.expires',
                                type: type.STRING
                            },
                            {
                                key: 'token.refresh_expires',
                                type: type.STRING
                            },
                            {
                                key: 'token.authenticator',
                                type: type.STRING
                            },
                            {
                                key: 'token.blue_cookie',
                                type: type.STRING
                            },
                            {
                                key: 'token.high_trust_expires_in',
                                type: type.INT
                            },
                            {
                                key: 'token.initial_grant_in_chain_time',
                                type: type.INT
                            },
                            {
                                key: 'token.id_token',
                                type: type.STRING
                            }
                        ],
                        '4': [{
                                key: 'token.access_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.swid',
                                type: type.UUID
                            },
                            {
                                key: 'token.refresh_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.ttl',
                                type: type.INT
                            },
                            {
                                key: 'token.refresh_ttl',
                                type: type.INT
                            },
                            {
                                key: 'token.sso',
                                type: type.UUID
                            },
                            {
                                key: 'token.created',
                                type: type.STRING
                            },
                            {
                                key: 'token.lastChecked',
                                type: type.STRING
                            },
                            {
                                key: 'token.expires',
                                type: type.STRING
                            },
                            {
                                key: 'token.refresh_expires',
                                type: type.STRING
                            },
                            {
                                key: 'token.authenticator',
                                type: type.STRING
                            },
                            {
                                key: 'token.blue_cookie',
                                type: type.STRING
                            },
                            {
                                key: 'token.high_trust_expires_in',
                                type: type.INT
                            },
                            {
                                key: 'token.initial_grant_in_chain_time',
                                type: type.INT
                            },
                            {
                                key: 'token.id_token',
                                type: type.STRING
                            },
                            {
                                key: 'token.sessionTransferKey',
                                type: type.STRING
                            }
                        ],
                        '5': [{
                                key: 'token',
                                type: type.JSON
                            },
                            {
                                key: 'id_token',
                                type: type.STRING_RAW
                            }
                        ]
                    },
                    vals: {
                        //'0': ' !"%&\'()*+./<>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{}~',
                        '1': ' !"\'()+./?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~',
                        '2': ' !"\'()+./?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~',
                        '3': ' !"\'()+./?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~',
                        '4': ' !"\'()+./?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~',
                        '5': ' !"\'()+./?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{}~'
                    }
                }
            };
        }());

    }, {}],
    56: [function(require, module, exports) {
        (function() {
            'use strict';

            /**
             * Secure client session adapter
             * @module secure-session-adapter
             * @author Disney ID UI Team <DTSS.UI.Team@disney.com>
             * @requires module:utils
             * @requires module:guest-encoding
             * @requires module:event-emmiter
             * @requires module:q
             * @requires module:ageband-gating
             * @requires module:logger
             * @requires module:trust-state-constants
             */

            var utils = require('../../common/utils');
            var encoding = require('../guest-encoding');
            var emitter = require('../../common/event-emitter');
            var Q = require('../../../../assets/common/js/q');
            var ageBandGating = require('../ageband-gating');
            var envHelper = require('../../common/environment-helper');
            var messages = require('messages');
            var metrics = require('metrics');
            var logger = require('logger');
            var cookie = require('cookie');
            var tokenCookieName;
            var cookieDomain;
            var identifierCookieName;
            var dateOfBirthCookieName;
            var authenticatorCookieName;
            var apiKeyCookieName;
            var clientId;

            var trustStateConst = require('../../common/trust-state/constants.js');
            var tld = utils.getTLD('' + window.location.hostname);

            module.exports = emitter.emittable(Adapter);

            /**
             * Secure client session adapter
             * @constructor Adapter
             * @memberof secure-session-adapter
             */
            function Adapter() {}

            /*

             - Need to logout if SWID cookie doesn't match session.

             */

            /**
             * Initializes the secure client session adapter
             * The secure client session adapter will, when initialized,
             * subscribe to a set of events published by the session module that get,
             * set, and clear session data secure cookies.
             *
             * @function init
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param {object} params
             */
            Adapter.prototype.init = function(params) {
                logger.log('Adapter#init');
                var self = this;
                clientId = params.clientId;
                tokenCookieName = params.clientId + '.token';
                cookieDomain = params.cookieDomain;
                identifierCookieName = params.clientId + '.idn';
                dateOfBirthCookieName = params.clientId + ageBandGating.AGEBAND_DATA_SUFFIX;
                authenticatorCookieName = params.clientId + '.auth';
                apiKeyCookieName = params.clientId + '.api';
                self.watchSessionMismatches = true;

                var token = getSessionData();

                if (token) {
                    self.emit('session.found', {
                        token: token
                    });
                } else {
                    self.emit('session.notfound', {
                        navy: cookie.read('oidNAVY')
                    });
                }
            };

            /**
             * Read session data from storage.
             *
             * @function readSessionData
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param {mixed} data (unused)
             * @param {Promise} dfd
             * @return {Promise}
             **/
            Adapter.prototype.readSessionData = function(data, dfd) {
                logger.log('Adapter#readSessionData');
                var result = {};
                if (utils.get(data, 'clientIds.length') > 0) {
                    result.tokens = data.clientIds
                        .reduceNative(function(result, id) {
                            var sessionData = getSessionData(id + '.token');
                            if (sessionData) {
                                result[id] = sessionData;
                            }
                            return result;
                        }, {});
                } else {
                    result.token = getSessionData();
                }

                dfd = dfd || Q.defer();
                if (result.token !== null) {
                    dfd.resolve(result);
                } else {
                    dfd.reject();
                }

                return dfd.promise;
            };

            /**
             * Writes session data to a guest and token cookie
             * @function writeSessionData
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {Object} data
             * @param  {Object} data.guest
             * @param  {string} data.token
             * @param {Deferred} dfd
             */
            Adapter.prototype.writeSessionData = function(data, dfd) {
                logger.log('Adapter#writeSessionData');
                var cookieDate;
                dfd = dfd || Q.defer();

                // Guest and Token cookies expire 33 years in the future.
                cookieDate = new Date();
                cookieDate.setFullYear(cookieDate.getFullYear() + 33);

                if (typeof data.token === 'object') {
                    var originalValue;
                    var actualValue;
                    var newValue;

                    data.token.blue_cookie = null;
                    newValue = encoding.encodeToken({
                        token: data.token
                    });
                    originalValue = cookie.read(tokenCookieName) || '';
                    cookie.write(tokenCookieName, newValue, cookieDomain, '/', cookieDate, true);

                    // validate write
                    try {
                        actualValue = cookie.read(tokenCookieName) || '';
                        if (actualValue !== newValue) {
                            // token cookie write failed
                            metrics.error('log:cookie:write', {
                                swid: data.token.swid,
                                info: {
                                    o_eq_a: '' + (originalValue == actualValue),
                                    o_eq_n: '' + (originalValue == newValue),
                                    o_size: '' + originalValue.length,
                                    n_size: '' + newValue.length,
                                    a_size: '' + actualValue.length,
                                    cookieLength: '' + document.cookie.length
                                }
                            });
                        }
                    } catch (e) {}
                }

                dfd.resolve(data.token);
                return dfd.promise;
            };

            /**
             *
             * @function deleteSessionData
             * @memberof! secure-session-adapter.Adapter.prototype
             * @return {Promise}
             */
            Adapter.prototype.deleteSessionData = function() {
                logger.log('Adapter#deleteSessionData');
                var dfd = Q.defer();
                var envSuffix = envHelper.getClientIdSuffix(clientId);

                //TODO: Clean this up so the ESPN stuff is not duplicated by the below code
                utils.getCookieDomains().forEach(function(cookieDomain) {
                    logger.debug('deleting token/auth/idn cookies from: ' + cookieDomain);
                    cookie.remove(tokenCookieName, cookieDomain, '/');
                    cookie.remove(authenticatorCookieName, cookieDomain, '/');
                    cookie.remove(identifierCookieName, cookieDomain, '/');
                });

                // Delete the NAVY cookie on logout
                cookie.remove('oidNAVY', '.' + tld, '/');

                if (utils.isEspnClientId(clientId)) {
                    var domains = [cookieDomain, '.go.com', '.espn.go.com', '.' + tld];

                    utils.getEspnWhitelist().forEach(function(name) {
                        var cookieName = name + '-' + envSuffix;

                        domains.forEach(function(value) {
                            cookie.remove(cookieName + '.token', value, '/');
                            cookie.remove(cookieName + '.auth', value, '/');
                            cookie.remove(cookieName + '.idn', value, '/');
                        });
                    });
                }

                // DIDFE-9238 - If a cookie delete fails because the domain does not contain a preceding period,
                // retry the delete without specifying a domain. 
                if (cookie.read(clientId + '.token')) {
                    var sessionData;

                    try {
                        sessionData = getSessionData();
                    } catch (e) {}

                    utils.deleteCookie(clientId + '.token', null, '/');
                    utils.deleteCookie(clientId + '.auth', null, '/');
                    utils.deleteCookie(clientId + '.idn', null, '/');

                    metrics.error('log:cookie:delete', {
                        swid: (sessionData || {}).swid || '',
                        info: {
                            cookieLength: '' + document.cookie.length,
                            cookieDomain: '' + cookieDomain
                        }
                    });
                }

                // Immediately resolve and return a promise to maintain consistency with
                // other session adapters that may operate asynchronously and may
                // operate on and return legit promises.
                dfd.resolve();

                return dfd.promise;
            };

            /**
             * Read identifier cookie.
             *
             * @function writeIdentifier
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param {string} identifier
             * @param {Promise} dfd
             * @return {Promise}
             **/
            Adapter.prototype.writeIdentifier = function(identifier, dfd) {
                logger.log('Adapter#writeIdentifier');
                dfd = dfd || Q.defer();

                cookie.write(identifierCookieName, identifier, cookieDomain, '/', 0, true);

                dfd.resolve();

                return dfd.promise;
            };

            /**
             * Read identifier cookie.
             *
             * @function readIdentifier
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param {Promise} dfd
             * @return {Promise}
             **/
            Adapter.prototype.readIdentifier = function(dfd) {
                logger.log('Adapter#readIdentifier');
                dfd = dfd || Q.defer();

                dfd.resolve(cookie.read(identifierCookieName));

                return dfd.promise;
            };

            /**
             * Writes the date of birth cookie
             *
             * @function writeDateOfBirth
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {Object} data
             * @param  {Object} dfd
             * @return {Promise}
             */
            Adapter.prototype.writeDateOfBirth = function(data, dfd) {
                logger.log('Adapter#writeDateOfBirth');
                var cookieDate;

                cookieDate = new Date(Date.now() + ageBandGating.AGEBAND_TIMEOUT);

                dfd = dfd || Q.defer();

                cookie.write(dateOfBirthCookieName, cookieDate.toISOString(), cookieDomain, '/', cookieDate, false);

                dfd.resolve();

                return dfd.promise;
            };

            /**
             * Reads the date of birth cookie
             *
             * @function readDateOfBirth
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {Void} notUsed
             * @param  {Object} dfd
             * @return {Promise}
             */
            Adapter.prototype.readDateOfBirth = function(notUsed, dfd) {
                logger.log('Adapter#readDateOfBirth');
                var cookieVal = cookie.read(dateOfBirthCookieName);

                dfd = dfd || Q.defer();

                if (cookieVal) {
                    dfd.resolve(cookieVal);
                } else {
                    dfd.reject(cookieVal);
                }

                return dfd.promise;
            };

            /**
             * Write api key cookie
             *
             * @function writeApiKey
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {String} key
             * @param  {Promise} dfd
             * @return {Promise}
             */
            Adapter.prototype.writeApiKey = function(key, dfd) {
                logger.log('Adapter#writeApiKey');
                dfd = dfd || Q.defer();
                var cookieDate;

                // api key cookies expire 1 day in the future.
                cookieDate = new Date();
                cookieDate.setDate(cookieDate.getDate() + 1);

                if (key) {
                    cookie.write(apiKeyCookieName, key, cookieDomain, '/', cookieDate, false);
                }

                dfd.resolve();

                return dfd.promise;
            };

            /**
             * Reads the api key cookie
             *
             * @function readApiKey
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {Void} notUsed
             * @param  {Object} dfd
             * @return {Promise}
             */
            Adapter.prototype.readApiKey = function(notUsed, dfd) {
                logger.log('Adapter#readApiKey');
                dfd = dfd || Q.defer();

                dfd.resolve(cookie.read(apiKeyCookieName));
                return dfd.promise;
            };

            /**
             * Writes the deviceId cookie
             *
             * @function writeDeviceId
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {Void} notUsed
             * @param  {Object} dfd
             * @return {Promise}
             */
            Adapter.prototype.writeDeviceId = function(params, dfd) {
                dfd = dfd || Q.defer();

                // Guard for edge cases, functions as a no-op.
                if (!params || !params.loginValue || !params.deviceId) {
                    dfd.resolve();
                    return dfd.promise;
                }

                var cookieKey = 'device_' + utils.crc32(params.loginValue).toString(16);
                var cookieValue = params.deviceId;
                var cookieDate = new Date();
                cookieDate.setDate(cookieDate.getDate() + 1);

                cookie.write(cookieKey, cookieValue, cookieDomain, '/', cookieDate, true);
                dfd.resolve();
                return dfd.promise;
            };

            /**
             * Reads the deviceId cookie
             *
             * @function readDeviceId
             * @memberof! secure-session-adapter.Adapter.prototype
             * @param  {Void} notUsed
             * @param  {Object} dfd
             * @return {Promise}
             */
            Adapter.prototype.readDeviceId = function(params, dfd) {
                dfd = dfd || Q.defer();

                var cookieKey = 'device_' + utils.crc32(params.loginValue).toString(16);

                dfd.resolve(cookie.read(cookieKey));

                return dfd.promise;
            };

            /**
             * Get session data from the token cookie.
             *
             * @function getSessionData
             * @private
             * @memberof! secure-session-adapter.Adapter
             * @return {mixed} Returns object on success, and null on failure
             **/
            function getSessionData(cookieName) {
                logger.log('Adapter#getSessionData');
                var encodedTokenData = cookie.read(cookieName || tokenCookieName);
                if (encodedTokenData === null) {
                    // Token cookie was not found for the current clientId.
                    // Publish a sessionNotFound event so the session module
                    // knows to attempt a legacy authentication.
                    return null;
                }

                // Token cookie was found. We'll attempt to return both the
                // guest data and the token data. If the session data cookie
                // is not present, there was probably too much data in the
                // profile for a cookie and we'll need to fetch it from the GC.
                var decodedTokenData = encoding.decodeToken(encodedTokenData);
                if (!decodedTokenData) {
                    return null;
                }

                return decodedTokenData.token;
            }

            /**
             * Get `swid` from cookie
             *
             * @function getSwidFromCookie
             * @private
             * @returns {*}
             */
            function getSwidFromCookie() {
                logger.log('Adapter#getSwidFromCookie');

                var swid = utils.getCookie(swidTokenCookieName);

                if (swid === null) {
                    return null;
                }

                return swid;
            }
        }());

    }, {
        "../../../../assets/common/js/q": 1,
        "../../common/environment-helper": 7,
        "../../common/event-emitter": 9,
        "../../common/trust-state/constants.js": 20,
        "../../common/utils": 26,
        "../ageband-gating": 50,
        "../guest-encoding": 53,
        "cookie": 6,
        "logger": 10,
        "messages": 11,
        "metrics": 46
    }],
    57: [function(require, module, exports) {
        'use strict';

        require('../components/common/polyfills/console');

        var SecureClientSesionAdapter = require('../components/outer/session-old/secure-client-session-adapter');
        var utils = require('../components/common/utils');
        var PostMessageTransport = require('../components/common/postmessage-transport');
        var PostMessageFrames = require('../components/common/postmessage-transport/frames');
        var messages = require('messages');
        var cookie = require('cookie');
        var PMT;
        var sessionAdapter;
        var queryParams = utils.getQueryStringParams();
        var outboundMessagePrefix = '';
        var cookieDomains = utils.getCookieDomains().concat(['go.com']);

        var OBO_TOKEN_COOKIE_NAME = 'obo';
        var OBO_SWID_COOKIE_NAME = 'swid';

        /**
         * init
         */
        function init() {
            var frameName = PostMessageFrames.RESPONDER;

            PMT = new PostMessageTransport(frameName);

            // @TODO: Cleanup. This should really be it's own component. Attaching it to instance,
            // to be cleaned up later.
            PMT.frames = PostMessageFrames;

            PMT.registerParent(PMT.frames.CLIENT, queryParams.postMessageOrigin, {
                enforceMatchingApexDomain: true
            });

            PMT.on('responder.session.read', function(data, dfd) {
                sessionAdapter.readSessionData(data, dfd);
            });

            PMT.on('responder.session.write', function(guest, dfd) {
                sessionAdapter.writeSessionData(guest, dfd);
            });

            PMT.on('responder.session.delete', function(notUsed, dfd) {
                sessionAdapter.deleteSessionData();
                dfd.resolve();
            });

            PMT.on('responder.guest.identifier.write', function(identifier, dfd) {
                sessionAdapter.writeIdentifier(identifier, dfd);
            });

            PMT.on('responder.guest.identifier.read', function(identifier, dfd) {
                sessionAdapter.readIdentifier(dfd);
            });

            PMT.on('responder.dateOfBirth.write', function(data, dfd) {
                sessionAdapter.writeDateOfBirth(data, dfd);
            });

            PMT.on('responder.dateOfBirth.read', function(notUsed, dfd) {
                sessionAdapter.readDateOfBirth(null, dfd);
            });

            PMT.on('responder.apikey.write', function(key, dfd) {
                sessionAdapter.writeApiKey(key, dfd);
            });

            PMT.on('responder.apikey.read', function(notUsed, dfd) {
                sessionAdapter.readApiKey(notUsed, dfd);
            });

            PMT.on('responder.deviceId.write', function(params, dfd) {
                sessionAdapter.writeDeviceId(params, dfd);
            });

            PMT.on('responder.deviceId.read', function(params, dfd) {
                sessionAdapter.readDeviceId(params, dfd);
            });

            PMT.on('responder.obo.read', function(notUsed, dfd) {
                dfd.resolve({
                    token: cookie.read(OBO_TOKEN_COOKIE_NAME),
                    swid: cookie.read(OBO_SWID_COOKIE_NAME)
                });
            });

            PMT.on('responder.obo.delete', function(notUsed, dfd) {
                cookieDomains.forEach(function(domain) {
                    cookie.remove(OBO_TOKEN_COOKIE_NAME, '.' + domain, '/');
                    cookie.remove(OBO_SWID_COOKIE_NAME, '.' + domain, '/');
                });
                dfd.resolve();
            });

            messages.subscribe('metrics.log.send', function(data) {
                PMT.send(PMT.frames.CLIENT, 'metrics.log.send', data);
            });

            PMT.init();
            initSessionAdapter();
        }

        /**
         * [initSessionAdapter description]
         */
        function initSessionAdapter() {
            sessionAdapter = new SecureClientSesionAdapter();

            sessionAdapter.on('session.found', handleSessionFound);
            sessionAdapter.on('session.notfound', handleSessionNotFound);

            sessionAdapter.init({
                cookieDomain: queryParams.cookieDomain,
                clientId: queryParams.clientId,
                responderPage: queryParams.responderPage
            });

            // we can only get an accurate cookie length from the responder page
            // since secure cookies are not visible from HTTP outer. Periodically
            // update the outer's cache of cookie length.
            (function check() {
                PMT.send(PMT.frames.CLIENT, 'cookielength', document.cookie.length);
                setTimeout(check, 1000 * 10);
            }());
        }

        /**
         * [handleSessionFound description]
         */
        function handleSessionFound(data) {
            PMT.send(PMT.frames.CLIENT, outboundMessagePrefix + 'session.found', data);
        }

        /**
         * [handleSessionNotFound description]
         */
        function handleSessionNotFound(data) {
            PMT.send(PMT.frames.CLIENT, outboundMessagePrefix + 'session.notfound', data);
        }

        init();

    }, {
        "../components/common/polyfills/console": 12,
        "../components/common/postmessage-transport": 14,
        "../components/common/postmessage-transport/frames": 13,
        "../components/common/utils": 26,
        "../components/outer/session-old/secure-client-session-adapter": 56,
        "cookie": 6,
        "messages": 11
    }],
    58: [function(require, module, exports) {
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
    "session.apiKey": [function(require, module, exports) {

        'use strict';

        var patch = require('./patch');

        module.exports = {
            read: patch('session.apikey.read'),
            write: patch('session.apikey.write')
        };

    }, {
        "./patch": 41
    }],
    "session.s2": [function(require, module, exports) {

        'use strict'

        var patch = require('./patch');

        module.exports = {
            write: patch('s2cookie.write'),
            delete: patch('s2cookie.delete')
        }

    }, {
        "./patch": 41
    }],
    "session.swid": [function(require, module, exports) {

        'use strict'

        var patch = require('./patch');

        module.exports = {
            read: patch('swid.read')
        };

    }, {
        "./patch": 41
    }],
    "session.token": [function(require, module, exports) {

        'use strict'

        var patch = require('./patch');
        var tokenReadAll = require('../../common/session/readAll');

        module.exports = {
            read: patch('token.read'),
            write: patch('token.write'),
            readAll: tokenReadAll,
            invalidateTokens: patch('session.invalidateTokens')
        };

    }, {
        "../../common/session/readAll": 18,
        "./patch": 41
    }],
    "session.unid": [function(require, module, exports) {
        var patch = require('./patch');

        module.exports = {
            read: patch('unid.read')
        };

    }, {
        "./patch": 41
    }],
    "session": [function(require, module, exports) {
        'use strict';

        var messages = require('messages');
        var cookie = require('cookie');
        var logger = require('logger');
        var Q = require('q');
        var patch = require('./patch');

        module.exports = {
            guest: {
                read: patch('guest.read'),
                write: handleGuestWrite
            },
            token: require('./token'),
            trustState: {
                write: patch('trustState.write'),
                read: patch('trustState.read'),
                readHighestEspnTs: patch('trustState.readHighestEspnTs'),
                delete: patch('trustState.delete')
            },
            s2: require('./s2'),
            swid: require('./swid'),
            unid: require('./unid'),
            isLoggedIn: patch('session.isloggedin'),
            dob: {
                read: patch('session.dateOfBirth.read'),
                write: patch('session.dateOfBirth.write')
            },
            apiKey: require('./api-key'),
            deleteAll: patch('session.delete'),
            navy: {
                read: patch('navy.read')
            },
            blueCookie: {
                delete: handleBlueDelete
            },
            deviceId: {
                read: patch('session.deviceId.read'),
                write: patch('session.deviceId.write')
            },
            invalidateTokens: patch('session.invalidateTokens')
        };

        /**
         * Writes guest data
         *
         * @param {object} data
         * @param {bool} writeToken
         * @returns {promise}
         */
        function handleGuestWrite(data, writeToken) {
            var dfd = Q.defer();
            var tokenDfd = Q.defer();
            var guestdfd = Q.defer();

            if (writeToken) {
                messages.publish('token.write', data, tokenDfd);
                tokenDfd.promise.then(function() {
                    messages.publish('guest.write', data, dfd);
                }, function(e) {
                    dfd.reject(e);
                });
            } else {
                messages.publish('guest.write', data, dfd);
            }

            return dfd.promise;
        }

        /*
         * Deletes the BLUE cookie
         */
        function handleBlueDelete() {
            logger.log('inner/session#handleBlueDelete');
            cookie.remove('BLUE', 'go.com', '/');

            return Q.resolve();
        }

    }, {
        "./api-key": "session.apiKey",
        "./patch": 41,
        "./s2": "session.s2",
        "./swid": "session.swid",
        "./token": "session.token",
        "./unid": "session.unid",
        "cookie": 6,
        "logger": 10,
        "messages": 11,
        "q": 1
    }]
}, {}, [57, "session", "session.apiKey", "session.s2", "session.token", "session.swid", "session.unid"]);