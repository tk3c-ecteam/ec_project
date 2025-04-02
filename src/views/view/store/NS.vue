<script setup>
import listM from '@/views/layout/listM.vue'
const contents = [
        {
          logoText: "Nintendo Switch 品牌旗艦館",
          singleImage:'NS/images/switch_title.jpg',
          floorImg: [
            {
              href: "#pro2362",
              text: "本期活動",
            },
            {
              href: "#pro2363",
              text: "熱銷專區",
            },
             {
              href: "#pro2364",
              text: "優惠組合",
            },
            {
              href: "#pro2365",
              text: "遊戲軟體"
            },
            {
              href: "#pro2366",
              text: "控制器",
              type:listM
            },
            {
              href: "#pro2367",
              text: "專屬配件",
            },
            {
              href: "#pro2368",
              text: "amiibo",
            },
          ],
          slides: [
            {
              url: 'https://www.tk3c.com/pt.aspx?pid=236098',
              pc: 'NS/images/ns2303_2050x600.jpg',
              mobile: 'NS/images/ns2303_900x800.jpg'
            }
          ],
        }
      ];

      const navs = [
        {
          image:'NS/images/item1.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=116007'
        },
        {
          image:'NS/images/item2.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=112420'
        },
        {
          image:'NS/images/item3.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=112422'
        },
        {
          image:'NS/images/item4.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=112423'
        },
        {
          image:'NS/images/item5.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=111639&aid=23911&hid=124254'
        },
      ];
      const menus = [2362,2363,2364,2365,2366,2367,2368];
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <!-- 影片區 -->
  <div class="youtube">
    <iframe frameborder="0" src="https://www.youtube.com/embed/ew6OCUN-5jE?autoplay=1&mute=1&loop=1"
      allowfullscreen></iframe>
  </div>

  <!-- 導航區 -->
  <div class="bg:#fff mb:2%">
    <swiper 
    :loop="false" 
    :space-between="10" 
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }" 
    :breakpoints="{
      0:{
        slidesPerView:2
      },
      600:{
        slidesPerView:3
      },
      992:{
        slidesPerView:5
      }
    }">
      <swiper-slide v-for="(nv, n) in navs">
        <a :href="nv.url" target="_blank">
          <img :src="$filters.siteUrl(nv.image)" />
        </a>
      </swiper-slide>
    </swiper>
  </div>

  <!-- 商品樓層 -->
  <CommonFloor :floors="contents[0].floorImg" :menu="menus" :singleImage="contents[0].singleImage"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/NS/images/";
$origin: "https://events.tk3c.com/events_net/events_net/NS/images/";

/*  共用樣式調整 */
body {
  background: #e7e6e6;
}

form#form1 {
  width: 100%;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    $image: $origin + "bg.png";
    background: url($image) repeat center;
    width: 200%;
    height: 150%;
    background-size: 100%;
    left: -50%;
    top: -50%;
    animation: bgMoveUp 15s linear infinite;
    z-index: -3;
    opacity: 1;
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
    }
  }
  .logo {
    background: #e60013;
    padding: 45px 0 0;
    b {
      color: #fff;
    }
  }
}

nav {
  background: #fff;
  .swiper-slide {
    margin-right: -5px !important;
    a {
      color: #000;
      padding: 10px 20px 10px;
    }
    .active {
      color: #e60013;
    }
  }
}

.floor {
  .title {
    width: 40%;
    margin: 0 auto 0;
    b {
      color: red;
    }
  }
}

.youtube {
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    z-index: -1;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #store-container {
    .background {
      padding-bottom: 88%;
    }
  }

  .floor {
    .title {
      width: 80%;
    }
  }

  nav {
    padding: 2% 3% 2% !important;
  }

  .youtube {
    padding-bottom: 85%;
  }
}

@include media-query("mobile", "576px") {
  nav {
    padding: 2% 4% 2% !important;
  }
}

@include media-query("pc", "2000px") {
  .floor {
    .title {
      b {
        font-size: 4rem;
      }
    }
  }
}

@include media-query("pc", "2500px") {
  .floor {
    .title {
      width: 50%;
      b {
        line-height: 4vmax;
      }
    }
  }
}

@keyframes bgMoveUp {
  to {
    transform: translate(0, -300px) scale(1.2);
  }
}

</style>

