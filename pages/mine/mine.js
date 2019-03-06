// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        starCount: 0,
        forksCount: 0,
        visitTotal: 0,
        userInfo: {
            name: 'Xxxx',
            team: '恒大队',
            professional: 'C'
        },
        infoRmation: [{
                'text': '荣誉',
                'pagePath': '',
                'value': '',
                'iconPath': '../../static/icon/荣誉.png',
            },
            {
                'text': '消息',
                'pagePath': '',
                'value': '',
                'iconPath': '../../static/icon/消息.png',
            },
            {
                'text': '钱包',
                'pagePath': '',
                'value': '',
                'iconPath': '../../static/icon/钱包.png',
            },
        ],
        url_path: [{
                'text': '个人资料',
                'pagePath': '',
                'iconPath': '../../static/icon/个人.png',
            },
            {
                'text': '我的球队',
                'pagePath': '',
                'iconPath': '../../static/icon/团队.png',
            },
            {
                'text': '我的球场',
                'pagePath': '',
                'iconPath': '../../static/icon/场地.png',
            },
            {
                'text': '我的比赛',
                'pagePath': '',
                'iconPath': '../../static/icon/战斗.png',
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})