<script setup>
  import { EffectFade, Parallax } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
      proFloors: [
        {
          0: [
            {
              "menu":[4492,7020,7021],
              "title": "PLAYGAMES/images/2408/S4.png",
              "yt": "HDg2NLve6Ig",
              "url": "https://www.tk3c.com/dic1.aspx?cid=629&aid=10180",
              "content": [
                { "url": "https://www.tk3c.com/dic2.aspx?cid=629&aid=10180&hid=114170", "image": "PLAYGAMES/images/2408/S04_01.png" },
                { "url": "https://www.tk3c.com/dic2.aspx?cid=629&aid=10180&hid=114252", "image": "PLAYGAMES/images/2408/S04_02.png" },
                { "url": "https://www.tk3c.com/dic2.aspx?cid=629&aid=10180&hid=114169", "image": "PLAYGAMES/images/2408/S04_03.png" },
              ]
            },
          ],
          1: [
            {
              "menu":[4495,7022,7023],
              "title": "PLAYGAMES/images/2408/S5.png",
              "yt": "DpYz24pspQA",
              "url": "https://www.tk3c.com/dic1.aspx?cid=629&aid=20340",
              "content": [
                { "image": "PLAYGAMES/images/2408/S04_01.png" },
                { "image": "PLAYGAMES/images/2408/S04_02.png" },
                { "image": "PLAYGAMES/images/2408/S04_03.png" },
              ]
            },
          ],
          2: [
            {
              "menu":[7024,7025,5760],
              "title": "PLAYGAMES/images/2408/S6.png",
              "yt": "IOB2ApsKjT8",
              "url": "https://www.tk3c.com/dic1.aspx?cid=629&aid=22217",
              "content": [
                { "image": "PLAYGAMES/images/2408/S04_01.png" },
                { "image": "PLAYGAMES/images/2408/S04_02.png" },
                { "image": "PLAYGAMES/images/2408/S04_03.png" },
              ]
            },
          ],
          3: [
            {
              "menu":[7026,6445],
              "title": "PLAYGAMES/images/2408/S7.png",
              "image": "PLAYGAMES/images/24618/bn1.png",
              "url": "https://www.tk3c.com/dic1.aspx?cid=629&aid=22230",
              "content": [
                { "image": "PLAYGAMES/images/2408/S07_01.png" },
                {"image": "PLAYGAMES/images/2408/S07_02.png" },
              ]
            },
          ]
        }
      ],
      proGame: [
        { "url": "https://www.tk3c.com/pt.aspx?pid=203202", "image": "PLAYGAMES/images/2408/203202.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=220671", "image": "PLAYGAMES/images/2408/220671.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=213384", "image": "PLAYGAMES/images/2408/213384.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=244984-240526", "image": "PLAYGAMES/images/2408/244984-240526.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=246485", "image": "PLAYGAMES/images/2408/246485.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=249373", "image": "PLAYGAMES/images/2408/249373.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=249413", "image": "PLAYGAMES/images/2408/249413.png" },
      ],
      asides:[
        {text:'速速GO',href:'sale'},
        {text:'遊戲掌機',href:'pro'},
        {text:'PlayStation',href:'pro1'},
        {text:'Nintendo Switch',href:'pro2'},
        {text:'Xbox',href:'pro3'},
        {text:'Mycard',href:'pro4'},
      ],
      menuGo:7027,
      menuPro:4549,
      statusTab:0
    }
  },
  mounted() {
    const { proFloors } = this;

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)

    //撈取遊戲掌機樓層商品
    this.getFloorSingle(this.menuPro)

    for (const [f, floor] of Object.entries(proFloors[0])) {
      //撈取商品樓層 有頁籤
      if (floor[0].content != undefined) {
        this.getFloorData(floor[0].menu)
      }
    }
  },
  methods: {
    changeTab(id) {
      if(event) {
         let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(0,8)
        setTimeout(() => {
          this.showAndHide(id, '.' + parentName)
        }, 30)
      }
    }
  },
}
</script>

<template>
  <div id="game">
    <div class="background">
      <h2 class="title animate__animated animate__backInLeft @duration:1.5s">
        <img :src="$filters.siteUrl('PLAYGAMES/images/2408/title.png')">
      </h2>
      <div class="product animate__animated animate__bounceInRight @duration:0.8s">
        <swiper :loop="true" :effect="'fade'" :fadeEffect="{
          crossFade: true
        }" :parallax="true" :autoplay="{ delay: 2300, disableOnInteraction: false }" :modules="[EffectFade, Parallax]">
          <swiper-slide v-for="(game, g) in proGame" :key="g">
            <a :href="$filters.addGALink(game.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(game.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="background2"></div>

    <!-- 速速go -->
    <section class="sale-box scroll" id="sale">
      <h2 class="title">
        <a :href="$filters.addGALink('https://fast.tk3c.com/')" target="_blank">
          <img :src="$filters.siteUrl('PLAYGAMES/images/2408/S2.png')">
        </a>
      </h2>
      <div class="sales">
        <listF :pro="product2[menuGo]" :isSwiper="1" :name="'go'"></listF>
      </div>
    </section>

    <!-- 遊戲掌機 -->
    <section class="pro-group scroll" id="pro">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=629&aid=23516&hid=121144')" target="_blank">
          <img :src="$filters.siteUrl('PLAYGAMES/images/2408/S3.png')">
        </a>
      </h2>
      <div class="products">
        <listF :pro="product2[menuPro]" :isSwiper="1" :name="'pro'"></listF>
      </div>
    </section>

    <!-- 有頁籤的樓層 -->
    <section v-for="(floor,f) in proFloors[0]" :class="`pro${Number(f) + 1}-box product-area scroll`"
      :id="`pro${Number(f) + 1}`">
      <h2 class="title">
        <a :href="$filters.addGALink(floor[0].url)">
          <img :src="$filters.siteUrl(floor[0].title)">
        </a>
      </h2>

      <!-- 頁籤區 -->
      <div class="topic">
        <img class="w:66% w:full@<576 abs top:0 left:1% z:-1" :src="$filters.siteUrl('PLAYGAMES/images/2407/MEDIA_BOX.png')">
        <img v-if="f == 3" :src="$filters.siteUrl(floor[0].image)" class="banner">
        <div v-else class="youtube">
          <iframe :src="`https://www.youtube.com/embed/${floor[0].yt}`" frameborder="0" allowfullscreen></iframe>
        </div>
        
        <ul class="tab" 
        v-if="floor[0].content != undefined">
        <swiper
        :loop="false"
        :spaceBetween="10"
        :breakpoints="{
            0: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 1,
            },
          },
          600: {
            slidesPerView: 1.1,
            grid: {
              fill: 'row',
              rows: 3,
            },
          },
          992: {
            slidesPerView: 1.1,
            grid: {
              fill: 'row',
              rows: 3,
            },
          },
        }"
        >
          <swiper-slide v-for="(content, c) in floor[0].content" :class="[statusTab == c ? 'active' : '']">
            <a @click="changeTab(c)" :value="content.url">
              <img :src="$filters.siteUrl(content.image)" />
          </a>
        </swiper-slide>
        </swiper>
      </ul>
      </div>

      <div class="tab-content" v-for="(content, c) in floor[0].content" :key="c" v-show="statusTab == c">
          <listF
            v-if="products[floor[0].menu[c]] != undefined"
            :pro="products[floor[0].menu[c]].Data"
          ></listF>
        </div>
    </section>


  </div>

  <!-- 右側選單 + 手機板 -->
  <RightAside :asides="asides"></RightAside>

  <!-- 左側選單 -->
  <LeftAside :asides="asides"></LeftAside>
</template>

<style lang="scss">
  @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/PLAYGAMES/images/2408/";
$origin: "https://events.tk3c.com/events_net/events_net/PLAYGAMES/images/2408/";

/*  共用樣式調整 */
body {
  position: relative;
  background: #522179;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "BG.png";
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
  margin: 0 auto 2%;
  position: relative;
}

.more {
  padding: 0;
  font-size: 0;
}

#game {
  width: 100%;
  margin: 0 auto;
  .background {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 42%;
    .title {
      width: 35%;
      position: absolute;
      left: 20%;
      top: 20%;
    }
    .product {
      width: 30%;
      position: absolute;
      right: 26%;
      top: 22%;
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image: $dir + "bg2.png";
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  &.fixed {
    position: fixed;
    top: 0;
    z-index: -1;
  }
}

.product-area {
  .topic {
    display: flex;
    position: relative;
  }
  .tab {
    width: 31%;
    margin: 0 0 2% 67%;
    .swiper-wrapper {
      padding-left: 10px;
    }
    .swiper-slide {
      filter: brightness(0.7);
      &.active {
        filter: brightness(1);
      }
    }
  }
  .youtube {
    width: 64%;
    height: 0;
    position: absolute;
    padding-bottom: 35%;
    left: 2%;
    top: 18px;
    z-index: 10;
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }
  .banner {
    width: 62%;
    position: absolute;
    left: 3%;
    top: 6%;
  }
}

.pro4-box {
  .topic {
    padding-bottom: 10%;
  }
  .tab {
    padding-top: 10%;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw, top;
    }
  }

  #game {
    .background {
      padding-bottom: 52%;
      .title {
        width: 45%;
        left: 12vw;
        top: 12vw;
      }
      .product {
        width: 35%;
        right: 21vw;
        top: 12vw;
      }
    }
  }

  .product-area {
    .tab {
      width: 34%;
    }
    .youtube {
      top: 15px;
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

  body {
    &:before {
      background-size: 350% auto;
      background-position: -119vw 21vw, top;
    }
  }

  #game {
    .background {
      padding-bottom: 180%;
      .title {
        width: 90%;
        left: 0;
        top: 22vw;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 95%;
        right: 0;
        left: -29vw;
        top: 85vw;
        margin: 0 auto;
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -39vw 0, top;
  }

  .product-area {
    .topic {
      flex-direction: column;
    }
    .youtube {
      width: 91vw;
      left: 2vw;
      top: 2vw;
      padding-bottom: 54%;
    }
    .floor-bg {
      width: 100%;
    }
    .tab {
      width: 100%;
      margin: 60% 0 0;
      .swiper-wrapper {
        justify-content: left;
      }
    }
    .banner {
      width: 90vw;
      left: 3vw;
      top: 3vw;
    }
    .more {
      width: 30vw;
      right: 0;
    }
  }

  .pro4-box {
    .topic {
      padding-bottom: 0;
    }
    .tab {
      margin: 50% 0 0;
      .swiper-slide {
        width: 46% !important;
      }
      .swiper-wrapper {
        justify-content: center;
      }
    }
  }
}

</style>
