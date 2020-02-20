// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      userUrl:"",
      nickName:"未登录",
    },
    actionType:"登录",
    btnType:"primary"
  },
  movetoWallet:function(){
    wx.navigateTo({
      url: '../wallet/index',
    })
  },
  login:function() {
    if(this.data.actionType === "登录"){
      wx.login({
        complete: (res) => {},
        success:() => {
          wx.getUserInfo({
            complete: (res) => {},
            success: (res) => {
              console.log(res);
              this.setData({
                userInfo:{
                  userUrl: res.userInfo.avatarUrl,
                  nickName: res.userInfo.nickName
                },
                actionType:"退出登录",
                btnType:"warn"
              })
              wx.setStorage({
                data:{
                  userInfo:{
                    userUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                  }
                },
                key: 'userInfo',
              })
            }
          })
          
        }
      })
    }else{
      wx.removeStorage({
        key: 'userInfo',
      })
      this.setData({
        userInfo:{
          userUrl:"",
          nickName:"未登录",
        },
        actionType:"登录",
        btnType:"primary"
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success:(res) => {
        console.log(res);
        this.setData({
          userInfo:{
            userUrl: res.data.userInfo.userUrl,
            nickName: res.data.userInfo.nickName
          },
          actionType:"退出登录",
          btnType:"warn"
        })
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

  }
})