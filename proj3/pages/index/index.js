// index.js
Page({
    data:{
        data1:'12312',
        imgData: [{
          id: 114514,
          name:'培养皿微生物观察',
          url: 'https://www.scutbl.top/picture/pidgie.jpg',
          class: 'advertise',
          school: '华南理工大学 软件学院',
          time: '今天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          userName:'',
          userAvatar:'',
          latitude: 23.1,
          longitude: 113.4,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/pidgie.jpg',
          class:'advertisement',
          joinCluster:true,
          link:"https://www.scutbl.top"
        },
        {
          id: 2,
          name: '测试图片2',
          url: 'https://www.scutbl.top/picture/lena.png',
          class: 'normal',
          school: '华南理工大学 计算机学院',
          time: '昨天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.2,
          longitude: 113.5,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/lena.png',
          joinCluster:true
        },
        {
          id:3,
          name: '测试图片3',
          url: 'https://www.scutbl.top/picture/dargon.png',
          class: 'normal',
          school: '华南理工大学 计算机学院',
          time: '昨天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.3,
          longitude: 113.6,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/dargon.png',
          joinCluster:true
        },
        {
          id:4,
          name: '测试图片3',
          url: 'https://www.scutbl.top/picture/mccain.jpg',
          class: 'normal',
          school: '华南理工大学 软件学院',
          time: '今天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.1,
          longitude: 113.6,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/mccain.jpg',
          joinCluster:true
        },
        {
          id:5,
          name: '测试图片3',
          url: 'https://www.scutbl.top/picture/sure6.jpg',
          class: 'normal',
          school: '华南理工大学 计算机学院',
          time: '昨天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.2,
          longitude: 113.3,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/sure6.jpg',
          joinCluster:true
        }, 
        {
          id:6,
          name: '测试图片3',
          url: 'https://www.scutbl.top/picture/ann.png',
          class: 'normal',
          school: '华南理工大学 软件学院',
          time: '今天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.4,
          longitude: 113.5,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/ann.png',
          joinCluster:true
        },
        {
          id:7,
          name: '测试图片3',
          url: 'https://www.scutbl.top/picture/obama.jpg',
          class: 'normal',
          school: '华南理工大学 软件学院',
          time: '今天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.6,
          longitude: 113.7,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/obama.jpg',
          joinCluster:true
        },
        {
          id:8,
          name: '测试图片3',
          url: 'https://www.scutbl.top/picture/sure5.jpg',
          class: 'normal',
          school: '华南理工大学 计算机学院',
          time: '昨天',
          describe:'我真的有好多好多好多好多话要说啊啊啊啊啊啊每天都要打很多很多很多代码',
          latitude: 23.3,
          longitude: 113.1,
          width:30,
          height:30,
          iconPath: 'https://www.scutbl.top/picture/sure5.jpg',
          joinCluster:true
        },
      ],
    },
          /**
           * 页面上拉触底事件的处理函数
           */
          onReachBottom: function() {
            var dataList = this.data.imgData;
            this.setData({
              imgData: this.data.imgData.concat(dataList)
            })
        },
      
        /**
         * 用户点击右上角分享
         */

})
