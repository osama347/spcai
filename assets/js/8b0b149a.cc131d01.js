"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[726],{5125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=n(5893),i=n(1151);const a={},r="Distributed Metadata",d={id:"hermes/components/distributed-metadata",title:"Distributed Metadata",description:"Metadata is stored in a distributed hash map. In each Hermes Daemon, we",source:"@site/docs/03-hermes/08-components/08-distributed-metadata.md",sourceDirName:"03-hermes/08-components",slug:"/hermes/components/distributed-metadata",permalink:"/spcai/docs/hermes/components/distributed-metadata",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Runtime",permalink:"/spcai/docs/hermes/components/runtime"},next:{title:"Prefetcher",permalink:"/spcai/docs/hermes/components/prefetcher"}},o={},l=[{value:"User View",id:"user-view",level:2},{value:"System View",id:"system-view",level:2},{value:"UniqueId",id:"uniqueid",level:2},{value:"Storage Method",id:"storage-method",level:2},{value:"Maps and ID Lists",id:"maps-and-id-lists",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Walkthrough of <code>Bucket.Put()</code>",id:"walkthrough-of-bucketput",level:2},{value:"Walkthrough of <code>Bucket.Get()</code>",id:"walkthrough-of-bucketget",level:2},{value:"Limits",id:"limits",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"distributed-metadata",children:"Distributed Metadata"}),"\n",(0,s.jsxs)(t.p,{children:["Metadata is stored in a distributed hash map. In each Hermes Daemon, we\r\ninitialize an ",(0,s.jsx)(t.code,{children:"hipc::unordered_map"}),". The main metadata structures we store\r\nare as follows: Tag Map (note, Buckets are represented as Tags), Blob Map,\r\nand Trait Map. These maps typically map an integer ID to an\r\ninformation structure. For example, the Blob Map maps a ",(0,s.jsx)(t.code,{children:"BlobId"})," (a 96-bit int)\r\nto a ",(0,s.jsx)(t.code,{children:"BlobInfo"})," struct. In addition, we have separate maps for mapping semantic\r\nstrings to integer IDs. For example, we have a map from a ",(0,s.jsx)(t.code,{children:"hipc::string"})," to\r\na ",(0,s.jsx)(t.code,{children:"BlobId"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"At this time, metadata is not replicated on nodes and we assume that metadata\r\ndoesn't grow so large that it exceeds the bounds of main memory."}),"\n",(0,s.jsx)(t.h2,{id:"user-view",children:"User View"}),"\n",(0,s.jsx)(t.p,{children:"Metadata (e.g., Blobs and Tags) can be given semantic names using hipc::strings\r\nor std::strings. hipc::string is what is eventually stored in Hermes, since it's\r\ncompatible with shared memory."}),"\n",(0,s.jsx)(t.h2,{id:"system-view",children:"System View"}),"\n",(0,s.jsx)(t.p,{children:"User primitives are referred to by unsigned 96-bit integers (IDs)."}),"\n",(0,s.jsx)(t.p,{children:"Each ID encodes the data it needs to access its metadata."}),"\n",(0,s.jsx)(t.h2,{id:"uniqueid",children:"UniqueId"}),"\n",(0,s.jsx)(t.p,{children:"TagIds, BlobIds, and TraitIds all are instances of a UniqueId. UniqueIds are\r\nrepresented as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Node ID: The identifier of the node the metadata is on (32-bit)"}),"\n",(0,s.jsx)(t.li,{children:"Unique: The unique number of the metadata object (64-bit)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The unique field is a 64-bit integer which is atomically incremented every time\r\nthe program creates a new metadata object. 64-bit is large enough that the\r\nprogram should never be able to use all 2^64 combos."}),"\n",(0,s.jsx)(t.h2,{id:"storage-method",children:"Storage Method"}),"\n",(0,s.jsx)(t.h2,{id:"maps-and-id-lists",children:"Maps and ID Lists"}),"\n",(0,s.jsx)(t.p,{children:"All metadata is distributed among nodes by first hashing the key to\r\ndetermine the node, then hashing again to determine the slot."}),"\n",(0,s.jsx)(t.h3,{id:"pros",children:"Pros"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Better load balancing"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cons",children:"Cons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["May require extra RPC calls. Initial tests show that this\r\nindirection should be avoided. ",(0,s.jsx)(t.strong,{children:"TODO:"})," We need to revisit this."]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"walkthrough-of-bucketput",children:["Walkthrough of ",(0,s.jsx)(t.code,{children:"Bucket.Put()"})]}),"\n",(0,s.jsxs)(t.p,{children:["1. Create a new ",(0,s.jsx)(t.code,{children:"BlobID"}),". The ID's node index (top 32 bits) is created\r\nby hashing the blob name, and the ID's offset to a list of ",(0,s.jsx)(t.code,{children:"BufferID"}),"s\r\n(bottom 32 bits) is allocated from the MDM shared memory segment on the\r\ntarget node."]}),"\n",(0,s.jsxs)(t.p,{children:["2. Add the new ",(0,s.jsx)(t.code,{children:"BlobID"})," to the ",(0,s.jsx)(t.strong,{children:"IdMap"}),". This could be local, or an\r\nRPC."]}),"\n",(0,s.jsxs)(t.p,{children:["3. Add the ",(0,s.jsx)(t.code,{children:"BlobID"})," to the ",(0,s.jsx)(t.code,{children:"Bucket"}),"'s list of blobs."]}),"\n",(0,s.jsxs)(t.h2,{id:"walkthrough-of-bucketget",children:["Walkthrough of ",(0,s.jsx)(t.code,{children:"Bucket.Get()"})]}),"\n",(0,s.jsxs)(t.p,{children:["1. Hash the blob name to get the ",(0,s.jsx)(t.code,{children:"BlobID"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["2. Get the list of ",(0,s.jsx)(t.code,{children:"BufferID"}),"s from the ",(0,s.jsx)(t.code,{children:"BlobID"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["3. Read each ",(0,s.jsx)(t.code,{children:"BufferID"}),"'s data into a user buffer."]}),"\n",(0,s.jsx)(t.h2,{id:"limits",children:"Limits"}),"\n",(0,s.jsx)(t.p,{children:"There can be a total of 2^64 unique metadata objects. I.e., there can be\r\na total of 2^64 Tags, Buckets, and Traits."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(7294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);