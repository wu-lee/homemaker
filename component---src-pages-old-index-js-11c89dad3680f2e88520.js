(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},C8c2:function(e,t,r){"use strict";var n=r("lSNA"),o=r("lwsE"),a=r("W8MJ"),i=r("PJYZ"),u=r("7W2i"),c=r("a1gu"),l=r("Nsbk");function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI"));function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){u(r,e);var t=f(r);function r(){var e;return o(this,r),e=t.apply(this,arguments),y(i(e),"node",null),y(i(e),"setNode",(function(t){e.node=t})),e}return a(r,[{key:"componentDidUpdate",value:function(){if(this.node){var e=this.node;e.style.getPropertyValue("--aspect-ratio")||e.style.setProperty("--aspect-ratio","("+this.props.ratio+")")}}},{key:"render",value:function(){var e=this.props,t=e.ratio,r=e.style,o=e.children,a=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["ratio","style","children"]),i=d({},r,n({},"--aspect-ratio","("+t+")"));return s.default.createElement("div",d({ref:this.setNode,style:i},a),o)}}]),r}(s.Component);y(v,"defaultProps",{className:"react-aspect-ratio-placeholder",ratio:1});var h=v;t.default=h},CZve:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=(r("Wbzz"),r("7oih")),i=r("ReWx"),u=r.n(i),c=r("SVAT"),l=r("YgSM"),f=r("k0TJ"),s=r("UDOl"),p={center:[51.7522,-1.256],zoom:12};t.default=function(){var e=o.a.useState(null),t=e[0],r=e[1];return o.a.createElement(a.a,null,o.a.createElement("h1",null,"Homemaker Oxford demo"),o.a.createElement("p",null,"This is just a fairly trivial proof-of-concept of a map with some pins on it. A descriptions could go here. There could be links, and more pages."),o.a.createElement(u.a,{ratio:"560/315",style:{width:"100%"}},o.a.createElement(c.a,{settings:p},s.features.map((function(e){return o.a.createElement(l.a,{key:e.properties.PARK_ID,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],onClick:function(){r(e)}})})),t&&o.a.createElement(f.a,{position:[t.geometry.coordinates[0]+.005,t.geometry.coordinates[1]],onClose:function(){r(null)}},o.a.createElement("div",null,o.a.createElement("h2",null,t.properties.NAME),o.a.createElement("p",null,t.properties.DESCRIPTION))))))}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},ReWx:function(e,t,r){"use strict";t.__esModule=!0,t.AspectRatio=t.default=void 0;var n=a(r("C8c2")),o=a(r("gK8L"));function a(e){return e&&e.__esModule?e:{default:e}}var i=n.default;t.default=i;var u=o.default;t.AspectRatio=u},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},gK8L:function(e,t,r){"use strict";var n=r("lSNA");t.__esModule=!0,t.default=void 0;var o,a=(o=r("q1tI"))&&o.__esModule?o:{default:o};function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=function(e){var t=e.ratio,r=e.style,o=e.children,u=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["ratio","style","children"]),c=i({},r,n({},"--aspect-ratio","("+t+")"));return a.default.createElement("div",i({style:c},u),o)};u.defaultProps={className:"react-aspect-ratio-placeholder",ratio:1};var c=u;t.default=c},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=component---src-pages-old-index-js-11c89dad3680f2e88520.js.map