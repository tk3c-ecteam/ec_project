<template>
  <div id="window-container">
    <div class="background">
      <h2 class="title animate__animated animate__backInUp">
        <img class="animate__animated animate__heartBeat"
          :src="$filters.siteUrl('windows10upgrade/images/title2.png')" />
           <em class="date" v-if="isDate">即日起-4.30</em>
      </h2>
    </div>

    <div class="background2"></div>
    <p class="light item left">
      <img :src="$filters.siteUrl('windows10upgrade/images/light_01.png')" />
    </p>
    <p class="light item right">
      <img :src="$filters.siteUrl('windows10upgrade/images/light_02.png')" />
    </p>

    <!-- 精選推薦商品 -->
    <section class="special-box scroll" titles="精選推薦商品" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('windows10upgrade/images/bar_top.png')" />
      </h2>

      <div class="rel w:full m:auto">
        <swiper :loop="false" :space-between="20" :autoplay="{
          delay: 2000,
          disableOnInteraction: false
        }" :breakpoints="{
        600: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }" :navigation="{
        nextEl: '.special-box .next',
        prevEl: '.special-box .prev'
      }">
          <swiper-slide v-for="sp in specials">
            <a :href="$filters.addGALink(sp.url)" target="_blank">
              <img :src="$filters.siteUrl(sp.image)">
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
    </section>

    <!-- 回饋必殺技 -->
    <section class="gift-box scroll" titles="回饋必殺技" v-if="isGift" id="gift">
      <h2 class="title">
        <img :src="$filters.siteUrl('windows10upgrade/images/bar_sp.png')" />
      </h2>

      <div class="rel w:85% w:95%@<992 w:full@<576 m:auto">
        <swiper :loop="false" :space-between="20" :breakpoints="{
          0: {
            slidesPerView: 2.3,
             spaceBetween:10,
            grid: {
              fill: 'colmn',
              rows: 3
            }
          },
          600: {
            slidesPerView: 3,
            spaceBetween:20,
            grid: {
              fill: 'colmn',
              rows: 3
            }
          }
        }">
          <swiper-slide v-for="(gift,g) in gifts" :key="g">
            <a v-if="g == 0" :href="gift.url">
              <img :src="$filters.siteUrl(gift.image)">
            </a>
             <a v-else :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)">
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- RTX50 新機預購 -->
    <section class="rtx-group scroll" titles="RTX50新機預購" id="rtx">
      <h2 class="title">
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/DBS_RTX50NB')" target="_blank">
          <img :src="$filters.siteUrl('windows10upgrade/images/bar_rtx50.png')" />
        </a>
      </h2>

      <Tabs :tabs="tabs">
          <template v-slot="{ selectedTab }">
            <TabContent v-for="(tab, b) in tabs" :type="tab.type" :menus="tab.id" :index="b" :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
    </section>

    <CommonFloor :floors="floors" :menu="menu"></CommonFloor>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile2'"></RightAside>
</template>

<script>
import listM from '@/views/layout/listM.vue'
export default {
  data() {
    return {
      listM,
      specials:[
        {
          "url":"https://www.tk3c.com/pt.aspx?pid=250713-809985",
          "image":"windows10upgrade/images/809985.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=252609",
          "image":"windows10upgrade/images/252609.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"windows10upgrade/images/240629.png",
        },
      ],
      gifts:[
        {
          "image":"windows10upgrade/images/sp01_a.png",
          "url":"#pro7859"
        },
        {
          "image":"windows10upgrade/images/sp02.png",
          "url":"https://events.tk3c.com/events_net/RTXNB/index.html"
        },
        {
          "image":"windows10upgrade/images/sp03.png",
          "url":"https://events.tk3c.com/events_net/2024083C/index.html"
        },
        {
          "image":"windows10upgrade/images/sp04.png",
          "url":"https://events.tk3c.com/events_net/2024083C/index.html"
        },
        {
          "image":"windows10upgrade/images/sp05.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121988"
        },
        {
          "image":"windows10upgrade/images/sp06.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121986"
        },
        {
          "image":"windows10upgrade/images/sp07.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121987"
        },
        {
          "image":"windows10upgrade/images/sp08.png",
          "url":"https://events.tk3c.com/events_net/2024083C/index.html"
        },
        {
          "image":"windows10upgrade/images/sp09.png",
          "url":"https://www.tk3c.com/dictitleurl.aspx?cid=79023"
        },
      ],
       tabs: [
        { image: 'windows10upgrade/images/rog.png',id:7864,type:listM},
        { image: 'windows10upgrade/images/msi.png',id:7865 },
        { image: 'windows10upgrade/images/acer.png',id:7866,type:listM }
      ],
      floors:[
        {
          "image":"windows10upgrade/images/bar_01.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=124426&aid=23931&hid=124429",
        },
         {
          "image":"windows10upgrade/images/bar_02.png",
          "url":"https://events.tk3c.com/events_net/2024083C/index.html",
        },
         {
          "image":"windows10upgrade/images/bar_03.png",
          "url":"https://events.tk3c.com/events_net/2024083C/index.html",
        },
         {
          "image":"windows10upgrade/images/bar_04.png",
          "url":"https://events.tk3c.com/events_net/2024083C/index.html",
        }
      ],
      today:new Date(),
      menu:[7859,7860,7861,7862],
      isGift:false,
      isDate:true
    }
  },
  mounted() {
    const { today } = this;
    this.fixedBg('.background2','.special-box');

    if(today >= new Date('2025/05/01')) this.isDate = false;
  },
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/windows10upgrade/images/";
$origin: "https://events.tk3c.com/events_net/events_net/windows10upgrade/images/";

/*  共用樣式調整 */
body{
  background: #140c27;
}

.bg01 {
  background:#ac84f7;
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 98%;
    height: 99%;
    border: 3px solid #fff;
    filter: blur(5px);
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
  }
}


#window-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 35%;
    .title {
      width: 45%;
      position: absolute;
      right: 11%;
      top: 17%;
      margin: 0 auto;
      animation-duration: 1.6s;
      img {
        animation-duration: 1.3s;
        animation-delay: 2s;
      }
      .date {
        font-size: 1.5vw;
        font-weight: bold;
        position: absolute;
        top: 16%;
        color: #fff;
      }
    }
  }
}

.background2{
   width: 100%;
    height: 100%;
    $image: $dir + "bg.jpg";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
    &.fixed {
      position: fixed;
      bottom: 0;
      top: unset;
      z-index: -2;
      background-position: 0 -175vw,top;
    }
}

.light {
  width: 30%;
  mix-blend-mode: lighten;
  &.left {
    right: unset;
    left: 0;
    top: 120px;
    animation: light 0.4s ease-in-out infinite;
  }
  &.right{
    left: unset;
    right: 0;
    top: 300px;
    animation: light 0.7s ease-in-out infinite;;
  }
}


.special-box {
  .title {
    width: 50%;
  }
}


/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #window-container {
    .background {
      padding-bottom: 40vw;
      .title {
        width: 55%;
        top: 9vw;
        right: 2vw;
        .date {
          font-size: 2vw;
          top: 4vw;
        }
      }
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position: -10vw 4vw,top;
    &.fixed {
      background-position: -10vw -175vw,top;
    }
  }

  .bg01 {
    &:before {
      height: 99.5%;
    }
  }

  .special-box {
    .title {
      width: 80%;
    }
  }

  .rtx-group {
    .tab {
      li {
        flex-basis: 30%;
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #window-container {
    .background {
      padding-bottom: 75vw;
      .title {
        width: 85%;
        top: 25vw;
        right: 0;
        margin: 0 auto;
        .date {
          font-size: 1.2rem;
          top: 2vw;
        }
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -38vw 20vw,top;
    }
  }

  .background2 {
    background-size: 180% auto;
      background-position: -38vw 20vw,top;
      &.fixed {
        background-position: -38vw -175vw,top;
      }
  }

  .bg01 {
    padding: 5px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .special-box {
    .title {
      width: 90%;
    }
  }
}
</style>
