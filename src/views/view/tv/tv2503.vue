<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/title.png')" />
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

    <div class="background2"></div>

    <p class="item">
      <img :src="$filters.siteUrl('2020TVforever/images/2503/item.png')" />
    </p>

    <section class="gift-box">
      <h3 class="w:30% m:auto">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/btn-a.png')"/>
      </h3>

      <!-- 精選活動 -->
       <div>
        <swiper
        :loop="true"
        :space-between="10"
        :effect="'coverflow'"
        :coverflowEffect="{
           rotate: 60,
           stretch: 10,
           depth: 120,
           modifier: 2,
        }"
        :centeredSlides="true"
        :breakpoints="{
          0:{
            slidesPerView:1
          },
          992:{
            slidesPerView:3
          }
        }"
        :navigation="{
          nextEl:'.gift-box .next',
          prevEl:'.gift-box .prev'
        }"
        :modules="[EffectCoverflow]"
        >
        <swiper-slide v-for="gift in gifts">
          <a :href="$filters.addGALink(gift.url)" target="_blank">
            <img :src="$filters.siteUrl(gift.image)">
          </a>
        </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
       </div>
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
    <section class="night-box"  v-show="isNight && products[menuNight[n]] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/S3.png')" />
      </h2>

      <div>  
        <listF :pro="product2[menuNight]"></listF>
       <a class="more" :href="$filters.addGALink('https://events.tk3c.com/events_net/nightsale/index.html')" target="_blank">
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
              rows: 3
            }
          },
          992: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 3
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
        { image: '2020TVforever/images/2502/logo_01.png' },
        { image: '2020TVforever/images/2502/logo_02.png' },
        { image: '2020TVforever/images/2502/logo_03.png' },
        { image: '2020TVforever/images/2502/logo_04.png' },
        { image: '2020TVforever/images/2502/logo_more.png' }
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
      width: 30%;
      position: absolute;
      right: 21%;
      top: 23%;
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
    $image: $dir + 'BG.png';
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
      background-position: 0 -212vw,top;
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
