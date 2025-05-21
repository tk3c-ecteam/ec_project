<template>
  <div id="air-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__backInDown">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2501/title.png')" alt=" " />
      </h2>

      <h5 class="subtitle">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2501/st2.png')" alt=" " />
      </h5>

      <div class="product">
        <swiper :loop="true" :effect="'fade'" :fadeEffect="{
            crossFade: true
          }" :parallax="true" :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :modules="[EffectFade, Parallax]">
          <swiper-slide v-for="pro in proAir">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="background2"></div>

    <!-- 預約 -->
    <section class="gift-box" id="gift">
      <a class="w:70% w:90vw@<992 w:100%@<576"
        href="https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2" target="_blank"><img
          :src="$filters.siteUrl('airConditionerLAB/images/2410/bn_Site.png')" alt="" />
      </a>
    </section>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis && product2[menuDis] != ''">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s1.png')" alt="" />
      </h2>


      <div class="discount">
        <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
        <a class="more" :href="$filters.addGALink(disUrl)" target="_blank">MORE</a>
      </div>
    </section>

    <!-- 精選活動 -->
    <section class="special-box">
      <img class="w:full h:full abs top:4% top:6%@<992 top:8%@<576 left:0 right:0 m:auto z:-1"
        :src="$filters.siteUrl('airConditionerLAB/images/2410/box.png')" alt="" />
      <h2 class="w:23% w:30vw@<992 w:45vw@<576 m:0|auto|3%">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_ss1.png')" alt="" />
      </h2>

      <div class="special w:90% m:auto">
        <swiper :space-between="10" :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }" :breakpoints="{
            0: {
              slidesPerView: 1.2,
              grid: {
                fill: 'row',
                rows: 1
              }
            },
            600: {
              slidesPerView: 3,
              grid: {
                fill: 'row',
                rows: 3
              }
            },
            992: {
              slidesPerView: 3,
              grid: {
                fill: 'row',
                rows: 3
              }
            }
          }">
          <swiper-slide v-for="sp in specials">
            <a :href="$filters.addGALink(sp.url)" target="_blank">
              <img :src="$filters.siteUrl(sp.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-box scroll" id="brand">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s2.png')" alt="" />
      </h2>

      <Tabs :isSwiper="1" :tabs="brands">
        <template v-slot="{ selectedTab }">
          <TabContent :menus="menuBrand" :isSwiper="1" v-for="(brand, b) in brands" :banners="brand" :index="b" :selectedTab="selectedTab">

          </TabContent>
        </template>
      </Tabs>
    </section>

    <!-- 熱銷空調首選 -->
    <section class="hot-group scroll" id="hot">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/search.aspx?q=%E7%A9%BA%E8%AA%BF')" target="_blank">
          <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s3.png')" alt="" />
        </a>
      </h2>

      <listF :pro="product2[menuHot]" :isSwiper="1" :name="'hot'"></listF>
    </section>

    <!-- 冷暖空調 -->
    <section class="cold-group scroll" id="cold">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11225')" target="_blank">
          <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s4.png')" alt="" />
        </a>
      </h2>

      <listF :pro="product2[menuCold]"></listF>
    </section>

    <!-- 除濕機 -->
    <section class="wet-group scroll" id="wet">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881')" target="_blank">
          <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s8.png')" alt="" />
        </a>
      </h2>

      <listF :pro="product2[menuWet]"></listF>
    </section>

    <!-- 熊速配專區 -->
    <section class="bear-box scroll" id="bear">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2303/pro_title.jpg')" />
      </h2>
      <div class="bear">
        <listF :pro="product2[menuBear]" :isSwiper="1" :name="'bear'"></listF>
        <a class="more" :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11225')"
          target="_blank">點我看更多</a>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2501/bar_b.png')" alt="" />
      </h2>

      <ul>
        <li>
          <a :href="
              $filters.addGALink('https://events.tk3c.com/events_net/greenpoint.tk3c/index.html')
            " target="_blank">
            <img :src="$filters.siteUrl('airConditionerLAB/images/2501/b01.png')" alt="" />
          </a>
        </li>
        <li class="alert1">
          <a @click="message(2)">
            <img :src="$filters.siteUrl('airConditionerLAB/images/2501/b02.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 尊榮安裝 -->
    <section class="air-info scroll">
      <a id="vvip" :href="
          $filters.addGALink('https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2')
        " target="_blank">
        <img class="pc" :src="$filters.siteUrl('airConditionerLAB/images/2405/vvip.png')" />
        <img class="mobile" :src="$filters.siteUrl('airConditionerLAB/images/2402/vvip_br_m.png')" />
      </a>
    </section>

    <section class="info-box">
      <div class="content">
        <ul class="tab">
          <swiper id="infoTab" :space-between="10" :breakpoints="{
              0: {
                slidesPerView: 2.3
              },
              600: {
                slidesPerView: 4.8
              },
              992: {
                slidesPerView: 5
              }
            }" :modules="[Controller]" :controller="{
              control: [infoContent]
            }" @swiper="onSwiper">
            <swiper-slide v-for="(info, i) in infos[0]" :class="[statusInfo == i ? 'active' : '']" @click="goSlide(i)">
              <a @click="changeInfo(i)"><img :src="$filters.siteUrl(info[0].tab)" alt="" /></a>
            </swiper-slide>
          </swiper>
        </ul>
        <img class="tab-bg" :src="$filters.siteUrl('airConditionerLAB/images/2402/b_bg.png')" />
        <div class="move-area">
          <swiper :loop="false" :autoHeight="true" :effect="'fade'" :parallax="true"
            :modules="[EffectFade, Controller, Parallax]" id="infoContent" @swiper="onControlSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="(info, i) in infos[0]">
              <a data-swiper-parallax-opacity="0" :href="
                  $filters.addGALink(
                    'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
                  )
                ">
                <img class="pc scale(1.1)" :src="$filters.siteUrl(info[0].pc)" alt="" />
                <img class="mobile mt:-5%@<992" :src="$filters.siteUrl(info[0].mobile)" alt="" />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- 更多費用 -->
    <section class="info2-box">
      <div class="description">
        <p>
          <img class="pc" :src="$filters.siteUrl('airConditionerLAB/images/2402/c01.png')" />
          <img class="mobile" :src="$filters.siteUrl('airConditionerLAB/images/2402/c01_m.png')" />
        </p>

        <a class="alert" @click="message(4)"><img :src="$filters.siteUrl('airConditionerLAB/images/2402/c_bn.png')" />
        </a>
      </div>
    </section>

    <!-- banner -->
    <section class="event-box">
      <swiper class="pb:1%" :loop="true" :autoplay="{
          delay: 1800,
          disableOnInteraction: false
        }" :pagination="{
          el: '.event-box .swiper-pagination',
          clickable: true
        }">
        <swiper-slide v-for="event in events">
          <a :href="$filters.addGALink(event.url)" target="_blank">
            <img :src="$filters.siteUrl(event.image)" alt="" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </section>

    <section class="product-box scroll" v-for="(floor, f) in floors[0]" :class="`tab${Number(f) + 1}-box`"
      :id="`tab${Number(f) + 1}`">
      <h2 class="title">
        <a :href="$filters.addGALink(floor[0].url)" target="_blank">
          <img :src="$filters.siteUrl(floor[0].title)" />
        </a>
      </h2>

      <div class="content bg:#fee05f p:2%|0|0 box:border-box">
        <div v-if="floor[0].content != undefined">
          <Tabs :tabs="floor[0].content">
            <template v-slot="{ selectedTab }">
              <TabContent v-for="(content, c) in floor[0].content" :menus="floor[0].menu[c]" :index="c" :selectedTab="selectedTab">

              </TabContent>
            </template>
          </Tabs>
        </div>
        <listF v-else :pro="product2[floor[0].menu]"></listF>
      </div>
    </section>

    <!-- 影片 -->
    <AirVideo></AirVideo>
  </div>

  <!-- 右側選單+手機版 -->
  <RightAside :asides="asides" :type="'mobile2'"></RightAside>
</template>

<script setup>
import { Controller, EffectFade, Parallax } from 'swiper/modules'
import { ref } from 'vue'

const swiperRef1 = ref()
const swiperRef2 = ref()

const onSwiper = (swiper) => {
  swiperRef1.value = swiper
}

const onControlSwiper = (swiper) => {
  swiperRef2.value = swiper
}

const goSlide = (id) => {
  swiperRef2.value.slideTo(id)
  swiperRef1.value.slideTo(id)
}

//滑動後動作
const onSlideChange = (e) => {
  swiperRef1.value.slideTo(e.realIndex)
  $all('.info-box .tab .swiper-slide').forEach((el) => {
    el.classList.remove('active')
  })
  $all('.info-box .tab .swiper-slide')[e.realIndex].classList.add('active')
}
</script>

<script>
export default {
  data() {
    return {
      proAir: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=214072',
          image: 'airConditionerLAB/images/2501/214072_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=236542',
          image: 'airConditionerLAB/images/2501/236542_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=245236',
          image: 'airConditionerLAB/images/2501/245236_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=237457',
          image: 'airConditionerLAB/images/2501/237457_a.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=240642',
          image: 'airConditionerLAB/images/2501/240642_a.png'
        }
      ],
      specials: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123849',
          image: 'airConditionerLAB/images/2501/a01.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123855',
          image: 'airConditionerLAB/images/2501/a02.png'
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123858',
          image: 'airConditionerLAB/images/2501/a03.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123853',
          image: 'airConditionerLAB/images/2501/a04.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123854',
          image: 'airConditionerLAB/images/2501/a05.png'
        }
      ],
      brands: [
        {
          image: 'airConditionerLAB/images/2410/logo_panasonic.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11238',
          pc: 'airConditionerLAB/images/2410/brand_pana.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_panaM.jpg'
        },
        {
          image: 'airConditionerLAB/images/2410/logo_sampo.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11240',
          pc: 'airConditionerLAB/images/2410/brand_sampo.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_sampoM.jpg'
        },
        {
          image: 'airConditionerLAB/images/2410/logo_teco.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11239',
          pc: 'airConditionerLAB/images/2410/brand_teco.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_tecoM.jpg'
        },
        {
          image: 'airConditionerLAB/images/2410/logo_Heran.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=71512',
          pc: 'airConditionerLAB/images/2410/brand_her.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_herM.jpg'
        },
        {
          image: 'airConditionerLAB/images/2410/logo_sharp.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=122557&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_sharp.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_sharpM.jpg'
        }
      ],
      events: [
        {
          url: 'https://events.tk3c.com/events_net/2021airconditioning/index.html',
          image: 'airConditionerLAB/images/202301/bn01_b.jpg'
        },
        {
          url: 'https://www.tk3c.com/Events/2018Air/index.aspx',
          image: 'airConditionerLAB/images/1001/bn02.jpg'
        }
      ],
      floors: [
        {
          0: [
            {
              title: 'airConditionerLAB/images/2410/bra_s5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&strPreView=y',
              menu: [4288, 4289, 4290, 4291],
              content: [
                {
                  image: 'airConditionerLAB/images/2405/s2-1.png',
                  menu: 4288
                },
                {
                  image: 'airConditionerLAB/images/2405/s2-2.png',
                  menu: 4289
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&strPreView=y',
                  image: 'airConditionerLAB/images/2405/s2-3b.png',
                  menu: 4290
                },
                {
                  image: 'airConditionerLAB/images/2405/s2-4.png',
                  menu: 4291
                }
              ]
            }
          ],
          1: [
            {
              title: 'airConditionerLAB/images/2410/bra_s6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&strPreView=y',
              menu: [4292, 4293, 4294, 4295],
              content: [
                {
                  image: 'airConditionerLAB/images/2405/s3-1.png',
                  menu: 4292
                },
                {
                  image: 'airConditionerLAB/images/2405/s3-2.png',
                  menu: 4293
                },
                {
                  image: 'airConditionerLAB/images/2405/s3-3b.png',
                  menu: 4294
                },
                {
                  image: 'airConditionerLAB/images/2405/s3-4.png',
                  menu: 4295
                }
              ]
            }
          ],
          2: [
            {
              menu: 4130,
              title: 'airConditionerLAB/images/2410/bra_s7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=13580&strPreView=y'
            }
          ]
        }
      ],
      infos: [
        {
          0: [
            {
              tab: 'airConditionerLAB/images/2405/bn_01.png',
              pc: 'airConditionerLAB/images/2402/info_new1.png',
              mobile: 'airConditionerLAB/images/2402/info_new1m.png'
            }
          ],
          1: [
            {
              tab: 'airConditionerLAB/images/2405/bn_02.png',
              pc: 'airConditionerLAB/images/2402/info_new2.png',
              mobile: 'airConditionerLAB/images/2402/info_new2m.png'
            }
          ],
          2: [
            {
              tab: 'airConditionerLAB/images/2405/bn_03.png',
              pc: 'airConditionerLAB/images/2402/info_new3.png',
              mobile: 'airConditionerLAB/images/2402/info_new3m.png'
            }
          ],
          3: [
            {
              tab: 'airConditionerLAB/images/2405/bn_04.png',
              pc: 'airConditionerLAB/images/2402/info4.png',
              mobile: 'airConditionerLAB/images/2402/info4_m.png'
            }
          ],
          4: [
            {
              tab: 'airConditionerLAB/images/2405/bn_05.png',
              pc: 'airConditionerLAB/images/2402/info5.png',
              mobile: 'airConditionerLAB/images/2402/info5_m.png'
            }
          ]
        }
      ],
      asides:[
        {
          text: '強檔大牌',
          href:'#brand'
        },
        {
          text: '熱銷空調首選',
          href:'#hot'
        },
        {
          text: '冷暖空調',
          href:'#cold'
        },
        {
          text: '除濕機',
          href:'#wet'
        },
        {
          text: '熊速配專區',
          href:'#bear'
        },
        {
          text: 'VVIP尊榮安裝',
          href:'#vvip'
        },
        {
          text: '分離式空調',
          href:'#tab1'
        },
        {
          text: '窗型空調',
          href:'#tab2'
        },
        {
          text: '移動式冷氣',
          href:'#tab3'
        }
      ],
      menuDis: 5515, //現折 清單編號
      menuBear: 4148, //熊速配
      menuHot: 4127, //熱銷空調首選
      menuCold: 3695, //冷暖空調
      menuWet: 7466, //除濕機用
      menuBrand: [4414, 4416, 5516, 5517, 4655], //品牌 陳列編號
      statusBrand: 0, //品牌區專區
      statusTab:0, //商品樓層用
      statusInfo: 0,
      isDis: false,
      today: new Date(),
      disUrl: '',
      swiperBrand: null
    }
  },
  mounted() {
    const { floors, menuDis, menuBear, today, menuHot, menuCold, menuWet } = this

    //固定背景
    this.fixedBg('.background2', '.gift-box')

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 品牌樓層商品
    this.getFloorData(this.menuBrand)

    //撈取 熱銷空調樓層商品
    this.getFloorSingle(menuHot)

    //撈取 冷暖空調樓層商品
    this.getFloorSingle(menuCold)

    //撈取 除濕機樓層商品
    this.getFloorSingle(menuWet)

    //撈取熊速配樓層商品
    this.getFloorSingle(menuBear)

    for (const [f, floor] of Object.entries(floors[0])) {
      if (floor[0].content != undefined) {
        // 撈取有頁籤商品
        this.getFloorData(floor[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(floor[0].menu)
      }
    }


    if (today >= new Date('2025/01/14')) {
      this.isDis = true;
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124236&aid=23905&strPreView=y'
    } else {
      this.disUrl = 'https://www.tk3c.com/dictitleurl.aspx?cid=124130&strPreView=y'
    }
  },
  methods: {
    changeBrand(id) {
      if (event) {
        setTimeout(() => {
          this.statusBrand = id
        }, 30)
      }
    },
    changeTab(id) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(19)


        setTimeout(() => {
          this.showAndHide(id, `.${parentName}`)
        }, 20)
      }
    },
    changeInfo(id) {
      setTimeout(() => {
        this.statusInfo = id
      }, 150)
    },
    onSwiperBrand(swiper) {
      this.swiperBrand = swiper
    },
    goSlideBrand(id) {
      this.swiperBrand.slideTo(id)
    },
    message(id) {
      //活動辦法
      let infoHtml = ''

      switch (id) {
        case 1:
          //空調場勘預約預約抽好禮
          infoHtml = `
               <p style="color:red;font-weight:bold;margin-bottom:25px;text-align:left;">本活動需完成(1)預約空調場勘+(2)購買分離式空調+(3)安裝完成，請留意預約空調場勘時所填寫的聯絡地址及聯絡電話需與空調安裝地址及聯絡電話相同。</p>
           <ul style='text-align:left;'>
                    <li style='margin-bottom:10px';>1.凡於活動期間(2024/8/1~9/30)，於燦坤線上購物網站預約空調場勘，且於燦坤線上購物網站或燦坤實體門市以會員資格購買「全系列分離式空調(外機計)(下稱活動指定商品)」，並於2024/10/10前出貨/配送完成，且後續未退貨退款者，即可獲得本活動抽獎資格(1張發票1次抽獎機會)，將抽出1名送「DAIKIN 7坪閃流放電空氣清淨機MC30YSCT(227244)(市價$8,800)」。​</li>
                    <li style='margin-bottom:10px';>2.中獎名單將於2024/10/15公告於FACEBOOK粉絲專頁「燦坤3C」，並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
                    <li style='margin-bottom:10px';>3.中獎者請於2024/10/25前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。​</li>
                    <li style='margin-bottom:10px';>4.經核對符合活動條件者，燦坤3C會另行通知，請中獎者於2024/10/31前前往原消費門市領取(如為線上購買，燦坤3C會與中獎者確認領取門市)，如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄。​</li>
                    <li style='margin-bottom:10px';>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                    <li style='margin-bottom:10px';>6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
                    <li style='margin-bottom:10px';>8.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。​</li>
                    <li style='margin-bottom:10px';>9.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `
          break

        case 2:
          //政府補助 退貨
          infoHtml = `
           <img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
            <img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
        `
          break

        case 3:
          //政府補助 汰舊換新
          infoHtml = `
            <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-1.jpg" width="100%">
            <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-2.jpg" width="100%">
          `
          break

        case 4:
          //更多費用
          infoHtml = `
             <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2402/alert_price.png" width="100%" style="margin-bottom:30px">
                <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2402/alert_price2.png" width="100%" style="margin-bottom:30px">
                <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2402/alert_price3.png" width="100%" style="margin-bottom:30px"
          `
          break
      }

      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        confirmButtonText: '關閉',
        position: 'center',
        showCloseButton: true,
        confirmButtonColor: '#000',
        returnFocus: false
      })
    }
  }
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/airConditionerLAB/images/2501/";
$origin: "https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2501/";

/*  共用樣式調整 */
body {
  background: #701a0e;
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0, top;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -2;
    top: 0;
  }
}

.bg01 {
  background: #fee05f;
}

/* 空調頁面改版區 */
#air-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 55%;
    .title {
      width: 50%;
      position: absolute;
      left: 0;
      right: 0;
      top: 14%;
      margin: 0 auto;
      animation-duration: 1.8s;
      img {
        animation: zoomInNormal 1.8s linear;
        animation-delay: 2s;
      }
    }
    .subtitle {
      width: 30%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 30%;
      animation: flipX 1.5s linear;
    }
    .product {
      width: 55%;
      margin: 0 auto 0;
      position: absolute;
      right: 0;
      left: 0;
      top: 40%;
      margin: 0 auto;
      .swiper-wrapper {
        align-items: baseline;
      }
    }
  }
}

.background2 {
  width: 75%;
  height: 100%;
  $image: $dir + "kv_bg.png";
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 0, top;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  top: 45px;
  &.fixed {
    position: fixed;
    z-index: -2;
  }
}

.sub-box {
  padding-top: 3%;
  ul {
    li {
      width: 50%;
      margin: 0 5px 15px;
      &:nth-of-type(2) {
        width: 37%;
      }
    }
  }
  .air-info {
    margin: 2% auto 0;
  }
}

.info-box {
  .tab {
    position: relative;
    z-index: 10;
    margin-bottom: 1%;
    .box {
      width: 100%;
      overflow: hidden;
    }
    .swiper-slide {
      &.active {
        filter: hue-rotate(45deg);
      }
    }
    .swiper-wrapper {
      padding-bottom: 10px;
      box-sizing: border-box;
    }
  }
  .info {
    margin-bottom: 2%;
  }
  .tab-content {
    width: 100%;
    opacity: 0;
    a {
      transform: scale(1.15);
      margin-top: 1%;
    }
    &.active {
      opacity: 1 !important;
    }
    &.swiper-slide-active {
      z-index: 10;
      opacity: 1;
    }
  }
  .tab-bg {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 12%;
    z-index: -1;
  }
}

.info2-box {
  .description {
    p {
      width: 90%;
      margin: 1% auto 2%;
    }
    .alert {
      width: 50%;
    }
  }
}

.brand-box {
  .tab {
    width: 90%;
    margin: 0 auto 2%;
    li {
      filter: brightness(0.7);
      &.active {
        filter: brightness(1);
      }
    }
    .swiper-wrapper {
      align-items: baseline;
    }
  }
  .brand-tab {
    overflow: hidden;
    width: 100%;
  }
  .tab-content {
    width: 100%;
    margin: 0 auto;
    .banner {
      width: 99%;
      margin: 0 auto;
    }
    .swiper-slide {
      margin: 0 0;
    }
    .bg01 {
      margin: 0 auto 0;
      background: none;
      padding: 0 0.5% 0 0.5%;
      .itemF_img {
        border-radius: 0;
      }
    }
    .swiper-button-next {
      right: -35px;
    }
    .swiper-button-prev {
      left: -35px;
    }
    .brand {
      overflow: hidden;
    }
  }
  .content {
    width: 100%;
    margin: 0 auto;
  }
}

.video-box {
  @include flex-arrange;
  margin: 5% auto 3%;
  width: 100%;
  .youtube {
    width: 46%;
    height: 0;
    padding-bottom: 25%;
    position: relative;
    margin: 0 5px 2%;
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}

.discount-box {
  position: static;
  .dis {
    width: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    margin: 0 0;
  }
  .bg01 {
    margin: 0 auto 1%;
  }
  .more {
    background: #3785ff;
  }
}

.bear-box {
  .title {
    width: 100%;
    margin: 0 auto 0;
  }
  .bear {
    background: #fff;
    padding-bottom: 10px;
    .bg01 {
      background: #fff;
      margin: 0 auto 0;
    }
    .more {
      background: #000;
      margin: 0 auto 2%;
    }
  }
}

.tab-area {
  .tab {
    padding-top: 2%;
    box-sizing: border-box;
    margin-bottom: 0;
    li {
      width: 20%;
      margin: 0 5px 1%;
      filter: brightness(0.8);
      &.active {
        filter: brightness(1);
      }
    }
  }

  .content {
    background: #fee05f;
  }
}

.special-box {
  .special {
    .swiper-wrapper {
      align-items: baseline;
    }
  }
}

.gift-box {
  li {
    width: 46%;
    margin: 0 5px 2%;
    &.long {
      width: 95%;
    }
    &.order {
      a {
        position: relative;
        &:before {
          content: "";
          display: block;
          width: 10%;
          height: 80px;
          $image: $origin + "finger.png";
          background: url($image) no-repeat center;
          background-size: 100% auto;
          background-position: center top;
          position: absolute;
          right: 5%;
          margin: 0 auto;
          top: 32%;
          animation: upAndDown 0.8s linear infinite alternate;
        }
      }
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "1440px") {
  .background2 {
    width: 90%;
  }
}
@include media-query("mobile", "992px") {
  #air-container {
    .background {
      padding-bottom: 93%;
      .title {
        width: 90%;
        top: 10%;
      }
      .subtitle {
        width: 50%;
        top: 26vw;
      }
      .product {
        width: 100%;
        top: 36vw;
        z-index: 5;
      }
    }
  }

  .background2 {
    width: 100%;
    background-size: 180% auto;
    background-position: -38vw 0,top;
  }

  .info-box {
    .content {
      .tab-bg {
        display: none;
      }
    }
    .tab-content {
      position: relative;
      a {
        transform: scale(1);
        margin-top: 0;
      }
    }
    .move-area {
      position: relative;
    }
  }

  .info2-box {
    .description {
      p {
        width: 90vw;
      }
      .alert {
        width: 70vw;
      }
    }
  }

  .video-box {
    .youtube {
      width: 40vw;
    }
  }

  .brand-box {
    .tab {
      width: 100%;
    }
  }

  .special-box {
    .tab {
      width: 100%;
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  .gift-box {
    li {
      width: 44vw;
      &.long {
        width: 95vw;
      }
    }
  }

  .sub-box {
    ul {
      li {
        width: 52%;
        &:nth-of-type(2) {
          width: 39%;
        }
      }
    }
  }

  .product-box {
    .tab {
      li {
        width: 23%;
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

  #air-container {
    .background {
      padding-bottom: 135%;
      .title {
        width: 95%;
        top: 27vw;
      }
      .subtitle {
        width: 65%;
        top: 44vw;
      }
      .product {
        width: 140%;
        top: 57vw;
        left: -21vw;
        right: 0;
        margin: 0 auto;
        .swiper-wrapper {
          align-items: center;
        }
      }
    }
  }

  section {
    .title {
      width: 120%;
      margin: 0 -10% 1%;
    }
  }

  .brand-box {
    .content {
      padding-top: 5%;
      box-sizing: border-box;
    }
    .tab {
      .swiper-slide {
        flex-basis: 37%;
      }
    }
  }

  .video-box {
    .youtube {
      width: 95vw;
      padding-bottom: 50%;
    }
  }

  .sub-box {
    .title {
      width: 100%;
      margin: 0 auto 5%;
    }
    ul {
      li {
        width: 95%;
        margin: 0 3px 3%;
        &:nth-of-type(2) {
          width: 95%;
        }
      }
    }
  }

  .info2-box {
    .description {
      .alert {
        width: 85vw;
      }
    }
  }

  .tab-area {
    .tab {
      padding-top: 6%;
      box-sizing: border-box;
      li {
        width: 42vw;
        margin: 0 5px 3%;
      }
    }
    .title {
      width: 120%;
    }
  }

  .gift-box {
    li {
      width: 45vw;
      margin: 0 2px 2%;
      &.order,
      &.info {
        width: 90vw;
      }
    }
  }

  .discount-box {
    .bg01 {
      margin: 0 auto 4%;
    }
  }

  .product-box {
    .tab {
      li {
        width: 44%;
      }
    }
  }
}

</style>
