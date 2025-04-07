<script setup>
const contents = [
        {
          logoImage:'blueair/images/logo.png',
          floorImg: [
            {
              href: "#pro2674",
              text: "小坪數精選",
              image:'blueair/images/b2.png'
            },
             {
              href: "#pro2683",
              text: "大坪數推薦",
              image:'blueair/images/b3.png'
            }
          ],
          slides: [
            { "url": "https://www.tk3c.com/pt.aspx?pid=227816", "pc": "blueair/images/blueair_20240426.jpg", "mobile": "blueair/images/blueair_20240426M.jpg" },
            { "url": "https://www.hdc-tw.com/warranty_blueair.html", "pc": "blueair/images/banner05.jpg", "mobile": "blueair/images/banner05M.jpg" },
          ],
        }
      ];
      const menus = [2674,2683];
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <!-- 影片區 -->
  <div class="youtube">
    <iframe frameborder="0" src="https://www.youtube.com/embed/WmcgLmZPZeQ"
      allowfullscreen></iframe>
  </div>

  <!-- 商品樓層 -->
  <CommonFloor :floors="contents[0].floorImg" :menu="menus"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/blueair/images/";
$origin: "https://events.tk3c.com/events_net/events_net/blueair/images/";

/*  共用樣式調整 */
body {
  background: #d4dedd;
}

.bg01 {
  background: none;
}

#store-container {
  .logo {
    background: #fff;
  }
  .background {
    padding-bottom: 29%;
  }
}

.youtube {
  width: 40%;
  height: 0;
  padding-bottom: 25%;
  position: relative;
  margin: 3% auto 3%;
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

nav {
  background: #002854;
}

.floor {
  .title {
    width: 40%;
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

  .floor {
    .title {
      width: 70%;
    }
  }

  .youtube {
    padding-bottom: 55%;
    width: 100%;
  }
}

@include media-query("mobile", "576px") {
  
}

</style>

