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
  props: ['floors', 'menu', 'singleImage'],
  mounted() {
    this.getFloorData(this.menu)
  }
}
</script>

<template>
  <section class="floor scroll" v-for="(floor, f) in floors" :key="f">
    <h2 class="title" :name="`pro${menu[f]}`" :id="`pro${menu[f]}`">
      <a v-if="floor.url" :href="$filters.addGALink(floor.url)">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
      <img v-if="singleImage" :src="$filters.siteUrl(singleImage)" />
      <img v-else :src="$filters.siteUrl(floor.image)" />
      <b v-if="floor.text">{{ floor.text }}</b>
    </h2>

    <component
      v-if="products[menu[f]] != undefined"
      :is="floor.type != undefined ? floor.type : listF"
      :pro="products[menu[f]].Data"
    ></component>
  </section>
</template>
