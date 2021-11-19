import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAM15L8iPeUJAQ-ccZj6joQNIl4Xtxlej4'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')