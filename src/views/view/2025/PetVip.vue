<template>
  <div id="pet-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('pet_product/images/vip/title.png')" />
      </h2>

      <p class="pet animate__animated animate__fadeInUp">
         <img :src="$filters.siteUrl('pet_product/images/pet.png')" />
      </p>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('pet_product/images/item.png')" />
    </p>

    <div class="background2"></div>

    <!-- 寵物卡 -->
    <section class="pet-group">
      <h2 class="title">
        <img :src="$filters.siteUrl('pet_product/images/vip/s1.png')" />
      </h2>

      <p class="w:75% w:90%@<992 m:0|auto|2%">
        <img :src="$filters.siteUrl('pet_product/images/vip/s1-1.png')" />
      </p>
      <p class="w:75% w:90%@<992 m:auto">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/202504vip/dm.html?id=2')" target="_blank">
          <img :src="$filters.siteUrl('pet_product/images/vip/s1-2.png')" />
        </a>
      </p>
    </section> 

    <!--商品樓層 -->
    <CommonFloor :floors="floors" :menu="menu" :singleImage="singleImage"></CommonFloor>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile2'" :asideImage="asideImage"></RightAside>
</template>

<script>
import listM from '@/views/layout/listM.vue';
export default {
  data() {
    return {
      listM,
      asideImage:'pet_product/images/icon.png',
      singleImage:'pet_product/images/s1.png',
      floors:[
        {
          text:'餵食/飲水',
        },
         {
          text:'貓砂機',
        },
        {
          text:'攝影機',
        },
         {
          text:'寵物美容',
          isSwiper:1
        },
        {
          text:'健康監控',
          isSwiper:1
        },
        {
          text:'環境清淨',
        },
        {
          text:'寵物床窩/玩具',
          type:listM
        },
      ],
      menu:[7913,7914,7915,7916,7917,7918,7919]
    }
  },
  mounted() {
   
  }
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/pet_product/images/";
$origin: "https://events.tk3c.com/events_net/events_net/pet_product/images/";

/*  共用樣式調整 */
body {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image:$dir + 'kv.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px,top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: #ffba00;
}

#pet-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 45%;
    .title {
      width: 35%;
      position: absolute;
      left: 0;
      right: 0;
      top: 16%;
      margin: 0 auto;
      animation: flipX 1.5s linear;
    }
    .pet {
      width: 85%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 13%;
      animation-duration: 2.2s;
    }
  }
}

.background2
{
  width: 100%;
  height: 100%;
  $image: $dir + "bg.png";
  position: absolute;
  background: url($image) repeat-y center;
  background-size: 100% auto;
  background-position: 0 0, top;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -2;
}

.aside-container {
  .aside-header {
    margin: 0 auto 10px;
  }
}

.pet-group {
  .title {
    width: 80%;
  }
}


/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #pet-container {
    .background {
      padding-bottom: 52vw;
      .title {
        width: 50%;
        top: 9vw;
        left: 5vw;
      }
      .pet {
        width: 100%;
        top: 10vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -2vw 4vw,top;
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position: -2vw 4vw,top;
  }

  .pet-group {
    .title {
      width: 100%;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #pet-container {
    .background {
      padding-bottom: 76vw;
      .title {
        width: 85%;
        top: 28vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .pet {
        width: 120%;
        top: 38vw;
        left: -12vw;
        right: 0;
        margin: 0 auto;
      }
    }
  }

  body {
    &:before,
    .background2 {
      background-size: 180% auto;
      background-position: -37vw 21vw,top;
    }
  }
}
</style>
