<script>

/* 商品樓層共用版型(吉米後台樓層陳列清單商品)
 * 傳入物件: floors(樓層標題圖片-image、連結-url、樓層編號-id、是否單個樓層輪播-isSwiper(可不用寫) - 必要
 * isSwiper - 是否全部樓層都要輪播 - 非必要
 */
export default {
  props: ['floors','isSwiper'],
  mounted() {
   this.addJimmyFloor();
  }
}
</script>

<template>
  <section class="floor" v-for="(floor, f) in floors"
    :class="{'scroll': this.jimmyText[floor.id]}"
    :titles="[this.jimmyText[floor.id] != undefined ? this.jimmyText[floor.id] : '']" :key="f">
    <div v-if="this.jimmyId[floor.id]">
      <h2 class="title" :id="[this.jimmyId[floor.id] != undefined ? 'pro' + this.jimmyId[floor.id] : '']">
        <!-- 圖片+連結標題 -->
        <template v-if="floor.url && floor.image">
          <a :href="$filters.addGALink(floor.url)" target="_blank">
            <img :src="$filters.siteUrl(floor.image)" />
          </a>
        </template>

        <!-- 有看更多按鈕僅有圖片標題 -->
        <template v-else-if="floor.moreUrl && floor.image">
          <img :src="$filters.siteUrl(floor.image)" />
        </template>

        <!-- 僅有圖片標題 -->
        <template v-else-if="floor.image">
          <img :src="$filters.siteUrl(floor.image)">
        </template>

        <!-- 標題圖片(非必要)+系統文字+連結 -->
        <template v-else-if="floor.url && floor.text">
          <a :href="$filters.addGALink(floor.url)" target="_blank">
            <!-- 標題圖片 -->
            <slot name="moreTitle"></slot>
            <b
              class="abs left:0 right:0 m:auto top:50% translateY(-50%) f:3em f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">{{
                floor.text }}</b>
          </a>
        </template>

        <!-- 無連結+標題圖片(非必要) -->
        <template v-else>
          <!-- 標題圖片 -->
          <slot name="moreTitle2"></slot>
          <b
            class="abs left:0 right:0 m:auto top:50% translateY(-50%) f:3em f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">{{
              floor.text }}</b>
        </template>
      </h2>

      <!-- banner區 -->
      <BannerSlide v-if="floor.banner" :banners="floor.banner" :index="f"></BannerSlide>

      <!-- 樓層商品 -->
      <!-- 單獨樓層需要輪播 -->
      <JimmyFloor v-if="floor.isSwiper" :isSwiper="floor.isSwiper" :name="`f${f + 1}`" :id="floor.id"></JimmyFloor>
      <!-- 全部樓層需要輪播 -->
      <JimmyFloor v-else :isSwiper="isSwiper" :name="`f${f + 1}`" :id="floor.id"></JimmyFloor>

      <!-- 單獨看更多按鈕 -->
      <a v-if="floor.moreUrl != undefined" class="more" :href="$filters.addGALink(floor.moreUrl)" target="_blank">
        <slot name="more"></slot>
      </a>
    </div>
  </section>
</template>
