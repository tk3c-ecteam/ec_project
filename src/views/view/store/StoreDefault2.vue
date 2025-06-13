<script setup>
const contents = defineModel("contents");
</script>

<script>
  export default {
     data(){
      return {
         swiper:null,
         statusNav:null,
         status:0,
         statusMenu:0,
         isMobile:false,
         isClose:false,
         isOpen:false
      }
     },
     mounted() {
      //回到上層按鈕滾動後顯示
       window.addEventListener('scroll',this.showMobileTop);

        //導航區滾動定位
        if (document.querySelectorAll('nav').length > 0) {
         window.addEventListener('scroll',this.storeScroll);
      }

       this.getFloorData(this.contents[0].menu);
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

         //當前滾動位置超過100px時導航區固定
         if (scrollTop > 100) {
          document.querySelector('#store-container nav').classList.add('fixed');
         } else {
          document.querySelector('#store-container nav').classList.remove('fixed');
         }
       },
       mouseover(id) {
        this.statusMenu = id;
       },
       mouseleave() {
        this.statusMenu = null;
       },
       change(id,element) {
        if (this.isOpen === false) {
          this.closeNav();
        } 

        this.status = id;
        this.statusMenu = id;

        setTimeout(() => {
          if (element) this.goAnchor(element);
        }, 15);
       },
       //選單顯示
       mobileOpen(id) {
        this.status = id;
        this.statusMenu = id;
        this.isOpen != this.isOpen;
       },
       hasProduct(f) {
        return this.products[this.contents[0].menu[f]]?.Data.length > 0;
      },
      //手機版選單切換
      switchNav() {
        this.isMobile = true;
        this.isClose = true;
        document.body.style.overflow = 'hidden';
      },
      //手機板選單關閉
      closeNav() {
        this.isMobile = false;
        this.isClose = false;
        document.body.style.overflow = 'auto';
      }
     },
  }
</script>

<!-- 旗艦館共用版本(有下拉選單menu) -->
<template>
  <div id="store-container" v-cloak>
    <div @mouseleave="mouseleave" class="logo rel p:45px|0|1.5% p:45px|0|2%@<992 p:45px|0|1.5rem@<576 box:border-box">
      <!-- 品牌標題 圖片版 -->
      <span v-if="contents[0].logoImage != undefined"
        class="logo-title w:15% w:35%@<992 w:50%@<576 h:auto block pt:2% pt:2.5%@<992 pt:8%@<576 m:auto">
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
    <nav :class="{isMobile}" v-if="contents[0].dropMenus != undefined"
      class="w:full top:45px z:99 p:0.5%|1%|0.5% p:2%|3%|2%@<992 p:2%|4%|3%@<576 box:border-box">
      <ul class="menu gap:30 gap:50@<576 flex flex-wrap:wrap jc:center color:#fff">
        <li v-for="(floor, f) in contents[0].dropMenus" :class="{'active': status == floor.id}" class="w:fit-content">
          <a v-if="!floor.children" @click="change(floor.id,`#${floor.href}`)">
            <span class="f:1.2em f:2em@<992 f:1.2em@<576 f:1.5em@>2000">
              {{ floor.text }} <i class="f:0.9rem">▼</i>
            </span>
          </a>

          <div v-else @mouseenter="mouseover(floor.id)" @touchstart="mobileOpen(floor.id)">
            <span class="f:1.2em f:2em@<992 f:1.2em@<576 f:1.5em@>2000">
              {{ floor.text }} <i class="f:0.9rem">▼</i>
            </span>
            <ul class="dropdown" v-show="statusMenu == floor.id" @mouseleave="mouseleave">
              <li v-for="(child,c) in floor.children" :key="c">
                <a @click="change(child.id,`#${child.href}`)" target="_blank">
                  {{ child.name }}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>

    <!-- 手機版選單 -->
    <div class="navigation-header p:2% color:#fff text:center box:border-box hidden block@<576" @click="switchNav">
      <div class="navigation-button-toggler">
        <b class="f:1.2em f:bold">熱門品類 <i class="fa-regular fa-thumbs-up"></i></b>
      </div>
    </div>

    <!-- 手機板關閉按鈕 -->
    <div class="navigation-close fixed right:2vw top:17vw" v-if="isClose" @click="closeNav">
      <span class="navigation-body-close-button f:3rem">
        <i class="fa-solid fa-xmark"></i>
      </span>
    </div>  

    <!-- banner輪播區 -->
    <div class="background" @mouseleave="mouseleave" v-if="contents[0].slides">
      <swiper :loop="false" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :autoHeight="'auto'" :pagination="{
          el: '.background .swiper-pagination',
          clickable: true,
        }" :navigation="{
          nextEl: '.background .next',
          prevEl: '.background .prev',
        }">
        <swiper-slide v-for="(slide,s) in contents[0].slides">
          <a :class="[slide.url == undefined ? 'no' : '']" :href="$filters.addGALink(slide.url)" target="_blank">
            <img v-if="slide.pc" class="pc" :src="$filters.siteUrl(slide.pc)" loading="lazy" />
            <img v-if="slide.mobile" class="mobile" :src="$filters.siteUrl(slide.mobile)" loading="lazy" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <!-- 影片+圖片(非必要) -->
    <slot name="special"></slot>

    <!-- 商品樓層 -->
    <div v-if="contents[0].menu">
      <section class="floor" v-for="(floor,f) in contents[0].floorImg" v-show="status == f" :key="f">
        <div v-if="hasProduct(f)">
          <h2 class="title" :id="floor.href">
            <a v-if="floor.url" :href="$filters.addGALink(floor.url)" target="_blank">
              <img :src="$filters.siteUrl(contents[0].singleImage)">
              <b
                class="abs left:0 right:0 m:auto top:50% translateY(-50%) f:3em f:2.2em@<1500 f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">{{
                floor.text }}</b>
            </a>
            <div v-else>
              <img :src="$filters.siteUrl(contents[0].singleImage)">
              <b
                class="abs left:0 right:0 m:auto top:50% translateY(-50%) f:3em f:2.2em@<1500 f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">{{
                floor.text }}</b>
            </div>
          </h2>

          <listF :pro="products[contents[0].menu[f]].Data"></listF>
        </div>
      </section>
    </div>

    <div class="custom-top" :class="{'isShow':isGoTop}" @click="goTop2">
      <p></p>
    </div>
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
        .no {
          pointer-events: none;
          cursor: auto;
        }
    }
  }

  nav {
  .dropdown {
    width: 800px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
    padding: 15px 20px;
    box-sizing: border-box;
    margin: 20px auto 0;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right:0;
    z-index: 10;
    color: #fff;
    text-align: left;
    li {
      margin: 0 5px 10px;
      a {
        width: auto;
        display: block;
      }
    }
  }

  ul {
    &.menu {
      li {
        &.active {
          font-weight: bold;
        }
      }
    }
  }
}

.custom-top {
  &.isShow {
    display: block;
  }
}

.floor {
  .title {
    b {
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "992px") {
  nav {
    .dropdown {
      margin: 3vw auto 0;
      width: 90%;
      li {
        font-size: 1.2em;
      }
    }
    ul {
      justify-content: left !important;
      white-space: nowrap;
      overflow-x: auto;
      flex-wrap: nowrap !important;
    }
  }
}
@include media-query("mobile", "576px") {
  .copyR {
    margin-bottom: 0;
  }

  nav {
    padding: 0 4% 0 !important;
    ul.menu {
      width: 100%;
        height: 100%;
        position: fixed;
        left: -100%;
        z-index: 10;
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 30%;
    }
    &.isMobile {
      ul.menu {
        background: #000;
        pointer-events: auto;
        transition: 0.4s all;
        left: 0;
        display: block !important;
        z-index: 20;
        height: 80%;
        overflow-y: auto;
        li {
          width: 100%;
          border-bottom: 1px solid #fff;
          text-align: left;
          padding: 15px;
          box-sizing: border-box;
          &.active {
            color: #fff;
            background: #f00;
          }
        }
      }
      .dropdown {
        margin: 0 auto 0;
        width: 95%;
        position: static;
        background: none;
        li {
          border: none;
          padding: 5px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
