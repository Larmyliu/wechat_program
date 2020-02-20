// pages/alert/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:""
  },
  addPhoto() {
    wx.chooseImage({
      count:3,
      complete: (res) => {},
      success:(res)  =>{
        var tempFilePaths = res.tempFilePaths

        wx.setStorageSync('tempFilePaths', res.tempFilePaths)
        this.setData({
          src: res.tempFilePaths  //这个用于展示添加的图片，并非服务器图片地址
        })
      }
    })
  },
  formSubmit:function(){
    wx.showToast({
      title: '提交成功',
      duration:1000
    })
    wx.redirectTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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