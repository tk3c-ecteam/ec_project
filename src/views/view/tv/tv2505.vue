<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title animate__animated animate__swing">
        <img :src="$filters.siteUrl('2020TVforever/images/2505/title2.png')" />
      </h2>
    </div>

    <div class="background2"></div>

    <!-- 凸品輪播區 -->
    <section class="pro-group mt:-24%">
      <ProductTop :pro="product2[menuTop]"></ProductTop>
    </section>

      <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis && product2[menuDis] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2503/S1.png')" />
      </h2>

      <div class="discount">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
        <a class="more" :href="$filters.addGALink(disUrl)" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2504/btn-more.png')" />
        </a>
      </div>
    </section>

    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2504/gift_title.png')" />
      </h2>

      <!-- 精選活動 -->
      <a class="w:80% w:90%@<992 w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11312')" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2505/SE_2.png')" />
        </a>
    </section>

    <!-- 房東精選 -->
    <section class="home-box scroll" titles="房東精選專區" id="home" v-show="isHome">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2505/home_title.png')" />
      </h2>
      <listF :pro="product2[menuHome]"></listF>
    </section>

    <!-- 福利 -->
    <section class="sale-group scroll" titles="品牌福利出清" id="sale">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2505/sale_title.png')" />
      </h2>

      <div class="content">
        <Tabs :tabs="saleTab" :statusSelect="1">
          <template v-slot="{ selectedTab }">
            <TabContent :isSwiper="1" v-for="(sale, c) in saleTab" :menus="sale.id" :index="c"
              :selectedTab="selectedTab">

            </TabContent>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- 夜間下殺 -->
    <section class="night-box" v-show="isNight && products[menuNight[n]] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2504/night_title.png')" />
      </h2>

      <div>
        <listF :pro="product2[menuNight]"></listF>
        <a class="more" :href="$filters.addGALink('https://events.tk3c.com/events_net/nightsale/index.html')"
          target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2504/btn-more.png')" />
        </a>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-group scroll" titles="人氣大牌" id="brand">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2505/brand_title.png')" />
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
export default {
  data() {
    return {
      proTV: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=233430',
          image: '2020TVforever/images/2504/233430_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=247802',
          image: '2020TVforever/images/2504/247802_dis.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=248269',
          image: '2020TVforever/images/2504/248269_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=254426',
          image: '2020TVforever/images/2504/254426_a.png'
        }
      ],
      proTV411:[
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=247802',
          image: '2020TVforever/images/2504/247802_a.png'
        },
      ],
      brands: [
          {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=124295',
          image: '2020TVforever/images/2505/TOSHIBA.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=40805',
          image: '2020TVforever/images/2505/JVC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11336',
          image: '2020TVforever/images/2505/SONY.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340',
          image: '2020TVforever/images/2505/samsung.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2505/philips.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338',
          image: '2020TVforever/images/2505/pana.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343',
          image: '2020TVforever/images/2505/LG.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11346',
          image: '2020TVforever/images/2505/sampo.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11353',
          image: '2020TVforever/images/2505/BenQ.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=112906',
          image: '2020TVforever/images/2505/AOC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2505/TCL.png'
        }
      ],
      saleTab: [
        { image: '2020TVforever/images/2505/logo_01.png',id:5977 },
        { image: '2020TVforever/images/2505/logo_03.png',id:4465 },
        { image: '2020TVforever/images/2505/logo_04.png',id:4466 },
        { image: '2020TVforever/images/2505/logo_more.png',id:4467 }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2504/S1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2504/S2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2504/S3.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2504/S4.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2504/S5.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2504/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2504/S7.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2504/S8.png'
        }
      ],
      menuDis: 4328, //現折 清單編號
      menuNight: 5420, //夜殺 陳列編號
      menuTop:7991, // 上方商品陳列編號
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

    this.fixedBg('.background2','.gift-box');
   
    //撈取上方凸品商品
    this.getFloorSingle(this.menuTop)

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 房東精選樓層商品
    this.getFloorSingle(this.menuHome)

     //撈取 夜殺樓層商品
    this.getFloorSingle(this.menuNight)

    // 2025 5/1 更新現折券連結
    if (today >= new Date('2025/05/01')) {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947&strPreView=y';
    } else {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124427&aid=23931'
    }
  },
}
</script>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2020TVforever/images/2505/';
$origin: 'https://events.tk3c.com/events_net/events_net/2020TVforever/images/2505/';

/*  共用樣式調整 */
body {
  background: #fffdfd;
}

.bg01 {
  background: #232323;
  border-radius: 10px;
  box-sizing: border-box;
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
    padding-bottom: 52%;
    .title {
      width: 35%;
      position: absolute;
      left: 0;
      right: 0;
      top: 14%;
      margin: 0 auto;
      animation-duration: 1.8s;
    }
  }
}

.background2 {
   width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    &.fixed {
      position: fixed;
      background-position: 0 2vw,top;
      z-index: -2;
    }
}

.pro-group {
  .bg01 {
    width: 90%;
    background: #fff;
  }
}

.sale-group {
  .tab-content {
    .bg01 {
      margin: 0 auto 0;
    }
  }
  .tab {
    margin-bottom: 0;
    .swiper-wrapper {
      justify-content: center;
      align-items: center;
    }
    .swiper-slide {
      flex-basis: 16%;
      &:last-child {
        img {
          transform: scale(0.65);
          margin-left: -14%;
        }
      }
    }
  }
}

.discount-box {
  .bg01 {
    background: #efbf6c;
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
  .swiper-wrapper {
    justify-content: center;
  }
}

.floor {
  .bg01 {
    background: #9faec6;
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #tv-container {
    .background {
      padding-bottom: 65vw;
      .title {
        width: 52%;
        top: 11vw;
      }
    }
  }

 .background2 {
  background-size: 120% auto;
  background-position: -11vw 4vw,top;
  &.fixed {
    background-size: 180% auto;
    background-position: -41vw 5vw,top;
  }
 }

 .sale-group {
  .tab {
    .swiper-slide {
      flex-basis: 26%;
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

 .pro-group {
  .bg01 {
    width: 100%;
  }
 }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #tv-container {
    .background {
      padding-bottom: 100vw;
      .title {
        width: 85%;
        top: 28vw;
      }
    }
  }

  .background2 {
    background-size: 200% auto;
    background-position: -49vw 18vw,top;
    &.fixed {
      background-size: 300% auto;
      background-position: -100vw 19vw,top;
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
