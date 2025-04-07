<script setup>
const contents = [
        {
          logoImage:'irobort/images/top.png',
          floorImg: [
            {
              href: "#pro2715",
              text: "熱銷推薦",
              image:'irobort/images/floor.png'
            }
          ],
          slides: [
           { "url": "https://www.tk3c.com/pt.aspx?pid=246903", "pc": "irobort/images/irobotUSA.jpg", "mobile": "irobort/images/irobotUSAM.jpg" },
          ],
        }
      ];
      const menus = [2715];
</script>

<template>
  <StoreDefault :contents="contents"></StoreDefault>

  <!-- 影片+圖片區 -->
  <div class="w:full flex flex-wrap:wrap jc:center mb:4%">
    <div class="w:30% w:43%@<992 w:full@<576 h:0 rel pb:20% pb:27%@<992 pb:58%@<576 m:0|15px m:0|15px|3%@<576">
      <iframe class="abs w:full h:full top:0 left:0" frameborder="0" src="https://www.youtube.com/embed/LtaiUwj72gE"
        allowfullscreen></iframe>
    </div>
    <div class="w:35% w:47%@<992 w:94%@<576">
      <a :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=225678')" target="_blank">
        <img :src="$filters.siteUrl('irobort/images/product04.jpg')">
      </a>
    </div>
  </div> 

  <!-- 商品樓層 -->
  <CommonFloor :floors="contents[0].floorImg" :menu="menus"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/irobort/images/";
$origin: "https://events.tk3c.com/events_net/events_net/irobort/images/";

/*  共用樣式調整 */
body {
  $image:$dir + 'bg.png';
  background: url($image) repeat-y center;
  background-size: 100% auto;
}

.bg01 {
  background: #64a70b;
}

#store-container {
  .logo {
    background: #fff;
    padding: 45px 0 0 !important;
    .logo-title {
      padding-top: 0;
      width: 100%;
    }
  }
  .background {
    padding-bottom: 32%;
  }
}

nav {
  background: #6fbe53;
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
      padding-bottom: 92%;
    }
  }

  .floor {
    .title {
      width: 70%;
    }
  }

  nav {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

</style>

