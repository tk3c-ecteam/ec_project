<template>
  <div id="icewash-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2505/title2.png')" />
      </h2>
    </div>


    <p class="item">
      <img :src="$filters.siteUrl('icewash2209/images/2505/item.png')" />
    </p>

    <!-- 上方凸品 -->
    <section class="top-group mt:-17% mt:-31vw@<992 mt:-51vw@<576">
      <img class="w:86% w:full@<992 abs left:0 right:0 m:auto top:-1vw z:-1 hidden@<992"
        :src="$filters.siteUrl('icewash2209/images/2505/KV_BOX.png')" />
      <div class="bg:#af7b58 w:85% w:full@<992 m:auto r:20px r:10px@<992 p:0|0|2%@<992 box:border-box">
        <ProductTop :pro="product2[menuTop]"></ProductTop>
      </div>
    </section>

    <!-- 最高現折 -->
    <section class="sale-box scroll" id="sale" titles="領券現折" v-if="isSale && product2[menuDis] != ''">
      <h2
        class="title bg:#5c5044 color:#fff f:3em f:3.5em@<992 f:1.5em@<576 f:bold r:15px r:10px@<576 p:5px box:border-box">
        領券現折
      </h2>
      <div class="sale">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'sale-pro'"></listF>
        <a class="more bg:#000!" :href="$filters.addGALink(saleUrl)" target="_blank">MORE</a>
      </div>
    </section>

    <!-- 獨家活動 -->
    <section class="gift-box scroll" titles="活動搶先看" id="gift">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2505/S01.png')" />
      </h2>

      <!-- 活動搶先看 -->
      <div class="w:80% w:95%@<992 w:full@<576 m:auto">
        <div class="sp1 rel">
          <swiper :loop="false" :effect="'fade'" :fadeEffect="{
            crossFade: true
          }" :autoplay="{
          delay: 1800,
          disableOnInteraction: false
        }" :modules="[EffectFade]">
            <swiper-slide>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=124485&aid=23943&hid=124748')"
                target="_blank">
                <img :src="$filters.siteUrl('icewash2209/images/2505/bn_sp1.jpg')" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=124485&aid=23943&hid=124747')"
                target="_blank">
                <img :src="$filters.siteUrl('icewash2209/images/2505/bn_sp2.jpg')" />
              </a>
            </swiper-slide>
          </swiper>
        </div>

        <div class="sp2 rel">
          <swiper :loop="false" :spaceBetween="10" :autoplay="{
            delay: 1800,
            disableOnInteraction: false
          }" :breakpoints="{
          0: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 3
          }
        }" :navigation="{
          nextEl: '.gift-box .next',
          prevEl: '.gift-box .prev'
        }">
            <swiper-slide>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=49125')"
                target="_blank">
                <img :src="$filters.siteUrl('icewash2209/images/2505/C01.png')" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=12524')"
                target="_blank">
                <img :src="$filters.siteUrl('icewash2209/images/2505/C02.png')" />
              </a>
            </swiper-slide>
            <swiper-slide>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=14374')"
                target="_blank">
                <img :src="$filters.siteUrl('icewash2209/images/2505/C03.png')" />
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev prev"></div>
          <div class="swiper-button-next next"></div>
        </div>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2505/S02.png')" />
      </h2>
      <ul class="gap:10 ai:flex-start">
        <li class="w:37.5% w:45%@<992 w:95%@<576">
          <img :src="$filters.siteUrl('icewash2209/images/2505/sub1.png')" loading="lazy" />
        </li>
        <li class="flex flex-direction:column w:40% w:48%@<992 w:95%@<576">
          <a class="mb:2%" @click="alert">
            <img :src="$filters.siteUrl('icewash2209/images/2505/sub2.png')" />
          </a>
          <a class="mb:2%" :href="$filters.addGALink('https://save3000.moeaea.gov.tw/subsidy02/index/index.aspx')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2505/sub3.png')" />
          </a>
        </li>
        <li class="w:80% w:90%@<992 w:95%@<576">
          <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/green_subsidy/index.html')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2505/sub4.png')" loading="lazy" />
          </a>
        </li>
      </ul>

      <!-- 彈出視窗 -->
      <AlertBox ref="alert" :type="'image'">
        <img
          src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg"
          width="50%">
        <img
          src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg"
          width="50%">
      </AlertBox>
    </section>

    <!-- 商品樓層 -->
    <div class="pro-group">
      <section class="pro-area scroll" v-for="(tab, t) in tabs[0]" :titles="tab[0].text" :key="t"
        :class="`tab${Number(t) + 1}-box`" :id="`tab${Number(t) + 1}`">
        <h2 class="title">
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
  <LeftAside></LeftAside>

  <!-- 右側選單 -->
  <RightAside :type="'mobile3'"></RightAside>
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
              title: 'icewash2209/images/2505/S03.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  id:4423,
                  image: 'icewash2209/images/2505/BTN01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  id:7086,
                  image: 'icewash2209/images/2505/BTN02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          1: [
            {
              text:'超夯新品',
              title: 'icewash2209/images/2505/S04.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  id:5540,
                  image:'icewash2209/images/2505/BTN01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  id:7087,
                  image:'icewash2209/images/2505/BTN02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          2: [
            {
              text:'容量',
              title: 'icewash2209/images/2505/S05.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740',
              content: [
                {
                  id:5983,
                  image: 'icewash2209/images/2505/BTN05.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740'
                },
                {
                  id:5982,
                  image: 'icewash2209/images/2505/BTN04.png',
                   url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740'
                },
                {
                  id:5981,
                  image: 'icewash2209/images/2505/BTN03.png',
                   url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740'
                },
                {
                  id:7090,
                  image: 'icewash2209/images/2505/BTN08.png',
                  url:"https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581"
                },
                {
                  id:7089,
                  image: 'icewash2209/images/2505/BTN07.png',
                  url:"https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581"
                },
                {
                  id:7088,
                  image: 'icewash2209/images/2505/BTN06.png',
                  url:"https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581"
                },
              ]
            }
          ],
          3: [
            {
              text:'門數/功能',
              title: 'icewash2209/images/2505/S06.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937',
              content: [
                {
                  id:7084,
                  image: 'icewash2209/images/2505/BTN10.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937'
                },
                {
                  id:7083,
                  image: 'icewash2209/images/2505/BTN09.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937'
                },
                {
                  id:7091,
                  image: 'icewash2209/images/2505/BTN11.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641'
                },
                {
                  id:7092,
                  image: 'icewash2209/images/2505/BTN12.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641'
                },
                {
                  id:7093,
                  image: 'icewash2209/images/2505/BTN13.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641'
                }
              ]
            }
          ],
           4: [
            {
              text:'冷凍櫃',
              id: 5980,
              title: 'icewash2209/images/2505/S07.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=7101'
            }
          ],
          5: [
            {
              text:'乾衣機',
              id: 6024,
              title: 'icewash2209/images/2505/S08.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          6: [
            {
              text:'洗碗機',
              id: 3651,
              title: 'icewash2209/images/2505/S10.png',
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
      menuTop:7871, //上方商品陳列編號
    }
  },
  mounted() {
    let {  today,tabs } = this

    // 更新現折券連結
    if (today >= new Date('2025/05/16')) {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931&strPreView=y';
    } else {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947'
    }

    //撈取上方凸品
    this.getFloorSingle(this.menuTop)

    //撈取現折券樓層商品
    this.getFloorSingle(this.menuDis)

    for (const [t, tab] of Object.entries(tabs[0])) {
      //撈取無頁籤商品樓層 
      if (tab[0].content == undefined) {
         //無頁籤商品樓層
        this.getFloorSingle(tab[0].id)
      }
    }
  },
  methods: {
    alert() {
      this.$refs.alert.openAlert();
    }
  }
}
</script>

<style lang="scss">
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/icewash2209/images/2505/';
$origin: 'https://events.tk3c.com/events_net/events_net/icewash2209/images/2505/';

/*  共用樣式調整 */
body {
  background: #f8e9d1;
   &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    z-index: -1;
  }
}

.bg01 {
  background: none;
}

.item {
  top: 250px;
}

/* 冰洗頁面*/
#icewash-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 51%;
    .title {
      width: 30%;
      position: absolute;
      left: 0;
      right: 0;
      top: 13%;
      margin: 0 auto;
      animation: blurFadeIn 1.4s ease-in;
    }
  }
}

.top-group {
  .bg01 {
    margin: 0 auto 0;
  }
}

.pro-area {
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

.tab3-box {
  .tab {
    .swiper-wrapper {
      justify-content: left;
    }
  }
}

.sale-box {
  .bg01,
  .title {
    margin: 0 auto 0;
  }
}

.alert-box {
  .img-content {
    height: 70%;
    overflow: auto;
    padding: 0;
  }
}

.tab3-box {
  .tab {
    .swiper-slide {
      flex-basis: 15.6%;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #icewash-container {
    .background {
      padding-bottom: 75vw;
      .title {
        width: 40%;
        top: 11vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
    }
  }

  .alert-box {
    .img-content {
      width: 50%;
    }
  }

  .tab3-box,
  .tab4-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
      .swiper-slide {
        flex-basis: fit-content;
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #icewash-container {
    .background {
      padding-bottom: 130vw;
      .title {
        width: 60%;
        top: 26vw;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -41vw 18vw,top;
    }
  }

  .pro-area {
    .tab {
      .swiper-slide {
        flex-basis: 40%;
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
