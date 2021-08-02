// pages/fuwu/fuwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showUsual:1,
    showMy:0,
    showStudy:0,
    showLife:0,
    color:'red',
    borderBottomRadiusUsual:20,
    borderBottomRadiusMy:20,
    borderBottomRadiusStudy:20,
    borderBottomRadiusLife:20,
  },
study:function()
{
  wx.navigateTo({
    url: '/pages/logs/logs',
  })
},
kc:function()
{
 wx.switchTab({
   url: '../../pages/index/index',
 })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '服务'
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1 //这个数字是当前页面在tabBar中list数组的索引
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  showUsual:function(container){
    console.log('点击了')
    if(this.data.showUsual == 1){
      this.setData({
        showUsual:0,
        borderBottomRadiusUsual:'20rpx'
      }
    )
  }else{
    this.setData({
      showUsual:1,
      borderBottomRadiusUsual:'0rpx'
    })
  }
      console.log('修改后，showUsual的值为:'+this.data.showUsual)
  },

  showMy:function(container){
    console.log('点击了')
    if(this.data.showMy == 1){
      this.setData({
        showMy:0,
        borderBottomRadiusMy:'20rpx'
      }
    )
  }else{
    this.setData({
      showMy:1,
      borderBottomRadiusMy:'0rpx'
    })
  }
      console.log('修改后，showMy的值为:'+this.data.showMy)
  },

  showStudy:function(container){
    console.log('点击了')
    if(this.data.showStudy == 1){
      this.setData({
        showStudy:0,
        borderBottomRadiusStudy:'20rpx'
      }
    )
  }else{
    this.setData({
      showStudy:1,
      borderBottomRadiusStudy:'0rpx'
    })
  }
      console.log('修改后，showStudy的值为:'+this.data.showStudy)
  },

  showLife:function(container){
    console.log('点击了')
    if(this.data.showLife == 1){
      this.setData({
        showLife:0,
        borderBottomRadiusLife:'20rpx'
      }
    )
  }else{
    this.setData({
      showLife:1,
      borderBottomRadiusLife:'0rpx'
    })
  }
      console.log('修改后，showLife的值为:'+this.data.showLife)
  },

  getGrades:function(){
    console.log("应当跳转");
    wx.navigateTo({
      url: '/pages/showGrades/showGrades?id=2',
    })
  },

  
})