// components/TimeLine/TimeLine.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type:Array,
            observer: function(newVal,oldVal){
              let index = oldVal.length;
            }
          },
          jumpTo: String,
          
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
      detailPage(e){
        console.log(e.currentTarget);
        var item=this.properties.list.find(element=>element.id==e.currentTarget.id);
        wx.navigateTo({
          url: this.properties.jumpTo+'?id='+item.id,//要跳转到的页面路径
        })  
      },
    }
})
