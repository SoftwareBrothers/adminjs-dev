require("./index.css");
var $bdtG2$react = require("react");
var $bdtG2$reactdom = require("react-dom");
var $bdtG2$brace = require("brace");
var $bdtG2$reactace = require("react-ace");
var $bdtG2$reactframecomponent = require("react-frame-component");
require("brace/mode/jsx");
require("brace/theme/monokai");
var $bdtG2$reactrouterdom = require("react-router-dom");
var $bdtG2$redux = require("redux");
var $bdtG2$reactredux = require("react-redux");
var $bdtG2$styledcomponents = require("styled-components");
var $bdtG2$styledsystem = require("styled-system");
var $bdtG2$polished = require("polished");
var $bdtG2$carboniconsreact = require("@carbon/icons-react");
var $bdtG2$reactdatepicker = require("react-datepicker");
var $bdtG2$datefnsparseISO = require("date-fns/parseISO");
var $bdtG2$quill = require("quill");
var $bdtG2$jwpaginate = require("jw-paginate");
var $bdtG2$axios = require("axios");
var $bdtG2$flat = require("flat");
var $bdtG2$lodashstartCase = require("lodash/startCase");
var $bdtG2$reactrouter = require("react-router");
var $bdtG2$reacti18next = require("react-i18next");
require("i18next");
var $bdtG2$adminjsdesignsystem = require("@adminjs/design-system");
var $bdtG2$reactbeautifuldnd = require("react-beautiful-dnd");
var $bdtG2$reactselect = require("react-select");
var $bdtG2$reactselectasync = require("react-select/async");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire64c1"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire64c1"] = parcelRequire;
}
parcelRequire.register("kRw5G", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $f301a665a4614c03$var$_react = $f301a665a4614c03$var$_interopRequireDefault($bdtG2$react);
function $f301a665a4614c03$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $f301a665a4614c03$var$_typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $f301a665a4614c03$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $f301a665a4614c03$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $f301a665a4614c03$var$_typeof(obj1);
}
function $f301a665a4614c03$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $f301a665a4614c03$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $f301a665a4614c03$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $f301a665a4614c03$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $f301a665a4614c03$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $f301a665a4614c03$var$_possibleConstructorReturn(self, call) {
    if (call && ($f301a665a4614c03$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $f301a665a4614c03$var$_assertThisInitialized(self);
}
function $f301a665a4614c03$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $f301a665a4614c03$var$_getPrototypeOf(o1) {
    $f301a665a4614c03$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $f301a665a4614c03$var$_getPrototypeOf(o1);
}
function $f301a665a4614c03$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $f301a665a4614c03$var$_setPrototypeOf(subClass, superClass);
}
function $f301a665a4614c03$var$_setPrototypeOf(o2, p1) {
    $f301a665a4614c03$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $f301a665a4614c03$var$_setPrototypeOf(o2, p1);
}
var $f301a665a4614c03$var$DefaultWrapper = function DefaultWrapper(props) {
    return $f301a665a4614c03$var$_react["default"].createElement("div", null, props.children);
};
var $f301a665a4614c03$var$ComponentRenderer = /*#__PURE__*/ function(_React$Component) {
    $f301a665a4614c03$var$_inherits(ComponentRenderer, _React$Component);
    function ComponentRenderer(props) {
        var _this;
        $f301a665a4614c03$var$_classCallCheck(this, ComponentRenderer);
        _this = $f301a665a4614c03$var$_possibleConstructorReturn(this, $f301a665a4614c03$var$_getPrototypeOf(ComponentRenderer).call(this, props));
        _this.Wrapper = window._CustomWrapper || $f301a665a4614c03$var$DefaultWrapper;
        _this.state = {
            hasError: false,
            error: null
        };
        return _this;
    }
    $f301a665a4614c03$var$_createClass(ComponentRenderer, [
        {
            key: "componentDidCatch",
            value: function componentDidCatch(error) {
                console.log(error.message);
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return $f301a665a4614c03$var$_react["default"].createElement(this.Wrapper, this.props, children);
            }
        }
    ]);
    return ComponentRenderer;
}($f301a665a4614c03$var$_react["default"].Component);
var $f301a665a4614c03$var$_default = $f301a665a4614c03$var$ComponentRenderer;
module.exports["default"] = $f301a665a4614c03$var$_default;

});



var $0944c33215dbc4d1$exports = {};
"use strict";
Object.defineProperty($0944c33215dbc4d1$exports, "__esModule", {
    value: true
});
$0944c33215dbc4d1$exports["default"] = void 0;

var $0944c33215dbc4d1$var$_react = $0944c33215dbc4d1$var$_interopRequireDefault($bdtG2$react);

var $0944c33215dbc4d1$var$_brace = $0944c33215dbc4d1$var$_interopRequireDefault($bdtG2$brace);

var $0944c33215dbc4d1$var$_reactAce = $0944c33215dbc4d1$var$_interopRequireDefault($bdtG2$reactace);

var $0944c33215dbc4d1$var$_reactFrameComponent = $0944c33215dbc4d1$var$_interopRequireWildcard($bdtG2$reactframecomponent);



var $0944c33215dbc4d1$var$_componentRenderer = $0944c33215dbc4d1$var$_interopRequireDefault((parcelRequire("kRw5G")));
function $0944c33215dbc4d1$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj["default"] = obj;
        return newObj;
    }
}
function $0944c33215dbc4d1$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $0944c33215dbc4d1$var$_typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $0944c33215dbc4d1$var$_typeof = function _typeof(obj) {
        return typeof obj;
    };
    else $0944c33215dbc4d1$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $0944c33215dbc4d1$var$_typeof(obj1);
}
function $0944c33215dbc4d1$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $0944c33215dbc4d1$var$_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function $0944c33215dbc4d1$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $0944c33215dbc4d1$var$_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function $0944c33215dbc4d1$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $0944c33215dbc4d1$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $0944c33215dbc4d1$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $0944c33215dbc4d1$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
function $0944c33215dbc4d1$var$_possibleConstructorReturn(self, call) {
    if (call && ($0944c33215dbc4d1$var$_typeof(call) === "object" || typeof call === "function")) return call;
    return $0944c33215dbc4d1$var$_assertThisInitialized(self);
}
function $0944c33215dbc4d1$var$_getPrototypeOf(o1) {
    $0944c33215dbc4d1$var$_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $0944c33215dbc4d1$var$_getPrototypeOf(o1);
}
function $0944c33215dbc4d1$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $0944c33215dbc4d1$var$_inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $0944c33215dbc4d1$var$_setPrototypeOf(subClass, superClass);
}
function $0944c33215dbc4d1$var$_setPrototypeOf(o2, p1) {
    $0944c33215dbc4d1$var$_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $0944c33215dbc4d1$var$_setPrototypeOf(o2, p1);
}
window.component = null;
var $0944c33215dbc4d1$var$Wrapper = /*#__PURE__*/ function(_React$Component) {
    $0944c33215dbc4d1$var$_inherits(Wrapper, _React$Component);
    function Wrapper(props) {
        var _this;
        $0944c33215dbc4d1$var$_classCallCheck(this, Wrapper);
        _this = $0944c33215dbc4d1$var$_possibleConstructorReturn(this, $0944c33215dbc4d1$var$_getPrototypeOf(Wrapper).call(this, props));
        window.component = window.component || {
        };
        _this.iframeRef = $0944c33215dbc4d1$var$_react["default"].createRef();
        _this.handleChange = _this.handleChange.bind($0944c33215dbc4d1$var$_assertThisInitialized(_this));
        _this.toggleEditor = _this.toggleEditor.bind($0944c33215dbc4d1$var$_assertThisInitialized(_this));
        var example = props.example;
        example = example || 'return (<div>Example</div>)';
        _this.state = {
            example: example,
            height: 200,
            showEditor: false
        };
        _this.executeScript(example);
        return _this;
    }
    $0944c33215dbc4d1$var$_createClass(Wrapper, [
        {
            key: "executeScript",
            value: function executeScript(source) {
                var uniqId = this.props.uniqId;
                var script = document.createElement('script');
                var self = this;
                script.onload = script.onerror = function() {
                    this.remove();
                    self.setState(function(state) {
                        return $0944c33215dbc4d1$var$_objectSpread2({
                        }, state, {
                            component: window.component[uniqId] || ''
                        });
                    });
                };
                var wrapper = "window.component['".concat(uniqId, "'] = (() => {\n      ").concat(Object.keys(reactComponents).map(function(k) {
                    return "const ".concat(k, " = reactComponents['").concat(k, "'];");
                }).join('\n'), "\n      try {\n        ").concat(source, "\n      } catch (error) {\n        console.log(error)\n      }\n    })()");
                try {
                    var src = Babel.transform(wrapper, {
                        presets: [
                            'react',
                            'es2015'
                        ]
                    }).code;
                    script.src = 'data:text/plain;base64,' + btoa(src);
                } catch (error) {
                    console.log(error);
                }
                document.body.appendChild(script);
            }
        },
        {
            key: "handleChange",
            value: function handleChange(code) {
                this.executeScript(code);
                this.setState(function(state) {
                    return $0944c33215dbc4d1$var$_objectSpread2({
                    }, state, {
                        example: code
                    });
                });
            }
        },
        {
            key: "computeHeight",
            value: function computeHeight() {
                var height = this.state.height;
                var padding = 5; // buffer for any unstyled margins
                if (this.iframeRef.current && this.iframeRef.current.node.contentDocument && this.iframeRef.current.node.contentDocument.body.offsetHeight !== 0 && this.iframeRef.current.node.contentDocument.body.offsetHeight !== height - padding) this.setState({
                    height: this.iframeRef.current.node.contentDocument.body.offsetHeight + padding
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.computeHeight();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                this.heightInterval = setInterval(function() {
                    _this2.computeHeight();
                }, 1000);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                clearInterval(this.heightInterval);
            }
        },
        {
            key: "toggleEditor",
            value: function toggleEditor(event) {
                event.preventDefault();
                this.setState(function(state) {
                    return $0944c33215dbc4d1$var$_objectSpread2({
                    }, state, {
                        showEditor: !state.showEditor
                    });
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _this$state = this.state, component = _this$state.component, height = _this$state.height, showEditor = _this$state.showEditor;
                return $0944c33215dbc4d1$var$_react["default"].createElement("div", null, $0944c33215dbc4d1$var$_react["default"].createElement($0944c33215dbc4d1$var$_reactFrameComponent["default"], {
                    className: "component-wrapper",
                    ref: this.iframeRef,
                    style: {
                        width: '100%',
                        height: height
                    },
                    onLoad: this.computeHeight()
                }, $0944c33215dbc4d1$var$_react["default"].createElement("link", {
                    type: "text/css",
                    rel: "stylesheet",
                    href: "./build/entry.css"
                }), $0944c33215dbc4d1$var$_react["default"].createElement($0944c33215dbc4d1$var$_reactFrameComponent.FrameContextConsumer, null, function(frameContext) {
                    return $0944c33215dbc4d1$var$_react["default"].createElement($0944c33215dbc4d1$var$_componentRenderer["default"], {
                        frameContext: frameContext
                    }, component);
                })), $0944c33215dbc4d1$var$_react["default"].createElement("div", {
                    className: "bd__button"
                }, $0944c33215dbc4d1$var$_react["default"].createElement("a", {
                    href: "#",
                    onClick: this.toggleEditor
                }, "Modify Example Code")), showEditor ? $0944c33215dbc4d1$var$_react["default"].createElement("div", {
                    className: "field"
                }, $0944c33215dbc4d1$var$_react["default"].createElement($0944c33215dbc4d1$var$_reactAce["default"], {
                    style: {
                        width: '100%',
                        height: '200px',
                        marginBottom: '20px'
                    },
                    value: this.state.example,
                    mode: "jsx",
                    theme: "monokai",
                    onChange: function onChange(code) {
                        return _this3.handleChange(code);
                    },
                    name: "editor-div",
                    editorProps: {
                        $useSoftTabs: true
                    }
                })) : '');
            }
        }
    ]);
    return Wrapper;
}($0944c33215dbc4d1$var$_react["default"].Component);
var $0944c33215dbc4d1$var$_default = function _default(props) {
    return $0944c33215dbc4d1$var$_react["default"].createElement($0944c33215dbc4d1$var$Wrapper, props);
};
$0944c33215dbc4d1$exports["default"] = $0944c33215dbc4d1$var$_default;









var $f3ac262eb34c1ec1$exports = {};

$parcel$export($f3ac262eb34c1ec1$exports, "colors", () => $f3ac262eb34c1ec1$export$8f45430ccf837300);
$parcel$export($f3ac262eb34c1ec1$exports, "space", () => $f3ac262eb34c1ec1$export$a941ed4b947d12f8);
$parcel$export($f3ac262eb34c1ec1$exports, "sizes", () => $f3ac262eb34c1ec1$export$c647cb0ee6e282fe);
$parcel$export($f3ac262eb34c1ec1$exports, "fontSizes", () => $f3ac262eb34c1ec1$export$67baea80019ff381);
$parcel$export($f3ac262eb34c1ec1$exports, "fontWeights", () => $f3ac262eb34c1ec1$export$59230918eb9bd861);
$parcel$export($f3ac262eb34c1ec1$exports, "lineHeights", () => $f3ac262eb34c1ec1$export$e646ed6b629bf51e);
$parcel$export($f3ac262eb34c1ec1$exports, "shadows", () => $f3ac262eb34c1ec1$export$3eb26d38a832ce9a);
$parcel$export($f3ac262eb34c1ec1$exports, "breakpoints", () => $f3ac262eb34c1ec1$export$d07517a676ce386f);
$parcel$export($f3ac262eb34c1ec1$exports, "font", () => $f3ac262eb34c1ec1$export$a74e2025f5286b02);
$parcel$export($f3ac262eb34c1ec1$exports, "borders", () => $f3ac262eb34c1ec1$export$5a5da632d18030b0);
$parcel$export($f3ac262eb34c1ec1$exports, "borderWidths", () => $f3ac262eb34c1ec1$export$6f3cc5789c9e770e);
$parcel$export($f3ac262eb34c1ec1$exports, "VariantValues", () => $f3ac262eb34c1ec1$export$3998891172e61634);
/* eslint-disable max-len */ /**
 * @interface Theme
 * @load ./theme.doc.md
 * @section design-system
 */ /**
 * Color palette.
 *
 * @memberof Theme
 * @alias colors
 * @property {string} primary100=#4268F6      <div style="background: #4268F6; height: 20px;" />
 * @property {string} primary80=#6483F8     <div style="background: #6483F8; height: 20px;" />
 * @property {string} primary60=#879FFA     <div style="background: #879FFA; height: 20px;" />
 * @property {string} primary40=#A9BAFA     <div style="background: #A9BAFA; height: 20px;" />
 * @property {string} primary20=#CBD5FD     <div style="background: #CBD5FD; height: 20px;" />
 * @property {string} accent=#38CAF1      <div style="background: #38CAF1; height: 20px;" />
 * @property {string} love=#e6282b      <div style="background: #e6282b; height: 20px;" />
 * @property {string} grey100=#1C1C38     <div style="background: #1C1C38; height: 20px;" />
 * @property {string} grey80=#454655      <div style="background: #454655; height: 20px;" />
 * @property {string} grey60=#898A9A      <div style="background: #898A9A; height: 20px;" />
 * @property {string} grey40=#C0C0CA      <div style="background: #C0C0CA; height: 20px;" />
 * @property {string} grey20=#F6F7FB      <div style="background: #F6F7FB; height: 20px;" />
 * @property {string} white=#fff      <div style="background: #fff; height: 20px;" />
 * @property {string} errorDark=#DE405D     <div style="background: #DE405D; height: 20px;" />
 * @property {string} error=#FF4567     <div style="background: #FF4567; height: 20px;" />
 * @property {string} errorLight=#FFA5B5      <div style="background: #FFA5B5; height: 20px;" />
 * @property {string} successDark=#32A887     <div style="background: #32A887; height: 20px;" />
 * @property {string} success=#70C9B0     <div style="background: #70C9B0; height: 20px;" />
 * @property {string} successLight=#DBF0F1      <div style="background: #DBF0F1; height: 20px;" />
 * @property {string} infoDark=#4268F6      <div style="background: #4268F6; height: 20px;" />
 * @property {string} info=#879FFA      <div style="background: #879FFA; height: 20px;" />
 * @property {string} infoLight=#CBD5FD     <div style="background: #CBD5FD; height: 20px;" />
 * @property {string} filterBg=#343F87      <div style="background: #343F87; height: 20px;" />
 * @property {string} hoverBg=#535B8E     <div style="background: #535B8E; height: 20px;" />
 * @property {string} inputBorder=#898A9A     <div style="background: #898A9A; height: 20px;" />
 * @property {string} border=#DDE1E5,     <div style="background: #DDE1E5; height: 20px;" />
 * @property {string} separator=#C0C0CA     <div style="background: #C0C0CA; height: 20px;" />
 * @property {string} highlight=#F6F7FB     <div style="background: #F6F7FB; height: 20px;" />
 * @property {string} filterInputBorder=rgba(255,255,255,0.15)      <div style="background: rgba(255,255,255,0.15); height: 20px;" />
 * @property {string} filterDisabled=rgba(83,91,142,0.05)      <div style="background: rgba(83,91,142,0.05); height: 20px;" />
 * @property {string} bg=#F6F7FB      <div style="background: #F6F7FB; height: 20px;" />
 */ const $f3ac262eb34c1ec1$export$8f45430ccf837300 = {
    // Primary
    primary100: '#4268F6',
    primary80: '#6483F8',
    primary60: '#879FFA',
    primary40: '#A9BAFA',
    primary20: '#CBD5FD',
    // accent
    accent: '#38CAF1',
    love: '#e6282b',
    // grey
    grey100: '#1C1C38',
    grey80: '#454655',
    grey60: '#898A9A',
    grey40: '#C0C0CA',
    grey20: '#F6F7FB',
    white: '#fff',
    // Alerts
    errorDark: '#DE405D',
    error: '#FF4567',
    errorLight: '#FFA5B5',
    successDark: '#32A887',
    success: '#70C9B0',
    successLight: '#DBF0F1',
    infoDark: '#4268F6',
    info: '#879FFA',
    infoLight: '#CBD5FD',
    // Backgrounds
    filterBg: '#343F87',
    hoverBg: '#535B8E',
    // global
    border: '#DDE1E5',
    // Elements
    inputBorder: '#C0C0CA',
    separator: '#C0C0CA',
    highlight: '#F6F7FB',
    filterInputBorder: 'rgba(255,255,255,0.15)',
    filterDisabled: 'rgba(83,91,142,0.05)',
    bg: '#F6F7FB'
};
/**
 * Sizes can be used with paddings, margins etc.
 *
 * This is the example of using responsive margin with Box component
 *
 * ```javascript
 * <Box p=['default', 'xl']>some content</Box>
 * ```
 *
 * This component will have 8px padding for lowest breakpoint and 24px above
 * this breakpoint.
 *
 * @memberof Theme
 * @alias space

 * @property {string} xs=2px        2px - <span class="space-box" style="width: 2px;" />
 * @property {string} sm=4px        4px - <span class="space-box" style="width: 4px;" />
 * @property {string} default=8px   8px - <span class="space-box" style="width: 8px;" /> (alias md)
 * @property {string} lg=16px       16px - <span class="space-box" style="width: 16px;" />
 * @property {string} xl=24px       24px - <span class="space-box" style="width: 24px;" />
 * @property {string} xxl=32px      32px - <span class="space-box" style="width: 32px;" />
 * @property {string} x3=48px       48px - <span class="space-box" style="width: 48px;" />
 * @property {string} x4=64px       64px - <span class="space-box" style="width: 64px;" />
 * @property {string} x5=80px       80px - <span class="space-box" style="width: 80px;" />
 * @property {string} x6=128px      128px - <span class="space-box" style="width: 128px;" />
 */ const $f3ac262eb34c1ec1$export$a941ed4b947d12f8 = {
    xs: '2px',
    sm: '4px',
    default: '8px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    x3: '48px',
    x4: '64px',
    x5: '80px',
    x6: '128px'
};
/**
 * @memberof Theme
 * @alias sizes
 * @property {string} navbarHeight=64px
 * @property {string} sidebarWidth=300px
 * @property {string} maxFormWidth=740px
 */ const $f3ac262eb34c1ec1$export$c647cb0ee6e282fe = {
    navbarHeight: '64px',
    sidebarWidth: '300px',
    maxFormWidth: '740px'
};
/**
 * @memberof Theme
 * @alias fontSizes
 * @property {string} xs=10px      <div style="font-size: 10px;">'xs' font size</div>
 * @property {string} sm=12px      <div style="font-size: 12px;">'sm' font size</div>
 * @property {string} default=14px (alias md) <div style="font-size: 14px;">'default' font size</div>
 * @property {string} lg=16px      <div style="font-size: 16px;">'lg' font size</div>
 * @property {string} xl=18px      <div style="font-size: 18px;">'xl' font size</div>
 * @property {string} h4=24px      <div style="font-size: 24px;">'h4' font size</div>
 * @property {string} h3=28px      <div style="font-size: 28px;">'h3' font size</div>
 * @property {string} h2=32px      <div style="font-size: 32px;">'h2' font size</div>
 * @property {string} h1=40px      <div style="font-size: 40px;">'h1' font size</div>
 */ const $f3ac262eb34c1ec1$export$67baea80019ff381 = {
    xs: '10px',
    sm: '12px',
    default: '14px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    h4: '24px',
    h3: '28px',
    h2: '32px',
    h1: '40px'
};
/**
 * @memberof Theme
 * @alias fontWeights
 * @property {string} lighter=200
 * @property {string} lighter=300
 * @property {string} normal=400
 * @property {string} normal=500
 * @property {string} bolder=900
 */ const $f3ac262eb34c1ec1$export$59230918eb9bd861 = {
    lighter: 200,
    light: 300,
    normal: 400,
    bold: 500,
    bolder: 900
};
/**
 * @memberof Theme
 * @alias lineHeights
 * @property {string} xs=10px
 * @property {string} sm=12px
 * @property {string} default=16px (alias md)
 * @property {string} lg=24px
 * @property {string} xl=32px
 * @property {string} xxl=40px
 */ const $f3ac262eb34c1ec1$export$e646ed6b629bf51e = {
    xs: '10px',
    sm: '12px',
    default: '16px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px'
};
/**
 * This dimension can be used with `testShadow` and `boxShadow` props provided
 * by {@link ShadowProps}
 *
 * ```javascript
 * <Box variant="grey" boxShadow="card">Some content...</Box>
 * ```
 *
 * @alias shadows
 * @memberof Theme
 * @property {string} login              <div class="shadow-div" style="box-shadow: 0 15px 24px 0 rgba(137,138,154,0.15);"/>
 * @property {string} cardHover          <div class="shadow-div" style="box-shadow: 0 4px 12px 0 rgba(137,138,154,0.4);"/>
 * @property {string} drawer             <div class="shadow-div" style="box-shadow: -2px 0 8px 0 rgba(137,138,154,0.2);"/>
 * @property {string} card               <div class="shadow-div" style="box-shadow: 0 1px 6px 0 rgba(137,138,154,0.4);"/>
 * @property {string} inputFocus         <div class="shadow-div" style="box-shadow: 0 2px 4px 0 rgba(135,159,250,0.4);"/>
 * @property {string} buttonFocus        <div class="shadow-div" style="box-shadow: 0 4px 6px 0 rgba(56,202,241,0.3);"/>
 */ const $f3ac262eb34c1ec1$export$3eb26d38a832ce9a = {
    login: '0 15px 24px 0 rgba(137,138,154,0.15)',
    cardHover: '0 4px 12px 0 rgba(137,138,154,0.4)',
    drawer: '-2px 0 8px 0 rgba(137,138,154,0.2)',
    card: '0 1px 6px 0 rgba(137,138,154,0.4)',
    inputFocus: '0 2px 4px 0 rgba(135,159,250,0.4)',
    buttonFocus: '0 4px 6px 0 rgba(56,202,241,0.3)'
};
/**
 * Responsive breakpoints
 *
 * How to use them - simply pass an array to given prop:
 *
 * ```javascript
 * // Showing box on mobile devices
 * <Box display={["block", "none"]}>...</Box>
 *
 * // responsive width
 * <Box width={[1, 1/2, 1/3, 1/4]}>...</Box>
 * ```
 *
 * @memberof Theme
 * @alias breakpoints
 * @property {string} 0=577px
 * @property {string} 1=769px
 * @property {string} 2=1024px
 * @property {string} 3=1324px
 */ const $f3ac262eb34c1ec1$export$d07517a676ce386f = [
    '577px',
    '769px',
    '1024px',
    '1324px'
];
const $f3ac262eb34c1ec1$export$a74e2025f5286b02 = '\'Roboto\', sans-serif';
/**
 * Border styles
 *
 * @memberof Theme
 * @alias borders
 * @property {string} input
 * @property {string} filterInput
 * @property {string} bg
 * @property {string} default
 */ const $f3ac262eb34c1ec1$export$5a5da632d18030b0 = {
    input: '1px solid #C0C0CA',
    filterInput: ' 1px rgba(255,255,255,0. solid15)',
    bg: '1px solid #F6F7FB',
    default: '1px solid #DDE1E5'
};
/**
 * Border widths set for an entire layout. If you like to have border radius in Button's and Box'es
 * Then set default property.
 *
 * @memberof Theme
 * @alias borderWidths
 * @property {string} default - default border with
 */ const $f3ac262eb34c1ec1$export$6f3cc5789c9e770e = {
    default: '0px'
};
const $f3ac262eb34c1ec1$export$3998891172e61634 = [
    'primary',
    'danger',
    'success',
    'info',
    'secondary',
    'default',
    'light'
];








// eslint-disable-next-line import/prefer-default-export
/**
 *
 * Generates class name for given component. It is used by AdminJS core to append namespaced
 * classes.
 *
 * ### example
 *
 * ```javascript
 * import { cssClass } from '@adminjs/design-system'
 *
 * cssClass('Icon', 'my-regular-class-name')
 * // returns: 'adminjs_Icon my-regular-class-name'
 * ```
 *
 *
 * @param {string | Array<string>} className
 * @param {string}                [regularClass]
 * @memberof module:@adminjs/design-system
 */ const $04e8557fb15d1054$export$2e2bcd8739ae039 = (className, regularClass)=>{
    let names = [];
    if (className.join) names = className;
    else names = [
        className
    ];
    const parsed = names.map((name)=>`adminjs_${name}`
    );
    if (regularClass) parsed.push(regularClass);
    return parsed.join(' ');
};


const $fa79237ecead5fba$var$variantStyle = (variantColor, props)=>({
        bg: variantColor,
        borderColor: variantColor,
        color: props.outline ? variantColor : 'white'
    })
;
const $fa79237ecead5fba$var$colorVariant = (props)=>$bdtG2$styledsystem.variant({
        variants: {
            primary: $fa79237ecead5fba$var$variantStyle('primary100', props),
            danger: $fa79237ecead5fba$var$variantStyle('error', props),
            success: $fa79237ecead5fba$var$variantStyle('success', props),
            info: $fa79237ecead5fba$var$variantStyle('info', props),
            secondary: $fa79237ecead5fba$var$variantStyle('accent', props),
            light: $fa79237ecead5fba$var$variantStyle('light', props),
            default: {
            }
        }
    })
;
const $fa79237ecead5fba$var$sizeVariants = $bdtG2$styledsystem.variant({
    prop: 'size',
    variants: {
        sm: {
            py: 'xs'
        },
        lg: {
            py: '11px',
            px: '14px'
        },
        default: {
        }
    }
});
/**
 * @load ./badge.doc.md
 * @see BadgeProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-badge--default StoryBook}
 * @component
 * @hideconstructor
 * @section design-system
 * @subcategory Atoms
 */ const $fa79237ecead5fba$export$37acb3580601e69a = ($parcel$interopDefault($bdtG2$styledcomponents)).span`
  border-radius: 20px;
  border: 1px solid ${({ theme: theme  })=>theme.colors.grey40
};
  color: ${({ outline: outline , theme: theme  })=>outline ? theme.colors.grey60 : theme.colors.white
};
  vertical-align: middle;
  font-family: ${({ theme: theme  })=>theme.font
};
  display: inline;

  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.color};
  ${$bdtG2$styledsystem.typography};
  ${(props)=>$fa79237ecead5fba$var$colorVariant(props)
};
  ${$fa79237ecead5fba$var$sizeVariants};
  ${({ outline: outline  })=>outline ? 'background: transparent;' : ''
}
`;
$fa79237ecead5fba$export$37acb3580601e69a.defaultProps = {
    px: 'default',
    py: 'sm',
    fontSize: 'sm',
    bg: 'grey40',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Badge')
};
var $fa79237ecead5fba$export$2e2bcd8739ae039 = $fa79237ecead5fba$export$37acb3580601e69a;






var $336417390e0f00d0$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.css`
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    margin-left: -8px;
    position: absolute;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
    top: 0;
    margin-top: -8px;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    border-top: none;
    border-bottom-color: #f0f0f0;
  }

  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    bottom: 0;
    margin-bottom: -8px;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    border-bottom: none;
    border-top-color: #fff;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
  .react-datepicker__month-read-view--down-arrow::before,
  .react-datepicker__month-year-read-view--down-arrow::before {
    bottom: -1px;
    border-top-color: #aeaeae;
  }

  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
  }

  .react-datepicker {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px;
  }

  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }

  .react-datepicker--time-only .react-datepicker__time {
    border-radius: 0.3rem;
  }

  .react-datepicker--time-only .react-datepicker__time-box {
    border-radius: 0.3rem;
  }

  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }

  .react-datepicker-popper {
    z-index: 1;
  }

  .react-datepicker-popper[data-placement^="bottom"] {
    margin-top: 10px;
  }

  .react-datepicker-popper[data-placement="bottom-end"] .react-datepicker__triangle, .react-datepicker-popper[data-placement="top-end"] .react-datepicker__triangle {
    left: auto;
    right: 50px;
  }

  .react-datepicker-popper[data-placement^="top"] {
    margin-bottom: 10px;
  }

  .react-datepicker-popper[data-placement^="right"] {
    margin-left: 8px;
  }

  .react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
    left: auto;
    right: 42px;
  }

  .react-datepicker-popper[data-placement^="left"] {
    margin-right: 8px;
  }

  .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
    left: 42px;
    right: auto;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    padding-top: 8px;
    position: relative;
  }

  .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 0.944rem;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__navigation {
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 10px;
    width: 0;
    padding: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
    height: 10px;
    width: 10px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }

  .react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__navigation--next {
    right: 10px;
    border-left-color: #ccc;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 80px;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .react-datepicker__navigation--years-previous {
    top: 4px;
    border-top-color: #ccc;
  }

  .react-datepicker__navigation--years-previous:hover {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__navigation--years-upcoming {
    top: -4px;
    border-bottom-color: #ccc;
  }

  .react-datepicker__navigation--years-upcoming:hover {
    border-bottom-color: #b3b3b3;
  }

  .react-datepicker__month-container {
    float: left;
  }

  .react-datepicker__month {
    margin: 0.4rem;
    text-align: center;
  }

  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    width: 4rem;
    margin: 2px;
  }

  .react-datepicker__input-time-container {
    clear: both;
    width: 100%;
    float: left;
    margin: 5px 0 10px 15px;
    text-align: left;
  }

  .react-datepicker__input-time-container .react-datepicker-time__caption {
    display: inline-block;
  }

  .react-datepicker__input-time-container .react-datepicker-time__input-container {
    display: inline-block;
  }

  .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {
    display: inline-block;
    margin-left: 10px;
  }

  .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {
    width: 85px;
  }

  .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,
  .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {
    -moz-appearance: textfield;
  }

  .react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {
    margin-left: 5px;
    display: inline-block;
  }

  .react-datepicker__time-container {
    float: right;
    border-left: 1px solid #aeaeae;
    width: 85px;
  }

  .react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    position: absolute;
    right: -72px;
    top: 0;
  }

  .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: white;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: 85px;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + (1.7rem / 2));
    overflow-y: scroll;
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    box-sizing: content-box;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    height: 30px;
    padding: 5px 10px;
    white-space: nowrap;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background-color: #216ba5;
    color: white;
    font-weight: bold;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
    color: #ccc;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  .react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }

  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem;
    background-color: #f0f0f0;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    border-radius: 0.3rem;
    background-color: #216ba5;
    color: #fff;
  }

  .react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover,
  .react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--in-range:hover {
    background-color: #1d5d90;
  }

  .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: #ccc;
    pointer-events: none;
  }

  .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text {
    cursor: pointer;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    border-radius: 0.3rem;
    background-color: #f0f0f0;
  }

  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today {
    font-weight: bold;
  }

  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted {
    border-radius: 0.3rem;
    background-color: #3dcc4a;
    color: #fff;
  }

  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover {
    background-color: #32be3f;
  }

  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1 {
    color: magenta;
  }

  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2 {
    color: green;
  }

  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range {
    border-radius: 0.3rem;
    background-color: #216ba5;
    color: #fff;
  }

  .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover {
    background-color: #1d5d90;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected {
    border-radius: 0.3rem;
    background-color: #2a87d0;
    color: #fff;
  }

  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover {
    background-color: #1d5d90;
  }

  .react-datepicker__day--in-selecting-range ,
  .react-datepicker__month-text--in-selecting-range ,
  .react-datepicker__quarter-text--in-selecting-range {
    background-color: rgba(33, 107, 165, 0.5);
  }

  .react-datepicker__month--selecting-range .react-datepicker__day--in-range , .react-datepicker__month--selecting-range
  .react-datepicker__month-text--in-range , .react-datepicker__month--selecting-range
  .react-datepicker__quarter-text--in-range {
    background-color: #f0f0f0;
    color: #000;
  }

  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled {
    cursor: default;
    color: #ccc;
  }

  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover {
    background-color: transparent;
  }

  .react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
    background-color: #216ba5;
  }

  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background-color: #f0f0f0;
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
  }

  .react-datepicker__year-read-view:hover,
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover {
    cursor: pointer;
  }

  .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow {
    border-top-color: #ccc;
    float: right;
    margin-left: 20px;
    top: 8px;
    position: relative;
    border-width: 0.45rem;
  }

  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown {
    background-color: #f0f0f0;
    position: absolute;
    width: 50%;
    left: 25%;
    top: 30px;
    z-index: 1;
    text-align: center;
    border-radius: 0.3rem;
    border: 1px solid #aeaeae;
  }

  .react-datepicker__year-dropdown:hover,
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover {
    cursor: pointer;
  }

  .react-datepicker__year-dropdown--scrollable,
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }

  .react-datepicker__year-option,
  .react-datepicker__month-option,
  .react-datepicker__month-year-option {
    line-height: 20px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .react-datepicker__year-option:first-of-type,
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }

  .react-datepicker__year-option:last-of-type,
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .react-datepicker__year-option:hover,
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover {
    background-color: #ccc;
  }

  .react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3;
  }

  .react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3;
  }

  .react-datepicker__year-option--selected,
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected {
    position: absolute;
    left: 15px;
  }

  .react-datepicker__close-icon {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;
    padding: 0px 6px 0px 0px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
  }

  .react-datepicker__close-icon::after {
    cursor: pointer;
    background-color: #216ba5;
    color: #fff;
    border-radius: 50%;
    height: 16px;
    width: 16px;
    padding: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    content: "00d7";
  }

  .react-datepicker__today-button {
    background: #f0f0f0;
    border-top: 1px solid #aeaeae;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }

  .react-datepicker__portal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2147483647;
  }

  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 3rem;
    line-height: 3rem;
  }

  @media (max-width: 400px), (max-height: 550px) {
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__time-name {
      width: 2rem;
      line-height: 2rem;
    }
  }

  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem;
  }

  .react-datepicker__portal .react-datepicker__navigation {
    border: 0.81rem solid transparent;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous {
    border-right-color: #ccc;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }

  .react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__portal .react-datepicker__navigation--next {
    border-left-color: #ccc;
  }

  .react-datepicker__portal .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
    border-left-color: #e6e6e6;
    cursor: default;
  }
`;



var $4fdc3a30451a6008$export$2e2bcd8739ae039 = (theme)=>{
    const rgb = $bdtG2$polished.parseToRgb(theme.colors.accent);
    const color = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, .58)`;
    return `0 1px 4px 0 ${color};`;
};



/**
 * adds leading 0 to the number when it is lower than 10
 * @param {number} pad        number - i.e 8
 * @returns {sting}           formatted number: i.e. "08"
 * @memberof module:@adminjs/design-system
 */ const $b56c8b815af55e6f$export$5d04458e2a6c373e = (n)=>n < 10 ? `0${n.toString()}` : n.toString()
;
/**
 * Formats date to YYYY-MM-DD
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */ const $b56c8b815af55e6f$export$3ae94a2503e890a1 = (date)=>`${date.getFullYear()}-${$b56c8b815af55e6f$export$5d04458e2a6c373e(date.getMonth() + 1)}-${$b56c8b815af55e6f$export$5d04458e2a6c373e(date.getDate())}`
;
/**
 * Formats date to HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */ const $b56c8b815af55e6f$var$formatTime = (date)=>`${$b56c8b815af55e6f$export$5d04458e2a6c373e(date.getHours())}:${$b56c8b815af55e6f$export$5d04458e2a6c373e(date.getMinutes())}`
;
/**
 * Formats date to YYYY-MM-DD HH:mm
 *
 * @param   {Date}    date
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */ const $b56c8b815af55e6f$export$8b492ed8828f789c = (date)=>`${$b56c8b815af55e6f$export$3ae94a2503e890a1(date)} ${$b56c8b815af55e6f$var$formatTime(date)}`
;
/**
 * Based on the property type formats date to either YYYY-MM-DD HH:mm or YYYY-MM-DD
 *
 * @param   {Date}    date
 * @param   {PropertyType}    propertyType
 * @return  {string}
 * @memberof module:@adminjs/design-system
 */ const $b56c8b815af55e6f$export$b0288a85498070ca = (date, propertyType)=>{
    if (propertyType === 'date') return $b56c8b815af55e6f$export$3ae94a2503e890a1(date);
    return $b56c8b815af55e6f$export$8b492ed8828f789c(date);
};


/* Solution inspired by https://stackoverflow.com/a/20732091/2594227 answer */ const $f41083bb1e6881db$var$UNITS = [
    'B',
    'KB',
    'MB',
    'GB',
    'TB'
];
/**
 * Changes size in bytes to string. If unit is not provided - tries to find the best match.
 *
 * @param {number} size
 * @param {'B' | 'KB' | 'MB' | 'GB' | 'TB'} [unit]
 * @returns {string}
 * @memberof module:@adminjs/design-system
 */ const $f41083bb1e6881db$export$291541584f4e762f = (size, unit)=>{
    let foundUnitIndex = null;
    if (unit) foundUnitIndex = $f41083bb1e6881db$var$UNITS.findIndex((u)=>u === unit
    );
    const unitIndex = foundUnitIndex || Math.min(Math.floor(Math.log(+size) / Math.log(1024)), $f41083bb1e6881db$var$UNITS.length);
    const calculatedSize = +size / 1024 ** unitIndex;
    const guessedUnit = [
        'B',
        'kB',
        'MB',
        'GB',
        'TB'
    ][unitIndex];
    return `${Math.round(calculatedSize)} ${guessedUnit}`;
};



const $b8b9b441e2c0fccd$export$70a9ea0b017c448a = (theme)=>({
        control: (provided, state)=>({
                ...provided,
                borderRadius: '0px',
                borderWidth: '1px',
                background: theme.colors.white,
                color: theme.colors.grey80,
                '&:hover': {
                    borderColor: theme.colors.grey60
                },
                borderColor: state.isFocused ? theme.colors.primary100 : theme.colors.inputBorder,
                boxShadow: state.isFocused ? $4fdc3a30451a6008$export$2e2bcd8739ae039(theme) : 'none'
            })
        ,
        menu: (provided)=>({
                ...provided,
                borderRadius: '0px',
                borderColor: theme.colors.grey20,
                background: theme.colors.white
            })
        ,
        input: ()=>({
                color: theme.colors.grey80,
                background: theme.colors.white,
                border: 'none'
            })
        ,
        singleValue: ()=>({
                color: theme.colors.grey80
            })
        ,
        option: (provided, state)=>{
            let color = state.isSelected ? theme.colors.grey80 : theme.colors.grey60;
            if (state.isFocused) color = theme.colors.white;
            return {
                ...provided,
                color: color,
                background: state.isFocused ? theme.colors.primary100 : 'transparent'
            };
        }
    })
;
const $b8b9b441e2c0fccd$export$1b83bedeeff84cd5 = (theme)=>({
        control: (provided, state)=>({
                ...provided,
                border: state.isFocused ? `1px solid ${theme.colors.primary100}` : `1px solid ${theme.colors.filterInputBorder}`,
                borderRadius: '0px',
                background: 'transparent',
                color: theme.colors.white,
                boxShadow: state.isFocused ? $4fdc3a30451a6008$export$2e2bcd8739ae039(theme) : 'none'
            })
        ,
        input: ()=>({
                color: theme.colors.white
            })
        ,
        singleValue: ()=>({
                color: theme.colors.white
            })
        ,
        option: (provided, state)=>({
                ...provided,
                color: state.isSelected ? theme.colors.white : theme.colors.grey20,
                background: state.isFocused ? 'rgba(32,39,62,0.25)' : 'transparent'
            })
        ,
        menu: (provided)=>({
                ...provided,
                borderRadius: '0px',
                borderColor: theme.colors.grey20,
                background: theme.colors.filterBg,
                zIndex: 5
            })
    })
;



const $5c36077c99a6a8ef$var$isObject = (item)=>item && typeof item === 'object' && !Array.isArray(item)
;
const $5c36077c99a6a8ef$var$mergeDeep = (target, ...sources)=>{
    if (!sources.length) return target;
    const source = sources.shift();
    if ($5c36077c99a6a8ef$var$isObject(target) && $5c36077c99a6a8ef$var$isObject(source)) {
        // eslint-disable-next-line no-restricted-syntax
        for(const key in source)if ($5c36077c99a6a8ef$var$isObject(source[key])) {
            if (!target[key]) Object.assign(target, {
                [key]: {
                }
            });
            $5c36077c99a6a8ef$var$mergeDeep(target[key], source[key]);
        } else Object.assign(target, {
            [key]: source[key]
        });
    }
    return $5c36077c99a6a8ef$var$mergeDeep(target, ...sources);
};
/**
 * Applies new styles to the default theme
 *
 * ### Example
 *
 * ```jsx
 * import { combineStyles } from '@adminjs/design-system`
 *
 * const myTheme = combineStyles({
 *   colors: {
 *     primary100: '#000'
 *   }
 * })
 * ```
 *
 * @param   {Partial<Theme>}         newTheme
 * @memberof module:@adminjs/design-system
 *
 * @return  {Theme}
 */ const $5c36077c99a6a8ef$export$9de083bf8f5d3d9c = (newTheme)=>{
    const merged = $5c36077c99a6a8ef$var$mergeDeep($f3ac262eb34c1ec1$exports, newTheme);
    if (newTheme.font) return {
        ...merged,
        font: newTheme.font
    };
    return merged;
};







const $b20eeb66aa9d48bc$var$generateId = (key)=>{
    const accessKey = `UNIQUE_KEY_${key}`;
    window.AdminJS = window.AdminJS || {
    };
    window.AdminJS[accessKey] = (Number.parseInt(window.AdminJS[accessKey], 10) || 0) + 1;
    return [
        accessKey,
        window.AdminJS[accessKey]
    ].join('_');
};
var $b20eeb66aa9d48bc$export$2e2bcd8739ae039 = $b20eeb66aa9d48bc$var$generateId;


// TODO: handle iframe case with ref.current.ownerDocument
const $68ffcf41bedb3d5d$export$2e2bcd8739ae039 = {
    appendElement: (element)=>{
        window.document.body.appendChild(element);
    },
    removeElement: (id)=>{
        const domElement = window.document.getElementById(id);
        domElement === null || domElement === void 0 ? void 0 : domElement.remove();
    },
    createPortalForKey: function createPortalForKey(idKey, Component) {
        const Portal = (props)=>{
            const [id] = $bdtG2$react.useState($b20eeb66aa9d48bc$export$2e2bcd8739ae039(idKey));
            const [portalElement] = $bdtG2$react.useState(window.document.createElement('div'));
            $bdtG2$react.useEffect(()=>{
                portalElement.id = id;
                $68ffcf41bedb3d5d$export$2e2bcd8739ae039.appendElement(portalElement);
                return ()=>{
                    $68ffcf41bedb3d5d$export$2e2bcd8739ae039.removeElement(id);
                };
            });
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$reactdom)).createPortal(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Component, props), portalElement));
        };
        return Portal;
    }
};




function $b549c418f45c0feb$export$2e2bcd8739ae039(kind, value, offset) {
    return ({ theme: theme  })=>{
        const themeVal = value ? theme[kind][value] : theme[kind];
        if (themeVal && offset) {
            let offsetValue;
            if (typeof offset === 'string') [offsetValue] = $bdtG2$polished.getValueAndUnit(offset);
            else offsetValue = offset;
            const [pxValue, unit] = $bdtG2$polished.getValueAndUnit(themeVal);
            return `${pxValue + offsetValue}${unit}`;
        }
        return themeVal;
    };
}



/**
 * Resets css styles which can be applied to element created by styled-component
 *
 * ### Example
 *
 * ```javascript
 * import { reset } from '@adminjs/design-system'
 *
 * const myContentComponent = styled`
 *   ${reset};
 * `
 * ```
 * @new in version 3.3
 * @memberof module:@adminjs/design-system
 */ const $19ff0474e2c6e41e$export$aad8462122ac592b = $bdtG2$styledcomponents.css`
/* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
/* cSpell:enable */ /**
 * Resets css component which should be applied to the top of the html
 *
 * ### Example
 *
 * ```jsx
 * import { Reset } from '@adminjs/design-system'
 *
 * <ThemeProvider theme={theme}>
 *   <Reset />
 *   <Box>
 *     { ... }
 *   </Box>
 * </ThemeProvider>
 * ```
 * @new in version 3.3
 * @memberof module:@adminjs/design-system
 */ const $19ff0474e2c6e41e$export$fcc683c36751f67a = $bdtG2$styledcomponents.createGlobalStyle`${$19ff0474e2c6e41e$export$aad8462122ac592b}`;




const $be25f5c713318132$var$variantShared = {
    color: 'white',
    'border-color': 'transparent',
    [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
        fill: 'white'
    },
    '&:disabled': {
        bg: 'grey40'
    }
};
const $be25f5c713318132$var$buttonVariants = $bdtG2$styledsystem.variant({
    variants: {
        primary: {
            bg: 'primary100',
            '&:hover': {
                bg: 'hoverBg'
            },
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Primary'
            ]),
            ...$be25f5c713318132$var$variantShared
        },
        danger: {
            bg: 'error',
            '&:hover': {
                bg: 'errorDark',
                borderColor: 'transparent'
            },
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Danger'
            ]),
            ...$be25f5c713318132$var$variantShared
        },
        success: {
            bg: 'success',
            '&:hover': {
                bg: 'successDark',
                borderColor: 'transparent'
            },
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Success'
            ]),
            ...$be25f5c713318132$var$variantShared
        },
        info: {
            bg: 'info',
            '&:hover': {
                bg: 'infoDark',
                borderColor: 'transparent'
            },
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Info'
            ]),
            ...$be25f5c713318132$var$variantShared
        },
        secondary: {
            bg: 'accent',
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Secondary'
            ]),
            ...$be25f5c713318132$var$variantShared
        },
        light: {
            bg: 'white',
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Grey'
            ]),
            color: 'grey80',
            borderColor: 'grey40',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'grey80'
            },
            '&:hover': {
                borderColor: 'grey60',
                bg: 'grey60'
            }
        },
        text: {
            bg: 'transparent',
            borderColor: 'transparent',
            '&:disabled': {
                'border-color': 'transparent'
            },
            '&:hover': {
                background: 'transparent',
                color: 'hoverBg',
                borderColor: 'transparent',
                textDecoration: 'underline'
            },
            '&:focus': {
                background: 'transparent',
                borderColor: 'transparent'
            },
            '& svg': {
                fill: 'primary100'
            },
            [`&:hover .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'hoverBg'
            },
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Button',
                'Button_Text'
            ])
        }
    }
});
const $be25f5c713318132$var$sizeVariants = $bdtG2$styledsystem.variant({
    prop: 'size',
    variants: {
        sm: {
            fontSize: 'sm',
            py: 'xs',
            lineHeight: 'default',
            px: 'lg',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')}`]: {
                marginTop: '-1px',
                marginBottom: '-1px'
            }
        },
        // md alias default
        md: {
        },
        default: {
        },
        lg: {
            py: 'default',
            px: 'x3',
            lineHeight: 'lg'
        },
        icon: {
            py: 'default',
            px: 'default',
            lineHeight: 'sm',
            minWidth: '34px',
            height: '34px',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                padding: 0,
                margin: 0
            }
        }
    }
});
const $be25f5c713318132$var$setPointer = (props)=>{
    if (props.href || props.onClick) return 'cursor: pointer';
    if (props.as === 'a' && !props.href && !props.onClick) return 'cursor: auto';
    return '';
};
const $be25f5c713318132$export$a21065e3775552ab = $bdtG2$styledcomponents.css`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  display: inline-block;
  font-family: ${({ theme: theme  })=>theme.font
};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
  vertical-align: middle;

  border: 1px solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
  color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
  
  ${(props)=>$be25f5c713318132$var$setPointer(props)
};
  text-decoration: none;
  padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')} ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
  box-sizing: border-box;

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} {
    vertical-align: middle;
  }

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
    margin: 0 ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')} 0 0;
  }

  & .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
    fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
  }
  &:hover {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
    background: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'hoverBg')};
    border-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'hoverBg')};
    & .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
    }
  }
  &:focus {
    border-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'accent')};
    ${({ theme: theme  })=>`box-shadow: ${$4fdc3a30451a6008$export$2e2bcd8739ae039(theme)}`
};
  }

  &:disabled {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
    border-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey80')};
    background: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
    cursor: default;
    & .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
    }
  }

  ${({ rounded: rounded  })=>rounded ? 'border-radius: 9999px' : ''
};

  ${$bdtG2$styledsystem.color};
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.typography};
  ${$be25f5c713318132$var$buttonVariants};
  ${$be25f5c713318132$var$sizeVariants};
`;
var $be25f5c713318132$export$2e2bcd8739ae039 = $be25f5c713318132$export$a21065e3775552ab;



const $0dd800caa134a887$var$addContent = $bdtG2$styledcomponents.css`
  &:before {
    content: "${({ label: label  })=>label
}";
  }
`;
/**
 * @load ./button.doc.md
 * @component
 * @see ButtonProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-button--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @section design-system
 */ const $0dd800caa134a887$export$353f5b6fc5456de1 = ($parcel$interopDefault($bdtG2$styledcomponents)).button.attrs((props)=>({
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('Button', props.className)
    })
)`
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'default')};
  background-color: transparent;
  ${$be25f5c713318132$export$2e2bcd8739ae039};
  ${({ label: label  })=>label ? $0dd800caa134a887$var$addContent : ''
};
`;
var $0dd800caa134a887$export$2e2bcd8739ae039 = $0dd800caa134a887$export$353f5b6fc5456de1;













const $81442ec7a17ae595$var$labelVariants = $bdtG2$styledsystem.variant({
    variants: {
        primary: {
            color: 'primary100',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'primary100'
            }
        },
        danger: {
            color: 'error',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'error'
            }
        },
        success: {
            color: 'success',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'success'
            }
        },
        info: {
            color: 'info',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'info'
            }
        },
        secondary: {
            color: 'accent',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'accent'
            }
        },
        light: {
            color: 'grey60',
            mb: 'sm',
            fontWeight: 'light',
            [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
                fill: 'grey60'
            }
        },
        default: {
        }
    }
});
const $81442ec7a17ae595$var$setDisabled = ({ disabled: disabled , theme: theme  })=>disabled ? $bdtG2$styledcomponents.css`
    color: ${theme.colors.grey40};
    & .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
      fill: ${theme.colors.grey40};
    }
  ` : $bdtG2$styledcomponents.css``
;
/**
 * @classdesc
 *
 * <img src="components/label.png" />
 *
 * Styled form of **label** element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Label, LabelProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LabelProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-label--default Storybook}
 * @hideconstructor
 * @example <caption>2 Different versions</caption>
 * return (
 * <Box p="xl">
 *   <Text>
 *     <Label uppercase>Some uppercase label</Label>
 *   </Text>
 *   <Text mt="default">
 *     <Label required>Label for required field</Label>
 *   </Text>
 * </Box>
 * )
 * @section design-system
 */ const $81442ec7a17ae595$export$b04be29aa201d4f5 = ($parcel$interopDefault($bdtG2$styledcomponents)).label`
  display: ${({ inline: inline  })=>inline ? 'inline-block' : 'block'
};
  font-family: ${$b549c418f45c0feb$export$2e2bcd8739ae039('font')};
  font-size: ${(props)=>$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', props.size === 'lg' ? 'md' : 'sm')(props)
};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'default')};
  margin-bottom: ${({ theme: theme , inline: inline  })=>inline ? '0' : theme.space.default
};

  &:before {
    content: "${({ required: required  })=>required ? '*' : ''
}";
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
    margin-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
    display: ${({ required: required  })=>required ? 'block-inline' : 'none'
};
  }

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')}:first-child {
    margin-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
  }

  ${({ uppercase: uppercase  })=>uppercase ? 'text-transform: uppercase;' : ''
}
  ${$bdtG2$styledsystem.color};
  ${$bdtG2$styledsystem.typography};
  ${$bdtG2$styledsystem.space};
  ${$81442ec7a17ae595$var$labelVariants};
  ${(props)=>$81442ec7a17ae595$var$setDisabled(props)
};
`;
$81442ec7a17ae595$export$b04be29aa201d4f5.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Label')
};
var $81442ec7a17ae595$export$2e2bcd8739ae039 = $81442ec7a17ae595$export$b04be29aa201d4f5;



const $dbbcd02bf2a1ec7c$var$Icon = ($parcel$interopDefault($bdtG2$styledcomponents)).svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const $dbbcd02bf2a1ec7c$export$2cb2c991e524862c = ($parcel$interopDefault($bdtG2$styledcomponents)).span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  & + ${$81442ec7a17ae595$export$b04be29aa201d4f5} {
    margin-left: ${({ theme: theme  })=>theme.space.default
};
    vertical-align: middle;
    margin-bottom: ${({ theme: theme  })=>theme.space.sm
};
  }
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const $dbbcd02bf2a1ec7c$var$HiddenCheckbox = ($parcel$interopDefault($bdtG2$styledcomponents)).input.attrs({
    type: 'checkbox'
})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const $dbbcd02bf2a1ec7c$var$checkboxBackground = (theme, checked, disabled)=>{
    if (checked) return disabled ? theme.colors.grey40 : theme.colors.primary100;
    return theme.colors.white;
};
const $dbbcd02bf2a1ec7c$var$StyledCheckbox = ($parcel$interopDefault($bdtG2$styledcomponents)).a`
  display: inline-block;
  width: 16px;
  /* when it is placed within a container setting different font size */
  font-size: 12px;
  cursor: pointer;
  border: 1px solid ${({ theme: theme  })=>theme.colors.grey40
};
  height: 16px;
  background: ${({ checked: checked , theme: theme , disabled: disabled  })=>$dbbcd02bf2a1ec7c$var$checkboxBackground(theme, checked, disabled)
};
  transition: all 150ms;
  position: relative;

  ${$dbbcd02bf2a1ec7c$var$HiddenCheckbox}:focus + & {
    ${({ theme: theme  })=>`box-shadow: ${$4fdc3a30451a6008$export$2e2bcd8739ae039(theme)};`
};
  }
  ${$dbbcd02bf2a1ec7c$var$HiddenCheckbox}:hover + & {
    border-color: ${({ theme: theme  })=>theme.colors.grey60
};
  }
  ${$dbbcd02bf2a1ec7c$var$Icon} {
    visibility: ${(props)=>props.checked ? 'visible' : 'hidden'
};
  }

  &:after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    opacity: 0;
    background: ${({ theme: theme  })=>theme.colors.primary100
};
  }
  &:after:before {
    opacity: 0.1;
  }
`;
/**
 * @typedef {object} CheckBoxProps
 * @alias CheckBoxProps
 * @memberof module:@adminjs/design-system.CheckBox
 * @property {string} [...] All props default to _checkbox_ html input like `onChange`,
 *                          `checked` etc.
 */ /**
 * @classdesc
 *
 * <img src="components/checkbox.png" />
 *
 * HTML CheckBox
 *
 * ### Usage
 *
 * ```javascript
 * import { CheckBox, CheckBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-checkbox--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <CheckBox id="checkbox1"/>
 *      <Label inline htmlFor="checkbox1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */ const $dbbcd02bf2a1ec7c$export$ea5f704b89d806f6 = (props)=>{
    const { className: className , checked: checked , onChange: onChange , disabled: disabled , ...restProps } = props;
    const [isChecked, setChecked] = $bdtG2$react.useState(checked !== null && checked !== void 0 ? checked : false);
    const handleChange = (event)=>{
        if (onChange) onChange(event);
        else setChecked(!event.target.checked);
    };
    $bdtG2$react.useEffect(()=>{
        setChecked(checked !== null && checked !== void 0 ? checked : false);
    }, [
        checked
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($dbbcd02bf2a1ec7c$export$2cb2c991e524862c, {
        className: [
            className !== null && className !== void 0 ? className : '',
            'adminjs_Checkbox'
        ].join(' ')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($dbbcd02bf2a1ec7c$var$HiddenCheckbox, {
        checked: isChecked,
        onChange: handleChange,
        ...restProps,
        disabled: disabled
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($dbbcd02bf2a1ec7c$var$StyledCheckbox, {
        checked: isChecked,
        disabled: disabled,
        onClick: (event)=>handleChange && handleChange(event)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($dbbcd02bf2a1ec7c$var$Icon, {
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("polyline", {
        points: "20 6 9 17 4 12"
    })))));
};
var $dbbcd02bf2a1ec7c$export$2e2bcd8739ae039 = $dbbcd02bf2a1ec7c$export$ea5f704b89d806f6;






const $6fcafd7ceb46f118$var$Circle = ($parcel$interopDefault($bdtG2$styledcomponents)).span`
  display: block;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
  border-radius: 9999px;
  background: ${({ theme: theme  })=>theme.colors.white
};
  position: absolute;
  top: 50%;
  left: 50%;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const $6fcafd7ceb46f118$var$HiddenRadio = ($parcel$interopDefault($bdtG2$styledcomponents)).input.attrs({
    type: 'radio'
})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const $6fcafd7ceb46f118$var$radioBackground = (theme, checked, disabled)=>{
    if (checked) return disabled ? theme.colors.grey40 : theme.colors.primary100;
    return theme.colors.white;
};
const $6fcafd7ceb46f118$var$StyledRadio = ($parcel$interopDefault($bdtG2$styledcomponents)).span`
  display: inline-block;
  width: 16px;
  cursor: pointer;
  border: 1px solid ${({ theme: theme  })=>theme.colors.grey40
};
  border-radius: 1000px;
  height: 16px;
  transition: all 150ms;
  position: relative;

  ${$6fcafd7ceb46f118$var$HiddenRadio}:focus + & {
    ${({ theme: theme  })=>`box-shadow: ${$4fdc3a30451a6008$export$2e2bcd8739ae039(theme)}`
};
  }
  ${$6fcafd7ceb46f118$var$HiddenRadio}:hover + & {
    border-color: ${({ theme: theme  })=>theme.colors.grey60
};
  }
  ${$6fcafd7ceb46f118$var$Circle} {
    visibility: ${({ checked: checked  })=>checked ? 'visible' : 'hidden'
};
  }

  background: ${({ checked: checked , theme: theme , disabled: disabled  })=>$6fcafd7ceb46f118$var$radioBackground(theme, checked, disabled)
};
`;
/**
 * @typedef {object} RadioProps
 * @alias RadioProps
 * @memberof Radio
 * @property {string} [...] All props default to _radio_ html input like `onChange`,
 *                          `checked` etc.
 */ /**
 /**
 * @classdesc
 *
 * <img src="components/radio.png" />
 *
 * HTML Radio
 *
 * ### Usage
 *
 * ```javascript
 * import { Radio, RadioProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see RadioProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-radio--default StoryBook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Box p="xl">
 *      <Radio id="radio1"/>
 *      <Label inline htmlFor="radio1" ml="default">Some example label</Label>
 *   </Box>
 * )
 * @section design-system
 */ const $6fcafd7ceb46f118$export$d7b12c4107be0d61 = (props)=>{
    const { className: className , checked: checked , onChange: onChange , disabled: disabled , ...restProps } = props;
    const [isChecked, setChecked] = $bdtG2$react.useState(checked !== null && checked !== void 0 ? checked : false);
    const actuallyChecked = checked !== null && checked !== void 0 ? checked : isChecked;
    const handleChange = (event)=>{
        setChecked(!event.target.checked);
        if (onChange) onChange(event);
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($dbbcd02bf2a1ec7c$export$2cb2c991e524862c, {
        className: className
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($6fcafd7ceb46f118$var$HiddenRadio, {
        checked: actuallyChecked,
        onChange: handleChange,
        ...restProps,
        disabled: disabled
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($6fcafd7ceb46f118$var$StyledRadio, {
        checked: actuallyChecked,
        onClick: (event)=>handleChange && handleChange(event)
        ,
        disabled: disabled
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($6fcafd7ceb46f118$var$Circle, null))));
};
var $6fcafd7ceb46f118$export$2e2bcd8739ae039 = $6fcafd7ceb46f118$export$d7b12c4107be0d61;






/**
 *
 * Gives you the default styles for all "content" elements like:
 * ul, li, h1-h5 etc.
 *
 * ### Example
 *
 * ```typescript
 * import styled from 'styled-components'
 * import { contentCSS } from '@adminjs/design-system'
 *
 * const myComponent = styled`
 *   ${contentCSS};
 * `
 * ```
 *
 * @memberof module:@adminjs/design-system
 */ const $b008e1ca8c6d4f9c$var$contentCSS = $bdtG2$styledcomponents.css`
  font-family: ${({ theme: theme  })=>theme.font
};
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'md')};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
  font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'light')};
  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    &:not([class*="adminjs_"]) {
      margin: 0;
      padding: 0;
    }
  }

  img {
    max-width: 100%;
  }

  p, div {
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'md')};
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'light')};
  }

  strong, b {
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'bolder')}
  }

  li + li {
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
  }

  p:not(:last-child),
  dl:not(:last-child),
  ol:not(:last-child),
  ul:not(:last-child),
  blockquote:not(:last-child),
  pre:not(:last-child),
  table:not(:last-child) {
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  }

  pre {
    background-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey20')};
    border: 1px solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey40')};
    padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
    margin: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')} 0 ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
    white-space: pre;
    font-family: 'Courier New', Courier, monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'light')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xl')};
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h3')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
  }

  h1 {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h1')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xxl')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'x4')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'x3')};
  }

  h2 {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h2')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xxl')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'x3')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
  }

  h3 {
    
  }

  h4 {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h4')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xl')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  }

  h5 {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'xl')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'normal')};
  }

  h6 {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'lg')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'default')};
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'normal')};
  }

  blockquote {
    background-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey20')};
    border-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')} solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary20')};
    padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
    margin: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')} 0;
  }

  ol {
    list-style-position: outside;
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
    margin-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  }
  ol:not([type]) {
    list-style-type: decimal;
  }
  ol:not([type]).is-lower-alpha {
    list-style-type: lower-alpha;
  }
  ol:not([type]).is-lower-roman {
    list-style-type: lower-roman;
  }
  ol:not([type]).is-upper-alpha {
    list-style-type: upper-alpha;
  }
  ol:not([type]).is-upper-roman {
    list-style-type: upper-roman;
  }

  ul {
    list-style: disc outside;
    margin-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
  }
  ul ul {
    list-style-type: circle;
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
  }
  ul ul ul {
    list-style-type: square;
  }

  em {
    font-style: italic;
  }

  dd {
    margin-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  }

  figure {
    margin-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
    margin-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
    text-align: center;
  }
  figure:not(:first-child) {
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
  }
  figure:not(:last-child) {
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
  }
  figure img {
    display: inline-block;
  }
  figure figcaption {
    font-style: italic;
  }

  sup,
  sub {
    font-size: 75%;
  }

  table {
    width: 100%;
    margin: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')} 0;
  }
  table td,
  table th {
    padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
    vertical-align: top;
  }
  table th {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
    border-bottom: 1px solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey40')};
  }

  table td {
    border-bottom: 1px solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey20')};
  }
  table th:not([align]) {
    text-align: inherit;
  }
  table thead td,
  table thead th {
    border-bottom: 1px solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey40')};
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
  }
  table tfoot td,
  table tfoot th {
    border-bottom: 1px solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey40')};
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
  }
  table tbody tr:last-child td,
  table tbody tr:last-child th {
    border-bottom-width: 0;
  }

  .tabs li + li {
    margin-top: 0;
  }
`;
var $b008e1ca8c6d4f9c$export$2e2bcd8739ae039 = $b008e1ca8c6d4f9c$var$contentCSS;



const $856c8c0ad8a28036$var$variants = $bdtG2$styledsystem.variant({
    variants: {
        xs: {
            fontSize: 'xs'
        },
        sm: {
            fontSize: 'sm'
        },
        lg: {
            fontSize: 'lg'
        }
    }
});
/**
 * @classdesc
 *
 * <img src="components/text.png" />
 *
 * Use the Text component to control font size, weight, alignment, and color.
 * By default it is rendered as a `div` but you can change this to other (like `span`)
 * by using `as` prop,
 *
 * ### Usage
 *
 * ```javascript
 * import { Text, TextProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see TextProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-text--default Storybook}
 * @hideconstructor
 * @example <caption>Lorem ipsum</caption>
 * return (
 * <Box>
 *   <Text>
 *    In publishing and graphic design,
 *    Lorem ipsum is a <b>placeholder</b> text commonly used to demonstrate the
 *    visual form of a document or a typeface without relying on meaningful
 *    content.
 *   </Text>
 *   <Text mt="default" variant="sm">This text was from Wikipedia</Text>
 * </Box>
 * )
 * @section design-system
 */ const $856c8c0ad8a28036$export$5f1af8db9871e1d6 = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  ${$b008e1ca8c6d4f9c$export$2e2bcd8739ae039};
  ${$bdtG2$styledsystem.typography};
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.layout};
  ${$bdtG2$styledsystem.color};
  ${$856c8c0ad8a28036$var$variants};
`;
$856c8c0ad8a28036$export$5f1af8db9871e1d6.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Text')
};
var $856c8c0ad8a28036$export$2e2bcd8739ae039 = $856c8c0ad8a28036$export$5f1af8db9871e1d6;






const $2a3c473bef742706$var$sizeVariants = $bdtG2$styledsystem.variant({
    prop: 'size',
    variants: {
        sm: {
            fontSize: 'xs',
            py: 'sm'
        },
        lg: {
            fontSize: 'default'
        }
    }
});
const $2a3c473bef742706$var$variants = $bdtG2$styledsystem.variant({
    variants: {
        primary: {
            color: 'primary100',
            '&:hover': {
                color: 'hoverBg',
                '& svg': {
                    fill: 'hoverBg'
                }
            },
            '& svg': {
                fill: 'primary100'
            }
        },
        danger: {
            color: 'error',
            '&:hover': {
                color: 'error'
            },
            '& svg': {
                fill: 'error'
            }
        },
        success: {
            color: 'success',
            '&:hover': {
                color: 'success'
            },
            '& svg': {
                fill: 'success'
            }
        },
        info: {
            color: 'primary60',
            '&:hover': {
                color: 'hoverBg'
            },
            '& svg': {
                fill: 'primary60'
            }
        },
        secondary: {
            color: 'accent',
            '&:hover': {
                color: 'hoverBg'
            },
            '& svg': {
                fill: 'accent'
            }
        }
    }
});
/**
 * @classdesc
 *
 * <img src="components/link.png" />
 *
 * Styled form of Link element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Link, LinkProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see LinkProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-link--default Storybook}
 * @hideconstructor
 * @example <caption>All color variants</caption>
 * const variants = ['primary', 'danger', 'success', 'info', 'secondary']
 * return (
 * <Box py="xl">
 *   {variants.map(variant => (
 *      <Link href="#" variant={variant} mr="xl">{variant}</Link>
 *   ))}
 * </Box>
 * )
 * @example <caption>With icons</caption>
 * return (
 * <Box py="xl">
 *   <Link href="#" mr="xl">
 *     <Icon icon="Add" />
 *     With an icon
 *   </Link>
 * </Box>
 * )
 * @section design-system
 */ const $2a3c473bef742706$export$a6c7ac8248d6e38a = ($parcel$interopDefault($bdtG2$styledcomponents)).a`
  font-family: ${({ theme: theme  })=>theme.font
};
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  & svg {
    padding-right: ${({ theme: theme  })=>theme.space.default
};
    vertical-align: text-top;
  }
  ${({ uppercase: uppercase  })=>uppercase ? 'text-transform: uppercase;' : ''
}
  ${$bdtG2$styledsystem.color};
  ${$bdtG2$styledsystem.space};
  ${$2a3c473bef742706$var$sizeVariants};
  ${$2a3c473bef742706$var$variants};
`;
$2a3c473bef742706$export$a6c7ac8248d6e38a.defaultProps = {
    color: 'grey60',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Link')
};
var $2a3c473bef742706$export$2e2bcd8739ae039 = $2a3c473bef742706$export$a6c7ac8248d6e38a;







const $abe4556b45ee7c67$var$borderlessCSS = $bdtG2$styledcomponents.css`
  padding: 0;
  border-color: transparent;
  border-width: 0 0 1px 0;
  color: ${({ theme: theme  })=>theme.colors.grey100
};
  &:focus {
    box-shadow: none;
    border-bottom: 1px solid ${({ theme: theme  })=>theme.colors.inputBorder
};
  }

  &:hover {
    cursor: pointer;
  }
`;
const $abe4556b45ee7c67$var$sizeVariants = $bdtG2$styledsystem.variant({
    prop: 'variant',
    variants: {
        default: {
            fontSize: 'default',
            lineHeight: 'lg'
        },
        sm: {
            fontSize: 'sm',
            lineHeight: 'default'
        },
        lg: {
            fontSize: 'lg',
            lineHeight: 'xl'
        },
        xl: {
            fontSize: 'xl',
            lineHeight: 'xxl'
        },
        xxl: {
            fontSize: 'h1',
            fontWeight: 'light',
            lineHeight: 'x4'
        }
    }
});
const $abe4556b45ee7c67$export$936cdf54a6582c80 = $bdtG2$styledcomponents.css`
  box-sizing: border-box;
  color: ${({ theme: theme  })=>theme.colors.grey80
};
  background: transparent;
  border: 1px solid ${({ theme: theme  })=>theme.colors.inputBorder
};
  font-size: ${({ theme: theme  })=>theme.fontSizes.default
};
  line-height: ${({ theme: theme  })=>theme.lineHeights.lg
};
  font-family: ${({ theme: theme  })=>theme.font
};
  outline: none;
  &:hover {
    border-color: ${({ theme: theme  })=>theme.colors.grey60
};
  }
  &:focus {
    border-color: ${({ theme: theme  })=>theme.colors.primary100
};
    ${({ theme: theme  })=>`box-shadow: ${$4fdc3a30451a6008$export$2e2bcd8739ae039(theme)}`
};
  }
  &:disabled {
    color: ${({ theme: theme  })=>$bdtG2$polished.rgba(theme.colors.grey80, 0.5)
};
    border-color: ${({ theme: theme  })=>$bdtG2$polished.rgba(theme.colors.inputBorder, 0.5)
};
  }

  ${({ borderless: borderless  })=>borderless ? $abe4556b45ee7c67$var$borderlessCSS : ''
};
  ${$abe4556b45ee7c67$var$sizeVariants};
`;
/**
 * @classdesc
 *
 * <img src="components/input.png" />
 *
 * Wrapped `input` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { Input, InputProps, InputCSS } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see InputProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-input--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="input1">Some example label</Label>
 *      <Input id="input1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */ const $abe4556b45ee7c67$export$f5b8910cec6cf069 = ($parcel$interopDefault($bdtG2$styledcomponents)).input`
  ${$abe4556b45ee7c67$export$936cdf54a6582c80};
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.layout};
`;
$abe4556b45ee7c67$export$f5b8910cec6cf069.defaultProps = {
    px: 'default',
    py: 'sm',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Input')
};
var $abe4556b45ee7c67$export$2e2bcd8739ae039 = $abe4556b45ee7c67$export$f5b8910cec6cf069;






/**
 * @classdesc
 *
 * <img src="components/textarea.png" />
 *
 * Wrapped `textarea` html element.
 *
 * ### Usage
 *
 * ```javascript
 * import { TextArea, TextAreaProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-textarea--default Storybook}
 * @see TextAreaProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="textarea1">Some example label</Label>
 *      <TextArea id="textarea1" width={1/2} />
 *   </Box>
 * )
 * @section design-system
 */ const $72339b4bedcfaff0$export$f5c9f3c2c4054eec = ($parcel$interopDefault($bdtG2$styledcomponents)).textarea`
  ${$abe4556b45ee7c67$export$936cdf54a6582c80}
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.layout};
  ${$bdtG2$styledsystem.typography};
`;
$72339b4bedcfaff0$export$f5c9f3c2c4054eec.defaultProps = {
    px: 'default',
    py: 'default',
    fontSize: 'lg',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('TextArea')
};
var $72339b4bedcfaff0$export$2e2bcd8739ae039 = $72339b4bedcfaff0$export$f5c9f3c2c4054eec;




var $e2765bd3f7906ef8$exports = {};

$parcel$export($e2765bd3f7906ef8$exports, "Moon", () => $d90dbd0bc5a9aee3$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "Rocket", () => $c1906dd1c8330065$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "Astronaut", () => $14451f298d06605b$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "DocumentCheck", () => $16659531e30f2d49$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "DocumentSearch", () => $f4a1fc4311f00853$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "FileSearch", () => $90fae82ab6085745$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "FlagInCog", () => $a3e759872ae2d37c$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "Folders", () => $44ca9d58277bbd27$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "Launch", () => $f801cf1d0900f430$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "Planet", () => $fb0bf38931e59b10$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "AdminJSLogo", () => $5c100bfd55378315$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "SoftwareBrothersLogo", () => $faeeeacb341c24f6$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "GithubLogo", () => $e25dbe44dd1bcc5d$export$2e2bcd8739ae039);
$parcel$export($e2765bd3f7906ef8$exports, "SlackLogo", () => $d209c23b362b5199$export$2e2bcd8739ae039);

const $d90dbd0bc5a9aee3$var$Moon = (props)=>{
    const { width: width , height: height  } = props;
    const svgWidth = width || '260px';
    const svgHeight = height || '260px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 260 260",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("defs", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "path-1",
        cx: "106",
        cy: "106",
        r: "106"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("filter", {
        x: "-17.0%",
        y: "-17.0%",
        width: "134.0%",
        height: "134.0%",
        filterUnits: "objectBoundingBox",
        id: "filter-2"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("feOffset", {
        dx: "0",
        dy: "0",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("feGaussianBlur", {
        stdDeviation: "12",
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("feColorMatrix", {
        values: "0 0 0 0 0.958112299 0 0 0 0 0.910577834 0 0 0 0 0.855913579 0 0 0 1 0",
        type: "matrix",
        in: "shadowBlurOuter1"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "path-3",
        cx: "106",
        cy: "106",
        r: "106"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Main-Templates",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-12",
        transform: "translate(24.000000, 24.000000)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Oval"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("use", {
        fill: "black",
        fillOpacity: "1",
        filter: "url(#filter-2)",
        href: "#path-1"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("use", {
        fill: "#F4E8DB",
        fillRule: "evenodd",
        href: "#path-1"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Path-7"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("mask", {
        id: "mask-4",
        fill: "white"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("use", {
        href: "#path-3"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("use", {
        id: "Mask",
        fill: "#F4E8DB",
        href: "#path-3"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M39.8069626,3.76747066 C45.3021184,115.593145 97.2894125,176.043124 195.768845,185.117407 C294.248278,194.191689 253.575457,215.872553 73.750384,250.16 L-33.92,160.780637 L-25.2907546,24.0909209 L26.5457822,-4.24 L39.8069626,3.76747066 Z",
        fill: "#C8BBB2",
        mask: "url(#mask-4)"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval",
        fill: "#C8BBB2",
        cx: "80.5",
        cy: "37.5",
        r: "22.5"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-3",
        fill: "#C8BBB2",
        cx: "158",
        cy: "66",
        r: "17"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-4",
        stroke: "#F4E8DB",
        strokeWidth: "3",
        fill: "#C8BBB2",
        cx: "124",
        cy: "166",
        r: "17"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-5",
        stroke: "#F4E8DB",
        strokeWidth: "1.6875",
        fill: "#C8BBB2",
        cx: "58.5",
        cy: "92.5",
        r: "9.5"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy",
        fill: "#C8BBB2",
        cx: "157.5",
        cy: "124.5",
        r: "8.5"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-6",
        fill: "#C8BBB2",
        cx: "190",
        cy: "96",
        r: "3"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-8",
        fill: "#C8BBB2",
        cx: "81",
        cy: "113",
        r: "3"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-7",
        fill: "#C8BBB2",
        cx: "126",
        cy: "29",
        r: "3"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-2",
        fill: "#C8BBB2",
        cx: "97.5",
        cy: "101.5",
        r: "8.5"
    })))));
};
var $d90dbd0bc5a9aee3$export$2e2bcd8739ae039 = $d90dbd0bc5a9aee3$var$Moon;



const $c1906dd1c8330065$export$c622ac6ddd491a46 = ()=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: "249px",
        height: "179px",
        viewBox: "0 0 249 179",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("defs", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-1"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFAB86",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFB44E",
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-2"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFAB86",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFB44E",
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFF2B1",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFEA7E",
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-4"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFF2B1",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFCD7E",
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-5"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFAB86",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFB44E",
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-6"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFF2B1",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFEA7E",
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-7"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFF2B1",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#FFCD7E",
        offset: "100%"
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Main-Templates",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Rocket-with-motion",
        transform: "translate(140.500000, 74.000000) rotate(17.000000) translate(-140.500000, -74.000000) translate(19.000000, -40.000000)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Rocket",
        transform: "translate(137.662345, 112.855740) rotate(7.000000) translate(-137.662345, -112.855740) translate(44.162345, 11.355740)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-15"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-29",
        fill: "#F4E8DB",
        cx: "116.379625",
        cy: "57.5932962",
        rx: "2.01348833",
        ry: "2.01375162"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-31",
        fill: "#F4E8DB",
        cx: "34.2293016",
        cy: "155.058874",
        rx: "2.01348833",
        ry: "2.01375162"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-19",
        fill: "#F4E8DB",
        cx: "160.273671",
        cy: "140.157112",
        rx: "4.02697665",
        ry: "4.02750323"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-23",
        fill: "#F4E8DB",
        cx: "74.0963704",
        cy: "51.5520414",
        rx: "4.02697665",
        ry: "4.02750323"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-13",
        transform: "translate(7.404023, 136.898722)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M29.2933675,62.4051811 C35.8296538,62.4051811 41.1280139,56.981389 41.127586,50.2898688 C41.1271581,43.5983485 33.1286817,0.598536152 29.2894151,0.598536152 C25.4501486,0.598536152 17.4571716,43.5968348 17.4575995,50.2883551 C17.4580274,56.9798753 22.7570812,62.4051811 29.2933675,62.4051811 Z",
        id: "Oval-Copy-38",
        fill: "url(#linearGradient-2)",
        transform: "translate(29.292593, 31.501859) rotate(-141.000000) translate(-29.292593, -31.501859) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M31.7199672,52.9593428 C36.0774914,52.9593428 39.6097439,49.5375303 39.6094739,45.3158883 C39.609204,41.0942463 36.2259176,5.20641018 31.9585807,5.20641018 C27.6912437,5.20641018 23.829213,41.0932372 23.8294829,45.3148792 C23.8297529,49.5365212 27.362443,52.9593428 31.7199672,52.9593428 Z",
        id: "Oval-Copy-39",
        fill: "url(#linearGradient-3)",
        transform: "translate(31.719478, 29.082876) rotate(-141.000000) translate(-31.719478, -29.082876) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M34.9968773,41.9727682 C38.5555221,41.9727682 41.440206,39.3509657 41.4399991,36.1163003 C41.4397923,32.8816348 39.1523789,8.14353111 35.5937342,8.14353111 C32.0350894,8.14353111 28.5527996,32.8808107 28.5530065,36.1154762 C28.5532133,39.3501416 31.4382326,41.9727682 34.9968773,41.9727682 Z",
        id: "Oval-Copy-39",
        fill: "url(#linearGradient-4)",
        transform: "translate(34.996503, 25.058150) rotate(-141.000000) translate(-34.996503, -25.058150) "
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-11",
        transform: "translate(102.175136, 89.252917) rotate(40.000000) translate(-102.175136, -89.252917) translate(59.675136, 8.752917)",
        fillRule: "nonzero",
        stroke: "#C9D1F6",
        strokeWidth: "1.97424893"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M67.7777024,49.7502517 L70.9362925,43.3067657 C71.4162191,42.3277211 72.598949,41.9231061 73.5779935,42.4030327 C73.9711105,42.5957382 74.289021,42.9136487 74.4817265,43.3067657 L77.6403166,49.7502517 C78.8999695,52.3199286 79.5548698,55.1437885 79.5548698,58.0055999 L79.5548698,151.358137 C79.5548698,151.903311 79.1129192,152.345261 78.5677454,152.345261 L66.8502737,152.345261 C66.3050999,152.345261 65.8631492,151.903311 65.8631492,151.358137 L65.8631492,58.0055999 C65.8631492,55.1437885 66.5180495,52.3199286 67.7777024,49.7502517 Z",
        id: "Rectangle",
        fill: "#FFFFFF",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M7.91445895,50.2479489 L11.0730491,43.8044629 C11.5529757,42.8254183 12.7357055,42.4208033 13.7147501,42.9007299 C14.107867,43.0934354 14.4257776,43.4113459 14.6184831,43.8044629 L17.7770732,50.2479489 C19.0367261,52.8176258 19.6916264,55.6414857 19.6916264,58.5032971 L19.6916264,151.855834 C19.6916264,152.401008 19.2496757,152.842959 18.7045019,152.842959 L6.98703021,152.842959 C6.44185643,152.842959 5.99990575,152.401008 5.99990575,151.855834 L5.99990575,58.5032971 C5.99990575,55.6414857 6.65480605,52.8176258 7.91445895,50.2479489 Z",
        id: "Rectangle-Copy-11",
        fill: "#FFFFFF",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M33.0906011,11.354303 L39.4002623,2.2723825 C40.6444904,0.481481126 43.104949,0.0383148853 44.8958504,1.282543 C45.2821175,1.55090196 45.6173309,1.88611536 45.8856899,2.2723825 L52.195351,11.354303 C57.249981,18.6297726 59.9589757,27.2769281 59.9589757,36.1359202 L59.9589757,116.427862 L59.9589757,116.427862 L25.3269765,116.427862 L25.3269765,36.1359202 C25.3269765,27.2769281 28.0359712,18.6297726 33.0906011,11.354303 Z",
        id: "Rectangle",
        fill: "#F0F1F9",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M51.0709343,145.945436 L52.4616111,78.430609 L57.2782797,97.1345431 C59.5841699,106.088702 64.1795587,114.289067 70.6130652,120.930158 L75.1292812,125.592095 C78.7263886,129.305267 81.1674641,133.983364 82.155819,139.057808 L83.2511862,144.681678 C83.2493456,145.075537 83.1550246,145.406318 82.9636792,145.638528 C82.7984747,145.839014 82.5607084,145.945436 82.2993925,145.945436 L51.0709343,145.945436 Z",
        id: "Path-3",
        fill: "#F0F1F9"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M1.47150229,145.425806 L2.86217912,77.9109797 L7.67884773,96.6149137 C9.98473789,105.569073 14.5801267,113.769438 21.0136332,120.410529 L25.5298492,125.072466 C29.1269566,128.785638 31.5680321,133.463734 32.556387,138.538179 L33.6517543,144.162049 C33.6499136,144.555907 33.5555926,144.886689 33.3642472,145.118899 C33.1990427,145.319385 32.9612764,145.425806 32.6999605,145.425806 L1.47150229,145.425806 Z",
        id: "Path-3-Copy",
        fill: "#F0F1F9",
        transform: "translate(17.779835, 108.554400) scale(-1, 1) translate(-17.779835, -108.554400) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M34.132116,58.9706471 L38.6749518,50.4371325 C39.9558754,48.0309746 42.9448456,47.1187919 45.3510036,48.3997155 C46.2176737,48.8610893 46.9270468,49.5704624 47.3884206,50.4371325 L51.9312564,58.9706471 C53.7557124,62.3978065 54.7099185,66.2208379 54.7099185,70.1033707 L54.7099185,151.938396 L54.7099185,151.938396 L31.3534539,151.938396 L31.3534539,70.1033707 C31.3534539,66.2208379 32.3076599,62.3978065 34.132116,58.9706471 Z",
        id: "Rectangle-2",
        fill: "#FFFFFF",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M59.4280489,155.429317 L25.9649033,155.429317 L25.9649033,146.347684 C25.9649033,143.83986 26.9813998,141.569451 28.6248522,139.925999 C30.2683047,138.282547 32.5387131,137.26605 35.0465369,137.26605 L50.3464153,137.26605 C52.8542392,137.26605 55.1246476,138.282547 56.7681,139.925999 C58.4115525,141.569451 59.4280489,143.83986 59.4280489,146.347684 L59.4280489,155.429317 Z",
        id: "Rectangle",
        fill: "#FFFFFF"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M42.9716921,126.282389 L42.9716921,160.264511",
        id: "Line-2",
        fill: "#F0F1F9",
        strokeLinecap: "round"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-14",
        transform: "translate(45.907534, 162.711131)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M17.7186,38.6625878 C21.7220753,38.6625878 24.9673209,35.3405151 24.9670588,31.241959 C24.9667967,27.1434028 19.3527647,0.806017733 17.7161791,0.806017733 C16.0795936,0.806017733 10.46893,27.1424757 10.469192,31.2410318 C10.4694541,35.339588 13.7151246,38.6625878 17.7186,38.6625878 Z",
        id: "Oval",
        fill: "url(#linearGradient-5)",
        transform: "translate(17.718125, 19.734303) rotate(-141.000000) translate(-17.718125, -19.734303) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M19.8990176,30.9168623 C22.5680012,30.9168623 24.7315058,28.8210022 24.7313405,26.2352465 C24.7311751,23.6494907 23.015537,3.87414324 20.3465534,3.87414324 C17.6775699,3.87414324 15.0659306,23.6488726 15.066096,26.2346284 C15.0662613,28.8203841 17.2300341,30.9168623 19.8990176,30.9168623 Z",
        id: "Oval-Copy-35",
        fill: "url(#linearGradient-6)",
        transform: "translate(19.898718, 17.395503) rotate(-141.000000) translate(-19.898718, -17.395503) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M21.5173735,25.4314166 C23.5191112,25.4314166 25.1417404,23.8708065 25.1416173,21.9454104 C25.1414942,20.0200143 23.8547724,5.29496477 21.8530347,5.29496477 C19.851297,5.29496477 17.8925608,20.0195507 17.8926839,21.9449468 C17.8928071,23.8703429 19.5156359,25.4314166 21.5173735,25.4314166 Z",
        id: "Oval-Copy-40",
        fill: "url(#linearGradient-7)",
        transform: "translate(21.517151, 15.363191) rotate(-141.000000) translate(-21.517151, -15.363191) "
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-14-Copy",
        transform: "translate(0.000000, 124.047100)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M17.7186,38.6625878 C21.7220753,38.6625878 24.9673209,35.3405151 24.9670588,31.241959 C24.9667967,27.1434028 19.3527647,0.806017733 17.7161791,0.806017733 C16.0795936,0.806017733 10.46893,27.1424757 10.469192,31.2410318 C10.4694541,35.339588 13.7151246,38.6625878 17.7186,38.6625878 Z",
        id: "Oval",
        fill: "url(#linearGradient-5)",
        transform: "translate(17.718125, 19.734303) rotate(-141.000000) translate(-17.718125, -19.734303) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M19.8990176,30.9168623 C22.5680012,30.9168623 24.7315058,28.8210022 24.7313405,26.2352465 C24.7311751,23.6494907 23.015537,3.87414324 20.3465534,3.87414324 C17.6775699,3.87414324 15.0659306,23.6488726 15.066096,26.2346284 C15.0662613,28.8203841 17.2300341,30.9168623 19.8990176,30.9168623 Z",
        id: "Oval-Copy-35",
        fill: "url(#linearGradient-6)",
        transform: "translate(19.898718, 17.395503) rotate(-141.000000) translate(-19.898718, -17.395503) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M21.5173735,25.4314166 C23.5191112,25.4314166 25.1417404,23.8708065 25.1416173,21.9454104 C25.1414942,20.0200143 23.8547724,5.29496477 21.8530347,5.29496477 C19.851297,5.29496477 17.8925608,20.0195507 17.8926839,21.9449468 C17.8928071,23.8703429 19.5156359,25.4314166 21.5173735,25.4314166 Z",
        id: "Oval-Copy-40",
        fill: "url(#linearGradient-7)",
        transform: "translate(21.517151, 15.363191) rotate(-141.000000) translate(-21.517151, -15.363191) "
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M80.0494403,116.335122 C88.8076699,101.144407 113.894541,71.6934295 155.310052,27.9821891 L155.310052,13.433931 L76.2854597,24.2179367 L9.01739077,110.071572 L67.1069868,158.925202 L90.4566162,178.55709 C74.7602694,152.266493 71.2912108,131.525837 80.0494403,116.335122 Z",
        id: "Path-8",
        fillOpacity: "0.16",
        fill: "#192035"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval",
        stroke: "#ACB3D7",
        strokeWidth: "0.987124464",
        fill: "#CBD5FD",
        cx: "134.150589",
        cy: "51.1969656",
        rx: "6.09273175",
        ry: "6.08892935"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-36",
        fill: "#ACB3D7",
        cx: "134.13899",
        cy: "51.1391751",
        rx: "3.80795734",
        ry: "3.80558084"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-37",
        fill: "#CBD4FF",
        cx: "131.474713",
        cy: "49.3326297",
        rx: "2.28477441",
        ry: "2.28334851"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ellipse", {
        id: "Oval-Copy-41",
        fill: "#CBD4FF",
        cx: "135.128283",
        cy: "51.6142094",
        rx: "1",
        ry: "1"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-31",
        fill: "#F4E8DB",
        cx: "38.1284868",
        cy: "108.303169",
        r: "1"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-22",
        fill: "#F4E8DB",
        cx: "4.32112887",
        cy: "163.723438",
        r: "3.94849785"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "153.739825",
        y1: "166.762478",
        x2: "133.010212",
        y2: "186.504967",
        id: "Path-9-Copy",
        stroke: "#F4E8DA",
        strokeWidth: "2.96137339",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "71.0180476",
        y1: "196.046139",
        x2: "54.2369317",
        y2: "210.853006",
        id: "Path-9-Copy-2",
        stroke: "#F4E8DA",
        strokeWidth: "2.96137339",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "39.4304561",
        y1: "139.905466",
        x2: "27.5849626",
        y2: "150.763835",
        id: "Path-9-Copy-5",
        stroke: "#F4E8DA",
        strokeWidth: "2.96137339",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "27.0808447",
        y1: "220.357763",
        x2: "18.1967246",
        y2: "226.28051",
        id: "Path-9-Copy-6",
        stroke: "#F4E8DA",
        strokeWidth: "2.96137339",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "42.5501636",
        y1: "169.913846",
        x2: "4.05230955",
        y2: "203.476077",
        id: "Path-9-Copy-3",
        stroke: "#F4E8DA",
        strokeWidth: "2.96137339",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "143.094269",
        y1: "193.740995",
        x2: "104.596415",
        y2: "227.303226",
        id: "Path-9-Copy-4",
        stroke: "#F4E8DA",
        strokeWidth: "2.96137339",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }))))
;
var $c1906dd1c8330065$export$2e2bcd8739ae039 = $c1906dd1c8330065$export$c622ac6ddd491a46;



const $14451f298d06605b$export$8256c85a9a1eba11 = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 2.000000)",
        stroke: theme.colors.primary60,
        strokeWidth: "3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,123.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
        id: "Path-Copy-2",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M104.072464,59.4347826 L107.42029,59.4347826 C110.501879,59.4347826 113,61.9329039 113,65.0144928 L113,72.826087 C113,75.9076758 110.501879,78.4057971 107.42029,78.4057971 L104.072464,78.4057971",
        id: "Path",
        fill: theme.colors.primary20
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M36,59.4347826 L39.3478261,59.4347826 C42.4294149,59.4347826 44.9275362,61.9329039 44.9275362,65.0144928 L44.9275362,72.826087 C44.9275362,75.9076758 42.4294149,78.4057971 39.3478261,78.4057971 L36,78.4057971",
        id: "Path-Copy-8",
        fill: theme.colors.primary20,
        transform: "translate(40.463768, 68.920290) scale(-1, 1) translate(-40.463768, -68.920290) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M73.942029,36 L75.057971,36 C91.6985507,36 105.188406,49.4898551 105.188406,66.1304348 L105.188406,74.2608696 C105.188406,86.4111341 95.3386703,96.2608696 83.1884058,96.2608696 L65.8115942,96.2608696 C53.6613297,96.2608696 43.8115942,86.4111341 43.8115942,74.2608696 L43.8115942,66.1304348 C43.8115942,49.4898551 57.3014493,36 73.942029,36 Z",
        id: "Rectangle"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M61.6231884,54.9710145 L87.3768116,54.9710145 C92.8996591,54.9710145 97.3768116,59.448167 97.3768116,64.9710145 L97.3768116,71.1521739 C97.3768116,80.0887815 90.1322598,87.3333333 81.1956522,87.3333333 L67.8043478,87.3333333 C58.8677402,87.3333333 51.6231884,80.0887815 51.6231884,71.1521739 L51.6231884,64.9710145 C51.6231884,59.448167 56.1003409,54.9710145 61.6231884,54.9710145 Z",
        id: "Rectangle",
        fill: theme.colors.primary20
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M98.1625549,96.4072839 C104.039008,97.3212203 108.536232,102.403535 108.536232,108.536232 L108.536232,118.134734 C108.536232,119.211784 107.767028,120.135188 106.707715,120.329844 C106.055061,120.449774 105.513749,120.546295 105.083779,120.619408 C95.9922338,122.165353 85.5737028,123.043478 74.5,123.043478",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M63.9958478,122.775649 C56.839568,122.406752 50.0823079,121.667204 43.9319499,120.622082 C43.4981804,120.548372 42.951644,120.450947 42.2923407,120.329807 C41.2329855,120.135184 40.4637681,119.211754 40.4637681,118.134669 L40.4637681,108.536232 C40.4637681,102.446055 44.8988464,97.391746 50.715414,96.426894",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M100.724638,87.6057924 C100.724638,97.4668767 92.7306494,105.188406 82.8695652,105.188406 L66.1304348,105.188406 C56.2693506,105.188406 48.2753623,97.4668767 48.2753623,87.6057924",
        id: "Path",
        strokeLinecap: "round"
    })))));
};
var $14451f298d06605b$export$2e2bcd8739ae039 = $14451f298d06605b$export$8256c85a9a1eba11;



const $16659531e30f2d49$export$32d9c381ef958b70 = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 2.000000)",
        stroke: theme.colors.primary60,
        strokeWidth: "3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,126.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
        id: "Path-Copy-5",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M105,70.0296545 C105,87.5771932 105,100.077741 105,107.531297 L105,120.263384 C105,121.093743 105,122.339282 105,124 C105,125.104569 104.104569,126 103,126 L73.9676297,126",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M54,42.2162102 L54,54 C54,55.1045695 53.1045695,56 52,56 L40.1644979,56",
        id: "Path-Copy-9",
        fill: theme.colors.primary20
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M58.7460443,126 L42,126 C40.8954305,126 40,125.104569 40,124 L40,55.6898628 L53.6898628,42 C63.9564524,42 71.6563946,42 76.7896894,42",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "58.5",
        y1: "89.5",
        x2: "86.8715634",
        y2: "89.5",
        id: "Line-4",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "58.5",
        y1: "104.5",
        x2: "86.8715634",
        y2: "104.5",
        id: "Line-4-Copy",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval",
        fill: theme.colors.primary20,
        cx: "92",
        cy: "55",
        r: "20"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("polyline", {
        id: "Path",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "103.727922 49 91 61.7279221 83.8715634 54.5994855"
    })))));
};
var $16659531e30f2d49$export$2e2bcd8739ae039 = $16659531e30f2d49$export$32d9c381ef958b70;



const $f4a1fc4311f00853$export$7c8c703f02ec3453 = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 2.000000)",
        stroke: theme.colors.primary60,
        strokeWidth: "3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,126.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
        id: "Path-Copy-4",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M106,120.263384 C106,121.093743 106,122.339282 106,124 C106,125.104569 105.104569,126 104,126 L74,126",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M55,42.2162102 L55,54 C55,55.1045695 54.1045695,56 53,56 L41.1644979,56",
        id: "Path",
        fill: theme.colors.primary20
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M56.5220968,126 L43,126 C41.8954305,126 41,125.104569 41,124 L41,55.6898628 L54.6898628,42 L104,42 C105.104569,42 106,42.8954305 106,44 C106,75.6283541 106,96.8054529 106,107.531297",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval",
        fill: theme.colors.primary20,
        cx: "76",
        cy: "84",
        r: "18"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy-2",
        fill: theme.colors.white,
        cx: "76",
        cy: "84",
        r: "10"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("rect", {
        id: "Rectangle",
        fill: theme.colors.primary20,
        transform: "translate(105.316743, 113.185977) rotate(-315.000000) translate(-105.316743, -113.185977) ",
        x: "91.8167434",
        y: "108.685977",
        width: "27",
        height: "9",
        rx: "2"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "88.5",
        y1: "96.5",
        x2: "95.4689509",
        y2: "103.468951",
        id: "Line-3"
    })))));
};
var $f4a1fc4311f00853$export$2e2bcd8739ae039 = $f4a1fc4311f00853$export$7c8c703f02ec3453;



const $90fae82ab6085745$export$a1d661b3e1739e0d = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("defs", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-1"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.primary60,
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.primary100,
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "156.737419%",
        id: "linearGradient-2"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.primary60,
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.primary100,
        offset: "99.9727331%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.filterBg,
        offset: "100%"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "linearGradient-3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.primary60,
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: theme.colors.primary100,
        offset: "100%"
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-10",
        transform: "translate(2.000000, 2.000000)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,124.741589 L74,161.762456 C74,163.553649 72.5479505,165.005699 70.7567568,165.005699 C70.191601,165.005699 69.6362551,164.858017 69.1457523,164.57729 L6.67495026,128.823589 L6.67495026,128.823589 C2.54398439,126.459328 0,122.095239 0,117.373019 L0,47.9293229 C0,43.2071024 2.54398439,38.843014 6.67495026,36.4787525 L67.3072083,1.77729956 C71.4477337,-0.592433188 76.5522663,-0.592433188 80.6927917,1.77729956 L141.32505,36.4787525 C145.456016,38.843014 148,43.2071024 148,47.9293229 L148,117.373019 C148,122.095239 145.456016,126.459328 141.32505,128.823589 L92.2812226,156.892675",
        id: "Path-Copy-5",
        stroke: "url(#linearGradient-1)",
        strokeWidth: "3"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(26.000000, 44.000000)",
        fill: "url(#linearGradient-2)",
        stroke: "url(#linearGradient-3)",
        strokeWidth: "0.5"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M27.9631397,3.55271368e-15 C33.4624013,3.55271368e-15 38.3808566,2.52087 41.6553672,6.48487465 L81.9472527,6.48596321 C84.0762362,6.48596321 85.8021183,8.23554166 85.8021183,10.3937561 L85.802,28.325 L88.2515308,28.3252823 L88.251,32.429 L93,32.4298161 L93,59.7472937 L85.8455246,67 L58.8980359,67 L58.898,62.186 L54.8490941,62.1863343 L54.849,59.703 L23.5644342,59.7032914 C21.4354508,59.7032914 19.7095687,57.9537129 19.7095687,55.7954985 L19.7093454,34.1452905 C18.6082798,33.562194 17.574686,32.8660733 16.6235455,32.0721158 L14.6182598,34.103252 L14.8620406,34.3506585 C15.8011053,35.3026166 15.8011053,36.8460456 14.8620406,37.7980037 L7.72142069,45.0366643 C6.78235595,45.9886224 5.25983119,45.9886224 4.32076645,45.0366643 L1.70429855,42.3842723 C0.765233815,41.4323142 0.765233815,39.8888852 1.70429855,38.9369271 L8.84491844,31.6982665 C9.78398317,30.7463084 11.3065079,30.7463084 12.2455727,31.6982665 L12.4882598,31.944252 L14.4672092,29.9403992 C11.7540916,26.766322 10.112393,22.6254316 10.112393,18.0958374 C10.112393,8.10178235 18.1044446,3.55271368e-15 27.9631397,3.55271368e-15 Z M91.688386,33.7594385 L60.2096499,33.7594385 L60.2096499,65.6703775 L84.84,65.67 L84.840268,58.7282349 L91.688,58.728 L91.688386,33.7594385 Z M91.538,59.348 L85.4523545,59.3487254 L85.452,65.518 L91.538,59.348 Z M87.6394442,28.9457728 L55.4611807,28.9457728 L55.4611807,61.5658438 L58.898,61.565 L58.8980359,32.4298161 L87.639,32.429 L87.6394442,28.9457728 Z M84.49,15.163 L45.5807319,15.1635935 C45.7341329,16.1179982 45.8138864,17.0974762 45.8138864,18.0958374 C45.8138864,28.0898924 37.8218349,36.1916747 27.9631397,36.1916747 C25.5007911,36.1916747 23.1548876,35.6862683 21.0208682,34.7722046 L21.0211827,55.7954985 C21.0211827,57.2193827 22.1598352,58.3736689 23.5644342,58.3736689 L54.849,58.373 L54.8490941,28.3252823 L84.49,28.325 L84.49,15.163 Z M78.4992495,48.4723056 C78.6682725,48.4723056 78.8052927,48.6112071 78.8052927,48.7825508 C78.8052927,48.9538945 78.6682725,49.0927961 78.4992495,49.0927961 L67.0125174,49.0927961 C66.8434944,49.0927961 66.7064742,48.9538945 66.7064742,48.7825508 C66.7064742,48.6112071 66.8434944,48.4723056 67.0125174,48.4723056 L78.4992495,48.4723056 Z M9.77236959,32.6384516 L2.63174971,39.8771121 C2.2049021,40.3098203 2.2049021,41.011379 2.63174971,41.4440872 L5.24821761,44.0964792 C5.67506522,44.5291874 6.36712193,44.5291874 6.79396954,44.0964792 L13.9345894,36.8578186 C14.361437,36.4251104 14.361437,35.7235518 13.9345894,35.2908435 L11.3181215,32.6384516 C10.8912739,32.2057433 10.1992172,32.2057433 9.77236959,32.6384516 Z M85.5477644,42.7970878 C85.7167874,42.7970878 85.8538076,42.9359893 85.8538076,43.107333 C85.8538076,43.2786767 85.7167874,43.4175783 85.5477644,43.4175783 L67.1689931,43.4175783 C66.9999701,43.4175783 66.8629499,43.2786767 66.8629499,43.107333 C66.8629499,42.9359893 66.9999701,42.7970878 67.1689931,42.7970878 L85.5477644,42.7970878 Z M27.9631397,1.32962246 C18.828829,1.32962246 11.424007,8.83611256 11.424007,18.0958374 C11.424007,27.3555622 18.828829,34.8620523 27.9631397,34.8620523 C37.0974505,34.8620523 44.5022724,27.3555622 44.5022724,18.0958374 C44.5022724,8.83611256 37.0974505,1.32962246 27.9631397,1.32962246 Z M14.8764421,30.4029656 L12.9212598,32.383252 L14.1852598,33.665252 L16.1555297,31.6676037 C15.7087055,31.2678064 15.281777,30.8456865 14.8764421,30.4029656 Z M27.9631397,4.408293 C35.4201767,4.408293 41.4652995,10.5364153 41.4652995,18.0958374 C41.4652995,25.6552594 35.4201767,31.7833817 27.9631397,31.7833817 C20.5061028,31.7833817 14.46098,25.6552594 14.46098,18.0958374 C14.46098,10.5364153 20.5061028,4.408293 27.9631397,4.408293 Z M27.9631397,5.02878348 C20.8441489,5.02878348 15.0730665,10.8791028 15.0730665,18.0958374 C15.0730665,25.312572 20.8441489,31.1628913 27.9631397,31.1628913 C35.0821306,31.1628913 40.853213,25.312572 40.853213,18.0958374 C40.853213,10.8791028 35.0821306,5.02878348 27.9631397,5.02878348 Z M27.9631397,8.46202001 C28.1321628,8.46202001 28.269183,8.60092153 28.269183,8.77226525 C28.269183,8.94360896 28.1321628,9.08251049 27.9631397,9.08251049 C23.0526379,9.08251049 19.0718897,13.1179144 19.0718897,18.0958374 C19.0718897,18.2671811 18.9348694,18.4060826 18.7658464,18.4060826 C18.5968234,18.4060826 18.4598031,18.2671811 18.4598031,18.0958374 C18.4598031,12.775227 22.7145919,8.46202001 27.9631397,8.46202001 Z M42.6549454,7.81468876 C44.0125608,9.8045911 44.9869199,12.0837237 45.4698482,14.5424266 L84.49,14.542 L84.4905043,10.3937561 C84.4905043,8.96987187 83.3518518,7.81558567 81.9472527,7.81558567 L42.6549454,7.81468876 Z",
        id: "Combined-Shape"
    }))))));
};
var $90fae82ab6085745$export$2e2bcd8739ae039 = $90fae82ab6085745$export$a1d661b3e1739e0d;



const $a3e759872ae2d37c$export$638b2b0b6efb9e27 = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 2.000000)",
        stroke: theme.colors.primary60,
        strokeWidth: "3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,102.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
        id: "Path-Copy-3",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M51,49 L119,49 C120.104569,49 121,49.8954305 121,51 L121,92 C121,93.1045695 120.104569,94 119,94 L51,94 L51,94",
        id: "Path",
        fill: theme.colors.primary20
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "50.5",
        y1: "117.664666",
        x2: "50.5",
        y2: "46",
        id: "Line-2",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M90.239435,81.7782712 C90.0631269,82.1676449 89.8758447,82.5512259 89.6779671,82.9286394 L82.2989672,82.9286393 L81.8937728,82.0669236 L78.1172716,83.9875645 L76.5591632,79.8394848 C76.3961623,79.1332341 76.5739129,78.396551 77.0393222,77.8413752 L79.8721037,74.4622162 C79.8249919,73.8746857 79.8009823,73.2808202 79.8009823,72.6814838 C79.8009823,67.7927344 81.3963573,63.2674855 84.107847,59.5756058 C84.5362871,59.0098353 84.997813,58.7370453 85.4095325,58.6086382 C86.0930507,58.3954624 86.7419904,58.5264664 87.2751427,58.9131117 C90.61381,63.2761567 92.1990177,67.7991512 92.1990177,72.6814838 C92.1990177,73.2808202 92.1750081,73.8746857 92.1278963,74.4622162 L94.9606778,77.8413752 C95.3806819,78.3423882 95.5664172,78.9912204 95.4788634,79.6321076 L94.9309945,83.6424664 L90.239435,81.7782712 Z",
        id: "Path",
        fill: theme.colors.white
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M18.4450668,124.33815 C20.3880749,122.496562 22.421736,120.749671 24.5386602,119.104867 L22.349674,115.734124 C21.7480823,114.807754 22.0113671,113.569097 22.9377371,112.967505 L31.3244427,107.521115 C32.2508127,106.919523 33.4894703,107.182808 34.0910619,108.109178 L36.2893205,111.494199 C43.9325843,107.429769 52.2997247,104.546693 61.1471982,103.088517",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74.5,102 C86.2343886,102 97.389559,104.479928 107.469997,108.944271 L109.522759,105.388784 C110.075043,104.432199 111.298224,104.104449 112.254809,104.656733 L125.245191,112.156733 C126.201776,112.709018 126.529526,113.932199 125.977241,114.888784 L123.825459,118.615781 C126.097192,120.345426 128.275354,122.191655 130.351025,124.145546",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "82.5",
        y1: "19.5",
        x2: "82.5",
        y2: "32.5278784",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "82.5",
        y1: "19.5",
        x2: "82.5",
        y2: "32.5278784",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(82.500000, 26.000000) rotate(-270.000000) translate(-82.500000, -26.000000) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "30.5",
        y1: "40.3",
        x2: "30.5",
        y2: "48.1167271",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "30.4916365",
        y1: "40.2916365",
        x2: "30.4916365",
        y2: "48.1083635",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(30.491636, 44.200000) rotate(-270.000000) translate(-30.491636, -44.200000) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "17.5",
        y1: "78.4333333",
        x2: "17.5",
        y2: "89.7241613",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "17.4879193",
        y1: "78.4212527",
        x2: "17.4879193",
        y2: "89.7120807",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(17.487919, 84.066667) rotate(-270.000000) translate(-17.487919, -84.066667) "
    })))));
};
var $a3e759872ae2d37c$export$2e2bcd8739ae039 = $a3e759872ae2d37c$export$638b2b0b6efb9e27;



const $44ca9d58277bbd27$export$2e94369282314f8 = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 2.000000)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,124.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
        id: "Path-Copy-6",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M80,75.4190948 C80,70.9185608 80,64.1677599 80,55.166692 L89.166692,46 L122.184615,46 C122.924232,46 123.52381,46.5995776 123.52381,47.3391941 C123.52381,68.5174474 123.52381,82.6975707 123.52381,89.8795641 L123.52381,98.4049324 C123.52381,98.9609384 123.52381,99.7949476 123.52381,100.90696 C123.52381,101.646576 122.924232,102.246154 122.184615,102.246154 C119.775905,102.246154 117.969372,102.246154 116.765016,102.246154 L107.980724,68.9485742 L80,75.4190948 Z",
        id: "Path",
        fill: theme.colors.primary20,
        transform: "translate(101.761905, 74.123077) rotate(-345.000000) translate(-101.761905, -74.123077) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M80,75.4190948 C80,70.9185608 80,64.1677599 80,55.166692 L89.166692,46 L122.184615,46 C122.924232,46 123.52381,46.5995776 123.52381,47.3391941 C123.52381,68.5174474 123.52381,82.6975707 123.52381,89.8795641 L123.52381,98.4049324 L123.52381,98.4049324 C123.52381,98.9609384 123.52381,99.7949476 123.52381,100.90696 C123.52381,101.646576 122.924232,102.246154 122.184615,102.246154 C119.775905,102.246154 117.969372,102.246154 116.765016,102.246154",
        id: "Path-Copy-7",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        transform: "translate(101.761905, 74.123077) rotate(-345.000000) translate(-101.761905, -74.123077) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M96.001211,42.535856 L96.001211,50.4262472 C96.001211,51.1658637 95.4016334,51.7654413 94.6620169,51.7654413 L86.7369994,51.7654413",
        id: "Path-Copy-10",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        transform: "translate(91.369105, 47.150649) rotate(-345.000000) translate(-91.369105, -47.150649) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M48.907368,38.345876 L48.907368,46.2362671 C48.907368,46.9758836 48.3077904,47.5754613 47.5681739,47.5754613 L39.6431564,47.5754613",
        id: "Path-Copy-10",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        fill: theme.colors.primary20,
        transform: "translate(44.275262, 42.960669) rotate(-15.000000) translate(-44.275262, -42.960669) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M40.6569874,54.4287231 C40.6569874,51.8308869 40.6569874,47.9341327 40.6569874,42.7384605 L49.8236794,33.5717685 L82.8416028,33.5717685 C83.5812193,33.5717685 84.1807969,34.1713461 84.1807969,34.9109626 C84.1807969,43.0635825 84.1807969,50.179161 84.1807969,56.257698",
        id: "Path",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        transform: "translate(62.418892, 44.914733) rotate(-15.000000) translate(-62.418892, -44.914733) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M53.634268,124 L34,124 C32.8954305,124 32,123.104569 32,122 L32,62 C32,60.8954305 32.8954305,60 34,60 L53.5584816,60 C54.4193424,60 55.1836201,60.5508602 55.4558482,61.3675445 L58.3333333,70 L107,70 C108.104569,70 109,70.8954305 109,72 L109,122 C109,123.104569 108.104569,124 107,124 L74,124",
        id: "Path",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "32",
        y1: "80.4611735",
        x2: "96.5731",
        y2: "80.4611735",
        id: "Line-7",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        strokeLinecap: "round"
    })))));
};
var $44ca9d58277bbd27$export$2e2bcd8739ae039 = $44ca9d58277bbd27$export$2e94369282314f8;



const $f801cf1d0900f430$export$1d754dd096cb56ed = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '165px';
    const svgHeight = height || '184px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 165 184",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 1.000000)",
        fillRule: "nonzero"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M80.5,163.67556 L80.5,177.071797 C80.5,179.280936 78.709139,181.071797 76.5,181.071797 C75.7978533,181.071797 75.1080768,180.886972 74.5,180.535898 L5.39265015,140.636751 L5.39265015,140.636751 C2.29863938,138.850423 0.39265015,135.549153 0.39265015,131.976497 L0.39265015,51.0235027 C0.39265015,47.4508468 2.29863938,44.1495766 5.39265015,42.3632487 L75.5,1.88675135 C78.5940108,0.100423396 82.4059892,0.100423396 85.5,1.88675135 L155.60735,42.3632487 C158.701361,44.1495766 160.60735,47.4508468 160.60735,51.0235027 L160.60735,131.976497 C160.60735,135.549153 158.701361,138.850423 155.60735,140.636751 L94.0407624,176.182237",
        id: "Path",
        stroke: theme.colors.primary60,
        strokeWidth: "3",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group-11",
        transform: "translate(47.000000, 21.000000)",
        stroke: theme.colors.primary60,
        strokeWidth: "2"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M53.9942579,39.5219471 L55.8288797,35.8527035 C56.3228582,34.8647465 57.5242043,34.4642978 58.5121613,34.9582763 C58.8992161,35.1518037 59.2130611,35.4656487 59.4065885,35.8527035 L61.2412103,39.5219471 C62.5603369,42.1602003 63.2470936,45.0693486 63.2470936,48.0190054 L63.2470936,122.095329 C63.2470936,122.647613 62.7993784,123.095329 62.2470936,123.095329 L52.9883746,123.095329 C52.4360898,123.095329 51.9883746,122.647613 51.9883746,122.095329 L51.9883746,48.0190054 C51.9883746,45.0693486 52.6751313,42.1602003 53.9942579,39.5219471 Z",
        id: "Rectangle",
        fill: theme.colors.white,
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M5.75878973,39.5219471 L7.59341152,35.8527035 C8.08739002,34.8647465 9.2887361,34.4642978 10.2766931,34.9582763 C10.6637479,35.1518037 10.9775929,35.4656487 11.1711203,35.8527035 L13.0057421,39.5219471 C14.3248687,42.1602003 15.0116254,45.0693486 15.0116254,48.0190054 L15.0116254,122.095329 C15.0116254,122.647613 14.5639102,123.095329 14.0116254,123.095329 L4.75290636,123.095329 C4.20062161,123.095329 3.75290636,122.647613 3.75290636,122.095329 L3.75290636,48.0190054 C3.75290636,45.0693486 4.43966311,42.1602003 5.75878973,39.5219471 Z",
        id: "Rectangle",
        fill: theme.colors.white,
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M26.5571232,7.82445311 L30.2061982,2.5285507 C31.4596375,0.709434189 33.9504362,0.250862247 35.7695527,1.5043016 C36.1704572,1.78053976 36.5175637,2.12764628 36.7938018,2.5285507 L40.4428768,7.82445311 C44.9645408,14.386744 47.3857535,22.1679451 47.3857535,30.1372052 L47.3857535,93.8226591 L47.3857535,93.8226591 L19.6142465,93.8226591 L19.6142465,30.1372052 C19.6142465,22.1679451 22.0354592,14.386744 26.5571232,7.82445311 Z",
        id: "Rectangle",
        fill: theme.colors.primary60,
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M40.5745738,117.355362 L41.6399673,64.4923457 L45.0007027,77.8303078 C46.8757338,85.2718617 50.6334929,92.105976 55.9127551,97.6757028 L59.211122,101.155546 C62.0658223,104.167311 63.9962059,107.93508 64.7730365,112.011424 L65.5485066,116.080629 C65.5463599,116.477108 65.4504565,116.810566 65.2566953,117.04474 C65.0889845,117.247429 64.8478844,117.355362 64.582866,117.355362 L40.5745738,117.355362 Z",
        id: "Path-3",
        fill: theme.colors.primary60
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M1.02035692,117.355362 L2.08575042,64.4923457 L5.44648581,77.8303078 C7.32151692,85.2718617 11.079276,92.105976 16.3585383,97.6757028 L19.6569052,101.155546 C22.5116054,104.167311 24.441989,107.93508 25.2188196,112.011424 L25.9942897,116.080629 C25.992143,116.477108 25.8962396,116.810566 25.7024785,117.04474 C25.5347676,117.247429 25.2936675,117.355362 25.0286491,117.355362 L1.02035692,117.355362 Z",
        id: "Path-3-Copy",
        fill: theme.colors.primary60,
        transform: "translate(13.722892, 87.691223) scale(-1, 1) translate(-13.722892, -87.691223) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M26.9474568,46.6158047 L29.0688728,42.5574438 C30.348114,40.1101998 33.3690271,39.1633464 35.816271,40.4425876 C36.7204907,40.9152479 37.4584669,41.6532241 37.9311272,42.5574438 L40.0525432,46.6158047 C41.8462831,50.0473072 42.7831325,53.8618634 42.7831325,57.7339058 L42.7831325,122.875685 L42.7831325,122.875685 L24.2168675,122.875685 L24.2168675,57.7339058 C24.2168675,53.8618634 25.1537169,50.0473072 26.9474568,46.6158047 Z",
        id: "Rectangle",
        fill: theme.colors.white,
        strokeLinejoin: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M46.626506,125.104601 L20.373494,125.104601 L20.373494,118.032312 C20.373494,116.079353 21.1650869,114.311281 22.4449195,113.031448 C23.7247521,111.751616 25.4928244,110.960023 27.4457831,110.960023 L39.5542169,110.960023 C41.5071756,110.960023 43.2752479,111.751616 44.5550805,113.031448 C45.8349131,114.311281 46.626506,116.079353 46.626506,118.032312 L46.626506,125.104601 Z",
        id: "Rectangle",
        fill: theme.colors.white
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "33.5",
        y1: "101.484119",
        x2: "33.5",
        y2: "129.203332",
        id: "Line",
        fill: theme.colors.primary20,
        strokeLinecap: "round"
    }))))));
};
var $f801cf1d0900f430$export$2e2bcd8739ae039 = $f801cf1d0900f430$export$1d754dd096cb56ed;



const $fb0bf38931e59b10$export$965755fbf184a8fc = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '152px';
    const svgHeight = height || '169px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 152 169",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Group",
        transform: "translate(2.000000, 2.000000)",
        stroke: theme.colors.primary60,
        strokeWidth: "3"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M74,117.371134 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M108.882866,90.7418658 C109.714261,87.6976379 110.158112,84.4934359 110.158112,81.185567 C110.158112,61.2008302 93.9572813,45 73.9725445,45 C53.9878077,45 37.7869775,61.2008302 37.7869775,81.185567 C37.7869775,97.3610095 48.4003337,111.05757 63.0430857,115.691287",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M73.9725445,117.371134 C77.5908988,117.371134 81.0852119,116.840051 84.3817866,115.851582 C89.8928309,114.19911 94.8512468,111.268362 98.9127122,107.40366",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval-Copy",
        fillOpacity: "0.196268575",
        fill: theme.colors.primary60,
        cx: "104.127184",
        cy: "99.2783505",
        r: "9.64948454"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M120.255984,85.4659665 C128.43855,89.8418956 133.002057,93.9015871 132.226834,96.7947568 C131.38817,99.9246931 124.455699,101.112837 113.853361,100.515516",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M94.0573111,98.0477535 C86.8513781,96.7649447 79.0016836,95.0204726 70.8507066,92.8364249 C38.6777508,84.2157074 13.9941115,72.0109683 15.718255,65.5763772 C16.4982546,62.6653791 22.5493576,61.4340187 31.9215354,61.7565326",
        id: "Path",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "96.5",
        y1: "22.5",
        x2: "96.5",
        y2: "35.5278784",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "96.5",
        y1: "22.5",
        x2: "96.5",
        y2: "35.5278784",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(96.500000, 29.000000) rotate(-270.000000) translate(-96.500000, -29.000000) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "38.5",
        y1: "38.3",
        x2: "38.5",
        y2: "46.1167271",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "38.4916365",
        y1: "38.2916365",
        x2: "38.4916365",
        y2: "46.1083635",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(38.491636, 42.200000) rotate(-270.000000) translate(-38.491636, -42.200000) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "98",
        y1: "122.266667",
        x2: "98",
        y2: "129.214868",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "97.9925658",
        y1: "122.259232",
        x2: "97.9925658",
        y2: "129.207434",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(97.992566, 125.733333) rotate(-270.000000) translate(-97.992566, -125.733333) "
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "40.5",
        y1: "122.433333",
        x2: "40.5",
        y2: "133.724161",
        id: "Line-6",
        strokeLinecap: "round"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("line", {
        x1: "40.4879193",
        y1: "122.421253",
        x2: "40.4879193",
        y2: "133.712081",
        id: "Line-6-Copy",
        strokeLinecap: "round",
        transform: "translate(40.487919, 128.066667) rotate(-270.000000) translate(-40.487919, -128.066667) "
    })))));
};
var $fb0bf38931e59b10$export$2e2bcd8739ae039 = $fb0bf38931e59b10$export$965755fbf184a8fc;



const $5c100bfd55378315$export$d3fdab361bf647f3 = (props)=>{
    const { width: width , height: height  } = props;
    const svgWidth = width || '70px';
    const svgHeight = height || '70px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 70 70",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("defs", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "156.737419%",
        id: "linearGradient-1"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#879FFA",
        offset: "0%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#4268F6",
        offset: "99.9727331%"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("stop", {
        stopColor: "#343F87",
        offset: "100%"
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Titles",
        transform: "translate(-385.000000, -7458.000000)"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Atoms/Logotype/AdminJS-Icon",
        transform: "translate(-1.000000, 0.000000)",
        fill: "url(#linearGradient-1)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M16.7602339,70 C8.05609707,70 1,62.8533093 1,54.0374194 C1,53.9682136 1,53.8991107 1.00130187,53.8301132 L1,22.9143087 C1,20.8434493 2.09140055,18.9297567 3.86338726,17.8935646 L33.1323931,0.778135721 C34.9066409,-0.259378574 37.0933591,-0.259378574 38.8676069,0.778135721 L68.1366127,17.8935646 C69.9085995,18.9297567 71,20.8434493 71,22.9143087 L71,53.8301132 C71,53.8991107 71,53.9682136 71,54.0374194 C71,62.8533093 63.9439029,70 55.2397661,70 C48.956271,70 43.5316289,66.2756016 41.000388,60.8874748 L30.9996134,60.8874746 C28.4683711,66.2756016 23.043729,70 16.7602339,70 Z M42.4071164,52.0535685 L49.286347,55.9002087 C49.3726881,55.9484877 49.4674103,55.9799906 49.5654997,55.9930498 C49.9942382,56.0501299 50.3881408,55.7493582 50.4453059,55.3212573 L50.9862522,51.2701936 C51.0435183,50.8413367 50.9203125,50.4079524 50.6459328,50.0730981 L44.5789333,42.6689041 C44.7320926,41.2424028 44.8106582,39.7936129 44.8106582,38.3265003 C44.8106582,29.5814111 42.0191822,21.4873364 37.2774223,14.8842173 C37.1963826,14.7713658 37.102102,14.6428342 36.9945806,14.4986225 C36.9225034,14.40195 36.8366488,14.3163052 36.7397388,14.2444037 C36.1904687,13.8368773 35.4140149,13.950685 35.0054843,14.4986027 C34.8964818,14.6447939 34.8009947,14.7749825 34.7190227,14.8891686 C29.9794226,21.4913824 27.1893418,29.5835968 27.1893418,38.3265003 C27.1893418,39.7936129 27.2679074,41.2424028 27.4210667,42.6689041 L21.3540672,50.0730981 C21.0796875,50.4079524 20.9564817,50.8413367 21.0137478,51.2701936 L21.5546941,55.3212573 C21.6118592,55.7493582 22.0057618,56.0501299 22.4345003,55.9930498 C22.5325897,55.9799906 22.6273119,55.9484877 22.713653,55.9002087 L29.5928836,52.0535685 C29.9697355,53.091548 30.3881053,54.1096585 30.8459893,55.1058994 L41.1540107,55.1058994 C41.6118947,54.1096585 42.0302645,53.091548 42.4071164,52.0535685 Z M35.5,34 C33.5670034,34 32,32.4329966 32,30.5 C32,28.5670034 33.5670034,27 35.5,27 C37.4329966,27 39,28.5670034 39,30.5 C39,32.4329966 37.4329966,34 35.5,34 Z",
        id: "Shape-Copy-5"
    })))));
};
var $5c100bfd55378315$export$2e2bcd8739ae039 = $5c100bfd55378315$export$d3fdab361bf647f3;



const $faeeeacb341c24f6$export$15149c52e1aba9cc = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '72px';
    const svgHeight = height || '72px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 72 72",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("defs", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("polygon", {
        id: "path-1",
        points: "0 0.0011886196 40.3991072 0.0011886196 40.3991072 46.0126533 0 46.0126533"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Atoms/Logotype/SoftwareBrothers"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "software-brothers-logo-compact"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("circle", {
        id: "Oval",
        fill: theme.colors.love,
        fillRule: "nonzero",
        cx: "36",
        cy: "36",
        r: "36"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Clipped",
        transform: "translate(14.794521, 11.835616)"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Path"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M15.1239452,41.020451 C12.7951716,42.4990938 10.8553199,43.139787 8.58363578,43.139787 C8.36241418,43.139787 6.87095246,43.1552118 5.78982111,42.4503604 C5.04765834,41.964215 4.54098952,41.1690285 4.54098952,40.4463477 C4.54098952,39.0200042 5.62568896,37.9359831 7.5132087,37.7838398 C10.8469944,37.517589 13.0247188,39.0057408 15.0882643,40.6103772 L15.3891732,40.8528556 L15.1239452,41.020451 Z M39.4250185,22.9760169 C39.3631716,22.3115785 39.3370056,21.5829547 39.5391974,20.9648725 C42.3591781,12.3140991 38.0560612,3.78337619 29.3380274,1.04598525 C25.7842095,-0.0689399368 21.7379952,-0.142634352 18.4850862,0.142634352 C14.5685125,0.484956797 10.7482772,1.63435195 7.38832554,3.89510643 C3.49672844,6.51244679 0.780222401,9.92259642 0.116557615,14.7590896 C-0.38297502,18.3950769 0.788547945,21.4593383 2.80689766,24.4320759 C3.08164061,24.8362065 3.71081386,25.4947018 4.16515068,25.4947018 C4.60402579,25.4947018 4.902556,25.0430263 4.77172603,24.622255 C4.56557384,23.9463415 4.3689131,23.267573 4.18180177,22.5861496 C2.67368896,17.0329189 4.53147462,11.4262002 9.00704915,8.02080506 C14.1296374,4.11856691 24.3462691,3.56942466 29.8530218,6.89993678 C33.9729766,9.38890622 36.0781499,14.0518609 34.6045286,18.4961096 C34.2834005,19.4672118 33.7541338,20.0936143 33.6601741,21.0421328 C33.5852442,21.8004721 33.791004,24.2894415 33.8778276,25.9392455 C33.9135085,26.625079 33.9943852,27.3132898 33.9920064,28.0015005 C33.9896277,28.8763246 33.4900951,29.4290327 32.5790427,29.4290327 C30.7807252,29.4290327 30.665357,30.2016354 30.4227268,31.4461201 C30.0564029,33.3158188 29.8030685,35.2473256 29.1322675,37.0088599 C27.739523,40.6721855 23.6397873,43.3917471 20.5212764,41.3901117 C20.8852216,41.0014331 21.2182434,40.6293952 21.4668203,40.3465037 C21.8022208,39.9613909 22.1197808,39.5620148 22.4087961,39.1400548 C23.9906495,36.8376986 24.6281483,34.6209231 24.8208251,33.7912666 C25.5106559,30.8173404 24.5151587,27.3109125 21.3490733,26.0652392 L20.9066301,25.8917007 L21.3264754,25.665863 C21.7566362,25.4369843 22.1768613,25.1899243 22.5860113,24.925353 C27.6622143,21.6186133 28.9181821,18.8122824 29.4533956,17.6129652 C29.8458856,16.7333867 30.4762482,14.0863309 29.0763674,11.8814415 C28.2331088,10.4871907 26.6976406,9.18446365 24.3070201,8.59847418 C21.8628783,7.99822129 19.2224915,8.06359536 16.8318711,8.49149842 C15.4462627,8.74110854 12.3836519,9.60404636 10.3676809,11.5284215 C8.1959033,13.6013741 7.14807413,16.6751444 8.31721837,18.2262929 C8.44329089,18.3938883 8.63121031,18.3808135 8.70614021,18.3665501 C8.90945547,18.3270044 9.07422409,18.178348 9.13431104,17.9802487 C10.1048316,14.7816733 12.5513521,12.5946133 16.2086446,11.6567924 C19.1832425,10.8936986 21.9092635,11.1860991 23.0784077,11.4321433 C24.6376632,11.7602023 25.8079968,12.6813825 26.2088122,13.9448851 C26.5894085,15.1453909 26.6108171,17.213589 23.8277067,20.2517007 C20.5605254,23.8175595 16.3703981,25.3389926 14.0927671,25.9285479 L13.6503239,26.0426554 L13.8406221,25.6242613 C14.3163674,24.5747102 14.7849766,23.5703267 15.2393135,22.6004131 C15.4795649,22.088118 15.7114907,21.5900864 15.9350911,21.1075068 C16.0183465,20.9411001 16.2003191,20.5654963 16.4274875,20.100746 C16.9543755,19.0238567 17.7167575,17.466765 17.9760387,16.9509041 C18.3364158,16.2317893 18.1663368,15.4128303 17.5740338,15.001568 L16.789054,14.4583688 C16.5220516,14.2752054 16.1876343,14.219504 15.8756229,14.3062255 C15.5681267,14.387068 15.3116076,14.5986726 15.1738985,14.8850832 C13.0702745,19.4788203 10.9785737,24.0780012 8.89881708,28.6825796 C8.72041257,29.0855216 8.75371475,29.5443288 8.9892087,29.9104236 C9.3793199,30.5178082 9.87171636,31.062196 10.4521257,31.5269463 C10.5845427,31.6350458 10.7598401,31.6752234 10.9261587,31.635593 C11.0924773,31.5959625 11.2307763,31.4810613 11.3001418,31.3248809 C11.6664658,30.4857155 12.4288477,28.7645943 12.4288477,28.7645943 L12.5121031,28.7325016 C13.9725165,28.1693248 15.5212024,27.8691176 17.0863948,27.8457914 C18.7895633,27.8101328 20.019365,28.249922 20.729415,29.1497071 C21.1016857,29.621589 21.5857566,30.5831823 21.3276648,31.9156249 C21.1147687,33.0115321 20.5973956,34.3083161 19.9170798,35.583705 C19.806469,35.792902 19.5376728,36.2612181 19.518643,36.2956881 C18.9155462,37.3180961 18.1946324,38.2663466 17.3706527,39.1210369 C16.7189303,38.5316649 16.0431957,37.9693676 15.3451668,37.4355743 C14.3342079,36.6594057 12.5204287,35.5658757 10.9825818,35.0654668 C9.59816277,34.6161686 8.52892506,34.3938967 6.81029492,34.5424742 C4.06167607,34.7825753 1.85064948,36.5346006 1.47243191,39.3623267 C1.19887832,41.3960548 2.25741176,43.9717935 4.80264948,45.1461496 C5.92550458,45.6227031 7.1202934,45.9079553 8.33743755,45.9900695 C10.0025463,46.0934795 12.0090024,45.8189083 13.8620306,45.3125564 C15.5770927,44.8442403 17.1779758,43.8648177 18.3506882,43.1385711 C18.5802353,43.2693193 19.2593618,43.723372 19.9706011,44.0549968 C20.7436873,44.4163372 21.5524545,44.657627 21.8581209,44.7396417 C25.501141,45.7202529 30.3228203,44.6861538 32.6016406,40.4724974 C33.9408638,37.9966027 34.8424013,35.2782297 35.8961773,32.6501918 C36.1851926,31.9310769 36.5063207,30.8577534 36.8119871,30.5427692 C37.0974343,30.2503688 37.5374988,30.1933151 38.8303368,30.1933151 C39.865083,30.1933151 40.2825496,29.5645353 40.1552877,28.5328135 C39.9269299,26.6821328 39.5962869,24.8314521 39.4238292,22.9748282 L39.4250185,22.9760169 Z",
        id: "Shape",
        fill: theme.colors.white,
        fillRule: "nonzero"
    })))))));
};
var $faeeeacb341c24f6$export$2e2bcd8739ae039 = $faeeeacb341c24f6$export$15149c52e1aba9cc;



const $e25dbe44dd1bcc5d$export$9d1369a214d99bdd = (props)=>{
    const { width: width , height: height , theme: theme  } = props;
    const svgWidth = width || '72px';
    const svgHeight = height || '71px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "0 0 72 71",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Symbols",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", {
        id: "Atoms/Logotype/Github",
        transform: "translate(0.000000, 1.000000)",
        fill: theme.colors.grey100,
        fillRule: "nonzero"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        d: "M67.1013759,17.4238423 C63.8854852,11.9137922 59.5233349,7.55147781 54.0137768,4.33591517 C48.5033986,1.12018851 42.4877084,-0.487264789 35.9624419,-0.487264789 C29.4379954,-0.487264789 23.4203371,1.12068054 17.9111071,4.33591517 C12.4010569,7.5513138 8.03907062,11.9137922 4.82317995,17.4238423 C1.60778132,22.9337284 -4.26325641e-14,28.9505666 -4.26325641e-14,35.4741931 C-4.26325641e-14,43.3105484 2.28628702,50.3571999 6.86000911,56.6159516 C11.4332392,62.8751953 17.3411754,67.206348 24.5833257,69.6099015 C25.4263326,69.7663662 26.0503872,69.6563161 26.4561458,69.2825393 C26.8620683,68.9082705 27.0647836,68.4395325 27.0647836,67.8782933 C27.0647836,67.7846441 27.0567472,66.9421293 27.0411663,65.3497648 C27.0250934,63.7574004 27.017549,62.3682432 27.017549,61.1829493 L25.9405011,61.3692637 C25.253795,61.4950587 24.3874989,61.5483616 23.3416128,61.5332728 C22.2962187,61.518676 21.2109704,61.4091179 20.087344,61.2054186 C18.9632255,61.0035234 17.9176674,60.5352774 16.9498497,59.8016646 C15.9825239,59.0680518 15.2958178,58.1077785 14.8898952,56.9223206 L14.4216492,55.8447808 C14.1095399,55.1274049 13.6181686,54.3304846 12.9468793,53.4569721 C12.27559,52.5826395 11.5967563,51.9899106 10.9100501,51.6778013 L10.5821959,51.4431042 C10.3637358,51.2871316 10.1610205,51.0990131 9.97355809,50.880717 C9.78625968,50.6624209 9.64603189,50.4439607 9.55238269,50.2251726 C9.45856948,50.0062204 9.53630979,49.8266304 9.78642369,49.6857466 C10.0365376,49.5448628 10.4885467,49.476471 11.1444191,49.476471 L12.0805831,49.6163707 C12.7049658,49.7415097 13.4772847,50.1152865 14.3985239,50.7399972 C15.3192711,51.3642158 16.0761731,52.1757329 16.6693941,53.1742204 C17.387754,54.4544755 18.2532301,55.4300017 19.2682825,56.101291 C20.2825148,56.7725803 21.3051116,57.1076509 22.3350888,57.1076509 C23.3650661,57.1076509 24.2546515,57.0295826 25.0041731,56.874266 C25.7528747,56.7181293 26.4553257,56.4834322 27.1111982,56.1714869 C27.3921458,54.0790587 28.1570843,52.4716054 29.4053576,51.3479789 C27.6261868,51.1610086 26.0266059,50.8794049 24.605795,50.5049721 C23.1858041,50.1300473 21.7184146,49.5215735 20.2046105,48.6779106 C18.6899863,47.8353958 17.4335125,46.7891817 16.434861,45.5410723 C15.4360456,44.292307 14.616328,42.6528719 13.9768565,40.6242432 C13.3370569,38.5947944 13.0170752,36.2537284 13.0170752,33.600389 C13.0170752,29.8224391 14.2504237,26.6075325 16.7166287,23.9538651 C15.5613485,21.1135553 15.6704146,17.9294824 17.0441549,14.4019744 C17.9494852,14.1206988 19.2920638,14.3317785 21.0712346,15.0339015 C22.8507335,15.7363525 24.1536219,16.338102 24.9812118,16.8370177 C25.8088018,17.3357694 26.4718907,17.7584209 26.9714624,18.1011999 C29.8752437,17.2898468 32.8718542,16.8840883 35.9621139,16.8840883 C39.0523736,16.8840883 42.0496401,17.2898468 44.9535854,18.1011999 L46.7329203,16.9779015 C47.9497039,16.2283799 49.3865877,15.5415097 51.0401276,14.917127 C52.6946515,14.2930723 53.9598178,14.1211908 54.8343144,14.4024664 C56.2385604,17.9301384 56.3636993,21.1140473 55.2080911,23.9543571 C57.6741321,26.6080245 58.9079727,29.8237512 58.9079727,33.600881 C58.9079727,36.2542204 58.5868428,38.6026669 57.9480273,40.6476965 C57.3083918,42.6930541 56.4816219,44.3308491 55.4673895,45.5645256 C54.4520091,46.7980382 53.1874989,47.8360518 51.6736948,48.6784026 C50.1595626,49.5214095 48.6916811,50.1298833 47.2716902,50.5048081 C45.8510433,50.8797329 44.2514624,51.1615006 42.4722916,51.348799 C44.0949977,52.753045 44.9065148,54.9696281 44.9065148,57.9975644 L44.9065148,67.8769812 C44.9065148,68.4382204 45.1016856,68.9067944 45.4923554,69.2812272 C45.882533,69.655004 46.4987153,69.7650541 47.3417221,69.6084254 C54.5848565,67.2051999 60.4927927,62.8738833 65.0658588,56.6146395 C69.6384328,50.3558878 71.9255399,43.3092364 71.9255399,35.472881 C71.9238998,28.9500746 70.3152984,22.9337284 67.1013759,17.4238423 Z",
        id: "Path"
    })))));
};
var $e25dbe44dd1bcc5d$export$2e2bcd8739ae039 = $e25dbe44dd1bcc5d$export$9d1369a214d99bdd;



const $d209c23b362b5199$export$f9b9e065d49c5620 = (props)=>{
    const { width: width , height: height  } = props;
    const svgWidth = width || '72px';
    const svgHeight = height || '72px';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("svg", {
        width: svgWidth,
        height: svgHeight,
        viewBox: "70 70 140 140",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#E01E5A'
        },
        d: "M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#E01E5A'
        },
        d: "M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#36C5F0'
        },
        d: "M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#36C5F0'
        },
        d: "M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#2EB67D'
        },
        d: "M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#2EB67D'
        },
        d: "M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("g", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#ECB22E'
        },
        d: "M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("path", {
        style: {
            fill: '#ECB22E'
        },
        d: "M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"
    })))));
};
var $d209c23b362b5199$export$2e2bcd8739ae039 = $d209c23b362b5199$export$f9b9e065d49c5620;




const $c6f3d240776eb0f4$var$RawIllustration = (props)=>{
    const { variant: variant , ...other } = props;
    const IllustrationComponent = $e2765bd3f7906ef8$exports[variant];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(IllustrationComponent, other));
};
/**
 * @classdesc
 *
 * <img src="components/illustration.png" />
 *
 * Awesome database with all the illustrations provided with AdminJS.
 *
 * The best thing about them is that they follow your {@link Theme} color palette.
 *
 * ### Usage
 *
 * ```javascript
 * import { Illustration, IllustrationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IllustrationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-illustration--default Storybook}
 * @hideconstructor
 *
 * @example <caption>Folders</caption>
 * return (
 *   <Illustration variant="Folders" />
 * )
 * @example <caption>DocumentSearch</caption>
 * return (
 *   <Illustration variant="DocumentSearch" />
 * )
 * @example <caption>Rocket</caption>
 * return (
 *   <Box bg="grey100" p="xxl"><Illustration variant="Rocket" /></Box>
 * )
 * @section design-system
 */ const $c6f3d240776eb0f4$export$d43c2e2ca9b2c105 = $bdtG2$styledcomponents.withTheme($c6f3d240776eb0f4$var$RawIllustration);
var $c6f3d240776eb0f4$export$2e2bcd8739ae039 = $c6f3d240776eb0f4$export$d43c2e2ca9b2c105;






const $2c52b13a4df281b0$var$variants = $bdtG2$styledsystem.variant({
    variants: {
        grey: {
            flexGrow: 1,
            bg: 'bg',
            py: 'xl',
            px: [
                '0',
                'xl'
            ],
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Box',
                'Box_Grey'
            ])
        },
        white: {
            px: [
                'default',
                'xxl'
            ],
            py: 'xxl',
            bg: 'white',
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Box',
                'Box_White'
            ])
        },
        card: {
            p: 'xxl',
            bg: 'white',
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Box',
                'Box_Card'
            ]),
            boxShadow: 'card'
        }
    }
});
/**
 * @load ./box.doc.md
 * @hideconstructor
 * @component
 * @subcategory Atoms
 * @section design-system
 * @see BoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-box--simple-white-gray-wrapper StoryBook}
 */ const $2c52b13a4df281b0$export$e71c4d32a2263218 = ($parcel$interopDefault($bdtG2$styledcomponents)).section`
  box-sizing: border-box;
  min-width: 0;
  ${({ flex: flex  })=>flex && typeof flex === 'boolean' ? 'display: flex;' : ''
}
  font-family: ${({ theme: theme  })=>theme.font
};
  line-height: ${({ theme: theme  })=>theme.lineHeights.default
};
  font-size: ${({ theme: theme  })=>theme.fontSizes.default
};
  font-weight: normal;
  ${({ animate: animate  })=>animate ? 'transition: all 500ms;' : ''
};

  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.color};
  ${$bdtG2$styledsystem.layout};
  ${$bdtG2$styledsystem.flexbox};
  ${$bdtG2$styledsystem.border};
  ${$bdtG2$styledsystem.shadow};
  ${$bdtG2$styledsystem.position};
  ${$2c52b13a4df281b0$var$variants};
`;
$2c52b13a4df281b0$export$e71c4d32a2263218.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Box')
};
var $2c52b13a4df281b0$export$2e2bcd8739ae039 = $2c52b13a4df281b0$export$e71c4d32a2263218;



const $595689d9856c754a$export$c6fdb837b070b4ff = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`

`;
$595689d9856c754a$export$c6fdb837b070b4ff.defaultProps = {
    width: '100%',
    height: '100%',
    bg: 'grey100',
    opacity: 0.2,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 40,
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Overlay')
};
var $595689d9856c754a$export$2e2bcd8739ae039 = $595689d9856c754a$export$c6fdb837b070b4ff;






/**
 * @classdesc
 *
 * <img src="components/table.png" />
 *
 * Main Table wrapper. Along with _TableRow_, _TableCell_, _TableCaption_,
 * _TableHead_ and _TableBody_ gives you the powerful tool for building tables.
 *
 * ### Related Components
 *
 * - _Table_: {@link LayoutProps} & standard table html props
 * - _TableBody_: standard tbody html props
 * - _TableCell_: {@link SpaceProps} & {@link ColorProps} & standard td html props
 * - _TableHead_: standard thead html props
 * - _TableRow_:  standard tr html props
 *
 * ### Usage
 *
 * ```javascript
 * import {
 *   Table,
 *   TableRow,
 *   TableCell,
 *   TableCaption,
 *   TableHead,
 *   TableBody,
 * } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @hideconstructor
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-table--default Storybook}
 * @example
 * return (
 * <Box pt="x4">
 * <Table>
 *   <TableCaption>
 *     <Text as="span">Monthly savings</Text>
 *     <Button variant="text" size="sm">
 *       <Icon icon="Delete" />
 *       Remove
 *     </Button>
 *   </TableCaption>
 *   <TableHead>
 *     <TableRow>
 *       <TableCell><CheckBox /></TableCell>
 *       <TableCell>
 *         <Link href="#">
 *           Name
 *           <Icon icon="CaretUp" />
 *         </Link>
 *       </TableCell>
 *       <TableCell>
 *         <Link href="#">
 *           Last
 *           <Icon icon="CaretDown" />
 *         </Link>
 *       </TableCell>
 *       <TableCell>Surname</TableCell>
 *       <TableCell>Gender</TableCell>
 *       <TableCell>Age</TableCell>
 *     </TableRow>
 *   </TableHead>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell><CheckBox /></TableCell>
 *       <TableCell>Value 1</TableCell>
 *       <TableCell>Value 2</TableCell>
 *       <TableCell>Value 2</TableCell>
 *       <TableCell>Value 2</TableCell>
 *       <TableCell>Value 2</TableCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableCell><CheckBox /></TableCell>
 *       <TableCell>Value 1</TableCell>
 *       <TableCell>Value 2</TableCell>
 *       <TableCell>Value 2</TableCell>
 *       <TableCell>Value 2</TableCell>
 *       <TableCell>Value 2</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * </Box>
 * )
 * @section design-system
 */ const $6059af701e3f86c1$var$Table = ($parcel$interopDefault($bdtG2$styledcomponents)).table`
  position: relative;
  font-family: ${({ theme: theme  })=>theme.font
};
  color: ${({ theme: theme  })=>theme.colors.grey100
};

  ${$bdtG2$styledsystem.layout};
  border-collapse: collapse;
`;
$6059af701e3f86c1$var$Table.defaultProps = {
    width: 1,
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Table')
};
var $6059af701e3f86c1$export$2e2bcd8739ae039 = $6059af701e3f86c1$var$Table;





/**
 * @component
 * @private
 */ const $9de7e0cd919163b7$var$TableHead = ($parcel$interopDefault($bdtG2$styledcomponents)).thead`
  background: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey20')};

  & a {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
    text-decoration: none;
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'sm')};
    white-space: nowrap;
    
    .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
    }
  }
`;
$9de7e0cd919163b7$var$TableHead.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('TableHead')
};
var $9de7e0cd919163b7$export$2e2bcd8739ae039 = $9de7e0cd919163b7$var$TableHead;




/**
 * @component
 * @private
 */ const $498b1cc8642d7d1d$var$TableBody = ($parcel$interopDefault($bdtG2$styledcomponents)).tbody`

`;
$498b1cc8642d7d1d$var$TableBody.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('TableBody')
};
var $498b1cc8642d7d1d$export$2e2bcd8739ae039 = $498b1cc8642d7d1d$var$TableBody;






/**
 * @component
 * @private
 */ const $a038ce080f802271$var$TableCell = ($parcel$interopDefault($bdtG2$styledcomponents)).td`
  border-bottom: 1px solid ${({ theme: theme  })=>theme.colors.grey20
};
  font-size: ${({ theme: theme  })=>theme.fontSizes.default
};
  line-height: ${({ theme: theme  })=>theme.lineHeights.default
};
  word-break: break-word;
  vertical-align: middle;
  ${$bdtG2$styledsystem.color}; 
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.layout};

  ${$9de7e0cd919163b7$export$2e2bcd8739ae039} & {
    color: ${({ theme: theme  })=>theme.colors.grey60
};
    border: none;
  }
`;
$a038ce080f802271$var$TableCell.defaultProps = {
    p: 'lg',
    color: 'grey100',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('TableCell')
};
var $a038ce080f802271$export$2e2bcd8739ae039 = $a038ce080f802271$var$TableCell;




/**
 * @component
 * @private
 */ const $702bcc37234d8216$var$TableRow = ($parcel$interopDefault($bdtG2$styledcomponents)).tr`
  &:hover {
    background: ${({ theme: theme  })=>theme.colors.grey20
};
  }
`;
$702bcc37234d8216$var$TableRow.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('TableRow')
};
var $702bcc37234d8216$export$2e2bcd8739ae039 = $702bcc37234d8216$var$TableRow;







const $be4b5effb91236b9$var$CAPTION_HEIGHT = '42px';
/**
 * @component
 * @private
 */ const $be4b5effb91236b9$var$TableCaption = ($parcel$interopDefault($bdtG2$styledcomponents)).caption`
  font-family: ${$b549c418f45c0feb$export$2e2bcd8739ae039('font')};
  padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')} ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
  text-align: left;
  color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'default')};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'default')};
  position: absolute;
  height: ${$be4b5effb91236b9$var$CAPTION_HEIGHT};
  left: 0;
  right: 0;
  top: -${$be4b5effb91236b9$var$CAPTION_HEIGHT};
  background: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
  box-sizing: border-box;
  vertical-align: middle;

  & ${$0dd800caa134a887$export$353f5b6fc5456de1} {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
    & > span svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
    }
    &:hover {
      color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
      .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
        fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
      }
    }
  }

  & ${$856c8c0ad8a28036$export$5f1af8db9871e1d6} {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'white')};
  }
`;
$be4b5effb91236b9$var$TableCaption.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('TableCaption')
};
var $be4b5effb91236b9$export$2e2bcd8739ae039 = $be4b5effb91236b9$var$TableCaption;











const $9aacc82a46d56c05$var$Base = ($parcel$interopDefault($bdtG2$styledcomponents)).h3`
  font-family: ${$b549c418f45c0feb$export$2e2bcd8739ae039('font')};
  vertical-align: middle;
  padding: 0;
  * {
    vertical-align: middle;
  }
  & ${$0dd800caa134a887$export$353f5b6fc5456de1}, a {
    vertical-align: bottom;
  }
  * > &:first-child {
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
  }
  ${$fa79237ecead5fba$export$37acb3580601e69a} {
    vertical-align: middle;
  }

  ${$bdtG2$styledsystem.typography};
  ${$bdtG2$styledsystem.space};
`;
$9aacc82a46d56c05$var$Base.defaultProps = {
    fontWeight: 'light',
    fontSize: 'h3',
    lineHeight: 'xl',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039([
        'Header',
        'H3'
    ]),
    marginTop: 'xxl',
    marginBottom: 'xl'
};
const $9aacc82a46d56c05$export$5523b16adee8048 = ($parcel$interopDefault($bdtG2$styledcomponents))((props)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$var$Base, {
        as: "h1",
        ...props
    })
)``;
$9aacc82a46d56c05$export$5523b16adee8048.defaultProps = {
    fontSize: 'h1',
    lineHeight: 'xxl',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039([
        'Header',
        'H1'
    ]),
    marginTop: 'x4',
    marginBottom: 'x3'
};
const $9aacc82a46d56c05$export$cb94397127ac9363 = ($parcel$interopDefault($bdtG2$styledcomponents))((props)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$var$Base, {
        as: "h2",
        ...props
    })
)`
  & ${$0dd800caa134a887$export$353f5b6fc5456de1}, a {
    margin-bottom: 4px;
  }
`;
$9aacc82a46d56c05$export$cb94397127ac9363.defaultProps = {
    fontSize: 'h2',
    lineHeight: 'xxl',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039([
        'Header',
        'H2'
    ]),
    marginTop: 'x3',
    marginBottom: 'xxl'
};
const $9aacc82a46d56c05$export$746be9e3a3dfff1f = $9aacc82a46d56c05$var$Base;
const $9aacc82a46d56c05$export$cc5e069d64fda823 = ($parcel$interopDefault($bdtG2$styledcomponents))((props)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$var$Base, {
        as: "h4",
        ...props
    })
)``;
$9aacc82a46d56c05$export$cc5e069d64fda823.defaultProps = {
    fontSize: 'h4',
    lineHeight: 'xl',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039([
        'Header',
        'H4'
    ]),
    marginTop: 'xxl',
    marginBottom: 'xl'
};
const $9aacc82a46d56c05$export$88ef9fdaf11f7a1f = ($parcel$interopDefault($bdtG2$styledcomponents))((props)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$var$Base, {
        as: "h5",
        ...props
    })
)``;
$9aacc82a46d56c05$export$88ef9fdaf11f7a1f.defaultProps = {
    fontSize: 'xl',
    lineHeight: 'lg',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039([
        'Header',
        'H5'
    ]),
    marginTop: 'xl',
    marginBottom: 'default',
    fontWeight: 'normal'
};
const $9aacc82a46d56c05$export$a559fb8039b06400 = ($parcel$interopDefault($bdtG2$styledcomponents))((props)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$var$Base, {
        as: "h6",
        ...props
    })
)``;
$9aacc82a46d56c05$export$a559fb8039b06400.defaultProps = {
    fontSize: 'lg',
    lineHeight: 'lg',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039([
        'Header',
        'H6'
    ]),
    marginTop: 'lg',
    marginBottom: 'default',
    fontWeight: 'normal'
};
/**
 * @load ./header.doc.md
 * @component
 * @subcategory Atoms
 * @see HeaderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-header--default Storybook}
 * @hideconstructor
 * @section design-system
 */ const $9aacc82a46d56c05$export$2e2bcd8739ae039 = $9aacc82a46d56c05$export$746be9e3a3dfff1f;
$9aacc82a46d56c05$export$2e2bcd8739ae039.H1 = $9aacc82a46d56c05$export$5523b16adee8048;
$9aacc82a46d56c05$export$2e2bcd8739ae039.H2 = $9aacc82a46d56c05$export$cb94397127ac9363;
$9aacc82a46d56c05$export$2e2bcd8739ae039.H3 = $9aacc82a46d56c05$export$746be9e3a3dfff1f;
$9aacc82a46d56c05$export$2e2bcd8739ae039.H4 = $9aacc82a46d56c05$export$cc5e069d64fda823;
$9aacc82a46d56c05$export$2e2bcd8739ae039.H5 = $9aacc82a46d56c05$export$88ef9fdaf11f7a1f;
$9aacc82a46d56c05$export$2e2bcd8739ae039.H6 = $9aacc82a46d56c05$export$a559fb8039b06400;







const $329820847add035c$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.css`
  font-family: ${$b549c418f45c0feb$export$2e2bcd8739ae039('font')};
  font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'normal')};
  ${$bdtG2$styledsystem.typography};
  ${$bdtG2$styledsystem.space};
`;


const $f75934730cdaccfa$export$2e2bcd8739ae039 = ($parcel$interopDefault($bdtG2$styledcomponents))('div')`
  ${$329820847add035c$export$2e2bcd8739ae039};
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'sm')};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'md')};
`;





const $5dfdad50746f9d8f$export$2e2bcd8739ae039 = ($parcel$interopDefault($bdtG2$styledcomponents))('div')`
  ${$329820847add035c$export$2e2bcd8739ae039};
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'md')};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
  margin: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')} 0;
  * > &:first-child {
    margin-top: 0;
  }
`;





const $f37dda8a8a754bde$export$2e2bcd8739ae039 = ($parcel$interopDefault($bdtG2$styledcomponents))('div')`
  ${$329820847add035c$export$2e2bcd8739ae039};
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'xs')};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'sm')};
`;





const $1367b13171f7d9e7$export$2e2bcd8739ae039 = ($parcel$interopDefault($bdtG2$styledcomponents))('div')`
  ${$329820847add035c$export$2e2bcd8739ae039};
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'md')};
  line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
`;









const $67b4a25f1ebac759$var$spinCss = $bdtG2$styledcomponents.css`
  @keyframes iconSpin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  animation-name: iconSpin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
`;
const $67b4a25f1ebac759$var$Wrapper = ($parcel$interopDefault($bdtG2$styledcomponents)).span`
  vertical-align: middle;
  display: inline-block;
  line-height: ${({ theme: theme  })=>theme.lineHeights.sm
};
  font-size: ${({ theme: theme  })=>theme.fontSizes.sm
};
  
  & > svg {
    ${({ theme: theme , color: colorProp  })=>colorProp ? `fill: ${theme.colors[colorProp]}` : ''
};
    ${({ spin: spin  })=>spin ? $67b4a25f1ebac759$var$spinCss : ''
};
  }
  ${({ rounded: rounded  })=>rounded ? 'border-radius: 9999px;' : ''
};
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.color};
`;
/**
 * @classdesc
 *
 * <img src="components/icon.png" />
 *
 * Component wrapping [@carbon/icons-react](https://www.npmjs.com/package/@carbon/icons-react).
 * List of all icons can be found here: https://www.carbondesignsystem.com/guidelines/icons/library/
 * but keys are not always 1 to 1 in a relation to the `icons-react` library.
 * If you have problem verifying the key of given icon - you can always open the
 * Chrome Terminal (with AdminJS open) and write there:
 *
 * ```
 * Object.keys(CarbonIcons)
 * ```
 *
 * to see list of all possible icon keys.
 *
 * ### Usage
 *
 * ```javascript
 * import { Icon, IconProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see IconProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-icon--default Storybook}
 * @hideconstructor
 * @example <caption>Icons inside other elements</caption>
 * return (
 *   <Box variant="grey">
 *     <Label mb="default"><Icon icon="Accessibility" />Icon in Label</Label>
 *     <Button><Icon icon="Accessibility" />Icon in button</Button>
 *   </Box>
 * )
 * @example <caption>Different sizes</caption>
 * const sizes = [16, 20, 24, 32]
 * return (
 *   <Box variant="grey">
 *     {sizes.map(size => (
 *       <Label m="default"><Icon icon="Accessibility" size={size}/>Icon {size}</Label>
 *     ))}
 *   </Box>
 * )
 *
 * @example <caption>Big rounded icon with background</caption>
 * return (
 *   <Box variant="grey">
 *     <Icon icon="Add" color="white" bg="primary100" rounded size={32} p="default"/>
 *   </Box>
 * )
 * @section design-system
 */ const $67b4a25f1ebac759$export$f04a61298a47a40f = (props)=>{
    const { icon: icon , size: size , color: givenColor , ...other } = props;
    const iconSize = size || 16;
    const CarbonIcon = $bdtG2$carboniconsreact[`${icon}${iconSize}`] || $bdtG2$carboniconsreact.ErrorOutline16;
    if (CarbonIcon) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$var$Wrapper, {
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('Icon'),
        color: givenColor || 'grey100',
        ...other
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(CarbonIcon, null)));
    return null;
};
var $67b4a25f1ebac759$export$2e2bcd8739ae039 = $67b4a25f1ebac759$export$f04a61298a47a40f;






/**
 * @classdesc
 *
 * <img src="components/section.png" />
 *
 * Marks group of fields as a section. Has the same props as [Box]{@link BoxProps}
 *
 * ### Usage
 *
 * ```javascript
 * import { Section } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-section--default Storybook}
 * @hideconstructor
 * @example
 * return (
 *   <Section>
 *     <Text>Some text within a section</Text>
 *     <Section>
 *       <Text>Section can be nested</Text>
 *     </Section>
 *   </Section>
 * )
 * @section design-system
 */ const $718cc359719db255$export$6e2c8f0811a474ce = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  border: 1px dotted ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary20')};
  padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  border-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')} solid ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary20')};
  padding-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
`;
$718cc359719db255$export$6e2c8f0811a474ce.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Section')
};
var $718cc359719db255$export$2e2bcd8739ae039 = $718cc359719db255$export$6e2c8f0811a474ce;






const $a64a937b26fbcfe4$var$Spinner = ($parcel$interopDefault($bdtG2$styledcomponents)).div.attrs({
    className: 'lds-facebook'
})`
  & {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  & div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: ${({ theme: theme  })=>theme.colors.primary100
};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }

`;
/**
 * @classdesc
 *
 * <img src="components/loader.png" />
 *
 * Simple loader
 *
 * ### Usage
 *
 * ```javascript
 * import { Loader } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-loader--default Storybook}
 * @hideconstructor
 * @subcategory Atoms
 * @example
 * return (
 *   <Loader/>
 * )
 * @section design-system
 */ const $a64a937b26fbcfe4$export$3b0d6d7590275603 = ()=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        p: "x3",
        style: {
            textAlign: 'center'
        },
        "data-testid": "Loader",
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('Loader')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($a64a937b26fbcfe4$var$Spinner, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", null), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", null), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", null)))
;
var $a64a937b26fbcfe4$export$2e2bcd8739ae039 = $a64a937b26fbcfe4$export$3b0d6d7590275603;






const $289bbaee8161a6b5$var$linearGradient = (theme)=>`linear-gradient(to right, ${theme.colors.grey60} 8%, ${theme.colors.grey40} 18%, ${theme.colors.grey20} 33%)`
;
const $289bbaee8161a6b5$var$StyledPlaceholder = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  @keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: ${({ theme: theme  })=>theme.colors.white
};
  background: ${({ theme: theme  })=>$289bbaee8161a6b5$var$linearGradient(theme)
};
  background-size: 1000px 104px;
  height: 338px;
  position: relative;
  overflow: hidden;
  ${$bdtG2$styledsystem.layout};
`;
/**
 * @classdesc
 *
 * <img src="components/placeholder.png" />
 *
 * Renders placeholder
 *
 * ### Usage
 *
 * ```javascript
 * import { Placeholder, PlaceholderProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see PlaceholderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-placeholder--default Storybook}
 * @hideconstructor
 * @example <caption>Image placeholder</caption>
 * return (
 *   <Box>
 *     <Placeholder width={100} height={200} />
 *   </Box>
 * )
 *
 * @example <caption>Text placeholder</caption>
 * return (
 *   <Box>
 *     <Label>Some name</Label>
 *     <Placeholder width={400} height={14} />
 *   </Box>
 * )
 * @section design-system
 */ const $289bbaee8161a6b5$export$84712d0562a614b8 = ({ as: htmlAs , ref: ref , ...other })=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($289bbaee8161a6b5$var$StyledPlaceholder, {
        as: htmlAs,
        ...other,
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('Placeholder')
    })
;
var $289bbaee8161a6b5$export$2e2bcd8739ae039 = $289bbaee8161a6b5$export$84712d0562a614b8;






const $3b3020edd9f14036$var$useWindowSize = ()=>{
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = $bdtG2$react.useState();
    $bdtG2$react.useEffect(()=>{
        // Handler to call on window resize
        const handleResize = ()=>{
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return ()=>window.removeEventListener('resize', handleResize)
        ;
    }, []) // Empty array ensures that effect is only run on mount
    ;
    return windowSize || null;
};
var $3b3020edd9f14036$export$2e2bcd8739ae039 = $3b3020edd9f14036$var$useWindowSize;





const $22106d04551d89c9$var$ARROW_WIDTH = 7;
const $22106d04551d89c9$var$topCSS = $bdtG2$styledcomponents.css`
  margin-top: -${(props)=>props.isVisible ? $b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')(props) : '0px'
};

  &::after, &::before {
    top: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${$22106d04551d89c9$var$ARROW_WIDTH}px;
    border-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')} transparent transparent transparent;
  }

  &::before {
    margin-left: -${$22106d04551d89c9$var$ARROW_WIDTH - 1}px;
    border-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'highlight')} transparent transparent transparent;
  }
`;
const $22106d04551d89c9$var$bottomCSS = $bdtG2$styledcomponents.css`
  margin-top: ${(props)=>props.isVisible ? $b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')(props) : '0px'
};

  &::after, &::before {
    bottom: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${$22106d04551d89c9$var$ARROW_WIDTH}px;
    border-color: transparent transparent ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')} transparent;
  }

  &::before {
    margin-left: -${$22106d04551d89c9$var$ARROW_WIDTH - 1}px;
    border-color: transparent transparent ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'highlight')} transparent;
  }
`;
const $22106d04551d89c9$var$leftCSS = $bdtG2$styledcomponents.css`
  margin-left: -${(props)=>props.isVisible ? $b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')(props) : '0px'
};

  &::after, &::before {
    left: 100%;
    top: 50%;
  }

  &::after {
    margin-right: -${$22106d04551d89c9$var$ARROW_WIDTH}px;
    margin-top: -${$22106d04551d89c9$var$ARROW_WIDTH}px;
    border-color: transparent transparent transparent ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
  }

  &::before {
    margin-right: -${$22106d04551d89c9$var$ARROW_WIDTH - 1}px;
    margin-top: -${$22106d04551d89c9$var$ARROW_WIDTH - 1}px;
    border-color: transparent transparent transparent ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'highlight')};
  }
`;
const $22106d04551d89c9$var$rightCSS = $bdtG2$styledcomponents.css`
  margin-left: ${(props)=>props.isVisible ? $b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')(props) : '0px'
};

  &::after, &::before {
    right: 100%;
    top: 50%;
  }

  &::after {
    margin-left: -${$22106d04551d89c9$var$ARROW_WIDTH}px;
    margin-top: -${$22106d04551d89c9$var$ARROW_WIDTH}px;
    border-color: transparent ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')} transparent transparent;
  }

  &::before {
    margin-left: -${$22106d04551d89c9$var$ARROW_WIDTH - 1}px;
    margin-top: -${$22106d04551d89c9$var$ARROW_WIDTH - 1}px;
    border-color: transparent ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'highlight')} transparent transparent;
  }
`;
const $22106d04551d89c9$var$getPadding = (props)=>{
    const px = props.size === 'lg' ? 'xl' : 'md';
    const py = props.size === 'lg' ? 'lg' : 'sm';
    return `${$b549c418f45c0feb$export$2e2bcd8739ae039('space', py)(props)} ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', px)(props)}`;
};
const $22106d04551d89c9$export$353e9bd501be795b = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
  transition: opacity 0.2s, margin 0.2s;

  position: absolute;

  opacity: ${({ isVisible: isVisible  })=>isVisible ? '1' : '0'
};
  
  padding: ${(props)=>$22106d04551d89c9$var$getPadding(props)
};

  pointer-events: none;
  
  &::after {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 7px;
    z-index: 1;
  }
  &::before {
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 6px;
    z-index: 2;
  }

  ${(props)=>({
        top: $22106d04551d89c9$var$topCSS,
        bottom: $22106d04551d89c9$var$bottomCSS,
        left: $22106d04551d89c9$var$leftCSS,
        right: $22106d04551d89c9$var$rightCSS
    })[props.direction]
}
`;
$22106d04551d89c9$export$353e9bd501be795b.defaultProps = {
    borderColor: 'primary100',
    borderStyle: 'solid',
    borderWidth: '1px',
    bg: 'highlight',
    borderRadius: '3px'
};
var $22106d04551d89c9$export$2e2bcd8739ae039 = $22106d04551d89c9$export$353e9bd501be795b;


/**
 * @component
 * @private
 * @memberof Tooltip
 */ const $c3dc0814d1702094$export$2e2bcd8739ae039 = (props)=>{
    var ref, ref1;
    const { title: title , childRef: childRef , direction: direction = 'bottom' , ContentElement: ContentElement , size: size  } = props;
    const tooltipRef = $bdtG2$react.useRef(null);
    const [dimension, setDimension] = $bdtG2$react.useState(null);
    const [position, setPosition] = $bdtG2$react.useState(null);
    const [elementPosition, setElementPosition] = $bdtG2$react.useState(null);
    const windowSize = $3b3020edd9f14036$export$2e2bcd8739ae039();
    $bdtG2$react.useEffect(()=>{
        if (childRef.current) {
            const { clientWidth: clientWidth , offsetTop: offsetTop , offsetLeft: offsetLeft , clientHeight: clientHeight  } = childRef.current;
            setElementPosition({
                width: clientWidth,
                top: offsetTop,
                left: offsetLeft,
                height: clientHeight
            });
        }
    }, [
        childRef,
        windowSize === null || windowSize === void 0 ? void 0 : windowSize.width,
        windowSize === null || windowSize === void 0 ? void 0 : windowSize.height, 
    ]);
    $bdtG2$react.useEffect(()=>{
        if (tooltipRef.current) {
            const { clientWidth: clientWidth , clientHeight: clientHeight  } = tooltipRef.current;
            setDimension({
                width: clientWidth,
                height: clientHeight
            });
        }
    }, [
        tooltipRef === null || tooltipRef === void 0 ? void 0 : (ref = tooltipRef.current) === null || ref === void 0 ? void 0 : ref.clientWidth,
        tooltipRef === null || tooltipRef === void 0 ? void 0 : (ref1 = tooltipRef.current) === null || ref1 === void 0 ? void 0 : ref1.clientHeight,
        title, 
    ]);
    $bdtG2$react.useEffect(()=>{
        if (!elementPosition || !dimension) return;
        // eslint-disable-next-line default-case
        switch(direction){
            case 'bottom':
                setPosition({
                    top: elementPosition.top + elementPosition.height,
                    left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2
                });
                break;
            case 'top':
                setPosition({
                    top: elementPosition.top - dimension.height,
                    left: elementPosition.left + elementPosition.width / 2 - dimension.width / 2
                });
                break;
            case 'left':
                setPosition({
                    top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
                    left: elementPosition.left - dimension.width
                });
                break;
            case 'right':
                setPosition({
                    top: elementPosition.top + elementPosition.height / 2 - dimension.height / 2,
                    left: elementPosition.left + elementPosition.width
                });
                break;
        }
    }, [
        elementPosition,
        dimension,
        direction
    ]);
    const isVisible = !!(dimension && position);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($22106d04551d89c9$export$353e9bd501be795b, {
        ref: tooltipRef,
        left: (position === null || position === void 0 ? void 0 : position.left) || '-1110px',
        top: (position === null || position === void 0 ? void 0 : position.top) || '-1110px',
        size: size,
        direction: direction,
        isVisible: isVisible
    }, ContentElement || title));
};


const $72312c277971617b$var$TooltipPortal = $68ffcf41bedb3d5d$export$2e2bcd8739ae039.createPortalForKey('TOOLTIP', $c3dc0814d1702094$export$2e2bcd8739ae039);
/**
 * @load ./tooltip.doc.md
 * @component
 * @subcategory Atoms
 * @hideconstructor
 * @new In version 3.3
 * @section design-system
 */ const $72312c277971617b$export$28c660c63b792dea = (props)=>{
    const { direction: direction , title: title , children: children , size: size  } = props;
    const childRef = $bdtG2$react.useRef(null);
    const [isVisible, setIsVisible] = $bdtG2$react.useState(false);
    let TriggerElement;
    let ContentElement;
    const childrenCount = ($parcel$interopDefault($bdtG2$react)).Children.count(children);
    if (childrenCount === 1) TriggerElement = children;
    else if (childrenCount === 2) ($parcel$interopDefault($bdtG2$react)).Children.forEach(children, (child)=>{
        var ref;
        const type = (ref = child.type) === null || ref === void 0 ? void 0 : ref.displayName;
        if (type === 'TooltipContent') ContentElement = child;
        else TriggerElement = child;
    });
    const onEnter = ()=>{
        setIsVisible(true);
    };
    const onLeave = ()=>{
        setIsVisible(false);
    };
    const ChildWithRef = /*#__PURE__*/ $bdtG2$react.forwardRef((triggerProps, ref)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).cloneElement(TriggerElement, {
            ...triggerProps,
            displayName: 'TooltipTrigger',
            ref: ref
        })
    );
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(ChildWithRef, {
        ref: childRef,
        onMouseEnter: onEnter,
        onMouseLeave: onLeave
    }), isVisible && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($72312c277971617b$var$TooltipPortal, {
        title: title,
        childRef: childRef,
        size: size,
        direction: direction,
        ContentElement: ContentElement
    })));
};




/**
 * @component
 * @private
 */ const $28739a22f2fd2c74$var$TooltipContent = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)``;
$28739a22f2fd2c74$var$TooltipContent.displayName = 'TooltipContent';
var $28739a22f2fd2c74$export$2e2bcd8739ae039 = $28739a22f2fd2c74$var$TooltipContent;



















/**
 * @component
 * @private
 */ const $a737b12ace361553$var$InputGroup = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  position: relative;
  display: flex;
  width: 100%;
  ${$abe4556b45ee7c67$export$f5b8910cec6cf069} {
    flex-grow: 1;
  }
  ${$abe4556b45ee7c67$export$f5b8910cec6cf069}:not(:last-child) {
    border-right: none;
  }
  ${$81442ec7a17ae595$export$b04be29aa201d4f5}, & > ${$0dd800caa134a887$export$353f5b6fc5456de1}, & > ${$2a3c473bef742706$export$a6c7ac8248d6e38a}:last-child {
    padding: ${({ theme: theme  })=>theme.space.sm
};
    border: solid ${({ theme: theme  })=>theme.colors.inputBorder
};
    border-width: 1px 1px 1px 0;
    margin: 0;
    color: ${({ theme: theme  })=>theme.colors.grey40
};
  }

  ${$0dd800caa134a887$export$353f5b6fc5456de1}:last-child:hover {
    background: ${({ theme: theme  })=>theme.colors.hoverBg
};
  }

  ${$81442ec7a17ae595$export$b04be29aa201d4f5}, ${$0dd800caa134a887$export$353f5b6fc5456de1}, ${$2a3c473bef742706$export$a6c7ac8248d6e38a} {
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${$81442ec7a17ae595$export$b04be29aa201d4f5}, ${$2a3c473bef742706$export$a6c7ac8248d6e38a} {
    line-height: ${({ theme: theme  })=>theme.lineHeights.lg
};
  }

  ${$0dd800caa134a887$export$353f5b6fc5456de1}:first-child, ${$2a3c473bef742706$export$a6c7ac8248d6e38a}:first-child {
    border-right: 0;
  }

  ${$abe4556b45ee7c67$export$f5b8910cec6cf069}:hover {
    & + ${$81442ec7a17ae595$export$b04be29aa201d4f5}, & + ${$0dd800caa134a887$export$353f5b6fc5456de1}, & + ${$2a3c473bef742706$export$a6c7ac8248d6e38a} {
      border-color: ${({ theme: theme  })=>theme.colors.grey60
};
    }
  } 
  ${$abe4556b45ee7c67$export$f5b8910cec6cf069}:focus {
    & + ${$81442ec7a17ae595$export$b04be29aa201d4f5}, & + ${$0dd800caa134a887$export$353f5b6fc5456de1}, & + ${$2a3c473bef742706$export$a6c7ac8248d6e38a} {
      border-color: ${({ theme: theme  })=>theme.colors.primary100
};
    }
  }
`;
var $a737b12ace361553$export$2e2bcd8739ae039 = $a737b12ace361553$var$InputGroup;


const $691a66a4efa7b292$var$formGroupDisabledCSS = $bdtG2$styledcomponents.css`
  color: ${({ theme: theme  })=>theme.colors.grey40
};
`;
const $691a66a4efa7b292$var$formGroupWithErrorCSS = $bdtG2$styledcomponents.css`
  color: ${({ theme: theme  })=>theme.colors.error
};
  ${$abe4556b45ee7c67$export$f5b8910cec6cf069} {
    color: ${({ theme: theme  })=>theme.colors.error
};
    border-color: ${({ theme: theme  })=>theme.colors.error
};
  }
  &&& ${$81442ec7a17ae595$export$b04be29aa201d4f5} {
    color: ${({ theme: theme  })=>theme.colors.error
};
    &:before {
      color: ${({ theme: theme  })=>theme.colors.error
};
    }
  }
  &&& ${$81442ec7a17ae595$export$b04be29aa201d4f5}, &&& ${$0dd800caa134a887$export$353f5b6fc5456de1}, &&& ${$2a3c473bef742706$export$a6c7ac8248d6e38a} {
    border-color: ${({ theme: theme  })=>theme.colors.error
};
  }
`;
/**
 * @classdesc
 *
 * <img src="components/form-group.png" />
 *
 * FormGroup comes with other, from-related components like: FormMessage and InputGroup.
 * Together they allow you to build form elements.
 *
 * ### Usage
 *
 * ```javascript
 * import { FormGroup, FormGroupProps, InputGroup, FormMessage } from '@adminjs/design-system'
 * ```
 *
 * @hideconstructor
 * @component
 * @see FormGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-formgroup--default Storybook}
 * @subcategory Molecules
 * @example <caption>Example 1: input with all sorts of buttons</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 2: the same input with errors</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup error>
 *     <Label required>Name</Label>
 *     <InputGroup>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *       <Input />
 *       <Label>100 KM</Label>
 *       <Button variant="primary" size="icon">
 *         <Icon icon="ChevronRight" />
 *       </Button>
 *     </InputGroup>
 *     <FormMessage>And the optional message</FormMessage>
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 3: disabled field</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup disabled>
 *     <Label>Disabled field</Label>
 *     <InputGroup>
 *       <Input disabled />
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @example <caption>Example 4: with a link</caption>
 * return (
 * <Box py="xl">
 *   <FormGroup>
 *     <Label>Some form data with button link</Label>
 *     <InputGroup>
 *       <Input />
 *       <Link href="#someHref">This is link</Link>
 *     </InputGroup>
 *     <FormMessage />
 *   </FormGroup>
 * </Box>
 * )
 * @section design-system
 */ const $691a66a4efa7b292$export$2d00230e1e6f7fbc = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  width: 100%;
  ${({ error: error  })=>error ? $691a66a4efa7b292$var$formGroupWithErrorCSS : ''
};
  ${({ disabled: disabled  })=>disabled ? $691a66a4efa7b292$var$formGroupDisabledCSS : ''
};
  ${$bdtG2$styledsystem.space};

  & > ${$abe4556b45ee7c67$export$f5b8910cec6cf069} {
    width: 100%;
  }

  & ${$abe4556b45ee7c67$export$f5b8910cec6cf069} {
    ${({ variant: variant , theme: theme  })=>variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : ''
};
    ${({ variant: variant , theme: theme  })=>variant === 'filter' ? `color: ${theme.colors.white}` : ''
};
  }

  & ${$a737b12ace361553$export$2e2bcd8739ae039} {
    ${$81442ec7a17ae595$export$b04be29aa201d4f5}, ${$0dd800caa134a887$export$353f5b6fc5456de1}:last-child, ${$2a3c473bef742706$export$a6c7ac8248d6e38a}:last-child {
      ${({ variant: variant , theme: theme  })=>variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : ''
};
    }
  }
`;
$691a66a4efa7b292$export$2d00230e1e6f7fbc.defaultProps = {
    mb: 'lg'
};
var $691a66a4efa7b292$export$2e2bcd8739ae039 = $691a66a4efa7b292$export$2d00230e1e6f7fbc;






/**
 * @component
 * @private
 */ const $93558d16da977332$var$FormMessage = ($parcel$interopDefault($bdtG2$styledcomponents))($856c8c0ad8a28036$export$2e2bcd8739ae039)`
  box-sizing: border-box;
  vertical-align: middle;
  height: ${({ theme: theme  })=>theme.space.xl
};
  margin: ${({ theme: theme  })=>theme.space.sm
} 0 0;
  font-weight: normal;
  font-size: ${({ theme: theme  })=>theme.fontSizes.sm
};
`;
var $93558d16da977332$export$2e2bcd8739ae039 = $93558d16da977332$var$FormMessage;






/**
 * @load ./value-group.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see ValueGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-value-group--default Storybook}
 * @new In version 3.3
 * @section design-system
 */ const $496fd306f49f5af2$export$2e2bcd8739ae039 = (props)=>{
    const { label: label , value: value , children: children  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        mb: "xl"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($81442ec7a17ae595$export$b04be29aa201d4f5, {
        variant: "light"
    }, label), value ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, null, value) : '', children));
};


















const $189ca074b5948030$var$useDatePicker = ({ value: value , propertyType: propertyType , disabled: disabled , onChange: onChange  })=>{
    const [isCalendarVisible, setCalendarVisible] = $bdtG2$react.useState(false);
    let date;
    let dateString;
    if (value && value.constructor.name !== 'Date') {
        const dateStringValue = value;
        let dateNum = ($parcel$interopDefault($bdtG2$datefnsparseISO))(dateStringValue);
        if (dateNum.toString() === 'Invalid Date') dateNum = undefined;
        if (dateNum) {
            date = new Date(dateNum);
            dateString = $b56c8b815af55e6f$export$b0288a85498070ca(date, propertyType);
        }
    } else if (value && value.constructor.name === 'Date') dateString = $b56c8b815af55e6f$export$b0288a85498070ca(value, propertyType);
    const onDateChange = (newDate)=>{
        if (!disabled) onChange($b56c8b815af55e6f$export$b0288a85498070ca(newDate, propertyType));
    };
    return {
        dateString: dateString,
        date: date,
        isCalendarVisible: isCalendarVisible,
        setCalendarVisible: setCalendarVisible,
        onDateChange: onDateChange
    };
};
var $189ca074b5948030$export$2e2bcd8739ae039 = $189ca074b5948030$var$useDatePicker;


const $0f93b5046d4adeba$var$DatePickerWrapper = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  position: absolute;
  right: 0;
  top: ${({ theme: theme  })=>theme.space.xxl
};
`;
const $0f93b5046d4adeba$var$StyledDatePicker = ($parcel$interopDefault($bdtG2$styledcomponents))($a737b12ace361553$export$2e2bcd8739ae039)`
  ${$336417390e0f00d0$export$2e2bcd8739ae039};
  position: relative;

  &.active ${$abe4556b45ee7c67$export$f5b8910cec6cf069}, &.active ${$0dd800caa134a887$export$353f5b6fc5456de1} {
    z-index: 101;
  }
  
  & .react-datepicker {
    border-radius: 0;
    border: 1px solid ${({ theme: theme  })=>theme.colors.primary100
};
    padding: ${({ theme: theme  })=>theme.space.default
};
    font-family: ${({ theme: theme  })=>theme.font
};
    z-index: 101;
  }

  & .react-datepicker__navigation--next {
    border-left-color: ${({ theme: theme  })=>theme.colors.primary60
};
    top: 16px;
  }

  & .react-datepicker__navigation--next:hover {
    border-left-color: ${({ theme: theme  })=>theme.colors.primary100
};
  }

  & .react-datepicker__navigation--previous {
    border-right-color: ${({ theme: theme  })=>theme.colors.primary60
};
    top: 16px;
  }

  & .react-datepicker__navigation--previous:hover {
    border-right-color: ${({ theme: theme  })=>theme.colors.primary100
};
  }

  & .react-datepicker__navigation {
    outline: none;
  }

  & .react-datepicker__year-read-view--down-arrow {
    top: 5px;
  }

  & .react-datepicker__header {
    background: ${({ theme: theme  })=>theme.colors.white
};
    font-size: ${({ theme: theme  })=>theme.fontSizes.default
};
    border: none;
  }

  & .react-datepicker__current-month {
    font-weight: normal;
    padding-bottom: ${({ theme: theme  })=>theme.space.lg
};
  }

  & .react-datepicker__month {
    margin-top: 0;
  }

  & .react-datepicker__day-name {
    color: ${({ theme: theme  })=>theme.colors.primary60
};
  }

  & .react-datepicker__day--outside-month {
    color: ${({ theme: theme  })=>theme.colors.grey40
};
  }

  & .react-datepicker__day--today.react-datepicker__day--keyboard-selected {
    color: ${({ theme: theme  })=>theme.colors.white
};
  }

  & .react-datepicker__day--selected {
    color: ${({ theme: theme  })=>theme.colors.white
};
  }

  & .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--today) {
    background: none;
    color: ${({ theme: theme  })=>theme.colors.grey100
};
  }

  & .react-datepicker__day:hover,
  & .react-datepicker__day {
    border-radius: 15px;
  }

  & .react-datepicker__day--selected {
    background: ${({ theme: theme  })=>theme.colors.primary100
};
    border-radius: 15px;
    color: ${({ theme: theme  })=>theme.colors.white
};
  }
`;
const $0f93b5046d4adeba$var$Overlay = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  opacity: 0;
  background: #ccc;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;

  &.hidden {
    display: none;
  }
`;
/**
 * @classdesc
 *
 * <img src="components/date-picker.png" />
 *
 *
 * Component responsible for showing dates. It is a wrapper to
 * [react datepicker]{@link https://reactdatepicker.com/}.
 *
 * ### Usage
 *
 * ```javascript
 * import { DatePicker, DatePickerProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @see https://reactdatepicker.com/
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-datepicker--default Storybook}
 * @see DatePickerProps
 * @hideconstructor
 *
 * @example
 * return (
 * <Box width={1/2} height="300px">
 *   <DatePicker onChange={(date) => console.log(date)}/>
 * </Box>
 * )
 * @section design-system
 */ const $0f93b5046d4adeba$export$5109c6dd95d8fb00 = (props)=>{
    const { value: value , onChange: onChange , disabled: disabled , propertyType: propertyType , ...other } = props;
    const [inputValue, setInputValue] = ($parcel$interopDefault($bdtG2$react)).useState('');
    const { date: date , dateString: dateString , setCalendarVisible: setCalendarVisible , isCalendarVisible: isCalendarVisible , onDateChange: onDateChange ,  } = $189ca074b5948030$export$2e2bcd8739ae039({
        value: value,
        disabled: disabled,
        propertyType: propertyType,
        onChange: onChange
    });
    $bdtG2$react.useEffect(()=>{
        // Only update input value if date is selected via the date picker
        if (dateString && new Date(dateString).valueOf() !== new Date(inputValue).valueOf()) setInputValue(dateString);
    }, [
        dateString
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0f93b5046d4adeba$var$Overlay, {
        onClick: ()=>setCalendarVisible(false)
        ,
        className: isCalendarVisible ? 'visible' : 'hidden'
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0f93b5046d4adeba$var$StyledDatePicker, {
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('DatePicker', isCalendarVisible ? 'active' : 'normal')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($abe4556b45ee7c67$export$f5b8910cec6cf069, {
        value: inputValue,
        onChange: (event)=>{
            const newValue = new Date(event.target.value);
            setInputValue(event.target.value);
            // Check if input value is a valid date
            // eslint-disable-next-line no-restricted-globals
            if (!isNaN(newValue.valueOf())) onChange(event.target.value);
        },
        onFocus: ()=>setCalendarVisible(true)
        ,
        disabled: disabled
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0dd800caa134a887$export$353f5b6fc5456de1, {
        variant: "primary",
        type: "button",
        size: "icon",
        disabled: disabled,
        onClick: ()=>setCalendarVisible(!isCalendarVisible)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "Calendar"
    })), isCalendarVisible && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0f93b5046d4adeba$var$DatePickerWrapper, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$reactdatepicker)), {
        selected: date,
        onChange: onDateChange,
        inline: true,
        showTimeInput: propertyType === 'datetime',
        ...other
    })))));
};
var $0f93b5046d4adeba$export$2e2bcd8739ae039 = $0f93b5046d4adeba$export$5109c6dd95d8fb00;
















const $2553bebb598d545c$var$sizeVariants = $bdtG2$styledsystem.variant({
    prop: 'size',
    variants: {
        sm: {
            boxShadow: 'none',
            '& > section, & + section': {
                px: 'lg',
                py: 'default'
            },
            [`& > ${$0dd800caa134a887$export$353f5b6fc5456de1}`]: {
                margin: '0px'
            }
        }
    }
});
const $2553bebb598d545c$var$variants = (theme)=>$bdtG2$styledsystem.variant({
        variants: {
            success: {
            },
            danger: {
                bg: 'errorLight',
                'box-shadow': `0 2px 0 0 ${theme.colors.error};`,
                '& + section': {
                    borderColor: 'errorLight'
                }
            },
            info: {
                bg: 'primary20',
                'box-shadow': `0 2px 0 0 ${theme.colors.primary100};`,
                '& + section': {
                    borderColor: 'primary20'
                }
            }
        }
    })
;
const $2553bebb598d545c$var$StyledMessageBox = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  line-height: ${({ theme: theme  })=>theme.lineHeights.default
};
  box-shadow: 0 2px 0 0 ${({ theme: theme  })=>theme.colors.success
};
  background: ${({ theme: theme  })=>theme.colors.successLight
};
  color: ${({ theme: theme  })=>theme.colors.grey80
};
  & > ${$0dd800caa134a887$export$353f5b6fc5456de1} {
    float: right;
    margin: 8px;
    & svg {
      fill: ${({ theme: theme  })=>theme.colors.grey80
};
    }
  }
  ${({ theme: theme  })=>$2553bebb598d545c$var$variants(theme)
};
  ${$2553bebb598d545c$var$sizeVariants};
`;
const $2553bebb598d545c$var$StyledCaption = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)``;
$2553bebb598d545c$var$StyledCaption.defaultProps = {
    px: 'xl',
    py: 'lg'
};
const $2553bebb598d545c$var$StyledChildren = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  padding: ${({ theme: theme  })=>theme.space.lg
} ${({ theme: theme  })=>theme.space.xl
};
  background: ${({ theme: theme  })=>theme.colors.white
};
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-color: ${({ theme: theme  })=>theme.colors.successLight
};
`;
/**
 * @classdesc
 *
 * <img src="components/message-box.png" />
 *
 * Component responsible for rendering standard danger/info/success
 * messages.
 *
 * It has 2 size versions: default and small. Also it can either contain or
 * don't contain children, which causes different look.
 *
 * ### Usage
 *
 * ```javascript
 * import { MessageBox, MessageBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see MessageBoxProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-messagebox--default Storybook}
 * @example <caption>Different variants</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')} />
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')} />
 *  </Box>
 * )
 * @example <caption>Different variants with children</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox message="Some default message" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Error message" mt="default" variant="danger" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *   <MessageBox message="Info message" mt="default" variant="info" onCloseClick={() => alert('close clicked')}>
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @example <caption>Small with an icon and inside text</caption>
 * return (
 *  <Box py="lg">
 *   <MessageBox
 *     size="sm"
 *     message="Info message"
 *     mt="default"
 *     variant="info"
 *     icon="AddComment"
 *     onCloseClick={() => alert('close clicked')}
 *   >
 *     With inside text
 *   </MessageBox>
 *  </Box>
 * )
 * @section design-system
 */ const $2553bebb598d545c$export$52499e2c5ea4b095 = (props)=>{
    const { onCloseClick: onCloseClick , message: message , icon: icon , children: children , variant: variant , size: size , ...other } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('MessageBox'),
        ...other
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2553bebb598d545c$var$StyledMessageBox, {
        variant: variant,
        size: size
    }, onCloseClick ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0dd800caa134a887$export$353f5b6fc5456de1, {
        variant: "text",
        size: "icon",
        onClick: onCloseClick
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "Close"
    })) : '', /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2553bebb598d545c$var$StyledCaption, null, icon ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: icon,
        mr: "default"
    }) : '', message)), children ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2553bebb598d545c$var$StyledChildren, null, children) : ''));
};
var $2553bebb598d545c$export$2e2bcd8739ae039 = $2553bebb598d545c$export$52499e2c5ea4b095;







const $41f6200079e8f2f8$var$DropZoneImg = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  width: 80px;
  height: 80px;
  margin-right: ${({ theme: theme  })=>theme.space.lg
};
  background-image: url('${({ src: src  })=>src
}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: inline-block;
`;
/**
 * @classdesc
 *
 * <img src="components/drop-zone-item.png" />
 *
 * Single uploaded file. Usually it is used within {@link DropZone}, but it can also be
 * reused anywhere
 *
 * ### Usage
 *
 * ```javascript
 * import { DropZoneItem, DropZoneItemProps } from '@adminjs/design-system'
 * ```
 *
 * @see DropZoneItem
 * @hideconstructor
 * @see DropZoneItemProps
 * @example
 * return (
 *  <DropZoneItem
 *    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F05%2F17%2F724262019%2Fgrumpy-cat-dies-her-spirit-will-live-on-family-says&psig=AOvVaw2ZKtTEZr8N43fx9x-lTITa&ust=1581083274368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKidqqyIvecCFQAAAAAdAAAAABAD"
 *    filename="shut-up-it-works.png"
 *  />
 * )
 * @component
 * @subcategory Molecules
 * @section design-system
 */ const $41f6200079e8f2f8$export$df00ec63d8049b4b = (props)=>{
    const { file: file , onRemove: onRemove , filename: filename  } = props;
    let { src: src  } = props;
    if (file && [
        'image/png',
        'image/jpeg',
        'image/gif'
    ].includes(file.type)) src = URL.createObjectURL(file);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        bg: "grey20",
        px: "lg",
        py: "default",
        mt: "default",
        flex: true,
        alignItems: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "Attachment",
        mr: "default"
    }), src ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($41f6200079e8f2f8$var$DropZoneImg, {
        src: src
    }) : '', /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        flexGrow: 1
    }, (file === null || file === void 0 ? void 0 : file.name) || filename), onRemove && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0dd800caa134a887$export$353f5b6fc5456de1, {
        variant: "text",
        m: "-8px",
        size: "icon",
        type: "button",
        onClick: ()=>onRemove && onRemove()
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "Close"
    }))));
};
var $41f6200079e8f2f8$export$2e2bcd8739ae039 = $41f6200079e8f2f8$export$df00ec63d8049b4b;



const $8d3c9d8ffb7507d0$var$validateContentType = (mimeTypes, mimeType)=>{
    if (!mimeTypes || !mimeTypes.length) return true;
    return mimeTypes.includes(mimeType);
};
const $8d3c9d8ffb7507d0$var$validateSize = (maxSize, size)=>{
    if (!maxSize) return true;
    if (!size) return true;
    return +maxSize >= +size;
};
const $8d3c9d8ffb7507d0$var$inUnit = (size, unit)=>{
    if (!size) return '';
    return $f41083bb1e6881db$export$291541584f4e762f(size, unit);
};
const $8d3c9d8ffb7507d0$var$UploadInput = ($parcel$interopDefault($bdtG2$styledcomponents)).input`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
  width: 100%;
`;
const $8d3c9d8ffb7507d0$var$StyledDropZone = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  border: 1px dashed ${({ theme: theme  })=>theme.colors.grey80
};
  position: relative;
  text-align: center;

  & ${$81442ec7a17ae595$export$b04be29aa201d4f5} {
    color: ${({ theme: theme  })=>theme.colors.grey60
};
    font-size: ${({ theme: theme  })=>theme.fontSizes.xs
};
    padding-right: 4px;
    letter-spacing: 1px;
  }
`;
/**
 * @classdesc
 *
 * <img src="components/drop-zone.png" />
 *
 * DropZone which can be used for uploading files.
 *
 * ### usage
 *
 * ```javascript
 * import { DropZone, DropZoneProps } from '@adminjs/design-system'
 * ```
 *
 * how to use it in your custom component.tsx (TypesScript):
 * ```
 * import React, { useState } from 'react'
 * import { DropZone, Label, BasePropertyProps } from '@adminjs/design-system'
 * import { unflatten } from 'flat'
 *
 * const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
 *   const { property, record, onChange } = props
 *
 *   const onUpload = (files: FileList) => {
 *     const newRecord = {...record}
 *     const file = files.length && files[0]
 *
 *     onChange({
 *       ...newRecord,
 *       params: {
 *         ...newRecord.params,
 *         [property.name]: file,
 *       }
 *     })
 *     event.preventDefault()
 *   }
 *
 *   return (
 *     <Box>
 *       <Label>{property.label}</Label>
 *       <DropZone onChange={onUpload} />
 *     </Box>
 *   )
 * }
 * ```
 * @hideconstructor
 * @component
 * @subcategory Molecules
 * @see FileSizeUnit
 * @see OnDropDownChange
 * @see DropZoneProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropzone--default Storybook}
 * @example <caption>Single file with validation</caption>
 * const maxSize = 1024 * 100
 * const mimeTypes = ['application/pdf']
 * const onUpload = (files) => { alert(files,length ? files[0].name : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     onChange={onUpload}
 *     validate= { { maxSize, mimeTypes } }
 *   />
 * </Box>
 * )
 *
 * @example <caption>Multi file of photos</caption>
 * const mimeTypes = ['image/png']
 * const onUpload = (files) => { alert(files.length ? files.length : 'no files' ) }
 * return (
 * <Box>
 *   <DropZone
 *     multiple
 *     onChange={onUpload}
 *     validate= { { mimeTypes } }
 *   />
 * </Box>
 * )
 * @section design-system
 */ const $8d3c9d8ffb7507d0$export$3c6489d84dc98b6 = (props)=>{
    const { validate: validate , onChange: onChange , multiple: multiple , files: filesFromProps , uploadLimitIn: uploadLimitIn , ...other } = props;
    const [, setIsDragging] = $bdtG2$react.useState(false);
    const [error, setError] = $bdtG2$react.useState(null);
    const [filesToUpload, setFilesToUpload] = $bdtG2$react.useState(filesFromProps !== null && filesFromProps !== void 0 ? filesFromProps : []);
    $bdtG2$react.useEffect(()=>{
        if (filesFromProps) setFilesToUpload(filesFromProps);
    }, [
        filesFromProps
    ]);
    const onDragEnter = ()=>setIsDragging(true)
    ;
    const onDragLeave = ()=>setIsDragging(false)
    ;
    const onDragOver = ()=>setIsDragging(true)
    ;
    const removeItem = $bdtG2$react.useCallback((index)=>{
        const newItems = [
            ...filesToUpload
        ];
        newItems.splice(index, 1);
        if (onChange) onChange(newItems);
        setFilesToUpload(newItems);
    }, [
        filesToUpload,
        setFilesToUpload,
        onChange
    ]);
    const onDrop = $bdtG2$react.useCallback((event)=>{
        event.preventDefault();
        setIsDragging(false);
        const { files: files  } = event.dataTransfer || event.target;
        const validatedFiles = [];
        for(let i = 0; i < files.length; i += 1){
            const file = files.item(i);
            if (!file) return;
            if (validate && !$8d3c9d8ffb7507d0$var$validateSize(validate.maxSize, file && file.size)) {
                setError({
                    message: `File: ${file.name} size is too big`,
                    title: 'Wrong Size'
                });
                return;
            }
            if (validate && !$8d3c9d8ffb7507d0$var$validateContentType(validate.mimeTypes, file.type)) {
                setError({
                    message: `File: ${file.name} has unsupported type: ${file.type}`,
                    title: 'Wrong Type'
                });
                return;
            }
            validatedFiles.push(file);
            setError(null);
        }
        let newFiles;
        if (!multiple && validatedFiles.length) newFiles = [
            validatedFiles[0]
        ];
        else newFiles = [
            ...filesToUpload,
            ...validatedFiles, 
        ];
        if (onChange) onChange(newFiles);
        setFilesToUpload(newFiles);
    }, [
        onChange,
        setFilesToUpload,
        setIsDragging
    ]);
    const displayUploadLimit = $bdtG2$react.useCallback(()=>{
        if (validate && validate.maxSize) return $8d3c9d8ffb7507d0$var$inUnit(validate.maxSize, uploadLimitIn);
        return '';
    }, [
        validate
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($8d3c9d8ffb7507d0$var$StyledDropZone, {
        onDragEnter: onDragEnter,
        onDragOver: onDragOver,
        onDragLeave: onDragLeave,
        onDrop: onDrop,
        ...other,
        p: "xl"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($8d3c9d8ffb7507d0$var$UploadInput, {
        type: "file",
        onChange: (event)=>onDrop(event)
        ,
        multiple: multiple
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, {
        fontSize: "sm"
    }, "Pick or Drop File here to upload it."), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, null, validate && validate.maxSize ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, {
        variant: "xs",
        color: "grey60",
        lineHeight: "default",
        mt: "sm"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($81442ec7a17ae595$export$b04be29aa201d4f5, {
        inline: true,
        uppercase: true
    }, "Max size:"), displayUploadLimit()) : '', validate && validate.mimeTypes && validate.mimeTypes.length ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, {
        variant: "xs",
        color: "grey60",
        lineHeight: "default",
        mt: "sm"
    }, validate.mimeTypes.join(', ')) : ''))), error ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2553bebb598d545c$export$52499e2c5ea4b095, {
        mt: "default",
        variant: "danger",
        size: "sm",
        icon: "Warning",
        message: error.title,
        onCloseClick: ()=>setError(null)
    }, error.message) : '', filesToUpload.map((file, index)=>// eslint-disable-next-line react/no-array-index-key
        /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($41f6200079e8f2f8$export$df00ec63d8049b4b, {
            file: file,
            key: index,
            onRemove: ()=>removeItem(index)
        })
    )));
};
var $8d3c9d8ffb7507d0$export$2e2bcd8739ae039 = $8d3c9d8ffb7507d0$export$3c6489d84dc98b6;









const $fdb5e21125f5410e$var$snow = $bdtG2$styledcomponents.css`
  .ql-container {
    box-sizing: border-box;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
  }

  .ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
  }
  .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
  }
  .ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
  }
  .ql-clipboard p {
    margin: 0;
    padding: 0;
  }
  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 20px 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .ql-snow.ql-toolbar:after,
  .ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
  }
  .ql-snow.ql-toolbar button,
  .ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
  }
  .ql-snow.ql-toolbar button svg,
  .ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
  }
  .ql-snow.ql-toolbar button:active:hover,
  .ql-snow .ql-toolbar button:active:hover {
    outline: none;
  }
  .ql-snow.ql-toolbar input.ql-image[type=file],
  .ql-snow .ql-toolbar input.ql-image[type=file] {
    display: none;
  }
  .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
  }
  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
  }
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
  }
  @media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
      color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
      fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
      stroke: #444;
    }
  }
  .ql-snow {
    box-sizing: border-box;
  }
  .ql-snow * {
    box-sizing: border-box;
  }
  .ql-snow .ql-hidden {
    display: none;
  }
  .ql-snow .ql-out-bottom,
  .ql-snow .ql-out-top {
    visibility: hidden;
  }
  .ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
  }
  .ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
  }
  .ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
  }
  .ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
  }
  .ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
  }
  .ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
  .ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
  }
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow .ql-empty {
    fill: none;
  }
  .ql-snow .ql-even {
    fill-rule: evenodd;
  }
  .ql-snow .ql-thin,
  .ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
  }
  .ql-snow .ql-transparent {
    opacity: 0.4;
  }
  .ql-snow .ql-direction svg:last-child {
    display: none;
  }
  .ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
  }
  .ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
  }

  .ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
  }
  .ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
  }
  .ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
  }
  .ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
  }
  .ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
  }
  .ql-snow .ql-color-picker,
  .ql-snow .ql-icon-picker {
    width: 28px;
  }
  .ql-snow .ql-color-picker .ql-picker-label,
  .ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
  }
  .ql-snow .ql-color-picker .ql-picker-label svg,
  .ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
  }
  .ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
  }
  .ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
  }
  .ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
  }
  .ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
  }
  .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
  }
  .ql-snow .ql-picker.ql-header {
    width: 98px;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: 'Heading 1';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: 'Heading 2';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: 'Heading 3';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: 'Heading 4';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: 'Heading 5';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: 'Heading 6';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    font-size: 2em;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    font-size: 1.5em;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    font-size: 1.17em;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    font-size: 1em;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    font-size: 0.83em;
  }
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    font-size: 0.67em;
  }
  .ql-snow .ql-picker.ql-font {
    width: 108px;
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: 'Serif';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: 'Monospace';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    font-family: Georgia, Times New Roman, serif;
  }
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    font-family: Monaco, Courier New, monospace;
  }
  .ql-snow .ql-picker.ql-size {
    width: 98px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    content: 'Small';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    content: 'Large';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    content: 'Huge';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    font-size: 10px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    font-size: 18px;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    font-size: 32px;
  }
  .ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
  }
  .ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
  }
  .ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
  }

  .quill-borderless .ql-toolbar.ql-snow {
    border-width: 0px 0 1px 0;
    border-color: ${({ theme: theme  })=>$bdtG2$polished.rgba(theme.colors.inputBorder, 0.3)
};
  }

  .ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
  }
  .ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
  }
  .ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0,0,0,0.2) 0 2px 8px;
  }
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
  }
  .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
  }
  .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
  .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
  }
  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
  }
  .ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
  }
  .ql-snow .ql-tooltip::before {
    content: "Visit URL:";
    line-height: 26px;
    margin-right: 8px;
  }
  .ql-snow .ql-tooltip input[type=text] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
  }
  .ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }
  .ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
  }
  .ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
  }
  .ql-snow .ql-tooltip a {
    line-height: 26px;
  }
  .ql-snow .ql-tooltip.ql-editing a.ql-preview,
  .ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
  }
  .ql-snow .ql-tooltip.ql-editing input[type=text] {
    display: inline-block;
  }
  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
  }
  .ql-snow .ql-tooltip[data-mode=link]::before {
    content: "Enter link:";
  }
  .ql-snow .ql-tooltip[data-mode=formula]::before {
    content: "Enter formula:";
  }
  .ql-snow .ql-tooltip[data-mode=video]::before {
    content: "Enter video:";
  }
  .ql-snow a {
    color: 1px solid ${({ theme: theme  })=>theme.colors.grey100
};
  }
  .ql-container.ql-snow {
    border: 1px solid ${({ theme: theme  })=>theme.colors.inputBorder
};
  }

  .quill-borderless .ql-container {
    border: 0px none;
  }
`;
var $fdb5e21125f5410e$export$2e2bcd8739ae039 = $fdb5e21125f5410e$var$snow;



const $ffabb0973b807c1a$var$bubble = $bdtG2$styledcomponents.css`
  .ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
  }
  .ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
  }
  .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
  }
  .ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
  }
  .ql-clipboard p {
    margin: 0;
    padding: 0;
  }
  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .ql-editor.ql-blank::before {
    color: rgba(0,0,0,0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
  }
  .ql-bubble.ql-toolbar:after,
  .ql-bubble .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
  }
  .ql-bubble.ql-toolbar button,
  .ql-bubble .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
  }
  .ql-bubble.ql-toolbar button svg,
  .ql-bubble .ql-toolbar button svg {
    float: left;
    height: 100%;
  }
  .ql-bubble.ql-toolbar button:active:hover,
  .ql-bubble .ql-toolbar button:active:hover {
    outline: none;
  }
  .ql-bubble.ql-toolbar input.ql-image[type=file],
  .ql-bubble .ql-toolbar input.ql-image[type=file] {
    display: none;
  }
  .ql-bubble.ql-toolbar button:hover,
  .ql-bubble .ql-toolbar button:hover,
  .ql-bubble.ql-toolbar button:focus,
  .ql-bubble .ql-toolbar button:focus,
  .ql-bubble.ql-toolbar button.ql-active,
  .ql-bubble .ql-toolbar button.ql-active,
  .ql-bubble.ql-toolbar .ql-picker-label:hover,
  .ql-bubble .ql-toolbar .ql-picker-label:hover,
  .ql-bubble.ql-toolbar .ql-picker-label.ql-active,
  .ql-bubble .ql-toolbar .ql-picker-label.ql-active,
  .ql-bubble.ql-toolbar .ql-picker-item:hover,
  .ql-bubble .ql-toolbar .ql-picker-item:hover,
  .ql-bubble.ql-toolbar .ql-picker-item.ql-selected,
  .ql-bubble .ql-toolbar .ql-picker-item.ql-selected {
    color: #fff;
  }
  .ql-bubble.ql-toolbar button:hover .ql-fill,
  .ql-bubble .ql-toolbar button:hover .ql-fill,
  .ql-bubble.ql-toolbar button:focus .ql-fill,
  .ql-bubble .ql-toolbar button:focus .ql-fill,
  .ql-bubble.ql-toolbar button.ql-active .ql-fill,
  .ql-bubble .ql-toolbar button.ql-active .ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-bubble.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-bubble.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-bubble.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #fff;
  }
  .ql-bubble.ql-toolbar button:hover .ql-stroke,
  .ql-bubble .ql-toolbar button:hover .ql-stroke,
  .ql-bubble.ql-toolbar button:focus .ql-stroke,
  .ql-bubble .ql-toolbar button:focus .ql-stroke,
  .ql-bubble.ql-toolbar button.ql-active .ql-stroke,
  .ql-bubble .ql-toolbar button.ql-active .ql-stroke,
  .ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-bubble.ql-toolbar button:hover .ql-stroke-miter,
  .ql-bubble .ql-toolbar button:hover .ql-stroke-miter,
  .ql-bubble.ql-toolbar button:focus .ql-stroke-miter,
  .ql-bubble .ql-toolbar button:focus .ql-stroke-miter,
  .ql-bubble.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-bubble .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-bubble.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-bubble .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-bubble.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-bubble .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-bubble.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-bubble .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-bubble.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-bubble .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #fff;
  }
  @media (pointer: coarse) {
    .ql-bubble.ql-toolbar button:hover:not(.ql-active),
    .ql-bubble .ql-toolbar button:hover:not(.ql-active) {
      color: #ccc;
    }
    .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
      fill: #ccc;
    }
    .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-bubble.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-bubble .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
      stroke: #ccc;
    }
  }
  .ql-bubble {
    box-sizing: border-box;
  }
  .ql-bubble * {
    box-sizing: border-box;
  }
  .ql-bubble .ql-hidden {
    display: none;
  }
  .ql-bubble .ql-out-bottom,
  .ql-bubble .ql-out-top {
    visibility: hidden;
  }
  .ql-bubble .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
  }
  .ql-bubble .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
  }
  .ql-bubble .ql-tooltip.ql-flip {
    transform: translateY(-10px);
  }
  .ql-bubble .ql-formats {
    display: inline-block;
    vertical-align: middle;
  }
  .ql-bubble .ql-formats:after {
    clear: both;
    content: '';
    display: table;
  }
  .ql-bubble .ql-stroke {
    fill: none;
    stroke: #ccc;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
  .ql-bubble .ql-stroke-miter {
    fill: none;
    stroke: #ccc;
    stroke-miterlimit: 10;
    stroke-width: 2;
  }
  .ql-bubble .ql-fill,
  .ql-bubble .ql-stroke.ql-fill {
    fill: #ccc;
  }
  .ql-bubble .ql-empty {
    fill: none;
  }
  .ql-bubble .ql-even {
    fill-rule: evenodd;
  }
  .ql-bubble .ql-thin,
  .ql-bubble .ql-stroke.ql-thin {
    stroke-width: 1;
  }
  .ql-bubble .ql-transparent {
    opacity: 0.4;
  }
  .ql-bubble .ql-direction svg:last-child {
    display: none;
  }
  .ql-bubble .ql-direction.ql-active svg:last-child {
    display: inline;
  }
  .ql-bubble .ql-direction.ql-active svg:first-child {
    display: none;
  }
  
  .ql-bubble .ql-picker {
    color: #ccc;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
  }
  .ql-bubble .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
  }
  .ql-bubble .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
  }
  .ql-bubble .ql-picker-options {
    background-color: #444;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
  }
  .ql-bubble .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .ql-bubble .ql-picker.ql-expanded .ql-picker-label {
    color: #777;
    z-index: 2;
  }
  .ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #777;
  }
  .ql-bubble .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #777;
  }
  .ql-bubble .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
  }
  .ql-bubble .ql-color-picker,
  .ql-bubble .ql-icon-picker {
    width: 28px;
  }
  .ql-bubble .ql-color-picker .ql-picker-label,
  .ql-bubble .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
  }
  .ql-bubble .ql-color-picker .ql-picker-label svg,
  .ql-bubble .ql-icon-picker .ql-picker-label svg {
    right: 4px;
  }
  .ql-bubble .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
  }
  .ql-bubble .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
  }
  .ql-bubble .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
  }
  .ql-bubble .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
  }
  .ql-bubble .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
  .ql-bubble .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
  .ql-bubble .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
  }
  .ql-bubble .ql-picker.ql-header {
    width: 98px;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: 'Heading 1';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: 'Heading 2';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: 'Heading 3';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: 'Heading 4';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: 'Heading 5';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: 'Heading 6';
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    font-size: 2em;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    font-size: 1.5em;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    font-size: 1.17em;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    font-size: 1em;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    font-size: 0.83em;
  }
  .ql-bubble .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    font-size: 0.67em;
  }
  .ql-bubble .ql-picker.ql-font {
    width: 108px;
  }
  .ql-bubble .ql-picker.ql-font .ql-picker-label::before,
  .ql-bubble .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
  }
  .ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
  .ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: 'Serif';
  }
  .ql-bubble .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
  .ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: 'Monospace';
  }
  .ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    font-family: Georgia, Times New Roman, serif;
  }
  .ql-bubble .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    font-family: Monaco, Courier New, monospace;
  }
  .ql-bubble .ql-picker.ql-size {
    width: 98px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    content: 'Small';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    content: 'Large';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    content: 'Huge';
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
    font-size: 10px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
    font-size: 18px;
  }
  .ql-bubble .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
    font-size: 32px;
  }
  .ql-bubble .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
  }
  .ql-bubble .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
  }
  .ql-bubble .ql-toolbar .ql-formats {
    margin: 8px 12px 8px 0px;
  }
  .ql-bubble .ql-toolbar .ql-formats:first-child {
    margin-left: 12px;
  }
  .ql-bubble .ql-color-picker svg {
    margin: 1px;
  }
  .ql-bubble .ql-color-picker .ql-picker-item.ql-selected,
  .ql-bubble .ql-color-picker .ql-picker-item:hover {
    border-color: #fff;
  }
  .ql-bubble .ql-tooltip {
    background-color: #444;
    border-radius: 25px;
    color: #fff;
  }
  .ql-bubble .ql-tooltip-arrow {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    content: " ";
    display: block;
    left: 50%;
    margin-left: -6px;
    position: absolute;
  }
  .ql-bubble .ql-tooltip:not(.ql-flip) .ql-tooltip-arrow {
    border-bottom: 6px solid #444;
    top: -6px;
  }
  .ql-bubble .ql-tooltip.ql-flip .ql-tooltip-arrow {
    border-top: 6px solid #444;
    bottom: -6px;
  }
  .ql-bubble .ql-tooltip.ql-editing .ql-tooltip-editor {
    display: block;
  }
  .ql-bubble .ql-tooltip.ql-editing .ql-formats {
    visibility: hidden;
  }
  .ql-bubble .ql-tooltip-editor {
    display: none;
  }
  .ql-bubble .ql-tooltip-editor input[type=text] {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 13px;
    height: 100%;
    outline: none;
    padding: 10px 20px;
    position: absolute;
    width: 100%;
  }
  .ql-bubble .ql-tooltip-editor a {
    top: 10px;
    position: absolute;
    right: 20px;
  }
  .ql-bubble .ql-tooltip-editor a:before {
    color: #ccc;
    content: "\D7";
    font-size: 16px;
    font-weight: bold;
  }
  .ql-container.ql-bubble:not(.ql-disabled) a {
    position: relative;
    white-space: nowrap;
  }
  .ql-container.ql-bubble:not(.ql-disabled) a::before {
    background-color: #444;
    border-radius: 15px;
    top: -5px;
    font-size: 12px;
    color: #fff;
    content: attr(href);
    font-weight: normal;
    overflow: hidden;
    padding: 5px 15px;
    text-decoration: none;
    z-index: 1;
  }
  .ql-container.ql-bubble:not(.ql-disabled) a::after {
    border-top: 6px solid #444;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    top: 0;
    content: " ";
    height: 0;
    width: 0;
  }
  .ql-container.ql-bubble:not(.ql-disabled) a::before,
  .ql-container.ql-bubble:not(.ql-disabled) a::after {
    left: 0;
    margin-left: 50%;
    position: absolute;
    transform: translate(-50%, -100%);
    transition: visibility 0s ease 200ms;
    visibility: hidden;
  }
  .ql-container.ql-bubble:not(.ql-disabled) a:hover::before,
  .ql-container.ql-bubble:not(.ql-disabled) a:hover::after {
    visibility: visible;
  }
`;
var $ffabb0973b807c1a$export$2e2bcd8739ae039 = $ffabb0973b807c1a$var$bubble;





const $1d9157ad463c67cb$var$styles = $bdtG2$styledcomponents.css`
  .ql-editor > * {
    cursor: text;
  }

  .ql-editor {
    ${$b008e1ca8c6d4f9c$export$2e2bcd8739ae039};
    padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xl')};
  }
  
  .ql-editor ul[data-checked=true],
  .ql-editor ul[data-checked=false] {
    pointer-events: none;
  }
  .ql-editor ul[data-checked=true] > li *,
  .ql-editor ul[data-checked=false] > li * {
    pointer-events: all;
  }
  .ql-editor ul[data-checked=true] > li::before,
  .ql-editor ul[data-checked=false] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
  }
  .ql-editor ul[data-checked=true] > li::before {
    content: '\\2611';
  }
  .ql-editor ul[data-checked=false] > li::before {
    content: '\\2610';
  }

  .ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
  }
  .ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
  }
  .ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
  }
  .ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
  }
  .ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
  .ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
  }
  .ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
  }
  .ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
  .ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
  }
  .ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
  }
  .ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
  }
  .ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
  }
  .ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
  }
  .ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
  }
  .ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
  }
  .ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
  }
  .ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
  }
  .ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
  }
  .ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
  }
  .ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
  }
  .ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
  }
  .ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
  }
  .ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
  }
  .ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
  }
  .ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
  }
  .ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
  }
  .ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
  }
  .ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
  }
  .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3em;
  }
  .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5em;
  }
  .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3em;
  }
  .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5em;
  }
  .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6em;
  }
  .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5em;
  }
  .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6em;
  }
  .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5em;
  }
  .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9em;
  }
  .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5em;
  }
  .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9em;
  }
  .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5em;
  }
  .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12em;
  }
  .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5em;
  }
  .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12em;
  }
  .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5em;
  }
  .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15em;
  }
  .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5em;
  }
  .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15em;
  }
  .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5em;
  }
  .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18em;
  }
  .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5em;
  }
  .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18em;
  }
  .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5em;
  }
  .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21em;
  }
  .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5em;
  }
  .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21em;
  }
  .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5em;
  }
  .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24em;
  }
  .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5em;
  }
  .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24em;
  }
  .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5em;
  }
  .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27em;
  }
  .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5em;
  }
  .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27em;
  }
  .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5em;
  }
  .ql-editor .ql-video {
    display: block;
    max-width: 100%;
  }
  .ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
  }
  .ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
  }
  .ql-editor .ql-bg-black {
    background-color: #000;
  }
  .ql-editor .ql-bg-red {
    background-color: #e60000;
  }
  .ql-editor .ql-bg-orange {
    background-color: #f90;
  }
  .ql-editor .ql-bg-yellow {
    background-color: #ff0;
  }
  .ql-editor .ql-bg-green {
    background-color: #008a00;
  }
  .ql-editor .ql-bg-blue {
    background-color: #06c;
  }
  .ql-editor .ql-bg-purple {
    background-color: #93f;
  }
  .ql-editor .ql-color-white {
    color: #fff;
  }
  .ql-editor .ql-color-red {
    color: #e60000;
  }
  .ql-editor .ql-color-orange {
    color: #f90;
  }
  .ql-editor .ql-color-yellow {
    color: #ff0;
  }
  .ql-editor .ql-color-green {
    color: #008a00;
  }
  .ql-editor .ql-color-blue {
    color: #06c;
  }
  .ql-editor .ql-color-purple {
    color: #93f;
  }
  .ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
  }
  .ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
  }
  .ql-editor .ql-size-small {
    font-size: 0.75em;
  }
  .ql-editor .ql-size-large {
    font-size: 1.5em;
  }
  .ql-editor .ql-size-huge {
    font-size: 2.5em;
  }
  .ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
  }
  .ql-editor .ql-align-center {
    text-align: center;
  }
  .ql-editor .ql-align-justify {
    text-align: justify;
  }
  .ql-editor .ql-align-right {
    text-align: right;
  }
  .ql-editor.ql-blank::before {
    color: rgba(0,0,0,0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
  }

  .ql-picker.ql-header .ql-picker-item::before {
    margin-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xs')};
    margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xs')};
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'lg')};
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'light')};
  }

  .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h1')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xxl')};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h2')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xxl')};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xl')};
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h3')};
  }

  .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'h4')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'xl')};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'xl')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'normal')};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'lg')};
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'lg')};
    font-weight: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontWeights', 'normal')};
  }
`;
var $1d9157ad463c67cb$export$2e2bcd8739ae039 = $1d9157ad463c67cb$var$styles;



const $df5645d82b3bcfc1$export$928e071f046e13b6 = [
    [
        {
            header: [
                1,
                2,
                3,
                4,
                5,
                6,
                false
            ]
        }
    ],
    [
        'bold',
        'italic',
        'underline',
        'strike'
    ],
    [
        'blockquote',
        'code-block'
    ],
    [
        {
            list: 'ordered'
        },
        {
            list: 'bullet'
        }
    ],
    [
        {
            indent: '-1'
        },
        {
            indent: '+1'
        }
    ],
    [
        {
            align: []
        }
    ],
    [
        'link',
        'image',
        'video'
    ],
    [
        'clean'
    ]
];



// Following hack is done for SSR case, where Quill wants to invoke `document.createElement...`
// So when system sees that file is run by the server (window is not defined) then it sets
// quill to null instead throwing errors. We have to use require because import has to be
// top-level. This line cannot be changed since rollup bundler relies on it in the exact form.
// Check out `config/rollup.js`
// @ts-ignore
const $be35932779fc965f$var$Quill = typeof window === 'object' ? $bdtG2$quill : null;
const $be35932779fc965f$var$Theme = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
  ${$ffabb0973b807c1a$export$2e2bcd8739ae039};
  ${$fdb5e21125f5410e$export$2e2bcd8739ae039};
  ${$1d9157ad463c67cb$export$2e2bcd8739ae039};
`;
const $be35932779fc965f$export$f284d8638abd8920 = /*#__PURE__*/ $bdtG2$react.forwardRef((props, ref)=>{
    var ref1;
    const { value: initialValue , borderless: borderless , quill: options , onChange: onChange  } = props;
    options.theme = options.theme || 'snow';
    if (!((ref1 = options.modules) === null || ref1 === void 0 ? void 0 : ref1.toolbar)) {
        options.modules = options.modules || {
        };
        options.modules.toolbar = $df5645d82b3bcfc1$export$928e071f046e13b6;
    }
    if (!$be35932779fc965f$var$Quill) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", null, "Server Side Rendered"));
    const classNames = [];
    if (borderless) classNames.push('quill-borderless');
    const [quill, setQuill] = $bdtG2$react.useState(null);
    const [content, setContent] = $bdtG2$react.useState(initialValue || '');
    // TODO: right now I don't watch for changes on ref - maybe I should?
    const editorRef = ref || $bdtG2$react.useRef(null);
    const handleChange = $bdtG2$react.useCallback(()=>{
        const editor = quill === null || quill === void 0 ? void 0 : quill.root;
        if (editor) {
            const currentContent = editor.innerHTML;
            setContent(currentContent);
            if (onChange) onChange(currentContent);
        }
    }, [
        onChange,
        quill
    ]);
    $bdtG2$react.useEffect(()=>{
        if (editorRef.current) {
            const quillInstance = new $be35932779fc965f$var$Quill(editorRef.current, options);
            setQuill(quillInstance);
        }
        return ()=>{
            setQuill(null);
        };
    }, []);
    $bdtG2$react.useEffect(()=>{
        if (!editorRef.current || !quill) return;
        if (content && quill.root.innerHTML !== content) quill.clipboard.dangerouslyPasteHTML(content);
    }, [
        quill
    ]) // only when quill is initialized - later on it should update content
    ;
    $bdtG2$react.useEffect(()=>{
        const editor = quill === null || quill === void 0 ? void 0 : quill.root;
        if (!editor) return undefined;
        editor === null || editor === void 0 ? void 0 : editor.addEventListener('DOMSubtreeModified', handleChange);
        return ()=>{
            editor === null || editor === void 0 ? void 0 : editor.removeEventListener('DOMSubtreeModified', handleChange);
        };
    }, [
        onChange,
        handleChange
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($be35932779fc965f$var$Theme, {
        quill: options
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", {
        className: classNames.join(' ')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", {
        className: "quill-editor",
        ref: editorRef
    }))));
});
var $be35932779fc965f$export$2e2bcd8739ae039 = $be35932779fc965f$export$f284d8638abd8920;









const $a41ffd1dc7be84ed$var$StyledInfoBox = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
/**
 * @classdesc
 *
 * <img src="components/info-box.png" />
 *
 * Used for all type of information like:
 *
 * > you don't have x - please add first one"
 *
 * in the system.
 *
 * ### Usage
 *
 * ```javascript
 * import { InfoBox, InfoBoxProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-infobox--default Storybook}
 * @see InfoBoxProps
 * @example
 * return (
 * <InfoBox title="There are no cars in the system">
 *   <Text>Currently there are no cars in the system</Text>
 *   <Text>To create first click</Text>
 *   <Button mt="lg"><Icon icon="Add" />Create</Button>
 * </InfoBox>
 * )
 * @section design-system
 */ const $a41ffd1dc7be84ed$export$aff4fc93593c3bcf = (props)=>{
    const { children: children , title: title , testId: testId  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($a41ffd1dc7be84ed$var$StyledInfoBox, {
        "data-testid": testId,
        variant: "white",
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('InfoBox')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        width: 0.5
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$export$cc5e069d64fda823, {
        mb: "lg"
    }, title), children)));
};
var $a41ffd1dc7be84ed$export$2e2bcd8739ae039 = $a41ffd1dc7be84ed$export$aff4fc93593c3bcf;







const $fef823c1003309e7$export$d27f514718fca80 = (props)=>props.isOpen ? $b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey20')(props) : 'transparent'
;
const $fef823c1003309e7$export$d6df785aa75e39f5 = (props)=>$b549c418f45c0feb$export$2e2bcd8739ae039('colors', props.isSelected ? 'primary100' : 'grey80')(props)
;
const $fef823c1003309e7$export$9cba106966b1867d = (props)=>$b549c418f45c0feb$export$2e2bcd8739ae039('colors', props.isOpen ? 'grey80' : 'primary100')(props)
;
const $fef823c1003309e7$export$a85c08818ef76757 = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  background-color: ${$fef823c1003309e7$export$d27f514718fca80};
  padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md', '-1px')} ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
  text-decoration: none;
  color: ${$fef823c1003309e7$export$d6df785aa75e39f5};
  cursor: pointer;
  &:hover {
    color: ${$fef823c1003309e7$export$9cba106966b1867d};
  }
  & > * {
    align-self: center;
  }
  & > .icon-box {
    flex-shrink: 0;
    padding-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
    & svg {
      fill: ${$fef823c1003309e7$export$d6df785aa75e39f5};
    }
  }
  & > ${$1367b13171f7d9e7$export$2e2bcd8739ae039} {
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .arrow-box {
    flex-shrink: 0;
    & svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey40')};
    }
  }
`;


// The longest part of the label which makes it no-wrap: ellipsis
// example: `MongooseWithLongNameAnd with space` should be truncated because 15 lines doesn't fit
// the width of the navbar. But "Postgres with long name and spaces" shouldn't be truncated because
// its "parts" doesn't exceed 15 chars each.
const $9bc5b2c2c7487c3a$var$PART_LENGTH_TO_ELLIPSIS = 15;
/**
 * @load ./navigation-element.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavigationElementProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-navigation-element--default Storybook}
 * @section design-system
 * @new In version 3.3
 */ const $9bc5b2c2c7487c3a$export$111d1dbff469cc4e = (props)=>{
    const { isOpen: isOpen , icon: icon , onClick: onClick , label: label , isSelected: isSelected , href: href  } = props;
    const expandable = typeof isOpen !== 'undefined';
    const chevron = isOpen ? 'ChevronUp' : 'ChevronDown';
    const hasLongName = label.split(' ').reduce((memo, part)=>memo.length > part.length ? memo : part
    , '').length > $9bc5b2c2c7487c3a$var$PART_LENGTH_TO_ELLIPSIS;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($fef823c1003309e7$export$a85c08818ef76757, {
        flex: true,
        flexDirection: "row",
        as: "a",
        isSelected: isSelected,
        isOpen: isOpen,
        href: href,
        onClick: (event)=>onClick ? onClick(event, props) : undefined
    }, icon && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        className: "icon-box",
        as: "span"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: icon
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1367b13171f7d9e7$export$2e2bcd8739ae039, {
        style: {
            whiteSpace: hasLongName ? 'nowrap' : 'normal'
        }
    }, label), expandable && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        className: "arrow-box",
        as: "span"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: chevron
    }))));
};










const $d681bfadb6d87f0d$var$StyledDropDown = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  position: relative;
  display: inline-block;
`;
const $d681bfadb6d87f0d$export$ff769470b11a8c7 = 'left';
/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @component
 * @subcategory Molecules
 * @section design-system
 */ const $d681bfadb6d87f0d$export$e7fbc454eee05098 = (props)=>{
    const { children: children , stick: stick = $d681bfadb6d87f0d$export$ff769470b11a8c7 , ...boxProps } = props;
    const [isVisible, setIsVisible] = $bdtG2$react.useState(false);
    const [initialHeight, setInitialHeight] = $bdtG2$react.useState(null);
    const ref = $bdtG2$react.useRef(null);
    const [menuPosition, setMenuPosition] = $bdtG2$react.useState();
    $bdtG2$react.useLayoutEffect(()=>{
        if (ref.current && !initialHeight) {
            const { offsetHeight: offsetHeight  } = ref.current;
            setInitialHeight(offsetHeight);
            switch(stick){
                case 'left':
                    setMenuPosition({
                        left: 0,
                        top: offsetHeight
                    });
                    break;
                case 'right':
                    setMenuPosition({
                        right: 0,
                        top: offsetHeight
                    });
            }
        }
    }, [
        ref.current
    ]);
    const elements = ($parcel$interopDefault($bdtG2$react)).Children.map(children, (child)=>{
        const type = child && child.type && child.type.displayName;
        if (type === 'DropDownTrigger') // getting rid of DropDownTrigger and render just what was inside
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).cloneElement(child.props.children));
        if (type === 'DropDownMenu') return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).cloneElement(child, {
            isVisible: isVisible,
            stick: stick,
            ...menuPosition
        }));
        return child;
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($d681bfadb6d87f0d$var$StyledDropDown, {
        ...boxProps,
        onMouseEnter: ()=>setIsVisible(true)
        ,
        onMouseLeave: ()=>setIsVisible(false)
        ,
        ref: ref
    }, elements));
};
var $d681bfadb6d87f0d$export$2e2bcd8739ae039 = $d681bfadb6d87f0d$export$e7fbc454eee05098;










const $80efb411ce5c6c0e$export$ee621bb1988a9f78 = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039).attrs((props)=>({
        className: $04e8557fb15d1054$export$2e2bcd8739ae039([
            `DropDown-Stick-${props.stick || $d681bfadb6d87f0d$export$ff769470b11a8c7}`,
            'DropDownMenu'
        ], props.className)
    })
)`
  background: ${({ theme: theme  })=>theme.colors.white
};
  display: inline-block;
  position: absolute;
  z-index: 40;
  flex-direction: column;
  box-shadow: ${({ theme: theme  })=>theme.shadows.card
};
  ${({ isVisible: isVisible  })=>isVisible !== false ? '' : 'display: none;'
};

  &.${$04e8557fb15d1054$export$2e2bcd8739ae039('DropDown-Stick-left')} .${$04e8557fb15d1054$export$2e2bcd8739ae039('DropDownMenu')} {
    left: 100%;
  }
  &.${$04e8557fb15d1054$export$2e2bcd8739ae039('DropDown-Stick-right')} .${$04e8557fb15d1054$export$2e2bcd8739ae039('DropDownMenu')} {
    right: 100%;
  }
`;
$80efb411ce5c6c0e$export$ee621bb1988a9f78.displayName = 'DropDownMenu';
var $80efb411ce5c6c0e$export$2e2bcd8739ae039 = $80efb411ce5c6c0e$export$ee621bb1988a9f78;


const $afe9cf61aa2798db$var$variantsShared = (color)=>({
        color: color,
        [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('DropDownItemAction')}`]: {
            color: color
        },
        '&:hover': {
            borderColor: color
        },
        [`& .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg`]: {
            fill: color
        }
    })
;
const $afe9cf61aa2798db$var$colorVariants = $bdtG2$styledsystem.variant({
    prop: 'colorVariant',
    variants: {
        primary: $afe9cf61aa2798db$var$variantsShared('primary100'),
        danger: $afe9cf61aa2798db$var$variantsShared('error'),
        success: $afe9cf61aa2798db$var$variantsShared('success'),
        info: $afe9cf61aa2798db$var$variantsShared('info'),
        secondary: {
            bg: 'accent'
        },
        light: $afe9cf61aa2798db$var$variantsShared('grey80'),
        default: {
        }
    }
});
const $afe9cf61aa2798db$export$617cca870742ea6e = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
  position: relative;
  z-index: 10000;
  border: none;
  color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey80')};
  font-family: ${$b549c418f45c0feb$export$2e2bcd8739ae039('font')};
  border: solid transparent;
  border-width: 0 ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
  ${({ onClick: onClick  })=>onClick ? 'cursor: pointer;' : ''
};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;

  &:hover {
    border-color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
    background: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey20')};
  }

  & .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} {
    padding-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'default')};
    fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey40')};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${$80efb411ce5c6c0e$export$2e2bcd8739ae039} {
    position: absolute;
    top: 0;
    display: none;
  }

  &:hover > ${$80efb411ce5c6c0e$export$2e2bcd8739ae039} {
    display: flex;
  }

  & a {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey80')};
    text-decoration: none;
  }
  padding: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')} ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};

  ${$bdtG2$styledsystem.space};
  ${$afe9cf61aa2798db$var$colorVariants};
`;
var $afe9cf61aa2798db$export$2e2bcd8739ae039 = $afe9cf61aa2798db$export$617cca870742ea6e;





const $fce07b17d4617399$export$9de7ef7fa9595a34 = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039).attrs((props)=>({
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('DropDownItemAction', props.className)
    })
)`
  ${({ onClick: onClick  })=>onClick ? 'cursor: pointer;' : ''
};
`;
$fce07b17d4617399$export$9de7ef7fa9595a34.defaultProps = {
    width: 1,
    px: 'xxl',
    py: 'lg'
};
var $fce07b17d4617399$export$2e2bcd8739ae039 = $fce07b17d4617399$export$9de7ef7fa9595a34;




const $3c09d3d12d22062f$export$718672ebf124f5c = ($parcel$interopDefault($bdtG2$styledcomponents)).span`
  display: inline-block;
`;
$3c09d3d12d22062f$export$718672ebf124f5c.displayName = 'DropDownTrigger';
var $3c09d3d12d22062f$export$2e2bcd8739ae039 = $3c09d3d12d22062f$export$718672ebf124f5c;











const $65b8add97f277d36$var$DEFAULT_WIDTH = 540;
const $65b8add97f277d36$var$VARIANT_BORDER_WIDTH = 8;
const $65b8add97f277d36$var$variantStyle = (color, props)=>{
    const newPadding = $bdtG2$polished.getValueAndUnit($b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')(props))[0] - $65b8add97f277d36$var$VARIANT_BORDER_WIDTH;
    return {
        borderLeftWidth: $65b8add97f277d36$var$VARIANT_BORDER_WIDTH,
        borderLeftStyle: 'solid',
        borderLeftColor: color,
        paddingLeft: newPadding
    };
};
const $65b8add97f277d36$var$variants = (props)=>$bdtG2$styledsystem.variant({
        prop: 'variant',
        variants: {
            primary: $65b8add97f277d36$var$variantStyle('primary100', props),
            danger: $65b8add97f277d36$var$variantStyle('error', props),
            success: $65b8add97f277d36$var$variantStyle('success', props),
            info: $65b8add97f277d36$var$variantStyle('info', props),
            secondary: $65b8add97f277d36$var$variantStyle('accent', props),
            light: $65b8add97f277d36$var$variantStyle('grey60', props),
            default: {
            }
        }
    })
;
const $65b8add97f277d36$export$5b3e7d7c0589918f = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  position: relative;
  & > .close-button {
    position: absolute;
    top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
    right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
  }
  & > .modal-label {
    margin-bottom: 0;
    margin-top: -${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
    padding-top: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
  }
  ${(props)=>$65b8add97f277d36$var$variants(props)
};
`;
$65b8add97f277d36$export$5b3e7d7c0589918f.defaultProps = {
    pl: 'xxl',
    pr: 'xl',
    pt: 'x3',
    pb: 'xxl',
    bg: 'white',
    width: [
        1,
        $65b8add97f277d36$var$DEFAULT_WIDTH
    ]
};


/**
 * Modal which can be rendered inline instead of a "modal"
 *
 * @memberof Modal
 * @component
 * @hideconstructor
 * @private
 * @section design-system
 */ const $41cb3084cf95c3e2$export$215f7f0f16811f37 = (props)=>{
    const { title: title , subTitle: subTitle , variant: variant , onClose: onClose , children: children , buttons: buttons , label: label , icon: icon , ...boxProps } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($65b8add97f277d36$export$5b3e7d7c0589918f, {
        variant: variant,
        ...boxProps
    }, label && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($81442ec7a17ae595$export$b04be29aa201d4f5, {
        size: "lg",
        variant: variant,
        className: "modal-label"
    }, icon && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: icon
    }), label), title && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9aacc82a46d56c05$export$88ef9fdaf11f7a1f, null, title), onClose && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0dd800caa134a887$export$353f5b6fc5456de1, {
        className: "close-button",
        size: "icon",
        variant: "text",
        onClick: onClose,
        rounded: true
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "CloseOutline"
    })), subTitle && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, null, subTitle), children, buttons && buttons.length && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        flex: true,
        flexDirection: "row",
        justifyContent: "flex-end"
    }, buttons.map((buttonProps, key)=>// eslint-disable-next-line react/no-array-index-key
        /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0dd800caa134a887$export$353f5b6fc5456de1, {
            key: key,
            mr: "md",
            mt: "sm",
            ...buttonProps
        })
    ))));
};













const $83fd2b31c07e08ec$var$Wrapper = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > ${$65b8add97f277d36$export$5b3e7d7c0589918f} {
    z-index: 1001;
  }
`;
const $83fd2b31c07e08ec$export$858bfd02c3f2fba5 = (props)=>{
    const { onOverlayClick: onOverlayClick , ...otherProps } = props;
    const handleOverlayClick = onOverlayClick || (()=>true
    );
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($83fd2b31c07e08ec$var$Wrapper, {
        flex: true,
        justifyContent: "center",
        alignItems: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($595689d9856c754a$export$2e2bcd8739ae039, {
        onClick: handleOverlayClick
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($41cb3084cf95c3e2$export$215f7f0f16811f37, otherProps)));
};


const $2864a0d049e5f5b2$var$ModalPortal = $68ffcf41bedb3d5d$export$2e2bcd8739ae039.createPortalForKey('MODAL', $83fd2b31c07e08ec$export$858bfd02c3f2fba5);
/**
 * @load ./modal.doc.md
 * @component
 * @subcategory Molecules
 * @section design-system
 * @hideconstructor
 * @new In version 3.3
 */ const $2864a0d049e5f5b2$export$2b77a92f1a5ad772 = (props)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2864a0d049e5f5b2$var$ModalPortal, props)
;











const $1a9d16bf2646267f$var$PaginationLink = ($parcel$interopDefault($bdtG2$styledcomponents))($0dd800caa134a887$export$353f5b6fc5456de1).attrs((props)=>({
        size: 'icon',
        variant: props.variant ? props.variant : 'text'
    })
)`
  min-width: 28px;
  height: 28px;
  line-height: 12px;
  padding: 3px 6px;
  text-align: center;
`;
$1a9d16bf2646267f$var$PaginationLink.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('PaginationLink')
};
const $1a9d16bf2646267f$var$PaginationWrapper = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  display: inline-block;
  padding: 2px;
  border: 1px solid ${({ theme: theme  })=>theme.colors.grey20
};
  & > :first-child {
    width: 56px;
    border-right: 1px solid ${({ theme: theme  })=>theme.colors.grey20
};
  }
  & > :nth-child(2) {
    padding-left: 16px;
  }
  & > :last-child {
    width: 56px;
    border-left: 1px solid ${({ theme: theme  })=>theme.colors.grey20
};
  }
  & > :nth-last-child(2) {
    padding-right: 16px;
  }
`;
/**
 * @classdesc
 *
 * <img src="components/pagination.png" />
 *
 * Pagination component
 *
 * ### Usage
 *
 * ```javascript
 * import { Pagination, PaginationProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see PaginationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-pagination--default Storybook}
 * @example
 * const location = { search: ''}
 * return (
 *   <Text py="xl" textAlign="center">
 *     <Pagination
 *      total={100}
 *      page={4}
 *      perPage={10}
 *      location={location}
 *      onChange={(item) => alert(`clicked ${item}`)}
 *   />
 *   </Text>
 * )
 * @section design-system
 */ const $1a9d16bf2646267f$export$68f5e1453c188a82 = (props)=>{
    const { total: total , page: page , perPage: perPage , onChange: onChange , ...rest } = props;
    const currentPage = page || 1;
    const paginate = ($parcel$interopDefault($bdtG2$jwpaginate))(total, currentPage, perPage);
    const isFirstPage = currentPage === paginate.startPage;
    const isLastPage = currentPage === paginate.endPage;
    const prevPage = isFirstPage ? currentPage : currentPage - 1;
    const nextPage = isLastPage ? currentPage : currentPage + 1;
    if (paginate.totalPages === 1 || total === 0) return null;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1a9d16bf2646267f$var$PaginationWrapper, {
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('Pagination'),
        ...rest
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1a9d16bf2646267f$var$PaginationLink, {
        "data-testid": "previous",
        disabled: isFirstPage,
        onClick: ()=>!isFirstPage ? onChange(prevPage) : undefined
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "ChevronLeft"
    })), paginate.pages.map((p)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1a9d16bf2646267f$var$PaginationLink, {
            key: p,
            onClick: ()=>onChange(p)
            ,
            variant: p === currentPage ? 'primary' : 'text',
            className: $04e8557fb15d1054$export$2e2bcd8739ae039('PaginationLink', p === currentPage ? 'current' : ''),
            "data-testid": `page-${p}`
        }, p)
    ), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1a9d16bf2646267f$var$PaginationLink, {
        "data-testid": "next",
        onClick: ()=>!isLastPage ? onChange(nextPage) : undefined
        ,
        disabled: isLastPage
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "ChevronRight"
    }))));
};
var $1a9d16bf2646267f$export$2e2bcd8739ae039 = $1a9d16bf2646267f$export$68f5e1453c188a82;






const $889ea01d4cc2d306$export$d05a7d25ec5abf06 = ($parcel$interopDefault($bdtG2$styledcomponents)).section`
  padding: ${({ theme: theme  })=>theme.space.xxl
} ${({ theme: theme  })=>theme.space.lg
};
  text-align: center;
  flex-shrink: 0;
  ${$bdtG2$styledsystem.space};
`;
var $889ea01d4cc2d306$export$2e2bcd8739ae039 = $889ea01d4cc2d306$export$d05a7d25ec5abf06;



const $0bc236aac1562801$export$2fd066e569ad7c66 = '500px';


const $3c4efdbd0175199f$var$variants = $bdtG2$styledsystem.variant({
    variants: {
        filter: {
            bg: 'filterBg',
            width: '400px',
            color: 'white',
            className: $04e8557fb15d1054$export$2e2bcd8739ae039([
                'Drawer',
                'Drawer_Filter'
            ])
        }
    }
});
/**
 * @classdesc
 *
 * <img src="components/drawer.png" />
 *
 * Drawer component renders a huge side area where {@link BaseActionComponent} renders
 * all actions where {@link Action.showInDrawer} is set to true.
 *
 * You probably don't want to use it directly in your actions, but if you decide to set
 * `showInDrawer` to true you will probably want to use `DrawerContent` or `DrawerFooter`
 * components.
 *
 * All these components: Drawer, DrawerContent and Drawer Footer extends {@link SpaceProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Drawer, DrawerProps, DrawerContent, DrawerFooter } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see DrawerProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-drawer--default Storybook}
 * @example
 * return (
 * <Box height="500px">
 *   <Drawer>
 *     <DrawerContent>
 *       <Header.H3>
 *         <Button size="icon" rounded mr="lg">
 *           <Icon icon="ChevronRight" />
 *         </Button>
 *         Edit
 *       </Header.H3>
 *       <Box my="x3" p={0}>
 *         <Button size="sm">
 *           <Icon icon="Information" />
 *           Info
 *         </Button>
 *         <Button size="sm" ml="lg">
 *           <Icon icon="Delete" />
 *           Delete
 *         </Button>
 *       </Box>
 *
 *     </DrawerContent>
 *     <DrawerFooter>
 *       <Button variant="primary">
 *         Save
 *       </Button>
 *     </DrawerFooter>
 *   </Drawer>
 * </Box>
 * )
 *
 * @section design-system
 */ const $3c4efdbd0175199f$export$4071300121a182f5 = ($parcel$interopDefault($bdtG2$styledcomponents)).section`
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ isHidden: isHidden , width: width  })=>{
    return isHidden ? `-${width === null || width === void 0 ? void 0 : width.toString()}` : '0px;';
}};
  &.hidden {
    right: ${({ width: width  })=>{
    return `-${width === null || width === void 0 ? void 0 : width.toString()}`;
}};
  }
  box-shadow: 0 3px 6px ${({ theme: theme  })=>theme.colors.grey40
};
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 500ms;
  background: ${({ theme: theme  })=>theme.colors.white
};
  box-sizing: border-box;
  & > ${$889ea01d4cc2d306$export$2e2bcd8739ae039} {
    border-top: 1px solid ${({ theme: theme  })=>theme.colors.primary20
};
    ${({ variant: variant , theme: theme  })=>variant === 'filter' ? `border-color: ${theme.colors.filterInputBorder}` : ''
};    
  }
  max-width: 100%;
  
  ${$bdtG2$styledsystem.space};
  ${$bdtG2$styledsystem.color};
  ${$bdtG2$styledsystem.layout};
  ${$3c4efdbd0175199f$var$variants};
`;
$3c4efdbd0175199f$export$4071300121a182f5.defaultProps = {
    width: $0bc236aac1562801$export$2fd066e569ad7c66,
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Drawer')
};
var $3c4efdbd0175199f$export$2e2bcd8739ae039 = $3c4efdbd0175199f$export$4071300121a182f5;




const $974ac57c7517d250$export$57ca055474bc0056 = ($parcel$interopDefault($bdtG2$styledcomponents)).section`
  flex-grow: 1;
  overflow: auto;
  padding: ${({ theme: theme  })=>theme.space.x3
} ${({ theme: theme  })=>theme.space.xxl
} ${({ theme: theme  })=>theme.space.xl
};
  box-sizing: border-box;
  ${$bdtG2$styledsystem.space};
`;
var $974ac57c7517d250$export$2e2bcd8739ae039 = $974ac57c7517d250$export$57ca055474bc0056;











const $8382c5c640d17fff$var$height = '46px';
const $8382c5c640d17fff$var$LoggedUserInfo = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  color: ${({ theme: theme  })=>theme.colors.grey60
};
  height: ${$8382c5c640d17fff$var$height};

  & img {
    border-radius: 9999px;
    margin-right: 0 8px;
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 9999px;
  }
`;
/**
 * @classdesc
 *
 * <img src="components/logged-user.png" />
 *
 * Logged in user state in the header
 *
 *
 * ### Usage
 *
 * ```javascript
 * import { LoggedUser, LoggedUserProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-loggeduser--default Storybook}
 * @see LoggedUserProps
 * @section design-system
 * @deprecated In favour of {@link CurrentUserNav} component
 */ const $8382c5c640d17fff$export$2619d221e04d3478 = (props)=>{
    const { email: email , title: title , avatarUrl: avatarUrl , children: children  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($d681bfadb6d87f0d$export$e7fbc454eee05098, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3c09d3d12d22062f$export$718672ebf124f5c, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($8382c5c640d17fff$var$LoggedUserInfo, {
        pr: "xl"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        mr: "default"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, {
        fontSize: "default",
        lineHeight: title ? 'lg' : 'xl',
        fontWeight: "normal"
    }, email), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, {
        fontSize: "sm",
        color: "grey40",
        lineHeight: "sm"
    }, title)), avatarUrl ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("img", {
        src: avatarUrl,
        alt: "avatar"
    }) : null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "OverflowMenuVertical",
        size: 16,
        my: "default",
        color: "grey60"
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($80efb411ce5c6c0e$export$ee621bb1988a9f78, {
        top: $8382c5c640d17fff$var$height
    }, children)));
};
var $8382c5c640d17fff$export$2e2bcd8739ae039 = $8382c5c640d17fff$export$2619d221e04d3478;









const $5a9c4e1f267f4e70$var$NavGroupTitle = ($parcel$interopDefault($bdtG2$styledcomponents))($856c8c0ad8a28036$export$5f1af8db9871e1d6)`
  padding: 11px 20px;
  margin: 0;
  color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey100')};
  border-radius: 9999px;
  display: flex;
  cursor: pointer;

  & > ${$856c8c0ad8a28036$export$5f1af8db9871e1d6} {
    display: block;
    flex-grow: 1;
    line-height: ${$b549c418f45c0feb$export$2e2bcd8739ae039('lineHeights', 'default')};
    margin-bottom: 0;
  }

  & + ${$2c52b13a4df281b0$export$e71c4d32a2263218} {
    padding-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl', '12px')};
  }

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
    vertical-align: middle;
    padding-bottom: 2px;
    flex-shrink: 0;
  }

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')}:first-child {
    padding-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
  }

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')}:last-child {
    padding-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'sm')};
  }
`;
$5a9c4e1f267f4e70$var$NavGroupTitle.defaultProps = {
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('NavGroupTitle')
};
/**
 * @classdesc
 *
 * > This component is deprecated in favour of {@link NavigationElement} and
 * {@link Navigation} components
 *
 * <img src="components/navgroup.png" />
 *
 * NavGroup is used in a navigation sidebar to group similar elements
 *
 * ### Usage
 *
 * ```javascript
 * import { NavGroup, NavGroupProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see NavGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-navgroup--default Storybook}
 * @example
 * return (
 *   <Box py="xl">
 *     <NavGroup title="Some group title" icon="Add">
 *       <Text>Some group element</Text>
 *     </NavGroup>
 *   </Box>
 * )
 * @section design-system
 * @deprecated in favour of {@link Navigation} and {@link NavigationElement} components
 */ const $5a9c4e1f267f4e70$export$869a8b3e2b8446b1 = (props)=>{
    const { title: title , icon: icon , children: children  } = props;
    const [isItOpen, toggleOpen] = $bdtG2$react.useState(true);
    const chevron = isItOpen ? 'ChevronUp' : 'ChevronDown';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('NavGroup')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($5a9c4e1f267f4e70$var$NavGroupTitle, {
        onClick: ()=>toggleOpen(!isItOpen)
        ,
        bg: isItOpen ? 'grey20' : 'transparent'
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: icon || 'Settings'
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$5f1af8db9871e1d6, null, title), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: chevron
    })), isItOpen ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        pb: "xl",
        pt: "sm"
    }, children) : ''));
};
var $5a9c4e1f267f4e70$export$2e2bcd8739ae039 = $5a9c4e1f267f4e70$export$869a8b3e2b8446b1;









const $83e6c5cd3575ffa9$var$Circle = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  text-align: center;
`;
$83e6c5cd3575ffa9$var$Circle.defaultProps = {
    py: 'default',
    px: 'default',
    minWidth: '34px',
    height: '34px'
};
const $83e6c5cd3575ffa9$var$StyledStep = ($parcel$interopDefault($bdtG2$styledcomponents)).div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: row;

  & > ${$2c52b13a4df281b0$export$2e2bcd8739ae039} {
    ${({ disabled: disabled  })=>!disabled ? 'cursor: pointer' : ''
};
    border-bottom: 2px solid ${({ active: active , theme: theme  })=>active ? theme.colors.primary100 : 'transparent'
};
  }
  
  ${$bdtG2$styledsystem.space};
`;
/**
 * @classdesc
 *
 * <img src="components/step.png" />
 *
 * Step represents one of the tab in placed inside {@link Stepper} component.
 * You can use it alone or with before-mentioned {@link Stepper}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Step, StepProps } from '@adminjs/design-system'
 * ```
 *
 *
 * @hideconstructor
 * @see Stepper
 * @see StepProps
 * @see OnStepClickHandler
 * @subcategory Molecules
 * @component
 * @example <caption>Regular step</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1">Normal Step</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" active>I am active</Step>
 *  </Box>
 * )
 *
 * @example <caption>Active steps</caption>
 * return (
 *   <Box p="default">
 *     <Step number="1" completed>This was done !!!</Step>
 *  </Box>
 * )
 *
 * @example <caption>Clickable step</caption>
 * const onClick = () => alert('Why did you click me?')
 *
 * return (
 *   <Box p="default">
 *     <Step number="1" onClick={onClick}>Click me if you dare</Step>
 *  </Box>
 * )
 * @section design-system
 */ const $83e6c5cd3575ffa9$export$fd55ce593607084a = (props)=>{
    const { number: number , completed: completed , children: children , active: active , disabled: disabled , onClick: onClick , className: className  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($83e6c5cd3575ffa9$var$StyledStep, {
        active: active,
        disabled: disabled || !onClick,
        className: $04e8557fb15d1054$export$2e2bcd8739ae039('Step', className)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$2e2bcd8739ae039, {
        flexShrink: 1,
        flexGrow: 0,
        flex: true,
        flexDirection: "row",
        pt: "lg",
        pb: "default",
        onClick: ()=>!disabled && onClick && onClick(number)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($83e6c5cd3575ffa9$var$Circle, {
        bg: completed ? 'grey40' : 'transparent',
        borderColor: active ? 'primary100' : 'grey40',
        color: active ? 'primary100' : 'grey40'
    }, completed ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$2e2bcd8739ae039, {
        icon: "Checkmark",
        color: "white"
    }) : number), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($856c8c0ad8a28036$export$2e2bcd8739ae039, {
        my: "sm",
        pl: "default",
        py: "sm",
        color: active || completed ? 'grey100' : 'grey40'
    }, children))));
};
var $83e6c5cd3575ffa9$export$2e2bcd8739ae039 = $83e6c5cd3575ffa9$export$fd55ce593607084a;





/**
 * @classdesc
 *
 * <img src="components/stepper.png" />
 *
 * It provides wizard workflow where user can go through a couple of steps.
 * Stepper makes sense when you use it along with {@link Step} component.
 *
 * It receives all the same props as {@link Box} - {@link BoxProps}.
 *
 * ### Usage
 *
 * ```javascript
 * import { Stepper, StepperProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-stepper--clickable-steps Storybook}
 * @example <caption>Clickable steps</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          onClick={setCurrentStep}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)
 *
 * @example <caption>Steps with bottom navigation</caption>
 * const { useState } = React
 * const steps = [{
 *   number: 1, label: "Do this first",
 * }, {
 *   number: 2, label: "Don't forget this",
 * }, {
 *   number: 3, label: "And finally this",
 * }]
 * const ComponentWithStepper = () => {
 *   const [currentStep, setCurrentStep] = useState(1)
 *   return (
 *   <Box>
 *     <Stepper>
 *     {steps.map(step => (
 *        <Step
 *          active={currentStep === step.number}
 *          completed={currentStep > step.number}
 *          number={step.number}
 *        >
 *          {step.label}
 *        </Step>
 *     ))}
 *     </Stepper>
 *     <Box mt="xl">
 *       <Button
 *         disabled={currentStep === 1}
 *         mr="default"
 *         onClick={() => setCurrentStep(currentStep - 1)}
 *       >
 *         Previous Step
 *       </Button>
 *       <Button
 *         disabled={currentStep === 3}
 *         variant="primary"
 *         onClick={() => setCurrentStep(currentStep + 1)}
 *       >
 *         Next Step
 *       </Button>
 *     </Box>
 *   </Box>
 *   )
 * }
 *
 * return (<ComponentWithStepper />)
 *
 * @section design-system
 */ const $a7b936cd58933b62$export$ed8ca599049e8881 = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
`;
$a7b936cd58933b62$export$ed8ca599049e8881.defaultProps = {
    flex: true,
    flexDirection: [
        'column',
        'row'
    ],
    borderBottom: '1px solid',
    borderBottomColor: 'separator',
    className: $04e8557fb15d1054$export$2e2bcd8739ae039('Stepper')
};
var $a7b936cd58933b62$export$2e2bcd8739ae039 = $a7b936cd58933b62$export$ed8ca599049e8881;










const $5b70805515b75952$export$168f9b5c1f0fc89e = $04e8557fb15d1054$export$2e2bcd8739ae039('ButtonGroupItem');
const $5b70805515b75952$export$ecd3ebc49b4bda1e = (props)=>{
    const { size: size  } = props;
    const margin = size === 'sm' ? 'md' : 'lg';
    return $bdtG2$styledcomponents.css`
    & > .${$5b70805515b75952$export$168f9b5c1f0fc89e} {
      margin-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', margin)};
      &:last-child {
        margin-right: 0;
      }
    }
  `;
};
const $5b70805515b75952$export$f5030582add9ea02 = (props)=>{
    if (!props.onClick && !props.href) return $bdtG2$styledcomponents.css`
    &&& {
      cursor: default;
    }
    `;
    return '';
};
const $5b70805515b75952$export$939ea909fc0c90e4 = (props)=>{
    if (!props.hasLabel) return $bdtG2$styledcomponents.css`
      padding-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
      padding-right: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')};
      & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
        margin-right: 0;
      }
    `;
    return '';
};
const $5b70805515b75952$export$8cc7abe191140137 = ($parcel$interopDefault($bdtG2$styledcomponents))($0dd800caa134a887$export$353f5b6fc5456de1)`
  ${$5b70805515b75952$export$939ea909fc0c90e4};
  ${$5b70805515b75952$export$f5030582add9ea02};
`;
const $5b70805515b75952$export$ef27a3f9c215fb42 = ($parcel$interopDefault($bdtG2$styledcomponents))($fce07b17d4617399$export$9de7ef7fa9595a34)`
  ${$5b70805515b75952$export$939ea909fc0c90e4};
`;
const $5b70805515b75952$export$a240dc0ccf211 = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$2e2bcd8739ae039)`
  ${$5b70805515b75952$export$ecd3ebc49b4bda1e};
`;








const $563f38bbb5d09c33$export$1f3781d6022c0b29 = (props)=>{
    const { icon: icon , label: label , buttons: buttons , source: source , onClick: onClick , ...buttonProps } = props;
    const onClickHandler = onClick ? (event)=>onClick(event, source)
     : undefined;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($5b70805515b75952$export$8cc7abe191140137, {
        as: "a",
        hasLabel: !!label,
        onClick: onClickHandler,
        ...buttonProps
    }, icon ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$2e2bcd8739ae039, {
        icon: icon
    }) : '', label, buttons && buttons.length && label ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$2e2bcd8739ae039, {
        as: "span",
        mr: "-8px",
        ml: "md"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$2e2bcd8739ae039, {
        icon: "CaretDown"
    })) : ''));
};






const $2a907209aa809952$export$fa29fa1486c26130 = (props)=>{
    const { variant: variant , onClick: onClick , href: href , icon: icon , label: label , buttons: buttons , source: source , ...rest } = props;
    const onClickHandler = onClick ? (event)=>onClick(event, source)
     : undefined;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($afe9cf61aa2798db$export$617cca870742ea6e, {
        colorVariant: variant,
        p: 0
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($5b70805515b75952$export$ef27a3f9c215fb42, {
        onClick: onClickHandler,
        href: href,
        as: "a",
        hasLabel: !!label,
        ...rest
    }, buttons && buttons.length ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$2e2bcd8739ae039, {
        icon: "CaretLeft",
        ml: "-24px",
        mr: "0"
    }) : '', icon ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$2e2bcd8739ae039, {
        icon: icon
    }) : '', label), buttons && buttons.length ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($80efb411ce5c6c0e$export$ee621bb1988a9f78, null, buttons.map((button)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2a907209aa809952$export$fa29fa1486c26130, {
            ...button,
            key: button.label
        })
    )) : ''));
};


const $da09ca26be13f400$export$42bc48baddd1b8ac = (props)=>{
    const { buttons: buttons , className: className , ...buttonProps } = props;
    if (buttons && buttons.length) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($d681bfadb6d87f0d$export$e7fbc454eee05098, {
        stick: "right",
        className: className
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3c09d3d12d22062f$export$718672ebf124f5c, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($563f38bbb5d09c33$export$1f3781d6022c0b29, props)), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($80efb411ce5c6c0e$export$ee621bb1988a9f78, null, buttons.map((button)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2a907209aa809952$export$fa29fa1486c26130, {
            ...button,
            key: `${button.label}-${button.icon}`
        })
    ))));
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($563f38bbb5d09c33$export$1f3781d6022c0b29, {
        ...buttonProps,
        className: className
    }));
};


/**
 * @load ./button-group.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-button-group--default Storybook}
 * @component
 * @subcategory Organisms
 * @section design-system
 * @new in version 3.3
 */ const $35b952f96e8635a0$export$2e2bcd8739ae039 = (props)=>{
    const { buttons: buttons , size: size , rounded: rounded  } = props;
    if (!buttons || !buttons.length) return null;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($5b70805515b75952$export$a240dc0ccf211, props, buttons.map((button, i)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($da09ca26be13f400$export$42bc48baddd1b8ac, {
            key: `${button.label || ''}-${i}`,
            size: size,
            rounded: rounded,
            ...button,
            className: $5b70805515b75952$export$168f9b5c1f0fc89e
        })
    )));
};














const $bf1ffee75fd9a265$export$eca93736dd0956f = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  ul ul > li {
    padding-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xxl')};
    &:last-child {
      margin-bottom: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'lg')};
    }
  }
`;




const $9b843a140b2eab42$export$6073e36fcb0a124c = (props)=>{
    const { elements: elements , isOpen: isOpen  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("li", null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9bc5b2c2c7487c3a$export$111d1dbff469cc4e, props), (elements === null || elements === void 0 ? void 0 : elements.length) && isOpen ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ul", null, elements.map((element, id)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9b843a140b2eab42$export$6073e36fcb0a124c, {
            ...element,
            key: [
                id,
                element.href
            ].join('-')
        })
    )) : ''));
};



/**
 * @load ./navigation.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see NavigationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-navigation--default Storybook}
 * @new In version 3.3
 * @section design-system
 */ const $bb21f3a6e8a73e40$export$b8a61e5c71402559 = (props)=>{
    const { label: label , elements: elements  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bf1ffee75fd9a265$export$eca93736dd0956f, {
        px: "xl",
        py: "lg"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($81442ec7a17ae595$export$b04be29aa201d4f5, {
        pl: "lg",
        mb: "md",
        uppercase: true
    }, label), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("ul", null, elements.map((element, id)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($9b843a140b2eab42$export$6073e36fcb0a124c, {
            key: [
                id,
                element.href
            ].join('-'),
            ...element
        })
    ))));
};












const $1e5869a6702ca23a$var$StyledWrapper = ($parcel$interopDefault($bdtG2$styledcomponents))($856c8c0ad8a28036$export$5f1af8db9871e1d6)`
  font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'sm')};
  & > a {
    color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey60')};
    font-size: ${$b549c418f45c0feb$export$2e2bcd8739ae039('fontSizes', 'sm')};
    text-decoration: none;
    margin-left: ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xs')};
    &:hover {
      color: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'love')};
    }
  }

  & > .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} {
    padding: 0 ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'xs')};
  }
`;
$1e5869a6702ca23a$var$StyledWrapper.defaultProps = {
    color: 'grey60',
    textAlign: 'center'
};
const $1e5869a6702ca23a$export$2e2bcd8739ae039 = ()=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1e5869a6702ca23a$var$StyledWrapper, null, "With", /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "FavoriteFilled",
        color: "love"
    }), "by", /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("a", {
        href: "http://softwarebrothers.co",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "SoftwareBrothers"))
;







const $b538709895a9f3d8$export$2e2bcd8739ae039 = ($parcel$interopDefault($bdtG2$styledcomponents))($2c52b13a4df281b0$export$e71c4d32a2263218)`
  text-align: right;

  & .line-action {
    .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'grey80')};
    }
    &:hover .${$04e8557fb15d1054$export$2e2bcd8739ae039('Icon')} svg {
      fill: ${$b549c418f45c0feb$export$2e2bcd8739ae039('colors', 'primary100')};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${$b549c418f45c0feb$export$2e2bcd8739ae039('space', 'md')} 0;
  }
`;
$b538709895a9f3d8$export$2e2bcd8739ae039.defaultProps = {
    flex: true,
    flexDirection: 'row'
};


/**
 * @load ./current-user-nav.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see CurrentUserNavProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-current-user-nav--default Storybook}
 * @new In version 3.3
 * @section design-system
 */ const $924140cb52eb5cfc$export$2e2bcd8739ae039 = (props)=>{
    const { name: name , title: title , avatarUrl: avatarUrl , dropActions: dropActions , lineActions: lineActions  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($b538709895a9f3d8$export$2e2bcd8739ae039, null, lineActions && lineActions.length && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        flex: true,
        flexDirection: "row",
        alignItems: "center"
    }, lineActions.map((action)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($0dd800caa134a887$export$353f5b6fc5456de1, {
            size: "icon",
            variant: "text",
            title: action.label,
            key: action.label,
            href: action.href,
            as: "a",
            className: "line-action",
            onClick: action.onClick
        }, action.icon && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
            icon: action.icon
        }))
    )), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($d681bfadb6d87f0d$export$e7fbc454eee05098, {
        stick: "right",
        display: "flex"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3c09d3d12d22062f$export$718672ebf124f5c, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        flex: true,
        flexDirection: "row",
        px: "xl",
        alignItems: "center",
        height: "navbarHeight"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($1367b13171f7d9e7$export$2e2bcd8739ae039, null, name), title && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($f37dda8a8a754bde$export$2e2bcd8739ae039, null, title)), avatarUrl && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("img", {
        src: avatarUrl,
        alt: name
    }), dropActions && dropActions.length && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
        icon: "OverflowMenuVertical",
        size: 16,
        ml: "md"
    }))), dropActions && dropActions.length && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($80efb411ce5c6c0e$export$ee621bb1988a9f78, {
        minWidth: "100%"
    }, dropActions.map((action)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($afe9cf61aa2798db$export$617cca870742ea6e, {
            key: action.label,
            as: "a",
            onClick: action.onClick,
            href: action.href
        }, action.icon && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($67b4a25f1ebac759$export$f04a61298a47a40f, {
            icon: action.icon
        }), action.label)
    )))));
};









const $b5d26a67d9af8d77$export$f05794e648629f6c = $bdtG2$styledcomponents.createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;






const $8e8b73ff7f77f806$var$store = $bdtG2$redux.createStore(()=>({
    })
, {
});
const $8e8b73ff7f77f806$var$Component = (props)=>{
    const { frameContext: frameContext  } = props;
    $68ffcf41bedb3d5d$export$2e2bcd8739ae039.appendElement = (element)=>{
        frameContext.document.body.appendChild(element);
    }, $68ffcf41bedb3d5d$export$2e2bcd8739ae039.removeElement = (id)=>{
        const domElement = frameContext.document.getElementById(id);
        domElement === null || domElement === void 0 ? void 0 : domElement.remove();
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactredux.Provider, {
        store: $8e8b73ff7f77f806$var$store
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:400,700",
        type: "text/css"
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactrouterdom.BrowserRouter, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$styledcomponents.StyleSheetManager, {
        target: frameContext.document.head
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$styledcomponents.ThemeProvider, {
        theme: $f3ac262eb34c1ec1$exports
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($2c52b13a4df281b0$export$e71c4d32a2263218, {
        border: "default",
        p: "xxl"
    }, props.children))))));
};
var $8e8b73ff7f77f806$export$2e2bcd8739ae039 = $8e8b73ff7f77f806$var$Component;



const $89a0d4cfdd1da7e8$export$134d2a8555cb55f6 = (action)=>typeof action.component !== 'undefined' && action.component === false
;


let $b992f9c849e9d14a$var$globalAny = {
};
try {
    $b992f9c849e9d14a$var$globalAny = window;
} catch (error) {
    if (error.message !== 'window is not defined') throw error;
}
const $b992f9c849e9d14a$var$runDate = new Date();
class $b992f9c849e9d14a$export$6eede05f61026fb5 {
    constructor({ options: options  } = {
    }){
        let opts = $b992f9c849e9d14a$export$6eede05f61026fb5.getPaths(options);
        opts = opts || {
            rootPath: '/admin'
        };
        // when ViewHelpers are used on the frontend, paths are taken from global Redux State
        this.options = opts;
    }
    static getPaths(options) {
        var ref;
        return options || ((ref = $b992f9c849e9d14a$var$globalAny.REDUX_STATE) === null || ref === void 0 ? void 0 : ref.paths);
    }
    /**
   * To each related path adds rootPath passed by the user, as well as a query string
   * @private
   * @param  {Array<string>} [paths]      list of parts of the url
   * @return {string}       path
   * @return {query}        [search=''] query string which can be fetch
   *                                    from `location.search`
   */ urlBuilder(paths = [], search = '') {
        const separator = '/';
        const replace = new RegExp(`${separator}{1,}`, 'g');
        let { rootPath: rootPath  } = this.options;
        if (!rootPath.startsWith(separator)) rootPath = `${separator}${rootPath}`;
        const parts = [
            rootPath,
            ...paths
        ];
        return `${parts.join(separator).replace(replace, separator)}${search}`;
    }
    /**
   * Returns login URL
   * @return {string}
   */ loginUrl() {
        return this.options.loginPath;
    }
    /**
   * Returns logout URL
   * @return {string}
   */ logoutUrl() {
        return this.options.logoutPath;
    }
    /**
   * Returns URL for the dashboard
   * @return {string}
   */ dashboardUrl() {
        return this.options.rootPath;
    }
    /**
   * Returns URL for given page name
   * @param {string} pageName       page name which is a unique key specified in
   *                                {@link AdminJSOptions}
   * @return {string}
   */ pageUrl(pageName) {
        return this.urlBuilder([
            'pages',
            pageName
        ]);
    }
    /**
   * Returns url for a `edit` action in given Resource. Uses {@link recordActionUrl}
   *
   * @param {string} resourceId  id to the resource
   * @param {string} recordId    id to the record
   * @param {string} [search]        optional query string
   */ editUrl(resourceId, recordId, search) {
        return this.recordActionUrl({
            resourceId: resourceId,
            recordId: recordId,
            actionName: 'edit',
            search: search
        });
    }
    /**
   * Returns url for a `show` action in given Resource. Uses {@link recordActionUrl}
   *
   * @param {string} resourceId  id to the resource
   * @param {string} recordId    id to the record
   * @param {string} [search]        optional query string
   */ showUrl(resourceId, recordId, search) {
        return this.recordActionUrl({
            resourceId: resourceId,
            recordId: recordId,
            actionName: 'show',
            search: search
        });
    }
    /**
   * Returns url for a `delete` action in given Resource. Uses {@link recordActionUrl}
   *
   * @param {string} resourceId  id to the resource
   * @param {string} recordId    id to the record
   * @param {string} [search]        optional query string
   */ deleteUrl(resourceId, recordId, search) {
        return this.recordActionUrl({
            resourceId: resourceId,
            recordId: recordId,
            actionName: 'delete',
            search: search
        });
    }
    /**
   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
   *
   * @param {string} resourceId  id to the resource
   * @param {string} [search]        optional query string
   */ newUrl(resourceId, search) {
        return this.resourceActionUrl({
            resourceId: resourceId,
            actionName: 'new',
            search: search
        });
    }
    /**
   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
   *
   * @param {string} resourceId  id to the resource
   * @param {string} [search]        optional query string
   */ listUrl(resourceId, search) {
        return this.resourceActionUrl({
            resourceId: resourceId,
            actionName: 'list',
            search: search
        });
    }
    /**
   * Returns url for a `bulkDelete` action in given Resource. Uses {@link bulkActionUrl}
   *
   * @param {string} resourceId  id to the resource
   * @param {Array<string>} recordIds   separated by comma records
   * @param {string} [search]        optional query string
   */ bulkDeleteUrl(resourceId, recordIds, search) {
        return this.bulkActionUrl({
            resourceId: resourceId,
            recordIds: recordIds,
            actionName: 'bulkDelete',
            search: search
        });
    }
    /**
   * Returns resourceAction url
   *
   * @param   {ResourceActionParams}  options
   * @param   {string}  options.resourceId
   * @param   {string}  options.actionName
   * @param   {string}  [options.search]        optional query string
   *
   * @return  {string}
   */ resourceActionUrl({ resourceId: resourceId , actionName: actionName , search: search  }) {
        return this.urlBuilder([
            'resources',
            resourceId,
            'actions',
            actionName
        ], search);
    }
    resourceUrl({ resourceId: resourceId , search: search  }) {
        return this.urlBuilder([
            'resources',
            resourceId
        ], search);
    }
    /**
   * Returns recordAction url
   *
   * @param   {RecordActionParams}  options
   * @param   {string}  options.resourceId
   * @param   {string}  options.recordId
   * @param   {string}  options.actionName
   *
   * @return  {string}
   */ recordActionUrl({ resourceId: resourceId , recordId: recordId , actionName: actionName , search: search  }) {
        return this.urlBuilder([
            'resources',
            resourceId,
            'records',
            recordId,
            actionName
        ], search);
    }
    /**
   * Returns bulkAction url
   *
   * @param   {BulkActionParams}  options
   * @param   {string}  options.resourceId
   * @param   {Array<string>}  [options.recordIds]
   * @param   {string}  options.actionName
   *
   * @return  {string}
   */ bulkActionUrl({ resourceId: resourceId , recordIds: recordIds , actionName: actionName , search: search  }) {
        const url = this.urlBuilder([
            'resources',
            resourceId,
            'bulk',
            actionName, 
        ]);
        if (recordIds && recordIds.length) {
            const query = new URLSearchParams(search);
            query.set('recordIds', recordIds.join(','));
            return `${url}?${query.toString()}`;
        }
        return `${url}${search || ''}`;
    }
    /**
   * Returns absolute path to a given asset.
   * @private
   *
   * @param  {string} asset
   * @return {string}
   */ assetPath(asset) {
        if (this.options.assetsCDN) {
            const url = new URL(asset, this.options.assetsCDN).href;
            // adding timestamp to the href invalidates the CDN cache
            return `${url}?date=${$b992f9c849e9d14a$var$runDate.getTime()}`;
        }
        return this.urlBuilder([
            'frontend',
            'assets',
            asset
        ]);
    }
}
var $b992f9c849e9d14a$export$2e2bcd8739ae039 = $b992f9c849e9d14a$export$6eede05f61026fb5;




const $da3a876a2bbb0c44$var$h = new $b992f9c849e9d14a$export$6eede05f61026fb5();
const $da3a876a2bbb0c44$export$df0c85937310d589 = (action, params)=>{
    const actionName = action.name;
    if (!action.component && !action.hasHandler) return null;
    const hrefMap = {
        record: ()=>$da3a876a2bbb0c44$var$h.recordActionUrl({
                ...params,
                actionName: actionName
            })
        ,
        resource: ()=>$da3a876a2bbb0c44$var$h.resourceActionUrl({
                resourceId: params.resourceId,
                actionName: actionName
            })
        ,
        bulk: ()=>$da3a876a2bbb0c44$var$h.bulkActionUrl({
                ...params,
                actionName: actionName
            })
    };
    if (hrefMap[action.actionType]) return hrefMap[action.actionType]();
    throw new Error('"actionType" should be either record, resource or bulk');
};





let $9f4269f78c13d196$var$globalAny = {
};
try {
    $9f4269f78c13d196$var$globalAny = window;
} catch (error) {
    if (error.message !== 'window is not defined') throw error;
    else $9f4269f78c13d196$var$globalAny = {
        isOnServer: true
    };
}
/**
 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
 *
 * @typedef {object} AxiosRequestConfig
 * @alias AxiosRequestConfig
 * @memberof ApiClient
 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
 */ const $9f4269f78c13d196$var$checkResponse = (response)=>{
    if ($9f4269f78c13d196$var$globalAny.isOnServer) return;
    const loginUrl = [
        $9f4269f78c13d196$var$globalAny.location.origin,
        $9f4269f78c13d196$var$globalAny.REDUX_STATE.paths.loginPath
    ].join('');
    // if response has redirect to loginUrl
    if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
        // eslint-disable-next-line no-undef
        alert('Your session expired. You will be redirected to login screen');
        $9f4269f78c13d196$var$globalAny.location.assign(loginUrl);
    }
};
/**
 * Client which access the admin API.
 * Use it to fetch data from auto generated AdminJS API.
 *
 * In the backend it uses [axios](https://github.com/axios/axios) client
 * library.
 *
 * Usage:
 * ```javascript
 * import { ApiClient } from 'adminjs'
 *
 * const api = new ApiClient()
 * // fetching all records
 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
 * ```
 * @see https://github.com/axios/axios
 * @hideconstructor
 */ class $9f4269f78c13d196$export$2e2bcd8739ae039 {
    constructor(){
        this.baseURL = $9f4269f78c13d196$export$2e2bcd8739ae039.getBaseUrl();
        this.client = ($parcel$interopDefault($bdtG2$axios)).create({
            baseURL: this.baseURL
        });
    }
    static getBaseUrl() {
        var ref;
        if ($9f4269f78c13d196$var$globalAny.isOnServer) return '';
        return [
            $9f4269f78c13d196$var$globalAny.location.origin,
            (ref = $9f4269f78c13d196$var$globalAny.REDUX_STATE) === null || ref === void 0 ? void 0 : ref.paths.rootPath
        ].join('');
    }
    /**
   * Search by query string for records in a given resource.
   *
   * @param   {Object}  options
   * @param   {String}  options.resourceId  id of a {@link ResourceJSON}
   * @param   {String}  options.query       query string
   *
   * @return  {Promise<SearchResponse>}
   */ async searchRecords({ resourceId: resourceId , query: query  }) {
        if ($9f4269f78c13d196$var$globalAny.isOnServer) return [];
        const actionName = 'search';
        const response = await this.resourceAction({
            resourceId: resourceId,
            actionName: actionName,
            query: query
        });
        $9f4269f78c13d196$var$checkResponse(response);
        return response.data.records;
    }
    /**
   * Invokes given resource {@link Action} on the backend.
   *
   * @param   {ResourceActionAPIParams}     options
   * @return  {Promise<ActionResponse>}     response from an {@link Action}
   */ async resourceAction(options) {
        const { resourceId: resourceId , actionName: actionName , data: data , query: query , ...axiosParams } = options;
        let url = `/api/resources/${resourceId}/actions/${actionName}`;
        if (query) {
            const q = encodeURIComponent(query);
            url = [
                url,
                q
            ].join('/');
        }
        const response = await this.client.request({
            url: url,
            method: data ? 'POST' : 'GET',
            ...axiosParams,
            data: data
        });
        $9f4269f78c13d196$var$checkResponse(response);
        return response;
    }
    /**
   * Invokes given record {@link Action} on the backend.
   *
   * @param   {RecordActionAPIParams} options
   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
   */ async recordAction(options) {
        const { resourceId: resourceId , recordId: recordId , actionName: actionName , data: data , ...axiosParams } = options;
        const response = await this.client.request({
            url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
            method: data ? 'POST' : 'GET',
            ...axiosParams,
            data: data
        });
        $9f4269f78c13d196$var$checkResponse(response);
        return response;
    }
    /**
   * Invokes given bulk {@link Action} on the backend.
   *
   * @param   {BulkActionAPIParams} options
   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
   */ async bulkAction(options) {
        const { resourceId: resourceId , recordIds: recordIds , actionName: actionName , data: data , ...axiosParams } = options;
        const params = new URLSearchParams();
        params.set('recordIds', (recordIds || []).join(','));
        const response = await this.client.request({
            url: `/api/resources/${resourceId}/bulk/${actionName}`,
            method: data ? 'POST' : 'GET',
            ...axiosParams,
            data: data,
            params: params
        });
        $9f4269f78c13d196$var$checkResponse(response);
        return response;
    }
    /**
   * Invokes dashboard handler.
   *
   * @param   {AxiosRequestConfig}       options
   * @return  {Promise<AxiosResponse<any>>} response from the handler function defined in
   *                                     {@link AdminJSOptions#dashboard}
   */ async getDashboard(options = {
    }) {
        const response = await this.client.get('/api/dashboard', options);
        $9f4269f78c13d196$var$checkResponse(response);
        return response;
    }
    /**
   * Invokes handler function of given page and returns its response.
   *
   * @param   {GetPageAPIParams}                options
   * @return  {Promise<AxiosResponse<any>>}     response from the handler of given page
   *                                            defined in {@link AdminJSOptions#pages}
   */ async getPage(options) {
        const { pageName: pageName , ...axiosParams } = options;
        const response = await this.client.request({
            url: `/api/pages/${pageName}`,
            ...axiosParams
        });
        $9f4269f78c13d196$var$checkResponse(response);
        return response;
    }
}






const $e381d43c8c7da6a0$var$api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
function $e381d43c8c7da6a0$export$19b494612238d1a4(action, params, search) {
    let promise;
    const { recordId: recordId , recordIds: recordIds , resourceId: resourceId  } = params;
    switch(action.actionType){
        case 'record':
            if (!recordId) throw new Error('You have to specify "recordId" for record action');
            promise = $e381d43c8c7da6a0$var$api.recordAction({
                resourceId: resourceId,
                actionName: action.name,
                recordId: recordId,
                search: search
            });
            break;
        case 'resource':
            promise = $e381d43c8c7da6a0$var$api.resourceAction({
                resourceId: resourceId,
                actionName: action.name
            });
            break;
        case 'bulk':
            if (!recordIds) throw new Error('You have to specify "recordIds" for bulk action');
            promise = $e381d43c8c7da6a0$var$api.bulkAction({
                resourceId: resourceId,
                actionName: action.name,
                recordIds: recordIds,
                search: search
            });
            break;
        default:
            throw new Error('"actionType" should be either record, resource or bulk');
    }
    return promise;
}


const $e524972b97cfebee$export$79c175079d39204e = (options)=>{
    const { action: action , params: params , actionResponseHandler: actionResponseHandler , search: search  } = options;
    const callApi = ()=>{
        const promise = $e381d43c8c7da6a0$export$19b494612238d1a4(action, params, search);
        promise.then(actionResponseHandler).catch((error)=>{
            throw error;
        });
        return promise;
    };
    return callApi;
};


const $5b0218aad43938eb$export$7570aeda37ccc940 = (action)=>`action-${action.name}`
;





const $f43cdc62018668df$export$3c619d28756b9edd = (options)=>{
    const { action: action , params: params , actionResponseHandler: actionResponseHandler , push: push  } = options;
    const handleActionClick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        const href = $da3a876a2bbb0c44$export$df0c85937310d589(action, params);
        const callApi = $e524972b97cfebee$export$79c175079d39204e({
            params: params,
            action: action,
            actionResponseHandler: actionResponseHandler
        });
        if (action.guard && !confirm(action.guard)) return;
        if ($89a0d4cfdd1da7e8$export$134d2a8555cb55f6(action)) callApi();
        else if (href) push(href, {
            previousPage: window.location.href
        });
    };
    return handleActionClick;
};



const $785ed8814fd78c83$export$9ba6e8559704a538 = (params, action)=>'recordIds' in params && action.actionType === 'bulk'
;


const $8a0a35aa87468980$export$2b02b4f869fa1247 = (params, action)=>'recordIds' in params && action.actionType === 'resource'
;


const $f6b5659b583bc647$export$8b1b0c357d1b3673 = (params, action)=>'recordId' in params && action.actionType === 'record'
;


















const $e916d32fdd3ab544$export$afedc8ff5d95c999 = '__FORM_VALUE_NULL__';
const $e916d32fdd3ab544$export$1445124c7281fd64 = '__FORM_VALUE_EMPTY_OBJECT__';
const $e916d32fdd3ab544$export$d04d4b94677ee9e0 = '__FORM_VALUE_EMPTY_ARRAY__';
const $e916d32fdd3ab544$var$isObjectOrArray = (value)=>typeof value === 'object' && value.constructor !== File && !(value instanceof Date)
;
/**
 * Changes RecordJSON that it can be send as a FormData to the backend.
 *
 * FormData is required because we are sending files via the wire. But it has limitations.
 * Namely it can only transport files and strings. That is why we have to convert some
 * standard types like NULL to constants so they can be property converted back by the backend.
 * And thus properly handled.
 *
 * @private
 * @param   {RecordJSON}  record
 * @return  {FormData}
 */ function $e916d32fdd3ab544$export$2e2bcd8739ae039(params) {
    const formData = new FormData();
    // Assume that params are flatted
    Object.entries(params).forEach(([key, value])=>{
        // {@link updateRecord} does not change empty objects "{}" - so in order to prevent having
        // them changed to "[object Object]" we have to set them to empty strings.
        if (value === null) return formData.set(key, $e916d32fdd3ab544$export$afedc8ff5d95c999);
        // File objects has to go through because they are handled by FormData
        if ($e916d32fdd3ab544$var$isObjectOrArray(value)) {
            if (Array.isArray(value)) return formData.set(key, $e916d32fdd3ab544$export$d04d4b94677ee9e0);
            return formData.set(key, $e916d32fdd3ab544$export$1445124c7281fd64);
        }
        // Rest goes as a standard value
        return formData.set(key, value);
    });
    return formData;
}



const $da6d8052cce2288f$export$815f284f74610b81 = 'ADD_NOTICE';
const $da6d8052cce2288f$export$44f16c85cfa939fb = (data = {
    message: ''
})=>({
        type: $da6d8052cce2288f$export$815f284f74610b81,
        data: {
            message: data.message,
            id: Math.random().toString(36).substr(2, 9),
            type: data.type || 'success',
            progress: 0
        }
    })
;


const $1b49a8c109bb1473$export$50bc0f9f6aa608c2 = ()=>{
    const dispatch = $bdtG2$reactredux.useDispatch();
    return (notice)=>dispatch($da6d8052cce2288f$export$44f16c85cfa939fb(notice))
    ;
};
var $1b49a8c109bb1473$export$2e2bcd8739ae039 = $1b49a8c109bb1473$export$50bc0f9f6aa608c2;


/**
 * Handlers of all [Actions]{@link Action} of type `record` returns record.
 * Depending on a place and response we have to merge what was returned
 * to the actual state. It is done in following places:
 * - {@link useRecord} hook
 * - {@link RecordInList} component
 * - {@link RecordAction} component
 *
 * @private
 */ const $d0191689b851d0f7$var$mergeRecordResponse = (record, response)=>({
        // we start from the response because it can have different recordActions or bulkActions
        ...response.record || record,
        // records has to be reset every time because so that user wont
        // see old errors which are not relevant anymore
        errors: response.record.errors,
        populated: {
            ...record.populated,
            ...response.record.populated
        },
        params: {
            ...record.params,
            ...response.record.params
        }
    })
;
var $d0191689b851d0f7$export$2e2bcd8739ae039 = $d0191689b851d0f7$var$mergeRecordResponse;



const $d76a50c600f395c8$export$51cb4a1dbeddc712 = '.';



const $82a6928ab6564f35$export$4efc296a088840b7 = (propertyPath, options)=>{
    const delimiter = new RegExp(`\\${$d76a50c600f395c8$export$51cb4a1dbeddc712}`, 'g');
    const escapedDelimiter = `\\${$d76a50c600f395c8$export$51cb4a1dbeddc712}`;
    // but for `nested.1.property.0` it will produce `nested(\.|\.\d+\.)1(\.|\.\d+\.)property.0`
    // and this is intentional because user can give an one index in property path for with deeply
    // nested arrays
    const escapedDelimiterOrIndex = `(${escapedDelimiter}|${escapedDelimiter}\\d+${escapedDelimiter})`;
    const path = (options === null || options === void 0 ? void 0 : options.includeAllSiblings) ? propertyPath.replace(delimiter, escapedDelimiterOrIndex) : propertyPath.replace(delimiter, escapedDelimiter);
    return new RegExp(`^${path}($|${escapedDelimiter})`, '');
};


/**
 * @load ./select-params.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {string | Array<string>} properties
 * @param {GetOptions} [options]
 * @returns {FlattenParams}
 */ const $b522174554fac48e$export$7acbc80337cb301d = (params, properties, options)=>{
    const propertyArray = Array.isArray(properties) ? properties : [
        properties
    ];
    const selected = propertyArray.filter((propertyPath)=>!!propertyPath
    ).reduce((globalMemo, propertyPath)=>{
        const regex = $82a6928ab6564f35$export$4efc296a088840b7(propertyPath, options);
        const filtered = Object.keys(params)// filter all keys which starts with property path
        .filter((key)=>key.match(regex)
        ).reduce((memo, key)=>{
            memo[key] = params[key];
            return memo;
        }, {
        });
        return {
            ...globalMemo,
            ...filtered
        };
    }, {
    });
    return selected;
};



/**
 * @load ./filter-out-params.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {string | Array<string>} properties
 * @returns {FlattenParams}
 */ const $0f50111e7f883c34$export$835ede4c07119b4d = (params, properties)=>{
    const propertyArray = Array.isArray(properties) ? properties : [
        properties
    ];
    return propertyArray.filter((propertyPath)=>!!propertyPath
    ).reduce((globalFiltered, propertyPath)=>{
        const regex = $82a6928ab6564f35$export$4efc296a088840b7(propertyPath);
        return Object.keys(globalFiltered).filter((key)=>!key.match(regex)
        ).reduce((memo, key)=>{
            memo[key] = params[key];
            return memo;
        }, {
        });
    }, params);
};





/**
 * @load ./path-to-parts.doc.md
 * @param   {string}              propertyPath
 * @param   {PathToPartsOptions}  options
 * @returns  {PathParts}
 *
 * @memberof module:flat
 * @alias pathToParts
 */ const $f5e16f3a64075143$export$9c833adce23a4b1e = (propertyPath, options = {
})=>{
    let allParts = propertyPath.split('.');
    if (options.skipArrayIndexes) // eslint-disable-next-line no-restricted-globals
    allParts = allParts.filter((part)=>isNaN(+part)
    );
    return allParts.reduce((memo, part)=>{
        if (memo.length) return [
            ...memo,
            [
                memo[memo.length - 1],
                part
            ].join('.'), 
        ];
        return [
            part
        ];
    }, []);
};


const $0e8ebe73c25ce25a$var$isObject = (value)=>{
    // Node environment
    if (typeof File === 'undefined') return typeof value === 'object' && value !== null;
    // Window environment
    return typeof value === 'object' && !(value instanceof File) && value !== null;
};
/**
 * @load ./set.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {string} propertyPath
 * @param {any} [value]       if not give function will only try to remove old keys
 * @returns {FlattenParams}
 */ const $0e8ebe73c25ce25a$export$adaa4cf7ef1b65be = (params = {
}, propertyPath, value)=>{
    const regex = $82a6928ab6564f35$export$4efc296a088840b7(propertyPath);
    // remove all existing keys
    const paramsCopy = Object.keys(params).filter((key)=>!key.match(regex)
    ).reduce((memo, key)=>{
        memo[key] = params[key];
        return memo;
    }, {
    });
    if (typeof value !== 'undefined') {
        if ($0e8ebe73c25ce25a$var$isObject(value) && !(value instanceof Date)) {
            const flattened = $bdtG2$flat.flatten(value);
            if (Object.keys(flattened).length) Object.keys(flattened).forEach((key)=>{
                paramsCopy[`${propertyPath}${$d76a50c600f395c8$export$51cb4a1dbeddc712}${key}`] = flattened[key];
            });
            else if (Array.isArray(value)) paramsCopy[propertyPath] = [];
            else paramsCopy[propertyPath] = {
            };
        } else paramsCopy[propertyPath] = value;
        // when user gave { "nested.value": "something" } and had "nested" set to `null`, then
        // nested should be removed
        const parts = $f5e16f3a64075143$export$9c833adce23a4b1e(propertyPath).slice(0, -1);
        if (parts.length) return Object.keys(paramsCopy).filter((key)=>!parts.includes(key)
        ).reduce((memo, key)=>{
            memo[key] = paramsCopy[key];
            return memo;
        }, {
        });
    }
    return paramsCopy;
};






const $3b63f0224b3f230e$var$TEMP_HOLDING_KEY = 'TEMP_HOLDING_KEY';
/**
 * @load ./get.doc.md
 * @memberof module:flat
 * @param {FlattenParams}   params      flatten params from which property has to be taken
 * @param {string}          [propertyPath]  name of the property
 * @param {GetOptions}      options     options
 * @returns {any}                       when property key exists directly it returns what is inside,
 *                                      otherwise it tries to find any nested objects and returns
 *                                      them
 */ const $3b63f0224b3f230e$export$3988ae62b71be9a3 = (params = {
}, propertyPath, options)=>{
    if (!propertyPath) return $bdtG2$flat.unflatten(params);
    // when object has this key - simply return it
    // we cannot rely on typeof params[propertyPath !== 'undefined' because params can actually be
    // undefined and in such case if would pass and function would return [undefined]
    if (Object.keys(params).find((key)=>key === propertyPath
    )) return params[propertyPath];
    const regex = $82a6928ab6564f35$export$4efc296a088840b7(propertyPath, options);
    const selectedParams = $b522174554fac48e$export$7acbc80337cb301d(params, propertyPath, options);
    const nestedProperties = Object.keys(selectedParams).reduce((memo, key, index)=>{
        let newKey = key.replace(regex, `${$3b63f0224b3f230e$var$TEMP_HOLDING_KEY}${$d76a50c600f395c8$export$51cb4a1dbeddc712}`);
        // when user wants to take allSiblings we have to fix the indexes so nested items from
        // different siblings don't overlap
        //
        // Example for key `nested.1.el`:
        //  'nested.0.el.0.value': 'val0.0',
        //  'nested.0.el.1.value': 'val0.1',
        //  'nested.1.el.0.value': 'val1',
        //  'nested.1.el.1.value': 'val2',
        //
        // has to be changed to:
        //  'TEMP_HOLDING_KEY.0.value': 'val0.0',
        //  'TEMP_HOLDING_KEY.1.value': 'val0.1',
        //  'TEMP_HOLDING_KEY.2.value': 'val1',
        //  'TEMP_HOLDING_KEY.3.value': 'val2',
        if (options === null || options === void 0 ? void 0 : options.includeAllSiblings) newKey = newKey.replace(new RegExp(`${$3b63f0224b3f230e$var$TEMP_HOLDING_KEY}\\${$d76a50c600f395c8$export$51cb4a1dbeddc712}(\\d*)`), `${$3b63f0224b3f230e$var$TEMP_HOLDING_KEY}${$d76a50c600f395c8$export$51cb4a1dbeddc712}${index}`);
        memo[newKey] = selectedParams[key];
        return memo;
    }, {
    });
    if (Object.keys(nestedProperties).length) return $bdtG2$flat.unflatten(nestedProperties)[$3b63f0224b3f230e$var$TEMP_HOLDING_KEY];
    return undefined;
};




/**
 * Merges params together and returns flatten result
 *
 * @param {any} params
 * @param {Array<any>} ...mergeParams
 * @returns {FlattenParams}
 * @memberof module:flat
 */ const $c2cf80ce4ba69f17$export$4950aa0f605343fb = (params = {
}, ...mergeParams)=>{
    const flattenParams = $bdtG2$flat.flatten(params);
    // reverse because we merge from right
    return mergeParams.reverse().reduce((globalMemo, mergeParam)=>Object.keys(mergeParam).reduce((memo, key)=>$0e8ebe73c25ce25a$export$adaa4cf7ef1b65be(memo, key, mergeParam[key])
        , globalMemo)
    , flattenParams);
};








/**
 * @load ./remove-path.doc.md
 * @memberof module:flat
 * @param {FlattenParams} params
 * @param {...string} properties
 * @returns {FlattenParams}
 */ const $acf0f5f1015e797c$export$5c4e774b0e27d36b = (params, path)=>{
    // by default simply filter out elements from the object
    let filtered = $0f50111e7f883c34$export$835ede4c07119b4d(params, path);
    // reverse means that we iterate from the closes parent
    const parentPaths = $f5e16f3a64075143$export$9c833adce23a4b1e(path).reverse();
    // but if one of the parent is an array
    parentPaths.find((parentPath, parentIndex)=>{
        const parent = $3b63f0224b3f230e$export$3988ae62b71be9a3(params, parentPath);
        if (Array.isArray(parent)) {
            // previous element is stringified index like 'property.1'
            const previousPaths = parentPaths[parentIndex - 1].split($d76a50c600f395c8$export$51cb4a1dbeddc712);
            // so this is the index: 1
            const previousPathIndex = previousPaths[previousPaths.length - 1];
            parent.splice(+previousPathIndex, 1);
            filtered = $0e8ebe73c25ce25a$export$adaa4cf7ef1b65be(params, parentPath, parent);
            // this works just for the firstly found array item, because in case of removing the last one
            // it leaves `[]` as a value.
            return true;
        }
        return false;
    });
    return filtered;
};


const $c83b12262b3384be$export$40fa977508bcf282 = {
    flatten: /**
   * Raw `flatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
   * package.
   */ $bdtG2$flat.flatten,
    unflatten: /**
   * Raw `unflatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
   * package.
   */ $bdtG2$flat.unflatten,
    set: $0e8ebe73c25ce25a$export$adaa4cf7ef1b65be,
    get: $3b63f0224b3f230e$export$3988ae62b71be9a3,
    selectParams: $b522174554fac48e$export$7acbc80337cb301d,
    filterOutParams: $0f50111e7f883c34$export$835ede4c07119b4d,
    removePath: $acf0f5f1015e797c$export$5c4e774b0e27d36b,
    DELIMITER: $d76a50c600f395c8$export$51cb4a1dbeddc712,
    pathToParts: $f5e16f3a64075143$export$9c833adce23a4b1e,
    merge: $c2cf80ce4ba69f17$export$4950aa0f605343fb
};






const $12a010ebcaca30da$export$1c6e0bfdccdb09bc = (property, value, selectedRecord)=>(previousRecord)=>{
        let populatedModified = false;
        const populatedCopy = {
            ...previousRecord.populated
        };
        const paramsCopy = $c83b12262b3384be$export$40fa977508bcf282.set(previousRecord.params, property, value);
        if (property in populatedCopy) {
            delete populatedCopy[property];
            populatedModified = true;
        }
        if (selectedRecord) {
            populatedCopy[property] = selectedRecord;
            populatedModified = true;
        }
        return {
            ...previousRecord,
            params: paramsCopy,
            populated: populatedModified ? populatedCopy : previousRecord.populated
        };
    }
;
var $12a010ebcaca30da$export$2e2bcd8739ae039 = $12a010ebcaca30da$export$1c6e0bfdccdb09bc;


const $67a3cc0b34635ab3$export$2e2bcd8739ae039 = (propertyOrRecord, value)=>!!(typeof value === 'undefined' && !(typeof propertyOrRecord === 'string') && propertyOrRecord.params)
;



const $177797048784fb52$export$61b6a526e2f145be = (name)=>name.split('.').join('&#46;')
;
const $177797048784fb52$var$translate = (i18n, key, name, resourceId, options)=>{
    const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {
    };
    const formattedName = $177797048784fb52$export$61b6a526e2f145be(name);
    let keys = [
        `${key}.${formattedName}`
    ];
    if (resourceId) keys = [
        `resources.${resourceId}.${key}.${formattedName}`,
        ...keys
    ];
    if (i18n.exists(keys)) return i18n.t(keys, realOptions);
    var _defaultValue;
    return (_defaultValue = realOptions.defaultValue) !== null && _defaultValue !== void 0 ? _defaultValue : ($parcel$interopDefault($bdtG2$lodashstartCase))(name);
};
const $177797048784fb52$export$16e5ed149a4f9b50 = (i18n)=>{
    const translateAction = (actionName, resourceId, options)=>$177797048784fb52$var$translate(i18n, 'actions', actionName, resourceId, options)
    ;
    const translateButton = (buttonLabel, resourceId, options)=>$177797048784fb52$var$translate(i18n, 'buttons', buttonLabel, resourceId, options)
    ;
    const translateLabel = (label, resourceId, options)=>$177797048784fb52$var$translate(i18n, 'labels', label, resourceId, options)
    ;
    const translateProperty = (propertyName, resourceId, options)=>$177797048784fb52$var$translate(i18n, 'properties', propertyName, resourceId, options)
    ;
    const translateMessage = (messageName, resourceId, options)=>$177797048784fb52$var$translate(i18n, 'messages', messageName, resourceId, options)
    ;
    return {
        translateAction: translateAction,
        ta: translateAction,
        translateButton: translateButton,
        tb: translateButton,
        translateLabel: translateLabel,
        tl: translateLabel,
        translateProperty: translateProperty,
        tp: translateProperty,
        translateMessage: translateMessage,
        tm: translateMessage,
        t: i18n.t,
        translate: i18n.t
    };
};





const $e1192e4912f51733$export$2eb2128d6458539c = function(record, options = {
}) {
    if (options.includeParams && record) return {
        ...record,
        params: $c83b12262b3384be$export$40fa977508bcf282.selectParams(record.params || {
        }, options.includeParams)
    };
    return record;
};
const $e1192e4912f51733$export$ee285258fd818593 = (propertyName, options = {
})=>{
    const { includeParams: includeParams  } = options;
    if (includeParams) {
        const parts = $c83b12262b3384be$export$40fa977508bcf282.pathToParts(propertyName, {
            skipArrayIndexes: true
        });
        return parts.some((part)=>includeParams.includes(part)
        );
    }
    return true;
};



const $b36785fa5b135a99$var$api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
const $b36785fa5b135a99$export$787d13d99ebb931c = (initialRecord, resourceId, options)=>{
    // setting up state
    const [loading, setLoading] = $bdtG2$react.useState(false);
    const [isSynced, setIsSynced] = $bdtG2$react.useState(true);
    const [progress, setProgress] = $bdtG2$react.useState(0);
    const filteredRecord = initialRecord ? $e1192e4912f51733$export$2eb2128d6458539c(initialRecord, options) : null;
    var ref, ref1, ref2;
    const [record, setRecord] = $bdtG2$react.useState({
        ...filteredRecord,
        params: (ref = filteredRecord === null || filteredRecord === void 0 ? void 0 : filteredRecord.params) !== null && ref !== void 0 ? ref : {
        },
        errors: (ref1 = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) !== null && ref1 !== void 0 ? ref1 : {
        },
        populated: (ref2 = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) !== null && ref2 !== void 0 ? ref2 : {
        }
    });
    // it keeps the same format as useState function which can take either value or function
    const setFilteredRecord = $bdtG2$react.useCallback((value)=>{
        const newRecord = value instanceof Function ? value(record) : value;
        setRecord($e1192e4912f51733$export$2eb2128d6458539c(newRecord, options));
    }, [
        options,
        record
    ]);
    const onNotice = $1b49a8c109bb1473$export$2e2bcd8739ae039();
    const handleChange = $bdtG2$react.useCallback((propertyOrRecord, value, incomingRecord)=>{
        if ($67a3cc0b34635ab3$export$2e2bcd8739ae039(propertyOrRecord, value)) setFilteredRecord(propertyOrRecord);
        else if ($e1192e4912f51733$export$ee285258fd818593(propertyOrRecord, options)) setRecord($12a010ebcaca30da$export$2e2bcd8739ae039(propertyOrRecord, value, incomingRecord));
        else if (process.env.NODE_ENV === 'development') // eslint-disable-next-line no-console
        console.warn([
            `You are trying to set property: "${propertyOrRecord}" which`,
            'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`', 
        ].join('\n'));
        setIsSynced(false);
    }, [
        setRecord,
        options
    ]);
    const handleSubmit = $bdtG2$react.useCallback((customParams = {
    }, submitOptions)=>{
        setLoading(true);
        const mergedParams = $c83b12262b3384be$export$40fa977508bcf282.merge(record.params, customParams);
        const formData = $e916d32fdd3ab544$export$2e2bcd8739ae039(mergedParams);
        const params = {
            resourceId: resourceId,
            onUploadProgress: (e)=>setProgress(Math.round(e.loaded * 100 / e.total))
            ,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        const promise = record.id ? $b36785fa5b135a99$var$api.recordAction({
            ...params,
            actionName: 'edit',
            recordId: record.id
        }) : $b36785fa5b135a99$var$api.resourceAction({
            ...params,
            actionName: 'new'
        });
        promise.then((response)=>{
            if (response.data.notice) onNotice(response.data.notice);
            if ((submitOptions === null || submitOptions === void 0 ? void 0 : submitOptions.updateOnSave) !== false) setFilteredRecord((prev)=>$d0191689b851d0f7$export$2e2bcd8739ae039(prev, response.data)
            );
            setProgress(0);
            setLoading(false);
            setIsSynced(true);
        }).catch(()=>{
            onNotice({
                message: 'There was an error updating record, Check out console to see more information.',
                type: 'error'
            });
            setProgress(0);
            setLoading(false);
        });
        return promise;
    }, [
        record,
        resourceId,
        setLoading,
        setProgress,
        setRecord
    ]);
    return {
        record: record,
        handleChange: handleChange,
        submit: handleSubmit,
        loading: loading,
        progress: progress,
        setRecord: setFilteredRecord,
        isSynced: isSynced
    };
};
var $b36785fa5b135a99$export$2e2bcd8739ae039 = $b36785fa5b135a99$export$787d13d99ebb931c;














const $974f1534ed0256d1$export$a95adddff314131f = 'refresh';
const $974f1534ed0256d1$export$fe76bf7b42914485 = 'ignore_params';
const $974f1534ed0256d1$export$5873a8025a5d100f = (url, search)=>{
    const searchParamsIdx = url.lastIndexOf('?');
    const urlSearchParams = searchParamsIdx !== -1 ? url.substring(searchParamsIdx + 1) : null;
    var ref, ref1;
    const oldParams = new URLSearchParams((ref1 = (ref = search !== null && search !== void 0 ? search : urlSearchParams) !== null && ref !== void 0 ? ref : window.location.search) !== null && ref1 !== void 0 ? ref1 : '');
    const shouldIgnoreOldParams = new URLSearchParams(urlSearchParams || '').get($974f1534ed0256d1$export$fe76bf7b42914485) === 'true';
    const newParams = shouldIgnoreOldParams ? new URLSearchParams('') : new URLSearchParams(oldParams.toString());
    newParams.set($974f1534ed0256d1$export$a95adddff314131f, 'true');
    const newUrl = searchParamsIdx !== -1 ? url.substring(0, searchParamsIdx) : url;
    return `${newUrl}?${newParams.toString()}`;
};
const $974f1534ed0256d1$export$3b1f529bc94220e1 = (search)=>{
    const params = new URLSearchParams(search);
    return !!params.get($974f1534ed0256d1$export$a95adddff314131f);
};
const $974f1534ed0256d1$export$a9f0f911fa12ec10 = (search)=>{
    const params = new URLSearchParams(search);
    if (params.get($974f1534ed0256d1$export$a95adddff314131f)) params.delete($974f1534ed0256d1$export$a95adddff314131f);
    return params.toString();
};



const $30cf2d580f3a6628$export$5002a7fa61628c70 = (onActionCall)=>{
    const location = $bdtG2$reactrouter.useLocation();
    const history = $bdtG2$reactrouter.useHistory();
    const addNotice = $1b49a8c109bb1473$export$50bc0f9f6aa608c2();
    return (response)=>{
        const { data: data  } = response;
        if (data.notice) addNotice(data.notice);
        if (data.redirectUrl && location.pathname !== data.redirectUrl) {
            const appended = $974f1534ed0256d1$export$5873a8025a5d100f(data.redirectUrl);
            history.push(appended);
        }
        if (onActionCall) onActionCall(data);
    };
};


function $428dd78f0b908b4a$export$2c2d2f5bd2673(action, params, onActionCall) {
    const history = $bdtG2$reactrouter.useHistory();
    const actionResponseHandler = $30cf2d580f3a6628$export$5002a7fa61628c70(onActionCall);
    const href = $da3a876a2bbb0c44$export$df0c85937310d589(action, params);
    const callApi = $e524972b97cfebee$export$79c175079d39204e({
        action: action,
        params: params,
        actionResponseHandler: actionResponseHandler
    });
    const handleClick = $f43cdc62018668df$export$3c619d28756b9edd({
        action: action,
        params: params,
        actionResponseHandler: actionResponseHandler,
        push: history.push
    });
    return {
        href: href,
        callApi: callApi,
        handleClick: handleClick
    };
}








const $fe0f6d7595e87a92$export$2dcbcc3dc454b566 = 'SESSION_INITIALIZE';
const $fe0f6d7595e87a92$export$417f4be00c156071 = (data = null)=>({
        type: $fe0f6d7595e87a92$export$2dcbcc3dc454b566,
        data: data
    })
;


/**
 * @classdesc
 * Hook which allows you to get and set currentAdmin
 *
 * ### Usage
 *
 * ```javascript
 * import { useCurrentAdmin } from 'adminjs'
 *
 * const myComponent = () => {
 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
 *   // ...
 * }
 * ```
 *
 * @class
 * @subcategory Hooks
 * @bundle
 * @returns {UseCurrentAdminResponse}
 * @hideconstructor
 */ function $3612ddcc28478c91$export$d7c8d6b4c4d3ee36() {
    const currentAdmin = $bdtG2$reactredux.useSelector((state)=>state.session
    );
    const dispatch = $bdtG2$reactredux.useDispatch();
    return [
        currentAdmin,
        (admin)=>dispatch($fe0f6d7595e87a92$export$417f4be00c156071(admin))
        , 
    ];
}



function $5873bff47b8eed27$export$86e2cef2561044ac(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = $bdtG2$react.useState(()=>{
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value)=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [
        storedValue,
        setValue
    ];
}
var $5873bff47b8eed27$export$2e2bcd8739ae039 = $5873bff47b8eed27$export$86e2cef2561044ac;









const $0dd229611dcc9113$var$isSelected = (href, location)=>{
    const regExp = new RegExp(`${href}($|/)`);
    return !!location.pathname.match(regExp);
};
function $0dd229611dcc9113$export$8dda0c21d4d87ce9(resources) {
    const [openElements, setOpenElements] = $5873bff47b8eed27$export$2e2bcd8739ae039('sidebarElements', {
    });
    const history = $bdtG2$reactrouter.useHistory();
    const location = $bdtG2$reactrouter.useLocation();
    const enrichResource = $bdtG2$react.useMemo(()=>(resource, icon)=>({
                href: resource.href || undefined,
                icon: icon,
                isSelected: $0dd229611dcc9113$var$isSelected(resource.href, location),
                label: resource.name,
                id: resource.id,
                onClick: (event)=>{
                    if (resource.href) {
                        event.preventDefault();
                        history.push(resource.href);
                    }
                }
            })
    , [
        location,
        history
    ]);
    // grouping resources into parents
    const map = resources.filter((res)=>res.href
    ) // first filter out resource which are not visible
    .reduce((memo, resource)=>{
        var ref, ref1, ref2, ref3, ref4;
        // in case resource has the same name as parent we namespace it wit "resource-""
        const key = ((ref = resource.navigation) === null || ref === void 0 ? void 0 : ref.name) || [
            'resource',
            resource.name
        ].join('-');
        if (!resource.navigation || resource.navigation.name === null) memo[key] = enrichResource(resource, (ref1 = resource.navigation) === null || ref1 === void 0 ? void 0 : ref1.icon);
        else if (memo[key] && memo[key].elements && ((ref2 = resource.navigation) === null || ref2 === void 0 ? void 0 : ref2.name)) memo[key].elements.push(enrichResource(resource));
        else memo[key] = {
            elements: [
                enrichResource(resource)
            ],
            label: (ref3 = resource.navigation) === null || ref3 === void 0 ? void 0 : ref3.name,
            icon: (ref4 = resource.navigation) === null || ref4 === void 0 ? void 0 : ref4.icon,
            onClick: ()=>setOpenElements({
                    ...openElements,
                    [key]: !openElements[key]
                })
            ,
            isOpen: !!openElements[key]
        };
        return memo;
    }, {
    });
    return Object.values(map);
}
var $0dd229611dcc9113$export$2e2bcd8739ae039 = $0dd229611dcc9113$export$8dda0c21d4d87ce9;










const $90a7b0831dd0c2e0$export$9fc83ad70ead8663 = ()=>{
    // eslint-disable-next-line no-shadow
    const { i18n: i18n , ...rest } = $bdtG2$reacti18next.useTranslation();
    const translateFunctions = $177797048784fb52$export$16e5ed149a4f9b50(i18n);
    return {
        ...rest,
        i18n: i18n,
        ...translateFunctions
    };
};
var $90a7b0831dd0c2e0$export$2e2bcd8739ae039 = $90a7b0831dd0c2e0$export$9fc83ad70ead8663;



const $7013cfa172558aeb$var$api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
/**
 * @load ./use-records.doc.md
 * @subcategory Hooks
 * @class
 * @hideconstructor
 *
 * @param {string} resourceId      id of a resource for which you want to fetch records
 * @return {UseRecordsResult}
 * @new In version 3.3
 * @bundle
 * @type {Function}
 */ function $7013cfa172558aeb$export$2e2bcd8739ae039(resourceId) {
    const [records, setRecords] = $bdtG2$react.useState([]);
    const [loading, setLoading] = $bdtG2$react.useState(false);
    const [perPage, setPerPage] = $bdtG2$react.useState(10);
    const [page, setPage] = $bdtG2$react.useState(1);
    const [total, setTotal] = $bdtG2$react.useState(0);
    const [direction, setDirection] = $bdtG2$react.useState('asc');
    const [sortBy, setSortBy] = $bdtG2$react.useState();
    const location = $bdtG2$reactrouter.useLocation();
    const history = $bdtG2$reactrouter.useHistory();
    const addNotice = $1b49a8c109bb1473$export$2e2bcd8739ae039();
    const { translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const onNotice = $1b49a8c109bb1473$export$2e2bcd8739ae039();
    const fetchData = ()=>{
        setLoading(true);
        const query = new URLSearchParams(location.search);
        const promise = $7013cfa172558aeb$var$api.resourceAction({
            actionName: 'list',
            resourceId: resourceId,
            params: query
        });
        promise.then((response)=>{
            const listActionResponse = response.data;
            if (listActionResponse.notice) onNotice(listActionResponse.notice);
            if (listActionResponse.redirectUrl) {
                history.push(listActionResponse.redirectUrl);
                return;
            }
            setRecords(listActionResponse.records);
            setPage(listActionResponse.meta.page);
            setPerPage(listActionResponse.meta.perPage);
            setTotal(listActionResponse.meta.total);
            setDirection(listActionResponse.meta.direction);
            setSortBy(listActionResponse.meta.sortBy);
            setLoading(false);
        }).catch(()=>{
            addNotice({
                message: translateMessage('errorFetchingRecords', resourceId),
                type: 'error'
            });
        });
        return promise;
    };
    $bdtG2$react.useEffect(()=>{
        if ($974f1534ed0256d1$export$3b1f529bc94220e1(location.search)) history.replace([
            location.pathname,
            $974f1534ed0256d1$export$a9f0f911fa12ec10(location.search).toString(), 
        ].join('?'));
        else fetchData();
    }, [
        resourceId,
        location.search
    ]);
    return {
        records: records,
        loading: loading,
        page: page,
        total: total,
        direction: direction,
        sortBy: sortBy,
        perPage: perPage,
        fetchData: fetchData
    };
}







/**
 * @load ./use-selected-records.doc.md
 * @subcategory Hooks
 * @class
 * @hideconstructor
 * @param {Array<RecordJSON>} records     List of records on which you can perform `select` action
 * @return {UseSelectedRecordsResult}
 * @new In version 3.3
 * @bundle
 * @type {Function}
 */ function $1e737ea8439a81aa$export$2e2bcd8739ae039(records) {
    const [selectedRecords, setSelectedRecords] = $bdtG2$react.useState([]);
    const handleSelect = (record)=>{
        const selectedIndex = selectedRecords.findIndex((selected)=>selected.id === record.id
        );
        if (selectedIndex < 0) setSelectedRecords([
            ...selectedRecords,
            record
        ]);
        else {
            const newSelectedRecords = [
                ...selectedRecords
            ];
            newSelectedRecords.splice(selectedIndex, 1);
            setSelectedRecords(newSelectedRecords);
        }
    };
    const handleSelectAll = ()=>{
        const missing = records.filter((record)=>!selectedRecords.find((selected)=>selected.id === record.id
            ) && record.bulkActions.length
        );
        if (missing.length) setSelectedRecords([
            ...selectedRecords,
            ...missing
        ]);
        else {
            const newSelectedRecords = selectedRecords.filter((selected)=>!records.find((record)=>record.id === selected.id
                )
            );
            setSelectedRecords(newSelectedRecords);
        }
    };
    return {
        handleSelect: handleSelect,
        handleSelectAll: handleSelectAll,
        selectedRecords: selectedRecords,
        setSelectedRecords: setSelectedRecords
    };
}








/**
 * @load ./use-resource.doc.md
 * @subcategory Hooks
 * @class
 * @hideconstructor
 * @new in version 3.3
 * @bundle
 * @param {string} resourceId    Id of a resource you want to get
 */ const $3cd27f156c3e35bf$export$2e2bcd8739ae039 = (resourceId)=>{
    const resources = $bdtG2$reactredux.useSelector((state)=>state.resources
    );
    const foundResource = resources.find((resource)=>resource.id === resourceId
    );
    return foundResource;
};







const $422ac53b0267e112$export$cfc7921d29ef7b80 = (props)=>{
    const { children: children , action: action , actionPerformed: actionPerformed , resourceId: resourceId , recordId: recordId , recordIds: recordIds  } = props;
    const { href: href , handleClick: handleClick  } = $428dd78f0b908b4a$export$2c2d2f5bd2673(action, {
        resourceId: resourceId,
        recordId: recordId,
        recordIds: recordIds
    }, actionPerformed);
    if (!action) return null;
    const firstChild = ($parcel$interopDefault($bdtG2$react)).Children.toArray(children)[0];
    if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') throw new Error('ActionButton has to have one child');
    const WrappedElement = /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).cloneElement(firstChild, {
        onClick: handleClick,
        'data-testid': $5b0218aad43938eb$export$7570aeda37ccc940(action),
        href: href
    });
    return WrappedElement;
};
var // TODO - remove this hack
$422ac53b0267e112$export$2e2bcd8739ae039 = $422ac53b0267e112$export$cfc7921d29ef7b80;










const $3e29d36d0955306c$export$ca871f5ef145e138 = ($parcel$interopDefault($bdtG2$styledcomponents))($bdtG2$reactrouterdom.Link)`
  color: ${({ theme: theme  })=>theme.colors.grey40
};
  font-family: ${({ theme: theme  })=>theme.font
};
  line-height: ${({ theme: theme  })=>theme.lineHeights.default
};
  font-size: ${({ theme: theme  })=>theme.fontSizes.default
};
  text-decoration: none;

  &:hover {
    color: ${({ theme: theme  })=>theme.colors.primary100
};
  }

  &:after {
    content: '/';
    padding: 0 ${({ theme: theme  })=>theme.space.default
};
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;
const $3e29d36d0955306c$export$2dc68d50d56fbbd = (props)=>{
    const { resource: resource , record: record , actionName: actionName  } = props;
    const action = resource.actions.find((a)=>a.name === actionName
    );
    const h = new $b992f9c849e9d14a$export$2e2bcd8739ae039();
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        flexGrow: 1,
        className: $bdtG2$adminjsdesignsystem.cssClass('Breadcrumbs')
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3e29d36d0955306c$export$ca871f5ef145e138, {
        to: h.dashboardUrl()
    }, "Dashboard"), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3e29d36d0955306c$export$ca871f5ef145e138, {
        to: resource.href ? resource.href : '/',
        className: record ? 'is-active' : ''
    }, resource.name), action && action.name !== 'list' && /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3e29d36d0955306c$export$ca871f5ef145e138, {
        to: "#"
    }, action.label)));
};
var $3e29d36d0955306c$export$2e2bcd8739ae039 = $3e29d36d0955306c$export$2dc68d50d56fbbd;



const $706f7333c1377a0e$export$333d5787bbdf9f79 = (options)=>{
    const { actions: actions , params: params , handleClick: handleClick  } = options;
    const buttons = actions.map((action)=>{
        const href = $da3a876a2bbb0c44$export$df0c85937310d589(action, params);
        return {
            icon: action.icon,
            label: action.label,
            variant: action.variant,
            source: action,
            href: href || undefined,
            // when href is not defined - handle click should also be not defined
            // This prevents from "cursor: pointer;"
            onClick: href ? handleClick : undefined,
            'data-testid': $5b0218aad43938eb$export$7570aeda37ccc940(action),
            buttons: []
        };
    });
    // nesting buttons
    const buttonsMap = buttons.reduce((memo, button)=>{
        const action = button.source;
        if (action.parent) {
            const parent = memo[action.parent] || buttons.find((btn)=>btn.source.name === action.parent
            ) || {
                label: action.parent
            };
            parent.buttons = parent.buttons || [];
            parent.buttons.push(button);
            return {
                ...memo,
                [action.parent]: parent
            };
        }
        return {
            ...memo,
            [button.source.name]: button
        };
    }, {
    });
    return Object.values(buttonsMap);
};







// eslint-disable-next-line @typescript-eslint/no-unused-vars
const $5e9d4c3e3d44d148$var$StyledLink = ($parcel$interopDefault($bdtG2$styledcomponents))(({ rounded: rounded , ...rest })=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactrouterdom.Link, rest)
)`${$bdtG2$adminjsdesignsystem.ButtonCSS}`;
const $5e9d4c3e3d44d148$var$h = new $b992f9c849e9d14a$export$2e2bcd8739ae039();
const $5e9d4c3e3d44d148$export$184973cf4273d4e0 = (props)=>{
    const { resourceId: resourceId , showInDrawer: showInDrawer  } = props;
    const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($5e9d4c3e3d44d148$var$StyledLink, {
        size: "icon",
        to: $5e9d4c3e3d44d148$var$h.resourceUrl({
            resourceId: resourceId,
            search: window.location.search
        }),
        rounded: true,
        mr: "lg",
        type: "button"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: cssCloseIcon
    })));
};




const $b3cd7156ef1d8ec2$export$70d0618c8112500f = (props)=>{
    const { resource: resource , toggleFilter: toggleFilter , actionPerformed: actionPerformed , record: record , action: action , tag: tag , omitActions: omitActions ,  } = props;
    const { translateButton: translateButton  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const history = $bdtG2$reactrouter.useHistory();
    const actionResponseHandler = $30cf2d580f3a6628$export$5002a7fa61628c70(actionPerformed);
    if (action.hideActionHeader) return null;
    const resourceId = resource.id;
    const params = {
        resourceId: resourceId,
        recordId: record === null || record === void 0 ? void 0 : record.id
    };
    const handleActionClick = (event, sourceAction)=>$f43cdc62018668df$export$3c619d28756b9edd({
            action: sourceAction,
            params: params,
            actionResponseHandler: actionResponseHandler,
            push: history.push
        })(event)
    ;
    const actionButtons = $706f7333c1377a0e$export$333d5787bbdf9f79({
        actions: record ? record.recordActions.filter((ra)=>!action || action.name !== ra.name
        ) : resource.resourceActions.filter((ra)=>ra.name === 'new' && (!action || action.name !== ra.name)
        ),
        params: params,
        handleClick: handleActionClick
    });
    if (toggleFilter) actionButtons.push({
        label: translateButton('filter', resource.id),
        onClick: toggleFilter,
        icon: 'SettingsAdjust'
    });
    // list and new actions are special and are are always
    const customResourceButtons = $706f7333c1377a0e$export$333d5787bbdf9f79({
        actions: resource.resourceActions.filter((ra)=>![
                'list',
                'new'
            ].includes(ra.name)
        ),
        params: {
            resourceId: resourceId
        },
        handleClick: handleActionClick
    });
    const title = action ? action.label : resource.name;
    const isList = action && action.name === 'list';
    const listAction = resource.resourceActions.find((ra)=>ra.name === 'list'
    );
    // styled which differs if action header is in the drawer or not
    const cssIsRootFlex = !action.showInDrawer;
    const cssHeaderMT = action.showInDrawer ? '' : 'lg';
    const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
    const CssHComponent = action.showInDrawer ? $bdtG2$adminjsdesignsystem.H3 : $bdtG2$adminjsdesignsystem.H2;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        className: $bdtG2$adminjsdesignsystem.cssClass('ActionHeader')
    }, action.showInDrawer ? '' : /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        flex: true,
        flexDirection: "row",
        px: [
            'default',
            0
        ]
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3e29d36d0955306c$export$2e2bcd8739ae039, {
        resource: resource,
        actionName: action.name,
        record: record
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        flexShrink: 0
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ButtonGroup, {
        size: "sm",
        rounded: true,
        buttons: customResourceButtons
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        display: [
            'block',
            cssIsRootFlex ? 'flex' : 'block'
        ]
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        mt: cssHeaderMT,
        flexGrow: 1,
        px: [
            'default',
            0
        ]
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(CssHComponent, {
        mb: "lg"
    }, !isList && listAction ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($5e9d4c3e3d44d148$export$184973cf4273d4e0, {
        resourceId: resourceId,
        showInDrawer: action.showInDrawer
    }) : '', title, tag ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Badge, {
        variant: "primary",
        ml: "default"
    }, tag) : '')), omitActions ? '' : /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        mt: "xl",
        mb: cssActionsMB,
        flexShrink: 0
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ButtonGroup, {
        buttons: actionButtons
    })))));
};
var $b3cd7156ef1d8ec2$export$2e2bcd8739ae039 = $b3cd7156ef1d8ec2$export$70d0618c8112500f;









const $4be80ad1c06c0fea$var$ErrorMessage = ({ error: error  })=>{
    const { translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        m: "xxl",
        variant: "danger",
        message: "Javascript Error"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, null, error.toString()), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, {
        mt: "default"
    }, translateMessage('seeConsoleForMore'))));
};
class $4be80ad1c06c0fea$export$e926676385687eaf extends ($parcel$interopDefault($bdtG2$react)).Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    componentDidCatch(error) {
        this.setState({
            error: error
        });
    }
    render() {
        const { children: children  } = this.props;
        const { error: error  } = this.state;
        if (error !== null) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($4be80ad1c06c0fea$var$ErrorMessage, {
            error: error
        }));
        return children || null;
    }
}
var $4be80ad1c06c0fea$export$2e2bcd8739ae039 = $4be80ad1c06c0fea$export$e926676385687eaf;








var $4a841af88fefe403$exports = {};

$parcel$export($4a841af88fefe403$exports, "show", () => $1ba0821e04a96339$export$2e2bcd8739ae039);
$parcel$export($4a841af88fefe403$exports, "edit", () => $626b3c3b5f447732$export$2e2bcd8739ae039);
$parcel$export($4a841af88fefe403$exports, "list", () => $f93fe4697f27fb35$export$2e2bcd8739ae039);






const $fabd1692f8e41da6$var$AddNewItemButton = (props)=>{
    const { resource: resource , property: property  } = props;
    const { translateProperty: translateProperty , translateButton: translateButton  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
        defaultValue: translateButton('addNewItem', resource.id)
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: "Add"
    }), label));
};
var $fabd1692f8e41da6$export$2e2bcd8739ae039 = $fabd1692f8e41da6$var$AddNewItemButton;





const $7dfabef4922f9e29$export$2e2bcd8739ae039 = (props)=>{
    const { property: property , props: labelProps  } = props;
    if (property.hideLabel) return null;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, {
        htmlFor: property.path,
        required: property.isRequired,
        ...labelProps
    }, property.label));
};





const $7b3046e4c48179d9$export$cc3cdf3becb8390a = (arrayProperty, index)=>({
        ...arrayProperty,
        path: [
            arrayProperty.path,
            index
        ].join($d76a50c600f395c8$export$51cb4a1dbeddc712),
        label: `[${index + 1}]`,
        isArray: false,
        isDraggable: false
    })
;



const $2cfd666d80301e1a$export$e35386f8b0bc07b7 = (record, subPropertyPath)=>{
    // by default populated is flatten just to the path level - object itself is not flatten. That is
    // why we have to retrieve the original state. That is why we have to replace record.populated to
    // from { 'some.nested.1.key': RecordJSON } to { 'some.nested.1.key': 'some.nested.1.key' },
    // then remove keys, and refill back some.nested.1.key to the value from the original populated
    // object.
    const populatedKeyMap = Object.keys(record.populated).reduce((memo, propertyKey)=>({
            ...memo,
            [propertyKey]: propertyKey
        })
    , {
    });
    const newPopulatedKeyMap = $c83b12262b3384be$export$40fa977508bcf282.removePath(populatedKeyMap, subPropertyPath);
    const newPopulated = Object.entries(newPopulatedKeyMap).reduce((memo, [newPropertyKey, oldPropertyKey])=>{
        return {
            ...memo,
            [newPropertyKey]: oldPropertyKey && record.populated[oldPropertyKey === null || oldPropertyKey === void 0 ? void 0 : oldPropertyKey.toString()]
        };
    }, {
    });
    return {
        ...record,
        params: $c83b12262b3384be$export$40fa977508bcf282.removePath(record.params, subPropertyPath),
        populated: newPopulated
    };
};


const $626b3c3b5f447732$var$ItemRenderer = (props)=>{
    const { ItemComponent: ItemComponent , property: property , onDelete: onDelete , index: index , record: record , isDraggable: isDraggable  } = props;
    const uniqueDraggableId = window.btoa(unescape(encodeURIComponent(`${JSON.stringify($c83b12262b3384be$export$40fa977508bcf282.get(record.params, property.path))}-${property.path}`)));
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactbeautifuldnd.Draggable, {
        draggableId: uniqueDraggableId,
        index: index,
        key: uniqueDraggableId,
        isDragDisabled: !isDraggable
    }, (provided)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            background: "white",
            flex: true,
            flexDirection: "row",
            alignItems: "center",
            "data-testid": property.path
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
            flexGrow: 1
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(ItemComponent, props)), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
            flexShrink: 0,
            ml: "lg"
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
            rounded: true,
            ml: "default",
            "data-testid": "delete-item",
            type: "button",
            size: "icon",
            onClick: (event)=>onDelete(event, property)
            ,
            variant: "danger"
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
            icon: "TrashCan"
        }))))
    ));
};
const $626b3c3b5f447732$var$InputsInSection = (props)=>{
    const { property: property , record: record , resource: resource , onChange: onChange  } = props;
    const items = $c83b12262b3384be$export$40fa977508bcf282.get(record.params, property.path) || [];
    const addNew = $bdtG2$react.useCallback((event)=>{
        const newItems = [
            ...items,
            property.subProperties.length ? {
            } : '', 
        ];
        onChange(property.path, newItems);
        event.preventDefault();
        return false;
    }, [
        record,
        onChange,
        property
    ]);
    const removeItem = $bdtG2$react.useCallback((event, subProperty)=>{
        const newRecord = $2cfd666d80301e1a$export$e35386f8b0bc07b7(record, subProperty.path);
        onChange(newRecord);
        event.preventDefault();
        return false;
    }, [
        record,
        onChange,
        property
    ]);
    const handleOnDragEnd = $bdtG2$react.useCallback((result)=>{
        const { source: source , destination: destination  } = result;
        if (!source || !destination || destination.index === source.index) return;
        const itemsCopy = Array.from(items);
        const [sourceItem] = itemsCopy.splice(source.index, 1);
        itemsCopy.splice(destination.index, 0, sourceItem);
        onChange(property.path, itemsCopy);
    }, [
        record,
        onChange,
        property
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactbeautifuldnd.DragDropContext, {
        onDragEnd: handleOnDragEnd
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactbeautifuldnd.Droppable, {
        droppableId: property.path
    }, (provided)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Section, {
            ref: provided.innerRef,
            ...provided.droppableProps,
            mt: "xl",
            className: property.path
        }, items.map((item, i)=>{
            const itemProperty = $7b3046e4c48179d9$export$cc3cdf3becb8390a(props.property, i);
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($626b3c3b5f447732$var$ItemRenderer, {
                ...props,
                property: itemProperty,
                isDraggable: property.isDraggable,
                key: itemProperty.path,
                onDelete: removeItem,
                index: i
            }));
        }), provided.placeholder, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
            onClick: addNew,
            type: "button",
            rounded: true
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($fabd1692f8e41da6$export$2e2bcd8739ae039, {
            resource: resource,
            property: property
        })))
    )));
};
const $626b3c3b5f447732$export$2e2bcd8739ae039 = (props)=>{
    const { property: property , record: record , testId: testId  } = props;
    const error = record.errors && record.errors[property.propertyPath];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: !!error,
        "data-testid": testId
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($626b3c3b5f447732$var$InputsInSection, props), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};




const $f93fe4697f27fb35$var$List = (props)=>{
    const { property: property , record: record  } = props;
    const values = $c83b12262b3384be$export$40fa977508bcf282.get(record.params, property.path) || [];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("span", null, `length: ${values.length}`));
};
var $f93fe4697f27fb35$export$2e2bcd8739ae039 = $f93fe4697f27fb35$var$List;






class $1ba0821e04a96339$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property , record: record , ItemComponent: ItemComponent  } = this.props;
        const items = $c83b12262b3384be$export$40fa977508bcf282.get(record.params, property.path) || [];
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Section, null, (items || []).map((item, i)=>{
            const itemProperty = $7b3046e4c48179d9$export$cc3cdf3becb8390a(property, i);
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(ItemComponent, {
                ...this.props,
                key: itemProperty.path,
                property: itemProperty
            }));
        }))));
    }
}




var $58a06dc28713d0ce$exports = {};

$parcel$export($58a06dc28713d0ce$exports, "show", () => $de13f6cc6814bcb6$export$2e2bcd8739ae039);
$parcel$export($58a06dc28713d0ce$exports, "edit", () => $ca3639369e29f885$export$2e2bcd8739ae039);
$parcel$export($58a06dc28713d0ce$exports, "list", () => $7c9c0c0e07cfbf12$export$2e2bcd8739ae039);




function $338cd78c3d3ccc96$export$cc3cdf3becb8390a(property, subProperty) {
    const [subPropertyPath] = subProperty.name.split($d76a50c600f395c8$export$51cb4a1dbeddc712).slice(-1);
    return {
        ...subProperty,
        path: [
            property.path,
            subPropertyPath
        ].join($d76a50c600f395c8$export$51cb4a1dbeddc712)
    };
}


const $ca3639369e29f885$var$Edit = (props)=>{
    const { property: property , record: record , ItemComponent: ItemComponent  } = props;
    const error = record.errors && record.errors[property.path];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: !!error
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Section, property.props, property.subProperties.filter((subProperty)=>!subProperty.isId
    ).map((subProperty)=>{
        const subPropertyWithPath = $338cd78c3d3ccc96$export$cc3cdf3becb8390a(property, subProperty);
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(ItemComponent, {
            ...props,
            key: subPropertyWithPath.path,
            property: subPropertyWithPath
        }));
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};
var $ca3639369e29f885$export$2e2bcd8739ae039 = $ca3639369e29f885$var$Edit;





const $de13f6cc6814bcb6$var$Show = (props)=>{
    const { property: property , ItemComponent: ItemComponent  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
        label: property.label
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Section, null, property.subProperties.filter((subProperty)=>!subProperty.isId
    ).map((subProperty)=>{
        const subPropertyWithPath = $338cd78c3d3ccc96$export$cc3cdf3becb8390a(property, subProperty);
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(ItemComponent, {
            ...props,
            key: subPropertyWithPath.path,
            property: subPropertyWithPath
        }));
    }))));
};
var $de13f6cc6814bcb6$export$2e2bcd8739ae039 = $de13f6cc6814bcb6$var$Show;







class $7c9c0c0e07cfbf12$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    renderItems() {
        const { property: property , ItemComponent: ItemComponent  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, null, property.subProperties.filter((subProperty)=>!subProperty.isId
        ).map((subProperty)=>{
            const subPropertyWithPath = $338cd78c3d3ccc96$export$cc3cdf3becb8390a(property, subProperty);
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", {
                key: subPropertyWithPath.path
            }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, {
                inline: true
            }, `${subProperty.label}: `), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(ItemComponent, {
                ...this.props,
                property: subPropertyWithPath
            })));
        })));
    }
    render() {
        const { property: property , record: record , resource: resource  } = this.props;
        const showAction = record.recordActions.find((a)=>a.name === 'show'
        );
        if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
            const h = new $b992f9c849e9d14a$export$2e2bcd8739ae039();
            const href = h.recordActionUrl({
                resourceId: resource.id,
                recordId: record.id,
                actionName: 'show'
            });
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactrouterdom.Link, {
                to: href
            }, this.renderItems()));
        }
        return this.renderItems();
    }
}




var $fa10bdef0b289d97$exports = {};

$parcel$export($fa10bdef0b289d97$exports, "show", () => $c59bf84f2dfae2ef$export$2e2bcd8739ae039);
$parcel$export($fa10bdef0b289d97$exports, "edit", () => $ece84af00c23d10c$export$2e2bcd8739ae039);
$parcel$export($fa10bdef0b289d97$exports, "filter", () => $057dc57d7e5dd525$export$2e2bcd8739ae039);
$parcel$export($fa10bdef0b289d97$exports, "list", () => $45d21ea798991e71$export$2e2bcd8739ae039);




const $8a1c47aa991a1c8d$var$DefaultPropertyValue = (props)=>{
    const { property: property , record: record  } = props;
    const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];
    if (typeof rawValue === 'undefined') return null;
    if (property.availableValues) {
        const option = property.availableValues.find((opt)=>opt.value === rawValue
        );
        if (!option) return rawValue;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Badge, null, (option === null || option === void 0 ? void 0 : option.label) || rawValue));
    }
    return rawValue;
};
var $8a1c47aa991a1c8d$export$2e2bcd8739ae039 = $8a1c47aa991a1c8d$var$DefaultPropertyValue;


class $c59bf84f2dfae2ef$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($8a1c47aa991a1c8d$export$2e2bcd8739ae039, this.props)));
    }
}






const $cedc48db088f0242$export$d293b9805507b639 = (prevProps, nextProps)=>{
    const prevValue = prevProps.record.params[prevProps.property.path];
    const nextValue = nextProps.record.params[nextProps.property.path];
    const prevError = prevProps.record.errors[prevProps.property.path];
    const nextError = nextProps.record.errors[nextProps.property.path];
    return prevValue === nextValue && prevError === nextError;
};



const $ece84af00c23d10c$var$Edit = (props)=>{
    var ref;
    const { property: property , record: record  } = props;
    const error = (ref = record.errors) === null || ref === void 0 ? void 0 : ref[property.path];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: Boolean(error)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), property.availableValues ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ece84af00c23d10c$var$SelectEdit, props) : /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ece84af00c23d10c$var$TextEdit, props), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};
const $ece84af00c23d10c$var$SelectEdit = (props)=>{
    var ref;
    const { theme: theme , record: record , property: property , onChange: onChange  } = props;
    if (!property.availableValues) return null;
    var ref1;
    const propValue = (ref1 = (ref = record.params) === null || ref === void 0 ? void 0 : ref[property.path]) !== null && ref1 !== void 0 ? ref1 : '';
    const styles = $bdtG2$adminjsdesignsystem.selectStyles(theme);
    const selected = property.availableValues.find((av)=>av.value === propValue
    );
    var ref2;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$reactselect)), {
        isClearable: true,
        styles: styles,
        value: selected,
        options: property.availableValues,
        onChange: (s)=>{
            return onChange(property.path, (ref2 = s === null || s === void 0 ? void 0 : s.value) !== null && ref2 !== void 0 ? ref2 : '');
        },
        isDisabled: property.isDisabled,
        ...property.props
    }));
};
const $ece84af00c23d10c$var$TextEdit = (props)=>{
    var ref;
    const { property: property , record: record , onChange: onChange  } = props;
    var ref3;
    const propValue = (ref3 = (ref = record.params) === null || ref === void 0 ? void 0 : ref[property.path]) !== null && ref3 !== void 0 ? ref3 : '';
    const [value, setValue] = $bdtG2$react.useState(propValue);
    $bdtG2$react.useEffect(()=>{
        if (value !== propValue) setValue(propValue);
    }, [
        propValue
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Input, {
        id: property.path,
        name: property.path,
        onChange: (e)=>setValue(e.target.value)
        ,
        onBlur: ()=>onChange(property.path, value)
        ,
        // handle clicking ENTER
        onKeyDown: (e)=>e.keyCode === 13 && onChange(property.path, value)
        ,
        value: value,
        disabled: property.isDisabled,
        ...property.props
    }));
};
var $ece84af00c23d10c$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.withTheme(/*#__PURE__*/ $bdtG2$react.memo($ece84af00c23d10c$var$Edit, $cedc48db088f0242$export$d293b9805507b639));






class $057dc57d7e5dd525$var$Filter extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
    handleInputChange(event) {
        const { onChange: onChange , property: property  } = this.props;
        onChange(property.path, event.target.value);
    }
    handleSelectChange(selected) {
        const { onChange: onChange , property: property  } = this.props;
        const value = selected ? selected.value : '';
        onChange(property.path, value);
    }
    renderInput() {
        const { property: property , filter: filter , theme: theme  } = this.props;
        const filterKey = `filter-${property.path}`;
        const value = filter[property.path] || '';
        if (property.availableValues) {
            const selected = property.availableValues.find((av)=>av.value === value
            );
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$reactselect)), {
                value: typeof selected === 'undefined' ? '' : selected,
                isClearable: true,
                options: property.availableValues,
                styles: $bdtG2$adminjsdesignsystem.filterStyles(theme),
                onChange: this.handleSelectChange
            }));
        }
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Input, {
            name: filterKey,
            onChange: this.handleInputChange,
            value: value
        }));
    }
    render() {
        const { property: property  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
            variant: "filter"
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, null, property.label), this.renderInput()));
    }
}
var $057dc57d7e5dd525$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.withTheme($057dc57d7e5dd525$var$Filter);




class $45d21ea798991e71$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($8a1c47aa991a1c8d$export$2e2bcd8739ae039, this.props));
    }
}




var $459c0c0f46641950$exports = {};

$parcel$export($459c0c0f46641950$exports, "edit", () => $65dd60cf18f81d53$export$2e2bcd8739ae039);
$parcel$export($459c0c0f46641950$exports, "show", () => $1ef730e637ad1072$export$2e2bcd8739ae039);
$parcel$export($459c0c0f46641950$exports, "list", () => $b6d13c557aca6996$export$2e2bcd8739ae039);
$parcel$export($459c0c0f46641950$exports, "filter", () => $27e9737574c2f461$export$2e2bcd8739ae039);




const $65dd60cf18f81d53$var$parseValue = (value)=>!(!value || value === 'false')
;
const $65dd60cf18f81d53$var$Edit = (props)=>{
    const { property: property , onChange: onChange , record: record  } = props;
    const value = $65dd60cf18f81d53$var$parseValue(record.params && record.params[property.path]);
    const error = record.errors && record.errors[property.path];
    const handleChange = ()=>{
        if (!property.isDisabled) onChange(property.path, !value);
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: !!error
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.CheckBox, {
        id: property.path,
        name: property.path,
        onChange: handleChange,
        checked: value,
        disabled: property.isDisabled,
        ...property.props
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property,
        props: {
            inline: true
        }
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};
var $65dd60cf18f81d53$export$2e2bcd8739ae039 = /*#__PURE__*/ $bdtG2$react.memo($65dd60cf18f81d53$var$Edit, $cedc48db088f0242$export$d293b9805507b639);







var $7d0db565fb8a1099$export$2e2bcd8739ae039 = (value)=>{
    if (typeof value === 'undefined') return '';
    return value ? 'Yes' : 'No';
};


const $c375897a4fa6a542$var$BooleanPropertyValue = (props)=>{
    const { record: record , property: property , resource: resource  } = props;
    const { translateProperty: translateProperty  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];
    if (typeof rawValue === 'undefined' || rawValue === '') return null;
    const base = $7d0db565fb8a1099$export$2e2bcd8739ae039(rawValue);
    const translation = translateProperty(`${property.path}.${rawValue}`, resource.id, {
        defaultValue: base
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Badge, {
        outline: true,
        size: "sm"
    }, translation));
};
var $c375897a4fa6a542$export$2e2bcd8739ae039 = $c375897a4fa6a542$var$BooleanPropertyValue;


class $1ef730e637ad1072$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($c375897a4fa6a542$export$2e2bcd8739ae039, this.props)));
    }
}




class $b6d13c557aca6996$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($c375897a4fa6a542$export$2e2bcd8739ae039, this.props));
    }
}







class $27e9737574c2f461$var$Filter extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(selected) {
        const { onChange: onChange , property: property  } = this.props;
        const value = selected ? selected.value : '';
        onChange(property.path, value);
    }
    render() {
        const { property: property , filter: filter = {
        } , theme: theme  } = this.props;
        const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
        const options = [
            {
                value: true,
                label: $7d0db565fb8a1099$export$2e2bcd8739ae039(true)
            },
            {
                value: false,
                label: $7d0db565fb8a1099$export$2e2bcd8739ae039(false)
            }, 
        ];
        const selected = options.find((o)=>o.value === value
        );
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, null, property.label), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$reactselect)), {
            value: typeof selected === 'undefined' ? '' : selected,
            isClearable: true,
            options: options,
            styles: $bdtG2$adminjsdesignsystem.filterStyles(theme),
            onChange: this.handleChange
        })));
    }
}
var $27e9737574c2f461$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.withTheme($27e9737574c2f461$var$Filter);




var $6497088ade4f6fb4$exports = {};

$parcel$export($6497088ade4f6fb4$exports, "edit", () => $6b4d0d12f5d1a9a8$export$2e2bcd8739ae039);
$parcel$export($6497088ade4f6fb4$exports, "show", () => $4499e9c108f35c1c$export$2e2bcd8739ae039);
$parcel$export($6497088ade4f6fb4$exports, "list", () => $c0e8604f365e4f84$export$2e2bcd8739ae039);
$parcel$export($6497088ade4f6fb4$exports, "filter", () => $9e2821c481c3735d$export$2e2bcd8739ae039);




const $6b4d0d12f5d1a9a8$var$Edit = (props)=>{
    const { property: property , onChange: onChange , record: record  } = props;
    const value = record.params && record.params[property.path] || '';
    const error = record.errors && record.errors[property.path];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: !!error
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DatePicker, {
        value: value,
        disabled: property.isDisabled,
        onChange: (data)=>onChange(property.path, data)
        ,
        propertyType: property.type,
        ...property.props
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};
var $6b4d0d12f5d1a9a8$export$2e2bcd8739ae039 = /*#__PURE__*/ $bdtG2$react.memo($6b4d0d12f5d1a9a8$var$Edit, $cedc48db088f0242$export$d293b9805507b639);





var $9e46bd1a8990527c$export$2e2bcd8739ae039 = (value, propertyType)=>{
    if (!value) return '';
    const date = new Date(value);
    if (date) return $bdtG2$adminjsdesignsystem.formatDateProperty(date, propertyType);
    return '';
};


class $4499e9c108f35c1c$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property , record: record  } = this.props;
        const value = $9e46bd1a8990527c$export$2e2bcd8739ae039(record.params[property.path], property.type);
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, value));
    }
}




class $c0e8604f365e4f84$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property , record: record  } = this.props;
        const value = $9e46bd1a8990527c$export$2e2bcd8739ae039(record.params[property.path], property.type);
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("span", null, value));
    }
}




var $f379f90d10e90907$exports = {};

$parcel$defineInteropFlag($f379f90d10e90907$exports);

$parcel$export($f379f90d10e90907$exports, "PARAM_SEPARATOR", () => $f379f90d10e90907$export$ebc06129befdf8d);
$parcel$export($f379f90d10e90907$exports, "Filter", () => $f379f90d10e90907$export$ec91da630f36d5ea);
$parcel$export($f379f90d10e90907$exports, "default", () => $f379f90d10e90907$export$2e2bcd8739ae039);

const $f379f90d10e90907$export$ebc06129befdf8d = '~~';
class $f379f90d10e90907$export$ec91da630f36d5ea {
    /**
   * Changes raw nested filters to form Object<path, value>.
   *
   * @example
   * const filters = {
   *  nested: {field: 'ala'},
   *  'dataField~~from': '2019-08-14'
   * }
   *
   * const normalized = Filter.normalizeFilters(filters)
   * // {
   * //   'nested.filter': 'ala',
   * //   'dataField': {from: '2019-08-14'}
   * // }
   *
   *
   * @param   {Object}  filters
   *
   * @return  {Object}
   */ static normalizeKeys(filters) {
        return $bdtG2$flat.unflatten($bdtG2$flat.flatten(filters), {
            delimiter: $f379f90d10e90907$export$ebc06129befdf8d
        });
    }
    /**
   * @param   {Object<String,Object | String>}  filters   selected filters
   * @param   {BaseResource}                    resource    resource which is filtered
   */ constructor(filters = {
    }, resource){
        this.resource = resource;
        const normalized = $f379f90d10e90907$export$ec91da630f36d5ea.normalizeKeys(filters);
        this.filters = Object.keys(normalized).reduce((memo, path)=>{
            memo[path] = {
                path: path,
                property: this.resource.property(path),
                value: normalized[path]
            };
            return memo;
        }, {
        });
    }
    /**
   * Returns filter for a given property key
   *
   * @param {String} key      property key
   * @returns {Filter.Property | undefined}
   */ get(key) {
        return this.filters[key];
    }
    /**
   * Populates all filtered properties which refers to other resources
   */ async populate() {
        const keys = Object.keys(this.filters);
        for(let index = 0; index < keys.length; index += 1){
            var ref;
            const key = keys[index];
            const referenceResource = (ref = this.resource.decorate().getPropertyByKey(key)) === null || ref === void 0 ? void 0 : ref.reference();
            if (referenceResource) this.filters[key].populated = await referenceResource.findOne(this.filters[key].value);
        }
        return this;
    }
    reduce(callback, initial) {
        return Object.values(this.filters).reduce(callback, initial || {
        });
    }
    isVisible() {
        return !!Object.keys(this.filters).length;
    }
}
var $f379f90d10e90907$export$2e2bcd8739ae039 = $f379f90d10e90907$export$ec91da630f36d5ea;


const { PARAM_SEPARATOR: $9e2821c481c3735d$var$PARAM_SEPARATOR  } = $f379f90d10e90907$exports;
const $9e2821c481c3735d$var$Filter = (props)=>{
    const { property: property , filter: filter , onChange: onChange  } = props;
    const fromKey = `${property.path}${$9e2821c481c3735d$var$PARAM_SEPARATOR}from`;
    const toKey = `${property.path}${$9e2821c481c3735d$var$PARAM_SEPARATOR}to`;
    const fromValue = filter[fromKey];
    const toValue = filter[toKey];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        variant: "filter"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, null, property.label), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, null, "- From: "), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DatePicker, {
        value: fromValue,
        onChange: (data)=>onChange(fromKey, data)
        ,
        propertyType: property.type
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, {
        mt: "default"
    }, "- To: "), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DatePicker, {
        value: toValue,
        onChange: (data)=>onChange(toKey, data)
        ,
        propertyType: property.type
    }))));
};
var $9e2821c481c3735d$export$2e2bcd8739ae039 = $9e2821c481c3735d$var$Filter;




var $1e7c77b7e5e042d7$exports = {};

$parcel$export($1e7c77b7e5e042d7$exports, "edit", () => $f465cd9a5b1aac20$export$2e2bcd8739ae039);
$parcel$export($1e7c77b7e5e042d7$exports, "show", () => $bcdc3d4462c8ae82$export$2e2bcd8739ae039);
$parcel$export($1e7c77b7e5e042d7$exports, "list", () => $475592f67c8f509c$export$2e2bcd8739ae039);




const $f465cd9a5b1aac20$var$Edit = (props)=>{
    var ref;
    const { property: property , record: record , onChange: onChange  } = props;
    var ref1;
    const value = (ref1 = (ref = record.params) === null || ref === void 0 ? void 0 : ref[property.path]) !== null && ref1 !== void 0 ? ref1 : '';
    const error = record.errors && record.errors[property.path];
    const { props: propertyProps  } = property;
    const { quill: quill = {
    } , ...customProps } = propertyProps || {
    };
    quill.theme = quill.theme || 'snow';
    quill.modules = {
        toolbar: $bdtG2$adminjsdesignsystem.DefaultQuillToolbarOptions,
        ...quill.modules || {
        }
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: Boolean(error)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.RichText, {
        ...customProps,
        value: value,
        onChange: (content)=>onChange(property.path, content)
        ,
        quill: quill
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message)));
};
var $f465cd9a5b1aac20$export$2e2bcd8739ae039 = /*#__PURE__*/ $bdtG2$react.memo($f465cd9a5b1aac20$var$Edit, $cedc48db088f0242$export$d293b9805507b639);




class $bcdc3d4462c8ae82$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    constructor(props){
        super(props);
        this.contentRef = /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createRef();
    }
    componentDidMount() {
        const { property: property , record: record  } = this.props;
        const value = record.params[property.path];
        this.contentRef.current.innerHTML = value;
    }
    render() {
        const { property: property  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
            variant: "grey",
            border: "default"
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, {
            ref: this.contentRef
        }))));
    }
}



const $475592f67c8f509c$var$List = (props)=>{
    const { property: property , record: record  } = props;
    const original = record.params[property.path] || '';
    const value = original.substring(0, 15) + (original.length > 15 ? '...' : '');
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("span", null, value));
};
var $475592f67c8f509c$export$2e2bcd8739ae039 = $475592f67c8f509c$var$List;




var $916e6f0b839ab165$exports = {};

$parcel$export($916e6f0b839ab165$exports, "edit", () => $c7fbf67fd58f86e7$export$2e2bcd8739ae039);
$parcel$export($916e6f0b839ab165$exports, "show", () => $373df2333bb45e8f$export$2e2bcd8739ae039);
$parcel$export($916e6f0b839ab165$exports, "list", () => $5203ace22f218269$export$2e2bcd8739ae039);
$parcel$export($916e6f0b839ab165$exports, "filter", () => $b0bcf71acc1be28c$export$2e2bcd8739ae039);






const $c7fbf67fd58f86e7$var$Edit = (props)=>{
    const { onChange: onChange , property: property , record: record , theme: theme  } = props;
    const { reference: resourceId  } = property;
    if (!resourceId) throw new Error(`Cannot reference resource in property '${property.path}'`);
    const handleChange = (selected)=>{
        if (selected) onChange(property.path, selected.value, selected.record);
        else onChange(property.path, null);
    };
    const loadOptions = async (inputValue)=>{
        const api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
        const optionRecords = await api.searchRecords({
            resourceId: resourceId,
            query: inputValue
        });
        return optionRecords.map((optionRecord)=>({
                value: optionRecord.id,
                label: optionRecord.title,
                record: optionRecord
            })
        );
    };
    const error = record === null || record === void 0 ? void 0 : record.errors[property.path];
    const selectedId = record === null || record === void 0 ? void 0 : record.params[property.path];
    const [loadedRecord, setLoadedRecord] = $bdtG2$react.useState();
    const [loadingRecord, setLoadingRecord] = $bdtG2$react.useState(0);
    var _path;
    const selectedValue = (_path = record === null || record === void 0 ? void 0 : record.populated[property.path]) !== null && _path !== void 0 ? _path : loadedRecord;
    const selectedOption = selectedId && selectedValue ? {
        value: selectedValue.id,
        label: selectedValue.title
    } : {
        value: '',
        label: ''
    };
    const styles = $bdtG2$adminjsdesignsystem.selectStyles(theme);
    $bdtG2$react.useEffect(()=>{
        if (!selectedValue && selectedId) {
            setLoadingRecord((c)=>c + 1
            );
            const api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
            api.recordAction({
                actionName: 'show',
                resourceId: resourceId,
                recordId: selectedId
            }).then(({ data: data  })=>{
                setLoadedRecord(data.record);
            }).finally(()=>{
                setLoadingRecord((c)=>c - 1
                );
            });
        }
    }, [
        selectedValue,
        selectedId,
        resourceId
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: Boolean(error)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$reactselectasync)), {
        cacheOptions: true,
        value: selectedOption,
        styles: styles,
        defaultOptions: true,
        loadOptions: loadOptions,
        onChange: handleChange,
        isClearable: true,
        isDisabled: property.isDisabled,
        isLoading: loadingRecord,
        ...property.props
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message)));
};
var $c7fbf67fd58f86e7$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.withTheme($c7fbf67fd58f86e7$var$Edit);









const $ac0c4ebdef3e60fd$var$StyledLink = ($parcel$interopDefault($bdtG2$styledcomponents))($bdtG2$reactrouterdom.Link)`
  ${$bdtG2$adminjsdesignsystem.ButtonCSS};
  padding-left: ${({ theme: theme  })=>theme.space.xs
};
  padding-right: ${({ theme: theme  })=>theme.space.xs
};
`;
const $ac0c4ebdef3e60fd$var$ReferenceValue = (props)=>{
    const { property: property , record: record  } = props;
    const h = new $b992f9c849e9d14a$export$2e2bcd8739ae039();
    const refId = record.params[property.path];
    const populated = record.populated[property.path];
    const value = populated && populated.title || refId;
    if (!property.reference) throw new Error(`property: "${property.path}" does not have a reference`);
    if (populated && populated.recordActions.find((a)=>a.name === 'show'
    )) {
        const href = h.recordActionUrl({
            resourceId: property.reference,
            recordId: refId,
            actionName: 'show'
        });
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ac0c4ebdef3e60fd$var$StyledLink, {
            variant: "text",
            to: href
        }, value));
    }
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("span", null, value));
};
var $ac0c4ebdef3e60fd$export$2e2bcd8739ae039 = $ac0c4ebdef3e60fd$var$ReferenceValue;


class $373df2333bb45e8f$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property , record: record  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ac0c4ebdef3e60fd$export$2e2bcd8739ae039, {
            property: property,
            record: record
        })));
    }
}




class $5203ace22f218269$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property , record: record  } = this.props;
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ac0c4ebdef3e60fd$export$2e2bcd8739ae039, {
            property: property,
            record: record
        }));
    }
}







class $b0bcf71acc1be28c$var$Filter extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    constructor(props){
        super(props);
        this.api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
        this.options = [];
        this.loadOptions = this.loadOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(selected) {
        const { onChange: onChange , property: property  } = this.props;
        onChange(property.path, selected ? selected.value : '');
    }
    async loadOptions(inputValue) {
        const { property: property  } = this.props;
        const records = await this.api.searchRecords({
            resourceId: property.reference,
            query: inputValue
        });
        this.options = records.map((r)=>({
                value: r.id,
                label: r.title
            })
        );
        return this.options;
    }
    render() {
        const { property: property , filter: filter , theme: theme  } = this.props;
        const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
        const selected = (this.options || []).find((o)=>o.value === value
        );
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Label, null, property.label), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$reactselectasync)), {
            value: typeof selected === 'undefined' ? '' : selected,
            isClearable: true,
            cacheOptions: true,
            styles: $bdtG2$adminjsdesignsystem.filterStyles(theme),
            loadOptions: this.loadOptions,
            onChange: this.handleChange,
            defaultOptions: true
        })));
    }
}
var $b0bcf71acc1be28c$export$2e2bcd8739ae039 = $bdtG2$styledcomponents.withTheme($b0bcf71acc1be28c$var$Filter);




var $868a00aaec822b60$exports = {};

$parcel$export($868a00aaec822b60$exports, "show", () => $a1c1ca821470e652$export$2e2bcd8739ae039);
$parcel$export($868a00aaec822b60$exports, "edit", () => $6fb39ad78c68b270$export$2e2bcd8739ae039);


class $a1c1ca821470e652$export$2e2bcd8739ae039 extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    render() {
        const { property: property , record: record  } = this.props;
        const value = record.params[property.path] || '';
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ValueGroup, {
            label: property.label
        }, value.split(/(?:\r\n|\r|\n)/g).map((line, i)=>// eslint-disable-next-line react/no-array-index-key
            /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, {
                key: i
            }, line, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("br", null))
        )));
    }
}






const $6fb39ad78c68b270$var$Edit = (props)=>{
    var ref, ref1;
    const { onChange: onChange , property: property , record: record  } = props;
    var ref2;
    const propValue = (ref2 = (ref = record.params) === null || ref === void 0 ? void 0 : ref[property.path]) !== null && ref2 !== void 0 ? ref2 : '';
    const [value, setValue] = $bdtG2$react.useState(propValue);
    const error = (ref1 = record.errors) === null || ref1 === void 0 ? void 0 : ref1[property.path];
    $bdtG2$react.useEffect(()=>{
        if (value !== propValue) setValue(propValue);
    }, [
        propValue
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: Boolean(error)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Input, {
        as: "textarea",
        rows: (value.match(/\n/g) || []).length + 1,
        id: property.path,
        name: property.path,
        onChange: (e)=>setValue(e.target.value)
        ,
        onBlur: ()=>onChange(property.path, value)
        ,
        value: value,
        disabled: property.isDisabled,
        ...property.props
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};
var $6fb39ad78c68b270$export$2e2bcd8739ae039 = /*#__PURE__*/ $bdtG2$react.memo($6fb39ad78c68b270$var$Edit, $cedc48db088f0242$export$d293b9805507b639);




var $3055fa787265063e$exports = {};

$parcel$export($3055fa787265063e$exports, "edit", () => $29eccaee13921f8b$export$2e2bcd8739ae039);




const $29eccaee13921f8b$var$Edit = (props)=>{
    const { property: property , record: record , onChange: onChange  } = props;
    const propValue = record.params[property.path];
    const [value, setValue] = $bdtG2$react.useState(propValue);
    const error = record.errors && record.errors[property.path];
    const [isInput, setIsInput] = $bdtG2$react.useState(false);
    $bdtG2$react.useEffect(()=>{
        if (value !== propValue) setValue(propValue);
    }, [
        propValue
    ]);
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormGroup, {
        error: !!error
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($7dfabef4922f9e29$export$2e2bcd8739ae039, {
        property: property
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.InputGroup, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Input, {
        type: isInput ? 'input' : 'password',
        className: "input",
        id: property.path,
        name: property.path,
        onChange: (event)=>setValue(event.target.value)
        ,
        onBlur: ()=>onChange(property.path, value)
        ,
        onKeyDown: (e)=>e.keyCode === 13 && onChange(property.path, value)
        ,
        value: value !== null && value !== void 0 ? value : '',
        disabled: property.isDisabled,
        ...property.props
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
        variant: isInput ? 'primary' : 'text',
        type: "button",
        size: "icon",
        onClick: ()=>setIsInput(!isInput)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: "View"
    }))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.FormMessage, null, error && error.message)));
};
var $29eccaee13921f8b$export$2e2bcd8739ae039 = /*#__PURE__*/ $bdtG2$react.memo($29eccaee13921f8b$var$Edit, $cedc48db088f0242$export$d293b9805507b639);




let $78ba0334ac51626e$var$globalAny = {
};
try {
    $78ba0334ac51626e$var$globalAny = window;
} catch (error) {
    if (error.message !== 'window is not defined') throw error;
}
const $78ba0334ac51626e$var$types = {
    textarea: $868a00aaec822b60$exports,
    boolean: $459c0c0f46641950$exports,
    datetime: $6497088ade4f6fb4$exports,
    reference: $916e6f0b839ab165$exports,
    password: $3055fa787265063e$exports,
    date: $6497088ade4f6fb4$exports,
    richtext: $1e7c77b7e5e042d7$exports,
    string: $fa10bdef0b289d97$exports,
    number: $fa10bdef0b289d97$exports,
    float: $fa10bdef0b289d97$exports,
    mixed: null
};
/**
 * @load ./base-property-component.doc.md
 * @component
 * @name BasePropertyComponent
 * @subcategory Application
 * @class
 * @hideconstructor
 */ const $78ba0334ac51626e$export$2e2bcd8739ae039 = (props)=>{
    const { property: baseProperty , resource: resource , record: record , filter: filter , where: where , onChange: onChange  } = props;
    const property = $bdtG2$react.useMemo(()=>({
            ...baseProperty,
            // we fill the path if it is not there. That is why all the actual Component Renderers are
            // called with the path set to this root path. Next mixed and array components adds to this
            // path either index (for array) or subProperty name.
            path: baseProperty.path || baseProperty.propertyPath
        })
    , [
        baseProperty
    ]);
    const testId = `property-${where}-${property.path}`;
    let Component = $78ba0334ac51626e$var$types[property.type] && $78ba0334ac51626e$var$types[property.type][where] || $fa10bdef0b289d97$exports[where];
    if (property.components && property.components[where]) {
        const component = property.components[where];
        if (!component) throw new Error(`there is no "${property.path}.components.${where}"`);
        Component = $78ba0334ac51626e$var$globalAny.AdminJS.UserComponents[component];
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($4be80ad1c06c0fea$export$2e2bcd8739ae039, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
            "data-testid": testId
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Component, {
            property: property,
            resource: resource,
            record: record,
            filter: filter,
            onChange: onChange,
            where: where
        }))));
    }
    const Array = $4a841af88fefe403$exports[where];
    const Mixed = $58a06dc28713d0ce$exports[where];
    if (baseProperty.isArray) {
        if (!Array) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", null));
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Array, {
            ...props,
            property: property,
            ItemComponent: $78ba0334ac51626e$export$2e2bcd8739ae039,
            testId: testId
        }));
    }
    if (baseProperty.type === 'mixed') {
        if (!Mixed) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement("div", null));
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Mixed, {
            ...props,
            property: property,
            ItemComponent: $78ba0334ac51626e$export$2e2bcd8739ae039,
            testId: testId
        }));
    }
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($4be80ad1c06c0fea$export$2e2bcd8739ae039, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        "data-testid": testId
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Component, {
        property: property,
        resource: resource,
        record: record,
        filter: filter,
        onChange: onChange,
        where: where
    }))));
};














function $55ca7e3898e68caa$var$camelizePropertyType(type) {
    return {
        Edit: type.edit,
        Show: type.show,
        List: type.list,
        Filter: type.filter
    };
}
const $55ca7e3898e68caa$export$2e2bcd8739ae039 = Object.assign($78ba0334ac51626e$export$2e2bcd8739ae039, {
    DefaultType: $55ca7e3898e68caa$var$camelizePropertyType($fa10bdef0b289d97$exports),
    Boolean: $55ca7e3898e68caa$var$camelizePropertyType($459c0c0f46641950$exports),
    DateTime: $55ca7e3898e68caa$var$camelizePropertyType($6497088ade4f6fb4$exports),
    RichText: $55ca7e3898e68caa$var$camelizePropertyType($1e7c77b7e5e042d7$exports),
    Reference: $55ca7e3898e68caa$var$camelizePropertyType($916e6f0b839ab165$exports),
    TextArea: $55ca7e3898e68caa$var$camelizePropertyType($868a00aaec822b60$exports),
    Password: $55ca7e3898e68caa$var$camelizePropertyType($3055fa787265063e$exports)
});









const $069f95a8d22c252c$export$93218f85e882d95f = (props)=>{
    const { layoutElement: layoutElement , resource: resource , where: where , record: record , onChange: onChange  } = props;
    const { props: layoutProps , properties: propertyNames , layoutElements: innerLayoutElements , component: component ,  } = layoutElement;
    const { children: children , ...other } = layoutProps;
    const properties = propertyNames.map((name)=>resource.properties[name]
    );
    const Component = $bdtG2$adminjsdesignsystem[component];
    if (!Component) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        size: "sm",
        message: "Javascript Error",
        variant: "danger",
        py: "xl"
    }, "There is no component by the name of", /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Badge, {
        size: "sm",
        variant: "danger",
        mx: "default"
    }, component), "in @adminjs/design-system. Change", /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Badge, {
        size: "sm",
        variant: "danger",
        mx: "default"
    }, `@${component}`), "to available component like @Header"));
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Component, other, properties.map((property)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
            flexGrow: 1,
            key: property.propertyPath
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($55ca7e3898e68caa$export$2e2bcd8739ae039, {
            key: property.propertyPath,
            where: where,
            property: property,
            resource: resource,
            record: record,
            onChange: onChange
        }))
    ), innerLayoutElements.map((innerLayoutElement, i)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($069f95a8d22c252c$export$93218f85e882d95f, {
            ...props,
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            layoutElement: innerLayoutElement
        })
    ), children));
};
var $069f95a8d22c252c$export$2e2bcd8739ae039 = $069f95a8d22c252c$export$93218f85e882d95f;


const $fc571d75e2259f9e$export$2e2bcd8739ae039 = (props)=>{
    const { record: initialRecord , resource: resource , action: action  } = props;
    const { record: record , handleChange: handleChange , submit: handleSubmit , loading: loading , setRecord: setRecord ,  } = $b36785fa5b135a99$export$2e2bcd8739ae039(initialRecord, resource.id);
    const { translateButton: translateButton  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const history = $bdtG2$reactrouter.useHistory();
    $bdtG2$react.useEffect(()=>{
        if (initialRecord) setRecord(initialRecord);
    }, [
        initialRecord
    ]);
    const submit = (event)=>{
        event.preventDefault();
        handleSubmit().then((response)=>{
            if (response.data.redirectUrl) history.push($974f1534ed0256d1$export$5873a8025a5d100f(response.data.redirectUrl));
            // if record has id === has been created
            if (response.data.record.id) handleChange({
                params: {
                },
                populated: {
                },
                errors: {
                }
            });
        });
        return false;
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        as: "form",
        onSubmit: submit,
        flex: true,
        flexGrow: 1,
        flexDirection: "column"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($b3cd7156ef1d8ec2$export$2e2bcd8739ae039, props) : null, action.layout ? action.layout.map((layoutElement, i)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($069f95a8d22c252c$export$2e2bcd8739ae039, {
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            layoutElement: layoutElement,
            ...props,
            where: "edit",
            onChange: handleChange,
            record: record
        })
    ) : resource.editProperties.map((property)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($55ca7e3898e68caa$export$2e2bcd8739ae039, {
            key: property.propertyPath,
            where: "edit",
            onChange: handleChange,
            property: property,
            resource: resource,
            record: record
        })
    )), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerFooter, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
        variant: "primary",
        size: "lg",
        type: "submit",
        "data-testid": "button-save"
    }, loading ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: "Fade",
        spin: true
    }) : null, translateButton('save', resource.id)))));
};











const $7e38640a3e4c1b63$export$2e2bcd8739ae039 = (props)=>{
    const { record: initialRecord , resource: resource , action: action  } = props;
    const { record: record , handleChange: handleChange , submit: handleSubmit , loading: loading , setRecord: setRecord ,  } = $b36785fa5b135a99$export$2e2bcd8739ae039(initialRecord, resource.id);
    const { translateButton: translateButton  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const history = $bdtG2$reactrouter.useHistory();
    $bdtG2$react.useEffect(()=>{
        if (initialRecord) setRecord(initialRecord);
    }, [
        initialRecord
    ]);
    const submit = (event)=>{
        event.preventDefault();
        handleSubmit().then((response)=>{
            if (response.data.redirectUrl) history.push($974f1534ed0256d1$export$5873a8025a5d100f(response.data.redirectUrl));
        });
        return false;
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        as: "form",
        onSubmit: submit,
        flex: true,
        flexGrow: 1,
        flexDirection: "column"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($b3cd7156ef1d8ec2$export$2e2bcd8739ae039, props) : null, action.layout ? action.layout.map((layoutElement, i)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($069f95a8d22c252c$export$2e2bcd8739ae039, {
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            layoutElement: layoutElement,
            ...props,
            where: "edit",
            onChange: handleChange,
            record: record
        })
    ) : resource.editProperties.map((property)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($55ca7e3898e68caa$export$2e2bcd8739ae039, {
            key: property.propertyPath,
            where: "edit",
            onChange: handleChange,
            property: property,
            resource: resource,
            record: record
        })
    )), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerFooter, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
        variant: "primary",
        size: "lg",
        type: "submit",
        "data-testid": "button-save"
    }, loading ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: "Fade",
        spin: true
    }) : null, translateButton('save', resource.id)))));
};







/**
 * @name ShowAction
 * @category Actions
 * @description Shows a given record.
 * @component
 * @private
 */ const $164b0da37b40429f$export$2e2bcd8739ae039 = (props)=>{
    const { resource: resource , record: record , action: action  } = props;
    const properties = resource.showProperties;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($b3cd7156ef1d8ec2$export$2e2bcd8739ae039, props) : null, action.layout ? action.layout.map((layoutElement, i)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($069f95a8d22c252c$export$2e2bcd8739ae039, {
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            layoutElement: layoutElement,
            ...props,
            where: "show"
        })
    ) : properties.map((property)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($55ca7e3898e68caa$export$2e2bcd8739ae039, {
            key: property.propertyPath,
            where: "show",
            property: property,
            resource: resource,
            record: record
        })
    )));
};












const $80a7b6d78f600251$export$79693fdaa4661ff2 = (isTitle)=>[
        isTitle ? 'table-cell' : 'none',
        isTitle ? 'table-cell' : 'none',
        'table-cell',
        'table-cell', 
    ]
;





const $eb4ae700d36c13d8$export$76d5205c62e66a14 = (props)=>{
    const { resource: resource , record: recordFromProps , actionPerformed: actionPerformed , isLoading: isLoading , onSelect: onSelect , isSelected: isSelected ,  } = props;
    const [record, setRecord] = $bdtG2$react.useState(recordFromProps);
    const history = $bdtG2$reactrouterdom.useHistory();
    const handleActionCallback = $bdtG2$react.useCallback((actionResponse)=>{
        if (actionResponse.record && !actionResponse.redirectUrl) setRecord($d0191689b851d0f7$export$2e2bcd8739ae039(record, actionResponse));
        else if (actionPerformed) actionPerformed(actionResponse);
    }, [
        actionPerformed,
        record
    ]);
    const actionResponseHandler = $30cf2d580f3a6628$export$5002a7fa61628c70(handleActionCallback);
    $bdtG2$react.useEffect(()=>{
        setRecord(recordFromProps);
    }, [
        recordFromProps
    ]);
    const { recordActions: recordActions  } = record;
    const show = record.recordActions.find(({ name: name  })=>name === 'show'
    );
    const edit = record.recordActions.find(({ name: name  })=>name === 'edit'
    );
    const action = show || edit;
    const handleClick = (event)=>{
        const targetTagName = event.target.tagName.toLowerCase();
        if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') $f43cdc62018668df$export$3c619d28756b9edd({
            action: action,
            params: {
                resourceId: resource.id,
                recordId: record.id
            },
            actionResponseHandler: actionResponseHandler,
            push: history.push
        })(event);
    };
    const actionParams = {
        resourceId: resource.id,
        recordId: record.id
    };
    const handleActionClick = (event, sourceAction)=>$f43cdc62018668df$export$3c619d28756b9edd({
            action: sourceAction,
            params: actionParams,
            actionResponseHandler: actionResponseHandler,
            push: history.push
        })(event)
    ;
    const buttons = [
        {
            icon: 'OverflowMenuHorizontal',
            variant: 'light',
            label: undefined,
            'data-testid': 'actions-dropdown',
            buttons: $706f7333c1377a0e$export$333d5787bbdf9f79({
                actions: recordActions,
                params: actionParams,
                handleClick: handleActionClick
            })
        }
    ];
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableRow, {
        onClick: handleClick,
        "data-id": record.id
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, {
        className: isSelected ? 'selected' : 'not-selected'
    }, onSelect && record.bulkActions.length ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.CheckBox, {
        onChange: ()=>onSelect(record)
        ,
        checked: isSelected
    }) : null), resource.listProperties.map((property)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, {
            style: {
                cursor: 'pointer'
            },
            key: property.propertyPath,
            "data-property-name": property.propertyPath,
            display: $80a7b6d78f600251$export$79693fdaa4661ff2(property.isTitle)
        }, isLoading ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Placeholder, {
            style: {
                height: 14
            }
        }) : /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($55ca7e3898e68caa$export$2e2bcd8739ae039, {
            key: property.propertyPath,
            where: "list",
            property: property,
            resource: resource,
            record: record
        }))
    ), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, {
        key: "options"
    }, recordActions.length ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ButtonGroup, {
        buttons: buttons
    }) : '')));
};
var $eb4ae700d36c13d8$export$2e2bcd8739ae039 = $eb4ae700d36c13d8$export$76d5205c62e66a14;









class $04b04b81f8c3c521$var$SortLink extends ($parcel$interopDefault($bdtG2$react)).PureComponent {
    constructor(props){
        super(props);
        this.isActive = this.isActive.bind(this);
    }
    isActive() {
        const { sortBy: sortBy , property: property  } = this.props;
        return sortBy === property.propertyPath;
    }
    render() {
        const { property: property , location: location , direction: direction  } = this.props;
        const query = new URLSearchParams(location.search);
        const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
        const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
        query.set('direction', oppositeDirection);
        query.set('sortBy', property.propertyPath);
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reactrouterdom.NavLink, {
            to: {
                search: query.toString()
            },
            className: $bdtG2$adminjsdesignsystem.cssClass('SortLink')
        }, property.label, this.isActive() ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
            icon: sortedByIcon,
            color: "primary100",
            ml: "default"
        }) : ''));
    }
}
var $04b04b81f8c3c521$export$2e2bcd8739ae039 = $bdtG2$reactrouterdom.withRouter($04b04b81f8c3c521$var$SortLink);


const $bc76a3d4d58d69f9$export$4c7c9e899d017fe8 = (props)=>{
    const { property: property , titleProperty: titleProperty , display: display  } = props;
    const isMain = property.propertyPath === titleProperty.propertyPath;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, {
        className: isMain ? 'main' : undefined,
        display: display
    }, property.isSortable ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($04b04b81f8c3c521$export$2e2bcd8739ae039, props) : property.label));
};
var $bc76a3d4d58d69f9$export$2e2bcd8739ae039 = $bc76a3d4d58d69f9$export$4c7c9e899d017fe8;



const $ca98de10426e1435$export$88d121cbbf5b2fc0 = (props)=>{
    const { titleProperty: titleProperty , properties: properties , sortBy: sortBy , direction: direction , onSelectAll: onSelectAll , selectedAll: selectedAll  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableHead, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableRow, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, null, onSelectAll ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.CheckBox, {
        style: {
            marginLeft: 5
        },
        onChange: ()=>onSelectAll()
        ,
        checked: selectedAll
    }) : null), properties.map((property)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bc76a3d4d58d69f9$export$2e2bcd8739ae039, {
            display: $80a7b6d78f600251$export$79693fdaa4661ff2(property.isTitle),
            key: property.propertyPath,
            titleProperty: titleProperty,
            property: property,
            sortBy: sortBy,
            direction: direction
        })
    ), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, {
        key: "actions",
        style: {
            width: 80
        }
    }))));
};
var $ca98de10426e1435$export$2e2bcd8739ae039 = $ca98de10426e1435$export$88d121cbbf5b2fc0;






/**
 * @private
 *
 * @classdesc
 * Overrides one of the component form AdminJS core when user pass its name to
 * {@link AdminJS.bundle} method.
 *
 * If case of being overridden, component receives additional prop: `OriginalComponent`
 *
 * @example
 * AdminJS.bundle('./path/to/component', 'SidebarFooter')
 */ function $44d6135a073fc03f$export$2e2bcd8739ae039(OriginalComponent, name) {
    // ssr
    if (typeof window === 'undefined') return OriginalComponent;
    const WrapperComponent = (props)=>{
        let globalAny = window;
        globalAny = window;
        let Component = OriginalComponent;
        if (globalAny.AdminJS && globalAny.AdminJS.UserComponents && globalAny.AdminJS.UserComponents[name]) {
            Component = globalAny.AdminJS.UserComponents[name];
            return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Component, {
                ...props,
                OriginalComponent: OriginalComponent
            }));
        }
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Component, props));
    };
    return WrapperComponent;
}



const $ab7914e7b8ee67bb$var$NoRecordsOriginal = (props)=>{
    const { resource: resource  } = props;
    const { translateButton: translateButton , translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const canCreate = resource.resourceActions.find((a)=>a.name === 'new'
    );
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.InfoBox, {
        title: translateMessage('noRecords', resource.id)
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, {
        mb: "xxl"
    }, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($422ac53b0267e112$export$2e2bcd8739ae039, {
        action: canCreate,
        resourceId: resource.id
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
        variant: "primary"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: "Add"
    }), translateButton('createFirstRecord', resource.id))) : ''));
};
// This hack prevents rollup from throwing an error
const $ab7914e7b8ee67bb$export$cdb065a719ea8884 = $44d6135a073fc03f$export$2e2bcd8739ae039($ab7914e7b8ee67bb$var$NoRecordsOriginal, 'NoRecords');
var $ab7914e7b8ee67bb$export$2e2bcd8739ae039 = $ab7914e7b8ee67bb$export$cdb065a719ea8884;






const $868870ad9fb010d8$var$getBulkActionsFromRecords = (records)=>{
    const actions = Object.values(records.reduce((memo, record)=>({
            ...memo,
            ...record.bulkActions.reduce((actionsMemo, action)=>({
                    ...actionsMemo,
                    [action.name]: action
                })
            , {
            })
        })
    , {
    }));
    return actions;
};
var $868870ad9fb010d8$export$2e2bcd8739ae039 = $868870ad9fb010d8$var$getBulkActionsFromRecords;




const $fcc389fb1eb77c34$export$1dc357f840c78d0e = (props)=>{
    const { resource: resource , selectedRecords: selectedRecords  } = props;
    const { translateLabel: translateLabel  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    const history = $bdtG2$reactrouter.useHistory();
    const actionResponseHandler = $30cf2d580f3a6628$export$5002a7fa61628c70();
    if (!selectedRecords || !selectedRecords.length) return null;
    const params = {
        resourceId: resource.id,
        recordIds: selectedRecords.map((records)=>records.id
        )
    };
    const handleActionClick = (event, sourceAction)=>$f43cdc62018668df$export$3c619d28756b9edd({
            action: sourceAction,
            params: params,
            actionResponseHandler: actionResponseHandler,
            push: history.push
        })(event)
    ;
    const bulkButtons = $706f7333c1377a0e$export$333d5787bbdf9f79({
        actions: $868870ad9fb010d8$export$2e2bcd8739ae039(selectedRecords),
        params: params,
        handleClick: handleActionClick
    });
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCaption, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        flex: true,
        py: "sm",
        alignItems: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Title, {
        mr: "lg"
    }, translateLabel('selectedRecords', resource.id, {
        selected: selectedRecords.length
    })), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.ButtonGroup, {
        size: "sm",
        rounded: true,
        buttons: bulkButtons
    }))));
};
var $fcc389fb1eb77c34$export$2e2bcd8739ae039 = $fcc389fb1eb77c34$export$1dc357f840c78d0e;


const $3b02ca142dbaaf6d$export$4ccd125e9b4f42e = (props)=>{
    const { resource: resource , records: records , actionPerformed: actionPerformed , sortBy: sortBy , direction: direction , isLoading: isLoading , onSelect: onSelect , selectedRecords: selectedRecords , onSelectAll: onSelectAll ,  } = props;
    if (!records.length) {
        if (isLoading) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Loader, null));
        return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ab7914e7b8ee67bb$export$2e2bcd8739ae039, {
            resource: resource
        }));
    }
    const selectedAll = selectedRecords && !!records.find((record)=>selectedRecords.find((selected)=>selected.id === record.id
        )
    );
    const recordsHaveBulkAction = !!records.find((record)=>record.bulkActions.length
    );
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Table, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($fcc389fb1eb77c34$export$2e2bcd8739ae039, {
        resource: resource,
        selectedRecords: selectedRecords
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($ca98de10426e1435$export$2e2bcd8739ae039, {
        properties: resource.listProperties,
        titleProperty: resource.titleProperty,
        direction: direction,
        sortBy: sortBy,
        onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
        selectedAll: selectedAll
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableBody, null, records.map((record)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($eb4ae700d36c13d8$export$2e2bcd8739ae039, {
            record: record,
            resource: resource,
            key: record.id,
            actionPerformed: actionPerformed,
            isLoading: isLoading,
            onSelect: onSelect,
            isSelected: selectedRecords && !!selectedRecords.find((selected)=>selected.id === record.id
            )
        })
    ))));
};
var $3b02ca142dbaaf6d$export$2e2bcd8739ae039 = $3b02ca142dbaaf6d$export$4ccd125e9b4f42e;





const $d814d0800de096d0$export$2e2bcd8739ae039 = ({ resource: resource , setTag: setTag  })=>{
    const { records: records , loading: loading , direction: direction , sortBy: sortBy , page: page , total: total , fetchData: fetchData , perPage: perPage ,  } = $7013cfa172558aeb$export$2e2bcd8739ae039(resource.id);
    const { selectedRecords: selectedRecords , handleSelect: handleSelect , handleSelectAll: handleSelectAll , setSelectedRecords: setSelectedRecords ,  } = $1e737ea8439a81aa$export$2e2bcd8739ae039(records);
    const location = $bdtG2$reactrouter.useLocation();
    const history = $bdtG2$reactrouter.useHistory();
    $bdtG2$react.useEffect(()=>{
        if (setTag) setTag(total.toString());
    }, [
        total
    ]);
    $bdtG2$react.useEffect(()=>{
        setSelectedRecords([]);
    }, [
        resource.id
    ]);
    $bdtG2$react.useEffect(()=>{
        const search = new URLSearchParams(location.search);
        if (search.get($974f1534ed0256d1$export$a95adddff314131f)) setSelectedRecords([]);
    }, [
        location.search
    ]);
    const handleActionPerformed = ()=>fetchData()
    ;
    const handlePaginationChange = (pageNumber)=>{
        const search = new URLSearchParams(location.search);
        search.set('page', pageNumber.toString());
        history.push({
            search: search.toString()
        });
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Box, {
        variant: "white"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($3b02ca142dbaaf6d$export$2e2bcd8739ae039, {
        resource: resource,
        records: records,
        actionPerformed: handleActionPerformed,
        onSelect: handleSelect,
        onSelectAll: handleSelectAll,
        selectedRecords: selectedRecords,
        direction: direction,
        sortBy: sortBy,
        isLoading: loading
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, {
        mt: "xl",
        textAlign: "center"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Pagination, {
        page: page,
        perPage: perPage,
        total: total,
        onChange: handlePaginationChange
    }))));
};









const $7fe12c84e209a12e$var$mapDispatchToProps = (dispatch)=>({
        addNotice: (notice)=>dispatch($da6d8052cce2288f$export$44f16c85cfa939fb(notice))
    })
;
/**
 * Higher Order Component which allows you to post notice messages from your components
 *
 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
 *
 * ```javascript
 * import { withNotice } from 'adminjs/core'
 *
 * const MY_MESSAGE = {
 *   message: 'I am toast message',
 *   type: 'success',
 * }
 * const MyCustomComponent = ({ addNotice }) => {
 *   return (
 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
 *   )
 * }
 * export default withNotice(MyCustomComponent)
 * ```
 *
 * @component
 * @subcategory HOC
 */ const $7fe12c84e209a12e$export$2e2bcd8739ae039 = (Component)=>$bdtG2$reactredux.connect(null, $7fe12c84e209a12e$var$mapDispatchToProps)(Component)
;





/**
 * @name ShowAction
 * @category Actions
 * @description Shows a given record.
 * @component
 * @private
 */ const $9506faed8f11f117$var$BulkDelete = (props)=>{
    const { resource: resource , records: records , action: action , addNotice: addNotice , history: history  } = props;
    const [loading, setLoading] = $bdtG2$react.useState(false);
    const { translateMessage: translateMessage , translateButton: translateButton  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    if (!records) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id)));
    const handleClick = ()=>{
        const api = new $9f4269f78c13d196$export$2e2bcd8739ae039();
        setLoading(true);
        const recordIds = records.map((r)=>r.id
        );
        api.bulkAction({
            resourceId: resource.id,
            actionName: action.name,
            recordIds: recordIds,
            method: 'post'
        }).then((response)=>{
            setLoading(false);
            if (response.data.notice) addNotice(response.data.notice);
            if (response.data.redirectUrl) {
                const search = new URLSearchParams(window.location.search);
                // bulk function have recordIds in the URL so it has to be stripped before redirect
                search.delete('recordIds');
                history.push($974f1534ed0256d1$export$5873a8025a5d100f(response.data.redirectUrl, search.toString()));
            }
        }).catch((error)=>{
            setLoading(false);
            addNotice({
                message: translateMessage('bulkDeleteError', resource.id),
                type: 'error'
            });
            throw error;
        });
    };
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(($parcel$interopDefault($bdtG2$react)).Fragment, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($b3cd7156ef1d8ec2$export$2e2bcd8739ae039, {
        omitActions: true,
        ...props
    }) : null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        mb: "xxl",
        variant: "danger",
        message: translateMessage('theseRecordsWillBeRemoved', resource.id, {
            count: records.length
        })
    }), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Table, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableBody, null, records.map((record)=>/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableRow, {
            key: record.id
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.TableCell, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($55ca7e3898e68caa$export$2e2bcd8739ae039, {
            where: "list",
            property: resource.titleProperty,
            resource: resource,
            record: record
        })))
    )))), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.DrawerFooter, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Button, {
        variant: "primary",
        size: "lg",
        onClick: handleClick
    }, loading ? /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Icon, {
        icon: "Fade",
        spin: true
    }) : null, translateButton('confirmRemovalMany', resource.id, {
        count: records.length
    })))));
};
const $9506faed8f11f117$export$2e2bcd8739ae039 = $7fe12c84e209a12e$export$2e2bcd8739ae039($bdtG2$reactrouter.withRouter($9506faed8f11f117$var$BulkDelete));












const $e89ff2579d77fa4c$export$e324594224ef24da = {
    new: $fc571d75e2259f9e$export$2e2bcd8739ae039,
    edit: $7e38640a3e4c1b63$export$2e2bcd8739ae039,
    show: $164b0da37b40429f$export$2e2bcd8739ae039,
    list: $d814d0800de096d0$export$2e2bcd8739ae039,
    bulkDelete: $9506faed8f11f117$export$2e2bcd8739ae039
};


const $47e2b0daa8bfc137$export$1a17f703619b2370 = 'https://adminjs.co';
const $47e2b0daa8bfc137$export$61a3f0cbebd488f6 = {
    rootPath: '/admin',
    logoutPath: '/admin/logout',
    loginPath: '/admin/login'
};
const $47e2b0daa8bfc137$export$29a0348e99bd8a42 = '.adminjs';



const $4666cd2f26d9065f$export$a83dc1d12dcdebf4 = (props)=>{
    const { resource: resource , action: action , record: record , records: records , setTag: setTag  } = props;
    const documentationLink = [
        $47e2b0daa8bfc137$export$1a17f703619b2370,
        'BaseAction.html'
    ].join('/');
    const { translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    let Action = $e89ff2579d77fa4c$export$e324594224ef24da[action.name];
    if (action.component) Action = AdminJS.UserComponents[action.component];
    if (Action) return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($4be80ad1c06c0fea$export$2e2bcd8739ae039, null, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement(Action, {
        action: action,
        resource: resource,
        record: record,
        records: records,
        setTag: setTag
    })));
    return Action || /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        variant: "danger"
    }, translateMessage('noActionComponent'), /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$reacti18next.Trans, {
        key: "messages.buttons.seeTheDocumentation"
    }, "See:", /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Link, {
        ml: "default",
        href: documentationLink
    }, "the documentation")));
};
var $4666cd2f26d9065f$export$2e2bcd8739ae039 = $4666cd2f26d9065f$export$a83dc1d12dcdebf4;

















const $ee5f851a165ad6ec$var$DRAWER_PORTAL_ID = 'drawerPortal';
const $ee5f851a165ad6ec$export$6bb43caaf29f3aa0 = ({ children: children , width: width  })=>{
    const [drawerElement, setDrawerElement] = $bdtG2$react.useState(window.document.getElementById($ee5f851a165ad6ec$var$DRAWER_PORTAL_ID));
    if (!drawerElement && window) {
        const innerWrapper = window.document.createElement('div');
        const DrawerWrapper = /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$styledcomponents.ThemeProvider, {
            theme: window.THEME
        }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Drawer, {
            id: $ee5f851a165ad6ec$var$DRAWER_PORTAL_ID,
            className: "hidden"
        }));
        window.document.body.appendChild(innerWrapper);
        $bdtG2$reactdom.render(DrawerWrapper, innerWrapper, ()=>{
            setDrawerElement(window.document.getElementById($ee5f851a165ad6ec$var$DRAWER_PORTAL_ID));
        });
    }
    $bdtG2$react.useEffect(()=>{
        if (drawerElement) {
            drawerElement.classList.remove('hidden');
            if (width) drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
            return ()=>{
                drawerElement.style.width = $bdtG2$adminjsdesignsystem.DEFAULT_DRAWER_WIDTH;
                drawerElement.classList.add('hidden');
            };
        }
        return ()=>undefined
        ;
    }, [
        drawerElement
    ]);
    if (!drawerElement) return null;
    return(/*#__PURE__*/ $bdtG2$reactdom.createPortal(children, drawerElement));
};
var $ee5f851a165ad6ec$export$2e2bcd8739ae039 = $ee5f851a165ad6ec$export$6bb43caaf29f3aa0;











/**
 * @class
 * Prints error message
 *
 * @component
 * @private
 * @example
 * return (
 * <ErrorMessageBox title={'Some error'}>
 *   <p>Text below the title</p>
 * </ErrorMessageBox>
 * )
 */ const $515161e43aa9413b$export$a1f51683a6ae214b = (props)=>{
    const { children: children , title: title , testId: testId  } = props;
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        "data-testid": testId,
        message: title
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, null, children)));
};
const $515161e43aa9413b$export$8aa7732207291c76 = (props)=>{
    const { resourceId: resourceId  } = props;
    const { translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        message: "404 - PAGE NOT FOUND",
        "data-testid": "NoResourceError",
        variant: "info",
        m: "xxl"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, null, translateMessage('error404Resource', resourceId, {
        resourceId: resourceId
    }))));
};
const $515161e43aa9413b$export$8aaa845cb8e09c32 = (props)=>{
    const { resourceId: resourceId , actionName: actionName  } = props;
    const { translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        message: "404 - PAGE NOT FOUND",
        "data-testid": "NoActionError",
        variant: "info",
        m: "xxl"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, null, translateMessage('error404Action', resourceId, {
        resourceId: resourceId,
        actionName: actionName
    }))));
};
const $515161e43aa9413b$export$17264c51b1eea1d5 = (props)=>{
    const { resourceId: resourceId , recordId: recordId  } = props;
    const { translateMessage: translateMessage  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.MessageBox, {
        message: "404 - PAGE NOT FOUND",
        "data-testid": "NoRecordError",
        variant: "info",
        m: "xxl"
    }, /*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Text, null, translateMessage('error404Record', resourceId, {
        resourceId: resourceId,
        recordId: recordId
    }))));
};


































/**
 * Groups resources by sections and renders the list in {@link Sidebar}
 *
 * ### Usage
 *
 * ```
 * import { SidebarResourceSection } from 'adminjs`
 * ```
 *
 * @component
 * @subcategory Application
 * @name SidebarResourceSection
 */ const $51298d0738e85ac1$var$SidebarResourceSectionOriginal = ({ resources: resources  })=>{
    const elements = $0dd229611dcc9113$export$8dda0c21d4d87ce9(resources);
    const { translateLabel: translateLabel  } = $90a7b0831dd0c2e0$export$9fc83ad70ead8663();
    return(/*#__PURE__*/ ($parcel$interopDefault($bdtG2$react)).createElement($bdtG2$adminjsdesignsystem.Navigation, {
        label: translateLabel('navigation'),
        elements: elements
    }));
};
// Rollup cannot handle type exports well - that is why we need to do this hack with
// exporting default and named SidebarResourceSection
const $51298d0738e85ac1$export$40132e0ed5cf0621 = $44d6135a073fc03f$export$2e2bcd8739ae039($51298d0738e85ac1$var$SidebarResourceSectionOriginal, 'SidebarResourceSection');
var $51298d0738e85ac1$export$2e2bcd8739ae039 = $51298d0738e85ac1$export$40132e0ed5cf0621;

















window.reactComponents = {
};
window.vueComponents = {
};
window.React = ($parcel$interopDefault($bdtG2$react));
window.ReactDOM = ($parcel$interopDefault($bdtG2$reactdom));
window.ReactWrapper = (/*@__PURE__*/$parcel$interopDefault($0944c33215dbc4d1$exports));
window._CustomWrapper = $8e8b73ff7f77f806$export$2e2bcd8739ae039;
reactComponents['ActionButton'] = $422ac53b0267e112$export$2e2bcd8739ae039;
reactComponents['ActionHeader'] = $b3cd7156ef1d8ec2$export$2e2bcd8739ae039;
reactComponents['Badge'] = $fa79237ecead5fba$export$2e2bcd8739ae039;
reactComponents['BaseActionComponent'] = $4666cd2f26d9065f$export$2e2bcd8739ae039;
reactComponents['BasePropertyComponent'] = $78ba0334ac51626e$export$2e2bcd8739ae039;
reactComponents['Box'] = $2c52b13a4df281b0$export$2e2bcd8739ae039;
reactComponents['Breadcrumbs'] = $3e29d36d0955306c$export$2e2bcd8739ae039;
reactComponents['Button'] = $0dd800caa134a887$export$2e2bcd8739ae039;
reactComponents['ButtonGroup'] = $35b952f96e8635a0$export$2e2bcd8739ae039;
reactComponents['CheckBox'] = $dbbcd02bf2a1ec7c$export$2e2bcd8739ae039;
reactComponents['CurrentUserNav'] = $924140cb52eb5cfc$export$2e2bcd8739ae039;
reactComponents['DatePicker'] = $0f93b5046d4adeba$export$2e2bcd8739ae039;
reactComponents['Drawer'] = $3c4efdbd0175199f$export$2e2bcd8739ae039;
reactComponents['DrawerContent'] = $974ac57c7517d250$export$2e2bcd8739ae039;
reactComponents['DrawerFooter'] = $889ea01d4cc2d306$export$2e2bcd8739ae039;
reactComponents['DrawerPortal'] = $ee5f851a165ad6ec$export$2e2bcd8739ae039;
reactComponents['DropDown'] = $d681bfadb6d87f0d$export$2e2bcd8739ae039;
reactComponents['DropDownItem'] = $afe9cf61aa2798db$export$2e2bcd8739ae039;
reactComponents['DropDownMenu'] = $80efb411ce5c6c0e$export$2e2bcd8739ae039;
reactComponents['DropDownTrigger'] = $3c09d3d12d22062f$export$2e2bcd8739ae039;
reactComponents['DropZone'] = $8d3c9d8ffb7507d0$export$2e2bcd8739ae039;
reactComponents['DropZoneItem'] = $41f6200079e8f2f8$export$2e2bcd8739ae039;
reactComponents['ErrorMessageBox'] = $515161e43aa9413b$export$a1f51683a6ae214b;
reactComponents['FormGroup'] = $691a66a4efa7b292$export$2e2bcd8739ae039;
reactComponents['FormMessage'] = $93558d16da977332$export$2e2bcd8739ae039;
reactComponents['Header'] = $9aacc82a46d56c05$export$2e2bcd8739ae039;
reactComponents['Icon'] = $67b4a25f1ebac759$export$2e2bcd8739ae039;
reactComponents['Illustration'] = $c6f3d240776eb0f4$export$2e2bcd8739ae039;
reactComponents['InfoBox'] = $a41ffd1dc7be84ed$export$2e2bcd8739ae039;
reactComponents['Input'] = $abe4556b45ee7c67$export$2e2bcd8739ae039;
reactComponents['InputGroup'] = $a737b12ace361553$export$2e2bcd8739ae039;
reactComponents['Label'] = $81442ec7a17ae595$export$2e2bcd8739ae039;
reactComponents['Link'] = $2a3c473bef742706$export$2e2bcd8739ae039;
reactComponents['Loader'] = $a64a937b26fbcfe4$export$2e2bcd8739ae039;
reactComponents['LoggedUser'] = $8382c5c640d17fff$export$2e2bcd8739ae039;
reactComponents['MessageBox'] = $2553bebb598d545c$export$2e2bcd8739ae039;
reactComponents['Modal'] = $2864a0d049e5f5b2$export$2b77a92f1a5ad772;
reactComponents['ModalInline'] = $41cb3084cf95c3e2$export$215f7f0f16811f37;
reactComponents['NavGroup'] = $5a9c4e1f267f4e70$export$2e2bcd8739ae039;
reactComponents['Navigation'] = $bb21f3a6e8a73e40$export$b8a61e5c71402559;
reactComponents['NavigationElement'] = $9bc5b2c2c7487c3a$export$111d1dbff469cc4e;
reactComponents['Pagination'] = $1a9d16bf2646267f$export$2e2bcd8739ae039;
reactComponents['Placeholder'] = $289bbaee8161a6b5$export$2e2bcd8739ae039;
reactComponents['Radio'] = $6fcafd7ceb46f118$export$2e2bcd8739ae039;
reactComponents['RecordsTable'] = $3b02ca142dbaaf6d$export$2e2bcd8739ae039;
reactComponents['RecordsTableHeader'] = $ca98de10426e1435$export$2e2bcd8739ae039;
reactComponents['RichText'] = $be35932779fc965f$export$2e2bcd8739ae039;
reactComponents['Section'] = $718cc359719db255$export$2e2bcd8739ae039;
reactComponents['ShowAction'] = $9506faed8f11f117$export$2e2bcd8739ae039;
reactComponents['ShowAction'] = $164b0da37b40429f$export$2e2bcd8739ae039;
reactComponents['SidebarResourceSection'] = $51298d0738e85ac1$export$2e2bcd8739ae039;
reactComponents['Step'] = $83e6c5cd3575ffa9$export$2e2bcd8739ae039;
reactComponents['Stepper'] = $a7b936cd58933b62$export$2e2bcd8739ae039;
reactComponents['Table'] = $6059af701e3f86c1$export$2e2bcd8739ae039;
reactComponents['TableBody'] = $498b1cc8642d7d1d$export$2e2bcd8739ae039;
reactComponents['TableCaption'] = $be4b5effb91236b9$export$2e2bcd8739ae039;
reactComponents['TableCell'] = $a038ce080f802271$export$2e2bcd8739ae039;
reactComponents['TableHead'] = $9de7e0cd919163b7$export$2e2bcd8739ae039;
reactComponents['TableRow'] = $702bcc37234d8216$export$2e2bcd8739ae039;
reactComponents['Text'] = $856c8c0ad8a28036$export$2e2bcd8739ae039;
reactComponents['TextArea'] = $72339b4bedcfaff0$export$2e2bcd8739ae039;
reactComponents['Tooltip'] = $72312c277971617b$export$28c660c63b792dea;
reactComponents['TooltipControl'] = $c3dc0814d1702094$export$2e2bcd8739ae039;
reactComponents['TooltipContent'] = $28739a22f2fd2c74$export$2e2bcd8739ae039;
reactComponents['ValueGroup'] = $496fd306f49f5af2$export$2e2bcd8739ae039;
reactComponents['withNotice'] = $7fe12c84e209a12e$export$2e2bcd8739ae039;


//# sourceMappingURL=index.js.map
