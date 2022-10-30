// components/Flood/Flood.js
let query;
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
          type:Array,
          observer: function(newVal,oldVal){
            let index = oldVal.length;
            this.loopList(index);
          }
        },
        jumpTo: String
    },

    /**
     * 组件的初始数据
     */
    data: {
      leftHeight:0,
      rightHeight:0,
      index:1,
          leftList: [],
          rightList: []
    },

    /**
     * 组件的方法列表
     */
    lifetimes: {
        attached: function(options) {
                this.isLeft();
              },
    },




    methods: {

          isLeft() {
            query = wx.createSelectorQuery().in(this);
            this.loopList(1)
          },
          loopList(index){
            const list=this.properties.list;
            if (!list[index]) return;
            if(this.data.leftHeight<this.data.rightHeight){
              this.data.leftList.push(list[index]);
            }
            else{
              this.data.rightList.push(list[index]);
            }
            this.getBoxHeight(this.data.leftList, this.data.rightList).then(()=>{
              this.loopList(++this.data.index)
            })
          },
          getBoxHeight(leftList, rightList) { //获取左右两边高度
            return new Promise((resolve, reject) => {
              this.setData({
                leftList,
                rightList
              }, () => {
                query.select('#left').boundingClientRect();
                query.select('.right').boundingClientRect();
                query.select('#container').boundingClientRect();
                query.exec((res) => {
                  this.setData({
                    leftHeight : res[0].height, //获取左边列表的高度
                    rightHeight : res[1].height //获取右边列表的高度
                  })

                  resolve();
                });
              });
            })
          },


          detailPage(e){
            console.log(e.currentTarget);
            var item=this.properties.list.find(element=>element.id==e.currentTarget.id);
            console.log(item);
            if(item.class=="advertisement"){
              const url=item.link;
              const navtitle='华园记忆';
              wx.navigateTo({
                url: `/pages/webview/webview?url=${url}&nav=${navtitle}`,
          })
            }
            else{
              wx.navigateTo({
                url: this.properties.jumpTo+'?id='+item.id,//要跳转到的页面路径
            })  
            }
  
          },
        
          generateData(){
        
          },
        
          /**
           * 生命周期函数--监听页面初次渲染完成
           */
          onReady: function() {
        
          },
        
          /**
           * 生命周期函数--监听页面显示
           */
          onShow: function() {
        
          },
        
          /**
           * 生命周期函数--监听页面隐藏
           */
          onHide: function() {
        
          },
        
          /**
           * 生命周期函数--监听页面卸载
           */
          onUnload: function() {
        
          },
        
          /**
           * 页面相关事件处理函数--监听用户下拉动作
           */
          onPullDownRefresh: function() {
        
          },
        

        
          /**
           * 用户点击右上角分享
           */
          onShareAppMessage: function() {
        
          }
    }
})
