export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: 'pages/sub',
      name: 'sub',
      pages: [
        'one/index',
        'two/index',
      ],
    },
    {
      root: 'pages/sub-two',
      name: 'sub',
      pages: [
        'one/index',
        'two/index',
      ],
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
