<script setup>
   //選單項目(各樓層的標題)
   const asides = defineModel('asides', {
   type: Object
  });

   /*手機版選單類型
   * type == 'mobile' -> 置底選單
   * type == 'mobile2' -> 置頂選單
   */
   const type = defineModel('type', {
   type: String
  });

  //右側選單圖片
  const asideImage = defineModel('asideImage',{
    type:String
  });
</script>

<script>
  export default {
    mounted() {
      //右側選單 1520 以下裝置不展開
      this.smallDeviceRight();
      window.addEventListener('resize',this.smallDeviceRight);
      //左右側選單顯示隱藏
      window.addEventListener('scroll',this.showAside);
      //手機版上方選單項目滾動
      window.addEventListener('scroll',this.scrollToPos);
      //右側選單項目滾動
       window.addEventListener('scroll',this.scrollAsidePos);
    },
    unmounted() {
      window.removeEventListener('resize',this.smallDeviceRight);
    },
  }
</script>

<template>
  <!-- 右側選單 -->
  <aside class="aside-container" v-show="isAsideTop" :class="{'close-right':isRightAside}">
    <span class="collaspe" @click="switchRightAside">
      <i v-if="!isRightAside" class="fas fa-chevron-right"></i>
      <i v-else class="fas fa-chevron-left"></i>
    </span>
    
    <div class="aside-wrap">
      <!-- 上方圖片 -->
      <h3 class="aside-header">
       <img v-if="asideImage != undefined" :src="$filters.siteUrl(asideImage)">
      </h3>
      <!-- 一般右側選單樓層項目 -->
      <div class="aside-content">
        <ul>
          <li v-for="(aside, a) in asides" :key="a" :class="{'stay': asidesStatus == a}">
            <a :href="aside.href">{{ aside.text }}</a>
          </li>
        </ul>
      </div>
      
      <a href="#" class="go-top" @click="goTop">GO TOP</a>
    </div>
  </aside>

  <!-- 手機版置底選單 -->
  <mobile v-if="type == 'mobile'">
    <template #asides>
      <ul>
        <li v-for="(aside,a) in asides" :key="a">
          <a :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile>

  <!-- 手機版上方選單 -->
  <mobile2 v-if="type == 'mobile2'">
    <template #topAsides>
      <ul>
        <li v-for="(aside,a) in asides" :key="a" :class="{'active':isMobileTopStatus == a}">
          <a :href="aside.href" @click="changeNav">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile2>
</template>