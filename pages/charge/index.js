// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:""
  },
  charge:function(){
    console.log(this.data.money)
    if(this.data.money <= 0 || isNaN(this.data.money)){
      wx.showModal({
        cancelColor: 'cancelColor',
        title: '充值失败',
        content: '是不是我还要给你点钱'
      })
    }else{
      wx.getStorage({
        key: 'overage',
        success:(res) =>{
          wx.setStorage({
            data: parseFloat(res.data)+ parseFloat(this.data.money),
            key: 'overage',
          })
        },
        fail:(res) => {
          wx.setStorage({
            data: this.data.money,
            key: 'overage',
          })
        }
      })
      wx.redirectTo({
        url: '../wallet/index',
      })
     
    }
  },
  input: function(e){
    this.setData({
      money:e.detail.value
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