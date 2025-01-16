<script setup>
import listM from '@/views/layout/listM.vue';

const today = new Date()

//banner輪播
const slides = [
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=244460',
    pc: 'dyson/images/dyson231109.jpg',
    mobile: 'dyson/images/dyson231109M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=240606',
    pc: 'dyson/images/dyson231109B2.jpg',
    mobile: 'dyson/images/dyson231109B2M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=239788',
    pc: 'dyson/images/dysonv12.jpg',
    mobile: 'dyson/images/dysonv12M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=242153',
    pc: 'dyson/images/dysonHD15.jpg',
    mobile: 'dyson/images/dysonHD15M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=210740',
    pc: 'dyson/images/bn5.jpg',
    mobile: 'dyson/images/bn5M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=216981',
    pc: 'dyson/images/bn6.jpg',
    mobile: 'dyson/images/bn6M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=216977',
    pc: 'dyson/images/bn7.jpg',
    mobile: 'dyson/images/bn7M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?cid=110689&aid=22108&hid=110701&pid=216979',
    pc: 'dyson/images/bn1.jpg',
    mobile: 'dyson/images/bn1M.jpg'
  }
]

//5個 商品類別
const navs = [
  {
    url: 'https://www.tk3c.com/dic2.aspx?cid=71484&aid=16984&hid=71501',
    image: 'dyson/images/icon1.png'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?cid=110689&aid=22108&hid=110701&pid=216979',
    image: 'dyson/images/icon2.png'
  },
  {
    url: 'https://www.tk3c.com/dic2.aspx?cid=71323&aid=16887&hid=71363',
    image: 'dyson/images/icon3.png'
  },
  {
    url: 'https://www.tk3c.com/dic2.aspx?cid=4640&aid=2488&hid=53624',
    image: 'dyson/images/icon4.png'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=245500',
    image: 'dyson/images/icon5.png'
  }
]

const menu = [2383, 2384, 2385, 2386, 2387]
const floorImg = [
  {
    image: 'dyson/images/fl1.jpg',
    text:'新品上市',
    href:'#pro2383'
  },
  {
    image: 'dyson/images/fl2.jpg',
    text:'吸塵器',
    href:'#pro2384'
  },
  {
    image: 'dyson/images/fl3.jpg',
    type: listM,
    text:'空氣清淨機與風扇',
    href:'#pro2385'
  },
  {
    image: 'dyson/images/fl4.jpg',
    type: listM,
    text:'頭髮護理',
    href:'#pro2386'
  },
  {
    image: 'dyson/images/fl5.jpg',
    text:'乾手器',
    href:'#pro2387'
  }
]
</script>

<template>
  <div id="dyson-container">
    <div class="header">
      <p class="logo">
        <img :src="$filters.siteUrl('dyson/images/logo.png')" alt="" />
      </p>
      <b>品牌旗艦館</b>
    </div>
    <div class="navbar">
      <ul>
        <li v-for="(floor,f) in floorImg">
          <a :href="floor.href">{{ floor.text }}</a>
        </li>
      </ul>
    </div>

    <!-- 輪播區 -->
    <div class="slidebox">
      <swiper
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :navigation="{
          nextEl: '.slidebox .next',
          prevEl: '.slidebox .prev'
        }"
        :pagination="{
          el: '.slidebox .page',
          type: 'bullets',
          clickable: true
        }"
      >
        <swiper-slide v-for="slide in slides">
          <a :href="$filters.addGALink(slide.url)" target="_blank">
            <img class="pc" :src="$filters.siteUrl(slide.pc)" />
            <img class="mobile" :src="$filters.siteUrl(slide.mobile)" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination page bottom:2%!"></div>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <!-- 選單區 -->
    <div class="navSed pt:2%">
      <ul>
        <swiper
          :loop="false"
          :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }"
          :space-between="20"
          :breakpoints="{
            0: {
              slidesPerView: 2
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 5
            }
          }"
        >
          <swiper-slide v-for="nav in navs">
            <a :href="$filters.addGALink(nav.url)" target="_blank">
              <img :src="$filters.siteUrl(nav.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </ul>
    </div>

    <!-- 影片區 -->
    <div class="youtube">
      <video autoplay muted loop>
        <source :src="$filters.siteUrl('dyson/video/dyson2307.mp4')" type="video/mp4" />
      </video>
    </div>

    <!-- 商品樓層區 -->
    <CommonFloor :floors="floorImg" :menu="menu"></CommonFloor>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
           <li v-for="(floor,f) in floorImg">
            <a :href="floor.href">{{ floor.text }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 手機版 -->
   <mobile :asides="floorImg"></mobile>
</template>

<style lang="scss">
  @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/dyson/images/";
$origin: "https://events.tk3c.com/events_net/events_net/dyson/images/";

body {
  background-color: #e7e6e6;
  background-size: cover;
  overflow-x: hidden;
}

.protitle {
  height: auto;
  @include hide-text;
  margin: 0 auto 2%;
}

.bg01 {
  background: none;
  margin: 0 auto 8%;
}

.fb-fans {
  display: none;
}

#dyson-container {
  width: 100%;
  margin: 0 auto;
  padding-top: 1vw;
  .slidebox {
    position: relative;
    margin: 0 auto 0;
    .swiper-pagination {
      bottom: 2% !important;
    }
  }
}

/* header區 */
.header {
  background: black;
  color: white;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  .logo {
    width: 10%;
    height: auto;
  }
  b {
    font-size: 1.5em;
    font-weight: bold;
  }
}

/* 選單區 */

.navbar {
  background: white;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    li {
      width: 14%;
      font-size: 1.5em;
      color: #000;
      padding: 5px;
      font-weight: bold;
      &:hover,
      &:active {
        background: #6c6c6c;
        color: white;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 0;
    z-index: 999;
  }
}

/* icon按鈕區 */
.navSed {
  width: 60%;
  margin: 0 auto 2%;
  text-align: center;

  li {
    &:hover {
      transform: translateY(0.6em);
      transition: all 0.4s linear;
    }
  }
  .sed {
    margin: 0 auto 0;
    overflow: hidden;
    li {
      width: 20%;
    }
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
}

/* 影片區 */
.youtube {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin: 0 auto 5%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  video {
    width: 100%;
  }
}

.event-box {
  li {
    width: 48%;
    margin: 0 5px;
  }
  ul {
    @include flex-arrange;
    width: 70%;
  }
}

.floor {
  .title {
    b {
      font-size: 0;
    }
  }
}

/* 其他尺寸 */
@include media-query("mobile", "1440px") {
  .navbar {
    ul {
      li {
        width: 15%;
      }
    }
  }
}
@include media-query("mobile", "1280px") {
  .navbar {
    ul {
      li {
        font-size: 1.2em;
      }
    }
  }

  #dyson-container {
    padding-top: 3%;
  }
}
@include media-query("mobile", "1145px") {
  .navbar {
    ul {
      li {
        font-size: 1em;
      }
    }
  }
}

@include media-query("mobile", "992px") {
  .navbar {
    ul {
      li {
        font-size: 0.9em;
      }
    }
  }

  .header {
    b {
      font-size: 1em;
    }
    .logo {
      width: 12%;
    }
  }

  #dyson-container {
    padding-top: 5%;
  }

  .event-box {
    ul {
      width: 85%;
    }
  }

  .navSed {
    width: 90vw;
  }
}
@include media-query("mobile", "768px") {
  .header {
    .logo {
      width: 14%;
    }
  }
  body {
    background-position: 0 30vmin, top;
  }
}

@include media-query("mobile", "576px") {
  .header {
    .logo {
      width: 25%;
    }
    b {
      font-size: 18px;
    }
  }

  body {
    background-position: 0 85vmin, top;
  }

  .navbar {
    display: none;
  }

  #dyson-container {
    padding-top: 11%;
  }

  .event-box {
    ul {
      width: 95%;
    }
    li {
      width: 47%;
    }
  }

  .youtube {
    margin: 0 auto 10%;
  }
}

@include media-query("mobile", "360px") {
  .header {
    .logo {
      font-size: 1.5em;
      line-height: 2em;
    }
  }
}

@include media-query("mobile", "320px") {
  .copyR {
    margin-bottom: 50px !important;
  }

  .header {
    b {
      font-size: 12px;
    }
  }

  .event-box {
    li {
      margin: 0 4px;
    }
  }
}

@include media-query("pc", "2500px") {
  body {
    background-position: 0 -25vmax, top;
  }
}

</style>
