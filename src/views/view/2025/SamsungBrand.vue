<template>
  <div id="samsung-container">
    <div class="background">
      <h2 class="title animate__animated animate__bounceInDown">
        <img :src="$filters.siteUrl('2505_SAMSUNG_Brandday/images/title.png')" />
        <div class="subtitle">
          <swiper 
          :loop="true" 
          :effect="'flip'" 
          :flipEffect="{
            slideShadows:false,
            limitRotation:false
          }" 
          :autoplay="{
            delay:1500,
            disableOnInteraction:false
          }" :modules="[EffectFlip]">
            <swiper-slide>
              <img :src="$filters.siteUrl('2505_SAMSUNG_Brandday/images/tt01.png')" />
            </swiper-slide>
            <swiper-slide>
              <img :src="$filters.siteUrl('2505_SAMSUNG_Brandday/images/tt02.png')" />
            </swiper-slide>
          </swiper>
        </div>
      </h2>

      <div class="product bg:#fff r:20px r:10px@<992 p:1% box:border-box">
        <ProductTop :pro="product2[menuPro]"></ProductTop>
      </div>

      <div class="bag animate__animated animate__fadeInRight">
        <img :src="$filters.siteUrl('2505_SAMSUNG_Brandday/images/bag.png')" />
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('2505_SAMSUNG_Brandday/images/item.png')" />
    </p>

    <!-- 活動 -->
    <section class="special-box">
      <div class="rel">
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
            <a :href="$filters.addGALink(special.url)" target="_blank">
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
      <div class="abs w:90% w:full@<576 h:full top:7% top:3%@<576 left:0 right:0 m:auto z:99 bg:#000000b0">
        <div class="abs w:80% w:full@<576 left:0 right:0 top:50% translateY(-50%) m:auto">
          <img :src="$filters.siteUrl('2505_SAMSUNG_Brandday/images/comming_soon.png')" />
        </div>
      </div>
      <ul class="gap:10 w:80% w:90%@<992 w:full@<610 grid-cols:2 grid-cols:1@<610">
        <li v-for="(gift,g) in gifts" :key="g">
          <a class="no" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
            <img :src="$filters.siteUrl(gift.image)">
          </a>
          <div class="rel">
            <a  @click="alert(g + 1)" class="no w:100% h:2vmax h:8vw@<576 abs:hover abs left:0 right:0 m:auto bottom:0 z:10"></a>
          </div>
        </li>
      </ul>

      <!-- 抽郭泓志簽名球 活動辦法 -->
      <AlertBox ref="alert1" :type="'text'">
           <p class="title">【活動一】 5/1-5/31購買搭載Intel處理器筆電，登記抽Panasonic 10L 清淨除濕機(市價$14,390，1名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)，於燦坤線上購物網站購買「全館任一搭載Intel 處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Panasonic 10L 清淨除濕機(市價$14,390，1名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。</li>
             <li>2.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline" href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li>3.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)>。</li>
             <li>4.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li>6. 會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
             <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li class='last'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
         </ul>
           <p class="title">【活動二】 5/1-5/31購買搭載Intel處理器筆電，單品滿$30,000，登記送 廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="title">【活動三】 5/1-5/31購搭載Intel處理器筆電，單筆滿$9,999，登記送 Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)</p>
         <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)。
         </p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="text:left mb:25px color:#f00 f:bold">【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
      </AlertBox>

      <!-- 登記送三星Buds3 Pro 活動辦法-->
      <AlertBox ref="alert2" :type="'text'">
           <p class="title">【活動一】 5/1-5/31購買搭載Intel處理器筆電，登記抽Panasonic 10L 清淨除濕機(市價$14,390，1名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)，於燦坤線上購物網站購買「全館任一搭載Intel 處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Panasonic 10L 清淨除濕機(市價$14,390，1名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。</li>
             <li>2.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline" href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li>3.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)>。</li>
             <li>4.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li>6. 會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
             <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li class='last'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
         </ul>
           <p class="title">【活動二】 5/1-5/31購買搭載Intel處理器筆電，單品滿$30,000，登記送 廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="title">【活動三】 5/1-5/31購搭載Intel處理器筆電，單筆滿$9,999，登記送 Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)</p>
         <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)。
         </p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="text:left mb:25px color:#f00 f:bold">【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
      </AlertBox>

       <!-- 登記送三星S10 FE 平板256G 活動辦法-->
       <AlertBox ref="alert3" :type="'text'">
           <p class="title">【活動一】 5/1-5/31購買搭載Intel處理器筆電，登記抽Panasonic 10L 清淨除濕機(市價$14,390，1名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)，於燦坤線上購物網站購買「全館任一搭載Intel 處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Panasonic 10L 清淨除濕機(市價$14,390，1名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。</li>
             <li>2.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline" href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li>3.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)>。</li>
             <li>4.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li>6. 會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
             <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li class='last'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
         </ul>
           <p class="title">【活動二】 5/1-5/31購買搭載Intel處理器筆電，單品滿$30,000，登記送 廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="title">【活動三】 5/1-5/31購搭載Intel處理器筆電，單筆滿$9,999，登記送 Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)</p>
         <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)。
         </p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="text:left mb:25px color:#f00 f:bold">【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
      </AlertBox>

       <!-- 登記送三星S25 12G/256G 活動辦法-->
       <AlertBox ref="alert4" :type="'text'">
           <p class="title">【活動一】 5/1-5/31購買搭載Intel處理器筆電，登記抽Panasonic 10L 清淨除濕機(市價$14,390，1名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)，於燦坤線上購物網站購買「全館任一搭載Intel 處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Panasonic 10L 清淨除濕機(市價$14,390，1名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。</li>
             <li>2.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline" href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li>3.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)>。</li>
             <li>4.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
             <li>6. 會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
             <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li class='last'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
         </ul>
           <p class="title">【活動二】 5/1-5/31購買搭載Intel處理器筆電，單品滿$30,000，登記送 廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)</p>
           <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)。</p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="title">【活動三】 5/1-5/31購搭載Intel處理器筆電，單筆滿$9,999，登記送 Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)</p>
         <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)。
         </p>
          <ul>
             <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
             <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>

         <p class="text:left mb:25px color:#f00 f:bold">【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
      </AlertBox>
    </section>

    <!-- 商品樓層 -->
     <CommonFloor :floors="floors" :menu="menus"></CommonFloor>
  </div>

  <LeftAside></LeftAside>
  <!-- 右側選單+手機板 -->
  <RightAside :type="'mobile3'"></RightAside>
</template>

<script>
import { EffectFlip } from "swiper/modules";
export default {
  data() {
    return {
      EffectFlip,
      specials:[
        {
          "image":"2505_SAMSUNG_Brandday/images/C01_3.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124277"
        },
         {
          "image":"2505_SAMSUNG_Brandday/images/C02.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=124757"
        },
         {
          "image":"2505_SAMSUNG_Brandday/images/C03_2.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=93605&aid=20222&hid=124634"
        },
         {
          "image":"2505_SAMSUNG_Brandday/images/C04.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=44823&aid=22521&hid=113989"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/C05.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340"
        },
         {
          "image":"2505_SAMSUNG_Brandday/images/C06.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=14374"
        },
         {
          "image":"2505_SAMSUNG_Brandday/images/C07.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=83198&aid=18620&hid=84587"
        },
      ],
      gifts:[
        {
          "image":"2505_SAMSUNG_Brandday/images/gift1.png",
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/gift2.png",
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/gift3.png",
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/gift4.png",
        },
      ],
      floors:[
        {
          "image":"2505_SAMSUNG_Brandday/images/S01.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=93605&aid=20221"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S02.png",
          "url":"https://www.tk3c.com/dic1.aspx?cid=93605&aid=20223"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S03.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=44823&aid=22521&hid=113989"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S04.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=44823&aid=22521&hid=113989"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S05.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S07.png",
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S06.png",
          "url":"https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340"
        },
        {
          "image":"2505_SAMSUNG_Brandday/images/S08.png",
        },
      ],
      menuPro:8087,
      menus:[8078,8079,8080,8081,8082,8083,8084,8085],
      today:new Date()
    }
  },
  mounted() {
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
$dir: "https://events.cdn-tkec.tw/events_net/events_net/2505_SAMSUNG_Brandday/images/";

/*  共用樣式調整 */
body{
  background: linear-gradient(to right,#dfeef4,#d1eaea);
  &:before {
    content: "";
    display: block;
    position: absolute;
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
  background:#1c3ca1;
}

.item {
  top: 250px;
}

#samsung-container {
  width: 100%;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 55vw;
    .title {
      width: 25%;
      position: absolute;
      left: 18%;
      top: 10%;
      animation-duration: 0.8s;
    }
    .subtitle {
      width: 75%;
      margin: -27% 32%;
      .swiper-wrapper {
        align-items: baseline;
      }
    }
    .bag {
      width: 38%;
      margin: 0 auto 0;
      position: absolute;
      right: 16%;
      top: 11%;
      animation-duration: 1.5s;
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
  }
}

.special-box {
  width: 100%;
}


/*  電腦版其他尺寸 */
@include media-query("mobile", "1440px") {
  body {
    &:before {
      background-size: 120% auto;
      background-position: -12vw 0,top;
    }
  }

  #samsung-container {
    .background {
      padding-bottom: 67vw;
      .title {
        width: 28%;
        left: 15%;
        top: 10%;
      }
      .product {
        width: 58%;
        top: 46%;
      }
      .bag {
        width: 42%;
        right: 11%;
        top: 11%;
      }
    }
  }
}
@include media-query("mobile", "992px") {
  #samsung-container {
    .background {
      padding-bottom: 94vw;
      .title {
        width: 42%;
        top: 10vw;
        left: 3vw;
        .subtitle {
          width: 75%;
        }
      }
      .product {
        width: 85%;
        top: 46vw;
      }
      .bag {
        width: 50%;
        right: 2vw;
        top: 15vw;
      }
    }
  }

  body{
    &:before {
      background-size: 170% auto;
      background-position: -40vw 4vw,top;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "610px") {
  #samsung-container {
    .background {
      padding-bottom: 215vw;
      .title {
        width: 70%;
        top: 22vw;
        left: -6vw;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 90%;
        top: 129vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .bag {
        width: 80%;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 83vw;
      }
    }
  }

  body {
    &:before {
      background-size: 350% auto;
      background-position: -70vw 21vw,top;
    }
  }
}
</style>
