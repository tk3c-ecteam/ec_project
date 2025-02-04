<script setup>
import StoreDefault from "./StoreDefault.vue";
const contents = [
        {
          logoImage: "EUPA/images/logo.png",
          floorImg: [
            {
              href: "#pro7759",
              image: "EUPA/images/bar_05.png",
              text: "新品上市",
            },
            {
              href: "#pro7675",
              image: "EUPA/images/bar_01.png",
              text: "熱銷商品",
              moreUrl: "https://www.tk3c.com/dic1.aspx?cid=111723&aid=23897",
            },
            {
              href: "#pro7676",
              image: "EUPA/images/bar_02.png",
              text: "電鍋/料理鍋",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124110",
            },
            {
              href: "#pro7677",
              image: "EUPA/images/bar_03.png",
              text: "咖啡機",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124111",
            },
             {
              href: "#pro7678",
              image: "EUPA/images/bar_04.png",
              text: "廚房小幫手",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124112",
            },
             {
              href: "#pro7760",
              image: "EUPA/images/bar_06.png",
              text: "展示/福利出清",
            },
          ],
          slides: [
            { pc: "EUPA/images/kv3.jpg", mobile: "EUPA/images/kv3M.jpg" },
            { pc: "EUPA/images/eupa1.png", mobile: "EUPA/images/eupa1M.png" },
            { pc: "EUPA/images/eupa2.png", mobile: "EUPA/images/eupa2M.png" },
            { pc: "EUPA/images/eupa3.png", mobile: "EUPA/images/eupa3M.png" },
          ],
        }
      ];
      const menus = [7759,7675, 7676, 7677,7678,7760];
      const moreImage = "EUPA/images/more.png";
</script>

<template>
     <StoreDefault
    :contents="contents"
  ></StoreDefault>
    <CommonFloor :floors="contents[0].floorImg" :menu="menus"  :moreImage="moreImage"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/EUPA/images/";
$origin: "https://events.tk3c.com/events_net/events_net/EUPA/images/";

/*  共用樣式調整 */
body {
  background: #141412;
}

form#form1 {
  position: relative;
  overflow: initial;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.jpg";
    background: url($image) repeat-y center;
    background-size: 107% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.bg01 {
  background: none;
  border: 3px solid #fff;
  padding: 1.5%;
  box-sizing: border-box;
}

section {
  .title {
    width: 30%;

    .more {
      width: 40%;
      font-size: 0;
      position: absolute;
      padding: 0;
      margin: 0;
      right: -46%;
      top: 14%;
    }

    b {
      font-size: 0;
    }
  }
}

nav {
  background: #000;
  .swiper-slide {
    margin-right: 185px !important;
    a {
      color: #fff;
    }
    .active {
      color: #d0be96;
      span {
        position: relative;

        &:before {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #d0be96;
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
    }
  }
}

#store-container {
  .logo {
    background: #404040;
  }

  .background {
    padding-bottom: 31%;
    .swiper-slide {
      a {
        pointer-events: none;
        cursor: auto;
      }
    }
  }
}

.floor:not(:nth-of-type(1), :nth-of-type(6)) {
  .bg01 {
    margin: 0 auto 2%;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #store-container {
    .background {
      padding-bottom: 94vw;
    }
  }

  section {
    .title {
      width: 50%;

      .more {
        width: 30%;
        right: -16vw;
        top: 3vw;
      }
    }
  }

  nav {
    .swiper-slide {
      margin-right: 120px !important;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #store-container {
    .background {
      padding-bottom: 98vw;
    }
  }

  section {
    .title {
      width: 70%;
      margin: 0 auto 0;

      .more {
        width: 35%;
        right: -15vw;
        top: -3vw;
      }
    }
  }

  nav {
    .swiper-slide {
      margin-right: 52px !important;
    }
  }
}
</style>
