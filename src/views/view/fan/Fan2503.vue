<template>
  <div id="fan-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__pulse">
        <img :src="$filters.siteUrl('fan_hot/images/2503/title.png')" />
      </h2>

      <div class="product">
        <swiper :loop="true" :effect="'fade'" :fadeEffect="{
          crossFade: true,
        }" :parallax="true" :autoplay="{ delay: 1800, disableOnInteraction: false }" :modules="[Parallax, EffectFade]">
          <swiper-slide v-for="pro in proFan">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-scale="0.7"
              data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <canvas id="particle_canvas"></canvas>

    <!-- 暖心優惠一把抓 -->
    <section class="gift-box scroll" titles="暖心優惠一把抓" id="gift">
      <h2 class="title">
        <img :src="$filters.siteUrl('fan_hot/images/2503/S0.png')" alt="" />
      </h2>

      <ul>
        <li class="w:43%">
          <swiper :loop="true" :effect="'flip'" :flipEffect="{
                 slideShadows : false,
                 limitRotation : -180,
              }" :autoplay="{ delay: 1500, disableOnInteraction: false }" :modules="[EffectFlip]">
            <swiper-slide v-for="gift in gifts">
              <a :href="$filters.addGALink(gift.url)" target="_blank">
                <img :src="$filters.siteUrl(gift.image)">
              </a>
            </swiper-slide>
          </swiper>
        </li>
        <li><a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
            <img :src="$filters.siteUrl('fan_hot/images/2411/s1-4.png')" alt="" />
          </a>
        </li>
        <li class="muti">
          <img :src="$filters.siteUrl('fan_hot/images/2411/s1-2b.png')" alt="" />
          <div class="links">
            <a class="alert">
              <img :src="$filters.siteUrl('fan_hot/images/2411/event2.png')" />
            </a>
            <a class="go" :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225')"
              target="_blank">
              <img :src="$filters.siteUrl('fan_hot/images/2411/go2.png')" />
            </a>
          </div>
        </li>
        <li class="muti">
          <img :src="$filters.siteUrl('fan_hot/images/2411/s1-5.png')" alt="" />
          <div class="links">
            <a class="go" :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=115927&aid=22750&hid=115598')"
              target="_blank">
              <img :src="$filters.siteUrl('fan_hot/images/2411/go2.png')" />
            </a>
          </div>
        </li>
      </ul>
    </section>

    <!-- 速速go -->
    <section class="sale-box scroll" titles="速速go" id="go">
      <h2 class="title">
        <img :src="$filters.siteUrl('wet/images/tk3cgo_bar.png')" alt="" />
      </h2>

      <div class="sales">
       <listF :pro="product2[menuGo]" :isSwiper="1" :name="'sale'"></listF>
        <a class="more" :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')"
          target="_blank">
          <img :src="$filters.siteUrl('fan_hot/images/2503/more.png')">
        </a>
      </div>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menu" :moreImage="moreImage"></CommonFloor>
  </div>

  <!-- 左側選單+手機版 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單 -->
  <RightAside :asides="asides"></RightAside>
</template>

<script>
import { EffectFlip,EffectFade,Parallax } from "swiper/modules";
import listM from '@/views/layout/listM.vue'
export default {
  data() {
    return {
      EffectFlip,
      EffectFade,
      Parallax,
      proFan:[
        {
          image: 'fan_hot/images/2503/PD.png',
          url:'https://www.tk3c.com/pt.aspx?pid=123640'
        }
      ],
      gifts:[
         {
          image: 'fan_hot/images/2411/s1-1.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
          {
          image: 'fan_hot/images/2411/s1-3.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
      ],
      floorImg: [
        {
          image: 'fan_hot/images/2503/S2.png',
          moreUrl:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
        },
        {
          image: 'fan_hot/images/2503/S3.png',
          moreUrl:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
        },
        {
          image: 'fan_hot/images/2503/S4.png',
          moreUrl:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
        },
        {
          image: 'fan_hot/images/2503/S5.png',
          moreUrl:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
        },
        {
          image: 'fan_hot/images/2503/S6.png',
          moreUrl:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
        },
        {
          image: 'fan_hot/images/2503/S7.png',
          moreUrl:'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
        },
         {
          image: 'fan_hot/images/2503/S8.png',
          moreUrl:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
        },
        {
          image: 'fan_hot/images/2503/S9.png',
          type: listM,
          moreUrl:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412'
        },
         {
          image: 'fan_hot/images/2503/S10.png',
          moreUrl:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
          type:listM
        }
      ],
      menuGo: 6880, //速速go樓層清單編號
      menu:[3428,3430,3429,4150,4153,6729,6730,4151,5518],
      moreImage:''
    }
  },
  mounted() {
    //看更多按鈕
    this.moreImage = 'fan_hot/images/2503/more.png';

    //撈取速速商go品樓層
    this.getFloorSingle(this.menuGo)
  }
}
</script>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/fan_hot/images/2503/";
$origin: "https://events.tk3c.com/events_net/events_net/fan_hot/images/2503/";

/*  共用樣式調整 */
body {
  background: #add1eb;
}

.bg01 {
  background: none;
  border: 2px solid #40637e;
  box-sizing: border-box;
  margin: 0 auto 2%;
}

.fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

/* 風扇 */
#fan-container {
  .background {
    $image: $dir + "KVBG.png";
    @include bg-responsive($image, 2000, 1229);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px, top;
    padding-bottom: 65%;
    .title {
      width: 35%;
      position: absolute;
      left:0;
      right: 0;
      top: 16%;
      margin: 0 auto;
      animation-duration: 2.3s;
    }
    .product {
      width: 30%;
      position: absolute;
      right: 0;
      left: 0;
      top: 47%;
      margin: 0 auto;
    }
  }
}

.gift-box {
  .title {
    width: 100%;
  }
  li {
    width: 44%;
    margin: 0 5px 1%;
    &.muti {
      position: relative;
      img {
        transform: scale(1.1);
        position: relative;
      }
      .links {
        width: 100%;
        position: absolute;
        top: 73%;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        align-items: baseline;
        a {
          margin: 0 0;
          img {
            transform: scale(1);
          }
        }
      }
      &:nth-of-type(even) {
        img {
          top: -20px;
        }
        .links {
          left: 80%;
          img {
            top: 0;
          }
          a {
            width: 17%;
          }
        }
      }
      &:nth-of-type(odd) {
        img {
          top: -32px;
        }
        .links {
          left: 55%;
          img {
            top: 0;
          }
          a {
            &:nth-of-type(odd) {
              width: 26%;
            }
            &:nth-of-type(even) {
              width: 17%;
            }
          }
        }
      }
    }
  }
}

.sale-box {
  .bg01 {
    background: #ea1d4e;
    border: none;
  }
}

.floor {
  .title {
    width: 100%;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #fan-container {
    .background {
      background-size: 120% auto;
      background-position: -10vw 4vw, top;
      padding-bottom: 80vw;
      .title {
        width: 50%;
        top: 10vw;
      }
      .product {
        width: 40%;
        right: 0;
        left:0;
        margin: 0 auto;
        top: 12vw;
      }
    }
  }

  .gift-box {
    li {
      width: 44%;
      &.muti {
        .links {
          top: 17.5vw;
        }
        &:nth-of-type(odd) {
          img {
            top: -25px;
          }
          .links {
            img {
              top: 0;
            }
          }
        }
        &:nth-of-type(even) {
          img {
            top: -15px;
          }
          .links {
            img {
              top: 0;
            }
          }
        }
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #fan-container {
    .background {
      background-size: 200% auto;
      background-position: -52vw 22vw, top;
      padding-bottom: 150vw;
      .title {
        width: 80%;
        top: 29vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 72%;
        right: 0;
        left: 0;
        top: 72vw;
        margin: 0 auto;
      }
    }
  }

  .gift-box {
    li {
      width: 100%;
      margin: 0 5px 4%;
      &.muti {
        .links {
          top: 35vw;
        }
      }
    }
    .title {
      width: 160%;
      margin: 0 -30% 5%;
    }
  }

  .floor {
    .title {
      width: 160%;
      margin: 0 -30% 5%;
    }
  }
}

</style>
