// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   m:'yes',

  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onPullDownRefresh:function()
  {
  wx.showNavigationBarLoading() //在标题栏中显示加载
  //模拟加载
  setTimeout(function()
  {
  // complete
  wx.hideNavigationBarLoading() //完成停止加载
  wx.stopPullDownRefresh() //停止下拉刷新
  },1500);
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    
  },
  onShow(){
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0  //这个数字是当前页面在tabBar中list数组的索引
      })
    }
    if(this.data.m=='no')
   { wx.redirectTo({
      url: '/pages/login/login',
    })}
  }
 
})
