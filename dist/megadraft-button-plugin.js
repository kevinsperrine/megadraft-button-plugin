!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("Megadraft")):"function"==typeof define&&define.amd?define(["React","Megadraft"],t):"object"==typeof exports?exports["megadraft-button-plugin"]=t(require("React"),require("Megadraft")):e["megadraft-button-plugin"]=t(e.React,e.Megadraft)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PLUGIN_NAME:"megadraft button plugin",PLUGIN_TYPE:"megadraft-button-plugin"}},function(e,n){e.exports=t},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=o(r),u=n(7),i=o(u),l=n(1),f=o(l);t.default={title:f.default.PLUGIN_NAME,type:f.default.PLUGIN_TYPE,buttonComponent:a.default,blockComponent:i.default,options:{displayOptions:[]}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":i(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":i(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(0),c=o(f),p=n(6),s=o(p),d=n(1),h=o(d),y=n(2),b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=n.onClick.bind(n),n}return u(t,e),l(t,[{key:"onClick",value:function(e){var t={type:h.default.PLUGIN_TYPE,text:"",url:"",target:"webview"};this.props.onChange((0,y.insertDataBlock)(this.props.editorState,t))}},{key:"render",value:function(){return c.default.createElement("button",{className:this.props.className,type:"button",onClick:this.onClick,title:h.default.PLUGIN_NAME},c.default.createElement(s.default,{className:"sidemenu__button__icon"}))}}]),t}(f.Component);t.default=b},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(f),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("svg",i({},this.props,{width:"24",height:"24",viewBox:"0 0 24 24"}),c.default.createElement("g",{fill:"none",fillRule:"evenodd"},c.default.createElement("path",{d:"M0 0h24v24H0z"}),c.default.createElement("path",{d:"M19.095 11.619h-1.143V8.571c0-.838-.685-1.523-1.523-1.523H13.38V5.905a1.905 1.905 0 0 0-3.81 0v1.143H6.524c-.838 0-1.516.685-1.516 1.523v2.896h1.135a2.058 2.058 0 0 1 0 4.114H5v2.895C5 19.314 5.686 20 6.524 20h2.895v-1.143a2.058 2.058 0 0 1 4.114 0V20h2.896c.838 0 1.523-.686 1.523-1.524V15.43h1.143a1.905 1.905 0 0 0 0-3.81z",fill:"currentColor"})))}}]),t}(c.default.Component);t.default=p},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(f),p=n(2),s=p.MegadraftPlugin.BlockContent,d=p.MegadraftPlugin.BlockData,h=p.MegadraftPlugin.BlockInput,y=p.MegadraftPlugin.CommonBlock,b=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleUrlChange=n._handleUrlChange.bind(n),n._handleTextChange=n._handleTextChange.bind(n),n._handleTargetChange=n._handleTargetChange.bind(n),n.actions=[{key:"delete",icon:p.MegadraftIcons.DeleteIcon,action:n.props.container.remove}],n}return a(t,e),l(t,[{key:"_handleEdit",value:function(){alert(JSON.stringify(this.props.data,null,4))}},{key:"_handleUrlChange",value:function(e){this.props.container.updateData({url:e.target.value})}},{key:"_handleTextChange",value:function(e){this.props.container.updateData({text:e.target.value})}},{key:"_handleTargetChange",value:function(e){this.props.container.updateData({target:e.target.value})}},{key:"render",value:function(){return c.default.createElement(y,i({},this.props,{actions:this.actions}),c.default.createElement(s,null,this.props.data.text?c.default.createElement("a",{className:"mbpButton",href:this.props.data.url},this.props.data.text):null),c.default.createElement(d,null,c.default.createElement(h,{placeholder:"Text",value:this.props.data.text,onChange:this._handleTextChange}),c.default.createElement(h,{placeholder:"Url",value:this.props.data.url,onChange:this._handleUrlChange}),c.default.createElement("input",{name:"target",type:"radio",value:"webview",checked:"webview"===this.props.data.target,onChange:this._handleTargetChange})," ","WebView",c.default.createElement("input",{name:"target",type:"radio",value:"browser",checked:"browser"===this.props.data.target,onChange:this._handleTargetChange})," ","Browser"))}}]),t}(f.Component);t.default=b}])});
//# sourceMappingURL=megadraft-button-plugin.js.map