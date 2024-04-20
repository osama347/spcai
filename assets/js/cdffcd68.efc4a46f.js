"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[9513],{1684:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(5893),r=n(1151);const i={},a="Adapters",c={id:"hermes/adapters",title:"Adapters",description:"Hermes Ecosystem",source:"@site/docs/03-hermes/06-adapters.md",sourceDirName:"03-hermes",slug:"/hermes/adapters",permalink:"/spcai/docs/hermes/adapters",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/spcai/docs/hermes/configuration"},next:{title:"Programming",permalink:"/spcai/docs/hermes/programming"}},o={},d=[{value:"Filesystem Base Class (FSBC)",id:"filesystem-base-class-fsbc",level:2},{value:"Design",id:"design",level:3},{value:"VFD",id:"vfd",level:3},{value:"PubSub Adapter",id:"pubsub-adapter",level:2},{value:"Suported API",id:"suported-api",level:3},{value:"<code>connect</code>",id:"connect",level:4},{value:"<code>attach</code>",id:"attach",level:4},{value:"<code>detach</code>",id:"detach",level:4},{value:"<code>publish</code>",id:"publish",level:4},{value:"<code>subscribe</code>",id:"subscribe",level:4},{value:"Current Limitations",id:"current-limitations",level:2},{value:"Future Work",id:"future-work",level:2},{value:"References",id:"references",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"adapters",children:"Adapters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Hermes Ecosystem",src:n(183).Z+"",width:"522",height:"727"})}),"\n",(0,t.jsxs)(s.p,{children:["Instead of the ",(0,t.jsx)(s.a,{href:"/spcai/docs/hermes/programming",children:"Hermes primitives"}),", existing applications\r\nuse I/O libraries and middleware such as the C standard I/O library,\r\nMPI-IO, or HDF5. Since Hermes is intended to be a seamless I/O\r\nbuffering solution, a set of ",(0,t.jsx)(s.em,{children:"adapters"})," is provided in the form of\r\n",(0,t.jsx)(s.code,{children:"LD_PRELOAD"}),"-able shared libraries. These adapters perform the task of\r\nmapping between the application view of I/O primitives (e.g., files)\r\nand the Hermes primitives. An exemplary discussion of such mappings\r\ncan be found in ",(0,t.jsx)(s.a,{href:"http://www.cs.iit.edu/~scs/assets/files/Enosis.pdf",children:"Enosis: Bridging the Semantic Gap between File-based\r\nand Object-based Data Models"})," and ",(0,t.jsx)(s.a,{href:"http://www.cs.iit.edu/~scs/assets/files/Syndesis.pdf",children:"Syndesis: Mapping Objects to Files for a Unified Data Access\r\nSystem"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Another important task of Hermes adapters is to collect I/O profiling\r\nthat supports the detection of I/O patterns."}),"\n",(0,t.jsx)(s.h2,{id:"filesystem-base-class-fsbc",children:"Filesystem Base Class (FSBC)"}),"\n",(0,t.jsx)(s.p,{children:"The Filesystem Base Class (FSBC) is used by all filesystem-based APIs. This\r\nincludes STDIO, POSIX, and MPIIO. The FSBC implements all necessary APIs for\r\nbuffering files within Hermes."}),"\n",(0,t.jsx)(s.p,{children:"The FSBC provides basic filesystem overrides, including:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Opening a file"}),"\n",(0,t.jsx)(s.li,{children:"Writing to a file"}),"\n",(0,t.jsx)(s.li,{children:"Reading from a file"}),"\n",(0,t.jsx)(s.li,{children:"Getting the size of a file"}),"\n",(0,t.jsx)(s.li,{children:"Removing a file"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Currently, we have four filesystem adapters:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"STDIO"}),"\n",(0,t.jsx)(s.li,{children:"POSIX"}),"\n",(0,t.jsx)(s.li,{children:"MPI-IO"}),"\n",(0,t.jsx)(s.li,{children:"HDF5 VFD"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"design",children:"Design"}),"\n",(0,t.jsx)(s.p,{children:"When reading/writing to a file, the FSBC will divide the I/O request into\r\nfixed-size pages. This is a configurable value, but the default is 1MB."}),"\n",(0,t.jsx)(s.p,{children:"As opposed to locking, Hermes uses queuing to ensure that I/O to the same regions\r\nof a file are strongly consistent. I/O to the same blob will be placed in the\r\nsame queue, ensuring sequencing."}),"\n",(0,t.jsx)(s.h3,{id:"vfd",children:"VFD"}),"\n",(0,t.jsx)(s.p,{children:"The HDF5 VFD is used to interface HDF5 with Hermes natively. To use the Hermes\r\nVFD in HDF5, you must define the following environment variables:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"export HDF5_PLUGIN_PATH=/path/to/hermes/lib\r\nexport HDF5_DRIVER=hdf5_hermes_vfd\n"})}),"\n",(0,t.jsx)(s.p,{children:"HDF5_PLUGIN_PATH indicates the directory to search for the HDF5_DRIVER. In\r\nthis case, HDF5 will search for libhdf5_hermes_vfd.so."}),"\n",(0,t.jsx)(s.h2,{id:"pubsub-adapter",children:"PubSub Adapter"}),"\n",(0,t.jsx)(s.p,{children:"The PubSub adapter for Hermes stands a bit different from other adapters due to the diverse nature of pub/sub APIs on the market. For example, here are two examples of starting programs for two different queue/broker systems."}),"\n",(0,t.jsx)(s.p,{children:"A simple example of, one of, the ZeroMQ C++ API."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:'#include <string>\r\n#include <zmq.hpp>\r\nint main()\r\n{\r\n   zmq::context_t ctx;\r\n   zmq::socket_t sock(ctx, zmq::socket_type::push);\r\n   sock.bind("inproc://test");\r\n   const std::string_view m = "Hello, world";\r\n   sock.send(zmq::buffer(m), zmq::send_flags::dontwait);\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"And an example of the Kafka C++ API."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:'#include "kafka/KafkaProducer.h"\r\n#include <iostream>\r\n#include <string>\r\nint main(int argc, char **argv)\r\n{\r\n  std::string brokers = argv[1];\r\n  kafka::Topic topic  = argv[2];\r\n  string line\'\r\n\r\n  kafka::Properties props({\r\n    {"bootstrap.servers", brokers},\r\n    {"enable.idempotence", "true"},\r\n  });\r\n  kafka::KafkaSyncProducer producer(props);\r\n  std::cin >> line;\r\n  auto record = kafka::ProducerRecord(topic, kafka::NullKey, kafka::Value(line.c_str(), line.size()));\r\n  kafka::Producer::RecordMetadata metadata = producer.send(record);\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"Both examples highlight the diversity of APIs present on the pub/sub market.\r\nAs such, the adapter API is intended to present a common and sharable lower interface to Hermes to which all other used API can be intercepted and redirected."}),"\n",(0,t.jsx)(s.h3,{id:"suported-api",children:"Suported API"}),"\n",(0,t.jsxs)(s.p,{children:["In all functions ",(0,t.jsx)(s.code,{children:"hapi"})," stands for objects under the ",(0,t.jsx)(s.code,{children:"hermes::api"})," namespace."]}),"\n",(0,t.jsx)(s.h4,{id:"connect",children:(0,t.jsx)(s.code,{children:"connect"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"hapi::Status connect(const std::string &config_file);\r\nhapi::Status connect();\r\n    - Connects to the Hermes instance\r\n    - One option accepts, config_file: Path to the config file of Hermes\r\n    - The other, assumes that path is loaded into an environment variable defined in constants.h under kHermesConf\n"})}),"\n",(0,t.jsx)(s.h4,{id:"attach",children:(0,t.jsx)(s.code,{children:"attach"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"hapi::Status attach(const std::string& topic);\r\n    - Attaches to a topic, creating it if it doesn't exist\r\n    - topic: The name of the topic\n"})}),"\n",(0,t.jsx)(s.h4,{id:"detach",children:(0,t.jsx)(s.code,{children:"detach"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"hapi::Status detach(const std::string& topic);\r\n    - Detaches from the topic cleaning up all client-local metadata\r\n    - topic: The name of the topic\r\n    - Note, detaching doesn't delete the topic\n"})}),"\n",(0,t.jsx)(s.h4,{id:"publish",children:(0,t.jsx)(s.code,{children:"publish"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"hapi::Status publish(const std::string& topic,  const std::vector<unsigned char>& message);\r\n    - Puts a message to a topic\r\n    - topic: The name of the topic\r\n    - message: the data buffer\r\n    - Note, the function uses std::vector<unsigned char> which is equivalent to hermes::api::Blob\n"})}),"\n",(0,t.jsx)(s.h4,{id:"subscribe",children:(0,t.jsx)(s.code,{children:"subscribe"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:" std::pair<std::vector<unsigned char>, hapi::Status> subscribe( const std::string& topic);\r\n    - Retrieves the next message from the topic\r\n    - topic: The name of the topic\r\n    - returns: a pair of the return code/status and, if successful, the subscribed message.\n"})}),"\n",(0,t.jsx)(s.h2,{id:"current-limitations",children:"Current Limitations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Currently on Hermes, Blob deletions causes the latest Blob to be placed in it's place, this is intended to save memory space and provide an O(1) deletion complexity. Nevertheless, this destroys the ordering of messages expected but the pub/sub API, as such, message/Blob deletions is not possible, currently."}),"\n",(0,t.jsx)(s.li,{children:"Multi-threaded support of the API has not been fully tested. All tests have been performed under multi-process, MPI-driven tests."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"future-work",children:"Future Work"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Current work is being focused in expanding the library to support the use of traits to support in-transit transformations of the data"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/LLNL/GOTCHA",children:"GOTCHA is a library for wrapping function calls in shared libraries"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},183:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/Hermes_Ecosystem-bcc2b31f697fea047fc773fbf10d2dbb.jpg"},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>a});var t=n(7294);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);