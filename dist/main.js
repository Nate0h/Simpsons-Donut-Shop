(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(81),r=t.n(o),i=t(645),c=t.n(i),a=t(667),l=t.n(a),p=new URL(t(132),t.b),d=new URL(t(962),t.b),s=new URL(t(218),t.b),u=c()(r()),x=l()(p),m=l()(d),g=l()(s);u.push([e.id,`*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n}\n:root{\n    background-color: yellow;\n}\n\n@font-face {\n    font-family: simpson;\n    src: url(${x});\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    background-color: pink;\n    min-height: 100vh;\n}\n\n.title{\n    font-size: 56px;\n    color: yellow;\n    -webkit-text-stroke: 2px red;\n    font-weight: bold;\n    text-align: center;\n    border-bottom: 3px solid red;\n    padding: 5px;\n    margin: 1rem;\n    font-family: simpson, Georgia, serif ;\n}\n.nav{\n    display: flex;\n    padding: 5px;\n    justify-content: space-evenly;\n    background-image: url(${m});\n    background-repeat: circle;\n   \n    border: 3px solid red;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n.donut{\n    font-family: simpson;\n    width: 150px;\n    background-color: rgb(241, 216, 171);\n    border: 2px solid black;\n    border-radius: 13px;\n    box-shadow: red 0px 2px 4px 0px inset;\n    color: lightblue;\n    margin-bottom: 10px;\n    -webkit-text-stroke: 2px black;\n    font-size: 34px;\n    padding: 4px;\n    text-align: center;\n}\n.donut-img{\n    width: 135px;\n    height: 135px;\n}\n\n.homeContainer{\n    display: flex;\n    justify-content: space-between;\n    flex: 1;\n    border: 2px solid red;\n   min-height: 75vh;\n}\n\n.leftHome{\n    background-image: url(${g});\n    background-size: cover;\n    border-right-color: black;\n    width: 55vw;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n\n}\n\n.about, .hours{\n    font-size: 34px;\n    font-family: simpson, Georgia;\n    color: yellow;\n    -webkit-text-stroke: 2px red;\n    margin-right: 5px;\n\n}\n\n.aboutText{\n    width: 41vw;\n    margin-top: 10px;\n    font-size: 24px;\n    color: yellow;\n    -webkit-text-stroke: .2px black;\n    line-height: 1.5em;\n}\n\n.orderButton{\n    justify-self: center;\n    font-family: simpson;\n    width: 300px;\n    margin: 20px;\n    margin-left: 100px;\n    background-color: rgb(241, 216, 171);\n    border: 2px solid black;\n    border-radius: 13px;\n    box-shadow: red 0px 2px 4px 0px inset;\n    color: lightblue;\n    margin-bottom: 10px;\n    -webkit-text-stroke: 2px black;\n    font-size: 34px;\n    padding: 4px;\n    text-align: center;\n    \n}\n\n.schedule{\n    font-size: 24px;\n    margin-top: 10px;\n    color: yellow;\n    -webkit-text-stroke: .2px black;\n    list-style: none;\n}\n\n.footer{\n    font-family: simpson;\n    height: 55px;\n    padding: 5px;\n    color: yellow;\n    -webkit-text-stroke: .2px black;\n    background-color: lightblue;\n    border: 1px solid black;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n\n\n\n\n#grid-container{\n    display: grid;\n    grid-template-columns: repeat(2, .3fr);\n    margin-top: 15px;\n    margin-bottom: 15px;\n    /*grid-template-rows: repeat(4, 1);*/\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 10px;\n\n}\n\n.grid-cell{\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: lightblue;\n    border: 2px solid red;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n    border-radius: 17%;\n    font-family: simpson;\n    color: yellow;\n    font-size: 20px;\n    padding-top: 15px;\n    -webkit-text-stroke: 1px red;\n\n  \n\n}\n\n.grid-cell img{\n    height: 150px;\n    width: 150px;\n    \n}\n\n#cell-8 img{\n    height: 200px;\n    width: 250px;\n    \n}\n\n`,""]);const f=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);o&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var l=e[a],p=o.base?l[0]+o.base:l[0],d=i[p]||0,s="".concat(p," ").concat(d);i[p]=d+1;var u=t(s),x={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(x);else{var m=r(x,o);o.byIndex=a,n.splice(a,0,{identifier:s,updater:m,references:1})}c.push(s)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var l=o(e,r),p=0;p<i.length;p++){var d=t(i[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},132:(e,n,t)=>{e.exports=t.p+"f186689dc82e32fb3352.otf"},218:(e,n,t)=>{e.exports=t.p+"71b20e98cf0dfb45deb2.jpeg"},962:(e,n,t)=>{e.exports=t.p+"d8814c048c5a6f02eeca.gif"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),c=t.n(i),a=t(565),l=t.n(a),p=t(216),d=t.n(p),s=t(589),u=t.n(s),x=t(28),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(x.Z,m),x.Z&&x.Z.locals&&x.Z.locals;const g=document.getElementById("content");!function(){const e=document.createElement("div");e.textContent="The Simpsons Mmm...Donut Shop",e.classList.add("title"),g.appendChild(e),function(e){const n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),r=new Image;r.classList.add("donut-img"),r.src="./pinkdonut.png";const i=new Image;i.classList.add("donut-img"),i.src="./pinkdonut.png";const c=new Image;c.classList.add("donut-img"),c.src="./pinkdonut.png";const a=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div");a.classList.add("donut"),l.classList.add("donut"),p.classList.add("donut"),a.textContent="Home",l.textContent="Menu",p.textContent="Contact",n.appendChild(r),n.appendChild(a),t.appendChild(i),t.appendChild(l),o.appendChild(c),o.appendChild(p),e.appendChild(n),e.appendChild(t),e.appendChild(o),e.classList.add("nav"),g.appendChild(e)}(document.createElement("div")),function(e){const n=document.createElement("div");n.setAttribute("id","grid-container");for(let e=1;e<=8;e++){const t=document.createElement("div");t.setAttribute("id",`cell-${e}`),t.classList.add("grid-cell");const o=document.createElement("p");t.appendChild(o);const r=document.createElement("img");t.appendChild(r),n.appendChild(t)}const t=n.querySelector("#cell-1"),o=t.querySelector("p");t.querySelector("img").src="./donuts/glazed.png",o.textContent="1. Glazed Donut";const r=n.querySelector("#cell-2"),i=r.querySelector("p");r.querySelector("img").src="./donuts/chocolate.png",i.textContent="2. Chocolate Donut";const c=n.querySelector("#cell-3"),a=c.querySelector("p");c.querySelector("img").src="./donuts/pinkdip.png",a.textContent="3. Homer Special";const l=n.querySelector("#cell-4"),p=l.querySelector("p");l.querySelector("img").src="./donuts/jelly.png",p.textContent="4. Jelly Donut";const d=n.querySelector("#cell-5"),s=d.querySelector("p");d.querySelector("img").src="./donuts/boston.png",s.textContent="5. Boston Cream";const u=n.querySelector("#cell-6"),x=u.querySelector("p");u.querySelector("img").src="./donuts/sugar.png",x.textContent="6. Sugar Donut";const m=n.querySelector("#cell-7"),f=m.querySelector("p");m.querySelector("img").src="./donuts/vanilla.png",f.textContent="7. Vanilla Donut";const h=n.querySelector("#cell-8"),b=h.querySelector("p");h.querySelector("img").src="./donuts/cronut.png",b.textContent="8. Cronut",e.appendChild(n),g.appendChild(e)}(document.createElement("div")),function(e){e.classList.add("footer");const n=document.createElement("div");n.textContent="Created By NateO";const t=new Image;e.appendChild(n),e.appendChild(t),g.appendChild(e)}(document.createElement("div"))}()})()})();