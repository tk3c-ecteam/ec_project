<script>
import listM from '@/views/layout/listM.vue'
export default {
  data() {
    return {
      listM,
      floorImg: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=83187&aid=22279&hid=67843',
          image: 'crown_202204/images/2311/bar01.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=83187&aid=18700',
          image: 'crown_202204/images/2311/bar02.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=83187&aid=22279&hid=113050',
          image: 'crown_202204/images/2311/bar03.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=83187&aid=22279&hid=99363',
          image: 'crown_202204/images/2311/bar04_b.png',
          type:listM
        }
      ],
      menus: [3003,2999,3000,3001],
      menuSP:2998,
      today:new Date()
    }
  },
  mounted() {
    //撈取樓層商品
    this.getFloorSingle(this.menuSP);

    //判斷樓層是否有商品
    if (document.querySelectorAll('.floor')[3].querySelectorAll('.bg01 li').length <= 0) {
       this.floorImg.splice(3,1);
       this.menus.splice(3,1);
    }
  },
  computed:{
    //買一送一 精品濾掛式咖啡價格
    price() {
      return 450;
    },
    //買一送一 經典深焙咖啡 5/1價格更新
    price2() {
      return (this.today >= new Date('2025/05/01')) ? 560 : 470;
    }
  }
}
</script>

<template>
  <div id="crown-day">
    <div class="background"></div>
    <div class="background2"></div>

    <!-- 咖啡宣傳banner -->
    <section class="sale-box" v-if="isSale">
      <a :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=coffee-20')" target="_blank">
        <img class="pc" :src="$filters.siteUrl('crown_202204/images/2311/bn_coffee3.jpg')">
        <img class="mobile" :src="$filters.siteUrl('crown_202204/images/2311/bn_coffee3M.jpg')">
      </a>
    </section>

    <!-- 找到你的咖啡儀式感 -->
    <section class="product-box scroll" titles="找到你的咖啡儀式感" id="p1">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=83187')" target="_blank">
          <img :src="$filters.siteUrl('crown_202204/images/2311/bar_a.png')" />
        </a>
      </h2>
      <div class="products">
        <ListFCoverflow :pro="product2[menuSP]"></ListFCoverflow>
      </div>
    </section>

    <!-- 買一送一 超值專區 -->
    <section class="special-group scroll" titles="買一送一 超值專區" id="p2">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=83187&aid=22279&hid=67843')" target="_blank">
          <img :src="$filters.siteUrl('crown_202204/images/2311/bar_c.png')">
        </a>
      </h2>

      <div class="rel mb:2%">
        <a class="rel w:full h:full" :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=coffee-22')" target="_blank">
          <img :src="$filters.siteUrl('crown_202204/images/2311/coffee-22f.png')" />
           <div class="price">
              <b>{{ price }}</b>
              <sup>/2包</sup>
           </div> 
         </a>
      </div>

      <div class="rel">
        <a class="rel w:full h:full" :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?cid=83187&aid=22279&hid=67843&pid=254268')" target="_blank">
           <img :src="$filters.siteUrl('crown_202204/images/2311/coffee-20e.png')" /> 
           <div class="price">
              <b>{{ price2 }}</b>
              <sup>/2包</sup>
           </div> 
        </a>
      </div>
    </section>
    
    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>
  </div>

  <!-- 右側選單  -->
  <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/crown_202204/images/";
$dir2: "https://events.cdn-tkec.tw/events_net/events_net/crown_202204/images/2311/";

/*  共用樣式調整 */

body {
  background: #341e13;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir2 + "kv03.jpg";
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

form#form1 {
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "bg3.jpg";
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position: 0 0, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -2;
    top: 0;
  }
}

.bg01 {
  background: #cfb696;
  border-radius: 25px;
  border: 5px solid #fff2d2;
  padding: 1%;
  box-sizing: border-box;
}

#crown-day {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 40%;
  }
}

.background2 {
    $image: $dir + "bg2.jpg";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0;
    z-index: -1;
  }

  .product-box {
    .products {
      position: relative;
      ul {
        width: 90%;
        margin: 0 auto;
      }
      .bg01 {
        border-radius: 90px;
        border: none;
        box-sizing: border-box;
      }
      &:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #553425;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 0;
        z-index: -1;
      }
      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #cfb697;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 0;
        z-index: -1;
        border-top-right-radius: 140px;
        border-bottom-left-radius: 140px;
        box-sizing: border-box;
      }
    }
  }

  .special-group {
    .price {
      font-family: "Noto Sans TC", sans-serif;
      font-weight: 900;
      width: auto;
      position: absolute;
      left: 36%;
      top: 62%;
       color: #4f3022;
      b {
        font-size: 3em;
      }
      sup {
        font-size: 2em;
        padding-left: 8px;
        box-sizing: border-box;
      }
    }
  }

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #crown-day {
    .background {
      padding-bottom: 45vw;
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -8vw 4vw, top;
    }
  }

  .product-box {
    .products {
      ul {
        width: 100%;
      }
    }
  }

  .special-group {
    .price {
      left: 35vw;
      top: 23.5vw;
      b {
        font-size: 1.7em;
      }
      sup {
        font-size: 1.2em;
      }
    }
  }
}

/* 手機版 */

@include media-query("mobile", "576px") {
  #crown-day {
    .background {
      padding-bottom: 85vw;
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -34vw 10vw, top;
    }
  }
  
  .bg01 {
    border-radius: 10px;
    border: 3px solid #fff2d2;
    box-sizing: border-box;
  }

  .product-box {
    .products {
      .bg01 {
        border-radius: 35px;
        box-sizing: border-box;
      }
    }
  }

  .special-group {
    .price {
      top: 23vw;
      b {
        font-size: 1rem;
      }
      sup {
        font-size: 0.8rem;
        padding-left: 3px;
        box-sizing: border-box;
      }
    }
  }
}

@include media-query("mobile", "320px") {
  .special-group {
    .price {
      top: 21.5vw;
      b {
        font-size: 0.8rem;
      }
      sup {
        font-size: 0.6rem;
      }
    }
  }
}

</style>
