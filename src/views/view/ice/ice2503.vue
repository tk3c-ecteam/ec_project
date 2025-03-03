<template>
  <div id="icewash-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2503/title.png')" />
      </h2>

      <div class="box">
        <div class="product">
          <listF :pro="product2[menuPro]" :isSwiper="1" :name="'pro'"></listF>
        </div>
      </div>
    </div>

    <canvas id="particle_canvas"></canvas>
    <div class="background2"></div>

    <!-- 最高現折 -->
    <section class="sale-box" id="sale" v-if="isSale && product2[menuDis] != ''">
      <h2 class="title">
        <a :href="$filters.addGALink(saleUrl)" target="_blank">
           <img :src="$filters.siteUrl('icewash2209/images/2503/S1.png')" />
        </a>
      </h2>
      <div class="sale">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'sale-pro'"></listF>
      </div>
    </section>

    <!-- 獨家活動 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2503/S2.png')" />
      </h2>

      <!-- 活動搶先看 -->
      <div class="w:80% w:90%@<992 w:full@<576 m:auto">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=14374')" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2503/S2-e1.png')" />
        </a>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box scroll" titles="政府補助" id="sub">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2503/S3.png')" alt="" />
      </h2>
      <ul class="gap:10 ai:flex-start">
        <li class="w:40% w:44%@<992 w:95%@<576">
          <img :src="$filters.siteUrl('icewash2209/images/2503/sub1.png')" alt=" " />
        </li>
        <li class="flex flex-direction:column w:40% w:44%@<992 w:95%@<576">
          <a class="mb:2%" @click="message(1)">
            <img :src="$filters.siteUrl('icewash2209/images/2503/sub2.png')" alt="" />
          </a>
          <a class="mb:2%" :href="$filters.addGALink('https://save3000.moeaea.gov.tw/subsidy02/index/index.aspx')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2503/sub3.png')" alt="" />
          </a>
        </li>
        <li class="w:81% w:90%@<992 w:95%@<576">
          <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/green_subsidy/index.html')"
            target="_blank">
            <img :src="$filters.siteUrl('icewash2209/images/2503/sub4.png')" alt="" />
          </a>
        </li>
      </ul>
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

<script>
export default {
  data() {
    return {
      tabs: [
        {
          0: [
            {
              text:'熱銷強品',
              menu: [4423,7086],
              title: 'icewash2209/images/2503/S4.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  image: 'icewash2209/images/2503/S4-btm01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  image: 'icewash2209/images/2503/S4-btm02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          1: [
            {
              text:'超夯新品',
              menu: [5540,7087],
              title: 'icewash2209/images/2503/S5.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  image:'icewash2209/images/2503/S4-btm01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  image:'icewash2209/images/2503/S4-btm02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          2: [
            {
              text:'冰箱',
              title: 'icewash2209/images/2503/S6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740',
              menu: [5983, 5982, 5981],
              content: [
                {
                  image: 'icewash2209/images/2503/S6-btm01.png'
                },
                {
                  image: 'icewash2209/images/2503/S6-btm02.png'
                },
                {
                  image: 'icewash2209/images/2503/S6-btm03.png'
                }
              ]
            }
          ],
          3: [
            {
              text:'洗衣機',
              title: 'icewash2209/images/2503/S7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641',
              menu: [5984,5986,5987],
              content: [
                {
                  image: 'icewash2209/images/2503/S7-btm03.png'
                },
                {
                  image: 'icewash2209/images/2503/S7-btm02.png'
                },
                {
                  image: 'icewash2209/images/2503/S7-btm01.png'
                }

              ]
            }
          ],
          4: [
            {
              text:'乾衣機',
              menu: 6024,
              title: 'icewash2209/images/2503/S8.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          5: [
            {
              text:'洗碗機',
              menu: 3651,
              title: 'icewash2209/images/2503/S9.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=22912'
            }
          ]
        }
      ],
      menuPro:4423,//商品陳列編號
      menuDis: 6462, //現折券後台清單編號
      statusPro: 0,
      isSale: true,
      today: new Date(),
      saleUrl: '',
    }
  },
  mounted() {
    let { menuDis, tabs, today } = this

    this.fixedBg('.background2','.sale-box');

    //撈取商品樓層
    this.getFloorSingle(this.menuPro);

    //撈取現折券樓層商品
    this.getFloorSingle(menuDis)

    for (const [t, tab] of Object.entries(tabs[0])) {
      //撈取商品樓層 冰箱
 
      if (tab[0].content != undefined) {
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(tab[0].menu)
      }
    }

    // 2025/2/17 更新現折券連結
    if (today >= new Date('2025/02/17')) {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124362&aid=23927&strPreView=y';
    } else {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124306&aid=23922'
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
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/icewash2209/images/2503/';
$origin: 'https://events.tk3c.com/events_net/events_net/icewash2209/images/2503/';

/*  共用樣式調整 */
body {
  background: #ffcfdf;
}

.bg01 {
  background: none;
  margin: 0 auto 2%;
}

section {
  .title {
    width: 50%;
  }
}

/* 冰洗頁面*/
#icewash-container {
  .background {
     $image: $dir + "kv.png";
    @include bg-responsive($image, 2000, 1195);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px, top;
    padding-bottom: 62%;
    .title {
      width: 35%;
      position: absolute;
      left: 0;
      right: 0;
      top: 11%;
      margin: 0 auto;
      animation: rotate-fly-right 1.7s linear;
    }
    .box {
      width: 38%;
      height: 29rem;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      overflow: hidden;
      .product {
        width: 130%;
        margin: 0 auto 0;
      }
    }
  }
}

.background2 {
    width: 100%;
    height: 100%;
    $image: $dir + 'body.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 62vw,
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

.pro-area {
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '1600px') {
  #icewash-container {
    .background {
      background-size: 140% auto;
      background-position: -19.5vw 45px,top;
      padding-bottom: 93%;
      .title {
        width: 45%;
        top: 12%;
      }
      .box {
        width: 52%;
        height: 33rem;
        top: 46%;
        .product {
          width: 145%;
        }
      }
    }
  }
}
@include media-query('mobile', '1200px') {
   #icewash-container {
    .background {
      background-size: 145% auto;
      background-position: -22vw 45px,top;
      padding-bottom: 94%;
      .box {
        width: 52%;
        height: 24rem;
        top: 49%;
        .product {
          width: 145%;
        }
      }
    }
   }

   .background2 {
    background-size: 145% auto;
    background-position: -22vw 62vw,top;
   }
}
@include media-query('mobile', '992px') {
  #icewash-container {
    .background {
      background-size: 205% auto;
      background-position: -52.5vw 4vw,top;
      padding-bottom: 130vw;
      .title {
        width: 65%;
        top: 12vw;
      }
      .box {
        width: 75%;
        height: 100%;
        top: 61vw;
        .product {
          width: 100%;
        }
      }
    }
  }

 .background2 {
   background-size: 205% auto;
      background-position:
        -52.5vw 62vw,
        top;
 }

  section {
    .title {
      width: 90%;
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
@include media-query('pad', '577px','760px') {
  #icewash-container {
    .background {
      $image:$dir + 'kvM.png';
      @include bg-responsive($image, 400, 1000);
      background-position: 0 10vw,top;
      padding-bottom: 200vw;
       .title {
        width: 90%;
        left: 0;
        right: 0;
        top: 16vw;
      }
      .box {
        width: 85%;
        height: 100%;
        top: 89vw;
        .product {
          width: 145%;
        }
      }
    }
  }
}
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #icewash-container {
    .background {
      $image:$dir + 'kvM.png';
      @include bg-responsive($image, 400, 1000);
      background-position: 0 21vw,top;
      padding-bottom: 215vw;
      .title {
        width: 95%;
        left: 0;
        right: 0;
        top: 29vw;
      }
      .box {
        width: 90%;
        height: auto;
        top: 91vw;
        .product {
          width: 100%;
        }
      }
    }
  }

  .background2 {
     background-size: 250% auto;
      background-position:
        -40vw 10vw,
        top;
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
}

@include media-query('pc', '2000px') {
  #icewash-container{
    .background {
      .box {
        height: 24vmax;
      }
    }
  }
}
</style>
