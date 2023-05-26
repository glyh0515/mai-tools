(()=>{"use strict";var e={9099:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChartType=void 0,t.getChartType=function(e){if(e.id)return e.id.includes("sta_")?0:1;const t=e.querySelector(".playlog_music_kind_icon")||e.querySelector(".music_kind_icon")||e.querySelector(".f_l.h_20")||e.querySelector("img:nth-child(2)");return t instanceof HTMLImageElement&&t.src.includes("_standard")?0:1}},8642:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDifficultyTextColor=t.getDifficultyForRecord=t.getDifficultyName=t.DIFFICULTY_CLASSNAME_MAP=t.DIFFICULTIES=void 0,t.DIFFICULTIES=["BASIC","ADVANCED","EXPERT","MASTER","Re:MASTER"],t.DIFFICULTY_CLASSNAME_MAP=new Map([["Re:MASTER","remaster"],["MASTER","master"],["EXPERT","expert"],["ADVANCED","advanced"],["BASIC","basic"]]),t.getDifficultyName=function(e){return t.DIFFICULTIES[e]},t.getDifficultyForRecord=function(e){const n=e.querySelector(".playlog_top_container img.playlog_diff").src,i=n.substring(n.lastIndexOf("_")+1,n.lastIndexOf(".")),o=t.DIFFICULTIES.indexOf(i.toUpperCase());return o<0?4:o},t.getDifficultyTextColor=function(e){return["#45c124","#ffba01","#ff7b7b","#9f51dc","#dbaaff"][e]}},2347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayerGrade=t.getPlayerName=t.getChartDifficulty=t.getChartLevel=t.getSongName=void 0;const i=n(472);t.getSongName=function(e){const t=e.querySelector(".basic_block.break");return t?t.childNodes.item(t.childNodes.length-1).nodeValue:(0,i.normalizeSongName)(e.getElementsByClassName("music_name_block")[0].innerText)},t.getChartLevel=function(e){return e.getElementsByClassName("music_lv_block")[0].innerText},t.getChartDifficulty=function(e){if(!e.classList.contains("pointer")){const t=e.querySelector(".pointer");e=t||e}const t=e.className.match(/music_([a-z]+)_score_back/)[1].toUpperCase();return 0===t.indexOf("RE")?"Re:MASTER":t},t.getPlayerName=function(e){var t,n;return e.className.includes("friend_vs_friend_block")?null===(t=e.querySelector(".t_l"))||void 0===t?void 0:t.innerText:null===(n=e.querySelector(".name_block"))||void 0===n?void 0:n.innerText},t.getPlayerGrade=function(e){const t=e.querySelector(".user_data_block_line ~ img.h_25");if(t){const e=t.src.lastIndexOf("grade_");return t.src.substring(e+6,e+8)}return null}},6510:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchScores=t.SELF_SCORE_URLS=void 0;const o=n(9099),r=n(8642),c=n(2347),a=n(6420);t.SELF_SCORE_URLS=new Map([[4,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=4"],[3,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=3"],[2,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=2"],[1,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=1"],[0,"/maimai-mobile/record/musicGenre/search/?genre=99&diff=0"]]),t.fetchScores=function(e,n){return i(this,void 0,void 0,(function*(){const i=t.SELF_SCORE_URLS.get(e);if(!i)return;const s=yield(0,a.fetchPage)(i),l=s.querySelectorAll(".main_wrapper.t_c .m_15"),u={genre:"",scoreList:n};return l.forEach((t=>function(e,t,n){const i=e.classList.contains("screw_block"),a=e.classList.contains("w_450")&&e.classList.contains("m_15")&&e.classList.contains("p_r")&&e.classList.contains("f_0");if(i)n.genre=e.innerText;else if(a){const i=(0,c.getSongName)(e),a=(0,c.getChartLevel)(e),s=1===(0,o.getChartType)(e)?"DX":"STANDARD",l=function(e){const t=e.querySelector(".music_score_block.w_120");return t&&t.innerText}(e);if(!l)return;n.scoreList.push([i,n.genre,(0,r.getDifficultyName)(t),a,s,l].join("\t"))}}(t,e,u))),s}))}},6162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGameRegionFromOrigin=t.isMaimaiNetOrigin=t.MAIMAI_NET_ORIGINS=void 0,t.MAIMAI_NET_ORIGINS=["https://maimaidx.jp","https://maimaidx-eng.com"],t.isMaimaiNetOrigin=function(e){return"https://maimaidx.jp"===e||"https://maimaidx-eng.com"===e},t.getGameRegionFromOrigin=function(e){return"https://maimaidx.jp"===e?"https://maimaidx.jp":"https://maimaidx-eng.com"}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.LATEST_VERSION=void 0;const n=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS","FESTiVAL","FESTiVAL PLUS"];t.LATEST_VERSION=20,t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[18,19,20],t.validateGameVersion=function(e,n,i=t.LATEST_VERSION){const o="string"==typeof e?parseInt(e):e;return!e||isNaN(o)?i:o>=n&&o<=i?o:i},t.getVersionName=function(e){return n[e]}},9268:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDisplayLv=t.getDefaultLevel=t.getOfficialLevel=void 0,t.getOfficialLevel=function(e){const t=Math.floor(e);return e-t>.6?t+"+":t.toString()},t.getDefaultLevel=function(e){if(!e)return 1;const t=parseInt(e);return e.endsWith("+")?t+.7:t},t.getDisplayLv=function(e){if(!(e<0))return e.toFixed(1);const t=Math.abs(e),n=Math.floor(t);return n===t?n.toFixed(0):n.toFixed(0)+"+"}},6685:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.writeMagicToCache=t.readMagicFromCache=t.fetchMagic=void 0;const o=n(134),r={13:null,18:"aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9teWppYW4vZWU1NjlkNzRmNDIyZDRlMjU1MDY1ZDhiMDJlYTI5NGEvcmF3LzkzMmZiMDNhMzgxMjEyMTAwODBkNmY1Mzc5MTNhMDg0MjQ3ZTUzMWMvbWFpZHhfaW5fbHZfdW5pdmVyc2VwbHVzLmpz",19:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWwuanM=",20:"aHR0cHM6Ly9zZ2ltZXJhLmdpdGh1Yi5pby9tYWlfUmF0aW5nQW5hbHl6ZXIvc2NyaXB0c19tYWltYWkvbWFpZHhfaW5fbHZfZmVzdGl2YWxwbHVzLmpz"};function c(e){return"dxLv"+e}t.fetchMagic=function(e){return i(this,void 0,void 0,(function*(){const t=r[e]||r[18],n=yield fetch(atob(t));return n.ok?n.text():""}))},t.readMagicFromCache=function(e){const t=c(e),n=window.localStorage.getItem(t);if(console.log('Reading cache for "'+t+'" =>',n),!n)return null;const i=JSON.parse(n),r=new Date(i.date);if((new Date).valueOf()-r.valueOf()>864e5){console.warn('Cache for "'+t+'" is expired.');for(const e of o.RATING_CALCULATOR_SUPPORTED_VERSIONS)window.localStorage.removeItem(c(e));return null}return i.content},t.writeMagicToCache=function(e,t){const n=c(e);console.log('Updating cache for "'+n+'"');const i={date:new Date,content:t};window.localStorage.setItem(n,JSON.stringify(i))}},6689:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getRemovedSongs=void 0,t.getRemovedSongs=function(e){return"https://maimaidx.jp"===e?["全世界共通リズム感テスト"]:"https://maimaidx-eng.com"===e?["コネクト","シュガーソングとビターステップ","Mr. Wonderland","ワンダーラスト","LOSER","U.S.A.","新宝島","アウトサイダー","ジャガーノート"]:[]}},4313:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMaiToolsBaseUrl=t.getScriptHost=void 0;const i=n(6162),o="https://myjian.github.io/mai-tools";t.getScriptHost=function(e){const t=Array.from(document.querySelectorAll("script"));for(;t.length;){const n=t.pop();if(n.src.includes(e)){const e=new URL(n.src),t=e.pathname;return e.origin+t.substring(0,t.lastIndexOf("/scripts"))}}return o},t.getMaiToolsBaseUrl=function(){return(0,i.isMaimaiNetOrigin)(window.location.origin)?o:window.location.pathname.startsWith("/mai-tools")?window.location.origin+"/mai-tools":window.location.origin}},472:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isNiconicoLinkImg=t.isNicoNicoLink=t.getSongNickname=t.getSongIdx=t.normalizeSongName=t.RATING_TARGET_SONG_NAME_PREFIX=t.DX_SONG_NAME_SUFFIX=void 0;const o=n(6420);t.DX_SONG_NAME_SUFFIX=" [DX]",t.RATING_TARGET_SONG_NAME_PREFIX="▶ ",t.normalizeSongName=function(e){return"D✪N’T  ST✪P  R✪CKIN’"===e?"D✪N’T ST✪P R✪CKIN’":e.replace(/" \+ '/g,"").replace(/' \+ "/g,"")},t.getSongIdx=function(e){return e.getElementsByTagName("form")[0].elements.namedItem("idx").value},t.getSongNickname=function(e,n,i){return"Link"===e&&(e=n.includes("niconico")?"Link(nico)":"Link(org)"),1===i?e+t.DX_SONG_NAME_SUFFIX:e};let r={};t.isNicoNicoLink=function(e){return i(this,void 0,void 0,(function*(){if(r.nico===e)return!0;if(r.original===e)return!1;const t=(yield(0,o.fetchSongDetailPage)(e)).body.querySelector(".m_10.m_t_5.t_r.f_12").innerText.includes("niconico");return console.log("Link (idx: "+e+") "+(t?"is niconico":"is original")),t?r.nico=e:r.original=e,t}))},t.isNiconicoLinkImg=function(e){return e.includes("e90f79d9dcff84df")}},87:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSongsByVersion=t.filterSongsByVersion=t.getSongProperties=t.buildSongPropsMap=void 0;const o=n(8642),r=n(134),c=n(6689),a=n(4313),s=n(472),l=/\bdx\s*:\s*([0-9]+)/,u=/\blv\s*:\s*(\[.+?\])/,f=/\bv\s*:\s*(-?[0-9]+)/,d=/\bn\s*:\s*["'](.+?)['"]\s*[,\}]/,m=/\bnn\s*:\s*["'](.+?)['"]\s*[,\}]/;function g(e){return i(this,void 0,void 0,(function*(){let t="";try{const n=yield fetch(e);return n.ok?(t=yield n.text(),JSON.parse(t)):{}}catch(e){console.warn(e),console.warn("Failed to parse JSON: "+t)}return{}}))}function h(e){const t=e.match(l),n=e.match(u),i=e.match(f),r=e.match(d),c=e.match(m);if(t&&n&&i&&r){let e=JSON.parse(n[1]);if(e.length>o.DIFFICULTIES.length){const t=e.pop();e[o.DIFFICULTIES.length-1]=t}return{dx:parseInt(t[1]),lv:e,debut:Math.abs(parseInt(i[1])),name:(0,s.normalizeSongName)(r[1]),nickname:c&&c[1]}}}function p(e,t){if(!e.has(t.name))return!1;const n=e.get(t.name),i=n.findIndex((e=>t.dx===e.dx));return!(i<0||n[i].nickname!=t.nickname||(n[i]=function(e,t){let n=e.lv;return t.lv instanceof Array&&(n=e.lv.map(((e,n)=>isNaN(t.lv[n])?e:t.lv[n]))),Object.assign(Object.assign(Object.assign({},e),t),{lv:n})}(n[i],t),0))}function S(e,t,n){p(e,t)||(t.debut||0===t.debut||(t.debut=n),e.has(t.name)||e.set(t.name,[]),e.get(t.name).push(t))}t.buildSongPropsMap=function(e,t,n){return i(this,void 0,void 0,(function*(){const o=n.split("\n"),s=new Map;for(const t of o){const n=h(t);n&&S(s,n,e)}const l=yield function(e){return i(this,void 0,void 0,(function*(){const t=(0,a.getMaiToolsBaseUrl)()+`/data/chart-levels/version${e}.json`,n=yield g(t),i=[];return["standard","dx"].forEach(((e,t)=>{if(n[e])for(const o of Object.keys(n[e]))i.push({name:o,dx:t,lv:n[e][o]})})),i}))}(e);console.log("chartLevelOverrides",l);for(const t of l)S(s,t,e);if("https://maimaidx-eng.com"===t){const e=yield function(){return i(this,void 0,void 0,(function*(){const e=(0,a.getMaiToolsBaseUrl)()+"/data/song-info/intl.json",t=yield g(e),n=[];return["standard","dx"].forEach(((e,i)=>{if(t[e])for(const o of Object.keys(t[e])){const r=t[e][o],c=parseInt(o);for(const e of r)n.push({name:e,dx:i,debut:c})}})),n}))}();console.log("debutVersionOverrides",e);for(const t of e)p(s,t)}const u=(0,c.getRemovedSongs)(t);for(const e of u)s.delete(e);return s.forEach((e=>{for(const t of e)console.assert(null!=t.debut),console.assert(t.debut>=0&&t.debut<=r.LATEST_VERSION),console.assert(t.lv.length>=4)})),s}))},t.getSongProperties=function(e,t,n,i){let o=e.get(t);if(o&&o.length>0){if(o.length>1&&(o=o.filter((e=>e.dx===i)),o.length>1)){const e=(0,s.getSongNickname)(t,n,i);o=o.filter((t=>t.nickname===e))}if(o.length)return o.length>1&&(console.warn(`Found multiple song properties for ${t} ${i}`),console.warn(o)),o[0]}console.warn(`Could not find song properties for ${t} ${i}`)},t.filterSongsByVersion=function(e,t,n,i){const o=[];for(const r of e){const{dx:e,name:c,nickname:a}=r;let s=t.get(c);s&&s.length>0&&(s.length>1&&(s=s.filter((t=>t.dx===e)),s.length>1&&(s=s.filter((e=>e.nickname===a)))),s.length)?(s.length>1&&(console.warn(`Found multiple song properties for ${c} ${e?"[DX]":""}`),console.warn(s)),(0===i&&s[0].debut===n||1===i&&s[0].debut<n)&&o.push(s[0])):console.warn(`Could not find song properties for ${c} ${e?"[DX]":""}`)}return o},t.getSongsByVersion=function(e,t){const n=[];return e.forEach((e=>e.forEach((e=>{e.debut===t&&n.push(e)})))),n}},6420:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPostMessageFunc=t.fetchSongDetailPage=t.fetchNewSongs=t.fetchAllSongs=t.fetchGameVersion=t.fetchPage=t.handleError=t.ALLOWED_ORIGINS=void 0;const o=n(9099),r=n(2347),c=n(6510),a=n(472);function s(e){return i(this,void 0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return(new DOMParser).parseFromString(n,"text/html")}))}function l(e){return i(this,void 0,void 0,(function*(){const t=Array.from(e.querySelectorAll(".w_450.m_15.f_0")),n=[];for(const e of t){const t=(0,a.getSongIdx)(e),i=(0,r.getSongName)(e),c=(0,o.getChartType)(e);let s;"Link"===i&&(s=(yield(0,a.isNicoNicoLink)(t))?"Link(nico)":"Link(org)"),n.push({dx:c,name:i,nickname:s})}return n}))}t.ALLOWED_ORIGINS=["https://cdpn.io","https://myjian.github.io","http://localhost:8080"],t.handleError=function(e){alert(e)},t.fetchPage=s,t.fetchGameVersion=function e(t){return i(this,void 0,void 0,(function*(){const n=t.querySelector("select[name=version] option:last-of-type");return n?parseInt(n.value):e(t=yield s("/maimai-mobile/record/musicVersion/"))}))},t.fetchAllSongs=function(e){return i(this,void 0,void 0,(function*(){if(!e){const t=c.SELF_SCORE_URLS.get(1);e=yield s(t)}return yield l(e)}))},t.fetchNewSongs=function(e){return i(this,void 0,void 0,(function*(){const t=yield s(`/maimai-mobile/record/musicVersion/search/?version=${e}&diff=0`);return yield l(t)}))},t.fetchSongDetailPage=function(e){return i(this,void 0,void 0,(function*(){return s("/maimai-mobile/record/musicDetail/?"+new URLSearchParams({idx:e}).toString())}))},t.getPostMessageFunc=function(e,t){return(n,i)=>{const o={action:n,payload:i};e.postMessage(o,t)}}},2998:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(9099),r=n(8642),c=n(2347),a=n(6162),s=n(9268),l=n(6685),u=n(472),f=n(87),d=n(6420);var m;m=document,(0,a.isMaimaiNetOrigin)(m.location.origin)&&m.location.pathname.includes("/maimai-mobile/record/playlogDetail/")&&function(e){i(this,void 0,void 0,(function*(){const t=yield function(e){return i(this,void 0,void 0,(function*(){const t=yield(0,d.fetchGameVersion)(m.body),n=(0,a.getGameRegionFromOrigin)(window.location.origin),i=yield(0,f.buildSongPropsMap)(t,n,yield(0,l.fetchMagic)(t)),r=(0,c.getSongName)(m.body),g=m.querySelector("img.music_img"),h="Link"===r&&(0,u.isNiconicoLinkImg)(g.src)?"niconico":"",p=(0,o.getChartType)(m.body),S=(0,f.getSongProperties)(i,r,h,p);if(S)return(0,s.getDisplayLv)(S.lv[e]);const v=m.querySelector("input[name=idx]");return(yield(0,d.fetchSongDetailPage)(v.value)).querySelector(`.music_detail_table tr:nth-child(${e+1}) .music_lv_back`).innerHTML.trim()}))}(e),n=m.querySelector(".basic_block.break"),g=n.querySelector("img");g&&g.remove();const h=m.createElement("div");h.className="f_r",h.append("Lv "+t),h.style.color=(0,r.getDifficultyTextColor)(e),n.append(h)}))}((0,r.getDifficultyForRecord)(m.body))}},t={};!function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}(2998)})();