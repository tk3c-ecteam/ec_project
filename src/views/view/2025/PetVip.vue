<template>
  <div id="pet-container">
    <div class="background">
      <h2 class="title">
        <img v-if="today >= new Date('2025/06/01')" :src="$filters.siteUrl('pet_product/images/vip/title2506_a.png')" />
        <img v-else :src="$filters.siteUrl('pet_product/images/vip/title.png')" />
      </h2>

      <p class="pet animate__animated animate__fadeInUp">
         <img :src="$filters.siteUrl('pet_product/images/pet.png')" />
      </p>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('pet_product/images/de.png')" />
    </p>

    <div class="background2"></div>

    <!-- 寵物卡 -->
    <section class="pet-group">
      <h2 class="title">
        <img :src="$filters.siteUrl('pet_product/images/vip/s1.png')" />
        <a class="abs w:10vmax w:10rem@<992 w:8rem@<576 left:0 right:0 bottom:-23% bottom:-4vw@<992 bottom:-2rem@<576 m:auto bg:#518f45 f:1.5em f:1.2em@<576 lh:1.5em lh:1em@<576 p:5px p:8px@<576 r:20px abs:hover color:#fff:hover box:border-box color:#fff animation:shake|1.4s|linear @iteration-count:infinite" :href="$filters.addGALink('https://events.tk3c.com/events_net/tkpet/index.html')" target="_blank">我要開卡</a>
      </h2>

      <p class="w:65% w:80%@<992 w:full@<576 m:5%|auto|2% m:15%|auto|2%@<576">
        <img v-if="today >= new Date('2025/06/01')" :src="$filters.siteUrl('pet_product/images/vip/s1-1_2506_a.png')" />
        <img v-else :src="$filters.siteUrl('pet_product/images/vip/s1-1a.png')" />
      </p>
      <p class="rel w:65% w:80%@<992 w:full@<576 m:auto">
        <img class="abs w:full left:0 right:0 m:auto top:0 z:-1" :src="$filters.siteUrl('pet_product/images/vip/s1-2.png')" />
        <ul class="gap:10">
          <li v-for="(i,index) in 4" :key="index" class="w:48% h:11vmax h:11rem@<1700 h:21vw@<992 h:20vw@<576 h:8vmax@>2500">
            <a class="h:full" @click="alert(index)"></a>
          </li>
        </ul>
      </p>

      <!-- 彈出視窗 -->
      <AlertBox v-for="(msg,m) in message" :key="m" :ref="`alert${m}`" :type="'image'">
        <picture>
          <img :src="$filters.siteUrl(msg.image)" loading="lazy">
        </picture>
      </AlertBox>
    </section> 

    <!--商品樓層 -->
    <CommonFloor :floors="floors" :menu="menu">
      <template #moreTitle2>
        <img :src="$filters.siteUrl(singleImage)">
      </template>
    </CommonFloor>
  </div>

  <!-- 左側選單 -->
  <LeftAside></LeftAside> 

  <!-- 右側選單+手機板 -->
  <RightAside :type="'mobile3'" :asideImage="asideImage"></RightAside>
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
           text:"寵物卡專屬價",
           isSwiper:1
        },
        {
          text:'餵食/飲水',
          isSwiper:1
        },
         {
          text:'貓砂機',
          isSwiper:1
        },
        {
          text:'攝影機',
          isSwiper:1
        },
         {
          text:'寵物美容',
        },
        {
          text:'健康監控',
          isSwiper:1
        },
        {
          text:'環境清淨',
          isSwiper:1
        },
        {
          text:'寵物床窩/玩具',
          type:listM
        },
      ],
      message:[
         {
          "image":"pet_product/images/vip/a1.png"
        },
        {
          "image":"pet_product/images/vip/a2_2.png"
        },
        {
          "image":"pet_product/images/vip/a3_2.png"
        },
        {
          "image":"pet_product/images/vip/a4.png"
        },
      ],
      message2:[
         {
          "image":"pet_product/images/vip/a1.png"
        },
        {
          "image":"pet_product/images/vip/a2_2506_a.png"
        },
        {
          "image":"pet_product/images/vip/a3_2506_a.png"
        },
        {
          "image":"pet_product/images/vip/a4_2506_a.png"
        },
      ],
      menu:[7959,7913,7914,7915,7916,7917,7918,7919],
      status:null,
      today:new Date()
    }
  },
  mounted() {
    const { today } = this;
    if (today >= new Date('2025/06/01')) this.message = this.message2;
  },
  methods: {
    alert(id) {
     this.$refs[`alert${id}`][0].openAlert();
    }
  },
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
  &:not(.left) {
    .aside-header {
     margin: 0 auto 10px;
   }
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
      padding-bottom: 74vw;
      .title {
        width: 85%;
        top: 26vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .pet {
        width: 120%;
        top: 36vw;
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
      background-position: -37vw 20vw,top;
    }
  }
}
</style>
