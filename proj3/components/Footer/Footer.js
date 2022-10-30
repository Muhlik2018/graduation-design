// components/Footer/Footer.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        focus: String,
        emphasisColor: String,
        normalColor:String
    },

    /**
     * 组件的初始数据
     */
    data: {
        mainColor: '#FF961C',
        searchColor: '#606892',
        selfColor: '#606892'
    },

    lifetimes: {
        attached: function(options) {
            if(this.properties.focus==0){
               this.setData({
                   mainColor: this.properties.emphasisColor,
                   searchColor: this.properties.normalColor,
                   selfColor:this.properties.normalColor
               }
               )
            }
            else if(this.properties.focus==1){
                this.setData({
                    mainColor: this.properties.normalColor,
                    searchColor: this.properties.emphasisColor,
                    selfColor:this.properties.normalColor
                }
                )
            }
            else{
                this.setData({
                    mainColor: this.properties.normalColor,
                    searchColor: this.properties.normalColor,
                    selfColor:this.properties.emphasisColor
                }
                )
            }
              },
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
