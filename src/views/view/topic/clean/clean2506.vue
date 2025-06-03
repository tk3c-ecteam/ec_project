
<script>
export default {
  data() {
    return {
      tabs: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121773',
          image: '24spring_clean/images/2506/logo_Homedics.png',
          id:6564
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121772',
          image: '24spring_clean/images/2506/logo_Hamilton.png',
          id:6565,
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121774',
          image: '24spring_clean/images/2506/logo_Gtech.png',
          id:6561
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121775',
          image: '24spring_clean/images/2506/logo_BISSELL.png',
          id:6562
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=122689',
          image: '24spring_clean/images/2506/logo_INXNI.png',
          id:6563
        }
      ],
      floorImg: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=123967',
          image: '24spring_clean/images/2506/bar_f01.png',
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2506/bar_f02.png',
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2506/bar_f03.png',
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2506/bar_f04.png',
        }
      ],
      menuFloor: [6566, 6567, 6568, 6569],
      moreImage: '24spring_clean/images/2506/more.png',
      swiperOption:{
        breakpoints:{
           0:{
            slidesPerView:1,
            grid:{
              fill:'colmn',
              rows:5
            }
          },
           600:{
            slidesPerView:2,
            grid:{
              fill:'colmn',
              rows:1
            }
          },
          992:{
            slidesPerView:3,
            grid:{
              fill:'colmn',
              rows:2
            }
          }
        }
      }
    }
  }
}
</script>

<template>
  <div id="spring-container">
    <div class="background"></div>

    <!-- 品牌商品 -->
    <section class="tab-box">
       <Tabs :tabs="tabs" :swiperOption="swiperOption.breakpoints" :statusSelect="1">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(tab, t) in tabs" :moreUrl="tab.moreUrl" :menus="tab.id" :index="t" :selectedTab="selectedTab">
            <template #moreBtn>
              <a class="more" :href="$filters.addGALink(tab.moreUrl)" target="_blank">
                <img :src="$filters.siteUrl(moreImage)">
              </a>
            </template>
          </TabContent>
        </template>
      </Tabs>
    </section>


    <!-- 其他樓層商品 -->
     <CommonFloor :floors="floorImg" :menu="menuFloor" :isSwiper="1">
        <template #more>
          <img :src="$filters.siteUrl(moreImage)">
        </template>
     </CommonFloor>
  </div>

  <!-- 右側選單 + 手機板 -->
   <RightAside :type="'mobile'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/24spring_clean/images/2506/';

/*  共用樣式調整 */
body {
  background: #fef7f2;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG_PC.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px,top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: none;
  margin: 0 auto 0;
}

#spring-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 47%;
  }
}

section {
  .title {
    margin: 0 auto 0;
  }
}

.floor {
  .bg01 {
    padding: 2% 2% 1% !important;
  }
  &:nth-of-type(2) {
    .bg01 {
      background: #e27a67;
    }
  }
  &:nth-of-type(3) {
    .bg01 {
      background: #f6d581;
    }
  }
  &:last-of-type {
    .bg01 {
      background: #67b488;
    }
  }
}

.tab-box {
  .tab-content {
    .bg01 {
      background: #ff38a9;
    }
  }
}

@include media-query('mobile', '1800px') {
  .tab-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }
}
@include media-query('mobile', '992px') {
  .tab-box {
    .tab {
      .swiper-slide {
        flex-basis: fit-content;
      }
    }
  }
}
/* 手機版 */
@include media-query('mobile', '576px') {
  body {
    &:before {
      $image: $dir + 'BG_M.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position:
        0 10vw,
        top;
    }
  }

  #spring-container {
    .background {
      padding-bottom: 160vw;
    }
  }

  .tab-box {
    .tab {
      .swiper-wrapper {
        justify-content: center;
      }
    }
  }
}
</style>
