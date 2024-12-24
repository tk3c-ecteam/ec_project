<script setup>
// 各頁面切換

/* 綠點 */
//import green2 from '@/views/view/common/green2.vue'

/* 空調 */
//import air2410 from '@/views/view/air/air2410.vue'

/* 電視 */
//import tv2412 from '@/views/view/tv/tv2412.vue'

/* 夜殺 */
//import night from '@/views/view/common/night.vue'

/* 冰箱洗衣機 */
//import ice2412 from '@/views/view/ice/ice2412.vue'

/* 風扇 */
//import Fan from '@/views/view/fan/Fan.vue'

/* 銀行 */
//import bank from '@/views/view/common/bank.vue'

/* 匯聚 */
//import clean2412 from '@/views/view/clean/clean2412.vue'

/* ai 系統 */
//import Ai2412 from '@/views/view/ai/Ai2412.vue'

/* 聖誕 */
//import xmas from '@/views/view/xmas.vue'

/* 電暖器 */
//import Warm from '@/views/view/common/Warm.vue'

import Banquet from '@/views/view/Banquet.vue'
</script>

<template>
  <!-- 主內容區 -->
   <component :is="Banquet"></component>
</template>
