<template>
  <div id="icewash-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2502/title4.png')" alt=" " />
      </h2>

      <div class="product">
        <swiper :loop="true" :autoplay="{ 
          delay: 1800, 
          disableOnInteraction: false }" :parallax="true" :effect="'fade'" :fadeEffect="{
            crossFade:true
          }" :modules="[EffectFade, Parallax]">
          <swiper-slide v-for="pro in proICE">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <p class="flower">
        <img :src="$filters.siteUrl('icewash2209/images/2502/flower.png')" alt=" " />
      </p>
    </div>

     <canvas id="particle_canvas"></canvas>
    <div class="background2"></div>

    <p class="item t1">
      <img :src="$filters.siteUrl('icewash2209/images/2502/bling_left.png')" alt=" " />
    </p>
    <p class="item t2">
      <img :src="$filters.siteUrl('icewash2209/images/2502/bling_right.png')" alt=" " />
    </p>

    <!-- 最高現折 -->
    <section class="sale-box" id="sale" v-if="isSale && product2[menuDis] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2310/dis_title.png')" />
      </h2>
      <div class="sale">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'sale-pro'"></listF>
        <a class="more" :href="$filters.addGALink(saleUrl)" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2405/MORE.png')" />
        </a>
      </div>
    </section>

    <!-- 獨家活動 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2501/gift_title.png')" />
      </h2>

      <!-- 活動搶先看 -->
      <div class="w:45% w:75%@<992 w:full@<576 m:auto">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=123829')" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2501/gift1.png')" />
        </a>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2501/sub_title.png')" alt="" />
      </h2>
      <ul class="gap:10">
        <li class="w:40% w:44%@<992 w:95%@<576">
          <img :src="$filters.siteUrl('icewash2209/images/2501/sub1.png')" alt=" " />
        </li>
        <li class="flex flex-direction:column w:40% w:44%@<992 w:95%@<576">
          <a class="mb:2%" @click="message(1)">
            <img :src="$filters.siteUrl('icewash2209/images/2501/sub2.png')" alt="" />
          </a>
          <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/green_subsidy/index.html')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2501/sub3.png')" alt="" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 商品樓層 -->
    <div class="pro-group">
      <section class="pro-area scroll" v-for="(tab, t) in tabs[0]" :key="t" :class="`tab${Number(t) + 1}-box`"
        :id="`tab${Number(t) + 1}`">
        <h2 class="title">
          <a :href="$filters.addGALink(tab[0].url)" target="_blank">
            <img :src="$filters.siteUrl(tab[0].title)" />
          </a>
        </h2>

        <div v-if="tab[0].content != undefined">
          <Tabs :isSwiper="1" :tabs="tab[0].content">
            <template v-slot="{ selectedTab }">
              <TabContent :isSwiper="1" v-for="(content, c) in tab[0].content" :menus="tab[0].menu[c]" :index="c"
                :selectedTab="selectedTab">

              </TabContent>
            </template>
          </Tabs>

        </div>

        <div v-else>
          <listF :pro="product2[tab[0].menu]" :isSwiper="1" :name="`po${t + 1}`">
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

<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
      proICE: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=254853',
          image: 'icewash2209/images/2502/254853.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=199534',
          image: 'icewash2209/images/2502/199534.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=239116',
          image: 'icewash2209/images/2502/239116.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=226738',
          image: 'icewash2209/images/2502/226738.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=223496',
          image: 'icewash2209/images/2502/223496.png'
        },
          {
          url: 'https://www.tk3c.com/pt.aspx?pid=252990',
          image: 'icewash2209/images/2502/252990.png'
        }
      ],
      tabs: [
        {
          0: [
            {
              menu: [4423,7086],
              title: 'icewash2209/images/2501/S1.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  image: 'icewash2209/images/2501/S1-btm01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  image: 'icewash2209/images/2501/S1-btm02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          1: [
            {
              menu: [5540,7087],
              title: 'icewash2209/images/2501/S2.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  image:'icewash2209/images/2501/S1-btm01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  image:'icewash2209/images/2501/S1-btm02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          2: [
            {
              title: 'icewash2209/images/2501/S3.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740',
              menu: [5983, 5982, 5981],
              content: [
                {
                  image: 'icewash2209/images/2501/S3-btm01.png'
                },
                {
                  image: 'icewash2209/images/2501/S3-btm02.png'
                },
                {
                  image: 'icewash2209/images/2501/S3-btm03.png'
                }
              ]
            }
          ],
          3: [
            {
              title: 'icewash2209/images/2501/S4.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641',
              menu: [5984,5986,5987],
              content: [
                {
                  image: 'icewash2209/images/2501/S4-btm03.png'
                },
                {
                  image: 'icewash2209/images/2501/S4-btm02.png'
                },
                {
                  image: 'icewash2209/images/2501/S4-btm01.png'
                }

              ]
            }
          ],
          4: [
            {
              menu: 6024,
              title: 'icewash2209/images/2501/S5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          5: [
            {
              menu: 3651,
              title: 'icewash2209/images/2501/S6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=22912'
            }
          ]
        }
      ],
      asides:[
        {
          text:'熱銷強品',
          href:'#tab1'
        },
        {
          text:'超夯新品',
          href:'#tab2'
        },
        {
          text:'冰箱',
          href:'#tab3'
        },
        {
          text:'洗衣機',
          href:'#tab4'
        },
        {
          text:'乾衣機',
          href:'#tab5'
        },
        {
          text:'洗碗機',
          href:'#tab6'
        }

      ],
      menuDis: 6462, //現折券後台清單編號
      statusPro: 0,
      isSale: false,
      today: new Date(),
      saleUrl: '',
    }
  },
  mounted() {
    let { menuDis, tabs, today } = this

    this.fixedBg('.background2','.sale-box');

    //撈取現折券樓層商品
    this.getFloorSingle(menuDis)

    for (const [t, tab] of Object.entries(tabs[0])) {
      //撈取商品樓層 冰箱
 
      if (tab[0].content != undefined) {
        this.getFloorData(tab[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(tab[0].menu)
      }
    }

    // 2025/01/14 顯示現折券樓層
    if (today >= new Date('2025/01/14')) {
      this.isSale = true
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124236&aid=23905&strPreView=y'
    } else {
      this.saleUrl = 'hhttps://www.tk3c.com/dictitleurl.aspx?cid=124130&strPreView=y'
    }
  },
  methods: {
    message(id) {
      let infohtml = ''
      //活動辦法
      switch (id) {
        case 1:
          infohtml = `
              <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
          <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
          `
          break

        case 2:
          infohtml = `
            <img src="https://www.cdn-tkec.tw/image/UserFiles/sgs-2024-1.jpg" width="100%">
            <img src="https://www.cdn-tkec.tw/image/UserFiles/sgs-2024-2.jpg" width="100%">
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
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/icewash2209/images/2502/';
$origin: 'https://events.tk3c.com/events_net/events_net/icewash2209/images/2502/';

/*  共用樣式調整 */
.bg01 {
  background: none;
  margin: 0 auto 2%;
}

section {
  .title {
    width: 50%;
  }
  .swiper-wrapper {
    padding-bottom: 10px;
    box-sizing: border-box;
  }
}

/* 冰洗頁面*/
#icewash-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 40%;
    .title {
      width: 25%;
      position: absolute;
      left: 25%;
      top: 17%;
      margin: 0 auto;
      animation: flipInY 1.7s linear;
    }
    .product {
      width:25%;
      position: absolute;
      top: 17%;
      right: 26%;
      .swiper-wrapper {
        align-items: baseline;
      }
    }
    .flower {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 45px;
    }
  }
}

.background2 {
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
    &.fixed {
      position: fixed;
      top: 0;
      z-index: -2;
    }
}

.item {
  width: 5%;
  position: absolute;
  &.t1 {
    left: 2%;
    right: unset;
    top: 150px;
  }
  &.t2 {
    left: unset;
    right: 2%;
    top: 520px;
  }
}


.pro-area {
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #icewash-container {
    .background {
      padding-bottom: 62vw;
      .title {
        width: 40%;
        top: 12vw;
        left: 11vw;
      }
      .product {
        width: 40%;
        right: 11vw;
        top: 13vw;
      }
    }
  }

 .background2 {
   background-size: 120% auto;
      background-position:
        -10vw 4vw,
        top;
 }

  section {
    .title {
      width: 80%;
    }
  }

  .tab3-box,
  .tab4-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #icewash-container {
    .background {
      padding-bottom: 215vw;
      .title {
        width: 90%;
        left: 0;
        right: 0;
        top: 16vw;
      }
      .product {
        width: 90%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 110vw;
      }
    }
  }

  .background2 {
     background-size: 180% auto;
      background-position:
        -40vw 10vw,
        top;
  }

  section {
    .title {
      width: 100%;
      margin: 0 auto 2%;
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
}
</style>
