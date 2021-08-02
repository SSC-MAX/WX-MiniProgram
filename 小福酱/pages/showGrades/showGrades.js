// pages/showGrades/showGrades.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemCounts:0,  //学科的数量
    itemList:[ ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that  = this;
    //在数据拿到之前显示加载界面
    wx.showLoading({
      title: '加载中',
    })
    //发起请求
    wx.request({
      url: 'https://www.xiaoxin123hh.cn/user/getCredit',
      data:{
        "username":"171909035",
        "password": "hx2001421*"
      },
      method:"POST",
      success(res){
        //请求成功隐藏加载框
        wx.hideLoading({
          success: (res) => {},
        })
        
       //将拿到的数据存入itemList
        for(var i=0; i<res.data.credit.length;i++){
          var newArray = {
            credit_act:res.data.credit[i].credit_act,
            credit_due:res.data.credit[i].credit_due,
            credit_name:res.data.credit[i].credit_name
          };
         
          that.data.itemList = that.data.itemList.concat(newArray);
        
         that.setData({
          itemList: that.data.itemList
        });   
        }
        console.log("赋值完成");
        console.log(that.data.itemList)

        that.setData({
          itemCounts:res.data.credit.length
        })
      },
      fail(res){
        wx.showToast({
          title: '网络错误',
          icon:'error',
          duration:2000
        })
        console.log("请求失败");
      }
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

  sendRequest:function(){
    
  },
})