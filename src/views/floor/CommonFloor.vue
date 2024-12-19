<script setup>
import listF from '../layout/listF.vue'
</script>

<script>
/* 商品樓層共用版型
 * 傳入物件: floors(樓層標題圖片、連結) , menus(樓層陳列編號),
 * singleImage(純標題圖片單張+系統文字)
 */
import { globalMixin } from '../../globalMixin.js'
export default {
  mixins: [globalMixin],
  props: ['floors', 'menu', 'singleImage','moreImage'],
  mounted() {
    this.getFloorData(this.menu)
  }
}
</script>

<template>
  <section class="floor scroll" v-for="(floor, f) in floors" :key="f">
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

         <!-- 單獨看更多按鈕 -->
       <a v-if="floor.moreUrl != undefined" class="more" :href="$filters.addGALink(floor.moreUrl)">
        <img :src="$filters.siteUrl(moreImage)" />
       </a>
    </h2>

    <component
      v-if="products[menu[f]] != undefined"
      :is="floor.type != undefined ? floor.type : listF"
      :pro="products[menu[f]].Data"
    ></component>
  </section>
</template>
