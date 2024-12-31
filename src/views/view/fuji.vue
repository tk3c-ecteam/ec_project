<script setup>
import { EffectFade,Controller } from "swiper/modules";
import listF from '@/views/layout/listF.vue'
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menus: [7694,7695], //商品陳列編號
      tabs:[
        {
          text:'金蛇年 汰舊換新',
          pc:'fujiXmas/images/fuji_pcb.jpg',
          mobile:'fujiXmas/images/fuji1.jpg'
        },
        {
          text:'聖誕富有禮',
          pc:'fujiXmas/images/fuji2_pcb.jpg',
          mobile:'fujiXmas/images/fuji2.jpg'
        }
      ],
      status:0,
      swiper1:null,
      swiper2:null
    }
  },
  mounted() {
    const { menus } = this
 
    //撈好樓層商品
    this.getFloorData(menus)
  },
  methods: {
   change(id) {
    this.status = id
    switch (id) {
      case 0:
        document.body.style.background = '#ffe7db'
        break;
    
      case 1:
        document.body.style.background = '#4ea3b6'
        break;
    }
   },
   onSwiper(swiper) {
    this.swiper1 = swiper
  },
    onControlSwiper(swiper) {
      this.swiper2 = swiper
    },
    goSlide(id) {
      this.swiper1.slideTo(id)
      this.swiper2.slideTo(id)
    },
    onSlideChange(swiper) {
      this.change(swiper.activeIndex)
     this.swiper1.slideTo(swiper.activeIndex)
    }
  }
}
</script>

<template>
  <div id="fuji-container" v-cloak>
    <div class="background">
      <swiper
      id="bgSwiper"
      :loop="false"
      :effect="'fade'"
      :fadeEffect="{
        crossFade: true
      }"
       :navigation="{
          prevEl: '.background .prev',
          nextEl: '.background .next'
        }"
      :modules="[EffectFade,Controller]"
      :controller="{
        control:[tabContent]
      }"
       @swiper="onControlSwiper"
       @slideChange="onSlideChange"
     
      >
      <swiper-slide v-for="(tab,t) in tabs" @click="goSlide(t)">
        <img class="pc" :src="$filters.siteUrl(tab.pc)" alt=" ">
        <img class="mobile" :src="$filters.siteUrl(tab.mobile)" alt=" ">
      </swiper-slide>
      </swiper>
       <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <section>
      <div class="tab w:80% w:full@<992 m:0|auto|1% m:0|auto|3%@<576">
        <swiper id="tabContent"
        :loop="false"
        :space-between="10"
        :breakpoints="{
          0: {
            slidesPerView: 1.1
          },
          600: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 2
          }
        }"
        :modules="[Controller]"
        :controller="{
          control:[bgSwiper]
        }"
        @swiper="onSwiper"
        >
        <swiper-slide v-for="(tab,t) in tabs" @click="goSlide(t)">
          <a :class="[status === t ? 'active' : '']" class="bg:#b49664 r:20px p:10px f:1.5em f:1.2em@<576 f:2em@>2000 f:bold box:border-box bg:#c93c28.active" @click="change(t)">{{ tab.text }}</a>
        </swiper-slide>
        </swiper>
      </div>

      <div v-for="(tab,t) in tabs" v-show="status === t">
        <listF v-if="products[menus[t]] != undefined" :pro="products[menus[t]].Data"></listF>
      </div>
    </section>

 
  </div>

  <div class="custom-top"><p></p></div>
</template>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/fujiXmas/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/fujiXmas/images/';

/*  共用樣式調整 */
body {
  background: #ffe7db;
}

.bg01 {
  background: #b49664;
}

.tab {
  .swiper-wrapper {
    padding-bottom: 10px;
    box-sizing: border-box;
  }
}

#fuji-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 38%;
    margin-top: 45px;
  }
}





/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
   #fuji-container {
    .background {
      padding-bottom: 80%;
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  .copyR {
    margin-bottom: 0;
  }

  #fuji-container {
    .background {
      padding-bottom: 80%;
    }
  }


}

@include media-query('pc', '2000px') {
  #fuji-container {
    .background {
      padding-bottom: 38vmax;
    }
  }
}
</style>
