<script>
export default {
  data() {
    return {
      floorImg: [
        {
          image: 'pcdiy-gaming/images/s1.png'
        },
        {
          image: 'pcdiy-gaming/images/s2.png'
        },
        {
          image: 'pcdiy-gaming/images/s3.png'
        },
        {
          image: 'pcdiy-gaming/images/s4.png'
        },
        {
          image: 'pcdiy-gaming/images/s5.png'
        },
        {
          image: 'pcdiy-gaming/images/s6.png'
        },
      ],
      menus: [2301,2716,2302,2304,2303,2305],
      asideImage:'pcdiy-gaming/images/icon.png'
    }
  }
}
</script>

<template>
  <div id="pc-gaming">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('pcdiy-gaming/images/kvt.png')" />
      </h2>
      <p class="product">
        <img :src="$filters.siteUrl('pcdiy-gaming/images/pd.png')" />
      </p>
     
    </div>

    <p class="light left">
      <img :src="$filters.siteUrl('pcdiy-gaming/images/light.png')" />
    </p>

    <p class="light right">
      <img :src="$filters.siteUrl('pcdiy-gaming/images/light.png')" />
    </p>

    <!-- 商品樓層 -->
    <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>
  </div>

  <!-- 右側選單  -->
  <RightAside :type="'mobile2'" :asideImage="asideImage"></RightAside>
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/pcdiy-gaming/images/";
$origin: "https://events.tk3c.com/events_net/events_net/pcdiy-gaming/images/";
/*  共用樣式調整 */

body {
  $image:$dir + 'kv2.png';
  background: url($image) repeat-y center;
  background-position: 0 39vmax,top;
  background-color: #00142c;
  background-size: 100% auto;
}

.bg01 {
  background: #0abefa;
}

.aside-container {
  .aside-header {
    margin: 0 auto 15px;
  }
}


#pc-gaming {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
     $image: $dir + 'kv1.png';
    @include bg-responsive($image, 2000, 795);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 45%;
    .title {
      width: 35%;
      position: absolute;
      left: 15%;
      top: 22%;
      animation: big-after-small 1.8s linear;
    }
    .product {
      width: 35%;
      position: absolute;
      right: 13%;
      top: 23%;
      animation: upAndDown 1s linear infinite alternate;
    }
  }
}

.light {
  width: 50%;
  mix-blend-mode: lighten;
  filter: brightness(180%);
  position: fixed;
  &.left {
    animation: rotate-left 1.5s linear infinite alternate;
    transform-origin: right bottom;
    left: -8%;
    top: 100px;
  }
  &.right {
    right: -8%;
    animation: rotate-right 2s linear infinite alternate;
    transform-origin: left bottom;
    top: 200px;
    img {
      transform: rotate(180deg);
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #pc-gaming {
    .background {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
      padding-bottom: 52vw;
      .title {
        width: 45%;
        left: 9vw;
        top: 14vw;
      }
      .product {
        width: 45%;
        right: 2vw;
        top: 13vw;
      }
    }
  }

  body {
    background-size: 120% auto;
    background-position: -10vw 46vw,top;
  }
}

/* 手機版 */

@include media-query("mobile", "576px") {
  #pc-gaming {
    .background {
      background-size: 250% auto;
      background-position: -147vw 17vw,top;
      padding-bottom: 120vw;
      .title {
        width: 80%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 23vw;
      }
      .product {
        width: 80%;
        right: 0;
        left: 0;
        margin: 0 auto;
        top: 65vw;
      }
    }
  }

   body {
    background-size: 250% auto;
    background-position: -98vw 89vw,top;
  }
}

</style>
