<template>
  <div id="gaming-container">
    <div class="background">
      <h2 class="title">
        <img class="pc" :src="$filters.siteUrl('GamingRace/images/T_pc.png')" />
        <img class="mobile" :src="$filters.siteUrl('GamingRace/images/T_m.png')" />
      </h2>

      <p class="people animate__animated animate__lightSpeedInRight">
        <img :src="$filters.siteUrl('GamingRace/images/people.png')">
      </p>

      <div
        class="board abs w:55% w:65%@<1600 w:70%@<1025 w:95%@<992 w:full@<576 left:0 right:0 top:37vmax top:35.5vmax@<1600 top:36vw@<1025 top:70vw@<992 top:95vw@<576 m:auto">
        <img class="pc" :src="$filters.siteUrl('GamingRace/images/pt_bg.png')" />
        <img class="mobile" :src="$filters.siteUrl('GamingRace/images/pt_bg_M.png')" />
      </div>

      <div class="product bg:#fff">
        <ProductTop :pro="product2[menuPro]"></ProductTop>
      </div>
    </div>

    <div class="background2"></div>

    <!-- 獨家優惠指南 -->
    <section class="special-box scroll" v-if="isSp" titles="獨家優惠指南" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('GamingRace/images/S1.png')" />
      </h2>

      <a class="mb:2% w:85% w:full@<992" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img :src="$filters.siteUrl('GamingRace/images/sp01.png')"></a>
      <a class="mb:1% w:85% w:full@<992" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img :src="$filters.siteUrl('GamingRace/images/sp02.png')"></a>

      <a class="w:20% w:35%@<992 w:50%@<576 m:auto"
        @click="showMsg">
        <img :src="$filters.siteUrl('GamingRace/images/btn.png')" />
      </a>
      <AlertBox ref="alert" :type="'text'">
        <p class="title">【活動一】 5/1-5/31購買搭載Intel處理器筆電，登記抽Panasonic 10L 清淨除濕機(市價$14,390，1名)</p>
        <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)，於燦坤線上購物網站購買「全館任一搭載Intel
          處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Panasonic 10L
          清淨除濕機(市價$14,390，1名)。</p>
        <ul>
          <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。</li>
          <li>2.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline"
              href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>)
            並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
          <li>
            3.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)>。
          </li>
          <li>
            4.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​
          </li>
          <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
          <li>6.
            會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
          </li>
          <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
          <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
          <li class='last'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
        <p class="title">【活動二】 5/1-5/31購買搭載Intel處理器筆電，單品滿$30,000，登記送 廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)</p>
        <p class="color:#f00 f:bold mb:25px">
          活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送廣穎
          A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)。</p>
        <ul>
          <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
          <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
          <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址
            (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
          <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
          <li>
            5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
          </li>
          <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
          <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
          <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

        <p class="title">【活動三】 5/1-5/31購搭載Intel處理器筆電，單筆滿$9,999，登記送 Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)</p>
        <p class="color:#f00 f:bold mb:25px">
          活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，Logitech
          M650 多工靜音無線滑鼠(市價$1,090，10名)。
        </p>
        <ul>
          <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
          <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
          <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址
            (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
          <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
          <li>
            5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
          </li>
          <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
          <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
          <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

        <p class="text:left mb:25px color:#f00 f:bold">【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
      </AlertBox>
    </section>

    <!-- 電競筆電 -->
    <section class="nb-box scroll" titles="電競筆電" id="nb">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=23504&hid=120185')" target="_blank">
          <img :src="$filters.siteUrl('GamingRace/images/S03.png')" />
        </a>
      </h2>

      <Tabs :tabs="nbs" :swiperOption="swiperOption.breakpoints">
        <template v-slot="{ selectedTab }">
          <TabContent v-for="(nb, n) in nbs" :isSwiper="1" :key="n" :menus="nb.id" :index="n" :selectedTab="selectedTab">
          </TabContent>
        </template>
      </Tabs>
    </section>

    <!-- 商品樓層上部 -->
    <CommonFloor :floors="floor1" :menu="menu1"></CommonFloor>

    <!-- 遊戲特區-->
    <section class="game-box scroll" titles="遊戲特區" id="game">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=111639')" target="_blank">
          <img :src="$filters.siteUrl('GamingRace/images/S12.png')" />
        </a>
      </h2>

      <Tabs :tabs="games">
        <template v-slot="{ selectedTab }">
          <TabContent v-for="(game, g) in games" :key="g" :menus="game.id" :index="g" :selectedTab="selectedTab">
          </TabContent>
        </template>
      </Tabs>
    </section>  

    <!-- 商品樓層下部 -->
    <CommonFloor :floors="floor2" :menu="menu2"></CommonFloor>
  </div>

  <!-- 左側選單 -->
  <LeftAside></LeftAside> 
  
  <!-- 右側選單+手機板 -->
  <RightAside :type="'mobile3'"></RightAside>
</template>

<script>
import listM from "@/views/layout/listM.vue";
export default {
  data() {
    return {
      listM,
       nbs: [
        { image: 'GamingRace/images/logo_asus.png',id:8234},
        { image: 'GamingRace/images/logo_acer.png',id:8235 },
        { image: 'GamingRace/images/logo_msi.png',id:8236},
        { image: 'GamingRace/images/logo_Lenovo.png',id:8237},
        { image: 'GamingRace/images/logo_hp.png',id:8238 },
        { image: 'GamingRace/images/logo_gigabyte.png',id:8239},
        { image: 'GamingRace/images/logo_Razer.png',id:8240},
      ],
      floor1:[
        {
          "image":"GamingRace/images/S04.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=117134&aid=23631",
        },
         {
          "image":"GamingRace/images/S05.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=117134&aid=23632",
        },
         {
          "image":"GamingRace/images/S06.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=117916&aid=23091",
        },
         {
          "image":"GamingRace/images/S07.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=117916&aid=23091",
        },
        {
          "image":"GamingRace/images/S08.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=117916&aid=5901",
        },
         {
          "image":"GamingRace/images/S09.png",
          "url":"https://www.tk3c.com/dictitleurl.aspx?cid=43403",
        },
         {
          "image":"GamingRace/images/S10.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=117916&aid=23990&hid=124800",
        },
        {
          "image":"GamingRace/images/S11.png",
          "url":"https://www.tk3c.com/dictitleurl.aspx?cid=117896",
        }
      ],
      floor2:[
        {
          "image":"GamingRace/images/S13.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=117916&aid=23090",
          "type":listM
        },
        {
          "image":"GamingRace/images/S14.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=11684&aid=23765",
        },
      ],
      games:[
        { image: 'GamingRace/images/bt12_1.png',id:8191},
        { image: 'GamingRace/images/bt12_2.png',id:8192 },
        { image: 'GamingRace/images/bt12_3.png',id:8193},
        { image: 'GamingRace/images/bt12_4.png',id:8194},
      ],
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
            slidesPerView:4,
            grid:{
              fill:'colmn',
              rows:2
            }
          }
        }
      },
      today:new Date(),
      menu1:[8241,8242,8187,8188,8189,8243,8190,8244],
      menu2:[8195,8196],
      menuPro:8233,
      isSp:true
    }
  },
  mounted() {
    const { today } = this;
    this.fixedBg('.background2','.nb-box');

    if (today >= new Date('2025/06/01')) this.isSp = false;

    //撈取上方商品陳列清單
    this.getFloorSingle(this.menuPro)
  },
  methods: {
    showMsg() {
      this.$refs.alert.openAlert();
    },
  },
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/GamingRace/images/";
$origin: "https://events.tk3c.com/events_net/events_net/GamingRace/images/";

/*  共用樣式調整 */
body{
  background: #140c27;
}

.bg01 {
  background: none;
}

#gaming-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 70%;
    .title {
      width: 45%;
      position: absolute;
      right: 0;
      left: 0;
      top: 14%;
      margin: 0 auto;
      animation: blurFadeIn 1.5s ease-in;
    }
    .people {
      width: 50%;
      position: absolute;
      top: 26%;
      left: 0;
      right: 0;
      margin: 0 auto 0;
      animation-duration: 0.8s;
    }
    .product {
      width: 48%;
      position: absolute;
      top: 57.5%;
      left: 0;
      right: 0;
      margin: 0 auto 0;
      .bg01 {
        margin: 0 auto 0;
      }
    }
  }
}

.background2{
   width: 100%;
    height: 100%;
    $image: $dir + "bg.jpg";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
    mix-blend-mode: lighten;
    &.fixed {
      position: fixed;
      bottom: 0;
      z-index: -2;
      background-position: 0 -90vw,top;
    }
}

.nb-box {
  .tab {
    .swiper-slide {
      flex-basis: unset;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "1600px") {
  #gaming-container {
    .background {
      .product {
        width: 55%;
        height: 24.5vmax;
        top: 39vmax;
        overflow: hidden;
      }
    }
  }
}
@include media-query("mobile", "1025px") {
  #gaming-container {
    .background {
      .product {
        width: 56%;
        height: 27vw;
        top: 39vw;
      }
    }
  }
}
@include media-query("mobile", "992px") {
  #gaming-container {
    .background {
      padding-bottom: 155vw;
      .title {
        width: 80%;
        top: 9vw;
      }
      .people {
        width: 100%;
        top: 33vw;
      }
      .product {
        width: 80%;
        height: auto;
        top: 85vw;
        .swiper-slide {
          width: calc(100% / 2 - 5px);
        }
      }
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position: -10vw 4vw,top;
    &.fixed {
      background-size: 120% auto;
      background-position: -10vw -100vw,top;
    }
  }

  .nb-box {
    .tab {
      .swiper-wrapper {
        justify-content: space-around;
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #gaming-container {
    .background {
      padding-bottom: 185vw;
      .title {
        width: 90%;
        top: 24vw;
      }
      .people {
        width: 120%;
        top: 50vw;
        left: -7vw;
      }
      .product {
        width: 92%;
        top: 104vw;
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -39vw 12vw,top;
    &.fixed {
      background-size: 180% auto;
      background-position: -39vw -125vw,top;
    }
  }
}
</style>
