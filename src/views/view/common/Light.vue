<script>
import { Parallax } from "swiper/modules";
import listM from '@/views/layout/listM.vue';
export default {
  data() {
    return {
      Parallax,
      listM,
      proLight: [
        { "url": "https://www.tk3c.com/pt.aspx?pid=225520", "image": "light_equipment/images/new/225520.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=232313", "image": "light_equipment/images/new/232313.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=234531", "image": "light_equipment/images/new/234531.png" },
      ],
      infos:[
        {
          "open_img":"light_equipment/images/new/green.png",
          "button":"light_equipment/images/new/btn01.png"
        },
        {
          "open_img":"light_equipment/images/new/red.png",
          "button":"light_equipment/images/new/btn02.png"
        },
        {
          "open_img":"light_equipment/images/new/low.png",
          "button":"light_equipment/images/new/btn01.png"
        },
        {
          "open_img":"light_equipment/images/new/high.png",
          "button":"light_equipment/images/new/btn02.png"
        }
      ],
      brands:[
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118581",
          "image":"light_equipment/images/YEELIGHT%E2%80%8B.png"
        },
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118585",
          "image":"light_equipment/images/TOSHIBA.png"
        },
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118587",
          "image":"light_equipment/images/KINYO.png"
        },
         {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118582",
          "image":"light_equipment/images/CHIMEI%E2%80%8B.png"
        },
         {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118586",
          "image":"light_equipment/images/ADATA%E2%80%8B.png"
        },
         {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=119344",
          "image":"light_equipment/images/taiwan_lighting.png"
        },
         {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118583",
          "image":"light_equipment/images/PHILIPS%E2%80%8B%E2%80%8B%E2%80%8B.png"
        },
          {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=119341",
          "image":"light_equipment/images/SHARP%E2%80%8B%E2%80%8B.png"
        },
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118589",
          "image":"light_equipment/images/danc.png"
        },
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=118584",
          "image":"light_equipment/images/Panasonic%E2%80%8B.png"
        },
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=119342",
          "image":"light_equipment/images/htt.png"
        },
         {
          "url":"https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=119345",
          "image":"light_equipment/images/mi.png"
        },
      ],
      floorImg: [
        {
          image: 'light_equipment/images/new/BAR03.png'
        },
        {
          image: 'light_equipment/images/new/BAR04.png'
        },
        {
          image: 'light_equipment/images/new/BAR05.png'
        },
        {
          image: 'light_equipment/images/new/BAR06.png'
        },
        {
          image: 'light_equipment/images/new/BAR07.png'
        },
        {
          image: 'light_equipment/images/new/BAR08.png'
        },
        {
          image: 'light_equipment/images/new/BAR09.png',
          type:listM
        },
        {
          image:'light_equipment/images/new/BAR10.png',
          type:listM
        },
        {
          image:'light_equipment/images/new/BAR13.png'
        },
        {
          image:'light_equipment/images/new/BAR11.png'
        }
      ],
      menus: [3960,3961,3962,3963,3964,3965,3966,
        3968,5190,3969
      ],
      menuSp:3955,
      menuSale:3956,
      status:null
    }
  },
  mounted() {
    //撈取人氣熱銷排行樓層商品
    this.getFloorSingle(this.menuSp);

    //撈取激省限時組合樓層商品
    this.getFloorSingle(this.menuSale);
  },
  methods: {
    change(id) {
     this.status = id;
    }
  },
}
</script>

<template>
   <div id="light-container">
        <div class="background">
          <h2 class="title"><img
            :src="$filters.siteUrl('light_equipment/images/new/title.png')">
          </h2>

          <div class="products">
            <swiper
            :loop="true"
            :autoplay="{
              delay:1300,
              disableOnInteraction:false
            }"
            :parallax="true"
            :modules="[Parallax]"
            >
            <swiper-slide v-for="(pro,p) in proLight" :key="p">
              <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax="-700" data-swiper-parallax-duration="800" data-swiper-parallax-opacity="0">
                <img :src="$filters.siteUrl(pro.image)">
              </a>
            </swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="background2"></div>
        <canvas id="canvas"></canvas>

        <!-- 購買指南 -->
        <section class="info-group scroll" titles="購買指南" id="info">
          <img class="abs w:full left:0 right:0 m:auto top:0 z:-1 scale(1.2)@<576 mt:13%@<576" :src="$filters.siteUrl('light_equipment/images/new/info.png')">

          <div class="content w:full h:full rel">
            <div class="w:full flex flex-wrap:wrap gap:350 gap:300@<1700 gap:250@<992 gap:120@<576 m:auto jc:center pt:28% pt:36%@<576 box:border-box">
              <img class="w:15% w:20%@<576" loading="lazy" :src="$filters.siteUrl('light_equipment/images/new/zero.png')">
              <img class="w:15% w:20%@<576" loading="lazy" :src="$filters.siteUrl('light_equipment/images/new/zero.png')">
            </div>

            <div v-for="(info,i) in infos" :key="i" :class="`light${i + 1}`" v-show="status == i">
              <img :src="$filters.siteUrl(info.open_img)">
            </div>
          </div>

          <div class="buttons flex gap:90 gap:70@<992 gap:50@<576 jc:center mt:17% mb:40%">
            <a class="w:15% w:20%@<576 m:0|0" v-for="(info,i) in infos" :key="i" @click="change(i)"><img
              :src="$filters.siteUrl(info.button)">
            </a>
          </div>
        </section>

        <!-- 人氣熱銷排行 -->
        <section class="special-box scroll" titles="人氣熱銷排行" id="special">
          <h2 class="title"><img
            :src="$filters.siteUrl('light_equipment/images/new/BAR02.png')"></h2>
          <ListFCoverflow :pro="product2[menuSp]" :name="'sp'"></ListFCoverflow>
        </section>

        <!-- 限時組合 -->
        <section class="sale-box scroll" titles="限時組合" id="sale">
          <h2 class="title"><img
           :src="$filters.siteUrl('light_equipment/images/new/BAR01.png')"></h2>
          <ListF :pro="product2[menuSale]" :isSwiper="1" :name="'sale'"></ListF>
        </section>

        <!-- 精選品牌 -->
        <section class="brand-box scroll" titles="精選品牌" id="brand">
          <h2 class="title">
            <img :src="$filters.siteUrl('light_equipment/images/bar03.png')">
          </h2>

          <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
             0:{
              slidesPerView:2,
              grid:{
                fill:'colmn',
                rows:3
              }
            },
             600:{
              slidesPerView:3,
              grid:{
                fill:'colmn',
                rows:3
              }
            },
            992:{
              slidesPerView:4,
              grid:{
                fill:'colmn',
                rows:3
              }
            }
          }"
          :pagination="{
            el:'.brand-box .page',
            clickable:true
          }"
          >
          <swiper-slide v-for="(brand,b) in brands" :key="b">
            <a :href="$filters.addGALink(brand.url)" target="_blank">
              <img :src="$filters.siteUrl(brand.image)">
            </a>
          </swiper-slide>
          </swiper>
           <div class="swiper-pagination page"></div>
        </section>

        <!-- 商品樓層 -->
         <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>
      </div>

  <!-- 右側選單  -->
  <RightAside :type="'mobile2'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/light_equipment/images/new/";
$origin: "https://events.tk3c.com/events_net/events_net/light_equipment/images/new/";

/*  共用樣式調整 */
body {
  background: #0f0a45;
}

canvas {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: transparent;
}

form#form1 {
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 40px, top;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    max-width: 2000px;
  }
}

.bg01 {
  background: #452093;
  position: relative;
  border-radius: 10px;
  border: 2px solid #f9e27b;
}

/* 照明長期活動頁 頁面區 */
#light-container {
  width: 100%;
  margin: 0 auto 0;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 40%;
    .title {
      width: 35%;
      position: absolute;
      left: 22%;
      top: 26%;
      margin: 0 auto;
      animation: flipX 2.5s ease;
      img {
        animation: light 1.6s infinite;
      }
    }

    .products {
      width: 25%;
      height: auto;
      position: absolute;
      right: 13%;
      top: 28%;
      &:before {
        content: "";
        display: block;
        width: 140%;
        height: 100%;
        position: absolute;
        $image: $dir + "stage.png";
        background: url($image) no-repeat center;
        background-size: 100% auto;
        left: -18%;
        right: 0;
        margin: 0 auto;
        z-index: -1;
        top: 35%;
      }
    }
  }
}

.background2{
  width: 100%;
  height: 100%;
  $image:$dir + 'item.png';
  background: url($image) repeat-y center;
  background-position: 0 0,top;
  background-size: 100% auto;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 0;
  z-index: -1;
}

.info-group {
  .light1,
  .light2 {
    position: absolute;
    top: 38%;
    width: 30%;
    left: 12%;
  }

  .light3,
  .light4 {
    width: 30%;
    position: absolute;
    right: 12%;
    top:38%;
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #light-container {
    .background {
      padding-bottom: 50%;
      .title {
        width: 40%;
        top: 33%;
        left: 14%;
      }
      .products {
        width: 32%;
        right: 13%;
        top: 25%;
      }
    }
  }

  form#form1 {
    &:before {
      background-size: 130% auto;
      background-position: -2vmax 0, top;
    }
  }

  .info-group {
    .light1,
    .light2 {
      top: 38%;
      left: 11%;
    }

    .light3,
    .light4 {
      top: 38%;
      right: 11%;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #light-container {
    .background {
      padding-bottom: 90%;
      .title {
        width: 55%;
        top: 45%;
        left: 2%;
      }
      .products {
        width: 40%;
        top: 55%;
      }
    }
  }


  form#form1 {
    &:before {
      background-size: 180% auto;
      background-position: -40vw 20vw, top;
    }
  }

  section {
    .title {
      width: 180%;
      margin: 0 -39% 4%;
    }
  }

  .info-group {
    .light1,
    .light2 {
      width: 39%;
      left: 4vw;
      top: 24vw;
    }

    .light3,
    .light4 {
      width: 39%;
      right: 4vw;
      top: 24vw;
    }
  }
}


@include media-query("mobile", "360px") {
  .info-group {
    .content {
      .lighting {
        top: -5px;
      }
    }
  }
}
</style>
