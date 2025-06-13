<template>
  <Template618 :contents="contents">
    <template #board-image>
      <img class="pc" :src="$filters.siteUrl('tv_media/images/BOX_PC.png')" />
      <img class="mobile" :src="$filters.siteUrl('tv_media/images/BOX_M.png')" />
    </template>
    
    <template #special>
      <swiper-slide v-for="(sp,s) in contents[0].specials" :key="s">
        <a v-if="sp.class" @click="message(s + 1)">
          <img :src="$filters.siteUrl(sp.image)">
        </a>
        <a v-else :href="$filters.addGALink(sp.url)" target="_blank">
          <img :src="$filters.siteUrl(sp.image)">
        </a>
      </swiper-slide>
    </template>

    <template #alert-message>
        <!-- 空調場勘預約預約抽好禮 -->
     <AlertBox ref="alert1" :type="'text'">
        <p class="color:red f:bold mb:25px text:left">
          本活動需完成(1)預約空調場勘+(2)購買分離式空調+(3)安裝完成，請留意預約空調場勘時所填寫的聯絡地址及聯絡電話需與空調安裝地址及聯絡電話相同。</p>
        <ul>
          <li>
            1.凡於活動期間(2025/05/01~06/30)，於燦坤線上購物網站預約空調場勘，且於燦坤線上購物網站或燦坤實體門市以會員資格購買「全系列分離式空調(外機計)(下稱活動指定商品)」，並於2025/07/15前出貨/配送完成，且後續未退貨退款者，即可獲得本活動抽獎資格(1張發票1次抽獎機會)，將共抽出3名，為「DAIKIN
            7坪閃流放電空氣清淨機(227244)(市價$8,800)」1名、「虎牌電鍋(236761)(市價$3,000)」1名、「陳傑憲簽名球」1名 ​</li>
          <li>
            2.中獎名單將於2025/07/16公告於FACEBOOK粉絲專頁「燦坤3C」，並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。
          </li>
          <li>
            3.中獎者請於2025/07/25前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。
            ​</li>
          <li>
            4.經核對符合活動條件者，燦坤3C會另行通知，請中獎者於2025/07/31前前往原消費門市領取(如為線上購買，燦坤3C會與中獎者確認領取門市)，如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄。
          </li>
          <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
          <li>
            6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：
          </li>
          <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
          <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
          <li>8.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。 ​</li>
          <li class='last'>9.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
      </AlertBox>
    </template>

    <template #content>
      <!-- 現折券 -->
      <section class="discount-box" v-if="isDis && product2[menuDis] != ''">
        <h2 class="title">
          <a :href="$filters.addGALink(disUrl)" target="_blank">
            <img :src="$filters.siteUrl('airconditioner/images/S1.png')" />
          </a>
        </h2>


        <div class="discount">
          <listF :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></listF>
        </div>
      </section>

      <!-- 品牌 -->
      <section class="brand-box scroll" titles="品牌大放送" id="brand">
        <h2 class="title">
          <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11225&aid=4707')" target="_blank">
            <img :src="$filters.siteUrl('airconditioner/images/S2.png')" alt="" />
          </a>
        </h2>

        <Tabs :swiperOption="swiperOption.breakpoints" :tabs="brands" :textOrImage="'text'">
          <template v-slot="{ selectedTab }">
            <TabContent :isSwiper="1" v-for="(brand, b) in brands" :menus="brand.id" :banners="brand.banner" :index="b"
              :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
      </section>

      <!-- 熱銷空調首選 -->
      <section class="hot-group scroll" titles="熱銷" id="hot">
        <h2 class="title">
          <a :href="$filters.addGALink('https://www.tk3c.com/search.aspx?q=%E7%A9%BA%E8%AA%BF')" target="_blank">
            <img :src="$filters.siteUrl('airconditioner/images/S3.png')" alt="" />
          </a>
        </h2>

        <listF :pro="product2[menuHot]" :isSwiper="1" :name="'hot'"></listF>
      </section>

      <!-- 冷暖空調 -->
      <section class="cold-group scroll" titles="冷暖" id="cold">
        <h2 class="title">
          <a :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11225')" target="_blank">
            <img :src="$filters.siteUrl('airconditioner/images/S4.png')" alt="" />
          </a>
        </h2>

        <listF :pro="product2[menuCold]"></listF>
      </section>

      <!-- 除濕機 -->
      <section class="wet-group scroll" titles="除濕機" id="wet">
        <h2 class="title">
          <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881')" target="_blank">
            <img :src="$filters.siteUrl('airconditioner/images/S5.png')" alt="" />
          </a>
        </h2>

        <listF :pro="product2[menuWet]"></listF>
      </section>

      <!-- 政府補助 -->
      <section class="sub-box">
        <h2 class="title">
          <img :src="$filters.siteUrl('airconditioner/images/sub_title.png')" />
        </h2>

        <swiper :loop="false" :space-between="10" :autoplay="{
          delay: 1500,
          disableOnInteraction: false
        }" :breakpoints="{
          0: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }">
          <swiper-slide>
            <a :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')
              " target="_blank">
              <img :src="$filters.siteUrl('airconditioner/images/sub1.png')" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a @click="message(2)">
              <img :src="$filters.siteUrl('airconditioner/images/sub3.png')" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a :href="$filters.addGALink('https://save3000.moeaea.gov.tw')" target="_blank">
              <img :src="$filters.siteUrl('airconditioner/images/sub2.png')" />
            </a>
          </swiper-slide>
        </swiper>

        <!--退貨 -->
        <AlertBox ref="alert2" :type="'image'">
          <picture>
            <img
              src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg"
              width="50%" height="50%">
          </picture>
          <picture>
            <img
              src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg"
              width="50%" height="50%">
          </picture>
        </AlertBox>
      </section>

      <section class="info-box scroll" titles="場勘服務" id="info">
        <div class="content">
          <ul class="tab">
            <swiper id="infoTab" :space-between="10" :breakpoints="{
              0: {
                slidesPerView: 2.3
              },
              600: {
                slidesPerView: 3.4
              },
              992: {
                slidesPerView: 5
              }
            }" :modules="[Controller]" :controller="{
              control: [infoContent]
            }" @swiper="onSwiper">
              <swiper-slide v-for="(info, i) in infos[0]" :class="[statusInfo == i ? 'active' : '']"
                @click="goSlide(i)">
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
                <a data-swiper-parallax-opacity="0" :href="$filters.addGALink(
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

        <!-- 彈出視窗 -->
        <AlertBox ref="alert4" :type="'image'">
          <picture>
            <img :src="$filters.siteUrl('airConditionerLAB/images/2402/alert_price.png')" width="50%" height="50%"
              class="mb:30px">
          </picture>
          <picture>
            <img :src="$filters.siteUrl('airConditionerLAB/images/2402/alert_price2.png')" width="50%" height="50%"
              class="mb:30px">
          </picture>
          <picture>
            <img :src="$filters.siteUrl('airConditionerLAB/images/2402/alert_price3.png')" width="50%" height="50%"
              class="mb:30px">
          </picture>
        </AlertBox>
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

      <section class="product-box scroll" v-for="(floor, f) in floors[0]" :titles="floor[0].text"
        :class="`tab${Number(f) + 1}-box`" :id="`tab${Number(f) + 1}`">
        <h2 class="title">
          <a :href="$filters.addGALink(floor[0].url)" target="_blank">
            <img :src="$filters.siteUrl(floor[0].title)" />
          </a>
        </h2>

        <div class="content">
          <div v-if="floor[0].content != undefined">
            <Tabs :tabs="floor[0].content">
              <template v-slot="{ selectedTab }">
                <TabContent v-for="(content, c) in floor[0].content" :menus="content.id" :index="c"
                  :selectedTab="selectedTab">

                </TabContent>
              </template>
            </Tabs>
          </div>

          <div v-else>
            <listF v-if="product2[floor[0].id] != undefined" :pro="product2[floor[0].id]"></listF>
          </div>

        </div>
      </section>

      <!-- 影片 -->
      <AirVideo class="scroll" titles="影片介紹" id="video"></AirVideo>
    </template>
  </Template618>
</template>

<script setup>
import { Controller, Parallax ,EffectFade} from 'swiper/modules'

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
  document.querySelectorAll('.info-box .tab .swiper-slide').forEach((el) => {
    el.classList.remove('active')
  })
  document.querySelectorAll('.info-box .tab .swiper-slide')[e.realIndex].classList.add('active')
}
</script>

<script>
export default {
  data() {
    return {
      brands: [
        {
          id:8126,
          image: 'airconditioner/images/brand1.png'
        },
         {
          id:8127,
          image: 'airconditioner/images/brand2.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11237',
           banner:[
            {
              pc: 'airConditionerLAB/images/2503/bn_daikin.jpg',
              mobile: 'airConditionerLAB/images/2503/bn_daikinM.jpg',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11237',
            }
          ]
        },
        {
          id:8128,
          image: 'airconditioner/images/brand3.png'
        },
         {
          id:8129,
         image: 'airconditioner/images/brand4.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=37503',
           banner:[
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=37503',
              pc: 'airConditionerLAB/images/2503/bn_mit.jpg',
              mobile: 'airConditionerLAB/images/2503/bn_mitM.jpg'
            }
          ]
        },
        {
          id:8130,
          image: 'airconditioner/images/brand5.png',
        },
        {
          id:8131,
          image: 'airconditioner/images/brand6.png'
        },
         {
          id:8132,
          image: 'airconditioner/images/brand7.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=104083',
        },
         {
          id:8133,
          image: 'airconditioner/images/brand8.png',
        },
        {
          id:8134,
          image: 'airconditioner/images/brand9.png',
        },
        {
         id:8135,
         image: 'airconditioner/images/brand10.png',
        },
        {
          id:8136,
          image: 'airconditioner/images/brand11.png',
        },
         {
          id:8137,
          image: 'airconditioner/images/brand12.png',
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
              text:'分離式',
              title: 'airconditioner/images/S6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&strPreView=y',
              content: [
                {
                  image: 'airconditioner/images/S6_bn01.png',
                  id: 8141
                },
                {
                  image: 'airconditioner/images/S6_bn02.png',
                  id: 8142
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&strPreView=y',
                  image: 'airconditioner/images/S6_bn03.png',
                  id: 8143
                },
                {
                  image: 'airconditioner/images/S6_bn04.png',
                  id: 8144
                }
              ]
            }
          ],
          1: [
            {
              text:'窗型',
              title: 'airconditioner/images/S7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&strPreView=y',
              content: [
                {
                  id:8145,
                  image: 'airconditioner/images/S6_bn01.png',
                },
                {
                  id:8146,
                  image: 'airconditioner/images/S6_bn02.png',
                },
                {
                  id:8147,
                  image: 'airconditioner/images/S6_bn03.png',
                },
                {
                  id:8148,
                  image: 'airconditioner/images/S6_bn04.png',
                }
              ]
            }
          ],
          2: [
            {
              text:'移動式',
              id: 4130,
              title: 'airconditioner/images/S8.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=13580&strPreView=y'
            }
          ]
        }
      ],
      infos: [
        {
          0: [
            {
              tab: 'airConditionerLAB/images/2502/bn_01.png',
              pc: 'airConditionerLAB/images/2402/info_new1.png',
              mobile: 'airConditionerLAB/images/2402/info_new1m.png'
            }
          ],
          1: [
            {
              tab: 'airConditionerLAB/images/2502/bn_02.png',
              pc: 'airConditionerLAB/images/2402/info_new2A.png',
              mobile: 'airConditionerLAB/images/2402/info_new2mA.png'
            }
          ],
          2: [
            {
              tab: 'airConditionerLAB/images/2502/bn_03.png',
              pc: 'airConditionerLAB/images/2402/info_new3.png',
              mobile: 'airConditionerLAB/images/2402/info_new3m.png'
            }
          ],
          3: [
            {
              tab: 'airConditionerLAB/images/2502/bn_04.png',
              pc: 'airConditionerLAB/images/2402/info4.png',
              mobile: 'airConditionerLAB/images/2402/info4_m.png'
            }
          ],
          4: [
            {
              tab: 'airConditionerLAB/images/2502/bn_05.png',
              pc: 'airConditionerLAB/images/2402/info5.png',
              mobile: 'airConditionerLAB/images/2402/info5_m.png'
            }
          ]
        }
      ],
      menuDis:8125,//現折券陳列編號
      menuHot:8138, //熱銷空調首選陳列編號
      menuCold:8139,//冷暖空調陳列編號
      menuWet:8140,//除濕機陳列編號
      statusTab:0, //商品樓層用
      statusInfo: 0,
      isDis: true,
      today: new Date(),
      disUrl: '',
      swiperOption:{
        breakpoints:{
          0:{
            slidesPerView:2.2,
            grid:{
              fill:'colmn',
              rows:1
            }
          },
          600:{
            slidesPerView:3,
            grid:{
              fill:'colmn',
              rows:4
            }
          },
          992:{
            slidesPerView:6,
            grid:{
              fill:'colmn',
              rows:2
            }
          }
        }
      },
      contents:[
        {
          title:'airconditioner/images/title2.png',
          menuPro:8124,
          isAlert:true,
          specials:[
            {
              image:'airconditioner/images/C01_a.png',
              class:'alert'
            },
            {
              image:'airconditioner/images/C02_a.png',
              url:'https://www.tk3c.com.tw/#actsdetail&8&816&ec=airconditioner'
            },
            {
              image:'airconditioner/images/C03_a.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11237'
            },
            {
              image:'airconditioner/images/C04_a.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=111598'
            },
            {
              image:'airconditioner/images/C05_a.png',
              url:'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
            },
          ],
          gifts:[
            {
              image:'airConditioner/images/sp01.png',
              url:'https://www.panasonic.com/tw/consumer/news/202505-airsp.html?utm_source=gsm&utm_medium=search&utm_campaign=air-conditioning_hotsp&utm_term=brand&utm_content=keyword_sp&gad_source=1'
            },
            {
              image:'airConditioner/images/sp02.png',
              url:'https://event1000.jci-hitachi.tw/SummerAnniversary60/promo/prm001.aspx'
            },
          ]
        }
      ],
    }
  },
  mounted() {
    const {  today,floors } = this;
    // 修改現折券連結
    if (today >= new Date('2025/06/01')) {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947&strPreView=y';
    } else {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931';
    }

    //撈取 現折券樓層商品
    this.getFloorSingle(this.menuDis)

    //撈取 熱銷空調樓層商品
    this.getFloorSingle(this.menuHot)

    //撈取 冷暖空調樓層商品
    this.getFloorSingle(this.menuCold)

    //撈取 除濕機樓層商品
    this.getFloorSingle(this.menuWet)

    for (const [f, floor] of Object.entries(floors[0])) {
      if (floor[0].content == undefined) {
       //無頁籤商品樓層
        this.getFloorSingle(floor[0].id)
      }
    }
  },
  methods: {
    changeInfo(id) {
      setTimeout(() => {
        this.statusInfo = id
      }, 150)
    },
    message(id) {
      let self = this;
      self.$refs[`alert${id}`].openAlert();
    }
  }
}
</script>

<style lang="scss">
/*  共用樣式調整 */
body {
  background: #e3fec4;
}

.bg01 {
  background:#3cb436;
  border-radius: 10px;
  box-sizing: border-box;
}


.sub-box {
  padding-top: 3%;
  ul {
    li {
      width: 45%;
      margin: 0 5px 15px;
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
      filter: contrast(0.5);
      &.active {
        filter: contrast(1);
      }
    }
    .swiper-wrapper {
      padding-bottom: 10px;
      padding-left: 10px;
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
  .tab-content {
    width: 100%;
    margin: 0 auto;
    .banner {
      width: 99%;
      margin: 0 auto;
    }
    .bg01 {
      margin: 0 auto 0;
    }
  }
  .tab {
    .swiper-wrapper {
      justify-content: left
    }
    .swiper-slide {
      margin-right: -10px !important;
    }
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


.product-box {
  .bg01 {
    background: none;
    border-radius: 0;
  }
  .content {
    background: #3cb436;
    padding-top: 2%;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .tab {
    .swiper-slide {
      filter: brightness(1) contrast(0.5);
      &.active {
        filter: contrast(1);
      }
    }
  }
}

.tab3-box {
  .content {
    padding-top: 0;
  }
}

.alert-box {
  .img-content {
    height: 70%;
    overflow: auto;
    padding: 0;
  }
}

.special-box {
  .swiper-slide {
    width: 18.5% !important;
  }
}

@include media-query("mobile", "1600px") {
  .background {
    padding-bottom: 92%;
  } 
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  .background {
    padding-bottom: 141vw;
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
      .swiper-wrapper {
        justify-content: left;
      }
      .swiper-slide {
        flex-basis: unset;
      }
    }
  }

  .special-box {
    .swiper-slide {
      width: 23% !important;
    }
  }

  .product-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
      .swiper-slide {
        flex-basis: 30%;
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  .background {
    padding-bottom: 280vw;
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

  .product-box {
    .tab {
      width: 95%;
      margin: 0 auto;
     .swiper-slide {
      flex-basis: 44%;
     }
    }
  }

  .special-box {
    .swiper-slide {
      width: 46% !important;
    }
  }
}
@include media-query("pc", "2500px") {
  .background {
    padding-bottom: 80%;
  }
}
</style>
