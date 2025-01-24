<script>
export default {
  data() {
    return {
      menuSale: [7735,7736,7737,7738,7739,7740,7741],
      menuPro: [7733,7734],// 陳列編號
      menuGreen: 7517, //環保商品陳列編號
      menuGo: 7518, //速速go陳列編號
      yearPro:[
         { image: 'newyear2025/images/S1-1.png' },
          { image: 'newyear2025/images/S1-2.png' },
      ],
      gifts:[
         { image: 'newyear2025/images/C01.png' },
         { image: 'newyear2025/images/C02.png' },
         { image: 'newyear2025/images/C03.png' },
      ],
      sales: [
          { image: 'newyear2025/images/s100.png' },
        { image: 'newyear2025/images/s200.png' },
        { image: 'newyear2025/images/s400.png' },
        { image: 'newyear2025/images/s500.png' },
        { image: 'newyear2025/images/s600.png' },
        { image: 'newyear2025/images/s700.png' },
        { image: 'newyear2025/images/s1000.png' },
      ],
      banks: [
        { image: 'newyear2025/images/tab1.png' },
        { image: 'newyear2025/images/tab2.png' },
        { image: 'newyear2025/images/tab3.png' }
      ],
      asides: [
        { text: '現折券', href: '#sale' },
        { text: '信用卡專屬優惠', href: '#bank' },
        { text: '環保商品', href: '#green' },
        { text: '冰箱/洗衣機', href: '#pro7702' },
        { text: '電視', href: '#pro7703' },
        { text: '電競', href: '#pro7704' },
        { text: '季節家電', href: '#pro7705' },
        { text: '廚房小家電', href: '#pro7706' },
        { text: '空調', href: '#pro7707' },
        { text: '清淨除塵', href: '#pro7708' },
         { text: '美容照明', href: '#pro7709' },
        { text: '筆電', href: '#pro7710' },
        { text: '桌機/螢幕', href: '#pro7711' },
        { text: '電腦周邊', href: '#pro7712' },
        { text: '印表機', href: '#print' },
        { text: 'Apple', href: '#pro7720' },
        { text: 'Android', href: '#pro7721' },
        { text: '秋冬除濕', href: '#pro7713' },
        { text: '平板/穿戴', href: '#pro7459' },
        { text: '燦坤K幣0元購', href: '#bonus' }
      ],
      prices:[
        {
          image:'newyear2025/images/S00-1.png'
        },
          {
          image:'newyear2025/images/S00-2.png'
        },
          {
          image:'newyear2025/images/S00-3.png'
        }
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
    //背景動畫GSAP
    //滾動觸發
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.background .snake ', {
      duration: 2, //時間
      rotation: -90,
      scale:2
    });

     gsap.to('.background .snake ', {
      delay:1,
      scale:1,
      rotation: 0,
    }); 

     gsap.from('.background .title',{
      xPercent:2000,
      yoyo:true,
      duration:2
    })

    gsap.to('.background .title',{
     xPercent:0,
    })

    if(today >= new Date('2025/01/20') && today < new Date('2025/02/04')) this.isYear = true

    // 2/3隱藏滿額禮
    if(today >= new Date('2025/02/03')) this.isPrice = false

    //撈取綠點樓層商品
    this.getFloorSingle(this.menuGreen)

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)

    
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
    }
  }
}
</script>

<template>
  <div id="year-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('newyear2025/images/title.png')" />
      </h2>

      <p class="snake">
        <img :src="$filters.siteUrl('newyear2025/images/de.png')" />
      </p>
    </div>

    <!-- 活動 -->
    <section class="gift-box">
      <img class="w:full scale(1.5)@<576 mt:5%@<576 abs left:0 right:0 m:auto top:0" :src="$filters.siteUrl('newyear2025/images/board.png')" />

      <ul class="w:60% w:70%@<992 w:95%@<576 p:6%|0|3% p:3%|0|1%@<992 p:0|0|1%@<576">
        <swiper
        :loop:="false"
        :space-between="10"
        :autoplay="{ delay: 1800, disableOnInteraction: false }"
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
        }"
        >
         <swiper-slide v-for="gift in gifts" :class="[gift.class ? gift.class : '']">
          <img :src="$filters.siteUrl(gift.image)" width="" height="" alt=" ">
        </swiper-slide>
        </swiper>
         <img class="rel z:5" :src="$filters.siteUrl('newyear2025/images/C04.png')" alt=" " />
      </ul>
      <a href="https://www.tk3c.com.tw/?ec=newyear2025#actsdetail&8&755" target="_blank" class="w:10% w:18%@<992 w:35%@<576 rel z:5"> 
        <img  :src="$filters.siteUrl('newyear2025/images/info.png')" />
      </a>
    </section>

    <!-- 滿額禮 -->
     <section v-if="isPrice">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
          <img :src="$filters.siteUrl('newyear2025/images/s00_title2.png')" />
        </a>
      </h2>

      <swiper
      :loop="false"
      :space-between="10"
      :breakpoints="{
        0:{
          slidesPerView:1.2
        },
        600:{
          slidesPerView:3
        },
        992:{
          slidesPerView:3
        }
      }"
      >
      <swiper-slide v-for="price in prices">
       <img :src="$filters.siteUrl(price.image)" loading="lazy" />
      </swiper-slide>
      </swiper>

      <div class="flex gap:10 jc:center m:2%|auto|0">
        <a class="w:15% w:25%@<992 w:35%@<576 m:0|0" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"> 
          <img :src="$filters.siteUrl('newyear2025/images/login_g.png')" />
        </a>
         <a class="w:15% w:25%@<992 w:35%@<576 m:0|0" :href="$filters.addGALink('https://www.tk3c.com.tw/#activityinfo&8')" target="_blank"> 
          <img :src="$filters.siteUrl('newyear2025/images/info_g.png')" />
        </a>
      </div>
     </section>

      <!-- 行事曆 -->
     <section v-if="isYear">    
      <h2 class="title">
        <img :src="$filters.siteUrl('newyear2025/images/notice_title.png')" />
      </h2>

      <p>
         <img :src="$filters.siteUrl('newyear2025/images/Dayline.png')"  loading="lazy"/>
      </p>
     </section>

    <!-- 開春 -->
     <section class="product-box">
      <h2 class="title">
        <img  :src="$filters.siteUrl('newyear2025/images/S01.png')" alt=" " />
      </h2>

      <Tabs :tabs="yearPro">
        <template v-slot="{ selectedTab }">
          <TabContent v-for="(year,y) in yearPro" :menus="menuPro[y]" :index="y" :selectedTab="selectedTab">
          </TabContent>
        </template>
      </Tabs>
     </section>

    <!-- 現折券 -->
    <section class="sale-box scroll" id="sale">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124236&aid=23905&strPreView=y')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('newyear2025/images/s02c.png')" />
        </a>
      </h2>

       <Tabs :isSwiper="1" :tabs="sales">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(sale,s) in sales" :menus="menuSale[s]" :index="s" :selectedTab="selectedTab">

          </TabContent>
        </template>
      </Tabs>
    </section>

    <!-- 信用卡專屬優惠 -->
    <section class="bank-group scroll" id="bank">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/bank_ec/index.html')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('newyear2025/images/s03.png')" />
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
              <img :src="$filters.siteUrl('newyear2025/images/bank1b.png')" loading="lazy" />
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
                <img :src="$filters.siteUrl('newyear2025/images/bank1-2.png')" loading="lazy" />
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
                <img :src="$filters.siteUrl('newyear2025/images/bank1-3.png')" loading="lazy" />
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
          <img :src="$filters.siteUrl('newyear2025/images/bank2.png')" loading="lazy" />
          <img  :src="$filters.siteUrl('newyear2025/images/bank2-2.png')" loading="lazy" />
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
              <img :src="$filters.siteUrl('newyear2025/images/bank3.png')" loading="lazy" />
            </swiper-slide>
            <swiper-slide>
              <img :src="$filters.siteUrl('newyear2025/images/bank3-2.png')" loading="lazy" />
            </swiper-slide>
            <swiper-slide>
              <img :src="$filters.siteUrl('newyear2025/images/bank3-3.png')" loading="lazy" />
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

    <!-- 環保商品 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')"
          target="_blank"
        >
          <img  :src="$filters.siteUrl('newyear2025/images/s04.png')" />
        </a>
      </h2>

      <p class="w:full bg:#2fbe44 m:2%|0|0@<576">
        <img class="w:70% w:90%@<992 m:auto p:2%|02%" :src="$filters.siteUrl('newyear2025/images/g_board.png')" />
      </p>

      <div class="box">
        <listF
          :pro="product2[menuGreen]"
          :isSwiper="1"
          :name="'green-pro'"
        ></listF>
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
          <img  :src="$filters.siteUrl('Xmas2024/images/go_title.png')" />
        </a>
      </h2>

      <div class="box">
        <listF :pro="product2[menuGo]" :isSwiper="1" :name="'go-box'"></listF>
      </div>
    </section>

    <!-- 其他樓層 -->
   <YearFloor></YearFloor>
  </div>

  <!-- 左側選單 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單 -->
  <RightAside :asides="asides"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";


$dir: 'https://events.cdn-tkec.tw/events_net/events_net/newyear2025/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/newyear2025/images/';

/*  共用樣式調整 */
body {
  background: #8d0000;
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
    position: absolute;
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

#year-container {
  .background {
     $image: $dir + 'kvbg.png';
    @include bg-responsive($image, 2000, 1641);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 83%;
    .title {
      width: 60%;
      position: absolute;
      left: -16%;
      right: 0;
      top: 12%;
      margin: 0 auto;
      img {
        animation: flipX 1.4s linear;
        animation-delay: 2s;
      }
    }

    .snake {
      width: 100%;
      position: absolute;
      right: 0;
      top:45px;
    }
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 5px;
    box-sizing: border-box;
  }
}

.gift-box {
  margin: -38% auto 5%;
  min-width: 100%;
  max-width: 100%;
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

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #year-container {
    .background {
      background-size: 120%;
      background-position: -10vw 4vw,top;
      padding-bottom: 94vw;

      .title {
        width: 70%;
        top: 14vw;
        left: -25vw;
      }
     .snake {
      width: 120%;
      right: -5vw;
      top: 4vw;
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

  #year-container {
    .background {
      background-size: 180% auto;
      background-position: -24vw 22vw,top;
      padding-bottom: 132vw;
      .title {
        width: 100%;
        top: 36vw;
        left: 0;
      }
      .snake{
        width: 170%;
        right: -45vw;
        top: 21vw;
      }
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

  .sale-box {
    .tab {
      .swiper-slide {
        flex-basis: 28%;
      }
    }
  }
}
</style>
