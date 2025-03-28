<template>
  <div id="ai-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024083C/images/2504/title2.png')" />
        <div class="subtitle">
          <swiper
          :loop="true"
          :effect="'flip'"
          :flipEffect="{
            limitRotation:180
          }"
          :autoplay="{
            delay:1300,
            disableOnInteraction:false
          }"
          :modules="[EffectFlip]"
          >
          <swiper-slide>
            <img :src="$filters.siteUrl('2024083C/images/2504/st1.png')" />
          </swiper-slide>
           <swiper-slide>
            <img :src="$filters.siteUrl('2024083C/images/2504/st2.png')" />
          </swiper-slide>
          </swiper>
        </div>
      </h2>
      <p class="ribbon">
        <img :src="$filters.siteUrl('2024083C/images/2504/spb.png')" />
      </p>
    </div>

    <div id="confetti"></div>
    <p class="item">
      <img :src="$filters.siteUrl('2024083C/images/2504/item.png')" />
    </p>

    <!--  指南 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024083C/images/2504/s1.png')" />
      </h2>
     
      <ul class="w:45% w:60%@<992 w:95%@<576 grid-cols:2 m:0|auto|1% m:0|auto|2%@<992 gap:10 gap:5@<576">
        <li :class="[statusGift == 0 ? 'active' : '']" class="contrast(0.5) contrast(1).active">
          <a @click="changeGift(0)">
            <img :src="$filters.siteUrl('2024083C/images/2504/bn_sp01.png')" /></a>
        </li>
        <li class="contrast(0.5) contrast(1).active" :class="[statusGift == 1 ? 'active' : '']">
          <a @click="changeGift(1)">
            <img :src="$filters.siteUrl('2024083C/images/2504/bn_sp02.png')" /></a>
        </li>
      </ul>

      <!-- 筆電 -->
      <div class="tab-content rel" v-show="statusGift == 0">
        <img class="hidden@<576 abs w:90% w:full@<992 h:auto left:0 right:0 m:auto top:0 z:-1"
          :src="$filters.siteUrl('2024083C/images/2504/sp_bg.png')" />
        <ul class="gap:10 pt:2% pt:3%@<992 box:border-box">
          <li class="w:62% w:71.5%@<992 w:full@<576">
            <a class="mb:1%" @click="goNB('#sale')" target="_blank">
              <img :src="$filters.siteUrl('2024083C/images/2504/sp01-1.png')" />
            </a>
            <div class="flex flex-direction:row gap:10 mb:1%">
              <a class="w:52% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
                target="_blank"><img :src="$filters.siteUrl('2024083C/images/2504/sp01-2a.png')" /></a>
              <a class="w:52% w:full@<576"
                :href="$filters.addGALink('https://events.tk3c.com/events_net/RTXNB/index.html')" target="_blank"><img
                  :src="$filters.siteUrl('2024083C/images/2504/sp01-3.png')" /></a>
            </div>
            <a class="w:full" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
              target="_blank"><img :src="$filters.siteUrl('2024083C/images/2504/sp01-4.png')" /></a>
          </li>
          <li class="w:19% w:22%@<992 w:19.5%@<992 w:full@<576 flex flex-direction:column  flex-direction:row@<576 gap:10">
            <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121988')"
              target="_blank"><img :src="$filters.siteUrl('2024083C/images/2504/sp01-5.png')" /></a>
            <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121986')"
              target="_blank"><img :src="$filters.siteUrl('2024083C/images/2504/sp01-6.png')" /></a>
            <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121987')"
              target="_blank"><img :src="$filters.siteUrl('2024083C/images/2504/sp01-7.png')" /></a>
          </li>
        </ul>
        <a class="bg:#000 r:20px color:#fff color:#fff:hover box:border-box f:2em f:1.5em@<576 w:20% w:35%@<992 w:50%@<576 m:auto" @click="alert(1)">
          活動辦法
        </a>
      </div>

      <!-- 週邊 -->
      <div class="tab-content rel" v-show="statusGift == 1">
        <img class="hidden@<576 abs w:90% w:full@<992 h:auto left:0 right:0 m:auto top:0 z:-1"
          :src="$filters.siteUrl('2024083C/images/2504/sp_bg.png')" />
        <ul class="gap:10 pt:2% box:border-box">
          <li class="rel w:79% w:95%@<992 w:full@<576">
            <a @click="goNB('#tab8')">
              <img :src="$filters.siteUrl('2024083C/images/2504/sp01-8.png')" loading="lazy" />
            </a>
          </li>
          <li class="w:39% w:47%@<992 w:48%@<576">
            <a @click="goNB('#tab9')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2504/sp01-9a.png')" />
            </a>
          </li>
          <li class="w:40% w:47%@<992 w:48%@<576">
            <a @click="goNB('#tab13')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2504/sp01-10.png')" />
            </a>
          </li>
        </ul>
        <a @click="alert(2)" class="f:2em f:1.5em@<576 bg:#000 r:20px color:#fff color:#fff:hover box:border-box w:20% w:35%@<992 w:50%@<576 m:auto">
          活動辦法
        </a>
      </div>
    </section>

      <!-- 筆電區商品樓層 -->
      <div v-show="statusGift == 0" class="product-area pro1">
        <!-- 狂撒百萬折價券 -->
        <section class="sale-box scroll" titles="狂撒百萬折價券" id="sale">
          <h2 class="title">
            <a :href="$filters.addGALink(disUrl)"
              target="_blank">
              <img :src="$filters.siteUrl('2024083C/images/2504/s19.png')" />
            </a>
          </h2>

          <ListF :pro="product2[7668]" :isSwiper="1" :name="'pro'"></ListF>
        </section>

        <section class="pro-group scroll" v-for="(t1, t) in tab1[0]" :class="`tab${Number(t) + 1}-box`"
          :id="`tab${Number(t) + 1}`">
          <h2 class="title single-url">
            <a :href="$filters.addGALink(t1[0].url)" target="_blank">
              <img :src="$filters.siteUrl(t1[0].title)" />
            </a>
          </h2>

          <div v-if="t1[0].content != undefined" class="rel">
            <Tabs :isSwiper="1" :tabs="t1[0].content" :singleUrl="t1[0].url">
              <template v-slot="{ selectedTab }">
                <TabContent v-for="(content, c) in t1[0].content" :type="content.type" :menus="content.id" :name="`p${c + 1}`" :index="c"
                  :selectedTab="selectedTab">

                </TabContent>
              </template>
            </Tabs>
          </div>

          <div v-else>
            <ListF :pro="product2[t1[0].id]" :isSwiper="1" :name="`pro${Number(t) + 1}`"></ListF>
          </div>
        </section>
      </div>

      <!-- 週邊樓層區 -->
      <div v-show="statusGift == 1" class="product-area pro2">
        <section class="pro-group scroll" v-for="(t2, t) in tab2[0]" :class="`tab${Number(t) + 8}-box`"
          :id="`tab${Number(t) + 8}`">
          <h2 class="title">
            <a v-if="t2[0].content != undefined" :href="$filters.addGALink(t2[0].content[0].url)" target="_blank">
              <img :src="$filters.siteUrl(t2[0].title)" alt="" />
            </a>
            <a v-else :href="$filters.addGALink(t2[0].url)">
              <img :src="$filters.siteUrl(t2[0].title)" alt="" />
            </a>
          </h2>

          <!-- 商品區 -->
          <div v-if="t2[0].content != undefined">
             <Tabs :isSwiper="1" :tabs="t2[0].content" :singleUrl="t2[0].url">
              <template v-slot="{ selectedTab }">
                <TabContent v-for="(content, c) in t2[0].content" :menus="content.id" :name="`p${c + 1}`" :index="c"
                  :selectedTab="selectedTab">

                </TabContent>
              </template>
            </Tabs>
          </div>

          <div v-else>
            <ListF :pro="product2[t2[0].id]" :isSwiper="1" :name="`pro${Number(t) + 1}`"></ListF>
          </div>
        </section>
      </div>


    <!-- 熱門活動 -->
    <banner :banner1="banner1" :banner2="banner2" :title="bnTitle"></banner>
  </div>

   <!-- 左側選單 -->
   <LeftAside :type="'mobileAi'" :tab1="tab1" :tab2="tab2" :statusGift="statusGift"></LeftAside>

   <!-- 右側選單 -->
    <RightAside :tab1="tab1" :tab2="tab2" :statusGift="statusGift"></RightAside>
</template>

<script>
import listM from '@/views/layout/listM.vue'
import { EffectFlip } from 'swiper/modules'
export default {
  data() {
    return {
      listM,
      EffectFlip,
      tab1:[
        {
             0: [
            {
              href:'#tab1',
              text:'RTX50 新機預購',
              title: '2024083C/images/2504/s20.png',
              url: 'https://events.tk3c.com/events_net/RTXNB/index.html',
              content: [
                {
                  id:7872,
                  text:'ROG',
                  type:listM
                },
                {
                  id:7873,
                  text:'MSI'
                },
                 {
                  id:7874,
                  text:'ACER',
                  type:listM
                },
              ]
            }
          ],
          1: [
            {
              href:'#tab2',
              text:'輕薄商務',
              title: '2024083C/images/2504/s3.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11124',
              content: [
                {
                  id:7267,
                  text:'文書款'
                },
                {
                  id:7268,
                  text:'AI筆電'
                }
              ]
            }
          ],
          2: [
            {
              href:'#tab3',
              text:'飆速電競',
              title: '2024083C/images/2504/s2.png',
               url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
              content: [
                {
                  id:7269,
                  text:'RTX40系列'
                },
                {
                  id:7270,
                  text:'RTX30系列'
                },
                {
                  id:7271,
                  text:'RTX20系列'
                }
              ]
            }
          ],
          3: [
            {
              href:'#tab4',
              text:'特仕改裝升級',
              title: '2024083C/images/2504/s9.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
              content: [
                {
                  id:7272,
                  text:'MSI'
                },
                {
                  id:7273,
                  text:'ASUS'
                },
                {
                  id:7274,
                  text:'ACER'
                }
              ]
            }
          ],
          4: [
            {
              href:'#tab5',
              text:'精選螢幕',
              title: '2024083C/images/2504/s18.png',
               url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
              content: [
                {
                  id:7275,
                  text:'文書/商務款'
                },
                {
                  id:7276,
                  text:'電競款'
                }
              ]
            }
          ],
          5: [
            {
              href:'#tab6',
              id:7277,
              text:'高效桌機',
              title: '2024083C/images/2504/s17.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=114130'
            }
          ],
          6: [
            {
              href:'#tab7',
              text:'DIY零組件',
              title: '2024083C/images/2504/s16.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              content: [
                {
                  id:7279,
                  text:'顯示卡'
                },
                {
                  id:7280,
                  text:'RAM'
                },
                {
                  id:7281,
                  text:'SSD'
                }
              ]
            }
          ],
        }
      ],
      tab2:[
        {
          0:[
             {
              href:'#tab8',
              text:'Wi-Fi路由器',
              title: '2024083C/images/2504/s6.png',
              content: [
                {
                  id:7285,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  text:'Wi-Fi 7'
                },
                {
                  id:7282,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=17260',
                  text:'Mesh系統'
                },
                {
                  id:7284,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122542',
                  text:'Wi-Fi 6/6E'
                },
                {
                  id:7283,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  text:'無線路由器'
                }
              ]
            }
          ],
          1:[
             {
              href:'#tab9',
              text:"DIY組裝機",
              title: '2024083C/images/2504/s8.png',
               id:7278,
               url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020'
            }
          ],
          2:[
             {
              href:'#tab10',
              text:'鍵盤滑鼠',
              title: '2024083C/images/2504/s7.png',
              content: [
                {
                  id:7286,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  text:'鍵盤'
                },
                {
                  id:7287,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  text:'滑鼠'
                }
              ]
            }
          ],
          3:[
             {
              href:'#tab11',
              text:'硬碟',
              title: '2024083C/images/2504/s14.png',
              content: [
                {
                  id:7288,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23571',
                  text:'外接硬碟'
                },
                {
                  id:7289,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=22551',
                  text:'內接硬碟'
                }
              ]
            }
          ],
          4:[
             {
              href:'#tab12',
              text:'隨身碟/記憶卡',
              title: '2024083C/images/2504/s13.png',
              content: [
                {
                  id:7290,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4855',
                  text:'隨身碟'
                },
                {
                  id:7291,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4853',
                  text:'記憶卡'
                }
              ]
            }
          ],
          5:[
             {
              href:'#tab13',
              text:'投影機/監控設備',
              title: '2024083C/images/2504/s12.png',
              content: [
                {
                  id:7292,
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
                  text:'投影機'
                },
                {
                  id:7293,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=11545',
                  text:'網路攝影機'
                }
              ]
            }
          ],
          6:[
             {
              href:'#tab14',
              text:'辦公設備',
              title: '2024083C/images/2504/s10.png',
              content: [
                {
                  id:7294,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4762',
                  text:'辦公週邊'
                },
                {
                  id:7295,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22323',
                  text:'延長線'
                },
                {
                  id:7296,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22325',
                  text:'碎紙機'
                },
                {
                  id:7297,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4761',
                  text:'電池'
                }
              ]
            }
          ],
          7:[
             {
              href:'#tab15',
              text:'速速Go',
              title: '2024083C/images/2504/s4.png',
              url: 'https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html',
              id: 7357,
            }
          ],
          8:[
             {
              text:'出清搶便宜',
              title: '2024083C/images/2504/s11.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22525&hid=121385',
              id: 7298
            }
          ]
        }
      ],
      status: 0,
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
      statusPro: 0,
      tabs: [],
      statusGift: 0,
      today: new Date(),
      bnTitle:'',
      isOff:true,
      disUrl:'',
      menuDis:7668,
    }
  },
  mounted() {
    let {today,tab1,tab2 } = this

    //3/24更新現折券
    if(today >= new Date('2025/03/24')) {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947'
    } else {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931'
    }

    if(today >= new Date('2025/03/24')) this.isOff = false;
    //熱門活動標題
    this.bnTitle = '2024083C/images/2504/s15.png';

     if (this.statusGift == 0 ) this.tabs = tab1[0];

      //撈取折價券商品
    this.getFloorSingle(this.menuDis);

    //樓層商品(無頁籤)
    for (const [t, t1] of Object.entries(tab1[0])) {
      if (t1[0].content == undefined) this.getFloorSingle(t1[0].id)
    }

    for (const [t, t2] of Object.entries(tab2[0])) {
      if (t2[0].content == undefined) this.getFloorSingle(t2[0].id)
    }
  },
  methods: {
    //應援指南頁籤切換
    changeGift(id) {
      this.statusGift = id
    },
    goNB(element) {
      //前往錨點
      let el = document.querySelector(element),
        rect = el.getBoundingClientRect(),
        move = rect.top + document.documentElement.scrollTop

      setTimeout(() => {
        window.scrollTo({
          top: move - 100,
        })
      }, 100)
    },
    alert(id) {
      //活動辦法
      let infoHtml = ''

      switch (id) {
        //筆電區
        case 1:
          infoHtml = `
          <p style="margin-bottom:25px;text-align:left;font-weight:bold">【活動一】 3/1-3/31購搭載Intel處理器筆電，登記抽PlayStation 5 Slim主機 光碟版 (1TB) (市價$17,580，1名)
活動期間(2025/3/1-3/31)，於燦坤線上購物網站購買「全館任一搭載Intel 處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/4/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送PlayStation 5 Slim主機 光碟版 (1TB) (市價$17,580，1名)。</p>
          <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.得獎名單將於2025/4/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(https://www.facebook.com/TDdd331) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>3.得獎者請於2025/4/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
             <li style='margin-bottom:10px;'>4.經核對無誤後，燦坤3C將於2025/4/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li style='margin-bottom:10px;'>6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

           <p style="margin-bottom:25px;text-align:left;font-weight:bold">【活動二】 3/1-3/31購搭載Intel處理器筆電，單品滿$30,000，登記送ASUS 27型 IPS護眼電競顯示器 (市價$3,790，10名)
活動期間(2025/3/1-3/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/4/4(含)前至指定活動頁面完成登記申請，送ASUS 27型 IPS護眼電競顯示器 (市價$3,790，10名)。</p>
          <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2025/4/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:30px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p style="margin-bottom:25px;text-align:left;font-weight:bold">【【活動三】 3/1-3/31購搭載Intel處理器筆電，單筆滿$9,999，登記送Logitech MK295 無線靜音鍵鼠組-石墨灰(市價$990，8名) </p>
          <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2025/4/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:30px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p style="text-align:left;margin-bottom:25px;color:red;">【活動一、活動二僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
        `
          break

        //周邊區
        case 2:
          infoHtml = `
        <p style="margin-bottom:10px;text-align:left;font-weight:bold">【活動一】購網路設備/儲存卡碟/監控攝影機，單筆滿$2000，登記抽：頭獎- iPad mini 7th Wi-Fi 128G (市價$16,900，1名，不挑色) ; 二獎- SONY INZONE H7無線電競耳機 (市價$6,390，1名) ; 三獎-輝葉良品八電極智能體脂計 (市價$3,680，1名)</p>
        <p style="margin-bottom:10px;color:red;text-align:left;font-weight:bold">*網路設備/儲存卡碟/監控攝影機(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機)</p>
        <p style="margin-bottom:25px;text-align:left;font-weight:bold">活動期間(2025/3/1-3/31)，於燦坤線上購物網站購買「全館任一網路設備/儲存卡碟/監控攝影機商品(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機，下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，單筆發票消費金額滿$2,000，並於2025/4/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽頭獎 - iPad mini 7th Wi-Fi 128G (市價$16,900，1名，不挑色) ; 二獎- SONY INZONE H7無線電競耳機 (市價$6,390，1名) ; 三獎-輝葉良品八電極智能體脂計 (市價$3,680，1名)</p>

        <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2025/4/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(https://www.facebook.com/TDdd331) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2025/4/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
             <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2025/4/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p style="margin-bottom:25px;text-align:left;font-weight:bold">【活動二】3/1-3/31購任一DIY組裝電腦，登記抽SONY INZONE H7無線電競耳機 (市價$6,390，1名)
活動期間(2025/3/1-3/31)內，於燦坤線上購物網站購買「全館任一DIY組裝電腦 (下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/4/4(含)前至指定活動頁面完成登記申請，抽SONY INZONE H7無線電競耳機 (市價$6,390，1名) </p>
          <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2025/4/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(https://www.facebook.com/TDdd331) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2025/4/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
             <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2025/4/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
        
         <p style="margin-bottom:10px;text-align:left;font-weight:bold">【活動三】 3/1-3/31購任一投影機，單品滿$10000，登記送SAMSUNG Galaxy Tab A9+ 8G/128G (市價$8,490，3名，不挑色) *活動不含輕劇院商品</p>
         <p style="margin-bottom:25px;text-align:left;font-weight:bold">活動期間(2025/3/1-3/31)內，於燦坤線上購物網站購買「全館任一投影機(不包含輕劇院商品，下稱活動指定商品)」，單筆發票消費金額滿$8,000，並於線上完成付款且後續未退貨退款者，並於2025/4/4(含)前至指定活動頁面完成登記申請，送SAMSUNG Galaxy Tab A9+ 8G/128G (市價$8,490，3名，不挑色)。</p>
          <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2025/4/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:30px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
        `
          break;

      }

      Swal.fire({
        width: 900,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        confirmButtonText: '<a href="https://www.tk3c.com/events/eventgift.aspx?ec=2024083C" target="_blank">我要登記</a>',
        position: 'center',
        showCloseButton: true,
        confirmButtonColor: '#000',
        returnFocus: false,
      });
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2024083C/images/2504/';
$origin: 'https://events.tk3c.com/events_net/events_net/2024083C/images/2504/';

/*  共用樣式調整 */
body {
  background: #ffc6ae;
}

.bg01 {
  background: #ffc8ab;
    border: 3px solid #ff947b;
    border-radius: 20px;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 98%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0px -4px 20px 23px rgb(247 247 247);
      box-sizing: border-box;
      z-index: -1;
    }
}

.aside-container:not(.left) {
  zoom:0.8
}

#ai-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
   $image: $dir + 'kv.png';
    @include bg-responsive($image, 2000, 888);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px,top;
    padding-bottom: 50%;
    .title {
      width: 40%;
      position: absolute;
      right: 0;
      left: 0;
      top: 15%;
      margin: 0 auto;
      animation: tada 1.6s linear;
      .subtitle {
        width: 56%;
        margin: -17% auto 0;
        .swiper-wrapper {
          align-items: baseline;
        }
      }
    }
    .product{
      width: 26%;
      position: absolute;
      right: 3%;
      top: 22%;
      animation-duration: 1.4s;
      img {
        animation: upAndDown 0.5s ease-in-out infinite alternate;
        animation-delay: 1.5s;
      }
    }
    .ribbon {
      width: 84%;
      position: absolute;
      top: 19%;
      animation: rotate-short 1.2s linear infinite alternate;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}

.pro-group {
  .tab {
    position: relative;
    z-index: 20;
    .swiper-slide {
      flex-basis: 20%;
    }
    .swiper-wrapper {
      justify-content: center;
    }
    a {
        background: #f83800;
        font-size: 1.5em;
        color: #fff;
        border-radius: 20px;
        padding: 5px;
        box-sizing: border-box;
    }
  }
  .tab-content {
    .bg01 {
      margin: 0 auto 0;
       &:before {
          box-shadow: 0px 9px 25px 24px rgb(247, 247, 247);
        }
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #ai-container {
    .background {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
      padding-bottom: 62vw;
      .title {
        width: 50%;
        top:12vw;
      }
      .ribbon {
        width: 95%;
        top: 12vw;
      }
    }
  }

  .pro-group {
    .tab {
      .swiper-slide {
        flex-basis:28%;
      }
    }
    .tab-content {
      &:before {
        box-shadow: 0px 13px 28px 33px rgb(247, 247, 247);
      }
    }
  }

  .tab8-box,
  .tab14-box {
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

  #ai-container {
    .background {
      background-size: 260% auto;
      background-position: -100vw 21vw,top;
      padding-bottom: 146vw;
      .title {
        width: 95%;
        top: 29vw;
      }
      .product {
        width: 55%;
        right: 0;
        left: 0;
        top: 93vw;
        margin: 0 auto;
      }
      .ribbon {
        display: none;
      }
    }
  }

  .pro-group {
    .tab {
      .swiper-slide {
        flex-basis: 45%;
      }
      a {
        font-size: 1.2em;
      }
    }
  }

  .sale-box,
  .floor {
    .title {
      margin: 0 auto 0;
    }
  }

  .tab1-box,
  .tab3-box,
  .tab4-box,
  .tab7-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }
}
</style>
