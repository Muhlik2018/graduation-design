// components/RoundPlay/RoundPlay.js
let location=0;
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
        url:'https://www.scutbl.top/picture/pidgie.jpg',
        name:'培养皿微生物观察',
        school:'华南理工大学软件学院',
        time:'今天',
        id: '123',
    },

    lifetimes: {
        attached: function(options) {
                this.setDataByIndex(0);
              },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        detailPage(e){
            console.log(e.currentTarget);
            var item=this.properties.list.find(element=>element.id==e.currentTarget.id);

            wx.navigateTo({
                url: this.properties.jumpTo+'?id='+this.properties.id,//要跳转到的页面路径
            })  
          },

        setDataByIndex(index){

            this.setData({
                name: this.properties.list[index].name,
                school: this.properties.list[index].school,
                time:this.properties.list[index].time,
                url:this.properties.list[index].url,
                id:this.properties.list[index].id

            })
        },

        changeIndex(direction){
            let length = this.properties.list.length;
            if(direction==0){//to right
                if(location<length-1){
                    location=location+1;
                    this.setDataByIndex(location);
                }
                else{
                    location=0;
                    this.setDataByIndex(location);
                }
            }
            else{
                if(location>0){
                    location=location-1;
                    this.setDataByIndex(location);
                }
                else{
                    location=length-1;
                    this.setDataByIndex(location);
                }
            }
        },

        leftImg(){
            console.log("left");
            this.changeIndex(1);
        },

        rightImg(){
            console.log("right");
            this.changeIndex(0);
        }

    }
})
