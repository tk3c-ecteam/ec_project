<template>
  <div id="samsung-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025_S25/images/title2.png')" />
      </h2>

      <h5 class="subtitle">
        <img :src="$filters.siteUrl('2025_S25/images/tt4.png')" />
      </h5>

      <div class="product animate__animated animate__bounceInRight">
        <img :src="$filters.siteUrl('2025_S25/images/PD.png')" />
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('2025_S25/images/item.png')" />
    </p>


    <!-- 星粉專屬 -->
    <section class="special-box scroll" titles="星粉專屬好康" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('2025_S25/images/S00.png')" />
      </h2>

      <ul class="gap:10 ai:flex-start">
        <li v-for="(sp2,s) in special2" :class="[sp2.class ? sp2.class : '']">
          <a v-if="s == 0" :href="sp2.url">
            <img :src="$filters.siteUrl(sp2.image)">
          </a>

          <div v-else-if="s == 1">
            <img :src="$filters.siteUrl(sp2.image)">
             <div class="alert">
              <a v-if="s == 1 || s == 2" @click="alert(s)">
                <img :src="$filters.siteUrl('2025_S25/images/btn.png')" />
              </a>
            </div>
          </div>
          <img v-else :src="$filters.siteUrl(sp2.image)">
        </li>
         <li class="long mt:2%">
          <a :href="$filters.addGALink('https://www.tk3c.com/3COldChangeNew/index.aspx')" target="_blank">
            <img class="pc" :src="$filters.siteUrl('2025_S25/images/C09.png')" />
            <img class="mobile" :src="$filters.siteUrl('2025_S25/images/C09_m.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 商品樓層 -->
    <section class="pro-group scroll" v-for="(pro,p) in proS[0]" :key="p" :titles="pro[0].text"
      :class="`pro${Number(p) + 1}-box`" :id="`p${Number(p) + 1}`">
      <h2 class="title">
        <img :src="$filters.siteUrl(pro[0].images)" />
      </h2>

      <!-- 簡略版 -->
      <div v-show="isOff">
        <h3 class="w:20% w:40%@<992 w:50%@<576 m:auto">
          <img :src="$filters.siteUrl('2025_S25/images/tab1.png')" />
        </h3>

        <listF v-if="products[menus[p]] != undefined" :pro="products[menus[p]].Data"></listF>
        <a class="more" :href="$filters.addGALink(pro[0].url)" target="_blank">MORE</a>
      </div>

      <!-- 正式版 -->
      <div v-show="isOpen">
        <Tabs :tabs="pro[0].content">
          <template v-slot="{ selectedTab }">
            <TabContent v-for="(content, c) in pro[0].content" :moreUrl="content.url" :menus="pro[0].menu[c]" :index="c"
              :selectedTab="selectedTab">
            </TabContent>
          </template>
        </Tabs>
      </div>
    </section>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>

<script>
import { EffectFlip } from "swiper/modules";
export default {
  data() {
    return {
      EffectFlip,
      sp1:[
        {
          "image":"2025_S25/images/C01.png",
          "url":"#p1"
        },
        {
          "image":"2025_S25/images/C01-1.png",
          "url":"#p1"
        }
      ],
      sp2:[
        {
          "image":"2025_S25/images/C04.png",
        },
        {
          "image":"2025_S25/images/C04-1.png",
        }
      ],
      specials:[
        {
          "image":"2025_S25/images/C05.png",
          "url":""
        },
         {
          "image":"2025_S25/images/C06.png",
          "url":""
        },
         {
          "image":"2025_S25/images/C07.png",
          "url":""
        },
         {
          "image":"2025_S25/images/C08.png",
          "url":""
        },
      ],
      special2:[
        {
          "image":"2025_S25/images/C05b.png",
          "class":"mid",
          "url":"#p1"
        },
        {
          "image":"2025_S25/images/C04b.png",
          "class":"mid"
        },
         {
          "image":"2025_S25/images/C03_2b.png",
        },
         {
          "image":"2025_S25/images/C06b.png",
        },
         {
          "image":"2025_S25/images/C07b.png",
        },
         {
          "image":"2025_S25/images/C08b.png",
        },
      ],
      proS:[
        {
          0:[
            {
              text:'Galaxy S25 Ultra',
              images:"2025_S25/images/S01.png",
              menu:[7805,7806],
              url:"https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124277",
              content:[
                {
                  image:'2025_S25/images/tab4.png',
                  url:"https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124277"
                },
                {
                  image:'2025_S25/images/tab3.png',
                  url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124358'
                }
              ]
            }
          ],
          1:[
             {
              text:'Galaxy S25+',
              images:"2025_S25/images/S02.png",
              menu:[7807,7808],
              url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124276',
              content:[
                {
                  image:'2025_S25/images/tab4.png',
                  url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124276'
                },
                 {
                  image:'2025_S25/images/tab3.png',
                  url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124358'
                },
              ]
            }
          ],
          2:[
             {
              text:'Galaxy S25',
              images:"2025_S25/images/S03.png",
              menu:[7809,7810],
              url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124275',
               content:[
                {
                  image:'2025_S25/images/tab4.png',
                  url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124275'
                },
                 {
                  image:'2025_S25/images/tab3.png',
                  url:'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124358'
                },
              ]
            }
          ]
        }
      ],
      menus:[7805,7807,7809],
      today:new Date(),
      isOff:true,
      isOpen:false
    }
  },
  mounted() {
    const { today } = this;
    if(today < new Date('2025/02/14 18:00')) {
      this.getFloorData(this.menus)
      this.sp1.splice(1,1);
    } else {
      this.isOff = false;
      this.isOpen = true;
    }
  },
  methods: {
    alert(id) {
      //活動辦法
      let infoHtml = '';
      switch (id) {
        case 1:
           //三星
          infoHtml = `
               <p style="font-weight:bold;margin-bottom:10px;text-align:left;">【SAMSUNG S25系列新機抽獎活動】</p>
           <ul style='text-align:left;'>
                    <li style='margin-bottom:10px';>1.於燦坤3C門市或燦坤線上購物網站購買皆可參加本活動。​</li>
                    <li style='margin-bottom:10px';>2.凡於2025/1/23-3/31購買「SAMSUNG S25系列新機」(下稱活動指定商品)，並於2025/4/7前出貨/配送完成，且後續未退貨退款者，憑消費發票即可參加抽獎活動，抽出1名送「SAMSUNG Tab S10U 1TB WIFI 鍵盤組(貨號252535，市價$58,490)」、1名送「台北-首爾來回雙人機票兌換券(市價$14,600)」，每一會員限中獎1次。​</li>
                     <li style='margin-bottom:10px';>3.燦坤3C將於2025/4/16於FACEBOOK粉絲專頁「燦坤3C」公布中獎者，並另以簡訊及(或)電話通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
                    <li style='margin-bottom:10px';>4.中獎者請於2025/4/23前填寫中獎通知函完成；(1)攜帶身分證件、中獎發票至「原開賣門市」，出示中獎公告並填寫中獎通知函完成或(2) 私訊「燦坤3C」粉絲專頁，提供姓名/電話/地址/中獎發票/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))​</li>
                    <li style='margin-bottom:10px';>5.經核對無誤後，燦坤3C會另行通知得獎者，請得獎者於2025/5/10前至指定門市領取。​</li>
                    <li style='margin-bottom:10px';>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                    <li style='margin-bottom:10px';>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(1) 提供獎品前：燦坤3C將不會提供獎品。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
                    <li style='margin-bottom:10px';>本活動得與銀行滿額現折活動併行，但不與其他優惠活動(包含銀行全月單筆分期活動、或其他專案活動)併行，活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `
          break;

           case 2:
          //中信
          infoHtml = `
               <p style="font-weight:bold;margin-bottom:10px;text-align:left;">中國信託銀行專案期間自2025/2/14 00:00 -2025/3/16 23:59</p>
               <p style="margin-bottom:20px;text-align:left;">中國信託銀行專案期間，於燦坤線上購物網站，以燦坤3C會員資格購買SAMSUNG S25系列新機/平板/穿戴式裝置，刷「中國信託銀行信用卡」，可享有下列中國信託銀行專屬優惠。</p>
                <p style="color:red;font-weight:bold;margin-bottom:15px;text-align:left;">※信用卡綁定LINE Pay或其他第三方支付恕不享有本活動優惠。</p>
                 <p style="margin-bottom:20px;text-align:left;">相關活動注意事項請參閱下方，活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利</p>
           <ul style='text-align:left;'>
                    <li style='margin-bottom:10px';>1.凡於中國信託銀行專案期間(2025/2/14 00:00-2025/3/16 23:59)於燦坤線上購物網站購買SAMSUNG S25系列新機/平板/穿戴式裝置，刷「中國信託銀行信用卡」，單筆分期刷滿30,000元(限分3、6、8期，再享分期0%利率)，可享現折2,000元的優惠，單張發票不累贈，最多折抵一次，請先加入燦坤線上購物會員或是登入會員帳號及密碼，選擇開賣商品後，在購物車勾選想適用銀行優惠，將於結帳時由系統判斷是否符合活動條件，符合活動條件將直接於結帳金額現折2,000元，限量5名。​</li>
                    <li style='margin-bottom:10px';>2.回饋限制與例外​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(1) 每位會員及每張中國信託信用卡限回饋1次。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 消費滿額以活動商品實際發票開立金額認定；且所有折扣後的結帳刷卡金額須滿30,000元(限分3、6、8期)始符本活動之條件。若未依活動指定方式分期、或未以活動指定銀行信用卡刷滿指定金額、或銀行回饋限量名額額滿時，則無法享有銀行回饋優惠。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(3) 訂購成功與否以燦坤電腦系統中訂單送出時間之紀錄與認定為準，而非依會員自行判定，如您送出時，限量已全數訂購完畢，則可能會訂購不成功。送出前請再次確認您選擇的型號、顏色、規格、加購商品與選擇取貨門市正確，送出後即無法修正。​</li>
                     <li style='margin-bottom:10px;padding-left:10px';>(4) 活動指定商品需於2025/3/30出貨/配送完成，如遲至2025/3/31(含)才出貨/配送或後續有退貨退款，則不享有本活動優惠。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(5) 如會員有違反上開使用限制(如每位會員每張中國信託銀行信用卡回饋超過上限次數)時，應就相關超出限制優惠的金額部分補支付給燦坤3C，或燦坤有權取消訂單。​</li>
                    <li style='margin-bottom:10px';>3.選擇門市取貨的訂單，前往取貨時，請攜帶本人有效證件正本(身分證或健保卡)及訂單成功憑證，經出示確認取貨人與訂購人姓名及手機號碼相同無誤後，進行提貨流程，並同意現場拆封檢查，由燦坤門市人員現場提供新機測試及配件點交，以確保手機使用無誤。​</li>
                    <li style='margin-bottom:10px';>4.美國運通卡、公司卡、簽帳金融卡等無分期功能之卡片恕無法參加分期活動，分期交易無提供刷卡紅利點數、哩程、電信點、LINE POINTS及現金等回饋。本活動不與其他優惠活動併行，例如：凡以本專案優惠開賣之商品，就不會再送其他燦坤3C會員紅利券或銀行現折贈品券。如同時符合多項優惠活動，將優先提供本活動之優惠。​</li>
                    <li style='margin-bottom:10px';>5.會員保證所有提出之資料均為真實且正確，並且未冒用或盜用任何第三人之資料，如有疑慮或發現不符資格、資料造假、不實，燦坤有權要求提供相關證明，以佐證其為會員本人，否則燦坤有權取消開賣資格。​</li>
                     <li style='margin-bottom:10px';>6.訂購即視同同意本活動最後公告之內容，並已充分知悉並同意燦坤依個人資料保護相關法規進行蒐集、處理及利用其個人資料。​</li>
                    <li style='margin-bottom:30px';>活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `
          break;
      }

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
$dir: "https://events.cdn-tkec.tw/events_net/events_net/2025_S25/images/";
$origin: "https://events.tk3c.com/events_net/events_net/2025_S25/images/";

/*  共用樣式調整 */
body{
  background: #111127;
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
  margin: 0 auto 2%;
}

.more {
  background: red;
}

.item {
  mix-blend-mode: lighten;
}

#samsung-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 35%;
    .title {
      width: 35%;
      position: absolute;
      left: 18%;
      top: 25%;
    }
    .subtitle {
      width: 30%;
      position: absolute;
      left: 20%;
      margin: 0 auto;
      top: 68%;
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

.special-box {
  li {
    width: 20%;
    &.long {
      width: 83%;
    }
    &.mid {
      width: 41%;
    }
    .alert {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: -8%;
      a {
        width: 30%;
      }
    }
    &:nth-of-type(3) {
      .alert {
        bottom: -6%;
        a {
          width: 50%;
        }
      }
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #samsung-container {
    .background {
      padding-bottom: 50%;
      .title {
        width: 45%;
        top: 14vw;
        left: 11vw;
      }
      .subtitle {
        width: 35%;
        top: 34vw;
        left: 14vw;
      }
      .product {
        width: 40%;
        top: 12vw;
        right: 4vw;
      }
    }
  }

  body{
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
    }
  }

  .special-box {
    li {
      width: 23%;
      &.long {
        width: 95%;
      }
      &.mid {
        width: 47%;
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

  #samsung-container {
    .background {
      padding-bottom: 165%;
      .title {
        width: 90%;
        top: 21vw;
        left: 6vw;
        right: 0;
        margin: 0 auto;
      }
      .subtitle {
        width: 75%;
        top: 60vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 90%;
        top: 85vw;
        left: 6vw;
        right: 0;
        margin: 0 auto;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position: -46vw 10vw,top;
    }
  }

  .special-box {
    li {
      width: 46%;
      &.mid {
        width: 95%;
      }
    }
  }

  .pro-group {
    .tab {
      li {
        width: 45%;
      }
    }
  }
}
</style>
