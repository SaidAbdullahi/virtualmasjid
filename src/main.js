// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'
import infiniteScroll from 'vue-infinite-scroll'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'bootstrap-material-design';
// import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

import App from './App'
import createRouter from './router'

// fontawesome https://www.npmjs.com/package/@fortawesome/vue-fontawesome
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faPodcast,
  faRssSquare,
  faBroadcastTower,
  faTimes,
  faCheck,
  faLanguage,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import {
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome'

library.add(faPodcast, faRssSquare, faBroadcastTower, faYoutube, faTimes, faCheck, faLanguage, faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

// eslint-disable-next-line no-undef
window.$ = require('jquery')
// eslint-disable-next-line no-undef
window.jQuery = require('jquery')

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(infiniteScroll)

const router = createRouter()

Vue.use(VueAnalytics, {
  id: 'UA-133963028-1',
  router,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
})
