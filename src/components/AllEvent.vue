<script setup>
const today = new Date()
const location =  window.location.pathname.split('/')
let isXmas = false

if (location[2] == 'Xmas2024' || today >= new Date('2024/12/13')) {
 isXmas = true
}
</script>

<template>
  <!-- 全站活動 12月 -->
  <section class="all-box">
    <div class="flex flex-wrap:wrap gap:10 jc:center" v-if="!isXmas">
      <img class="w:45% w:90vw@<576" :src="$filters.siteUrl('double12_2024/images/1212/sp1.png')" />
      <img class="w:45% w:90vw@<576" :src="$filters.siteUrl('double12_2024/images/1212/sp2.png')" />
      <a
        href="https://www.tk3c.com.tw/Home/Index?#actsdetail&8&729"
        target="_blank"
        class="max-width:200px max-width:40vw@<576 max-width:12vmax@>2000"
        ><img :src="$filters.siteUrl('double12_2024/images/1212/info.png')"
      /></a>
    </div>
     <div class="w:90% w:95vw@<992 w:full@<576 m:auto grid-cols:2 grid-cols:1@<576 gap:10" v-else>
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
