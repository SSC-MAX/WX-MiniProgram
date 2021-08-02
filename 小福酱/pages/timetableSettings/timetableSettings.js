// pages/timetableSettings/timetableSettings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    termChosen:"202002",
    chosen:4,
    showTerm:1,
    index1:1,
    index2:2,
    index3:3,
    index4:4,
    switchOpen1:1,
    switchOpen2:1,
    switchId:1,
    switchId:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '课表设置',
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

  chooseMe:function(term){
    this.setData({
      termChosen: term.currentTarget.dataset.text,
      chosen:term.currentTarget.dataset.index
    }
  )
  
  
  // console.log(this.data.termChosen)
  console.log(term.currentTarget.dataset.index)
  console.log(this.data.chosen)
  
  },

  showTermToChoose:function(){
    if(this.data.showTerm == 1){
      this.setData({
        showTerm:0
      })
    }else{
      this.setData({
        showTerm:1
      })
    }
    console.log(this.data.showTerm)
  },

  switchControl1:function(){
    if (this.data.switchOpen1 == 1) {
      this.setData({
        switchOpen1 : 0
      })
    }else{
      this.setData({
        switchOpen1:1
      })
    }

    
  },

  switchControl2:function(){
    if (this.data.switchOpen2 == 1) {
      this.setData({
        switchOpen2 : 0
      })
    }else{
      this.setData({
        switchOpen2:1
      })
    }
  }


})