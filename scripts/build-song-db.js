(()=>{"use strict";var e={9099:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getChartType=void 0,n.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const n=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return n instanceof HTMLImageElement&&n.src.includes("_standard")?0:1}},8642:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getDifficultyTextColor=n.getDifficultyForRecord=n.getDifficultyName=n.DIFFICULTY_CLASSNAME_MAP=n.DIFFICULTIES=void 0,n.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],n.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"],["BASIC","basic"]]),n.getDifficultyName=function(e){return n.DIFFICULTIES[e]},n.getDifficultyForRecord=function(e){const t=e.querySelector(".playlog_top_container img.playlog_diff").src,i=t.substring(t.lastIndexOf("_")+1,t.lastIndexOf(".")),o=n.DIFFICULTIES.indexOf(i.toUpperCase());return o<0?4:o},n.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},2347:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.getPlayerGrade=n.getPlayerName=n.getChartDifficulty=n.getChartLevel=n.getSongName=void 0;const i=t(472);n.getSongName=function(e){const n=e.querySelector(".basic_block.break");return n?n.childNodes.item(n.childNodes.length-1).nodeValue:(0,i.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},n.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},n.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const n=e.querySelector(".pointer");e=n||e}const n=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===n.indexOf("RE")?"Re:MASTER":n},n.getPlayerName=function(e){var n,t;return e.className.includes("friend_vs_friend_block")?null===(n=e.querySelector(".t_l"))||void 0===n?void 0:n.innerText:null===(t=e.querySelector(".name_block"))||void 0===t?void 0:t.innerText},n.getPlayerGrade=function(e){const n=e.querySelector(".user_data_block_line ~ img.h_25");if(n){const e=n.src.lastIndexOf("grade_");return n.src.substring(e+6,e+8)}return null}},6510:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.fetchScores=n.SELF_SCORE_URLS=void 0;const o=t(9099),r=t(8642),c=t(2347),a=t(6420);n.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),n.fetchScores=function(e,t){return i(this,void 0,void 0,(function*(){const i=n.SELF_SCORE_URLS.get(e);if(!i)return;const s=yield(0,a.fetchPage)(i),u=s.querySelectorAll(".main_wrapper.t_c .m_15"),l={genre:"",scoreList:t};return u.forEach((n=>function(e,n,t){const i=e.classList.contains("screw_block"),a=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)t.genre=e.innerText;else if(a){const i=(0,c.getSongName)(e),a=(0,c.getChartLevel)(e),s=1===(0,o.getChartType)(e)?"DX":"STANDARD",u=function(e){const n=e.querySelector(".music_score_block.w_120");return n&&n.innerText}(e);if(!u)return;t.scoreList.push([i,t.genre,(0,r.getDifficultyName)(n),a,s,u].join("\t"))}}(n,e,l))),s}))}},472:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.isNiconicoLinkImg=n.isNicoNicoLink=n.getSongNickname=n.getSongIdx=n.normalizeSongName=n.RATING_TARGET_SONG_NAME_PREFIX=n.DX_SONG_NAME_SUFFIX=void 0;const o=t(6420);n.DX_SONG_NAME_SUFFIX=" [DX]",n.RATING_TARGET_SONG_NAME_PREFIX="▶ ",n.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},n.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},n.getSongNickname=function(e,t,i){return"Link"===e&&(e=t.includes("niconico")?"Link(nico)":"Link(org)"),1===i?e+n.DX_SONG_NAME_SUFFIX:e};let r={};n.isNicoNicoLink=function(e){return i(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const n=(yield(0,o.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(n?"is niconico":"is original")),n?r.nico=e:r.original=e,n}))},n.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},6420:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getPostMessageFunc=n.fetchSongDetailPage=n.fetchNewSongs=n.fetchAllSongs=n.fetchGameVersion=n.fetchPage=n.handleError=n.ALLOWED_ORIGINS=void 0;const o=t(9099),r=t(2347),c=t(6510),a=t(472);function s(e){return i(this,void 0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return(new DOMParser).parseFromString(t,"text/html")}))}function u(e){return i(this,void 0,void 0,(function*(){const n=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),t=[];for(const e of n){const n=(0,a.getSongIdx)(e),i=(0,r.getSongName)(e),c=(0,o.getChartType)(e);let s;"Link"===i&&(s=(yield(0,a.isNicoNicoLink)(n))?"Link(nico)":"Link(org)"),t.push({dx:c,name:i,nickname:s})}return t}))}n.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],n.handleError=function(e){alert(e)},n.fetchPage=s,n.fetchGameVersion=function e(n){return i(this,void 0,void 0,(function*(){const t=n.querySelector("select[name=version] option:last-of-type");return t?parseInt(t.value):e(n=yield s("/maimai-mobile/record/musicVersion/"))}))},n.fetchAllSongs=function(e){return i(this,void 0,void 0,(function*(){if(!e){const n=c.SELF_SCORE_URLS.get(1);e=yield s(n)}return yield u(e)}))},n.fetchNewSongs=function(e){return i(this,void 0,void 0,(function*(){const n=yield s(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield u(n)}))},n.fetchSongDetailPage=function(e){return i(this,void 0,void 0,(function*(){return s("/maimai-mobile/record/musicDetail/?"+new URLSearchParams({idx:e}).toString())}))},n.getPostMessageFunc=function(e,n){return(t,i)=>{const o={action:t,payload:i};e.postMessage(o,n)}}},1290:function(e,n,t){var i=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}s((i=i.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0});const o=t(9099),r=t(2347),c=t(472);!function(){i(this,void 0,void 0,(function*(){console.log(yield function(){return i(this,void 0,void 0,(function*(){const e=Array.from(document.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const t of e){const e=(0,c.getSongIdx)(t);let i=(0,r.getSongName)(t);const a=(0,r.getChartDifficulty)(t);let s=(0,r.getChartLevel)(t);const u=(0,o.getChartType)(t);"Link"===i?i=(yield(0,c.isNicoNicoLink)(e))?"Link(nico)":"Link(org)":"+♂"!==i&&"39"!==i||(i="'"+i),1===u&&(i+=" [dx]"),s.includes("+")||(s="'"+s),n.push([i,a,s].join("\t"))}return n}))}())}))}()}},n={};!function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}(1290)})();