(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{457:function(n,e,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function c(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],a=0;a<n.length;a++){var i=n[a],l=e.base?i[0]+e.base:i[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function h(n,e,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,m=0;function v(n,e){var t,r,a;if(e.singleton){var i=m++;t=p||(p=s(e)),r=f.bind(null,t,i,!1),a=f.bind(null,t,i,!0)}else t=s(e),r=h.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var a=c(t[r]);o[a].references--}for(var i=l(n,e),s=0;s<t.length;s++){var u=c(t[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=i}}}},458:function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},530:function(n,e,t){n.exports=t.p+"69392b7b786e1cc2f4db80622f63076d.png"},718:function(n,e,t){"use strict";var r=t(458),a=t.n(r)()((function(n){return n[1]}));a.push([n.i,"/* Extra small devices (phones, 600px and down) */\n\n.background {\n    background-color: #3998ac;\n    display: grid;\n    height: 100vh;\n}\n\n.topband {\n    background-color: #00243a;\n    border-style: solid;\n    border-color: #ff9400;\n    border-top-width: 6px;\n    border-bottom-width: 6px;\n    width: 100vw;\n    height: 37vh;\n    margin-top: 21%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.bottomband {\n    background-color: #FFFFFF;\n    width: 80vw;\n    height: 49vh;\n    align-self: end;\n    justify-self: center;\n    justify-items: center;\n    display: grid;\n}\n\n.videoplayer {\n    height: inherit;\n    width: inherit;\n}\n\n.start_scannerpopup_main {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 50%;\n}\n\n.start_scannerpopup {\n    position: absolute;\n    bottom: 10%;\n    height: 70%;\n    width: 88%;\n    margin-top: -12%;\n    text-align: center;\n    z-index: 140;\n    background-color: aliceblue;\n    margin: 20px;\n    opacity: 200% !important;\n}\n\n.start_scannercamera {\n    object-fit: contain;\n    position: absolute;\n    left: 15%;\n    top: 12%;\n    display: block;\n}\n\n.start_scannertext {\n    font-size: 5.2vw;\n    font-weight: bold;\n    margin-top: 70%;\n    display: block;\n}\n\n.start_closemain {\n    z-index: 200;\n    position: absolute;\n    top: 12%;\n    right: 4%;\n    background-color: white;\n    border-radius: 30px;\n}\n\n.start_close {\n    z-index: 200;\n    width: 4vw;\n    height: 4vw;\n    object-fit: fill;\n    margin: 5px;\n    vertical-align: text-top;\n}\n\n.startbackimg {\n    position: absolute;\n    top: 0;\n    z-index: -50;\n    height: 100%;\n    width: 100%;\n}\n\n.startvideoplayer {\n    position: absolute;\n    top: 15%;\n    object-fit: fill;\n    left: 24%;\n}\n\n.startscanner {\n    display: flex;\n}\n\n.startscannertext {\n    font-size: 5.2vw;\n    position: absolute;\n    left: 15%;\n    bottom: 8%;\n    font-weight: bold;\n    width: 70%;\n    text-align: center;\n    max-height: 30%;\n}\n\n.starttext {\n    margin: 2%;\n}\n\n.startscanneriocn {\n    width: 20vw;\n    height: 20vw;\n    margin-top: 6%;\n    align-self: center;\n}\n\n.starttextcontainer {\n    font-size: 2.9vh;\n    font-weight: 700;\n    width: 100%;\n    text-align: center;\n}",""]),e.a=a},826:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(457),o=t.n(i),c=t(718),l={insert:"head",singleton:!1},s=(o()(c.a,l),c.a.locals,t(530)),u=t(14),d=t(465),f=t(463);function h(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return p(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}e.default=function(){var n=h(Object(r.useState)(!0),2),e=n[0],t=n[1],i=Object(u.g)();Object(r.useEffect)((function(){null===localStorage.getItem("isFirsttime")&&Object(f.a)(),setTimeout((function(){null===localStorage.getItem("ShownIntroscreen")?(localStorage.setItem("ShownIntroscreen","true"),t(!1)):i.replace("/TaskListScreen")}),1e3)}),[]);window.innerHeight;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("div",{className:"background"},a.a.createElement("div",{className:"topband"},a.a.createElement("div",{className:"videoplayer"},a.a.createElement("iframe",{src:"https://player.vimeo.com/video/506001369?byline=false&playsinline=false&title=false",width:"100%",height:"100%",frameBorder:"0"}))),a.a.createElement("div",{className:"bottomband"},a.a.createElement("img",{onClick:function(){i.replace("/ClueListScreen")},className:"startscanneriocn",src:s}),a.a.createElement("div",{className:"starttextcontainer"},a.a.createElement("div",{className:"starttext"},"- Scan the QR code"),a.a.createElement("div",{className:"starttext"},"- Watch the 2 min Video"),a.a.createElement("div",{className:"starttext"},"- Have fun with the quiz"),a.a.createElement("div",{className:"starttext"},"- Excel at the activity")))),e?a.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:10,backgroundColor:"#00243a"}},a.a.createElement(d.a,null)):null))}}}]);