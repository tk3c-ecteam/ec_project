<script setup>
const contents = defineModel("contents");
</script>

<script>
  export default {
     data(){
      return {
         swiper:null,
         statusNav:0
      }
     },
     mounted() {
       //導航區滾動定位
       if (document.querySelectorAll('nav').length > 0) {
       document.addEventListener("scroll", (e) => {
         let scrollTop = document.documentElement.scrollTop;

         if (scrollTop >= 150) {
          document.querySelector('nav').classList.add('fixed');
         } else {
           document.querySelector('nav').classList.remove('fixed');
         }

         document.querySelectorAll(".floor").forEach((el, i) => {
           let top = el.getBoundingClientRect().top + scrollTop -200,
             bottom = top + window.innerHeight;
           if (scrollTop >= top && scrollTop < bottom) {
            this.statusNav = i
             this.goSlide(this.statusNav);
             el.classList.add('active')
           } else {
            el.classList.remove('active')
           }
         });
       });
      }
     },
     methods: {
      onSwiper(swiper) {
        this.swiper = swiper
      },
      goSlide(id) {
        this.swiper.slideTo(id);
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
    <nav v-if="contents[0].floorImg != undefined" class="w:full top:45px z:99 p:0.5%|1%|0.5% p:2%|3%|2%@<992 p:2%|4%|2%@<576 box:border-box"
    >
      <swiper
        class="max-w:1100px min-w:50% w:auto@<992"
        :loop="false"
        :slidesPerView="'auto'"
        :space-between="10"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(floor, f) in contents[0].floorImg" class="flex-basis:fit-content">
          <a :href="floor.href" :class="[statusNav == f ? 'active' : '']">
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
        <swiper-slide v-for="slide in contents[0].slides">
          <a :href="$filters.addGALink(slide.url)" target="_blank">
             <img class="pc" :src="$filters.siteUrl(slide.pc)" />
             <img class="mobile" :src="$filters.siteUrl(slide.mobile)" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>
  </div>

  <div class="custom-top"><p></p></div>
</template>

<style lang="scss">
  #store-container {
    .background {
      width: 100%;
      height: 0;
      position: relative;
      margin: 0 auto 0;
      padding-bottom: 40%;
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
  &.fixed {
    position: fixed;
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
  .fix_btn {
    display: block;

    .dropdown-menu {
      display: none;
    }
  }

  .copyR {
    margin-bottom: 0;
  }
}
</style>
