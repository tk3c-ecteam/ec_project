<script>
export default {
  data() {
    return {
      menuHot: 7819,// 熱銷推薦陳列編號
      menuLimit: 7820, //3/8限時陳列編號
      menus:[7821,7822,7823,7824,7825,7826,7827,7828,7829],
      gifts:[
         { image: '2025GirlDay/images/e01_a.png' },
         { image: '2025GirlDay/images/e02_a.png' },
         { image: '2025GirlDay/images/e03_a.png' },
      ],
      sales: [
        { url:"https://www.tk3c.com/dic2.aspx?cid=124362&aid=23927&hid=124365", image: '2025GirlDay/images/c1_a.png'},
        { url:"https://www.tk3c.com/dic2.aspx?cid=124362&aid=23927&hid=124366" ,image: '2025GirlDay/images/c2_a.png'},
        { url:"https://www.tk3c.com/dic2.aspx?cid=124362&aid=23927&hid=124368",image: '2025GirlDay/images/c3_a.png' },
        { url:"https://www.tk3c.com/dic2.aspx?cid=124362&aid=23927&hid=124370",image: '2025GirlDay/images/c4_a.png' },
      ],
      banks: [
        { image: '2025GirlDay/images/bank1_a.png', 
          links:[
            "https://events.tk3c.com/events_net/tk3c_creditcard/index.html"
          ] 
        },
        { 
          image: '2025GirlDay/images/bank2_a.png',
          links:[
            "https://www.tk3c.com.tw/#activityinfo&8"
          ]
        },
        { 
          image: '2025GirlDay/images/bank3_a.png' ,
          links:[
            "https://events.tk3c.com/events_net/invoice_login/home.aspx",
            "https://www.tk3c.com.tw/#activityinfo&8"
          ]
        }
      ],
      proGirls:[
        { image: '2025GirlDay/images/PD1_a.png' },
        { url:"https://www.tk3c.com/pt.aspx?pid=236015",image: '2025GirlDay/images/pd_text1_a.png' },
        { url:"https://www.tk3c.com/pt.aspx?pid=245484",image: '2025GirlDay/images/pd_text2_a.png' },
        { image: '2025GirlDay/images/PD2_a.png' },
         { image: '2025GirlDay/images/PD3_a.png' },
        { url:"https://www.tk3c.com/pt.aspx?pid=254872",image: '2025GirlDay/images/pd_text3_a.png' },
        { url:"https://www.tk3c.com/pt.aspx?pid=251174",image: '2025GirlDay/images/pd_text4_a.png' },
        { image: '2025GirlDay/images/PD4_a.png' },
      ],
      floors:[
        {
          image:'2025GirlDay/images/S6_bar.png',
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=10890"
        },
         {
          image:'2025GirlDay/images/S7_bar.png',
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=4640"
        },
         {
          image:'2025GirlDay/images/S8_bar.png',
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=83186"
        },
          {
          image:'2025GirlDay/images/S9_bar.png',
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=40444"
        },
         {
          image:'2025GirlDay/images/S10_bar.png',
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=11703"
        },
          {
          image:'2025GirlDay/images/S11_bar.png',
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=71484"
        },
         {
          image:'2025GirlDay/images/S12_bar.png',
          url:"https://events.tk3c.com/events_net/RTXNB/index.html"
        },
          {
          image:'2025GirlDay/images/S13_bar.png',
          url:"https://events.tk3c.com/events_net/icewash2209/index.html"
        },
         {
          image:'2025GirlDay/images/S14_bar.png',
          url:"https://events.tk3c.com/events_net/2020TVforever/index.html"
        },
      ],
      events:[
        {
          image:'2025GirlDay/images/S5_e1_a.png',
          url:"https://page.line.me/tid7686u"
        },
         {
          image:'2025GirlDay/images/S5_e2_a.png',
          url:"https://www.facebook.com/TDdd331"
        },
         {
          image:'2025GirlDay/images/S5_e3.png',
          url:"https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html"
        },
         {
          image:'2025GirlDay/images/S5_e4.png',
          url:"https://events.tk3c.com/events_net/green_subsidy/index.html"
        },
      ],
      today: new Date(),
      isLimit:false // 3/8限時用
    }
  },
  mounted() {
    const { today } = this;

    this.fixedBg('.background2','.special-box');

     //背景動畫GSAP
    //滾動觸發
    const gsapAnimate = gsap.timeline();

    gsapAnimate.fromTo(
      '.background .title',
      {duration:2,opacity:0,scale:1.5},
      {duration:2,opacity:1,scale:1},
    );

    gsapAnimate.fromTo(
      '.moto',
      {xPercent:100},
      {xPercent:0},
    );

     gsapAnimate.fromTo(
      '.background .product',
      {opacity:0,scale:2,duration: 3},
      {opacity:1,scale:1,duration: 3}
    );

    //撈取熱銷推薦商品
    this.getFloorSingle(this.menuHot)

    //撈取3/8限時樓層商品
    this.getFloorSingle(this.menuLimit);

    //3/8顯示限時下殺
    if(today >= new Date('2025/03/08 00:00') && today < new Date('2025/03/09 00:00')) this.isLimit = true;
    
  }
}
</script>

<template>
  <div id="girl-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025GirlDay/images/title.png')" />
      </h2>
      <p class="product">
         <img :src="$filters.siteUrl('2025GirlDay/images/product.png')" />
      </p>
       <p class="queen">
         <img :src="$filters.siteUrl('2025GirlDay/images/queen.png')" />
      </p>
      <p class="moto">
         <img :src="$filters.siteUrl('2025GirlDay/images/moto.png')" />
      </p>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('2025GirlDay/images/item.png')" />
    </p>

    <div class="background2"></div>

    <section class="special-box">
      <div class="w:90% w:full@<576 m:auto">
        <swiper :loop:="true" :space-between="10" :autoplay="{ delay: 1800, disableOnInteraction: false }"
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
            <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
              <img :src="$filters.siteUrl(gift.image)">
            </a>
            
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 鈔值特搜 -->
     <section class="hot-box scroll" titles="鈔值特搜" id="hot">
        <h2 class="title">
           <img :src="$filters.siteUrl('2025GirlDay/images/S1_bar_a.png')" />
        </h2>
       
        <div>
          <listF :pro="product2[menuHot]" :isSwiper="1" :name="'hot'"></listF>
        </div>
     </section>

      <!-- 3/8限時下殺 -->
     <section class="limit-box" v-show="isLimit">
        <img :src="$filters.siteUrl('2025GirlDay/images/S2_bar_a.png')" />
        <div>
          <listF :pro="product2[menuLimit]" :isSwiper="1" :name="'limit'"></listF>
        </div>
     </section>

     <!-- 姐的必BUY清單 -->
      <section class="scroll" titles="姐的必BUY清單" id="buy">
          <h2 class="title">
            <img :src="$filters.siteUrl('2025GirlDay/images/S3_bar.png')" />
          </h2>

          <ul class="w:80% w:90%@<992 w:full@<576 gap:10 grid-cols:2">
            <li v-for="(pro,p) in proGirls">
              <a v-if="pro.url" :href="$filters.addGALink(pro.url)" target="_blank">
                <img :src="$filters.siteUrl(pro.image)">
              </a>
               <img v-else :src="$filters.siteUrl(pro.image)">
            </li>
          </ul>
      </section>

    <!-- 銀行優惠 -->
    <section class="bank-group scroll" titles="銀行優惠" id="bank">
      <div class="banks rel w:75% w:85%@<992 w:full@<576 m:auto" v-for="bank in banks">
        <img class="mb:4%" :src="$filters.siteUrl(bank.image)">
        <div class="abs w:full left:0 right:0 m:auto top:0 flex flex-direction:column">
          <a v-for="link in bank.links" :class="[bank.links.length > 1 ? 'mix' : '']" :href="$filters.addGALink(link)" target="_blank"></a>
        </div>
      </div>
        <a class="w:30% w:45%@<992 w:75%@<576 m:2%|auto" :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/banks/bank.html')" target="_blank">
          <img :src="$filters.siteUrl('2025GirlDay/images/bank_more.png')">
        </a>
    </section>

    <!-- 瘋搶折價 -->
    <section class="sale-group scroll" titles="瘋搶折價" id="sale">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124362&aid=23927')" target="_blank">
          <img :src="$filters.siteUrl('2025GirlDay/images/S4_bar_a.png')" />
        </a>
      </h2>

      <div class="box">
        <swiper
        :loop="fasle"
        :space-between="10"
        :breakpoints="{
          0:{
            slidesPerView:2.2
          },
          600:{
            slidesPerView:3.3
          },
          992:{
            slidesPerView:4
          }
        }"
        :navigation="{
          nextEl:'.sale-group .next',
          prevEl:'.sale-group .prev'
        }"
        >
        <swiper-slide v-for="sale in sales">
          <a :href="$filters.addGALink(sale.url)" target="_blank">
            <img :src="$filters.siteUrl(sale.image)">
          </a>
        </swiper-slide>
         <div class="swiper-button-prev prev"></div> 
         <div class="swiper-button-next next"></div>
        </swiper>
      </div>
    </section>

    <!-- 活動 -->
    <section class="event-box scroll" titles="活動指南這裡看" id="event">
      <h2 class="title">
         <img :src="$filters.siteUrl('2025GirlDay/images/S5_bar.png')" />
      </h2>

      <ul class="w:85% w:90%@<992 w:full@<576 gap:10 grid-cols:2 grid-cols:1@<576">
        <li v-for="event in events">
          <a :href="$filters.addGALink(event.url)" target="_blank">
            <img :src="$filters.siteUrl(event.image)">
          </a>
        </li>
      </ul>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floors" :menu="menus"></CommonFloor>
  </div>

  <!-- 左側選單 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單 -->
  <RightAside :asides="asides"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";


$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2025GirlDay/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/2025GirlDay/images/';

/*  共用樣式調整 */
body {
  background: #ffdcbb;
}

.bg01 {
  background: none;
}

.aside-container {
  &:not(.left) {
    zoom: 0.8;
  }
}

section {
  .title {
    width: 45%;
  }
}

#girl-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 42%;
    .title {
      width: 25%;
      position: absolute;
      left: 19%;
      right: 0;
      top: 17%;
      margin: 0 auto;
    }
    .product {
      width: 75%;
      position: absolute;
      left: 7%;
      top: 15%;
      animation-delay: 2s;
      animation: upAndDown 0.8s linear infinite alternate;
    }
    .queen {
      width: 42%;
      position: absolute;
      left: 15%;
      top: 13%;
    }
    .moto {
      width: 20%;
      position: absolute;
      right: 0;
      top: 54%;
    }
  }
}

.item {
  top: 250px;
  filter: opacity(0.3);
}

.background2{
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
  top: 45px;
  z-index: -1;
  &.fixed {
    position: fixed;
    z-index: -2;
  }
}

.bank-group {
  .banks {
    a {
      width: 100%;
      height: 169px;
      &.mix {
        height: 85px;
      }
    }
  }
}


/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #girl-container {
    .background {
      padding-bottom: 63vw;

      .title {
        width: 35%;
        top: 11vw;
        left: 26vw;
      }
      .product {
        width: 90%;
        left: 4vw;
        top: 11vw;
      }
      .queen {
        width: 57%;
        left: 4vw;
        top: 10vw;
      }
      .moto {
        width: 25%;
        top: 39vw;
      }
    }
  }

  .background2 {
     background-size: 120% auto;
      background-position: -11vw 0,top;
  }

  section {
    .title {
      width: 80%;
    }
  }

  .bank-group {
    .banks {
      a {
        height: 16vw;
        &.mix {
          height: 8vw;
        }
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

  #girl-container {
    .background {
      padding-bottom:100vw;
      .title {
        width: 50%;
        top: 30vw;
        left: 43vw;
      }
      .product {
        display: none;
      }
      .moto {
        display: none;
      }
      .queen{
        width: 86%;
        left: -19vw;
        top: 29vw;
      }
    }
  }

  .background2 {
    background-size: 210% auto;
    background-position: -56vw 12vw,top;
    &.fixed {
       background-position: -56vw 0,top;
    }
  }

  section {
    .title {
      width: 100%;
    }
  }

  .floor {
    .title {
      margin: 0 auto 0;
    }
  }

  .bank-group {
    .banks {
      a {
        height: 18vw;
        &.mix {
          height: 9vw;
        }
      }
    }
  }
}
</style>
