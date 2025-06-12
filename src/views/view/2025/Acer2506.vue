<template>
  <div id="acer-container">
    <div class="background">
      <h2 class="title animate__animated animate__rollIn">
        <img :src="$filters.siteUrl('2506_AcerDay/images/title.png')" />
      </h2>

      <p class="line">
        <img :src="$filters.siteUrl('2506_AcerDay/images/kv_pp.png')" />
      </p>

      <div class="product bg:#fff r:20px r:10px@<992 p:1% box:border-box">
        <ProductTop :pro="product2[menuPro]"></ProductTop>
      </div>

      <div class="bag animate__animated animate__fadeInRight">
        <img loading="lazy" :src="$filters.siteUrl('2506_AcerDay/images/bag.png')" />
      </div>
    </div>

    <div class="background2"></div>
    <div class="rel">
      <img class="w:full scale(1.8)@<992 scale(3)@<610 mt:9vw@<992 mt:15vw@<610 abs left:0 right:0 m:auto top:0 z:-1"
        :src="$filters.siteUrl('2506_AcerDay/images/spbg.png')" />
    </div>

    <!-- 活動 -->
    <section class="special-box">
      <div class="rel pt:3% box:border-box">
        <swiper :loop="false" :spaceBetween="10" :breakpoints="{
          0: {
            slidesPerView: 2
          },
          601: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 7
          }
        }" :navigation="{
        nextEl: '.special-box .next',
        prevEl: '.special-box .prev',
      }">
          <swiper-slide v-for="(special, s) in specials" :key="s">
            <a :class="{'no': !special.url}" :href="$filters.addGALink(special.url)" target="_blank">
              <img :src="$filters.siteUrl(special.image)">
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
    </section>

    <!-- 登記活動 -->
    <section class="gift-box pt:5% pt:0@< pt:10vw@<576 box:border-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2506_AcerDay/images/bar_sp.png')">
        <b
          class="abs left:0 right:0 m:auto top:45% translateY(-50%) f:3em f:2.2em@<1500 f:2.5em@<992 f:1.5em@<576 f:1.2em@&lt;361 f:bold color:#184826">獨家優惠指南</b>
      </h2>
      <ul class="gap:10 w:80% w:90%@<992 w:full@<610 grid-cols:2 grid-cols:1@<610">
        <li>
          <swiper :loop="true" :autoplay="{
            delay: 2200,
            disableOnInteraction: true,
          }" :effect="'flip'" :flipEffect="{
            slideShadows : false,
            limitRotation : false,
          }" :modules="[EffectFlip]">
            <swiper-slide v-for="(gift,g) in gifts" :key="g">
              <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
                <img :src="$filters.siteUrl(gift.image)">
              </a>
              <div class="rel">
                <a @click="alert(g + 1)"
                  class="w:full h:2.5vmax h:4vw@<992 h:9vw@<576 abs left:0 right:0 m:auto bottom:0 z:5"></a>
              </div>
            </swiper-slide>
          </swiper>
        </li>
        <li>
          <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
            <img :src="$filters.siteUrl('2506_AcerDay/images/gift3.png')">
          </a>
          <div class="rel">
            <a @click="alert(3)"
              class="w:full h:2.5vmax h:4vw@<992 h:9vw@<576 abs left:0 right:0 m:auto bottom:0"></a>
          </div>
        </li>
      </ul>

      <!-- 送迷你行動AOPEN投影機 活動辦法 -->
      <AlertBox ref="alert1" :type="'text'">
        <ul>
          <li>
            1.凡於活動期間(2025/6/13-6/18)內，於燦坤3C門市或燦坤線上購物網站以會員資格購買Acer、Acerpure、Aopen商品，單張發票消費金額滿額，並於2025/6/22前出貨/配送完成，且後續未退貨退款者，即可參加下列活動，每位會員限回饋一次，單張發票不累送：
          </li>
          <li class="pl:10px color:blue f:bold">單筆滿$99,000，送迷你行動AOPEN投影機(市價$4,990)</li>
          <li>
            2.如您是在燦坤線上網站購買，請記得於2025/6/22 (含)前至指定活動頁面完成登記申請，請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準，如符合資格人數超過贈品限量，燦坤3C會依據系統紀錄的訂單成立時間優先順序為準。​</li>
          <li>3.消費滿額之金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。</li>
          <li>
            4.經核對無誤後
          </li>
          <li class="pl:10px">
            (1)	燦坤實體門市購買：燦坤3C將另行通知領取時間。
          </li>
          <li class="pl:10px">
            (2)	燦坤線上購物網站購買：燦坤3C將於2025/8/1起陸續寄出獎項至登記申請時所會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。
          </li>
          <li>
            5.贈品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。
          </li>
          <li>
            6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：
          </li>
          <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
          <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
          <li class='last'>7.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利​</li>
        </ul>
      </AlertBox>

      <!-- 送Predator電競椅 活動辦法-->
      <AlertBox ref="alert2" :type="'text'">
        <ul>
          <li>
            1.凡於活動期間(2025/6/13-6/18)內，於燦坤3C門市或燦坤線上購物網站以會員資格購買Acer、Acerpure、Aopen商品，單張發票消費金額滿額，並於2025/6/22前出貨/配送完成，且後續未退貨退款者，即可參加下列活動，每位會員限回饋一次，單張發票不累送：
          </li>
          <li class="pl:10px color:blue f:bold">單筆滿$199,000，送Predator電競椅 (市價$7,680)</li>
          <li>
            2.如您是在燦坤線上網站購買，請記得於2025/6/22 (含)前至指定活動頁面完成登記申請，請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準，如符合資格人數超過贈品限量，燦坤3C會依據系統紀錄的訂單成立時間優先順序為準。​</li>
          <li>3.消費滿額之金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。</li>
          <li>
            4.經核對無誤後
          </li>
          <li class="pl:10px">
            (1)	燦坤實體門市購買：燦坤3C將另行通知領取時間。
          </li>
          <li class="pl:10px">
            (2)	燦坤線上購物網站購買：燦坤3C將於2025/8/1起陸續寄出獎項至登記申請時所會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。
          </li>
          <li>
            5.贈品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。
          </li>
          <li>
            6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：
          </li>
          <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
          <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
          <li class='last'>7.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利​</li>
        </ul>
      </AlertBox>

      <!-- 登記送雙效負離子吹風機 活動辦法-->
      <AlertBox ref="alert3" :type="'text'">
        <ul>
          <li>
            1.凡於活動期間(2025/6/13-6/18)內，於燦坤3C門市或燦坤線上購物網站以會員資格購買Acerpure商品，單張發票消費金額滿額，並於2025/6/22前出貨/配送完成，且後續未退貨退款者，即可參加下列活動，每位會員限回饋一次，單張發票不累送：
          </li>
          <li class="pl:10px color:blue f:bold">(1)單筆滿$10,000，登記送雙效負離子吹風機 (市價$1,290)</li>
          <li class="pl:10px color:blue f:bold">(2)單筆滿$20,000，登記送AI負離子造型吹風機 (市價$9,990)</li>
          <li>
            2.如您是在燦坤線上網站購買，請記得於2025/6/22 (含)前至指定活動頁面完成登記申請，請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準，如符合資格人數超過贈品限量，燦坤3C會依據系統紀錄的訂單成立時間優先順序為準。​</li>
          <li>3.消費滿額之金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。</li>
          <li>
            4.經核對無誤後
          </li>
          <li class="pl:10px">
            (1)	燦坤實體門市購買：燦坤3C將另行通知領取時間。
          </li>
          <li class="pl:10px">
            (2)	燦坤線上購物網站購買：燦坤3C將於2025/8/1起陸續寄出獎項至登記申請時所會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。
          </li>
          <li>
            5.贈品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。
          </li>
          <li>
            6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：
          </li>
          <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
          <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
          <li class='last'>7.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利​</li>
        </ul>
      </AlertBox>
    </section>

    <!-- 商品樓層 -->
    <CommonFloor :floors="floors" :menu="menus">
      <template #moreTitle>
        <img :src="$filters.siteUrl('2506_AcerDay/images/bar_bg.png')">
      </template>
      <template #moreTitle2>
        <img :src="$filters.siteUrl('2506_AcerDay/images/bar_bg_1.png')">
      </template>
    </CommonFloor>
  </div>


  <!-- 右側選單+手機板 -->
  <RightAside :type="'mobile2'"></RightAside>
</template>

<script>
import { EffectFlip } from 'swiper/modules'
export default {
  data() {
    return {
      EffectFlip,
      specials:[
        {
          "image":"2506_AcerDay/images/C08.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=259004"
        },
         {
          "image":"2506_AcerDay/images/C09.png",
          "url":"https://www.tk3c.com/pt.aspx?pid=247399"
        },
        {
          "image":"2506_AcerDay/images/C01.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=124835"
        },
         {
          "image":"2506_AcerDay/images/C02.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=124851"
        },
         {
          "image":"2506_AcerDay/images/C03.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=114130&aid=22583&hid=124863"
        },
         {
          "image":"2506_AcerDay/images/C04.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=44823&aid=22525&hid=123157"
        },
        {
          "image":"2506_AcerDay/images/C05.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=10890&aid=23703"
        },
         {
          "image":"2506_AcerDay/images/C06.png",
        },
         {
          "image":"2506_AcerDay/images/C07.png",
        }
      ],
      gifts:[
        {
          "image":"2506_AcerDay/images/gift1.png",
        },
        {
          "image":"2506_AcerDay/images/gift2.png",
        }
      ],
      floors:[
        {
          "text":"高效AI筆電",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11124&aid=23680&hid=122285"
        },
        {
          "text":"飆速電競筆電",
          "url":"https://www.tk3c.com/dic2.aspx?cid=117134&aid=23631&hid=117041"
        },
        {
          "text":"必敗螢幕",
          "url":"https://www.tk3c.com/dic2.aspx?cid=44823&aid=22521&hid=113981"
        },
        {
          "text":"精選桌機",
          "url":"https://www.tk3c.com/dic2.aspx?cid=114130&aid=22580&hid=114677"
        },
        {
          "text":"多工平板",
          "url":"https://www.tk3c.com/dic1.aspx?cid=10890&aid=23703"
        },
        {
          "text":"投影機",
        },
        {
          "text":"激推小家電",
          "url":"https://www.tk3c.com/dic1.aspx?cid=111723&aid=23715"
        },
        {
          "text":"超夯週邊配件",
        },
      ],
      menuPro:8324,
      menus:[8325,8326,8327,8328,8329,8330,8331,8332],
      today:new Date()
    }
  },
  mounted() {
    //背景拱動後固定
    this.fixedBg('.background2','.gift-box');

      //最上方商商品撈取陳列編號
      this.getFloorSingle(this.menuPro);
  },
  methods: {
    alert(id) {
      let self = this;
      self.$refs[`alert${id}`].openAlert();
    }
  }
}
</script>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/2506_AcerDay/images/";

/*  共用樣式調整 */
body{
  background: #8bc21f;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.jpg";
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
  background:#184826;
  border-radius: 10px;
  box-sizing: border-box;
}

#acer-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 48vw;
    .title {
      width: 26%;
      position: absolute;
      left: 22%;
      top: 13%;
      animation-duration: 1.2s;
      img {
        animation: heartBeat 0.7s linear;
        animation-delay: 1.6s;
      }
    }
    .bag {
      width: 35%;
      margin: 0 auto 0;
      position: absolute;
      right: 16%;
      top: 12%;
      animation-duration: 1.5s;
      z-index: -1;
    }
    .product {
      width: 50%;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      .bg01 {
        margin: 0 auto 0;
        background:none;
      }
    }

    .line {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto 0;
      top: -5%;
      z-index: -1;
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image: $dir + 'pp.png';
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position: 0 30vw,top;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  &.fixed {
    position: fixed;
    top: 20%;
    background-position: 0 0,top;
    z-index: -1;
  }
}

.special-box {
  width: 100%;
  .swiper-wrapper {
    align-items: baseline;
  }
  a {
    &.no {
      pointer-events: none;
      cursor: auto;
    }
  }
}

.floor {
  .title {
    b {
      color:#184826;
      top: 41%;
    }
  }
}


/*  電腦版其他尺寸 */
@include media-query("mobile", "1025px") {
  #acer-container {
    .background {
      padding-bottom: 107vw;
      .title {
        width: 50%;
        top: 11vw;
        left: 2vw;
      }
      .product {
        width: 90%;
        top: 45vw;
      }
      .bag {
        width: 55%;
        right: -3vw;
        top: 16vw;
      }
      .line {
        width: 150%;
        left: -11vw;
        top: -14vw;
      }
    }
  }

  body{
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position: -10vw 55vw,top;
    &.fixed {
      background-size: 120% auto;
      background-position: -10vw 0,top;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #acer-container {
    .background {
      padding-bottom: 212vw;
      .title {
        width: 85%;
        top: 25vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 95%;
        top: 129vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .bag {
        width: 95%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 80vw;
      }
      .line {
        width: 215%;
        left: -7vw;
        top: -4vw;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -40vw 16vw,top;
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position: -40vw 58vw,top;
    &.fixed {
      background-size: 180% auto;
      background-position: -40vw 0,top;
    }
  }
}
</style>
