// components/MapAlbum/MapAlbum.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type:Array,
            observer: function(newVal,oldVal){
              var index = oldVal.length;
            }
          },
          jumpTo: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        id:'1',
        url:'https://www.scutbl.top/picture/pidgie.jpg',
        name:'培养皿微生物观察',
        school:'华南理工大学软件学院',
        time:'今天',
        describe:'啊啊啊啊',
        detailDisp:'none'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        detailCard(e){
            console.log(1);
            console.log(e.detail.markerId);
            let id='';
            let url='';
            let name='';
            let school='';
            let time='';
            let describe='';
            this.properties.list.forEach(function(item){
                if(e.detail.markerId==item.id)
                {
                    id=item.id;
                    url=item.url;
                    name=item.name;
                    school=item.school;
                    time=item.time;
                    describe=item.describe;
                }
            })

            this.setData({
                id:id,
                url:url,
                name:name,
                school:school,
                time:time,
                describe:describe,
                detailDisp:'inline',
            })

        },
        detailPage(e){
            console.log(e.currentTarget);
            var item=this.properties.list.find(element=>element.id==e.currentTarget.id);
            wx.navigateTo({
                url: this.properties.jumpTo+'?id='+item.id,//要跳转到的页面路径
            })  
          },
          viewChange(e){
            //console.log(e.detail);
            this.triggerEvent('viewChange',{changeInfo: e});
          },
    }
})
