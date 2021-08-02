Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "pink",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "课表",
      "iconPath": "/icon/kb.png",
      "selectedIconPath": "/icon/kb.png"
    },
    {
      "pagePath": "/pages/servicer/servicer",
      "text": "服务",
      "iconPath": "/icon/service.png",
      "selectedIconPath": "/icon/serviceing.png"
    },
    {
      "pagePath": "/pages/my/my",
      "text": "个人",
      "iconPath": "/icon/my-un.png",
      "selectedIconPath": "/icon/my.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})