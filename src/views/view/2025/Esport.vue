<template>
  <div id="esport-container">
    <div class="background">
      <h2 class="title animate__animated animate__lightSpeedInLeft">
        <img :src="$filters.siteUrl('Esportday/images/title.png')" />
      </h2>
    </div>

    <div class="background2"></div>

    <!-- 時間倒數 -->
    <section class="time-box" v-show="isIncoming">
      <vue-countdown :time="time" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
        <p><b>開賣倒數</b> <em>{{ days }}</em> 天 <em>{{ hours }}</em> 時 <em>{{ minutes }}</em> 分 <em>{{ seconds }}</em> 秒
        </p>
      </vue-countdown>
    </section>

   <div v-show="!isIncoming">
    <!-- 全館限時活動 -->
    <section class="special-box scroll pt:5% box:border-box" titles="全館限時活動" id="special">
      <ul class="gap:20 gap:10@<576">
        <li v-for="(sp,s) in specials" :key="s" :class="[sp.class ? sp.class : '']" class="w:40% w:47%@<992 w:85%@<576 w:82%.long w:96%.long@<992 w:85%.long@<576">
          <a v-if="sp.url" :href="$filters.addGALink(sp.url)" target="_blank">
            <img :src="$filters.siteUrl(sp.image)">
          </a>
          <img v-else :src="$filters.siteUrl(sp.image)">
        </li>
      </ul>
    </section>

    <!-- 買一送一 -->
    <section class="pro1-box scroll" titles="買一送一" id="pro1">
      <h2 class="title">
        <img :src="$filters.siteUrl('Esportday/images/S1.png')">
      </h2>

      <JimmyFloor :id="7867"></JimmyFloor>
    </section>

    <!-- 精選獨家下殺 -->
    <section class="pro2-box scroll" titles="精選獨家下殺" id="pro2">
      <h2 class="title">
        <img :src="$filters.siteUrl('Esportday/images/S2.png')">
      </h2>

      <JimmyFloor :id="7868"></JimmyFloor>
    </section>

     <!-- 限時加價購 -->
    <section class="gift-box scroll" titles="限時加價購" id="gift">
       <h2 class="title">
        <img :src="$filters.siteUrl('Esportday/images/S3.png')">
      </h2>

      <swiper
      class="w:85% w:full@<992"
      :loop="false"
      :space-between="10"
      :autoplay="{
        delay:2500,
        disableOnInteraction:false
      }"
      :breakpoints="{
        0:{
          slidesPerView:2,
          spaceBetween:0,
           grid:{
            fill:'colmn',
            rows:1
          }
        },
        601:{
          slidesPerView:3,
          grid:{
            fill:'colmn',
            rows:2
          }
        }
      }"
      :pagination="{
        el:'.gift-box .page',
        clickable :true,
        dynamicBullets:true
      }"
      >
      <swiper-slide v-for="(gift,g) in gifts" :key="g">
        <img :src="$filters.siteUrl(gift.image)">
      </swiper-slide>
      </swiper>
       <div class="swiper-pagination page"></div>
    </section>

    <!-- 飛利浦 -->
    <section class="philips-group scroll" titles="飛利浦" id="philips">
      <h2 class="title">
       <img :src="$filters.siteUrl('Esportday/images/S4.png')" />
      </h2>

      <a class="w:80% w:95%@<992 w:full@<992 mb:5%" :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=252951')" target="_blank">
         <img :src="$filters.siteUrl('Esportday/images/S4-e1.png')" />
      </a>

      <Tabs :tabs="tabs">
          <template v-slot="{ selectedTab }">
            <TabContent2 v-for="(tab, b) in tabs" :id="tab.id" :index="b" :selectedTab="selectedTab">
            </TabContent2>
          </template>
        </Tabs>
    </section>

    <!-- 右側選單+手機板 -->
    <RightAside :asides="asides" :type="'mobile'"></RightAside>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    const today = new Date();
    const future = new Date('2025/03/20 00:00');
    return {
      time:future - today,
      now:new Date(),
      isIncoming:true,
      specials:[
        {
          "url":"https://www.tk3c.com/dic2.aspx?cid=124448&aid=23934&hid=124453",
          "image":"Esportday/images/e1.png",
        },
         {
          "image":"Esportday/images/e2.png",
        },
         {
          "image":"Esportday/images/e3.png",
          "class":"long"
        },
      ],
      gifts:[
        {
          "image":"Esportday/images/253020.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=253020"
        },
        {
          "image":"Esportday/images/240072.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=240072"
        },
        {
          "image":"Esportday/images/245002.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=245002"
        },
        {
          "image":"Esportday/images/248529-30.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=248529"
        },
        {
          "image":"Esportday/images/249067-68.png",
         "url":"https://www.tk3c.com/pt.aspx?pid=249067"
        }
      ],
       tabs: [
        { image: 'Esportday/images/S4-btn01.png',id:7869},
        { image: 'Esportday/images/S4-btn02.png',id:7870 },
      ]
    }
  },
  mounted() {
    const { now } = this;
    (now >= new Date('2025/03/20 00:00')) ? this.isIncoming = false : this.isIncoming = true;
  },
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/Esportday/images/";
$origin: "https://events.tk3c.com/events_net/events_net/Esportday/images/";

/*  共用樣式調整 */
body {
  background: #0083ff;
}

.bg01 {
  background:#ffff3c;
}

.time-box {
  p {
    font-size: 3em;
    color: #fff;
  }
  em {
    font-size: 1.5em;
    color: #fdef58;
    font-weight: bold;
  }
  b {
    display: block;
  }
}


#esport-container {
  width: 100%;
  position: relative;

  .background {
     $image: $dir + 'kv.png';
    @include bg-responsive($image, 2000, 750);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 39%;
    .title {
      width: 35%;
      position: absolute;
      left: 12%;
      top: 12%;
      margin: 0 auto;
      animation-duration: 0.65s;
    }
  }
}

.background2{
   width: 100%;
    height: 100%;
    $image: $dir + "body.gif";
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position: 0 0, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
}

.philips-group {
  .tab {
    margin-bottom: -1% !important;
    li {
      width: 35%;
    }
  }
}

.gift-box {
  .swiper-wrapper {
    justify-content: center;
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #esport-container {
    .background {
      padding-bottom: 50vw;
      background-size: 120% auto;
      background-position: -15vw 4vw,top;
      .title {
        width: 45%;
        top: 6vw;
        left: 3vw;
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -27vw 4vw,top;
  }

  .philips-group {
    .tab {
      li {
        width: 47%;
      }
    }
  }

  .time-box {
    p {
      font-size: 2em;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #esport-container {
    .background {
      $image:$dir + 'kv_M.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 10vw,top;
      padding-bottom: 142vw;
      .title {
        display: none;
      }
    }
  }

  .background2 {
    $image:$dir + 'body_M.png';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position: 0 0,top;
  }

  .philips-group {
    .tab {
      margin-bottom: -2% !important;
    }
  }

  .gift-box {
    .swiper-wrapper {
      justify-content: left;
    }
    .swiper-pagination {
      bottom: -4% !important;
      .swiper-pagination-bullet-active {
        background: #fff !important;
      }
    }
  }

  .time-box {
    b {
      display: block;
      font-size: 1.5em;
    }
    em {
      font-size: 1em;
    }
  }
}
</style>
