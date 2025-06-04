<template>
  <transition appear>
    <div class="tab-content" v-show="isActive">
      <slot>
        <BannerSlide :banners="banners" :index="index"></BannerSlide>

        <JimmyFloor :id="id" :name="`box${index + 1}`" :isSwiper="isSwiper"></JimmyFloor>
        <!-- 看更多按鈕 -->
        <slot name="moreBtn"></slot>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    selectedTab: {
      type: Number,
      required: true
    },
    banners:{
      type:Object
    },  
    //看更多按鈕
    moreUrl:{
      type:String
    },
    moreImage:{
      type:String
    },
    //吉米後台樓層id
    id:{
      type:Number,
      required:true
    },
    //是否輪播
    isSwiper:{
      type:Boolean
    }
  },
  computed: {
    isActive() {
      return this.index === this.selectedTab;
    }
  }
};
</script>

<style lang="scss">
  .v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>