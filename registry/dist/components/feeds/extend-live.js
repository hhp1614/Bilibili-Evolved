!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/extend-live"]=t():e["feeds/extend-live"]=t()}(self,(function(){return function(){var e,t,n={387:function(e,t,n){var i=n(355)((function(e){return e[1]}));i.push([e.id,".live-up-list {\n  max-height: calc(100vh - 315px);\n}\nbody.enable-feeds-filter .live-up-list {\n  max-height: calc(100vh - 370px);\n}\nbody.feeds-filter-side-block-profile .live-up-list {\n  max-height: calc(100vh - 180px);\n}\n\n.bili-dyn-live-users {\n  display: flex !important;\n  flex-direction: column !important;\n}\n\n.bili-dyn-live-users__body {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  margin: 0px -16px -16px -16px;\n  padding: 0px 16px 4px 16px;\n  max-height: calc(100vh - 318px);\n}\n.bili-dyn-live-users__body::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\nbody.enable-feeds-filter .bili-dyn-live-users__body {\n  max-height: calc(100vh - 374px);\n}\nbody.feeds-filter-side-block-profile .bili-dyn-live-users__body {\n  max-height: calc(100vh - 178px);\n}\n\n.live-up-list {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.live-up-list::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.live-up-list .live-detail[data-live-title] {\n  color: black;\n}\nbody.dark .live-up-list .live-detail[data-live-title] {\n  color: #eee;\n}\n.live-up-list .live-detail[data-live-title] .up-name {\n  font-size: 13px !important;\n  opacity: 0.6;\n}\n.live-up-list .live-detail[data-live-title]::before {\n  content: attr(data-live-title);\n  color: black;\n  line-height: 1.5;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nbody.dark .live-up-list .live-detail[data-live-title]::before {\n  color: #eee;\n}",""]),e.exports=i},355:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var l=this[r][0];null!=l&&(o[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);i&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},361:function(e,t,n){var i=n(387);i&&i.__esModule&&(i=i.default),e.exports="string"==typeof i?i:i.toString()},375:function(e){"use strict";e.exports=coreApis.ajax},567:function(e){"use strict";e.exports=coreApis.componentApis.feeds.disableProfilePopup},200:function(e){"use strict";e.exports=coreApis.spinQuery}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,exports:{}};return n[e](r,r.exports,o),r.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){l[e]=function(){return n[e]}}));return l.default=function(){return n},o.d(r,l),r},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return e}});const e={name:"extendFeedsLive",displayName:"直播信息扩充",description:{"zh-CN":"在动态的`正在直播`中, 为每一个直播间加上标题, 并且能够显示超过10个的直播间."},entry:(0,coreApis.componentApis.styledComponent.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,361,23))),(async()=>{const{select:e}=await Promise.resolve().then(o.t.bind(o,200,23)),t=await e(".live-up-list, .bili-dyn-live-users__body");if(null===t)return;const{getPages:n,getJsonWithCredentials:i}=await Promise.resolve().then(o.t.bind(o,375,23)),r=await n({api:e=>i(`https://api.live.bilibili.com/relation/v1/feed/feed_list?page=${e}&pagesize=24`),getList:e=>lodash.get(e,"data.list",[]),getTotal:e=>lodash.get(e,"data.results",0)}),l=".up-name, .bili-dyn-live-users__item__uname",a=dqa(t,l).map((e=>e.innerText.trim())),s=r.filter((e=>a.includes(e.uname))),c=r.filter((e=>!a.includes(e.uname))),d=t.children[0];c.forEach((e=>{if(dqa(t,l).some((t=>t.innerText.trim()===e.uname)))return;const n=(()=>{const t=d.cloneNode(!0),n=`https://live.bilibili.com/${e.roomid}`;dqa(t,"a[href]").forEach((e=>e.setAttribute("href",n))),t.matches(".bili-dyn-live-users__item")&&t.addEventListener("click",(()=>{window.open(n,"_blank")}));dq(t,".live-up-img, .bili-dyn-live-users__item__face .bili-awesome-img").style.backgroundImage=`url(${e.face})`;const i=dq(t,".live-name, .bili-dyn-live-users__item__title");i.innerHTML=e.title,i.title=e.title;const o=dq(t,l);return o.innerHTML=e.uname,o.title=e.uname,t})();t.insertAdjacentElement("beforeend",n)}));const{disableProfilePopup:u}=await Promise.resolve().then(o.t.bind(o,567,23));u(),console.log(s,c)})),tags:[componentsTags.feeds,componentsTags.live],urlInclude:[/^https:\/\/t\.bilibili\.com\/$/],commitHash:"3c2cce86de3bf922598070b2086f5b04f5366888",coreVersion:"2.5.1"}}(),r=r.component}()}));