// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      time:2,
      clock:'',
      timer:null,
      timerStatus:'',
      confirmVisible:false,
      finishConfirmVisible:false,
      againButtonVisible:false
  },

  startTimer(){
    this.data.timer=setInterval(()=>{
      if(this.data.time===0){
        this.setData({againButtonVisible:true})
       this.clearTimer()
       return
      }
      this.setData({time:this.data.time-1})
      this.changeTime()
    },1000)
    this.setData({timerStatus:'start'})
  },
  clearTimer(){
    clearInterval(this.data.timer)
    this.setData({timerStatus:''})
  },
  changeTime(){
    let m=Math.floor(this.data.time/60)
    let s=Math.floor(this.data.time%60)
    if(s===0){
      s='00'
    }
    if((s+'').length===1){
      s='0'+s
    }
    if((m+'').length===1){
      m='0'+m
    }
    this.setData({clock:`${m}:${s}`})
  },
  showConfirm(){
      this.clearTimer()
      this.setData({timerStatus:''})
      this.setData({confirmVisible:true})
  },
  confirmAbandon(event){
     let content=event.detail
     console.log(content)
     this.setData({confirmVisible:false})
     this.setData({againButtonVisible:true})
  },
  hideConfirm(){
    this.setData({confirmVisible:false})
  },
  againTimer(){
    this.setData({time:3000})
    this.startTimer()
    this.setData({againButtonVisible:false})
  },
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
    this.changeTime()
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