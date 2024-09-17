(()=>{"use strict";var e,t={637:()=>{const e=window.wp.blocks,t=window.wp.element,s=window.wp.i18n,a=window.wp.components,r=window.wp.blockEditor,l=JSON.parse('{"u2":"rmse-vat-results/schedule"}');(0,e.registerBlockType)(l.u2,{edit:function({attributes:e,setAttributes:l}){const m=rmse_vat_team_selection.map((e=>({label:e.name,value:e.id})));return(0,t.createElement)("div",{...(0,r.useBlockProps)()},(0,t.createElement)(r.InspectorControls,{key:"settings"},(0,t.createElement)("h5",null,(0,s.__)("Next Games / Last Results of a team","rmse-vat-results")),(0,t.createElement)("div",{className:"instructions"},(0,s.__)("Choose how many elements (last results and next games) should be displayed. 0 or less means it will not be shown at all. Will add a preview in a future version.","rmse-vat-results")),(0,t.createElement)(a.FlexBlock,null,(0,t.createElement)(a.__experimentalNumberControl,{isShiftStepEnabled:!0,label:(0,s.__)("Last Results","rmse-vat-results"),shiftStep:5,value:e.results,onChange:e=>l({results:parseInt(e)})})),(0,t.createElement)(a.FlexBlock,null,(0,t.createElement)(a.__experimentalNumberControl,{isShiftStepEnabled:!0,label:(0,s.__)("Scheduled Games","rmse-vat-results"),shiftStep:5,value:e.scheduled,onChange:e=>l({scheduled:parseInt(e)})})),(0,t.createElement)(a.SelectControl,{label:(0,s.__)("Team","rmse-vat-results"),value:e.team,options:m,onChange:e=>l({team:e})}),(0,t.createElement)(a.TextControl,{label:(0,s.__)("Date Format","rmse-vat-results"),value:e.dateformat,onChange:e=>l({dateformat:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Header?","rmse-vat-results"),checked:e.header,onChange:e=>l({header:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Group?","rmse-vat-results"),checked:e.group,onChange:e=>l({group:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Venue?","rmse-vat-results"),checked:e.venue,onChange:e=>l({venue:e})}),(0,t.createElement)(a.CheckboxControl,{label:(0,s.__)("Show Results?","rmse-vat-results"),checked:e.with_result,onChange:e=>l({with_result:e})})),(0,t.createElement)("table",{className:"rmse-vat-results-table"},e.header&&(0,t.createElement)("thead",null,(0,t.createElement)("tr",null,(0,t.createElement)("th",{className:"rmse-vat-results-date"},(0,s.__)("Date / Time","rmse-vat-results")),e.group&&(0,t.createElement)("th",{className:"rmse-vat-results-group"},(0,s.__)("Group","rmse-vat-results")),(0,t.createElement)("th",{className:"rmse-vat-results-hometeam"},(0,s.__)("Home","rmse-vat-results")),(0,t.createElement)("th",{className:"rmse-vat-results-guestteam"},(0,s.__)("Guest","rmse-vat-results")),e.venue&&(0,t.createElement)("th",{className:"rmse-vat-results-venue"},(0,s.__)("Venue","rmse-vat-results")),e.with_result&&(0,t.createElement)("th",{className:"rmse-vat-results-result"},(0,s.__)("Result","rmse-vat-results")))),(0,t.createElement)("tbody",null,(0,t.createElement)("tr",{className:"rmse-vat-results-game-played rmse-vat-results-game-club-internal"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.group&&(0,t.createElement)("td",{className:"rmse-vat-results-group"},"Clubintern"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},(0,t.createElement)("a",{href:"#"},"Halle X")),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"33:30 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-played  rmse-vat-results-game-win"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.group&&(0,t.createElement)("td",{className:"rmse-vat-results-group"},"Sieg"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},(0,t.createElement)("a",{href:"#"},"Halle X")),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"33:30 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-played  rmse-vat-results-game-draw"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.group&&(0,t.createElement)("td",{className:"rmse-vat-results-group"},"Unentschieden"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},(0,t.createElement)("a",{href:"#"},"Halle X")),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"33:33 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-played  rmse-vat-results-game-loss"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.group&&(0,t.createElement)("td",{className:"rmse-vat-results-group"},"Niederlage"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team B"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team A"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},(0,t.createElement)("a",{href:"#"},"Halle X")),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"},"30:33 (16:17)")),(0,t.createElement)("tr",{className:"rmse-vat-results-game-planned rmse-vat-results-game-home"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.group&&(0,t.createElement)("td",{className:"rmse-vat-results-group"},"Heimspiel"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},(0,t.createElement)("a",{href:"#"},"Halle X")),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"})),(0,t.createElement)("tr",{className:"rmse-vat-results-game-planned rmse-vat-results-game-away"},(0,t.createElement)("td",{className:"rmse-vat-results-date"},"21.10.23 14:25"),e.group&&(0,t.createElement)("td",{className:"rmse-vat-results-group"},"Auswärtsspiel"),(0,t.createElement)("td",{className:"rmse-vat-results-hometeam"},"Team A"),(0,t.createElement)("td",{className:"rmse-vat-results-guestteam"},"Team B"),e.venue&&(0,t.createElement)("td",{className:"rmse-vat-results-venue"},(0,t.createElement)("a",{href:"#"},"Halle X")),e.with_result&&(0,t.createElement)("td",{className:"rmse-vat-results-result"})))))}})}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var l=s[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,s,r,l)=>{if(!s){var m=1/0;for(o=0;o<e.length;o++){s=e[o][0],r=e[o][1],l=e[o][2];for(var n=!0,u=0;u<s.length;u++)(!1&l||m>=l)&&Object.keys(a.O).every((e=>a.O[e](s[u])))?s.splice(u--,1):(n=!1,l<m&&(m=l));if(n){e.splice(o--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var o=e.length;o>0&&e[o-1][2]>l;o--)e[o]=e[o-1];e[o]=[s,r,l]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={645:0,930:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var r,l,m=s[0],n=s[1],u=s[2],c=0;if(m.some((t=>0!==e[t]))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(u)var o=u(a)}for(t&&t(s);c<m.length;c++)l=m[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(o)},s=self.webpackChunkrmse_vat_results=self.webpackChunkrmse_vat_results||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var r=a.O(void 0,[930],(()=>a(637)));r=a.O(r)})();