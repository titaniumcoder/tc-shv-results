(()=>{"use strict";var e,t={946:()=>{const e=window.wp.blocks,t=window.wp.element,s=window.wp.i18n,l=window.wp.components,a=window.wp.blockEditor,r=JSON.parse('{"u2":"tc-shv-results/games"}');(0,e.registerBlockType)(r.u2,{edit:function({attributes:e,setAttributes:r}){return(0,t.createElement)("div",{...(0,a.useBlockProps)()},(0,t.createElement)(a.InspectorControls,{key:"settings"},(0,t.createElement)("h5",null,(0,s.__)("Next Games / Last Results of the club","tc-shv-results")),(0,t.createElement)("div",{className:"instructions"},(0,s.__)("Choose how many elements (last results and next games) should be displayed. 0 or less means it will not be shown at all. Will add a preview in a future version.","tc-shv-results")),(0,t.createElement)(l.Flex,null,(0,t.createElement)(l.FlexBlock,null,(0,t.createElement)(l.__experimentalNumberControl,{isShiftStepEnabled:!0,label:(0,s.__)("Last Results","tc-shv-results"),shiftStep:5,value:e.results,onChange:e=>r({results:e})})),(0,t.createElement)(l.FlexBlock,null,(0,t.createElement)(l.__experimentalNumberControl,{isShiftStepEnabled:!0,label:(0,s.__)("Scheduled Games","tc-shv-results"),shiftStep:5,value:e.scheduled,onChange:e=>r({scheduled:e})}))),(0,t.createElement)(l.TextControl,{label:(0,s.__)("Date Format","tc-shv-results"),value:e.dateformat,onChange:e=>r({dateformat:e})}),(0,t.createElement)(l.CheckboxControl,{label:(0,s.__)("Show Header?","tc-shv-results"),checked:e.header,onChange:e=>r({header:e})}),(0,t.createElement)(l.CheckboxControl,{label:(0,s.__)("Show game type?","tc-shv-results"),checked:e.type,onChange:e=>r({type:e})}),(0,t.createElement)(l.CheckboxControl,{label:(0,s.__)("Show Venue?","tc-shv-results"),checked:e.venue,onChange:e=>r({venue:e})}),(0,t.createElement)(l.CheckboxControl,{label:(0,s.__)("Show Results?","tc-shv-results"),checked:e.with_result,onChange:e=>r({with_result:e})})),(0,t.createElement)("table",{className:"tc-shv-results-table"},e.header&&(0,t.createElement)("thead",null,(0,t.createElement)("tr",null,(0,t.createElement)("th",{className:"tc-shv-results-date"},(0,s.__)("Date / Time","tc-shv-results")),e.type&&(0,t.createElement)("th",{className:"tc-shv-results-type"},(0,s.__)("Type","tc-shv-results")),(0,t.createElement)("th",{className:"tc-shv-results-hometeam"},(0,s.__)("Home","tc-shv-results")),(0,t.createElement)("th",{className:"tc-shv-results-guestteam"},(0,s.__)("Guest","tc-shv-results")),e.venue&&(0,t.createElement)("th",{className:"tc-shv-results-venue"},(0,s.__)("Venue","tc-shv-results")),e.with_result&&(0,t.createElement)("th",{className:"tc-shv-results-result"},(0,s.__)("Result","tc-shv-results")))),(0,t.createElement)("tbody",null,(0,t.createElement)("tr",{className:"tc-shv-results-game-played tc-shv-results-game-club-internal"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Club Internal"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"},"33:30 (16:17)")),(0,t.createElement)("tr",{className:"tc-shv-results-game-played  tc-shv-results-game-win"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Sieg"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"},"33:30 (16:17)")),(0,t.createElement)("tr",{className:"tc-shv-results-game-played  tc-shv-results-game-draw"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Unentschieden"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"},"33:33 (16:17)")),(0,t.createElement)("tr",{className:"tc-shv-results-game-played  tc-shv-results-game-loss"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Niederlage"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team B"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team A"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"},"30:33 (16:17)")),(0,t.createElement)("tr",{className:"tc-shv-results-game-planned tc-shv-results-game-home"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Heimspiel"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"})),(0,t.createElement)("tr",{className:"tc-shv-results-game-planned tc-shv-results-game-away"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Auswärtsspiel"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"})),(0,t.createElement)("tr",{className:"tc-shv-results-game-planned tc-shv-results-game-type-cup"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Cupspiel"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"})),(0,t.createElement)("tr",{className:"tc-shv-results-game-planned tc-shv-results-game-type-ms"},(0,t.createElement)("td",{className:"tc-shv-results-date"},"21.10.23 14:25"),e.type&&(0,t.createElement)("td",{className:"tc-shv-results-type"},"Meisterschaftsspiel"),(0,t.createElement)("td",{className:"tc-shv-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"tc-shv-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"tc-shv-results-venue"},"Halle X"),e.with_result&&(0,t.createElement)("td",{className:"tc-shv-results-result"})))))}})}},s={};function l(e){var a=s[e];if(void 0!==a)return a.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,s,a,r)=>{if(!s){var c=1/0;for(h=0;h<e.length;h++){s=e[h][0],a=e[h][1],r=e[h][2];for(var m=!0,n=0;n<s.length;n++)(!1&r||c>=r)&&Object.keys(l.O).every((e=>l.O[e](s[n])))?s.splice(n--,1):(m=!1,r<c&&(c=r));if(m){e.splice(h--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[s,a,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={413:0,23:0};l.O.j=t=>0===e[t];var t=(t,s)=>{var a,r,c=s[0],m=s[1],n=s[2],u=0;if(c.some((t=>0!==e[t]))){for(a in m)l.o(m,a)&&(l.m[a]=m[a]);if(n)var h=n(l)}for(t&&t(s);u<c.length;u++)r=c[u],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(h)},s=self.webpackChunktc_shv_results=self.webpackChunktc_shv_results||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var a=l.O(void 0,[23],(()=>l(946)));a=l.O(a)})();