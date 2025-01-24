<template>
  <div id="ai-container">
    <div class="background"></div>

    
    <p class="item left">
      <img :src="$filters.siteUrl('2024083C/images/2502/item_L.png')" />
    </p>
    <p class="item right">
      <img :src="$filters.siteUrl('2024083C/images/2502/item_R.png')" />
    </p>

    <section class="pro-box">
        <swiper 
        :loop="true" 
        :parallax="true" 
        :breakpoints="{
          0:{
            slidesPerView:2.2
          },
          600:{
            slidesPerView:3
          },
          992:{
            slidesPerView:3
          }
        }"
        :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :modules="[Parallax, EffectFade]">
          <swiper-slide v-for="p in pro" class="flex!">
            <a :href="$filters.addGALink(p.url)" target="_blank">
              <img :src="$filters.siteUrl(p.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
    </section>

    <!--  指南 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024083C/images/2502/es.png')" />
      </h2>

      <ul class="w:45% w:70%@<992 w:95%@<576 grid-cols:2 m:0|auto|1% m:0|auto|2%@<992 gap:10 gap:5@<576">
        <li :class="[statusGift == 0 ? 'active' : '']" 
          class="brightness(0.7) brightness(1).active">
          <a @click="changeGift(0)">
            <img :src="$filters.siteUrl('2024083C/images/2502/es-a-01.png')" /></a>
        </li>
        <li class="brightness(0.7) brightness(1).active"
          :class="[statusGift == 1 ? 'active' : '']">
          <a @click="changeGift(1)">
            <img :src="$filters.siteUrl('2024083C/images/2502/es-b-03.png')" /></a>
        </li>
      </ul>

      <!-- 筆電 -->
      <div class="tab-content" v-if="statusGift == 0">
        <ul class="w:90% gap:10 w:full@<992 mb:2% overflow:hidden">
          <li class="w:89% w:91vw@<992" :class="[isSale == false ? 'off' : '']">
            <a @click="goNB('#sale')" target="_blank"><img
                :src="$filters.siteUrl('2024083C/images/2501/NB02.png')" /></a>
          </li>
          <li class="w:89% w:91vw@<992">
            <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img
                :src="$filters.siteUrl('2024083C/images/2501/NB03.png')" /></a>
          </li>
          <li class="w:44% w:45vw@<992 w:92vw@<576">
            <swiper class="overflow:hidden" :loop="false" :space-between="10" :breakpoints="{
                0: {
                  slidesPerView: 2.2
                },
                600: {
                  slidesPerView: 3
                },
                992: {
                  slidesPerView: 3
                }
              }">
              <swiper-slide v-for="(gift, g) in gifts">
                <a :href="$filters.addGALink(gift.url)" target="_blank">
                  <img :src="$filters.siteUrl(gift.image)" />
                </a>
              </swiper-slide>
            </swiper>
          </li>
          <li class="w:44% w:45vw@<992 w:92vw@<576">
            <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img
                :src="$filters.siteUrl('2024083C/images/2501/NB09.png')" /></a>
          </li>
        </ul>
      </div>

      <!-- 週邊 -->
      <div class="tab-content" v-if="statusGift == 1">
        <ul class="gap:10 mb:2%">
          <li class="rel w:81% w:92vw@<992">
            <a @click="goNB('#tab8')">
              <img :src="$filters.siteUrl('2024083C/images/2501/DIY01.png')" />
            </a>
          </li>
          <li class="w:40% w:46vw@<992 w:92vw@<576">
            <a @click="goNB('#tab9')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2501/DIY02.png')" />
            </a>
          </li>
          <li class="w:40% w:45vw@<992 w:92vw@<576">
            <a @click="goNB('#tab13')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2501/DIY03.png')" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 錨點區 -->
     <section>
       <ul class="w:80% w:90%@<992 grid-cols:4 grid-cols:2@<576 gap:10">
        <li v-for="achor in achors">
          <a @click.prevent="goNB(achor.url)">
            <img :src="$filters.siteUrl(achor.image)" loading="lazy">
          </a>
        </li>
       </ul>
     </section>

    <!-- 商品區 -->
    <section class="pro-group scroll" v-for="(floor, f) in floors[0]"
      :class="`tab${Number(f) + 1}-box`"
      :id="`tab${Number(f) + 1}`">
  
    
      <h2 class="title">
        <a v-if="floor[0].content != undefined" :href="[floor[0].content[0].url ? $filters.addGALink(floor[0].content[0].url) : $filters.addGALink(floor[0].url)]"
          target="_blank">
          <img :src="$filters.siteUrl(floor[0].title)" />
        </a>
        <a v-else :href="$filters.addGALink(floor[0].url)" target="_blank">
          <img :src="$filters.siteUrl(floor[0].title)" />
        </a>
      </h2>
      

      <div v-if="floor[0].content != undefined">
        <Tabs :isSwiper="1" :tabs="floor[0].content" :singleUrl="floor[0].url">
          <template v-slot="{ selectedTab }">
            <TabContent v-for="(content, c) in floor[0].content" :menus="floor[0].menu[c]" :index="c"
              :selectedTab="selectedTab">

            </TabContent>
          </template>
        </Tabs>

      </div>

      <div v-else>
        <listF :pro="product2[floor[0].menu]" :isSwiper="1" :name="`pro${f + 1}`">
        </listF>
      </div>
    </section>

    <!-- 熱門活動 -->
    <banner :banner1="banner1" :banner2="banner2"></banner>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile2'"></RightAside>
</template>

<script setup>
import { Parallax, EffectFade } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
      floors: [
        {
          0: [
            {
              title: '2024083C/images/2502/S1.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11124',
              menu: [7267, 7268],
              content: [
                {
                  image: '2024083C/images/2502/S1-b-01.png'
                },
                {
                  image: '2024083C/images/2502/S1-b-02.png'
                }
              ]
            }
          ],
          1: [
            {
              title: '2024083C/images/2502/S2.png',
              menu: [7269, 7270, 7271],
               url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
              content: [
                {
                  image: '2024083C/images/2502/S2-b-01.png'
                },
                {
                  image: '2024083C/images/2502/S2-b-02.png'
                },
                {
                  image: '2024083C/images/2502/S2-b-03.png'
                }
              ]
            }
          ],
          2: [
            {
              title: '2024083C/images/2502/S3.png',
              menu: [7272, 7273, 7274],
              url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
              content: [
                {
                  image: '2024083C/images/2502/S3-b-01.png'
                },
                {
                  image: '2024083C/images/2502/S3-b-02.png'
                },
                {
                  image: '2024083C/images/2502/S3-b-03.png'
                }
              ]
            }
          ],
          3: [
            {
              title: '2024083C/images/2502/S4.png',
               url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
              menu: [7275, 7276],
              content: [
                {
                  image: '2024083C/images/2502/S4-b-01.png'
                },
                {
                  image: '2024083C/images/2502/S4-b-02.png'
                }
              ]
            }
          ],
          4: [
            {
              title: '2024083C/images/2502/S5.png',
              menu: [7277, 7278],
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=114130',
              content: [
                {
                  image: '2024083C/images/2502/S5-b-01.png'
                },
                {
                  image: '2024083C/images/2502/S5-b-02.png'
                }
              ]
            }
          ],
          5: [
            {
              title: '2024083C/images/2502/S6.png',
              menu: [7279, 7280, 7281],
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              content: [
                {
                  image: '2024083C/images/2502/S6-b-01.png'
                },
                {
                  image: '2024083C/images/2502/S6-b-02.png'
                },
                {
                  image: '2024083C/images/2502/S6-b-03.png'
                }
              ]
            }
          ],
          6:[
             {
              title: '2024083C/images/2502/S7.png',
              menu: [7285, 7282, 7284, 7283],
              content: [
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  image: '2024083C/images/2502/S7-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=17260',
                  image: '2024083C/images/2502/S7-b-02.png'
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122542',
                  image: '2024083C/images/2502/S7-b-03.png'
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  image: '2024083C/images/2502/S7-b-04.png'
                }
              ]
            }
          ],
          7:[
             {
              title: '2024083C/images/2502/S8.png',
              menu: [7278, 7278],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image: '2024083C/images/2502/S8-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image: '2024083C/images/2502/S8-b-02.png'
                }
              ]
            }
          ],
          8:[
             {
              title: '2024083C/images/2502/S9.png',
              menu: [7286, 7287],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image: '2024083C/images/2502/S9-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image: '2024083C/images/2502/S9-b-02.png'
                }
              ]
            }
          ],
          9:[
             {
              title: '2024083C/images/2502/S10.png',
              menu: [7288, 7289],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23571',
                  image: '2024083C/images/2502/S10-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=22551',
                  image: '2024083C/images/2502/S10-b-02.png'
                }
              ]
            }
          ],
          10:[
             {
              title: '2024083C/images/2502/S11.png',
              menu: [7290, 7291],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4855',
                  image: '2024083C/images/2502/S11-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4853',
                  image: '2024083C/images/2502/S11-b-02.png'
                }
              ]
            }
          ],
          11:[
             {
              title: '2024083C/images/2502/S12.png',
              menu: [7292, 7293],
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
                  image: '2024083C/images/2502/S12-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=11545',
                  image: '2024083C/images/2502/S12-b-02.png'
                }
              ]
            }
          ],
          12:[
             {
              title: '2024083C/images/2502/S13.png',
              menu: [7294, 7295, 7297, 7296],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4762',
                  image: '2024083C/images/2502/S13-b-01.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22323',
                  image: '2024083C/images/2502/S13-b-02.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4761',
                  image: '2024083C/images/2502/S13-b-03.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22325',
                  image: '2024083C/images/2502/S13-b-04.png'
                }
              ]
            }
          ],
          13:[
             {
              title: '2024083C/images/2502/S14.png',
              url: 'https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html',
              menu: 7357,
            }
          ],
          14:[
             {
              title: '2024083C/images/2502/S15.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22525&hid=121385',
              menu: 7298
            }
          ]
        }
      ],
      status: 0,
      pro: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245519',
          image: '2024083C/images/2502/PD.png'
        }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123020',
          image: '2024083C/images/2501/NB04.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123019',
          image: '2024083C/images/2501/NB05.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123018',
          image: '2024083C/images/2501/NB06.png'
        }
      ],
      banner1: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=120108',
          image: '202404_green/images/bn_nbsaleM.jpg'
        }
      ],
      banner2: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
          image: '202404_green/images/bn_tesnbM.jpg'
        }
      ],
      achors:[
        {
          image:'2024083C/images/2502/ach1a.png',
          url:'#tab1'
        },
         {
          image:'2024083C/images/2502/ach2a.png',
          url:'#tab7'
        },
         {
          image:'2024083C/images/2502/ach3a.png',
          url:'#tab14'
        },
         {
          image:'2024083C/images/2502/ach4a.png',
          url:'#tab15'
        }
      ],
      asides:[
        {
            text: '輕薄商務',
            href: '#tab1',
        },
         {
            text: '飆速電競',
            href: '#tab2',
        },
         {
            text: '特仕改裝升級',
            href: '#tab3',
        },
         {
            text: '精選螢幕',
            href: '#tab4',
        },
         {
            text: '高效桌機',
            href: '#tab5',
        },
         {
            text: 'DIY零組件',
            href: '#tab6',
        },
          {
            text: 'Wi-Fi路由器',
            href: '#tab7',
        },
          {
            text: 'DIY組裝機',
            href: '#tab8',
        },
          {
            text: '鍵盤滑鼠',
            href: '#tab9',
        },
         {
            text: '硬碟',
            href: '#tab10',
        },
          {
            text: '隨身碟/記憶卡',
            href: '#tab11',
        },
         {
            text: '投影機/監控設備',
            href: '#tab12',
        },
          {
            text: '辦公設備',
            href: '#tab13',
        },
          {
            text: '速速Go',
            href: '#tab14',
        },
          {
            text: '出清搶便宜',
            href: '#tab15',
        },
         {
            text: '熱門活動',
            href: '#event',
        },
      ],
      statusPro: 0,
      tabs: [],
      statusGift: 0,
      today: new Date(),
      isSale:true
    }
  },
  mounted() {
    let {floors, today } = this

    //樓層商品(無頁籤)
    for (const [f, floor] of Object.entries(floors[0])) {
      if (floor[0].content == undefined) this.getFloorSingle(floor[0].menu)
    }
  },
  methods: {
    //應援指南頁籤切換
    changeGift(id) {
      this.statusGift = id
    },
    change(id) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16),
          getUrl = current.getAttribute('href')

        setTimeout(() => {
          this.showAndHide(id, `.${parentName}`)
          parentAr.querySelector('.title a').setAttribute('href', getUrl)
        }, 20)
      }
    },
    goNB(element) {
      //前往錨點
      let el = document.querySelector(element),
        rect = el.getBoundingClientRect(),
        move = rect.top + document.documentElement.scrollTop

      setTimeout(() => {
        window.scrollTo({
          top: move - 100,
          behavior: 'smooth'
        })
      }, 100)
    },
    alert(id) {
      //活動辦法
      let infoHtml = ''

      switch (id) {
        //筆電
        case 1:
          infoHtml = `
          <ul style='text-align:left;'>
            <li style='margin-bottom:15px;'>【活動一】</li>
             <li style='margin-bottom:20px;'>1.活動期間(2024/12/1-12/31)，於燦坤線上購物網站購買「全館任一搭載Intel Core Ultra處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/1/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送抽 Dyson SV52 DSlim Submarine乾溼洗地吸塵器 (市價$19,900，1名)。​</li>
             <li style='margin-bottom:10px;'>2.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2024/12/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2025/1/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
             <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
                 <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                  <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動二】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/12/1-12/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/1/4(含)前至指定活動頁面完成登記申請，送羅技MX Anywhere 3S滑鼠-石墨灰 (市價$2,990，15名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
               <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動三】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/12/1-12/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/1/4(含)前至指定活動頁面完成登記申請，送卡巴斯基 標準版 (1台裝置/1年授權) (市價$990，8名)。請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>1.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>2.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>3.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li style='margin-bottom:10px;'>4.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>5.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:20px;color:red;font-weight:bold:bold;'>【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有贈品決定權】</li>
        </ul>
        `
          break

        //DIY / 週邊
        case 2:
          infoHtml = `
        <ul style='text-align:left;'>
          <li style='margin-bottom:15px;'>【活動一】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/12/1-12/31)，於燦坤線上購物網站購買「全館任一網路設備/儲存卡碟/監控攝影機商品(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機，下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，單筆發票消費金額滿$1,000，並於2025/1/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽頭獎- BOSE QC ULTRA 藍牙耳機(市價$15,800，共1名) ; 二獎- SAMSUNG A9+ 8G/128G WIFI (市價8,490，1名，不挑色) ; 三獎-北方 石墨烯陶瓷電暖器(市價$2,880，1名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2025/1/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2025/1/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
               <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                 <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

               <li style='margin-bottom:15px;'>【活動二】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/12/1-12/31)內，於燦坤線上購物網站購買「全館任一DIY組裝電腦、內/外接硬碟(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/1/4(含)前至指定活動頁面完成登記申請，抽羅技MX KEYS S COMEBO鍵盤滑鼠組(市價$7,490，2名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2025/1/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
                 <li style='margin-bottom:10px;'>4.得獎者請於2025/1/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
                 <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
                 <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                  <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:30px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:20px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動三】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/12/1-12/31)內，於燦坤線上購物網站購買「全館任一投影機(不包含輕劇院商品，下稱活動指定商品)」，單筆發票消費金額滿$8,000，並於線上完成付款且後續未退貨退款者，並於2025/1/4(含)前至指定活動頁面完成登記申請，送THOMSON 石墨烯壁掛暖風機(市價$3,690，7名)。​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
                 <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>`
          break
      }

      Swal.fire({
        width: 900,
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
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2024083C/images/2502/';
$origin: 'https://events.tk3c.com/events_net/events_net/2024083C/images/2502/';

/*  共用樣式調整 */
body {
  background: #b00603;
}
.bg01 {
  background: none;
  position: relative;
}

#ai-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
   $image: $dir + 'KV.jpg';
    @include bg-responsive($image, 2000, 750);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px,top;
    padding-bottom: 43%;
  }
}

.item {
  width: 13%;
  position: absolute;
  &.left {
    right: unset;
    left: 0%;
    top: 120px;
  }
  &.right {
    right: 0;
    left: unset;
    top: 360px;
  }
}

.pro-group {
  .tab {
    margin-bottom: 0 !important;
    .swiper-wrapper {
      justify-content: center;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    .swiper-slide {
      flex-basis: 24%;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #ai-container {
    .background {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
      padding-bottom: 50vw;
    }
  }

  .pro-group {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
      .swiper-slide {
        flex-basis:fit-content;
      }
    }
  }

  .tab1-box,
  .tab4-box,
  .tab5-box,
  .tab8-box,
  .tab9-box,
  .tab10-box,
  .tab11-box,
  .tab12-box {
    .tab  {
      .swiper-wrapper {
        justify-content: center;
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

  #ai-container {
    .background {
      background-size: 180% auto;
      background-position: -41vw 22vw,top;
      padding-bottom: 90vw;
    }
  }

  .pro-group {
    .tab {
      .swiper-wrapper {
        padding-left: 8px;
        box-sizing: border-box;
      }
      .swiper-slide {
        flex-basis: 45%;
      }
    }
  }
}
</style>
