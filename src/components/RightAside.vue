<script setup>
   //選單項目(各樓層的標題)
   const asides = defineModel('asides', {
   type: Object
  })

   /*手機版選單類型
   * type == 'mobile' -> 置底選單
   * type == 'mobile2' -> 置頂選單
   */
   const type = defineModel('type', {
   type: String
  })
</script>

<template>
  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(aside, a) in asides" :key="a">
            <a :href="aside.href">{{ aside.text }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 手機版置底選單 -->
  <mobile v-if="type == 'mobile'">
    <template #asides>
      <ul>
        <li v-for="aside in asides">
          <a :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile>

  <!-- 手機版上方選單 -->
  <mobile2 v-if="type == 'mobile2'">
    <template #topAsides>
      <ul>
        <li v-for="aside in asides">
          <a :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile2>
</template>