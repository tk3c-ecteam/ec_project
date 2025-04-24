<template>
  <div id="icewash-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2504/title2.png')" />
      </h2>
    </div>

    <div class="background2"></div>
    <p class="item">
      <img :src="$filters.siteUrl('icewash2209/images/2504/pp.png')" />
    </p>

    <!-- 最高現折 -->
    <section class="sale-box mt:-6%" id="sale" v-if="isSale && product2[menuDis] != ''">
      <h2 class="title">
        <a :href="$filters.addGALink(saleUrl)" target="_blank">
           <img :src="$filters.siteUrl('icewash2209/images/2504/S1.png')" />
        </a>
      </h2>
      <div class="sale">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'sale-pro'"></listF>
      </div>
    </section>

    <!-- 獨家活動 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2504/S2.png')" />
      </h2>

      <!-- 活動搶先看 -->
      <div class="w:80% w:90%@<992 w:full@<576 m:auto">
        <swiper
        :loop="false"
        :autoplay="{
          delay:1800,
          disableOnInteraction:false
        }"
        :effect="'fade'"
        :fadeEffect="{
          crossFade:true
        }"
        :modules="[EffectFade]"
        :pagination="{
          el:'.gift-box .page',
          clickable:true
        }"
        >
        <swiper-slide>
         <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=14374')" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2504/e1_a.png')" />
          </a>
        </swiper-slide>
        <swiper-slide>
         <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=12524')" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2504/e2_a.png')" />
          </a>
        </swiper-slide>
        <swiper-slide>
         <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=49125')" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2504/e3_a.png')" />
          </a>
        </swiper-slide>
        </swiper>
         <div class="swiper-pagination page"></div>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box scroll" titles="政府補助" id="sub">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2504/S3.png')" />
      </h2>
      <ul class="gap:10 ai:flex-start">
        <li class="w:40% w:44%@<992 w:95%@<576">
          <img :src="$filters.siteUrl('icewash2209/images/2504/sub1.png')" loading="lazy" />
        </li>
        <li class="flex flex-direction:column w:40% w:44%@<992 w:95%@<576">
          <a class="mb:2%" @click="alert">
            <img :src="$filters.siteUrl('icewash2209/images/2504/sub2.png')" />
          </a>
          <a class="mb:2%" :href="$filters.addGALink('https://save3000.moeaea.gov.tw/subsidy02/index/index.aspx')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2504/sub3.png')"/>
          </a>
        </li>
        <li class="w:81% w:90%@<992 w:95%@<576">
          <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/green_subsidy/index.html')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2504/sub4.png')" loading="lazy" />
          </a>
        </li>
      </ul>

      <!-- 彈出視窗 -->
       <AlertBox ref="alert" :type="'image'">
          <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="80%">
          <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="80%">
       </AlertBox>
    </section>

    <!-- 商品樓層 -->
    <div class="pro-group">
      <section class="pro-area scroll" v-for="(tab, t) in tabs[0]" :titles="tab[0].text" :key="t"
        :class="`tab${Number(t) + 1}-box`" :id="`tab${Number(t) + 1}`">
        <h2 class="title" :class="[t == 2 || t == 3 ? 'single-url' : '']">
          <a :href="$filters.addGALink(tab[0].url)" target="_blank">
            <img :src="$filters.siteUrl(tab[0].title)" />
          </a>
        </h2>

        <div v-if="tab[0].content != undefined">
          <Tabs :tabs="tab[0].content">
            <template v-slot="{ selectedTab }">
              <TabContent :isSwiper="1" v-for="(content, c) in tab[0].content" :menus="content.id" :index="c"
                :selectedTab="selectedTab">

              </TabContent>
            </template>
          </Tabs>

        </div>

        <div v-else>
         <listF :pro="product2[tab[0].id]" :isSwiper="1" :name="`po${t + 1}`">
          </listF>
        </div>
      </section>
    </div>
  </div>

  <!-- 左側選單+手機版 -->
  <LeftAside :asides="asides"></LeftAside>

  <!-- 右側選單 -->
  <RightAside :asides="asides"></RightAside>
</template>

<script>
import { EffectFade } from "swiper/modules";
export default {
  data() {
    return {
      EffectFade,
      tabs: [
        {
          0: [
            {
              text:'熱銷強品',
              title: 'icewash2209/images/2504/S4.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  id:4423,
                  image: 'icewash2209/images/2504/S4-btm01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  id:7086,
                  image: 'icewash2209/images/2504/S4-btm02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          1: [
            {
              text:'超夯新品',
              title: 'icewash2209/images/2504/S5.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  id:5540,
                  image:'icewash2209/images/2504/S4-btm01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  id:7087,
                  image:'icewash2209/images/2504/S4-btm02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          2: [
            {
              text:'冰箱',
              title: 'icewash2209/images/2504/S6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740',
              content: [
                {
                  id:5983,
                  image: 'icewash2209/images/2504/S6-btm01.png'
                },
                {
                  id:5982,
                  image: 'icewash2209/images/2504/S6-btm02.png'
                },
                {
                  id:5981,
                  image: 'icewash2209/images/2504/S6-btm03.png'
                }
              ]
            }
          ],
          3: [
            {
              text:'洗衣機',
              title: 'icewash2209/images/2504/S7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641',
              content: [
                {
                  id:7091,
                  image: 'icewash2209/images/2504/S7-btm03.png'
                },
                {
                  id:7092,
                  image: 'icewash2209/images/2504/S7-btm02.png'
                },
                {
                  id:7093,
                  image: 'icewash2209/images/2504/S7-btm01.png'
                }
              ]
            }
          ],
          4: [
            {
              text:'乾衣機',
              id: 6024,
              title: 'icewash2209/images/2504/S8.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          5: [
            {
              text:'洗碗機',
              id: 3651,
              title: 'icewash2209/images/2504/S9.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=22912'
            }
          ]
        }
      ],
      statusPro: 0,
      isSale: true,
      today: new Date(),
      saleUrl: '',
      menuDis:6462, //現折券陳列編號
    }
  },
  mounted() {
    let {  today,tabs } = this

    this.fixedBg('.background2','.sub-box');

    // 2025/4/22 更新現折券連結
    if (today >= new Date('2025/04/22 10:00')) {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931&strPreView=y';
    } else {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947'
    }

    if (today >= new Date('2025/04/11') && today < new Date('2025/04/22 10:00')) this.isSale = false;

    //撈取現折券樓層商品
    this.getFloorSingle(this.menuDis)

    for (const [t, tab] of Object.entries(tabs[0])) {
      //撈取商品樓層 冰箱
      if (tab[0].content == undefined) {
         //無頁籤商品樓層
        this.getFloorSingle(tab[0].id)
      }
    }
  },
  methods: {
    message(id) {
      let infohtml = ''
      //活動辦法
      switch (id) {
        case 1:
          infohtml = `
              <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="90%">
          <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="90%">
          `
          break

        case 2:
          infohtml = `
            <img src="https://www.cdn-tkec.tw/image/UserFiles/sgs-2024-1.jpg" width="100%" loading="lazy">
            <img src="https://www.cdn-tkec.tw/image/UserFiles/sgs-2024-2.jpg" width="100%" loading="lazy">
          `
          break
      }

      Swal.fire({
        width: 900,
        html: infohtml,
        padding: '1em',
        showCloseButton: true,
        position: 'center',
        returnFocus: false,
        confirmButtonText: '確定',
        confirmButtonColor: '#46a5b0'
      })
    },
    alert() {
      this.$refs.alert.openAlert();
    }
  }
}
</script>

<style lang="scss">
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/icewash2209/images/2504/';
$origin: 'https://events.tk3c.com/events_net/events_net/icewash2209/images/2504/';

/*  共用樣式調整 */
body {
  background: #8fa580;
}

.bg01 {
  background: none;
}

/* 冰洗頁面*/
#icewash-container {
  .background {
     $image: $dir + "KVbg.png";
    @include bg-responsive($image, 2000, 1276);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px, top;
    padding-bottom: 66%;
    .title {
      width: 40%;
      position: absolute;
      left: 0;
      right: 0;
      top: 12%;
      margin: 0 auto;
      animation: bg-wave2 1.4s ease-in infinite;
    }
  }
}

.background2 {
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.jpg';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 60vw,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    &.fixed {
      position: fixed;
      top: 0;
      z-index: -2;
      background-position: 0 -112vw,top;
    }
}

section {
  .title {
    width: 50%;
  }
}

.pro-area {
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

.alert-box {
  .img-content {
    height: 70%;
    overflow: auto;
    padding: 0;
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #icewash-container {
    .background {
      background-size: 120% auto;
      background-position: -9vw 4vw,top;
      padding-bottom: 79vw;
      .title {
        width: 55%;
        top: 11vw;
      }
    }
  }

 .background2 {
   background-size: 120% auto;
      background-position:
        -9vw 0,
        top;
   &.fixed {
    background-position: 0 -135vw,top;
   }     
 }

  section {
    .title {
      width: 70%;
    }
  }

  .alert-box {
    .img-content {
      width: 50%;
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #icewash-container {
    .background {
      background-size: 180% auto;
      background-position: -38vw 21vw,top;
      padding-bottom: 130vw;
      .title {
        width: 80%;
        top: 29vw;
      }
    }
  }

  .background2 {
     background-size: 180% auto;
      background-position:
        -38vw 21vw,
        top;
    &.fixed {
      background-position: -37vw -185vw,top;
    }      
  }

  section {
    .title {
      width: 100%;
      margin: 0 auto 3%;
    }
  }

  .pro-area {
    .tab {
      margin-bottom: 0 !important;
      .swiper-slide {
        flex-basis: 40%;
      }
    }
  }

  .tab3-box,
  .tab4-box{
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  .alert-box {
    .img-content {
      width: 90%;
    }
  }
}
</style>
