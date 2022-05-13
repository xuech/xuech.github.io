(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{519:function(e,s,o){e.exports=o.p+"assets/img/docker01.336a8af9.png"},520:function(e,s,o){e.exports=o.p+"assets/img/docker02.637ca0e9.png"},521:function(e,s,o){e.exports=o.p+"assets/img/docker03.48d23a4d.png"},522:function(e,s,o){e.exports=o.p+"assets/img/docker04.e6043df9.png"},523:function(e,s,o){e.exports=o.p+"assets/img/docker05.6489f4ca.png"},524:function(e,s,o){e.exports=o.p+"assets/img/docker06.9ab66848.png"},525:function(e,s,o){e.exports=o.p+"assets/img/docker07.b84bd7b4.png"},526:function(e,s,o){e.exports=o.p+"assets/img/docker08.5824c7c4.png"},527:function(e,s,o){e.exports=o.p+"assets/img/docker09.11c0f7a4.png"},528:function(e,s,o){e.exports=o.p+"assets/img/docker10.432a888e.png"},529:function(e,s,o){e.exports=o.p+"assets/img/docker11.98ef3b54.png"},586:function(e,s,o){"use strict";o.r(s);var r=o(6),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"一、docker三要素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、docker三要素"}},[e._v("#")]),e._v(" 一、Docker三要素")]),e._v(" "),r("ul",[r("li",[e._v("镜像（Image）\n"),r("ul",[r("li",[e._v("可以创建多个Docker容器")]),e._v(" "),r("li",[e._v("生成容器的实例，本身也是一个文件")])])]),e._v(" "),r("li",[e._v("容器（Container）\n"),r("ul",[r("li",[e._v("镜像创建出来的运行实例")]),e._v(" "),r("li",[e._v("它可以被启动、开始、停止、删除")]),e._v(" "),r("li",[e._v("容器间相互隔离")])])]),e._v(" "),r("li",[e._v("仓库（Repository）\n"),r("ul",[r("li",[e._v("集中存放镜像文件的场所")]),e._v(" "),r("li",[e._v("最大的公开仓库是 "),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"二、docker安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、docker安装"}},[e._v("#")]),e._v(" 二、Docker安装")]),e._v(" "),r("ul",[r("li",[e._v("1.1、安装Docker的依赖库\n"),r("code",[e._v("yum install -y yum-utils device-mapper-persistent-data lvm2")])])]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("1.2、设置Docker的容器源\n"),r("code",[e._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")])])]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("1.3、安装Docker CE\n"),r("code",[e._v("yum makecache fast")]),e._v(" "),r("code",[e._v("yum -y install docker-ce")])])]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("1.4、启动Docker服务并设为开机自启动\n"),r("code",[e._v("systemctl start docker")]),e._v(" "),r("code",[e._v("systemctl enable docker")])])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"三、docker操作命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、docker操作命令"}},[e._v("#")]),e._v(" 三、Docker操作命令")]),e._v(" "),r("ul",[r("li",[e._v("容器操作")])]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##新建并启动容器")]),e._v("\ndocker run -i -t --name yourname\n参数：-i:以交互模式运行容器\n    -t:为容器重新分配一个伪输入终端\n    --name:为容器指定一个名称\n\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##查看正在运行的容器")]),e._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##查看正在运行的容器的ID")]),e._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" -q\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##启动容器")]),e._v("\ndocker start redis\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##重启容器")]),e._v("\ndocker restart redis\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##删除一个已停止的容器")]),e._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" redis\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##删除一个运行中的容器")]),e._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -f redis\n\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##进入容器")]),e._v("\ndocker "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis /bin/bash\n\n")])])]),r("ul",[r("li",[e._v("镜像操作")])]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##列出本地images")]),e._v("\ndocker images\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##下载Redis官方最新镜像，相当于：docker pull redis:latest")]),e._v("\ndocker pull redis\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##单个镜像删除，相当于：docker rmi redis:latest")]),e._v("\ndocker rmi redis\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("##强制删除(针对基于镜像有运行的容器进程)")]),e._v("\ndocker rmi -f redis\n\n")])])]),r("h2",{attrs:{id:"四、通过image文件-hello-world-熟悉下docker的操作命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、通过image文件-hello-world-熟悉下docker的操作命令"}},[e._v("#")]),e._v(' 四、通过image文件"hello world"熟悉下docker的操作命令')]),e._v(" "),r("ul",[r("li",[r("p",[e._v("将 image 文件从仓库抓取到本地")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker image pull hello-world")])]),e._v(" "),r("li",[r("code",[e._v("docker image ls")]),e._v(" "),r("img",{attrs:{src:o(519),alt:"docker01"}})])])]),e._v(" "),r("li",[r("p",[e._v("运行这个 image 文件")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker container run hello-word")]),e._v(" "),r("img",{attrs:{src:o(520),alt:"docker02"}})])])]),e._v(" "),r("li",[r("p",[e._v("停止并删除这个镜像")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("删除镜像之前一定要先停止或删除该镜像所依赖的容器")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker ps -a")]),e._v(" "),r("img",{attrs:{src:o(521),alt:"docker03"}})]),e._v(" "),r("li",[r("code",[e._v("docker stop [containerID]")])]),e._v(" "),r("li",[r("code",[e._v("docker rm [containerID]")]),e._v(" "),r("img",{attrs:{src:o(522),alt:"docker04"}})])])]),e._v(" "),r("li",[r("p",[e._v("删除完容器后开始删除镜像")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("docker images")]),e._v(" "),r("img",{attrs:{src:o(523),alt:"docker05"}})]),e._v(" "),r("li",[r("code",[e._v("docker rmi [imageID]")])])])])])])]),e._v(" "),r("h2",{attrs:{id:"五、-docker安装jenkins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、-docker安装jenkins"}},[e._v("#")]),e._v(" 五、 Docker安装jenkins")]),e._v(" "),r("h3",{attrs:{id:"_1、创建docker-compose文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建docker-compose文件"}},[e._v("#")]),e._v(" 1、创建docker-compose文件")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("version: "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3.7'")]),e._v("\nservices:\n    jenkins:\n        image: jenkins/jenkins:lts\n        container_name: jenkins\n        environment:\n            - "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("TZ")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Asia/Shanghai\n        volumes:\n            - /home/jenkins_xch:/var/jenkins_home\n            - /var/run/docker.sock:/var/run/docker.sock\n            - /usr/bin/docker:/usr/bin/docker\n            - /usr/lib/x86_64-linux-gnu/libltdl.so.7:/usr/lib/x86_64-linux-gnu/libltdl.so.7\n        ports:\n            - "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"8762:8080"')]),e._v("\n            - "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"50000:50000"')]),e._v("\n        privileged: "),r("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n        user: root\n        restart: always\n        container_name: jenkins_xch\n")])])]),r("p",[r("img",{attrs:{src:o(524),alt:"docker06"}})]),e._v(" "),r("h3",{attrs:{id:"_2、运行docker命令创建docker容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、运行docker命令创建docker容器"}},[e._v("#")]),e._v(" 2、运行docker命令创建docker容器")]),e._v(" "),r("p",[r("code",[e._v("docker-compose up -d")]),e._v(" "),r("img",{attrs:{src:o(525),alt:"docker07"}}),e._v("\n然后"),r("code",[e._v("http://114.215.182.183:8762/")]),e._v("访问")]),e._v(" "),r("p",[e._v("初始化时把密码填写好\n"),r("img",{attrs:{src:o(526),alt:"docker08"}})]),e._v(" "),r("p",[e._v("选择推荐安装后等待jenkins安装完成。")]),e._v(" "),r("h2",{attrs:{id:"六、docker-compose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、docker-compose"}},[e._v("#")]),e._v(" 六、Docker-compose")]),e._v(" "),r("blockquote",[r("p",[e._v("将多个docker容器服务整合起来的命令行工具\n比如之前运行一个镜像需要添加大量的参数，现在可以把参数编写进"),r("code",[e._v("docker-compose")]),e._v("\n然后通过"),r("code",[e._v("docker-compose.yml")]),e._v("文件去维护即可")])]),e._v(" "),r("h3",{attrs:{id:"_1、安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装"}},[e._v("#")]),e._v(" 1、安装")]),e._v(" "),r("ul",[r("li",[e._v("下载 "),r("code",[e._v("docker-compose")]),e._v(" 的安装脚本\n"),r("code",[e._v("curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-")]),e._v("uname -s"),r("code",[e._v("-")]),e._v("uname -m"),r("code",[e._v("-o /usr/local/bin/docker-compose")])]),e._v(" "),r("li",[e._v("为脚本添加执行权限\n"),r("code",[e._v("chmod +x /usr/local/bin/docker-compose")])]),e._v(" "),r("li",[e._v("执行脚本\n"),r("code",[e._v("sh /usr/local/bin/docker-compose")])]),e._v(" "),r("li",[e._v("查看是否安装成功\n"),r("code",[e._v("docker-compose --version")])])]),e._v(" "),r("h3",{attrs:{id:"_2、卸载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、卸载"}},[e._v("#")]),e._v(" 2、卸载")]),e._v(" "),r("p",[r("code",[e._v("rm /usr/local/bin/docker-compose")])]),e._v(" "),r("h3",{attrs:{id:"_3、docker-compose-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、docker-compose-yml"}},[e._v("#")]),e._v(" 3、docker-compose.yml")]),e._v(" "),r("blockquote",[r("p",[r("code",[e._v("docker-compose.yml")]),e._v(" 有点类似 "),r("code",[e._v("package.json")]),e._v("，把需要的依赖写在该文件中，然后通过命令行直接安装对应依赖\nyml文件以key: value方式指定配置，多个配置信息以换行+锁进来区分\n不要在文件中使用制表符\n我们以"),r("strong",[e._v("mongodb")]),e._v("为例：")])]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("version: "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3.1'")]),e._v(" \nservices:                       "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#该集合下包含的所有服务")]),e._v("\n  mongodb:                      "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#服务的名称")]),e._v("\n    image: mongo                "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#表示从官方维护的 mongo 镜像构建我们的容器")]),e._v("\n    restart: always             "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#总是开机自启动")]),e._v("\n    volumes:                    "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#数据持久化")]),e._v("\n      - /home/mongotest:/data/db\n    ports:\n      - "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("27017")]),e._v(":27017             "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#指定端口号影射")]),e._v("\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("123456")]),e._v("\n\n")])])]),r("h3",{attrs:{id:"_4、使用docker-compose命令管理容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用docker-compose命令管理容器"}},[e._v("#")]),e._v(" 4、使用docker-compose命令管理容器")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("编写好上面的yml文件后我们需要放在对应的路径下，比如上面的mongodb数据路径："),r("code",[e._v("/home/mongotest")]),e._v("\n所以我们要在home目录下新建mongotest文件夹\n"),r("img",{attrs:{src:o(527),alt:"docker09"}})])]),e._v(" "),r("li",[r("p",[e._v("在mongotest文件夹下新建"),r("code",[e._v("docker-compose.yml")]),e._v("文件")])]),e._v(" "),r("li",[r("p",[e._v("使用"),r("code",[e._v("docker-compose up -d")]),e._v("运行该容器")])]),e._v(" "),r("li",[r("p",[e._v("记得在运行前看下服务器的27017端口是否已经放行\n"),r("img",{attrs:{src:o(528),alt:"docker10"}})])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(529),alt:"docker11"}})]),e._v(" "),r("ul",[r("li",[e._v("如果要修改docker-compose.yml文件时\n"),r("code",[e._v("docker-compose down")]),e._v(" #停到原来的\n"),r("code",[e._v("docker-compose build")]),e._v(" #重新编译\n"),r("code",[e._v("docker-compose up -d")]),e._v(" #重新启动")])])])}),[],!1,null,null,null);s.default=t.exports}}]);