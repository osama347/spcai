"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[9905],{8763:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const r={},a="Data Placement",l={id:"hermes/components/data-placement",title:"Data Placement",description:"Every Hermes system instance includes one or more Hermes nodes.",source:"@site/docs/03-hermes/08-components/04-data-placement.md",sourceDirName:"03-hermes/08-components",slug:"/hermes/components/data-placement",permalink:"/spcai/docs/hermes/components/data-placement",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buffering Target",permalink:"/spcai/docs/hermes/components/buffering-target"},next:{title:"Data Staging",permalink:"/spcai/docs/hermes/components/data-staging"}},o={},c=[{value:"The Data Placement Problem",id:"the-data-placement-problem",level:2},{value:"The Data Placement Loop",id:"the-data-placement-loop",level:2},{value:"Problem to Solve in DPE",id:"problem-to-solve-in-dpe",level:2},{value:"Data Placement Solution",id:"data-placement-solution",level:2},{value:"Error Handling",id:"error-handling",level:3},{value:"Data Placement Solution Implementation",id:"data-placement-solution-implementation",level:2},{value:"Experimental Setup",id:"experimental-setup",level:2},{value:"Experimental Results",id:"experimental-results",level:2},{value:"Conclusions",id:"conclusions",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"data-placement",children:"Data Placement"}),"\n",(0,s.jsxs)(n.p,{children:["Every Hermes system instance includes one or more Hermes ",(0,s.jsx)(n.em,{children:"nodes"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"destination"}),' is a buffering resource that can be identified by a pair\r\nof node + target "coordinates."']}),"\n",(0,s.jsxs)(n.p,{children:["Each target $",(0,s.jsx)(n.code,{children:"t_k"}),"$ has characteristics such as the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A capacity $",(0,s.jsx)(n.code,{children:"Cap[t_k]"}),"$"]}),"\n",(0,s.jsxs)(n.li,{children:["A remaining capacity $",(0,s.jsx)(n.code,{children:"Rem[t_k]"}),"$"]}),"\n",(0,s.jsxs)(n.li,{children:["A speed (or throughput) $",(0,s.jsx)(n.code,{children:"Speed[...,t_k]"}),"$","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is the mean of the throughputs of all ranks associated with\r\nthe destination's node."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fix this!"})," Speed is really a function of the origin."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," At any point in time, there's a degree of ",(0,s.jsx)(n.em,{children:"uncertainty"})," to\r\nsome of the destination characteristics. For example, the remaining\r\ncapacity of a destination is typically obtained from a global metadata (MD)\r\nstructure that is updated asynchronously. Only the Hermes node buffer\r\npool managers have the precise value(s) for the pool under their\r\nmanagement."]}),"\n",(0,s.jsx)(n.h2,{id:"the-data-placement-problem",children:"The Data Placement Problem"}),"\n",(0,s.jsxs)(n.p,{children:["Given ",(0,s.jsx)(n.em,{children:"N"})," storage targets, a data placement policy ",(0,s.jsx)(n.em,{children:"P"}),", a cost function ",(0,s.jsx)(n.em,{children:"F"}),", and a ",(0,s.jsx)(n.em,{children:"BLOB"}),",\r\na data placement consists of a BLOB partitioning and an assignment of those parts to storage targets\r\nthat satisfies the constraints of the data placement policy and that minimizes the cost function."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Epoch - interval within which we update targets (status).","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Static (e.g., time interval or number of operations)"}),"\n",(0,s.jsx)(n.li,{children:"Dynamic, i.e., computed by the delta of status"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"[optional] Placement window - interval within which we make data\r\nplacement decisions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Timer expired or I/O operation count reached, which ever comes\r\nfirst."}),"\n",(0,s.jsx)(n.li,{children:"Static (e.g., time interval or number of operations)"}),"\n",(0,s.jsx)(n.li,{children:"Dynamic, i.e., number of put operations"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Epoch and placement window could be aligned (static mode)."}),"\n",(0,s.jsx)(n.p,{children:"The data placement is done within Data Placement Engine (DPE) component\r\nin HERMES."}),"\n",(0,s.jsx)(n.h2,{id:"the-data-placement-loop",children:"The Data Placement Loop"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"placement schema"})," $",(0,s.jsx)(n.code,{children:"PS(b)"}),"$ of a BLOB $",(0,s.jsx)(n.code,{children:"b (>0)"}),"$ is a decomposition\r\n$",(0,s.jsx)(n.code,{children:"b = s_1+\\cdots+s_k,\\; s_i\\in\\mathbb{N}\\setminus\\{0\\}"}),"$ together with a\r\ntarget mapping $",(0,s.jsx)(n.code,{children:"(s_1,\\ldots,s_k)\\mapsto(t_1(s_1),\\ldots,t_k(s_k))"}),"$."]}),"\n",(0,s.jsxs)(n.p,{children:["A sequence of buffer IDs $",(0,s.jsx)(n.code,{children:"(ID_1,\\ldots,ID_A)"}),"$ ",(0,s.jsx)(n.em,{children:"conforms"})," to a target\r\nassignment $",(0,s.jsx)(n.code,{children:"(s, t)"}),"$, iff $",(0,s.jsx)(n.code,{children:"s = \\sum_{i=1}^A Size(ID_i)"}),"$ and\r\n$",(0,s.jsx)(n.code,{children:"\\forall i\\;Target(ID_i) = t"}),"$."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"allocation of a placement schema"})," is a sequence of buffer IDs which\r\nis the concatenation of conforming target assignments."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Given: a vector of BLOBs $",(0,s.jsx)(n.code,{children:"(b_1, b_2,\\ldots, b_B)"}),"$"]}),"\n",(0,s.jsxs)(n.li,{children:["The DPE creates placement schemas $",(0,s.jsx)(n.code,{children:"PS(b_i),\\;1\\leq i\\leq B"}),"$."]}),"\n",(0,s.jsx)(n.li,{children:"The placement schemas are presented to the buffer manager, which,\r\nfor each placement schema, returns an allocation of that schema (or\r\nan error), and updates the underlying metadata structures."}),"\n",(0,s.jsx)(n.li,{children:"I/O clients transfer data from the BLOBs to the buffers."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"problem-to-solve-in-dpe",children:"Problem to Solve in DPE"}),"\n",(0,s.jsx)(n.p,{children:"Input:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Vector of BLOBs $",(0,s.jsx)(n.code,{children:"(b_1, b_2,\\ldots, b_B)"}),"$."]}),"\n",(0,s.jsxs)(n.li,{children:["Vector of targets $",(0,s.jsx)(n.code,{children:"(t_1, t_2,\\ldots, t_D)"}),"$."]}),"\n",(0,s.jsxs)(n.li,{children:["Vector of target remaining capacities $",(0,s.jsx)(n.code,{children:"Rem[t_k], \\;1\\leq k\\leq D"}),"$."]}),"\n",(0,s.jsxs)(n.li,{children:["Vector of target speed $",(0,s.jsx)(n.code,{children:"Speed[t_k], \\;1\\leq k\\leq D"}),"$."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Placement schema\r\n$",(0,s.jsx)(n.code,{children:"(s_1,\\ldots,s_k)\\mapsto(t_1(s_1),\\ldots,t_k(s_k))"}),"$, where\r\n$",(0,s.jsx)(n.code,{children:"b (>0)"}),"$ is a decomposition\r\n$",(0,s.jsx)(n.code,{children:"b = s_1+\\cdots+s_k,\\; s_i\\in\\mathbb{N}\\setminus\\{0\\}"}),"$"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"data-placement-solution",children:"Data Placement Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Pick a DP solver to obtain a ",(0,s.jsx)(n.em,{children:"placement schema"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Linear programming","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Constraints"}),"\n",(0,s.jsx)(n.li,{children:"Objective function"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Round-robin","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Granularity"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Random","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Distribution(s)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:'Use the buffer pool\'s "coin selector" to convert into buffer IDs.'}),"\n",(0,s.jsxs)(n.li,{children:["Handle two types of potential errors.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["DP solver failure: This can happen because of outdated target\r\nstatus, i.e., insufficient capacity, constraint infeasibility,\r\netc.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Solution to insufficient capacity: epoch, decision windows,\r\nswap space."}),"\n",(0,s.jsx)(n.li,{children:"Solution to constraint infeasibility: buffer reorganization,\r\ntarget filtering."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Coin selection failure: This can happen because of outdated\r\nstate view information, e.g., outdated remaining capacities.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Solution: epoch, decision windows, swap space."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"In both cases, the list of targets is inappropriate and needs to be\r\nupdated or changed."}),"\n",(0,s.jsxs)(n.p,{children:['The list of "relevant destinations" for a rank is assembled by the\r\nHermes node ',(0,s.jsx)(n.em,{children:"topology generator"}),'. It gets triggered when DP fails. The\r\ninitial topology consists of "node-local" destinations (Plan A) plus a\r\nbackup list of neighbors (Plan B) to consult when a rank gets in\r\ntrouble. If both plans fail, the topology generator invokes the\r\n',(0,s.jsx)(n.em,{children:"application-level"}),' "rebalancer" to redraw neighborhood boundaries\r\n(Plan C). In the past, we used to call these components node- and\r\napplication-level DPEs, but they aren\'t directly involved in DP\r\ndecisions, and we need maybe a clearer terminology.']}),"\n",(0,s.jsx)(n.h2,{id:"data-placement-solution-implementation",children:"Data Placement Solution Implementation"}),"\n",(0,s.jsx)(n.p,{children:"LP solver"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pick Google OR-Tools as a linear optimization tool to obtain\r\na\xa0",(0,s.jsx)(n.em,{children:"placement schema"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimize client I/O time."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Round-robin solver"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pick the next ",(0,s.jsx)(n.em,{children:"target"})," if the remaining capacity is greater or equal\r\nto the BLOB size, otherwise check the one after the next target\r\nuntil a target with enough capacity is found."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Random solver"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Randomly pick a target from all targets which have the capacity\r\ngreater or equal to the BLOB size."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"experimental-setup",children:"Experimental Setup"}),"\n",(0,s.jsx)(n.p,{children:"Scaling the number of BLOBs, 10 GB total BLOB size"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Small size BLOBs: random within the range of 4KB to 64KB"}),"\n",(0,s.jsx)(n.li,{children:"Medium size BLOBs: random within the range of 64KB to 1MB"}),"\n",(0,s.jsx)(n.li,{children:"Large size BLOBs: random within the range of 1MB to 4MB"}),"\n",(0,s.jsx)(n.li,{children:"Extra large size BLOBs: random with the range 4MB to 64MB"}),"\n",(0,s.jsx)(n.li,{children:"Huge size BLOBs: fixed 1GB"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Scaling the BLOB size, 1,000 and 8,192 BLOBs in total"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fixed BLOB size of 4KB, 64KB, 1MB, 4MB, 64MB"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"experimental-results",children:"Experimental Results"}),"\n",(0,s.jsx)(n.p,{children:"The DPE time of three different solvers with 10GB BLOBs in total."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(2694).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(522).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3146).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:"The associated I/O time of placement schema from three different solvers\r\nwith 10GB BLOBs in total."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3747).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(608).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(1660).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:"The DPE time of three different solvers with 1,000 BLOBs in total."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3416).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3287).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(303).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:"The associated I/O time by placement schema by three different solvers\r\nwith 1,000 BLOBs in total."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(2401).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8743).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8522).Z+"",width:"360",height:"216"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusions",children:"Conclusions"}),"\n",(0,s.jsx)(n.p,{children:"For a fixed total size of many BLOBs, DPE time is increasing with the\r\nnumber of BLOBs for all solvers."}),"\n",(0,s.jsx)(n.p,{children:"Round-robin and random solver can quickly calculate targets for a BLOB\r\nthan LP solver, while not considering optimizing I/O time."}),"\n",(0,s.jsx)(n.p,{children:"LP solver is efficient when the search space (number of targets) is not\r\ntoo large (for example, less than 1,024)."}),"\n",(0,s.jsx)(n.p,{children:"LP solver is a good candidate to place large size BLOBs, where the DPE\r\ntime has less impact than the I/O time to the overall performance."}),"\n",(0,s.jsx)(n.p,{children:"One of the possible policies is that size 64KB could be a boundary for\r\nBLOB aggregation. BLOB size less than 64KB will be aggregated within a\r\nplacement window and than placed together to mitigate DPE impact."}),"\n",(0,s.jsx)(n.p,{children:"Another possible policy is to use round-robin or random for small blobs\r\nand LP solver for large blobs."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2694:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Picture1_11-39073f55ead305e54d26b2b807186055.jpg"},522:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Picture2_1-f69c2af98fae3901d36a25d21d472764.jpg"},3146:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Picture3_1-39a88339cbe63ca25ee0724ee6299d49.jpg"},1660:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Picture4_1-bdcb34596dad2684fa7489a9f7f6fe79.jpg"},608:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Picture5_1-7b8f1d4f1bc3d69d054d170c0f451bc6.jpg"},3747:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/Picture6_1-7d429d3b8b75eaaa90a68ec6e0cd8692.jpg"},303:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/or_dpe-ff86d9273ff956678a5c2bff993bda19.jpg"},8522:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/ortools_io-2cba299e1b353b03c824eb11a917648f.jpg"},3287:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/random_dpe-11c7b726ae0dc701735a1e96486d1d1e.jpg"},8743:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/random_io-e4637d3689e4881e30360ebf78458381.jpg"},3416:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/rr_dpe-ced03cee3e9901af631e3114a92b44f0.jpg"},2401:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/rr_io-e0ca102ee0c5e9e2e15303dcb58c11a1.jpg"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var s=i(7294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);