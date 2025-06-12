<script setup>
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

  //3c頁樓層錨點
  const go3cFloor = defineModel('go3cFloor',{
    type:Function
  });

  // 自訂右側選單樓層標題項目
   const asideExtra = defineModel('asideExtra',{
    type:Object
  });

</script>

<script>
  export default {
    data() {
      return {
        swiper:null,
        status:null,
        itemNum:0,
        asides:[]
      }
    },
    mounted() {
      //左右側選單顯示隱藏
      window.addEventListener('scroll',this.showAside);
      //右側選單項目滾動
      window.addEventListener('scroll',this.scrollPos);
    },
    beforeUpdate() {
       //確保 DOM 更新後再取得樓層標題和 ID
       this.asides = this.getFloorTitle('section.scroll');
       // 如果是自訂的選單項目則覆蓋舊有的
       if(this.asideExtra) this.asides = this.asideExtra;
    },
    unmounted() {
      window.removeEventListener('resize',this.smallDeviceRight);
      window.removeEventListener('scroll',this.scrollPos);
    },
  methods: {
    scrollPos() {
      //先取得第一個區域px位置
      const sectionS = document.querySelectorAll('section.scroll');
      if (sectionS.length === 0) return;

      const firstAreaTop = sectionS[0].getBoundingClientRect().top,
        scrollTop = window.scrollY;
      this.itemNum = 'auto';  
      sectionS.forEach((el, s) => {
        const top = el.getBoundingClientRect().top + scrollTop - 150,
          bottom = top + window.innerHeight;

        // 檢查當前滾動位置是否在當前區域內
        if (scrollTop > top && scrollTop < bottom) {
          this.status = s;
          if (this.type == 'mobile2') this.goSlide(s);
        }
      });

      // 當滾動位置在第一區域上方時，重置狀態
      if (scrollTop < firstAreaTop) {
        this.status = null;
        if (this.type == 'mobile2') this.goSlide(0);
      }
    },
    onSwiper(swiper) {
      this.swiper = swiper
    },
    goSlide(id) {
      this.swiper.slideTo(id);
    }
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
      <div class="aside-content rt:15px box:border-box bg:#000000b8">
         <ul v-if="go3cFloor">
           <li v-for="(aside, a) in asides" :key="a">
            <a @click="go3cFloor(aside.id,aside.href)">{{ aside.text }}</a>
            </li>
         </ul>
         <ul v-else class="flex flex:wrap jc:flex-start">
          <li v-if="type == 'mobile3'" class="rt:15px color:#fff bg:#767070 f:bold mb:5px box:border-box">燦坤服務</li>
            <Service v-if="type == 'mobile3'"></Service>
           <li v-if="asides && (type == 'mobile' || type == 'mobile2')" class="rt:15px color:#fff bg:#767070 f:bold mb:5px box:border-box">熱門品類</li>
           <li v-if="type == 'mobile' || type == 'mobile2'" v-for="(aside, a) in asides" class="w:48%! m:0|1px! p:0|5px box:border-box" :class="{'stay': status == a,'line-r': a % 2 == 0}" :key="a">
                <a class="bg:none! word-break:keep-all white-space:nowrap text:ellipsis overflow:hidden box:border-box" :href="aside.href">{{ aside.text }}</a>
                <em v-if="a != asides.length - 1 && a != asides.length - 2" class="w:95% h:auto block m:auto bb:2px|solid|#fff rel box:border-box"></em>
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
        <li v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}">
          <a :href="aside.href" @click="changeNav">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile>

  <!-- 手機版上方選單 -->
  <mobile2 v-if="type == 'mobile2'">
    <template #topAsides>
      <swiper
      :loop="false"
      :spaceBetween="10"
      :slidesPerView="itemNum"
      @swiper="onSwiper"
      >
      <swiper-slide v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}" class="color:#ffe400.active width:fit-content!">
         <a :href="aside.href">{{ aside.text }}</a>
      </swiper-slide>
      </swiper>
    </template>
    <template #mobileList>
       <ul class="grid-cols:2">
        <li v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}">
          <a :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile2>
</template>


<style lang="scss">
  .mobile-for-product{
    &.open {
      ul {
        li {
          width: auto;
          margin: 0 3px 5%;
        }
      }
    }
    .switch {
      top: 0;
    }
  }
</style>