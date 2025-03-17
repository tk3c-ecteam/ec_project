<script>

import { nextTick } from 'vue';

/* 商品樓層共用版型(吉米後台樓層陳列清單商品)
 * 傳入物件: floors(樓層標題圖片、連結) - 必要
 * singleImage(純標題圖片單張+系統文字) - 非必要
 * moreImage(看更多按鈕圖片) - 非必要
 * num - 此共用樓層順序
 */
export default {
  props: ['floors','singleImage','moreImage','num'],
  mounted() {
   this.addJimmyFloor();
  },
}
</script>

<template>
  <section class="floor scroll" v-for="(floor, f) in floors" :titles="jimmyText[Number(f) + num]" :key="f">
    <h2 class="title" :id="'pro' + jimmyId[f + num]">
      <!-- 圖片+連結標題 -->
      <a v-if="floor.url" :href="$filters.addGALink(floor.url)">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
      <!-- 有看更多按鈕僅有圖片標題 -->
      <img v-else-if="floor.moreUrl && floor.image" :src="$filters.siteUrl(floor.image)" />
      <img v-else-if="floor.image != undefined" :src="$filters.siteUrl(floor.image)">

      <!-- 標題圖片(無文字) -->
      <img v-if="singleImage != undefined" :src="$filters.siteUrl(singleImage)" />
      <b v-if="floor.text">{{ floor.text }}</b>
    </h2>

    <!-- 樓層商品 -->
    <JimmyFloor :id="floor.id"></JimmyFloor>

    <!-- 單獨看更多按鈕 -->
    <a v-if="floor.moreUrl != undefined" class="more" :href="$filters.addGALink(floor.moreUrl)">
      <img :src="$filters.siteUrl(moreImage)" />
    </a>
  </section>
</template>
