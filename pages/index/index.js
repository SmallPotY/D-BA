//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        Custom: app.globalData.Custom,
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        TabCur: 1,
        scrollLeft: 0,
        scrollTop: 0,
        side_top: 200,
        TabCur: 0,
        iconList: [{
                iconPath: '../../static/icon/招募.png',
                path: '',
                name: '招募'
            },
            {
                iconPath: '../../static/icon/挑战.png',
                path: '',
                name: '约战'
            },
            {
                iconPath: '../../static/icon/发布场地.png',
                path: '',
                name: '发布场地'
            },
            {
                iconPath: '../../static/icon/荣誉.png',
                path: '',
                name: '排名'
            },
            {
                iconPath: '../../static/icon/动态.png',
                path: '',
                name: '动态'
            },
        ],
    },

    /**
     * 打开抽屉
     */
    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target,
            side_top: this.data.scrollTop + 200,
        })

    },
    /**
     * 关上抽屉
     */
    hideModal(e) {
        this.setData({
            modalName: null,
        })
        
    },

    /**
     * 监听滚动条
     */
    onPageScroll: function(e) {
        let old_scrollTop = this.data.scrollTop
        // console.log(e.scrollTop) //这个就是滚动到的位置,可以用这个位置来写判断
        if (this.modalName)
        this.setData({
            scrollTop: e.scrollTop
        })

    },

    /**
     * 选项卡切换
     */
    tabSelect(e) {
        console.log(e);
        this.setData({
            TabCur: e.currentTarget.dataset.id,
        })
    }

})