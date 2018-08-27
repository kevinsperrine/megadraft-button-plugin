!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("Megadraft")):"function"==typeof define&&define.amd?define(["React","Megadraft"],t):"object"==typeof exports?exports["megadraft-button-plugin"]=t(require("React"),require("Megadraft")):e["megadraft-button-plugin"]=t(e.React,e.Megadraft)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PLUGIN_NAME:"megadraft button plugin",PLUGIN_TYPE:"button"}},function(e,n){e.exports=t},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),a=o(r),u=n(7),l=o(u),i=n(1),c=o(i);t.default={title:c.default.PLUGIN_NAME,type:c.default.PLUGIN_TYPE,buttonComponent:a.default,blockComponent:l.default,options:{displayOptions:[]}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":l(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),f=o(c),p=n(6),s=o(p),d=n(1),h=o(d),b=n(2),y=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=n.onClick.bind(n),n}return u(t,e),i(t,[{key:"onClick",value:function(e){var t={type:h.default.PLUGIN_TYPE,text:"",url:"",target:"webview"};this.props.onChange((0,b.insertDataBlock)(this.props.editorState,t))}},{key:"render",value:function(){return f.default.createElement("button",{className:this.props.className,type:"button",onClick:this.onClick,title:h.default.PLUGIN_NAME},f.default.createElement(s.default,{className:"sidemenu__button__icon"}))}}]),t}(c.Component);t.default=y},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),f=function(e){return e&&e.__esModule?e:{default:e}}(c),p=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return f.default.createElement("svg",l({},this.props,{viewBox:"0 0 448 512",height:"22",width:"22",fill:"#ffffff"}),f.default.createElement("path",{d:"M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"}))}}]),t}(f.default.Component);t.default=p},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":u(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),f=function(e){return e&&e.__esModule?e:{default:e}}(c),p=n(2),s=p.MegadraftPlugin.BlockContent,d=p.MegadraftPlugin.BlockData,h=p.MegadraftPlugin.BlockInput,b=p.MegadraftPlugin.CommonBlock,y=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleUrlChange=n._handleUrlChange.bind(n),n._handleTextChange=n._handleTextChange.bind(n),n._handleTargetChange=n._handleTargetChange.bind(n),n.actions=[{key:"delete",icon:p.MegadraftIcons.DeleteIcon,action:n.props.container.remove}],n}return a(t,e),i(t,[{key:"_handleEdit",value:function(){alert(JSON.stringify(this.props.data,null,4))}},{key:"_handleUrlChange",value:function(e){this.props.container.updateData({url:e.target.value})}},{key:"_handleTextChange",value:function(e){this.props.container.updateData({text:e.target.value})}},{key:"_handleTargetChange",value:function(e){this.props.container.updateData({target:e.target.value})}},{key:"render",value:function(){return f.default.createElement(b,l({},this.props,{actions:this.actions}),f.default.createElement(s,null,this.props.data.text?f.default.createElement("a",{className:"mbpButton",href:this.props.data.url},this.props.data.text):null),f.default.createElement(d,null,f.default.createElement(h,{placeholder:"Button Text",value:this.props.data.text,onChange:this._handleTextChange}),f.default.createElement(h,{placeholder:"Button Url",value:this.props.data.url,onChange:this._handleUrlChange}),f.default.createElement("div",{className:"block__input__row"},f.default.createElement("div",{className:"block__input__wrapper"},f.default.createElement("span",{className:"block__input mbpRadioInput"},f.default.createElement("span",{style:{marginRight:"12px"}},"Open Link:"),f.default.createElement("input",{name:"target",type:"radio",value:"_self",checked:"_self"===this.props.data.target,onChange:this._handleTargetChange})," ","In-App"),f.default.createElement("span",{className:"block__input mbpRadioInput"},f.default.createElement("input",{name:"target",type:"radio",value:"_blank",checked:"_blank"===this.props.data.target,onChange:this._handleTargetChange})," ","External"),f.default.createElement("span",{className:"mbpHelperText"},"If being used on a webpage, 'In-App' will open the link in the same tab and 'External' will open a new tab.")))))}}]),t}(c.Component);t.default=y}])});
//# sourceMappingURL=megadraft-button-plugin.js.map