<script setup>
import CommonFloor from '../../floor/CommonFloor.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
       menus: [7675,7676,7678,7677],
       slides:[
          { pc: 'EUPA/images/kv.jpg',mobile:'EUPA/images/M_kv.jpg' },
       ],
      floorImg: [
        {
          href:'#pro7675',
          image: 'EUPA/images/bar_01.png',
          text:'熱銷商品',
          moreUrl:'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23897'
        },
        {
           href:'#pro7676',
          image: 'EUPA/images/bar_02.png',
          text:'電鍋/料理鍋',
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124110'
        },
         {
           href:'#pro7678',
          image: 'EUPA/images/bar_04.png',
          text:"廚房小幫手",
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124112'
        },
        {
           href:'#pro7677',
          image: 'EUPA/images/bar_03.png',
          text:'咖啡機',
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124111'
        }
      ],
      today: new Date(),
      moreImage:'EUPA/images/more.png',
      statusNav:0,
      swiperRef:null
    }
  },
  mounted() {
    const { today, menus } = this

    //撈好樓層商品
    this.getFloorData(menus)

    //導航區滾動定位
    document.addEventListener('scroll',(e) => {
      let scrollTop = document.documentElement.scrollTop
      document.querySelectorAll('.floor').forEach((el,i) => {
        let top = el.getBoundingClientRect().top + scrollTop,
        bottom = top + window.innerHeight;
        if (scrollTop >= top && scrollTop < bottom) {
          this.statusNav = i;
          this.gotoSlide(i)
        }
      });
    })
  },
  methods: {
    onSwiper(swiper) {
      this.swiperRef = swiper
    },
    gotoSlide(id) {
      this.swiperRef.slideTo(id);
    }
  },
}
</script>

<template>
  <div id="eupa-container" v-cloak>
    <div class="rel bg:#404040 p:5%|0|2% p:7%|0|2%@<992 p:16vw|0|4vw@<576 box:border-box"> 
      <img class="abs w:full left:0 right:0 m:auto top:45px z:-1" :src="$filters.siteUrl('EUPA/images/logo_bg.jpg')" />
      <span class="w:15% w:35%@<992 w:50%@<576 h:auto block m:auto">
        <img :src="$filters.siteUrl('EUPA/images/logo.png')" />
      </span>
    </div>

    <nav class="sticky top:45px z:99 bg:#000 p:1% p:3%@<992 p:4%@<576 box:border-box">
      <swiper class="max-w:992px min-w:50% w:auto@<992"
      :loop="false"
      :breakpoints="{
        0:{
          slidesPerView:2.4,
          spaceBetween:0
        },
        601:{
          slidesPerView:3.5,
          spaceBetween:20
        },
        992:{
          slidesPerView:4,
          spaceBetween:40
        }
      }"
      @swiper="onSwiper"
      >
       <swiper-slide v-for="(floor,f) in floorImg">
          <a :href="floor.href" :class="[statusNav == f ? 'active' : '']" class="f:bold color:#fff color:#d0be96.active">
             <span class="f:1.5em f:2em@<992 f:1.2em@<576">{{ floor.text }}</span>
          </a>
        </swiper-slide>
      </swiper>
    </nav>

    <div class="background">
      <swiper
      :loop="false"
       :autoplay="{
              delay: 2500,
              disableOnInteraction: false
            }"
            :pagination="{
            el: '.background .swiper-pagination',
            clickable:true
          }"
           :navigation="{
          nextEl: '.background .next',
          prevEl: '.background .prev'
        }"
      >
      <swiper-slide v-for="slide in slides">
        <img class="pc" :src="$filters.siteUrl(slide.pc)" alt=" " />
         <img class="mobile" :src="$filters.siteUrl(slide.mobile)" alt=" " />
      </swiper-slide>
      </swiper>
       <div class="swiper-pagination"></div>
        <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <CommonFloor :floors="floorImg" :menu="menus" :moreImage="moreImage"></CommonFloor>
  </div>

  <div class="custom-top"><p></p></div>
</template>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/EUPA/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/EUPA/images/';

/*  共用樣式調整 */
body {
  background: #141412;
}

form#form1 {
  position: relative;
  overflow: initial;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.jpg';
    background: url($image) repeat-y center;
    background-size: 107% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.bg01 {
  background: none;
  border: 3px solid #fff;
  padding: 1.5%;
  box-sizing: border-box;
}

section {
  .title {
    width: 30%;
    .more {
      width: 40%;
      font-size: 0;
      position: absolute;
      padding: 0;
      margin: 0;
      right: -46%;
      top: 14%;
    }
  }
}

#eupa-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 40%;
  }
}

nav {
  .swiper-wrapper {
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .swiper-slide {
    .active {
      span {
      position: relative;
      &:before {
        content: '';
         display: block;
        width: 100%;
        height: 2px;
        background: #d0be96;
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #eupa-container {
    .background {
      padding-bottom: 150vw;
    }
  }

  section {
    .title {
      width: 50%;
      .more {
        width: 30%;
        right: -16vw;
        top: 3vw;
      }
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

  .copyR{
    margin-bottom: 0;
  }

  #eupa-container {
    .background {
      padding-bottom: 155vw;
    }
  }

  section {
    .title {
      width: 70%;
      margin: 0 auto 0;
      .more {
        width: 35%;
        right: -15vw;
        top: -3vw;
      }
    }
  }
}
</style>
