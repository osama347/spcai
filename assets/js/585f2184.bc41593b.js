"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[1037],{1343:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(5893),t=n(1151);const o={title:"User Guide"},l="Ares User Guide",r={id:"ares/ares-user-guide",title:"User Guide",description:"TL;DR:",source:"@site/docs/06-ares/01-ares-user-guide.mdx",sourceDirName:"06-ares",slug:"/ares/ares-user-guide",permalink:"/spcai/docs/ares/ares-user-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"User Guide"},sidebar:"tutorialSidebar",previous:{title:"Ares Research Cluster",permalink:"/spcai/docs/category/ares-research-cluster"},next:{title:"FAQ",permalink:"/spcai/docs/ares/faq"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Resource Information",id:"resource-information",level:2},{value:"Node Roles",id:"node-roles",level:3},{value:"Master/login node",id:"masterlogin-node",level:3},{value:"Compute nodes",id:"compute-nodes",level:3},{value:"Details",id:"details",level:3},{value:"Accessing the Cluster",id:"accessing-the-cluster",level:2},{value:"SSH Key Authentication",id:"ssh-key-authentication",level:3},{value:"Considerations",id:"considerations",level:3},{value:"Node allocation and reservation",id:"node-allocation-and-reservation",level:2},{value:"Allocate nodes interactively",id:"allocate-nodes-interactively",level:3},{value:"Submitting batch jobs",id:"submitting-batch-jobs",level:3},{value:"Example <code>sbatch</code> snippet",id:"example-sbatch-snippet",level:3},{value:"Monitoring Jobs with <code>squeue</code>",id:"monitoring-jobs-with-squeue",level:3},{value:"Misc. slurm commands",id:"misc-slurm-commands",level:3},{value:"Allocation Limitations",id:"allocation-limitations",level:3},{value:"Allocation Queue Priority",id:"allocation-queue-priority",level:3},{value:"Module Management with Lmod",id:"module-management-with-lmod",level:2},{value:"Setting Up Custom Toolchains with Spack:",id:"setting-up-custom-toolchains-with-spack",level:2},{value:"Escalated privileges",id:"escalated-privileges",level:2},{value:"Clearing the storage cache",id:"clearing-the-storage-cache",level:3},{value:"First-Timers Section:",id:"first-timers-section",level:2},{value:"More Questions?",id:"more-questions",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"ares-user-guide",children:"Ares User Guide"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"TL;DR"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Access the cluster via SSH using your username and SSH key.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"SSH key authentication is required for logins."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Submit batch jobs with ",(0,i.jsx)(s.code,{children:"sbatch"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Manage software modules with Lmod using ",(0,i.jsx)(s.code,{children:"module load"})," and ",(0,i.jsx)(s.code,{children:"module avail"}),".","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Use Spack for setting up custom toolchains."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"sudo access is limited and granted for specific purposes."}),"\n",(0,i.jsxs)(s.li,{children:["Do ",(0,i.jsx)(s.strong,{children:"NOT"})," reach out to the admin without reading the rest of the guide."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(s.p,{children:["Welcome to the Ares cluster user manual. Ares is a high-performance computing (HPC) cluster running on Ubuntu 22.04. This guide will provide you with the necessary information to effectively utilize the resources available on the cluster.\r\nYour system administrator can be reached via ",(0,i.jsx)(s.code,{children:"grc<plus>aresadmin<at>iit<dot>edu"}),", and someone will get back to you."]}),"\n",(0,i.jsx)(s.h2,{id:"resource-information",children:"Resource Information"}),"\n",(0,i.jsx)(s.p,{children:"The Ares cluster is composed of one rack of compute nodes. All the nodes share a 48TB RAID-5 storage pool comprised of eight 8TB 7200K SAS hard drives. Nodes in each rack are connected with\r\n40Gbps Ethernet with RoCE support. The compute rack consists of one ThinkSystem SR650 master node, 32 ThinkSystem SR630 compute nodes. In total, the compute rack has 66 2.2GHz\r\nXeon Scalable Silver 4114 processors with boosted frequency up to 3.0GHz, which leads to 660 cores and 1320 threads.\r\nThe master node and the compute nodes are equipped with 96GB and 48GB DDR4-2400 memory, 128GB and 32GB M.2 SSD for\r\nOS, respectively. 24 compute nodes are equipped with one 250GB M.2 Samsung 960 Evo SSD. The other eight are equipped\r\nwith one 256 GB M.2 Toshiba RD400 SSD."}),"\n",(0,i.jsx)(s.h3,{id:"node-roles",children:"Node Roles"}),"\n",(0,i.jsx)(s.p,{children:"The Head/Master node is for login and light tasks, such as:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"editing files"}),"\n",(0,i.jsx)(s.li,{children:"scheduling tasks/jobs on slurm"}),"\n",(0,i.jsx)(s.li,{children:"filesystem traversal"}),"\n",(0,i.jsx)(s.li,{children:"downloading files (NOT multiple TBs of data)"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"If in doubt reach out to the system admin"}),"\n",(0,i.jsx)(s.p,{children:"The comp/compute nodes are for heavy computation and I/O tasks, including compilation."}),"\n",(0,i.jsx)(s.h3,{id:"masterlogin-node",children:"Master/login node"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Host: ares.cs.iit.edu"}),"\n",(0,i.jsx)(s.li,{children:"IP: 216.47.152.168"}),"\n",(0,i.jsx)(s.li,{children:"Protocol: SSH"}),"\n",(0,i.jsx)(s.li,{children:"Port: 22"}),"\n",(0,i.jsxs)(s.li,{children:["Shared global home directory: ",(0,i.jsx)(s.code,{children:"/mnt/common/$USER"})," or ",(0,i.jsx)(s.code,{children:"/home/$USER"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"compute-nodes",children:"Compute nodes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Host (low-speed Ethernet): ares-comp-[01-32]"}),"\n",(0,i.jsx)(s.li,{children:"Host (high-speed Ethernet): ares-comp-[01-32]-40g"}),"\n",(0,i.jsxs)(s.li,{children:["Local NVMe SSD: /mnt/nvme/",(0,i.jsx)(s.code,{children:"$USER"})]}),"\n",(0,i.jsxs)(s.li,{children:["Local SATA SSD: /mnt/ssd/",(0,i.jsx)(s.code,{children:"$USER"})]}),"\n",(0,i.jsxs)(s.li,{children:["Local SATA HDD: /mnt/hdd/",(0,i.jsx)(s.code,{children:"$USER"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"details",children:"Details"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"Component"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Product"}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:"Capacity"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"CPU"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Intel(R) Xeon(R) Silver 4114 CPU @ 2.20GHz"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"800MHz - 3GHz"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Memory"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"System Memory"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"48GiB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"NVMe"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"ares-comp-[01-08]: Samsung 960 Evo 250GB."}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"256GB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:'"'}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"ares-comp-[09-32]: Toshiba OCZ RD400 256GB"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"256GB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"SATA SSD"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Samsung 860 Evo"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"512GB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"SATA HDD"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Seagate LM049-2GH172"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"1TB"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"Ethernet"}),(0,i.jsx)(s.td,{style:{textAlign:"left"}}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"10 Gigagbit"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"RoCE/RDMA"}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"Mellanox ConnectX-4 Lx 1x40GbE QSFP."}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"40 Gigabit"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"accessing-the-cluster",children:"Accessing the Cluster"}),"\n",(0,i.jsxs)(s.p,{children:["To access the machines you need to be on the IIT network, either on-site or via the ",(0,i.jsx)(s.a,{href:"https://www.iit.edu/ots/access/vpn-remote-access",children:"IIT-VPN"}),". Then, you can SSH to the master/login node using your IIT assigned username and the SSH key you provided to the system admin. If you encounter any issues with access, please contact the system administrator."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh username@ares.cs.iit.edu\n"})}),"\n",(0,i.jsx)(s.h3,{id:"ssh-key-authentication",children:"SSH Key Authentication"}),"\n",(0,i.jsx)(s.p,{children:"GRC only allows SSH based logins. Ares enforces SSH key authentication for logins. Password authentication is disabled for security reasons. Make sure you have configured SSH keys for your account before attempting to log in."}),"\n",(0,i.jsx)(s.p,{children:"To make an SSH key:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Run ",(0,i.jsx)(s.code,{children:"ssh-keygen"}),", follow the prompts."]}),"\n",(0,i.jsxs)(s.li,{children:["Send the ",(0,i.jsx)(s.em,{children:"Public key"})," (the file will end with ",(0,i.jsx)(s.code,{children:".pub"}),") to the Ares System admin"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["More information can be found ",(0,i.jsx)(s.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server",children:"here @ DigitalOcean"})]}),"\n",(0,i.jsx)(s.h3,{id:"considerations",children:"Considerations"}),"\n",(0,i.jsxs)(s.p,{children:["Add the following snippet to the ",(0,i.jsx)(s.code,{children:"~/.ssh/config"})," file on your local machine"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-config",children:"Host ares\r\n        HostName ares.cs.iit.edu\r\n        User username\r\n        ControlMaster auto\r\n        IdentityFile path_to_id_file\r\n        Compression yes\r\n        Port 22\n"})}),"\n",(0,i.jsx)(s.p,{children:"After which you can login using"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh ares\n"})}),"\n",(0,i.jsx)(s.h2,{id:"node-allocation-and-reservation",children:"Node allocation and reservation"}),"\n",(0,i.jsx)(s.p,{children:"Slurm is used for job scheduling and resource management on Ares. Below are examples of how to use Slurm commands:"}),"\n",(0,i.jsx)(s.h3,{id:"allocate-nodes-interactively",children:"Allocate nodes interactively"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Allocate nodes: ",(0,i.jsx)(s.code,{children:"salloc"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Use ",(0,i.jsx)(s.code,{children:"-N <number of nodes>"})," to specify the number of nodes"]}),"\n",(0,i.jsxs)(s.li,{children:["Use the ",(0,i.jsx)(s.code,{children:"--exclusive"})," flag if you would not like you nodes to be colocated."]}),"\n",(0,i.jsxs)(s.li,{children:["Use the ",(0,i.jsx)(s.code,{children:"-w <comma separated list of nodes>"})," to specify the specific nodes you would like to reserve."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"submitting-batch-jobs",children:"Submitting batch jobs"}),"\n",(0,i.jsxs)(s.p,{children:["Submit a batch job to the cluster with a job script named ",(0,i.jsx)(s.code,{children:"job_script.sh"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sbatch job_script.sh\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"example-sbatch-snippet",children:["Example ",(0,i.jsx)(s.code,{children:"sbatch"})," snippet"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"#!/bin/bash\r\n#SBATCH --nodes=1\r\n#SBATCH --time=4:00:00\r\n#SBATCH --job-name=MyJobName\r\n<commands to execute>\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"monitoring-jobs-with-squeue",children:["Monitoring Jobs with ",(0,i.jsx)(s.code,{children:"squeue"})]}),"\n",(0,i.jsx)(s.p,{children:"Check the status of your jobs in the queue:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"squeue -u $USER\n"})}),"\n",(0,i.jsx)(s.h3,{id:"misc-slurm-commands",children:"Misc. slurm commands"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Check node status: ",(0,i.jsx)(s.code,{children:"sinfo"})]}),"\n",(0,i.jsxs)(s.li,{children:["Check job queue: ",(0,i.jsx)(s.code,{children:"squeue"})]}),"\n",(0,i.jsxs)(s.li,{children:["Cancel allocated job: ",(0,i.jsx)(s.code,{children:"scancel JOBID"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"allocation-limitations",children:"Allocation Limitations"}),"\n",(0,i.jsx)(s.p,{children:"The current wall time limit for a job is 48 hours. Contact the sysadmin if you need to extend a running job."}),"\n",(0,i.jsx)(s.h3,{id:"allocation-queue-priority",children:"Allocation Queue Priority"}),"\n",(0,i.jsx)(s.p,{children:"Ares follows a First-Come-First-Served (FCFS) policy. You cannot change job priority but can negotiate with users ahead of you."}),"\n",(0,i.jsx)(s.h2,{id:"module-management-with-lmod",children:"Module Management with Lmod"}),"\n",(0,i.jsx)(s.p,{children:"Lmod is used on Ares to manage software modules. It provides an easy way to load, unload, and switch between different versions of software packages."}),"\n",(0,i.jsx)(s.p,{children:"To list available modules:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"module avail\n"})}),"\n",(0,i.jsx)(s.p,{children:"To load a module:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"module load <module_name>\n"})}),"\n",(0,i.jsx)(s.h2,{id:"setting-up-custom-toolchains-with-spack",children:"Setting Up Custom Toolchains with Spack:"}),"\n",(0,i.jsx)(s.p,{children:"Users have the option to set up custom toolchains using Spack. Spack is a flexible package manager that simplifies the process of installing and managing software packages."}),"\n",(0,i.jsx)(s.p,{children:"Refer to the Spack documentation for detailed instructions on setting up custom toolchains."}),"\n",(0,i.jsx)(s.h2,{id:"escalated-privileges",children:"Escalated privileges"}),"\n",(0,i.jsxs)(s.p,{children:["Sudo access on Ares is limited to specific purposes such as clearing caches, mounting OrangeFS, or other restricted administrative tasks. Users are not granted broad sudo privileges.\r\nContact the system administrator if you require sudo access for a specific task. Additionally, please note all topics in this subsection require ",(0,i.jsx)(s.code,{children:"sudo"})," permissions."]}),"\n",(0,i.jsxs)(s.p,{children:["Services requiring ",(0,i.jsx)(s.code,{children:"sudo"})," permissions:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"clearing storage cache"}),"\n",(0,i.jsx)(s.li,{children:"deploying node local orangefs deployments"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"clearing-the-storage-cache",children:"Clearing the storage cache"}),"\n",(0,i.jsxs)(s.p,{children:["Load the appropriate module using ",(0,i.jsx)(s.code,{children:"module load user-scripts"})," to bring use the ",(0,i.jsx)(s.code,{children:"sudo drop_caches"})," script, or you can just directly run ",(0,i.jsx)(s.code,{children:"sudo /mnt/repo/software/user-scripts/drop_caches"})]}),"\n",(0,i.jsx)(s.h2,{id:"first-timers-section",children:"First-Timers Section:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"File Transfer: Use SCP or SFTP for transferring files to and from the cluster."}),"\n",(0,i.jsx)(s.li,{children:"Data Storage: Utilize designated storage directories for your data. Avoid storing large files in your home directory."}),"\n",(0,i.jsx)(s.li,{children:"Documentation: Refer to online documentation and resources for additional assistance."}),"\n",(0,i.jsx)(s.li,{children:"Community Support: Join user forums or mailing lists for community support and collaboration."}),"\n",(0,i.jsx)(s.li,{children:"Job Monitoring: Regularly check the status of your jobs using squeue to ensure efficient resource utilization."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"more-questions",children:"More Questions?"}),"\n",(0,i.jsxs)(s.p,{children:["Go to our ",(0,i.jsx)(s.a,{href:"./faq",children:"FAQ"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var i=n(7294);const t={},o=i.createContext(t);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);