<script setup>
import { Parallax, EffectFade } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
      proWarm: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=120167',
          image: 'electric_heater/images/2502/120167.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=233860',
          image: 'electric_heater/images/2502/233860.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=254130',
          image: 'electric_heater/images/2502/254130.png'
        }
      ],
      floorImg: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112699',
          image: 'electric_heater/images/2502/S2.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112701',
          image: 'electric_heater/images/2502/S3.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112709',
          image: 'electric_heater/images/2502/S4.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=108783&aid=23230&hid=119914',
          image: 'electric_heater/images/2502/S5.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112703',
          image: 'electric_heater/images/2502/S6.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: 'electric_heater/images/2502/S7.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112710',
          image: 'electric_heater/images/2502/S8.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920',
          image: 'electric_heater/images/2502/S9.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=23073',
          image: 'electric_heater/images/2502/S10.png'
        }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/events/eventgift.aspx',
          image: 'electric_heater/images/2502/C1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=842&aid=2966&hid=5664',
          image: 'electric_heater/images/2502/C2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112763',
          image: 'electric_heater/images/2502/C3.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=115927&aid=22750&hid=115598',
          image: 'electric_heater/images/2502/C4.png'
        }
      ],
      menus: [2473, 2474, 2475, 7639, 2476, 2477, 2478, 3741, 3742],
      menuSp: 2472,
      menuGo:7690,
      statusGift: 0,
      today: new Date(),
      isSale:true,
      moreImage:''
    }
  },
  mounted() {
    const { today } = this

    //看更多按鈕
    this.moreImage = 'electric_heater/images/2502/more.png';

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)

    //撈取強檔推薦樓層商品
    this.getFloorSingle(this.menuSp)
  },
  methods: {
    change(id) {
      this.statusGift = id
    }
  }
}
</script>

<template>
  <div id="warm-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2502/title2.png')" />
      </h2>

      <div class="subtitle animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('electric_heater/images/2502/tt.png')" />
      </div>

      <p class="stage">
        <img :src="$filters.siteUrl('electric_heater/images/2502/STAGE.png')" />
      </p>

      <div class="product">
        <swiper 
        :loop="true" 
        :effect="'fade'"
        :fadeEffect="{
          crossFade:true
        }" 
        :parallax="true" 
        :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :modules="[Parallax, EffectFade]">
          <swiper-slide v-for="(pro, p) in proWarm" :key="p" class="flex!">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-x="-3000">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <canvas id="particle_canvas"></canvas>
    <p class="item">
      <img :src="$filters.siteUrl('electric_heater/images/2502/item.png')" />
    </p>

    <!-- 暖心優惠一把抓 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2502/S0.png')" alt=" " />
      </h2>

      <!-- 線上獨家 -->

      <div class="gift">
        <ul class="w:85% w:full@<992 gap:10 grid-cols:2 grid-cols:1@<576 ai:baseline">
          <li v-for="(gift, g) in gifts">
            <a :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 速速go -->
    <section class="go-box scroll" titles="速速go" id="go">
      <h2 class="title">
        <img :src="$filters.siteUrl('wet/images/tk3cgo_bar.png')" />
      </h2>

      <div class="box">
        <ListF :isSwiper="1" :name="'go-pro'" :pro="product2[menuGo]"></ListF>
        <a class="more" :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
          <img :src="$filters.siteUrl('electric_heater/images/2502/more.png')" />
        </a>
      </div>
    </section>

    <!-- 強檔推薦 保暖必Buy -->
    <section class="special-box scroll" titles="強檔推薦" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2502/S1.png')"/>
      </h2>

      <div class="specials">
        <ListF :pro="product2[menuSp]"></ListF>
        <a class="more" :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779')" target="_blank">
          <img :src="$filters.siteUrl('electric_heater/images/2502/more.png')" />
        </a>
      </div>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus" :moreImage="moreImage"></CommonFloor>
  </div>

  <!-- 左側選單+手機版 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單  -->
  <RightAside :asides="asides"></RightAside>
</template>

<style lang="scss">
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/electric_heater/images/2502/';
$origin: 'https://events.tk3c.com/events_net/events_net/electric_heater/images/2502/';

body {
  background: #fef7ea;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: #d0a970;
  margin: 0 auto 2%;
}

 .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

.item {
  top: 250px;
}

section {
  .title {
    width: 100%;
  }
}

#warm-container {
  .background {
   width: 100%;
   height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 43%;
    .title {
      width: 30%;
      position: absolute;
      left: 22%;
      top: 21%;
      animation: blurFadeIn 1.8s ease-in;
    }
    .product {
      width: 17%;
      position: absolute;
      right: 25.5%;
      top: 37%;
    }
    .subtitle {
      width: 27%;
      position: absolute;
      left: 22%;
      top: 58%;
      animation-duration: 1.3s;
    }
    .stage {
      width: 28%;
      position: absolute;
      right: 19%;
      top: 12%;
    }
  }
}

.gift-box {
  .content {
    li {
      width: 47%;
      margin: 0 5px 1%;
    }
  }
}

.icon-group {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #fff !important;
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
  .swiper-wrapper {
    justify-content: center;
  }
}

.go-box {
  .title {
    width: 60%;
  }
}

@include media-query('mobile', '992px') {
  body {
    &:before {
      background-size: 120% auto;
      background-position:
        -7vw 4vw,
        top;
    }
  }

  #warm-container {
    .background {
      padding-bottom: 55vw;
      .title {
        width: 45%;
        left: 7vw;
        top: 11vw;
      }
      .subtitle {
        width: 38%;
        left: 9vw;
        top: 34vw;
      }
      .product {
        width: 25%;
        right: 17vw;
        top: 21vw;
      }
      .stage {
        width: 40%;
        right: 8vw;
        right: 6vw;
      }
    }
  }

  .bg01 {
    margin: 0 auto 2%;
  }

  .go-box {
    .title {
      width: 100%;
    }
  }
}

@include media-query('mobile', '576px') {
  body {
    &:before {
      background-size: 180% auto;
      background-position:
        -46vw 37vw,
        top;
    }
  }

  #warm-container {
    .background {
      padding-bottom: 215vw;
      .title {
        width: 90%;
        left: 0;
        right: 0;
        top: 31vw;
        margin: 0 auto;
      }
      .subtitle {
        width: 75%;
        left: 0;
        right: 0;
        top: 78vw;
        margin: 0 auto;
      }
      .product {
        width: 60%;
        right: 0;
        left: 0;
        top: 134vw;
        margin: 0 auto;
      }
      .stage {
        width: 95%;
        left: 0;
        right: 0;
        top: 46%;
        margin: 0 auto;
      }
    }
  }

  section {
    .title {
      width: 160%;
      margin: 0 -30% 3%;
    }
  }

  .go-box {
    .title {
      width: 100%;
      margin: 0 auto 3%;
    }
  }

  .gift-box {
     li {
        width: 95%;
        margin: 0 5px 3%;
      }
  }
}
</style>
