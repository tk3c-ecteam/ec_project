<script setup>
const today = new Date()
const location =  window.location.pathname.split('/')
let isXmas = false

if (today < new Date('2025/01/06')) {
 isXmas = true
}
</script>

<template>
  <!-- 全站活動 12月 -->
  <section class="all-box">
     <div class="w:90% w:95vw@<992 w:full@<576 m:auto grid-cols:2 grid-cols:1@<576 gap:10" v-if="isXmas">
      <a
        href="https://www.tk3c.com.tw/Home/Index?#actsdetail&8&729"
        target="_blank"
        ><img :src="$filters.siteUrl('Xmas2024/images/e1.png')"
      /></a>
       <a
        href="https://www.tk3c.com.tw/Home/Index?#actsdetail&8&729"
        target="_blank"
        ><img :src="$filters.siteUrl('Xmas2024/images/e2.png')"
      /></a>
    </div>
  </section>
</template>
