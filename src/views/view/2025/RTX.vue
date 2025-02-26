<template>
  <div id="rtx-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('RTXNB/images/title3.png')" />
      </h2>

      <h5 class="subtitle">
        <img :src="$filters.siteUrl('RTXNB/images/subtitle.png')" />
      </h5>

      <div class="product p1">
        <img v-if="isSale" :src="$filters.siteUrl('RTXNB/images/KV_pd01.png')" />
        <img v-if="isOpen" :src="$filters.siteUrl('RTXNB/images/KV_pd03.png')" />
      </div>
      <div class="product p2">
        <img v-if="isSale" :src="$filters.siteUrl('RTXNB/images/KV_pd02.png')" />
        <img v-if="isOpen" :src="$filters.siteUrl('RTXNB/images/KV_pd04.png')" />
      </div>

      <p class="earth">
        <img :src="$filters.siteUrl('RTXNB/images/kv_P.png')" />
      </p>
    </div>

    <div class="background2"></div>

    <!-- 時間倒數 -->
    <section class="time-box" v-if="isSale">
      <vue-countdown :time="time" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
        <p><b>預購倒數</b> <em>{{ days }}</em> 天 <em>{{ hours }}</em> 時 <em>{{ minutes }}</em> 分 <em>{{ seconds }}</em> 秒
        </p>
      </vue-countdown>
    </section>

    <!-- 新機優惠指南 -->
    <section class="special-box scroll" titles="新機優惠指南" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('RTXNB/images/sp_bar2.png')" />
      </h2>

      <ul>
        <li v-for="(sp,s) in specials" class="w:46% w:full@<576 mb:2%">
          <a v-if="isOpen && s == 1" :href="sp.url">
            <img :src="$filters.siteUrl(sp.image)">
          </a>
          <a v-else-if="isOpen" :href="$filters.addGALink(sp.url)" target="_blank">
              <img :src="$filters.siteUrl(sp.image)">
          </a>
          <img v-else :src="$filters.siteUrl(sp.image)">
        </li>
        <li v-show="isOpen" class="w:89% w:93%@<576">
          <a :href="$filters.addGALink('https://acerland.acer.com.tw/activity/page/202')" target="_blank">
            <img :src="$filters.siteUrl('RTXNB/images/sp05.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 信用卡專屬優惠 -->
    <section class="card-group scroll" titles="信用卡優惠" id="card">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/bank_ec/index.html')" target="_blank">
          <img :src="$filters.siteUrl('RTXNB/images/bank_bar2.png')" />
        </a>
      </h2>

      <div class="mb:2%">
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
          <swiper-slide v-for="(card, c) in cards" :class="[statusBank == c ? 'active' : '']"
            class="contrast(0.5) contrast(1).active" @click="goBankSlide(c)">
            <a @click="changeBank(c)">
              <img :src="$filters.siteUrl(card.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 台新銀行 -->
      <div class="card-content" v-show="statusBank == 0">
        <ul class="gap:10 mb:2% mb:4%@<992">
          <li class="w:90% w:full@<992">
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
                <img :src="$filters.siteUrl('2025Valentine/images/bank1-2b.png')" loading="lazy" />
                <a class="w:32% w:40%@<992 w:50%@<576 mt:3% mt:6%@<576" :href="
                    $filters.addGALink(
                      'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
                    )
                  " target="_blank">
                  <img :src="$filters.siteUrl('2025Valentine/images/go2.png')" />
                </a>
              </swiper-slide>
              <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
                <img :src="$filters.siteUrl('2025Valentine/images/bank1-3.png')" loading="lazy" />
                <a class="w:32% w:40%@<992 w:50%@<576 mt:3% mt:6%@<576" :href="
                    $filters.addGALink(
                      'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
                    )
                  " target="_blank">
                  <img :src="$filters.siteUrl('2025Valentine/images/info.png')" />
                </a>
              </swiper-slide>
            </swiper>
          </li>
        </ul>
      </div>

      <!-- 新展銀行 -->
      <div class="card-content" v-show="statusBank == 1">
        <p class="grid-cols:2 grid-cols:1@<576 m:auto gap:10">
          <img :src="$filters.siteUrl('25spring/imagesT/bank/DBS01.png')" />
          <img :src="$filters.siteUrl('25spring/imagesT/bank/DBS02.png')" />
        </p>
        <a href="https://www.tk3c.com.tw/#actsdetail&8&774" class="w:16% w:24%@<992 w:40%@<576 mt:3% mt:6%@<576"
          target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/info.png')" />
        </a>
      </div>

      <!-- 樂天信用卡 -->
      <div class="card-content" v-show="statusBank == 2">
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
            <img :src="$filters.siteUrl('25spring/imagesT/bank/rakuten01.png')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="$filters.siteUrl('25spring/imagesT/bank/rakuten02.png')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="$filters.siteUrl('25spring/imagesT/bank/rakuten03.png')" />
          </swiper-slide>
        </swiper>
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/invoice_login/detail.aspx?activity_id=982')"
          class="w:16% w:24%@<992 w:30%@<576 mt:3% mt:6%@<576" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/go.png')" />
        </a>
      </div>
    </section>

    <!-- 明星主打機皇 -->
    <section class="pro-box scroll mb:15%" titles="明星主打機皇" id="pro">
      <h2 class="title">
        <img :src="$filters.siteUrl('RTXNB/images/bar_pt2.png')" />
      </h2>

      <div v-for="pro in proNB" class="w:80% w:full@<992 m:-8%|auto|-20%">
        <a v-if="isOpen" :href="$filters.addGALink(pro.url)" target="_blank">
          <img :src="$filters.siteUrl(pro.saleImage)">
        </a>
        <img v-else :src="$filters.siteUrl(pro.image)">
      </div>
    </section>

    <div v-if="isOpen">
       <!-- 首批保證取貨專區 -->
    <section class="floor1-box floors scroll" titles="首批保證取貨專區" id="floor1">
      <h2 class="title">
        <img :src="$filters.siteUrl('RTXNB/images/bar_01.png')" />
      </h2>

      <div class="box">
        <ul class="gap:10 mt:7% mt:12%@<576 grid-cols:2 w:40% w:60%@<992 w:90%@<576">
          <li v-for="(t1,t) in tab1[0].content" class="grayscale(1) grayscale(0).active translateZ(0) translateZ(0).active color:#fff bg:#23dae8 r:25px box:border-box" :class="[status1 == t ? 'active' : '']">
            <a @click.prevent="changeTab1(t)">
              <img :src="$filters.siteUrl(t1.image)">
            </a>
          </li>
        </ul>

          <div class="tab-content" v-for="(t1,t) in tab1[0].content" v-show="status1 == t">
            <listF v-if="products[menuF1[t]] != undefined" :pro="products[menuF1[t]].Data"></listF>
          </div>

        <div class="text">
          <p class="f:bold color:#f6f402 f:1.5rem f:1.2rem@<576 word-break:break-all">保證取貨賣場不參與贈1000燦坤K幣活動，預計於3/31交機</p>
        </div>
      </div>
    </section>

    <!-- 沒搶到? 客訂排隊送1000K幣 -->
    <section class="floor2-box floors scroll" titles="客訂排隊送1000K幣" id="floor2">
      <h2 class="title">
        <img :src="$filters.siteUrl('RTXNB/images/bar_02_a.png')" />
      </h2>

      <div class="box">
         <ul class="gap:10 mt:7% mt:12%@<576 grid-cols:3 w:60% w:90%@<992">
          <li v-for="(t2,t) in tab2[0].content" class="grayscale(1) grayscale(0).active translateZ(0) translateZ(0).active color:#fff bg:#23dae8 r:25px box:border-box"  :class="[status2 == t ? 'active' : '']">
            <a @click.prevent="changeTab2(t)">
              <img :src="$filters.siteUrl(t2.image)">
            </a>
          </li>
        </ul>

           <div class="tab-content" v-for="(t2,t) in tab2[0].content" v-show="status2 == t">
              <listM v-if="t == 2 && products[menuF2[t]] != undefined" :pro="products[menuF2[t]].Data"></listM>
               <listF v-else-if="products[menuF2[t]] != undefined" :pro="products[menuF2[t]].Data"></listF>
          </div>

        <div class="text">
          <p class="f:bold color:#f6f402 f:1.5rem f:1.2rem@<576 word-break:break-all">客訂交機，過猶豫期後贈送1000燦坤K幣(需具有實體會員資格)</p>
        </div>
      </div>
    </section>
    </div>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<script>
import { EffectFlip } from "swiper/modules";
export default {
  data() {
     const today = new Date();
    const future = new Date('2025/02/25 22:00:00');
    return {
      EffectFlip,
       time: future - today,
      isSale:true,//預購用
      isOpen:false,//開賣用
      specials:[
        {
          "image":"RTXNB/images/sp01.png",
        },
         {
          "image":"RTXNB/images/sp02.png",
        },
         {
          "image":"RTXNB/images/sp03.png",
        },
         {
          "image":"RTXNB/images/sp04.png",
        },
      ],
      special2:[
         {
          "image":"RTXNB/images/sp01.png",
          "url":""
        },
         {
          "image":"RTXNB/images/sp02.png",
          "url":"#floor2"
        },
         {
          "image":"RTXNB/images/sp03_4.png",
          "url":"https://tw.msi.com/Promotion/RTX50_B1/nb"
        },
         {
          "image":"RTXNB/images/sp04_2.png",
          "url":"https://www.asus.com/tw/events/infoM/activity_RTX50_Preorder"
        },
      ],
       cards: [
        { image: 'newyear2025/images/tab1.png' },
        { image: 'newyear2025/images/tab2.png' },
        { image: 'newyear2025/images/tab3.png' }
      ],
      banks:[
        { image: '2025Valentine/images/bank_01.png' },
        { image: '2025Valentine/images/bank_02.png' },
        { image: '2025Valentine/images/bank_03.png' },
        { image: '2025Valentine/images/bank_04.png' },
        { image: '2025Valentine/images/bank_05.png' },
        { image: '2025Valentine/images/bank_06.png' },
      ],
      proNB:[
        { "image": "RTXNB/images/256397_a2.png", "saleImage":"RTXNB/images/256397_c.png", "url": "https://www.tk3c.com/pt.aspx?pid=256397-preorder1" },
        { "image": "RTXNB/images/256195_a1.png", "saleImage":"RTXNB/images/256195_b.png", "url": "https://www.tk3c.com/pt.aspx?pid=256195-preorder1" },
        { "image": "RTXNB/images/256192_a1.png", "saleImage":"RTXNB/images/256192_c.png", "url": "https://www.tk3c.com/pt.aspx?pid=256192-preorder1" },
        { "image": "RTXNB/images/256097_a1.png", "saleImage":"RTXNB/images/256097_b.png", "url": "https://www.tk3c.com/pt.aspx?pid=256097-preorder1" },
        { "image": "RTXNB/images/256092_a1.png", "saleImage":"RTXNB/images/256092_c.png", "url": "https://www.tk3c.com/pt.aspx?pid=256092-preorder1" },
      ],
      floors:[
        {"image":"RTXNB/images/bar_01.png"},
         {"image":"RTXNB/images/bar_02.png"},
      ],
      tab1:[
        {
          "content":[
            {
              "image": "RTXNB/images/tab2.png"
            },
            {
               "image": "RTXNB/images/tab1.png"
            },
          ]
        }
      ],
      tab2:[
         {
          "content":[
             {
               "image": "RTXNB/images/tab2.png"
             },
             {
               "image": "RTXNB/images/tab1.png"
             },
             {
               "image": "RTXNB/images/tab3.png"
             },
          ]
        }
      ],
      today:new Date(),
      statusBank: 0, // 銀行樓層用
      swiperBank: null,
      menuF1:[7814,7815],
      menuF2:[7816,7817,7818],
      status1:0,
      status2:0
    }
  },
  mounted() {
    const { today } = this;
    if(today >= new Date('2025/02/25 22:00')) {
       this.isSale = false;
       this.specials = this.special2;
       this.isOpen = true;

      //撈取首批保證到貨專區商品
      this.getFloorData(this.menuF1);

      //撈取限量送1000燦坤K幣商品
      this.getFloorData(this.menuF2);
    } 
  },
  methods: {
    changeBank(id) {
      setTimeout(() => {
        this.statusBank = id
      }, 20)
    },
    onBankSwiper(swiper) {
      this.swiperBank = swiper;
    },
    goBankSlide(id){
      this.swiperBank.slideTo(id);
    },
    changeTab1(id) {
      this.status1 = id;
    },
     changeTab2(id) {
      this.status2 = id;
    }
  }
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/RTXNB/images/";
$origin: "https://events.tk3c.com/events_net/events_net/RTXNB/images/";

/*  共用樣式調整 */
body{
  background: #011012;
  &:before {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.jpg";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0, top;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
  }
}

.bg01 {
  background:none;
  margin: 0 auto 2%;
}

.time-box {
  p {
    font-size: 3em;
    color: #fff;
  }
  em {
    font-size: 1.5em;
    color: #fdef58;
    font-weight: bold;
  }
  b {
    display: block;
  }
}


#rtx-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 35%;
    .title {
      width: 35%;
      position: absolute;
      left:0;
      right: 0;
      top: 20%;
      margin: 0 auto;
      animation: zoomInNormal 1.6s linear;
    }
    .subtitle {
      width: 30%;
      position: absolute;
      left:0;
      right: 0;
      margin: 0 auto;
      top: 75%;
      animation: flipX 2s linear;
    }
    .earth{
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 45px;
      z-index: -1;
    }
    .product {
      width: 25%;
      margin: 0 auto 0;
      position: absolute;
      top: 27%;
      &.p1 {
        width: 22%;
        left: 8%;
        animation: upAndDown 0.7s linear infinite alternate;
      }
      &.p2{
        right: 8%;
        top: 32%;
        animation: upAndDown 1.6s linear infinite alternate;
        &:before {
          content: '';
          display: block;
          width: 50%;
          height: 100%;
          $image:$dir + 'text.png';
          background: url($image) no-repeat center;
          background-size: 100% auto;
          position: absolute;
          left: -3%;
          top: -62%;
          z-index: -1;
          transform: rotate(6deg);
        }
      }
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image:$dir + 'p.png';
  background: url($image) repeat-y center;
  background-size: 100% auto;
  background-position: 0 0,top;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
}

.card-group {
  .title {
    width: 75%;
  }
}

.floors {
  .bg01 {
    padding-top: 1%;
    box-sizing: border-box;
  }
  .box {
    border: 3px solid #28ec97;
    padding: 2%;
    border-radius: 10px;
    margin-top: -8%;
    background: #000;
  }
}

.pro-box {
  .title {
    width: 75%;
  }
}

.special-box {
  li {
    &:first-of-type {
      a {
        pointer-events: none;
        cursor: auto;
      }
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #rtx-container {
    .background {
      padding-bottom: 50vw;
      .title {
        width: 45%;
        top: 14vw;
      }
      .subtitle {
        width: 40%;
        top: 39vw;
      }
      .product {
        width: 30%;
        top: 12vw;
        &.p1 {
          left: 3vw;
          width: 25%;
          top: 15vw;
        }
        &.p2 {
         right: 1vw;
         &:before {
          width: 60%;
          left: -1vw;
          top: -15vw;
         }
        }
      }
      .earth {
        width: 115%;
      }
    }
  }

  body{
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
    }
  }

  .time-box {
    p {
      font-size: 2em;
    }
  }

  .card-group {
    .title {
      width: 100%;
    }
  }

  .special-box {
    .title {
      width: 80%;
    }
  }

  .pro-box {
    .title {
      width: 100%;
      margin: 0 9% 3%;
    }
  }

  .floors {
    .box {
      margin-top: -11%;
    }
    .bg01 {
      padding-top: 2%;
      box-sizing: border-box;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #rtx-container {
    .background {
      padding-bottom: 165vw;
      .title {
        width: 95%;
        top: 19vw;
        right: 0;
        margin: 0 auto;
      }
      .subtitle {
        width: 80%;
        top: 73vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 90%;
        top: 85vw;
        right: 0;
        margin: 0 auto;
        &.p1 {
          display: none;
        }
        &.p2 {
          top: 90vw;
          &:before {
            width: 44%;
            left: -6vw;
            top: -15vw;
          }
        }
      }
      .earth {
        width: 180%;
        left: -57vw;
        top: 99vw;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -45vw 10vw,top;
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -67vw 0,top;
  }

  .time-box {
    b {
      display: block;
      font-size: 1.5em;
    }
    em {
      font-size: 1em;
    }
  }

  .special-box {
    .title {
      width: 140%;
      margin: 0 -19% 5%;
    }
  }

  .card-group {
    .title {
      width: 170%;
      margin: 0 -39% 5%;
    }
  }

  .pro-box {
    .title {
      width: 170%;
      margin: 0 -25% 3%;
    }
  }

  .floors {
    .box {
      border: 2px solid #1a9c64;
      margin-top: -14vw;
      box-sizing: border-box;
    }
    .bg01 {
      padding-top: 3%;
      box-sizing: border-box;
    }
  }
}
</style>
