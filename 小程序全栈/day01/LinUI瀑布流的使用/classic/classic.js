
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demos: [{
      image: 'http://img4.imgtn.bdimg.com/it/u=1077976075,1884413655&fm=26&gp=0.jpg',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    },{
      image: 'http://img3.imgtn.bdimg.com/it/u=3635535859,2676124512&fm=26&gp=0.jpg',
      title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    },{
      image: 'http://img0.imgtn.bdimg.com/it/u=1764342034,1489640432&fm=26&gp=0.jpg',
      title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
      }, {
        image: 'http://img4.imgtn.bdimg.com/it/u=1077976075,1884413655&fm=26&gp=0.jpg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
        count: '888',
        delCount: '666'
      }, {
        image: 'http://img4.imgtn.bdimg.com/it/u=1077976075,1884413655&fm=26&gp=0.jpg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
        count: '888',
        delCount: '666'
      }, {
        image: 'http://img4.imgtn.bdimg.com/it/u=1077976075,1884413655&fm=26&gp=0.jpg',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。',
        count: '888',
        delCount: '666'
      },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.lin.renderWaterFlow(this.data.demos, false, () => {
      console.log('渲染成功')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})