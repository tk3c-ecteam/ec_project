<script>
import { Parallax,EffectFade } from "swiper/modules";
import ListFAddBn from "../../layout/listFAddBn.vue";
export default {
  data() {
    return {
      Parallax,
      EffectFade,
      proOuts: [
        { "url": "https://www.tk3c.com/pt.aspx?pid=209600", "image": "outdoor/images/209600.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=213268", "image": "outdoor/images/213268.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=233663", "image": "outdoor/images/233663.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=235462", "image": "outdoor/images/235462.png" },
         { "url": "https://www.tk3c.com/pt.aspx?pid=237296", "image": "outdoor/images/237296.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=239025", "image": "outdoor/images/239025.png" },
      ],
      icons:[
        { "url": "#pro4431", "image": "outdoor/images/ICON01.png" },
        { "url": "#pro4432", "image": "outdoor/images/ICON02.png" },
        { "url": "#pro4433", "image": "outdoor/images/ICON03.png" },
        { "url": "#pro4434", "image": "outdoor/images/ICON04.png" },
        { "url": "#pro4435", "image": "outdoor/images/ICON05.png" },
      ],
      floors: [
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=118048',
          image: 'outdoor/images/CD01.png',
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=84663&aid=19122',
          image: 'outdoor/images/CD02.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=118048&aid=23106',
          image: 'outdoor/images/CD03.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=118048&aid=23494',
          image: 'outdoor/images/CD04.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=118048&aid=23495',
          image: 'outdoor/images/CD05.png'
        },
      ],
      menus: [4431,4432,4433,4434,4435],
      moreImage:'outdoor/images/more.png'
    }
  },
  mounted() {
    this.fixedBg('.background2','.icon-box');
    
    //撈取速速go樓層商品
    this.getFloorData(this.menus)
  },
  methods: {
    message() {
      Swal.fire({
        width: 900,
        html: `<img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
          <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">`,
        showCloseButton: true,
        position: 'center',
        returnFocus: false,
        confirmButtonText: '確定',
        confirmButtonColor: '#46a5b0'
      })
    }
  },
}
</script>

<template>
  <div id="outdoor-container">
    <div class="background">
      <swiper
      :loop="true"
      :effect="'fade'"
      :fadeEffect="{
        crossFade:true
      }"
      :autoplay="{
        delay:3000,
        disableOnInteraction:false
      }"
      :modules="[EffectFade]"
      >
        <swiper-slide>
          <img :src="$filters.siteUrl('outdoor/images/kv1.png')" />
        </swiper-slide>
        <swiper-slide>
          <img :src="$filters.siteUrl('outdoor/images/kv2.png')" />
        </swiper-slide>
      </swiper>
      <h2 class="title">
        <img :src="$filters.siteUrl('outdoor/images/title.png')" />
      </h2>
      <p class="people">
        <img :src="$filters.siteUrl('outdoor/images/KV.png')" />
      </p>
      <div class="product">
        <swiper
        :loop="true"
        :parallax="true"
        :modules="[Parallax,EffectFade]"
        :effect="'fade'"
          :fadeEffect="{
            crossFade:true
          }"
        :autoplay="{
          delay:1500,
          disableOnInteraction:false
        }"
        >
        <swiper-slide v-for="(pro,p) in proOuts" :key="p" class="flex!">
          <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-y="200" data-swiper-parallax-opacity="0" data-swiper-parallax-duration="300">
            <img :src="$filters.siteUrl(pro.image)">
          </a>
        </swiper-slide>
        </swiper>
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('outdoor/images/item.png')" />
    </p>
    <div class="background2"></div>


    <!-- 導航icon -->
    <section class="icon-box pt:14% box:border-box">
      <swiper
      :loop="false"
      :space-between="10"
      :breakpoints="{
        0:{
          slidesPerView:3.4
        },
        992:{
          slidesPerView:5
        }
      }"
      >
      <swiper-slide v-for="(icon,i) in icons" :key="i">
        <a :href="icon.url">
          <img :src="$filters.siteUrl(icon.image)">
        </a>
      </swiper-slide>
      </swiper>
    </section>

    <!-- 其他樓層 -->
    <section class="floor scroll" v-for="(floor,f) in floors" :key="f" :id="`pro${menus[f]}`" :titles="[products[menus[f]] != undefined ? products[menus[f]].MenuTitle.trim() : '']">
      <ListFAddBn v-if="products[menus[f]] != undefined" :pro="products[menus[f]].Data" :banner="floor.image" :url="floor.url" :moreImage="moreImage"></ListFAddBn>
    </section>
  </div>

  <!-- 右側選單  -->
  <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/outdoor/images/";
$origin: "https://events.tk3c.com/events_net/events_net/outdoor/images/";
/*  共用樣式調整 */

body {
  background: #e9ebc4;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
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


#outdoor-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 34%;
    .title {
      width: 26%;
      position: absolute;
      left: 22%;
      top: 20%;
      margin: 0 auto;
      animation: jump-two-time 1.6s linear;
      z-index: 10;
    }
    .people {
      width: 130%;
      position: absolute;
      z-index: 5;
      left: -16%;
      top: 22%;
    }
    .product {
      width: 20%;
      position: absolute;
      right: 29%;
      top: 18%;
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image:$dir + 'all_bg.png';
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
  }
}

.floor {
  $colors: #ffa306, #b27ced, #6bc382, #eb5426, #198eeb;
  @each $color in $colors {
    $x: index($colors, $color);
    &:nth-of-type(#{$x}) {
      .bg01 {
        background: $color;
      }
    }
  }
  &:last-of-type {
    .bg01 {
      background: #ffa306;
    }
  }
}

.icon-box {
  .swiper-wrapper {
    align-items: baseline;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #outdoor-container {
    .background {
      padding-bottom: 45vw;
      .title {
        width: 32%;
        left: 19%;
        top: 22%;
      }
      .people {
        width: 140%;
        left: -15%;
        top: 38%;
      }
      .product {
        width: 26%;
        right: 22%;
        top: 23%;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw, top;
    }
  }
}

/* 手機版 */

@include media-query("mobile", "576px") {
  #outdoor-container {
    .background {
      padding-bottom: 73vw;
      .title {
        width: 47%;
        left: 5vw;
        top: 18vw;
      }
      .people {
        width: 180%;
        left: -30vw;
        top: 35vw;
      }
      .product {
        width: 40%;
        right: 7vw;
        top: 17vw;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -39vw 10vw, top;
    }
  }

  .floor {
    .banner {
      a {
        width: 26vw;
      }
    }
  }
}

</style>
