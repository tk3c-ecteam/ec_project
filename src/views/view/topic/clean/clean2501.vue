
<script>
import { globalMixin } from '@/globalMixin.js'
import CommonFloor from '../../floor/CommonFloor.vue';

export default {
  mixins: [globalMixin],
  data() {
    return {
      tabs: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121773',
          image: '24spring_clean/images/2412/logo_Homedics.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121772',
          image: '24spring_clean/images/2412/logo_Hamilton.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121774',
          image: '24spring_clean/images/2412/logo_Gtech.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=121775',
          image: '24spring_clean/images/2412/logo_BISSELL.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=122689',
          image: '24spring_clean/images/2412/logo_INXNI.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2412/logo_mill.png'
        }
      ],
      floorImg: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=123967',
          image: '24spring_clean/images/2501/bar_f01.png',
          text: '出清特賣撿便宜'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2501/bar_f02.png',
          text: '清掃家電'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2501/bar_f03.png',
          text: '舒壓按摩'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2501/bar_f04.png',
          text: '廚房小家電'
        }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606&strPreView=y',
          image: '24spring_clean/images/2501/sp1-1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23099&hid=124107&strPreView=y',
          image: '24spring_clean/images/2501/sp1-2.png'
        },
      ],
      menuTab: [6564, 6565, 6561, 6562, 6563, 7670],
      menuFloor: [6566, 6567, 6568, 6569],
      status: 0,
      statusTab: 5,
      moreImage: '24spring_clean/images/2501/more.png'
    }
  },
  mounted() {
    //撈取個匯聚品牌樓層商品
    this.getFloorData(this.menuTab)
  },
  methods: {
    change(id) {
      if (event) {
        this.status = id
      }
    },
    changeTab(id) {
      this.statusTab = id
    }
  }
}
</script>

<template>
  <div id="spring-container">
    <div class="background"></div>

    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('24spring_clean/images/2501/sp1.png')" />
      </h2>

      <div class="box w:50% w:70%@<992 w:full@<576 m:auto">
        <ul class="gap:10">
          <li v-for="gift in gifts">
            <a :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)" alt=" " /></a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 品牌商品 -->
    <section class="tab-box">
      <div class="content">
        <ul class="tab">
          <li v-for="(tab, t) in tabs" :class="[statusTab == t ? 'active' : '']">
            <a @click="changeTab(t)">
              <img :src="$filters.siteUrl(tab.image)" alt=" " />
            </a>
          </li>
        </ul>

        <div class="box" v-for="(tab, t) in tabs" v-show="statusTab == t">
          <listF
            v-if="products[menuTab[t]] != undefined"
            :pro="products[menuTab[t]].Data"
            :isSwiper="1"
            :name="'tb'"
          ></listF>
          <a class="more" :href="$filters.addGALink(tab.url)" target="_blank">
            <img :src="$filters.siteUrl('24spring_clean/images/2412/more.png')" alt=" " />
          </a>
        </div>
      </div>
    </section>


    <!-- 其他樓層商品 -->
     <CommonFloor :floors="floorImg" :menu="menuFloor" :moreImage="moreImage" :isSwiper="1"></CommonFloor>
  </div>

  <!-- 右側選單 + 手機板 -->
   <RightAside :asides="floorImg" :type="'mobile'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/24spring_clean/images/2501/';
$origin: 'https://events.tk3c.com/events_net/events_net/24spring_clean/images/2501/';

/*  共用樣式調整 */
form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.jpg';
    background: url($image) repeat-y center;
    background-size: 100% auto;
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
  margin: 0 auto 0;
}

section {
  width: 100%;
  max-width: 100%;
  .content {
    width: 950px;
    margin: 0 auto 0;
  }
  .title {
    width: 40%;
    margin: 0 auto 0;
  }
}

#spring-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    $image: $dir + 'kv.jpg';
    @include bg-responsive($image, 2000, 693);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 40%;
  }
}

.gift-box {
  .title {
    width: 20%;
    margin: 0 auto 2%;
  }
  .box {
    li {
      width: 45%;
    }
  }
}

.tab-box {
  .content {
    background: #7a1bbb;
    border-radius: 20px;
    padding: 1%;
    box-sizing: border-box;
  }
  .tab {
    li {
      width: 23%;
      margin: 0 10px 2%;
      filter: contrast(0.5);
      &.active {
        filter: contrast(1);
      }
      &:first-of-type {
        width: 36%;
      }
      &:nth-of-type(2) {
        width: 52%;
      }
      &:nth-of-type(3) {
        width: 21%;
      }
      &:last-of-type {
        width: 17%;
      }
    }
  }
  .more {
    margin: 0 auto 0;
  }
}

.floor {
  .title {
    width: 60%;
    margin: 0 auto -2%;
    b {
      font-size: 0;
    }
  }
  .bg01 {
    padding: 2% 2% 1% !important;
  }
  &:nth-of-type(odd) {
    .content {
      .bg01 {
        background: #e74733;
      }
    }
  }
  &:nth-of-type(even) {
    .content {
      .bg01 {
        background: #a12dee;
      }
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  section {
    .title {
      width: 90vw;
      margin: 0 auto 3%;
    }
    .content {
      width: 100%;
    }
  }

  #spring-container {
    .background {
      background-size: 120% auto;
      background-position:
        -10vw 4vw,
        top;
      padding-bottom: 50vw;
    }
  }

  form#form1 {
    &:before {
      background-size: 120% auto;
       background-position:
        -10vw 4vw,
        top;
    }
  }

  .gift-box {
    .title {
      width: 30%;
    }
  }

  .floor {
    .title {
      width: 95%;
    }
    .bg01 {
      margin: 0 auto 2%;
    }
  }
}

/* 手機版 */

@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #spring-container {
    .background {
      $image: $dir + 'kv_M.jpg';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position:
        0 10vw,
        top;
      padding-bottom: 135vw;
    }
  }

  form#form1 {
    &:before {
      background-size: 180% auto;
      background-position: -39vw 4vw,top;
    }
  }

  .gift-box {
    .title {
      width: 45%;
      margin: 0 auto 4%;
    }
  }

  .tab-box {
    .content {
      padding: 4% 0 2%;
      border-radius: 10px;
      box-sizing: border-box;
    }
    .tab {
      li {
        width: 44%;
        margin: 0 0 1%;
        &:first-of-type {
          width: 33%;
        }
        &:nth-of-type(2) {
          width: 54%;
        }
        &:nth-of-type(3) {
          width: 37%;
        }
        &:last-of-type {
          width: 34%;
        }
      }
    }
  }

  .floor {
    .title {
      margin: 0 auto -5%;
    }
  }
}

@include media-query('pc', '2500px') {
  section {
    .content {
      width: 50%;
    }
  }
}
</style>
