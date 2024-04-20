"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[2777],{1421:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(5893),s=r(1151);const a={},t="Configuration",o={id:"hermes/configuration",title:"Configuration",description:"Before deploying an application, you need to configure Hermes. Hermes has two types of configurations: server configuration and client configuration. They",source:"@site/docs/03-hermes/05-configuration.md",sourceDirName:"03-hermes",slug:"/hermes/configuration",permalink:"/spcai/docs/hermes/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying Hermes",permalink:"/spcai/docs/hermes/deploying-hermes"},next:{title:"Adapters",permalink:"/spcai/docs/hermes/adapters"}},l={},c=[{value:"Server Configuration",id:"server-configuration",level:2},{value:"Defining Storage Targets",id:"defining-storage-targets",level:3},{value:"Device Names",id:"device-names",level:3},{value:"<code>mount_point</code>",id:"mount_point",level:3},{value:"<code>capacity</code>",id:"capacity",level:3},{value:"<code>block_size</code>",id:"block_size",level:3},{value:"<code>slab_sizes</code>",id:"slab_sizes",level:3},{value:"<code>bandwidth</code>, <code>latency</code>",id:"bandwidth-latency",level:3},{value:"<code>is_shared_device</code>",id:"is_shared_device",level:3},{value:"<code>borg_capacity_thresh</code>",id:"borg_capacity_thresh",level:3},{value:"Buffer Organizer (BORG)",id:"buffer-organizer-borg",level:2},{value:"Prefetcher",id:"prefetcher",level:2},{value:"Traits",id:"traits",level:2},{value:"Shared Memory",id:"shared-memory",level:2},{value:"System View State",id:"system-view-state",level:2},{value:"Bounding Memory Utilization",id:"bounding-memory-utilization",level:2},{value:"Using RAM as a buffering device",id:"using-ram-as-a-buffering-device",level:3},{value:"Hashtables for storing blobs + buckets",id:"hashtables-for-storing-blobs--buckets",level:3},{value:"Bounding Non-Buffering Tasks",id:"bounding-non-buffering-tasks",level:3},{value:"Calculating Total Amount of Memory",id:"calculating-total-amount-of-memory",level:3},{value:"Client Configuration",id:"client-configuration",level:2},{value:"Path Inclusion / Exclusion",id:"path-inclusion--exclusion",level:3},{value:"Adapter Mode",id:"adapter-mode",level:3},{value:"File Page Size",id:"file-page-size",level:3},{value:"Flushing Mode",id:"flushing-mode",level:3},{value:"Adapter Config",id:"adapter-config",level:3},{value:"Provided Configurations",id:"provided-configurations",level:2},{value:"How To Avoid Repeating the Default Configurations",id:"how-to-avoid-repeating-the-default-configurations",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Before deploying an application, you need to configure Hermes. Hermes has two types of configurations: server configuration and client configuration. They\r\nare represented as YAML files. We will describe the contents of these YAML\r\nfiles here."}),"\n",(0,i.jsx)(n.h2,{id:"server-configuration",children:"Server Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The server configuration is primarily used to initialize the daemon.\r\nClients also parse the server config to get the basic information needed\r\nto connect to the Hermes daemons."}),"\n",(0,i.jsx)(n.p,{children:"Technically, the server configuration\r\nis optional. However, the default configuration is more for just setting\r\nthings up. You do have to configure things like mount points manually\r\nat this time."}),"\n",(0,i.jsxs)(n.p,{children:["The default server configuration can be found\r\n",(0,i.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/blob/master/config/hermes_server_default.yaml",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"defining-storage-targets",children:"Defining Storage Targets"}),"\n",(0,i.jsx)(n.p,{children:'The most important property in the configuration is defining where Hermes\r\nbuffers data. This is done under the "devices" entry.\r\nIn the default configuration, we have the following:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'devices:\r\n  ram:\r\n    mount_point: ""\r\n    capacity: 50MB\r\n    block_size: 4KB\r\n    slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]\r\n    bandwidth: 6000MBps\r\n    latency: 15us\r\n    is_shared_device: false\r\n    borg_capacity_thresh: [0.0, 1.0]\r\n\r\n  nvme:\r\n    mount_point: "./"\r\n    capacity: 100MB\r\n    block_size: 4KB\r\n    slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]\r\n    bandwidth: 1GBps\r\n    latency: 600us\r\n    is_shared_device: false\r\n    borg_capacity_thresh: [ 0.0, 1.0 ]\r\n\r\n   ssd:\r\n     mount_point: "./"\r\n     capacity: 100MB\r\n     block_size: 4KB\r\n     slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]\r\n     bandwidth: 500MBps\r\n     latency: 1200us\r\n     is_shared_device: false\r\n     borg_capacity_thresh: [ 0.0, 1.0 ]\r\n\r\n   pfs:\r\n     mount_point: "./"\r\n     capacity: 100MB\r\n     block_size: 64KB\r\n     slab_sizes: [ 4KB, 16KB, 64KB, 1MB ]\r\n     bandwidth: 100MBps\r\n     latency: 200ms\r\n     is_shared_device: true\r\n     borg_capacity_thresh: [ 0.0, 1.0 ]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"device-names",children:"Device Names"}),"\n",(0,i.jsx)(n.p,{children:"In the above configuration, we have four unique devices: ram, nvme, ssd,\r\nand pfs. These names are for the ease of the user, and have no meaning\r\nto Hermes. In other words, these names can be anything. The following\r\nconfiguration would be effectively equivalent to the one above:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'devices:\r\n  dev1:\r\n    mount_point: ""\r\n    capacity: 50MB\r\n    ...\r\n\r\n  dev2:\r\n    mount_point: "./"\r\n    capacity: 100MB\r\n    ...\r\n\r\n   dev3:\r\n     mount_point: "./"\r\n     capacity: 100MB\r\n     ...\r\n\r\n   dev4:\r\n     mount_point: "./"\r\n     capacity: 100MB\r\n     ...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mount_point",children:(0,i.jsx)(n.code,{children:"mount_point"})}),"\n",(0,i.jsx)(n.p,{children:"The mount point parameter is used to indicate which directory Hermes\r\nshould place data in, if the device has a filesystem."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'ram:\r\n  mount_point: ""\r\n\r\nnvme:\r\n  mount_point: "./"\n'})}),"\n",(0,i.jsx)(n.p,{children:'In the default config, for example, we look at ram and nvme. nvme is mounted\r\nin the current working directory. Hermes will create a file called\r\n"./slab_nvme". It will create equivalent files for hdd, ssd, and pfs.'}),"\n",(0,i.jsx)(n.p,{children:'For ram, we set the mount point to "". This indicates that the device\r\nhas no mount point.'}),"\n",(0,i.jsx)(n.h3,{id:"capacity",children:(0,i.jsx)(n.code,{children:"capacity"})}),"\n",(0,i.jsx)(n.p,{children:'This variable implies the amount of capacity to use for buffering.\r\nThis parameter is a "size variable", which supports various suffixes:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"capacity: 100    # 100 bytes\r\ncapacity: 100k   # 100 KB\r\ncapacity: 100kb  # 100 KB\r\ncapacity: 100KB  # 100 KB\r\ncapacity: 100m   # 100 MB\r\ncapacity: 100mb  # 100 MB\r\ncapacity: 100MB  # 100 MB\r\ncapacity: 100g   # 100 GB\r\ncapacity: 100gb  # 100 GB\r\ncapacity: 100GB  # 100 GB\r\ncapacity: 100T   # 100 TB\r\ncapacity: 100tb  # 100 TB\r\ncapacity: 100TB  # 100 TB\n"})}),"\n",(0,i.jsx)(n.p,{children:"There cannot be spaces between the number and the suffix. For example,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"capacity: 100 tb #NOT VALID\n"})}),"\n",(0,i.jsx)(n.h3,{id:"block_size",children:(0,i.jsx)(n.code,{children:"block_size"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"block_size: 64KB\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is the amount of I/O that the physical block device supports.\r\nRAM, for example, generally sees data in units of 4KB because this is\r\nthe page size of the system. HDDs, NVMes, and SSDs generally have block\r\nsizes of 4KB as well. Generally, this parameter doesn't need to be changed."}),"\n",(0,i.jsx)(n.h3,{id:"slab_sizes",children:(0,i.jsx)(n.code,{children:"slab_sizes"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"slab_sizes: [4KB, 16KB, 64KB, 1MB]\n"})}),"\n",(0,i.jsx)(n.p,{children:"This parameter is important to performance and resource utilization. The slab sizes dictates the I/O patterns produced in Hermes. When Hermes wants to\r\nwrite a 16MB blob, how does this blob actually get mapped to storage?\r\nIt gets fragmented into buffers, where the size of a buffer is equivalent\r\nto the best-fitting slab size."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A 16MB blob will be placed as 16 1MB buffers."}),"\n",(0,i.jsx)(n.li,{children:"A 6KB blob will be placed as 2 4KB buffers"}),"\n",(0,i.jsx)(n.li,{children:"A 33KB blob will be placed as a single 64KB buffer"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You should decide the buffer sizes based on the characteristics of your\r\nprogram. If unsure, the default slab sizes generally have worked well\r\nin the workloads we've tried. However, if you're finding Hermes runs\r\nout of space, this parameter may be the culprit."}),"\n",(0,i.jsxs)(n.h3,{id:"bandwidth-latency",children:[(0,i.jsx)(n.code,{children:"bandwidth"}),", ",(0,i.jsx)(n.code,{children:"latency"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"bandwidth: 1GBps\r\nlatency: 600us\n"})}),"\n",(0,i.jsx)(n.p,{children:"These are properties of the storage device which are used by data placement\r\nalgorithms to decide where to buffer data."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Acceptable suffixes for bandwidth (case doesn't matter):"}),"\n",(0,i.jsx)(n.li,{children:"Acceptable suffixes for latency (case doesn't matter): s, ms, us, ns."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"is_shared_device",children:(0,i.jsx)(n.code,{children:"is_shared_device"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"is_shared_device: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"This indicates whether or not the device provides a shared view of\r\ndata across nodes. For example, a PFS is a shared device, whereas\r\na single hard drive is not a shared device. This parameter is not\r\nreally used at this time, but you do need to define it."}),"\n",(0,i.jsx)(n.h3,{id:"borg_capacity_thresh",children:(0,i.jsx)(n.code,{children:"borg_capacity_thresh"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"borg_capacity_thresh: [0.0, 1.0]\n"})}),"\n",(0,i.jsx)(n.p,{children:"This parameter is used to trigger the buffer organizer (BORG). When a\r\ndevice is either really low on capacity (or high on capacity) BORG\r\nwill be triggered to shuffle content around."}),"\n",(0,i.jsx)(n.p,{children:"The first entry indicates how much space is too little space. In this\r\ncase if capacity falls below 0% (i.e., never), BORG will be triggered."}),"\n",(0,i.jsx)(n.p,{children:"The second entry indicates how mcuh space is too much space. In this\r\ncase if capacity grows beyone 100% (i.e., never), BORG will be triggered."}),"\n",(0,i.jsx)(n.p,{children:"In other words, this example, shows how to disable BORG."}),"\n",(0,i.jsx)(n.h2,{id:"buffer-organizer-borg",children:"Buffer Organizer (BORG)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"buffer_organizer:\r\n  num_threads: 1\r\n  flush_period: 1024\r\n  blob_reorg_period: 1024\r\n  recency_min: 0\r\n  recency_max: 60\r\n  freq_max: 15\r\n  freq_min: 0\n"})}),"\n",(0,i.jsx)(n.p,{children:'The BORG contains threads for reorganizing buffers in Hermes. The number\r\nof threads is indicated by "num_threads". The amount of time (in ms) to\r\nre-scan for blobs to reorganize is given by "flush_period".'}),"\n",(0,i.jsx)(n.p,{children:"receny_max is the amount of time (in seconds) when the score of a blob\r\nbecomes 0. recency_min is the amount of time for the blob to have a score\r\nof 1."}),"\n",(0,i.jsx)(n.p,{children:"freq_max is the minimum number of times a blob needs to be accessed in the\r\nflushing period for the score to be equal to one. freq_min is the maximum number of times a blob can be accessed before its score becomes larger than 0."}),"\n",(0,i.jsx)(n.p,{children:"The buffer organizer is only triggered when there are space constraints\r\nthat need to be met at this time. If you want the BORG extremely active,\r\nchange the borg_capacity_thresh variable."}),"\n",(0,i.jsx)(n.h2,{id:"prefetcher",children:"Prefetcher"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'prefetch:\r\n  enabled: false\r\n  apriori_schema_path: ""\r\n  epoch_ms: 50\r\n  is_mpi: false\n'})}),"\n",(0,i.jsx)(n.p,{children:"These parameters dictate properties of the prefetcher."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"enabled"}),": whether to turn prefetcher on"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"apriori_schema_path"}),": internally used by apriori prefetcher"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"epoch_ms"}),": how often to call the prefetcher thread"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"is_mpi"}),": whether the program is an MPI program so that clients\r\nsend their ranks to the daemon during prefetching."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For now, prefetching is only available to the native API, not the adapters."}),"\n",(0,i.jsx)(n.h2,{id:"traits",children:"Traits"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'traits:\r\n  - "hermes_posix_io_client"\r\n  - "hermes_stdio_io_client"\r\n  - "hermes_mpiio_io_client"\r\n  - "hermes_example_trait"\r\n  - "hermes_prefetcher_trait"\n'})}),"\n",(0,i.jsx)(n.p,{children:"The traits category lists the set of traits that Hermes searches for\r\nin the LD_LIBRARY_PATH and HERMES_TRAIT_PATH environment variables.\r\nIt will search each directory specified in those environment variables\r\nfor shared objects matching these names. For example, libhermes_posix_io_client.so will be searched for."}),"\n",(0,i.jsx)(n.p,{children:"Unless you are adding custom traits, this can be left as default."}),"\n",(0,i.jsx)(n.h2,{id:"shared-memory",children:"Shared Memory"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'shmem_name: "/hermes_shm_"\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is the name of the shared memory segment hermes will create. In order\r\nto make this unique across users (since shared memory can be used to\r\nshare memory across users), we append the name of the user to this key."}),"\n",(0,i.jsx)(n.p,{children:"This generally can be left as the default value."}),"\n",(0,i.jsx)(n.h2,{id:"system-view-state",children:"System View State"}),"\n",(0,i.jsx)(n.p,{children:"This parameter is unused for now, so no need to set it."}),"\n",(0,i.jsx)(n.h2,{id:"bounding-memory-utilization",children:"Bounding Memory Utilization"}),"\n",(0,i.jsx)(n.p,{children:'When running Hermes in a limited environment, ensuring that Hermes is not over-utilizing memory is necessary. It is possible to receive "Bus Error" messages due to the OS complaining that too many pages have been allocated. We find that this happens in Docker containers frequently since they have more limited memory constraints by default.'}),"\n",(0,i.jsx)(n.p,{children:"There are a few parameters which cause Hermes to utilize memory."}),"\n",(0,i.jsx)(n.h3,{id:"using-ram-as-a-buffering-device",children:"Using RAM as a buffering device"}),"\n",(0,i.jsx)(n.p,{children:"Hermes can be configured to use RAM as a buffering device."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'devices:\r\n  ram:\r\n    mount_point: ""\r\n    capacity: 1g\n'})}),"\n",(0,i.jsx)(n.p,{children:"In this case, Hermes will reserve up to 1GB of space to use for buffering."}),"\n",(0,i.jsx)(n.h3,{id:"hashtables-for-storing-blobs--buckets",children:"Hashtables for storing blobs + buckets"}),"\n",(0,i.jsx)(n.p,{children:"Hermes will reserve space for hashtables for blobs, buckets, and traits.\r\nThese parameters can be configured as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mdm:\r\n  # This represents the number of blobs and buckets before collisions start\r\n  # to happen in the unordered_map tables.\r\n  est_blob_count: 100000\r\n  est_bucket_count: 100000\r\n  est_num_traits: 256\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can set these to lower values if memory is over-utilized.\r\nThese values should be set to roughly the number of blobs and buckets the program creates to avoid collisions in the hashtables."}),"\n",(0,i.jsx)(n.h3,{id:"bounding-non-buffering-tasks",children:"Bounding Non-Buffering Tasks"}),"\n",(0,i.jsx)(n.p,{children:"You can set a maximum boundary on the amount of memory to use for non-buffering tasks, such as reserving space for the blob + bucket hashtables."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# Define the maximum amount of memory Hermes can use for non-buffering tasks.\r\n# This includes metadata management and memory allocations.\r\n# This memory will not be preallocated, so if you don't know, 0 indicates\r\n# any amount of memory\r\nmax_memory: 0g\n"})}),"\n",(0,i.jsx)(n.p,{children:"0g indicates infinity. Non-zero values can be set to put a boundary here."}),"\n",(0,i.jsx)(n.h3,{id:"calculating-total-amount-of-memory",children:"Calculating Total Amount of Memory"}),"\n",(0,i.jsx)(n.p,{children:"The total amount of memory Hermes can use before an hshm::Error or Bus Error is thrown can be calculated as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"RAM used for Buffering (3.1.7.1) + RAM used for Non-Buffering (3.1.7.3)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"client-configuration",children:"Client Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The default client configuration can be found\r\n",(0,i.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/blob/master/config/hermes_client_default.yaml",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The client configuration currently only contains parameters used by\r\nadapters."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'stop_daemon: false\r\npath_inclusions: ["/tmp/test_hermes"]\r\npath_exclusions: ["/"]\r\nfile_page_size: 1024KB\r\nbase_adapter_mode: kDefault\r\nflushing_mode: kAsync\r\nfile_adapter_configs:\r\n  - path: "/"\r\n    page_size: 1MB\r\n    mode: kDefault\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"stop_daemon"}),": stop the daemon when adapters exit. Generally, leave\r\nthis false and stop the daemon using finalize_daemon script. Will likely\r\nbe removed in the near future."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"file_page_size"}),": The page size used to fragment files into blobs in\r\nHermes."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"path-inclusion--exclusion",children:"Path Inclusion / Exclusion"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'path_inclusions: ["/tmp/test_hermes"]\r\npath_exclusions: ["/"]\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"path_inclusions"}),": Which paths to buffer? In this case, everything which\r\nis a child of /tmp/test_hermes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"path_exclusions"}),": Which paths to ignore? In this case, everything which\r\nis a child of the root directory. Technically everything on the system."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'We prioritize paths in inclusions and exclusions depending on how\r\nspecific the path is. In other words, we sort the paths by the length\r\nof the path. For example, in this case, /tmp/test_hermes will be included\r\nsince it has a longer path than "/". Everything other than /tmp/test_hermes\r\nwill be excluded.'}),"\n",(0,i.jsx)(n.h3,{id:"adapter-mode",children:"Adapter Mode"}),"\n",(0,i.jsx)(n.p,{children:"The adapter mode determines how Hermes buffers adapter data by default.\r\nThere are three adapter modes:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"kDefault: Hermes will buffer data and then flush to the PFS eventually"}),"\n",(0,i.jsx)(n.li,{children:"kScratch: Hermes will buffer data, but never flush"}),"\n",(0,i.jsx)(n.li,{children:"kBypass: Hermes will never buffer data, and always flush to the PFS"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"kDefault is the real use case of Hermes, the other two are for benchmarking\r\nand testing purposes."}),"\n",(0,i.jsx)(n.p,{children:"This parameter can also be set by an environment variable. The\r\nenvironment variable is prioritized."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"HERMES_ADAPTER_MODE=kDefault \\\r\n./myhermesapp\n"})}),"\n",(0,i.jsx)(n.h3,{id:"file-page-size",children:"File Page Size"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"file_page_size: 1024KB\n"})}),"\n",(0,i.jsx)(n.p,{children:"This parameter dictates how adapters convert files into blobs.\r\nBy default, files are divided into 1024KB (1MB) blobs. Setting\r\nthis parameter appropriately can have impacts on\r\nwrite and read amplification and metadata overhead."}),"\n",(0,i.jsx)(n.p,{children:"For workloads which perform 4KB reads to a large file, each read\r\nwill be amplified to 1MB unless the page size is reset."}),"\n",(0,i.jsx)(n.p,{children:"For the same workload, setting a file page size equal to 4KB may\r\nresult in a significant increase in metadata being stored in the\r\nmetadata manager."}),"\n",(0,i.jsx)(n.p,{children:"In other words, this parameter is worth tuning."}),"\n",(0,i.jsx)(n.p,{children:"This parameter can also be set using an environment variable. The\r\nenvironment variable is prioritized."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"HERMES_PAGE_SIZE=1024KB \\\r\n./myhermesapp\n"})}),"\n",(0,i.jsx)(n.h3,{id:"flushing-mode",children:"Flushing Mode"}),"\n",(0,i.jsx)(n.p,{children:"The flushing mode indicates how Hermes should flush data to the PFS.\r\nCurrently there are two modes provided:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"kAsync: Flush data asynchronously in a background thread"}),"\n",(0,i.jsx)(n.li,{children:"kSync: Flush data synchronously"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"kAsync is recommended. kSync is used only in unit tests since it has\r\nlow performance."}),"\n",(0,i.jsx)(n.h3,{id:"adapter-config",children:"Adapter Config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'file_adapter_configs:\r\n  - path: "/"\r\n    page_size: 1MB\r\n    mode: kDefault\n'})}),"\n",(0,i.jsx)(n.p,{children:"Contains file-specific overrides to the default adapter variables defined\r\nabove. You can modify the adapter mode (3.2.2) and file page size for each"}),"\n",(0,i.jsx)(n.h2,{id:"provided-configurations",children:"Provided Configurations"}),"\n",(0,i.jsx)(n.p,{children:"We also provide Hermes configurations we use with a few systems to which you\r\nmight have access:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/blob/master/test/data/ares.yaml",children:"Ares (IIT)"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/tree/master/test/data",children:"Frontera (TACC)"})," (Coming soon.)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bear in mind that a suitable Hermes configuration also depends on\r\napplications' I/O workload and not just the configuration of the\r\nunderlying machine."}),"\n",(0,i.jsx)(n.h2,{id:"how-to-avoid-repeating-the-default-configurations",children:"How To Avoid Repeating the Default Configurations"}),"\n",(0,i.jsx)(n.p,{children:"Many parameters in Hermes can be left as default. Any parameters which\r\nyou would like to leave as default can be removed from your configuration\r\nfile completely. Hermes will fill in missing values based on the values\r\nin our default configurations."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var i=r(7294);const s={},a=i.createContext(s);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);