//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    latitude: '0',
    longtitude : '0'
  },
  bindcontroltap:function(e){
    console.log(e)
    switch(e.controlId){
      case 1:{
        this.moveToCenter()
        break;
      }
      case 2:{
        if(this.time){
          wx.navigateBack({
            complete: (res) => {

            },
            delta:1
          })
        }else{
          wx.scanCode({
            success:() =>{
              wx.showLoading({
                title: '正在获取密码',
              })
              wx.request({
                url: 'https://mockapi.eolinker.com/arq9PUe58ea4915a95760b41ecede6fc85ef2121937a5c6/password',
                success:(res) => {
                  wx.hideLoading({
                    complete: (res) => {},
                  });
                  wx.redirectTo({
                    url: '../scanResult/index?password='+res.data.data.password+'&num='+res.data.data.num,
                    success:() =>{
                      wx.showToast({
                        title: '获取密码成功',
                        duration:1000
                      })
                    }
                  })
                },
                fail:(res) =>{
                  console.log("fail")
                }
              })
            }
          })
        }
        break;
      }
      case 3:{
        wx.redirectTo({
          url: '../user/index',
        })
        break;
      }
      case 4:{
        wx.redirectTo({
          url: '../alert/index',
        })
        break;
      }
    }
  },
  onLoad: function (options) {
    this.time = options.timer
    wx.getLocation({
      altitude: 'false',
      success: (res) =>{
        this.setData({
          longtitude:res.longitude,
          latitude:res.latitude
        })
        
      }
    })
    wx.getSystemInfo({
      complete: (res) => {
        this.setData({
          controls:[{
            id:1,
            iconPath:"/image/定位.png",
            position:{
              width:50,
              heigth:50,
              left:20,
              top:res.windowHeight-80
            },
            clickable: true
          },{
            id:2,
            iconPath:"/image/立即用车订单.png",
            position:{
              width:100,
              heigth:100,
              left:res.windowWidth/2 -50,
              top:res.windowHeight-120
            },
            clickable: true
          },{
            id:3,
            iconPath:"/image/用户.png",
            position:{
              width:50,
              heigth:50,
              left:res.windowWidth-100,
              top:res.windowHeight-70
            },
            clickable: true
          },{
            id:4,
            iconPath:"/image/警报.png",
            position:{
              width:50,
              heigth:50,
              left:res.windowWidth-100,
              top:res.windowHeight-140
            },
            clickable: true
          },{
            id:5,
            iconPath:"/image/当前定位.png",
            position:{
              width:40,
              heigth:40,
              left:res.windowWidth/2-20,
              top:res.windowHeight/2-40
            },
           
          }]
        })
      },
    })
  },
  onShow: function(){
    this.mapctx = wx.createMapContext('ofo-map')
    this.moveToCenter();
  },
  moveToCenter:function() {
    this.mapctx.moveToLocation();
  }
})
