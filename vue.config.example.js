export default {
  entry: 'example/',
  cssModules: true,
  dist: 'dist-example',
  title: 'Vue Windows',
  template: 'example/index.html',
  vendor: [
    'vue',
    'highlight.js/lib/highlight',
    'highlight.js/lib/languages/javascript'
  ],
  production: {
    publicPath: '/vue-windows/'
  }
}
