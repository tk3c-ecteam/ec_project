<template>
   <!--
    * 頁籤無輪播滑動
    * props:
       tabs -> 頁籤按鈕(文字或圖片)與連結 的object 格式
       (tabs內部架構 tab.text -> 頁籤按鈕為文字
       tab.image -> 頁籤為圖片)
       isSwiper -> 是否為輪播
      singleUrl -> 連結只有一個(如果有頁籤也沒有連結)
      statusSelect-> 預設頁籤要顯示幾個(都沒有設定為0)
      direct -> 輪播方向(預設為水平) 若要垂直輪播請設定'vertical'
    */ -->

    <div class="tab mb:1% overflow:hidden">
      <ul v-if="isSwiper == false" class="gap:10">
        <li v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === index }"
          class="flex-basis:fit-content brightness(0.7) brightness(1).active">
            <a v-if="singleUrl != undefined" :value="$filters.addGALink(singleUrl)" @click.prevent="selectTab(index)">
            <b v-if="tab.text != undefined"> {{ tab.text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
          <a v-else :value="$filters.addGALink(tab.url)" @click.prevent="selectTab(index)">
             <b v-if="tab.text != undefined"> {{ tab.text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
        </li>
      </ul>

      <!-- swiper有輪播滑動版本 -->
      <swiper v-else 
      :loop="false" 
      :space-between="10" 
      :direction="direct"
      :slides-per-view="'auto'"
      :breakpoints="swiperOption"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === index }" class="flex! flex-basis:fit brightness(0.7) brightness(1).active" @click="goSlide(index)">
           <a v-if="singleUrl != undefined" :value="$filters.addGALink(singleUrl)"  @click.prevent="selectTab(index)" >
             <b v-if="tab.text != undefined"> {{ tab.text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
            <a v-else :value="$filters.addGALink(tab.url)"  @click.prevent="selectTab(index)">
              <b v-if="tab.text != undefined"> {{ tab.text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
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
    singleUrl:{
      type:String
    },
    statusSelect:{
      type:Number
    },
    direct:{
      type:String,
      default:'horizontal'
    },
    swiperOption:{
      type:Object
    }
  },
  data() {
    return {
      selectedTab: 0,
      swiper:null
    };
  },
  mounted() {
    if (this.statusSelect != undefined) {
       this.selectedTab = this.statusSelect;
       setTimeout(() => {
        this.goSlide(this.selectedTab);
       }, 50);
    }
   
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;

       if (event) {
        let current = event.currentTarget,
        parent = '';

          //連結只有一個不用更換(標題加上 .single-url)
         if (document.querySelectorAll('.single-url').length > 0) return false;

        //頁籤為swiper(輪播)格式(標題上加入連結)
       if (current.parentNode.getAttribute('class').indexOf('swiper-slide') > -1) {
          parent = current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        } else {
          parent = current.parentNode.parentNode.parentNode.parentNode.parentNode;
        }
      
        let parentAr = parent,
          parentId = parentAr.getAttribute('id'),
          getUrl = current.getAttribute('value');

          if (document.querySelectorAll(`.${parentId}-box .title a`).length > 0) {
            document.querySelector(`.${parentId}-box .title a`).setAttribute('href', getUrl);
          }
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
