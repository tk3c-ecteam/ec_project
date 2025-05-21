<template>
  <Template618 :contents="contents">
    <template #board-image>
      <img class="pc" :src="$filters.siteUrl('3c_system/images/BOX_PC.png')" />
      <img class="mobile" :src="$filters.siteUrl('3c_system/images/BOX_M.png')" />
    </template>

    <template #content>
      <!--  指南 -->
      <section class="gift-box">
        <ul class="w:45% w:70%@<992 w:full@<576 grid-cols:2 gap:10 gap:5@<576">
          <li :class="[statusGift == 0 ? 'active' : '']" class="contrast(0.5) contrast(1).active">
            <a @click="changeGift(0)">
              <img :src="$filters.siteUrl('3c_system/images/tab1.png')" /></a>
          </li>
          <li class="contrast(0.5) contrast(1).active" :class="[statusGift == 1 ? 'active' : '']">
            <a @click="changeGift(1)">
              <img :src="$filters.siteUrl('3c_system/images/tab2.png')" /></a>
          </li>
        </ul>

        <!-- 筆電 -->
        <div class="tab-content rel" v-show="statusGift == 0">
          <ul class="gap:10 mb:2% pt:2% pt:3%@<992 box:border-box">
            <li class="w:80% w:95%@<992 w:full@<576">
              <div class="flex flex-direction:row flex-direction:column@<576 gap:10">
                <a class="w:50% w:full@<576" @click="goNB('#sale')" target="_blank" :class="[!isOff ? 'off' : '']">
                  <img :src="$filters.siteUrl('2024083C/images/2505/sp01-1b.png')" />
                </a>
                <a class="w:50% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
                  target="_blank"><img :src="$filters.siteUrl('2024083C/images/2505/sp01-2a.png')" /></a>
              </div>
            </li>
            <li class="w:40% w:47%@<992 w:full@<576">
              <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank"><img
                  :src="$filters.siteUrl('2024083C/images/2505/sp01-3a.png')" /></a>
            </li>
            <li class="w:39% w:46%@<992 w:full@<576 flex flex-direction:column gap:10">
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121988')"
                target="_blank"><img :src="$filters.siteUrl('2024083C/images/2505/sp01-4a.png')" /></a>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121986')"
                target="_blank"><img :src="$filters.siteUrl('2024083C/images/2505/sp01-5a.png')" /></a>
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=121987')"
                target="_blank"><img :src="$filters.siteUrl('2024083C/images/2505/sp01-6a.png')" /></a>
            </li>
          </ul>
          <a class="bg:#e249fe r:20px color:#fff color:#fff:hover box:border-box f:2em f:1.5em@<576 w:20% w:35%@<992 w:50%@<576 m:auto"
            @click="showMsg(1)">
            活動辦法
          </a>
          <AlertBox ref="alert1" :type="'text'">
            <p class="title">【活動一】 5/1-5/31購買搭載Intel處理器筆電，登記抽Panasonic 10L 清淨除濕機(市價$14,390，1名)</p>
            <p class="color:#f00 f:bold mb:25px">活動期間(2025/5/1-5/31)，於燦坤線上購物網站購買「全館任一搭載Intel
              處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Panasonic 10L
              清淨除濕機(市價$14,390，1名)。</p>
            <ul>
              <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。</li>
              <li>2.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline"
                  href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>)
                並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
              <li>
                3.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)>。
              </li>
              <li>
                4.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​
              </li>
              <li>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
              <li>6.
                會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
              </li>
              <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
              <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
              <li class='last'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
            </ul>
            <p class="title">【活動二】 5/1-5/31購買搭載Intel處理器筆電，單品滿$30,000，登記送 廣穎 A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)</p>
            <p class="color:#f00 f:bold mb:25px">
              活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送廣穎
              A66 2.5吋 4TB 軍規行動硬碟-黑 (市價$3,699，10名)。</p>
            <ul>
              <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
              <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
              <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址
                (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li>
                5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
              </li>
              <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
              <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
              <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
            </ul>

            <p class="title">【活動三】 5/1-5/31購搭載Intel處理器筆電，單筆滿$9,999，登記送 Logitech M650 多工靜音無線滑鼠(市價$1,090，10名)</p>
            <p class="color:#f00 f:bold mb:25px">
              活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，Logitech
              M650 多工靜音無線滑鼠(市價$1,090，10名)。
            </p>
            <ul>
              <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
              <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
              <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址
                (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li>
                5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
              </li>
              <li class='pl:10px'>(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
              <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
              <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
            </ul>

            <p class="text:left mb:25px color:#f00 f:bold">【活動二、活動三僅可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</p>
          </AlertBox>
        </div>

        <!-- 週邊 -->
        <div class="t2 tab-content pt:2% pt:3%@<992 box:border-box" v-show="statusGift == 1">
          <div class="rel w:80% w:95%@<992 w:full@<576 m:0|auto|2%">
            <swiper :loop="false" :spaceBetween="10" :breakpoints="{
              0: {
                slidesPerView: 1
              },
              600: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              }
            }" :navigation="{
          nextEl: '.gift-box .t2 .next',
          prevEl: '.gift-box .t2 .prev',
        }">
              <swiper-slide>
                <a @click="goNB('#tab8')">
                  <img :src="$filters.siteUrl('2024083C/images/2505/sp01-7a.png')" />
                </a>
              </swiper-slide>
              <swiper-slide>
                <a @click="goNB('#tab9')">
                  <img :src="$filters.siteUrl('2024083C/images/2505/sp01-8a.png')" />
                </a>
              </swiper-slide>
              <swiper-slide>
                <a @click="goNB('#tab13')">
                  <img :src="$filters.siteUrl('2024083C/images/2505/sp01-9a.png')" />
                </a>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev prev"></div>
            <div class="swiper-button-next next"></div>
          </div>
          <a @click="showMsg(2)"
            class="f:2em f:1.5em@<576 bg:#e249fe r:20px color:#fff color:#fff:hover box:border-box w:20% w:35%@<992 w:50%@<576 m:auto">
            活動辦法
          </a>
          <AlertBox ref="alert2" :type="'text'">
            <p class="title">【活動一】購買網路設備/儲存卡碟/監控攝影機，單筆滿$3000，登記送：TELEFUNKEN 14吋觸控式DC立扇(市價$2,280，20名)</p>
            <p class="mb:10px color:#f00 text:left f:bold">
              *網路設備/儲存卡碟/監控攝影機(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機)</p>
            <p class="mb:25px color:#f00 text:left f:bold">
              活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一網路設備/儲存卡碟/監控攝影機商品(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機，下稱活動指定商品)」，單品發票消費金額滿$3,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送TELEFUNKEN
              14吋觸控式DC立扇(市價$2,280，20名)。</p>

            <ul>
              <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
              <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
              <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址
                (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li>
                5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
              </li>
              <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
              <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
              <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
            </ul>

            <p class="title">【活動二】5/1-5/31購買任一DIY組裝電腦，登記抽Logitech MX Mechanical無線鍵盤-黑(市價$4,990，1名)</p>
            <p class="mb:25px color:#f00 text:left f:bold">活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一DIY組裝電腦
              (下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，抽Logitech MX Mechanical無線鍵盤-黑(市價$4,990，1名)</p>
            <ul>
              <li>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
              <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
              <li>3.得獎名單將於2025/6/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a class="color:blue text:underline inline"
                  href="https://www.facebook.com/TDdd331" target="_blank">https://www.facebook.com/TDdd331</a>)
                並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
              <li>
                4.得獎者請於2025/6/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​
              </li>
              <li>
                5.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​
              </li>
              <li>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
              <li>
                7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
              </li>
              <li class='pl:10px'>(1) 提供獎品前：燦坤3C將不會寄送獎品。</li>
              <li class='pl:10px'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
              <li class='last'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
            </ul>

            <p class="title">【活動三】 5/1-5/31購買任一投影機，單品滿$8,000，登記抽 AirPods 4 (市價$4,490，共2名) *活動不含輕劇院商品</p>
            <p class="color:#f00 mb:25px text:left f:bold">
              活動期間(2025/5/1-5/31)內，於燦坤線上購物網站購買「全館任一投影機(不包含輕劇院商品，下稱活動指定商品)」，單筆發票消費金額滿$10,000，並於線上完成付款且後續未退貨退款者，並於2025/6/4(含)前至指定活動頁面完成登記申請，送康生
              雷電滴滴 熱敷感壓按摩槍 (市價$8,800，共5名，不挑色)。</p>
            <ul>
              <li>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
              <li>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
              <li>3.經核對無誤後，燦坤3C將於2025/7/25起陸續寄出獎項至會員資料地址
                (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li>
                5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​
              </li>
              <li class="pl:10px">(1) 提供贈品前：燦坤3C將不會寄送贈品。</li>
              <li class='pl:10px'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
              <li class='last'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
            </ul>
          </AlertBox>
        </div>
      </section>

      <section>
        <a :href="$filters.addGALink('https://events.tk3c.com/events_net/2025_Intel_Spring_Bundle/index.html')"
          target="_blank">
          <img class="pc" :src="$filters.siteUrl('2024083C/images/2505/bn_intel.jpg')" />
          <img class="mobile" :src="$filters.siteUrl('2024083C/images/2505/bn_intelM.jpg')" />
        </a>
      </section>

      <!-- 筆電區商品樓層 -->
      <div v-if="statusGift == 0" class="product-area pro1">
        <!-- 狂撒百萬折價券 -->
        <section class="sale-box scroll" titles="狂撒百萬折價券" v-if="product2[7668] != ''" id="sale">
          <h2 class="title">
            <a :href="$filters.addGALink(disUrl)" target="_blank">
              <img :src="$filters.siteUrl('3c_system/images/S1.png')" />
            </a>
          </h2>

          <ListF :pro="product2[menuDis]" :isSwiper="1" :name="'pro'"></ListF>
        </section>

        <section class="pro-group odd scroll" v-for="(t1, t) in tab1[0]" :titles="t1[0].text"
          :class="`tab${Number(t) + 1}-box`" :id="`tab${Number(t) + 1}`">
          <h2 class="title">
            <a :href="$filters.addGALink(t1[0].url)" target="_blank">
              <img :src="$filters.siteUrl(t1[0].title)" />
            </a>
          </h2>

          <div v-if="t1[0].content != undefined">
            <Tabs :tabs="t1[0].content">
              <template v-slot="{ selectedTab }">
                <TabContent v-for="(content, c) in t1[0].content" :type="content.type" :menus="content.id" :index="c"
                  :selectedTab="selectedTab">

                </TabContent>
              </template>
            </Tabs>
          </div>

          <div v-else>
            <ListF :pro="product2[t1[0].id]" :isSwiper="1" :name="`pro${Number(t) + 1}`"></ListF>
          </div>
        </section>
      </div>

      <!-- 週邊樓層區 -->
      <div v-if="statusGift == 1" class="product-area pro2">
        <section class="pro-group even scroll" v-for="(t2, t) in tab2[0]" :titles="t2[0].text"
          :class="`tab${Number(t) + 8}-box`" :id="`tab${Number(t) + 8}`">
          <h2 class="title">
            <a :href="$filters.addGALink(t2[0].url)" target="_blank">
              <img :src="$filters.siteUrl(t2[0].title)" />
            </a>
          </h2>

          <!-- 商品區 -->
          <div v-if="t2[0].content != undefined">
            <Tabs :tabs="t2[0].content">
              <template v-slot="{ selectedTab }">
                <TabContent v-for="(content, c) in t2[0].content" :menus="content.id" :index="c"
                  :selectedTab="selectedTab">

                </TabContent>
              </template>
            </Tabs>
          </div>

          <div v-else>
            <ListF :pro="product2[t2[0].id]" :isSwiper="1" :name="`pro${Number(t) + 1}`"></ListF>
          </div>
        </section>
      </div>


      <!-- 熱門活動 -->
      <banner :banner1="banner1" :banner2="banner2"></banner>
    </template>
  </Template618>
</template>

<script>
import listM from '@/views/layout/listM.vue'
export default {
  data() {
    return {
      listM,
      tab1:[
        {
             0: [
            {
              text:'RTX50新機',
              title: '3c_system/images/S2.png',
              url: 'https://events.tk3c.com/events_net/DBS_RTX50NB',
              content: [
                {
                  id:8152,
                  image:'3c_system/images/S2-logo_01.png',
                  type:listM
                },
                {
                  id:8153,
                  image:'3c_system/images/S2-logo_02.png',
                },
                 {
                  id:8154,
                  image:'3c_system/images/S2-logo_03.png',
                  type:listM
                },
              ]
            }
          ],
          1: [
            {
              text:'輕薄商務',
              title: '3c_system/images/S3.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11124',
              content: [
                {
                  id:8155,
                  image:'3c_system/images/S3-logo_01.png',
                },
                {
                  id:8156,
                  image:'3c_system/images/S3-logo_02.png',
                }
              ]
            }
          ],
          2: [
            {
              text:'飆速電競',
              title: '3c_system/images/S4.png',
               url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
              content: [
                {
                  id:8157,
                  image:'3c_system/images/S4-logo_01.png',
                },
                {
                  id:8158,
                  image:'3c_system/images/S4-logo_02.png',
                },
                {
                  id:8159,
                  image:'3c_system/images/S4-logo_03.png',
                }
              ]
            }
          ],
          3: [
            {
              text:'特仕改裝升級',
              title: '3c_system/images/S5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
              content: [
                {
                  id:8160,
                  image:'3c_system/images/S5-logo_01.png',
                },
                {
                  id:8161,
                  image:'3c_system/images/S5-logo_02.png',
                },
                {
                  id:8162,
                  image:'3c_system/images/S5-logo_03.png',
                }
              ]
            }
          ],
          4: [
            {
              text:'精選螢幕',
              title: '3c_system/images/S6.png',
               url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
              content: [
                {
                  id:8163,
                  image:'3c_system/images/S6-logo_01.png',
                },
                {
                  id:8164,
                  image:'3c_system/images/S6-logo_02.png',
                }
              ]
            }
          ],
          5: [
            {
              id:7277,
              text:'高效桌機',
              title: '3c_system/images/S7.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=114130'
            }
          ],
          6: [
            {
              text:'DIY零組件',
              title: '3c_system/images/S8.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              content: [
                {
                  id:8166,
                  image:'3c_system/images/S8-logo_01.png',
                },
                {
                  id:8167,
                  image:'3c_system/images/S8-logo_02.png',
                }
              ]
            }
          ],
        }
      ],
      tab2:[
        {
          0:[
             {
              text:'Wi-Fi路由器',
              title: '3c_system/images/SP09.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=43403&aid=23883',
              content: [
                {
                  id:8168,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=23883',
                  image:'3c_system/images/SP09-logo_01.png',
                },
                {
                  id:8169,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=17260',
                  image:'3c_system/images/SP09-logo_02.png',
                },
                {
                  id:8170,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122542',
                  image:'3c_system/images/SP09-logo_03.png',
                },
                {
                  id:8171,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11542&hid=118986',
                  image:'3c_system/images/SP09-logo_04.png',
                }
              ]
            }
          ],
          1:[
             {
              text:"DIY組裝機",
              title: '3c_system/images/SP10.png',
               id:8172,
               url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020'
            }
          ],
          2:[
             {
              text:'鍵盤滑鼠',
              title: '3c_system/images/SP11.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
              content: [
                {
                  id:8173,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image:'3c_system/images/SP11-logo_01.png',
                },
                {
                  id:8174,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image:'3c_system/images/SP11-logo_02.png',
                }
              ]
            }
          ],
          3:[
             {
              text:'硬碟',
              title: '3c_system/images/SP12.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23571',
              content: [
                {
                  id:8175,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23571',
                  image:'3c_system/images/SP12-logo_01.png',
                },
                {
                  id:8176,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=22551',
                  image:'3c_system/images/SP12-logo02.png',
                }
              ]
            }
          ],
          4:[
             {
              text:'隨身碟/記憶卡',
              title: '3c_system/images/SP13.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4855',
              content: [
                {
                  id:8177,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4855',
                  image:'3c_system/images/SP13-logo_01.png',
                },
                {
                  id:8178,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4853',
                  image:'3c_system/images/SP13-logo_02.png',
                }
              ]
            }
          ],
          5:[
             {
              text:'投影機/監控設備',
              title: '3c_system/images/SP14.png',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
              content: [
                {
                  id:8179,
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
                  image:'3c_system/images/S14-logo_01.png',
                },
                {
                  id:8180,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=11545',
                  image:'3c_system/images/S14-logo_02.png',
                }
              ]
            }
          ],
          6:[
             {
              text:'辦公設備',
              title: '3c_system/images/S15.png',
              url:'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4762',
              content: [
                {
                  id:8181,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4762',
                  image:'3c_system/images/S15-logo_01.png',
                },
                {
                  id:8182,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22323',
                  image:'3c_system/images/S15-logo_02.png',
                },
                {
                  id:8183,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22325',
                  image:'3c_system/images/S15-logo_03.png',
                },
                {
                  id:8184,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4761',
                  image:'3c_system/images/S15-logo_04.png',
                }
              ]
            }
          ],
          7:[
             {
              text:'速速Go',
              title: '3c_system/images/S16.png',
              url: 'https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html',
              id: 8185,
            }
          ],
          8:[
             {
              text:'出清搶便宜',
              title: '3c_system/images/S17.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22525&hid=121385',
              id: 8186
            }
          ]
        }
      ],
      status: 0,
      banner1: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=120108',
          image: '202404_green/images/bn_nbsaleM.jpg'
        }
      ],
      banner2: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
          image: '202404_green/images/bn_tesnbM.jpg'
        }
      ],
      statusPro: 0,
      tabs: [],
      statusGift: 0,
      today: new Date(),
      isOff:true,
      disUrl:'',
      menuDis:8151,
      contents:[
        {
          title:'3c_system/images/title.png',
          menuPro:8150,
          specials:[
            {
              image:'tv_media/images/C01.png',
              url:''
            },
            {
              image:'tv_media/images/C02.png',
              url:''
            },
            {
              image:'tv_media/images/C03.png',
              url:''
            },
            {
              image:'tv_media/images/C04.png',
              url:''
            },
          ]
        }
      ],
    }
  },
  mounted() {
    let {today,tab1,tab2 } = this
    if (today >= new Date('2025/05/16')) this.isOff = false;

    // 更新現折券連結
    if(today >= new Date('2025/05/16')) {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23931&strPreView=y';
    } else {
      this.disUrl = 'https://www.tk3c.com/dic1.aspx?cid=124426&aid=23947'
    }

     if (this.statusGift == 0 ) this.tabs = tab1[0];

      //撈取折價券商品
    this.getFloorSingle(this.menuDis);

    //樓層商品(無頁籤)
    for (const [t, t1] of Object.entries(tab1[0])) {
      if (t1[0].content == undefined) this.getFloorSingle(t1[0].id)
    }

    for (const [t, t2] of Object.entries(tab2[0])) {
      if (t2[0].content == undefined) this.getFloorSingle(t2[0].id)
    }
  },
  methods: {
    //應援指南頁籤切換
    changeGift(id) {
      this.statusGift = id
    },
    showMsg(id) {
      let self = this;
      switch (id) {
        case 1:
          self.$refs.alert1.openAlert();
          break;
      
        case 2:
          self.$refs.alert2.openAlert();
          break;
      }
    },
    goNB(element) {
      //前往錨點
      let el = document.querySelector(element),
        rect = el.getBoundingClientRect(),
        move = rect.top + document.documentElement.scrollTop

      setTimeout(() => {
        window.scrollTo({
          top: move - 100,
        })
      }, 100)
    },
  }
}
</script>

<style lang="scss">
/*  共用樣式調整 */
body {
  background: #fecdb4;
}

.bg01 {
  background: #ff2924;
  border-radius: 10px;
  box-sizing: border-box;
}

.sale-box {
  .pro {
    padding-bottom: 6px;
    box-sizing: border-box;
  }
}

.tab8-box,
.tab14-box {
  .tab {
    .swiper-slide {
      flex-basis: 22%;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  .pro-group {
    .tab {
      .swiper-wrapper {
        justify-content: center;
      }
    }
  }

  .tab8-box,
  .tab14-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
      .swiper-slide {
        flex-basis: 30%;
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .tab1-box,
  .tab3-box,
  .tab4-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  .tab8-box,
  .tab14-box {
    .tab {
      .swiper-slide {
        flex-basis: 43%;
      }
    }
  }
}
</style>
