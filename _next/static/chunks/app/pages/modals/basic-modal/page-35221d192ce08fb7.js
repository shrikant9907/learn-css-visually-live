(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678,923,207,674,647,228,20,604,352,510,773,101,32],{2205:function(e,s,t){Promise.resolve().then(t.bind(t,285))},2104:function(e,s,t){"use strict";var r=t(7437);t(2265),s.Z=e=>{let{children:s}=e;return(0,r.jsx)("div",{className:"drop-shadow-sm p-4 px-6 rounded-md bg-white mb-4 dark:bg-gray-800 dark:text-white",children:s})}},285:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}});var r=t(7437),a=t(2265),d=t(2104),l=(e,s)=>{let{children:t,...a}=e;return(0,r.jsx)("button",{...a,className:"bg-blue-200 dark:text-white dark:border dark:bg-gray-950 font-normal text-xs px-2 py-1 rounded-md",children:t})},i=t(9054);t(9443);var c=t(3463),n=e=>{let{heading:s="",description:t="",alternateCode:n,children:o,preview:m=!1,previewRight:u=!1}=e,[b,h]=(0,a.useState)(!1),x=e=>{navigator.clipboard.writeText(e).then(()=>{h(!0)}).catch(e=>{h(!1),console.error("Failed to copy code: ",e)})};return((0,a.useEffect)(()=>{let e;return b&&(e=setTimeout(()=>h(!1),1e3)),()=>clearTimeout(e)},[b]),u)?(0,r.jsxs)("div",{className:"flex gap-10 pb-6 mb-10 border-b justify-start items-start",children:[(0,r.jsxs)("div",{className:"flex-1 w-1/2 drop-shadow-sm p-4 px-6 rounded-md bg-white mb-4 dark:bg-gray-800 dark:text-white",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h3",{className:"font-bold capitalize",children:s}),(0,r.jsx)(l,{onClick:()=>x(o),children:b?"Code Copied":"Copy Code"})]}),t&&(0,r.jsx)("div",{className:"mb-4 text-sm w-full",children:t}),(0,r.jsx)("div",{className:"bg-[#2b2b2b] p-4 rounded-md w-full overflow-auto",children:(0,r.jsx)(i.default,{className:"javascript overflow-auto text-sm",children:n||o})})]}),m&&(0,r.jsxs)("div",{className:"mb-5 flex-1",children:[(0,r.jsx)("h3",{className:"font-bold capitalize mb-4",children:"Preview"}),(0,r.jsx)("div",{children:(0,c.ZP)(o)})]})]}):(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h3",{className:"font-bold capitalize",children:s}),(0,r.jsx)(l,{onClick:()=>x(o),children:b?"Code Copied":"Copy Code"})]}),(0,r.jsx)("div",{className:"bg-[#2b2b2b] p-4 rounded-md w-full overflow-auto",children:(0,r.jsx)(i.default,{className:"javascript overflow-auto text-sm",children:o})}),m&&(0,r.jsxs)("div",{className:"mb-5",children:[(0,r.jsx)("h3",{className:"font-bold capitalize my-4",children:"Preview"}),(0,r.jsx)("div",{children:(0,c.ZP)(o)})]})]})}}},function(e){e.O(0,[658,98,971,23,744],function(){return e(e.s=2205)}),_N_E=e.O()}]);