<script setup>
const contents = defineModel("contents");
</script>

<script>
  export default {
     data(){
      return {
         swiper:null,
         statusNav:null
      }
     },
     mounted() {
      //回到上層按鈕滾動後顯示
       window.addEventListener('scroll',this.showMobileTop);

       //導航區滾動定位
       if (document.querySelectorAll('nav').length > 0) {
         window.addEventListener('scroll',this.storeScroll);
      }
     },
     beforeUnmount() {
        window.removeEventListener('scroll',this.showMobileTop);
        window.removeEventListener('scroll',this.storeScroll);
     },
     methods: {
      onSwiper(swiper) {
        this.swiper = swiper
      },
      goSlide(id) {
        this.swiper.slideTo(id);
      },
      //回到上層
      goTop2() {
        window.scrollTo(0,0);
        this.statusNav = null;
      },
       storeScroll() {
         let scrollTop = window.scrollY;

         document.querySelectorAll(".floor").forEach((el, i) => {
           let top = el.getBoundingClientRect().top + scrollTop - 150,
             bottom = top + window.innerHeight;
           if (scrollTop >= top && scrollTop < bottom) {
             this.statusNav = i
             this.goSlide(this.statusNav);
           }

           if (scrollTop < 300) {
            this.statusNav = null;
            this.goSlide(this.statusNav);
           }
         });
       }
     },
  }
</script>

<!-- 旗艦館共用版本 -->
<template>
  <div id="store-container" v-cloak>
    <div
      class="logo rel p:45px|0|1.5% p:45px|0|2%@<992 p:45px|0|1.5rem@<576 box:border-box"
    >
      <!-- 品牌標題 圖片版 -->
      <span
        v-if="contents[0].logoImage != undefined"
        class="logo-title w:15% w:35%@<992 w:50%@<576 h:auto block pt:2% pt:2.5%@<992 pt:8%@<576 m:auto"
      >
        <img :src="$filters.siteUrl(contents[0].logoImage)" />
      </span>
      <!-- 品牌標題 文字版 -->
      <b class="f:2em f:2.5em@<992 f:1.2em@<576 f:bold" v-if="contents[0].logoText != undefined">{{
        contents[0].logoText
      }}</b>
    </div>

    <!-- 背景滾動效果  -->
    <p class="item" v-if="contents[0].bgScroll != undefined">
      <img :src="$filters.siteUrl(contents[0].bgScroll)" />
    </p>

    <!-- 導航區 -->
    <nav v-if="contents[0].floorImg != undefined" class="sticky w:full top:45px z:99 p:0.5%|1%|0.5% p:2%|3%|2%@<992 p:2%|4%|3%@<576 box:border-box"
    >
      <swiper
        class="max-w:1100px min-w:50% w:auto@<992"
        :loop="false"
        :slidesPerView="'auto'"
        :space-between="10"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(floor, f) in contents[0].floorImg" class="flex-basis:fit-content">
          <a :href="floor.href" :class="{'active' : statusNav == f}">
            <span class="f:1.2em f:2em@<992 f:1.2em@<576 f:1.5em@>2000">
              {{ floor.text }} <i class="f:0.9rem">▼</i>
            </span>
          </a>
        </swiper-slide>
      </swiper>
    </nav>

    <!-- banner輪播區 -->
    <div class="background">
      <swiper
        :loop="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :autoHeight="'auto'"
        :pagination="{
          el: '.background .swiper-pagination',
          clickable: true,
        }"
        :navigation="{
          nextEl: '.background .next',
          prevEl: '.background .prev',
        }"
      >
        <swiper-slide v-for="(slide,s) in contents[0].slides">
          <a :href="$filters.addGALink(slide.url)" target="_blank">
             <img v-if="slide.pc" class="pc" :src="$filters.siteUrl(slide.pc)" />
             <img v-if="slide.mobile" class="mobile" :src="$filters.siteUrl(slide.mobile)"/>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <!-- 商品樓層 -->
    <div v-if="contents[0].menu">
       <CommonFloor :floors="contents[0].floorImg" :menu="contents[0].menu"  :moreImage="contents[0].moreImage"></CommonFloor>
    </div>

     <div class="custom-top" :class="{'isShow':isGoTop}" @click="goTop2"><p></p></div>
  </div>
</template>

<style lang="scss">
  #store-container {
    .background {
      width: 100%;
      height: 0;
      position: relative;
      margin: 0 auto 0;
      .swiper-pagination
        {
          bottom: 0 !important;
        }
    }
  }

  nav {
  .swiper-wrapper {
    justify-content: center;
    padding-bottom: 0;
  }
}

.custom-top {
  &.isShow {
    display: block;
  }
}

/* 手機版 */
@include media-query("mobile", "992px") {
  nav {
    .swiper-wrapper {
      justify-content: left;
    }
  }
}
@include media-query("mobile", "576px") {
  .copyR {
    margin-bottom: 0;
  }
}
</style>
