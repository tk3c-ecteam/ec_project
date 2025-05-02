<template>
  <div id="intel-container">
    <div class="background">
      <a :href="$filters.addGALink('https://softwareoffer.intel.com')" target="_blank" class="w:full h:full abs left:0 right:0 m:auto"></a>
    </div>

    <div class="background2"></div>

    <!-- 上方商品 -->
    <section class="top-group">
      <div class="rel">
        <ProductTop :pro="product2[menuPro]"></ProductTop>
      </div>
    </section>

    <!-- 獨家優惠指南 -->
    <section class="special-box scroll" titles="獨家優惠指南" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/S01.png')" />
      </h2>

      <ul class="gap:10 mb:2%">
        <li class="w:80% w:95%@<992 w:full@<576">
          <div class="flex flex-direction:row flex-direction:column@<576 gap:10">
            <a class="w:50% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947&strPreView=y')" target="_blank" :class="[!isOff ? 'off' : '']">
              <img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-1.png')" />
            </a>
            <a class="w:50% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
              target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-2.png')" /></a>
          </div>
        </li>
        <li class="w:39% w:47%@<992 w:full@<576">
          <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img
              :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-3.png')" /></a>
        </li>
        <li class="w:40% w:46%@<992 w:full@<576 flex flex-direction:column gap:10">
          <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121988')"
            target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-4.png')" /></a>
          <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121986')"
            target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-5.png')" /></a>
          <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121987')"
            target="_blank"><img :src="$filters.siteUrl('2025_Intel_Spring_Bundle/images/sp01-6.png')" /></a>
        </li>
      </ul>
    </section>

    <!-- 樓層商品 -->
    <CommonFloor :floors="floors" :menu="menu" :moreImage="moreImage"></CommonFloor>

    <!-- 注意事項 -->
     <section class="info-box scroll" titles="注意事項" id="info">
        <h1 class="f:3em f:2.5em@<992 f:2em@<576 word-break:keep-all color:#fff f:bold">【Intel末日文明遊戲包】解鎖密技</h1>
        <p class="w:full color:#fff text:left@<576 pl:10px@<576 box:border-box f:1.5em f:1.2em@<992 mb:6% mb:12%@<576">購買指定型號筆電，至<a class="color:#f00 f:bold" :href="$filters.addGALink('https://softwareoffer.intel.com')" target="_blank">指定網站</a>登記，即可獲得遊戲包！</p>

        <div class="content color:#fff">
          <h2 class="mb:20px f:1.5em@<576 mb:10px@<576">注意事項：</h2>
          <ul>
            <li>1.【Intel 未日文明遊戲包】活動指定型號如下，詳細活動辦法則以各通路公告為準。</li>
            <li class="short">指定型號如下</li>
            <li class="short">(1) 搭載 Intel® Core™ 第14代處理器之HX系列筆電</li>
            <li class="short">(i5-14450HX、i5-14500HX、i7-14650HX、i7-14700HX、i9-14900HX)</li>
            <li class="short">(2) 搭載 Intel® Core™ Ultra (系列) 行動處理器之H系列筆電</li>
            <li class="short">(125H、135H、155H、165H、185H)</li>
            <li class="short">(3) 搭載 Intel® Core™ Ultra (系列) 行動處理器之H/HX系列筆電</li>
            <li class="short mb:25px!">(225H、235H、255H、265H、235HX、245HX、255HX、265HX、275HX、285HX)</li>
            <li>2.《Dying Light: The Beast》即將推出，登錄後待遊戲上市後始能使用，實際上市時間以遊戲官方公告為主。</li>
            <li>3.【Intel 未日文明遊戲包】內容《Dying Light: The Beast》與《席德·梅爾的文明帝國 VII》兩款遊戲序號數量有限，送完為止。完整遊戲條款及細則請參閱 <a class="color:#42b9ef text:underline">https://softwareoffer.intel.com/offer/2502-05/terms</a>，欲兌換遊戲包之消費者，請務必保留原購買證明、產品型號、產品機等相關購買資料以備主辦單位查詢。若屆時無法提供，恐主辦單位無法協助處理遊戲包下載之相關問題。</li>
            <li>4.經由其他管道非本促銷活動之配合管道所取得之兌換者，不在主辦單位協助範圍內。</li>
            <li>5.本遊戲包兌換時間至台灣時間2025/09/30(一)23:59截止。</li>
            <li>本遊戲之遊戲、語言使用者端是否支援，視各個人電腦及電腦使用國家(如：所在地區/國家之網路限制、個人電腦中的瀏覽器版本、網路安全設定等等)導致下載中斷或失敗，主辦單位與指定配合通路概不負責，並勿多次點擊登入及換頁，以免帳號連系統鎖住。</li>
            <li>6.遊戲序號僅供本活動消費者使用，不可兌換現金，且不得將兌換過程或更改其他用途，如違失或毀損恕不補發。偽造兌換方式、購買或與其他方式之行為，以致 Intel、主辦單位或指定配合通路或其他第三方人員名譽受損，主辦單位保留法律追訴權利。消費者使用本活動提供之遊戲包內容若無法兌換，消費者應負全責，與主辦單位無關。</li>
            <li>7.遊戲內部分遊戲會因個別使用年齡限制，以致遊戲無法使用，對此主辦單位概不負責。若遊戲安裝或正常使用所遇狀況為遊戲軟體本身所致，導致任何傷害者，請洽發行遊戲商以獲得詳細資訊，主辦單位概不負責。</li>
            <li>8.請妥善保管您的遊戲金鑰、下載之遊戲對應遊戲序號，主辦單位與指定配合通路不負擔任何遺失補發查詢之責任。</li>
            <li>9.主辦單位保留變更、取消或終止本活動之權利，包括但不限於活動條款及活動辦法。</li>
            <li class="mb:35px!">10.若對於【Intel 未日文明遊戲包】有任何問題，請來信 support@qgidea.com.tw，活動小組服務時間為一至五 11:00 - 15:00。</li>
          </ul>

          <p>© 2025 Techland S.A. 保留所有權利。</p>
          <p>© 2025 Take-Two Interactive Software, Inc. Sid Meier’s Civilization - Civilization - Civ - 2K - Firaxis Games - Take-Two Interactive Software
其相關標誌為 Take-Two Interactive Software, Inc 及其子公司在美國及/或其他國家之商標及/或註冊商標。</p>
          <p>
© 2025 Intel Corporation，保留所有權利。Intel 和 Intel 標誌為 Intel Corporation 或其子公司在美國及/或其他國家之商標。</p>    
        </div>
     </section>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :type="'mobile'"></RightAside>
</template>

<script>
export default {
  data() {
    return {
      specials:[
        {
          "url":"https://www.tk3c.com/pt.aspx?pid=250713-809985",
          "image":"2025_Intel_Spring_Bundle/images/C01.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=252609",
          "image":"2025_Intel_Spring_Bundle/images/C02.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"2025_Intel_Spring_Bundle/images/C03.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"2025_Intel_Spring_Bundle/images/C04.png",
        },
         {
           "url":"https://www.tk3c.com/pt.aspx?pid=240629-levelup",
          "image":"2025_Intel_Spring_Bundle/images/C05.png",
          "class":"long"
        },
      ],
      special2:[
        {
          "image":"2025_Intel_Spring_Bundle/images/C05-1_M.png",
          "url":""
        },
       {
          "image":"2025_Intel_Spring_Bundle/images/C05-2_M.png",
          "url":""
        },{
          "image":"2025_Intel_Spring_Bundle/images/C05-3_M.png",
          "url":""
        },
      ],
      floors:[
         {
          "image":"2025_Intel_Spring_Bundle/images/S02.png",
          "moreUrl":"https://www.tk3c.com/dic1.aspx?cid=11124&aid=22496",
        },
         {
          "image":"2025_Intel_Spring_Bundle/images/S03.png",
          "moreUrl":"https://www.tk3c.com/dic1.aspx?cid=11124&aid=23926",
        }
      ],
      today:new Date(),
      moreImage:'2025_Intel_Spring_Bundle/images/more.png',
      menu:[8033,8034],
      menuPro:8032,
      isOff:true
    }
  },
  mounted() {
    const { today } = this;

    this.fixedBg('.background2','.special-box');

    //撈取上方商品
    this.getFloorSingle(this.menuPro);

    if (today >= new Date('2025/05/11')) this.isOff = false;
  },
}
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/2025_Intel_Spring_Bundle/images/";
$origin: "https://events.tk3c.com/events_net/events_net/2025_Intel_Spring_Bundle/images/";

/*  共用樣式調整 */
body{
  background: #071f40;
   &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + "BG_PC.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
  }
}

.bg01 {
  background: none;
}


#intel-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 38%;
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image:$dir + 'bg2.png';
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
  &.fixed {
    position: fixed;
    top: 0;
    background-position: 0 -30vw,top;
  }
}

.special-box {
  .title {
    width: 32%;
  }
}

.top-group {
  .bg01 {
    width: 90%;
    background: #fff;
    padding: 2% !important;
    box-sizing: border-box;
  }
  .swiper-wraper {
    justify-content: left;
  }
}

.floor {
  .bg01 {
    margin: 0 auto 0;
  }
}

.info-box {
  .content {
    text-align: left;
  }
  h2 {
    font-size: 2em;
  }
  a {
    display: inline;
    &:hover {
      color: #f00;
    }
  }
  li {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    font-size: 1.1em;
    &.short {
      padding-left: 10px;
      box-sizing: border-box;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #intel-container {
    .background {
      padding-bottom: 42vw;
    }
  }
  .special-box {
    .title {
      width: 45%;
    }
  }

  .top-group {
    .bg01 {
      width: 100%;
    }
  }

  .background2 {
    &.fixed {
      background-position: 0 5vw,top;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #intel-container {
    .background {
      padding-bottom: 120vw;
    }
  }

  body {
    &:before {
      $image:$dir + 'BG_M.png';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 45px,top;
    }
  }

  .special-box {
    .title {
      width: 55%;
    }
  }

  .background2 {
    width: 200%;
    left: -47%;
    &.fixed {
      background-position: 0 5vw,top;
    }
  }
}
</style>
