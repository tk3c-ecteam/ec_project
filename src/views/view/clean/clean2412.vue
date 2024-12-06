<script setup>
import AllEvent from '../../../components/AllEvent.vue'
import listF from '../../layout/listF.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

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
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23606&hid=123967',
          image: '24spring_clean/images/2412/bar_f01.png',
          text: '出清特賣撿便宜'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2412/bar_f02.png',
          text: '清掃家電'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2412/bar_f03.png',
          text: '舒壓按摩'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606',
          image: '24spring_clean/images/2412/bar_f04.png',
          text: '廚房小家電'
        }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111723&aid=23606&strPreView=y',
          image: '24spring_clean/images/2412/sp1-1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23099&hid=124107&strPreView=y',
          image: '24spring_clean/images/2412/sp1-2.png'
        },
        {
          url: '#f1',
          image: '24spring_clean/images/2412/sp1-3.png'
        }
      ],
      menuTab: [6564, 6565, 6561, 6562, 6563, 7670],
      menuFloor: [6566, 6567, 6568, 6569],
      status: 0,
      statusTab: 5
    }
  },
  mounted() {
    //撈取個匯聚品牌樓層商品
    this.getFloorData(this.menuTab)

    //撈取其他樓層商品
    setTimeout(() => {
      this.getFloorData(this.menuFloor)
    }, 50)
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
      <div class="content rel">
        <img
          class="w:full h:full h:auto@<576 abs left:0 right:0 top:8% hidden@<576 m:auto z:-1"
          :src="$filters.siteUrl('24spring_clean/images/2412/sp.png')"
        />

        <ul class="tab">
          <li :class="[status == 0 ? 'active' : '']">
            <a @click="change(0)">
              <img :src="$filters.siteUrl('24spring_clean/images/2412/sp1.png')"
            /></a>
          </li>
          <li :class="[status == 1 ? 'active' : '']">
            <a @click="change(1)">
              <img :src="$filters.siteUrl('24spring_clean/images/2412/sp2.png')"
            /></a>
          </li>
        </ul>

        <!-- 獨家活動 -->
        <div v-if="status == 0">
          <div class="box w:95% m:auto p:3% box:border-box">
            <swiper
              :loop="false"
              :space-between="10"
              :breakpoints="{
                0: {
                  slidesPerView: 2.2
                },
                600: {
                  slidesPerView: 3
                },
                992: {
                  slidesPerView: 3
                }
              }"
            >
              <swiper-slide v-for="(gift, g) in gifts">
                <a v-if="g == 2" href="#f1"><img :src="$filters.siteUrl(gift.image)" alt=" " /></a>
                <a v-else :href="$filters.addGALink(gift.url)" target="_blank">
                  <img :src="$filters.siteUrl(gift.image)" alt=" "
                /></a>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <!-- 全站活動 -->
        <div v-if="status == 1">
          <AllEvent></AllEvent>
        </div>
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
          <component
            v-if="products[menuTab[t]] != undefined"
            :is="listF"
            :pro="products[menuTab[t]].Data"
            :isSwiper="1"
            :name="'tb'"
          ></component>
          <a class="more" :href="$filters.addGALink(tab.url)" target="_blank">
            <img :src="$filters.siteUrl('24spring_clean/images/2412/more.png')" alt=" " />
          </a>
        </div>
      </div>
    </section>

    <section class="floor-group scroll" v-for="(floor, f) in floorImg" :id="`f${f + 1}`">
      <h2 class="title">
        <img :src="$filters.siteUrl(floor.image)" />
      </h2>

      <div class="content">
        <component
          v-if="products[menuFloor[f]] != undefined"
          :is="listF"
          :pro="products[menuFloor[f]].Data"
          :isSwiper="1"
          :name="'fl'"
        ></component>
        <a class="more" :href="$filters.addGALink(floor.url)" target="_blank">
          <img :src="$filters.siteUrl('24spring_clean/images/2412/more.png')" alt=" " />
        </a>
      </div>
    </section>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(floor, f) in floorImg">
            <a :href="`#f${f + 1}`">{{ floor.text }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/24spring_clean/images/2412/';
$origin: 'https://events.tk3c.com/events_net/events_net/24spring_clean/images/2412/';

/*  共用樣式調整 */
form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.jpg';
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

.more {
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
    $image: $dir + 'kv.png';
    @include bg-responsive($image, 2000, 766);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 49%;
  }
}

.gift-box {
  .tab {
    width: 100%;
    position: relative;
    z-index: 2;
    li {
      width: 40%;
      margin: 0 10px 1%;
      filter: grayscale(1);
      transform: translateZ(0);
      &.active {
        filter: grayscale(0);
        transform: translateZ(0);
      }
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
}

.floor-group {
  .bg01 {
    padding: 2% 2% 1% !important;
  }
  &:nth-of-type(odd) {
    .content {
      .bg01 {
        background: #33cde7;
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
      padding-bottom: 55vw;
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
      padding-bottom: 165vw;
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
        width: 48vw;
        margin: 0 5px 3%;
        &:first-of-type {
          width: 37vw;
        }
        &:nth-of-type(2) {
          width: 54vw;
        }
        &:nth-of-type(3) {
          width: 43vw;
        }
        &:last-of-type {
          width: 35vw;
        }
      }
    }
  }

  .gift-box {
    .tab {
      li {
        width: 44vw;
        margin: 0 5px 2%;
      }
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
