<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2501/title2.png')" alt="" />
      </h2>

      <div class="pro" v-if="isPro">
        <swiper :loop="true" :observer="true" :parallax="true" :autoplay="{ delay: 2200, disableOnInteraction: false }"
          :modules="[Parallax]">
          <swiper-slide v-for="(pro, p) in proTV" :key="p">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax="-800">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <p class="circle">
        <img :src="$filters.siteUrl('2020TVforever/images/2501/bg_p.png')" alt="" />
      </p>
    </div>

    <p class="item left">
      <img :src="$filters.siteUrl('2020TVforever/images/2501/p01.png')" alt=" " />
    </p>
    <p class="item right">
      <img :src="$filters.siteUrl('2020TVforever/images/2501/p01.png')" alt=" " />
    </p>

    <section class="gift-box" v-if="isGift">
      <img class="abs w:80% w:full@<992 hidden@<576 left:0 right:0 m:auto top:40px top:4vw@<992 z:-1"
        :src="$filters.siteUrl('2020TVforever/images/2501/A-box.png')" alt="" />
      <h2 class="w:25% w:30%@<992 w:55%@<576 m:0|auto|2%">
        <img :src="$filters.siteUrl('2020TVforever/images/2501/A_bt01.png')" alt=" " />
      </h2>

      <!-- 精選活動 -->
      <div class="gift">
        <swiper class="w:75% w:95%@<992 w:full@<576" :loop="false" :space-between="10" :breakpoints="{
            0: {
              slidesPerView: 1.2,
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 3
            }
          }">
          <swiper-slide v-for="(gift, g) in gifts" :key="g">
            <a :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)" alt=" " />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 全站活動 -->
    <AllEvent></AllEvent>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis && product2[menuDis] != ''">
      <h2 class="title">
        <a :href="$filters.addGALink(disUrl)" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2501/bar_b.png')" alt="" />
        </a>
      </h2>

      <div class="discount">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
      </div>
    </section>

    <!-- 福利 -->
    <section class="sale-group scroll" id="sale">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11312&aid=4782&hid=19610')" target="_blank">
           <img :src="$filters.siteUrl('2020TVforever/images/2501/bar_c.png')" alt=" " />
        </a>
      </h2>

      <div class="content">
         <Tabs :isSwiper="1" :tabs="saleTab" :statusSelect="1">
            <template v-slot="{ selectedTab }" >
              <TabContent :isSwiper="1" v-for="(content, c) in saleTab" :menus="menuSale[c]" :index="c" :selectedTab="selectedTab">
              
              </TabContent>
            </template>
          </Tabs>
      </div>
    </section>

    <!-- 夜間下殺 -->
    <section class="night-box" v-show="isNight && products[menuNight[n]] != ''">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/nightsale/index.html')" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2501/bar_d.png')" alt="" />
        </a>
      </h2>

      <div class="content">
         <Tabs :tabs="nights" :statusSelect="1">
            <template v-slot="{ selectedTab }" >
              <TabContent v-for="(content, c) in nights" :menus="menuNight[c]" :index="c" :selectedTab="selectedTab">
              
              </TabContent>
            </template>
          </Tabs>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-group scroll" id="brand">
      <h2 class="title">
         <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11312&aid=4708')" target="_blank">
           <img :src="$filters.siteUrl('2020TVforever/images/2501/bar_e.png')" alt=" " />
        </a>
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
    <CommonFloor :floors="floorImg" :menu="menu"></CommonFloor>
  </div>

  <!-- 右側選單 + 手機版選單 -->
 <RightAside :asides="asides" :type="'mobile2'"></RightAside>
</template>

<script setup>
import { Parallax } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
      proTV: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=238959',
          image: '2020TVforever/images/2501/238959_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=245384',
          image: '2020TVforever/images/2501/245384_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=247190',
          image: '2020TVforever/images/2501/247190_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=247808',
          image: '2020TVforever/images/2501/247808_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=249380',
          image: '2020TVforever/images/2501/249380_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=250543',
          image: '2020TVforever/images/2501/250543_a.png'
        }

      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2501/A1.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
          image: '2020TVforever/images/2501/A2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2501/A3.png'
        }
      ],
      brands: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=40805',
          image: '2020TVforever/images/2501/JVC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11336',
          image: '2020TVforever/images/2501/SONY.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340',
          image: '2020TVforever/images/2501/samsung.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2501/philips.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338',
          image: '2020TVforever/images/2501/pana2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343',
          image: '2020TVforever/images/2501/LG.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11346',
          image: '2020TVforever/images/2501/sampo.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11353',
          image: '2020TVforever/images/2501/BenQ.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=112906',
          image: '2020TVforever/images/2501/AOC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2501/TCL.png'
        }
      ],
      saleTab: [
        { image: '2020TVforever/images/2501/c_logo01.png' },
        { image: '2020TVforever/images/2501/c_logo03.png' },
        { image: '2020TVforever/images/2501/c_logo04.png' },
        { image: '2020TVforever/images/2501/c_logo02.png' },
        { image: '2020TVforever/images/2501/c_logo05.png',class:'other' }
      ],
      nights: [
        {
          image: '2020TVforever/images/2412/n-02.png'
        },
        {
          image: '2020TVforever/images/2412/n-01.png'
        }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2501/bar_f.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2501/bar_g.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2501/bar_h.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2501/bar_i.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2501/bar_j.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2501/bar_k.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2501/bar_l.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2501/bar_m.png'
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
      menuNight: [5421, 5420], //夜殺 陳列編號
      menu: [2751, 5613, 5198, 5199, 4846, 5200, 5201, 5202],
      status: 0,
      statusSale: 1,
      statusNight: 1,
      isNight: true,
      isDis: false,
      today: new Date(),
      disUrl: '',
      isGift:false,
      isPro:true
    }
  },
  mounted() {
    const { menuDis, today } = this
    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    // 2025 1/03 隱藏現折券樓層
    if (today >= new Date('2025/01/14')) {
      this.isDis = true;
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124236&aid=23905&strPreView=y'
    } else {
      this.disUrl = 'https://www.tk3c.com/dictitleurl.aspx?cid=124130&strPreView=y'
    }
  },
  methods: {
    change(id) {
      this.status = id
    },
    changeSale(id) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
        }, 20)
      }
    },
    changeNight(id) {
      setTimeout(() => {
        this.statusNight = id
      }, 20)
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2020TVforever/images/2501/';
$origin: 'https://events.tk3c.com/events_net/events_net/2020TVforever/images/2501/';

/*  共用樣式調整 */
body {
  background: #8a3ec4;
   &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.jpg';
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
  background: #95b7f6;
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
    padding-bottom: 35%;
    .pro {
      width: 30%;
      position: absolute;
      right: 20%;
      top: 28%;
    }
    .title {
      width: 40%;
      position: absolute;
      left: 19%;
      top: 14%;
      animation: rotate-fly-left 1.6s ease-in;
      img {
        animation: rubberBand 1s linear;
        animation-delay: 1.4s;
      }
    }

    .circle {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 45px;
    }
  }
}

.item {
  width: 10%;
  &.left {
     left: 0;
     right: unset;
     top: 500px;
     img {
      transform: rotate(150deg);
     }
  }
  &.right {
    left: unset;
    right: 0;
    top: 200px;
  }
}

.sale-group {
  .tab-content {
    .bg01 {
      margin: 0 auto 0;
    }
  }
}

.discount-box {
  .bg01 {
    margin: 0 auto 1%;
  }
  .title {
    margin: 0 auto 0;
  }
}

.night-box {
  .bg01 {
    margin: 0 auto 1%;
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
      padding-bottom: 50vw;
      .title {
        width: 65%;
        top: 5vw;
        left: 4vw;
      }
      .pro {
        width: 45%;
        right: 2vw;
        top: 15vw;
      }
      .circle {
        z-index: -1;
      }
    }
  }

 body {
  &:before {
    background-size: 120% auto;
    background-position: -10vw 4vw,top;
  }
 }

  #sale-area {
    .swiper-slide {
      .other {
        margin-top: -8%;
        margin-left: -16%;
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #tv-container {
    .background {
      padding-bottom: 140vw;
      .title {
        left: -4vw;
        right: 0;
        margin: 0 auto;
        width: 130%;
        top: 6vw;
      }
      .pro {
        width: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 70vw;
        .swiper-wrapper {
          align-items: baseline;
        }
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -15vw 21vw,top;
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
        &:last-child{
          flex-basis: 19%;
        }
      }
      .swiper-wrapper {
        align-items: baseline;
      }
    }
  }
}
</style>
