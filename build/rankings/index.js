(()=>{"use strict";var e,s={644:()=>{const e=window.wp.blocks,s=window.wp.element,t=window.wp.i18n,a=window.wp.components,l=window.wp.blockEditor;window.React;const r="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMwIiBoZWlnaHQ9IjMzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8ZWxsaXBzZSByeT0iMTA5LjUiIHJ4PSIxMDkuNSIgaWQ9InN2Z18xIiBjeT0iMTY1IiBjeD0iMTY1IiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmYiLz4KICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iTm90byBTYW5zIEpQIiBmb250LXNpemU9IjQ4IiBzdHJva2Utd2lkdGg9IjAiIGlkPSJzdmdfMyIgeT0iMTgwLjUiIHg9IjExNC4zMzU5NCIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDA3ZjNmIj5Mb2dvPC90ZXh0PgogPC9nPgo8L3N2Zz4K",n=JSON.parse('{"u2":"tc-shv-results/rankings"}');(0,e.registerBlockType)(n.u2,{edit:function({attributes:e,setAttributes:n}){const c=tc_shv_team_selection.map((e=>({label:e.name,value:e.id})));return(0,s.createElement)("div",{...(0,l.useBlockProps)()},(0,s.createElement)(l.InspectorControls,{key:"settings"},(0,s.createElement)("h5",null,(0,t.__)("Ranking of a team's group","tc-shv-results")),(0,s.createElement)("div",{className:"instructions"},(0,t.__)("Choose the team and whether headers should be displayed as well as whether the HTML from the tanking should be shown","tc-shv-results")),(0,s.createElement)(a.SelectControl,{label:(0,t.__)("Team","tc-shv-results"),value:e.team,options:c,onChange:e=>n({team:e})}),(0,s.createElement)(a.CheckboxControl,{label:(0,t.__)("Show Header?","tc-shv-results"),checked:e.header,onChange:e=>n({header:e})}),(0,s.createElement)(a.CheckboxControl,{label:(0,t.__)("Show Logo?","tc-shv-results"),checked:e.logo,onChange:e=>n({logo:e})}),(0,s.createElement)(a.TextControl,{label:(0,t.__)("Logo Size","tc-shv-results"),value:e.logosize,onChange:e=>n({logosize:e})})),(0,s.createElement)("div",null,(0,s.createElement)("h3",{className:"tc-shv-results-rankings-header"},"Leaguename (LG)"),(0,s.createElement)("table",{className:"tc-shv-results-table"},e.header&&(0,s.createElement)("thead",null,(0,s.createElement)("tr",null,(0,s.createElement)("th",{className:"tc-shv-results-rankings-rank"},(0,t.__)("Rank","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-team",colSpan:e.logo?2:1},(0,t.__)("Team","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-games"},(0,t.__)("G","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-wins"},(0,t.__)("W","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-draws"},(0,t.__)("D","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-losses"},(0,t.__)("L","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-diff"},(0,t.__)("+/-","tc-shv-results")),(0,s.createElement)("th",{className:"tc-shv-results-rankings-points"},(0,t.__)("Pts","tc-shv-results")))),(0,s.createElement)("tbody",null,(0,s.createElement)("tr",{className:"tc-shv-results-rankings-promotion"},(0,s.createElement)("td",{className:"tc-shv-results-rankings-rank"},"1"),e.logo&&(0,s.createElement)("td",{className:"tc-shv-results-rankings-team-logo"},(0,s.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Logo"})),(0,s.createElement)("td",{className:"tc-shv-results-rankings-team"},(0,t.__)("Promotion Team","tc-shv-results")),(0,s.createElement)("td",{className:"tc-shv-results-rankings-games"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-wins"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-draws"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-losses"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-diff"},"100 (100:0)"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-points"},"10")),(0,s.createElement)("tr",{className:"tc-shv-results-rankings-promotion-candidate"},(0,s.createElement)("td",{className:"tc-shv-results-rankings-rank"},"2"),e.logo&&(0,s.createElement)("td",{className:"tc-shv-results-rankings-team-logo"},(0,s.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Logo"})),(0,s.createElement)("td",{className:"tc-shv-results-rankings-team"},(0,t.__)("Promotion Candidate","tc-shv-results")),(0,s.createElement)("td",{className:"tc-shv-results-rankings-games"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-wins"},"4"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-draws"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-losses"},"1"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-diff"},"90 (100:10)"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-points"},"8")),(0,s.createElement)("tr",{className:""},(0,s.createElement)("td",{className:"tc-shv-results-rankings-rank"},"3"),e.logo&&(0,s.createElement)("td",{className:"tc-shv-results-rankings-team-logo"},(0,s.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Logo"})),(0,s.createElement)("td",{className:"tc-shv-results-rankings-team"},(0,t.__)("Midfield Team","tc-shv-results")),(0,s.createElement)("td",{className:"tc-shv-results-rankings-games"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-wins"},"4"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-draws"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-losses"},"1"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-diff"},"90 (100:10)"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-points"},"8")),(0,s.createElement)("tr",{className:"tc-shv-results-rankings-own-team"},(0,s.createElement)("td",{className:"tc-shv-results-rankings-rank"},"4"),e.logo&&(0,s.createElement)("td",{className:"tc-shv-results-rankings-team-logo"},(0,s.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Logo"})),(0,s.createElement)("td",{className:"tc-shv-results-rankings-team"},(0,t.__)("Our own team","tc-shv-results")),(0,s.createElement)("td",{className:"tc-shv-results-rankings-games"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-wins"},"4"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-draws"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-losses"},"1"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-diff"},"90 (100:10)"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-points"},"8")),(0,s.createElement)("tr",{className:"tc-shv-results-rankings-relegation-candidate"},(0,s.createElement)("td",{className:"tc-shv-results-rankings-rank"},"5"),e.logo&&(0,s.createElement)("td",{className:"tc-shv-results-rankings-team-logo"},(0,s.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Logo"})),(0,s.createElement)("td",{className:"tc-shv-results-rankings-team"},(0,t.__)("Relegation Candidate","tc-shv-results")),(0,s.createElement)("td",{className:"tc-shv-results-rankings-games"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-wins"},"4"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-draws"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-losses"},"1"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-diff"},"90 (100:10)"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-points"},"8")),(0,s.createElement)("tr",{className:"tc-shv-results-rankings-relegation"},(0,s.createElement)("td",{className:"tc-shv-results-rankings-rank"},"5"),e.logo&&(0,s.createElement)("td",{className:"tc-shv-results-rankings-team-logo"},(0,s.createElement)("img",{src:r,height:e.logosize,width:e.logosize,alt:"Logo"})),(0,s.createElement)("td",{className:"tc-shv-results-rankings-team"},(0,t.__)("Relegation","tc-shv-results")),(0,s.createElement)("td",{className:"tc-shv-results-rankings-games"},"5"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-wins"},"4"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-draws"},"0"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-losses"},"1"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-diff"},"90 (100:10)"),(0,s.createElement)("td",{className:"tc-shv-results-rankings-points"},"8")))),(0,s.createElement)("div",{class:"tc-shv-results-ranking-modus"},(0,s.createElement)("h4",null,(0,t.__)("Modus","tc-shv-results")),(0,s.createElement)("div",null,(0,t.__)("Long Description of the mode of this ranking","tc-shv-results")))))}})}},t={};function a(e){var l=t[e];if(void 0!==l)return l.exports;var r=t[e]={exports:{}};return s[e](r,r.exports,a),r.exports}a.m=s,e=[],a.O=(s,t,l,r)=>{if(!t){var n=1/0;for(o=0;o<e.length;o++){t=e[o][0],l=e[o][1],r=e[o][2];for(var c=!0,m=0;m<t.length;m++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](t[m])))?t.splice(m--,1):(c=!1,r<n&&(n=r));if(c){e.splice(o--,1);var i=l();void 0!==i&&(s=i)}}return s}r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[t,l,r]},a.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={469:0,995:0};a.O.j=s=>0===e[s];var s=(s,t)=>{var l,r,n=t[0],c=t[1],m=t[2],i=0;if(n.some((s=>0!==e[s]))){for(l in c)a.o(c,l)&&(a.m[l]=c[l]);if(m)var o=m(a)}for(s&&s(t);i<n.length;i++)r=n[i],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(o)},t=self.webpackChunktc_shv_results=self.webpackChunktc_shv_results||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})();var l=a.O(void 0,[995],(()=>a(644)));l=a.O(l)})();