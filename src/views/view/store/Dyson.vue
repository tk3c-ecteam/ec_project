<script setup>
const contents = [
        {
          logoImage: "dyson/images/logo.png",
          floorImg: [
            {
              id:2383,
              image: 'dyson/images/fl1.jpg',
              href: "#pro2383",
              text: "新品上市",
            },
            {
              id:2384,
              image: 'dyson/images/fl2.jpg',
              href: "#pro2384",
              text: "吸塵器",
            },
             {
              id:2385,
              image: 'dyson/images/fl3.jpg',
              href: "#pro2385",
              text: "空氣清淨機與風扇",
            },
            {
              id:2386,
              image: 'dyson/images/fl4.jpg',
              href: "#pro2386",
              text: "頭髮護理"
            },
            {
              id:2387,
              image: 'dyson/images/fl5.jpg',
              href: "#pro2387",
              text: "乾手器",
            },
          ],
          slides: [
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=244460',
              pc: 'dyson/images/dyson231109.jpg',
              mobile: 'dyson/images/dyson231109M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=240606',
              pc: 'dyson/images/dyson231109B2.jpg',
              mobile: 'dyson/images/dyson231109B2M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=239788',
              pc: 'dyson/images/dysonv12.jpg',
              mobile: 'dyson/images/dysonv12M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=242153',
              pc: 'dyson/images/dysonHD15.jpg',
              mobile: 'dyson/images/dysonHD15M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=210740',
              pc: 'dyson/images/bn5.jpg',
              mobile: 'dyson/images/bn5M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=216981',
              pc: 'dyson/images/bn6.jpg',
              mobile: 'dyson/images/bn6M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=216977',
              pc: 'dyson/images/bn7.jpg',
              mobile: 'dyson/images/bn7M.jpg'
            },
            {
              url: 'https://www.tk3c.com/pt.aspx?cid=110689&aid=22108&hid=110701&pid=216979',
              pc: 'dyson/images/bn1.jpg',
              mobile: 'dyson/images/bn1M.jpg'
            }
          ],
        }
      ];
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <!-- 影片區 -->
  <div class="youtube w:full m:0|auto|2%">
    <video autoplay muted loop class="w:full">
      <source :src="$filters.siteUrl('dyson/video/dyson2307.mp4')" type="video/mp4" />
    </video>
  </div>

  <!-- 商品樓層 -->
  <CommonFloor2 :floors="contents[0].floorImg"></CommonFloor2>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/dyson/images/";
$origin: "https://events.tk3c.com/events_net/events_net/dyson/images/";

/*  共用樣式調整 */
body {
  background: #e7e6e6;
}

.bg01 {
  background: none;
}

#store-container {
  .background {
    padding-bottom: 29%;
    .swiper-pagination {
      bottom: 0 !important;
    }
  }
  .logo {
    background: #000;
    padding: 45px 0 0;
    span {
      width: 10%;
    }
  }
}

nav {
  background: #fff;
  padding: 0 !important;
  .swiper-wrapper {
    justify-content: center;
    padding-bottom: 0;
  }
  .swiper-slide {
    margin-right: 50px !important;
    a {
      color: #000;
      padding: 10px 20px 10px;
    }
    &:hover,
    .active {
      background: #878787;
      color: #fff;
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
        width: 25%;
      }
    }
  }

 nav {
  .swiper-wrapper {
    justify-content: left;
    .swiper-slide {
      margin-right: 75px !important;
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
        margin-right: 30px !important;
      }
    }
  }
}
</style>

