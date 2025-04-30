<template>
  <div id="intel-container">
    <div class="background">
      <a class="w:full h:full abs left:0 right:0 m:auto"></a>
    </div>

    <!-- 上方商品 -->
    <section class="top-group">
      <div class="rel">
        <ProductTop :pro="product2[menuPro]"></ProductTop>
      </div>
    </section>

    <!-- 獨家優惠指南 -->
    <section class="special-box scroll" titles="獨家優惠指南" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/S01.png')" />
      </h2>

      <ul class="gap:10 mb:2%">
        <li class="w:80% w:95%@<992 w:full@<576">
          <div class="flex flex-direction:row flex-direction:column@<576 gap:10">
            <a class="w:50% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947&strPreView=y')" target="_blank" :class="[!isOff ? 'off' : '']">
              <img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-1.png')" />
            </a>
            <a class="w:50% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
              target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-2.png')" /></a>
          </div>
        </li>
        <li class="w:39% w:47%@<992 w:full@<576">
          <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img
              :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-3.png')" /></a>
        </li>
        <li class="w:40% w:46%@<992 w:full@<576 flex flex-direction:column gap:10">
          <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121988')"
            target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-4.png')" /></a>
          <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121986')"
            target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-5.png')" /></a>
          <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121987')"
            target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-6.png')" /></a>
        </li>
      </ul>
    </section>

    <!-- 樓層商品 -->
    <CommonFloor :floors="floors" :menu="menu" :moreImage="moreImage"></CommonFloor>

    <!-- 注意事項 -->
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<script>
export default {
  data() {
    return {
      specials:[
        {
          "url":"https://www.tk3c.com/pt.aspx?pid=250713-809985",
          "image":"2025_Intel_Spring_Bundle/images/C01.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=252609",
          "image":"2025_Intel_Spring_Bundle/images/C02.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"2025_Intel_Spring_Bundle/images/C03.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"2025_Intel_Spring_Bundle/images/C04.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"2025_Intel_Spring_Bundle/images/C05.png",
          "class":"long"
        },
      ],
      special2:[
        {
          "image":"2025_Intel_Spring_Bundle/images/C05-1_M.png",
          "url":""
        },
       {
          "image":"2025_Intel_Spring_Bundle/images/C05-2_M.png",
          "url":""
        },{
          "image":"2025_Intel_Spring_Bundle/images/C05-3_M.png",
          "url":""
        },
      ],
      floors:[
         {
          "image":"2025_Intel_Spring_Bundle/images/S02.png",
          "moreUrl":"",
        },
         {
          "image":"2025_Intel_Spring_Bundle/images/S03.png",
          "moreUrl":"",
        }
      ],
      today:new Date(),
      moreImage:'2025_Intel_Spring_Bundle/images/more.png',
      menu:[7860,7861],
      menuPro:7859,
      isOff:true
    }
  },
  mounted() {
    const { today } = this;

    //撈取上方商品
    this.getFloorSingle(this.menuPro);

    if (today >= new Date('2025/05/11')) this.isOff = false;
  },
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/2025_Intel_Spring_Bundle/images/";
$origin: "https://events.tk3c.com/events_net/events_net/2025_Intel_Spring_Bundle/images/";

/*  共用樣式調整 */
body{
  background: #071f40;
   &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + "BG_PC.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
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


#intel-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 38%;
  }
}

.special-box {
  .title {
    width: 32%;
  }
}

.top-group {
  .bg01 {
    width: 90%;
    background: #fff;
    padding: 2% !important;
    box-sizing: border-box;
  }
  .swiper-wraper {
    justify-content: left;
  }
}

.floor {
  .bg01 {
    margin: 0 auto 0;
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #intel-container {
    .background {
      padding-bottom: 42vw;
    }
  }
  .special-box {
    .title {
      width: 45%;
    }
  }

  .top-group {
    .bg01 {
      width: 100%;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #intel-container {
    .background {
      padding-bottom: 120vw;
    }
  }

  body {
    &:before {
      $image:$dir + 'BG_M.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 45px,top;
    }
  }

  .special-box {
    .title {
      width: 55%;
    }
  }
}
</style>
