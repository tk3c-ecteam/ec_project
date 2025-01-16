<template>
   <!--
    * 頁籤無輪播滑動
    * props:
       tabs -> 頁籤按鈕(文字或圖片)與連結 的object 格式
       isSwiper -> 是否為輪播
       textOrImage = 'text' 頁籤按鈕為文字
      預設為圖片
      singleUrl -> 連結只有一個(如果有頁籤也沒有連結)
      statusSelect-> 預設頁籤要顯示幾個(都沒有設定為0)
    */ -->

    <div class="tab mb:2% mb:1%@<576">
      <ul v-if="isSwiper == false" class="gap:10">
        <li v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === index }"
          class="brightness(0.7) brightness(1).active">
            <a v-if="singleUrl != undefined" :value="$filters.addGALink(singleUrl)" @click.prevent="selectTab(index)">
            <b v-if="textOrImage == 'text'"> {{ text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
          <a v-else :value="$filters.addGALink(tab.url)" @click.prevent="selectTab(index)">
             <b v-if="textOrImage == 'text'"> {{ text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
        </li>
      </ul>

      <!-- swiper有輪播滑動版本 -->
      <swiper v-else 
      :loop="false" 
      :space-between="10" 
      :slides-per-view="'auto'"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === index }" class="flex! flex-basis:fit brightness(0.7) brightness(1).active" @click="goSlide(index)">
           <a v-if="singleUrl != undefined" :value="$filters.addGALink(singleUrl)"  @click.prevent="selectTab(index)" >
             <b v-if="textOrImage == 'text'"> {{ text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
            <a v-else :value="$filters.addGALink(tab.url)"  @click.prevent="selectTab(index)">
              <b v-if="textOrImage == 'text'"> {{ text }}</b>
            <img v-esle :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <slot :selectedTab="selectedTab"></slot>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Object,
      required: true
    },
    isSwiper: {
      type: Boolean,
      default: false
    },
    textOrImage: {
      type: String,
      default: 'image'
    },
    singleUrl:{
      type:String
    },
    statusSelect:{
      type:Number
    },
  },
  data() {
    return {
      selectedTab: 0,
      swiper:null
    };
  },
  mounted() {
    if (this.statusSelect != undefined) this.selectedTab = this.statusSelect
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;

       if (event) {
        let current = event.currentTarget,
        parent = '';

  
         if (current.getAttribute('value') == '') return false;

        //頁籤為swiper(輪播)格式(標題上加入連結)
        if (current.parentNode.getAttribute('class').indexOf('swiper-slide') > -1) {
          parent = current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        } else {
          parent = current.parentNode.parentNode.parentNode.parentNode.parentNode;
        }
      
        let parentAr = parent,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16),
          getUrl = current.getAttribute('value');
  
        document.querySelector(`.${parentName} .title a`).setAttribute('href', getUrl);
      }
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    onSlideChange() {
      this.selectedTab = this.swiper.activeIndex;
    },
    goSlide(index) {
      this.swiper.slideTo(index);
    }
  }
};
</script>
