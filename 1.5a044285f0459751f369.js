(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{24:function(t,n,e){"use strict";e.d(n,"g",function(){return r}),e.d(n,"j",function(){return i}),e.d(n,"f",function(){return a}),e.d(n,"d",function(){return s}),e.d(n,"i",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return p}),e.d(n,"e",function(){return f}),e.d(n,"b",function(){return l}),e.d(n,"k",function(){return h}),e.d(n,"h",function(){return d});var o=e(1);function r(t){return{type:o.h,payload:t}}function i(t){return{type:o.k,payload:t}}function a(t){return{type:o.g,payload:t}}function s(t){return{type:o.e,payload:t}}function u(t){return{type:o.j,payload:t}}function c(t){return{type:o.d,payload:t}}function p(t){return{type:o.a,payload:t}}function f(t){return{type:o.f,payload:t}}function l(t){return{type:o.c,payload:t}}function h(t){return{type:o.l,payload:t}}function d(t){return{type:o.i,payload:t}}},25:function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[e].concat(i).concat([r]).join("\n")}var a,s,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),n.push(s))}},n}},26:function(t,n,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),u=null,c=0,p=[],f=e(27);function l(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:s}}}}function h(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function d(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),p.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertAt.before,e);e.insertBefore(n,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=p.indexOf(t);n>=0&&p.splice(n,1)}function m(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return e.nc}();o&&(t.attrs.nonce=o)}return y(n,t.attrs),d(t,n),n}function y(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function v(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=c++;e=u||(u=m(n)),o=j.bind(null,e,a,!1),r=j.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(n,t.attrs),d(t,n),n}(n),o=function(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),r=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){b(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=h(t,n);return l(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var a=e[r];(s=i[a.id]).refs--,o.push(s)}t&&l(h(t,n),n);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var g,w=(g=[],function(t,n){return g[t]=n,g.filter(Boolean).join("\n")});function j(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},27:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},32:function(t,n,e){t.exports=e.p+"3edd90bc13fe1122e324d568a6ddd046.png"},33:function(t,n,e){t.exports=e.p+"3366955664413fec07a1ce152d9fcaa8.png"},34:function(t,n,e){t.exports=e.p+"44b4afa4da5bdb707929651aaff4baf6.png"},35:function(t,n,e){t.exports=e.p+"a48d321d470b03b90a2fed9fce89e7a7.png"},36:function(t,n,e){t.exports=e.p+"57e98bed0f7ecff91023997b62271486.png"},37:function(t,n,e){t.exports=e.p+"9794209393f0f6d5aec1806d1aa2c375.png"},38:function(t,n,e){t.exports=e.p+"ea8cfbf02fb75ef62625bd466a9fbb6d.png"},39:function(t,n,e){var o=e(40);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(26)(o,r);o.locals&&(t.exports=o.locals)},40:function(t,n,e){(t.exports=e(25)(!1)).push([t.i,".grid{\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    /* background: darkblue; */\n    justify-content: center;\n}\n.grid-row{\n\tdisplay: flex;\n    flex-flow: row;\n    flex-wrap: wrap;\n    background: darkblue\n}\n.tile{\n\tborder: 1px solid black;\n    width: 80px;\n    height: 80px;\n    background: white;\n    margin: 5px;\n    border-radius: 10%;\n    display: flex;\n    align-items: center;\n}\n\n.tile-image{\n\twidth: 100%;\n\theight: auto;\n}\n\n.flip{\n\ttransform: scaleX(-1);\n}\n.game-header{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    padding: 10px;\n    font-size: 1.5em;\n}\n\n.score-header,.Score-Number{\n\tpadding:10px;\n}\n.player-container{\n\tdisplay: inline-block;\n\twidth: 50vw;\n}\n.backdrop{ \n\tposition: absolute;\n    width: 100%;\n    height: 100%;\n    background: #564c4c4d;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.modal-container{\n\tbackground: white;\n    width: 60vw;\n    height: 50vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    animation-name: pulse;\n    animation-duration: 1s;\n    animation-fill-mode: both;\n}\n.modal{\n\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n.modal-header,.modal-body,.modal-footer{\n\tpadding: 10px\n}\n.modal-header{\n    font-size: 1.5em;\n    font-weight: bold;\n    text-transform: uppercase;\n}\n.restart-button{\n\t-webkit-appearance: none;\n    border: 1px solid black;\n    padding: 10px;\n    background: darkblue;\n    color: white;\n    font-weight: 700;\n    font-size: 1.1em;\n    cursor: pointer;\n}\n.container{\n\tmin-height: 100vh;\n    max-height: 100%;\n}\n.Score,.timer{\n\tbackground: darkblue;\n    color: white;\n    padding: 10px;\n}\n\n@keyframes pulse {\n  0% {transform: scale(1);}\n  50% {transform: scale(1.1);}\n  100% {transform: scale(1);}\n}\n\n.instruction-container{\n\twidth: 46vw;\n    display: inline-block;\n    margin: 0 auto;\n    margin-left: 10px;\n}\n.pointstable-image{\n    width: 46px;\n    height: 46px;\n}\n.instruction-container table{\n\twidth: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n\t.player-container{\n\t\twidth: 100vw;\n\t}\n\t.instruction-container{\n\t\twidth: 100vw;\n\t}\n}\n\n@media only screen and (max-width: 400px) {\n\t.tile{\n\t\twidth: 60px;\n    \theight: 60px;\n    }\n}",""])},48:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),i=e(32),a=e.n(i),s=e(33),u=e.n(s),c=e(34),p=e.n(c),f=e(35),l=e.n(f),h=e(36),d=e.n(h),b=e(37),m=e.n(b),y=e(38),v=e.n(y),g=e(9),w=e(24);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,n){return!n||"object"!==j(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,n){return(C=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var S=function(t){function n(t){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),x(this,k(n).call(this,t))}var e,o,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&C(t,n)}(n,r.a.Component),e=n,(o=[{key:"componentDidMount",value:function(){var t=[{url:a.a,points:1},{url:u.a,points:1},{url:p.a,points:2},{url:l.a,points:2},{url:d.a,points:3},{url:v.a,points:5}];this.props.dispatch(Object(w.c)(t))}},{key:"componentDidUpdate",value:function(){this.updateFruit()}},{key:"getImage",value:function(){return this.props.isHuman?r.a.createElement("img",{src:m.a,className:"tile-image"}):this.props.fruit&&this.props.fruit.selectedFruit?r.a.createElement("img",{src:this.props.fruit.selectedFruit.url,className:"tile-image"}):null}},{key:"updateFruit",value:function(t){if(this.props.fruit&&!this.props.fruit.selectedFruit){var n=this.props.fruitsCollection[Math.floor(Math.random()*this.props.fruitsCollection.length)];this.props.dispatch(Object(w.i)(n))}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.getImage())}}])&&O(e.prototype,o),i&&O(e,i),n}();var E=Object(g.b)(function(t){return{human:t.human,fruit:t.fruit,fruitsCollection:t.fruitsCollection}})(S);function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function A(t,n){return!n||"object"!==U(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,n){return(T=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var R=function(t){function n(t){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),A(this,P(n).call(this,t))}var e,o,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&T(t,n)}(n,r.a.Component),e=n,(o=[{key:"showHumanImage",value:function(){return this.props.tilePosition.row==this.props.human.position.row&&this.props.tilePosition.col==this.props.human.position.col?r.a.createElement(E,{isHuman:!0}):this.props.tilePosition.row==this.props.fruit.position.row&&this.props.tilePosition.col==this.props.fruit.position.col?r.a.createElement(E,null):null}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"tile",onClick:function(){t.handleClick()}},this.showHumanImage())}}])&&_(e.prototype,o),i&&_(e,i),n}();var I=Object(g.b)(function(t){return{human:t.human,fruit:t.fruit}})(R);e(39);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,n){return!n||"object"!==B(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function N(t,n){return(N=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var D=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=L(this,M(n).call(this,t))).fruit_timer=0,e.CreateInitialTiles(),e}var e,o,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&N(t,n)}(n,r.a.Component),e=n,(o=[{key:"componentDidMount",value:function(){this.startFruitTimertoUpdateFruit()}},{key:"getSnapshotBeforeUpdate",value:function(t,n){this.props.rowCount==t.rowCount&&this.props.colCount==t.colCount||(this.props.dispatch(Object(w.b)()),this.CreateInitialTiles())}},{key:"handleKeyBoardAction",value:function(){if(""==this.props.gameStatus&&this.props.human&&this.props.human.position&&this.props.fruit&&this.props.fruit.position)if(this.props.total&&this.props.total>=100&&this.props.dispatch(Object(w.e)("win")),this.props.human.position.row==this.props.fruit.position.row&&this.props.human.position.col==this.props.fruit.position.col&&(this.props.dispatch(Object(w.a)(this.props.fruit.selectedFruit.points)),this.findAndUpdateFruitPosition()),"left"==this.props.keyBoardAction&&this.props.human.position.col>0){var t=Object.assign({},this.props.human.position);t.col=t.col-1,this.props.dispatch(Object(w.g)("")),this.props.dispatch(Object(w.f)(t))}else if("right"==this.props.keyBoardAction&&this.props.human.position.col<this.props.colCount-1){var n=Object.assign({},this.props.human.position);n.col=n.col+1,this.props.dispatch(Object(w.g)("")),this.props.dispatch(Object(w.f)(n))}else if("up"==this.props.keyBoardAction&&this.props.human.position.row>0){var e=Object.assign({},this.props.human.position);e.row=e.row-1,this.props.dispatch(Object(w.g)("")),this.props.dispatch(Object(w.f)(e))}else if("down"==this.props.keyBoardAction&&this.props.human.position.row<this.props.rowCount-1){var o=Object.assign({},this.props.human.position);o.row=o.row+1,this.props.dispatch(Object(w.g)("")),this.props.dispatch(Object(w.f)(o))}}},{key:"findAndUpdateFruitPosition",value:function(){if(""==this.props.gameStatus){var t=[];if(this.props.human&&this.props.human.position)for(var n=0;n<this.props.rowCount;n++)for(var e=0;e<this.props.colCount;e++)this.props.human.position.row!=n&&this.props.human.position.col!=e&&t.push({row:n,col:e});this.props.dispatch(Object(w.d)(t[Math.floor(Math.random()*t.length)])),this.startFruitTimertoUpdateFruit()}}},{key:"startFruitTimertoUpdateFruit",value:function(){clearInterval(this.fruit_timer),this.fruit_timer=setInterval(this.findAndUpdateFruitPosition.bind(this),3e3)}},{key:"CreateInitialTiles",value:function(){for(var t=[],n=0;n<this.props.rowCount;n++){for(var e=[],o=0;o<this.props.colCount;o++){var i={row:n,col:o};e.push(r.a.createElement(I,{tilePosition:i}))}t.push(r.a.createElement("div",{className:"grid-row"},e))}this.props.dispatch(Object(w.j)(t))}},{key:"render",value:function(){return this.handleKeyBoardAction(),r.a.createElement("div",{className:"grid"},this.props.tiles)}}])&&F(e.prototype,o),i&&F(e,i),n}();n.default=Object(g.b)(function(t){return{tiles:t.tiles,keyBoardAction:t.keyBoardAction,human:t.human,fruit:t.fruit,total:t.total,gameStatus:t.status,rowCount:t.rowCount,colCount:t.colCount}})(D)}}]);