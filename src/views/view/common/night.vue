<script>
export default {
  data() {
    return {
      menuSP: 7392,
      menus: [6149, 6150, 6151, 6152, 6153, 6154],
      proDatas: [
        { image: 'nightsale/images/part3/bar_top.png', id: 6149, text: '本週強檔推薦',href:'#pro6149' },
        { image: 'nightsale/images/part3/bar000.png', id: 6150, text: '大型家電',href:'#pro6150' },
        { image: 'nightsale/images/part3/bar01.png', id: 6151, text: '生活家電',href:'#pro6151' },
        { image: 'nightsale/images/part3/bar02.png', id: 6152, text: '電腦資訊',href:'#pro6152' },
        { image: 'nightsale/images/part3/bar07.png', id: 6153, text: '鍵盤滑鼠',href:'#pro6153' },
        { image: 'nightsale/images/part3/bar04_b.png', id: 6154, text: '數位週邊',href:'#pro6154' }
      ],
      today: new Date(),
      isSp: false,
      income: 0,
      dateTime: '',
      pagination:{
        el:'.special .page',
        type:'progressbar',
        clickable:true
      }
    }
  },
  updated() {
    //若某樓層沒有商品則隱藏此區域、移除右側選單(手機版)項目
    document.querySelectorAll('.pro-box').forEach((el, p) => {
      if (el.querySelectorAll('.bg01').length > 0) {
        if (el.querySelectorAll('.bg01 .swiper-slide').length <= 0) {
           el.style.display = 'none';
        }
      }
    })

    //限時樓層有商品才顯示
    if (document.querySelectorAll('.special-box .special .bg01 .swiper-slide').length > 0) {
      this.isSp = true
    }
  },
  mounted() {
    const { today } = this

    const year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate()

    //撈取限時樓層商品
    this.getFloorSingle(this.menuSP)

    //撈取其他樓層
    this.getFloorData(this.menus)

    this.dateTime = today >= new Date('2024/10/10 07:00') ? ' 07:00' : ' 06:00'

    //加入時間倒數
    if (
      today >= new Date(year + '/' + month + '/' + date + ' 07:00') &&
      today < new Date(year + '/' + month + '/' + date + ' 22:00')
    ) {
      this.income = 1

      $('.timearea').countdown({
        until: $.countdown.UTCDate(+8, year, month - 1, date, 22, 0, 0),
        format: 'hms',
        layout: '<span>倒數:</span> <i>{hnn}</i> <b>:</b> <i>{mnn}</i> <b>:</b> <i>{snn}</i>',
        onExpiry: this.timeUpMsg
      })
    }

    //快閃
    if (
      today >= new Date(year + '/' + month + '/' + date + this.dateTime) &&
      today < new Date(year + '/' + month + '/' + date + ' 22:00')
    ) {
      this.income = 1

      $('.timearea').countdown({
        until: $.countdown.UTCDate(+8, year, month - 1, date, 22, 0, 0),
        format: 'hms',
        layout: '<span>倒數:</span> <i>{hnn}</i> <b>:</b> <i>{mnn}</i> <b>:</b> <i>{snn}</i>',
        expiryText:'限時搶購!',
        onExpiry: this.timeUpMsg
      })
    }
  },
  methods: {
    timeUpMsg() {
      $('.timearea').countdown('destroy')
      $('.item').after('<b>開始搶購!</b>')
    }
  }
}
</script>

<template>
  <div id="night-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('nightsale/images/part3/title2.png')" />
      </h2>

      <div class="product">
        <img :src="$filters.siteUrl('nightsale/images/part3/moon.png')" />
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('nightsale/images/part3/bg_pp.png')" />
    </p>

    <div class="timearea"></div>

    <!-- 限時 -->
    <section class="special-box" v-show="isSp">
      <div class="special rel">
         <div class="swiper-pagination page top:-2%!"></div>
        <div class="bg01 list_F p:1% p:2%@<576" v-if="product2[menuSP] != undefined">
          <ul>
            <swiper class="overflow:hidden" 
              :space-between="10" 
              :pagination="pagination"
              :navigation="{
                prevEl: '.special .prev',
                nextEl: '.special .next'
              }" 
              :breakpoints="{
                0: {
                  slidesPerView: 2,
                  grid: {
                    fill: 'row',
                    rows: 2
                  }
                },
                601: {
                  slidesPerView: 3,
                  grid: {
                    fill: 'row',
                    rows: 3
                  }
                },
                1100: {
                  slidesPerView: 4,
                  grid: {
                    fill: 'row',
                    rows: 4
                  }
                },
                1281: {
                  slidesPerView: 6,
                  grid: {
                    fill: 'row',
                    rows: 3
                  }
                }
              }">
              <swiper-slide class="bg:#fff" :class="[income ? 'before' : '']" v-for="(proA, p) in product2[menuSP]">
                <a :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
                  :id="'prod' + proA.productid" :name="'prod' + proA.productid">
                  <p class="itemF_img">
                    <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
                  </p>
                  <storg v-html="proA.productname"></storg>
                  <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
                  <div class="boxF_price">
                    <p class="iconF_pro" v-if="getProPercent(proA) != 100">
                      <span>{{ getProPercent(proA) }}</span>折
                    </p>

                    <strong class="txt_red fred">
                      <em>市價${{ addNumComma(proA.nonmemberprice) }}</em>
                      <i>活動價$</i>{{ addNumComma(proA.realprice) }}
                    </strong>
                  </div>
                </a>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev prev"></div>
            <div class="swiper-button-next next"></div>
          </ul>
        </div>
      </div>
    </section>

    <section class="pro-box scroll" v-for="(pd, p) in proDatas" :key="p" :titles="pd.text" :id="`pro${pd.id}`" :class="`pro${Number(p) + 1}-box`">
      <h2 class="title">
        <img :src="$filters.siteUrl(pd.image)" />
      </h2>

      <div class="products">
        <listF v-if="products[menus[p]] != undefined" :pro="products[menus[p]].Data" :isSwiper="1"
          :name="`pro${Number(p) + 1}`" :incoming="income"></listF>
      </div>
    </section>
  </div>

  <!-- 左側選單 -->
  <LeftAside></LeftAside> 
  <!-- 右側選單+手機版 -->
   <RightAside :type="'mobile3'"></RightAside>
</template>

<style lang="scss">
  @charset "utf-8";
$dir: "https://events.tk3c.com/events_net/events_net/nightsale/images/part3/";

/*  共用樣式調整 */

body {
  background: #0f0224;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.jpg";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.protitle {
  height: auto;
  @include hide-text;
  a {
    height: auto;
  }
}

.bg01 {
  background: none;
  li {
    .boxF_price {
      &.incoming {
        strong {
          color: #fff;
          height: 60px;
          font-size: 190%;
          &:before {
            content: "先加入購物車";
            letter-spacing: 0;
          }
        }
      }
    }
  }

  .before {
    .boxF_price {
      strong {
        color: #fff;
        height: 60px;
        font-size: 190%;
        &:before {
          content: "先加入購物車";
          letter-spacing: 0;
          display: block;width: 95%;height: 35px;float: right;border-radius: 20px;color: white;font-size: 0.5em;text-align: center;	line-height: 35px;position: absolute;bottom: 7px;right: 0;left: 0; background: #3f3a39;margin: 0 auto;
        }
        em {
          display: none;
        }
      }
      .iconF_pro {
        display: none;
      }
    }
  }
}

.timearea {
  color: #fff;
  font-weight: bold;
  margin: 0 auto 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 3em;
    padding-right: 1%;
  }
  i,
  b {
    font-size: 3em;
    padding-left: 0.5%;
  }
}

section {
  .title {
    width: 55%;
  }
}

/* 夜間下殺 */
#night-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 30%;
    .title {
      width: 45%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 35%;
      animation: zoomInNormal 1.4s linear;
      img {
        animation: none;
      }
    }
    .product {
      width: 30%;
      position: absolute;
      left: -7%;
      top: -8%;
      animation: slow-move2 5s ease-in;
    }
  }
}

.special-box {
  min-width: 1200px;
  .bg01 {
    background: #fff000;
    li {
      &.close {
        padding-bottom: 15px;
        .boxF_price {
          strong {
            display: none;
          }
        }
      }
    }
  }
  .title {
    width: 65%;
  }

  
  .swiper-pagination-progressbar-fill{
    background: #fff000 !important;
  }
}

.pro-box {
  .pro {
    .swiper-wrapper {
      height: calc((100% - 30px) / 2) !important;
    }
  }
  .bg01 {
    background: #bd9460;
    padding: 1% 1% 0;
    box-sizing: border-box;
  }
  &:nth-of-type(1) {
    .title {
      width: 65%;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "1280px") {
  .special-box {
    min-width: 90%;
  }
}
@include media-query("mobile", "992px") {
  #night-container {
    .background {
      padding-bottom: 50%;
      .title {
        width: 80vw;
        top: 15vw;
        z-index: 5;
      }
      .product {
        width: 40vw;
        left: -17vw;
        top: -12vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw, top;
    }
  }

  .timearea {
    margin: 0 auto 5%;
    span {
      font-size: 3em;
    }
    i {
      font-size: 3em;
    }
  }

  section {
    .title {
      width: 90vw;
    }
  }

  .special-box {
    min-width: 60%;
    .title {
      width: 100%;
    }
  }

  .pro-box {
    &:nth-of-type(1) {
      .title {
        width: 100%;
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

  #night-container {
    .background {
      padding-bottom: 80vw;
      .title {
        width: 95vw;
        left: 0;
        top: 34vw;
      }
      .product {
        width: 40vw;
        left: -82vw;
        top: 16vw;
      }
    }
  }

  .bg01 {
    li {
      .boxF_price {
        &.incoming {
          strong {
            height: 15px;
          }
        }
      }
    }
    .boxF_price {
      &.incoming {
        &:after {
          content: "先加入購物車";
        }
      }
    }

    .before {
      .boxF_price {
        &:after {
          content: "先加入購物車";
          font-size: 0.8em;color: #fff; background: #3f3a39;  width: 95%;  height: 34px; display: none; text-align: center; font-size: 0.8em;  letter-spacing: 0; line-height: 34px;box-sizing: border-box;font-weight: bold;border-radius: 20px;margin: 0 auto;
        }
      }
    }
  }

  .timearea {
    flex-wrap: wrap;
    span {
      width: 100%;
      height: auto;
      display: block;
      font-size: 2.5em;
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -10vw 4vw, top;
    }
  }

  section {
    .title {
      width: 100%;
      margin: 0 auto 3%;
    }
  }

  .special-box {
    .title {
      width: 120%;
      margin: 0 -11% 3%;
    }
  }

  .pro-box {
    &:nth-of-type(1) {
      .title {
        width: 120%;
        margin: 0 -11% 3%;
      }
    }

    .bg01 {
      padding: 2% 2% 0;
      box-sizing: border-box;
    }
  }
}

@include media-query("mobile", "360px") {
  .bg01 {
    .boxF_price {
      &.incoming {
        &:after {
          font-size: 10px;
        }
      }
    }
  }
}

@keyframes slow-move2 {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>