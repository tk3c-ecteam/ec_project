<script setup>
import CommonFloor from '../../floor/CommonFloor.vue'
import StaffCommon from './StaffCommon.vue'
import listM from '../../layout/listM.vue'

const today = new Date()

var contents = [
  {
    logo: 'evaair/images/logo.png',
    title: 'evaair/images/title4.png',
    store: 'evaair/images/store2.png',
    singleImage: 'starlux/images/bar.png',
    floor: [
      {
        text: 'iPhone'
      },
      {
        text: 'MacBook',
        type: listM
      },
      {
        text: 'iPad Pro',
        type: listM
      },
      {
        text: 'Apple watch SE'
      },
      {
        text: 'Apple watch S10'
      },
      {
        text: 'Apple Watch Ultra'
      },
      {
        text: '耳機'
      }
    ],
    alertHtml: `
        <li>1.收單時間：即日起至<span class="red">2024/12/08 23:59</span>止</li>
        <li>2.交易須知：</li>
        <li><p>(1) 限【門市取貨門市付款】(預約門市取貨且選擇門市付款)，商品不得轉售。</p></li>
        <li><p>(2) 指定取貨/付款門市</p></li>
        <li><p>桃區：</p></li>
        <li><p>楊梅店、南崁店、桃園旗艦店、藝文店、大園店、桃園中山店、桃園力行店、內壢忠孝店、平鎮環南店</p></li>
        <li><p>竹苗區：</p></li>
        <li><p>竹南店、新竹店、竹東店、苗栗店、光復店、頭份店、苑裡店、竹北店、竹北自強店、新竹民富店、神山超越店</p></li>
        <li><p>(3) 貨到門市後，燦坤3C會再行通知，請於期限內攜帶【員工識別證】至【預約取貨門市】，出示【門市交易預約單】後於實體門市現場進行選購與付款，逾期未完成取貨則預約單自動取消。</p></li>
        <li><p>(4) 如非本人取貨、取貨未攜帶員工識別證等，燦坤3C得拒絕本交易。</p></li>
        <li><p>(5) 請務必填寫真實、正確資訊，若因姓名、電話、員工編號錯誤等不可歸責於燦坤3C之事由導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。</p></li>
        <li><p class="last">(6) 於本網頁所輸入的資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤及協力廠商等於聯絡溝通使用。</p></li>
        <li>3.請留意於本網頁成立的是【門市交易預約單】，是指於本網頁預約【至燦坤實體門市進行交易的優先資格】，商品依門市現貨為主，相關交易流程依實體門市規定為準，不屬於通訊交易，依法不享有七天猶豫期。</li>
        <li>4.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
          `
  }
]

var menu = [7625, 7626, 7629, 7630, 7631, 7635, 7632]

var contentAfter = [
  {
    title: 'evaair/images/title5.png',
    floor: [
      {
        text: '手機'
      },
      {
        text: '平板'
      },
      {
        text: 'WATCH'
      }
    ],
    alertHtml: `
        <li>1.收單時間：即日起至<span class="red">2024/12/31 23:59</span>止</li>
        <li>2.交易須知：</li>
        <li><p>(1) 限【門市取貨門市付款】(預約門市取貨且選擇門市付款)，商品不得轉售。</p></li>
        <li><p>(2) 指定取貨/付款門市</p></li>
        <li><p>桃區：</p></li>
        <li><p>楊梅店、南崁店、桃園旗艦店、藝文店、大園店、桃園中山店、桃園力行店、內壢忠孝店、平鎮環南店</p></li>
        <li><p>竹苗區：</p></li>
        <li><p>竹南店、新竹店、竹東店、苗栗店、光復店、頭份店、苑裡店、竹北店、竹北自強店、新竹民富店、神山超越店</p></li>
        <li><p>(3) 貨到門市後，燦坤3C會再行通知，請於期限內攜帶【員工識別證】至【預約取貨門市】，出示【門市交易預約單】後於實體門市現場進行選購與付款，逾期未完成取貨則預約單自動取消。</p></li>
        <li><p>(4) 如非本人取貨、取貨未攜帶員工識別證等，燦坤3C得拒絕本交易。</p></li>
        <li><p>(5) 請務必填寫真實、正確資訊，若因姓名、電話、員工編號錯誤等不可歸責於燦坤3C之事由導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。</p></li>
        <li><p class="last">(6) 於本網頁所輸入的資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤及協力廠商等於聯絡溝通使用。</p></li>
        <li>3.請留意於本網頁成立的是【門市交易預約單】，是指於本網頁預約【至燦坤實體門市進行交易的優先資格】，商品依門市現貨為主，相關交易流程依實體門市規定為準，不屬於通訊交易，依法不享有七天猶豫期。</li>
        <li>4.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
          `
  }
]

var menu1215 = [7625, 7626, 7630]

// 12/15更換標題
if (today >= new Date('2024/12/15')) {
  contents[0].title = contentAfter[0].title
  contents[0].floor = contentAfter[0].floor
  contents[0].alertHtml = contentAfter[0].alertHtml
  menu = menu1215
}
</script>

<template>
  <StaffCommon v-model:contents="contents" v-model:menu="menu"></StaffCommon>

  <!-- 商品樓層 -->
  <CommonFloor
    :floors="contents[0].floor"
    :menu="menu"
    :singleImage="contents[0].singleImage"
  ></CommonFloor>

  <!-- 活動辦法 -->
  <section class="info-group scroll" id="info">
    <h2 class="title">員工福利委員會員購專案</h2>
    <div class="text">
      <p class="last">注意事項如下</p>
      <ol v-html="contents[0].alertHtml"></ol>
    </div>
  </section>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/evaair/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/evaair/images/';

body {
  background: #225f3e;
  position: relative;
  &:before {
    $image: $dir + 'bg.jpg';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
  }
}

.bg01 {
  &:before {
    background: #30694a;
  }
}

#staff-container {
  .background {
    padding-bottom: 34%;
  }
}

.floor {
  .title {
    width: 900px;
    margin: 0 auto 0;
    img {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 0;
      z-index: -1;
    }
    b {
      font-size: 3em;
      line-height: 15rem;
      color: #fff;
      font-weight: bold;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  .floor {
    .title {
      width: 100%;
      b {
        font-size: 3rem;
        line-height: 25vw;
      }
    }
  }
}

@include media-query('mobile', '576px') {
  .floor {
    .title {
      width: 150%;
      margin: 0 -23% 0;
      b {
        font-size: 2rem;
        line-height: 37vw;
      }
    }
  }
}

@import '../../../assets/sass/staff';
</style>
