<script>
export default {
  data() {
    return {
      menuSale: [7761,7762,7763,7764,7765,7767],
      menuPro: [7733,7734],// 陳列編號
      menuGreen: 7517, //環保商品陳列編號
      menuGo: 7518, //速速go陳列編號
      menuGift:7768, //情人節送禮攻略陳列編號
      gifts:[
         { image: '2025Valentine/images/C01.png' },
         { image: '2025Valentine/images/C02.png' },
         { image: '2025Valentine/images/C03.png' },
      ],
      sales: [
        { image: '2025Valentine/images/S2_100.png' },
        { image: '2025Valentine/images/S2_399.png' },
        { image: '2025Valentine/images/S2_499.png' },
        { image: '2025Valentine/images/S2_599.png' },
        { image: '2025Valentine/images/S2_699.png' },
        { image: '2025Valentine/images/S2_999.png' },
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
      bonus:[
        {
          image: '2025Valentine/images/S22_1.png',
        },
        {
          image: '2025Valentine/images/S22-2.png',
        },
        {
          image: '2025Valentine/images/S22-3.png',
        },
        {
          image: '2025Valentine/images/S24-4.png',
        },
      ],
      statusBank: 0, // 銀行樓層用
      today: new Date(),
      swiperBank:null,
      isPrice:true,
      isYear:false
    }
  },
  mounted() {
    const { today } = this;

    this.fixedBg('.background2','.sale-box');

    //撈取綠點樓層商品
    this.getFloorSingle(this.menuGreen)

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)

    //撈取情人節送禮攻略樓層商品
    this.getFloorSingle(this.menuGift)
    
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
    goDM() {
      let dmImage = 'https://events.cdn-tkec.tw/events_net/events_net/2025Valentine/images/S26_DM.jpg';
       Swal.fire({
        width: 1200,
        html: `<img src="${dmImage}" width:"100%" height:"100%">`,
        confirmButtonText: '關閉',
        position: 'center',
        showCloseButton: true,
        confirmButtonColor: '#000',
        returnFocus: false
      })
    }
  }
}
</script>

<template>
  <div id="valent-container">
    <div class="background">
      <h2 class="title animate__animated animate__backInDown">
        <img :src="$filters.siteUrl('2025Valentine/images/title.png')" />
      </h2>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('2025Valentine/images/hart.png')" />
    </p>

    <div class="background2"></div>

    <section class="special-box">
      <div class="w:90% w:full@<576 m:auto">
        <swiper :loop:="false" :space-between="10" :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :breakpoints="{
            0:{
              slidesPerView:2
            },
            600:{
              slidesPerView:3
            },
            992:{
              slidesPerView:3
            }
          }">
          <swiper-slide v-for="gift in gifts">
            <img :src="$filters.siteUrl(gift.image)">
          </swiper-slide>
        </swiper>
        <a class="m:1%|0|2%"
          :href="$filters.addGALink('https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main')"
          target="_blank">
          <img class="rel z:5" :src="$filters.siteUrl('2025Valentine/images/C04_2.png')" />
        </a>
      </div>
    </section>

    <!-- 現折券 -->
    <section class="sale-box scroll" id="sale">
      <h2 class="title">
        <a :href="
            $filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124306&aid=23922')
          " target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/S2_bar_2.png')" />
        </a>
      </h2>

      <Tabs :isSwiper="1" :tabs="sales">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(sale,s) in sales" :menus="menuSale[s]" :index="s"
            :selectedTab="selectedTab">

          </TabContent>
        </template>
      </Tabs>
    </section>

    <!-- 信用卡專屬優惠 -->
    <section class="card-group scroll" titles="信用卡優惠" id="card">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/bank_ec/index.html')" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/S3_bar.png')" />
        </a>
      </h2>

      <div class="mb:4%">
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
            <a :href="
                $filters.addGALink(
                  'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
                )
              " target="_blank">
              <img :src="$filters.siteUrl('2025Valentine/images/bank1c.png')" />
            </a>
          </li>
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
          <img :src="$filters.siteUrl('2025Valentine/images/bank2.png')" />
          <img :src="$filters.siteUrl('2025Valentine/images/bank2-2b.png')" />
        </p>
        <a href="https://www.tk3c.com.tw/#activityinfo&8" class="w:16% w:24%@<992 w:40%@<576 mt:3% mt:6%@<576"
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
            <img :src="$filters.siteUrl('2025Valentine/images/bank3.png')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="$filters.siteUrl('2025Valentine/images/bank3-2.png')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="$filters.siteUrl('2025Valentine/images/bank3-3b.png')" />
          </swiper-slide>
        </swiper>
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/invoice_login/home.aspx')"
          class="w:16% w:24%@<992 w:30%@<576 mt:3% mt:6%@<576" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/go.png')" />
        </a>
      </div>
    </section>

    <!-- 銀行 -->
    <section class="bank-group scroll" titles="銀行優惠" id="bank">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/banks/bank.html')" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/S25_bar.png')" />
        </a>
      </h2>

      <div>
        <swiper :loop="true" :space-between="10" :centeredSlides="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }" :breakpoints="{
          0:{
            slidesPerView:1
          },
          600:{
            slidesPerView:3
          }
        }">
          <swiper-slide v-for="bank in banks">
            <img :src="$filters.siteUrl(bank.image)" loading="lazy">
          </swiper-slide>
        </swiper>
        <img class="w:70% w:full@<992 m:0|auto|2%" :src="$filters.siteUrl('2025Valentine/images/bank_07.png')"
          loading="lazy">
        <a class="w:25% w:40%@<992 w:50%@<576"
          :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/banks/bank.html')" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/more_bank.png')">
        </a>
      </div>
    </section>

    <!-- 情人節送禮攻略 -->
    <section class="gift-group scroll" titles="情人節送禮攻略" id="gift">
      <h2 class="title">
       <img :src="$filters.siteUrl('2025Valentine/images/special_title.png')" />
      </h2>

      <div class="box">
        <listD :pro="product2[menuGift]"></listD>
      </div>
    </section>

    <!-- 環保商品 -->
    <section class="green-box scroll" titles="環保商品" id="green">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/S4_bar.png')" />
        </a>
      </h2>

      <p class="w:full bg:#2fbe44 m:2%|0|0@<576">
        <img class="w:85% w:95%@<992 m:auto p:2%|02%" :src="$filters.siteUrl('2025Valentine/images/S4_sp.png')" />
      </p>

      <div class="box">
        <listF :pro="product2[menuGreen]" :isSwiper="1" :name="'green-pro'"></listF>
      </div>
    </section>

    <!-- 速速go -->
    <section class="go-group">
      <h2 class="title">
        <a :href="
            $filters.addGALink('https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html')
          " target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/S5_bar.png')" />
        </a>
      </h2>

      <div class="box">
        <listF :pro="product2[menuGo]" :isSwiper="1" :name="'go-box'"></listF>
      </div>
    </section>

    <!-- 其他樓層 -->
    <ValentFloor></ValentFloor>

    <!-- k幣 -->
    <section class="bonus-group scroll" titles="燦坤K幣0元購" id="bonus">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/other_store.aspx')" target="_blank">
          <img :src="$filters.siteUrl('2025Valentine/images/S22_bar.png')" />
        </a>
      </h2>

      <div class="mb:5%">
        <swiper :loop="false" :space-between="10" :breakpoints="{
          0: {
            slidesPerView: 2.3,
          },
          600: {
            slidesPerView: 3.4,
          },
          992: {
            slidesPerView: 4,
          }
        }" class="mb:1%">
          <swiper-slide v-for="bon in bonus">
            <img :src="$filters.siteUrl(bon.image)" loading="lazy">
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 滿額禮 -->
    <section class="gift-box">
      <img :src="$filters.siteUrl('2025Valentine/images/gift.jpg')" loading="lazy" />
    </section>

    <!-- 3c麻吉 -->
    <section>
      <a @click="goDM">
        <img :src="$filters.siteUrl('2025Valentine/images/S26.jpg')" loading="lazy" />
      </a>
    </section>
  </div>

  <!-- 左側選單 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單 -->
  <RightAside :asides="asides"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";


$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2025Valentine/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/2025Valentine/images/';

/*  共用樣式調整 */
body {
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: none;
}

.aside-container {
  &:not(.left) {
    zoom: 0.8;
  }
}

#valent-container {
  .background {
     $image: $dir + 'kvbg.png';
    @include bg-responsive($image, 2000, 1016);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 51%;
    .title {
      width: 50%;
      position: absolute;
      left: 0;
      right: 0;
      top: 27%;
      margin: 0 auto;
      animation-duration: 1.8s;
    }
  }
}

.background2{
  width: 40%;
  height: 100%;
  $image:$dir + 'carousel.png';
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 0,top;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  &.fixed {
    position: fixed;
    bottom: 2%;
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 5px;
    box-sizing: border-box;
  }
}

.special-box {
  margin: -20% auto 5%;
}

.print-box {
  .swiper-wrapper {
    justify-content: center;
  }

  .tab {
    margin-bottom: 1% !important;
  }
}

.bank-group {
  .tab-content {
    width: 90%;
    margin: 0 auto 0;
  }
}


.sale-box {
  .bg01 {
    background: #b9036e;
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

.product-box {
  .tab-content {
    .bg01 {
      background: #ba1c1c;
      border: 5px solid #f6e256;
      border-radius: 25px;
      box-sizing: border-box;
      margin: 0 auto 2%;
    }
  }
  .tab {
    li {
      width: 23%;
    }
  }
}

.floor {
  .title {
    margin: 0 auto 1%;
  }
}

.bonus-group {
  .swiper-wrapper {
    align-items: baseline;
  }
}

.sale-box {
  .tab {
    margin-bottom: 1% !important;
    justify-content: left;
  }
}

.print-box {
  .tab {
   .swiper-slide {
    flex-basis: 18%;
   }
  }
}


/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #valent-container {
    .background {
      background-size: 120%;
      background-position: -10vw 4vw,top;
      padding-bottom: 63vw;

      .title {
        width: 70%;
        top: 18vw;
      }
    }
  }

  .sale-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
      .swiper-slide {
        flex-basis: 22%;
      }
    }
  }

  .bank-group {
    .tab-content {
      width: 100%;
    }
  }

  .product-box {
    .tab {
      li {
        width: 43%;
      }
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

  #valent-container {
    .background {
      background-size: 205% auto;
      background-position: -54vw 22vw,top;
      padding-bottom: 98vw;
      .title {
        width: 100%;
        top: 43vw;
        left: 0;
      }
    }
  }

  .background2 {
    width: 80%;
    &.fixed {
      bottom: -16%;
    }
  }

  .floor {
    .title {
      width: 120%;
      margin: 0 -10% 3%;
    }
  }

  .bank-group {
    .tab-content {
      width: 100%;
    }
  }

  .sale-box {
    .tab {
      .swiper-slide {
        flex-basis: 28%;
      }
    }
  }

  .print-box {
    .tab {
      margin-bottom: 0 !important;
      .swiper-slide {
        flex-basis: 27%;
      }
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }
}
</style>
