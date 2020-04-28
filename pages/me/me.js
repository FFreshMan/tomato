// pages/me/me.js
Page({
  data:{
    tab:'tomato',
    tomatoes:{
      '本周四':[{created_at:'14:00',description:'测试一下',id:1},{created_at:'21:00',description:'测试一下',id:2},{created_at:'15:00',description:'测试一下',id:3}],
      '本周一':[{created_at:'14:00',description:'测试一下',id:1},{created_at:'21:00',description:'测试一下',id:2},{created_at:'15:00',description:'测试一下',id:3}]
    }
  },
  changeTab(event){
    let name=event.currentTarget.dataset.name
    this.setData({tab:name})
  },
  onShow: function () {

  },
})