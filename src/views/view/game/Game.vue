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
              "text":"PlayStation",
              "menu":[4492,7020,7021],
              "title": "PLAYGAMES/images/2408/S4.png",
              "yt": "HDg2NLve6Ig",
              "url": "https://www.tk3c.com/dic2.aspx?cid=111639&aid=23906&hid=114170",
              "content": [
                { "url": "https://www.tk3c.com/dic2.aspx?cid=111639&aid=23906&hid=114170", "image": "PLAYGAMES/images/2408/S04_01.png" },
                { "url": "https://www.tk3c.com/dic2.aspx?cid=111639&aid=23906&hid=114252", "image": "PLAYGAMES/images/2408/S04_02.png" },
                { "url": "https://www.tk3c.com/dic2.aspx?cid=111639&aid=23906&hid=114169", "image": "PLAYGAMES/images/2408/S04_03.png" },
              ]
            },
          ],
          1: [
            {
              "text":"NS SWITCH",
              "menu":[4495,7022,7023],
              "title": "PLAYGAMES/images/2408/S5.png",
              "yt": "DpYz24pspQA",
              "url": "https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=116007",
              "content": [
                { "url":"https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=116007","image": "PLAYGAMES/images/2408/S04_01.png" },
                { "url":"https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=112422","image": "PLAYGAMES/images/2408/S04_02.png" },
                { "url":"https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=112423","image": "PLAYGAMES/images/2408/S04_03.png" },
              ]
            },
          ],
          2: [
            {
              "text":"XBOX",
              "menu":[7024,7025,5760],
              "title": "PLAYGAMES/images/2408/S6.png",
              "yt": "IOB2ApsKjT8",
              "url": "https://www.tk3c.com/dic1.aspx?cid=111639&aid=23910",
              "content": [
                { "image": "PLAYGAMES/images/2408/S04_01.png" },
                { "image": "PLAYGAMES/images/2408/S04_02.png" },
                { "image": "PLAYGAMES/images/2408/S04_03.png" },
              ]
            },
          ],
          3: [
            {
              "text":"MYCARD",
              "menu":[7026,6445],
              "title": "PLAYGAMES/images/2408/S7.png",
              "image": "PLAYGAMES/images/24618/bn1.png",
              "url": "https://www.tk3c.com/dic1.aspx?cid=111639&aid=23909",
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
        { "url": "https://www.tk3c.com/pt.aspx?pid=249373", "image": "PLAYGAMES/images/2408/249373.png" },
      ],
      menuGo:7027,
    }
  },
  mounted() {
    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  }
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
    <section class="sale-box scroll" titles="速速GO" id="sale">
      <h2 class="title">
        <a :href="$filters.addGALink('https://fast.tk3c.com/')" target="_blank">
          <img :src="$filters.siteUrl('PLAYGAMES/images/2408/S2.png')">
        </a>
      </h2>
      <div class="sales">
        <listF :pro="product2[menuGo]" :isSwiper="1" :name="'go'"></listF>
      </div>
    </section>

    <!-- 有頁籤的樓層 -->
    <section v-for="(floor,f) in proFloors[0]" :titles="floor[0].text" :class="`pro${Number(f) + 1}-box product-area scroll`"
      :id="`pro${Number(f) + 1}`">
      <h2 class="title" :class="[f == 2 || f == 3 ? 'single-url' : '']">
        <a :href="$filters.addGALink(floor[0].url)">
          <img :src="$filters.siteUrl(floor[0].title)">
        </a>
      </h2>

      <!-- 頁籤區 -->
      <div class="topic">
        <img class="w:66% w:full@<576 abs top:0 left:1% z:-1"
          :src="$filters.siteUrl('PLAYGAMES/images/2407/MEDIA_BOX.png')">
        <img v-if="f == 3" :src="$filters.siteUrl(floor[0].image)" class="banner">
        <div v-else class="youtube">
          <iframe :src="`https://www.youtube.com/embed/${floor[0].yt}`" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <div>
        <Tabs :isSwiper="1" :direct="'vertical'" :tabs="floor[0].content">
          <template v-slot="{ selectedTab }">
            <TabContent v-for="(content, c) in floor[0].content" :menus="floor[0].menu[c]" :index="c"
              :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
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
    width: 25%;
    margin: 3% 0 3% 67%;
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
    top: 18%;
  }
}

.pro4-box {
  .topic {
    padding-bottom: 10%;
  }
  .tab {
    margin: 0 0 11% 67%;
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
      width: 30%;
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
      .swiper-slide {
        flex-basis: 47%;
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
  }
}

</style>
