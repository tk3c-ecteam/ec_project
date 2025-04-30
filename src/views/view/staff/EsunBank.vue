<script>
import listD from '@/views/layout/listD.vue'

export default {
  data() {
    return {
      listD,
      navButtons: [
        {
          image: 'tba/images/nav3_a.png',
          url: 'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
        },
        {
          image: 'tup/images/nav4.png',
          url: 'https://events.tk3c.com/events_net/nightsale/index.html'
        },
        {
          image: 'tup/images/nav5.png',
          url: 'https://events.tk3c.com/events_net/green_subsidy/index.html'
        },
        {
          image: 'tup/images/nav6.png',
          url: 'https://events.tk3c.com/events_net/events_net/banks/bank.html'
        }
      ],
      floors:[
        {
          text:'律師公會優惠',
          type:listD
        }
      ],
      alertHtml:`
           <li>1.收單時間：即日起至<span class="red">2025/6/30 23:59</span>止</li>
        <li>2.交易須知：</li>
        <li><p>(1) 限【門市取貨門市付款】(預約門市取貨且選擇門市付款)，商品不得轉售。</p></li>
        <li><p>(2) 指定取貨/付款門市&nbsp;&nbsp;全台門市</p></li>
        <li><p>(3) 貨到門市後，燦坤3C會再行通知，請於期限內攜帶【會員證】至【預約取貨門市】，出示【門市交易預約單】後於實體門市現場進行選購與付款，逾期未完成取貨則預約單自動取消。</p></li>
        <li><p>(4) 如非本人取貨、取貨未攜帶員工識別證等，燦坤3C得拒絕本交易。</p></li>
        <li><p>(5) 請務必填寫真實、正確資訊，若因姓名、電話、員工編號錯誤等不可歸責於燦坤3C之事由導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。</p></li>
        <li><p class="last">(6) 於本網頁所輸入的資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤及協力廠商等於聯絡溝通使用。</p></li>
        <li>3.請留意於本網頁成立的是【門市交易預約單】，是指於本網頁預約【至燦坤實體門市進行交易的優先資格】，商品依門市現貨為主，相關交易流程依實體門市規定為準，不屬於通訊交易，依法不享有七天猶豫期。</li>
        <li>4.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
      `,
      menus:[8030],
      singleImage:'tba/images/bar.png'
    }
  },
}

</script>

<template>
  <div id="staff-container">
    <div class="background">
      <p class="logo">
         <img :src="$filters.siteUrl('esunbank_gov/images/logo.png')" />
      </p>
      <h2 class="title">
         <img :src="$filters.siteUrl('esunbank_gov/images/title2.png')" />
      </h2>
       <p class="card animate__animated animate__fadeInLeft">
         <img :src="$filters.siteUrl('esunbank_gov/images/card.png')" />
      </p>
      <a :href="$filters.addGALink('https://events.tk3c.com/events_net/CatalogFile/Html/20250328092000666_4_Html.html')" target="_blank" class="go animate__animated animate__bounceInLeft">
         <img :src="$filters.siteUrl('esunbank_gov/images/go.png')" />
      </a>
       <p class="mark">
         <img :src="$filters.siteUrl('esunbank_gov/images/logo2.png')" />
      </p>
    </div>
  </div>

   <!-- 導航區 -->
    <section class="nav-group mt:-23% mt:-53%@<992">
      <div class="navs">
        <swiper
          :loop="false"
          :space-between="10"
          :slidesPerView="'auto'"
        >
          <swiper-slide class="flex-basis:19% flex-basis:22%@<992 flex-basis:28%@<576">
            <div class="mix flex flex-wrap:wrap flex-direction:column bg:#fff r:20px r:10px@<576 p:4% box:border-box">
              <img class="w:65% m:0|auto|4%" :src="$filters.siteUrl('tup/images/nav2.png')" />
              <a class="w:70%" href="https://www.tk3c.com">
                <img :src="$filters.siteUrl('tup/images/nav1.png')" />
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="flex-basis:19% flex-basis:22%@<992 flex-basis:28%@<576" v-for="nav in navButtons">
            <a :href="$filters.addGALink(nav.url)" target="_blank">
              <img :src="$filters.siteUrl(nav.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

   <div class="custom-top" :class="{'isShow':isGoTop}" @click="goTop2"><p></p></div>
</template>

<style lang="scss">
@charset "utf-8";

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/esunbank_gov/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/esunbank_gov/images/';

body {
  background: #000;
}
.bg01 {
  &:before {
    background: #1a82cd;
    border-radius: 30px;
    box-sizing: border-box;
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
     $image: $dir + "bg.jpg";
      @include bg-responsive($image, 2000, 1000);
    background-position: 0 45px,top;  
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 58%;
    .logo {
      width: 20%;
      top: 7%;
      left: 2%;
      right: unset;
    }
    .title {
      width: 65%;
      top: 4%;
      left: -6%;
      img {
        animation: none;
      }
    }
    .mark {
      width: 10%;
    }
    .go {
      width: 10%;
      position: absolute;
      animation-duration: 1.8s;
      top: 38%;
      left: 40%;
     img {
       &:hover {
        transform: scale(1.3);
        transition: all 0.5s ease;
      }
     }
    }
    .card {
      width: 20%;
      position: absolute;
      animation-duration: 0.6s;
      right: 24%;
      top: 21%;
      img {
        animation: upAndDown 1.4s linear infinite alternate;
        animation-delay: 1s;
      }
    }
  }
}

@include media-query('mobile', '992px') {
  #staff-container {
    .background {
      background-size: 150% auto;
      background-position: -46vw 4vw,top;
      padding-bottom: 105vw;
      .logo {
        width: 30%;
        top: 8vw;
      }
      .title {
        width: 85%;
        top: 8vw;
      }
      .mark {
        width: 15vw;
        right: 5vw;
      }
      .card {
        width: 25%;
        right: 14vw;
        top: 21vw;
      }
      .go {
        width: 15%;
        top: 34vw;
        left: 36vw;
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
  #staff-container {
    .background {
      background-size: 245% auto;
    background-position: -73vw 10vw,top;
      padding-bottom: 143vw;
      .logo {
        width: 40%;
        top: 15vw;
      }
      .title {
        width: 120%;
        top: 21vw;
        left: -7vw;
        right: 0;
        margin: 0 auto;
      }
      .card {
        width: 35%;
        right: 0;
        top: 43vw;
      }
      .go {
        width: 23%;
        top: 58vw;
      }
      .mark {
        width: 22%;
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
      width: 120%;
      margin: 0 -10% 5%;
    }
  }
}
</style>
