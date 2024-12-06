<script>
import { breakpoints } from '@master/css'

export default {
  data() {
    return {
      specials: [
        {
          money: '$',
          discount: 100,
          unit: '',
          subtitle: '滿<br>4000折',
          code: 'C612ba7',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123940&strPreView=y'
        },
        {
          money: '$',
          discount: 200,
          unit: '',
          subtitle: '滿<br>4000-8000折',
          code: 'C7e4504',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123941&strPreView=y'
        },
        {
          money: '$',
          discount: 400,
          unit: '',
          subtitle: '滿<br>8000折',
          code: 'C0898e7',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123954&strPreView=y'
        },
        {
          money: '$',
          discount: 500,
          unit: '',
          subtitle: '滿<br>15000折',
          code: 'C1a1237',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123942&strPreView=y'
        },
        {
          money: '$',
          discount: 1000,
          unit: '',
          subtitle: '滿<br>15000折',
          code: 'C14c8a1',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123955&strPreView=y'
        },
        {
          money: '$',
          discount: 2000,
          unit: '',
          subtitle: '三陽<br>15000折',
          code: 'C14c8a1',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123956&strPreView=y'
        },
        {
          money: '$',
          discount: 3000,
          unit: '',
          subtitle: '三陽<br>15000折',
          code: 'C14c8a1',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123938&aid=23884&hid=123957&strPreView=y'
        }
      ],
      special_after: [
        {
          money: '$',
          discount: 111,
          unit: '',
          subtitle: '滿<br>3999-7998折',
          code: 'C2093c2',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123972&strPreView=y'
        },
        {
          money: '$',
          discount: 211,
          unit: '',
          subtitle: '滿<br>7999-14998折',
          code: 'A5a6ea3',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123973&strPreView=y'
        },
        {
          money: '$',
          discount: 411,
          unit: '',
          subtitle: '滿<br>8000折',
          code: 'C0898e7',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123975&strPreView=y'
        },
        {
          money: '$',
          discount: 511,
          unit: '',
          subtitle: '滿<br>14999折',
          code: 'C775dec',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123974&strPreView=y'
        },
        {
          money: '$',
          discount: 1111,
          unit: '',
          subtitle: '滿<br>15000折',
          code: 'C775dec',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123976&strPreView=y'
        },
        {
          money: '$',
          discount: 2111,
          unit: '',
          subtitle: '滿<br>15000折',
          code: 'A379649',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123982&strPreView=y'
        },
        {
          money: '$',
          discount: 3111,
          unit: '',
          subtitle: '滿<br>15000折',
          code: 'A993129',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123977&strPreView=y'
        }
      ],
      sales: [
        {
          money: '$',
          discount: 100,
          unit: '',
          subtitle: '小家電折',
          code: 'A2caa8a',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123910&strPreView=y'
        },
        {
          money: '$',
          discount: 200,
          unit: '',
          subtitle: '小家電折',
          code: 'A57c706',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123910&strPreView=y'
        },
        {
          money: '$',
          discount: 500,
          unit: '',
          subtitle: '大家電折',
          code: 'Aab374c',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123913&strPreView=y'
        },
        {
          money: '$',
          discount: 700,
          unit: '',
          subtitle: '大家電折',
          code: 'Aca8489',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123915&strPreView=y'
        },
        {
          money: '$',
          discount: 1000,
          unit: '',
          subtitle: '大家電折',
          code: 'A4fa0bf',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123916&strPreView=y'
        },
        {
          money: '$',
          discount: 400,
          unit: '',
          subtitle: '筆電折',
          code: 'A0495fe',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123912&strPreView=y'
        },
        {
          money: '$',
          discount: 600,
          unit: '',
          subtitle: '空調折',
          code: 'A57e2a6',
          url: 'https://www.tk3c.com/dic2.aspx?cid=123908&aid=23881&hid=123914&strPreView=y'
        }
      ],
      today: new Date(),
      isSale: false
    }
  },
  mounted() {
    const { today } = this

    // 超級感謝券 11/1隱藏
    if (today >= new Date('2024/11/01') && today < new Date('2024/11/13')) {
      this.isSale = false
      this.specials = this.special_after
    }
  },
  methods: {
    alert() {
      if (event) {
        var value = event.currentTarget.parentNode.children[1].value
        try {
          console.log(value)
          navigator.clipboard.writeText(value)

          setTimeout(() => {
            Swal.fire({
              text: '複製成功!',
              confirmButtonText: '確定',
              position: 'center',
              showCloseButton: true,
              confirmButtonColor: '#000',
              returnFocus: true
            })
          }, 15)
        } catch (err) {
          console.error('Failed to copy: ', err)
        }
      }
    }
  }
}
</script>

<template>
  <div id="discount-container">
    <div class="background">
      <h2 class="title animate__animated animate__fadeInDownBig">
        <img :src="$filters.siteUrl('kings_discount/images/god/title.png')" />
      </h2>
      <p class="ticket t1 animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('kings_discount/images/god/d100.png')" />
      </p>
      <p class="ticket t2 animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('kings_discount/images/god/d300.png')" />
      </p>
      <p class="ticket t3 animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('kings_discount/images/god/d500.png')" />
      </p>
      <p class="ticket t4 animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('kings_discount/images/god/d1000.png')" />
      </p>
    </div>

    <p class="item left">
      <img :src="$filters.siteUrl('kings_discount/images/god/item01.png')" />
    </p>
    <p class="item right">
      <img :src="$filters.siteUrl('kings_discount/images/god/item02.png')" />
    </p>

    <!-- 全站神券 -->
    <section class="special-box type">
      <h2 class="title">
        全站神券
        <small class="f:18px color:red">10/24-11/12</small>
      </h2>

      <ul class="special gap:10 jc:left">
        <li
          v-for="sp in specials"
          class="rel cursor:pointer w:24% w:29vw@<992 w:45vw@<610 w:44vw@<576 bg:#fff r:25px r:10px@<576 p:3%|0|2%"
        >
          <h3 class="f:1.5em f:2em@<992 f:1.2em@<576 mb:6%" v-html="sp.subtitle"></h3>

          <div class="flex jc:center">
            <span
              class="lh:5em lh:4.5em@<992 lh:2.9em@<576 f:1.5em f:2em@<992 f:1.5em@<576 color:#cf0040"
              v-if="sp.money"
              >{{ sp.money }}</span
            >
            <span class="f:4em f:5em@<992 f:2.5em@<576 font:bold color:#cf0040">{{
              sp.discount
            }}</span>
            <small v-if="sp.unit">{{ sp.unit }}</small>
          </div>

          <div class="overflow:hidden rel">
            <a
              @click="alert"
              class="background:blue w:90% r:20px mb:3% p:2% color:#fff f:1.5em@<992 f:0.9em@<576"
              >點我複製折扣碼</a
            >
            <input
              type="text"
              class="abs left:-10000px right:-10000px opacity:0 z:-1"
              readonly="readonly"
              :value="sp.code"
            />
          </div>
          <a
            :href="$filters.addGALink(sp.url)"
            target="_blank"
            class="bg:#ff3254 color:#fff w:90% p:2% r:20px f:1.5em@<992 f:0.9em@<576"
            >查看可用商品</a
          >
        </li>
      </ul>
    </section>

    <!-- 超級感謝券 -->
    <section class="sale-box type" v-if="isSale">
      <h2 class="title">
        超級感謝券
        <small class="color:red f:18px">10/15-31</small>
      </h2>

      <div class="sale">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 2.2
            },
            601: {
              slidesPerView: 3.3
            },
            992: {
              slidesPerView: 4.2
            }
          }"
          :pagination="{
            el: '.sale-box .swiper-pagination',
            clickable: true
          }"
        >
          <swiper-slide
            v-for="sale in sales"
            class="cursor:pointer bg:#fff r:25px r:10px@<576 p:3%|0|2%"
          >
            <h3
              class="color:#000 f:1.5em f:2em@<992 f:1.2em@<576 mb:6%"
              v-html="sale.subtitle"
            ></h3>

            <div class="flex jc:center">
              <span
                class="lh:5em lh:4.5em@<992 lh:2.9em@<576 f:1.5em f:2em@<992 f:1.5em@<576 color:#cf0040"
                v-if="sale.money"
                >{{ sale.money }}</span
              >
              <span class="f:4em f:5em@<992 f:2.5em@<576 font:bold color:#cf0040">{{
                sale.discount
              }}</span>
              <small v-if="sale.unit">{{ sale.unit }}</small>
            </div>

            <div class="overflow:hidden rel">
              <a
                @click="alert"
                class="background:blue w:90% r:20px mb:3% p:2% color:#fff f:1.5em@<992 f:0.9em@<576"
                >點我複製折扣碼</a
              >
              <input
                type="text"
                class="abs left:-10000px right:-10000px opacity:0 z:-1"
                readonly="readonly"
                :value="sale.code"
              />
            </div>
            <a
              :href="$filters.addGALink(sale.url)"
              target="_blank"
              class="bg:#ff3254 color:#fff w:90% p:2% r:20px f:1.5em@<992 f:0.9em@<576"
              >查看可用商品</a
            >
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  </div>

  <div class="custom-top"><p></p></div>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/kings_discount/images/god/';
$origin: 'https://events.tk3c.com/events_net/events_net/kings_discount/images/god/';

/*  共用樣式調整 */
body {
  background: #cf0040;
}
form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.gif';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position:
      0 49vmax,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -2;
    top: 0;
  }
}

.item {
  width: 20%;
  &.left {
    left: 2%;
    right: unset;
  }
  &.right {
    right: 2%;
    left: unset;
  }
}

.bg01 {
  background: #e43504;
}

section {
  .title {
    font-size: 4em;
    font-weight: bold;
    background: #ffb73c;
    border-radius: 50px;
    color: #fff;
  }
}

/* 限量折價券 */
#discount-container {
  .background {
    $image: $dir + 'kv.png';
    @include bg-responsive($image, 2000, 946);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 50%;
    .title {
      width: 50%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 25%;
      img {
        animation: tada 1.2s linear;
        animation-delay: 1s;
      }
    }
    .subtitle {
      width: 30%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 52%;
      animation: flipX 1.8s linear;
    }
    .ticket {
      width: 10%;
      position: absolute;
      animation-fill-mode: backwards;
      img {
        animation: rotate-small 1.3s linear infinite alternate;
        animation-delay: 1s;
        transform-origin: center;
      }
      &.t1 {
        right: 13%;
        top: 53%;
        animation-duration: 0.6s;
      }
      &.t2 {
        top: 45px;
        left: 18%;
        animation-duration: 0.8s;
      }
      &.t3 {
        top: 53%;
        left: 14%;
        animation-duration: 1s;
      }
      &.t4 {
        right: 17%;
        top: 9%;
        animation-duration: 1.2s;
      }
    }
  }
}

.type {
  padding: 2% 1% 2% 1%;
  box-sizing: border-box;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
  $colors: #095a0c, #236bc4, #ffae00, #2fd776, #ceb099;
  @each $color in $colors {
    $x: index($colors, $color);
    &:nth-of-type(#{$x}) {
      &:before {
        background: $color;
      }
    }
  }
  .box {
    width: 95%;
    margin: 0 auto;
    padding-right: 3%;
  }
  ul {
    width: 100%;
  }
}

.special-box {
  .box {
    padding-right: 0;
    width: 100%;
  }
  a {
    &:hover {
      color: #fff;
    }
  }
}

.sale-box {
  .swiper-pagination {
    bottom: 1% !important;
    .swiper-pagination-bullet {
      background: #fff !important;
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #discount-container {
    .background {
      background-size: 120% auto;
      background-position:
        -10vmax 4vmax,
        top;
      padding-bottom: 62%;
      .title {
        width: 60vw;
        top: 17vw;
      }
      .subtitle {
        width: 40%;
      }
      .ticket {
        width: 15%;
        &.t1 {
          right: 1%;
          top: 52%;
        }
        &.t2 {
          left: 13%;
        }
        &.t3 {
          top: 53%;
          left: 4%;
        }
        &.t4 {
          right: 8%;
          top: 13%;
        }
      }
    }
  }

  .type {
    padding: 4% 1% 5% 1%;
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
  section {
    .title {
      width: 90vw;
      font-size: 2em;
    }
  }

  #discount-container {
    .background {
      background-size: 180% auto;
      background-position:
        -40vmin 10vmin,
        top;
      padding-bottom: 80%;
      .title {
        width: 75vw;
        top: 27vw;
      }
      .subtitle {
        width: 55%;
        top: 65%;
      }
      .ticket {
        width: 20%;
        &.t1 {
          right: 1%;
          top: 80%;
        }
        &.t2 {
          top: 13%;
          left: 0;
        }
        &.t3 {
          top: 57%;
          left: 1%;
        }
        &.t4 {
          right: 1%;
          top: 19%;
        }
      }
    }
  }

  .type {
    padding: 6% 1% 8% 1%;
    box-sizing: border-box;
  }

  .copyR {
    margin-bottom: 0;
  }
}
</style>
