module.exports = {
  theme: 'reco',//博客主题
  title: 'xuech\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    },
    nav: require('./nav.js'),
    sidebar: require('./sidebar.js'),
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};