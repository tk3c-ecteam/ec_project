<script>
export default {
  data() {
    return {
      menus:[8380,8381,8348],
      floorImg: [
        {
          text:'6.24-6.26'
        },
        {
          text:'6.27-6.30'
        },
        {
          text:'7.01-7.03'
        },
      ],
      today:new Date(),
      nextShow:null,
      nextShow2:null,
      nextShow3:null,
      nextPro1:null,
      nextPro2:null,
      nextPro3:null,
      isHide:false,
      isHide2:true
    }
  },
  mounted() {
    const { menus,today } = this;

    this.nextDate();

    this.getFloorSingle(this.nextPro1);

    this.getFloorSingle(this.nextPro2);

    this.getFloorSingle(this.nextPro3);

    if (today >= new Date('2025/07/01')) this.isHide2 = false;
  },
  methods: {
    nextDate() {
      this.nextShow = this.floorImg[0].text;
      this.nextShow2 = this.floorImg[1].text;
      this.nextShow3 = this.floorImg[2].text;
      this.nextPro1 = this.menus[0];
      this.nextPro2 = this.menus[1];
      this.nextPro3 = this.menus[2];
      if (this.today >= new Date('2025/06/27')) {
        this.nextShow = this.floorImg[1].text;
        this.nextShow2 = this.floorImg[2].text;
        this.nextShow3 = this.floorImg[2].text;
        this.nextPro1 = this.menus[1];
        this.nextPro2 = this.menus[2];
      } 
       if (this.today >= new Date('2025/07/01')) {
        this.nextShow = this.floorImg[2].text;
        this.nextShow2 = this.floorImg[2].text;
        this.nextShow3 = this.floorImg[2].text;
        this.nextPro1 = this.menus[2];
        this.nextPro3 = this.menus[2];
      }
    }
  }
}
</script>

<template>
  <div id="super-container">
    <div class="background">
      <h2 class="title">
        <p class="light">
            <img :src="$filters.siteUrl('supersale/images/light.png')" />
        </p> 
        <img :src="$filters.siteUrl('supersale/images/title.png')" />
      </h2>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('supersale/images/item.png')" />
    </p>

    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('supersale/images/bar.png')" />
        <b class="abs left:0 right:0 m:auto top:38% translateY(-50%) f:3em f:2.2em@<1500 f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">
          {{ nextShow }} </b>
      </h2>
      <img class="abs w:full scale(1.1) scale(1.8)@<992 scale(3)@<576 mt:10%@<992 mt:27vw@<576 left:0 right:0 m:auto top:0 z:-1" :src="$filters.siteUrl('supersale/images/store.png')" />
      <div class="products w:90% w:full@<992 m:-5%|auto|0">
        <listF :pro="product2[nextPro1]" :isSwiper="1" :name="'sp'"></listF>
      </div>
    </section>
    
    <!-- 其他樓層 -->
    <section class="product1-box" v-if="isHide2">
      <h2 class="title">
        <img :src="$filters.siteUrl('supersale/images/bar.png')" />
        <b class="abs left:0 right:0 m:auto top:38% translateY(-50%) f:3em f:2.2em@<1500 f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">
          {{ nextShow2 }} </b>
      </h2>
      <div class="products">
        <listF :pro="product2[nextPro2]" :isSwiper="1" :name="'pro1'" :incoming="true"></listF>
      </div>
    </section>

    <section class="produc2-box" v-if="isHide">
      <h2 class="title">
        <img :src="$filters.siteUrl('supersale/images/bar.png')" />
        <b class="abs left:0 right:0 m:auto top:38% translateY(-50%) f:3em f:2.2em@<1500 f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">
          {{ nextShow3 }} </b>
      </h2>
      <div class="products">
        <listF :pro="product2[nextPro3]" :isSwiper="1" :name="'pro2'" :incoming="true"></listF>
      </div>
    </section>

    <LeftAside></LeftAside>
    <RightAside :type="'mobile3'"></RightAside>
  </div>
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/supersale/images/";
$dir2: "https://events.cdn-tkec.tw/events_net/events_net/supersale/images/";

/*  共用樣式調整 */

body {
  background: #c40b0b;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "BG.png";
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
  .before {
    .boxF_price {
      display: none;
    }
  }
}

#super-container{
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 0,
      top;
    padding-bottom: 40%;
    .title {
      width: 30%;
      position: absolute;
      left: 18%;
      top: 19%;
      animation: tada 1.6s ease;
      .light {
        position: absolute;
      }
    }
  }
}

.item {
  mix-blend-mode: lighten;
}

.mobile-for-product {
  display: none;
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #super-container{
    .background {
      padding-bottom: 50vw;
      .title {
        width: 35%;
        left: 11vw;
        top: 10vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 0, top;
    }
  }
}

/* 手機版 */

@include media-query("mobile", "576px") {
  #super-container{
    .background {
      padding-bottom: 150vw;
      .title {
        width: 65%;
        left: 0;
        right: 0;
        top: 18vw;
        margin: 0 auto 0;
      }
    }
  }

  body {
    &:before {
      $image:$dir + 'M_KV.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 11vw, top;
    }
  }
}

</style>
