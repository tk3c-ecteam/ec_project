<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/title3.png')" />
      </h2>

      <div class="pro">
        <swiper :loop="true" :parallax="true" :autoplay="{ delay: 2200, disableOnInteraction: false }" :modules="[Parallax]">
          <swiper-slide v-for="(pro, p) in proTV" :key="p" class="flex!">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-x="800" data-swiper-parallax-duration="4" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="background2"></div>

    <p class="item">
      <img :src="$filters.siteUrl('2020TVforever/images/2503/item.png')" />
    </p>

    <section class="gift-box">
      <h3 class="w:30% w:50%@<992 w:60%@<576 m:0|auto|2%">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/btn-a.png')" />
      </h3>

      <!-- 精選活動 -->
      <a class="w:50% w:90%@<992 w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11312')" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2503/C4_a.png')" />
        </a>
    </section>

    <!-- 房東精選 -->
    <section class="home-box scroll" titles="房東專區" id="home" v-show="isHome">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2502/S14.png')" />
      </h2>
      <listF :pro="product2[menuHome]"></listF>
    </section>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis && product2[menuDis] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/S1.png')" />
      </h2>

      <div class="discount">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
        <a class="more" :href="$filters.addGALink(disUrl)" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2503/more.png')" />
        </a>
      </div>
    </section>

    <!-- 福利 -->
    <section class="sale-group scroll" titles="品牌福利出清" id="sale">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/S2.png')" />
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
        <img :src="$filters.siteUrl('2020TVforever/images/2503/S3.png')" />
      </h2>

      <div>
        <listF :pro="product2[menuNight]"></listF>
        <a class="more" :href="$filters.addGALink('https://events.tk3c.com/events_net/nightsale/index.html')"
          target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2503/more.png')" />
        </a>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-group scroll" titles="人氣大牌" id="brand">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/S4.png')" />
      </h2>

      <swiper class="overflow:hidden" :autoplay="{
          delay: 1600,
          disableOnInteraction: false
        }" :space-between="10" :breakpoints="{
          0: {
            slidesPerView: 2,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          600: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          992: {
            slidesPerView: 6,
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
    <CommonFloor :floors="floorImg" :menu="menu"></CommonFloor>
  </div>

  <!-- 左側選單+手機版 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單 -->
  <RightAside :asides="asides"></RightAside>
</template>

<script>
import { EffectFade, Parallax,EffectCoverflow} from 'swiper/modules'
export default {
  data() {
    return {
      EffectFade,
      EffectCoverflow,
      Parallax,
      proTV: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=233430',
          image: '2020TVforever/images/2503/233430_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=246742',
          image: '2020TVforever/images/2503/246742_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=247802',
          image: '2020TVforever/images/2503/247802_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=248269',
          image: '2020TVforever/images/2503/248269_a.png'
        },
          {
          url: 'https://www.tk3c.com/pt.aspx?pid=250173',
          image: '2020TVforever/images/2503/250173_a.png'
        },
          {
          url: 'https://www.tk3c.com/pt.aspx?pid=253091',
          image: '2020TVforever/images/2503/253091_a.png'
        },
           {
          url: 'https://www.tk3c.com/pt.aspx?pid=254426',
          image: '2020TVforever/images/2503/254426_a.png'
        }

      ],
      gifts:[
        {
          url:'',
          image:'2020TVforever/images/2503/C1.png'
        },
         {
          url:'',
          image:'2020TVforever/images/2503/C2.png'
        },
         {
          url:'',
          image:'2020TVforever/images/2503/C3.png'
        },
         {
          url:'',
          image:'2020TVforever/images/2503/C4.png'
        }
      ],
      brands: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=40805',
          image: '2020TVforever/images/2503/JVC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11336',
          image: '2020TVforever/images/2503/SONY.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340',
          image: '2020TVforever/images/2503/samsung.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2503/philips.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338',
          image: '2020TVforever/images/2503/pana.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343',
          image: '2020TVforever/images/2503/LG.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11346',
          image: '2020TVforever/images/2503/sampo.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11353',
          image: '2020TVforever/images/2503/BenQ.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=112906',
          image: '2020TVforever/images/2503/AOC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2503/TCL.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=124295',
          image: '2020TVforever/images/2503/toshiba.png'
        }
      ],
      saleTab: [
        { image: '2020TVforever/images/2503/logo_01.png' },
        { image: '2020TVforever/images/2503/logo_03.png' },
        { image: '2020TVforever/images/2503/logo_04.png' },
        { image: '2020TVforever/images/2503/logo_02.png' },
        { image: '2020TVforever/images/2503/logo_more.png' }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2503/S5.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2503/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2503/S7.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2503/S8.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2503/S9.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2503/S10.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2503/S11.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2503/S12.png'
        }
      ],
      menuDis: 4328, //現折 清單編號
      menuSale: [5977, 4465, 4466, 4463, 4467], // 出清 陳列編號
      menuNight: 5420, //夜殺 陳列編號
      menu: [2751, 5613, 5198, 5199, 4846, 5200, 5201, 5202],
      menuHome: 7769,
      status: 0,
      statusSale: 1,
      isNight: true,
      isDis: true,
      today: new Date(),
      disUrl: '',
      moreImage:'',
      isHome:true,
    }
  },
  mounted() {
    const { menuDis, today } = this

    //滾動後背景固定
    this.fixedBg('.background2','.home-box');

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 房東精選樓層商品
    this.getFloorSingle(this.menuHome)

     //撈取 夜殺樓層商品
    this.getFloorSingle(this.menuNight)

    // 2025 2/17 更新現折券連結
    if (today >= new Date('2025/02/17')) {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124362&aid=23927&strPreView=y';
    } else {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124306&aid=23922'
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2020TVforever/images/2503/';
$origin: 'https://events.tk3c.com/events_net/events_net/2020TVforever/images/2503/';

/*  共用樣式調整 */
body {
  background: #c70805;
}

.bg01 {
  background: #7a99e9;
  border-radius: 10px;
  box-sizing: border-box;
}

.fix_btn {
  .dropdown-menu {
    display: none;
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
    padding-bottom: 40%;
    .pro {
      width: 35%;
      position: absolute;
      right: 16%;
      top: 29%;
    }
    .title {
      width: 30%;
      position: absolute;
      left: 19%;
      top: 26%;
      animation: flipX 1.6s ease-in;
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
        top: -13%;
        animation: move-right 3s infinite;
        mix-blend-mode: lighten;
      }
    }
  }
}

.background2 {
   width: 100%;
    height: 100%;
    $image: $dir + 'BG2.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    &.fixed {
      position: fixed;
      background-position: 0 -207vw,top;
      z-index: -2;
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
      &:last-child {
        img {
          transform: scale(0.65);
          margin-top: -8%;
          margin-left: -14%;
        }
      }
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

.brand-group {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #fff !important;
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
  .swiper-wrapper {
    justify-content: center;
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #tv-container {
    .background {
      padding-bottom: 55vw;
      .title {
        width: 45%;
        top: 12vw;
        left: 5vw;
      }
      .pro {
        width: 45%;
        right: 4vw;
        top: 12vw;
      }
    }
  }

 .background2 {
  background-size: 125% auto;
  background-position: -12vw 0,top;
  &.fixed {
    background-position: -12vw -194vw,top;
  }
 }

 .sale-group {
  .tab {
    .swiper-slide {
      flex-basis: 21%;
    }
    .swiper-wrapper {
      justify-content: left;
    }
  }
 }

 .brand-group {
  .swiper-wrapper {
    justify-content: left;
  }
 }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #tv-container {
    .background {
      padding-bottom: 160vw;
      .title {
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 85%;
        top: 28vw;
      }
      .pro {
        width: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 91vw;
        .swiper-wrapper {
          align-items: baseline;
        }
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -40vw 21vw,top;
    &.fixed {
      background-position: -40vw -258vw,top;
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
