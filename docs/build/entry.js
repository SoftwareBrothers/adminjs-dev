require("./entry.css");var e=require("react"),t=require("react-dom"),r=require("brace"),o=require("react-ace"),l=require("react-frame-component");require("brace/mode/jsx"),require("brace/theme/monokai");var a=require("react-router-dom"),n=require("redux"),i=require("react-redux"),c=require("styled-components"),s=require("styled-system"),d=require("polished"),p=require("@carbon/icons-react"),m=require("react-currency-input-field"),u=require("react-datepicker"),h=require("date-fns/parseISO"),b=require("quill"),f=require("jw-paginate"),g=require("axios"),q=require("flat"),k=require("lodash/startCase"),v=require("react-router"),y=require("react-i18next");require("i18next");var x=require("@adminjs/design-system"),w=require("react-beautiful-dnd"),C=require("react-select"),E=require("react-select/async");function _(e){return e&&e.__esModule?e.default:e}function $(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},S={},z={},B=L.parcelRequire64c1;null==B&&((B=function(e){if(e in S)return S[e].exports;if(e in z){var t=z[e];delete z[e];var r={id:e,exports:{}};return S[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){z[e]=t},L.parcelRequire64c1=B),B.register("iEMCX",(function(t,r){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var o,l=(o=e)&&o.__esModule?o:{default:o};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){return l.default.createElement("div",null,e.children)},p=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=i(this,c(t).call(this,e))).Wrapper=window._CustomWrapper||d,r.state={hasError:!1,error:null},r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(o=[{key:"componentDidCatch",value:function(e){console.log(e.message)}},{key:"render",value:function(){var e=this.props.children;return l.default.createElement(this.Wrapper,this.props,e)}}])&&n(r.prototype,o),a&&n(r,a),t}(l.default.Component);t.exports.default=p}));var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var D=R(e),I=(R(r),R(o)),F=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(l),M=R(B("iEMCX"));function R(e){return e&&e.__esModule?e:{default:e}}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){N(e,t,r[t])}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}window.component=null;var U=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?j(e):t}(this,H(t).call(this,e)),window.component=window.component||{},r.iframeRef=D.default.createRef(),r.handleChange=r.handleChange.bind(j(r)),r.toggleEditor=r.toggleEditor.bind(j(r));var o=e.example;return o=o||"return (<div>Example</div>)",r.state={example:o,height:200,showEditor:!1},r.executeScript(o),r}var r,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,D["default"].Component),r=t,(o=[{key:"executeScript",value:function(e){var t=this.props.uniqId,r=document.createElement("script"),o=this;r.onload=r.onerror=function(){this.remove(),o.setState((function(e){return O({},e,{component:window.component[t]||""})}))};var l="window.component['".concat(t,"'] = (() => {\n      ").concat(Object.keys(reactComponents).map((function(e){return"const ".concat(e," = reactComponents['").concat(e,"'];")})).join("\n"),"\n      try {\n        ").concat(e,"\n      } catch (error) {\n        console.log(error)\n      }\n    })()");try{var a=Babel.transform(l,{presets:["react","es2015"]}).code;r.src="data:text/plain;base64,"+btoa(a)}catch(e){console.log(e)}document.body.appendChild(r)}},{key:"handleChange",value:function(e){this.executeScript(e),this.setState((function(t){return O({},t,{example:e})}))}},{key:"computeHeight",value:function(){var e=this.state.height;this.iframeRef.current&&this.iframeRef.current.node.contentDocument&&0!==this.iframeRef.current.node.contentDocument.body.offsetHeight&&this.iframeRef.current.node.contentDocument.body.offsetHeight!==e-5&&this.setState({height:this.iframeRef.current.node.contentDocument.body.offsetHeight+5})}},{key:"componentDidUpdate",value:function(){this.computeHeight()}},{key:"componentDidMount",value:function(){var e=this;this.heightInterval=setInterval((function(){e.computeHeight()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.heightInterval)}},{key:"toggleEditor",value:function(e){e.preventDefault(),this.setState((function(e){return O({},e,{showEditor:!e.showEditor})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.component,o=t.height,l=t.showEditor;return D.default.createElement("div",null,D.default.createElement(F.default,{className:"component-wrapper",ref:this.iframeRef,style:{width:"100%",height:o},onLoad:this.computeHeight()},D.default.createElement("link",{type:"text/css",rel:"stylesheet",href:"./build/entry.css"}),D.default.createElement(F.FrameContextConsumer,null,(function(e){return D.default.createElement(M.default,{frameContext:e},r)}))),D.default.createElement("div",{className:"bd__button"},D.default.createElement("a",{href:"#",onClick:this.toggleEditor},"Modify Example Code")),l?D.default.createElement("div",{className:"field"},D.default.createElement(I.default,{style:{width:"100%",height:"200px",marginBottom:"20px"},value:this.state.example,mode:"jsx",theme:"monokai",onChange:function(t){return e.handleChange(t)},name:"editor-div",editorProps:{$useSoftTabs:!0}})):"")}}])&&T(r.prototype,o),l&&T(r,l),t}();P.default=function(e){return D.default.createElement(U,e)};var W={};$(W,"colors",(()=>V)),$(W,"space",(()=>Z)),$(W,"sizes",(()=>J)),$(W,"fontSizes",(()=>Y)),$(W,"fontWeights",(()=>K)),$(W,"lineHeights",(()=>X)),$(W,"shadows",(()=>Q)),$(W,"breakpoints",(()=>ee)),$(W,"font",(()=>te)),$(W,"borders",(()=>re)),$(W,"borderWidths",(()=>oe)),$(W,"VariantValues",(()=>le));const V={primary100:"#4268F6",primary80:"#6483F8",primary60:"#879FFA",primary40:"#A9BAFA",primary20:"#CBD5FD",accent:"#38CAF1",love:"#e6282b",grey100:"#1C1C38",grey80:"#454655",grey60:"#898A9A",grey40:"#C0C0CA",grey20:"#F6F7FB",white:"#fff",errorDark:"#DE405D",error:"#FF4567",errorLight:"#FFA5B5",successDark:"#32A887",success:"#70C9B0",successLight:"#DBF0F1",infoDark:"#4268F6",info:"#879FFA",infoLight:"#CBD5FD",filterBg:"#343F87",hoverBg:"#535B8E",border:"#DDE1E5",inputBorder:"#C0C0CA",separator:"#C0C0CA",highlight:"#F6F7FB",filterInputBorder:"rgba(255,255,255,0.15)",filterDisabled:"rgba(83,91,142,0.05)",bg:"#F6F7FB"},Z={xs:"2px",sm:"4px",default:"8px",md:"8px",lg:"16px",xl:"24px",xxl:"32px",x3:"48px",x4:"64px",x5:"80px",x6:"128px"},J={navbarHeight:"64px",sidebarWidth:"300px",maxFormWidth:"740px"},Y={xs:"10px",sm:"12px",default:"14px",md:"14px",lg:"16px",xl:"18px",h4:"24px",h3:"28px",h2:"32px",h1:"40px"},K={lighter:200,light:300,normal:400,bold:500,bolder:900},X={xs:"10px",sm:"12px",default:"16px",md:"16px",lg:"24px",xl:"32px",xxl:"40px"},Q={login:"0 15px 24px 0 rgba(137,138,154,0.15)",cardHover:"0 4px 12px 0 rgba(137,138,154,0.4)",drawer:"-2px 0 8px 0 rgba(137,138,154,0.2)",card:"0 1px 6px 0 rgba(137,138,154,0.4)",inputFocus:"0 2px 4px 0 rgba(135,159,250,0.4)",buttonFocus:"0 4px 6px 0 rgba(56,202,241,0.3)"},ee=["577px","769px","1024px","1324px"],te="'Roboto', sans-serif",re={input:"1px solid #C0C0CA",filterInput:" 1px rgba(255,255,255,0. solid15)",bg:"1px solid #F6F7FB",default:"1px solid #DDE1E5"},oe={default:"0px"},le=["primary","danger","success","info","secondary","default","light"],ae=(e,t)=>{let r=[];r=e.join?e:[e];const o=r.map((e=>`adminjs_${e}`));return t&&o.push(t),o.join(" ")},ne=(e,t)=>({bg:e,borderColor:e,color:t.outline?e:"white"}),ie=s.variant({prop:"size",variants:{sm:{py:"xs"},lg:{py:"11px",px:"14px"},default:{}}}),ce=_(c).span`
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.colors.grey40};
  color: ${({outline:e,theme:t})=>e?t.colors.grey60:t.colors.white};
  vertical-align: middle;
  font-family: ${({theme:e})=>e.font};
  display: inline;

  ${s.space};
  ${s.color};
  ${s.typography};
  ${e=>(e=>s.variant({variants:{primary:ne("primary100",e),danger:ne("error",e),success:ne("success",e),info:ne("info",e),secondary:ne("accent",e),light:ne("light",e),default:{}}}))(e)};
  ${ie};
  ${({outline:e})=>e?"background: transparent;":""}
`;ce.defaultProps={px:"default",py:"sm",fontSize:"sm",bg:"grey40",className:ae("Badge")};var se=ce,de=c.css`
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
`,pe=e=>{const t=d.parseToRgb(e.colors.accent);return`0 1px 4px 0 ${`rgba(${t.red}, ${t.green}, ${t.blue}, .58)`};`};const me=e=>e<10?`0${e.toString()}`:e.toString(),ue=e=>`${e.getFullYear()}-${me(e.getMonth()+1)}-${me(e.getDate())}`,he=e=>`${ue(e)} ${(e=>`${me(e.getHours())}:${me(e.getMinutes())}`)(e)}`,be=(e,t)=>"date"===t?ue(e):he(e),fe=["B","KB","MB","GB","TB"];var ge=e=>{const t=`UNIQUE_KEY_${e}`;return window.AdminJS=window.AdminJS||{},window.AdminJS[t]=(Number.parseInt(window.AdminJS[t],10)||0)+1,[t,window.AdminJS[t]].join("_")};const qe={appendElement:e=>{window.document.body.appendChild(e)},removeElement:e=>{const t=window.document.getElementById(e);null==t||t.remove()},createPortalForKey:function(r,o){return l=>{const[a]=e.useState(ge(r)),[n]=e.useState(window.document.createElement("div"));return e.useEffect((()=>(n.id=a,qe.appendElement(n),()=>{qe.removeElement(a)}))),_(t).createPortal(_(e).createElement(o,l),n)}}};function ke(e,t,r){return({theme:o})=>{const l=t?o[e][t]:o[e];if(l&&r){let e;"string"==typeof r?[e]=d.getValueAndUnit(r):e=r;const[t,o]=d.getValueAndUnit(l);return`${t+e}${o}`}return l}}const ve=c.css`
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
`,ye=(c.createGlobalStyle`${ve}`,{color:"white","border-color":"transparent",[`& .${ae("Icon")} svg`]:{fill:"white"},"&:disabled":{bg:"grey40"}}),xe=s.variant({variants:{primary:{bg:"primary100","&:hover":{bg:"hoverBg"},className:ae(["Button","Button_Primary"]),...ye},danger:{bg:"error","&:hover":{bg:"errorDark",borderColor:"transparent"},className:ae(["Button","Button_Danger"]),...ye},success:{bg:"success","&:hover":{bg:"successDark",borderColor:"transparent"},className:ae(["Button","Button_Success"]),...ye},info:{bg:"info","&:hover":{bg:"infoDark",borderColor:"transparent"},className:ae(["Button","Button_Info"]),...ye},secondary:{bg:"accent",className:ae(["Button","Button_Secondary"]),...ye},light:{bg:"white",className:ae(["Button","Button_Grey"]),color:"grey80",borderColor:"grey40",[`& .${ae("Icon")} svg`]:{fill:"grey80"},"&:hover":{borderColor:"grey60",bg:"grey60"}},text:{bg:"transparent",borderColor:"transparent","&:disabled":{"border-color":"transparent"},"&:hover":{background:"transparent",color:"hoverBg",borderColor:"transparent",textDecoration:"underline"},"&:focus":{background:"transparent",borderColor:"transparent"},"& svg":{fill:"primary100"},[`&:hover .${ae("Icon")} svg`]:{fill:"hoverBg"},className:ae(["Button","Button_Text"])}}}),we=s.variant({prop:"size",variants:{sm:{fontSize:"sm",py:"xs",lineHeight:"default",px:"lg",[`& .${ae("Icon")}`]:{marginTop:"-1px",marginBottom:"-1px"}},md:{},default:{},lg:{py:"default",px:"x3",lineHeight:"lg"},icon:{py:"default",px:"default",lineHeight:"sm",minWidth:"34px",height:"34px",[`& .${ae("Icon")} svg`]:{padding:0,margin:0}}}});var Ce=c.css`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  display: inline-block;
  font-family: ${({theme:e})=>e.font};
  line-height: ${ke("lineHeights","lg")};
  vertical-align: middle;

  border: 1px solid ${ke("colors","primary100")};
  color: ${ke("colors","primary100")};
  
  ${e=>(e=>e.href||e.onClick?"cursor: pointer":"a"!==e.as||e.href||e.onClick?"":"cursor: auto")(e)};
  text-decoration: none;
  padding: ${ke("space","sm")} ${ke("space","xxl")};
  box-sizing: border-box;

  & > .${ae("Icon")} {
    vertical-align: middle;
  }

  & > .${ae("Icon")} svg {
    margin: 0 ${ke("space","md")} 0 0;
  }

  & .${ae("Icon")} svg {
    fill: ${ke("colors","primary100")};
  }
  &:hover {
    color: ${ke("colors","white")};
    background: ${ke("colors","hoverBg")};
    border-color: ${ke("colors","hoverBg")};
    & .${ae("Icon")} svg {
      fill: ${ke("colors","white")};
    }
  }
  &:focus {
    border-color: ${ke("colors","accent")};
    ${({theme:e})=>`box-shadow: ${pe(e)}`};
  }

  &:disabled {
    color: ${ke("colors","grey60")};
    border-color: ${ke("colors","grey80")};
    background: ${ke("colors","white")};
    cursor: default;
    & .${ae("Icon")} svg {
      fill: ${ke("colors","grey60")};
    }
  }

  ${({rounded:e})=>e?"border-radius: 9999px":""};

  ${s.color};
  ${s.space};
  ${s.typography};
  ${xe};
  ${we};
`;const Ee=c.css`
  &:before {
    content: "${({label:e})=>e}";
  }
`,_e=_(c).button.attrs((e=>({className:ae("Button",e.className)})))`
  font-size: ${ke("fontSizes","default")};
  background-color: transparent;
  ${Ce};
  ${({label:e})=>e?Ee:""};
`;var $e=_e;const Le=s.variant({variants:{primary:{color:"primary100",[`& .${ae("Icon")} svg`]:{fill:"primary100"}},danger:{color:"error",[`& .${ae("Icon")} svg`]:{fill:"error"}},success:{color:"success",[`& .${ae("Icon")} svg`]:{fill:"success"}},info:{color:"info",[`& .${ae("Icon")} svg`]:{fill:"info"}},secondary:{color:"accent",[`& .${ae("Icon")} svg`]:{fill:"accent"}},light:{color:"grey60",mb:"sm",fontWeight:"light",[`& .${ae("Icon")} svg`]:{fill:"grey60"}},default:{}}}),Se=_(c).label`
  display: ${({inline:e})=>e?"inline-block":"block"};
  font-family: ${ke("font")};
  font-size: ${e=>ke("fontSizes","lg"===e.size?"md":"sm")(e)};
  line-height: ${ke("lineHeights","default")};
  margin-bottom: ${({theme:e,inline:t})=>t?"0":e.space.default};

  &:before {
    content: "${({required:e})=>e?"*":""}";
    color: ${ke("colors","primary100")};
    margin-right: ${ke("space","sm")};
    display: ${({required:e})=>e?"block-inline":"none"};
  }

  & > .${ae("Icon")}:first-child {
    margin-right: ${ke("space","md")};
  }

  ${({uppercase:e})=>e?"text-transform: uppercase;":""}
  ${s.color};
  ${s.typography};
  ${s.space};
  ${Le};
  ${e=>(({disabled:e,theme:t})=>e?c.css`
    color: ${t.colors.grey40};
    & .${ae("Icon")} svg {
      fill: ${t.colors.grey40};
    }
  `:c.css``)(e)};
`;Se.defaultProps={className:ae("Label")};var ze=Se;const Be=_(c).svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`,Pe=_(c).span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  & + ${Se} {
    margin-left: ${({theme:e})=>e.space.default};
    vertical-align: middle;
    margin-bottom: ${({theme:e})=>e.space.sm};
  }
`,De=_(c).input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,Ie=_(c).a`
  display: inline-block;
  width: 16px;
  /* when it is placed within a container setting different font size */
  font-size: 12px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.colors.grey40};
  height: 16px;
  background: ${({checked:e,theme:t,disabled:r})=>((e,t,r)=>t?r?e.colors.grey40:e.colors.primary100:e.colors.white)(t,e,r)};
  transition: all 150ms;
  position: relative;

  ${De}:focus + & {
    ${({theme:e})=>`box-shadow: ${pe(e)};`};
  }
  ${De}:hover + & {
    border-color: ${({theme:e})=>e.colors.grey60};
  }
  ${Be} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }

  &:after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 24px;
    height: 24px;
    opacity: 0;
    background: ${({theme:e})=>e.colors.primary100};
  }
  &:after:before {
    opacity: 0.1;
  }
`;var Fe=t=>{const{className:r,checked:o,onChange:l,disabled:a,...n}=t,[i,c]=e.useState(null!=o&&o),s=e=>{l?l(e):c(!e.target.checked)};return e.useEffect((()=>{c(null!=o&&o)}),[o]),_(e).createElement(Pe,{className:[null!=r?r:"","adminjs_Checkbox"].join(" ")},_(e).createElement(De,{checked:i,onChange:s,...n,disabled:a}),_(e).createElement(Ie,{checked:i,disabled:a,onClick:e=>s&&s(e)},_(e).createElement(Be,{viewBox:"0 0 24 24"},_(e).createElement("polyline",{points:"20 6 9 17 4 12"}))))};const Me=_(c).span`
  display: block;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
  border-radius: 9999px;
  background: ${({theme:e})=>e.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
`,Re=_(c).input.attrs({type:"radio"})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,Ae=_(c).span`
  display: inline-block;
  width: 16px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.colors.grey40};
  border-radius: 1000px;
  height: 16px;
  transition: all 150ms;
  position: relative;

  ${Re}:focus + & {
    ${({theme:e})=>`box-shadow: ${pe(e)}`};
  }
  ${Re}:hover + & {
    border-color: ${({theme:e})=>e.colors.grey60};
  }
  ${Me} {
    visibility: ${({checked:e})=>e?"visible":"hidden"};
  }

  background: ${({checked:e,theme:t,disabled:r})=>((e,t,r)=>t?r?e.colors.grey40:e.colors.primary100:e.colors.white)(t,e,r)};
`;var Oe=t=>{const{className:r,checked:o,onChange:l,disabled:a,...n}=t,[i,c]=e.useState(null!=o&&o),s=null!=o?o:i,d=e=>{c(!e.target.checked),l&&l(e)};return _(e).createElement(Pe,{className:r},_(e).createElement(Re,{checked:s,onChange:d,...n,disabled:a}),_(e).createElement(Ae,{checked:s,onClick:e=>d&&d(e),disabled:a},_(e).createElement(Me,null)))};var Ne=c.css`
  font-family: ${({theme:e})=>e.font};
  font-size: ${ke("fontSizes","md")};
  line-height: ${ke("lineHeights","lg")};
  font-weight: ${ke("fontWeights","light")};
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
    margin-bottom: ${ke("space","xl")};
    font-size: ${ke("fontSizes","md")};
    font-weight: ${ke("fontWeights","light")};
  }

  strong, b {
    font-weight: ${ke("fontWeights","bolder")}
  }

  li + li {
    margin-top: ${ke("space","md")};
  }

  p:not(:last-child),
  dl:not(:last-child),
  ol:not(:last-child),
  ul:not(:last-child),
  blockquote:not(:last-child),
  pre:not(:last-child),
  table:not(:last-child) {
    margin-bottom: ${ke("space","xl")};
  }

  pre {
    background-color: ${ke("colors","grey20")};
    border: 1px solid ${ke("colors","grey40")};
    padding: ${ke("space","xl")};
    margin: ${ke("space","xl")} 0 ${ke("space","xxl")};
    white-space: pre;
    font-family: 'Courier New', Courier, monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${ke("fontWeights","light")};
    line-height: ${ke("lineHeights","xl")};
    font-size: ${ke("fontSizes","h3")};
    margin-top: ${ke("space","xxl")};
    margin-bottom: ${ke("space","xl")};
  }

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: ${ke("space","sm")};
  }

  h1 {
    font-size: ${ke("fontSizes","h1")};
    line-height: ${ke("lineHeights","xxl")};
    margin-top: ${ke("space","x4")};
    margin-bottom: ${ke("space","x3")};
  }

  h2 {
    font-size: ${ke("fontSizes","h2")};
    line-height: ${ke("lineHeights","xxl")};
    margin-top: ${ke("space","x3")};
    margin-bottom: ${ke("space","xxl")};
  }

  h3 {
    
  }

  h4 {
    font-size: ${ke("fontSizes","h4")};
    line-height: ${ke("lineHeights","xl")};
    margin-top: ${ke("space","xxl")};
    margin-bottom: ${ke("space","xl")};
  }

  h5 {
    font-size: ${ke("fontSizes","xl")};
    line-height: ${ke("lineHeights","lg")};
    margin-top: ${ke("space","xl")};
    margin-bottom: ${ke("space","lg")};
    font-weight: ${ke("fontWeights","normal")};
  }

  h6 {
    font-size: ${ke("fontSizes","lg")};
    line-height: ${ke("lineHeights","lg")};
    margin-top: ${ke("space","lg")};
    margin-bottom: ${ke("space","default")};
    font-weight: ${ke("fontWeights","normal")};
  }

  blockquote {
    background-color: ${ke("colors","grey20")};
    border-left: ${ke("space","sm")} solid ${ke("colors","primary20")};
    padding: ${ke("space","xl")};
    margin: ${ke("space","xxl")} 0;
  }

  ol {
    list-style-position: outside;
    margin-top: ${ke("space","lg")};
    margin-left: ${ke("space","xl")};
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
    margin-left: ${ke("space","xl")};
    margin-top: ${ke("space","lg")};
  }
  ul ul {
    list-style-type: circle;
    margin-top: ${ke("space","sm")};
  }
  ul ul ul {
    list-style-type: square;
  }

  em {
    font-style: italic;
  }

  dd {
    margin-left: ${ke("space","xl")};
  }

  figure {
    margin-left: ${ke("space","md")};
    margin-right: ${ke("space","md")};
    text-align: center;
  }
  figure:not(:first-child) {
    margin-top: ${ke("space","md")};
  }
  figure:not(:last-child) {
    margin-bottom: ${ke("space","md")};
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
    margin: ${ke("space","xl")} 0;
  }
  table td,
  table th {
    padding: ${ke("space","lg")};
    vertical-align: top;
  }
  table th {
    color: ${ke("colors","grey60")};
    border-bottom: 1px solid ${ke("colors","grey40")};
  }

  table td {
    border-bottom: 1px solid ${ke("colors","grey20")};
  }
  table th:not([align]) {
    text-align: inherit;
  }
  table thead td,
  table thead th {
    border-bottom: 1px solid ${ke("colors","grey40")};
    color: ${ke("colors","grey60")};
  }
  table tfoot td,
  table tfoot th {
    border-bottom: 1px solid ${ke("colors","grey40")};
    color: ${ke("colors","grey60")};
  }
  table tbody tr:last-child td,
  table tbody tr:last-child th {
    border-bottom-width: 0;
  }

  .tabs li + li {
    margin-top: 0;
  }
`;const Te=s.variant({variants:{xs:{fontSize:"xs"},sm:{fontSize:"sm"},lg:{fontSize:"lg"}}}),He=_(c).div`
  ${Ne};
  ${s.typography};
  ${s.space};
  ${s.layout};
  ${s.color};
  ${Te};
`;He.defaultProps={className:ae("Text")};var je=He;const Ge=s.variant({prop:"size",variants:{sm:{fontSize:"xs",py:"sm"},lg:{fontSize:"default"}}}),Ue=s.variant({variants:{primary:{color:"primary100","&:hover":{color:"hoverBg","& svg":{fill:"hoverBg"}},"& svg":{fill:"primary100"}},danger:{color:"error","&:hover":{color:"error"},"& svg":{fill:"error"}},success:{color:"success","&:hover":{color:"success"},"& svg":{fill:"success"}},info:{color:"primary60","&:hover":{color:"hoverBg"},"& svg":{fill:"primary60"}},secondary:{color:"accent","&:hover":{color:"hoverBg"},"& svg":{fill:"accent"}}}}),We=_(c).a`
  font-family: ${({theme:e})=>e.font};
  vertical-align: middle;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  & svg {
    padding-right: ${({theme:e})=>e.space.default};
    vertical-align: text-top;
  }
  ${({uppercase:e})=>e?"text-transform: uppercase;":""}
  ${s.color};
  ${s.space};
  ${Ge};
  ${Ue};
`;We.defaultProps={color:"grey60",className:ae("Link")};var Ve=We;const Ze=c.css`
  padding: 0;
  border-color: transparent;
  border-width: 0 0 1px 0;
  color: ${({theme:e})=>e.colors.grey100};
  &:focus {
    box-shadow: none;
    border-bottom: 1px solid ${({theme:e})=>e.colors.inputBorder};
  }

  &:hover {
    cursor: pointer;
  }
`,Je=s.variant({prop:"variant",variants:{default:{fontSize:"default",lineHeight:"lg"},sm:{fontSize:"sm",lineHeight:"default"},lg:{fontSize:"lg",lineHeight:"xl"},xl:{fontSize:"xl",lineHeight:"xxl"},xxl:{fontSize:"h1",fontWeight:"light",lineHeight:"x4"}}}),Ye=c.css`
  box-sizing: border-box;
  color: ${({theme:e})=>e.colors.grey80};
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.inputBorder};
  font-size: ${({theme:e})=>e.fontSizes.default};
  line-height: ${({theme:e})=>e.lineHeights.lg};
  font-family: ${({theme:e})=>e.font};
  outline: none;
  &:hover {
    border-color: ${({theme:e})=>e.colors.grey60};
  }
  &:focus {
    border-color: ${({theme:e})=>e.colors.primary100};
    ${({theme:e})=>`box-shadow: ${pe(e)}`};
  }
  &:disabled {
    color: ${({theme:e})=>d.rgba(e.colors.grey80,.5)};
    border-color: ${({theme:e})=>d.rgba(e.colors.inputBorder,.5)};
  }

  ${({borderless:e})=>e?Ze:""};
  ${Je};
`,Ke=_(c).input`
  ${Ye};
  ${s.space};
  ${s.layout};
`;Ke.defaultProps={px:"default",py:"sm",className:ae("Input")};var Xe=Ke;const Qe=_(c).textarea`
  ${Ye}
  ${s.space};
  ${s.layout};
  ${s.typography};
`;Qe.defaultProps={px:"default",py:"default",fontSize:"lg",className:ae("TextArea")};var et=Qe,tt={};$(tt,"Moon",(()=>rt)),$(tt,"Rocket",(()=>ot)),$(tt,"Astronaut",(()=>lt)),$(tt,"DocumentCheck",(()=>at)),$(tt,"DocumentSearch",(()=>nt)),$(tt,"FileSearch",(()=>it)),$(tt,"FlagInCog",(()=>ct)),$(tt,"Folders",(()=>st)),$(tt,"Launch",(()=>dt)),$(tt,"Planet",(()=>pt)),$(tt,"AdminJSLogo",(()=>mt)),$(tt,"SoftwareBrothersLogo",(()=>ut)),$(tt,"GithubLogo",(()=>ht)),$(tt,"SlackLogo",(()=>bt));var rt=t=>{const{width:r,height:o}=t,l=r||"260px",a=o||"260px";return _(e).createElement("svg",{width:l,height:a,viewBox:"0 0 260 260",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("defs",null,_(e).createElement("circle",{id:"path-1",cx:"106",cy:"106",r:"106"}),_(e).createElement("filter",{x:"-17.0%",y:"-17.0%",width:"134.0%",height:"134.0%",filterUnits:"objectBoundingBox",id:"filter-2"},_(e).createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shadowOffsetOuter1"}),_(e).createElement("feGaussianBlur",{stdDeviation:"12",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),_(e).createElement("feColorMatrix",{values:"0 0 0 0 0.958112299 0 0 0 0 0.910577834 0 0 0 0 0.855913579 0 0 0 1 0",type:"matrix",in:"shadowBlurOuter1"})),_(e).createElement("circle",{id:"path-3",cx:"106",cy:"106",r:"106"})),_(e).createElement("g",{id:"Main-Templates",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group-12",transform:"translate(24.000000, 24.000000)"},_(e).createElement("g",{id:"Oval"},_(e).createElement("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-2)",href:"#path-1"}),_(e).createElement("use",{fill:"#F4E8DB",fillRule:"evenodd",href:"#path-1"})),_(e).createElement("g",{id:"Path-7"},_(e).createElement("mask",{id:"mask-4",fill:"white"},_(e).createElement("use",{href:"#path-3"})),_(e).createElement("use",{id:"Mask",fill:"#F4E8DB",href:"#path-3"}),_(e).createElement("path",{d:"M39.8069626,3.76747066 C45.3021184,115.593145 97.2894125,176.043124 195.768845,185.117407 C294.248278,194.191689 253.575457,215.872553 73.750384,250.16 L-33.92,160.780637 L-25.2907546,24.0909209 L26.5457822,-4.24 L39.8069626,3.76747066 Z",fill:"#C8BBB2",mask:"url(#mask-4)"})),_(e).createElement("circle",{id:"Oval",fill:"#C8BBB2",cx:"80.5",cy:"37.5",r:"22.5"}),_(e).createElement("circle",{id:"Oval-Copy-3",fill:"#C8BBB2",cx:"158",cy:"66",r:"17"}),_(e).createElement("circle",{id:"Oval-Copy-4",stroke:"#F4E8DB",strokeWidth:"3",fill:"#C8BBB2",cx:"124",cy:"166",r:"17"}),_(e).createElement("circle",{id:"Oval-Copy-5",stroke:"#F4E8DB",strokeWidth:"1.6875",fill:"#C8BBB2",cx:"58.5",cy:"92.5",r:"9.5"}),_(e).createElement("circle",{id:"Oval-Copy",fill:"#C8BBB2",cx:"157.5",cy:"124.5",r:"8.5"}),_(e).createElement("circle",{id:"Oval-Copy-6",fill:"#C8BBB2",cx:"190",cy:"96",r:"3"}),_(e).createElement("circle",{id:"Oval-Copy-8",fill:"#C8BBB2",cx:"81",cy:"113",r:"3"}),_(e).createElement("circle",{id:"Oval-Copy-7",fill:"#C8BBB2",cx:"126",cy:"29",r:"3"}),_(e).createElement("circle",{id:"Oval-Copy-2",fill:"#C8BBB2",cx:"97.5",cy:"101.5",r:"8.5"}))))};var ot=()=>_(e).createElement("svg",{width:"249px",height:"179px",viewBox:"0 0 249 179",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("defs",null,_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-1"},_(e).createElement("stop",{stopColor:"#FFAB86",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFB44E",offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-2"},_(e).createElement("stop",{stopColor:"#FFAB86",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFB44E",offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-3"},_(e).createElement("stop",{stopColor:"#FFF2B1",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFEA7E",offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-4"},_(e).createElement("stop",{stopColor:"#FFF2B1",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFCD7E",offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-5"},_(e).createElement("stop",{stopColor:"#FFAB86",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFB44E",offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-6"},_(e).createElement("stop",{stopColor:"#FFF2B1",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFEA7E",offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-7"},_(e).createElement("stop",{stopColor:"#FFF2B1",offset:"0%"}),_(e).createElement("stop",{stopColor:"#FFCD7E",offset:"100%"}))),_(e).createElement("g",{id:"Main-Templates",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Rocket-with-motion",transform:"translate(140.500000, 74.000000) rotate(17.000000) translate(-140.500000, -74.000000) translate(19.000000, -40.000000)"},_(e).createElement("g",{id:"Rocket",transform:"translate(137.662345, 112.855740) rotate(7.000000) translate(-137.662345, -112.855740) translate(44.162345, 11.355740)"},_(e).createElement("g",{id:"Group-15"},_(e).createElement("ellipse",{id:"Oval-Copy-29",fill:"#F4E8DB",cx:"116.379625",cy:"57.5932962",rx:"2.01348833",ry:"2.01375162"}),_(e).createElement("ellipse",{id:"Oval-Copy-31",fill:"#F4E8DB",cx:"34.2293016",cy:"155.058874",rx:"2.01348833",ry:"2.01375162"}),_(e).createElement("ellipse",{id:"Oval-Copy-19",fill:"#F4E8DB",cx:"160.273671",cy:"140.157112",rx:"4.02697665",ry:"4.02750323"}),_(e).createElement("ellipse",{id:"Oval-Copy-23",fill:"#F4E8DB",cx:"74.0963704",cy:"51.5520414",rx:"4.02697665",ry:"4.02750323"}),_(e).createElement("g",{id:"Group-13",transform:"translate(7.404023, 136.898722)"},_(e).createElement("path",{d:"M29.2933675,62.4051811 C35.8296538,62.4051811 41.1280139,56.981389 41.127586,50.2898688 C41.1271581,43.5983485 33.1286817,0.598536152 29.2894151,0.598536152 C25.4501486,0.598536152 17.4571716,43.5968348 17.4575995,50.2883551 C17.4580274,56.9798753 22.7570812,62.4051811 29.2933675,62.4051811 Z",id:"Oval-Copy-38",fill:"url(#linearGradient-2)",transform:"translate(29.292593, 31.501859) rotate(-141.000000) translate(-29.292593, -31.501859) "}),_(e).createElement("path",{d:"M31.7199672,52.9593428 C36.0774914,52.9593428 39.6097439,49.5375303 39.6094739,45.3158883 C39.609204,41.0942463 36.2259176,5.20641018 31.9585807,5.20641018 C27.6912437,5.20641018 23.829213,41.0932372 23.8294829,45.3148792 C23.8297529,49.5365212 27.362443,52.9593428 31.7199672,52.9593428 Z",id:"Oval-Copy-39",fill:"url(#linearGradient-3)",transform:"translate(31.719478, 29.082876) rotate(-141.000000) translate(-31.719478, -29.082876) "}),_(e).createElement("path",{d:"M34.9968773,41.9727682 C38.5555221,41.9727682 41.440206,39.3509657 41.4399991,36.1163003 C41.4397923,32.8816348 39.1523789,8.14353111 35.5937342,8.14353111 C32.0350894,8.14353111 28.5527996,32.8808107 28.5530065,36.1154762 C28.5532133,39.3501416 31.4382326,41.9727682 34.9968773,41.9727682 Z",id:"Oval-Copy-39",fill:"url(#linearGradient-4)",transform:"translate(34.996503, 25.058150) rotate(-141.000000) translate(-34.996503, -25.058150) "})),_(e).createElement("g",{id:"Group-11",transform:"translate(102.175136, 89.252917) rotate(40.000000) translate(-102.175136, -89.252917) translate(59.675136, 8.752917)",fillRule:"nonzero",stroke:"#C9D1F6",strokeWidth:"1.97424893"},_(e).createElement("path",{d:"M67.7777024,49.7502517 L70.9362925,43.3067657 C71.4162191,42.3277211 72.598949,41.9231061 73.5779935,42.4030327 C73.9711105,42.5957382 74.289021,42.9136487 74.4817265,43.3067657 L77.6403166,49.7502517 C78.8999695,52.3199286 79.5548698,55.1437885 79.5548698,58.0055999 L79.5548698,151.358137 C79.5548698,151.903311 79.1129192,152.345261 78.5677454,152.345261 L66.8502737,152.345261 C66.3050999,152.345261 65.8631492,151.903311 65.8631492,151.358137 L65.8631492,58.0055999 C65.8631492,55.1437885 66.5180495,52.3199286 67.7777024,49.7502517 Z",id:"Rectangle",fill:"#FFFFFF",strokeLinejoin:"round"}),_(e).createElement("path",{d:"M7.91445895,50.2479489 L11.0730491,43.8044629 C11.5529757,42.8254183 12.7357055,42.4208033 13.7147501,42.9007299 C14.107867,43.0934354 14.4257776,43.4113459 14.6184831,43.8044629 L17.7770732,50.2479489 C19.0367261,52.8176258 19.6916264,55.6414857 19.6916264,58.5032971 L19.6916264,151.855834 C19.6916264,152.401008 19.2496757,152.842959 18.7045019,152.842959 L6.98703021,152.842959 C6.44185643,152.842959 5.99990575,152.401008 5.99990575,151.855834 L5.99990575,58.5032971 C5.99990575,55.6414857 6.65480605,52.8176258 7.91445895,50.2479489 Z",id:"Rectangle-Copy-11",fill:"#FFFFFF",strokeLinejoin:"round"}),_(e).createElement("path",{d:"M33.0906011,11.354303 L39.4002623,2.2723825 C40.6444904,0.481481126 43.104949,0.0383148853 44.8958504,1.282543 C45.2821175,1.55090196 45.6173309,1.88611536 45.8856899,2.2723825 L52.195351,11.354303 C57.249981,18.6297726 59.9589757,27.2769281 59.9589757,36.1359202 L59.9589757,116.427862 L59.9589757,116.427862 L25.3269765,116.427862 L25.3269765,36.1359202 C25.3269765,27.2769281 28.0359712,18.6297726 33.0906011,11.354303 Z",id:"Rectangle",fill:"#F0F1F9",strokeLinejoin:"round"}),_(e).createElement("path",{d:"M51.0709343,145.945436 L52.4616111,78.430609 L57.2782797,97.1345431 C59.5841699,106.088702 64.1795587,114.289067 70.6130652,120.930158 L75.1292812,125.592095 C78.7263886,129.305267 81.1674641,133.983364 82.155819,139.057808 L83.2511862,144.681678 C83.2493456,145.075537 83.1550246,145.406318 82.9636792,145.638528 C82.7984747,145.839014 82.5607084,145.945436 82.2993925,145.945436 L51.0709343,145.945436 Z",id:"Path-3",fill:"#F0F1F9"}),_(e).createElement("path",{d:"M1.47150229,145.425806 L2.86217912,77.9109797 L7.67884773,96.6149137 C9.98473789,105.569073 14.5801267,113.769438 21.0136332,120.410529 L25.5298492,125.072466 C29.1269566,128.785638 31.5680321,133.463734 32.556387,138.538179 L33.6517543,144.162049 C33.6499136,144.555907 33.5555926,144.886689 33.3642472,145.118899 C33.1990427,145.319385 32.9612764,145.425806 32.6999605,145.425806 L1.47150229,145.425806 Z",id:"Path-3-Copy",fill:"#F0F1F9",transform:"translate(17.779835, 108.554400) scale(-1, 1) translate(-17.779835, -108.554400) "}),_(e).createElement("path",{d:"M34.132116,58.9706471 L38.6749518,50.4371325 C39.9558754,48.0309746 42.9448456,47.1187919 45.3510036,48.3997155 C46.2176737,48.8610893 46.9270468,49.5704624 47.3884206,50.4371325 L51.9312564,58.9706471 C53.7557124,62.3978065 54.7099185,66.2208379 54.7099185,70.1033707 L54.7099185,151.938396 L54.7099185,151.938396 L31.3534539,151.938396 L31.3534539,70.1033707 C31.3534539,66.2208379 32.3076599,62.3978065 34.132116,58.9706471 Z",id:"Rectangle-2",fill:"#FFFFFF",strokeLinejoin:"round"}),_(e).createElement("path",{d:"M59.4280489,155.429317 L25.9649033,155.429317 L25.9649033,146.347684 C25.9649033,143.83986 26.9813998,141.569451 28.6248522,139.925999 C30.2683047,138.282547 32.5387131,137.26605 35.0465369,137.26605 L50.3464153,137.26605 C52.8542392,137.26605 55.1246476,138.282547 56.7681,139.925999 C58.4115525,141.569451 59.4280489,143.83986 59.4280489,146.347684 L59.4280489,155.429317 Z",id:"Rectangle",fill:"#FFFFFF"}),_(e).createElement("path",{d:"M42.9716921,126.282389 L42.9716921,160.264511",id:"Line-2",fill:"#F0F1F9",strokeLinecap:"round"})),_(e).createElement("g",{id:"Group-14",transform:"translate(45.907534, 162.711131)"},_(e).createElement("path",{d:"M17.7186,38.6625878 C21.7220753,38.6625878 24.9673209,35.3405151 24.9670588,31.241959 C24.9667967,27.1434028 19.3527647,0.806017733 17.7161791,0.806017733 C16.0795936,0.806017733 10.46893,27.1424757 10.469192,31.2410318 C10.4694541,35.339588 13.7151246,38.6625878 17.7186,38.6625878 Z",id:"Oval",fill:"url(#linearGradient-5)",transform:"translate(17.718125, 19.734303) rotate(-141.000000) translate(-17.718125, -19.734303) "}),_(e).createElement("path",{d:"M19.8990176,30.9168623 C22.5680012,30.9168623 24.7315058,28.8210022 24.7313405,26.2352465 C24.7311751,23.6494907 23.015537,3.87414324 20.3465534,3.87414324 C17.6775699,3.87414324 15.0659306,23.6488726 15.066096,26.2346284 C15.0662613,28.8203841 17.2300341,30.9168623 19.8990176,30.9168623 Z",id:"Oval-Copy-35",fill:"url(#linearGradient-6)",transform:"translate(19.898718, 17.395503) rotate(-141.000000) translate(-19.898718, -17.395503) "}),_(e).createElement("path",{d:"M21.5173735,25.4314166 C23.5191112,25.4314166 25.1417404,23.8708065 25.1416173,21.9454104 C25.1414942,20.0200143 23.8547724,5.29496477 21.8530347,5.29496477 C19.851297,5.29496477 17.8925608,20.0195507 17.8926839,21.9449468 C17.8928071,23.8703429 19.5156359,25.4314166 21.5173735,25.4314166 Z",id:"Oval-Copy-40",fill:"url(#linearGradient-7)",transform:"translate(21.517151, 15.363191) rotate(-141.000000) translate(-21.517151, -15.363191) "})),_(e).createElement("g",{id:"Group-14-Copy",transform:"translate(0.000000, 124.047100)"},_(e).createElement("path",{d:"M17.7186,38.6625878 C21.7220753,38.6625878 24.9673209,35.3405151 24.9670588,31.241959 C24.9667967,27.1434028 19.3527647,0.806017733 17.7161791,0.806017733 C16.0795936,0.806017733 10.46893,27.1424757 10.469192,31.2410318 C10.4694541,35.339588 13.7151246,38.6625878 17.7186,38.6625878 Z",id:"Oval",fill:"url(#linearGradient-5)",transform:"translate(17.718125, 19.734303) rotate(-141.000000) translate(-17.718125, -19.734303) "}),_(e).createElement("path",{d:"M19.8990176,30.9168623 C22.5680012,30.9168623 24.7315058,28.8210022 24.7313405,26.2352465 C24.7311751,23.6494907 23.015537,3.87414324 20.3465534,3.87414324 C17.6775699,3.87414324 15.0659306,23.6488726 15.066096,26.2346284 C15.0662613,28.8203841 17.2300341,30.9168623 19.8990176,30.9168623 Z",id:"Oval-Copy-35",fill:"url(#linearGradient-6)",transform:"translate(19.898718, 17.395503) rotate(-141.000000) translate(-19.898718, -17.395503) "}),_(e).createElement("path",{d:"M21.5173735,25.4314166 C23.5191112,25.4314166 25.1417404,23.8708065 25.1416173,21.9454104 C25.1414942,20.0200143 23.8547724,5.29496477 21.8530347,5.29496477 C19.851297,5.29496477 17.8925608,20.0195507 17.8926839,21.9449468 C17.8928071,23.8703429 19.5156359,25.4314166 21.5173735,25.4314166 Z",id:"Oval-Copy-40",fill:"url(#linearGradient-7)",transform:"translate(21.517151, 15.363191) rotate(-141.000000) translate(-21.517151, -15.363191) "}))),_(e).createElement("path",{d:"M80.0494403,116.335122 C88.8076699,101.144407 113.894541,71.6934295 155.310052,27.9821891 L155.310052,13.433931 L76.2854597,24.2179367 L9.01739077,110.071572 L67.1069868,158.925202 L90.4566162,178.55709 C74.7602694,152.266493 71.2912108,131.525837 80.0494403,116.335122 Z",id:"Path-8",fillOpacity:"0.16",fill:"#192035"}),_(e).createElement("ellipse",{id:"Oval",stroke:"#ACB3D7",strokeWidth:"0.987124464",fill:"#CBD5FD",cx:"134.150589",cy:"51.1969656",rx:"6.09273175",ry:"6.08892935"}),_(e).createElement("ellipse",{id:"Oval-Copy-36",fill:"#ACB3D7",cx:"134.13899",cy:"51.1391751",rx:"3.80795734",ry:"3.80558084"}),_(e).createElement("ellipse",{id:"Oval-Copy-37",fill:"#CBD4FF",cx:"131.474713",cy:"49.3326297",rx:"2.28477441",ry:"2.28334851"}),_(e).createElement("ellipse",{id:"Oval-Copy-41",fill:"#CBD4FF",cx:"135.128283",cy:"51.6142094",rx:"1",ry:"1"})),_(e).createElement("circle",{id:"Oval-Copy-31",fill:"#F4E8DB",cx:"38.1284868",cy:"108.303169",r:"1"}),_(e).createElement("circle",{id:"Oval-Copy-22",fill:"#F4E8DB",cx:"4.32112887",cy:"163.723438",r:"3.94849785"}),_(e).createElement("line",{x1:"153.739825",y1:"166.762478",x2:"133.010212",y2:"186.504967",id:"Path-9-Copy",stroke:"#F4E8DA",strokeWidth:"2.96137339",strokeLinecap:"round",strokeLinejoin:"round"}),_(e).createElement("line",{x1:"71.0180476",y1:"196.046139",x2:"54.2369317",y2:"210.853006",id:"Path-9-Copy-2",stroke:"#F4E8DA",strokeWidth:"2.96137339",strokeLinecap:"round",strokeLinejoin:"round"}),_(e).createElement("line",{x1:"39.4304561",y1:"139.905466",x2:"27.5849626",y2:"150.763835",id:"Path-9-Copy-5",stroke:"#F4E8DA",strokeWidth:"2.96137339",strokeLinecap:"round",strokeLinejoin:"round"}),_(e).createElement("line",{x1:"27.0808447",y1:"220.357763",x2:"18.1967246",y2:"226.28051",id:"Path-9-Copy-6",stroke:"#F4E8DA",strokeWidth:"2.96137339",strokeLinecap:"round",strokeLinejoin:"round"}),_(e).createElement("line",{x1:"42.5501636",y1:"169.913846",x2:"4.05230955",y2:"203.476077",id:"Path-9-Copy-3",stroke:"#F4E8DA",strokeWidth:"2.96137339",strokeLinecap:"round",strokeLinejoin:"round"}),_(e).createElement("line",{x1:"143.094269",y1:"193.740995",x2:"104.596415",y2:"227.303226",id:"Path-9-Copy-4",stroke:"#F4E8DA",strokeWidth:"2.96137339",strokeLinecap:"round",strokeLinejoin:"round"}))));var lt=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 2.000000)",stroke:l.colors.primary60,strokeWidth:"3"},_(e).createElement("path",{d:"M74,123.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",id:"Path-Copy-2",strokeLinecap:"round"}),_(e).createElement("path",{d:"M104.072464,59.4347826 L107.42029,59.4347826 C110.501879,59.4347826 113,61.9329039 113,65.0144928 L113,72.826087 C113,75.9076758 110.501879,78.4057971 107.42029,78.4057971 L104.072464,78.4057971",id:"Path",fill:l.colors.primary20}),_(e).createElement("path",{d:"M36,59.4347826 L39.3478261,59.4347826 C42.4294149,59.4347826 44.9275362,61.9329039 44.9275362,65.0144928 L44.9275362,72.826087 C44.9275362,75.9076758 42.4294149,78.4057971 39.3478261,78.4057971 L36,78.4057971",id:"Path-Copy-8",fill:l.colors.primary20,transform:"translate(40.463768, 68.920290) scale(-1, 1) translate(-40.463768, -68.920290) "}),_(e).createElement("path",{d:"M73.942029,36 L75.057971,36 C91.6985507,36 105.188406,49.4898551 105.188406,66.1304348 L105.188406,74.2608696 C105.188406,86.4111341 95.3386703,96.2608696 83.1884058,96.2608696 L65.8115942,96.2608696 C53.6613297,96.2608696 43.8115942,86.4111341 43.8115942,74.2608696 L43.8115942,66.1304348 C43.8115942,49.4898551 57.3014493,36 73.942029,36 Z",id:"Rectangle"}),_(e).createElement("path",{d:"M61.6231884,54.9710145 L87.3768116,54.9710145 C92.8996591,54.9710145 97.3768116,59.448167 97.3768116,64.9710145 L97.3768116,71.1521739 C97.3768116,80.0887815 90.1322598,87.3333333 81.1956522,87.3333333 L67.8043478,87.3333333 C58.8677402,87.3333333 51.6231884,80.0887815 51.6231884,71.1521739 L51.6231884,64.9710145 C51.6231884,59.448167 56.1003409,54.9710145 61.6231884,54.9710145 Z",id:"Rectangle",fill:l.colors.primary20}),_(e).createElement("path",{d:"M98.1625549,96.4072839 C104.039008,97.3212203 108.536232,102.403535 108.536232,108.536232 L108.536232,118.134734 C108.536232,119.211784 107.767028,120.135188 106.707715,120.329844 C106.055061,120.449774 105.513749,120.546295 105.083779,120.619408 C95.9922338,122.165353 85.5737028,123.043478 74.5,123.043478",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M63.9958478,122.775649 C56.839568,122.406752 50.0823079,121.667204 43.9319499,120.622082 C43.4981804,120.548372 42.951644,120.450947 42.2923407,120.329807 C41.2329855,120.135184 40.4637681,119.211754 40.4637681,118.134669 L40.4637681,108.536232 C40.4637681,102.446055 44.8988464,97.391746 50.715414,96.426894",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M100.724638,87.6057924 C100.724638,97.4668767 92.7306494,105.188406 82.8695652,105.188406 L66.1304348,105.188406 C56.2693506,105.188406 48.2753623,97.4668767 48.2753623,87.6057924",id:"Path",strokeLinecap:"round"}))))};var at=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 2.000000)",stroke:l.colors.primary60,strokeWidth:"3"},_(e).createElement("path",{d:"M74,126.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",id:"Path-Copy-5",strokeLinecap:"round"}),_(e).createElement("path",{d:"M105,70.0296545 C105,87.5771932 105,100.077741 105,107.531297 L105,120.263384 C105,121.093743 105,122.339282 105,124 C105,125.104569 104.104569,126 103,126 L73.9676297,126",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M54,42.2162102 L54,54 C54,55.1045695 53.1045695,56 52,56 L40.1644979,56",id:"Path-Copy-9",fill:l.colors.primary20}),_(e).createElement("path",{d:"M58.7460443,126 L42,126 C40.8954305,126 40,125.104569 40,124 L40,55.6898628 L53.6898628,42 C63.9564524,42 71.6563946,42 76.7896894,42",id:"Path",strokeLinecap:"round"}),_(e).createElement("line",{x1:"58.5",y1:"89.5",x2:"86.8715634",y2:"89.5",id:"Line-4",strokeLinecap:"round"}),_(e).createElement("line",{x1:"58.5",y1:"104.5",x2:"86.8715634",y2:"104.5",id:"Line-4-Copy",strokeLinecap:"round"}),_(e).createElement("circle",{id:"Oval",fill:l.colors.primary20,cx:"92",cy:"55",r:"20"}),_(e).createElement("polyline",{id:"Path",strokeLinecap:"round",strokeLinejoin:"round",points:"103.727922 49 91 61.7279221 83.8715634 54.5994855"}))))};var nt=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 2.000000)",stroke:l.colors.primary60,strokeWidth:"3"},_(e).createElement("path",{d:"M74,126.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",id:"Path-Copy-4",strokeLinecap:"round"}),_(e).createElement("path",{d:"M106,120.263384 C106,121.093743 106,122.339282 106,124 C106,125.104569 105.104569,126 104,126 L74,126",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M55,42.2162102 L55,54 C55,55.1045695 54.1045695,56 53,56 L41.1644979,56",id:"Path",fill:l.colors.primary20}),_(e).createElement("path",{d:"M56.5220968,126 L43,126 C41.8954305,126 41,125.104569 41,124 L41,55.6898628 L54.6898628,42 L104,42 C105.104569,42 106,42.8954305 106,44 C106,75.6283541 106,96.8054529 106,107.531297",id:"Path",strokeLinecap:"round"}),_(e).createElement("circle",{id:"Oval",fill:l.colors.primary20,cx:"76",cy:"84",r:"18"}),_(e).createElement("circle",{id:"Oval-Copy-2",fill:l.colors.white,cx:"76",cy:"84",r:"10"}),_(e).createElement("rect",{id:"Rectangle",fill:l.colors.primary20,transform:"translate(105.316743, 113.185977) rotate(-315.000000) translate(-105.316743, -113.185977) ",x:"91.8167434",y:"108.685977",width:"27",height:"9",rx:"2"}),_(e).createElement("line",{x1:"88.5",y1:"96.5",x2:"95.4689509",y2:"103.468951",id:"Line-3"}))))};var it=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("defs",null,_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-1"},_(e).createElement("stop",{stopColor:l.colors.primary60,offset:"0%"}),_(e).createElement("stop",{stopColor:l.colors.primary100,offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"156.737419%",id:"linearGradient-2"},_(e).createElement("stop",{stopColor:l.colors.primary60,offset:"0%"}),_(e).createElement("stop",{stopColor:l.colors.primary100,offset:"99.9727331%"}),_(e).createElement("stop",{stopColor:l.colors.filterBg,offset:"100%"})),_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-3"},_(e).createElement("stop",{stopColor:l.colors.primary60,offset:"0%"}),_(e).createElement("stop",{stopColor:l.colors.primary100,offset:"100%"}))),_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},_(e).createElement("g",{id:"Group-10",transform:"translate(2.000000, 2.000000)"},_(e).createElement("path",{d:"M74,124.741589 L74,161.762456 C74,163.553649 72.5479505,165.005699 70.7567568,165.005699 C70.191601,165.005699 69.6362551,164.858017 69.1457523,164.57729 L6.67495026,128.823589 L6.67495026,128.823589 C2.54398439,126.459328 0,122.095239 0,117.373019 L0,47.9293229 C0,43.2071024 2.54398439,38.843014 6.67495026,36.4787525 L67.3072083,1.77729956 C71.4477337,-0.592433188 76.5522663,-0.592433188 80.6927917,1.77729956 L141.32505,36.4787525 C145.456016,38.843014 148,43.2071024 148,47.9293229 L148,117.373019 C148,122.095239 145.456016,126.459328 141.32505,128.823589 L92.2812226,156.892675",id:"Path-Copy-5",stroke:"url(#linearGradient-1)",strokeWidth:"3"}),_(e).createElement("g",{id:"Group",transform:"translate(26.000000, 44.000000)",fill:"url(#linearGradient-2)",stroke:"url(#linearGradient-3)",strokeWidth:"0.5"},_(e).createElement("path",{d:"M27.9631397,3.55271368e-15 C33.4624013,3.55271368e-15 38.3808566,2.52087 41.6553672,6.48487465 L81.9472527,6.48596321 C84.0762362,6.48596321 85.8021183,8.23554166 85.8021183,10.3937561 L85.802,28.325 L88.2515308,28.3252823 L88.251,32.429 L93,32.4298161 L93,59.7472937 L85.8455246,67 L58.8980359,67 L58.898,62.186 L54.8490941,62.1863343 L54.849,59.703 L23.5644342,59.7032914 C21.4354508,59.7032914 19.7095687,57.9537129 19.7095687,55.7954985 L19.7093454,34.1452905 C18.6082798,33.562194 17.574686,32.8660733 16.6235455,32.0721158 L14.6182598,34.103252 L14.8620406,34.3506585 C15.8011053,35.3026166 15.8011053,36.8460456 14.8620406,37.7980037 L7.72142069,45.0366643 C6.78235595,45.9886224 5.25983119,45.9886224 4.32076645,45.0366643 L1.70429855,42.3842723 C0.765233815,41.4323142 0.765233815,39.8888852 1.70429855,38.9369271 L8.84491844,31.6982665 C9.78398317,30.7463084 11.3065079,30.7463084 12.2455727,31.6982665 L12.4882598,31.944252 L14.4672092,29.9403992 C11.7540916,26.766322 10.112393,22.6254316 10.112393,18.0958374 C10.112393,8.10178235 18.1044446,3.55271368e-15 27.9631397,3.55271368e-15 Z M91.688386,33.7594385 L60.2096499,33.7594385 L60.2096499,65.6703775 L84.84,65.67 L84.840268,58.7282349 L91.688,58.728 L91.688386,33.7594385 Z M91.538,59.348 L85.4523545,59.3487254 L85.452,65.518 L91.538,59.348 Z M87.6394442,28.9457728 L55.4611807,28.9457728 L55.4611807,61.5658438 L58.898,61.565 L58.8980359,32.4298161 L87.639,32.429 L87.6394442,28.9457728 Z M84.49,15.163 L45.5807319,15.1635935 C45.7341329,16.1179982 45.8138864,17.0974762 45.8138864,18.0958374 C45.8138864,28.0898924 37.8218349,36.1916747 27.9631397,36.1916747 C25.5007911,36.1916747 23.1548876,35.6862683 21.0208682,34.7722046 L21.0211827,55.7954985 C21.0211827,57.2193827 22.1598352,58.3736689 23.5644342,58.3736689 L54.849,58.373 L54.8490941,28.3252823 L84.49,28.325 L84.49,15.163 Z M78.4992495,48.4723056 C78.6682725,48.4723056 78.8052927,48.6112071 78.8052927,48.7825508 C78.8052927,48.9538945 78.6682725,49.0927961 78.4992495,49.0927961 L67.0125174,49.0927961 C66.8434944,49.0927961 66.7064742,48.9538945 66.7064742,48.7825508 C66.7064742,48.6112071 66.8434944,48.4723056 67.0125174,48.4723056 L78.4992495,48.4723056 Z M9.77236959,32.6384516 L2.63174971,39.8771121 C2.2049021,40.3098203 2.2049021,41.011379 2.63174971,41.4440872 L5.24821761,44.0964792 C5.67506522,44.5291874 6.36712193,44.5291874 6.79396954,44.0964792 L13.9345894,36.8578186 C14.361437,36.4251104 14.361437,35.7235518 13.9345894,35.2908435 L11.3181215,32.6384516 C10.8912739,32.2057433 10.1992172,32.2057433 9.77236959,32.6384516 Z M85.5477644,42.7970878 C85.7167874,42.7970878 85.8538076,42.9359893 85.8538076,43.107333 C85.8538076,43.2786767 85.7167874,43.4175783 85.5477644,43.4175783 L67.1689931,43.4175783 C66.9999701,43.4175783 66.8629499,43.2786767 66.8629499,43.107333 C66.8629499,42.9359893 66.9999701,42.7970878 67.1689931,42.7970878 L85.5477644,42.7970878 Z M27.9631397,1.32962246 C18.828829,1.32962246 11.424007,8.83611256 11.424007,18.0958374 C11.424007,27.3555622 18.828829,34.8620523 27.9631397,34.8620523 C37.0974505,34.8620523 44.5022724,27.3555622 44.5022724,18.0958374 C44.5022724,8.83611256 37.0974505,1.32962246 27.9631397,1.32962246 Z M14.8764421,30.4029656 L12.9212598,32.383252 L14.1852598,33.665252 L16.1555297,31.6676037 C15.7087055,31.2678064 15.281777,30.8456865 14.8764421,30.4029656 Z M27.9631397,4.408293 C35.4201767,4.408293 41.4652995,10.5364153 41.4652995,18.0958374 C41.4652995,25.6552594 35.4201767,31.7833817 27.9631397,31.7833817 C20.5061028,31.7833817 14.46098,25.6552594 14.46098,18.0958374 C14.46098,10.5364153 20.5061028,4.408293 27.9631397,4.408293 Z M27.9631397,5.02878348 C20.8441489,5.02878348 15.0730665,10.8791028 15.0730665,18.0958374 C15.0730665,25.312572 20.8441489,31.1628913 27.9631397,31.1628913 C35.0821306,31.1628913 40.853213,25.312572 40.853213,18.0958374 C40.853213,10.8791028 35.0821306,5.02878348 27.9631397,5.02878348 Z M27.9631397,8.46202001 C28.1321628,8.46202001 28.269183,8.60092153 28.269183,8.77226525 C28.269183,8.94360896 28.1321628,9.08251049 27.9631397,9.08251049 C23.0526379,9.08251049 19.0718897,13.1179144 19.0718897,18.0958374 C19.0718897,18.2671811 18.9348694,18.4060826 18.7658464,18.4060826 C18.5968234,18.4060826 18.4598031,18.2671811 18.4598031,18.0958374 C18.4598031,12.775227 22.7145919,8.46202001 27.9631397,8.46202001 Z M42.6549454,7.81468876 C44.0125608,9.8045911 44.9869199,12.0837237 45.4698482,14.5424266 L84.49,14.542 L84.4905043,10.3937561 C84.4905043,8.96987187 83.3518518,7.81558567 81.9472527,7.81558567 L42.6549454,7.81468876 Z",id:"Combined-Shape"})))))};var ct=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 2.000000)",stroke:l.colors.primary60,strokeWidth:"3"},_(e).createElement("path",{d:"M74,102.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",id:"Path-Copy-3",strokeLinecap:"round"}),_(e).createElement("path",{d:"M51,49 L119,49 C120.104569,49 121,49.8954305 121,51 L121,92 C121,93.1045695 120.104569,94 119,94 L51,94 L51,94",id:"Path",fill:l.colors.primary20}),_(e).createElement("line",{x1:"50.5",y1:"117.664666",x2:"50.5",y2:"46",id:"Line-2",strokeLinecap:"round"}),_(e).createElement("path",{d:"M90.239435,81.7782712 C90.0631269,82.1676449 89.8758447,82.5512259 89.6779671,82.9286394 L82.2989672,82.9286393 L81.8937728,82.0669236 L78.1172716,83.9875645 L76.5591632,79.8394848 C76.3961623,79.1332341 76.5739129,78.396551 77.0393222,77.8413752 L79.8721037,74.4622162 C79.8249919,73.8746857 79.8009823,73.2808202 79.8009823,72.6814838 C79.8009823,67.7927344 81.3963573,63.2674855 84.107847,59.5756058 C84.5362871,59.0098353 84.997813,58.7370453 85.4095325,58.6086382 C86.0930507,58.3954624 86.7419904,58.5264664 87.2751427,58.9131117 C90.61381,63.2761567 92.1990177,67.7991512 92.1990177,72.6814838 C92.1990177,73.2808202 92.1750081,73.8746857 92.1278963,74.4622162 L94.9606778,77.8413752 C95.3806819,78.3423882 95.5664172,78.9912204 95.4788634,79.6321076 L94.9309945,83.6424664 L90.239435,81.7782712 Z",id:"Path",fill:l.colors.white}),_(e).createElement("path",{d:"M18.4450668,124.33815 C20.3880749,122.496562 22.421736,120.749671 24.5386602,119.104867 L22.349674,115.734124 C21.7480823,114.807754 22.0113671,113.569097 22.9377371,112.967505 L31.3244427,107.521115 C32.2508127,106.919523 33.4894703,107.182808 34.0910619,108.109178 L36.2893205,111.494199 C43.9325843,107.429769 52.2997247,104.546693 61.1471982,103.088517",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M74.5,102 C86.2343886,102 97.389559,104.479928 107.469997,108.944271 L109.522759,105.388784 C110.075043,104.432199 111.298224,104.104449 112.254809,104.656733 L125.245191,112.156733 C126.201776,112.709018 126.529526,113.932199 125.977241,114.888784 L123.825459,118.615781 C126.097192,120.345426 128.275354,122.191655 130.351025,124.145546",id:"Path",strokeLinecap:"round"}),_(e).createElement("line",{x1:"82.5",y1:"19.5",x2:"82.5",y2:"32.5278784",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"82.5",y1:"19.5",x2:"82.5",y2:"32.5278784",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(82.500000, 26.000000) rotate(-270.000000) translate(-82.500000, -26.000000) "}),_(e).createElement("line",{x1:"30.5",y1:"40.3",x2:"30.5",y2:"48.1167271",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"30.4916365",y1:"40.2916365",x2:"30.4916365",y2:"48.1083635",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(30.491636, 44.200000) rotate(-270.000000) translate(-30.491636, -44.200000) "}),_(e).createElement("line",{x1:"17.5",y1:"78.4333333",x2:"17.5",y2:"89.7241613",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"17.4879193",y1:"78.4212527",x2:"17.4879193",y2:"89.7120807",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(17.487919, 84.066667) rotate(-270.000000) translate(-17.487919, -84.066667) "}))))};var st=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 2.000000)"},_(e).createElement("path",{d:"M74,124.060611 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",id:"Path-Copy-6",stroke:l.colors.primary60,strokeWidth:"3",strokeLinecap:"round"}),_(e).createElement("path",{d:"M80,75.4190948 C80,70.9185608 80,64.1677599 80,55.166692 L89.166692,46 L122.184615,46 C122.924232,46 123.52381,46.5995776 123.52381,47.3391941 C123.52381,68.5174474 123.52381,82.6975707 123.52381,89.8795641 L123.52381,98.4049324 C123.52381,98.9609384 123.52381,99.7949476 123.52381,100.90696 C123.52381,101.646576 122.924232,102.246154 122.184615,102.246154 C119.775905,102.246154 117.969372,102.246154 116.765016,102.246154 L107.980724,68.9485742 L80,75.4190948 Z",id:"Path",fill:l.colors.primary20,transform:"translate(101.761905, 74.123077) rotate(-345.000000) translate(-101.761905, -74.123077) "}),_(e).createElement("path",{d:"M80,75.4190948 C80,70.9185608 80,64.1677599 80,55.166692 L89.166692,46 L122.184615,46 C122.924232,46 123.52381,46.5995776 123.52381,47.3391941 C123.52381,68.5174474 123.52381,82.6975707 123.52381,89.8795641 L123.52381,98.4049324 L123.52381,98.4049324 C123.52381,98.9609384 123.52381,99.7949476 123.52381,100.90696 C123.52381,101.646576 122.924232,102.246154 122.184615,102.246154 C119.775905,102.246154 117.969372,102.246154 116.765016,102.246154",id:"Path-Copy-7",stroke:l.colors.primary60,strokeWidth:"3",transform:"translate(101.761905, 74.123077) rotate(-345.000000) translate(-101.761905, -74.123077) "}),_(e).createElement("path",{d:"M96.001211,42.535856 L96.001211,50.4262472 C96.001211,51.1658637 95.4016334,51.7654413 94.6620169,51.7654413 L86.7369994,51.7654413",id:"Path-Copy-10",stroke:l.colors.primary60,strokeWidth:"3",transform:"translate(91.369105, 47.150649) rotate(-345.000000) translate(-91.369105, -47.150649) "}),_(e).createElement("path",{d:"M48.907368,38.345876 L48.907368,46.2362671 C48.907368,46.9758836 48.3077904,47.5754613 47.5681739,47.5754613 L39.6431564,47.5754613",id:"Path-Copy-10",stroke:l.colors.primary60,strokeWidth:"3",fill:l.colors.primary20,transform:"translate(44.275262, 42.960669) rotate(-15.000000) translate(-44.275262, -42.960669) "}),_(e).createElement("path",{d:"M40.6569874,54.4287231 C40.6569874,51.8308869 40.6569874,47.9341327 40.6569874,42.7384605 L49.8236794,33.5717685 L82.8416028,33.5717685 C83.5812193,33.5717685 84.1807969,34.1713461 84.1807969,34.9109626 C84.1807969,43.0635825 84.1807969,50.179161 84.1807969,56.257698",id:"Path",stroke:l.colors.primary60,strokeWidth:"3",transform:"translate(62.418892, 44.914733) rotate(-15.000000) translate(-62.418892, -44.914733) "}),_(e).createElement("path",{d:"M53.634268,124 L34,124 C32.8954305,124 32,123.104569 32,122 L32,62 C32,60.8954305 32.8954305,60 34,60 L53.5584816,60 C54.4193424,60 55.1836201,60.5508602 55.4558482,61.3675445 L58.3333333,70 L107,70 C108.104569,70 109,70.8954305 109,72 L109,122 C109,123.104569 108.104569,124 107,124 L74,124",id:"Path",stroke:l.colors.primary60,strokeWidth:"3",strokeLinecap:"round"}),_(e).createElement("line",{x1:"32",y1:"80.4611735",x2:"96.5731",y2:"80.4611735",id:"Line-7",stroke:l.colors.primary60,strokeWidth:"3",strokeLinecap:"round"}))))};var dt=t=>{const{width:r,height:o,theme:l}=t,a=r||"165px",n=o||"184px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 165 184",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 1.000000)",fillRule:"nonzero"},_(e).createElement("path",{d:"M80.5,163.67556 L80.5,177.071797 C80.5,179.280936 78.709139,181.071797 76.5,181.071797 C75.7978533,181.071797 75.1080768,180.886972 74.5,180.535898 L5.39265015,140.636751 L5.39265015,140.636751 C2.29863938,138.850423 0.39265015,135.549153 0.39265015,131.976497 L0.39265015,51.0235027 C0.39265015,47.4508468 2.29863938,44.1495766 5.39265015,42.3632487 L75.5,1.88675135 C78.5940108,0.100423396 82.4059892,0.100423396 85.5,1.88675135 L155.60735,42.3632487 C158.701361,44.1495766 160.60735,47.4508468 160.60735,51.0235027 L160.60735,131.976497 C160.60735,135.549153 158.701361,138.850423 155.60735,140.636751 L94.0407624,176.182237",id:"Path",stroke:l.colors.primary60,strokeWidth:"3",strokeLinecap:"round"}),_(e).createElement("g",{id:"Group-11",transform:"translate(47.000000, 21.000000)",stroke:l.colors.primary60,strokeWidth:"2"},_(e).createElement("path",{d:"M53.9942579,39.5219471 L55.8288797,35.8527035 C56.3228582,34.8647465 57.5242043,34.4642978 58.5121613,34.9582763 C58.8992161,35.1518037 59.2130611,35.4656487 59.4065885,35.8527035 L61.2412103,39.5219471 C62.5603369,42.1602003 63.2470936,45.0693486 63.2470936,48.0190054 L63.2470936,122.095329 C63.2470936,122.647613 62.7993784,123.095329 62.2470936,123.095329 L52.9883746,123.095329 C52.4360898,123.095329 51.9883746,122.647613 51.9883746,122.095329 L51.9883746,48.0190054 C51.9883746,45.0693486 52.6751313,42.1602003 53.9942579,39.5219471 Z",id:"Rectangle",fill:l.colors.white,strokeLinejoin:"round"}),_(e).createElement("path",{d:"M5.75878973,39.5219471 L7.59341152,35.8527035 C8.08739002,34.8647465 9.2887361,34.4642978 10.2766931,34.9582763 C10.6637479,35.1518037 10.9775929,35.4656487 11.1711203,35.8527035 L13.0057421,39.5219471 C14.3248687,42.1602003 15.0116254,45.0693486 15.0116254,48.0190054 L15.0116254,122.095329 C15.0116254,122.647613 14.5639102,123.095329 14.0116254,123.095329 L4.75290636,123.095329 C4.20062161,123.095329 3.75290636,122.647613 3.75290636,122.095329 L3.75290636,48.0190054 C3.75290636,45.0693486 4.43966311,42.1602003 5.75878973,39.5219471 Z",id:"Rectangle",fill:l.colors.white,strokeLinejoin:"round"}),_(e).createElement("path",{d:"M26.5571232,7.82445311 L30.2061982,2.5285507 C31.4596375,0.709434189 33.9504362,0.250862247 35.7695527,1.5043016 C36.1704572,1.78053976 36.5175637,2.12764628 36.7938018,2.5285507 L40.4428768,7.82445311 C44.9645408,14.386744 47.3857535,22.1679451 47.3857535,30.1372052 L47.3857535,93.8226591 L47.3857535,93.8226591 L19.6142465,93.8226591 L19.6142465,30.1372052 C19.6142465,22.1679451 22.0354592,14.386744 26.5571232,7.82445311 Z",id:"Rectangle",fill:l.colors.primary60,strokeLinejoin:"round"}),_(e).createElement("path",{d:"M40.5745738,117.355362 L41.6399673,64.4923457 L45.0007027,77.8303078 C46.8757338,85.2718617 50.6334929,92.105976 55.9127551,97.6757028 L59.211122,101.155546 C62.0658223,104.167311 63.9962059,107.93508 64.7730365,112.011424 L65.5485066,116.080629 C65.5463599,116.477108 65.4504565,116.810566 65.2566953,117.04474 C65.0889845,117.247429 64.8478844,117.355362 64.582866,117.355362 L40.5745738,117.355362 Z",id:"Path-3",fill:l.colors.primary60}),_(e).createElement("path",{d:"M1.02035692,117.355362 L2.08575042,64.4923457 L5.44648581,77.8303078 C7.32151692,85.2718617 11.079276,92.105976 16.3585383,97.6757028 L19.6569052,101.155546 C22.5116054,104.167311 24.441989,107.93508 25.2188196,112.011424 L25.9942897,116.080629 C25.992143,116.477108 25.8962396,116.810566 25.7024785,117.04474 C25.5347676,117.247429 25.2936675,117.355362 25.0286491,117.355362 L1.02035692,117.355362 Z",id:"Path-3-Copy",fill:l.colors.primary60,transform:"translate(13.722892, 87.691223) scale(-1, 1) translate(-13.722892, -87.691223) "}),_(e).createElement("path",{d:"M26.9474568,46.6158047 L29.0688728,42.5574438 C30.348114,40.1101998 33.3690271,39.1633464 35.816271,40.4425876 C36.7204907,40.9152479 37.4584669,41.6532241 37.9311272,42.5574438 L40.0525432,46.6158047 C41.8462831,50.0473072 42.7831325,53.8618634 42.7831325,57.7339058 L42.7831325,122.875685 L42.7831325,122.875685 L24.2168675,122.875685 L24.2168675,57.7339058 C24.2168675,53.8618634 25.1537169,50.0473072 26.9474568,46.6158047 Z",id:"Rectangle",fill:l.colors.white,strokeLinejoin:"round"}),_(e).createElement("path",{d:"M46.626506,125.104601 L20.373494,125.104601 L20.373494,118.032312 C20.373494,116.079353 21.1650869,114.311281 22.4449195,113.031448 C23.7247521,111.751616 25.4928244,110.960023 27.4457831,110.960023 L39.5542169,110.960023 C41.5071756,110.960023 43.2752479,111.751616 44.5550805,113.031448 C45.8349131,114.311281 46.626506,116.079353 46.626506,118.032312 L46.626506,125.104601 Z",id:"Rectangle",fill:l.colors.white}),_(e).createElement("line",{x1:"33.5",y1:"101.484119",x2:"33.5",y2:"129.203332",id:"Line",fill:l.colors.primary20,strokeLinecap:"round"})))))};var pt=t=>{const{width:r,height:o,theme:l}=t,a=r||"152px",n=o||"169px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 152 169",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Group",transform:"translate(2.000000, 2.000000)",stroke:l.colors.primary60,strokeWidth:"3"},_(e).createElement("path",{d:"M74,117.371134 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M108.882866,90.7418658 C109.714261,87.6976379 110.158112,84.4934359 110.158112,81.185567 C110.158112,61.2008302 93.9572813,45 73.9725445,45 C53.9878077,45 37.7869775,61.2008302 37.7869775,81.185567 C37.7869775,97.3610095 48.4003337,111.05757 63.0430857,115.691287",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M73.9725445,117.371134 C77.5908988,117.371134 81.0852119,116.840051 84.3817866,115.851582 C89.8928309,114.19911 94.8512468,111.268362 98.9127122,107.40366",id:"Path",strokeLinecap:"round"}),_(e).createElement("circle",{id:"Oval-Copy",fillOpacity:"0.196268575",fill:l.colors.primary60,cx:"104.127184",cy:"99.2783505",r:"9.64948454"}),_(e).createElement("path",{d:"M120.255984,85.4659665 C128.43855,89.8418956 133.002057,93.9015871 132.226834,96.7947568 C131.38817,99.9246931 124.455699,101.112837 113.853361,100.515516",id:"Path",strokeLinecap:"round"}),_(e).createElement("path",{d:"M94.0573111,98.0477535 C86.8513781,96.7649447 79.0016836,95.0204726 70.8507066,92.8364249 C38.6777508,84.2157074 13.9941115,72.0109683 15.718255,65.5763772 C16.4982546,62.6653791 22.5493576,61.4340187 31.9215354,61.7565326",id:"Path",strokeLinecap:"round"}),_(e).createElement("line",{x1:"96.5",y1:"22.5",x2:"96.5",y2:"35.5278784",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"96.5",y1:"22.5",x2:"96.5",y2:"35.5278784",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(96.500000, 29.000000) rotate(-270.000000) translate(-96.500000, -29.000000) "}),_(e).createElement("line",{x1:"38.5",y1:"38.3",x2:"38.5",y2:"46.1167271",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"38.4916365",y1:"38.2916365",x2:"38.4916365",y2:"46.1083635",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(38.491636, 42.200000) rotate(-270.000000) translate(-38.491636, -42.200000) "}),_(e).createElement("line",{x1:"98",y1:"122.266667",x2:"98",y2:"129.214868",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"97.9925658",y1:"122.259232",x2:"97.9925658",y2:"129.207434",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(97.992566, 125.733333) rotate(-270.000000) translate(-97.992566, -125.733333) "}),_(e).createElement("line",{x1:"40.5",y1:"122.433333",x2:"40.5",y2:"133.724161",id:"Line-6",strokeLinecap:"round"}),_(e).createElement("line",{x1:"40.4879193",y1:"122.421253",x2:"40.4879193",y2:"133.712081",id:"Line-6-Copy",strokeLinecap:"round",transform:"translate(40.487919, 128.066667) rotate(-270.000000) translate(-40.487919, -128.066667) "}))))};var mt=t=>{const{width:r,height:o}=t,l=r||"70px",a=o||"70px";return _(e).createElement("svg",{width:l,height:a,viewBox:"0 0 70 70",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("defs",null,_(e).createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"156.737419%",id:"linearGradient-1"},_(e).createElement("stop",{stopColor:"#879FFA",offset:"0%"}),_(e).createElement("stop",{stopColor:"#4268F6",offset:"99.9727331%"}),_(e).createElement("stop",{stopColor:"#343F87",offset:"100%"}))),_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Titles",transform:"translate(-385.000000, -7458.000000)"}),_(e).createElement("g",{id:"Atoms/Logotype/AdminJS-Icon",transform:"translate(-1.000000, 0.000000)",fill:"url(#linearGradient-1)"},_(e).createElement("path",{d:"M16.7602339,70 C8.05609707,70 1,62.8533093 1,54.0374194 C1,53.9682136 1,53.8991107 1.00130187,53.8301132 L1,22.9143087 C1,20.8434493 2.09140055,18.9297567 3.86338726,17.8935646 L33.1323931,0.778135721 C34.9066409,-0.259378574 37.0933591,-0.259378574 38.8676069,0.778135721 L68.1366127,17.8935646 C69.9085995,18.9297567 71,20.8434493 71,22.9143087 L71,53.8301132 C71,53.8991107 71,53.9682136 71,54.0374194 C71,62.8533093 63.9439029,70 55.2397661,70 C48.956271,70 43.5316289,66.2756016 41.000388,60.8874748 L30.9996134,60.8874746 C28.4683711,66.2756016 23.043729,70 16.7602339,70 Z M42.4071164,52.0535685 L49.286347,55.9002087 C49.3726881,55.9484877 49.4674103,55.9799906 49.5654997,55.9930498 C49.9942382,56.0501299 50.3881408,55.7493582 50.4453059,55.3212573 L50.9862522,51.2701936 C51.0435183,50.8413367 50.9203125,50.4079524 50.6459328,50.0730981 L44.5789333,42.6689041 C44.7320926,41.2424028 44.8106582,39.7936129 44.8106582,38.3265003 C44.8106582,29.5814111 42.0191822,21.4873364 37.2774223,14.8842173 C37.1963826,14.7713658 37.102102,14.6428342 36.9945806,14.4986225 C36.9225034,14.40195 36.8366488,14.3163052 36.7397388,14.2444037 C36.1904687,13.8368773 35.4140149,13.950685 35.0054843,14.4986027 C34.8964818,14.6447939 34.8009947,14.7749825 34.7190227,14.8891686 C29.9794226,21.4913824 27.1893418,29.5835968 27.1893418,38.3265003 C27.1893418,39.7936129 27.2679074,41.2424028 27.4210667,42.6689041 L21.3540672,50.0730981 C21.0796875,50.4079524 20.9564817,50.8413367 21.0137478,51.2701936 L21.5546941,55.3212573 C21.6118592,55.7493582 22.0057618,56.0501299 22.4345003,55.9930498 C22.5325897,55.9799906 22.6273119,55.9484877 22.713653,55.9002087 L29.5928836,52.0535685 C29.9697355,53.091548 30.3881053,54.1096585 30.8459893,55.1058994 L41.1540107,55.1058994 C41.6118947,54.1096585 42.0302645,53.091548 42.4071164,52.0535685 Z M35.5,34 C33.5670034,34 32,32.4329966 32,30.5 C32,28.5670034 33.5670034,27 35.5,27 C37.4329966,27 39,28.5670034 39,30.5 C39,32.4329966 37.4329966,34 35.5,34 Z",id:"Shape-Copy-5"}))))};var ut=t=>{const{width:r,height:o,theme:l}=t,a=r||"72px",n=o||"72px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 72 72",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("defs",null,_(e).createElement("polygon",{id:"path-1",points:"0 0.0011886196 40.3991072 0.0011886196 40.3991072 46.0126533 0 46.0126533"})),_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Atoms/Logotype/SoftwareBrothers"},_(e).createElement("g",{id:"software-brothers-logo-compact"},_(e).createElement("circle",{id:"Oval",fill:l.colors.love,fillRule:"nonzero",cx:"36",cy:"36",r:"36"}),_(e).createElement("g",{id:"Clipped",transform:"translate(14.794521, 11.835616)"},_(e).createElement("g",{id:"Path"}),_(e).createElement("path",{d:"M15.1239452,41.020451 C12.7951716,42.4990938 10.8553199,43.139787 8.58363578,43.139787 C8.36241418,43.139787 6.87095246,43.1552118 5.78982111,42.4503604 C5.04765834,41.964215 4.54098952,41.1690285 4.54098952,40.4463477 C4.54098952,39.0200042 5.62568896,37.9359831 7.5132087,37.7838398 C10.8469944,37.517589 13.0247188,39.0057408 15.0882643,40.6103772 L15.3891732,40.8528556 L15.1239452,41.020451 Z M39.4250185,22.9760169 C39.3631716,22.3115785 39.3370056,21.5829547 39.5391974,20.9648725 C42.3591781,12.3140991 38.0560612,3.78337619 29.3380274,1.04598525 C25.7842095,-0.0689399368 21.7379952,-0.142634352 18.4850862,0.142634352 C14.5685125,0.484956797 10.7482772,1.63435195 7.38832554,3.89510643 C3.49672844,6.51244679 0.780222401,9.92259642 0.116557615,14.7590896 C-0.38297502,18.3950769 0.788547945,21.4593383 2.80689766,24.4320759 C3.08164061,24.8362065 3.71081386,25.4947018 4.16515068,25.4947018 C4.60402579,25.4947018 4.902556,25.0430263 4.77172603,24.622255 C4.56557384,23.9463415 4.3689131,23.267573 4.18180177,22.5861496 C2.67368896,17.0329189 4.53147462,11.4262002 9.00704915,8.02080506 C14.1296374,4.11856691 24.3462691,3.56942466 29.8530218,6.89993678 C33.9729766,9.38890622 36.0781499,14.0518609 34.6045286,18.4961096 C34.2834005,19.4672118 33.7541338,20.0936143 33.6601741,21.0421328 C33.5852442,21.8004721 33.791004,24.2894415 33.8778276,25.9392455 C33.9135085,26.625079 33.9943852,27.3132898 33.9920064,28.0015005 C33.9896277,28.8763246 33.4900951,29.4290327 32.5790427,29.4290327 C30.7807252,29.4290327 30.665357,30.2016354 30.4227268,31.4461201 C30.0564029,33.3158188 29.8030685,35.2473256 29.1322675,37.0088599 C27.739523,40.6721855 23.6397873,43.3917471 20.5212764,41.3901117 C20.8852216,41.0014331 21.2182434,40.6293952 21.4668203,40.3465037 C21.8022208,39.9613909 22.1197808,39.5620148 22.4087961,39.1400548 C23.9906495,36.8376986 24.6281483,34.6209231 24.8208251,33.7912666 C25.5106559,30.8173404 24.5151587,27.3109125 21.3490733,26.0652392 L20.9066301,25.8917007 L21.3264754,25.665863 C21.7566362,25.4369843 22.1768613,25.1899243 22.5860113,24.925353 C27.6622143,21.6186133 28.9181821,18.8122824 29.4533956,17.6129652 C29.8458856,16.7333867 30.4762482,14.0863309 29.0763674,11.8814415 C28.2331088,10.4871907 26.6976406,9.18446365 24.3070201,8.59847418 C21.8628783,7.99822129 19.2224915,8.06359536 16.8318711,8.49149842 C15.4462627,8.74110854 12.3836519,9.60404636 10.3676809,11.5284215 C8.1959033,13.6013741 7.14807413,16.6751444 8.31721837,18.2262929 C8.44329089,18.3938883 8.63121031,18.3808135 8.70614021,18.3665501 C8.90945547,18.3270044 9.07422409,18.178348 9.13431104,17.9802487 C10.1048316,14.7816733 12.5513521,12.5946133 16.2086446,11.6567924 C19.1832425,10.8936986 21.9092635,11.1860991 23.0784077,11.4321433 C24.6376632,11.7602023 25.8079968,12.6813825 26.2088122,13.9448851 C26.5894085,15.1453909 26.6108171,17.213589 23.8277067,20.2517007 C20.5605254,23.8175595 16.3703981,25.3389926 14.0927671,25.9285479 L13.6503239,26.0426554 L13.8406221,25.6242613 C14.3163674,24.5747102 14.7849766,23.5703267 15.2393135,22.6004131 C15.4795649,22.088118 15.7114907,21.5900864 15.9350911,21.1075068 C16.0183465,20.9411001 16.2003191,20.5654963 16.4274875,20.100746 C16.9543755,19.0238567 17.7167575,17.466765 17.9760387,16.9509041 C18.3364158,16.2317893 18.1663368,15.4128303 17.5740338,15.001568 L16.789054,14.4583688 C16.5220516,14.2752054 16.1876343,14.219504 15.8756229,14.3062255 C15.5681267,14.387068 15.3116076,14.5986726 15.1738985,14.8850832 C13.0702745,19.4788203 10.9785737,24.0780012 8.89881708,28.6825796 C8.72041257,29.0855216 8.75371475,29.5443288 8.9892087,29.9104236 C9.3793199,30.5178082 9.87171636,31.062196 10.4521257,31.5269463 C10.5845427,31.6350458 10.7598401,31.6752234 10.9261587,31.635593 C11.0924773,31.5959625 11.2307763,31.4810613 11.3001418,31.3248809 C11.6664658,30.4857155 12.4288477,28.7645943 12.4288477,28.7645943 L12.5121031,28.7325016 C13.9725165,28.1693248 15.5212024,27.8691176 17.0863948,27.8457914 C18.7895633,27.8101328 20.019365,28.249922 20.729415,29.1497071 C21.1016857,29.621589 21.5857566,30.5831823 21.3276648,31.9156249 C21.1147687,33.0115321 20.5973956,34.3083161 19.9170798,35.583705 C19.806469,35.792902 19.5376728,36.2612181 19.518643,36.2956881 C18.9155462,37.3180961 18.1946324,38.2663466 17.3706527,39.1210369 C16.7189303,38.5316649 16.0431957,37.9693676 15.3451668,37.4355743 C14.3342079,36.6594057 12.5204287,35.5658757 10.9825818,35.0654668 C9.59816277,34.6161686 8.52892506,34.3938967 6.81029492,34.5424742 C4.06167607,34.7825753 1.85064948,36.5346006 1.47243191,39.3623267 C1.19887832,41.3960548 2.25741176,43.9717935 4.80264948,45.1461496 C5.92550458,45.6227031 7.1202934,45.9079553 8.33743755,45.9900695 C10.0025463,46.0934795 12.0090024,45.8189083 13.8620306,45.3125564 C15.5770927,44.8442403 17.1779758,43.8648177 18.3506882,43.1385711 C18.5802353,43.2693193 19.2593618,43.723372 19.9706011,44.0549968 C20.7436873,44.4163372 21.5524545,44.657627 21.8581209,44.7396417 C25.501141,45.7202529 30.3228203,44.6861538 32.6016406,40.4724974 C33.9408638,37.9966027 34.8424013,35.2782297 35.8961773,32.6501918 C36.1851926,31.9310769 36.5063207,30.8577534 36.8119871,30.5427692 C37.0974343,30.2503688 37.5374988,30.1933151 38.8303368,30.1933151 C39.865083,30.1933151 40.2825496,29.5645353 40.1552877,28.5328135 C39.9269299,26.6821328 39.5962869,24.8314521 39.4238292,22.9748282 L39.4250185,22.9760169 Z",id:"Shape",fill:l.colors.white,fillRule:"nonzero"}))))))};var ht=t=>{const{width:r,height:o,theme:l}=t,a=r||"72px",n=o||"71px";return _(e).createElement("svg",{width:a,height:n,viewBox:"0 0 72 71",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},_(e).createElement("g",{id:"Atoms/Logotype/Github",transform:"translate(0.000000, 1.000000)",fill:l.colors.grey100,fillRule:"nonzero"},_(e).createElement("path",{d:"M67.1013759,17.4238423 C63.8854852,11.9137922 59.5233349,7.55147781 54.0137768,4.33591517 C48.5033986,1.12018851 42.4877084,-0.487264789 35.9624419,-0.487264789 C29.4379954,-0.487264789 23.4203371,1.12068054 17.9111071,4.33591517 C12.4010569,7.5513138 8.03907062,11.9137922 4.82317995,17.4238423 C1.60778132,22.9337284 -4.26325641e-14,28.9505666 -4.26325641e-14,35.4741931 C-4.26325641e-14,43.3105484 2.28628702,50.3571999 6.86000911,56.6159516 C11.4332392,62.8751953 17.3411754,67.206348 24.5833257,69.6099015 C25.4263326,69.7663662 26.0503872,69.6563161 26.4561458,69.2825393 C26.8620683,68.9082705 27.0647836,68.4395325 27.0647836,67.8782933 C27.0647836,67.7846441 27.0567472,66.9421293 27.0411663,65.3497648 C27.0250934,63.7574004 27.017549,62.3682432 27.017549,61.1829493 L25.9405011,61.3692637 C25.253795,61.4950587 24.3874989,61.5483616 23.3416128,61.5332728 C22.2962187,61.518676 21.2109704,61.4091179 20.087344,61.2054186 C18.9632255,61.0035234 17.9176674,60.5352774 16.9498497,59.8016646 C15.9825239,59.0680518 15.2958178,58.1077785 14.8898952,56.9223206 L14.4216492,55.8447808 C14.1095399,55.1274049 13.6181686,54.3304846 12.9468793,53.4569721 C12.27559,52.5826395 11.5967563,51.9899106 10.9100501,51.6778013 L10.5821959,51.4431042 C10.3637358,51.2871316 10.1610205,51.0990131 9.97355809,50.880717 C9.78625968,50.6624209 9.64603189,50.4439607 9.55238269,50.2251726 C9.45856948,50.0062204 9.53630979,49.8266304 9.78642369,49.6857466 C10.0365376,49.5448628 10.4885467,49.476471 11.1444191,49.476471 L12.0805831,49.6163707 C12.7049658,49.7415097 13.4772847,50.1152865 14.3985239,50.7399972 C15.3192711,51.3642158 16.0761731,52.1757329 16.6693941,53.1742204 C17.387754,54.4544755 18.2532301,55.4300017 19.2682825,56.101291 C20.2825148,56.7725803 21.3051116,57.1076509 22.3350888,57.1076509 C23.3650661,57.1076509 24.2546515,57.0295826 25.0041731,56.874266 C25.7528747,56.7181293 26.4553257,56.4834322 27.1111982,56.1714869 C27.3921458,54.0790587 28.1570843,52.4716054 29.4053576,51.3479789 C27.6261868,51.1610086 26.0266059,50.8794049 24.605795,50.5049721 C23.1858041,50.1300473 21.7184146,49.5215735 20.2046105,48.6779106 C18.6899863,47.8353958 17.4335125,46.7891817 16.434861,45.5410723 C15.4360456,44.292307 14.616328,42.6528719 13.9768565,40.6242432 C13.3370569,38.5947944 13.0170752,36.2537284 13.0170752,33.600389 C13.0170752,29.8224391 14.2504237,26.6075325 16.7166287,23.9538651 C15.5613485,21.1135553 15.6704146,17.9294824 17.0441549,14.4019744 C17.9494852,14.1206988 19.2920638,14.3317785 21.0712346,15.0339015 C22.8507335,15.7363525 24.1536219,16.338102 24.9812118,16.8370177 C25.8088018,17.3357694 26.4718907,17.7584209 26.9714624,18.1011999 C29.8752437,17.2898468 32.8718542,16.8840883 35.9621139,16.8840883 C39.0523736,16.8840883 42.0496401,17.2898468 44.9535854,18.1011999 L46.7329203,16.9779015 C47.9497039,16.2283799 49.3865877,15.5415097 51.0401276,14.917127 C52.6946515,14.2930723 53.9598178,14.1211908 54.8343144,14.4024664 C56.2385604,17.9301384 56.3636993,21.1140473 55.2080911,23.9543571 C57.6741321,26.6080245 58.9079727,29.8237512 58.9079727,33.600881 C58.9079727,36.2542204 58.5868428,38.6026669 57.9480273,40.6476965 C57.3083918,42.6930541 56.4816219,44.3308491 55.4673895,45.5645256 C54.4520091,46.7980382 53.1874989,47.8360518 51.6736948,48.6784026 C50.1595626,49.5214095 48.6916811,50.1298833 47.2716902,50.5048081 C45.8510433,50.8797329 44.2514624,51.1615006 42.4722916,51.348799 C44.0949977,52.753045 44.9065148,54.9696281 44.9065148,57.9975644 L44.9065148,67.8769812 C44.9065148,68.4382204 45.1016856,68.9067944 45.4923554,69.2812272 C45.882533,69.655004 46.4987153,69.7650541 47.3417221,69.6084254 C54.5848565,67.2051999 60.4927927,62.8738833 65.0658588,56.6146395 C69.6384328,50.3558878 71.9255399,43.3092364 71.9255399,35.472881 C71.9238998,28.9500746 70.3152984,22.9337284 67.1013759,17.4238423 Z",id:"Path"}))))};var bt=t=>{const{width:r,height:o}=t,l=r||"72px",a=o||"72px";return _(e).createElement("svg",{width:l,height:a,viewBox:"70 70 140 140",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},_(e).createElement("g",null,_(e).createElement("g",null,_(e).createElement("path",{style:{fill:"#E01E5A"},d:"M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z"}),_(e).createElement("path",{style:{fill:"#E01E5A"},d:"M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9V151.2z"})),_(e).createElement("g",null,_(e).createElement("path",{style:{fill:"#36C5F0"},d:"M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z"}),_(e).createElement("path",{style:{fill:"#36C5F0"},d:"M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9H118.8z"})),_(e).createElement("g",null,_(e).createElement("path",{style:{fill:"#2EB67D"},d:"M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z"}),_(e).createElement("path",{style:{fill:"#2EB67D"},d:"M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9V118.8z"})),_(e).createElement("g",null,_(e).createElement("path",{style:{fill:"#ECB22E"},d:"M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z"}),_(e).createElement("path",{style:{fill:"#ECB22E"},d:"M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9H151.2z"}))))};var ft=c.withTheme((t=>{const{variant:r,...o}=t,l=tt[r];return _(e).createElement(l,o)}));const gt=s.variant({variants:{grey:{flexGrow:1,bg:"bg",py:"xl",px:["0","xl"],className:ae(["Box","Box_Grey"])},white:{px:["default","xxl"],py:"xxl",bg:"white",className:ae(["Box","Box_White"])},card:{p:"xxl",bg:"white",className:ae(["Box","Box_Card"]),boxShadow:"card"}}}),qt=_(c).section`
  box-sizing: border-box;
  min-width: 0;
  ${({flex:e})=>e&&"boolean"==typeof e?"display: flex;":""}
  font-family: ${({theme:e})=>e.font};
  line-height: ${({theme:e})=>e.lineHeights.default};
  font-size: ${({theme:e})=>e.fontSizes.default};
  font-weight: normal;
  ${({animate:e})=>e?"transition: all 500ms;":""};

  ${s.space};
  ${s.color};
  ${s.layout};
  ${s.flexbox};
  ${s.border};
  ${s.shadow};
  ${s.position};
  ${gt};
`;qt.defaultProps={className:ae("Box")};var kt=qt;const vt=_(c)(kt)`

`;vt.defaultProps={width:"100%",height:"100%",bg:"grey100",opacity:.2,position:"fixed",top:0,left:0,zIndex:40,className:ae("Overlay")};var yt=vt;const xt=_(c).table`
  position: relative;
  font-family: ${({theme:e})=>e.font};
  color: ${({theme:e})=>e.colors.grey100};

  ${s.layout};
  border-collapse: collapse;
`;xt.defaultProps={width:1,className:ae("Table")};var wt=xt;const Ct=_(c).thead`
  background: ${ke("colors","grey20")};

  & a {
    color: ${ke("colors","grey60")};
    text-decoration: none;
    font-size: ${ke("fontSizes","sm")};
    white-space: nowrap;
    
    .${ae("Icon")} svg {
      fill: ${ke("colors","primary100")};
    }
  }
`;Ct.defaultProps={className:ae("TableHead")};var Et=Ct;const _t=_(c).tbody`

`;_t.defaultProps={className:ae("TableBody")};var $t=_t;const Lt=_(c).td`
  border-bottom: 1px solid ${({theme:e})=>e.colors.grey20};
  font-size: ${({theme:e})=>e.fontSizes.default};
  line-height: ${({theme:e})=>e.lineHeights.default};
  word-break: break-word;
  vertical-align: middle;
  ${s.color}; 
  ${s.space};
  ${s.layout};

  ${Et} & {
    color: ${({theme:e})=>e.colors.grey60};
    border: none;
  }
`;Lt.defaultProps={p:"lg",color:"grey100",className:ae("TableCell")};var St=Lt;const zt=_(c).tr`
  &:hover {
    background: ${({theme:e})=>e.colors.grey20};
  }
`;zt.defaultProps={className:ae("TableRow")};var Bt=zt;const Pt=_(c).caption`
  font-family: ${ke("font")};
  padding: ${ke("space","sm")} ${ke("space","lg")};
  text-align: left;
  color: ${ke("colors","white")};
  font-size: ${ke("fontSizes","default")};
  line-height: ${ke("lineHeights","default")};
  position: absolute;
  height: ${"42px"};
  left: 0;
  right: 0;
  top: -${"42px"};
  background: ${ke("colors","primary100")};
  box-sizing: border-box;
  vertical-align: middle;

  & ${_e} {
    color: ${ke("colors","white")};
    & > span svg {
      fill: ${ke("colors","white")};
    }
    &:hover {
      color: ${ke("colors","white")};
      .${ae("Icon")} svg {
        fill: ${ke("colors","white")};
      }
    }
  }

  & ${He} {
    color: ${ke("colors","white")};
  }
`;Pt.defaultProps={className:ae("TableCaption")};var Dt=Pt;const It=_(c).h3`
  font-family: ${ke("font")};
  vertical-align: middle;
  padding: 0;
  * {
    vertical-align: middle;
  }
  & ${_e}, a {
    vertical-align: bottom;
  }
  * > &:first-child {
    margin-top: ${ke("space","sm")};
  }
  ${ce} {
    vertical-align: middle;
  }

  ${s.typography};
  ${s.space};
`;It.defaultProps={fontWeight:"light",fontSize:"h3",lineHeight:"xl",className:ae(["Header","H3"]),marginTop:"xxl",marginBottom:"xl"};const Ft=_(c)((t=>_(e).createElement(It,{as:"h1",...t})))``;Ft.defaultProps={fontSize:"h1",lineHeight:"xxl",className:ae(["Header","H1"]),marginTop:"x4",marginBottom:"x3"};const Mt=_(c)((t=>_(e).createElement(It,{as:"h2",...t})))`
  & ${_e}, a {
    margin-bottom: 4px;
  }
`;Mt.defaultProps={fontSize:"h2",lineHeight:"xxl",className:ae(["Header","H2"]),marginTop:"x3",marginBottom:"xxl"};const Rt=It,At=_(c)((t=>_(e).createElement(It,{as:"h4",...t})))``;At.defaultProps={fontSize:"h4",lineHeight:"xl",className:ae(["Header","H4"]),marginTop:"xxl",marginBottom:"xl"};const Ot=_(c)((t=>_(e).createElement(It,{as:"h5",...t})))``;Ot.defaultProps={fontSize:"xl",lineHeight:"lg",className:ae(["Header","H5"]),marginTop:"xl",marginBottom:"default",fontWeight:"normal"};const Nt=_(c)((t=>_(e).createElement(It,{as:"h6",...t})))``;Nt.defaultProps={fontSize:"lg",lineHeight:"lg",className:ae(["Header","H6"]),marginTop:"lg",marginBottom:"default",fontWeight:"normal"};const Tt=Rt;Tt.H1=Ft,Tt.H2=Mt,Tt.H3=Rt,Tt.H4=At,Tt.H5=Ot,Tt.H6=Nt;const Ht=c.css`
  font-family: ${ke("font")};
  font-weight: ${ke("fontWeights","normal")};
  ${s.typography};
  ${s.space};
`,jt=(_(c)("div")`
  ${Ht};
  font-size: ${ke("fontSizes","sm")};
  line-height: ${ke("lineHeights","md")};
`,_(c)("div")`
  ${Ht};
  font-size: ${ke("fontSizes","md")};
  line-height: ${ke("lineHeights","lg")};
  margin: ${ke("space","lg")} 0;
  * > &:first-child {
    margin-top: 0;
  }
`,_(c)("div")`
  ${Ht};
  font-size: ${ke("fontSizes","xs")};
  line-height: ${ke("lineHeights","sm")};
`),Gt=_(c)("div")`
  ${Ht};
  font-size: ${ke("fontSizes","md")};
  line-height: ${ke("lineHeights","lg")};
`,Ut=c.css`
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
`,Wt=_(c).span`
  vertical-align: middle;
  display: inline-block;
  line-height: ${({theme:e})=>e.lineHeights.sm};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  
  & > svg {
    ${({theme:e,color:t})=>t?`fill: ${e.colors[t]}`:""};
    ${({spin:e})=>e?Ut:""};
  }
  ${({rounded:e})=>e?"border-radius: 9999px;":""};
  ${s.space};
  ${s.color};
`,Vt=t=>{const{icon:r,size:o,color:l,...a}=t,n=p[`${r}${o||16}`]||p.ErrorOutline16;return n?_(e).createElement(Wt,{className:ae("Icon"),color:l||"grey100",...a},_(e).createElement(n,null)):null};var Zt=Vt;const Jt=_(c)(qt)`
  border: 1px dotted ${ke("colors","primary20")};
  padding: ${ke("space","xl")};
  border-left: ${ke("space","md")} solid ${ke("colors","primary20")};
  padding-left: ${ke("space","xl")};
`;Jt.defaultProps={className:ae("Section")};var Yt=Jt;const Kt=_(c).div.attrs({className:"lds-facebook"})`
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
    background: ${({theme:e})=>e.colors.primary100};
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

`;var Xt=()=>_(e).createElement(qt,{p:"x3",style:{textAlign:"center"},"data-testid":"Loader",className:ae("Loader")},_(e).createElement(Kt,null,_(e).createElement("div",null),_(e).createElement("div",null),_(e).createElement("div",null)));const Qt=_(c).div`
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
  background: ${({theme:e})=>e.colors.white};
  background: ${({theme:e})=>(e=>`linear-gradient(to right, ${e.colors.grey60} 8%, ${e.colors.grey40} 18%, ${e.colors.grey20} 33%)`)(e)};
  background-size: 1000px 104px;
  height: 338px;
  position: relative;
  overflow: hidden;
  ${s.layout};
`;var er=({as:t,ref:r,...o})=>_(e).createElement(Qt,{as:t,...o,className:ae("Placeholder")});var tr=()=>{const[t,r]=e.useState();return e.useEffect((()=>{const e=()=>{r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),t||null};const rr=c.css`
  margin-top: -${e=>e.isVisible?ke("space","lg")(e):"0px"};

  &::after, &::before {
    top: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${7}px;
    border-color: ${ke("colors","primary100")} transparent transparent transparent;
  }

  &::before {
    margin-left: -${6}px;
    border-color: ${ke("colors","highlight")} transparent transparent transparent;
  }
`,or=c.css`
  margin-top: ${e=>e.isVisible?ke("space","lg")(e):"0px"};

  &::after, &::before {
    bottom: 100%;
    left: 50%;
  }

  &::after {
    margin-left: -${7}px;
    border-color: transparent transparent ${ke("colors","primary100")} transparent;
  }

  &::before {
    margin-left: -${6}px;
    border-color: transparent transparent ${ke("colors","highlight")} transparent;
  }
`,lr=c.css`
  margin-left: -${e=>e.isVisible?ke("space","lg")(e):"0px"};

  &::after, &::before {
    left: 100%;
    top: 50%;
  }

  &::after {
    margin-right: -${7}px;
    margin-top: -${7}px;
    border-color: transparent transparent transparent ${ke("colors","primary100")};
  }

  &::before {
    margin-right: -${6}px;
    margin-top: -${6}px;
    border-color: transparent transparent transparent ${ke("colors","highlight")};
  }
`,ar=c.css`
  margin-left: ${e=>e.isVisible?ke("space","lg")(e):"0px"};

  &::after, &::before {
    right: 100%;
    top: 50%;
  }

  &::after {
    margin-left: -${7}px;
    margin-top: -${7}px;
    border-color: transparent ${ke("colors","primary100")} transparent transparent;
  }

  &::before {
    margin-left: -${6}px;
    margin-top: -${6}px;
    border-color: transparent ${ke("colors","highlight")} transparent transparent;
  }
`,nr=_(c)(kt)`
  transition: opacity 0.2s, margin 0.2s;

  position: absolute;

  opacity: ${({isVisible:e})=>e?"1":"0"};
  
  padding: ${e=>(e=>{const t="lg"===e.size?"xl":"md";return`${ke("space","lg"===e.size?"lg":"sm")(e)} ${ke("space",t)(e)}`})(e)};

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

  ${e=>({top:rr,bottom:or,left:lr,right:ar}[e.direction])}
`;nr.defaultProps={borderColor:"primary100",borderStyle:"solid",borderWidth:"1px",bg:"highlight",borderRadius:"3px"};const ir=t=>{var r,o;const{title:l,childRef:a,direction:n="bottom",ContentElement:i,size:c}=t,s=e.useRef(null),[d,p]=e.useState(null),[m,u]=e.useState(null),[h,b]=e.useState(null),f=tr();e.useEffect((()=>{if(a.current){const{width:e,top:t,left:r,height:o}=a.current.getBoundingClientRect();b({width:e,top:t,left:r,height:o})}}),[a,null==f?void 0:f.width,null==f?void 0:f.height]),e.useEffect((()=>{if(s.current){const{clientWidth:e,clientHeight:t}=s.current;p({width:e,height:t})}}),[null==s||null===(r=s.current)||void 0===r?void 0:r.clientWidth,null==s||null===(o=s.current)||void 0===o?void 0:o.clientHeight,l]),e.useEffect((()=>{if(h&&d)switch(n){case"bottom":u({top:h.top+h.height,left:h.left+h.width/2-d.width/2});break;case"top":u({top:h.top-d.height,left:h.left+h.width/2-d.width/2});break;case"left":u({top:h.top+h.height/2-d.height/2,left:h.left-d.width});break;case"right":u({top:h.top+h.height/2-d.height/2,left:h.left+h.width})}}),[h,d,n]);const g=!(!d||!m);return _(e).createElement(nr,{ref:s,left:(null==m?void 0:m.left)||"-1110px",top:(null==m?void 0:m.top)||"-1110px",size:c,direction:n,isVisible:g},i||l)},cr=qe.createPortalForKey("TOOLTIP",ir),sr=_(c)(kt)``;sr.displayName="TooltipContent";var dr=sr;const pr=_(c)(_(m))`
  ${Ye}
  ${s.space};
  ${s.layout};
  ${s.typography};

  width: 100%;
`;pr.defaultProps={px:"default",py:"sm",className:ae("CurrencyInput")};var mr=pr;var ur=_(c).div`
  position: relative;
  display: flex;
  width: 100%;
  ${Ke} {
    flex-grow: 1;
  }
  ${Ke}:not(:last-child) {
    border-right: none;
  }
  ${Se}, & > ${_e}, & > ${We}:last-child {
    padding: ${({theme:e})=>e.space.sm};
    border: solid ${({theme:e})=>e.colors.inputBorder};
    border-width: 1px 1px 1px 0;
    margin: 0;
    color: ${({theme:e})=>e.colors.grey40};
  }

  ${_e}:last-child:hover {
    background: ${({theme:e})=>e.colors.hoverBg};
  }

  ${Se}, ${_e}, ${We} {
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${Se}, ${We} {
    line-height: ${({theme:e})=>e.lineHeights.lg};
  }

  ${_e}:first-child, ${We}:first-child {
    border-right: 0;
  }

  ${Ke}:hover {
    & + ${Se}, & + ${_e}, & + ${We} {
      border-color: ${({theme:e})=>e.colors.grey60};
    }
  } 
  ${Ke}:focus {
    & + ${Se}, & + ${_e}, & + ${We} {
      border-color: ${({theme:e})=>e.colors.primary100};
    }
  }
`;const hr=c.css`
  color: ${({theme:e})=>e.colors.grey40};
`,br=c.css`
  color: ${({theme:e})=>e.colors.error};
  ${Ke}, ${pr} {
    color: ${({theme:e})=>e.colors.error};
    border-color: ${({theme:e})=>e.colors.error};
  }
  &&& ${Se} {
    color: ${({theme:e})=>e.colors.error};
    &:before {
      color: ${({theme:e})=>e.colors.error};
    }
  }
  &&& ${Se}, &&& ${_e}, &&& ${We} {
    border-color: ${({theme:e})=>e.colors.error};
  }
`,fr=_(c).div`
  width: 100%;
  ${({error:e})=>e?br:""};
  ${({disabled:e})=>e?hr:""};
  ${s.space};

  & > ${Ke}, & > ${pr} {
    width: 100%;
  }

  & ${Ke}, & ${pr} {
    ${({variant:e,theme:t})=>"filter"===e?`border-color: ${t.colors.filterInputBorder}`:""};
    ${({variant:e,theme:t})=>"filter"===e?`color: ${t.colors.white}`:""};
  }

  & ${ur} {
    ${Se}, ${_e}:last-child, ${We}:last-child {
      ${({variant:e,theme:t})=>"filter"===e?`border-color: ${t.colors.filterInputBorder}`:""};
    }
  }
`;fr.defaultProps={mb:"lg"};var gr=fr;var qr=_(c)(je)`
  box-sizing: border-box;
  vertical-align: middle;
  height: ${({theme:e})=>e.space.xl};
  margin: ${({theme:e})=>e.space.sm} 0 0;
  font-weight: normal;
  font-size: ${({theme:e})=>e.fontSizes.sm};
`;var kr=({value:t,propertyType:r,disabled:o,onChange:l})=>{const[a,n]=e.useState(!1);let i,c;if(t&&"Date"!==t.constructor.name){const e=t;let o=_(h)(e);"Invalid Date"===o.toString()&&(o=void 0),o&&(i=new Date(o),c=be(i,r))}else t&&"Date"===t.constructor.name&&(c=be(t,r));return{dateString:c,date:i,isCalendarVisible:a,setCalendarVisible:n,onDateChange:e=>{o||l(e)}}};const vr=_(c).div`
  position: absolute;
  right: 0;
  top: ${({theme:e})=>e.space.xxl};
`,yr=_(c)(ur)`
  ${de};
  position: relative;

  &.active ${Ke}, &.active ${_e} {
    z-index: 101;
  }
  
  & .react-datepicker {
    border-radius: 0;
    border: 1px solid ${({theme:e})=>e.colors.primary100};
    padding: ${({theme:e})=>e.space.default};
    font-family: ${({theme:e})=>e.font};
    z-index: 101;
  }

  & .react-datepicker__navigation--next {
    border-left-color: ${({theme:e})=>e.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--next:hover {
    border-left-color: ${({theme:e})=>e.colors.primary100};
  }

  & .react-datepicker__navigation--previous {
    border-right-color: ${({theme:e})=>e.colors.primary60};
    top: 16px;
  }

  & .react-datepicker__navigation--previous:hover {
    border-right-color: ${({theme:e})=>e.colors.primary100};
  }

  & .react-datepicker__navigation {
    outline: none;
  }

  & .react-datepicker__year-read-view--down-arrow {
    top: 5px;
  }

  & .react-datepicker__header {
    background: ${({theme:e})=>e.colors.white};
    font-size: ${({theme:e})=>e.fontSizes.default};
    border: none;
  }

  & .react-datepicker__current-month {
    font-weight: normal;
    padding-bottom: ${({theme:e})=>e.space.lg};
  }

  & .react-datepicker__month {
    margin-top: 0;
  }

  & .react-datepicker__day-name {
    color: ${({theme:e})=>e.colors.primary60};
  }

  & .react-datepicker__day--outside-month {
    color: ${({theme:e})=>e.colors.grey40};
  }

  & .react-datepicker__day--today.react-datepicker__day--keyboard-selected {
    color: ${({theme:e})=>e.colors.white};
  }

  & .react-datepicker__day--selected {
    color: ${({theme:e})=>e.colors.white};
  }

  & .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--today) {
    background: none;
    color: ${({theme:e})=>e.colors.grey100};
  }

  & .react-datepicker__day:hover,
  & .react-datepicker__day {
    border-radius: 15px;
  }

  & .react-datepicker__day--selected {
    background: ${({theme:e})=>e.colors.primary100};
    border-radius: 15px;
    color: ${({theme:e})=>e.colors.white};
  }
`,xr=_(c).div`
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
`;var wr=t=>{const{value:r,onChange:o,disabled:l,propertyType:a,...n}=t,[i,c]=_(e).useState(""),{date:s,dateString:d,setCalendarVisible:p,isCalendarVisible:m,onDateChange:h}=kr({value:r,disabled:l,propertyType:a,onChange:o});return e.useEffect((()=>{d&&new Date(d).valueOf()!==new Date(i).valueOf()&&c(d)}),[d]),_(e).createElement(_(e).Fragment,null,_(e).createElement(xr,{onClick:()=>p(!1),className:m?"visible":"hidden"}),_(e).createElement(yr,{className:ae("DatePicker",m?"active":"normal")},_(e).createElement(Ke,{value:i,onChange:e=>{const t=new Date(e.target.value);c(e.target.value),isNaN(t.valueOf())||o(new Date(e.target.value))},onFocus:()=>p(!0),disabled:l}),_(e).createElement(_e,{variant:"primary",type:"button",size:"icon",disabled:l,onClick:()=>p(!m)},_(e).createElement(Vt,{icon:"Calendar"})),m&&_(e).createElement(vr,null,_(e).createElement(_(u),{selected:s,onChange:h,inline:!0,showTimeInput:"datetime"===a,...n}))))};const Cr=s.variant({prop:"size",variants:{sm:{boxShadow:"none","& > section, & + section":{px:"lg",py:"default"},[`& > ${_e}`]:{margin:"0px"}}}}),Er=_(c).div`
  line-height: ${({theme:e})=>e.lineHeights.default};
  box-shadow: 0 2px 0 0 ${({theme:e})=>e.colors.success};
  background: ${({theme:e})=>e.colors.successLight};
  color: ${({theme:e})=>e.colors.grey80};
  & > ${_e} {
    float: right;
    margin: 8px;
    & svg {
      fill: ${({theme:e})=>e.colors.grey80};
    }
  }
  ${({theme:e})=>(e=>s.variant({variants:{success:{},danger:{bg:"errorLight","box-shadow":`0 2px 0 0 ${e.colors.error};`,"& + section":{borderColor:"errorLight"}},info:{bg:"primary20","box-shadow":`0 2px 0 0 ${e.colors.primary100};`,"& + section":{borderColor:"primary20"}}}}))(e)};
  ${Cr};
`,_r=_(c)(qt)``;_r.defaultProps={px:"xl",py:"lg"};const $r=_(c)(qt)`
  padding: ${({theme:e})=>e.space.lg} ${({theme:e})=>e.space.xl};
  background: ${({theme:e})=>e.colors.white};
  border-style: solid;
  border-width: 0 1px 1px 1px;
  border-color: ${({theme:e})=>e.colors.successLight};
`,Lr=t=>{const{onCloseClick:r,message:o,icon:l,children:a,variant:n,size:i,...c}=t;return _(e).createElement(qt,{className:ae("MessageBox"),...c},_(e).createElement(Er,{variant:n,size:i},r?_(e).createElement(_e,{variant:"text",size:"icon",onClick:r},_(e).createElement(Vt,{icon:"Close"})):"",_(e).createElement(_r,null,l?_(e).createElement(Vt,{icon:l,mr:"default"}):"",o)),a?_(e).createElement($r,null,a):"")};var Sr=Lr;const zr=_(c).div`
  width: 80px;
  height: 80px;
  margin-right: ${({theme:e})=>e.space.lg};
  background-image: url('${({src:e})=>e}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: inline-block;
`,Br=t=>{const{file:r,onRemove:o,filename:l}=t;let{src:a}=t;return r&&["image/png","image/jpeg","image/gif"].includes(r.type)&&(a=URL.createObjectURL(r)),_(e).createElement(qt,{bg:"grey20",px:"lg",py:"default",mt:"default",flex:!0,alignItems:"center"},_(e).createElement(Vt,{icon:"Attachment",mr:"default"}),a?_(e).createElement(zr,{src:a}):"",_(e).createElement(qt,{flexGrow:1},(null==r?void 0:r.name)||l),o&&_(e).createElement(_e,{variant:"text",m:"-8px",size:"icon",type:"button",onClick:()=>o&&o()},_(e).createElement(Vt,{icon:"Close"})))};var Pr=Br;const Dr=(e,t)=>e?((e,t)=>{let r=null;t&&(r=fe.findIndex((e=>e===t)));const o=r||Math.min(Math.floor(Math.log(+e)/Math.log(1024)),fe.length),l=+e/1024**o,a=["B","kB","MB","GB","TB"][o];return`${Math.round(l)} ${a}`})(e,t):"",Ir=_(c).input`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  bottom: 0;
  cursor: pointer;
  width: 100%;
`,Fr=_(c)(qt)`
  border: 1px dashed ${({theme:e})=>e.colors.grey80};
  position: relative;
  text-align: center;

  & ${Se} {
    color: ${({theme:e})=>e.colors.grey60};
    font-size: ${({theme:e})=>e.fontSizes.xs};
    padding-right: 4px;
    letter-spacing: 1px;
  }
`;var Mr=t=>{const{validate:r,onChange:o,multiple:l,files:a,uploadLimitIn:n,...i}=t,[,c]=e.useState(!1),[s,d]=e.useState(null),[p,m]=e.useState(null!=a?a:[]);e.useEffect((()=>{a&&m(a)}),[a]);const u=e.useCallback((e=>{const t=[...p];t.splice(e,1),o&&o(t),m(t)}),[p,m,o]),h=e.useCallback((e=>{e.preventDefault(),c(!1);const{files:t}=e.dataTransfer||e.target,a=[];for(let e=0;e<t.length;e+=1){const o=t.item(e);if(!o)return;if(r&&(s=r.maxSize,u=o&&o.size,s&&u&&!(+s>=+u)))return void d({message:`File: ${o.name} size is too big`,title:"Wrong Size"});if(r&&(n=r.mimeTypes,i=o.type,n&&n.length&&!n.includes(i)))return void d({message:`File: ${o.name} has unsupported type: ${o.type}`,title:"Wrong Type"});a.push(o),d(null)}var n,i,s,u;let h;h=!l&&a.length?[a[0]]:[...p,...a],o&&o(h),m(h)}),[o,m,c]),b=e.useCallback((()=>r&&r.maxSize?Dr(r.maxSize,n):""),[r]);return _(e).createElement(qt,null,_(e).createElement(Fr,{onDragEnter:()=>c(!0),onDragOver:()=>c(!0),onDragLeave:()=>c(!1),onDrop:h,...i,p:"xl"},_(e).createElement(Ir,{type:"file",onChange:e=>h(e),multiple:l}),_(e).createElement(qt,null,_(e).createElement(He,{fontSize:"sm"},"Pick or Drop File here to upload it."),_(e).createElement(qt,null,r&&r.maxSize?_(e).createElement(He,{variant:"xs",color:"grey60",lineHeight:"default",mt:"sm"},_(e).createElement(Se,{inline:!0,uppercase:!0},"Max size:"),b()):"",r&&r.mimeTypes&&r.mimeTypes.length?_(e).createElement(He,{variant:"xs",color:"grey60",lineHeight:"default",mt:"sm"},r.mimeTypes.join(", ")):""))),s?_(e).createElement(Lr,{mt:"default",variant:"danger",size:"sm",icon:"Warning",message:s.title,onCloseClick:()=>d(null)},s.message):"",p.map(((t,r)=>_(e).createElement(Br,{file:t,key:r,onRemove:()=>u(r)}))))};var Rr=c.css`
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
    border-color: ${({theme:e})=>d.rgba(e.colors.inputBorder,.3)};
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
    color: 1px solid ${({theme:e})=>e.colors.grey100};
  }
  .ql-container.ql-snow {
    border: 1px solid ${({theme:e})=>e.colors.inputBorder};
  }

  .quill-borderless .ql-container {
    border: 0px none;
  }
`;var Ar=c.css`
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
`;var Or=c.css`
  .ql-editor > * {
    cursor: text;
  }

  .ql-editor {
    ${Ne};
    padding: ${ke("space","xl")};
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
    margin-top: ${ke("space","xs")};
    margin-bottom: ${ke("space","xs")};
    font-size: ${ke("fontSizes","lg")};
    font-weight: ${ke("fontWeights","light")};
  }

  .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    font-size: ${ke("fontSizes","h1")};
    line-height: ${ke("lineHeights","xxl")};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    font-size: ${ke("fontSizes","h2")};
    line-height: ${ke("lineHeights","xxl")};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    line-height: ${ke("lineHeights","xl")};
    font-size: ${ke("fontSizes","h3")};
  }

  .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    font-size: ${ke("fontSizes","h4")};
    line-height: ${ke("lineHeights","xl")};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    font-size: ${ke("fontSizes","xl")};
    line-height: ${ke("lineHeights","lg")};
    font-weight: ${ke("fontWeights","normal")};
  }
  .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    font-size: ${ke("fontSizes","lg")};
    line-height: ${ke("lineHeights","lg")};
    font-weight: ${ke("fontWeights","normal")};
  }
`;const Nr=[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{align:[]}],["link","image","video"],["clean"]],Tr="object"==typeof window?b:null,Hr=_(c)(kt)`
  ${Ar};
  ${Rr};
  ${Or};
`;var jr=e.forwardRef(((t,r)=>{var o;const{value:l,borderless:a,quill:n,onChange:i}=t;if(n.theme=n.theme||"snow",(null===(o=n.modules)||void 0===o?void 0:o.toolbar)||(n.modules=n.modules||{},n.modules.toolbar=Nr),!Tr)return _(e).createElement("div",null,"Server Side Rendered");const c=[];a&&c.push("quill-borderless");const[s,d]=e.useState(null),[p,m]=e.useState(l||""),u=r||e.useRef(null),h=e.useCallback((()=>{const e=null==s?void 0:s.root;if(e){const t=e.innerHTML;m(t),i&&i(t)}}),[i,s]);return e.useEffect((()=>{if(u.current){const e=new Tr(u.current,n);d(e)}return()=>{d(null)}}),[]),e.useEffect((()=>{u.current&&s&&p&&s.root.innerHTML!==p&&s.clipboard.dangerouslyPasteHTML(p)}),[s]),e.useEffect((()=>{const e=null==s?void 0:s.root;if(e)return null==e||e.addEventListener("DOMSubtreeModified",h),()=>{null==e||e.removeEventListener("DOMSubtreeModified",h)}}),[i,h]),_(e).createElement(Hr,{quill:n},_(e).createElement("div",{className:c.join(" ")},_(e).createElement("div",{className:"quill-editor",ref:u})))}));const Gr=_(c)(qt)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;var Ur=t=>{const{children:r,title:o,testId:l}=t;return _(e).createElement(Gr,{"data-testid":l,variant:"white",className:ae("InfoBox")},_(e).createElement(qt,{width:.5},_(e).createElement(At,{mb:"lg"},o),r))};const Wr=e=>ke("colors",e.isSelected?"primary100":"grey80")(e),Vr=_(c)(qt)`
  background-color: ${e=>e.isOpen?ke("colors","grey20")(e):"transparent"};
  padding: ${ke("space","md","-1px")} ${ke("space","lg")};
  text-decoration: none;
  color: ${Wr};
  cursor: pointer;
  &:hover {
    color: ${e=>ke("colors",e.isOpen?"grey80":"primary100")(e)};
  }
  & > * {
    align-self: center;
  }
  & > .icon-box {
    flex-shrink: 0;
    padding-right: ${ke("space","lg")};
    & svg {
      fill: ${Wr};
    }
  }
  & > ${Gt} {
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > .arrow-box {
    flex-shrink: 0;
    & svg {
      fill: ${ke("colors","grey40")};
    }
  }
`,Zr=t=>{const{isOpen:r,icon:o,onClick:l,label:a,isSelected:n,href:i}=t,c=void 0!==r,s=r?"ChevronUp":"ChevronDown",d=a.split(" ").reduce(((e,t)=>e.length>t.length?e:t),"").length>15;return _(e).createElement(Vr,{flex:!0,flexDirection:"row",as:"a",isSelected:n,isOpen:r,href:i,onClick:e=>l?l(e,t):void 0},o&&_(e).createElement(qt,{className:"icon-box",as:"span"},_(e).createElement(Vt,{icon:o})),_(e).createElement(Gt,{style:{whiteSpace:d?"nowrap":"normal"}},a),c&&_(e).createElement(qt,{className:"arrow-box",as:"span"},_(e).createElement(Vt,{icon:s})))},Jr=_(c).div`
  position: relative;
  display: inline-block;
`,Yr="left",Kr=t=>{const{children:r,stick:o=Yr,...l}=t,[a,n]=e.useState(!1),[i,c]=e.useState(null),s=e.useRef(null),[d,p]=e.useState();e.useLayoutEffect((()=>{if(s.current&&!i){const{offsetHeight:e}=s.current;switch(c(e),o){case"left":p({left:0,top:e});break;case"right":p({right:0,top:e})}}}),[s.current]);const m=_(e).Children.map(r,(t=>{const r=t&&t.type&&t.type.displayName;return"DropDownTrigger"===r?_(e).cloneElement(t.props.children):"DropDownMenu"===r?_(e).cloneElement(t,{isVisible:a,stick:o,...d}):t}));return _(e).createElement(Jr,{...l,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),ref:s},m)};var Xr=Kr;const Qr=_(c)(kt).attrs((e=>({className:ae([`DropDown-Stick-${e.stick||Yr}`,"DropDownMenu"],e.className)})))`
  background: ${({theme:e})=>e.colors.white};
  display: inline-block;
  position: absolute;
  z-index: 40;
  flex-direction: column;
  box-shadow: ${({theme:e})=>e.shadows.card};
  ${({isVisible:e})=>!1!==e?"":"display: none;"};

  &.${ae("DropDown-Stick-left")} .${ae("DropDownMenu")} {
    left: 100%;
  }
  &.${ae("DropDown-Stick-right")} .${ae("DropDownMenu")} {
    right: 100%;
  }
`;Qr.displayName="DropDownMenu";var eo=Qr;const to=e=>({color:e,[`& .${ae("DropDownItemAction")}`]:{color:e},"&:hover":{borderColor:e},[`& .${ae("Icon")} svg`]:{fill:e}}),ro=s.variant({prop:"colorVariant",variants:{primary:to("primary100"),danger:to("error"),success:to("success"),info:to("info"),secondary:{bg:"accent"},light:to("grey80"),default:{}}}),oo=_(c)(kt)`
  position: relative;
  z-index: 10000;
  border: none;
  color: ${ke("colors","grey80")};
  font-family: ${ke("font")};
  border: solid transparent;
  border-width: 0 ${ke("space","sm")};
  ${({onClick:e})=>e?"cursor: pointer;":""};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;

  &:hover {
    border-color: ${ke("colors","primary100")};
    background: ${ke("colors","grey20")};
  }

  & .${ae("Icon")} {
    padding-right: ${ke("space","default")};
    fill: ${ke("colors","grey40")};
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > ${eo} {
    position: absolute;
    top: 0;
    display: none;
  }

  &:hover > ${eo} {
    display: flex;
  }

  & a {
    color: ${ke("colors","grey80")};
    text-decoration: none;
  }
  padding: ${ke("space","lg")} ${ke("space","xxl")};

  ${s.space};
  ${ro};
`;var lo=oo;const ao=_(c)(kt).attrs((e=>({className:ae("DropDownItemAction",e.className)})))`
  ${({onClick:e})=>e?"cursor: pointer;":""};
`;ao.defaultProps={width:1,px:"xxl",py:"lg"};const no=_(c).span`
  display: inline-block;
`;no.displayName="DropDownTrigger";var io=no;const co=(e,t)=>({borderLeftWidth:8,borderLeftStyle:"solid",borderLeftColor:e,paddingLeft:d.getValueAndUnit(ke("space","xxl")(t))[0]-8}),so=_(c)(qt)`
  position: relative;
  & > .close-button {
    position: absolute;
    top: ${ke("space","md")};
    right: ${ke("space","md")};
  }
  & > .modal-label {
    margin-bottom: 0;
    margin-top: -${ke("space","xxl")};
    padding-top: ${ke("space","sm")};
  }
  ${e=>(e=>s.variant({prop:"variant",variants:{primary:co("primary100",e),danger:co("error",e),success:co("success",e),info:co("info",e),secondary:co("accent",e),light:co("grey60",e),default:{}}}))(e)};
`;so.defaultProps={pl:"xxl",pr:"xl",pt:"x3",pb:"xxl",bg:"white",width:[1,540]};const po=t=>{const{title:r,subTitle:o,variant:l,onClose:a,children:n,buttons:i,label:c,icon:s,...d}=t;return _(e).createElement(so,{variant:l,...d},c&&_(e).createElement(Se,{size:"lg",variant:l,className:"modal-label"},s&&_(e).createElement(Vt,{icon:s}),c),r&&_(e).createElement(Ot,null,r),a&&_(e).createElement(_e,{className:"close-button",size:"icon",variant:"text",onClick:a,rounded:!0},_(e).createElement(Vt,{icon:"CloseOutline"})),o&&_(e).createElement(He,null,o),n,i&&i.length&&_(e).createElement(qt,{flex:!0,flexDirection:"row",justifyContent:"flex-end"},i.map(((t,r)=>_(e).createElement(_e,{key:r,mr:"md",mt:"sm",...t})))))},mo=_(c)(kt)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  & > ${so} {
    z-index: 1001;
  }
`,uo=qe.createPortalForKey("MODAL",(t=>{const{onOverlayClick:r,...o}=t,l=r||(()=>!0);return _(e).createElement(mo,{flex:!0,justifyContent:"center",alignItems:"center"},_(e).createElement(yt,{onClick:l}),_(e).createElement(po,o))})),ho=_(c)(_e).attrs((e=>({size:"icon",variant:e.variant?e.variant:"text"})))`
  min-width: 28px;
  height: 28px;
  line-height: 12px;
  padding: 3px 6px;
  text-align: center;
`;ho.defaultProps={className:ae("PaginationLink")};const bo=_(c)(qt)`
  display: inline-block;
  padding: 2px;
  border: 1px solid ${({theme:e})=>e.colors.grey20};
  & > :first-child {
    width: 56px;
    border-right: 1px solid ${({theme:e})=>e.colors.grey20};
  }
  & > :nth-child(2) {
    padding-left: 16px;
  }
  & > :last-child {
    width: 56px;
    border-left: 1px solid ${({theme:e})=>e.colors.grey20};
  }
  & > :nth-last-child(2) {
    padding-right: 16px;
  }
`;var fo=t=>{const{total:r,page:o,perPage:l,onChange:a,...n}=t,i=o||1,c=_(f)(r,i,l),s=i===c.startPage,d=i===c.endPage,p=s?i:i-1,m=d?i:i+1;return 1===c.totalPages||0===r?null:_(e).createElement(bo,{className:ae("Pagination"),...n},_(e).createElement(ho,{"data-testid":"previous",disabled:s,onClick:()=>s?void 0:a(p)},_(e).createElement(Vt,{icon:"ChevronLeft"})),c.pages.map((t=>_(e).createElement(ho,{key:t,onClick:()=>a(t),variant:t===i?"primary":"text",className:ae("PaginationLink",t===i?"current":""),"data-testid":`page-${t}`},t))),_(e).createElement(ho,{"data-testid":"next",onClick:()=>d?void 0:a(m),disabled:d},_(e).createElement(Vt,{icon:"ChevronRight"})))};var go=_(c).section`
  padding: ${({theme:e})=>e.space.xxl} ${({theme:e})=>e.space.lg};
  text-align: center;
  flex-shrink: 0;
  ${s.space};
`;const qo=s.variant({variants:{filter:{bg:"filterBg",width:"400px",color:"white",className:ae(["Drawer","Drawer_Filter"])}}}),ko=_(c).section`
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({isHidden:e,width:t})=>e?`-${null==t?void 0:t.toString()}`:"0px;"};
  &.hidden {
    right: ${({width:e})=>`-${null==e?void 0:e.toString()}`};
  }
  box-shadow: 0 3px 6px ${({theme:e})=>e.colors.grey40};
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 500ms;
  background: ${({theme:e})=>e.colors.white};
  box-sizing: border-box;
  & > ${go} {
    border-top: 1px solid ${({theme:e})=>e.colors.primary20};
    ${({variant:e,theme:t})=>"filter"===e?`border-color: ${t.colors.filterInputBorder}`:""};    
  }
  max-width: 100%;
  
  ${s.space};
  ${s.color};
  ${s.layout};
  ${qo};
`;ko.defaultProps={width:"500px",className:ae("Drawer")};var vo=ko;var yo=_(c).section`
  flex-grow: 1;
  overflow: auto;
  padding: ${({theme:e})=>e.space.x3} ${({theme:e})=>e.space.xxl} ${({theme:e})=>e.space.xl};
  box-sizing: border-box;
  ${s.space};
`;const xo=_(c)(qt)`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  color: ${({theme:e})=>e.colors.grey60};
  height: ${"46px"};

  & img {
    border-radius: 9999px;
    margin-right: 0 8px;
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 9999px;
  }
`;var wo=t=>{const{email:r,title:o,avatarUrl:l,children:a}=t;return _(e).createElement(Kr,null,_(e).createElement(no,null,_(e).createElement(xo,{pr:"xl"},_(e).createElement(qt,{mr:"default"},_(e).createElement(He,{fontSize:"default",lineHeight:o?"lg":"xl",fontWeight:"normal"},r),_(e).createElement(He,{fontSize:"sm",color:"grey40",lineHeight:"sm"},o)),l?_(e).createElement("img",{src:l,alt:"avatar"}):null,_(e).createElement(Vt,{icon:"OverflowMenuVertical",size:16,my:"default",color:"grey60"}))),_(e).createElement(Qr,{top:"46px"},a))};const Co=_(c)(He)`
  padding: 11px 20px;
  margin: 0;
  color: ${ke("colors","grey100")};
  border-radius: 9999px;
  display: flex;
  cursor: pointer;

  & > ${He} {
    display: block;
    flex-grow: 1;
    line-height: ${ke("lineHeights","default")};
    margin-bottom: 0;
  }

  & + ${qt} {
    padding-left: ${ke("space","xxl","12px")};
  }

  & > .${ae("Icon")} svg {
    vertical-align: middle;
    padding-bottom: 2px;
    flex-shrink: 0;
  }

  & > .${ae("Icon")}:first-child {
    padding-right: ${ke("space","md")};
  }

  & > .${ae("Icon")}:last-child {
    padding-left: ${ke("space","sm")};
  }
`;Co.defaultProps={className:ae("NavGroupTitle")};var Eo=t=>{const{title:r,icon:o,children:l}=t,[a,n]=e.useState(!0),i=a?"ChevronUp":"ChevronDown";return _(e).createElement(qt,{className:ae("NavGroup")},_(e).createElement(Co,{onClick:()=>n(!a),bg:a?"grey20":"transparent"},_(e).createElement(Vt,{icon:o||"Settings"}),_(e).createElement(He,null,r),_(e).createElement(Vt,{icon:i})),a?_(e).createElement(qt,{pb:"xl",pt:"sm"},l):"")};const _o=_(c)(kt)`
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  text-align: center;
`;_o.defaultProps={py:"default",px:"default",minWidth:"34px",height:"34px"};const $o=_(c).div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: row;

  & > ${kt} {
    ${({disabled:e})=>e?"":"cursor: pointer"};
    border-bottom: 2px solid ${({active:e,theme:t})=>e?t.colors.primary100:"transparent"};
  }
  
  ${s.space};
`;var Lo=t=>{const{number:r,completed:o,children:l,active:a,disabled:n,onClick:i,className:c}=t;return _(e).createElement($o,{active:a,disabled:n||!i,className:ae("Step",c)},_(e).createElement(kt,{flexShrink:1,flexGrow:0,flex:!0,flexDirection:"row",pt:"lg",pb:"default",onClick:()=>!n&&i&&i(r)},_(e).createElement(_o,{bg:o?"grey40":"transparent",borderColor:a?"primary100":"grey40",color:a?"primary100":"grey40"},o?_(e).createElement(Zt,{icon:"Checkmark",color:"white"}):r),_(e).createElement(je,{my:"sm",pl:"default",py:"sm",color:a||o?"grey100":"grey40"},l)))};const So=_(c)(kt)`
`;So.defaultProps={flex:!0,flexDirection:["column","row"],borderBottom:"1px solid",borderBottomColor:"separator",className:ae("Stepper")};var zo=So;const Bo=ae("ButtonGroupItem"),Po=e=>e.hasLabel?"":c.css`
      padding-left: ${ke("space","md")};
      padding-right: ${ke("space","md")};
      & > .${ae("Icon")} svg {
        margin-right: 0;
      }
    `,Do=_(c)(_e)`
  ${Po};
  ${e=>e.onClick||e.href?"":c.css`
    &&& {
      cursor: default;
    }
    `};
`,Io=_(c)(ao)`
  ${Po};
`,Fo=_(c)(kt)`
  ${e=>{const{size:t}=e,r="sm"===t?"md":"lg";return c.css`
    & > .${Bo} {
      margin-right: ${ke("space",r)};
      &:last-child {
        margin-right: 0;
      }
    }
  `}};
`,Mo=t=>{const{icon:r,label:o,buttons:l,source:a,onClick:n,...i}=t,[c,s]=e.useState(!1),d=n?async e=>{s(!0),await n(e,a),s(!1)}:void 0,p=e.useMemo((()=>c?"Fade":null!=r?r:""),[c]);return _(e).createElement(Do,{as:"a",hasLabel:!!o,onClick:d,...i},c||r?_(e).createElement(Zt,{key:p.toString(),icon:p,spin:c}):"",o,l&&l.length&&o?_(e).createElement(kt,{as:"span",mr:"-8px",ml:"md"},_(e).createElement(Zt,{icon:"CaretDown"})):"")},Ro=t=>{const{variant:r,onClick:o,href:l,icon:a,label:n,buttons:i,source:c,...s}=t,[d,p]=e.useState(!1),m=o?async e=>{p(!0),await o(e,c),p(!1)}:void 0,u=e.useMemo((()=>d?"Fade":null!=a?a:""),[d]);return _(e).createElement(oo,{colorVariant:r,p:0},_(e).createElement(Io,{onClick:m,href:l,as:"a",hasLabel:!!n,...s},i&&i.length?_(e).createElement(Zt,{icon:"CaretLeft",ml:"-24px",mr:"0"}):"",d||a?_(e).createElement(Zt,{key:u.toString(),icon:u,spin:d}):"",n),i&&i.length?_(e).createElement(Qr,null,i.map((t=>_(e).createElement(Ro,{...t,key:t.label})))):"")},Ao=t=>{const{buttons:r,className:o,...l}=t;return r&&r.length?_(e).createElement(Kr,{stick:"right",className:o},_(e).createElement(no,null,_(e).createElement(Mo,t)),_(e).createElement(Qr,null,r.map((t=>_(e).createElement(Ro,{...t,key:`${t.label}-${t.icon}`}))))):_(e).createElement(Mo,{...l,className:o})},Oo=_(c)(qt)`
  ul ul > li {
    padding-left: ${ke("space","xxl")};
    &:last-child {
      margin-bottom: ${ke("space","lg")};
    }
  }
`,No=t=>{const{elements:r,isOpen:o}=t;return _(e).createElement("li",null,_(e).createElement(Zr,t),(null==r?void 0:r.length)&&o?_(e).createElement("ul",null,r.map(((t,r)=>_(e).createElement(No,{...t,key:[r,t.href].join("-")})))):"")},To=_(c)(He)`
  font-size: ${ke("fontSizes","sm")};
  & > a {
    color: ${ke("colors","grey60")};
    font-size: ${ke("fontSizes","sm")};
    text-decoration: none;
    margin-left: ${ke("space","xs")};
    &:hover {
      color: ${ke("colors","love")};
    }
  }

  & > .${ae("Icon")} {
    padding: 0 ${ke("space","xs")};
  }
`;To.defaultProps={color:"grey60",textAlign:"center"};const Ho=_(c)(qt)`
  text-align: right;

  & .line-action {
    .${ae("Icon")} svg {
      fill: ${ke("colors","grey80")};
    }
    &:hover .${ae("Icon")} svg {
      fill: ${ke("colors","primary100")};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${ke("space","md")} 0;
  }
`;Ho.defaultProps={flex:!0,flexDirection:"row"};c.createGlobalStyle`
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
`;const jo=n.createStore((()=>({})),{});var Go=t=>{const{frameContext:r}=t;return qe.appendElement=e=>{r.document.body.appendChild(e)},qe.removeElement=e=>{const t=r.document.getElementById(e);null==t||t.remove()},_(e).createElement(i.Provider,{store:jo},_(e).createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:400,700",type:"text/css"}),_(e).createElement(a.BrowserRouter,null,_(e).createElement(c.StyleSheetManager,{target:r.document.head},_(e).createElement(c.ThemeProvider,{theme:W},_(e).createElement(qt,{border:"default",p:"xxl"},t.children)))))};let Uo={};try{Uo=window}catch(e){if("window is not defined"!==e.message)throw e}const Wo=new Date;class Vo{constructor({options:e}={}){let t=Vo.getPaths(e);t=t||{rootPath:"/admin"},this.options=t}static getPaths(e){var t;return e||(null===(t=Uo.REDUX_STATE)||void 0===t?void 0:t.paths)}urlBuilder(e=[],t=""){const r="/",o=new RegExp("/{1,}","g");let{rootPath:l}=this.options;l.startsWith(r)||(l=`/${l}`);return`${[l,...e].join(r).replace(o,r)}${t}`}loginUrl(){return this.options.loginPath}logoutUrl(){return this.options.logoutPath}dashboardUrl(){return this.options.rootPath}pageUrl(e){return this.urlBuilder(["pages",e])}editUrl(e,t,r){return this.recordActionUrl({resourceId:e,recordId:t,actionName:"edit",search:r})}showUrl(e,t,r){return this.recordActionUrl({resourceId:e,recordId:t,actionName:"show",search:r})}deleteUrl(e,t,r){return this.recordActionUrl({resourceId:e,recordId:t,actionName:"delete",search:r})}newUrl(e,t){return this.resourceActionUrl({resourceId:e,actionName:"new",search:t})}listUrl(e,t){return this.resourceActionUrl({resourceId:e,actionName:"list",search:t})}bulkDeleteUrl(e,t,r){return this.bulkActionUrl({resourceId:e,recordIds:t,actionName:"bulkDelete",search:r})}resourceActionUrl({resourceId:e,actionName:t,search:r}){return this.urlBuilder(["resources",e,"actions",t],r)}resourceUrl({resourceId:e,search:t}){return this.urlBuilder(["resources",e],t)}recordActionUrl({resourceId:e,recordId:t,actionName:r,search:o}){return this.urlBuilder(["resources",e,"records",t,r],o)}bulkActionUrl({resourceId:e,recordIds:t,actionName:r,search:o}){const l=this.urlBuilder(["resources",e,"bulk",r]);if(t&&t.length){const e=new URLSearchParams(o);return e.set("recordIds",t.join(",")),`${l}?${e.toString()}`}return`${l}${o||""}`}assetPath(e,t){if(this.options.assetsCDN){var r,o;const l=null!==(o=null==t||null===(r=t.coreScripts)||void 0===r?void 0:r[e])&&void 0!==o?o:e;return`${new URL(l,this.options.assetsCDN).href}?date=${Wo.getTime()}`}return this.urlBuilder(["frontend","assets",e])}}var Zo=Vo;const Jo=new Vo,Yo=(e,t)=>{const r=e.name;if(!e.component&&!e.hasHandler)return null;const o={record:()=>Jo.recordActionUrl({...t,actionName:r}),resource:()=>Jo.resourceActionUrl({resourceId:t.resourceId,actionName:r}),bulk:()=>Jo.bulkActionUrl({...t,actionName:r})};if(o[e.actionType])return o[e.actionType]();throw new Error('"actionType" should be either record, resource or bulk')};let Ko={};try{Ko=window}catch(e){if("window is not defined"!==e.message)throw e;Ko={isOnServer:!0}}const Xo=e=>{if(Ko.isOnServer)return;const t=[Ko.location.origin,Ko.REDUX_STATE.paths.loginPath].join("");e.request.responseURL&&e.request.responseURL.match(t)&&(alert("Your session expired. You will be redirected to login screen"),Ko.location.assign(t))};class Qo{constructor(){this.baseURL=Qo.getBaseUrl(),this.client=_(g).create({baseURL:this.baseURL})}static getBaseUrl(){var e;return Ko.isOnServer?"":[Ko.location.origin,null===(e=Ko.REDUX_STATE)||void 0===e?void 0:e.paths.rootPath].join("")}async searchRecords({resourceId:e,query:t}){if(Ko.isOnServer)return[];const r=await this.resourceAction({resourceId:e,actionName:"search",query:t});return Xo(r),r.data.records}async resourceAction(e){const{resourceId:t,actionName:r,data:o,query:l,...a}=e;let n=`/api/resources/${t}/actions/${r}`;if(l){n=[n,encodeURIComponent(l)].join("/")}const i=await this.client.request({url:n,method:o?"POST":"GET",...a,data:o});return Xo(i),i}async recordAction(e){const{resourceId:t,recordId:r,actionName:o,data:l,...a}=e,n=await this.client.request({url:`/api/resources/${t}/records/${r}/${o}`,method:l?"POST":"GET",...a,data:l});return Xo(n),n}async bulkAction(e){const{resourceId:t,recordIds:r,actionName:o,data:l,...a}=e,n=new URLSearchParams;n.set("recordIds",(r||[]).join(","));const i=await this.client.request({url:`/api/resources/${t}/bulk/${o}`,method:l?"POST":"GET",...a,data:l,params:n});return Xo(i),i}async getDashboard(e={}){const t=await this.client.get("/api/dashboard",e);return Xo(t),t}async getPage(e){const{pageName:t,...r}=e,o=await this.client.request({url:`/api/pages/${t}`,...r});return Xo(o),o}}const el=new Qo;const tl=e=>{const{action:t,params:r,actionResponseHandler:o,search:l}=e;return()=>{const e=function(e,t,r){let o;const{recordId:l,recordIds:a,resourceId:n}=t;switch(e.actionType){case"record":if(!l)throw new Error('You have to specify "recordId" for record action');o=el.recordAction({resourceId:n,actionName:e.name,recordId:l,search:r});break;case"resource":o=el.resourceAction({resourceId:n,actionName:e.name});break;case"bulk":if(!a)throw new Error('You have to specify "recordIds" for bulk action');o=el.bulkAction({resourceId:n,actionName:e.name,recordIds:a,search:r});break;default:throw new Error('"actionType" should be either record, resource or bulk')}return o}(t,r,l);return e.then(o).catch((e=>{throw e})),e}},rl=e=>`action-${e.name}`,ol=e=>{const{action:t,params:r,actionResponseHandler:o,push:l}=e;return e=>{e.preventDefault(),e.stopPropagation();const a=Yo(t,r),n=tl({params:r,action:t,actionResponseHandler:o});if(!t.guard||confirm(t.guard))return(e=>void 0!==e.component&&!1===e.component)(t)?n():void(a&&l(a))}};function ll(e){const t=new FormData;return Object.entries(e).forEach((([e,r])=>null===r?t.set(e,"__FORM_VALUE_NULL__"):(e=>"object"==typeof e&&e.constructor!==File&&!(e instanceof Date))(r)?Array.isArray(r)?t.set(e,"__FORM_VALUE_EMPTY_ARRAY__"):t.set(e,"__FORM_VALUE_EMPTY_OBJECT__"):r instanceof Date?t.set(e,r.toISOString()):t.set(e,r))),t}const al=(e={message:""})=>({type:"ADD_NOTICE",data:{message:e.message,id:Math.random().toString(36).substr(2,9),type:e.type||"success",progress:0}}),nl=()=>{const e=i.useDispatch();return t=>e(al(t))};var il=nl;var cl=(e,t)=>({...t.record||e,errors:t.record.errors,populated:{...e.populated,...t.record.populated},params:{...e.params,...t.record.params}});const sl=(e,t)=>{const r=new RegExp("\\.","g"),o="\\.",l=(null==t?void 0:t.includeAllSiblings)?e.replace(r,"(\\.|\\.\\d+\\.)"):e.replace(r,o);return new RegExp(`^${l}($|\\.)`,"")},dl=(e,t,r)=>(Array.isArray(t)?t:[t]).filter((e=>!!e)).reduce(((t,o)=>{const l=sl(o,r);return{...t,...Object.keys(e).filter((e=>e.match(l))).reduce(((t,r)=>(t[r]=e[r],t)),{})}}),{}),pl=(e,t)=>(Array.isArray(t)?t:[t]).filter((e=>!!e)).reduce(((t,r)=>{const o=sl(r);return Object.keys(t).filter((e=>!e.match(o))).reduce(((t,r)=>(t[r]=e[r],t)),{})}),e),ml=(e,t={})=>{let r=e.split(".");return t.skipArrayIndexes&&(r=r.filter((e=>isNaN(+e)))),r.reduce(((e,t)=>e.length?[...e,[e[e.length-1],t].join(".")]:[t]),[])},ul=(e={},t,r)=>{const o=sl(t),l=Object.keys(e).filter((e=>!e.match(o))).reduce(((t,r)=>(t[r]=e[r],t)),{});if(void 0!==r){if(!(e=>"undefined"==typeof File?"object"==typeof e&&null!==e:"object"==typeof e&&!(e instanceof File)&&null!==e)(r)||r instanceof Date)l[t]=r;else{const e=q.flatten(r);Object.keys(e).length?Object.keys(e).forEach((r=>{l[`${t}.${r}`]=e[r]})):Array.isArray(r)?l[t]=[]:l[t]={}}const e=ml(t).slice(0,-1);if(e.length)return Object.keys(l).filter((t=>!e.includes(t))).reduce(((e,t)=>(e[t]=l[t],e)),{})}return l},hl=(e={},t,r)=>{if(!t)return q.unflatten(e);if(Object.keys(e).find((e=>e===t)))return e[t];const o=sl(t,r),l=dl(e,t,r),a=Object.keys(l).reduce(((e,t,a)=>{let n=t.replace(o,"TEMP_HOLDING_KEY.");return(null==r?void 0:r.includeAllSiblings)&&(n=n.replace(new RegExp("TEMP_HOLDING_KEY\\.(\\d*)"),`TEMP_HOLDING_KEY.${a}`)),e[n]=l[t],e}),{});return Object.keys(a).length?q.unflatten(a).TEMP_HOLDING_KEY:void 0},bl=(q.flatten,q.unflatten,ul),fl=hl,gl=dl,ql=(e,t)=>{let r=pl(e,t);const o=ml(t).reverse();return o.find(((t,l)=>{const a=hl(e,t);if(Array.isArray(a)){const n=o[l-1].split("."),i=n[n.length-1];return a.splice(+i,1),r=ul(e,t,a),!0}return!1})),r},kl=ml,vl=(e={},...t)=>{const r=q.flatten(e);return t.reverse().reduce(((e,t)=>Object.keys(t).reduce(((e,r)=>ul(e,r,t[r])),e)),r)};var yl=(e,t,r)=>o=>{let l=!1;const a={...o.populated},n=bl(o.params,e,t);return e in a&&(delete a[e],l=!0),r&&(a[e]=r,l=!0),{...o,params:n,populated:l?a:o.populated}};const xl=(e,t,r,o,l)=>{const a=("string"==typeof o?l:o)||{},n=(e=>e.split(".").join("&#46;"))(r);let i=[`${t}.${n}`];return o&&(i=[`resources.${o}.${t}.${n}`,...i]),e.exists(i)?e.t(i,a):null!==(c=a.defaultValue)&&void 0!==c?c:_(k)(r);var c},wl=function(e,t={}){return t.includeParams&&e?{...e,params:gl(e.params||{},t.includeParams)}:e},Cl=new Qo;var El=(t,r,o)=>{const[l,a]=e.useState(!1),[n,i]=e.useState(!0),[c,s]=e.useState(0),d=t?wl(t,o):null;var p,m,u;const[h,b]=e.useState({...d,params:null!==(p=null==d?void 0:d.params)&&void 0!==p?p:{},errors:null!==(m=null==t?void 0:t.errors)&&void 0!==m?m:{},populated:null!==(u=null==t?void 0:t.populated)&&void 0!==u?u:{}}),f=e.useCallback((e=>{const t=e instanceof Function?e(h):e;b(wl(t,o))}),[o,h]),g=il(),q=e.useCallback(((e,t,r)=>{((e,t)=>!(void 0!==t||"string"==typeof e||!e.params))(e,t)?f(e):((e,t={})=>{const{includeParams:r}=t;if(r)return kl(e,{skipArrayIndexes:!0}).some((e=>r.includes(e)));return!0})(e,o)?b(yl(e,t,r)):"development"===process.env.NODE_ENV&&console.warn([`You are trying to set property: "${e}" which`,"is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`"].join("\n")),i(!1)}),[b,o]),k=e.useCallback(((e={},o)=>{a(!0);const l=ll(vl(h.params,e)),n={resourceId:r,onUploadProgress:e=>s(Math.round(100*e.loaded/e.total)),data:l,headers:{"Content-Type":"multipart/form-data"}},c=(null==t?void 0:t.id)?Cl.recordAction({...n,actionName:"edit",recordId:h.id}):Cl.resourceAction({...n,actionName:"new"});return c.then((e=>{e.data.notice&&g(e.data.notice),!1!==(null==o?void 0:o.updateOnSave)&&f((t=>cl(t,e.data))),s(0),a(!1),i(!0)})).catch((()=>{g({message:"There was an error updating record, Check out console to see more information.",type:"error"}),s(0),a(!1)})),c}),[h,r,a,s,b]);return{record:h,handleChange:q,submit:k,loading:l,progress:c,setRecord:f,isSynced:n}};const _l=(e,t)=>{const r=e.lastIndexOf("?"),o=-1!==r?e.substring(r+1):null;var l,a;const n=new URLSearchParams(null!==(a=null!==(l=null!=t?t:o)&&void 0!==l?l:window.location.search)&&void 0!==a?a:""),i="true"===new URLSearchParams(o||"").get("ignore_params")?new URLSearchParams(""):new URLSearchParams(n.toString());i.set("refresh","true");return`${-1!==r?e.substring(0,r):e}?${i.toString()}`},$l=e=>{const t=new URLSearchParams(e);return t.get("refresh")&&t.delete("refresh"),t.toString()},Ll=e=>{const t=v.useLocation(),r=v.useHistory(),o=nl();return l=>{const{data:a}=l;if(a.notice&&o(a.notice),a.redirectUrl&&t.pathname!==a.redirectUrl){const e=_l(a.redirectUrl);r.push(e)}e&&e(a)}};var Sl=function(t,r){const[o,l]=e.useState((()=>{try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):r}catch(e){return console.log(e),r}}));return[o,e=>{try{const r=e instanceof Function?e(o):e;l(r),window.localStorage.setItem(t,JSON.stringify(r))}catch(e){console.log(e)}}]};const zl=(e,t)=>{const r=new RegExp(`${e}($|/)`);return!!t.pathname.match(r)};function Bl(t){const[r,o]=Sl("sidebarElements",{}),l=v.useHistory(),a=v.useLocation(),n=e.useMemo((()=>(e,t)=>({href:e.href||void 0,icon:t,isSelected:zl(e.href,a),label:e.name,id:e.id,onClick:t=>{e.href&&(t.preventDefault(),l.push(e.href))}})),[a,l]),i=t.filter((e=>{var t;return e.href&&!1!==(null===(t=e.navigation)||void 0===t?void 0:t.show)})).reduce(((e,t)=>{var l,a,i,c,s;const d=(null===(l=t.navigation)||void 0===l?void 0:l.name)||["resource",t.name].join("-");return t.navigation&&null!==t.navigation.name?e[d]&&e[d].elements&&(null===(i=t.navigation)||void 0===i?void 0:i.name)?e[d].elements.push(n(t)):e[d]={elements:[n(t)],label:null===(c=t.navigation)||void 0===c?void 0:c.name,icon:null===(s=t.navigation)||void 0===s?void 0:s.icon,onClick:()=>o({...r,[d]:!r[d]}),isOpen:!!r[d]}:e[d]=n(t,null===(a=t.navigation)||void 0===a?void 0:a.icon),e}),{});return Object.values(i)}const Pl=()=>{const{i18n:e,...t}=y.useTranslation(),r=(e=>{const t=(t,r,o)=>xl(e,"actions",t,r,o),r=(t,r,o)=>xl(e,"buttons",t,r,o),o=(t,r,o)=>xl(e,"labels",t,r,o),l=(t,r,o)=>xl(e,"properties",t,r,o),a=(t,r,o)=>xl(e,"messages",t,r,o);return{translateAction:t,ta:t,translateButton:r,tb:r,translateLabel:o,tl:o,translateProperty:l,tp:l,translateMessage:a,tm:a,t:e.t,translate:e.t}})(e);return{...t,i18n:e,...r}};const Dl=new Qo;function Il(t){const[r,o]=e.useState([]),[l,a]=e.useState(!1),[n,i]=e.useState(10),[c,s]=e.useState(1),[d,p]=e.useState(0),[m,u]=e.useState("asc"),[h,b]=e.useState(),f=v.useLocation(),g=v.useHistory(),q=il(),{translateMessage:k}=Pl(),y=il(),x=()=>{a(!0);const e=new URLSearchParams(f.search),r=Dl.resourceAction({actionName:"list",resourceId:t,params:e});return r.then((e=>{const t=e.data;t.notice&&y(t.notice),t.redirectUrl?g.push(t.redirectUrl):(o(t.records),s(t.meta.page),i(t.meta.perPage),p(t.meta.total),u(t.meta.direction),b(t.meta.sortBy),a(!1))})).catch((()=>{q({message:k("errorFetchingRecords",t),type:"error"})})),r};return e.useEffect((()=>{var e;e=f.search,new URLSearchParams(e).get("refresh")?g.replace({pathname:f.pathname,search:$l(f.search).toString()}):x()}),[t,f.search,f.state]),{records:r,loading:l,page:c,total:d,direction:m,sortBy:h,perPage:n,fetchData:x}}var Fl=t=>{const{children:r,action:o,actionPerformed:l,resourceId:a,recordId:n,recordIds:i}=t,{href:c,handleClick:s}=function(e,t,r){const o=v.useHistory(),l=Ll(r);return{href:Yo(e,t),callApi:tl({action:e,params:t,actionResponseHandler:l}),handleClick:ol({action:e,params:t,actionResponseHandler:l,push:o.push})}}(o,{resourceId:a,recordId:n,recordIds:i},l);if(!o)return null;const d=_(e).Children.toArray(r)[0];if(!d||"string"==typeof d||"number"==typeof d||"boolean"==typeof d)throw new Error("ActionButton has to have one child");return _(e).cloneElement(d,{onClick:s,"data-testid":rl(o),href:c})};const Ml=_(c)(a.Link)`
  color: ${({theme:e})=>e.colors.grey40};
  font-family: ${({theme:e})=>e.font};
  line-height: ${({theme:e})=>e.lineHeights.default};
  font-size: ${({theme:e})=>e.fontSizes.default};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.colors.primary100};
  }

  &:after {
    content: '/';
    padding: 0 ${({theme:e})=>e.space.default};
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`,Rl=_(c)(x.Text)`
  color: ${({theme:e})=>e.colors.grey40};
  font-family: ${({theme:e})=>e.font};
  font-weight: ${({theme:e})=>e.fontWeights.normal.toString()};
  line-height: ${({theme:e})=>e.lineHeights.default};
  font-size: ${({theme:e})=>e.fontSizes.default};
  cursor: pointer;
  display: inline;

  &:after {
    content: '/';
    padding: 0 ${({theme:e})=>e.space.default};
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;var Al=t=>{const{resource:r,record:o,actionName:l}=t,a=r.resourceActions.find((({name:e})=>"list"===e)),n=r.actions.find((e=>e.name===l)),i=new Zo,{translateLabel:c}=Pl();return _(e).createElement(x.Box,{flexGrow:1,className:x.cssClass("Breadcrumbs")},_(e).createElement(Ml,{to:i.dashboardUrl()},c("dashboard")),a?_(e).createElement(Ml,{to:r.href?r.href:"/",className:o?"is-active":""},r.name):_(e).createElement(Rl,null,r.name),n&&"list"!==n.name&&_(e).createElement(Ml,{to:"#"},n.label))};const Ol=e=>{const{actions:t,params:r,handleClick:o}=e,l=t.map((e=>{const t=Yo(e,r);return{icon:e.icon,label:e.label,variant:e.variant,source:e,href:t||void 0,onClick:t?o:void 0,"data-testid":rl(e),buttons:[]}})),a=l.reduce(((e,t)=>{const r=t.source;if(r.parent){const o=e[r.parent]||l.find((e=>e.source.name===r.parent))||{label:r.parent};return o.buttons=o.buttons||[],o.buttons.push(t),{...e,[r.parent]:o}}return{...e,[t.source.name]:t}}),{});return Object.values(a)},Nl=_(c)((({rounded:t,...r})=>_(e).createElement(a.Link,r)))`${x.ButtonCSS}`,Tl=new Zo,Hl=t=>{const{resourceId:r,showInDrawer:o}=t,l=o?"ChevronRight":"ChevronLeft",{from:a}=i.useSelector((e=>e.router)),{pathname:n,search:c}=a,s=n?[n,c].join(""):Tl.resourceUrl({resourceId:r,search:window.location.search});return _(e).createElement(Nl,{size:"icon",to:s,rounded:!0,mr:"lg",type:"button"},_(e).createElement(x.Icon,{icon:l}))};var jl=t=>{const{resource:r,toggleFilter:o,actionPerformed:l,record:a,action:n,tag:i,omitActions:c}=t,{translateButton:s}=Pl(),d=v.useHistory(),p=Ll(l);if(n.hideActionHeader)return null;const m=r.id,u={resourceId:m,recordId:null==a?void 0:a.id},h=(e,t)=>ol({action:t,params:u,actionResponseHandler:p,push:d.push})(e),b=Ol({actions:a?a.recordActions.filter((e=>!n||n.name!==e.name)):r.resourceActions.filter((e=>"new"===e.name&&(!n||n.name!==e.name))),params:u,handleClick:h});o&&b.push({label:s("filter",r.id),onClick:o,icon:"SettingsAdjust"});const f=Ol({actions:n.showResourceActions?r.resourceActions.filter((e=>!["list","new"].includes(e.name))):[],params:{resourceId:m},handleClick:h}),g=n?n.label:r.name,q=n&&"list"===n.name,k=r.resourceActions.find((e=>"list"===e.name)),y=!n.showInDrawer,w=n.showInDrawer?"":"lg",C=n.showInDrawer?"xl":"default",E=n.showInDrawer?x.H3:x.H2;return _(e).createElement(x.Box,{className:x.cssClass("ActionHeader")},n.showInDrawer?"":_(e).createElement(x.Box,{flex:!0,flexDirection:"row",px:["default",0]},_(e).createElement(Al,{resource:r,actionName:n.name,record:a}),_(e).createElement(x.Box,{flexShrink:0},_(e).createElement(x.ButtonGroup,{size:"sm",rounded:!0,buttons:f}))),_(e).createElement(x.Box,{display:["block",y?"flex":"block"]},_(e).createElement(x.Box,{mt:w,flexGrow:1,px:["default",0]},_(e).createElement(E,{mb:"lg"},!q&&k?_(e).createElement(Hl,{resourceId:m,showInDrawer:n.showInDrawer}):"",g,i?_(e).createElement(x.Badge,{variant:"primary",ml:"default"},i):"")),c?"":_(e).createElement(x.Box,{mt:"xl",mb:C,flexShrink:0},_(e).createElement(x.ButtonGroup,{buttons:b}))))};const Gl=({error:t})=>{const{translateMessage:r}=Pl();return _(e).createElement(x.MessageBox,{m:"xxl",variant:"danger",message:"Javascript Error"},_(e).createElement(x.Text,null,t.toString()),_(e).createElement(x.Text,{mt:"default"},r("seeConsoleForMore")))};class Ul extends _(e).Component{constructor(e){super(e),this.state={error:null}}componentDidCatch(e){this.setState({error:e})}render(){const{children:t}=this.props,{error:r}=this.state;return null!==r?_(e).createElement(Gl,{error:r}):t||null}}var Wl=Ul,Vl={};$(Vl,"show",(()=>ra)),$(Vl,"edit",(()=>ea)),$(Vl,"list",(()=>ta));var Zl=t=>{const{resource:r,property:o}=t,{translateProperty:l,translateButton:a}=Pl(),n=l(`${o.path}.addNewItem`,r.id,{defaultValue:a("addNewItem",r.id)});return _(e).createElement(_(e).Fragment,null,_(e).createElement(x.Icon,{icon:"Add"}),n)};const Jl=t=>{var r;const{property:o}=t;if(!o.description)return null;const l=(null===(r=o.custom)||void 0===r?void 0:r.tooltipDirection)||"top";return _(e).createElement(x.Box,{mx:"sm",display:"inline-flex"},_(e).createElement(x.Tooltip,{direction:l,title:o.description,size:"lg"},_(e).createElement(x.Box,null,_(e).createElement(x.Icon,{icon:"Help",color:"info"}))))},Yl=t=>{const{property:r,props:o}=t;return r.hideLabel?null:_(e).createElement(x.Label,{htmlFor:r.path,required:r.isRequired,...o},r.label,r.description&&_(e).createElement(Jl,{property:r}))},Kl=(e,t)=>({...e,path:[e.path,t].join("."),label:`[${t+1}]`,isArray:!1,isDraggable:!1}),Xl=t=>{const{ItemComponent:r,property:o,onDelete:l,index:a,record:n,isDraggable:i}=t,c=window.btoa(unescape(encodeURIComponent(`${JSON.stringify(fl(n.params,o.path))}-${o.path}`)));return _(e).createElement(w.Draggable,{draggableId:c,index:a,key:c,isDragDisabled:!i},(a=>_(e).createElement(x.Box,{ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,backgroundColor:"white",flex:!0,flexDirection:"row",alignItems:"center","data-testid":o.path},_(e).createElement(x.Box,{flexGrow:1},_(e).createElement(r,t)),_(e).createElement(x.Box,{flexShrink:0,ml:"lg"},_(e).createElement(x.Button,{rounded:!0,ml:"default","data-testid":"delete-item",type:"button",size:"icon",onClick:e=>l(e,o),variant:"danger"},_(e).createElement(x.Icon,{icon:"TrashCan"}))))))},Ql=t=>{const{property:r,record:o,resource:l,onChange:a}=t,n=fl(o.params,r.path)||[],i=e.useCallback((e=>{const t=[...n,r.subProperties.length?{}:""];return a(r.path,t),e.preventDefault(),!1}),[o,a,r]),c=e.useCallback(((e,t)=>{const r=((e,t)=>{const r=Object.keys(e.populated).reduce(((e,t)=>({...e,[t]:t})),{}),o=ql(r,t),l=Object.entries(o).reduce(((t,[r,o])=>({...t,[r]:o&&e.populated[null==o?void 0:o.toString()]})),{});return{...e,params:ql(e.params,t),populated:l}})(o,t.path);return a(r),e.preventDefault(),!1}),[o,a,r]),s=e.useCallback((e=>{const{source:t,destination:o}=e;if(!t||!o||o.index===t.index)return;const l=Array.from(n),[i]=l.splice(t.index,1);l.splice(o.index,0,i),a(r.path,l)}),[o,a,r]);return _(e).createElement(w.DragDropContext,{onDragEnd:s},_(e).createElement(w.Droppable,{droppableId:r.path},(o=>_(e).createElement(x.Section,{ref:o.innerRef,...o.droppableProps,mt:"xl",className:r.path},n.map(((o,l)=>{const a=Kl(t.property,l);return _(e).createElement(Xl,{...t,property:a,isDraggable:r.isDraggable,key:a.path,onDelete:c,index:l})})),o.placeholder,_(e).createElement(x.Button,{onClick:i,type:"button",rounded:!0},_(e).createElement(Zl,{resource:l,property:r}))))))},ea=t=>{const{property:r,record:o,testId:l}=t,a=o.errors&&o.errors[r.propertyPath];return _(e).createElement(x.FormGroup,{error:!!a,"data-testid":l},_(e).createElement(Yl,{property:r}),_(e).createElement(Ql,t),_(e).createElement(x.FormMessage,null,a&&a.message))};var ta=t=>{const{property:r,record:o}=t,l=fl(o.params,r.path)||[],{translateProperty:a}=Pl();return _(e).createElement("span",null,`${a("length")}: ${l.length}`)};class ra extends _(e).PureComponent{render(){const{property:t,record:r,ItemComponent:o}=this.props,l=fl(r.params,t.path)||[];return _(e).createElement(x.ValueGroup,{label:t.label},_(e).createElement(x.Section,null,(l||[]).map(((r,l)=>{const a=Kl(t,l);return _(e).createElement(o,{...this.props,key:a.path,property:a})}))))}}var oa={};function la(e,t){const[r]=t.name.split(".").slice(-1);return{...t,path:[e.path,r].join(".")}}$(oa,"show",(()=>na)),$(oa,"edit",(()=>aa)),$(oa,"list",(()=>ia));var aa=t=>{const{property:r,record:o,ItemComponent:l}=t,a=o.errors&&o.errors[r.path];return _(e).createElement(x.FormGroup,{error:!!a},_(e).createElement(Yl,{property:r}),_(e).createElement(x.Section,r.props,r.subProperties.filter((e=>!e.isId)).map((o=>{const a=la(r,o);return _(e).createElement(l,{...t,key:a.path,property:a})}))),_(e).createElement(x.FormMessage,null,a&&a.message))};var na=t=>{const{property:r,ItemComponent:o}=t;return _(e).createElement(x.ValueGroup,{label:r.label},_(e).createElement(x.Section,null,r.subProperties.filter((e=>!e.isId)).map((l=>{const a=la(r,l);return _(e).createElement(o,{...t,key:a.path,property:a})}))))};class ia extends _(e).PureComponent{renderItems(){const{property:t,ItemComponent:r}=this.props;return _(e).createElement(_(e).Fragment,null,t.subProperties.filter((e=>!e.isId)).map((o=>{const l=la(t,o);return _(e).createElement("div",{key:l.path},_(e).createElement(x.Label,{inline:!0},`${o.label}: `),_(e).createElement(r,{...this.props,property:l}))})))}render(){const{property:t,record:r,resource:o}=this.props,l=r.recordActions.find((e=>"show"===e.name));if(o.titleProperty.propertyPath===t.propertyPath&&l){const t=(new Zo).recordActionUrl({resourceId:o.id,recordId:r.id,actionName:"show"});return _(e).createElement(a.Link,{to:t},this.renderItems())}return this.renderItems()}}var ca={};$(ca,"show",(()=>da)),$(ca,"edit",(()=>ba)),$(ca,"filter",(()=>ga)),$(ca,"list",(()=>qa));var sa=t=>{const{property:r,record:o}=t,l=null==o?void 0:o.params[r.path];if(void 0===l)return null;if(r.availableValues){const t=r.availableValues.find((e=>e.value===l));return t?_(e).createElement(x.Badge,null,(null==t?void 0:t.label)||l):l}return l};class da extends _(e).PureComponent{render(){const{property:t}=this.props;return _(e).createElement(x.ValueGroup,{label:t.label},_(e).createElement(sa,this.props))}}const pa=(e,t)=>{const r=e.record.params[e.property.path],o=t.record.params[t.property.path],l=e.record.errors[e.property.path],a=t.record.errors[t.property.path];return r===o&&l===a},ma=t=>{var r;const{property:o,record:l}=t,a=null===(r=l.errors)||void 0===r?void 0:r[o.path];return _(e).createElement(x.FormGroup,{error:Boolean(a)},_(e).createElement(Yl,{property:o}),o.availableValues?_(e).createElement(ua,t):_(e).createElement(ha,t),_(e).createElement(x.FormMessage,null,a&&a.message))},ua=t=>{var r;const{theme:o,record:l,property:a,onChange:n}=t;if(!a.availableValues)return null;var i;const c=null!==(i=null===(r=l.params)||void 0===r?void 0:r[a.path])&&void 0!==i?i:"",s=x.selectStyles(o),d=a.availableValues.find((e=>e.value===c));var p;return _(e).createElement(_(C),{isClearable:!0,styles:s,value:d,required:a.isRequired,options:a.availableValues,onChange:e=>n(a.path,null!==(p=null==e?void 0:e.value)&&void 0!==p?p:""),isDisabled:a.isDisabled,...a.props})},ha=t=>{var r;const{property:o,record:l,onChange:a}=t;var n;const i=null!==(n=null===(r=l.params)||void 0===r?void 0:r[o.path])&&void 0!==n?n:"",[c,s]=e.useState(i);return e.useEffect((()=>{c!==i&&s(i)}),[i]),_(e).createElement(x.Input,{id:o.path,name:o.path,required:o.isRequired,onChange:e=>s(e.target.value),onBlur:()=>a(o.path,c),onKeyDown:e=>13===e.keyCode&&a(o.path,c),value:c,disabled:o.isDisabled,...o.props})};var ba=c.withTheme(e.memo(ma,pa));class fa extends _(e).PureComponent{constructor(e){super(e),this.handleInputChange=this.handleInputChange.bind(this),this.handleSelectChange=this.handleSelectChange.bind(this)}handleInputChange(e){const{onChange:t,property:r}=this.props;t(r.path,e.target.value)}handleSelectChange(e){const{onChange:t,property:r}=this.props,o=e?e.value:"";t(r.path,o)}renderInput(){const{property:t,filter:r,theme:o}=this.props,l=`filter-${t.path}`,a=r[t.path]||"";if(t.availableValues){const r=t.availableValues.find((e=>e.value===a));return _(e).createElement(_(C),{value:void 0===r?"":r,isClearable:!0,options:t.availableValues,styles:x.filterStyles(o),onChange:this.handleSelectChange})}return _(e).createElement(x.Input,{name:l,onChange:this.handleInputChange,value:a})}render(){const{property:t}=this.props;return _(e).createElement(x.FormGroup,{variant:"filter"},_(e).createElement(x.Label,null,t.label),this.renderInput())}}var ga=c.withTheme(fa);class qa extends _(e).PureComponent{render(){return _(e).createElement(sa,this.props)}}var ka={};$(ka,"edit",(()=>ya)),$(ka,"show",(()=>Ca)),$(ka,"list",(()=>Ea)),$(ka,"filter",(()=>$a));const va=t=>{const{property:r,onChange:o,record:l}=t,a=(e=>!(!e||"false"===e))(l.params&&l.params[r.path]),n=l.errors&&l.errors[r.path];return _(e).createElement(x.FormGroup,{error:!!n},_(e).createElement(x.CheckBox,{id:r.path,name:r.path,onChange:()=>{r.isDisabled||o(r.path,!a)},checked:a,disabled:r.isDisabled,...r.props}),_(e).createElement(Yl,{property:r,props:{inline:!0}}),_(e).createElement(x.FormMessage,null,n&&n.message))};var ya=e.memo(va,pa),xa=e=>void 0===e?"":e?"Yes":"No";var wa=t=>{const{record:r,property:o,resource:l}=t,{translateProperty:a}=Pl(),n=null==r?void 0:r.params[o.path];if(void 0===n||""===n)return null;const i=xa(n),c=a(`${o.path}.${n}`,l.id,{defaultValue:i});return _(e).createElement(x.Badge,{outline:!0,size:"sm"},c)};class Ca extends _(e).PureComponent{render(){const{property:t}=this.props;return _(e).createElement(x.ValueGroup,{label:t.label},_(e).createElement(wa,this.props))}}class Ea extends _(e).PureComponent{render(){return _(e).createElement(wa,this.props)}}class _a extends _(e).PureComponent{constructor(e){super(e),this.handleChange=this.handleChange.bind(this)}handleChange(e){const{onChange:t,property:r}=this.props,o=e?e.value:"";t(r.path,o)}render(){const{property:t,filter:r={},theme:o}=this.props,l=void 0===r[t.path]?"":r[t.path],a=[{value:!0,label:xa(!0)},{value:!1,label:xa(!1)}],n=a.find((e=>e.value===l));return _(e).createElement(x.FormGroup,null,_(e).createElement(x.Label,null,t.label),_(e).createElement(_(C),{value:void 0===n?"":n,isClearable:!0,options:a,styles:x.filterStyles(o),onChange:this.handleChange}))}}var $a=c.withTheme(_a),La={};$(La,"edit",(()=>za)),$(La,"show",(()=>Pa)),$(La,"list",(()=>Da)),$(La,"filter",(()=>Na));const Sa=t=>{const{property:r,onChange:o,record:l}=t,a=l.params&&l.params[r.path]||"",n=l.errors&&l.errors[r.path];return _(e).createElement(x.FormGroup,{error:!!n},_(e).createElement(Yl,{property:r}),_(e).createElement(x.DatePicker,{value:a,disabled:r.isDisabled,onChange:e=>o(r.path,e),propertyType:r.type,...r.props}),_(e).createElement(x.FormMessage,null,n&&n.message))};var za=e.memo(Sa,pa),Ba=(e,t)=>{if(!e)return"";const r=new Date(e);return r?x.formatDateProperty(r,t):""};class Pa extends _(e).PureComponent{render(){const{property:t,record:r}=this.props,o=Ba(r.params[t.path],t.type);return _(e).createElement(x.ValueGroup,{label:t.label},o)}}class Da extends _(e).PureComponent{render(){const{property:t,record:r}=this.props,o=Ba(r.params[t.path],t.type);return _(e).createElement("span",null,o)}}var Ia,Fa={};Ia=Fa,Object.defineProperty(Ia,"__esModule",{value:!0,configurable:!0}),$(Fa,"PARAM_SEPARATOR",(()=>Ma)),$(Fa,"Filter",(()=>Ra)),$(Fa,"default",(()=>Aa));const Ma="~~";class Ra{static normalizeKeys(e){return q.unflatten(q.flatten(e),{delimiter:Ma})}constructor(e={},t){this.resource=t;const r=Ra.normalizeKeys(e);this.filters=Object.keys(r).reduce(((e,t)=>(e[t]={path:t,property:this.resource.property(t),value:r[t]},e)),{})}get(e){return this.filters[e]}async populate(){const e=Object.keys(this.filters);for(let r=0;r<e.length;r+=1){var t;const o=e[r],l=null===(t=this.resource.decorate().getPropertyByKey(o))||void 0===t?void 0:t.reference();l&&(this.filters[o].populated=await l.findOne(this.filters[o].value))}return this}reduce(e,t){return Object.values(this.filters).reduce(e,t||{})}isVisible(){return!!Object.keys(this.filters).length}}var Aa=Ra;const{PARAM_SEPARATOR:Oa}=Fa;var Na=t=>{const{property:r,filter:o,onChange:l}=t,{translateProperty:a}=Pl(),n=`${r.path}${Oa}from`,i=`${r.path}${Oa}to`,c=o[n],s=o[i];return _(e).createElement(_(e).Fragment,null,_(e).createElement(x.FormGroup,{variant:"filter"},_(e).createElement(x.Label,null,r.label),_(e).createElement(x.Label,null,`- ${a("from")}: `),_(e).createElement(x.DatePicker,{value:c,onChange:e=>l(n,e),propertyType:r.type}),_(e).createElement(x.Label,{mt:"default"},`- ${a("to")}: `),_(e).createElement(x.DatePicker,{value:s,onChange:e=>l(i,e),propertyType:r.type})))},Ta={};$(Ta,"edit",(()=>ja)),$(Ta,"show",(()=>Ga)),$(Ta,"list",(()=>Ua));const Ha=t=>{var r;const{property:o,record:l,onChange:a}=t;var n;const i=null!==(n=null===(r=l.params)||void 0===r?void 0:r[o.path])&&void 0!==n?n:"",c=l.errors&&l.errors[o.path],{props:s}=o,{quill:d={},...p}=s||{};return d.theme=d.theme||"snow",d.modules={toolbar:x.DefaultQuillToolbarOptions,...d.modules||{}},_(e).createElement(x.FormGroup,{error:Boolean(c)},_(e).createElement(Yl,{property:o}),_(e).createElement(x.RichText,{...p,value:i,onChange:e=>a(o.path,e),quill:d}),_(e).createElement(x.FormMessage,null,null==c?void 0:c.message))};var ja=e.memo(Ha,pa);class Ga extends _(e).PureComponent{constructor(t){super(t),this.contentRef=_(e).createRef()}componentDidMount(){const{property:e,record:t}=this.props,r=t.params[e.path];this.contentRef.current.innerHTML=r}render(){const{property:t}=this.props;return _(e).createElement(x.ValueGroup,{label:t.label},_(e).createElement(x.Box,{variant:"grey",border:"default"},_(e).createElement(x.Text,{ref:this.contentRef})))}}var Ua=t=>{const{property:r,record:o}=t,l=o.params[r.path]||"",a=l.substring(0,15)+(l.length>15?"...":"");return _(e).createElement("span",null,a)},Wa={};$(Wa,"edit",(()=>Va)),$(Wa,"show",(()=>Ya)),$(Wa,"list",(()=>Ka)),$(Wa,"filter",(()=>Qa));var Va=c.withTheme((t=>{const{onChange:r,property:o,record:l,theme:a}=t,{reference:n}=o;if(!n)throw new Error(`Cannot reference resource in property '${o.path}'`);const i=null==l?void 0:l.errors[o.path],c=null==l?void 0:l.params[o.path],[s,d]=e.useState(),[p,m]=e.useState(0);var u;const h=null!==(u=null==l?void 0:l.populated[o.path])&&void 0!==u?u:s,b=c&&h?{value:h.id,label:h.title}:{value:"",label:""},f=x.selectStyles(a);return e.useEffect((()=>{if(!h&&c){m((e=>e+1));(new Qo).recordAction({actionName:"show",resourceId:n,recordId:c}).then((({data:e})=>{d(e.record)})).finally((()=>{m((e=>e-1))}))}}),[h,c,n]),_(e).createElement(x.FormGroup,{error:Boolean(i)},_(e).createElement(Yl,{property:o}),_(e).createElement(_(E),{cacheOptions:!0,value:b,styles:f,defaultOptions:!0,loadOptions:async e=>{const t=new Qo;return(await t.searchRecords({resourceId:n,query:e})).map((e=>({value:e.id,label:e.title,record:e})))},onChange:e=>{e?r(o.path,e.value,e.record):r(o.path,null)},isClearable:!0,isDisabled:o.isDisabled,isLoading:p,...o.props}),_(e).createElement(x.FormMessage,null,null==i?void 0:i.message))}));const Za=_(c)(a.Link)`
  ${x.ButtonCSS};
  padding-left: ${({theme:e})=>e.space.xs};
  padding-right: ${({theme:e})=>e.space.xs};
`;var Ja=t=>{const{property:r,record:o}=t,l=new Zo,a=o.params[r.path],n=o.populated[r.path],i=n&&n.title||a;if(!r.reference)throw new Error(`property: "${r.path}" does not have a reference`);if(n&&n.recordActions.find((e=>"show"===e.name))){const t=l.recordActionUrl({resourceId:r.reference,recordId:a,actionName:"show"});return _(e).createElement(Za,{variant:"text",to:t},i)}return _(e).createElement("span",null,i)};class Ya extends _(e).PureComponent{render(){const{property:t,record:r}=this.props;return _(e).createElement(x.ValueGroup,{label:t.label},_(e).createElement(Ja,{property:t,record:r}))}}class Ka extends _(e).PureComponent{render(){const{property:t,record:r}=this.props;return _(e).createElement(Ja,{property:t,record:r})}}class Xa extends _(e).PureComponent{constructor(e){super(e),this.api=new Qo,this.options=[],this.loadOptions=this.loadOptions.bind(this),this.handleChange=this.handleChange.bind(this)}handleChange(e){const{onChange:t,property:r}=this.props;t(r.path,e?e.value:"")}async loadOptions(e){const{property:t}=this.props,r=await this.api.searchRecords({resourceId:t.reference,query:e});return this.options=r.map((e=>({value:e.id,label:e.title}))),this.options}render(){const{property:t,filter:r,theme:o}=this.props,l=void 0===r[t.path]?"":r[t.path],a=(this.options||[]).find((e=>e.value===l));return _(e).createElement(x.FormGroup,null,_(e).createElement(x.Label,null,t.label),_(e).createElement(_(E),{value:void 0===a?"":a,isClearable:!0,cacheOptions:!0,styles:x.filterStyles(o),loadOptions:this.loadOptions,onChange:this.handleChange,defaultOptions:!0}))}}var Qa=c.withTheme(Xa),en={};$(en,"show",(()=>tn)),$(en,"edit",(()=>on));class tn extends _(e).PureComponent{render(){const{property:t,record:r}=this.props,o=r.params[t.path]||"";return _(e).createElement(x.ValueGroup,{label:t.label},o.split(/(?:\r\n|\r|\n)/g).map(((t,r)=>_(e).createElement(_(e).Fragment,{key:r},t,_(e).createElement("br",null)))))}}const rn=t=>{var r,o;const{onChange:l,property:a,record:n}=t;var i;const c=null!==(i=null===(r=n.params)||void 0===r?void 0:r[a.path])&&void 0!==i?i:"",[s,d]=e.useState(c),p=null===(o=n.errors)||void 0===o?void 0:o[a.path];return e.useEffect((()=>{s!==c&&d(c)}),[c]),_(e).createElement(x.FormGroup,{error:Boolean(p)},_(e).createElement(Yl,{property:a}),_(e).createElement(x.Input,{as:"textarea",rows:(s.match(/\n/g)||[]).length+1,id:a.path,name:a.path,onChange:e=>d(e.target.value),onBlur:()=>l(a.path,s),value:s,disabled:a.isDisabled,...a.props}),_(e).createElement(x.FormMessage,null,p&&p.message))};var on=e.memo(rn,pa),ln={};$(ln,"edit",(()=>nn));const an=t=>{const{property:r,record:o,onChange:l}=t,a=o.params[r.path],[n,i]=e.useState(a),c=o.errors&&o.errors[r.path],[s,d]=e.useState(!1);return e.useEffect((()=>{n!==a&&i(a)}),[a]),_(e).createElement(x.FormGroup,{error:!!c},_(e).createElement(Yl,{property:r}),_(e).createElement(x.InputGroup,null,_(e).createElement(x.Input,{type:s?"input":"password",className:"input",id:r.path,name:r.path,onChange:e=>i(e.target.value),onBlur:()=>l(r.path,n),onKeyDown:e=>13===e.keyCode&&l(r.path,n),value:null!=n?n:"",disabled:r.isDisabled,...r.props}),_(e).createElement(x.Button,{variant:s?"primary":"text",type:"button",size:"icon",onClick:()=>d(!s)},_(e).createElement(x.Icon,{icon:"View"}))),_(e).createElement(x.FormMessage,null,c&&c.message))};var nn=e.memo(an,pa);let cn={};try{cn=window}catch(e){if("window is not defined"!==e.message)throw e}const sn={textarea:en,boolean:ka,datetime:La,reference:Wa,password:ln,date:La,richtext:Ta,string:ca,number:ca,float:ca,mixed:null},dn=t=>{const{property:r,resource:o,record:l,filter:a,where:n,onChange:i}=t,c=e.useMemo((()=>({...r,path:r.path||r.propertyPath})),[r]),s=`property-${n}-${c.path}`;let d=sn[c.type]&&sn[c.type][n]||ca[n];if(c.components&&c.components[n]){const t=c.components[n];if(!t)throw new Error(`there is no "${c.path}.components.${n}"`);return d=cn.AdminJS.UserComponents[t],_(e).createElement(Wl,null,_(e).createElement(x.Box,{"data-testid":s},_(e).createElement(d,{property:c,resource:o,record:l,filter:a,onChange:i,where:n})))}const p=Vl[n],m=oa[n];return r.isArray?p?_(e).createElement(p,{...t,property:c,ItemComponent:dn,testId:s}):_(e).createElement("div",null):"mixed"===r.type?m?_(e).createElement(m,{...t,property:c,ItemComponent:dn,testId:s}):_(e).createElement("div",null):_(e).createElement(Wl,null,_(e).createElement(x.Box,{"data-testid":s},_(e).createElement(d,{property:c,resource:o,record:l,filter:a,onChange:i,where:n})))};function pn(e){return{Edit:e.edit,Show:e.show,List:e.list,Filter:e.filter}}const mn=Object.assign(dn,{DefaultType:pn(ca),Boolean:pn(ka),DateTime:pn(La),RichText:pn(Ta),Reference:pn(Wa),TextArea:pn(en),Password:pn(ln)}),un=t=>{const{layoutElement:r,resource:o,where:l,record:a,onChange:n}=t,{props:i,properties:c,layoutElements:s,component:d}=r,{children:p,...m}=i,u=c.map((e=>o.properties[e])),h=x[d];return h?_(e).createElement(h,m,u.map((t=>_(e).createElement(x.Box,{flexGrow:1,key:t.propertyPath},_(e).createElement(mn,{key:t.propertyPath,where:l,property:t,resource:o,record:a,onChange:n})))),s.map(((r,o)=>_(e).createElement(un,{...t,key:o,layoutElement:r}))),p):_(e).createElement(x.MessageBox,{size:"sm",message:"Javascript Error",variant:"danger",py:"xl"},"There is no component by the name of",_(e).createElement(x.Badge,{size:"sm",variant:"danger",mx:"default"},d),"in @adminjs/design-system. Change",_(e).createElement(x.Badge,{size:"sm",variant:"danger",mx:"default"},`@${d}`),"to available component like @Header")};var hn=un;const bn=t=>{const{resource:r,record:o,action:l}=t,a=r.showProperties;return _(e).createElement(x.DrawerContent,null,(null==l?void 0:l.showInDrawer)?_(e).createElement(jl,t):null,l.layout?l.layout.map(((r,o)=>_(e).createElement(hn,{key:o,layoutElement:r,...t,where:"show"}))):a.map((t=>_(e).createElement(mn,{key:t.propertyPath,where:"show",property:t,resource:r,record:o}))))},fn=e=>[e?"table-cell":"none",e?"table-cell":"none","table-cell","table-cell"];var gn=t=>{const{resource:r,record:o,actionPerformed:l,isLoading:n,onSelect:i,isSelected:c}=t,[s,d]=e.useState(o),p=a.useHistory(),m=e.useCallback((e=>{e.record&&!e.redirectUrl?d(cl(s,e)):l&&l(e)}),[l,s]),u=Ll(m);e.useEffect((()=>{d(o)}),[o]);const{recordActions:h}=s,b=s.recordActions.find((({name:e})=>"show"===e)),f=s.recordActions.find((({name:e})=>"edit"===e)),g=b||f,q={resourceId:r.id,recordId:s.id},k=[{icon:"OverflowMenuHorizontal",variant:"light",label:void 0,"data-testid":"actions-dropdown",buttons:Ol({actions:h,params:q,handleClick:(e,t)=>ol({action:t,params:q,actionResponseHandler:u,push:p.push})(e)})}];return _(e).createElement(x.TableRow,{onClick:e=>{const t=e.target.tagName.toLowerCase();g&&"a"!==t&&"button"!==t&&"svg"!==t&&ol({action:g,params:{resourceId:r.id,recordId:s.id},actionResponseHandler:u,push:p.push})(e)},"data-id":s.id},_(e).createElement(x.TableCell,{className:c?"selected":"not-selected"},i&&s.bulkActions.length?_(e).createElement(x.CheckBox,{onChange:()=>i(s),checked:c}):null),r.listProperties.map((t=>_(e).createElement(x.TableCell,{style:{cursor:"pointer"},key:t.propertyPath,"data-property-name":t.propertyPath,display:fn(t.isTitle)},n?_(e).createElement(x.Placeholder,{style:{height:14}}):_(e).createElement(mn,{key:t.propertyPath,where:"list",property:t,resource:r,record:s})))),_(e).createElement(x.TableCell,{key:"options"},h.length?_(e).createElement(x.ButtonGroup,{buttons:k}):""))};class qn extends _(e).PureComponent{constructor(e){super(e),this.isActive=this.isActive.bind(this)}isActive(){const{sortBy:e,property:t}=this.props;return e===t.propertyPath}render(){const{property:t,location:r,direction:o}=this.props,l=new URLSearchParams(r.search),n=this.isActive()&&"asc"===o?"desc":"asc",i="Caret"+("asc"===o?"Up":"Down");return l.set("direction",n),l.set("sortBy",t.propertyPath),_(e).createElement(a.NavLink,{to:{search:l.toString()},className:x.cssClass("SortLink")},t.label,this.isActive()?_(e).createElement(x.Icon,{icon:i,color:"primary100",ml:"default"}):"")}}var kn=a.withRouter(qn);var vn=t=>{const{property:r,titleProperty:o,display:l}=t,a=r.propertyPath===o.propertyPath;return _(e).createElement(x.TableCell,{className:a?"main":void 0,display:l},r.isSortable?_(e).createElement(kn,t):r.label)};var yn=t=>{const{titleProperty:r,properties:o,sortBy:l,direction:a,onSelectAll:n,selectedAll:i}=t;return _(e).createElement(x.TableHead,null,_(e).createElement(x.TableRow,null,_(e).createElement(x.TableCell,null,n?_(e).createElement(x.CheckBox,{style:{marginLeft:5},onChange:()=>n(),checked:i}):null),o.map((t=>_(e).createElement(vn,{display:fn(t.isTitle),key:t.propertyPath,titleProperty:r,property:t,sortBy:l,direction:a}))),_(e).createElement(x.TableCell,{key:"actions",style:{width:80}})))};function xn(t,r){if("undefined"==typeof window)return t;return o=>{let l=window;l=window;let a=t;return l.AdminJS&&l.AdminJS.UserComponents&&l.AdminJS.UserComponents[r]?(a=l.AdminJS.UserComponents[r],_(e).createElement(a,{...o,OriginalComponent:t})):_(e).createElement(a,o)}}const wn=xn((t=>{const{resource:r}=t,{translateButton:o,translateMessage:l}=Pl(),a=r.resourceActions.find((e=>"new"===e.name));return _(e).createElement(x.InfoBox,{title:l("noRecords",r.id)},_(e).createElement(x.Text,{mb:"xxl"},l("noRecordsInResource",r.id)),a?_(e).createElement(Fl,{action:a,resourceId:r.id},_(e).createElement(x.Button,{variant:"primary"},_(e).createElement(x.Icon,{icon:"Add"}),o("createFirstRecord",r.id))):"")}),"NoRecords");var Cn=wn;var En=e=>Object.values(e.reduce(((e,t)=>({...e,...t.bulkActions.reduce(((e,t)=>({...e,[t.name]:t})),{})})),{}));var _n=t=>{const{resource:r,selectedRecords:o}=t,{translateLabel:l}=Pl(),a=v.useHistory(),n=Ll();if(!o||!o.length)return null;const i={resourceId:r.id,recordIds:o.map((e=>e.id))},c=Ol({actions:En(o),params:i,handleClick:(e,t)=>ol({action:t,params:i,actionResponseHandler:n,push:a.push})(e)});return _(e).createElement(x.TableCaption,null,_(e).createElement(x.Box,{flex:!0,py:"sm",alignItems:"center"},_(e).createElement(x.Title,{mr:"lg"},l("selectedRecords",r.id,{selected:o.length})),_(e).createElement(x.ButtonGroup,{size:"sm",rounded:!0,buttons:c})))};var $n=t=>{const{resource:r,records:o,actionPerformed:l,sortBy:a,direction:n,isLoading:i,onSelect:c,selectedRecords:s,onSelectAll:d}=t;if(!o.length)return i?_(e).createElement(x.Loader,null):_(e).createElement(Cn,{resource:r});const p=s&&!!o.find((e=>s.find((t=>t.id===e.id)))),m=!!o.find((e=>e.bulkActions.length));return _(e).createElement(x.Table,null,_(e).createElement(_n,{resource:r,selectedRecords:s}),_(e).createElement(yn,{properties:r.listProperties,titleProperty:r.titleProperty,direction:n,sortBy:a,onSelectAll:m?d:void 0,selectedAll:p}),_(e).createElement(x.TableBody,null,o.map((t=>_(e).createElement(gn,{record:t,resource:r,key:t.id,actionPerformed:l,isLoading:i,onSelect:c,isSelected:s&&!!s.find((e=>e.id===t.id))})))))};const Ln=e=>({addNotice:t=>e(al(t))}),Sn=e=>i.connect(null,Ln)(e),zn=Sn(v.withRouter((t=>{const{resource:r,records:o,action:l,addNotice:a,history:n}=t,[i,c]=e.useState(!1),{translateMessage:s,translateButton:d}=Pl();if(!o)return _(e).createElement(x.Text,null,s("pickSomeFirstToRemove",r.id));return _(e).createElement(_(e).Fragment,null,_(e).createElement(x.DrawerContent,null,(null==l?void 0:l.showInDrawer)?_(e).createElement(jl,{omitActions:!0,...t}):null,_(e).createElement(x.MessageBox,{mb:"xxl",variant:"danger",message:s("theseRecordsWillBeRemoved",r.id,{count:o.length})}),_(e).createElement(x.Table,null,_(e).createElement(x.TableBody,null,o.map((t=>_(e).createElement(x.TableRow,{key:t.id},_(e).createElement(x.TableCell,null,_(e).createElement(mn,{where:"list",property:r.titleProperty,resource:r,record:t})))))))),_(e).createElement(x.DrawerFooter,null,_(e).createElement(x.Button,{variant:"primary",size:"lg",onClick:()=>{const e=new Qo;c(!0);const t=o.map((e=>e.id));e.bulkAction({resourceId:r.id,actionName:l.name,recordIds:t,method:"post"}).then((e=>{if(c(!1),e.data.notice&&a(e.data.notice),e.data.redirectUrl){const t=new URLSearchParams(window.location.search);t.delete("recordIds"),n.push(_l(e.data.redirectUrl,t.toString()))}})).catch((e=>{throw c(!1),a({message:s("bulkDeleteError",r.id),type:"error"}),e}))},disabled:i},i?_(e).createElement(x.Icon,{icon:"Fade",spin:!0}):null,d("confirmRemovalMany",r.id,{count:o.length}))))}))),Bn={new:t=>{const{record:r,resource:o,action:l}=t,{record:a,handleChange:n,submit:i,loading:c,setRecord:s}=El(r,o.id),{translateButton:d}=Pl(),p=v.useHistory();e.useEffect((()=>{r&&s(r)}),[r]);return _(e).createElement(x.Box,{as:"form",onSubmit:e=>(e.preventDefault(),i().then((e=>{e.data.redirectUrl&&p.push(_l(e.data.redirectUrl)),e.data.record.id&&!Object.keys(e.data.record.errors).length&&n({params:{},populated:{},errors:{}})})),!1),flex:!0,flexGrow:1,flexDirection:"column"},_(e).createElement(x.DrawerContent,null,(null==l?void 0:l.showInDrawer)?_(e).createElement(jl,t):null,l.layout?l.layout.map(((r,o)=>_(e).createElement(hn,{key:o,layoutElement:r,...t,where:"edit",onChange:n,record:a}))):o.editProperties.map((t=>_(e).createElement(mn,{key:t.propertyPath,where:"edit",onChange:n,property:t,resource:o,record:a})))),_(e).createElement(x.DrawerFooter,null,_(e).createElement(x.Button,{variant:"primary",size:"lg",type:"submit","data-testid":"button-save",disabled:c},c?_(e).createElement(x.Icon,{icon:"Fade",spin:!0}):null,d("save",o.id))))},edit:t=>{const{record:r,resource:o,action:l}=t,{record:a,handleChange:n,submit:i,loading:c,setRecord:s}=El(r,o.id),{translateButton:d}=Pl(),p=v.useHistory();e.useEffect((()=>{r&&s(r)}),[r]);return _(e).createElement(x.Box,{as:"form",onSubmit:e=>(e.preventDefault(),i().then((e=>{e.data.redirectUrl&&p.push(_l(e.data.redirectUrl))})),!1),flex:!0,flexGrow:1,flexDirection:"column"},_(e).createElement(x.DrawerContent,null,(null==l?void 0:l.showInDrawer)?_(e).createElement(jl,t):null,l.layout?l.layout.map(((r,o)=>_(e).createElement(hn,{key:o,layoutElement:r,...t,where:"edit",onChange:n,record:a}))):o.editProperties.map((t=>_(e).createElement(mn,{key:t.propertyPath,where:"edit",onChange:n,property:t,resource:o,record:a})))),_(e).createElement(x.DrawerFooter,null,_(e).createElement(x.Button,{variant:"primary",size:"lg",type:"submit","data-testid":"button-save",disabled:c},c?_(e).createElement(x.Icon,{icon:"Fade",spin:!0}):null,d("save",o.id))))},show:bn,list:({resource:t,setTag:r})=>{const{records:o,loading:l,direction:a,sortBy:n,page:i,total:c,fetchData:s,perPage:d}=Il(t.id),{selectedRecords:p,handleSelect:m,handleSelectAll:u,setSelectedRecords:h}=function(t){const[r,o]=e.useState([]);return{handleSelect:e=>{const t=r.findIndex((t=>t.id===e.id));if(t<0)o([...r,e]);else{const e=[...r];e.splice(t,1),o(e)}},handleSelectAll:()=>{const e=t.filter((e=>!r.find((t=>t.id===e.id))&&e.bulkActions.length));if(e.length)o([...r,...e]);else{const e=r.filter((e=>!t.find((t=>t.id===e.id))));o(e)}},selectedRecords:r,setSelectedRecords:o}}(o),b=v.useLocation(),f=v.useHistory();e.useEffect((()=>{r&&r(c.toString())}),[c]),e.useEffect((()=>{h([])}),[t.id]),e.useEffect((()=>{new URLSearchParams(b.search).get("refresh")&&h([])}),[b.search]);return _(e).createElement(x.Box,{variant:"white"},_(e).createElement($n,{resource:t,records:o,actionPerformed:()=>s(),onSelect:m,onSelectAll:u,selectedRecords:p,direction:a,sortBy:n,isLoading:l}),_(e).createElement(x.Text,{mt:"xl",textAlign:"center"},_(e).createElement(x.Pagination,{page:i,perPage:d,total:c,onChange:e=>{const t=new URLSearchParams(b.search);t.set("page",e.toString()),f.push({search:t.toString()})}})))},bulkDelete:zn},Pn="https://docs.adminjs.co";"object"==typeof process&&process.env.ADMIN_JS_TMP_DIR;var Dn=t=>{const{resource:r,action:o,record:l,records:a,setTag:n}=t,i=[Pn,"BaseAction.html"].join("/"),{translateMessage:c}=Pl();let s=Bn[o.name];return o.component&&(s=AdminJS.UserComponents[o.component]),s?_(e).createElement(Wl,null,_(e).createElement(s,{action:o,resource:r,record:l,records:a,setTag:n})):s||_(e).createElement(x.MessageBox,{variant:"danger"},c("noActionComponent"),_(e).createElement(y.Trans,{key:"messages.buttons.seeTheDocumentation"},"See:",_(e).createElement(x.Link,{ml:"default",href:i},"the documentation")))};var In=({children:r,width:o})=>{const[l,a]=e.useState(window.document.getElementById("drawerPortal"));if(!l&&window){const r=window.document.createElement("div"),o=_(e).createElement(c.ThemeProvider,{theme:window.THEME},_(e).createElement(x.Drawer,{id:"drawerPortal",className:"hidden"}));window.document.body.appendChild(r),t.render(o,r,(()=>{a(window.document.getElementById("drawerPortal"))}))}return e.useEffect((()=>l?(l.classList.remove("hidden"),o&&(l.style.width=Array.isArray(o)?o[0].toString():o.toString()),()=>{l.style.width=x.DEFAULT_DRAWER_WIDTH,l.classList.add("hidden")}):()=>{}),[l]),l?t.createPortal(r,l):null};var Fn=xn((({resources:t})=>{const r=Bl(t),{translateLabel:o}=Pl();return _(e).createElement(x.Navigation,{label:o("navigation"),elements:r})}),"SidebarResourceSection");window.reactComponents={},window.vueComponents={},window.React=_(e),window.ReactDOM=_(t),window.ReactWrapper=_(P),window._CustomWrapper=Go,reactComponents.ActionButton=Fl,reactComponents.ActionHeader=jl,reactComponents.Badge=se,reactComponents.BaseActionComponent=Dn,reactComponents.BasePropertyComponent=dn,reactComponents.Box=kt,reactComponents.Breadcrumbs=Al,reactComponents.Button=$e,reactComponents.ButtonGroup=t=>{const{buttons:r,size:o,rounded:l}=t;return r&&r.length?_(e).createElement(Fo,t,r.map(((t,r)=>_(e).createElement(Ao,{key:`${t.label||""}-${r}`,size:o,rounded:l,...t,className:Bo})))):null},reactComponents.CheckBox=Fe,reactComponents.CurrencyInput=mr,reactComponents.CurrentUserNav=t=>{const{name:r,title:o,avatarUrl:l,dropActions:a,lineActions:n}=t;return _(e).createElement(Ho,null,n&&n.length&&_(e).createElement(qt,{flex:!0,flexDirection:"row",alignItems:"center"},n.map((t=>_(e).createElement(_e,{size:"icon",variant:"text",title:t.label,key:t.label,href:t.href,as:"a",className:"line-action",onClick:t.onClick},t.icon&&_(e).createElement(Vt,{icon:t.icon}))))),_(e).createElement(Kr,{stick:"right",display:"flex"},_(e).createElement(no,null,_(e).createElement(qt,{flex:!0,flexDirection:"row",px:"xl",alignItems:"center",height:"navbarHeight"},_(e).createElement(qt,null,_(e).createElement(Gt,null,r),o&&_(e).createElement(jt,null,o)),l&&_(e).createElement("img",{src:l,alt:r}),a&&a.length&&_(e).createElement(Vt,{icon:"OverflowMenuVertical",size:16,ml:"md"}))),a&&a.length&&_(e).createElement(Qr,{minWidth:"100%"},a.map((t=>_(e).createElement(oo,{key:t.label,as:"a",onClick:t.onClick,href:t.href},t.icon&&_(e).createElement(Vt,{icon:t.icon}),t.label))))))},reactComponents.DatePicker=wr,reactComponents.Drawer=vo,reactComponents.DrawerContent=yo,reactComponents.DrawerFooter=go,reactComponents.DrawerPortal=In,reactComponents.DropDown=Xr,reactComponents.DropDownItem=lo,reactComponents.DropDownMenu=eo,reactComponents.DropDownTrigger=io,reactComponents.DropZone=Mr,reactComponents.DropZoneItem=Pr,reactComponents.ErrorMessageBox=t=>{const{children:r,title:o,testId:l}=t;return _(e).createElement(x.MessageBox,{"data-testid":l,message:o},_(e).createElement(x.Text,null,r))},reactComponents.FormGroup=gr,reactComponents.FormMessage=qr,reactComponents.Header=Tt,reactComponents.Icon=Zt,reactComponents.Illustration=ft,reactComponents.InfoBox=Ur,reactComponents.Input=Xe,reactComponents.InputGroup=ur,reactComponents.Label=ze,reactComponents.Link=Ve,reactComponents.Loader=Xt,reactComponents.LoggedUser=wo,reactComponents.MessageBox=Sr,reactComponents.Modal=t=>_(e).createElement(uo,t),reactComponents.ModalInline=po,reactComponents.NavGroup=Eo,reactComponents.Navigation=t=>{const{label:r,elements:o}=t;return _(e).createElement(Oo,{px:"xl",py:"lg"},_(e).createElement(Se,{pl:"lg",mb:"md",uppercase:!0},r),_(e).createElement("ul",null,o.map(((t,r)=>_(e).createElement(No,{key:[r,t.href].join("-"),...t})))))},reactComponents.NavigationElement=Zr,reactComponents.Pagination=fo,reactComponents.Placeholder=er,reactComponents.Radio=Oe,reactComponents.RecordsTable=$n,reactComponents.RecordsTableHeader=yn,reactComponents.RichText=jr,reactComponents.Section=Yt,reactComponents.ShowAction=zn,reactComponents.ShowAction=bn,reactComponents.SidebarResourceSection=Fn,reactComponents.Step=Lo,reactComponents.Stepper=zo,reactComponents.Table=wt,reactComponents.TableBody=$t,reactComponents.TableCaption=Dt,reactComponents.TableCell=St,reactComponents.TableHead=Et,reactComponents.TableRow=Bt,reactComponents.Text=je,reactComponents.TextArea=et,reactComponents.Tooltip=t=>{const{direction:r,title:o,children:l,size:a}=t,n=e.useRef(null),[i,c]=e.useState(!1);let s,d;const p=_(e).Children.count(l);1===p?s=l:2===p&&_(e).Children.forEach(l,(e=>{var t;"TooltipContent"===(null===(t=e.type)||void 0===t?void 0:t.displayName)?d=e:s=e}));const m=e.forwardRef(((t,r)=>_(e).cloneElement(s,{...t,displayName:"TooltipTrigger",ref:r})));return _(e).createElement(_(e).Fragment,null,_(e).createElement(m,{ref:n,onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)}}),i&&_(e).createElement(cr,{title:o,childRef:n,size:a,direction:r,ContentElement:d}))},reactComponents.TooltipControl=ir,reactComponents.TooltipContent=dr,reactComponents.ValueGroup=t=>{const{label:r,value:o,children:l}=t;return _(e).createElement(qt,{mb:"xl"},_(e).createElement(Se,{variant:"light"},r),o?_(e).createElement(He,null,o):"",l)},reactComponents.withNotice=Sn;
//# sourceMappingURL=entry.js.map
