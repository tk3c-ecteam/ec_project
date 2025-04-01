<template>
  <div id="fan-container">
    <div class="background">
      <h2 class="title">
        <img class="pc" :src="$filters.siteUrl('fan_hot/images/2504/title2.png')" />
        <img class="mobile" :src="$filters.siteUrl('fan_hot/images/2504/title2M.png')" />
      </h2>

      <div class="product animate__animated animate__backInRight">
        <img class="pc" :src="$filters.siteUrl('fan_hot/images/2504/PD.png')" />
        <img class="mobile" :src="$filters.siteUrl('fan_hot/images/2504/M-PD.png')" />
      </div>
    </div>

    <div class="background2"></div>

    <section class="pro-group mt:-4%">
      <ProductTop :pro="product2[menuPro]"></ProductTop>
    </section>

    <!-- 沁涼好康 -->
    <section class="gift-box scroll" titles="沁涼好康" id="gift">
      <h2 class="title">
        <img :src="$filters.siteUrl('fan_hot/images/2504/ES_2.png')" />
      </h2>

      <div class="w:85% w:full@<992 m:auto rel">
        <swiper
        :loop="true"
        :space-between="30"
        :effect="'coverflow'"
        :grabCursor="true"
        :coverflowEffect="{
          rotate: 20,
          stretch: 0,
          depth: 135,
          modifier: 1,
          slideShadows : false
        }"
        :navigation="{
           nextEl: '.gift-box .next',
           prevEl: '.gift-box .prev',
        }" 
        :breakpoints="{
          0:{
            slidesPerView:2,
            spaceBetween:10
          },
          600:{
            slidesPerView:3
          }
        }" 
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

    <!-- 銀行優惠 -->
     <section class="bank-group scroll" titles="銀行優惠" v-if="isBank" id="bank">
      <h2 class="title">
       <img :src="$filters.siteUrl('fan_hot/images/2504/bank_title.png')" />
      </h2>

      <div class="w:80% w:full@<992 m:auto">
        <a class="mb:2%" :href="$filters.addGALink('https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main')" target="_blank">
          <img :src="$filters.siteUrl('fan_hot/images/2504/bank1.png')" />
        </a>
        <a class="mb:2%" href="https://www.tk3c.com.tw/#actsdetail&8&794" target="_blank">
          <img :src="$filters.siteUrl('fan_hot/images/2504/bank2.png')" />
        </a>
      </div>
      <a class="w:28% w:40%@<992 m:auto" :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/banks/bank.html')" target="_blank">
        <img :src="$filters.siteUrl('fan_hot/images/2504/bank_more.png')" />
      </a>
     </section>

    <!-- 速速go -->
    <section class="sale-box scroll" titles="速速go" id="go">
      <h2 class="title">
        <a :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
           <img :src="$filters.siteUrl('fan_hot/images/2504/S1.png')" />
        </a>
      </h2>

      <div class="sales">
       <listF :pro="product2[menuGo]" :isSwiper="1" :name="'sale'"></listF> 
      </div>
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
import listM from "@/views/layout/listM.vue";
import { breakpoints } from "@master/css";
import ProductTop from "../../layout/ProductTop.vue";
export default {
  data() {
    return {
      listM,
      gifts:[
         {
          image: 'fan_hot/images/2504/e1_a.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
          {
          image: 'fan_hot/images/2504/e2_a.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
        },
        {
          image: 'fan_hot/images/2504/e3_a.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225'
        },
        {
          image: 'fan_hot/images/2504/e4_a.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=69944'
        },
        {
          image: 'fan_hot/images/2504/e5_a.png',

          url:'https://www.tk3c.com/dic2.aspx?cid=115927&aid=22750&hid=115598'
        },
      ],
      floorImg: [
        {
          image: 'fan_hot/images/2504/S2.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
        },
        {
          image: 'fan_hot/images/2504/S3.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
        },
        {
          image: 'fan_hot/images/2504/S4.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
        },
        {
          image: 'fan_hot/images/2504/S5.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
        },
        {
          image: 'fan_hot/images/2504/S6.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
        },
        {
          image: 'fan_hot/images/2504/S7.png',
          url:'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
        },
         {
          image: 'fan_hot/images/2504/S8.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
        },
        {
          image: 'fan_hot/images/2504/S9.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
          type:listM
        },
         {
          image: 'fan_hot/images/2504/S10.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
          isSwiper:1
        }
      ],
      moreImage:'',
      menuGo:6880, //速速go陳列標題
      menu:[3428,3430,3429,4150,4153,6729,6730,4151,7876],
      today:new Date(),
      isBank:true,
      menuPro:7957
    }
  },
  mounted() {
    //滾動後固定背景
    this.fixedBg('.background2','.gift-box');

    if (this.today >= new Date('2025/04/11')) this.isBank = false;

     this.getFloorSingle(this.menuPro)

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  }
}
</script>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/fan_hot/images/2504/";
$origin: "https://events.tk3c.com/events_net/events_net/fan_hot/images/2504/";

/*  共用樣式調整 */
body {
  background: #e8e5dd;
}

.bg01 {
  background: none;
}

/* 風扇 */
#fan-container {
  .background {
    $image: $dir + "PC-KV.jpg";
    @include bg-responsive($image, 2000, 950);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px, top;
    padding-bottom: 49%;
    .title {
      width: 32%;
      position: absolute;
      left:24%;
      top: 10%;
      animation: bg-wave3 1.6s ease-in;
    }
    .product {
      width: 32%;
      position: absolute;
      right: 15%;
      top: 16%;
      animation-duration: 2s;
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image:$dir + 'PC-body.png';
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
    top: 0;
    z-index: -2;
    background-position: 0 45px,top;
  }
}

section {
  .title {
    margin: 0 auto -3%;
  }
}

.pro-group {
  .bg01 {
    width: 90%;
    border:none;
    background: #fff;
  }
  .swiper-slide {
    width: 30%;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #fan-container {
    .background {
      background-size: 120% auto;
      background-position: -13vw 4vw, top;
      padding-bottom: 61vw;
      .title {
        width: 45%;
        top: 6vw;
        left: 12vw;
      }
      .product {
        width: 45%;
        right: 3vw;
        top: 12vw;
      }
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position: -13vw 0,top;
  }

  section {
    .title {
      margin: 0 auto -5%;
    }
  }

   .pro-group {
    .bg01 {
      width: 100%;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #fan-container {
    .background {
      background: none;
      padding-bottom: 190vw;
      .title {
        width: 80%;
        top: 26vw;
        left: 11%;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 75%;
        right: 0;
        left: 0;
        top: 107vw;
        margin: 0 auto;
      }
    }
  }

  .background2 {
     $image:$dir + 'M-KV.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 21vw,top;
      top: 0;
      &.fixed {
        background-size: 120% auto;
        background-position: -19vw 14vw,top;
      }
  }

  .pro-group {
    .swiper-slide {
      width: 46%;
    }
  }
}

</style>
