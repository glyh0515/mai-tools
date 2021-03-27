(()=>{"use strict";var e={4007:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.fetchPlayerGrade=n.getPlayerName=n.getChartType=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0,n.getSongName=function(e){return e.getElementsByClassName("music_name_block")[0].innerText},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const n=e.querySelector(".pointer");e=n||e}const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getChartType=function(e){return e.id?e.id.includes("sta_")?0:1:e.querySelector("img:nth-child(2)").src.includes("_standard")?0:1},n.getPlayerName=function(e){var n;return null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},n.fetchPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},2847:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.fetchScores=n.SELF_SCORE_URLS=void 0;const o=t(4007),r=t(4871);n.SELF_SCORE_URLS=new Map([["Re:MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],["MASTER","/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],["EXPERT","/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],["ADVANCED","/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"]]),n.fetchScores=function(e,t){return i(this,void 0,void 0,(function*(){const i=n.SELF_SCORE_URLS.get(e);if(!i)return;const c=yield r.fetchPage(i),a=c.querySelectorAll(".main_wrapper.t_c .m_15"),s={genre:"",scoreList:t};return a.forEach((n=>function(e,n,t){const i=e.classList.contains("screw_block"),r=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)t.genre=e.innerText;else if(r){const i=o.getSongName(e),r=o.getChartLevel(e),c=1===o.getChartType(e)?"DX":"STANDARD",a=function(e){const n=e.querySelector(".music_score_block.w_120");return n&&n.innerText}(e);if(!a)return;t.scoreList.push([i,t.genre,n,r,c,a].join("\t"))}}(n,e,s))),c}))}},1809:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.removeScrollControl=void 0,n.removeScrollControl=function(e){let n=e.getElementById("page-top");n&&n.remove(),n=e.getElementById("page-bottom"),n&&n.remove()}},7377:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getScriptHost=void 0,n.getScriptHost=function(e){const n=Array.from(document.querySelectorAll("script"));for(const t of n)if(t.src.includes(e)){const e=new URL(t.src),n=e.pathname;return e.origin+n.substring(0,n.lastIndexOf("/scripts"))}return"https://myjian.github.io/mai-tools"}},868:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=void 0;const o=t(4871);n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,n,t){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),t?e+" [DX]":e};let r={};n.isNicoNicoLink=function(e){return i(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const n=(yield o.fetchPage("/maimai-mobile/record/musicDetail/?"+new URLSearchParams([["idx",e]]).toString())).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?r.nico=e:r.original=e,n}))}},4871:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchNewSongs=n.fetchAllSongs=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0;const o=t(4007),r=t(2847),c=t(868);function a(e){return i(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}function s(e){return i(this,void 0,void 0,(function*(){const n=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),t=[];for(const e of n){const n=c.getSongIdx(e),i=o.getSongName(e),r=o.getChartType(e);let a;"Link"===i&&(a=(yield c.isNicoNicoLink(n))?"Link(nico)":"Link(orig)"),t.push({dx:r,name:i,nickname:a})}return t}))}n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],n.handleError=function(e){alert(e)},n.fetchPage=a,n.fetchGameVersion=function e(n){return i(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?t.value:e(n=yield a("/maimai-mobile/record/musicVersion/"))}))},n.fetchAllSongs=function(e){return i(this,void 0,void 0,(function*(){if(!e){const n=r.SELF_SCORE_URLS.get("MASTER");e=yield a(n)}return yield s(e)}))},n.fetchNewSongs=function(e){return i(this,void 0,void 0,(function*(){const n=yield a(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield s(n)}))},n.getPostMessageFunc=function(e,n){return(t,i)=>{const o={action:t,payload:i};e.postMessage(o,n)}}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}(()=>{const e=t(1809),n=t(7377),i=t(4871);!function(t){const o=n.getScriptHost("score-converter")+"/classic-layout/",r=new Map([["S","/maimai-mobile/maimai-img/icon_s.png"],["S+","/maimai-mobile/maimai-img/icon_s_plus.png"],["SS","/maimai-mobile/maimai-img/icon_ss.png"],["SS+","/maimai-mobile/maimai-img/icon_ss_plus.png"],["SSS","/maimai-mobile/maimai-img/icon_sss.png"],["SSS+","/maimai-mobile/maimai-img/icon_sss_plus.png"]]),c=new Map([["AAA","/maimai-mobile/img/music_icon_aaa.png"],["AA","/maimai-mobile/img/music_icon_aa.png"],["A","/maimai-mobile/img/music_icon_a.png"]]),a=new Map([["fc","/maimai-mobile/maimai-img/icon_fc_silver.png"],["fcplus","/maimai-mobile/maimai-img/icon_fc_gold.png"],["ap","/maimai-mobile/maimai-img/icon_ap.png"]]),s=new Map([["applus","/maimai-mobile/img/music_icon_app.png"]]),l=new Map([["FS","/maimai-mobile/maimai-img/icon_maxfever_silver.png"],["FS+","/maimai-mobile/maimai-img/icon_maxfever_gold.png"]]),m=new Map([["FDX","/maimai-mobile/img/music_icon_fsd.png"],["FDX+","/maimai-mobile/img/music_icon_fsdp.png"]]);function u(e){return e.trim().replace(/\s+/g,"-")}function g(e,n){return n=n||2,e.toString().padStart(n,"0")}function d(e,n){let t=e.get(n);return t instanceof Blob?Promise.resolve(t):t?fetch(t).then((e=>e.blob())).then((t=>(e.set(n,t),t))):void 0}function f(e){const n=e.querySelector("img.music_img"),i=t.createElement("canvas");return i.width=n.width,i.height=n.height,i.getContext("2d").drawImage(n,0,0,i.width,i.height),i.toDataURL()}function p(e){return d(r,e)||d(c,e)||Promise.reject('invalid title "'+e+'"')}function _(e){const n=e.querySelector(".playlog_result_innerblock > img:nth-child(3)").src;switch(n.substring(n.lastIndexOf("/")+1,n.lastIndexOf("."))){case"fs":return"FS";case"fsplus":return"FS+";case"fsd":return"FDX";case"fsdplus":return"FDX+"}return null}if(("maimaidx-eng.com"===t.location.host||"maimaidx.jp"===t.location.host)&&t.location.pathname.includes("/maimai-mobile/record/playlogDetail/")){e.removeScrollControl(t);let n=o+"?st="+encodeURIComponent(t.body.querySelector(".basic_block.break").childNodes[1].nodeValue)+"&ac="+encodeURIComponent(function(e){const n=e.querySelector(".playlog_achievement_txt").innerText;return n.substring(0,n.length-1)}(t.body))+"&nd="+encodeURIComponent(t.body.querySelector(".playlog_notes_detail").innerText.split("\n").slice(-5).map(u).join("_"))+"&df="+encodeURIComponent(function(e){const n=e.querySelector(".playlog_top_container img.playlog_diff").src,t=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf("."));return"remaster"===t?"Re:MASTER":t.toUpperCase()}(t.body))+"&tk="+encodeURIComponent(function(e){return e.querySelector(".playlog_top_container .sub_title .f_b").innerText.replace("0","")}(t.body))+"&dt="+encodeURIComponent(function(e){const n=e.querySelector(".playlog_top_container .sub_title span:last-child").innerText.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+)/),t=new Date(parseInt(n[1]),parseInt(n[2])-1,parseInt(n[3]),parseInt(n[4]),parseInt(n[5]));return(i=new Date(t.valueOf()-36e5)).getFullYear()+"-"+g(i.getMonth()+1)+"-"+g(i.getDate())+" "+g(i.getHours())+":"+g(i.getMinutes());var i}(t.body))+"&hs="+encodeURIComponent(function(e){return e.querySelector(".playlog_achievement_newrecord")?1:0}(t.body))+"&cb="+encodeURIComponent(function(e){return e.querySelector(".col2 .playlog_score_block .white").innerText}(t.body));const r=_(t.body);r&&(n+="&sc="+encodeURIComponent(r)),console.log(n),console.log("url length: "+n.length),window.open(n,"_blank"),window.addEventListener("message",(e=>{if(i.ALLOWED_ORIGINS.includes(e.origin)){const i=e.data,o=e.source;let r="";switch(i.action){case"ready":o.postMessage({action:"songImage",imgSrc:f(t.body)},e.origin),function(e){const n=e.querySelector(".playlog_result_innerblock > img:nth-child(2)").src.replace(/\?ver=.*$/,""),t=n.substring(n.lastIndexOf("/")+1,n.lastIndexOf("."));return"fc_dummy"===t?Promise.resolve(null):d(a,t)||d(s,t)||Promise.reject('invalid title "'+t+'"')}(t.body).then((n=>{n&&o.postMessage({action:"apFcImage",img:n},e.origin)})),(n=_(t.body),n?d(l,n)||d(m,n)||Promise.reject('invalid title "'+n+'"'):Promise.resolve(null)).then((n=>{n&&o.postMessage({action:"syncImage",img:n},e.origin)})),r=function(e){const n=e.querySelector(".playlog_scorerank").src.replace(/\?ver=.*$/,"");return n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".")).toUpperCase().replace("PLUS","+")}(t.body),p(r).then((n=>{o.postMessage({action:"rankImage",title:r,img:n},e.origin)}));break;case"getRankImage":r=i.payload,p(r).then((n=>{o.postMessage({action:"rankImage",title:r,img:n},e.origin)}))}}var n}))}}(document)})()})();