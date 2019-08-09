// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  mounted() {
    console.log('mixin999999999999')
    this.initFontSize(document, window) // 初始化字体大小
  },
  methods: {
    isRouteComponent() {
      return this.$parent && this.$parent.$el && this.$parent.$el.id === 'app'
    },

    initFontSize(e, t) {
      // eslint-disable-next-line no-console
      console.log(e.documentElement)
      let maxWidth = 750; // 超过这个宽度不再改变font-size
      let defaultWidth = 750; // 当宽度为750px时,1rem = 100px
      let defaultSize = 100;
      let d = e.documentElement;
      let resize = 'orientationchange' in window ? 'orientationchange' : 'resize'
      let computedFontSize = function () {
        let clientWidth = d.clientWidth
        clientWidth > maxWidth && (clientWidth = maxWidth)
        d.style.fontSize = defaultSize * (clientWidth / defaultWidth) + 'px'
      }
      computedFontSize()
      e.addEventListener && t.addEventListener(resize, computedFontSize, !1)
    },

  },
})
new Vue({
  el: '#app',
  router,
  // mixins:[m],
  render: h => h(App)
})

