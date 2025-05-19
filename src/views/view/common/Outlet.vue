<script>
import listM from '@/views/layout/listM.vue'
export default {
  data() {
    return {
      listM,
      navs:[
        {
          text:"outlet 特賣"
        },
        {
          url:"https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html",
          text:"3小時到貨"
        },
        {
          url:"https://events.tk3c.com/events_net/nightsale/index.html",
          text:"夜深價更深"
        },
        {
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=124426",
          text:"會員折價券"
        },
        {
          url:"https://www.tk3c.com/dictitleurl.aspx?cid=124426",
          text:"會員折價券"
        }
      ],
      specials:[
        {
          url:'#pro8047',
          image:'product/201205benefits/images/2308/A2-1.png'
        },
        {
          url:'#pro8048',
          image:'product/201205benefits/images/2308/A2-2.png'
        },
        {
          url:'#pro8049',
          image:'product/201205benefits/images/2308/A2-3.png'
        },
        {
          url:'#pro8050',
          image:'product/201205benefits/images/2308/A2-4.png'
        },
        {
          url:'#pro8051',
          image:'product/201205benefits/images/2308/A2-5.png'
        },
        {
          url:'#pro8052',
          image:'product/201205benefits/images/2308/A2-6.png'
        },
        {
          url:'#pro8053',
          image:'product/201205benefits/images/2308/A2-7.png'
        },
        {
          url:'#pro8054',
          image:'product/201205benefits/images/2308/A2-8.png'
        },
        {
          url:'#pro8057',
          image:'product/201205benefits/images/2308/A2-9.png'
        },
        {
          url:'#pro8055',
          image:'product/201205benefits/images/2308/A2-10.png'
        }
      ],
      floorImg: [
        {
          image: 'product/201205benefits/images/2308/F2.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F3.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F4.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F5.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F6.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F7.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F8.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F9.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F10.png',
          type:listM
        },
        {
          image: 'product/201205benefits/images/2308/F11.png',
          type:listM
        },
      ],
      menus: [8047,8048,8049,8050,8051,8052,8053,
        8054,8057,8055
      ],
      menuPro:8046,
      today:new Date()
    }
  },
  mounted() {
    //撈取私心推薦樓層商品
    this.getFloorSingle(this.menuPro);

    window.addEventListener('scroll',this.showMobileTop);
  },
  beforeUnmount() {
    window.removeEventListener('scroll',this.showMobileTop);
  }
}
</script>

<template>
  <div id="outlet-container">
    <div class="background"></div>

    <!-- 導航區 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('product/201205benefits/images/2308/A1.png')" />
      </h2>

      <ul class="gap:10 gap:5@<992">
        <li class="w:19% w:48%@<576" v-for="(sp,s) in specials" :key="s">
          <a @click="goAnchor(sp.url)">
            <img :src="$filters.siteUrl(sp.image)">
          </a>
        </li>
      </ul>
    </section>

    <div class="background2"></div>

    <!-- 精品下殺 -->
    <section class="product-box scroll p:11%|0|1% p:18%|0|5%@<576 p:15%|0|5%@>2500 box:border-box" titles="私心推薦 精品下殺" id="p1">
      <h2 class="title">
        <img :src="$filters.siteUrl('product/201205benefits/images/2308/F1.png')" />
      </h2>
      <div class="products">
        <ListFCoverflow :pro="product2[menuPro]"></ListFCoverflow>
      </div>
    </section>
    
    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>
    <div class="custom-top" :class="{'isShow':isGoTop}" @click="goTop"><p></p></div>
  </div>
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/product/201205benefits/images/2308/";
$dir2: "https://events.cdn-tkec.tw/events_net/events_net/product/201205benefits/images/2308/";

/*  共用樣式調整 */

body {
  background: #732423;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "BG_2.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
  }
}

.bg01 {
  background: none;
}

#outlet-container{
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    $image: $dir + 'KV.png';
    @include bg-responsive($image, 2000, 885);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 0,
      top;
    padding-bottom: 45%;
  }
}

.background2 {
    $image: $dir + "belt.png";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0;
    z-index: -1;
  }

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #outlet-container{
    .background {
      background-size: 120% auto;
      background-position: -9vw 4vw,top;
      padding-bottom: 60vw;
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -14vw 0, top;
    }
  }

  .background2 {
    background-size: 185% auto;
    background-position: -42vw -4vw,top;
  }
}

/* 手機版 */

@include media-query("mobile", "576px") {
  #outlet-container{
    .background {
      background-size: 160% auto;
      background-position: -26vw 10vw,top;
      padding-bottom: 85vw;
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -39vw 0, top;
    }
  }

  .background2 {
    background-size: 330% auto;
    background-position: -92vw -12vw, top;
  }

  .mobile-for-product {
    top: 23vw;
  }
}

</style>
