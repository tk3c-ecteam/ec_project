<template>
  <div id="lenovo-container">
    <div class="background">
      <h2 class="title">
        <a @click="alert">
           <img :src="$filters.siteUrl('lenovo2402/images/2503/title2.png')" />
        </a>
      </h2>

      <p class="product animate__animated animate__bounceInRight">
        <img :src="$filters.siteUrl('lenovo2402/images/2503/pt.png')" />
      </p>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('lenovo2402/images/2503/bg_PP.png')" />
    </p>

    <div class="background2"></div>

    <section class="pro-box mt:-16%">
      <swiper class="w:80% w:90%@<992 w:full@<576"
      :loop="false"
      :space-between="10"
      :autoplay="{
        delay:1800,
        disableOnInteraction:false
      }"
      :breakpoints="{
        0:{
          slidesPerView:2
        },
        600:{
          slidesPerView:3
        }
      }"
      :pagination="{
        el:'.pro-box .page',
        clickable:true
      }"
      >
      <swiper-slide v-for="(pro,p) in proLenovo" :key="p">
         <a :href="$filters.addGALink(pro.url)" target="_blank">
          <img :src="$filters.siteUrl(pro.image)">
        </a>
      </swiper-slide>
      </swiper>
       <div class="swiper-pagination page"></div>
    </section>

    <!-- 獨家回饋一次看 -->
    <section class="special-box scroll" titles="獨家回饋一次看" id="special">
      <h2 class="title"><img :src="$filters.siteUrl('lenovo2402/images/2503/bar_sp.png')"></h2>

      <swiper class="w:75% w:85%@<992 w:full@<576"
      :loop="false"
      :space-between="10"
       :autoplay="{
        delay:1500,
        disableOnInteraction:false
      }"
      :breakpoints="{
        0:{
          slidesPerView:1,
          grid:{
            fill:'colmn',
            rows:1
          }
        },
        601:{
          slidesPerView:2,
          grid:{
            fill:'colmn',
            rows:2
          }
        }
      }"
      >
      <swiper-slide v-for="(sp,s) in specials" :key="s">
         <a v-if="s == 0" :href="sp.href">
          <img :src="$filters.siteUrl(sp.image)">
        </a>
        <a v-else :href="$filters.addGALink(sp.href)" target="_blank">
          <img :src="$filters.siteUrl(sp.image)">
        </a>
      </swiper-slide>
      </swiper>
    </section>

    <!--商品樓層 -->
    <CommonFloor2 :floors="floors"></CommonFloor2>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<script>
export default {
  data() {
    return {
      proLenovo:[
        {
          "image":"lenovo2402/images/2503/pt01.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=250990"
        },
        {
          "image":"lenovo2402/images/2503/pt02.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=255838"
        },
        {
          "image":"lenovo2402/images/2503/pt03.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=247032"
        },
      ],
      specials:[
        {
          "image":"lenovo2402/images/2503/sp01.png",
          "href":"#pro7909"
        },
         {
          "image":"lenovo2402/images/2503/sp02.png",
          "href":"https://events.tk3c.com/events_net/2024083C/index.html"
        },
         {
          "image":"lenovo2402/images/2503/sp03.png",
          "href":"https://events.tk3c.com/events_net/2024083C/index.html"
        },
         {
          "image":"lenovo2402/images/2503/sp04.png",
          "href":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121988"
        },
      ],
      floors:[
        {
          "image":"lenovo2402/images/2503/bar_01.png",
          "url":"https://www.tk3c.com/search.aspx?q=lenovo&cid=124426",
          "id":7909
        },
        {
          "image":"lenovo2402/images/2503/bar_02.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=11124&aid=5261",
          "id":7910
        },
        {
          "image":"lenovo2402/images/2503/bar_03.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=11124&aid=5261",
          "id":7911
        },
        {
          "image":"lenovo2402/images/2503/bar_04.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=10890&aid=22655",
          "id":7912
        },
      ]
    }
  },
  mounted() {
    this.fixedBg('.background2','.special-box');
  },
  methods: {
    alert() {
      //活動辦法
      let infoHtml = `
        <p style="font-weight:bold;margin-bottom:10px;text-align:left;">【購搭載Intel 處理器筆電，不限金額登記抽 PlayStation 5 Slim主機 光碟版 (1TB) (市價$17,580，1名)】</p>
        <ul style='text-align:left;'>
          <li style='margin-bottom:10px';>1.活動期間(2025/3/1-3/31)，於燦坤線上購物網站購搭載Intel 處理器筆電，並於線上完成付款且後續未退貨退款者，並於2025/3/31(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出送PlayStation 5 Slim主機 光碟版 (1TB) (市價$17,580，1名)​</li>
          <li style='margin-bottom:10px';>2.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
          <li style='margin-bottom:10px';>3.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
          <li style='margin-bottom:10px';>4.得獎名單將於2025/4/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(https://www.facebook.com/TDdd331) 倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
          <li style='margin-bottom:10px';>5.得獎者請於2025/4/18前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
          <li style='margin-bottom:10px';>6.經核對無誤後，燦坤3C將於2025/5/28起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
          <li style='margin-bottom:10px';>7.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
          <li style='margin-bottom:10px';>8.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理:​</li>
          <li style='margin-bottom:10px;padding-left:10px';>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
           <li style='margin-bottom:10px;padding-left:10px';>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
           <li style='margin-bottom:10px';>9.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `;
     
      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        confirmButtonText: '<a href="https://www.tk3c.com/events/eventgift.aspx" target="_blank">我要登記</a>',
        position: 'center',
        showCloseButton: true,
        confirmButtonColor: '#f00',
        returnFocus: true
      });
    }
  }
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/lenovo2402/images/2503/";
$origin: "https://events.tk3c.com/events_net/events_net/lenovo2402/images/2503/";

/*  共用樣式調整 */

.bg01 {
  background: #000;
  padding: 3%;
  box-sizing: border-box;
}

#lenovo-container {
  width: 100%;
  position: relative;

  .background {
    $image: $dir + 'kv_bg2.png';
    @include bg-responsive($image, 2000, 1015);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 55%;
    .title {
      width: 35%;
      position: absolute;
      left: 19%;
      top: 19%;
      animation: rotate-fly-right 2s ease-in;
    }
    .product {
      width: 30%;
      margin: 0 auto 0;
      position: absolute;
      right: 14%;
      top: 18%;
      animation-duration: 1.3s;
      img {
        animation: upAndDown 1.5s ease-in-out infinite alternate;
      }
    }
  }
}

.background2
{
  width: 100%;
  height: 100%;
  $image: $dir + "bg.jpg";
  position: absolute;
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 45px, top;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  top: 0;
  &.fixed {
    position: fixed;
    background-position: 0 -150vw,top;
    z-index: -2;
  }
}



/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #lenovo-container {
    .background {
      background-size: 120% auto;
      background-position: -9vw 4vw,top;
      padding-bottom: 65vw;
      .title {
        width: 50%;
        top: 10vw;
        left: 5vw;
      }
      .product {
        width: 45%;
        top: 7vw;
        right: 1vw;
      }
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position: -9vw 0,top;
    &.fixed {
      background-position: -9vw -120vw,top;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #lenovo-container {
    .background {
      padding-bottom: 180vw;
      background-size: 180% auto;
      background-position: -39vw 10vw,top;
      .title {
        width: 85%;
        top: 16vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 95%;
        top: 73vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -39vw 0,top;
  }
}
</style>
