<template>
   <Template618 :contents="contents">
      <template #board-image>
        <img class="pc" :src="$filters.siteUrl('tv_media/images/BOX_PC.png')" />
        <img class="mobile" :src="$filters.siteUrl('tv_media/images/BOX_M2.png')" />
      </template>

      <template #items>
        <p class="items i1">
          <img :src="$filters.siteUrl('tv_media/images/item1.png')" />
        </p>
        <p class="items i2">
          <img :src="$filters.siteUrl('tv_media/images/item3.png')" />
        </p>
        <p class="items i3">
          <img :src="$filters.siteUrl('tv_media/images/item2.png')" />
        </p>
      </template>

      <template #content>
        <!-- 房東精選 -->
        <section class="home-box scroll" titles="房東精選" id="home">
          <h2 class="title">
            <img :src="$filters.siteUrl('tv_media/images/S01.png')" />
          </h2>
          <listF :pro="product2[menuHome]"></listF>
        </section>

        <!-- 現折券 -->
        <section class="discount-box" titles="領券再現折" id="dis" v-if="isDis && product2[menuDis] != ''">
          <h2 class="title">
            <img :src="$filters.siteUrl('tv_media/images/S02.png')" />
          </h2>

          <div class="discount">
            <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
            <a class="more" :href="$filters.addGALink(disUrl)" target="_blank">
              <img :src="$filters.siteUrl('2020TVforever/images/2504/btn-more.png')" />
            </a>
          </div>
        </section>

        <!-- 福利 -->
        <section class="sale-group scroll" titles="福利品出清" id="sale">
          <h2 class="title">
            <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=89383&aid=23950&hid=124542')"
              target="_blank">
              <img :src="$filters.siteUrl('tv_media/images/S03.png')" />
            </a>
          </h2>

          <div class="content">
            <Tabs :tabs="saleTab" :statusSelect="1">
              <template v-slot="{ selectedTab }">
                <TabContent :isSwiper="1" v-for="(sale, c) in saleTab" :menus="sale.id" :index="c"
                  :selectedTab="selectedTab">
                </TabContent>
              </template>
            </Tabs>
          </div>
        </section>

        <!-- 夜間下殺 -->
        <section class="night-box" v-if="product2[menuNight[n]]">
          <h2 class="title">
            <a :href="$filters.addGALink('https://events.tk3c.com/events_net/nightsale/index.html')" target="_blank">
              <img :src="$filters.siteUrl('tv_media/images/S04.png')" />
            </a>
          </h2>

          <div>
            <listF :pro="product2[menuNight]"></listF>
          </div>
        </section>

        <!-- 品牌 -->
        <section class="brand-group scroll" titles="人氣大牌" id="brand">
          <h2 class="title">
            <img :src="$filters.siteUrl('tv_media/images/S05.png')" />
          </h2>

          <swiper class="overflow:hidden" :autoplay="{
            delay: 1600,
            disableOnInteraction: false
          }" :space-between="10" :breakpoints="{
          0: {
            slidesPerView: 2,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          600: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          992: {
            slidesPerView: 6,
            grid: {
              fill: 'row',
              rows: 2
            }
          }
        }" :pagination="{
          el: '.brand-group .swiper-pagination'
        }" :style="{
          '--swiper-pagination-color': '#fff'
        }">
            <swiper-slide v-for="(brand, b) in brands" :key="b">
              <a :href="$filters.addGALink(brand.url)" target="_blank">
                <img :src="$filters.siteUrl(brand.image)" alt="" />
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </section>
      </template>
    </Template618>
</template>

<script>
export default {
  data() {
    return {
      brands: [
          {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=124295',
          image: 'tv_media/images/S05-TOSHIBA.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=40805',
          image: 'tv_media/images/S05-JVC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11336',
          image: 'tv_media/images/S05-SONY.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340',
          image: 'tv_media/images/S05-samsung.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: 'tv_media/images/S05-philips.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338',
          image: 'tv_media/images/S05-pana.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343',
          image: 'tv_media/images/S05-LG.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11346',
          image: 'tv_media/images/S05-sampo.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11353',
          image: 'tv_media/images/S05-BenQ.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=112906',
          image: 'tv_media/images/S05-AOC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: 'tv_media/images/S05-TCL.png'
        }
      ],
      saleTab: [
        { image: 'tv_media/images/S03-logo_01.png',id:8110 },
        { image: 'tv_media/images/S03-logo_03.png',id:8111 },
        { image: 'tv_media/images/S03-logo_04.png',id:8112 },
        { image: 'tv_media/images/S03-logo_02.png',id:8113 }
      ],
      contents: [
        {
          type:'summer',
          spImage:'tv_media/images/sp_bg2.png',
          title: 'tv_media/images/title_619b.png',
          menuPro: 8123,
          specials: [
            {
              image: 'tv_media/images/C01_a.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343'
            },
            {
              image: 'tv_media/images/C02_a.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338'
            },
            {
              image: 'tv_media/images/C03_a.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312'
            },
            {
              image: 'tv_media/images/C04_a.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340'
            },
          ],
          floors: [
            {
              url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
              image: 'tv_media/images/S06.png'
            },
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
              image: 'tv_media/images/S07.png'
            },
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
              image: 'tv_media/images/S08.png'
            },
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
              image: 'tv_media/images/S09.png'
            },
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
              image: 'tv_media/images/S10.png'
            },
            {
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
              image: 'tv_media/images/S11.png'
            },
            {
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
              image: 'tv_media/images/S12.png'
            },
            {
              url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
              image: 'tv_media/images/S13.png'
            }
          ],
          menus: [8115,8116,8117,8118,8119,8120,8121,8122],
          gifts:[
            {
              pc:'tv_media/images/gift_pc.png',
              mobile:'tv_media/images/gift_m.png',
              url:'https://tw.sharp/news/2025-apr-aug'
            }
          ]
        }
      ],
      menuDis: 8109, //現折 清單編號
      menuNight: 8114, //夜殺 陳列編號
      menuHome: 8108,
      status: 0,
      statusSale: 1,
      isNight: true,
      isDis: true,
      today: new Date(),
      disUrl: '',
    }
  },
  mounted() {
    const { menuDis, today } = this

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 房東精選樓層商品
    this.getFloorSingle(this.menuHome)

     //撈取 夜殺樓層商品
    this.getFloorSingle(this.menuNight)

    // 更新現折券連結
    if (today >= new Date('2025/06/01')) {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947&strPreView=y';
    } else {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931'
    }
  },
}
</script>

<style lang="scss">
/*  共用樣式調整 */
.bg01 {
  background: #c062cf;
  border-radius: 10px;
  box-sizing: border-box;
}

body {
  background: #fcccff;
}

/* 電視頁面區 */
.sale-group {
  .tab-content {
    .bg01 {
      margin: 0 auto 0;
    }
  }
  .tab {
    .swiper-slide {
      flex-basis: 16%;
    }
  }
}

.discount-box {
  .bg01 {
    margin: 0 auto 1%;
  }
}

.brand-group {
  .swiper-wrapper {
    justify-content: center;
  }
}

.special-box {
  .swiper-slide {
    width: 23.4% !important;
  }
}


/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
 .sale-group {
  .tab {
    .swiper-slide {
      flex-basis: 26%;
    }
    .swiper-wrapper {
      justify-content: left;
    }
  }
 }

 .brand-group {
  .swiper-wrapper {
    justify-content: left;
  }
 }

 .pro-group {
  .bg01 {
    width: 100%;
  }
 }

 .special-box {
  .swiper-slide {
    width: 31% !important;
  }
 }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .sale-group {
     .tab {
      .swiper-slide {
        flex-basis: 28%;
      }
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  .special-box {
    .swiper-slide {
      width: 47% !important;
    }
  }
}
</style>
