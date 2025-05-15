<script> 
   export default {
    data() {
      return {
        sales:[
          { "url": "", "image": "2408computer/images/s250.png", "menu": 7367 },
          { "url": "", "image":"2408computer/images/s699.png","menu":7331},
          { "url": "", "image": "2408computer/images/s599.png", "menu": 7332 },
          { "url": "", "image": "2408computer/images/s500.png", "menu": 7333 },
          { "url": "", "image": "2408computer/images/s200.png", "menu": 7335 },
          { "url": "", "image": "2408computer/images/s100.png", "menu": 7336 },
        ],
        sale09: [
          { "url": "", "image": "2408computer/images/s1000_9.png", "menu": 7377 },
          { "url": "", "image": "2408computer/images/s700_9.png", "menu": 7378 },
          { "url": "", "image": "2408computer/images/s600_9.png", "menu": 7379 },
          { "url": "", "image": "2408computer/images/s500_9.png", "menu": 7380 },
          { "url": "", "image": "2408computer/images/s499_9.png", "menu": 7381 },
          { "url": "", "image": "2408computer/images/s200_9.png", "menu": 7382 },
          { "url": "", "image": "2408computer/images/s100_9.png", "menu": 7383 },
        ],
        proDatas:[
          {
            "url":"https://www.tk3c.com/dictitleurl.aspx?cid=123690",
            "image":"2408computer/images/2c_bn.png",
          },
          {
            "url": "https://www.tk3c.com/dictitleurl.aspx?cid=123690",
            "image": "2408computer/images/1c_bn.png",
          },
        ],
        specials: [
          { "menu": 7368,"image": "2408computer/images/S0-1.png" },
          { "menu": 7369,"image": "2408computer/images/S0-2.png" },
          { "menu": 7370,"image": "2408computer/images/S0-3.png" },
        ],
        floorImg:[
          {
            "moreUrl":"https://events.tk3c.com/events_net/green_subsidy/index.html",
            "image":"2408computer/images/sb5.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/24TK2C/index.html",
            "image": "2408computer/images/sb6_2.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/airConditionerLAB/index.html",
            "image": "2408computer/images/sb7.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/2024083C/index.html",
            "image": "2408computer/images/sb8_2.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/wet/index.html",
            "image": "2408computer/images/sb9.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/icewash2209/index.html",
            "image": "2408computer/images/sb10.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/fan_hot/index.html",
            "image": "2408computer/images/sb11.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/icewash2209/index.html",
            "image": "2408computer/images/sb12.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/events_net/PLAYGAMES/index.html",
            "image": "2408computer/images/sb13.png"
          },
          {
            "moreUrl": "https://events.tk3c.com/events_net/2020TVforever/index.html",
            "image": "2408computer/images/sb14.png"
          },
          {
            "moreUrl": "https://www.tk3c.com/dic2.aspx?cid=123139&aid=23800&hid=123290",
            "image": "2408computer/images/sb15.png"
          },
        ],
        status:0,
        status2:0,
        status3:0,
        today:new Date(),
        pro:[],
        sale:null,
        sp:null,
        proSP:[],
        menu: [7338, 7339, 7340, 7341, 7343, 7344, 7345, 7346,
          7347, 7348, 7349
        ],
        menuPro:[7365,7366]
      }
    },
    mounted() {
      const {today} = this;

      if (today >= new Date('2024/09/01')) {
        this.sales = this.sale09;
        this.sales[0].menu = this.sale09[0].menu;
      }

     //撈取3c大展樓層商品
     this.getFloorData(this.menuPro);
  
      //撈取聯名卡樓層
      this.getFloorSingle(7337);
      
    },
  methods: {
    change(id) {
     this.status = id;
    },
    message(type) {
      let infoHtml = "";

      switch (type) {
        case 1:
          // 登記即可抽 iPad Air活動辦法
          infoHtml = `
             <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.活動期間 (2024/8/26 -2024/9/12) ，於燦坤線上購物網站購買全館任一商品 ，並於線上完成付款且後續未退貨退款者，並於2024/9/16(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，將抽出1名送「iPad Air 11吋 Wi-Fi 128GB (1名) (不挑色)。​</li>
             <li style='margin-bottom:10px;'>2.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2024/10/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2024/10/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依小編提供之繳交期限與規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。 ​</li>
               <li style='margin-bottom:10px;'>7.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理 :​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:10px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `;
          break;

        case 2:
          // 綁卡會員下單加碼抽1000燦坤K弊 *10名
          infoHtml = `
             <ul style='text-align:left;'>
             <li style='margin-bottom:10px;color:red;font-weight:bold;'>1.請留意：本活動需具有「燦坤實體有效會員」身分。請確認您於購買(訂單成立)時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，如購買(訂單成立)時未完成綁定，則無法參加。​</li>
             <li style='margin-bottom:10px;'>2.活動期間(2024/9/1-9/9)，於燦坤線上購物網站購買全館任一商品 ，並於線上完成付款且後續未退貨退款者，並於2024/9/13(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽10名送1,000燦坤K弊 。​</li>
             <li style='margin-bottom:10px;'>3.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>4.得獎名單將於2024/10/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href=">https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
              <li style='margin-bottom:10px;'>5.得獎者請於2024/10/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>6.經核對符合活動條件者，燦坤3C會將燦坤K幣匯入您的會員帳戶中，使用期限預計為2024/12/3-2025/1/1，如遇系統維護等狀況，將延後匯入，實際以燦坤作業時間為準，逾期失效。如您的會員卡屬於臨時卡身分(會員卡正在申請核卡中)，請盡速完成開卡，避免影響您燦坤K幣匯入的權益。燦坤K幣需下載並綁定燦坤APP「名稱：TK3C」方可天天使用。1燦坤K幣可折抵消費金額NT$1元，使用限制及折抵規則，悉以燦坤3C實體門市會員條款及最新公告為準。​</li>
               <li style='margin-bottom:10px;'>7.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C 將以下列方式處理:​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供燦坤K幣前：燦坤3C將不會匯入燦坤K幣。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供燦坤K幣後：燦坤3C將會以系統自動扣回燦坤K幣，如您已使用燦坤K幣，就無法足額扣回的部分，您應返還等值金額(1燦坤K幣= NT$1元)。​</li>
             <li style='margin-bottom:10px;'>8.活動未盡事宜以燦坤線上購物官網公告為主，燦坤線上購物保留活動最終解釋、修改、變更之權利。​</li>
        </ul>
          `;
          break;

        case 3:
          // 9/10-9/12 滿千送百元下單禮
          infoHtml = `
             <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.活動期間(2024/9/10~2024/9/12)內，於燦坤線上購物網站購買全館任一商品，單筆發票消費金額滿1,000元，並於線上完成付款且後續未退貨退款者，並於2024/9/16(含)前至指定活動頁面完成登記申請，送 「E-books X82 Type-C鋁合金快充線1M- (不挑色)(市價$179)」 ，限量100名。(單筆訂單限登記一次，每一會員帳號以一次登記為限)。​</li>
             <li style='margin-bottom:10px;'>2.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>3.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>4.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li style='margin-bottom:10px;'>5.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li style='margin-bottom:10px;'>6.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理:​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `;
          break;
      }

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
      });
    }
  }
   }
</script>

<template>
  <div id="computer-container">
    <div class="background rel">
      <h2
        class="title animate__animated animate__backInLeft abs w:35% w:45vw@<992 w:80vw@<576 left:14% left:8vw@<992 left:0@<576 right:0@<576 m:auto@<576 top:18% top:12vw@<992 top:27vw@<576 z:5">
        <img :src="$filters.siteUrl('2408computer/images/title.png')" />
      </h2>
      <h5
        class="subtitle abs w:32% w:38vw@<992 w:75vw@<576 left:15% left:0@<576 right:0@<576 m:auto@<576 left:10vw@<992 top:58% top:41vw@<992 top:78vw@<576">
        <img v-if="today < new Date('2024/09/01')" :src="$filters.siteUrl('2408computer/images/subtitle.png')" />
        <img v-else :src="$filters.siteUrl('2408computer/images/subtitle9.png') " />
        <a class="go w:12% abs top:40% left:85% animate__animated animate__pulse"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123690')">
          <img :src="$filters.siteUrl('2408computer/images/go.png') " />
        </a>
      </h5>

      <div
        class="product abs w:35% w:45vw@<992 w:63vw@<576 right:14% right:4vw@<992 right:0@<576 left:0@<576 m:auto@<576 top:24% top:15vw@<992 top:108vw@<576 animate__animated animate__fadeInRight">
        <img :src="$filters.siteUrl('2408computer/images/pd.png') ">
      </div>
    </div>

    <div class="background2"></div>

    <p class="item"><img :src="$filters.siteUrl('2408computer/images/de.png')" />
    </p>

    <!-- 限時 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2408computer/images/sb0.png')">
      </h2>

      <div>
        <Tabs :tabs="specials">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(sp, s) in specials" :menus="sp.menu" :index="s"
            :selectedTab="selectedTab">
          </TabContent>
        </template>
       </Tabs>

        <a class="more" :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123647') "
        target="_blank">看更多</a>
      </div>
    </section>

    <!-- 現折券 -->
    <section class="sale-group">
      <h2 class="title">
        <img :src="$filters.siteUrl('2408computer/images/sb3.png')">
      </h2>

      <div>
        <Tabs :tabs="sales">
        <template v-slot="{ selectedTab }">
          <TabContent :isSwiper="1" v-for="(sale, s) in sales" :menus="sale.menu" :index="s"
            :selectedTab="selectedTab">
          </TabContent>
        </template>
      </Tabs>
        <a v-if="today < new Date('2024/09/01')" class="more"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123647')" target="_blank">看更多</a>
        <a class="more" v-else :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123738')" target="_blank">看更多</a>
      </div>
    
    </section>

    <!-- 銀行 -->
    <section class="bank-group">
      <img class="scale(1.2)@<756" v-if="today < new Date('2024/09/01')"
        :src="$filters.siteUrl('2408computer/images/sb1.png')">
      <img class="scale(1.2)@<576" v-else :src="$filters.siteUrl('2408computer/images/sb91.png') ">
      <a class="w:30% w:45vw@<992 w:60vw@<576 mt:2% mt:8%@<576"
        :href="$filters.addGALink('https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main')"
        target="_blank"><img :src="$filters.siteUrl('2408computer/images/card.png')"></a>
    </section>

    <!--  全站優惠 -->
    <section class="gift-box m:0|auto|20%@<576">
      <img class="w:full abs scale(1.2)@<576 left:0 right:0 m:auto top:0 top:8%@<576 hidden@<576 z:-1"
        :src="$filters.siteUrl('2408computer/images/sb2.png')">

      <ul class="tab gap:10 pt:13% pt:12%@<992 pt:0@<576 gap:5@<576 mb:1% mb:3%<@576">
        <li class="w:28% w:30vw@<992 w:46vw@<576" :class="[status == 0 ? 'active' :'']">
          <a @click="change(0)"><img :src="$filters.siteUrl('2408computer/images/sb2-1.png')"></a>
        </li>
        <li class="w:28% w:30vw@<992 w:46vw@<576" :class="[status == 1 ? 'active' : '']">
          <a @click="change(1)"><img :src="$filters.siteUrl('2408computer/images/sb2-2.png')"></a>
        </li>
      </ul>

      <!-- 全站活動 -->
      <div class="tab-content t1" v-show="status == 0">
        <ul>
          <li class="all">
            <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank"><img
                :src="$filters.siteUrl('24_99shopping/images/S4-b-01-3.png')"></a>
            <div class="links">
              <a @click.prevent="message(1)">
                <img :src="$filters.siteUrl('24_99shopping/images/bn.png')">
              </a>
              <a @click.prevent="message(2)">
                <img :src="$filters.siteUrl('24_99shopping/images/bn.png')">
              </a>
              <a @click.prevent="message(3)">
                <img :src="$filters.siteUrl('24_99shopping/images/bn.png')">
              </a>
            </div>
          </li>
          <li class="social">
            <img v-if="today < new Date('2024/09/01')" :src="$filters.siteUrl('24_99shopping/images/S4-b-02-2.png')">
            <img v-else :src="$filters.siteUrl('24_99shopping/images/S4-b-02-3.png')">
            <div class="links">
              <a :href="$filters.addGALink('https://www.facebook.com/TDdd331/posts/pfbid0avQ4jmEbhHq3zAjnA6UgQDDW97e5QPthZJaCdGHj37kdFvTQWmwNbWdUaaLL7fjil?locale=zh_TW')"
                target="_blank"></a>
              <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank"></a>
            </div>
          </li>
        </ul>
      </div>

      <!-- 線上會員綁定 -->
      <div class="tab-content t2" v-show="status == 1">
        <ul v-if="today < new Date('2024/09/01')">
          <li><img :src="$filters.siteUrl('24_99shopping/images/S4-c-02-a.png')"></li>
          <li><img :src="$filters.siteUrl('24_99shopping/images/S4-c-02-b.png')"></li>
        </ul>

        <ul class="gap:10" v-else>
          <li class="w:77% w:73vw@<992 w:95vw@<576">
            <a href="https://events.tk3c.com/events_net/45536BTS/index.html?ec=2408computer#pro07" target="_blank">
              <img src="https://events.tk3c.com/events_net/events_net/AutumnShopping/images/SP01.png">
            </a>
          </li>
          <li class="w:38% w:36vw@<992 w:95vw@<576">
            <a href="https://events.tk3c.com/events_net/45536BTS/index.html?ec=2408computer#pro07" target="_blank">
              <img src="https://events.tk3c.com/events_net/events_net/AutumnShopping/images/SP02.png">
            </a>
          </li>
          <li class="w:38% w:36vw@<992 w:95vw@<576">
            <a href="https://events.tk3c.com/events_net/45536BTS/index.html?ec=2408computer#pro07">
              <img src="https://events.tk3c.com/events_net/events_net/AutumnShopping/images/SP03.png">
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 3C大展商品區 -->
    <section class="product-group scroll" titles="3C大展商品區" id="pro">
      <h2 class="title">
        <img :src="$filters.siteUrl('2408computer/images/sb16.png')">
      </h2>


      <div class="products w:full flex flex-wrap:wrap gap:10">
        <div class="product w:48% w:95vw@<992" v-for="(proData,p) in proDatas" :class="`p${Number(p) + 1}`">
          <a class="banner w:100% pb:1% pb:3%@<576" :href="$filters.addGALink(proData.url)" target="_blank">
            <img :src="$filters.siteUrl(proData.image)">
          </a>

          <ListF :pro="products[menuPro[p]]?.Data" :isSwiper="1" :name="`pro${p + 1}`"></ListF>
          <a class="more" :href="$filters.addGALink(proData.url)" target="_blank">看更多</a>
        </div>
      </div>
    </section>

    <!-- 聯名卡 -->
    <section class="card-group" id="card">
      <h2 class="title">
        <img :src="$filters.siteUrl('2408computer/images/sb4.png')">
      </h2>

      <div class="card">
        <ListF :pro="product2[7337]" :isSwiper="1"></ListF>
        <a class="more" :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123139')"
        target="_blank">看更多</a>
      </div>

      <a class="banner" href="https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main" target="_blank">
        <img class="pc" src="https://events.tk3c.com/events_net/events_net/24618go/images/tk3c_card3.jpg">
        <img class="mobile" src="https://events.tk3c.com/events_net/events_net/24618go/images/tk3c_card3M.jpg">
      </a>
    </section>

    <CommonFloor :floors="floorImg" :menu="menu">
      <template #more>
        看更多
      </template>
    </CommonFloor>
  </div>

  <!-- 右側選單 -->
  <RightAside :type="'mobile2'"></RightAside>

</template>

<style lang="scss">
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2408computer/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/2408computer/images/';

body {
  background: #83ceff;
}

.bg01 {
  background: #000;
  margin: 0 auto 2%;
}

.item {
  top:250px;
}

.more {
  background: #000;
}

#computer-container {
  width: 100%;
  margin: 0 auto;
  position: relative;
  .background {
    width: 100%;
    height: 0;
    $image:$dir + 'kv_bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px,top;
    padding-bottom: 55%;
    .title {
      animation-duration: 1.8s;
      img {
        animation: rubberBand 1.5s;
        animation-delay: 0.7s;
      }
    }
    .subtitle {
      .go {
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
    }
    .product {
      animation-duration: 2.4s;
    }
  }
  .background2 {
    width: 100%;
    height: 100%;
    $image:$dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 0, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
  }
}

.gift-box {
  .tab {
    li {
      filter: grayscale(1);
      transform: translateZ(0);
      &.active {
        filter: grayscale(0);
        transform: translateZ(0);
      }
    }
  }
  .tab-content {
    position: relative;
    &.t1 {
      li {
        width: 44%;
        margin: 0 4px 2%;
        position: relative;
        &.all {
          .links {
            width: 100%;
            position: absolute;
            top: 39%;
            right: -32%;
            a {
              width: 25%;
              margin-bottom: 25%;
            }
          }
          a {
            &:hover {
              position: static;
            }
          }
        }
        &.social {
          .links {
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            top: 0;
            a {
              width: 100%;
              height: 13vmax;
              &:last-of-type {
                height: 15vmax;
              }
            }
          }
        }
      }
    }
  }
}

.product-group {
  .products {
    .bg01 {
      padding: 2% 2% 1%;
      box-sizing: border-box;
    }
    .p1 {
      .bg01 {
        background: #5ed91a;
      }
    }
    .p2 {
      .bg01 {
        background: #ff67cf;
      }
    }
    .banner {
      position: relative;
      .more {
        right: 2%;
        top: 66%;
      }
    }
    .swiper-wrapper {
      justify-content: center;
    }
    .swiper-slide {
      width: 50% !important;
    }
  }
}

.sale-group {
  .tab {
    .swiper-wrapper {
      justify-content: left;
    }
  }
}

/*  電腦版其他尺寸 */
@media only screen and (max-width: 992px) {
  #computer-container {
    .background {
      background-size: 120% auto;
      background-position: -4vw 4vw, top;
      padding-bottom: 68vw;
   }
  }
}

@media only screen and (max-width: 576px) {
  #computer-container {
    .background {
      background-size: 300% auto;
      background-position: -85vw 22vw, top;
      padding-bottom: 180vw;
   }
  }
}
</style>
