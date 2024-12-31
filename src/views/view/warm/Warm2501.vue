<script setup>
import { Parallax, EffectFade } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import AllEvent from '../../../components/AllEvent.vue'
import CommonFloor from '../../floor/CommonFloor.vue'
import mobile from '@/views/layout/mobile2.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      proWarm: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=203316',
          image: 'electric_heater/images/2501/203316.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=221318',
          image: 'electric_heater/images/2501/221318.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=233687',
          image: 'electric_heater/images/2501/233687.png'
        }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112699',
          image: 'electric_heater/images/2501/floor1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112701',
          image: 'electric_heater/images/2501/floor2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112709',
          image: 'electric_heater/images/2501/floor3.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=108783&aid=23230&hid=119914',
          image: 'electric_heater/images/2501/floor4.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112703',
          image: 'electric_heater/images/2501/floor5.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: 'electric_heater/images/2501/floor6.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112710',
          image: 'electric_heater/images/2501/floor7.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920',
          image: 'electric_heater/images/2501/floor8.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=23073',
          image: 'electric_heater/images/2501/floor9.png'
        }
      ],
      gifts: [
        {
          url: '#sale',
          image: 'electric_heater/images/2501/sp01.png'
        },
        {
          url: 'https://www.tk3c.com/events/eventgift.aspx',
          image: 'electric_heater/images/2501/sp02b.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112763',
          image: 'electric_heater/images/2501/sp03b.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/24spring_clean/index.html',
          image: 'electric_heater/images/2501/sp04.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=116093',
          image: 'electric_heater/images/2501/sp05.png',
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=116093',
          image: 'electric_heater/images/2501/sp06.png',
        },
      ],
      icons: [
        {
          url: '#pro2473',
          image: 'electric_heater/images/2411/icon1.png'
        },
        {
          url: '#pro2474',
          image: 'electric_heater/images/2411/icon2.png'
        },
        {
          url: '#pro2475',
          image: 'electric_heater/images/2411/icon3_2.png'
        },
        {
          url: '#pro7639',
          image: 'electric_heater/images/2411/icon9.png'
        },
        {
          url: '#pro2476',
          image: 'electric_heater/images/2411/icon4_2.png'
        },
        {
          url: '#pro2477',
          image: 'electric_heater/images/2411/icon5.png'
        },
        {
          url: '#pro2478',
          image: 'electric_heater/images/2411/icon6.png'
        },
        {
          url: '#pro3741',
          image: 'electric_heater/images/2411/icon7.png'
        },
        {
          url: '#pro3742',
          image: 'electric_heater/images/2411/icon8.png'
        }
      ],
      sales:[
        {
          image: 'electric_heater/images/2501/2-bt100.png'
        },
         {
          image: 'electric_heater/images/2501/2-bt200.png'
        },
         {
          image: 'electric_heater/images/2501/2-bt588.png'
        },
      ],
      asides: [
        {
          text: '早鳥獨享',
          href: '#sale'
        },
         {
          text: '速速GO',
          href: '#go'
        },
        {
          text: '強檔推薦',
          href: '#special'
        },
        {
          text: '葉片式電暖器',
          href: '#pro2473'
        },
        {
          text: '對流/陶瓷式電暖器',
          href: '#pro2474'
        },
        {
          text: '碳素/鹵素燈',
          href: '#pro2475'
        },
        {
          text: '溫熱便座',
          href: '#pro7639'
        },
        {
          text: '個人保暖',
          href: '#pro2476'
        },
        {
          text: '冷暖/除溼',
          href: '#pro2477'
        },
        {
          text: '烘被/烘衣/乾鞋機',
          href: '#pro2478'
        },
        {
          text: '循環對流',
          href: '#pro3741'
        },
        {
          text: '健康保健',
          href: '#pro3742'
        }
      ],
      menus: [2473, 2474, 2475, 7639, 2476, 2477, 2478, 3741, 3742],
      menuSp: 2472,
      menuSale: [7637, 7638],
      menuGo:7690,
      statusGift: 0,
      statusSale: 0,
      today: new Date(),
      isSale:true
    }
  },
  mounted() {
    const { today } = this

    //撈取現折樓層商品
    this.getFloorData(this.menuSale)

    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)

    //撈取強檔推薦樓層商品
    this.getFloorSingle(this.menuSp)
  },
  methods: {
    change(id) {
      this.statusGift = id
    },
    changeSale(id) {
      this.statusSale = id
    }
  }
}
</script>

<template>
  <div id="warm-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2501/title.png')" alt=" " />
      </h2>

      <div class="subtitle grid-cols:2 gap:10">
        <img :src="$filters.siteUrl('electric_heater/images/2501/C1.png')" alt=" " />
        <img :src="$filters.siteUrl('electric_heater/images/2501/C2.png')" alt=" " />
      </div>

      <div class="product">
        <swiper
          :loop="true"
          :effect="'fade'"
          :parallax="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[Parallax, EffectFade]"
        >
          <swiper-slide v-for="(pro, p) in proWarm" :key="p" class="flex!">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-y="-7000">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <p class="light">
        <img :src="$filters.siteUrl('electric_heater/images/2501/light.png')" alt=" " />
      </p>
    </div>

    <!-- 暖心優惠一把抓 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2501/bar_sp.png')" alt=" " />
      </h2>

      <ul class="w:40% w:50vw@<992 w:90%@<576 mt:4% mb:1% mb:3%@<576 grid-cols:2 gap:10">
        <li :class="[statusGift == 0 ? 'active' : '']" class="contrast(0.5) contrast(1).active">
          <a @click="change(0)">
            <img :src="$filters.siteUrl('electric_heater/images/2411/1-bt_01.png')" />
          </a>
        </li>
        <li :class="[statusGift == 1 ? 'active' : '']" class="contrast(0.5) contrast(1).active">
          <a @click="change(1)">
            <img :src="$filters.siteUrl('electric_heater/images/2411/1-bt_02.png')" />
          </a>
        </li>
      </ul>

      <!-- 線上獨家 -->
      <div
        class="content rel p:2% bg:#fff@<576 b:2px|solid|#fee190@<576  r:10px@<576 box:border-box w:80% w:90vw@<992 w:full@<576 m:auto"
        v-if="statusGift == 0"
      >
        <img class="w:full abs left:0 right:0 top:0 m:auto z:-1 hidden@<576" :src="$filters.siteUrl('electric_heater/images/2501/spbg.png')" alt=" " />
        <ul class="ai:baseline">
          <li v-for="(gift, g) in gifts">
            <a v-if="g == 0" :href="gift.url">
              <img :src="$filters.siteUrl(gift.image)" />
            </a>
            <a v-else :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)" />
            </a>
          </li>
        </ul>
      </div>

      <!-- 全站活動 -->
      <div v-if="statusGift == 1">
        <AllEvent></AllEvent>
      </div>
    </section>


    <!-- 本早鳥獨享 領券再現折 -->
    <section class="sale-group scroll" id="sale" v-if="isSale">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2501/bar02.png')" alt=" " />
      </h2>

      <ul class="w:50% w:80%@<992 w:95%@<576 mt:5% grid-cols:3 gap:10 mb:2%">
        <li v-for="(sale,s) in sales" :class="[statusSale == s ? 'active' : '']" class="brightness(0.8) brightness(1).active">
          <a @click="changeSale(s)">
            <img :src="$filters.siteUrl(sale.image)" alt=" " />
          </a>
        </li>
      </ul>
      <div class="box" v-for="(i, index) in 2" v-show="statusSale == index">
        <component
          v-if="products[menuSale[index]] != undefined"
          :is="listF"
          :isSwiper="1"
          :name="'sale-area'"
          :pro="products[menuSale[index]].Data"
        ></component>
        <a
          class="more"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=124130')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('electric_heater/images/2501/more.png')" />
        </a>
      </div>
    </section>

     <!-- 速速go -->
        <section class="go-box scroll" id="go">
          <h2 class="title">
            <img :src="$filters.siteUrl('wet/images/tk3cgo_bar.png')" alt="" />
          </h2>

          <div class="box">
            <component :is="listF" :isSwiper="1" :name="'go-pro'" :pro="product2[menuGo]"></component>
            <a class="more" :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
               <img :src="$filters.siteUrl('electric_heater/images/2501/more.png')" />
            </a>
          </div>
        </section>

    <!-- 強檔推薦 保暖必Buy -->
    <section class="special-box scroll" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2501/bar03.png')" alt=" " />
      </h2>

      <div class="specials">
        <component :is="listF" :pro="product2[menuSp]"></component>
        <a
          class="more"
          :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('electric_heater/images/2501/more.png')" />
        </a>
      </div>
    </section>

    <!-- ICON 區 -->
    <section class="icon-group">
      <swiper
        :loop="false"
        :breakpoints="{
          0: {
            slidesPerView: 2.2,
            spaceBetween: -20,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          600: {
            slidesPerView: 3.3,
            spaceBetween: -30,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          992: {
            slidesPerView: 5,
            spaceBetween: -40,
            grid: {
              fill: 'row',
              rows: 2
            }
          }
        }"
        :pagination="{
          el: '.icon-group .swiper-pagination',
          clickable: true
        }"
      >
        <swiper-slide v-for="(icon, i) in icons">
          <a :href="icon.url">
            <img :src="$filters.siteUrl(icon.image)" alt=" " />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>
    </div>

    <!-- 右側選單 -->
    <aside class="aside-container">
      <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <div class="aside-wrap">
        <h3 class="aside-header"></h3>
        <div class="aside-content">
          <ul>
            <li v-for="aside in asides">
              <a :href="aside.href">{{ aside.text }}</a>
            </li>
          </ul>
        </div>
        <a href="#" class="go-top">GO TOP</a>
      </div>
    </aside>

    <!-- 手機版上方選單  -->
     <mobile v-model:asides="asides"></mobile>
</template>

<style lang="scss">
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/electric_heater/images/2501/';
$origin: 'https://events.tk3c.com/events_net/events_net/electric_heater/images/2501/';

body {
  background: #000;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: #db433c;
}

.more {
  width: 12%;
}

#warm-container {
  .background {
    $image: $dir + 'kv_bg.png';
    @include bg-responsive($image, 2000, 1505);
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 40%;
    .title {
      width: 30%;
      position: absolute;
      left: 21%;
      top: 24%;
      animation: zoomInNormal 1.6s linear;
    }
    .product {
      width: 30%;
      position: absolute;
      right: 17%;
      top: 19%;
    }
    .subtitle {
      width: 27%;
      position: absolute;
      left: 22%;
      top: 63%;
    }
    .light {
      width: 42%;
      position: absolute;
      right: 9%;
      top: 49%;
    }
  }
}

.floor {
  .title {
    width: 80%;
  }
}

.special-box,
.go-box {
  .bg01 {
    background: #9c4638;
    margin: 0 auto 2%;
  }
}

.sale-group {
  .bg01 {
    background: #4164e8;
    margin: 0 auto 2%;
  }
}

.sale-group {
  b {
    width: auto;
    height: auto;
    display: block;
    background: #5b22df;
    border-radius: 25px;
    padding: 2%;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    border: 1px solid #000;
    box-sizing: border-box;
  }
}

.gift-box {
  .content {
    li {
      width: 47%;
      margin: 0 5px 1%;
      &.long {
        width: 96%;
        margin-top: 3%;
      }
    }
  }
}

.icon-group {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #fff !important;
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
  .swiper-wrapper {
    justify-content: center;
  }
}

@include media-query('mobile', '992px') {
  body {
    &:before {
      background-size: 120% auto;
      background-position:
        -13vw 4vw,
        top;
    }
  }

  .more {
    width: 20%;
  }

  #warm-container {
    .background {
      background-size: 120% auto;
       background-position:
        -13vw 4vw,
        top;
      padding-bottom: 62vw;
      .title {
        width: 45%;
        left: 6vw;
        top: 17vw;
      }
      .subtitle {
        width: 40%;
        left: 7vw;
        top: 40vw;
      }
      .product {
        width: 45%;
        right: 7vw;
        top: 10vw;
      }
      .light {
        width: 55%;
        right: -1%;
        top: 49%;
      }
    }
  }

  .floor {
    .title {
      width: 100%;
    }
  }

  .icon-group {
    .swiper-wrapper {
      justify-content: left;
    }
  }
}

@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position:
        -45vw 21vw,
        top;
    }
  }

  .more {
    width: 35%;
  }

  #warm-container {
    .background {
      background-size: 180% auto;
      background-position:
        -45vw 21vw,
        top;
      padding-bottom: 195vw;
      .title {
        width: 90%;
        left: 0;
        right: 0;
        top: 32vw;
        margin: 0 auto;
      }
      .subtitle {
        width: 80%;
        left: -4vw;
        right: 0;
        top: 78vw;
        margin: 0 auto;
      }
      .product {
        width: 90%;
        right: 0;
        left: 0;
        top: 100vw;
        margin: 0 auto;
      }
      .light {
        width: 100%;
        right: -1%;
        top: 144vw;
      }
    }
  }

  .sale-group {
    b {
      font-size: 1.5rem;
    }
  }

  .gift-box {
    .content {
      li {
        width: 97%;
        margin: 0 5px 3%;
      }
    }
  }
}
</style>
