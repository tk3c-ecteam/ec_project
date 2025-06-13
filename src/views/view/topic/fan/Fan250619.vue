<template>
  <Template618 :contents="contents">
    <template #board-image>
      <img class="pc" :src="$filters.siteUrl('tv_media/images/BOX_PC.png')" />
      <img class="mobile" :src="$filters.siteUrl('tv_media/images/BOX_M2.png')" />
    </template>

    <template #items>
        <p class="items i1">
          <img :src="$filters.siteUrl('fan/images/item1.png')" />
        </p>
        <p class="items i2">
          <img :src="$filters.siteUrl('fan/images/item2.png')" />
        </p>
        <p class="items i3">
          <img :src="$filters.siteUrl('fan/images/item3.png')" />
        </p>
      </template>

    <template #content>
      <!-- 登記送 -->
      <section class="gift-box">
        <ul class="w:85% w:95%@<992 w:full@<576 grid-cols:1">
          <li>
            <a class="mb:2%" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
              <img class="pc" :src="$filters.siteUrl('fan/images/gift_pc2.png')">
              <img class="mobile" :src="$filters.siteUrl('fan/images/gift_m2.png')">
            </a>
            <a class="w:18% w:30%@<992 w:35%@<576" @click="alert">
              <img :src="$filters.siteUrl('tv_media/images/bn.png')">
            </a>
          </li>
        </ul>

        <!-- 活動辦法 -->
        <AlertBox ref="alert" :type="'text'">
          <ul>
            <li>
              1.活動期2025/6.1-30內，於燦坤線上購物網站購搭載風扇或水冷扇，單品滿額$2000(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6.1-30(含)前至指定活動頁面完成登記申請，登記送好禮:聲寶8吋循環扇 (市價$888，10名)
            </li>
            <li>2.完成登錄不代表保證獲得回饋，限量名額依「登錄且符合活動條件」順序為準，最終認定以燦坤3C電腦系統為準，不接受截圖、翻拍等證明。若系統異常導致無法登錄或資料遺失等情況時，燦坤3C可改以「發票開立時間」認定。若發票後續有取消、退換貨並重開時，需以「新發票號碼」重新登錄。​</li>
            <li>3.經核對無誤後，燦坤3C將於2025/7/28起陸續寄出獎項至會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。</li>
            <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。 </li>
            <li>
              5.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理 (1)提供贈品前：燦坤3C將不會寄送贈品。 (2)提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。 
            </li>
            <li>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
            <li>7.每人限登記一次。參與資格以燦坤認列為準。 ​</li>
            <li>8寄送資料將以燦坤線上購物會員資料為準，若因燦坤後台資料填寫不完整或錯誤，影響後續寄送，將視同失去贈獎資格。​</li>
            <li class='last'>9.滿額活動無法累計贈送，每人限登單一門檻，如重複登記，燦坤保有權決定所贈送之贈品。​</li>
          </ul>
        </AlertBox>
      </section>

      <!-- 速速go -->
      <section class="sale-box scroll" titles="速速GO" id="go">
        <h2 class="title">
          <a :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
            <img :src="$filters.siteUrl('fan_hot/images/2504/S1.png')" />
          </a>
        </h2>

        <div class="sale">
          <listF :pro="product2[menuGo]" :isSwiper="1" :name="'sale'"></listF>
        </div>
      </section>
    </template>

    <template #summer-floor>
      <img :src="$filters.siteUrl('fan/images/S02_a.png')">
    </template>
  </Template618>
</template>

<script>
export default {
  data() {
    return {
      contents:[
        {
          type:'summer',
          title:'fan/images/title619.png',
          spImage:'tv_media/images/sp_bg.png',
          menuPro:8217,
          floors: [
            {
              text: '節能DC扇',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
            },
            {
              text: '對流循環扇',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
            },
            {
              text: '勁涼AC扇',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
            },
            {
              text: '瞬冷水冷扇',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
            },
            {
              text: '便攜小風扇',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
            },
            {
              text: '熨燙好心情',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
            },
            {
              text: '滅蚊一把罩',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
            },
            {
              text: '限量福利品',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
            },
            {
              text: '電暖超低價',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
            }
          ],
          specials:[
            {
              image:'fan/images/C01.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=17040&hid=124669'
            },
            {
              image:'fan/images/C02.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225'
            },
            {
              image:'fan/images/C03.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=69944'
            },
            {
              image:'fan/images/C04.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=2966&hid=5664'
            },
            {
              image:'fan/images/C05.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=22698&hid=115598'
            },
            {
              image:'fan/images/C06.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=17040&hid=71645'
            },
            {
              image:'fan/images/C07.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=22698&hid=116932'
            }
          ],
          menus:[8219,8221,8220,8222,8223,8224,8225,8226,8227],
        }
      ],
      today:new Date(),
      menuGo:8231 //速速go陳列編號
    }
  },
  mounted() {
    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  },
  methods: {
    alert() {
      this.$refs.alert.openAlert();
    }
  },
}
</script>

<style lang="scss">
body {
  background: #ffe9cf;
}

.bg01 {
  background: #196ff0;
}

.background {
  &.summer {
    padding-bottom: 76%;
    .title {
      top: 2%;
    }
  }
}
.special-box {
  .swiper-slide {
    width: 18.5% !important;
  }
}

.sale-box {
  .title {
    margin: 0 auto -3%;
  }
  .bg01 {
    background: #0f4761;
  }
}
/*  電腦版其他尺寸 */
@include media-query("mobile", "1600px") {
  .background {
    &.summer {
      padding-bottom: 86%;
    }
  } 
}
@include media-query("mobile", "992px") {
  .background {
    &.summer {
      padding-bottom: 137vw;
    }
  } 
  .special-box {
    .swiper-slide {
      width: 31.5% !important;
    }
  }
}
@include media-query("mobile", "576px") {
  .background {
    &.summer {
      padding-bottom: 232vw;
      .title {
        top: 19vw;
      }
    }
  } 
  .special-box {
    .swiper-slide {
      width: 46% !important;
    }
  }
}

@include media-query("pc", "2500px") {
  .gift-box {
    margin-top: 10%;
  }
}
</style>
