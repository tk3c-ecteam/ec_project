<script setup>
const contents = defineModel('contents')
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
        <img class="pc" :src="$filters.siteUrl(banner.pc)" loading="lazy" />
        <img class="mobile" :src="$filters.siteUrl(banner.mobile)" loading="lazy" />
      </a>
    </section>

    <!-- 導航區 -->
    <section class="nav-group" v-if="contents[0].navButtons != undefined">
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
          <swiper-slide class="flex-basis:19% flex-basis:22%@<992 flex-basis:28%@<576" v-for="nav in contents[0].navButtons">
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
            src="https://events.cdn-tkec.tw/events_net/events_net/starlux/images/b1.png"
          />
        </a>
        <a href="https://www.tk3c.com/other_store.aspx" target="_blank">
          <img
            v-if="contents[0].storeBtn != undefined"
            :src="$filters.siteUrl(contents[0].storeBtn[1])" />
          <img v-else src="https://events.cdn-tkec.tw/events_net/events_net/starlux/images/b2.png"
        /></a>
      </div>
    </section>
  </div>

  <!-- 右側選單+手機板 -->
   <RightAside :asides="asides" :type="'mobile'"></RightAside>
</template>
