import { createApp } from 'vue'
import { register } from 'swiper/element/bundle'
import '@master/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import '../node_modules/swiper/swiper-bundle.min.css'
import 'animate.css'

import App from '@/AppComponent.vue' //主頁面內容
import Mobile from '@/views/MobileComponent.vue' //手機版

const app = createApp(App)
const mobile = createApp(Mobile)

const config = {
  //路徑
  siteUrl(value) {
    return 'https://events.cdn-tkec.tw/events_net/events_net/' + value
  },
  //追蹤碼
  addGALink(url) {
    const location = window.location.pathname.split('/')
    if (url !== undefined) {
      return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'ec=' + location[2]
    }
    return ''
  }
}


app.use(register)

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
