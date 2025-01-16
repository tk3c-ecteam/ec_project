import { createApp } from 'vue'
import { register } from 'swiper/element/bundle'
import '@master/css'
import '../node_modules/swiper/swiper-bundle.min.css'
import 'animate.css'
import { Swiper, SwiperSlide } from "swiper/vue";

import App from '@/AppComponent.vue' //主頁面內容
import Mobile from '@/views/MobileComponent.vue' //手機版

//載入撈取商品陳列api
import { globalMixin } from './globalMixin.js'

const app = createApp(App)
const mobile = createApp(Mobile)

const config = {
  //路徑
  //events.cdn-tkec.tw
  siteUrl(value) {
    return 'https://events.cdn-tkec.tw/events_net/events_net/' + value
  },
  //追蹤碼
  addGALink(url) {
    let location = window.location.pathname.split('/');
    let folderName = (location[2] == 'events_net') ? location[3] : location[2];

    if (url !== undefined) {
      return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'ec=' + folderName
    }
    return ''
  }
}


app.use(register)
app.mixin(globalMixin)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

//使用方法: $filters.siteUrl(value)
app.config.globalProperties.$filters = config

// id:app 區域有存在再綁到vue
if (document.querySelectorAll('#app').length > 0) app.mount('#app')

//id:mobile  區塊有存在再綁定到vue
if (document.querySelectorAll('#mobile').length > 0) mobile.mount('#mobile')

//手機版選單項目
//import './assets/js/mobileText.js'

//所有圖片加入 alt
document.querySelectorAll('#app img').forEach(el => {
  el.setAttribute('alt', ' ');
});
