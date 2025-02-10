<script setup>
import listF from '@/views/layout/listF.vue'
</script>

<script>
/* 商品樓層共用版型
 * 傳入物件: floors(樓層標題圖片、連結) , menus(樓層陳列編號) - 必要
 * singleImage(純標題圖片單張+系統文字) - 非必要
 * isSwiper(是否使用swiper輪播) - 非必要 (有要輪播才要寫 isSwiper = 1)
 * moreImage(看更多按鈕圖片) - 非必要
 */
export default {
  props: ['floors', 'menu', 'singleImage','moreImage','isSwiper'],
  mounted() {
    this.getFloorData(this.menu)
  }
}
</script>

<template>
  <section class="floor scroll" v-for="(floor, f) in floors" :titles="[products[menu[f]] != undefined ? products[menu[f]].MenuTitle.trim() : '']" :key="f">
    <h2 class="title" :name="`pro${menu[f]}`" :id="`pro${menu[f]}`">
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

    <!-- 有輪播 -->
    <div class="content" v-if="isSwiper">
      <component v-if="products[menu[f]] != undefined && isSwiper" :is="floor.type != undefined ? floor.type : listF"
        :pro="products[menu[f]].Data" :isSwiper="1" :name="`pro${f + 1}`"></component>
    </div>

    <div class="content" v-else>
      <!-- 無輪播 -->
      <component v-if="products[menu[f]] != undefined" :is="floor.type != undefined ? floor.type : listF"
        :pro="products[menu[f]].Data">
      </component>
    </div>

    <!-- 單獨看更多按鈕 -->
    <a v-if="floor.moreUrl != undefined" class="more" :href="$filters.addGALink(floor.moreUrl)">
      <img :src="$filters.siteUrl(moreImage)" />
    </a>
  </section>
</template>
