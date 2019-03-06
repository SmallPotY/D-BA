Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        tabbar: {
            type: Object,
            value: {
                "backgroundColor": "#ffffff",
                "color": "#979795",
                "selectedColor": "#1c1c1b",
                'list': [{
                        text: '首页',
                        style: 1,
                        pagePath: '../index/index',
                        iconPath: '../../../static/icon/icon_home.png',
                        selectedIconPath: '../../../static/icon/icon_home_HL.png',
                    },
                    {
                        text: '开波!!!',
                        style: 1,
                        isSpecial: true,
                        pagePath: '../action/action',
                        iconPath: '../../../static/icon/icon_action.png',
                        selectedIconPath: '../../../static/icon/icon_action.png',
                    },
                    {
                        text: '我的',
                        style: 1,
                        pagePath: '../mine/mine',
                        iconPath: '../../../static/icon/icon_mine.png',
                        selectedIconPath: '../../../static/icon/icon_mine_HL.png',
                    },
                ]
            }
        },
        activeIndex: {
            type: Number,
            value: 0,
            observer: function(newVal, oldVal) {}
        }
    },

    methods: {
        tabClick: function(e) {
            this.setData({
                activeIndex: e.currentTarget.id,
            });
            if (e.currentTarget.id == 2) {
                wx.scanCode({
                    success(res) {
                        console.log(res)
                        wx.navigateTo({
                            url: '/pages/scansuccess/scansuccess?result=' + res.result
                        })
                    }
                })
            }
        }
    }
})