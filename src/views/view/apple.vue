<template>
  <div id="apple-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025AppleDay/images/TT01_2.png')" />
      </h2>

      <h5 class="subtitle">
        <img :src="$filters.siteUrl('2025AppleDay/images/TT02.png')" />
      </h5>

      <div class="product animate__animated animate__bounceInRight">
        <img :src="$filters.siteUrl('2025AppleDay/images/PD.png')" />
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('2025AppleDay/images/item.png')" />
    </p>

    <!-- 時間倒數 -->
    <section class="time-box" v-if="isSale">
      <vue-countdown :time="time" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
        <p><b>搶購倒數:</b> <em>{{ days }}</em> 天 <em>{{ hours }}</em> 時 <em>{{ minutes }}</em> 分 <em>{{ seconds }}</em> 秒
        </p>
      </vue-countdown>
    </section>

    <div v-show="isOpen">
    <!-- 年度最強 購物攻略 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025AppleDay/images/S01.png')" />
      </h2>

      <ul class="gap:10">
        <li>
          <swiper 
          :loop="true" 
          :effect="'flip'"
          :flipEffect="{
            slideShadows:false,
            limitRotation:true
          }"
          :autoplay="{
            delay: 1500,
            disableOnInteraction: false
          }"
          :modules="[EffectFlip]"
          >
          <swiper-slide v-for="s1 in sp1">
            <a :href="s1.url"><img :src="$filters.siteUrl(s1.image)" loading="lazy"></a>
          </swiper-slide>
          </swiper>
        </li>
         <li>
          <swiper 
          :loop="true" 
          :effect="'flip'"
          :flipEffect="{
            slideShadows:false,
            limitRotation:true
          }"
          :autoplay="{
            delay: 1900,
            disableOnInteraction: false
          }"
           :modules="[EffectFlip]"
          >
          <swiper-slide v-for="s2 in sp2">
            <a :href="s2.url"><img :src="$filters.siteUrl(s2.image)" loading="lazy"></a>
          </swiper-slide>
          </swiper>
        </li>
        <li v-for="special in specials">
           <a :href="special.url">
            <img :src="$filters.siteUrl(special.image)" loading="lazy">
          </a>
        </li>
      </ul>
    </section>

    <!-- 門市限定1/24-31 -->
     <section v-if="isBank">
      <a class="w:70% w:full@<992" @click="message">
        <img :src="$filters.siteUrl('2025AppleDay/images/bank2.png')" />
      </a>
     </section>

     <!-- 爆殺單品限量搶 -->
    <section class="pro-box" id="pro">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025AppleDay/images/S00.png')" />
      </h2>

      <listF :pro="product2[menuPro]" :isSwiper="1" :name="'pro'"></listF>
    </section>

    <!-- 其他樓層 -->
     <CommonFloor :floors="floors" :menu="menus"></CommonFloor>

     <!-- 旗艦館 -->
      <section>
        <a class="w:65% w:90%@<992" :href="$filters.addGALink('https://events.tk3c.com/events_net/appleshop/index.aspx')" target="_blank">
          <img :src="$filters.siteUrl('2025AppleDay/images/store.png')" loading="lazy" />
        </a>
      </section>
      </div>
  </div>

  <div class="custom-top" v-if="isSale">
    <p></p>
  </div>

  <!-- 右側選單+手機板 -->
   <RightAside v-show="isOpen" :asides="floors" :type="'mobile2'"></RightAside>
</template>

<script setup>
import { EffectFlip } from 'swiper/modules'
import listM from '@/views/layout/listM.vue'
</script>

<script>
export default {
  data() {
    const today = new Date();
    const future = new Date('2025/01/24 08:00:00');
    return {
      time: future - today,
      isSale:true,
      sp1:[
        {
          "image":"2025AppleDay/images/C01.png",
          "url":"#pro"
        },
         {
          "image":"2025AppleDay/images/C01-1.png",
          "url":"#pro"
        },
      ],
      sp2:[
         {
          "image":"2025AppleDay/images/C02a.png",
          "url":"#pro7744"
        },
         {
          "image":"2025AppleDay/images/C02-1a.png",
          "url":"#pro7744"
        },
      ],
      specials:[
        {
          "image":"2025AppleDay/images/C03a.png",
          "url":"#pro7748"
        },
         {
          "image":"2025AppleDay/images/C04a.png",
          "url":"#pro7754"
        },
         {
          "image":"2025AppleDay/images/C05a.png",
          "url":"#pro7753"
        },
         {
          "image":"2025AppleDay/images/C06a.png",
          "url":"#pro7752"
        },
         {
          "image":"2025AppleDay/images/C07a.png",
          "url":"#pro7750"
        },
         {
          "image":"2025AppleDay/images/C08c.png",
          "url":"#pro7746"
        },
      ],
      floors:[
        {
          "text":"iPhone 16 Pro",
          "href":"#pro7744",
          "image":"2025AppleDay/images/S02.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=11024&hid=123790"
        },
         {
          "text":"iPhone 16",
          "href":"#pro7748",
          "image":"2025AppleDay/images/S03.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=11024&hid=123789"
        },
         {
          "text":"AirPods",
          "href":"#pro7745",
          "image":"2025AppleDay/images/S04.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=22533"
        },
         {
          "text":"Apple Watch S10",
          "href":"#pro7746",
          "image":"2025AppleDay/images/S05.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=15020&hid=123781"
        },
         {
           "text":"Apple Watch Ultra 2",
          "href":"#pro7747",
          "image":"2025AppleDay/images/S06.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=15020&hid=121939"
        },
         {
            "text":"Apple Watch SE",
          "href":"#pro7749",
          "image":"2025AppleDay/images/S07.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=15020&hid=123782"
        },
         {
          "text":"iPad Air",
          "href":"#pro7750",
          "image":"2025AppleDay/images/S08.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=23209"
        },
         {
           "text":"iPad Pro",
          "href":"#pro7751",
          "image":"2025AppleDay/images/S09.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=22605"
        },
         {       
          "text":"iPad mini",
          "href":"#pro7752",
          "image":"2025AppleDay/images/S10.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=11023&hid=124067"
        },
         {
           "text":"iPad",
          "href":"#pro7753",
          "image":"2025AppleDay/images/S11.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=40444&aid=11023&hid=119832"
        },
         {
           "text":"MacBook Air",
          "href":"#pro7754",
          "image":"2025AppleDay/images/S12.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=23209"
        },
         {
            "text":"MacBook Pro",
          "href":"#pro7755",
          "image":"2025AppleDay/images/S13.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=11022"
        },
          {           
          "text":"iMac",
          "href":"#pro7756",
          "image":"2025AppleDay/images/S14.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=22609"
        },
         {
          "text":"Mac mini",
          "href":"#pro7757",
          "image":"2025AppleDay/images/S15.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=23469"
        },
         {
          "type":listM,
           "text":"配件 & 其他",
          "href":"#pro7758",
          "image":"2025AppleDay/images/S16.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=40444&aid=11026"
        },
      ],
      menuPro:7743,
      menus:[7744,7748,7745,7746,7747,7749,7750,7751,
        7752,7753,7754,7755,7756,7757,7758
      ],
      isBank:true,
      now:new Date(),
      isOpen:false
    }
  },
  mounted() {
    const { now } = this; 
    if (now >= new Date('2025/01/24 08:00:00')) {
      this.isSale = false;
      this.isOpen = true;
    }

    if (now >= new Date('2025/02/01')) this.isBank = false

    //撈取爆殺單品限量搶 陳列商品
    this.getFloorSingle(this.menuPro);

    document.querySelectorAll('.floor').forEach((el,i) => {
      if (i == 0 || i == 1) el.classList.add('num-8');
      if (i == 14) el.classList.add('num-12');
    });
  },
  methods: {
    message() {
      //活動辦法
      let infoHtml = '';

      infoHtml = `
               <p style="background:#d6d6d6;font-weight:bold;margin-bottom:10px;text-align:left;">【活動一、Apple商品星展銀行指定分期現折888】</p>
               <p style="margin-bottom:15px;text-align:left;">凡於活動期間消費刷「星展銀行信用卡」，可享有下列星展銀行專屬優惠。</p>
                <p style="color:red;font-weight:bold;margin-bottom:15px;text-align:left;">※信用卡綁定LINE Pay或其他第三方支付恕不享有本活動優惠。</p>
                 <p style="margin-bottom:20px;text-align:left;">相關活動注意事項請參閱下方，活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利。</p>
           <ul style='text-align:left;'>
                    <li style='margin-bottom:10px';>1.凡於活動期間(2025/1/24-2025/1/31)於燦坤實體門市購買Apple商品，除享有「促銷價」的折扣外，刷「星展銀行信用卡」，單筆分期刷滿35,000元(限分3、6、8期，再享分期0%利率)，可享現折888元的優惠，單張發票不累贈，最多折抵一次，結帳時須出示「Apple Day同慶-星展銀行分期現折888元券(APP)」(取得方式請見第2點說明)，憑券兌換現折888元，限量兌換268名，每位會員及每張星展銀行信用卡限回饋2次。​</li>
                    <li style='margin-bottom:10px';>2.Apple Day同慶-星展銀行分期現折888元券(APP)​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(1) 每位燦坤實體有效會員綁定燦坤APP即可取得(綁定是指以燦坤會員卡號綁定燦坤APP)，每位會員至多送二張。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 如您於2025/1/23(含)前已完成綁定燦坤APP，燦坤會於2025/1/24推送至您的APP帳戶內，您可點選APP首頁下方『優惠券』>『我的優惠券』查詢確認後即可依本活動享有現折優惠(兌換名額有限，先兌先贏，當月搶完，只能等待下一檔活動的APP電子優惠券)；若於2025/1/24(含)後至活動期間內進行綁定，則系統至遲將於綁定後的10分鐘內推送。倘限量兌換名額已滿，燦坤將不再推送，會在下一檔活動推送該檔的APP電子優惠券，您可於該檔活動搶先兌換，兌完為止。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(3) 請留意：並非取得「Apple Day同慶-星展銀行分期現折888元券(APP)」即得兌換折抵，例如：有取得券且消費符合活動條件但兌換限量已額滿、或消費不符合活動條件，皆無法享現折優惠。限量兌換折抵以燦坤結帳系統判斷為準。​</li>
                    <li style='margin-bottom:10px';>3.回饋限制與例外​</li>
                     <li style='margin-bottom:10px;padding-left:10px';>(1) 消費滿額以活動商品實際發票開立金額認定；且所有折扣後的結帳刷卡金額須滿35,000元(限分3、6、8期)始符本活動之條件​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 活動指定商品，需於2025/2/10前出貨/配送完成，如遲至2025/2/11 (含)才出貨/配送則不享本活動優惠，如因商品缺貨等不可歸責於會員的原因導致無法於前開期間出貨/配送完成，仍可享有本活動優惠。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(3) 如每位會員每張星展銀行信用卡回饋超過上限次數時，燦坤有權取消訂單。​</li>
                     <li style='margin-bottom:10px;padding-left:10px';>(4) 若退貨導致發票金額不達滿額門檻，須補足888元。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(5) 星展銀行指定信用卡不包含一般簽帳金融卡，活動不併行(例如：星展日及滿額禮活動)，另現折活動正、附卡消費分開計算。​</li>
                    <li style='margin-bottom:20px;padding-left:10px';>(6) 可與【小龍轉乾坤-星展銀行分期現折800元券(APP)】合併使用，單筆分期刷滿35,000元(限分3、6、8期，再享分期0%利率)，最高可享現折1,688元的優惠。​</li>
                    <li style='margin-bottom:30px';>活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
                   
                      <p style="background:#d6d6d6;font-weight:bold;margin-bottom:10px;text-align:left;">【活動二、Apple商品星展銀行指定分期現折800】</p>
                <p style="margin-bottom:15px;text-align:left;">凡於活動期間消費刷「星展銀行信用卡」，可享有下列檔期活動優惠。</p>
                <p style="color:red;font-weight:bold;margin-bottom:15px;text-align:left;">※信用卡綁定LINE Pay或其他第三方支付恕不享有本活動優惠。</p>
                 <p style="margin-bottom:20px;text-align:left;">相關活動注意事項請參閱下方，活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利</p>
                  <ul style='text-align:left;'>
                    <li style='margin-bottom:10px';>1.凡於活動期間(2025/1/14-2025/2/5)於燦坤實體門市或燦坤線上購物網站購買全館商品，除享有「促銷價」的折扣外，刷「星展銀行信用卡」，單筆分期刷滿20,000元(限分3、6、8期，再享分期0%利率)，可享現折800元的優惠，單張發票不累贈，最多折抵一次，1/14-1/31總限量775名，2月份限量將另行公告。​</li>
                     <li style='margin-bottom:10px;padding-left:10px';>(1) 燦坤實體門市：結帳時須出示「小龍轉乾坤-星展銀行分期現折800元券(APP)」(取得方式請見第2點說明)，憑券兌換現折800元，1/14-1/31限量兌換705名，每位會員及每張星展銀行信用卡限回饋2次。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 燦坤線上購物網站：請先加入燦坤線上購物會員或是登入會員帳號及密碼，選擇購買商品後，在購物車勾選想適用銀行優惠，將於結帳時由系統判斷是否符合活動條件，符合活動條件將直接於結帳金額現折800元，1/14-1/31限量70名，每位會員及每張星展銀行信用卡限回饋1次。​</li>
                    <li style='margin-bottom:10px';>2.小龍轉乾坤-星展銀行分期現折800元券(APP)​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(1) 每位燦坤實體有效會員綁定燦坤APP即可取得(綁定是指以燦坤會員卡號綁定燦坤APP)，每位會員至多送二張。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 如您於2025/1/13(含)前已完成綁定燦坤APP，燦坤會於2025/1/14推送至您的APP帳戶內，您可點選APP首頁下方『優惠券』>『我的優惠券』查詢確認後即可依本活動享有現折優惠(兌換名額有限，先兌先贏，當月搶完，只能等待下一檔活動的APP電子優惠券)；若於2025/1/14(含)後至活動期間內進行綁定，則系統至遲將於綁定後的10分鐘內推送。倘限量兌換名額已滿，燦坤將不再推送，會在下一檔活動推送該檔的APP電子優惠券，您可於該檔活動搶先兌換，兌完為止。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(3) 請留意：並非取得「小龍轉乾坤-星展銀行分期現折800元券(APP)」即得兌換折抵，例如：有取得券且消費符合活動條件但兌換限量已額滿、或消費不符合活動條件，皆無法享現折優惠。限量兌換折抵以燦坤結帳系統判斷為準。​</li>
                    <li style='margin-bottom:10px';>3.回饋限制與例外​</li>
                     <li style='margin-bottom:10px;padding-left:10px';>(1) 消費滿額以活動商品實際發票開立金額認定，部分商品除外，如：點數卡、以及其他不能使用分期交易的商品；且所有折扣後的結帳刷卡金額須滿20,000元(限分3、6、8期)始符本活動之條件​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 活動指定商品，需於2025/2/10前出貨/配送完成，如遲至2025/2/11 (含)才出貨/配送則不享本活動優惠，如因商品缺貨等不可歸責於會員的原因導致無法於前開期間出貨/配送完成，仍可享有本活動優惠。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(3) 如每位會員每張星展銀行信用卡回饋超過上限次數時，燦坤有權取消訂單。​</li>
                     <li style='margin-bottom:10px;padding-left:10px';>(4) 若退貨導致發票金額不達滿額門檻，須補足800元。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(5) 星展銀行指定信用卡不包含一般簽帳金融卡，活動不併行(例如：星展日及滿額禮活動)，另現折活動正、附卡消費分開計算。​</li>
                  
                    <li style='margin-bottom:30px';>活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `

      Swal.fire({
        width: 1000,
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
$dir: "https://events.cdn-tkec.tw/events_net/events_net/2025AppleDay/images/";
$origin: "https://events.tk3c.com/events_net/events_net/2025AppleDay/images/";
$dir_apple: "https://events.cdn-tkec.tw/events_net/events_net/2024_AppleDay/images/";
/*  共用樣式調整 */
body{
  background: #92160f;
  &:before {
    content: "";
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    $image: $dir + "BG.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0, top;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    top: 0;
  }
}

.bg01 {
  background:none;
  padding: 2%;
  box-sizing: border-box;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image:$dir_apple + 's1b.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0,top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto 0;
    top:0;
    z-index: -1;
  }
  &:after {
    content: '';
    display: block;
     width: 100%;
    height: 69%;
    $image:$dir_apple + 's1a.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0,top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto 0;
    bottom:0;
    z-index: -1;
  }
  ul {
   &:before {
     content: "";
    display: block;
    width: 2px;
    height: 80%;
    background: #f0d078;
    position: absolute;
    left: 1px;
    top: 0;
    z-index: -1;
   }
   &:after {
     content: "";
    display: block;
    width: 2px;
    height: 80%;
    background: #f0d078;
    position: absolute;
    right: 1px;
    top: 0;
    z-index: -1;
   }
  }
}


#apple-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 35%;
    .title {
      width: 30%;
      position: absolute;
      left: 23%;
      top: 42%;
    }
    .subtitle {
      width: 23%;
      position: absolute;
      left: 27%;
      margin: 0 auto;
      top: 24%;
      animation: heartBeat 1.2s linear infinite;
    }
    .product {
      width: 30%;
      margin: 0 auto 0;
      position: absolute;
      right: 16%;
      top: 21%;
      animation-duration: 1.8s;
    }
  }
}

.time-box {
  p {
    font-size: 3em;
    color: #fff;
  }
  em {
    font-size: 1.5em;
    color: #ffeaa9;
    font-weight: bold;
  }
}

.special-box {
  li {
    width: 20%;
  }
}

.floor {
  .title {
    font-size: 0;
  }
  &.num-8 {
    .bg01{
      &:after {
        height: 36%;
      }
    }
  }
  &.num-12 {
    .bg01 {
      &:after {
        height: 21%;
      }
    }
  }
}

.pro-box {
  .bg01 {
    padding: 2% 2% 1% !important;
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "1600px") {
  .bg01 {
    &:after {
      height: 64%;
    }
  }

  .floor {
    &.num-8 {
      .bg01 {
        &:after {
          height: 34%;
        }
      }
    }
    &.num-12 {
      .bg01 {
        &:after {
          height: 19%;
        }
      }
    }
  }
}
@include media-query("mobile", "992px") {
  #apple-container {
    .background {
      padding-bottom: 50%;
      .title {
        width: 35%;
        top: 22vw;
        left: 14vw;
      }
      .subtitle {
        width: 30%;
        top: 14vw;
        left: 17vw;
      }
      .product {
        width: 40%;
        top: 10vw;
        right: 8vw;
      }
    }
  }

  .bg01 {
    border: 2px solid #f0d078;
    box-sizing: border-box;
    &:before,
    &:after {
      display: none;
    }
    ul {
      &:before,
      &:after {
        display: none;
      }
    }
  }

  .time-box {
    p {
      font-size: 2em;
    }
  }

  .special-box {
    li {
      width: 23%;
    }
  }

  .floor {
    &.num-8 {
      .bg01 {
        &:after {
          height: 19%;
        }
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #apple-container {
    .background {
      padding-bottom: 165%;
      .title {
        width: 85%;
        top: 46vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .subtitle {
        width: 60%;
        top: 30vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 80%;
        top: 90vw;
        left: 9vw;
        right: 0;
        margin: 0 auto;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -33vw 16vw,top;
    }
  }

  .copyR {
    margin-bottom: 0;
  }

  .time-box {
    b {
      display: block;
      font-size: 1.5em;
    }
    em {
      font-size: 1em;
    }
  }

  .special-box {
    li {
      width: 45%;
    }
  }
}

@include media-query("pc", "2000px") {
  .bg01 {
     border: 5px solid #f0d078;
    box-sizing: border-box;
    &:before,
    &:after {
      display: none;
    }
    ul {
      &:before,
      &:after {
        display: none;
      }
    }
  }
}
</style>
