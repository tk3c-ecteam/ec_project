<script setup>
const contents = [
        {
          logoImage: "roborock_event/images/common/LOGO.png",
          floorImg: [
            {
              id:1505,
              image: 'roborock_event/images/common/protitle2.png',
              href: "#pro1505",
              text: "本期主打",
            },
            {
              id:1506,
              image: 'roborock_event/images/common/protitle3.png',
              href: "#pro1506",
              text: "強檔熱銷",
            },
             {
              id:1507,
              image: 'roborock_event/images/common/protitle4.png',
              href: "#pro1507",
              text: "配件耗材",
            }
          ],
          slides: [
            { "url": "https://www.tk3c.com/pt.aspx?pid=244715", "pc": "roborock_event/images/common/rock_qrevoMAX.jpg", "mobile": "roborock_event/images/common/rock_qrevoMAXM.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=243673", "pc": "roborock_event/images/common/rockq5pro.jpg", "mobile": "roborock_event/images/common/rockq5proM.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=242015", "pc": "roborock_event/images/common/rock_dypro.jpg", "mobile": "roborock_event/images/common/rock_dyproM.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=238189", "pc": "roborock_event/images/common/1S8PU_2050x600.jpg", "mobile": "roborock_event/images/common/1S8PU_900x800.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=238187", "pc": "roborock_event/images/common/2S8_2050x600.jpg", "mobile": "roborock_event/images/common/2S8_ 900x800.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=239984", "pc": "roborock_event/images/common/3Q_Revo 2050x600.jpg", "mobile": "roborock_event/images/common/3Q_Revo_900x800.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=229090", "pc": "roborock_event/images/common/4Q_7Max_2050x600.jpg", "mobile": "roborock_event/images/common/4Q_7Max_900x800.jpg" },
            { "url": "https://www.tk3c.com/pt.aspx?pid=230244", "pc": "roborock_event/images/common/5G10_2050x600.jpg", "mobile": "roborock_event/images/common/5G10_900x800.jpg" },
          ],
        }
      ];
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <!-- 商品樓層 -->
  <CommonFloor2 :floors="contents[0].floorImg"></CommonFloor2>

  <!-- 影片 -->
  <section class="video-group">
    <div class="w:full m:auto flex flex-wrap:wrap jc:center gap:10">
      <div class="w:45% w:full@<576 rel h:0 pb:25% pb:56%@<576">
        <iframe class="w:full h:full abs left:0 right:0 m:auto top:0 z:-1" src="https://www.youtube.com/embed/C1EmhEytsNU?mute=1" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="w:45% w:full@<576 rel h:0 pb:25% pb:56%@<576">
        <iframe class="w:full h:full abs left:0 right:0 m:auto top:0 z:-1" src="https://www.youtube.com/embed/_7iOsNzQtFo?mute=1" frameborder="0" allowfullscreen=""></iframe>
      </div>
    </div>
  </section>

  <!-- 右側選單+手機版 -->
  <RightAside :asides="contents[0].floorImg" :type="'mobile'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/roborock_event/images/common/";
$origin: "https://events.tk3c.com/events_net/events_net/roborock_event/images/common/";

/*  共用樣式調整 */
form#form1 {
  position: relative;
  &:before {
    content: "";
    $image: $dir + 'bg.png';
    display: block;
    width: 100%;
    height: 100%;
    background: url($image) repeat-y center;
    position: absolute;
    background-attachment: fixed;
    background-position: bottom center;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -2;
  }
}

.bg01 {
  background: none;
}

#store-container {
  .background {
    padding-bottom: 29%;
    .swiper-pagination {
      bottom: 0 !important;
      .swiper-pagination-bullet-active {
        background: #eb0729 !important;
      }
    }
  }
  .logo {
    background: #fff;
    padding: 45px 0 0;
    .logo-title {
      padding-top: 0 !important;
    }
  }
}

nav {
  background: #000;
  padding: 0 !important;
  .swiper-wrapper {
    justify-content: center;
    padding-bottom: 0;
  }
  .swiper-slide {
    margin-right: 50px !important;
    a {
      color: #fff;
      padding: 10px 20px 10px;
       &:hover,
      &.active {
        background: #eb0729;
        color: #fff;
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
      padding-bottom: 88%;
    }
  }

 nav {
  .swiper-wrapper {
    justify-content: left;
    .swiper-slide {
      flex-basis: 30% !important;
      a {
        padding: 16px 20px 5px;
      }
    }
  }
 }
}

@include media-query("mobile", "576px") {
  nav {
    .swiper-wrapper {
      .swiper-slide {
        flex-basis: fit-content !important;
        margin-right: 30px !important;
      }
    }
  }

  .floor {
    .title {
      margin: 0 auto -5%;
    }
  }

  .copyR {
    margin-bottom: 14%;
  }
}

@include media-query("pc", "2000px") {
  nav {
    .swiper-slide {
      a {
        padding: 16px 20px 5px;
      }
    }
  }
}
</style>

