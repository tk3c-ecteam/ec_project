<template>
  <div id="fan-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__pulse">
        <img :src="$filters.siteUrl('fan_hot/images/2503/title3.png')" />
      </h2>

      <div class="product">
        <img :src="$filters.siteUrl('fan_hot/images/2503/PD2.png')" />
      </div>
    </div>

    <canvas id="particle_canvas"></canvas>

    <!-- 早鳥沁涼好康 -->
    <section class="gift-box scroll" titles="早鳥沁涼好康" id="gift">
      <h2 class="title">
        <img :src="$filters.siteUrl('fan_hot/images/2503/S0_a.png')" alt="" />
      </h2>

      <ul>
        <li v-for="gift in gifts">
          <a :href="$filters.addGALink(gift.url)" target="_blank">
            <img :src="$filters.siteUrl(gift.image)">
          </a>
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
import listM from "@/views/layout/listM.vue";
export default {
  data() {
    return {
      listM,
      gifts:[
         {
          image: 'fan_hot/images/2503/C1_a.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
          {
          image: 'fan_hot/images/2503/C2_a.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
        },
        {
          image: 'fan_hot/images/2503/C3_a.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=69944'
        },
          {
          image: 'fan_hot/images/2503/C4_a.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=115927&aid=22750&hid=116932'
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
          moreUrl:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
          type:listM
        },
         {
          image: 'fan_hot/images/2503/S10.png',
          moreUrl:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
          isSwiper:1
        }
      ],
      moreImage:'',
      menuGo:6880, //速速go陳列標題
      menu:[3428,3430,3429,4150,4153,6729,6730,4151,7876]
    }
  },
  mounted() {
    //看更多按鈕
    this.moreImage = 'fan_hot/images/2503/more.png';

    //撈取速速go樓層商品
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
  border-top: none;
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
      width: 33%;
      position: absolute;
      left:0;
      right: 0;
      top: 12%;
      margin: 0 auto;
      animation-duration: 2.3s;
    }
    .product {
      width: 23%;
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
        width: 44%;
        top: 10vw;
      }
      .product {
        width: 30%;
        right: 0;
        left:0;
        margin: 0 auto;
        top: 37vw;
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #fan-container {
    .background {
      background-size: 200% auto;
      background-position: -54vw 16vw, top;
      padding-bottom: 145vw;
      .title {
        width: 75%;
        top: 27vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 50%;
        right: 0;
        left: 0;
        top: 71vw;
        margin: 0 auto;
      }
    }
  }

  .gift-box {
    li {
      width: 100%;
      margin: 0 5px 4%;
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
