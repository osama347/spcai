"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[7804],{8607:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var c=o(5893),s=o(1151);const i={},l="Program Execution",r={id:"jarvis/jarvis-util/program-execution",title:"Program Execution",description:"Exec is used to execute a binary program as a subprocess in Python. Exec can be used for local, remote, or parallel execution of code. Exec is currently a wrapper around the following libraries:",source:"@site/docs/05-jarvis/01-jarvis-util/02-program-execution.md",sourceDirName:"05-jarvis/01-jarvis-util",slug:"/jarvis/jarvis-util/program-execution",permalink:"/spcai/docs/jarvis/jarvis-util/program-execution",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/spcai/docs/jarvis/jarvis-util/index"},next:{title:"Built-in Wrappers",permalink:"/spcai/docs/jarvis/jarvis-util/builtin-wrappers"}},t={},a=[{value:"<code>ExecInfo</code>",id:"execinfo",level:2},{value:"Specifying execution method (e.g., SSH vs MPI)",id:"specifying-execution-method-eg-ssh-vs-mpi",level:3},{value:"Managing output from commands",id:"managing-output-from-commands",level:3},{value:"Asynchronous execution",id:"asynchronous-execution",level:3},{value:"<code>LocalExec</code>",id:"localexec",level:2},{value:"<code>SshExec</code>",id:"sshexec",level:2},{value:"<code>PsshExec</code>",id:"psshexec",level:2},{value:"<code>MpiExec</code>",id:"mpiexec",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"program-execution",children:"Program Execution"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Exec"})," is used to execute a binary program as a subprocess in Python. ",(0,c.jsx)(n.code,{children:"Exec"})," can be used for local, remote, or parallel execution of code. Exec is currently a wrapper around the following libraries:"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"Subprocess: executes a program locally on a machine. We use shell=True here. The intention is to be equivalent to a bash script."}),"\n",(0,c.jsx)(n.li,{children:'SSH: executes a program remotely using SSH. This has only been tested on Linux. It is equivalent to executing "ssh" in the terminal.'}),"\n",(0,c.jsx)(n.li,{children:"Parallel SSH (PSSH): executes a program on multiple remote hosts. Relies upon the SSH module."}),"\n",(0,c.jsx)(n.li,{children:"Message Passing Interface (MPI): executes a program in parallel using MPI. Only tested over MPICH at this time."}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Exec"})," has a simple syntax. It takes as input a command (cmd) and how the command should be executed (",(0,c.jsx)(n.code,{children:"exec_info"}),"). For example, ",(0,c.jsx)(n.code,{children:"exec_info"})," can be used to represent executing the command in parallel using MPI or locally on a machine using subprocess."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nExec(cmd, exec_info)\n"})}),"\n",(0,c.jsx)(n.p,{children:'Exec can be called with only specifying "cmd". In this case, the command will be executed locally. It\'s output will be printed to the terminal.'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nExec(cmd)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"execinfo",children:(0,c.jsx)(n.code,{children:"ExecInfo"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"ExecInfo"})," stores all information which may be needed to execute a command with a particular protocol. This includes information such as the location of private/public keys, hostfiles, environment variables. ",(0,c.jsx)(n.code,{children:"ExecInfo"})," also includes parameters for collecting output from commands."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"ExecInfo(exec_type=ExecType.LOCAL, nprocs=None, ppn=None,\r\n         user=None, pkey=None, port=None, hostfile=None, env=None,\r\n         sleep_ms=0, sudo=False, cwd=None, hosts=None,\r\n         collect_output=None, pipe_stdout=None, pipe_stderr=None,\r\n         hide_output=None, exec_async=False, stdin=None)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"specifying-execution-method-eg-ssh-vs-mpi",children:"Specifying execution method (e.g., SSH vs MPI)"}),"\n",(0,c.jsx)(n.p,{children:"There are many ways to execute a command: Subprocess, SSH, etc. To specify this, there is an enum with all currently supported methods. The supported methods are:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ExecType.LOCAL"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ExecType.SSH"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ExecType.PSSH"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"ExecType.MPI"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Setting ",(0,c.jsx)(n.code,{children:"exec_type"})," will spawn the command using the particular approach. By default, ",(0,c.jsx)(n.code,{children:"exec_type"})," is ",(0,c.jsx)(n.code,{children:"ExecType.LOCAL"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"managing-output-from-commands",children:"Managing output from commands"}),"\n",(0,c.jsx)(n.p,{children:"ExecInfo has three parameters for collecting output from commands:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collect_output"}),": Whether to store the output from the command in a buffer in Python. Will impact memory utilization if the command has large output. This is ",(0,c.jsx)(n.code,{children:"False"})," by default."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"pipe_stdout"}),": Store stdout in a file. By default, this is ",(0,c.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"pipe_stderr"}),": Store stderr in a file. By default, this is ",(0,c.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"hide_output"}),": Don't print output."]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Unlike typical subprocess, you can perform any combination of these. Output can be collected at the same time it's being printed. This is particularly useful if you have a long-running process you want to collect output from AND ensure is still progressing. This is accomplished by spawning two threads: one for collecting stderr, and another for collecting stdout."}),"\n",(0,c.jsx)(n.h3,{id:"asynchronous-execution",children:"Asynchronous execution"}),"\n",(0,c.jsxs)(n.p,{children:["ExecInfo enables the ability to execute a command asynchronously. This is particularly useful for running a daemon. For example, deploying a storage system requires the storage system to run as a service. This can cause the program to block forever unless asynchronous execution is enabled. Async execution is specified using the ",(0,c.jsx)(n.code,{children:"exec_async=True"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"localexec",children:(0,c.jsx)(n.code,{children:"LocalExec"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.local_exec import LocalExecInfo\n"})}),"\n",(0,c.jsx)(n.p,{children:"The simplest way to execute a program locally is as follows:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nnode = Exec('echo hello')\n"})}),"\n",(0,c.jsx)(n.p,{children:'This will print "hello" to the console.'}),"\n",(0,c.jsxs)(n.p,{children:["However, if more control is needed, a ",(0,c.jsx)(n.code,{children:"LocalExecInfo"})," contains many helpful paramters.\r\nThe following demonstrates various examples of outputs:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.local_exec import LocalExecInfo\r\n\r\n# Will ONLY print to the terminal\r\nnode = Exec('echo hello', LocalExecInfo(collect_output=False))\r\n# Will collect AND print to the terminal\r\nnode = Exec('echo hello', LocalExecInfo(collect_output=True))\r\n# Will collect BUT NOT print to the terminal\r\nnode = Exec('echo hello', LocalExecInfo(collect_output=True,\r\n                                        hide_output=True))\r\n# Will collect, pipe to file, and print to terminal\r\nnode = Exec('echo hello', LocalExecInfo(collect_output=True,\r\n                                        pipe_stdout='/tmp/stdout.txt',\r\n                                        pipe_stderr='/tmp/stderr.txt'))\n"})}),"\n",(0,c.jsx)(n.p,{children:"To execute a program asynchronously, one can do:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.local_exec import LocalExecInfo\r\n\r\nnode = Exec('echo hello', LocalExecInfo(exec_async=True))\r\nnode.wait()\n"})}),"\n",(0,c.jsx)(n.h2,{id:"sshexec",children:(0,c.jsx)(n.code,{children:"SshExec"})}),"\n",(0,c.jsx)(n.p,{children:'The following code will execute the "hostname" command on the local host using SSH.'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.ssh_exec import SshExecInfo\r\n\r\nnode = Exec('hostname', SshExecInfo(hosts='localhost'))\n"})}),"\n",(0,c.jsx)(n.h2,{id:"psshexec",children:(0,c.jsx)(n.code,{children:"PsshExec"})}),"\n",(0,c.jsx)(n.p,{children:'The following code will execute the "hostname" command on all machines in the hostfile'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.pssh_exec import PsshExecInfo\r\n\r\nnode = Exec('hostname', PsshExecInfo(hostfile=\"/tmp/hostfile.txt\"))\n"})}),"\n",(0,c.jsx)(n.h2,{id:"mpiexec",children:(0,c.jsx)(n.code,{children:"MpiExec"})}),"\n",(0,c.jsx)(n.p,{children:'The following code will execute the "hostname" command on the local machine 24 times using MPI.'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.mpi_exec import MpiExecInfo\r\n\r\nnode = Exec('hostname', MpiExecInfo(hostfile=None,\r\n                                    nprocs=24,\r\n                                    ppn=None))\n"})}),"\n",(0,c.jsx)(n.p,{children:'The following code will execute the "hostname" command on 4 nodes (specified in hostfile) using MPI.\r\n"ppn" stands for processes per node.'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from jarvis_util.shell.exec import Exec\r\nfrom jarvis_util.shell.mpi_exec import MpiExecInfo\r\n\r\nnode = Exec('hostname', MpiExecInfo(hostfile=\"/tmp/hostfile.txt\",\r\n                                    nprocs=4,\r\n                                    ppn=1))\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>l});var c=o(7294);const s={},i=c.createContext(s);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);