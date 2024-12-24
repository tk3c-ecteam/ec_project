<script setup>
import { ref } from 'vue'
import {Controller } from "swiper/modules";
import listF from '../layout/listF.vue'
import XmasFloor from '../floor/XmasFloor.vue'
import AllEvent from '../../components/AllEvent.vue'
import mobile from '@/views/layout/mobile3.vue'

const swiperBank = ref()

/* 銀行 swiper用 start */
const onBankSwiper = (swiper) => {
  swiperBank.value = swiper
}

const goBankSlide = (id) => {
  swiperBank.value.slideTo(id)
}
/* 銀行 swiper用 end */
</script>

<script>
import { globalMixin } from '../../globalMixin.js'
import { Controller } from 'swiper/modules'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menuSale: [7679,7680,7681,7682,7683,7684,7685,7686,7687,7688,7689],
      menuPro: 7643, //1212必購神物 陳列編號
      menuGreen: 7517, //環保商品陳列編號
      menuGo: 7518, //速速go陳列編號
      sales: [
          { image: 'Xmas2024/images/s399.png' },
        { image: 'Xmas2024/images/s499.png' },
        { image: 'Xmas2024/images/s599.png' },
        { image: 'Xmas2024/images/s699.png' },
        { image: 'Xmas2024/images/s999.png' },
        { image: 'double12_2024/images/1212/s112.png' },
        { image: 'double12_2024/images/1212/s212.png' },
        { image: 'double12_2024/images/1212/s312.png' },
        { image: 'double12_2024/images/1212/s412.png' },
        { image: 'double12_2024/images/1212/s512.png' },
        { image: 'double12_2024/images/1212/s1212.png' },
      ],
      banks: [
        { image: 'double12_2024/images/1212/bank1.png' },
        { image: 'double12_2024/images/1212/bank2.png' },
        { image: 'double12_2024/images/1212/bank3_3.png' }
      ],
      asides: [
        { text: '現折券', href: '#sale' },
        { text: '信用卡專屬優惠', href: '#bank' },
        { text: '環保商品', href: '#green' },
        { text: '筆電', href: '#pro7646' },
        { text: 'Apple', href: '#pro7562' },
        { text: 'Android', href: '#pro7563' },
        { text: '印表機', href: '#print' },
        { text: '平板/穿戴', href: '#pro7569' },
        { text: '桌機/螢幕', href: '#pro7533' },
        { text: '遊戲', href: '#pro7535' },
        { text: '攝影/空拍機', href: '#pro7536' },
        { text: '電視', href: '#pro7537' },
        { text: '冰箱/洗衣機', href: '#pro7539' },
        { text: '廚房3機', href: '#pro7545' },
        { text: '廚房家電', href: '#pro7538' },
        { text: '空調', href: '#pro7543' },
        { text: '秋冬除濕', href: '#pro7544' },
        { text: '電暖器', href: '#pro7665' },
        { text: '清淨除塵', href: '#pro7540' },
        { text: '居家美容', href: '#pro7541' },
        { text: '機車', href: '#pro7546' },
        { text: '燦坤K幣0元購', href: '#bonus' }
      ],
      statusBank: 0, // 銀行樓層用
      statusSale: 0, //現折券樓層用
      today: new Date(),
      swiperSale1:null,
      swiperSale2:null
    }
  },
  mounted() {
    //滑動後背景固定
    this.fixedBg('.background2','.all-box')

    // 撈取1212必購神物樓層商品
    this.getFloorSingle(this.menuPro)

    //撈取現折券樓層商品
    setTimeout(() => {
        this.getFloorData(this.menuSale)
    }, 20);
   

    //撈取綠點樓層商品
    setTimeout(() => {
       this.getFloorSingle(this.menuGreen)
    }, 25);
   

    //撈取速速go樓層商品
    setTimeout(() => {
      this.getFloorSingle(this.menuGo)
    }, 30);
    
  },
  methods: {
    changSale(id) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
        }, 30)
      }
    },
    changeBank(id) {
      setTimeout(() => {
        this.statusBank = id
      }, 20)
    },
    onSwiper(swiper) {
      this.swiperSale1 = swiper
    },

    onControlSwiper(swiper){
      this.swiperSale2 = swiper
    },
    onSlideChange(swiper){
      this.swiperSale1.slideTo(swiper.realIndex)
      this.statusSale = swiper.realIndex
    },
    goSlide(id){
      this.swiperSale1.slideTo(id)
      this.swiperSale2.slideTo(id)
    }
  }
}
</script>

<template>
  <div id="xmas-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('Xmas2024/images/title.png')" />
      </h2>

      <h5 class="subtitle">
        <img :src="$filters.siteUrl('Xmas2024/images/subtitle2.png')" />
      </h5>
    </div>

    <div class="background2"></div>

    <!-- 全站活動 -->
    <AllEvent></AllEvent>

    <!-- 送禮 -->
    <section class="pro-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('Xmas2024/images/gift_title.png')" />
      </h2>

      <component :is="listF" :isSwiper="1" :name="'pro'" :pro="product2[menuPro]"></component>
    </section>

    <!-- 現折券 -->
    <section class="sale-box scroll" id="sale">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=124130&strPreView=y')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('Xmas2024/images/sale_title3.png')" />
        </a>
      </h2>

      <div class="tab mb:1%">
        <swiper
          class="overflow:hidden"
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 3.2
            },
            600: {
              slidesPerView: 4.3
            },
            992: {
              slidesPerView: 6.3
            }
          }"
          :modules="[Controller]"
          :controller="{
            control:[saleSwiper]
          }"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(sale, s) in sales"
            :key="s"
            :class="[statusSale == s ? 'active' : '']"
            class="hue-rotate(70deg).active"
            @click="goSlide(s)"
          >
            <a @click="changSale(s)">
              <img :src="$filters.siteUrl(sale.image)" alt />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <div class="sale-content">
        <swiper id="saleSwiper"
          :loop="false"
          :modules="[Controller]"
          @swiper="onControlSwiper"
          @slideChange="onSlideChange"
          >
          <swiper-slide v-for="(sale, s) in sales">
            <component
          v-if="products[menuSale[s]] != undefined"
          :is="listF"
          :pro="products[menuSale[s]].Data"
          :isSwiper="1"
          :name="'sale'" 
          >
           </component>
         </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 信用卡專屬優惠 -->
    <section class="bank-group scroll" id="bank">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/bank_ec/index.html')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('Xmas2024/images/bank_title.png')" />
        </a>
      </h2>

      <div class="bank mb:4%">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 1.2
            },
            600: {
              slidesPerView: 2.3
            },
            992: {
              slidesPerView: 3
            }
          }"
          @swiper="onBankSwiper"
        >
          <swiper-slide
            v-for="(bank, b) in banks"
            :class="[statusBank == b ? 'active' : '']"
            class="contrast(0.5) contrast(1).active"
            @click="goBankSlide(b)"
          >
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
            <a
              :href="
                $filters.addGALink(
                  'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
                )
              "
              target="_blank"
            >
              <img class="pc" :src="$filters.siteUrl('Xmas2024/images/bank1_pc2.png')" />
              <img class="mobile" :src="$filters.siteUrl('Xmas2024/images/bank1_mobile2.png')" />
            </a>
          </li>
          <li class="w:90% w:89vw@<992 w:93vw@<576">
            <swiper
              :loop="false"
              :space-between="10"
              :observer="true"
              :breakpoints="{
                0: {
                  slidesPerView: 1.1
                },
                600: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 2
                }
              }"
            >
              <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
                <img :src="$filters.siteUrl('Xmas2024/images/bank1-2.png')" />
                <a
                  class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576"
                  :href="
                    $filters.addGALink(
                      'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
                    )
                  "
                  target="_blank"
                >
                  <img :src="$filters.siteUrl('Xmas2024/images/go2.png')" />
                </a>
              </swiper-slide>
              <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
                <img :src="$filters.siteUrl('Xmas2024/images/bank1-3.png')" />
                <a
                  class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576"
                  :href="
                    $filters.addGALink(
                      'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
                    )
                  "
                  target="_blank"
                >
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
        <a
          href="https://www.tk3c.com.tw/#activityinfo&8"
          class="w:16% w:30vw@<992 w:35vw@<576 mt:3% mt:6%@<576"
          target="_blank"
        >
          <img :src="$filters.siteUrl('Xmas2024/images/info.png')" />
        </a>
      </div>

      <!-- 樂天信用卡 -->
      <div class="tab-content" v-show="statusBank == 2">
         <swiper
              :loop="false"
              :space-between="10"
              :observer="true"
              :breakpoints="{
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
              }"
            >
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
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/invoice_login/home.aspx')"
          class="w:16% w:30vw@<992 w:35vw@<576 mt:3% mt:6%@<576"
          target="_blank"
        >
          <img :src="$filters.siteUrl('Xmas2024/images/go.png')" />
        </a>
      </div>
    </section>

    <!-- fb/line分享 -->
    <section>
      <div class="w:90% w:full@<576 gap:10 grid-cols:2 grid-cols:1@<576 m:auto">
        <a :href="$filters.addGALink('https://www.facebook.com/TDdd331')" target="_blank"
          ><img :src="$filters.siteUrl('double12_2024/images/1212/fb.png')"
        /></a>
        <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank"
          ><img :src="$filters.siteUrl('double12_2024/images/1212/line.png')"
        /></a>
      </div>
    </section>

    <!-- 環保商品 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('Xmas2024/images/g_title.png')" />
        </a>
      </h2>

      <p class="m:auto m:2%|0|0@<576">
        <img :src="$filters.siteUrl('double12_2024/images/1212/green.png')" />
      </p>

      <div class="box">
        <component
          :is="listF"
          :pro="product2[menuGreen]"
          :isSwiper="1"
          :name="'green-pro'"
        ></component>
      </div>
    </section>

    <!-- 速速go -->
    <section class="go-group">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('Xmas2024/images/go_title.png')" />
        </a>
      </h2>

      <div class="box">
        <component :is="listF" :pro="product2[menuGo]" :isSwiper="1" :name="'go-box'"></component>
      </div>
    </section>

    <!-- 其他樓層 -->
    <XmasFloor></XmasFloor>
  </div>

  <!-- 左側選單 -->
  <aside class="aside-container left">
    <span class="collaspe"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul></ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="arrow"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="aside in asides">
            <a :href="aside.href">
              {{ aside.text }}
            </a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 手機版選單 -->
   <mobile v-model:asides="asides"></mobile>
</template>

<style lang="scss">
@charset "utf-8";


$dir: 'https://events.cdn-tkec.tw/events_net/events_net/Xmas2024/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/Xmas2024/images/';

/*  共用樣式調整 */
body {
  background: #04398d;
}

.bg01 {
  background: #9a140a;
  border-radius: 10px;
  box-sizing: border-box;
}

.aside-container {
  &:not(.left) {
    zoom: 0.75;
  }
}

#xmas-container {
  .background {
    $image: $dir + 'kv.png';
    @include bg-responsive($image, 2000, 700);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 37%;
    .title {
      width: 40%;
      position: absolute;
      left: 0;
      right: 0;
      top: 20%;
      margin: 0 auto;
     animation: blurFadeIn 2s linear;
      img {
        animation: zoomInNormal  1.3s linear;
         animation-delay: 1s;
      }
    }

    .subtitle {
      width: 35%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top:62%;
      animation: flipX 2.6s linear;
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image:$dir + 'bg.png';
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
    top: 185px;
    z-index: -2;
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 5px;
    box-sizing: border-box;
  }
}

.green-box,
.go-group,
.floor {
  .title {
    width: 60%;
    min-width: 60%;
  }
}

.print-box {
  .swiper-wrapper {
    justify-content: center;
  }
}

.bank-group {
  .tab-content {
    width: 90%;
    margin: 0 auto 0;
  }
}

.pro-box,
.sale-box {
  .bg01 {
    background: #ff9074;
  }
}

.green-box {
  .bg01 {
    background: #2fbe44;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

.go-group {
  .bg01 {
    background: #2a2a2a;
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '1440px') {
  .aside-container {
    &:not(.left) {
      zoom: 0.5;
    }
  }
}
@include media-query('mobile', '992px') {
  #xmas-container {
    .background {
      background-size: 120%;
      background-position: -15vw 4vw,top;
      padding-bottom: 55vw;

      .title {
        width: 60%;
        top: 13vw;
        left: -11vw;
      }
      .subtitle {
        width: 50%;
        top: 37vw;
        left: -11vw;
      }
    }
  }

  .green-box,
  .go-group,
  .floor {
    .title {
      min-width: 90%;
    }
  }

  .print-box {
    .swiper-wrapper {
      justify-content: left;
    }
  }

  .sale-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  .bank-group {
    .tab-content {
      width: 100%;
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #xmas-container {
    .background {
      background-size: 180% auto;
      background-position: -30vw 22vw,top;
      padding-bottom: 90vw;
      .title {
        width: 90%;
        top: 31vw;
        left: 6vw;
      }
      .subtitle{
        width: 70%;
        top: 68vw;
        left: 6vw;
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -20vw 0,top;
  }

  section{
    .title {
      margin: 0 auto 2%;
    }
  }

  .green-box,
  .go-group,
  .floor {
    .title {
      min-width: 100%;
      margin: 0 auto 3%;
    }
  }

  .bank-group {
    .tab-content {
      width: 100%;
    }
  }
}
</style>
