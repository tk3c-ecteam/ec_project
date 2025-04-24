<template>
   <!--
    * 頁籤無輪播滑動
    * props:
       tabs -> 頁籤按鈕(文字或圖片)與連結 的object 格式
       (tabs內部架構 tab.text -> 頁籤按鈕為文字
       tab.image -> 頁籤為圖片)
      singleUrl -> 連結只有一個(如果有頁籤也沒有連結)
      statusSelect-> 預設頁籤要顯示幾個(都沒有設定為0)
      direct -> 輪播方向(預設為水平) 若要垂直輪播請設定'vertical'
    */ -->

    <div class="tab mb:0.3% overflow:hidden">
      <!-- swiper有輪播滑動 -->
      <swiper
      :loop="false" 
      :space-between="10" 
      :direction="direct"
      :slides-per-view="'auto'"
      :breakpoints="swiperOption"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(tab, index) in tabs" :key="index" :class="{ active: selectedTab === index }" class="flex! flex-basis:fit brightness(0.7) brightness(1).active" @click="goSlide(index)">
           <a v-if="singleUrl != undefined" :href="$filters.addGALink(singleUrl)"  @click.prevent="selectTab(index)" >
             <b v-if="tab.text != undefined"> {{ tab.text }}</b>
            <img v-else :src="$filters.siteUrl(tab.image)" alt=" " />
          </a>
            <a v-else :href="$filters.addGALink(tab.url)"  @click.prevent="selectTab(index)">
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
      this.goSlide(this.selectedTab);
    }
   
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;

      let current = event.currentTarget,
        parent = '';

      if (current.closest('section') == undefined) return false;  
      //點擊找到此區域
      parent = current.closest('section');

      //連結只有一個不用更換(標題加上 .single-url)
      if (parent.querySelectorAll('.single-url').length > 0) return false;

      let getUrl = current.getAttribute('href');

      if (parent.querySelectorAll('.title a').length > 0 && getUrl != '') {
        parent.querySelector('.title a').setAttribute('href', getUrl);
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

<style lang="scss">
  .tab {
    .swiper-wrapper {
      justify-content: center;
      align-items: baseline;
      padding-bottom: 5px;
      box-sizing: border-box;
    }
    a {
      b {
        font-size: 1.5em;
      }
    }
  }

  @include media-query("mobile", "992px") {
   .tab {
    .swiper-wrapper {
      justify-content: left;
    }
    .swiper-slide {
      flex-basis: 32%;
    }
   }
  }

  @include media-query("mobile", "576px") {
    .tab {
      .swiper-slide {
        flex-basis: 42%;
      }
      a {
        b {
          font-size: 1.2em;
        }
      }
    }
  }
</style>
