<script setup>
var contents = [
        {
          logoImage: "EUPA/images/logo.png",
          floorImg: [
            {
              id:7759,
              href: "#pro7759",
              image: "EUPA/images/bar_05.png",
              text: "新品上市",
            },
            {
              id:7675,
              href: "#pro7675",
              image: "EUPA/images/bar_01.png",
              text: "熱銷商品",
              moreUrl: "https://www.tk3c.com/dic1.aspx?cid=111723&aid=23897",
            },
            {
              id:7676,
              href: "#pro7676",
              image: "EUPA/images/bar_02.png",
              text: "電鍋/料理鍋",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124110",
            },
            {
              id:7677,
              href: "#pro7677",
              image: "EUPA/images/bar_03.png",
              text: "咖啡機",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124111",
            },
             {
              id:7678,
              href: "#pro7678",
              image: "EUPA/images/bar_04.png",
              text: "廚房小幫手",
              moreUrl:
                "https://www.tk3c.com/dic2.aspx?cid=111723&aid=23897&hid=124112",
            },
             {
              id:7760,
              href: "#pro7760",
              image: "EUPA/images/bar_06.png",
              text: "展示/福利出清",
            },
          ],
          slides: [
            { pc: "EUPA/images/TSK.png"},
            { pc: "EUPA/images/TSK-264.png", mobile: "EUPA/images/TSK-264_M.png" },
            { pc: "EUPA/images/TSK-1171_a.png", mobile: "EUPA/images/TSK-1171A_M.png" },
            { pc: "EUPA/images/TSK-1589.png", mobile: "EUPA/images/TSK-1589B_M.png" },
            { pc: "EUPA/images/TSK-2865_a.png", mobile: "EUPA/images/TSK-2865_M.png" },
             { pc: "EUPA/images/TSK-B164.png", mobile: "EUPA/images/TSK-B164_M.png" },
          ],
        }
      ];
    
      const moreImage = "EUPA/images/more.png";

      nextTick(() => {
       if( document.querySelectorAll('.floor')[0].querySelectorAll('.bg01 li').length == 0) {
          document.querySelectorAll('.floor')[0].style.display = 'none';
          document.querySelectorAll('nav .swiper-slide')[0].style.display = 'none';
       }
      });

      contents[0].slides.forEach((slide,s) => {
        if (slide.mobile == undefined && window.innerWidth <= 992) {
          contents[0].slides.splice(s,1);
        }

        addEventListener('resize',() => {
           if (slide.mobile == undefined && window.innerWidth <= 992) {
          contents[0].slides.splice(s,1);
          }
        });
      });    
     
</script>

<template>
     <StoreDefault
    :contents="contents"
  ></StoreDefault>
    <CommonFloor2 :floors="contents[0].floorImg"  :moreImage="moreImage"></CommonFloor2>
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
    margin-right: 45px !important;
    a {
      color: #fff;
      &.active,
      &:hover {
        color: #d0be96;
      }
    }
  }
  .swiper-wrapper {
    justify-content: center;
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
    .swiper-pagination {
      bottom: 8% !important;
    }
  }
}

.floor:not([titles='新品上市'], [titles='展示/福利出清']) {
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
      margin-right: 150px !important;
    }
    .swiper-wrapper {
      justify-content: left;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #store-container {
    .background {
      padding-bottom: 98vw;
      .swiper-pagination {
        bottom: 12% !important;
      }
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

@include media-query("pc", "2000px") {
  nav {
    .swiper-slide {
      margin-right: 40px !important;
    }
  }
}

@include media-query("pc", "2500px") {
  nav {
    .swiper-slide {
      margin-right: 60px !important;
    }
  }
}
</style>
