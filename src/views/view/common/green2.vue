<script>
export default {
  data() {
    return {
      tabs: [
        {
          id:4344,
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120395&strPreView=y',
          image: 'green_subsidy/images/tab1.png',
          isSwiper:1
        },
        {
          id:4345,
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392&strPreView=y',
          image: 'green_subsidy/images/tab2.png'
        },
        {
          id:4346,
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120393&strPreView=y',
          image: 'green_subsidy/images/tab3.png'
        },
        {
          id:4347,
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120394&strPreView=y',
          image: 'green_subsidy/images/tab4.png'
        },
        {
          id:4390,
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120396&strPreView=y',
          image: 'green_subsidy/images/tab5_a.png'
        }
      ],
      printers: [
        { text: '主機',id:7394 }, 
        { text: '耗材',id:7395 }]
        ,
      floorImg: [
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=123936',
          image: 'green_subsidy/images/S9_b.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120393',
          image: 'green_subsidy/images/S3_a.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120394',
          image: 'green_subsidy/images/S4_a.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392',
          image: 'green_subsidy/images/S5_a.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392',
          image: 'green_subsidy/images/S6_a.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120395',
          image: 'green_subsidy/images/S7_a.png'
        },
        {
          moreUrl: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120816',
          image: 'green_subsidy/images/S8_a.png'
        }
      ],
       moreImage:'green_subsidy/images/more2.png',
       newTabs: [
        {
          id:7577,
          image: 'green_subsidy/images/new/S-btn2.png'
        },
        {
          id:7578,
          image: 'green_subsidy/images/new/S-btn3.png'
        },
        {
          id:7579,
          image: 'green_subsidy/images/new/S-btn4.png'
        },
        {
          id:7580,
          image: 'green_subsidy/images/new/S-btn5.png'
        },
        {
          id:7581,
          image: 'green_subsidy/images/new/S-btn6.png'
        },
        {
          id:7582,
          image: 'green_subsidy/images/new/S-btn7.png'
        },
        {
          id:7583,
          image: 'green_subsidy/images/new/S-btn8.png'
        },
        {
          id:7584,
          image: 'green_subsidy/images/new/S-btn9.png'
        },
        {
          id:7585,
          image: 'green_subsidy/images/new/S-btn10.png'
        },
        {
          id:7586,
          image: 'green_subsidy/images/new/S-btn11.png'
        }
      ],
      menuSp:4850, // 環保小尖兵陳列編號
      menu:[7576,4348,4349,4350,4352,4353,4369],
      today: new Date(),
      isVip: false,
      isNew: false,
      isOpen:false,
      isOff:true,
      swiperOption: {
        breakpoints: {
          0: {
            slidesPerView: 2.4,
            grid: {
              fill: 'row',
              rows: 1
            }
          },
          600: {
            slidesPerView: 4.3,
            grid: {
              fill: 'row',
              rows: 1
            }
          },
          992: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 2
            }
          }
        }
      }
    }
  },
  mounted() {
    const { today } = this

    //5/1新增星展活動
    if (today >= new Date('2025/05/01') && today < new Date('2025/06/01')) {
      this.isOpen = true;
      this.isOff = false;
    }

    // 每週六日顯示
    if (today.getDay() == 6 || today.getDay() == 0) {
      this.isNew = true
    }

    //撈取環保小尖兵樓層商品
    this.getFloorSingle(this.menuSp);
  }, 
  methods: {
      message(id) {
        //活動說明
        let infoHtml = '',
        width = 0;

        switch (id) {
          case 1:
            //退貨物稅
            width = 900;
            infoHtml = `
            <img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
            <img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
          `;
            break;
        
          case 2:
            //星展線上說明
              width = 400;
              infoHtml = `
              <img src="https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/new/online.png" width="100%" loading="lazy">
          `;
            break;

          case 3:
            //星展門市說明
            width = 400;
              infoHtml = `
              <img src="https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/new/store.png" width="100%" loading="lazy">
          `;
            break;  
        }

        setTimeout(() => {
          Swal.fire({
            width: width,
            html: infoHtml,
            showCloseButton: true,
            position: 'center',
            returnFocus: false,
            confirmButtonText: '確定',
            confirmButtonColor: '#000'
          })
        }, 5);
      },
      alert() {
        this.$refs.alert.openAlert();
      }
  }
}  
</script>

<template>
  <div id="green-container" v-cloak>
    <div class="background">
      <span class="logo" v-if="isVip">
        <img :src="$filters.siteUrl('double11_2024/images/logo.png')" />
      </span>
      <h2
        class="title w:25% abs right:26% top:19% m:auto w:40vw@<992 w:55vw@<576 left:45vw@<992 left:44vw@<576 top:9vw@<992 top:22vw@<576">
        <img :src="$filters.siteUrl('green_subsidy/images/new/title.png')" />
      </h2>
    </div>

    <!-- 新展活動 -->
    <section>
      <h2 class="title">
        <img v-show="isOff" :src="$filters.siteUrl('green_subsidy/images/new/bar_2504.png')" />
        <img v-show="isOpen" :src="$filters.siteUrl('green_subsidy/images/new/bar_2505.png')" />
      </h2>
      <p class="w:60% w:70%@<992 w:90%@<576 m:auto m:0|auto|4%@<576">
         <img :src="$filters.siteUrl('green_subsidy/images/new/4card.png')" />
      </p>

      <div>
        <img v-show="isOff" class="w:80% w:90%@<992 w:full@<576 m:0|auto|2%" :src="$filters.siteUrl('green_subsidy/images/new/sp2_04.png')" />
         <img v-show="isOpen" class="w:80% w:90%@<992 w:full@<576 m:0|auto|2%" :src="$filters.siteUrl('green_subsidy/images/new/sp2_05.png')" />
        <img class="w:80% w:90%@<992 w:full@<576 m:0|auto|2%" :src="$filters.siteUrl('green_subsidy/images/new/sp_3.png')" />
      </div>
    </section>

    <!-- 環保3C家電產品 週末12%回饋 -->
    <section class="new-box">
      <div class="w:full flex jc:center flex-wrap:wrap gap:10 m:0|0|5% m:0|auto|10%@<576">
        <a href="#info" class="w:50% w:60%@<992 w:90%@<576"><img
            :src="$filters.siteUrl('green_subsidy/images/new/btn1_b.png')" /></a>

        <div class="rel m:auto bg:#2fbe44 pb:1% p:2%|3%|3%|3%@<576" id="info">
          <img class="w:full abs left:0 top:0 right:0 z:-1 hidden@<576"
            :src="$filters.siteUrl('green_subsidy/images/new/g1.png')" />
          <p class="w:90% w:full@<576 m:auto pt:1.5%">
            <img :src="$filters.siteUrl('green_subsidy/images/new/g4.png')" />
          </p>
        </div>
      </div>

        <a :href="
            $filters.addGALink('https://events.tk3c.com/events_net/greenpoint.tk3c/index.html')
          " class="w:50% w:60%@<992 w:90%@<576 m:0|auto|4%" target="_blank"><img
            :src="$filters.siteUrl('green_subsidy/images/new/btn2.png')" /></a>

      <div class="box" v-show="isNew">
        <!-- 頁籤 -->
        <Tabs :isSwiper="1" :tabs="newTabs" :swiperOption="swiperOption.breakpoints">
          <template v-slot="{ selectedTab }">
            <TabContent v-for="(tab, n) in newTabs" :menus="tab.id" :index="n" :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- 本週環保小尖兵 -->
    <section class="special-group scroll" titles="本週環保小尖兵" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/S1_a.png')" alt="本週環保小尖兵" />
      </h2>
      <div class="special">
       <ListD :pro="product2[menuSp]"></ListD> 
      </div>
    </section>

    <!-- 綠點 -->
    <section class="green-box scroll" titles="環保集點專區" id="green">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/green_title.png')" alt="" />
      </h2>
      <div class="green content">
         <Tabs :tabs="tabs">
          <template v-slot="{ selectedTab }">
            <TabContent :isSwiper="1" :moreImage="'green_subsidy/images/more2.png'" v-for="(tab, t) in tabs" :menus="tab.id" :moreUrl="tab.url" :index="t" :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box scroll" titles="政府補助" id="sub">
      <img class="sub-bg" :src="$filters.siteUrl('green_subsidy/images/sub_bg_2406.png')" alt="" />
      <ul>
        <li class="alert1">
          <a @click="alert">
            <img :src="$filters.siteUrl('green_subsidy/images/a05_1.png')" alt="" />
          </a>
        </li>
        <li class="alert2">
          <a :href="$filters.addGALink('https://save3000.moeaea.gov.tw/subsidy02/index/index.aspx')" target="_blank">
            <img :src="$filters.siteUrl('green_subsidy/images/a05_2.png')" alt="" />
          </a>
        </li>
        <li class="long">
          <a :href="
              $filters.addGALink('https://events.tk3c.com/events_net/greenpoint.tk3c/index.html')
            " target="_blank">
            <img :src="$filters.siteUrl('green_subsidy/images/turtle_2406.png')" alt="" />
          </a>
        </li>
      </ul>

      <!-- 彈出視窗 -->
      <AlertBox ref="alert" :type="'image'">
         <img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg">
         <img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg">
      </AlertBox> 
    </section>

    <!-- 印表機 -->
    <section class="printer-box scroll" titles="印表機" id="printer">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/S2_a.png')" alt="" />
      </h2>

       <Tabs :tabs="printers">
          <template v-slot="{ selectedTab }">
            <TabContent :moreImage="'green_subsidy/images/more2.png'" v-for="(printer, p) in printers" :menus="printer.id" :moreUrl="'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=123239'" :index="p" :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
    </section>

    <!-- 其他樓層 -->
    <CommonFloor :floors="floorImg" :menu="menu" :moreImage="moreImage"></CommonFloor>
  </div>
  
  <!-- 右側選單+手機版 -->
  <RightAside :type="'mobile'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/green_subsidy/images/';
$dir2: 'https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/new/';
/*  共用樣式調整 */

body {
  background: #cceea9;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir2 + 'kv.png';
    background-image: url($image);
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg_origin.png';
    background-image: url($image);
    background-repeat: repeat-y;
    background-size: 100% auto;
    background-position:
      0 45vmax,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.bg01 {
  background: #23b4fe;
  border-radius: 10px;
}

.more {
  font-size: 0;
  padding: 0;
}

/* 環保集點 */
#green-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 36%;
    .title {
      animation: zoomInNormal 1.6s linear;
    }
    .logo {
      width: 6%;
      height: auto;
      display: block;
      position: absolute;
      left: 21%;
      top: 45px;
    }
  }
}

.new-box {
  .tab-content {
    .bg01 {
      background: #2fbe44;
    }
  }
  .swiper-wrapper {
    justify-content: center;
    padding-bottom: 10px;
  }
}

.special-group {
  .title {
    margin: 0 auto 0%;
  }
  .bg01 {
    border-radius: 0;
    background: #23948a;
    padding: 1%;
    .list_special {
      ul {
        justify-content: left;
        li {
          width: 23.9%;
          margin: 0 9px 8px 0;
        }
      }
    }
    ul {
      justify-content: left;
    }
    .hotproboxL,
    .hotproboxR {
      .icon_number {
        display: none;
      }
    }
  }

  .tab {
    justify-content: left;
    flex-wrap: nowrap;
    li {
      width: 48%;
      margin: 0 10px;
      filter: grayscale(1);
      transform: translateZ(0);
      &.active {
        filter: grayscale(0);
        transform: translateZ(0);
      }
    }
  }

  .tab-content {
    .bg01 {
      display: none;
      &:nth-of-type(1) {
        background: #ff5901;
      }
      &:nth-of-type(2) {
        background: #4f5a98;
        ul {
          justify-content: left;
          li {
            margin: 6px 5px;
          }
        }
        .prev2,
        .next2 {
          display: none;
        }
      }
    }
    .swiper-slide {
      margin: 0 0;
    }
  }

  .swiper-slide {
    margin: 0 0;
  }
  .special {
    position: relative;
  }
}

.sub-box {
  ul {
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    li {
      width: 45%;
      margin: 0 5px 10px;
      &.long {
        width: 90%;
      }
    }
  }
  &.origin {
    margin: -14% auto 3%;
  }
  .alert3 {
    margin: 5% auto 0;
  }
}

.green-box {
  .green {
    background: #2ca69c;
    position: relative;
    padding-bottom: 2%;
  }

  .title {
    margin: 0 auto 0;
  }

  .tab-content {
    width: 95%;
    margin: 0 auto 0;
    .bg01 {
      background: none;
      margin: 0 auto 0;
    }
    .swiper-slide {
      margin: 0 0;
    }
  }

  .more {
    margin: 0 auto 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    &:hover {
      position: relative;
    }
  }
}

#tab-area {
  .swiper-slide {
    opacity: 0.4;
    &.active {
      opacity: 1;
    }
  }
}

.printer-box {
  .tab {
    .swiper-slide {
      width: 20%;
      padding: 5px 5px 0;
      font-size: 1.5em;
      box-sizing: border-box;
      background: #fff;
      color: #000;
      &.active {
        background: #3f3a39;
        color: #fff;
      }
    }
    .swiper-wrapper {
      justify-content: center;
    }
  }
  .bg01 {
    margin: 0 auto 2%;
  }
}

.floor {
 .bg01 {
  margin: 0 auto 2%;
 }
}

.alert-box {
  .img-content {
    height: 70%;
    overflow: auto;
    padding: 0;
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #green-container {
    .background {
      padding-bottom: 48vw;
      .logo {
        width: 10vw;
        left: 16vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position:
        -11vw 4vw,
        top;
    }
  }

  .sub-box {
    li {
      width: 42vw;
      margin: 0 5px 2%;
      &.long {
        width: 85vw;
      }
    }
  }

  .new-box {
    .swiper-wrapper {
      justify-content: left;
    }
  }

  .printer-box,
  .floor {
    .bg01 {
      margin: 0 auto 2%;
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #green-container {
    .background {
      padding-bottom: 75vw;
      .logo {
        width: 15vw;
        left: 0;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position:
        -42vw 10vw,
        top;
    }
  }

  .green-box {
    overflow: hidden;
    .tab {
      li {
        width: 29%;
      }
    }

    .swiper-button-next {
      right: 0 !important;
      &:after {
        color: #0c598a;
      }
    }
    .swiper-button-prev {
      right: 0 !important;
      &:after {
        color: #0c598a;
      }
    }
  }

  .special-group {
    width: 100%;
    .bg01 {
      .list_special {
        padding: 0.8% 0 0.3% 2%;
        ul {
          li {
            width: 47.8%;
            margin: 0 8px 8px 0;
          }
        }
      }
    }
    .tab {
      li {
        margin: 0 5px;
      }
    }
    .tab-content {
      .prev2,
      .next2 {
        display: none;
      }
    }
  }

  .printer-box {
    .tab {
      .swiper-slide {
        font-size: 1em;
      }
    }
  }
}
</style>
