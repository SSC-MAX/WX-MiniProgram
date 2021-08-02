// pages/my/my.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    numberr:'031903142',
    college:'数学与计算机学院',
    term:'学期',
    week:'周数',
    date:'日期',
    qm:'这个人很懒，什么都没有写...',
    number:'',
    password:'',
    show:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    motto: '欢迎使用小福酱',
    userInfo: {}
  },
  login:function(){
    let that=this;
    
        // console.log(that.data.hasUserInfo)
        // if (that.data.hasUserInfo==true) {
        //   that.setData({ show:true,
        //   }) 
        //    // 已经授权
        //    console.log('已经授权')
        // }else{
        //   console.log('未授权')
        //   wx.getUserProfile({
        //     desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        //     success: (rem) => { 
        //       that.setData({
        //         userInfo: rem.userInfo,
        //         hasUserInfo: true,
        //       })  
        //       console.log(that.data.hasUserInfo) 
        //       if (that.data.hasUserInfo==true) {
        //         that.setData({ show:true,
        //         })   
        //          // 已经授权
        //          console.log('已经授权')
        //       }
        //     }
        //   })  
        //   console.log(that.data.hasUserInfo)
        // }
    wx.login({ 
      success:function(res){
        console.log(res.code)
        //发送请求
        wx.request({ 
          // url: 'https://www.fzulyt.fun:442/user/getOpenid', //接口地址
          data: {code:res.code},
          header: { 
            'content-type': 'application/json' //默认值
          },
          success: function (res) { 
            that.setData({
              openId:res.data.openid,
            })
             
            // wx.request({  
            //   url: 'https://www.fzulyt.fun:442/user/signIn', //接口地址
            //   data: {openId:that.data.openId},
            //   header: {
            //     'content-type': 'application/json' //默认值
            //   },
            //   success: function (re) { 
            //     console.log(re.data)
            //     console.log(that.data.openId)
            //     console.log(that.data)
            // } 
            // }) 


            // wx.setStorage({
            //   key: 'openid',
            //   data: res.data.openid
            // })
            // console.log(res.data)
      }
    })
  }
})
wx.navigateTo({
  url: '/pages/login/login',
})
  }, 
  new_1:function(e)
  {
    this.setData({
      number:e.detail.value,
    })
    console.log(e);
  },
  new_2:function(e)
  {
    this.setData({
      password:e.detail.value,
    })
    console.log(this.data.password);
  },
  bd:function()
  {
  },
  close:function()
  {
    this.setData({
      show:false
    })
  },
  yz:function()
  {
    this.setData({
      show:false
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
  text:function()
  {

  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // 调用函数时，传入new Date()参数，返回值是日期和时间
   var currenTime= util.formatTime(new Date());
   // 再通过setData更改Page()里面的data，动态更新页面的数据
   this.setData({
     date: currenTime
   });
   console.log(this.data.date)
// wx.redirectTo({
//   url: '../../pages/login/login',
// })
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
        selected: 2//这个数字是当前页面在tabBar中list数组的索引
      })
    }
    wx.login({ 
      success:function(res){
        console.log(res.code)
        //发送请求
        wx.request({ 
          // url: 'https://www.fzulyt.fun:442/user/getOpenid', //接口地址
          data: {code:res.code},
          header: { 
            'content-type': 'application/json' //默认值
          },
          success: function (res) { 
            that.setData({
              openId:res.data.openid,
            })
             
            // wx.request({  
            //   url: 'https://www.fzulyt.fun:442/user/signIn', //接口地址
            //   data: {openId:that.data.openId},
            //   header: {
            //     'content-type': 'application/json' //默认值
            //   },
            //   success: function (re) { 
            //     console.log(re.data)
            //     console.log(that.data.openId)
            //     console.log(that.data)
            // } 
            // }) 


            // wx.setStorage({
            //   key: 'openid',
            //   data: res.data.openid
            // })
            // console.log(res.data)
      }
    })
  }
})
    // 调用函数时，传入new Date()参数，返回值是日期和时间
   var currenTime= util.formatTime(new Date());
   // 再通过setData更改Page()里面的data，动态更新页面的数据
   this.setData({
     date: currenTime
   });
   console.log(this.data.date)
    let that=this;
    wx.getStorage({
      key: 'openid',
      success(res) {
        console.log(res.data)
        that.setData({
          openId:res.data
        }, () => {
          that.text()
        }) 
        
     } }) 

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
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})