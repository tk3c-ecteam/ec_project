<template>
  <div id="fan-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('fan_hot/images/2505/title2.png')" />
      </h2>
      <p class="product p1 animate__animated  animate__bounceInDown">
        <img :src="$filters.siteUrl('fan_hot/images/2505/freebie2.png')" />
      </p>
       <p class="product p2 animate__animated animate__fadeInRight">
        <img :src="$filters.siteUrl('fan_hot/images/2505/PD.png')" />
      </p>
       <p class="flowers left">
        <img :src="$filters.siteUrl('fan_hot/images/2505/flower_l.png')" />
      </p>
       <p class="flowers right">
        <img :src="$filters.siteUrl('fan_hot/images/2505/flower_r.png')" />
      </p>
    </div>

    <div class="background2">
       <p class="petal left">
        <img :src="$filters.siteUrl('fan_hot/images/2505/petal01.png')" />
      </p>
       <p class="petal right">
        <img :src="$filters.siteUrl('fan_hot/images/2505/petal02.png')" />
      </p>
    </div>

    <section class="top-group mt:-16% mt:-29vw@<992 mt:-63vw@<576">
      <img class="w:93% w:98%@<992 abs left:0 right:0 m:auto top:-4% z:-1" :src="$filters.siteUrl('fan_hot/images/2505/sp_box.png')" />
      <div class="bg:#ffd600 p:0|0|1% p:0|0|2%@<576 w:93% w:98%@<992 m:auto r:20px box:border-box">
        <ProductTop :pro="product2[menuPro]"></ProductTop>
      </div>
    </section>

    <!-- 沁涼好康 -->
    <section class="gift-box scroll mt:16%@<576" titles="沁涼好康" id="gift">
      <h2 class="title">
        <img :src="$filters.siteUrl('fan_hot/images/2505/bar_sp.png')" />
      </h2>

      <div class="w:95% w:full@<992 pt:7% pt:0@<992 box:border-box m:auto rel">
        <swiper
        :loop="false"
        :space-between="10"
        :navigation="{
           nextEl: '.gift-box .next',
           prevEl: '.gift-box .prev',
        }" 
        :breakpoints="{
          0:{
            slidesPerView:2,
          },
          600:{
            slidesPerView:3
          },
          992:{
            slidesPerView:4
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

    <!-- 速速go -->
    <section class="sale-box scroll mt:8%" titles="速速go" id="go">
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
  <LeftAside></LeftAside>

  <!-- 右側選單 -->
  <RightAside></RightAside>
</template>

<script>
import listM from "@/views/layout/listM.vue";
export default {
  data() {
    return {
      listM,
      gifts:[
         {
          image: 'fan_hot/images/2505/sp01.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
          {
          image: 'fan_hot/images/2505/sp02.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=17040&hid=124669'
        },
        {
          image: 'fan_hot/images/2505/sp03.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225'
        },
        {
          image: 'fan_hot/images/2505/sp04.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=2966&hid=5664'
        },
        {
          image: 'fan_hot/images/2505/sp05.png',

          url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=22698&hid=115598'
        },
         {
          image: 'fan_hot/images/2505/sp06.png',

          url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=22698&hid=116932'
        },
         {
          image: 'fan_hot/images/2505/sp07.png',

          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
        },
      ],
      floorImg: [
        {
          image: 'fan_hot/images/2505/bar_01.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
        },
        {
          image: 'fan_hot/images/2505/bar_03.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
        },
        {
          image: 'fan_hot/images/2505/bar_04.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
        },
        {
          image: 'fan_hot/images/2505/bar_05.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
        },
        {
          image: 'fan_hot/images/2505/bar_11.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
        },
        {
          image: 'fan_hot/images/2505/bar_07.png',
          url:'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
        },
         {
          image: 'fan_hot/images/2505/bar_08.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
        },
        {
          image: 'fan_hot/images/2505/bar_09.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
          type:listM
        },
         {
          image: 'fan_hot/images/2505/bar_10.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
          isSwiper:1
        }
      ],
      moreImage:'',
      menuGo:6880, //速速go陳列標題
      menu:[3428,3430,3429,4150,4153,6729,6730,4151,7876],
      today:new Date(),
      menuPro:7957
    }
  },
  mounted() {
    this.fixedBg('.background2','.floor #pro3428');

    //背景動畫GSAP
    //滾動觸發
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.background .flowers ', {
      scale:1.5,
      transformOrigin: 'center top',
      scrollTrigger: {
        trigger:'.background',
        scrub:0.4,
        start:'top top',
        end:'top+=40%'
      }
    });

     this.getFloorSingle(this.menuPro)

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  }
}
</script>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/fan_hot/images/2505/";
$origin: "https://events.tk3c.com/events_net/events_net/fan_hot/images/2505/";

/*  共用樣式調整 */
body {
  background: #fdd401;
   &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'kvbg.png';
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
  background: none;
}

/* 風扇 */
#fan-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 55%;
    .title {
      width: 30%;
      position: absolute;
      left:21%;
      top: 12%;
      animation: bg-wave3 1.6s ease-in;
    }
    .product {
      position: absolute;
      &.p1 {
        width: 16%;
        left: 44%;
        top: 45%;
        animation-duration: 0.5s;
      }
      &.p2 {
        width: 47%;
        right: 2%;
        top: 16%;
        animation-duration: 1.6s;
      }
    }
    .flowers {
      width: 30%;
      position: absolute;
      top: 45px;
      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
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
    bottom: 0;
    background-position: 0 -47vw,top;
  }
  .petal {
    &.left {
      width: 8%;
      margin-top: 10%;
    }
    &.right {
      width: 6%;
      margin-left: 89%;
      margin-top: -10%;
    }
  }
}

.top-group {
  .bg01 {
    width: 95%;
    background: #fff;
    margin: 0 auto 0;
  }
}

.floor {
  .bg01 {
    background: #1245b9;
    padding: 2% 2% 1% !important;
    border-radius: 20px;
    box-sizing: border-box;
  }
}

.sale-box {
  .title {
    margin: 0 auto -4%;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #fan-container {
    .background {
      background-size: 120% auto;
      background-position: -13vw 4vw, top;
      padding-bottom: 78vw;
      .title {
        width: 35%;
        top: 12vw;
        left: 14vw;
      }
      .product {
        &.p1 {
          width: 20%;
          top: 30vw;
          left: 42vw;
        }
        &.p2 {
          width: 50%;
          right: 0;
          top: 13vw;
        }
      }
      .flowers {
        width: 35%;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -11vw 4vw,top;
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -43vw -7vw,top;
    &.fixed {
      background-position: -43vw -85vw,top;
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
      padding-bottom: 214vw;
      .title {
        width: 80%;
        top: 22vw;
        left: 11vw;
        right: 0;
        margin: 0 auto;
      }
      .product {
       &.p1 {
        width: 50%;
        top: 97vw;
        left: 2vw;
       }
       &.p2 {
        width: 100%;
        right: -19vw;
        top: 90vw;
       }
      }
      .flowers {
        width: 50%;
      }
    }
  }

  .background2 {
    background-size: 250% auto;
    background-position: -77vw -14vw,top;
    &.fixed {
      background-position: -77vw -112vw,top;
    }
    .petal {
      &.left {
        width: 10%;
      }
      &.right {
        width: 8%;
      }
    }
  }

  body {
    &:before {
      background-size: 300% auto;
      background-position: -93vw 18vw,top;
    }
  }
  
  .floor {
    .bg01 {
      border-radius: 10px;
      box-sizing: border-box;
    }
  }
}

</style>
