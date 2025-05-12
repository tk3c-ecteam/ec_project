<script setup>
import listD from '@/views/layout/listD.vue'

const contents = [
  {
    logo: 'tup/images/logo.png',
    title: 'tup/images/title250507_tup2.png',
    mark: 'tup/images/mark.png',
    store: 'tup/images/S01.png',
    storeBtn: ['tup/images/S01-1.png', 'tup/images/S01-2.png'],
    singleImage:'starlux/images/bar.png',
    floor: [
      {
        text: '許願清單',
        type:listD
      }
    ],
    alertHtml: `
        <li>1.收單時間：即日起至<span class="red">2025/6/30 23:59</span>止</li>
        <li>2.交易須知：</li>
        <li><p>(1) 限【門市取貨門市付款】(預約門市取貨且選擇門市付款)，商品不得轉售。</p></li>
        <li><p>(2) 指定取貨/付款門市</p></li>
        <li><p>桃區：</p></li>
        <li style="padding-left:20px"><p>楊梅店、南崁店、桃園旗艦店、藝文店、大園店、桃園中山店、桃園力行店、內壢忠孝店、平鎮環南店</p></li>
        <li><p>竹苗區：</p></li>
        <li style="padding-left:20px"><p>竹南店、新竹店、竹東店、苗栗店、光復店、頭份店、苑裡店、竹北店、竹北自強店、新竹民富店、神山超越店</p></li>
        <li><p>(3) 貨到門市後，燦坤3C會再行通知，請於期限內攜帶【會員證】至【預約取貨門市】，出示【門市交易預約單】後於實體門市現場進行選購與付款，逾期未完成取貨則預約單自動取消。</p></li>
        <li><p>(4) 如非本人取貨、取貨未攜帶會員識別證等，燦坤3C得拒絕本交易。</p></li>
        <li><p>(5) 請務必填寫真實、正確資訊，若因姓名、電話、員工編號錯誤等不可歸責於燦坤3C之事由導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。</p></li>
        <li><p class="last">(6) 於本網頁所輸入的資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤及協力廠商等於聯絡溝通使用。</p></li>
        <li>3.請留意於本網頁成立的是【門市交易預約單】，是指於本網頁預約【至燦坤實體門市進行交易的優先資格】，商品依門市現貨為主，相關交易流程依實體門市規定為準，不屬於通訊交易，依法不享有七天猶豫期。</li>
        <li>4.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
          `,
     menu: [5989],
     alertTitle:'福利委員會員購專案'
  }
]
</script>

<template>
  <StaffCommon :contents="contents"></StaffCommon>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/tup/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/tup/images/';

body {
  background: #7cdefc;
  position: relative;
  &:before {
    $image: $dir + 'BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
  }
}

.nav-group {
  .swiper-wrapper {
    padding-bottom: 5px;
  }
  .mix{
    background: none
  }
  .swiper-slide {
    &:first-of-type {
      margin-right: -20px !important;
    }
  }
}

@import '../../../assets/sass/staff';

#staff-container {
  .background {
    padding-bottom: 35%;
    .logo {
      width: 20%;
    }
    .mark {
      width: 10%;
    }
  }
}

.store-group {
  .buttons {
    a {
      width: 40%;
    }
  }
}

.floor {
  .title {
    width: 80%;
    margin: 0 auto -2%;
  }
}

@include media-query('mobile', '992px') {
  body {
    &:before {
      background-position:
        -5vw 4vw,
        top;
    }
  }

  #staff-container {
    .background {
      padding-bottom: 50vw;
      .logo {
        width: 40vw;
      }
      .mark {
        width: 15vw;
      }
    }
  }

  .floor {
    .title {
      width: 100%;
    }
  }
}

@include media-query('mobile', '576px') {
  body {
    &:before {
      background-position:
        -26vw 10vw,
        top;
    }
  }

  #staff-container {
    .background {
      padding-bottom: 70vw;
      .logo {
        width: 50vw;
        top: 23vw;
      }
      .title {
        width: 100%;
        top: 29vw;
      }
      .mark {
        width: 18vw;
        right: 0;
      }
    }
  }

  .store-group {
    .buttons {
      a {
        width: 44vw;
      }
    }
  }

  .nav-group {
    .swiper-slide {
      &:first-of-type {
        margin-right: -10px !important;
      }
    }
  }

  .floor {
    .title {
      width: 140%;
      margin: 0 -19% -4%;
    }
  }
}
</style>
