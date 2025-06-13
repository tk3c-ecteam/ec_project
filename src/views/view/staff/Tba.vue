<script setup>
import listD from '@/views/layout/listD.vue'
const contents = [
  {
    logo: 'tba/images/logo.png',
    title: 'tba/images/title2.png',
    mark: 'tba/images/mark.png',
    singleImage:'tba/images/bar.png',
    floor: [
      {
        text:'律師公會優惠',
        type:listD
      }
    ],
    alertHtml: `
        <li>1.收單時間：即日起至<span class="red">2025/6/30 23:59</span>止</li>
        <li>2.交易須知：</li>
        <li><p>(1) 限【門市取貨門市付款】(預約門市取貨且選擇門市付款)，商品不得轉售。</p></li>
        <li><p>(2) 指定取貨/付款門市&nbsp;&nbsp;全台門市</p></li>
        <li><p>(3) 貨到門市後，燦坤3C會再行通知，請於期限內攜帶【會員證】至【預約取貨門市】，出示【門市交易預約單】後於實體門市現場進行選購與付款，逾期未完成取貨則預約單自動取消。</p></li>
        <li><p>(4) 如非本人取貨、取貨未攜帶會員證等，燦坤3C得拒絕本交易。</p></li>
        <li><p>(5) 請務必填寫真實、正確資訊，若因姓名、電話、會員編號錯誤等不可歸責於燦坤3C之事由導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。</p></li>
        <li><p class="last">(6) 於本網頁所輸入的資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤及協力廠商等於聯絡溝通使用。</p></li>
        <li>3.請留意於本網頁成立的是【門市交易預約單】，是指於本網頁預約【至燦坤實體門市進行交易的優先資格】，商品依門市現貨為主，相關交易流程依實體門市規定為準，不屬於通訊交易，依法不享有七天猶豫期。</li>
        <li>4.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
          `,
    otherBanners:[
      {
        url:'',
        pc:'tba/images/member.png',
        mobile:'tba/images/member.png'
      }
    ],
    menu:[7742],
    alertTitle:'開業福袋專屬優惠'
  }
];
</script>

<template>
  <StaffCommon :contents="contents"></StaffCommon>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/tba/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/tba/images/';

body {
  background: #2a1617;
  position: relative;
  &:before {
    $image: $dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
  }
}

.bg01 {
  &:before {
    background: #c87923;
  }
}

.floor {
  .title {
    b {
      color: #6a430e;
      top: 55% !important;
    }
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
    padding-bottom: 28%;
    .logo {
      width: 30%;
      top: 30%;
    }
    .title {
      width: 50%;
      top: 47%;
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

@include media-query('mobile', '992px') {
  body {
    &:before {
      background-position:
        -10vw 4vw,
        top;
    }
  }

  #staff-container {
    .background {
      padding-bottom: 50vw;
      .logo {
        width: 50%;
        top: 15vw;
      }
      .title {
        width: 80%;
        top: 23vw;
      }
      .mark {
        width: 15vw;
      }
    }
  }

  .nav-group {
    .swiper-slide {
      &:first-of-type {
        margin-right: -15px !important;
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
      $image:$dir + 'M_kv2.jpg';
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position:
        0 2.8rem,
        top;
    }
  }

  #staff-container {
    .background {
      padding-bottom: 90vw;
      .logo,
      .title,
      .mark {
        display: none;
      }
    }
  }

  .store-group,
  .banner-group {
    display: none;
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
      width: 120%;
      margin: 0 -10% 5%;
    }
  }
}
</style>
