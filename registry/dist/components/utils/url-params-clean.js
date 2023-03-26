!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/url-params-clean"]=t():e["utils/url-params-clean"]=t()}(globalThis,(()=>(()=>{var e,t,r={912:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=912,e.exports=t},799:e=>{"use strict";e.exports="自动删除网址中的多余跟踪参数. 请注意这会导致浏览器历史记录出现重复的标题 (分别是转换前后的网址), 并可能导致后退要多退几次.\r\n"},110:e=>{"use strict";e.exports=coreApis.lifeCycle},391:e=>{"use strict";e.exports=coreApis.observer}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,i),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var a=Object.create(null);i.r(a);var s={};e=e||[null,t({}),t([]),t(t)];for(var n=2&o&&r;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>s[e]=()=>r[e]));return s.default=()=>r,i.d(a,s),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";i.d(a,{component:()=>n});const e=coreApis.pluginApis.data,t=coreApis.componentApis.define,r=coreApis.utils,o="网址参数清理",s=(0,coreApis.utils.log.useScopedConsole)(o),n=(0,t.defineComponentMetadata)({name:"urlParamsClean",displayName:o,entry:async()=>{if((0,r.isNotHtml)()||(0,r.isIframe)())return;const[t]=(0,e.registerAndGetData)("urlParamsClean.noClean",["videocard_series"]),[o]=(0,e.registerAndGetData)("urlParamsClean.params",["spm_id_from","from_source","from_spmid","from","seid","share_source","share_medium","share_plat","share_tag","share_session_id","share_from","bbid","ts","timestamp","unique_k","rt","tdsourcetag","accept_quality","broadcast_type","current_qn","current_quality","playurl_h264","playurl_h265","quality_description","network","network_status","platform_network_status","p2p_type","referfrom","visit_id","bsource","spm","hotRank","-Arouter","vd_source","is_story_h5","buvid","plat_id"]),[a]=(0,e.registerAndGetData)("urlParamsClean.siteSpecifiedParams",[{match:/\/\/www\.bilibili\.com\/audio\/(au[\d]+|mycollection)/,param:"type"},{match:/\/\/live\.bilibili\.com\//,param:"session_id"},{match:/\/\/www\.bilibili\.com\/bangumi\//,param:"theme"},{match:/\/\/www\.bilibili\.com\/video\//,param:"mid"},{match:/\/\/www\.bilibili\.com\/video\//,param:"up_id"}]),[n]=(0,e.registerAndGetData)("urlParamsClean.tailingSlash",[]),c=e=>{const i=new URL(e,location.origin),s=i.search.substring(1).split("&");if(s.some((e=>t.some((t=>e.includes(t))))))return e;const c=s.filter((e=>!o.some((t=>e.startsWith(`${t}=`)))&&!a.some((t=>{let{match:r,param:o}=t;return document.URL.match(r)&&e.startsWith(`${o}=`)})))).join("&");n.forEach((e=>{let{match:t}=e;const o=i.pathname;(0,r.matchPattern)(o,t)&&o.endsWith("/")&&(i.pathname=o.slice(0,o.length-1))}));const l=c?`?${c}`:"";return i.search=l,i.toString()},l=e=>function(t,r,o){const i=c(o);for(var a=arguments.length,n=new Array(a>3?a-3:0),l=3;l<a;l++)n[l-3]=arguments[l];return i!==o?(s.log("History API 拦截",o,i),e.call(this,t,r,i,...n)):e.call(this,t,r,o,...n)},u=unsafeWindow.history.pushState;unsafeWindow.history.pushState=l(u);const m=unsafeWindow.history.replaceState;unsafeWindow.history.replaceState=l(m);const{fullyLoaded:p}=await Promise.resolve().then(i.t.bind(i,110,23)),{urlChange:d}=await Promise.resolve().then(i.t.bind(i,391,23));p((()=>{d((()=>(()=>{const e=c(document.URL);e!==document.URL&&(s.log("直接清理",document.URL,e),window.history.replaceState(history.state,"",e))})()))}))},tags:[componentsTags.utils],urlExclude:[/game\.bilibili\.com\/fgo/,/live\.bilibili\.com\/p\/html\/live-app-hotrank\//],commitHash:"1b524b518a2353faddc84f65d651200f939aca1f",coreVersion:"2.7.0",description:(()=>{const e=i(912);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,799,17)).then((e=>e.default))}})()})})(),a=a.component})()));