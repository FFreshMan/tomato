// pages/home/home.js
Page({
data:{
  lists:[{id:'1',completed:false,description:'测试1'}],
  visibleConfirm:false
},
  confirmCreate(event){
   let content=event.detail
   let todo=[{id:this.data.lists.length+1,description:content,completed:false}]
   if(content){
    this.setData({lists:todo.concat(this.data.lists)})
    this.hideCreateConfirm()
   }
  },
  hideCreateConfirm(event){
    this.setData({visibleConfirm:false})
  },
  showCreateConfirm(){
    this.setData({visibleConfirm:true})
  },
  destroyTodo(event){
      let index=event.target.dataset.index
      this.data.lists[index].completed=true
      this.setData({lists:this.data.lists})
      console.log(index)
  }
})