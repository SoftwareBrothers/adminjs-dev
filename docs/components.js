(function (React, PropTypes, reactRouterDom, styled, axios, reactRedux, redux) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof2(obj) {
      if (typeof Symbol === "function" && _typeof_1(Symbol.iterator) === "symbol") {
        _typeof2 = function _typeof2(obj) {
          return _typeof_1(obj);
        };
      } else {
        _typeof2 = function _typeof2(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof_1(obj);
        };
      }

      return _typeof2(obj);
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var pathsType = PropTypes.shape({
    loginPath: PropTypes.string.isRequired,
    rootPath: PropTypes.string.isRequired,
    logoutPath: PropTypes.string.isRequired
  });
  var sessionType = PropTypes.shape({
    email: PropTypes.string.isRequired
  });
  var brandingType = PropTypes.shape({
    logo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    softwareBrothers: PropTypes.bool.isRequired
  });
  var propertyType = PropTypes.shape({
    isId: PropTypes.bool["default"],
    isSortable: PropTypes.bool.isRequired,
    isTitle: PropTypes.bool.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    position: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    availableValues: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string
    })),
    reference: PropTypes.oneOfType([PropTypes.string])
  });
  var simplifiedPropertyType = PropTypes.shape({
    isId: PropTypes.bool,
    isSortable: PropTypes.bool,
    isTitle: PropTypes.bool,
    isVisible: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    position: PropTypes.number,
    type: PropTypes.string,
    availableValues: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string
    })),
    reference: PropTypes.oneOfType([PropTypes.string])
  });
  var actionType = PropTypes.shape({
    actionType: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    icon: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  });
  var resourceParentType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  });
  var resourceType = PropTypes.shape({
    editProperties: PropTypes.arrayOf(propertyType).isRequired,
    filterProperties: PropTypes.arrayOf(propertyType).isRequired,
    href: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    listProperties: PropTypes.arrayOf(propertyType).isRequired,
    name: PropTypes.string.isRequired,
    parent: resourceParentType.isRequired,
    recordActions: PropTypes.arrayOf(actionType).isRequired,
    resourceActions: PropTypes.arrayOf(actionType).isRequired,
    showProperties: PropTypes.arrayOf(propertyType).isRequired,
    titleProperty: propertyType.isRequired
  });
  var resourceParentWithResourcesType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(resourceType).isRequired
  });
  var recordType = PropTypes.shape({
    params: PropTypes.object.isRequired,
    populated: PropTypes.object,
    errors: PropTypes.object,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  });
  var locationType = PropTypes.shape({
    pathname: PropTypes.string.isRequired
  });
  var historyType = PropTypes.shape({
    push: PropTypes.func.isRequired
  });
  var matchType = PropTypes.shape({
    params: PropTypes.shape({
      resourceId: PropTypes.string,
      recordId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      actionName: PropTypes.string
    })
  });
  var childrenType = PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.number])), PropTypes.string, PropTypes.number]);
  var noticeType = PropTypes.shape({
    message: PropTypes.string,
    progress: PropTypes.number,
    type: PropTypes.oneOf(['success', 'error'])
  });

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var taggedTemplateLiteral = _taggedTemplateLiteral;

  // sorted alphabetically
  var colors = {
    defaultText: '#111114',
    lightText: '#a9aabc',
    lightBck: '#F8F8FA',
    superLightBack: '#F1F1F5',
    border: '#eeeeef',
    borderOnDark: '#4E5779',
    bck: '#f7f7Fa',
    darkBck: '#303b62',
    superDarkBck: '#192035',
    love: '#e6282b',
    primary: '#718af4',
    primaryHover: '#545B8C',
    success: '#21C197',
    lightSuccess: 'rgba(62,198,194,0.15)',
    error: '#F0616F',
    lightError: 'rgba(240,97,111,0.15)',
    warning: '#FF9F89'
  };
  var sizes = {
    navbarHeight: '64px',
    sidebarWidth: '300px',
    sidebarMobileWidth: '98px',
    paddingLayout: '30px',
    padding: '15px',
    paddingMin: '5px'
  };
  var fonts = {
    base: '14px',
    medium: '12px',
    min: '11px',
    header: '32px'
  };

  function _templateObject() {
    var data = taggedTemplateLiteral(["\n  font-size: ", ";\n  border-radius: 0;\n  border-color: ", ";\n  background: #fff;\n  height: 32px;\n  padding: ", " ", ";\n  color: ", ";\n  &:hover {\n    border-color: ", ";\n  }\n  &.is-primary {\n    background-color: ", ";\n    color: #ffffff;\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  &.is-text {\n    background-color: transparent;\n    color: ", ";\n    border: transparent;\n  }\n\n  &.in-dropdown {\n    color: ", ";\n    font-size: ", ";\n    width: 100%;\n    text-align: start;\n    justify-content: flex-start;\n    height: 40px;\n    padding-left: 40px;\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var StyledButton = styled(reactRouterDom.Link).attrs(function (_ref) {
    var primary = _ref.primary;
    return {
      className: "button".concat(primary ? ' is-primary' : '')
    };
  })(_templateObject(), fonts.medium, colors.primary, sizes.paddingMin, sizes.padding, colors.primary, colors.primaryHover, colors.primary, colors.primaryHover, colors.primary, colors.defaultText, fonts.base);

  var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;

          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof_1(value) === "object" && hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return Promise.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });

  var regenerator = runtime_1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var asyncToGenerator = _asyncToGenerator;

  var ApiClient =
  /*#__PURE__*/
  function () {
    function ApiClient() {
      classCallCheck(this, ApiClient);

      var baseURL = [window.location.origin, window.REDUX_STATE.paths.rootPath].join('');
      this.client = axios.create({
        baseURL: baseURL
      });
    }

    createClass(ApiClient, [{
      key: "getRecords",
      value: function () {
        var _getRecords = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee(_ref) {
          var resourceId, query;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  resourceId = _ref.resourceId, query = _ref.query;
                  return _context.abrupt("return", this.client.get("/api/resources/".concat(resourceId), {
                    params: query
                  }));

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getRecords(_x) {
          return _getRecords.apply(this, arguments);
        }

        return getRecords;
      }()
    }, {
      key: "searchRecords",
      value: function () {
        var _searchRecords = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee2(_ref2) {
          var resourceId, query, q, response;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  resourceId = _ref2.resourceId, query = _ref2.query;
                  q = encodeURIComponent(query);
                  _context2.next = 4;
                  return this.client.get("/api/resources/".concat(resourceId, "/search/").concat(q));

                case 4:
                  response = _context2.sent;
                  return _context2.abrupt("return", response.data.records);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function searchRecords(_x2) {
          return _searchRecords.apply(this, arguments);
        }

        return searchRecords;
      }()
    }, {
      key: "resourceAction",
      value: function () {
        var _resourceAction = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee3(_ref3) {
          var resourceId, actionName, payload, method;
          return regenerator.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  resourceId = _ref3.resourceId, actionName = _ref3.actionName, payload = _ref3.payload, method = _ref3.method;
                  return _context3.abrupt("return", this.client.request({
                    url: "/api/resources/".concat(resourceId, "/actions/").concat(actionName),
                    method: method || payload ? 'POST' : 'GET',
                    data: payload
                  }));

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function resourceAction(_x3) {
          return _resourceAction.apply(this, arguments);
        }

        return resourceAction;
      }()
    }, {
      key: "recordAction",
      value: function () {
        var _recordAction = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee4(_ref4) {
          var resourceId, recordId, actionName, payload, method;
          return regenerator.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  resourceId = _ref4.resourceId, recordId = _ref4.recordId, actionName = _ref4.actionName, payload = _ref4.payload, method = _ref4.method;
                  return _context4.abrupt("return", this.client.request({
                    url: "/api/resources/".concat(resourceId, "/records/").concat(recordId, "/").concat(actionName),
                    method: method || payload ? 'POST' : 'GET',
                    data: payload
                  }));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function recordAction(_x4) {
          return _recordAction.apply(this, arguments);
        }

        return recordAction;
      }()
    }, {
      key: "getDashboard",
      value: function () {
        var _getDashboard = asyncToGenerator(
        /*#__PURE__*/
        regenerator.mark(function _callee5() {
          var _ref5,
              _ref5$params,
              params,
              _args5 = arguments;

          return regenerator.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _ref5 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref5$params = _ref5.params, params = _ref5$params === void 0 ? {} : _ref5$params;
                  return _context5.abrupt("return", this.client.get('/api/dashboard', {
                    params: params
                  }));

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function getDashboard() {
          return _getDashboard.apply(this, arguments);
        }

        return getDashboard;
      }()
    }]);

    return ApiClient;
  }();

  /**
   * Collection of helper methods available in the views
   */
  var ViewHelpers =
  /*#__PURE__*/
  function () {
    function ViewHelpers() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          options = _ref.options;

      classCallCheck(this, ViewHelpers);

      var opts = options || window && window.REDUX_STATE.paths; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

      this.options = opts;
    }
    /**
     * To each related path adds rootPath passed by the user, as well as a query string
     * @param  {String[]} paths   list of parts of the url
     * @return {String}       path
     */


    createClass(ViewHelpers, [{
      key: "urlBuilder",
      value: function urlBuilder(paths) {
        var rootPath = this.options.rootPath;
        return "".concat(rootPath, "/").concat(paths.join('/'));
      }
      /**
       * Returns login URL
       * @return {String}
       */

    }, {
      key: "loginUrl",
      value: function loginUrl() {
        return this.options.loginPath;
      }
      /**
       * Returns logout URL
       * @return {String}
       */

    }, {
      key: "logoutUrl",
      value: function logoutUrl() {
        return this.options.logoutPath;
      }
      /**
       * Returns URL for the dashboard
       * @return {String}
       */

    }, {
      key: "dashboardUrl",
      value: function dashboardUrl() {
        return this.options.rootPath;
      }
      /**
       * Returns URL for the list view for a given resource
       * @param {BaseResource} resource
       * @param {Object} [query]
       * @return {String}
       */

    }, {
      key: "listUrl",
      value: function listUrl(_ref2) {
        var resourceId = _ref2.resourceId;
        return this.urlBuilder(['resources', resourceId]);
      }
    }, {
      key: "resourceActionUrl",
      value: function resourceActionUrl(_ref3) {
        var resourceId = _ref3.resourceId,
            actionName = _ref3.actionName;
        return this.urlBuilder(['resources', resourceId, 'actions', actionName]);
      }
    }, {
      key: "recordActionUrl",
      value: function recordActionUrl(_ref4) {
        var resourceId = _ref4.resourceId,
            recordId = _ref4.recordId,
            actionName = _ref4.actionName;
        return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName]);
      }
      /**
       * Returns absolute path to a given asset
       * @param  {String} asset
       * @return {String}
       */

    }, {
      key: "assetPath",
      value: function assetPath(asset) {
        return this.urlBuilder(['frontend', 'assets', asset]);
      }
    }]);

    return ViewHelpers;
  }();

  var viewHelpers = ViewHelpers;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  var addNotice = function addNotice() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      type: 'ADD_NOTICE',
      data: {
        message: data.message,
        id: data.id || Math.random().toString(36).substr(2, 9),
        type: data.type || 'success',
        progress: 0
      }
    };
  };

  var resourcesReducer = function resourcesReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'RESOURCES_INITIALIZE':
        return action.data;

      default:
        return state;
    }
  };

  var brandingReducer = function brandingReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'BRANDING_INITIALIZE':
        return action.data;

      default:
        return state;
    }
  };

  var pathsReducer = function pathsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'PATHS_INITIALIZE':
        return action.data;

      default:
        return state;
    }
  };

  var dashboardReducer = function dashboardReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'DASHBOARD_INITIALIZE':
        return action.data;

      default:
        return state;
    }
  };

  var sessionReducer = function sessionReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'SESSION_INITIALIZE':
        return action.data;

      default:
        return state;
    }
  };

  var noticesReducer = function noticesReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'ADD_NOTICE':
        {
          var notices = toConsumableArray(state);

          notices.push(action.data);
          return notices;
        }

      case 'DROP_NOTICE':
        {
          return state.filter(function (notice) {
            return notice.id !== action.data.noticeId;
          });
        }

      case 'SET_NOTICE_PROGRESS':
        {
          return state.map(function (notice) {
            return objectSpread({}, notice, {
              progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
            });
          });
        }

      default:
        return state;
    }
  };

  var reducer = redux.combineReducers({
    resources: resourcesReducer,
    branding: brandingReducer,
    paths: pathsReducer,
    session: sessionReducer,
    dashboard: dashboardReducer,
    notices: noticesReducer
  });

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      addNotice: function addNotice$1(notice) {
        return dispatch(addNotice(notice));
      }
    };
  };

  var withNotice = reactRedux.connect(null, mapDispatchToProps);

  /**
   * Renders Button for an action
   *
   * @component
   */

  var ActionButton =
  /*#__PURE__*/
  function (_React$PureComponent) {
    inherits(ActionButton, _React$PureComponent);

    function ActionButton() {
      classCallCheck(this, ActionButton);

      return possibleConstructorReturn(this, getPrototypeOf(ActionButton).apply(this, arguments));
    }

    createClass(ActionButton, [{
      key: "handleClick",
      value: function handleClick(event) {
        var _this$props = this.props,
            action = _this$props.action,
            resourceId = _this$props.resourceId,
            recordId = _this$props.recordId,
            location = _this$props.location,
            history = _this$props.history,
            actionPerformed = _this$props.actionPerformed,
            addNotice = _this$props.addNotice;

        if (action.guard && !confirm(action.guard)) {
          event.preventDefault();
          return;
        }

        if (typeof action.component !== 'undefined' && action.component === false) {
          event.preventDefault();
          var api = new ApiClient();
          var apiAction = recordId ? api.recordAction : api.resourceAction;
          apiAction.bind(api)({
            resourceId: resourceId,
            actionName: action.name,
            recordId: recordId
          }).then(function (response) {
            addNotice({
              message: 'Record has been successfully removed'
            });

            if (location.pathname !== response.data.redirectUrl) {
              history.push(response.data.redirectUrl);
            }

            if (actionPerformed) {
              actionPerformed(action.name);
            }
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var h = new viewHelpers();
        var _this$props2 = this.props,
            resourceId = _this$props2.resourceId,
            recordId = _this$props2.recordId,
            action = _this$props2.action,
            className = _this$props2.className;
        var actionName = action.name;
        var href = recordId ? h.recordActionUrl({
          resourceId: resourceId,
          recordId: recordId,
          actionName: actionName
        }) : h.resourceActionUrl({
          resourceId: resourceId,
          actionName: actionName
        });
        return React.createElement(StyledButton, {
          to: href,
          className: "button ".concat(className),
          onClick: this.handleClick.bind(this)
        }, React.createElement("span", {
          className: "icon"
        }, React.createElement("i", {
          className: action.icon
        })), React.createElement("div", {
          className: "btn-text"
        }, action.label));
      }
    }]);

    return ActionButton;
  }(React.PureComponent);

  ActionButton.propTypes = {
    action: actionType.isRequired,
    className: PropTypes.string.isRequired,
    resourceId: PropTypes.string.isRequired,
    recordId: PropTypes.string,
    location: locationType.isRequired,
    history: historyType.isRequired,
    actionPerformed: PropTypes.func,
    addNotice: PropTypes.func.isRequired
  };
  ActionButton.defaultProps = {
    recordId: null,
    actionPerformed: null
  };
  var ActionButton$1 = withNotice(reactRouterDom.withRouter(ActionButton));

  function _templateObject5() {
    var data = taggedTemplateLiteral(["\n  ", " {\n    margin-left: ", ";\n  }\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: normal;\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: ", ";\n  height: ", ";\n  color: ", ";\n  font-size: ", ";\n  padding: ", ";\n  background-color: ", ";\n  text-align: center;\n  margin-right: ", ";\n  &:hover{\n    background-color: ", ";\n    color: #fff;\n  }\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = taggedTemplateLiteral(["\n  background: ", ";\n  color: #fff;\n  margin-left: ", ";\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject$1() {
    var data = taggedTemplateLiteral(["\n  &&& {\n    margin-bottom: ", ";\n  }\n"]);

    _templateObject$1 = function _templateObject() {
      return data;
    };

    return data;
  }
  var HeaderWrapper = styled.section.attrs({
    className: 'level'
  })(_templateObject$1(), sizes.padding);
  var Tag = styled.span.attrs({
    className: 'tag'
  })(_templateObject2(), colors.primary, sizes.padding);
  var BackBtn = styled(reactRouterDom.Link)(_templateObject3(), sizes.paddingLayout, sizes.paddingLayout, colors.lightText, fonts.base, sizes.paddingMin, colors.superLightBack, sizes.padding, colors.lightText);
  var HeaderTitle = styled.h1.attrs({
    className: 'level-left'
  })(_templateObject4(), fonts.header);
  var HeaderButtons = styled.div.attrs({
    className: 'level-right'
  })(_templateObject5(), StyledButton, sizes.padding);
  /**
   * Header of an action
   *
   * @component
   */

  var ActionHeader = function ActionHeader(props) {
    var h = new viewHelpers();
    var resource = props.resource,
        toggleFilter = props.toggleFilter,
        actionPerformed = props.actionPerformed,
        recordId = props.recordId,
        action = props.action,
        tag = props.tag;
    var resourceId = resource.id;
    var actions = recordId ? resource.recordActions.filter(function (ra) {
      return ra.name !== action.name;
    }) : resource.resourceActions.filter(function (ra) {
      return ra.name !== (action && action.name);
    });
    var title = recordId ? action.label : resource.name;
    return React.createElement(HeaderWrapper, null, React.createElement(HeaderTitle, null, !toggleFilter && React.createElement(BackBtn, {
      to: h.listUrl({
        resourceId: resourceId
      })
    }, React.createElement("i", {
      className: "icomoon-pagination-left"
    })), title, tag ? React.createElement(Tag, null, tag) : ''), React.createElement(HeaderButtons, null, actions.map(function (headerAction) {
      return React.createElement(ActionButton$1, {
        action: headerAction,
        key: headerAction.name,
        actionPerformed: actionPerformed,
        className: "is-primary",
        resourceId: resource.id,
        recordId: recordId
      });
    }), toggleFilter && React.createElement(StyledButton, {
      onClick: toggleFilter,
      as: "button"
    }, React.createElement("span", {
      className: "icon"
    }, React.createElement("i", {
      className: "fas fa-sliders-h"
    })), React.createElement("span", {
      className: "btn-text"
    }, "Filter"))));
  };

  ActionHeader.propTypes = {
    resource: resourceType.isRequired,
    toggleFilter: PropTypes.func,
    actionPerformed: PropTypes.func,
    recordId: PropTypes.string,
    action: actionType,
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  ActionHeader.defaultProps = {
    toggleFilter: null,
    actionPerformed: null,
    recordId: null,
    action: null,
    tag: null
  };

  function _templateObject$2() {
    var data = taggedTemplateLiteral(["\n  padding: ", ";\n  flex-grow: 1;\n"]);

    _templateObject$2 = function _templateObject() {
      return data;
    };

    return data;
  }
  /**
   * @component
   * @class
   */

  var ActionWrapper = styled.section(_templateObject$2(), sizes.paddingLayout);

  Components = {};
  Components.ActionButton = ActionButton$1;
  Components.ActionHeader = ActionHeader;
  Components.ActionWrapper = ActionWrapper;

}(React, PropTypes, reactRouterDom, styled, axios, reactRedux, redux));
