<script setup>
  import CommonFloor from '../floor/CommonFloor.vue'
  import { ref } from "vue";

  const swiperBank = ref()

  const onBankSwiper = (swiper) => {
    swiperBank.value = swiper
  }

  const goBankSlide = (id) => {
    swiperBank.value.slideTo(id)
  }
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menus: [7691,7692,7693], //商品陳列編號
      giftPro: [
         { url: 'https://www.tk3c.com/pt.aspx?pid=252142', image: 'PICKGIFT/images/2412/252142.png' },
         { url: 'https://www.tk3c.com/pt.aspx?pid=252453', image: 'PICKGIFT/images/2412/252453.png' },
         { url: 'https://www.tk3c.com/pt.aspx?pid=243242', image: 'PICKGIFT/images/2412/243242.png' },
         { url: 'https://www.tk3c.com/pt.aspx?pid=252327', image: 'PICKGIFT/images/2412/252327.png' },
         { url: 'https://www.tk3c.com/pt.aspx?pid=251173', image: 'PICKGIFT/images/2412/251173.png' },
        { url: 'https://www.tk3c.com/pt.aspx?pid=211451', image: 'PICKGIFT/images/2412/211451.png' },
        { url: 'https://www.tk3c.com/pt.aspx?pid=243644', image: 'PICKGIFT/images/2412/243644.png' },
         { url: 'https://www.tk3c.com/pt.aspx?pid=250166', image: 'PICKGIFT/images/2412/250166.png' },
          { url: 'https://www.tk3c.com/pt.aspx?pid=252448', image: 'PICKGIFT/images/2412/252448.png' },
        { url: 'https://www.tk3c.com/pt.aspx?pid=250021', image: 'PICKGIFT/images/2412/250021.png' },
      ],
      floorImg: [
        {
          image: 'PICKGIFT/images/2412/S1.png',
          text:'精打細算小資族'
        },
        {
          image: 'PICKGIFT/images/2412/S2.png',
           text:'質感品味族'
        },
        {
          image: 'PICKGIFT/images/2412/S3.png',
           text:'土豪預算無上限'
        }
      ],
       banks: [
        { image: 'double12_2024/images/1212/bank1.png' },
        { image: 'double12_2024/images/1212/bank2.png' },
        { image: 'double12_2024/images/1212/bank3_3.png' }
      ],
      statusBank:0
    }
  },
  mounted() {
    const { today, menus } = this
    //背景固定
    this.fixedBg('.background2','#container');

    //撈好樓層商品
    this.getFloorData(menus)
  },
  methods: {
   changeBank(id) {
    this.statusBank = id
   }
  }
}
</script>

<template>
  <div id="gift-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__bounceInRight">
        <img :src="$filters.siteUrl('PICKGIFT/images/2412/title.png')" />
      </h2>
    </div>

    <div class="background2"></div>
    <p class="item">
      <img :src="$filters.siteUrl('PICKGIFT/images/2412/item.png')" />
    </p>

    <div id="container">
      <canvas id="pixie"></canvas>
    </div>

    <section class="product-area">
      <ul class="gap:-10 mt:10% grid-cols:2 grid-cols:1@<576">
        <li v-for="gift in giftPro" class="mb:2% mb:5%@<576">
          <a :href="$filters.addGALink(gift.url)" target="_blank">
            <img :src="$filters.siteUrl(gift.image)" alt=" " />
          </a>
        </li>
      </ul>
    </section>

    <!-- 商品樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>

    <!-- 信用卡專屬優惠 -->
    <section class="bank-group scroll" id="bank">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/bank_ec/index.html')" target="_blank">
          <img :src="$filters.siteUrl('PICKGIFT/images/2412/S4.png')" />
        </a>
      </h2>

      <div class="bank mb:4%">
        <swiper :loop="false" :space-between="10" :breakpoints="{
            0: {
              slidesPerView: 1.2
            },
            600: {
              slidesPerView: 2.3
            },
            992: {
              slidesPerView: 3
            }
          }" @swiper="onBankSwiper">
          <swiper-slide v-for="(bank, b) in banks" :class="[statusBank == b ? 'active' : '']"
            class="contrast(0.5) contrast(1).active" @click="goBankSlide(b)">
            <a @click="changeBank(b)">
              <img :src="$filters.siteUrl(bank.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 台新銀行 -->
      <div class="bank-content" v-show="statusBank == 0">
        <ul class="gap:10 mb:2% mb:4%@<992">
          <li class="w:90% w:90vw@<992 w:full@<576">
            <a :href="
                $filters.addGALink(
                  'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
                )
              " target="_blank">
              <img class="pc" :src="$filters.siteUrl('Xmas2024/images/bank1_pc2.png')" />
              <img class="mobile" :src="$filters.siteUrl('Xmas2024/images/bank1_mobile2.png')" />
            </a>
          </li>
          <li class="w:90% w:89vw@<992 w:93vw@<576">
            <swiper :loop="false" :space-between="10" :observer="true" :breakpoints="{
                0: {
                  slidesPerView: 1.1
                },
                600: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 2
                }
              }">
              <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
                <img :src="$filters.siteUrl('Xmas2024/images/bank1-2.png')" />
                <a class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576" :href="
                    $filters.addGALink(
                      'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
                    )
                  " target="_blank">
                  <img :src="$filters.siteUrl('Xmas2024/images/go2.png')" />
                </a>
              </swiper-slide>
              <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
                <img :src="$filters.siteUrl('Xmas2024/images/bank1-3.png')" />
                <a class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576" :href="
                    $filters.addGALink(
                      'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
                    )
                  " target="_blank">
                  <img :src="$filters.siteUrl('Xmas2024/images/info.png')" />
                </a>
              </swiper-slide>
            </swiper>
          </li>
        </ul>
      </div>

      <!-- 新展銀行 -->
      <div class="tab-content" v-show="statusBank == 1">
        <p class="grid-cols:2 grid-cols:1@<576 m:auto gap:10">
          <img :src="$filters.siteUrl('Xmas2024/images/bank2c.png')" />
          <img :src="$filters.siteUrl('Xmas2024/images/bank2-2c.png')" />
        </p>
        <a href="https://www.tk3c.com.tw/#activityinfo&8" class="w:16% w:30vw@<992 w:35vw@<576 mt:3% mt:6%@<576"
          target="_blank">
          <img :src="$filters.siteUrl('Xmas2024/images/info.png')" />
        </a>
      </div>

      <!-- 樂天信用卡 -->
      <div class="tab-content" v-show="statusBank == 2">
        <swiper :loop="false" :space-between="10" :observer="true" :breakpoints="{
                0: {
                  slidesPerView: 1,
                   grid: {
                    fill: 'row',
                    rows: 3
                  }
                },
                600: {
                  slidesPerView: 2.2,
                   grid: {
                    fill: 'row',
                    rows: 1
                  }
                },
                992: {
                  slidesPerView: 2.2,
                  grid: {
                    fill: 'row',
                    rows: 1
                  }
                }
              }">
          <swiper-slide>
            <img :src="$filters.siteUrl('Xmas2024/images/bank3.png')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="$filters.siteUrl('Xmas2024/images/bank3-2.png')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="$filters.siteUrl('Xmas2024/images/bank3-3.png')" />
          </swiper-slide>
        </swiper>
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/invoice_login/home.aspx')"
          class="w:16% w:30vw@<992 w:35vw@<576 mt:3% mt:6%@<576" target="_blank">
          <img :src="$filters.siteUrl('Xmas2024/images/go.png')" />
        </a>
      </div>
    </section>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(floor, f) in floorImg">
            <a :href="`#pro${ 7691 + Number(f) }`">{{ floor.text }}</a>
          </li>
          <li><a href="#bank">信用卡專屬優惠</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/PICKGIFT/images/2412/';
$origin: 'https://events.tk3c.com/events_net/events_net/PICKGIFT/images/2412/';

/*  共用樣式調整 */
body {
  background: #b00000;
}

.bg01 {
  background: none;
}

section {
  .title {
    b {
      font-size: 0;
    }
  }
}

#gift-container {
  .background {
    $image: $dir + 'kv.jpg';
    @include bg-responsive($image, 2000, 718);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 38%;
    .title {
      width: 35%;
      position: absolute;
      left: 32%;
      top: 19%;
      margin: 0 auto;
      animation-duration: 1.5s;
      img {
        animation: rubberBand 0.8s;
        animation-delay: 1s;
      }
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image:$dir + 'bg.jpg';
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 0,top;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  &.fixed {
    position: fixed;
    top: 5px;
    z-index: -2;
  }
}

.product-area {
  margin: -48vmax auto 5%;
}

.floor {
  .title {
    margin: 0 auto 0;
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '1100px') { 
   #gift-container {
    .background {
      background-size: 120% auto;
      background-position: -10vw 0,top;
      padding-bottom: 43vw;
      .title {
        width: 40%;
        left: 29vw;
        top: 7vw;
      }
    }
   }

   .background2 {
     background-size: 120% auto;
      background-position: -10vw 0,top;
   }
}
@include media-query('mobile', '992px') {
   #gift-container {
    .background {
      background: none;
      padding-bottom: 155vw;
      .title{
        display: none;
      }
    }
  }

  body {
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      $image:$dir + 'kv-M.jpg';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 4vw,top;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: -1;
      top: 0;
    }
  }

    form#form1 {
    position: relative;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      $image:$dir + 'bg-M.jpg';
      background: url($image) repeat-y center;
      background-size: 100% auto;
      background-position: 0 0,top;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: -2;
      top: 0;
    }
  }

   .background2 {
     display: none;
  }

  .product-area {
    margin: -71rem auto 10%;
  }
}

/* 手機版 */
@include media-query('pad', '577px','610px') {
  #gift-container {
    .background {
      padding-bottom: 183vw;
    }
  }
}
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #gift-container {
    .background {
      padding-bottom: 150vw;
    }
  }

  body {
    &:before {
      background-position: 0 10vw,top;
    }
  }

  .floor {
    .title {
      margin: 0 auto -5%;
    }
  }

  .product-area {
    margin: -49rem auto 10%;
  }
}
</style>
