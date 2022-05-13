(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{547:function(t,e,r){"use strict";r.r(e);var v=r(6),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),r("h2",{attrs:{id:"git-revert-和-git-reset-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-和-git-reset-的区别"}},[t._v("#")]),t._v(" "),r("code",[t._v("git revert")]),t._v(" 和 "),r("code",[t._v("git reset")]),t._v(" 的区别")]),t._v(" "),r("h2",{attrs:{id:"git-rebase-和-git-merge-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-和-git-merge-的区别"}},[t._v("#")]),t._v(" "),r("code",[t._v("git rebase")]),t._v(" 和 "),r("code",[t._v("git merge")]),t._v(" 的区别")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/u012193330/article/details/100997124",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"git事故"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git事故"}},[t._v("#")]),t._v(" git事故")]),t._v(" "),r("p",[t._v("事故现场：\n从master上拉了个分支做功能开发，开完测试完后提交到本地git仓库，然后出去了\n回来后将master代码merge到了本地发现有问题，这时使用了 "),r("code",[t._v("git reset --hard")]),t._v("\n命令回退到master上的最新一次提交，结果悲剧的发现本地分支上的那个提交没有了！")]),t._v(" "),r("p",[t._v("解决：\n如果代码有提交过那么可以使用"),r("code",[t._v("git reflog")]),t._v("命令找到所有的提交记录，然后找到最近一次的\n提交编号，通过"),r("code",[t._v("git reset --hard HEAD@{2}")]),t._v(" 恢复到原来的状态")]),t._v(" "),r("p",[t._v("反思：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("reset --soft")]),t._v("：保留工作目录，并把重置 HEAD 所带来的新的差异放进暂存区")]),t._v(" "),r("li",[r("code",[t._v("reset --hard")]),t._v("：会在重置 HEAD 和branch的同时，重置stage区和工作目录里的内容")]),t._v(" "),r("li",[r("code",[t._v("reset --mixed")]),t._v("：保留工作目录，并清空暂存区")]),t._v(" "),r("li",[t._v("没事不要乱用"),r("code",[t._v("git reset --hard")]),t._v(" 命令")]),t._v(" "),r("li",[t._v("任何代码有改动记得"),r("code",[t._v("add + commit + push")]),t._v("提交")]),t._v(" "),r("li",[t._v("git 很强大，仅仅会正常的git flow流程还不行，其实还要再学习下一些特殊场景")])])])}),[],!1,null,null,null);e.default=a.exports}}]);