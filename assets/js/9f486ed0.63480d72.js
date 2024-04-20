"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[4308],{2648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(5893),a=n(1151);const s={},i="PATH",o={id:"hpc-tutorials/important-environment-variables/path",title:"PATH",description:"The PATH variable is used to locate executable objects. For example:",source:"@site/docs/02-hpc-tutorials/03-important-environment-variables/path.md",sourceDirName:"02-hpc-tutorials/03-important-environment-variables",slug:"/hpc-tutorials/important-environment-variables/path",permalink:"/spcai/docs/hpc-tutorials/important-environment-variables/path",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LIBRARY_PATH",permalink:"/spcai/docs/hpc-tutorials/important-environment-variables/library-path"},next:{title:"PYTHONPATH",permalink:"/spcai/docs/hpc-tutorials/important-environment-variables/pythonpath"}},c={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"path",children:(0,r.jsx)(t.code,{children:"PATH"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PATH"})," variable is used to locate executable objects. For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"touch hi.txt\r\ntar hi.txt\n"})}),"\n",(0,r.jsxs)(t.p,{children:['Where does the terminal know where "tar" is? It searches each path in ',(0,r.jsx)(t.code,{children:"PATH"})," and determines\r\nthe first location where the file tar exists."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"PATH"})," is organized as a colon-separated list."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'export PATH="/path1:/path2:/path3:${PATH}"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The above example prepends three paths to the ",(0,r.jsx)(t.code,{children:"PATH"})," variable."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(7294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);