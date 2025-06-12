<script setup>
import listD from '@/views/layout/listD.vue'
import listM from '@/views/layout/listM.vue'

const today = new Date()

const contents = [
  {
    logo: 'deloitteForStaff/images/logo.png',
    title: 'deloitteForStaff/images/KV2.png',
    people:'deloitteForStaff/images/people.png',
    product:'deloitteForStaff/images/pt.png',
    mark:'deloitteForStaff/images/mark.png',
    item:'deloitteForStaff/images/p.png',
    singleImage: 'starlux/images/bar.png',
    floor: [
      {
        text: '通訊/娛樂',
        type:listD
      },
      {
        text: '辦公週邊',
        type:listD
      },
      {
        text: '清涼迎夏',
        type:listM
      },
    ],
    alertHtml: `
       <li>1.收單時間：即日起至<span class="red">2025/6/30 23:59</span>止</li>
        <li>2.訂購限制：</li>
        <li><p>(1) 每位訂購人每項單品限購1台，商品不得轉售。</p></li>
        <li><p>(2) 專案商品均為限量，品項、專屬價格，不接受口頭預訂、改變規格。如各品項訂購數量超過限量，則以收單時間順序為準，超過限量之訂單自動失效。</p></li>
        <li><p>(3) 下單後可於上班時間週一~週五9:00-12:00; 13:00-18:00電聯確認，0800-095-885燦坤網路商城客服中心詢問。</p></li>
        <li><p class="last">(4) 詢問客服中心時請告知【訂單編號】。</p></li>
        <li>3.取貨門市與其他配送方式:</li>
        <li><p class="last">蘋果系列，僅限【門市取貨】。其餘備貨完成，以新竹物流配送。</p></li>
        <li>4.【門市取貨】通知與期限:</li>
        <li><p>(1) 貨到門市後，會由燦坤3C門市人員依訂購單電話聯繫訂購人。</p></li>
        <li><p>(2) 請於3日內至選擇的取貨門市完成取貨，逾期未完成取貨則訂單自動取消。</p></li>
        <li><p class="other"><span class="red"> -請留意營業結束時間- </span></p></li>
        <li><p>(3) 取貨需出示「員工識別證」。</p></li>
        <li><p class="last">(4) 如非訂購人本人取貨、取貨未攜帶員工識別證等，燦坤3C得拒絕本交易。</p></li>
        <li>5.請務必填寫正確資訊，若因電話、員工編號錯誤等不可歸責於燦坤3C之事由，導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。</li>
        <li>6.本訂購單資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤相關部及協力廠商等於聯絡溝通之用途。</li>
          `,
    menu: [4960,4961,4965]
  }
];

</script>

<template>
  <StaffCommon :contents="contents" :asideType="'mobile2'"></StaffCommon>
</template>

<style lang="scss">
@charset "utf-8";
@import '../../../assets/sass/staff';

body {
  background: #146de7;
}

.bg01 {
  &:before {
    background: #dd90eb;
  }
}

#staff-container {
  .background {
    padding-bottom: 48%;
    .logo {
      top: 15%;
    }
    .title {
      width: 50%;
      left: 15%;
      top: 24%;
    }
    .mark {
      width: 10%;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #staff-container {
    .background {
      padding-bottom: 70vw;
      .logo {
        width: 30%;
        top: 12vw;
      }
      .title {
        width: 80%;
        left: 28vw;
        top: 19vw;
      }
      .mark {
        width: 15%;
        right: 2vw;
      }
      .people {
        width: 90%;
        top: 10vw;
        left: -7vw;
      }
      .product {
        width: 40%;
        right: 1vw;
        top: 45vw;
      }
    }
  }
}

@include media-query('mobile', '576px') {
  .floor {
    .title {
      width: 150%;
      margin: 0 -23% 2%;
    }
  }

  #staff-container {
    .background {
      padding-bottom: 124vw;
      .logo {
        width: 50%;
        top: 28vw;
        left: -12vw;
      }
      .title {
        width: 120%;
        left: 4vw;
        top: 42vw;
      }
      .mark {
        width: 23%;
        top: 20vw;
        right: 0;
        z-index: -1;
      }
      .people {
        display: none;
      }
      .product {
        width: 63%;
        top: 83vw;
      }
    }
  }
}
</style>
