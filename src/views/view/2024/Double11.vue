<script>
export default {
  data() {
    return {
      menuGreen: 7517, //環保商品陳列編號
      menuGo: 7518, //速速go陳列編號
      menuPrice: 7572, //挑戰最低價用
      specials: [
        { image: 'double11_2024/images/sp100.png', menu: 7519 },
        { image: 'double11_2024/images/sp200.png', menu: 7520 },
        { image: 'double11_2024/images/sp400.png', menu: 7521 },
        { image: 'double11_2024/images/sp500.png', menu: 7522 },
        { image: 'double11_2024/images/sp1000.png', menu: 7573 },
        { image: 'double11_2024/images/sp2000.png', menu: 7574 },
        { image: 'double11_2024/images/sp3000.png', menu: 7575 }
      ],
      special_after: [
        { image: 'double11_2024/images/part2/c-111.png',menu:7590 },
        { image: 'double11_2024/images/part2/c-211.png',menu:7591 },
        { image: 'double11_2024/images/part2/c-411.png',menu:7592 },
        { image: 'double11_2024/images/part2/c-511.png',menu:7593 },
        { image: 'double11_2024/images/part2/c-1111b.png',menu:7594 },
        { image: 'double11_2024/images/part2/c-2111.png',menu:7595 },
        { image: 'double11_2024/images/part2/c-3011b.png',menu:7596 }
      ],
      sales: [
        { image: 'double11_2024/images/c-100.png',menu:7523 },
        { image: 'double11_2024/images/c-400.png',menu:7524 },
        { image: 'double11_2024/images/c-500.png',menu:7525 },
        { image: 'double11_2024/images/c-600.png',menu:7526 },
        { image: 'double11_2024/images/c-700.png',menu:7527 },
        { image: 'double11_2024/images/c-1000_b.png',menu:7528 }
      ],
      statusSp: 0, //全戰神券樓層用
      statusSale: 0, //現折券樓層用
      today: new Date(),
      isSale: true,
      vips: [
        { image: 'double11_2024/images/part2/S3-e1.png' },
        { image: 'double11_2024/images/part2/S3-e2.png' },
        { image: 'double11_2024/images/part2/S3-e3.png' }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444',
          image: 'double11_2024/images/part2/S1.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=93605',
          image: 'double11_2024/images/part2/S2.png',
          banner: [
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20222&hid=123877',
              pc: 'double11_2024/images/bn_samsung.jpg',
              mobile: 'double11_2024/images/bn_samsungM.jpg'
            }
          ]
        },
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'double11_2024/images/part2/S3.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/WUKONG/index.html',
              pc: 'double11_2024/images/bn_wukongP5.jpg',
              mobile: 'double11_2024/images/bn_wukongP5M.jpg'
            },
            {
              url: 'https://events.tk3c.com/events_net/2024083C/index.html',
              pc: 'double11_2024/images/part2/bn_3c.jpg',
              mobile: 'double11_2024/images/part2/bn_3cM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=23504&hid=120184',
          image: 'double11_2024/images/part2/S4.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/2024083C/index.html',
              pc: 'double11_2024/images/part2/bn_3c.jpg',
              mobile: 'double11_2024/images/part2/bn_3cM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
          image: 'double11_2024/images/part2/S5.png',
          banner: [
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22521&hid=113989&strPreView=y',
              pc: 'double11_2024/images/part2/bn_samung.jpg',
              mobile: 'double11_2024/images/part2/bn_samungM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=43403',
          image: 'double11_2024/images/part2/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
          image: 'double11_2024/images/part2/S7.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/book_sale/index.html',
              pc: 'double11_2024/images/bn_book.jpg',
              mobile: 'double11_2024/images/bn_bookM.jpg'
            },
            {
              url: 'https://events.tk3c.com/events_net/WUKONG/index.html',
              pc: 'double11_2024/images/bn_wukongP5.jpg',
              mobile: 'double11_2024/images/bn_wukongP5M.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=111126',
          image: 'double11_2024/images/part2/S8.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: 'double11_2024/images/part2/S9.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
              pc: 'double11_2024/images/part2/bn_tv.jpg',
              mobile: 'double11_2024/images/part2/bn_tvM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83185',
          image: 'double11_2024/images/part2/S10.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: 'double11_2024/images/part2/S11.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
              pc: 'double11_2024/images/part2/bn_ice.jpg',
              mobile: 'double11_2024/images/part2/bn_iceM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71484',
          image: 'double11_2024/images/part2/S12.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/24spring_clean/index.html',
              pc: 'double11_2024/images/part2/bn_clean.jpg',
              mobile: 'double11_2024/images/part2/bn_cleanM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=4640',
          image: 'double11_2024/images/part2/S13.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/fan_hot/index.html',
          image: 'double11_2024/images/part2/S14.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/fan_hot/index.html',
              pc: 'double11_2024/images/part2/bn_fan.jpg',
              mobile: 'double11_2024/images/part2/bn_fanM.jpg'
            }
          ]
        },
        {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: 'double11_2024/images/part2/S15.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
              pc: 'double11_2024/images/part2/bn_air.jpg',
              mobile: 'double11_2024/images/part2/bn_airM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881',
          image: 'double11_2024/images/part2/S16.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=113296',
          image: 'double11_2024/images/part2/S17.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111383&aid=22330',
          image: 'double11_2024/images/part2/S18.png'
        }
      ],
      menu: [
        7529, 7530, 7531, 7532, 7533, 7534, 7535, 7536, 7537, 7538, 7539, 7540, 7541, 7542, 7543,
        7544, 7545, 7546
      ],
      isVip: false,
      isAll: true,
      isGift: false,
      isComputer: false,
      spNum: 6.3
    }
  },
  mounted() {
    const { menuGo, menuGreen, menuPrice, today } = this

    //撈取挑戰最低價樓層商品
    this.getFloorSingle(menuPrice)

    //撈取環保樓層商品
    this.getFloorSingle(menuGreen)

    //撈取速速go樓層商品
    this.getFloorSingle(menuGo)

    // 11/1-12 隱藏現折券區
    if (today < new Date('2024/11/13')) {
      this.isSale = false
    }

    if (today >= new Date('2024/11/01') && today < new Date('2024/11/13')) {
      this.isVip = true
      this.isGift = true
    }

    if (today >= new Date('2024/11/01')) {
      this.specials = this.special_after
      this.isAll = false
    }

    if (today >= new Date('2024/11/01') && today < new Date('2024/11/05')) {
      this.isComputer = true
    }
  },
  methods: {
    message(id) {
      //活動辦法

      let infoHtml = ''
      //雙11搶先購物券
      infoHtml = `
              <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.本活動限燦坤線上購物會員參加，凡於活動期間(2024/10/24-2024/10/31)於燦坤線上購物網站購買活動指定商品，除享有「促銷價」的折扣外，另外可再領取「雙11搶先購物券」直接折抵結帳金額。​</li>
             <li style='margin-bottom:10px;'>2.購買「指定價位(促銷價)區間」活動指定商品，每台可折抵「雙11搶先購物券」乙張，限量兌換折抵，兌完截止(依兌換次序為準)：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1)指定商品單品促銷價4,000元(含)~7,999元(含)：每台可折抵「100元雙11搶先購物券」一張，限量40張。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2)指定商品單品促銷價8,000元(含)~14,999元(含)：每台可折抵「200元雙11搶先購物券」一張，限量40張。​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(3)指定商品單品促銷價15,000元(含)以上：每台可折抵「500元雙11搶先購物券」一張，限量30張。​</li>
               <li style='margin-bottom:10px;'>3.活動期間獲得之「雙11搶先購物券」之限量兌換張數及使用限制:​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1)每人每種券限領取一次，本活動之「雙11搶先購物券」為限量兌換，依兌換次序為準，並非一經領取即得兌換，限量兌換以完成結帳付款時間為準，逾期/超過限量名額自動失效。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2)兌換期間為活動期間，逾期自動失效；直接於結帳時兌換折抵即可，一經使用即失效，事後退/換貨，恕不再補發，請注意如您選擇使用本券，則結帳時無法再選擇使用「燦坤發行的燦坤線上購物網站購物金或其他折抵憑證」。​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(3)本活動之券，限一次使用完畢，不得兌換現金、找零及抵付費用(運費、裝備等)，折抵後依燦坤保固規定辦理。(本券屬贈品券，折抵商品時不再開立統一發票) ​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(4)如遇各品牌官網舉辦之活動有金額限制時，因本券會直接折抵結帳金額，可能會造成您無法參加各品牌官網活動，請斟酌使用。​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(5)本活動不與其他優惠活動併行，例如：凡使用其他專案優惠活動購買之商品，就不能再使用本活動之券。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(6)其餘使用限制及規則依各券面及網站記載事項辦理。​</li>
              <li style='margin-bottom:10px;'>4.活動未盡事宜以燦坤線上購物官網公告為主，燦坤線上購物保留活動最終解釋、修改、變更之權利。</li>
        </ul>
          `

      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        showCloseButton: true,
        confirmButtonText: '關閉',
        position: 'center',
        confirmButtonColor: '#000',
        returnFocus: true,
        scrollbarPadding: false
      })
    }
  }
}
</script>

<template>
  <div id="double-container" v-cloak>
    <div class="background" :class="[today >= new Date('2024/11/01') ? 'new' : '']">
      <span class="logo">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/logo.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/logo.png')"
        />
      </span>
      <h2 class="title animate__animated animate__lightSpeedInLeft">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/title.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/title.png')"
        />
      </h2>
      <h5 class="subtitle">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/subtitle2.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/subtitle.png')"
        />
      </h5>
      <p class="circle animate__animated animate__bounceInRight">
        <img :src="$filters.siteUrl('double11_2024/images/sub2.png')" />
      </p>
      <p class="product">
        <img :src="$filters.siteUrl('double11_2024/images/item.png')" />
      </p>
    </div>

    <!-- 早鳥優惠 -->
    <section class="early-box">
      <p class="early-bg rel w:75% w:85vw@<992 w:90vw@<576 m:auto">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/all1.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/all1b.png')"
        />
      </p>
      <img
        class="w:85% w:90vw@<992 w:full@<576 abs m:auto h:full left:0 right:0 top:0 z:-1"
        :src="$filters.siteUrl('double11_2024/images/car_bg.png')"
      />
      <div class="flex flex-wrap:wrap gap:10 jc:center m:auto">
        <a
          v-if="today < new Date('2024/11/01')"
          class="w:15% w:20vw@<992 w:25vw@<576 m:0|2%"
          href="https://www.tk3c.com/dictitleurl.aspx?cid=123938"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/btn1.png')" />
        </a>

        <a
          v-if="today >= new Date('2024/11/01')"
          class="w:15% w:20vw@<992 w:25vw@<576 m:0|2%"
          href="https://www.tk3c.com/dic1.aspx?cid=123970&aid=23887&strPreView=y"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/btn1.png')" />
        </a>

        <a class="hidden w:15% w:20vw@<992 w:25vw@<576 m:0|2%" @click="message">
          <img :src="$filters.siteUrl('double11_2024/images/btn2.png')" />
        </a>
      </div>
    </section>

    <!-- 3c家電大賞 -->
    <section v-if="isComputer">
      <a
        class="w:85% w:90vw@<992 w:95vw@<576"
        :href="
          $filters.addGALink(
            'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123978&strPreView=y'
          )
        "
      >
        <img :src="$filters.siteUrl('double11_2024/images/bn_computer.jpg')" />
      </a>
    </section>

    <!-- 挑戰最低價 -->
    <section class="price-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('double11_2024/images/price_title2.png')" />
      </h2>

      <div class="bg01 list_F" v-if="product2[menuPrice] != undefined">
        <ul>
          <swiper
            class="overflow:hidden"
            :space-between="10"
            :navigation="{
              prevEl: `.price-box .prev`,
              nextEl: `.price-box .next`
            }"
            :breakpoints="{
              0: {
                slidesPerView: 2.2,
                grid: {
                  fill: 'row',
                  rows: 3
                }
              },
              601: {
                slidesPerView: 3.3,
                grid: {
                  fill: 'row',
                  rows: 3
                }
              },
              992: {
                slidesPerView: 4.3,
                grid: {
                  fill: 'row',
                  rows: 3
                }
              },
              1281: {
                slidesPerView: 5.3,
                grid: {
                  fill: 'row',
                  rows: 3
                }
              }
            }"
          >
            <swiper-slide class="bg:#fff" v-for="(proA, p) in product2[menuPrice]">
              <a
                :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
                :id="'prod' + proA.productid"
                :name="'prod' + proA.productid"
              >
                <p class="itemF_img">
                  <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
                </p>
                <storg v-html="proA.productname"></storg>
                <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
                <div class="boxF_price">
                  <p class="iconF_pro" v-if="getProPercent(proA) != 100">
                    <span>{{ getProPercent(proA) }}</span
                    >折
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
    </section>

    <!-- 滿額好禮 -->
    <section class="vip-group" v-if="isVip">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')">
          <img :src="$filters.siteUrl('double11_2024/images/part2/vip_title.png')" />
        </a>
      </h2>

      <swiper
        :loop="false"
        :space-between="10"
        :breakpoints="{
          0: {
            slidesPerView: 1.3
          },
          600: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 3
          }
        }"
      >
        <swiper-slide v-for="vip in vips">
          <a
            :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
            target="_blank"
          >
            <img :src="$filters.siteUrl(vip.image)" />
          </a>
        </swiper-slide>
      </swiper>
    </section>

    <!-- 全站活動 -->
    <section class="all-box" v-if="isAll">
      <ul class="gap:10">
        <li class="mb:1% w:80% w:85vw@<992 w:full@<576">
          <a
            :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
            target="_blank"
          >
            <img :src="$filters.siteUrl('double11_2024/images/all2.png')" />
          </a>
        </li>
        <li class="w:40% w:42vw@<992 w:45vw@<576">
          <a :href="$filters.addGALink('https://www.facebook.com/TDdd331')" target="_blank">
            <img :src="$filters.siteUrl('double11_2024/images/FB.png')" />
          </a>
        </li>
        <li class="w:40% w:42vw@<992 w:45vw@<576">
          <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank">
            <img :src="$filters.siteUrl('double11_2024/images/line.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 線上獨家活動 -->
    <section class="gift-box" v-show="isGift">
      <img
        class="max-w:900px m:auto"
        :src="$filters.siteUrl('double11_2024/images/part2/line.png')"
      />
      <div class="w:full h:full flex flex-wrap:wrap m:auto abs left:0 right:0 top:0">
        <a
          class="w:49% w:46vw@<576"
          :href="$filters.addGALink('https://www.facebook.com/TDdd331')"
        ></a>
        <a
          class="w:49% w:46vw@<576"
          :href="$filters.addGALink('https://page.line.me/tid7686u')"
        ></a>
      </div>
    </section>

    <!-- 環保商品 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/green_title2.png')" />
        </a>
      </h2>

      <p class="w:85% w:80vw@<992 w:full@<576 m:auto p:2%|0|2% m:2%|0|0@<576">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/g1_3.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/g1_3.png')"
        />
      </p>
      <img
        class="green-bg abs w:full left:0 right:0 m:auto top:13% top:16vw@<992 hidden@<576 z:-1"
        :src="$filters.siteUrl('double11_2024/images/green_bg.png')"
      />

      <div class="box">
        <listF
          :pro="product2[menuGreen]"
          :isSwiper="1"
          :name="'green-pro'"
        ></listF>
      </div>
    </section>

    <!-- 速速go -->
    <section class="go-group">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/go_title.png')" />
        </a>
      </h2>

      <div class="box">
        <listF :pro="product2[menuGo]" :isSwiper="1" :name="'go-box'"></listF>
      </div>
    </section>

    <!-- 全站神券 -->
    <section class="special-box scroll" id="sp">
      <h2 class="title">
        <a
          v-if="today < new Date('2024/11/01')"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123938')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/sp_title.png')" />
        </a>

        <a
          v-if="today >= new Date('2024/11/01')"
          :href="
            $filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=123970&aid=23887&strPreView=y')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/part2/sp_title2.png')" />
        </a>
      </h2>

      <Tabs :tabs="specials">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(special, s) in specials" :menus="special.menu" :index="s" :selectedTab="selectedTab">
          </TabContent>
        </template>
      </Tabs>
    </section>

    <!-- 現折券 -->
    <section class="sale-box" v-if="isSale">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=123908&aid=23881')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/sale_title.png')" />
        </a>
      </h2>

      <Tabs :tabs="sales">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(sale, s) in sales" :menus="sale.menu" :index="s" :selectedTab="selectedTab">
          </TabContent>
        </template>
      </Tabs>
    </section>

    <!-- 聯名卡 -->
    <section class="bank-group" id="bank">
      <h2 class="title">
        <img :src="$filters.siteUrl('double11_2024/images/bank_title.png')" />
      </h2>

      <ul class="gap:10 mb:2%">
        <li class="w:85% w:85vw@<992 w:full@<576">
          <img
            v-if="today < new Date('2024/11/01')"
            :src="$filters.siteUrl('double11_2024/images/bank1.png')"
          />
          <img v-else :src="$filters.siteUrl('double11_2024/images/part2/bank1b.png')" />
        </li>
      </ul>

      <div class="content rel w:85% w:85vw@<992 w:95vw@<576 m:auto">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2
            }
          }"
          :navigation="{
            prevEl: '.bank-group .prev',
            nextEl: '.bank-group .next'
          }"
        >
          <swiper-slide class="w:44% w:44vw@<992 w:94vw@<576">
            <img :src="$filters.siteUrl('double11_2024/images/bank2.png')" />
          </swiper-slide>
          <swiper-slide class="w:44% w:44vw@<992 w:94vw@<576">
            <img
              v-if="today < new Date('2024/11/01')"
              :src="$filters.siteUrl('double11_2024/images/bank3.png')"
            />
            <img v-else :src="$filters.siteUrl('double11_2024/images/part2/bank3.png')" />
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
      <a
        class="w:18% w:23vw@<992 w:40vw@<576 mt:2%"
        :href="
          $filters.addGALink(
            'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
          )
        "
        target="_blank"
      >
        <img :src="$filters.siteUrl('double11_2024/images/go_bank.png')" />
      </a>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menu"></CommonFloor>
  </div>

 
  <!-- 左側選單 -->
  <LeftAside></LeftAside>

  <!-- 右側選單 -->
  <RightAside></RightAside> 
</template>

<style lang="scss">
$dir: "https://events.cdn-tkec.tw/events_net/events_net/double11_2024/images/";
$origin: "https://events.tk3c.com/events_net/events_net/double11_2024/images/";

/*  共用樣式調整 */
body {
  background: #d0eff7;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.gif";
    background: url($image) no-repeat center;
    background-size: 107% auto;
    background-position: -2vw 45px, top;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: #fffe89;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-sizing: border-box;
}

section {
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

.aside-container {
  zoom: 0.9;
}

#double-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 38%;
    .title {
      width: 35%;
      position: absolute;
      left: 0;
      right: 0;
      top: 19%;
      margin: 0 auto;
      animation-duration: 1.3s;
      img {
        animation: rubberBand 0.8s linear;
        animation-delay: 1.6s;
      }
    }
    .subtitle {
      width: 33%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 55%;
      animation: flipX 1.4s linear;
      animation-delay: 2s;
    }
    .circle {
      width: 6%;
      position: absolute;
      right: 33%;
      top: 18%;
      animation-duration: 1.7s;
      img {
        animation: jump-ball-down 0.8s linear infinite alternate;
        animation-delay: 2.5s;
      }
    }
    .logo {
      width: 6%;
      height: auto;
      display: block;
      position: absolute;
      left: 21%;
      top: 45px;
    }
    .product {
      width: 65%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 21%;
      animation: upAndDown 1.5s linear infinite alternate;
    }
    &.new {
      .title {
        width: 30%;
        top: 16%;
      }
      .subtitle {
        top: 60%;
      }
    }
  }
}

.early-box {
  padding-bottom: 1%;
  .early-bg {
    margin: 15% auto 1%;
    padding-top: 2%;
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      $image: $dir + "car.png";
      background: url($image) no-repeat center;
      background-size: 100% auto;
      background-position: 0 0, top;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: -95%;
      z-index: -1;
    }
  }
}

.green-box {
  .bg01 {
    background: #d3ffcd;
    border-radius: 0;
  }
}

.go-group {
  .bg01 {
    background: #575757;
    border-radius: 0;
  }
}

.special-box,
.sale-box {
  .bg01 {
    background: #fe9694;
    border-radius: 0;
  }
}

.price-box {
  min-width: 70%;
  .bg01 {
    background: #ea1d32;
    padding: 1%;
    box-sizing: border-box;
  }
}

.special-box {
  .tab {
    .swiper-wrapper {
      justify-content: left;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "1600px") {
  .price-box {
    min-width: 80%;
  }
}
@include media-query("mobile", "1440px") {
  .aside-container {
    zoom: 0.5;
  }
  #double-container {
    .background {
      .product {
        width: 70%;
      }
    }
  }
}
@include media-query("mobile", "992px") {
  #double-container {
    .background {
      padding-bottom: 55vw;
      .title {
        width: 45vw;
        top: 11vw;
      }
      .subtitle {
        width: 43vw;
        top: 29vw;
      }
      .logo {
        width: 10vw;
        left: 16vw;
      }
      .circle {
        width: 8vw;
        right: 29vw;
        top: 11vw;
      }
      .product {
        width: 80vw;
        top: 11vw;
      }
      &.new {
        .title {
          width: 40vw;
          top: 9vw;
        }
        .subtitle {
          top: 31.5vw;
        }
        .circle {
          top: 9vw;
        }
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw, top;
    }
  }

  section {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  .early-box {
    .early-bg {
      &:before {
        top: -24vw;
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

  #double-container {
    .background {
      padding-bottom: 95vw;
      .title {
        width: 80vw;
        top: 29vw;
      }
      .logo {
        width: 15vw;
        top: 5.5rem;
        left: 0;
      }
      .subtitle {
        width: 80vw;
        top: 61vw;
      }
      .circle {
        width: 14vw;
        right: 14vw;
        top: 29vw;
      }
      .product {
        width: 105%;
        top: 53vw;
        left: 1vw;
      }
      &.new {
        .title {
          width: 70vw;
          top: 28vw;
        }
        .subtitle {
          top: 66vw;
        }
        .circle {
          top: 29vw;
        }
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -43vw 21vw, top;
    }
  }

  .early-box {
    .early-bg {
      margin: 20% auto 1%;
    }
  }

  .price-box {
    .bg01 {
      padding: 2%;
      box-sizing: border-box;
    }
  }
}

@include media-query("pc", "2500px") {
  .price-box {
    min-width: 45%;
  }
}

</style>