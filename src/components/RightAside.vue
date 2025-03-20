<script setup>
   //選單項目(各樓層的標題)
   const asides = defineModel('asides', {
   type: Object
  });

   /*手機版選單類型
   * type == 'mobile' -> 置底選單
   * type == 'mobile2' -> 置頂選單
   * type == 'mobileAi' -> 3c頁用
   */
   const type = defineModel('type', {
   type: String
  });

  const tab1 = defineModel('tab1', {
    type: Object
  });

  const tab2 = defineModel('tab2', {
    type: Object
  });

   const statusGift = defineModel('statusGift', {
    type: Number
  });
</script>

<script>
 //右側選單 1520 以下裝置不展開
  export default {
    mounted() {
      this.smallDeviceRight();
      window.addEventListener('resize',this.smallDeviceRight);
    },
    unmounted() {
      window.removeEventListener('resize',this.smallDeviceRight);
    },
  }
</script>

<template>
  <!-- 右側選單 -->
  <aside class="aside-container" :class="{'close-right':isRightAside}">
    <span class="collaspe" @click="switchRightAside">
      <i v-if="!isRightAside" class="fas fa-chevron-right"></i>
      <i v-else class="fas fa-chevron-left"></i>
    </span>
    
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <!-- 一般右側選單樓層項目 -->
      <div class="aside-content" v-if="asides">
        <ul>
          <li v-for="(aside, a) in asides" :key="a">
            <a :href="aside.href">{{ aside.text }}</a>
          </li>
        </ul>
      </div>

      <!-- 3c頁樓層項目專屬 -->
      <div class="aside-content" v-else>
        <ul class="a1" v-show="statusGift == 0">
          <li v-for="(t1,t) in tab1[0]">
            <a :href="`#tab${Number(t) + 1}`">{{ t1[0].text }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
        <ul class="a2" v-show="statusGift == 1">
          <li v-for="(t2,t) in tab2[0]">
            <a :href="`#tab${Number(t) + 7}`">{{ t2[0].text }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
      </div>
      
      <a href="#" class="go-top" @click="goTop">GO TOP</a>
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
          <a :href="aside.href" @click="changeNav">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile2>

  <!-- 3c頁手機版選單 -->
   <mobileAi v-if="type == 'mobileAi'">
      <template #typeAside>
       <ul class="a1" v-show="statusGift == 0">
          <li v-for="(t1,t) in tab1[0]">
            <a :href="`#tab${Number(t) + 1}`">{{ t1[0].text }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
        <ul class="a2" v-show="statusGift == 1">
          <li v-for="(t2,t) in tab2[0]">
            <a :href="`#tab${Number(t) + 7}`">{{ t2[0].text }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
    </template>
   </mobileAi>
</template>