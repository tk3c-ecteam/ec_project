
<script>
export default {
  data() {
    return {
      tabs: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121773',
          image: '24spring_clean/images/2504/logo_Homedics.png',
          id:6564
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121772',
          image: '24spring_clean/images/2504/logo_Hamilton.png',
          id:6565,
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121774',
          image: '24spring_clean/images/2504/logo_Gtech.png',
          id:6561
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121775',
          image: '24spring_clean/images/2504/logo_BISSELL.png',
          id:6562
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=122689',
          image: '24spring_clean/images/2504/logo_INXNI.png',
          id:6563
        }
      ],
      floorImg: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=123967',
          image: '24spring_clean/images/2504/bar_f01.png',
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2504/bar_f02.png',
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2504/bar_f03.png',
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2504/bar_f04.png',
        }
      ],
      menuFloor: [6566, 6567, 6568, 6569],
      status: 0,
      statusTab: 1,
      moreImage: '24spring_clean/images/2504/more.png',
      swiperOption:{
        breakpoints:{
           0:{
            slidesPerView:3,
            grid:{
              fill:'colmn',
              rows:2
            }
          },
           600:{
            slidesPerView:2.5,
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
       <Tabs :tabs="tabs" :swiperOption="swiperOption.breakpoints">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" :moreImage="moreImage" v-for="(tab, t) in tabs" :moreUrl="tab.moreUrl" :menus="tab.id" :index="t" :selectedTab="selectedTab">

          </TabContent>
        </template>
      </Tabs>
    </section>


    <!-- 其他樓層商品 -->
     <CommonFloor :floors="floorImg" :menu="menuFloor" :moreImage="moreImage" :isSwiper="1"></CommonFloor>
  </div>

  <!-- 右側選單 + 手機板 -->
   <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/24spring_clean/images/2504/';
$origin: 'https://events.tk3c.com/events_net/events_net/24spring_clean/images/2504/';

/*  共用樣式調整 */
form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.png';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -2;
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
    $image: $dir + 'KV.png';
    @include bg-responsive($image, 2000, 790);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 42%;
  }
}

section {
  .title {
    margin: 0 auto 0;
  }
}

.tab-box {
  .tab {
    .swiper-wrapper {
      justify-content: left;
    }
  }
  .more {
    margin: 0 auto 0;
    font-size: 0;
    padding: 0;
  }
}

.floor {
  .bg01 {
    padding: 2% 2% 1% !important;
  }
  &:nth-of-type(odd) {
    .content {
      .bg01 {
        background: #a12dee;
      }
    }
  }
  &:nth-of-type(even) {
    .content {
      .bg01 {
        background: #e74733;
      }
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #spring-container {
    .background {
      background-size: 120% auto;
      background-position:
        -11vw 4vw,
        top;
      padding-bottom: 52vw;
    }
  }

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
  #spring-container {
    .background {
      $image: $dir + 'KV_M.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position:
        0 10vw,
        top;
      padding-bottom: 140vw;
    }
  }
}
</style>
