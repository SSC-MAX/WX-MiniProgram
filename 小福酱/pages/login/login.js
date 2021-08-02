// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  dl:function()
  {
    wx.switchTab({
      url: '/pages/index/index',
    })
    
  },
  // 事件处理函数
  onLoad() {
  },
  
})
