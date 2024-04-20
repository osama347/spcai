"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[2667],{1975:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(5893),r=n(1151);const i={title:"Introduction"},s=void 0,l={id:"chronolog/index",title:"Introduction",description:"Synopsis",source:"@site/docs/04-chronolog/01-index.md",sourceDirName:"04-chronolog",slug:"/chronolog/index",permalink:"/spcai/docs/chronolog/index",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/spcai/docs/hermes/faq"},next:{title:"Introduction",permalink:"/spcai/docs/jarvis/jarvis-util/index"}},a={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Components",id:"components",level:2}];function c(e){const o={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(o.p,{children:"This project will design and implement ChronoLog, a distributed and tiered shared log storage ecosystem. ChronoLog uses physical time to distribute log entries while providing total log ordering. It also utilizes multiple storage tiers to elastically scale the log capacity (i.e., auto-tiering). ChronoLog will serve as a foundation for developing scalable new plugins, including a SQL-like query engine for log data, a streaming processor leveraging the time-based data distribution, a log-based key-value store, and a log-based TensorFlow module."}),"\n",(0,t.jsx)(o.h2,{id:"components",children:"Components"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"ChronoVisor"}),": first contact for client applications, manages the global time, orchestrates ",(0,t.jsx)(o.code,{children:"ChronoKeeper"}),"s, metadata management"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"ChronoKeeper"}),": high-performance indexed distributed journal to handle two major operations: append and playback"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"ChronoStore"}),": multi-tiered storage system to absorb data flush from ",(0,t.jsx)(o.code,{children:"ChronoKeeper"})," and process historic read"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"ChronoGrapher"}),": flushes data from ",(0,t.jsx)(o.code,{children:"ChronoKeeper"})," to ",(0,t.jsx)(o.code,{children:"ChronoStore"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"ChronoPlayer"}),": handles the third operation replay"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>s});var t=n(7294);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);