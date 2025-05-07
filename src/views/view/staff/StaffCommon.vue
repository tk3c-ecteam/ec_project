<script setup>
const contents = defineModel('contents');

//導航區
const navButtons = [
  {
    image: 'tba/images/nav3_a.png',
    url: 'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
  },
  {
    image: 'tup/images/nav4.png',
    url: 'https://events.tk3c.com/events_net/nightsale/index.html'
  },
  {
    image: 'tup/images/nav5.png',
    url: 'https://events.tk3c.com/events_net/green_subsidy/index.html'
  },
  {
    image: 'tup/images/nav6.png',
    url: 'https://events.tk3c.com/events_net/events_net/banks/bank.html'
  }
];
</script>

<template>
  <div id="staff-container">
    <div class="background">
      <span class="logo"><img :src="$filters.siteUrl(contents[0].logo)" /></span>
      <h2 class="title"><img :src="$filters.siteUrl(contents[0].title)" /></h2>
      <p class="mark" v-if="contents[0].mark != undefined">
        <img :src="$filters.siteUrl(contents[0].mark)" />
      </p>
    </div>

    <!-- banner區 -->
    <section class="banner-group" v-if="contents[0].otherBanners != undefined">
      <a
        v-for="banner in contents[0].otherBanners"
        :class="[banner.url == '' ? 'no' : '']"
        :href="$filters.addGALink(banner.url)"
        target="_blank"
      >
        <img class="pc" :src="$filters.siteUrl(banner.pc)" />
        <img class="mobile" :src="$filters.siteUrl(banner.mobile)" />
      </a>
    </section>

    <!-- 導航區 -->
    <section class="nav-group">
      <div class="navs">
        <swiper
          :loop="false"
          :space-between="10"
          :slidesPerView="'auto'"
        >
          <swiper-slide class="flex-basis:19% flex-basis:22%@<992 flex-basis:28%@<576">
            <div class="mix flex flex-wrap:wrap flex-direction:column bg:#fff r:20px r:10px@<576 p:4% box:border-box">
              <img class="w:65% m:0|auto|4%" :src="$filters.siteUrl('tup/images/nav2.png')" />
              <a class="w:70%" href="https://www.tk3c.com">
                <img :src="$filters.siteUrl('tup/images/nav1.png')" />
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="flex-basis:19% flex-basis:22%@<992 flex-basis:28%@<576" v-for="nav in navButtons">
            <a :href="$filters.addGALink(nav.url)" target="_blank">
              <img :src="$filters.siteUrl(nav.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="store-group" v-if="contents[0].store != undefined">
      <p class="mb:3%"><img :src="$filters.siteUrl(contents[0].store)" /></p>
      <div class="buttons gap:10">
        <a href="#info"
          ><img
            v-if="contents[0].storeBtn != undefined"
            :src="$filters.siteUrl(contents[0].storeBtn[0])"
          />
          <img
            v-else
            :src="$filters.siteUrl('starlux/images/b1.png')"
          />
        </a>
        <a :href="$filters.addGALink('https://www.tk3c.com/other_store.aspx')" target="_blank">
          <img
            v-if="contents[0].storeBtn != undefined"
            :src="$filters.siteUrl(contents[0].storeBtn[1])" />
          <img v-else :src="$filters.siteUrl('starlux/images/b2.png')"
        /></a>
      </div>
    </section>

    <!-- 商品樓層 -->
    <CommonFloor
      :floors="contents[0].floor"
      :menu="contents[0].menu"
      :singleImage="contents[0].singleImage"
    ></CommonFloor>

    <!-- 活動辦法 -->
    <section class="info-group scroll" titles="活動辦法" id="info">
      <h2 class="title" v-if="contents[0].alertTitle">{{ contents[0].alertTitle }}</h2>
      <h2 class="title" v-else>員工福利委員會員購專案</h2>
      <div class="text">
        <p class="last">注意事項如下</p>
        <ol v-html="contents[0].alertHtml"></ol>
      </div>
    </section>
  </div>

  <!-- 右側選單+手機板 -->
   <RightAside :type="'mobile'"></RightAside>
</template>
