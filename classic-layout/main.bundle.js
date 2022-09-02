(()=>{"use strict";var e={7980:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateAchvLoss=void 0;const n=a(6358),s=a(1782);function o(){return Object.assign({total:0},s.EMPTY_JUDGEMENT_OBJ)}t.calculateAchvLoss=function(e,t,a){const r=o(),c=o(),l={dx:new Map,finale:new Map},i=(0,n.sum)(Object.values(e.get("break")));return e.forEach(((e,n)=>{const d=s.BASE_SCORE_PER_TYPE[n],u=o(),m=o();if("break"===n)u.perfect=50*t.get(2550)+100*t.get(2500),u.great=600*t.get(2e3)+1100*t.get(1500)+1350*t.get(1250),u.good=1600*t.get(1e3),u.miss=2600*t.get(0),u.total=Object.values(u).reduce(((e,t)=>e+t),0),m.perfect=(t.get(2550)*(1-s.BREAK_BONUS_MULTIPLIER.get(2550))+t.get(2500)*(1-s.BREAK_BONUS_MULTIPLIER.get(2500)))/i,m.great=(t.get(2e3)*(1-s.BREAK_BASE_SCORE_MULTIPLIER.get(2e3))+t.get(1500)*(1-s.BREAK_BASE_SCORE_MULTIPLIER.get(1500))+t.get(1250)*(1-s.BREAK_BASE_SCORE_MULTIPLIER.get(1250)))*d/a+(t.get(2e3)*(1-s.BREAK_BONUS_MULTIPLIER.get(2e3))+t.get(1500)*(1-s.BREAK_BONUS_MULTIPLIER.get(1500))+t.get(1250)*(1-s.BREAK_BONUS_MULTIPLIER.get(1250)))/i,m.good=t.get(1e3)*(1-s.BREAK_BASE_SCORE_MULTIPLIER.get(1e3))*d/a+t.get(1e3)*(1-s.BREAK_BONUS_MULTIPLIER.get(1e3))/i,m.miss=t.get(0)*d/a+t.get(0)/i,m.total=Object.values(m).reduce(((e,t)=>e+t),0);else{u.perfect=0,u.great=Math.round(e.great*d*(1-s.REGULAR_BASE_SCORE_MULTIPLIER.great)),u.good=Math.round(e.good*d*(1-s.REGULAR_BASE_SCORE_MULTIPLIER.good)),u.miss=e.miss*d,u.total=Object.values(u).reduce(((e,t)=>e+t),0);for(const[e,t]of Object.entries(u))m[e]=t/a}for(const[e,t]of Object.entries(u))c[e]+=t;for(const[e,t]of Object.entries(m))r[e]+=t;l.finale.set(n,u),l.dx.set(n,m)})),l.finale.set("total",c),l.dx.set("total",r),l}},7616:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.walkBreakDistributions=void 0;const n=a(1782);t.walkBreakDistributions=function e(t,a,s,o,r){let c=s[0],l=!1,i=0;switch(s.length){case 5:return a.set(n.MAX_BREAK_POINTS,c),e(t,a,s.slice(1),o,r);case 4:let d=0,u=c;if(a.has(n.MAX_BREAK_POINTS)){const e=a.get(n.MAX_BREAK_POINTS);c+=e,d=e,u=e}for(let m=u;m>=d;m--){a.set(n.MAX_BREAK_POINTS,m);for(let n=c-m;n>=0;n--){a.set(2550,n),a.set(2500,c-m-n);const d=e(t,a,s.slice(1),o,r);if(l||(i=d,l=!0),d<o)break}}return i;case 3:for(let n=c;n>=0;n--){a.set(2e3,n);for(let d=c-n;d>=0;d--){a.set(1500,d),a.set(1250,c-n-d);const u=e(t,a,s.slice(1),o,r);if(l||(i=u,l=!0),u<o)break}}return i;case 2:return a.set(1e3,c),e(t,a,s.slice(1),o,r);case 1:return a.set(0,c),e(t,a,s.slice(1),o,r);case 0:let m=0,f=0,g=0;return a.forEach(((e,t)=>{m+=e,g+=e*n.BREAK_BASE_SCORE_MULTIPLIER.get(t)*r,f+=e*n.BREAK_BONUS_MULTIPLIER.get(t)})),g+=f/m,o-=g,Math.abs(o)<1e-4&&t.push(new Map(a)),g;default:throw new Error("unreachable")}}},7889:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AchievementInfo=void 0;const s=n(a(7363)),o=a(7991);function r(e,t,a,n){return t?(0,o.getRankTitle)(a):"AP+"===n?"SSS+":(0,o.getFinaleRankTitle)(e)}function c(e){const t="apfc";return e?"FC+"===e?"apfc fcplus":e.includes("AP")?"apfc ap":t:t}function l(e){return e?"sync":"sync finaleSync"}class i extends s.default.PureComponent{static getDerivedStateFromProps(e){const{dxAchv:t,apFcStatus:a,finaleAchv:n,isDxMode:s}=e;return{rankTitle:r(n,s,t,a)}}componentDidMount(){this.fetchRankImage()}componentDidUpdate(){this.fetchRankImage()}render(){const{apFcStatus:e,apFcImg:t,rankImgMap:a,isHighScore:n,syncStatus:o,syncImg:r,maxFinaleAchv:i,dxAchv:d,finaleAchv:u,isDxMode:m,toggleDisplayMode:f,showMaxAchv:g}=this.props,{rankTitle:p}=this.state,h=a.get(p),E=h?s.default.createElement("img",{className:"rankImg",src:h,alt:p}):p,S=t?s.default.createElement("img",{className:"apFcImg",src:t,alt:e}):e,_=r?s.default.createElement("img",{className:"syncImg",src:r,alt:o}):this.getSyncStatusText(o,m),M=m?d.toFixed(4):u.toFixed(2),v=m?101..toFixed(4):i.toFixed(2);return s.default.createElement("div",{className:"achievementInfo"},s.default.createElement("div",{className:"achvInfoSpace"}),s.default.createElement("div",{className:"rank"},E),s.default.createElement("div",{className:c(e)},S),s.default.createElement("div",{className:l(m)},_),s.default.createElement("div",{className:"playerScore"},s.default.createElement("div",{className:"highScore"},n?"HIGH SCORE!!":" "),s.default.createElement("div",{className:"achievement",tabIndex:0,onClick:f},"達成率：",s.default.createElement("div",{className:"achvNum"+(g?" hasMaxAchv":"")},s.default.createElement("span",{className:"playerAchv"},M,"％"),g&&s.default.createElement("span",{className:"maxAchv"},v,"％")))))}getSyncStatusText(e,t){if(e&&!t)switch(e){case"FS":case"FS+":return"MAX FEVER";case"FDX":case"FDX+":return"100% SYNC"}return e}fetchRankImage(){const{rankImgMap:e,fetchRankImage:t}=this.props,{rankTitle:a}=this.state;e.has(a)||t(a)}}t.AchievementInfo=i},5188:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BreakNoteJudgement=void 0;const s=n(a(7363)),o=a(3526);class r extends s.default.PureComponent{render(){const{judgements:e,distribution:t,lastColumn:a,isDxMode:n,displayMode:r}=this.props,c=a.isMax?"score maxScore":"score";return"DETAIL"===r?s.default.createElement("tr",{className:"breakNoteRow"},s.default.createElement("th",{className:"rowHead"},"Break"),s.default.createElement("td",{colSpan:3,className:"noRightBorder"},s.default.createElement("div",{className:"breakDistribution"},s.default.createElement("span",{className:"perfect"},t.get(2600)),s.default.createElement("span",{className:"perfect"},t.get(2550)),s.default.createElement("span",{className:"perfect"},t.get(2500)),s.default.createElement("span",{className:"great"},t.get(2e3)),s.default.createElement("span",{className:"great"},t.get(1500)),s.default.createElement("span",{className:"great"},t.get(1250)),s.default.createElement("span",{className:"good"},t.get(1e3)))),s.default.createElement("td",{className:"noLeftBorder"},s.default.createElement("div",{className:"miss missWithBefore"},t.get(0))),s.default.createElement("td",{className:c},(0,o.getLastColumnText)(a.score,n))):s.default.createElement(o.NoteJudgement,{noteType:"break",judgements:e,lastColumn:a,isDxMode:n})}}t.BreakNoteJudgement=r},5748:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CreditInfo=void 0;const s=n(a(7363));class o extends s.default.PureComponent{render(){return s.default.createElement("div",{className:"credit"},s.default.createElement("span",{className:"madeBy"},"Made by"," "),s.default.createElement("a",{className:"authorLink",href:"https://github.com/myjian",target:"_blank"},"myjian"),".")}}t.CreditInfo=o},8625:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DateAndPlace=void 0;const s=n(a(7363));class o extends s.default.PureComponent{render(){const{date:e,isDxMode:t}=this.props,a=t?"でらっくすちほー":"CAFE MiLK";return s.default.createElement("div",{className:"dateAndPlace"},s.default.createElement("div",{className:"date"},e),s.default.createElement("div",{className:"place",tabIndex:0,onClick:this.props.toggleDxMode},a))}}t.DateAndPlace=o},9256:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JudgementContainer=void 0;const s=n(a(7363)),o=a(5188),r=a(3826),c=a(3526);class l extends s.default.PureComponent{render(){const{nextRank:e,noteJudgements:t,breakDistribution:a,totalJudgements:n,scorePerType:l,combo:i,isDxMode:d,displayMode:u}=this.props;return s.default.createElement("div",{className:"judgementContainer"},s.default.createElement("table",{className:"judgement"},s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("th",{className:"rowHead"}," "),s.default.createElement("th",{className:"perfect"},"Perfect"),s.default.createElement("th",{className:"great"},"Great"),s.default.createElement("th",{className:"good"},"Good"),s.default.createElement("th",{className:"miss"},"Miss"),s.default.createElement("th",{className:"score"},"Score")),s.default.createElement(c.NoteJudgement,{noteType:"total",judgements:n,lastColumn:l.get("total"),isDxMode:d}),s.default.createElement(r.NextRankInfo,{nextRank:e,showTitle:"NORMAL"!==u}),i&&s.default.createElement("tr",{className:"maxCombo"},s.default.createElement("th",{className:"noRightBorder",colSpan:4},"MAX COMBO"),s.default.createElement("td",{className:"noLeftBorder",colSpan:2},i)),s.default.createElement("tr",{className:"tableSeparator"},s.default.createElement("td",{colSpan:6})),s.default.createElement(c.NoteJudgement,{noteType:"tap",judgements:t.get("tap"),lastColumn:l.get("tap"),isDxMode:d}),s.default.createElement(c.NoteJudgement,{noteType:"hold",judgements:t.get("hold"),lastColumn:l.get("hold"),isDxMode:d}),s.default.createElement(c.NoteJudgement,{noteType:"slide",judgements:t.get("slide"),lastColumn:l.get("slide"),isDxMode:d}),s.default.createElement(c.NoteJudgement,{noteType:"touch",judgements:t.get("touch"),lastColumn:l.get("touch"),isDxMode:d}),s.default.createElement(o.BreakNoteJudgement,{judgements:t.get("break"),distribution:a,lastColumn:l.get("break"),isDxMode:d,displayMode:u}))))}}t.JudgementContainer=l},3826:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NextRankInfo=void 0;const s=n(a(7363));class o extends s.default.PureComponent{constructor(){super(...arguments),this.state={showTitle:!1}}render(){const{nextRank:e,showTitle:t}=this.props,a=t&&e?e.title:"",n=this.getNextRankDiff();return s.default.createElement("tr",{className:"nextRank"},s.default.createElement("th",{className:"noRightBorder",colSpan:4},"NEXT RANK"),s.default.createElement("td",{className:"noLeftBorder",colSpan:2},a&&s.default.createElement("span",{className:"nextRankTitle"},a),n&&s.default.createElement("span",{className:"nextRankDiff"},n)))}getNextRankDiff(){const{nextRank:e}=this.props;if(!e)return"—————";const{diff:t}=e;return"number"==typeof t?Math.round(t)!==t?t.toFixed(4)+"%":t.toLocaleString("en"):t}}t.NextRankInfo=o},3526:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NoteJudgement=t.getLastColumnText=void 0;const s=n(a(7363)),o=a(6358);function r(e,t){return"string"==typeof e?e:t?(0,o.formatFloat)(e,4)+"%":e.toLocaleString("en")}t.getLastColumnText=r;class c extends s.default.PureComponent{render(){const{noteType:e,judgements:t,lastColumn:a,isDxMode:n}=this.props;if(!t)return null;const o=e.charAt(0).toUpperCase()+e.substring(1),c=a.isMax?"score maxScore":"score",l=function(e){const t=e.cp;return t?t+e.perfect:e.perfect}(t);return s.default.createElement("tr",{className:e+"NoteRow"},s.default.createElement("th",{className:"rowHead"},o),s.default.createElement("td",{className:"perfect"},l),s.default.createElement("td",{className:"great"},t.great),s.default.createElement("td",{className:"good"},t.good),s.default.createElement("td",{className:"miss"},t.miss),s.default.createElement("td",{className:c},r(a.score,n)))}}t.NoteJudgement=c},6381:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageFooter=void 0;const s=n(a(7363));class o extends s.default.PureComponent{render(){return s.default.createElement("div",{className:"pageFooter"},s.default.createElement("a",{className:"closePage",href:"javascript:window.close()"},"戻る"))}}t.PageFooter=o},7208:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;const s=n(a(7363));class o extends s.default.PureComponent{render(){return s.default.createElement("h3",{className:"pageTitle"},"プレイ履歴")}}t.PageTitle=o},5268:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=void 0;const s=n(a(7363)),o=a(4518),r=a(5748),c=a(6381),l=a(7208),i=a(1542),d=a(1334);function u(e,t){return t=t||2,e.toString().padStart(t,"0")}function m(e,t,a){return e.get(t)||(console.warn('URL does not contain "'+t+'", using default value "'+a+'"'),a)}function f(e,t){const a=m(e,"dt",t.date),n=m(e,"tk",t.track),s=m(e,"df",t.difficulty),r=m(e,"st",t.songTitle),c=m(e,"ac",t.achievement),l=m(e,"hs",t.highScore),i=m(e,"cb",t.combo),d=m(e,"nd",t.noteDetails);return{date:a,track:n,songTitle:r,difficulty:s,syncStatus:m(e,"sc",t.syncStatus),noteJudgements:(0,o.parseJudgements)(d),combo:i&&i.replace("/"," / "),highScore:"1"===l,achievement:parseFloat(c)}}class g extends s.default.PureComponent{constructor(e){super(e),this.referrer=document.referrer&&new URL(document.referrer).origin,this.fetchRankImage=e=>{console.log("fetchRankImage "+e),this.state.rankImg.set(e,null),this.sendMessageToOpener({action:"getRankImage",payload:e})},this.handleWindowMessage=e=>{if("https://maimaidx-eng.com"===e.origin||"https://maimaidx.jp"===e.origin)switch(e.data.action){case"songImage":this.setState({songImg:e.data.imgSrc});break;case"apFcImage":this.setState({apFcImg:URL.createObjectURL(e.data.img)});break;case"syncImage":this.setState({syncImg:URL.createObjectURL(e.data.img)});break;case"rankImage":this.setState((t=>{const a=t.rankImg.get(e.data.title);a&&URL.revokeObjectURL(a);const n=new Map(t.rankImg);return n.set(e.data.title,URL.createObjectURL(e.data.img)),{rankImg:n}}));break;default:console.log(e.data)}};const t=new URLSearchParams(location.search),a={date:(n=new Date,n.getFullYear()+"-"+u(n.getMonth()+1)+"-"+u(n.getDate())+" "+u(n.getHours())+":"+u(n.getMinutes())),track:"TRACK "+(Math.floor(3*Math.random())+1),songTitle:"分からない",achievement:"95.3035%",highScore:Math.random()>.9?"1":"0",noteDetails:"654-96-31-28\n25-0-0-0\n78-0-0-1\n\n37-2-1-0"};var n;try{this.state=Object.assign(Object.assign({},f(t,a)),{rankImg:new Map})}catch(e){console.error(e.message),console.error(e.stack),this.state=Object.assign(Object.assign({},f(new URLSearchParams(""),a)),{rankImg:new Map,showError:!0})}}componentDidMount(){document.title=this.state.songTitle+" - maimai classic score layout",window.addEventListener("message",this.handleWindowMessage),this.sendMessageToOpener({action:"ready"})}render(){const{achievement:e,combo:t,date:a,difficulty:n,highScore:o,noteJudgements:u,songTitle:m,track:f,songImg:g,apFcImg:p,rankImg:h,syncImg:E,syncStatus:S,showError:_}=this.state;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"widthLimit"},s.default.createElement("div",{className:"container"},s.default.createElement(l.PageTitle,null),s.default.createElement(d.SectionSep,null),_?s.default.createElement("div",{className:"error"},"Failed to parse input. Please contact the developer!"):s.default.createElement(i.ScorePageContainer,{achievement:e,combo:t,date:a,difficulty:n,highScore:o,noteJudgements:u,songTitle:m,track:f,syncStatus:S,songImgSrc:g,apFcImg:p,rankImg:h,syncImg:E,fetchRankImage:this.fetchRankImage}),s.default.createElement(d.SectionSep,null),s.default.createElement(c.PageFooter,null))),s.default.createElement(r.CreditInfo,null))}sendMessageToOpener(e){window.opener&&(console.log("sending message to opener",e),this.referrer?window.opener.postMessage(e,this.referrer):(window.opener.postMessage(e,"https://maimaidx-eng.com"),window.opener.postMessage(e,"https://maimaidx.jp")))}}t.RootComponent=g},3145:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ScorePage=void 0;const s=n(a(7363)),o=a(134),r=a(6358),c=a(7991),l=a(7889),i=a(8625),d=a(9256),u=a(8330),m=a(4639);function f(e,t){return t?"-"+(0,r.formatFloat)(e,t)+"%":"-"+e.toLocaleString("en")}class g extends s.default.PureComponent{constructor(){super(...arguments),this.state={isDxMode:!1,displayMode:"NORMAL"},this.toggleDxMode=()=>{this.setState((e=>{const t=!e.isDxMode,{displayMode:a}=e;return{isDxMode:t,displayNoteJudgements:this.getNoteJudgementLoss(t,a),displayScorePerType:this.getDisplayScorePerType(t,a)}}))},this.toggleDisplayMode=()=>{this.setState((e=>{const t=function(e){switch(e){case"NORMAL":return"LOSS";case"LOSS":return"DETAIL";default:return"NORMAL"}}(e.displayMode),{isDxMode:a}=e;return{displayMode:t,displayNoteJudgements:this.getNoteJudgementLoss(a,t),displayScorePerType:this.getDisplayScorePerType(a,t)}}))}}render(){const{achievement:e,apFcImg:t,rankImg:a,syncImg:n,highScore:o,date:r,songTitle:c,track:f,difficulty:g,songImgSrc:p,noteJudgements:h,combo:E,syncStatus:S,apFcStatus:_,finaleAchievement:M,maxFinaleScore:v,breakDistribution:R,totalJudgements:A,playerScorePerType:N}=this.props,{isDxMode:P,displayMode:I,displayScorePerType:y,displayNoteJudgements:x}=this.state;return s.default.createElement("div",{className:"songScoreContainer"},s.default.createElement(i.DateAndPlace,{date:r,isDxMode:P,toggleDxMode:this.toggleDxMode}),s.default.createElement("div",{className:"songScoreBody"},s.default.createElement("hr",{className:"trackTopLine"}),s.default.createElement(m.SongInfo,{songTitle:c,track:f,difficulty:g}),s.default.createElement(u.SongImg,{imgSrc:p}),s.default.createElement(l.AchievementInfo,{apFcStatus:_,apFcImg:t,rankImgMap:a,syncStatus:S,syncImg:n,isDxMode:P,isHighScore:o,dxAchv:e,finaleAchv:M,maxFinaleAchv:v,showMaxAchv:"NORMAL"!==I,toggleDisplayMode:this.toggleDisplayMode,fetchRankImage:this.props.fetchRankImage}),s.default.createElement(d.JudgementContainer,{noteJudgements:x||h,breakDistribution:R,totalJudgements:x?x.get("total"):A,scorePerType:y||N,nextRank:this.getNextRankEntry(P),combo:E,isDxMode:P,displayMode:I})))}getNextRankEntry(e){const t=e?this.props.achievement:this.props.finaleAchievement;if(e){if(101===t)return;if(t>=100.5)return{title:"AP+",diff:101-t};const e=(0,c.getRankDefinitions)(o.DxVersion.SPLASH)[(0,c.getRankIndexByAchievement)(t)-1];return{title:e.title,diff:e.minAchv-t}}let a;return this.props.finaleBorder.forEach(((e,t)=>{e>0&&!a&&(a={title:t,diff:e})})),a}getNoteJudgementLoss(e,t){if("LOSS"===t){const t=e?this.props.achvLossDetail.dx:this.props.achvLossDetail.finale,a=e?2:0,n=new Map;return t.forEach(((e,t)=>{n.set(t,{perfect:f(e.perfect,a),great:f(e.great,a),good:f(e.good,a),miss:f(e.miss,a)})})),n}}getDisplayScorePerType(e,t){const{achvLossDetail:a}=this.props,n=e?a.dx:a.finale;if("LOSS"===t){const t=e?4:0,a=new Map;return n.forEach(((e,n)=>{const s=0===e.total,o=f(e.total,t);a.set(n,{isMax:s,score:o})})),a}return e?this.props.dxAchvPerType:this.props.playerScorePerType}}t.ScorePage=g},1542:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ScorePageContainer=void 0;const s=n(a(7363)),o=a(7575),r=a(3145);class c extends s.default.PureComponent{static getDerivedStateFromProps(e){const t=(0,o.calculateScoreInfo)(e.noteJudgements,e.achievement),a=function(e){const t={perfect:0,great:0,good:0,miss:0};return e.forEach((e=>{Object.keys(e).forEach((a=>{let n=a;const s=e[n];"cp"===n&&(n="perfect"),t[n]+=s}))})),t}(e.noteJudgements),n=function(e,t){return e.miss?null:0===t.get("AP+")?"AP+":e.good?"FC":e.great?"FC+":"AP"}(a,t.finaleBorder);return Object.assign(Object.assign({},t),{totalJudgements:a,apFcStatus:n})}render(){return s.default.createElement(r.ScorePage,Object.assign({},this.props,this.state))}}t.ScorePageContainer=c},1334:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SectionSep=void 0;const s=n(a(7363));class o extends s.default.PureComponent{render(){return s.default.createElement("div",{className:"pageSectionSeparator"})}}t.SectionSep=o},8330:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SongImg=void 0;const s=n(a(7363));class o extends s.default.PureComponent{render(){const{imgSrc:e}=this.props;return s.default.createElement("div",{className:"songImgContainer"},e?s.default.createElement("img",{className:"songImg",src:e,alt:""}):s.default.createElement("div",{className:"songImg songImgPlaceholder"}),s.default.createElement("div",{className:"songImgReflecContainer"},this.getReflecElement(e)))}getReflecElement(e){if(e){const t={backgroundImage:`url("${e}")`};return s.default.createElement("div",{className:"songImgReflec",style:t})}return s.default.createElement("div",{className:"songImgPlaceholder songImgReflecPlaceholder"})}}t.SongImg=o},4639:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SongInfo=void 0;const s=n(a(7363)),o=a(7627),r=s.default.memo((e=>{const{difficulty:t}=e;if(!t)return null;const a=t.toLowerCase().replace(":","");return s.default.createElement("span",{className:"difficulty "+a},"【",s.default.createElement("span",{id:"difficulty"},t),"】")}));class c extends s.default.PureComponent{render(){const{songTitle:e,track:t,difficulty:a}=this.props;return s.default.createElement("div",{className:"songInfoContainer"},s.default.createElement("div",null,s.default.createElement("span",{className:"track",id:"track"},t),s.default.createElement(r,{difficulty:a})),s.default.createElement("h2",{className:"songTitle",id:"songTitle"},s.default.createElement("a",{className:"songWikiLink",href:(0,o.getZhWikiLink)(e),target:"_blank"},e)))}}t.SongInfo=c},1782:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EMPTY_JUDGEMENT_OBJ=t.BREAK_BONUS_MULTIPLIER=t.BREAK_BASE_SCORE_MULTIPLIER=t.MAX_BREAK_POINTS=t.BREAK_BONUS_POINTS=t.REGULAR_BASE_SCORE_MULTIPLIER=t.BASE_SCORE_PER_TYPE=t.DX_NOTE_TYPES=void 0,t.DX_NOTE_TYPES=["tap","hold","slide","touch","break"],t.BASE_SCORE_PER_TYPE={tap:500,hold:1e3,touch:500,slide:1500,break:2500},t.REGULAR_BASE_SCORE_MULTIPLIER={cp:1,perfect:1,great:.8,good:.5,miss:0},t.BREAK_BONUS_POINTS=100,t.MAX_BREAK_POINTS=t.BASE_SCORE_PER_TYPE.break+t.BREAK_BONUS_POINTS,t.BREAK_BASE_SCORE_MULTIPLIER=new Map([[t.MAX_BREAK_POINTS,1],[2550,1],[2500,1],[2e3,.8],[1500,.6],[1250,.5],[1e3,.4],[0,0]]),t.BREAK_BONUS_MULTIPLIER=new Map([[t.MAX_BREAK_POINTS,1],[2550,.75],[2500,.5],[2e3,.4],[1500,.4],[1250,.4],[1e3,.3],[0,0]]),t.EMPTY_JUDGEMENT_OBJ={perfect:0,great:0,good:0,miss:0}},7504:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.convertJudgementsToArray=void 0,t.convertJudgementsToArray=function(e){return"number"==typeof e.cp?[e.cp,e.perfect,e.great,e.good,e.miss]:[e.perfect,e.great,e.good,e.miss]}},1309:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(a(7363)),o=n(a(1533)),r=a(5268);o.default.render(s.default.createElement(r.RootComponent,null),document.getElementById("root"))},4518:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseJudgements=void 0;const a={cp:0,perfect:0,great:0,good:0,miss:0};function n(e,t){const a=e.match(/\d+/g);if(!a)return t;if(a.length<4)throw new Error("Cannot parse note judgements");const n=a.map((e=>parseInt(e,10)));return n.length>4?{cp:n[0],perfect:n[1],great:n[2],good:n[3],miss:n[4]}:{perfect:n[0],great:n[1],good:n[2],miss:n[3]}}t.parseJudgements=function(e){let t=e.split("_");if(1===t.length&&(t=e.split("\n")),t.length<4)throw new Error("Cannot parse note judgement lines");const s=new Map,o=n(t.pop(),a);s.set("break",o);const r=n(t.pop(),void 0);r&&s.set("touch",r);const c=n(t.pop(),a);s.set("slide",c);const l=n(t.pop(),a);s.set("hold",l);const i=n(t.pop(),a);return s.set("tap",i),s}},7575:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calculateScoreInfo=void 0;const n=a(6358),s=a(7980),o=a(7616),r=a(1782),c=a(7504);function l(e,t,a,s){if("AP+"===a)return e+t*r.BREAK_BONUS_POINTS-s;const o=e*a-s;return o<0?-1:(0,n.roundFloat)(o,"ceil",50)}t.calculateScoreInfo=function(e,t){let a=0,i=0;const d=new Map([["tap",{score:0,isMax:!1}],["hold",{score:0,isMax:!1}],["slide",{score:0,isMax:!1}],["touch",{score:0,isMax:!1}],["break",{score:0,isMax:!1}],["total",{score:0,isMax:!1}]]),u=new Map;e.forEach(((e,t)=>{const s=r.BASE_SCORE_PER_TYPE[t],o=(0,n.sum)(Object.values(e))*s;if(a+=o,"break"!==t){let a=0;Object.keys(e).forEach((t=>{const n=t,o=e[n];a+=o*s*r.REGULAR_BASE_SCORE_MULTIPLIER[n]}));const n=o-a;d.set(t,{score:a,isMax:0===n}),u.set(t,n),i+=a}}));const m=a/100,f=t-i/m,g=r.BASE_SCORE_PER_TYPE.break/m,p=[],h=e.get("break");(0,o.walkBreakDistributions)(p,new Map,(0,c.convertJudgementsToArray)(h),f,g),console.log("valid break distributions",p);let E=p[0];E||(console.warn("Could not find a valid break distribution!"),console.warn("Please report the issue to the developer."),E=new Map([[r.MAX_BREAK_POINTS,h.cp||0],[2550,0],[2500,h.perfect],[2e3,0],[1500,0],[1250,h.great],[1e3,h.good],[0,h.miss]]));let S=0,_=0;E.forEach(((e,t)=>{S+=e,_+=e*t})),d.set("break",{score:_,isMax:S===E.get(2600)});const M=i+_,v=a+r.BREAK_BONUS_POINTS*S;d.set("total",{score:M,isMax:M===v});const R=(0,n.roundFloat)(M/m,"floor",.01),A=(0,n.roundFloat)(v/m,"floor",.01);console.log("player score per note type",d);const N=new Map;N.set("tap",{score:(0,n.roundFloat)(d.get("tap").score/m,"round",1e-4),isMax:d.get("tap").isMax}),N.set("hold",{score:(0,n.roundFloat)(d.get("hold").score/m,"round",1e-4),isMax:d.get("hold").isMax}),N.set("slide",{score:(0,n.roundFloat)(d.get("slide").score/m,"round",1e-4),isMax:d.get("slide").isMax}),N.set("touch",{score:(0,n.roundFloat)(d.get("touch").score/m,"round",1e-4),isMax:d.get("touch").isMax}),N.set("break",{score:(0,n.roundFloat)(f,"round",1e-4),isMax:d.get("break").isMax}),N.set("total",{score:(0,n.roundFloat)(t,"round",1e-4),isMax:d.get("total").isMax});const P=(0,s.calculateAchvLoss)(e,E,m);console.log("achievement loss detail",P);const I=new Map([["S",l(a,S,.97,M)],["S+",l(a,S,.98,M)],["SS",l(a,S,.99,M)],["SS+",l(a,S,.995,M)],["SSS",l(a,S,1,M)],["AP+",l(a,S,"AP+",M)]]),y=new Map,x=500/m,L=1/S;return y.set("tap",x),y.set("hold",2*x),y.set("slide",3*x),y.set("touch",x),y.set("breakDx",5*x+L),y.set("break",5.2*x),{finaleAchievement:R,maxFinaleScore:A,breakDistribution:E,achvLossDetail:P,finaleBorder:I,pctPerNoteType:y,playerScorePerType:d,dxAchvPerType:N}}},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVersionName=t.validateGameVersion=t.RATING_CALCULATOR_SUPPORTED_VERSIONS=t.DxVersion=void 0;const a=["maimai","maimai PLUS","GreeN","GreeN PLUS","ORANGE","ORANGE PLUS","PiNK","PiNK PLUS","MURASAKi","MURASAKi PLUS","MiLK","MiLK PLUS","FiNALE","maimaiでらっくす","maimaiでらっくす PLUS","Splash","Splash PLUS","UNiVERSE","UNiVERSE PLUS"];var n;!function(e){e[e.SPLASH=15]="SPLASH",e[e.SPLASH_PLUS=16]="SPLASH_PLUS",e[e.UNIVERSE=17]="UNIVERSE",e[e.UNIVERSE_PLUS=18]="UNIVERSE_PLUS"}(n=t.DxVersion||(t.DxVersion={})),t.RATING_CALCULATOR_SUPPORTED_VERSIONS=[n.SPLASH,n.SPLASH_PLUS,n.UNIVERSE,n.UNIVERSE_PLUS],t.validateGameVersion=function(e,t=n.UNIVERSE_PLUS){const a="string"==typeof e?parseInt(e):e;return!e||isNaN(a)?t:a>=n.SPLASH&&a<=n.UNIVERSE_PLUS?a:t},t.getVersionName=function(e){return a[e]}},6358:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatFloat=t.roundFloat=t.sum=t.compareNumber=void 0,t.compareNumber=function(e,t){return e>t?1:e<t?-1:0},t.sum=function(e){let t=0;for(const a of e)t+=a;return t},t.roundFloat=function(e,t,a){return Math[t](e/a)*a},t.formatFloat=function(e,t){return e?e.toFixed(t):"0"}},7991:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFinaleRankTitle=t.getRankTitle=t.getRankByAchievement=t.getRankIndexByAchievement=t.getRankDefinitions=void 0;const n=a(134),s=[{minAchv:100.5,factor:14,title:"SSS+"},{minAchv:100,factor:13.5,title:"SSS"},{minAchv:99.5,factor:13.2,title:"SS+"},{minAchv:99,factor:13,title:"SS"},{minAchv:98,factor:12.7,title:"S+"},{minAchv:97,factor:12.5,title:"S"},{minAchv:94,factor:10.5,title:"AAA"},{minAchv:90,factor:9.5,title:"AA"},{minAchv:80,factor:8.5,title:"A"},{minAchv:75,factor:7.5,title:"BBB"},{minAchv:70,factor:7,title:"BB"},{minAchv:60,factor:6,title:"B"},{minAchv:50,factor:5,title:"C"}],o=[{minAchv:100.5,factor:22.4,title:"SSS+"},{minAchv:100,factor:21.6,title:"SSS"},{minAchv:99.5,factor:21.1,title:"SS+"},{minAchv:99,factor:20.8,title:"SS"},{minAchv:98,factor:20.3,title:"S+"},{minAchv:97,factor:20,title:"S"},{minAchv:94,factor:16.8,title:"AAA"},{minAchv:90,factor:15.2,title:"AA"},{minAchv:80,factor:13.6,title:"A"},{minAchv:75,factor:12,title:"BBB"},{minAchv:70,factor:11.2,title:"BB"},{minAchv:60,factor:9.6,title:"B"},{minAchv:50,factor:8,title:"C"}];function r(e){return e>n.DxVersion.SPLASH?o:s}function c(e){return o.findIndex((t=>e>=t.minAchv))}function l(e){const t=c(e);return t<0?"D":o[t].title}t.getRankDefinitions=r,t.getRankIndexByAchievement=c,t.getRankByAchievement=function(e,t){const a=c(e);return a<0?null:r(t)[a]},t.getRankTitle=l,t.getFinaleRankTitle=function(e){return l(e).replace("SSS+","SSS")}},7627:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getZhWikiLink=void 0,t.getZhWikiLink=function(e){return"https://maimai.fandom.com/zh/wiki/"+encodeURIComponent(e)+"?variant=zh-hant"}},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM}},t={};!function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}(1309)})();