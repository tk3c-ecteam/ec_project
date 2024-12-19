<script setup>
import StoreDefault from "./StoreDefault.vue";
import CommonFloor from "../../floor/CommonFloor.vue"
const contents = [
        {
          logoImage: "Razer/images/logo.png",
          floorImg: [
            {
              href: "#pro4441",
              text: "熱銷商品",
              moreUrl: "https://www.tk3c.com/dictitleurl.aspx?cid=118749",
            },
            {
              href: "#pro4442",
              text: "滑鼠",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=118749&aid=23193&hid=118754",
            },
             {
              href: "#pro4443",
              text: "鍵盤",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=118749&aid=23193&hid=118753",
            },
            {
              href: "#pro4444",
              text: "耳機/麥克風",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=118749&aid=23193&hid=118755",
            },
            {
              href: "#pro4446",
              text: "電競椅",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=118749&aid=23193&hid=118757",
            },
          ],
          slides: [
            { pc: "razer/images/bn_main.jpg", mobile: "/razer/images/bn_mainM.jpg" },
          ],
        }
      ];
      const menus = [4441,4442,4443,4444,4446];
      const moreImage = "Razer/images/more.png";
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <div id="container">
     <canvas id="pixie"></canvas>
  </div>

  <!-- 最新消息 -->
  <section class="hot-box">
    <h2 class="title">最新資訊</h2>
    <ul>
      <li class="news">
        <a :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=118749')" target="_blank">
          <img :src="$filters.siteUrl('Razer/images/NEW_BN.jpg')" />
        </a>
      </li>
      <li class="youtube">
        <iframe src="https://www.youtube.com/embed/rk5LTWHLQ7I?mute=1&autoplay=1&loop=1" allowfullscreen></iframe>
      </li>
    </ul>
  </section>

  <!-- 商品樓層 -->
  <CommonFloor :floors="contents[0].floorImg" :menu="menus" :moreImage="moreImage"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/Razer/images/";
$origin: "https://events.tk3c.com/events_net/events_net/Razer/images/";

/*  共用樣式調整 */
body {
  background: #010f0f;
}

.custom-top {
  background: #44d62c;
}

.bg01 {
  background: none;
  ul {
    li {
      &:hover {
        box-shadow: 1px 3px 12px 5px rgba(255, 255, 255, 0.75);
      }
    }
  }
  &.list_F {
    ul {
      li {
        background: #010f0f;
        border: 2px solid #44d62c;
      }
    }
    .itemF_img {
      margin-bottom: 10px;
    }
    storg {
      color: #fff;
    }
    h4 {
      background: #44d62c;
      color: #000;
      &.empty {
        background: none;
      }
    }

    .boxF_price {
      .iconF_pro {
        background: #44d62c;
        color: #000;
        overflow: initial;
        width: 60px;
        line-height: 43px;
        &:after {
          content: "";
          display: block;
          width: 30px;
          height: 30px;
          position: absolute;
          transform: rotate(45deg);
          background: #44d62c;
          right: -25%;
          top: 15.5%;
          z-index: -1;
        }
      }
    }

    li {
      .boxF_price {
        strong {
          color: #fff;
          &:before {
            background: #44d62c;
            color: #000;
          }
          i {
            color: #44d62c;
            font-weight: 400;
          }
        }
      }
    }
  }
  &.list_M {
    .hotproboxL {
      background-color: #010f0f;
      border: 2px solid #44d62c;
      .icon_number {
        background: #44d62c;
        overflow: initial;
        z-index: 1;
        width: 110px;
        &:after {
          content: "";
          display: block;
          width: 33px;
          height: 31px;
          position: absolute;
          transform: rotate(45deg);
          background: #44d62c;
          right: -14%;
          top: 16%;
          z-index: -1;
        }
      }
    }
    .hotproboxR {
      background-color: #010f0f;
      border: 2px solid #44d62c;
      .icon_number {
        background: #44d62c;
        overflow: initial;
        z-index: 1;
        width: 110px;
        &:after {
          content: "";
          display: block;
          width: 33px;
          height: 31px;
          position: absolute;
          transform: rotate(45deg);
          background: #44d62c;
          right: -14%;
          top: 16%;
          z-index: -1;
        }
      }
    }
    .hotpromain {
      .hotpro_name {
        color: #fff;
      }
      .hotpro_price2 {
        color: #44d62c;
        span {
          color: #fff;
        }
      }
      .buybtn {
        background: #44d62c;
        color: #000;
      }
    }
    .list_special {
      ul {
        li {
          background: #010f0f;
          border: 2px solid #44d62c;
        }
      }

      .itemF_img {
        margin-bottom: 10px;
      }
      storg {
        color: #fff;
        background: none;
        margin-bottom: 10px;
      }
      h4 {
        background: #44d62c;
        color: #000;
        &.empty {
          background: none;
        }
      }

      .box_price {
        .icon_pro {
          background: #44d62c;
          color: #000;
          overflow: initial;
          width: 60px;
          line-height: 43px;
          &:after {
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            position: absolute;
            transform: rotate(45deg);
            background: #44d62c;
            right: -25%;
            top: 15.5%;
            z-index: -1;
          }
        }
        strong {
          color: #fff;
          &:before {
            background: #44d62c;
            color: #000;
          }
          i {
            color: #44d62c;
            font-weight: 400;
          }
        }
      }
    }
  }
}

section {
  .title {
     font-size: 3em;
    color: #fff;
    &:after {
      content: "";
      display: block;
      position: absolute;
      background: #44d62c;
      width: 30%;
      height: 3px;
      left: 0;
      right: 0;
      bottom: -15px;
      z-index: -1;
      margin: 0 auto 0;
    }
  }
}

.floor {
  .title {
    .more {
      width: 20%;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
   &.active {
    .bg01 {
      box-shadow: 0px 0px 8px 8px #fff;
    }
  }
}

nav {
  background: #000;
  .swiper-slide {
    padding: 1%;
    box-sizing: border-box;
    a {
      color: #fff;
      height: auto;
      display: block;
    }
    .active {
      color: #000;
      background: #44d62c;
      box-shadow: 0px 0px 5px 5px #fff;
    }
  }
}

.hot-box {
  li {
    width: 48.5%;
    margin: 0 5px;
    &.youtube {
      position: relative;
      height: 0;
      padding-bottom: 27%;
      iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: 0 auto 0;
      }
    }
  }
}

#store-container {
  .logo-title {
    width: auto;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #store-container {
    .background {
      padding-bottom: 50vw;
    }
    .logo-title {
      img {
        transform: scale(3);
        margin-top: 3%;
      }
    }
  }

  .bg01 {
    &.list_M {
      .hotproboxR {
        width: 48.6%;
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #store-container {
    .background {
      padding-bottom: 100vw;
    }
    .logo-title {
      img {
        transform: scale(4);
        margin-top: 5%;
      }
    }
  }

  .bg01 {
    margin: 0 auto 5%;
    &.list_F {
      .boxF_price {
        .iconF_pro {
          width: 45px;
          bottom: 90px;
          &:after {
            right: -34%;
          }
        }
        &:after {
          background: #44d62c;
          color: #000;
        }
      }
      li {
        .boxF_price {
          strong {
            height: 105px;
            line-height: 170px;
          }
        }
      }
    }
    &.list_M {
      .list_special {
        padding: 0.3% 0 0 1%;
        .box_price {
          .icon_pro {
            width: 45px;
            &:after {
              right: -34%;
            }
          }
        }
      }
    }
  }

  .hot-box {
    li {
      width: 100%;
      margin: 0 5px 3%;
      &.youtube{
        padding-bottom: 75vw;
      }
    }
  }

  section {
    .title {
      font-size: 1.5em;
    }
  }

  .floor {
    .title {
      .more {
        width: 25%;
      }
    }
  }
}
</style>
