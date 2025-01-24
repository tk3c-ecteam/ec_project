<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2502/TT.png')" />
      </h2>

      <div class="pro">
        <swiper 
        :loop="true" 
        :parallax="true" 
        :effect="'fade'"
        :fadeEffect="{
          crossFade:true
        }"
        :autoplay="{ delay: 2200, disableOnInteraction: false }"
          :modules="[Parallax,EffectFade]">
          <swiper-slide v-for="(pro, p) in proTV" :key="p" class="flex!">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-y="-1500" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('2020TVforever/images/2502/item.png')" />
    </p>

    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2502/S01.png')"/>
      </h2>

      <!-- 精選活動 -->
       <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11312&aid=23350&strPreView=y')" target="_blank">
        <img class="pc" :src="$filters.siteUrl('2020TVforever/images/2502/gift.png')"/>
        <img class="mobile" :src="$filters.siteUrl('2020TVforever/images/2502/giftM.png')"/>
       </a>
    </section>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis && product2[menuDis] != ''">
      <h2 class="title">
         <img :src="$filters.siteUrl('2020TVforever/images/2502/S02.png')" />
      </h2>

      <div class="discount">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
         <a class="more" :href="$filters.addGALink(disUrl)" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2502/more.png')" />
        </a>
      </div>
    </section>

    <!-- 福利 -->
    <section class="sale-group scroll" id="sale">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2502/S03.png')" />
      </h2>

      <div class="content">
        <Tabs :isSwiper="1" :tabs="saleTab" :statusSelect="1">
          <template v-slot="{ selectedTab }">
            <TabContent :isSwiper="1" v-for="(content, c) in saleTab" :menus="menuSale[c]" :index="c"
              :selectedTab="selectedTab">

            </TabContent>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- 夜間下殺 -->
    <section class="night-box" v-show="isNight && products[menuNight[n]] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2502/S04.png')" />
      </h2>

      <div class="content">
        <Tabs :tabs="nights">
          <template v-slot="{ selectedTab }">
            <TabContent v-for="(content, c) in nights" :menus="menuNight[c]" :index="c" :selectedTab="selectedTab">

            </TabContent>
          </template>
        </Tabs>
        <a class="more" :href="$filters.addGALink('https://events.tk3c.com/events_net/nightsale/index.html')" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2502/more.png')" />
        </a>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-group scroll" id="brand">
      <h2 class="title">
       <img :src="$filters.siteUrl('2020TVforever/images/2502/S05.png')" />
      </h2>

      <swiper class="overflow:hidden" :autoplay="{
          delay: 1800,
          disableOnInteraction: false
        }" :space-between="10" :breakpoints="{
          0: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          600: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          992: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 2
            }
          }
        }" :pagination="{
          el: '.brand-group .swiper-pagination'
        }" :style="{
          '--swiper-pagination-color': '#fff'
        }">
        <swiper-slide v-for="(brand, b) in brands" :key="b">
          <a :href="$filters.addGALink(brand.url)" target="_blank">
            <img :src="$filters.siteUrl(brand.image)" alt="" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menu" :moreImage="moreImage"></CommonFloor>
  </div>

  <!-- 右側選單 + 手機版選單 -->
  <RightAside :asides="asides" :type="'mobile2'"></RightAside>
</template>

<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
      proTV: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=247821',
          image: '2020TVforever/images/2502/PD_247821.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=249380',
          image: '2020TVforever/images/2502/PD_249380.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=250719',
          image: '2020TVforever/images/2502/PD_250719.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=253004',
          image: '2020TVforever/images/2502/PD_253004.png'
        }

      ],
      brands: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=40805',
          image: '2020TVforever/images/2502/JVC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11336',
          image: '2020TVforever/images/2502/SONY.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340',
          image: '2020TVforever/images/2502/samsung.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2502/philips.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338',
          image: '2020TVforever/images/2502/pana.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343',
          image: '2020TVforever/images/2502/LG.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11346',
          image: '2020TVforever/images/2502/sampo.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11353',
          image: '2020TVforever/images/2502/benq.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=112906',
          image: '2020TVforever/images/2502/aoc.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2502/tcl.png'
        }
      ],
      saleTab: [
        { image: '2020TVforever/images/2502/sale1.png' },
        { image: '2020TVforever/images/2502/sale2.png' },
        { image: '2020TVforever/images/2502/sale3.png' },
        { image: '2020TVforever/images/2502/sale4.png' },
        { image: '2020TVforever/images/2502/sale5.png' }
      ],
      nights: [
        {
          image: '2020TVforever/images/2502/night2.png'
        }
      ],
      floorImg: [
        {
          moreUrl: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2502/S06.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2502/S07.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2502/S08.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2502/S09.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2502/S10.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2502/S11.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2502/S12.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2502/S13.png'
        }
      ],
      asides: [
        { text: '品牌福利出清', href: '#sale' },
        { text: '人氣大牌', href: '#brand' },
        { text: '必BUY熱銷排行', href: '#pro2751' },
        { text: 'OLED電視最大賞', href: '#pro5613' },
        { text: '大視野加倍過癮', href: '#pro5198' },
        { text: 'QLED極致炫彩', href: '#pro5199' },
        { text: '小資族激省攻略', href: '#pro4846' },
        { text: '投影氣氛嗨翻天', href: '#pro5200' },
        { text: '聲臨其境更刺激', href: '#pro5201' },
        { text: '超給力助攻周邊', href: '#pro5202' }
      ],
      menuDis: 4328, //現折 清單編號
      menuSale: [5977, 4465, 4466, 4463, 4467], // 出清 陳列編號
      menuNight: [5420], //夜殺 陳列編號
      menu: [2751, 5613, 5198, 5199, 4846, 5200, 5201, 5202],
      status: 0,
      statusSale: 1,
      isNight: true,
      isDis: false,
      today: new Date(),
      disUrl: '',
      moreImage:''
    }
  },
  mounted() {
    const { menuDis, today } = this

    //看更多按鈕
    this.moreImage = '2020TVforever/images/2502/more.png';

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    // 2025 1/03 隱藏現折券樓層
    if (today >= new Date('2025/01/14')) {
      this.isDis = true;
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124236&aid=23905&strPreView=y'
    } else {
      this.disUrl = 'https://www.tk3c.com/dictitleurl.aspx?cid=124130&strPreView=y'
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2020TVforever/images/2502/';
$origin: 'https://events.tk3c.com/events_net/events_net/2020TVforever/images/2502/';

/*  共用樣式調整 */
body {
  background: #26152e;
   &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    z-index: -1;
  }
}

.bg01 {
  margin: 0 auto 1%;
  background: #a75cf0;
  border-radius: 10px;
  box-sizing: border-box;
}

.fix_btn {
  .dropdown-menu {
    display: none;
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 10px;
    box-sizing: border-box;
  }
}

/* 電視頁面區 */
#tv-container {
  width: 100%;
  margin: 0 auto 0;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 46%;
    .pro {
      width: 30%;
      position: absolute;
      right: 17%;
      top: 21%;
    }
    .title {
      width: 33%;
      position: absolute;
      left: 14%;
      top: 27%;
      animation: jump-two-time 1.6s ease-in;
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 50%;
        height: 100%;
        $image: 'https://events.cdn-tkec.tw/events_net/events_net/rock202206/images/light_line.png';
        background: url($image) no-repeat center;
        background-size: 100% auto;
        left: 20%;
        top: 8%;
        animation: move-right 3s infinite;
        mix-blend-mode: lighten;
      }
    }
  }
}

.item {
 top: 250px;
 mix-blend-mode: lighten;
 animation: light 1.7s infinite;
}

.sale-group {
  .tab-content {
    .bg01 {
      margin: 0 auto 0;
    }
  }
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
    .swiper-slide {
      flex-basis: 16%;
    }
  }
}

.discount-box {
  .bg01 {
    margin: 0 auto 1%;
  }
}

.night-box {
  .bg01 {
    margin: 0 auto 1%;
  }
  .tab {
    a {
      pointer-events: none;
      cursor: auto;
    }
  }
}

#sale-area {
  .swiper-slide {
    .other {
      transform: scale(0.7);
      margin-top: -7%;
    }
  }
}

.brand-group {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #fff !important;
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #tv-container {
    .background {
      padding-bottom: 60vw;
      .title {
        width: 45%;
        top: 13vw;
        left: 4vw;
      }
      .pro {
        width: 40%;
        right: 10vw;
        top: 13vw;
      }
    }
  }

 body {
  &:before {
    background-size: 120% auto;
    background-position: -11vw 4vw,top;
  }
 }

 .sale-group {
  .tab {
    .swiper-slide {
      flex-basis: 18%;
    }
  }
 }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #tv-container {
    .background {
      padding-bottom: 173vw;
      .title {
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 95%;
        top: 27vw;
      }
      .pro {
        width: 90%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 90vw;
        .swiper-wrapper {
          align-items: baseline;
        }
      }
    }
  }

  body {
    &:before {
      background-size: 320% auto;
      background-position: -170vw 55vw,top;
    }
  }

  .brand-group {
    .swiper-pagination {
      bottom: -6% !important;
    }
  }

  .night-box {
     .tab {
      li {
        width: 40%;
      }
    }
  }

  .sale-group {
     .tab {
      .swiper-slide {
        flex-basis: 28%;
      }
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }
}
</style>
