<script setup>
import listF from '@/views/layout/listF.vue'
</script>

<script>
/* 商品樓層共用版型
 * 傳入物件: floors(樓層標題圖片-image、連結-url、商品版型:type (預設為4小 listF不用寫) ，
 若要改成其他版型，要先import 進來 如:import listM from '@/views/layout/listM.vue'
 2凸4小 - listM
 4小扇形輪播 - listFCoverflow
 5小 - listD
 2凸3小 - listH
 type: listM <- 範例,
 moreUrl- 看更多連結(而外按鈕的連結) - 非必要
 text - 標題文字 - 非必要
 ) , 
 menu(樓層陳列編號) - 必要
 * isSwiper(是否使用swiper輪播) - 非必要 (有要輪播才要寫 isSwiper = 1)
 */
export default {
  props: ['floors', 'menu','isSwiper'],
  mounted() {
   if (this.menu != undefined) {
    this.getFloorData(this.menu);
   }
  }
}
</script>

<template>
  <section class="floor" v-for="(floor, f) in floors" :class="{'scroll' : products[menu[f]]?.Data.length > 0}" :titles="[products[menu[f]]?.MenuTitle.trim() || '']"
    :key="f">
    <!-- 若沒有商品則不顯示 -->
    <div v-if="products[menu[f]]?.Data.length > 0">
      <h2 class="title" :name="`pro${menu[f]}`" :id="`pro${menu[f]}`">
        <!-- 圖片+連結標題 -->
        <template v-if="floor.url">
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

        <!-- 標題圖片(無文字) -->
         <slot name="moreTitle"></slot>

        <b v-if="floor.text"
          class="abs left:0 right:0 m:auto top:50% translateY(-50%) f:3em f:2.5em@<992 f:1.5em@<576 f:1.2em@<361 f:bold color:#fff">{{
            floor.text }}</b>
      </h2>

      <!-- 有輪播(單個樓層輪播) -->
      <div class="content" v-if="floor.isSwiper">
        <component v-if="products[menu[f]]" :is="floor.type || listF" :pro="products[menu[f]].Data" :isSwiper="1"
          :name="`pro${f + 1}`">
        </component>
      </div>

      <!-- 有輪播(全部樓層輪播) -->
      <div class="content" v-else-if="isSwiper">
        <component v-if="products[menu[f]]" :is="floor.type || listF" :pro="products[menu[f]].Data" :isSwiper="1"
          :name="`pro${f + 1}`">
        </component>
      </div>

      <div class="content" v-else>
        <!-- 無輪播 -->
        <component v-if="products[menu[f]]" :is="floor.type || listF" :pro="products[menu[f]].Data">
        </component>
      </div>

      <!-- 單獨看更多按鈕 -->
      <a v-if="floor.moreUrl" class="more" :href="$filters.addGALink(floor.moreUrl)" target="_blank">
        <slot name="more"></slot>
      </a>
    </div>
  </section>
</template>
