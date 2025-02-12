<script setup>
const contents = [
        {
          logoText: "配件旗艦館",
          floorImg: [
            {
              image: 'accessories_pavilion/images/bar01.png',
              href: "#pro2714",
              text: "Android殼套",
              url:'https://www.tk3c.com/dic1.aspx?cid=28825&aid=22271'
            },
            {
              image: 'accessories_pavilion/images/bar02.png',
              href: "#pro2771",
              text: "Android保貼",
              url:'https://www.tk3c.com/dic1.aspx?cid=28825&aid=22272'
            },
             {
              image: 'accessories_pavilion/images/bar03.png',
              href: "#pro2772",
              text: "Apple專區",
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=40444'
            },
            {
              image: 'accessories_pavilion/images/bar04.png',
              href: "#pro2773",
              text: "行動電源",
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=112782'
            },
            {
              image: 'accessories_pavilion/images/bar05.png',
              href: "#pro2774",
              text: "充電/傳輸",
              url:'https://www.tk3c.com/dic1.aspx?cid=28825&aid=8980'
            },
            {
              image: 'accessories_pavilion/images/bar06.png',
              href: "#pro2775",
              text: "支架專區",
              url:'https://www.tk3c.com/dic1.aspx?cid=111383&aid=22276'
            },
          ],
          slides: [
            { 
              "url": "", 
              "pc": "accessories_pavilion/images/banner02.jpg", 
              "mobile": "accessories_pavilion/images/banner02M.jpg" 
            }
          ],
        }
      ];
      const menus = [2714,2771,2772,2773,2774,2775];
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <!-- 商品樓層 -->
  <CommonFloor :floors="contents[0].floorImg" :menu="menus"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/accessories_pavilion/images/";
$origin: "https://events.tk3c.com/events_net/events_net/accessories_pavilion/images/";

/*  共用樣式調整 */
body
{
  $image: $dir + 'bg.jpg';
  background: url($image) repeat-y center;
  overflow-x: hidden;
  background-position: 0 35vmax, top;
  animation: bg-move 60s ease infinite;
  background-size: 100% auto;
}

.bg01 {
  background: none;
}

#store-container {
  .background {
    padding-bottom: 32%;
    .swiper-slide {
      a {
        pointer-events: none;
        cursor: auto;
      }
    }
  }
   .logo {
      background: #fff;
      padding: 4rem 0 1.5% !important;
    }
}

nav {
  background: #6f7484;
  .swiper-slide {
    margin-right: 50px !important;
    a {
      color: #fff;
      &.active,
      &:hover {
        color:#feee5a;
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
      padding: 4rem 0 2% !important;
    }
  }

 nav {
  .swiper-wrapper {
    justify-content: left;
    .swiper-slide {
      margin-right: 75px !important;
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

  #store-container {
    .logo {
      padding: 3.4rem 0 2% !important;
    }
  }
}

@keyframes bg-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 2000px;
  }
} 
</style>

