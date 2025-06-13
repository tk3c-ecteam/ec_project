<script>
import { Parallax,EffectFade } from "swiper/modules";
export default {
  data() {
    return {
      Parallax,
      EffectFade,
      proWets: [
        { "url": "https://www.tk3c.com/pt.aspx?pid=180197", "image": "wet/images/2406/PD01.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=196830", "image": "wet/images/2406/PD02.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=133641", "image": "wet/images/2406/PD03.png" },
        { "url": "https://www.tk3c.com/pt.aspx?pid=228230", "image": "wet/images/2406/PD05.png" },
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=116231&aid=23026',
          image: 'wet/images/2406/S01.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=116231&aid=23026&hid=120429',
          image: 'wet/images/2406/S02.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643',
          image: 'wet/images/2406/S03.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=22674',
          image: 'wet/images/2406/S04.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=116231&aid=23026&hid=120431',
          image: 'wet/images/2406/S05.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83523',
          image: 'wet/images/2406/S06.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=115927&aid=22750',
          image: 'wet/images/2406/S07.png'
        }
      ],
      menus: [5990,5991,5992,5993,5994,7124,5996],
      menuGo:6830,
    }
  },
  mounted() {
    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  },
  methods: {
    message() {
      this.$refs.alert.openAlert();
    }
  },
}
</script>

<template>
  <div id="wet-container">
    <div class="background">
      <canvas id='canvas'></canvas>
      <h2 class="w:35% w:45vw@<992 w:92vw@<576 abs left:18% left:12vw@<992 left:10vw@<992 left:4vw@<576
              top:45% top:22vw@<992 top:32vw@<576 m:auto animation:blurFadeIn|1.7s|linear">
        <img :src="$filters.siteUrl('wet/images/2406/title3.png')" />
      </h2>
      <p
        class="w:25% w:30vw@<992 w:70vw@<576 abs left:-2% top:10% top:8vw@<992 top:10vw@<576 z:-1 animation:slowMove|3s|linear @iteration-count:infinite direction:alternate">
        <img :src="$filters.siteUrl('wet/images/2406/cloud1.png')" />
      </p>
      <p class="w:25% w:30vw@<992 w:70vw@<576 abs right:-2% top:60% top:36vw@<992 top:92vw@<576 z:-1
              animation:slowMove|2.4s|linear @iteration-count:infinite direction:alternate">
        <img :src="$filters.siteUrl('wet/images/2406/cloud2.png')" />
      </p>
      <div
        class="w:30% w:40vw@<992 w:85vw@<576 abs right:21% right:12vw@<992 right:12vw@<576 top:22% top:8vw@<992 top:66vw@<576">
        <swiper :loop="true" :autoplay="{
          delay: 1800,
          disableOnInteraction: false
        }" :parallax="true" :effect="'fade'" :fadeEffect="{
            crossFade: true
          }" :modules="[EffectFade, Parallax]">
          <swiper-slide v-for="(pro,p) in proWets" :key="p">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <p class="cloud left">
      <img :src="$filters.siteUrl('wet/images/2406/cloud3.png')" />
    </p>
    <p class="cloud right">
      <img :src="$filters.siteUrl('wet/images/2406/cloud4.png')" />
    </p>

    <!-- 政府補助 -->
    <section class="gap:10">
      <ul>
        <li class="w:45% w:full@<576">
          <a @click.prevent="message"><img :src="$filters.siteUrl('wet/images/sub1_b.png')" />
          </a>
        </li>
        <li class="w:45% w:full@<576">
          <a :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')" target="_blank">
            <img :src="$filters.siteUrl('wet/images/sub2_b.png')" /></a>
        </li>
      </ul>

      <!-- 彈出訊息 -->
      <AlertBox ref="alert" :type="'image'">
        <picture>
          <img
            src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg"
            width="100%">
        </picture>
        <picture>
          <img
            src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg"
            width="100%">
        </picture>
      </AlertBox>
    </section>

    <!-- 速速go -->
    <section class="go-box scroll" titles="速速go" id="go">
      <h2 class="title">
        <img :src="$filters.siteUrl('wet/images/tk3cgo_bar.png')" />
      </h2>

      <img class="pc w:full abs left:0 right:0 m:auto top:4% z:-1" :src="$filters.siteUrl('wet/images/2406/BOX.png')">

      <div class="w:95% w:full@<992 m:auto">
        <ListF :isSwiper="1" :name="'go-pro'" :pro="product2[menuGo]"></ListF>
        <a class="more" :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
          <img :src="$filters.siteUrl('wet/images/2406/more.png')" />
        </a>
      </div>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>
  </div>

  <!-- 右側選單  -->
  <RightAside :type="'mobile2'"></RightAside>
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/wet/images/2406/";
$origin: "https://events.tk3c.com/events_net/events_net/wet/images/";
/*  共用樣式調整 */

body {
  background: #213241;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "BG2.png";
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
  background: linear-gradient(to bottom, #28b8bd, #114551);
  border-radius: 15px;
  box-sizing: border-box;
}

/*梅雨*/
#wet-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 40%;
    canvas {
      position: absolute;
    }
  }
}

.cloud {
  width: 100%;
  position: absolute;
  z-index: -1;
  &.left {
    left: 0;
    top: 40%;
  }
  &.right {
    right: 0;
    top: 70%;
  }
  &.fixed {
    position: fixed;
    &.left {
      top: 5%;
    }
    &.right {
      top: 70%;
    }
  }
}

.pro-box {
  .more {
    margin: -9.5% auto 0;
  }
  .bg01 {
    background: none;
  }
}

.go-box {
  .bg01 {
    margin: 0 auto 2%;
  }
}

.alert-box {
  .img-content {
    height: 70%;
    overflow: auto;
    padding: 0;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #wet-container {
    .background {
      padding-bottom: 45vw;
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -8vw 4vw, top;
    }
  }

  .cloud {
    &.left {
      top: 60vw;
    }
    &.right {
      top: 90vw;
    }
  }

  .pro-box {
    .products {
      .bg01 {
        background: linear-gradient(to bottom, #28b8bd, #114551);
        border-radius: 15px;
        padding: 1% 1% 0;
        box-sizing: border-box;
        margin: 0 auto 2%;
      }
    }
    .more {
      margin: 0 auto 0;
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

  #wet-container {
    .background {
      padding-bottom: 145vw;
    }
  }

  body {
    &:before {
      background-size: 240% auto;
      background-position: -110vw 21vw, top;
    }
  }

  .bg01 {
    border-radius: 10px;
    box-sizing: border-box;
  }

  .cloud {
    width: 110%;
    &.left {
      top: 158vw;
    }
    &.right {
      top: 130vw;
    }
  }

  .pro-box {
    .products {
      .bg01 {
        padding: 2% 2% 1%;
        box-sizing: border-box;
      }
    }
  }
}

</style>
