<script setup>
const contents = [
        {
          logoImage: "TOSHIBA202206/images/logo.png",
          floorImg: [
            {
              image: 'TOSHIBA202206/images/t1.png',
              href: "#pro3227",
              text: "熱銷商品",
            },
            {
              image: 'TOSHIBA202206/images/t2.png',
              href: "#pro3228",
              text: "冰箱",
            },
             {
              image: 'TOSHIBA202206/images/t3.png',
              href: "#pro3229",
              text: "洗衣機",
            },
            {
              image: 'TOSHIBA202206/images/t4.png',
              href: "#pro3230",
              text: "小家電"
            }
          ],
          slides: [
            { 
              "url": "https://www.tk3c.com/dic1.aspx?cid=111723&aid=22711", 
              "pc": "TOSHIBA202206/images/2050x600_b2.jpg", 
              "mobile": "TOSHIBA202206/images/900x800_b2M.jpg" 
            },
            { 
              "url": "https://www.tk3c.com/pt.aspx?pid=220548", 
              "pc": "TOSHIBA202206/images/2050x600_rt.jpg", 
              "mobile": "TOSHIBA202206/images/900x800rtM.jpg" 
            },
          ],
          menu:[3227,3228,3229,3230]
        }
      ];    
</script>
<script>
  export default {
    mounted() {
      this.fixedBg('.background2','.yt-group');
    },
  }
</script>

<template>
  <StoreDefault :contents="contents">
    <template #special>
      <div class="background2"></div>

      <!-- 影片區 -->
      <section class="yt-group mt:3%">
        <div class="w:full gap:10 grid-cols:2 grid-cols:1@<576 m:auto" id="hot">
          <div class="h:0 pb:90% w:full@<992 rel">
            <iframe class="abs w:full h:full left:0 right:0 top:0 m:auto" frameborder="0"
              src="https://www.youtube.com/embed/6J0IPGbofos?autoplay=1&mute=1&loop=1"></iframe>
          </div>
          <div class="product">
            <a href="https://www.tk3c.com/pt.aspx?cid=111723&aid=22711&hid=115679&pid=233453" target="_blank">
              <img :src="$filters.siteUrl('TOSHIBA202206/images/product9.jpg')">
            </a>
          </div>
        </div>
      </section>
    </template>
  </StoreDefault>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/TOSHIBA202206/images/";
$origin: "https://events.tk3c.com/events_net/events_net/TOSHIBA202206/images/";

/*  共用樣式調整 */
.bg01 {
  background: none;
}

section {
  .title {
    width: 45%;
  }
}

#store-container {
  .background {
    padding-bottom: 29%;
    .logo {
      background: #fff;
    }
  }
}

.background2 {
  width: 100%;
    height: 100%;
    $image: $dir + "bg_common.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    &.fixed {
      position: fixed;
      top: 45px;
      z-index: -2;
    }
}

nav {
  background: #717171;
  .swiper-slide {
    margin-right: 50px !important;
    a {
      color: #fff;
      &.active,
      &:hover {
        color:#000;
        font-weight: bold;
      }
    }
  }
}

.floor {
  .title {
    margin: 0 auto 0;
    b {
      font-size: 0;
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #store-container {
    .background {
      padding-bottom: 92%;
    }
    .logo {
      span {
        width: 40%;
      }
    }
  }

  .background2 {
    background-size: 190% auto;
  }

 nav {
  .swiper-wrapper {
    justify-content: left;
    .swiper-slide {
      margin-right: 75px !important;
    }
  }
 }

 section {
  .title {
    width: 70%;
  }
 }
}

@include media-query("mobile", "576px") {
  nav {
    .swiper-wrapper {
      .swiper-slide {
        margin-right: 30px !important;
      }
    }
  }

  #store-container {
    .logo {
      span {
        width: 70%;
      }
    }
  }

  section {
    .title {
      width: 100%;
    }
  }
}
</style>

