<template>
  <Template618 :contents="contents">
    <template #items>
        <p class="items i1">
          <img :src="$filters.siteUrl('coolcleantech/images/item1.png')" />
        </p>
        <p class="items i2">
          <img :src="$filters.siteUrl('coolcleantech/images/item2.png')" />
        </p>
      </template>

    <template #board-image>
      <img class="pc" :src="$filters.siteUrl('tv_media/images/BOX_PC.png')" />
      <img class="mobile" :src="$filters.siteUrl('tv_media/images/BOX_M2.png')" />
    </template>

    <template #content>
      <!-- 獨家指定滿額最高折3000 -->
      <section class="scroll" titles="獨家指定滿額" id="sale2">
        <h2 class="title">
          <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124485&aid=23994&strPreView=y')" target="_blank">
            <img :src="$filters.siteUrl('coolcleantech/images/S11.png')">
          </a>
        </h2>

        <div>
          <listF :pro="product2[menuDis2]" :isSwiper="1" :name="'sale2-pro'"></listF>
        </div>
      </section> 

      <!-- 最高現折 -->
      <section class="sale-box scroll" id="sale" titles="領券現折" v-if="isSale && product2[menuDis] != ''">
        <h2 class="title">
          <a :href="$filters.addGALink(saleUrl)" target="_blank">
            <img :src="$filters.siteUrl('coolcleantech/images/S10.png')">
          </a>
        </h2>
        <div class="sale">
          <listF :pro="product2[menuDis]" :isSwiper="1" :name="'sale-pro'"></listF>
        </div>
      </section>

      <!-- 政府補助 -->
      <section class="sub-box">
        <h2 class="title">
          <img :src="$filters.siteUrl('coolcleantech/images/S02.png')" />
        </h2>
        <ul class="gap:10 ai:flex-start">
          <li class="w:39% w:47%@<992 w:95%@<576">
            <img :src="$filters.siteUrl('coolcleantech/images/sub1.png')" loading="lazy" />
          </li>
          <li class="flex flex-direction:column w:40% w:48%@<992 w:95%@<576">
            <a class="mb:2%" @click="alert">
              <img :src="$filters.siteUrl('coolcleantech/images/sub2.png')" />
            </a>
            <a class="mb:2%" :href="$filters.addGALink('https://save3000.moeaea.gov.tw/subsidy02/index/index.aspx')"
              target="_blank">
              <img :src="$filters.siteUrl('coolcleantech/images/sub3.png')" />
            </a>
          </li>
          <li class="w:80% w:96%@<992 w:95%@<576">
            <a :href="$filters.addGALink('https://events.tk3c.com/events_net/events_net/green_subsidy/index.html')"
              target="_blank">
              <img :src="$filters.siteUrl('coolcleantech/images/sub4.png')" loading="lazy" />
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
    </template>
  </Template618>
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
              title: 'coolcleantech/images/S03.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  id:8089,
                  image: 'coolcleantech/images/BTN01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  id:8090,
                  image: 'coolcleantech/images/BTN02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          1: [
            {
              text:'超夯新品',
              title: 'coolcleantech/images/S04.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              content:[
                {
                  id:8091,
                  image:'coolcleantech/images/BTN01.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
                },
                {
                  id:8092,
                  image:'coolcleantech/images/BTN02.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
                }
              ]
            }
          ],
          2: [
            {
              text:'容量',
              title: 'coolcleantech/images/S05.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740',
              content: [
                {
                  id:8093,
                  image: 'coolcleantech/images/BTN05.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740'
                },
                {
                  id:8094,
                  image: 'coolcleantech/images/BTN04.png',
                   url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740'
                },
                {
                  id:8095,
                  image: 'coolcleantech/images/BTN03.png',
                   url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740'
                },
                {
                  id:8096,
                  image: 'coolcleantech/images/BTN08.png',
                  url:"https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581"
                },
                {
                  id:8097,
                  image: 'coolcleantech/images/BTN07.png',
                  url:"https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581"
                },
                {
                  id:8098,
                  image: 'coolcleantech/images/BTN06.png',
                  url:"https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581"
                },
              ]
            }
          ],
          3: [
            {
              text:'門數/功能',
              title: 'coolcleantech/images/S06.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937',
              content: [
                {
                  id:8099,
                  image: 'coolcleantech/images/BTN10.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937'
                },
                {
                  id:8100,
                  image: 'coolcleantech/images/BTN09.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937'
                },
                {
                  id:8101,
                  image: 'coolcleantech/images/BTN11.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641'
                },
                {
                  id:8102,
                  image: 'coolcleantech/images/BTN12.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641'
                },
                {
                  id:8103,
                  image: 'coolcleantech/images/BTN13.png',
                  url:'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641'
                }
              ]
            }
          ],
           4: [
            {
              text:'冷凍櫃',
              id: 8104,
              title: 'coolcleantech/images/S07.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=7101'
            }
          ],
          5: [
            {
              text:'乾衣機',
              id: 8105,
              title: 'coolcleantech/images/S08.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          6: [
            {
              text:'洗碗機',
              id: 8106,
              title: 'coolcleantech/images/S09.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=22912'
            }
          ]
        }
      ],
      statusPro: 0,
      isSale: true,
      today: new Date(),
      saleUrl: '',
      menuDis2:8228,//獨家指定滿額陳列編號
      menuDis:8107, //現折券陳列編號
      contents:[
        {
          type:'summer',
          title:'coolcleantech/images/title619.png',
          spImage:'tv_media/images/sp_bg.png',
          menuPro:8088,
          specials:[
            {
              image:'coolcleantech/images/C01.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=124485&aid=23995&hid=124826&strPreView=y'
            },
            {
              image:'coolcleantech/images/C02.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=124485&aid=23986&hid=124761'
            },
            {
              image:'coolcleantech/images/C03.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=124485&aid=23943&hid=124748'
            },
            {
              image:'coolcleantech/images/C04.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=124485&aid=23943&hid=124747'
            },
          ],
          gifts: [
            {
              image: 'coolcleantech/images/sp01.png',
              url: 'https://www.lg.com/tw/promotions/2025-cny-sp/'
            },
            {
              image: 'coolcleantech/images/sp02.png',
              url: 'https://event.hitachi-homeappliances.com.tw/reg.aspx?id=2086'
            },
            {
              image: 'coolcleantech/images/sp03.png',
              url: 'https://tw.sharp/news/2025-apr-aug'
            },
            {
              image: 'coolcleantech/images/sp04.png',
              url: 'https://www.mitsubishielectric.com.tw/home/refrigerator/event-250501/'
            },
          ],
        }
      ],
    }
  },
  mounted() {
    let {  today,tabs } = this

    // 更新現折券連結
    if (today >= new Date('2025/06/01')) {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947&strPreView=y';
    } else {
      this.saleUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931'
    }

     //撈取獨家指定滿額樓層商品
     this.getFloorSingle(this.menuDis2)

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
/*  共用樣式調整 */
body {
  background: #c0e2fc;
}

.bg01 {
  background: #0e74f0;
  border-radius: 10px;
  box-sizing: border-box;
}

.background {
  &.summer {
    .title {
      top: 2%;
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
  .bg01 {
    margin: 0 auto 2%;
  }
}


.tab3-box {
  .tab {
    .swiper-slide {
      flex-basis: 15.6%;
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

  .tab1-box,
    .tab2-box {
      .tab {
        .swiper-wrapper {
          justify-content: center;
        }
      }
    }
}

@include media-query('mobile', '576px') {
  .background {
    &.summer {
      .title {
      top: 19vw;
      }
    }
  }
}
</style>
