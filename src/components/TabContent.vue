<template>
  <transition name="fade">
    <div class="tab-content" v-if="isActive">
      <slot>
        <BannerSlide :banners="banners" :index="index"></BannerSlide>
        
        <listF v-if="isSwiper" :isSwiper="1" :pro="product2[menus]" :name="`box${index + 1}`"></listF>
        <component v-else :is="type" :pro="product2[menus]"></component>
        <!-- 看更多按鈕 -->
         <slot name="moreBtn"></slot>
      </slot>
    </div>
  </transition>
</template>

<script>
import listF from '@/views/layout/listF.vue'
export default {
  data() {
    return {
      listF
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    selectedTab: {
      type: Number,
      required: true
    },
    menus: {
      type: Number,
      required: true
    },
    banners:{
      type:Object
    },
    isSwiper:{
      type:Boolean,
      default:false
    },
    //商品樓層版型(沒有輪播) 預設listF 4小板型
    type:{
      type:Object,
      default:listF
    }
  },
  mounted() {
    setTimeout(() => {
      this.getFloorSingle(this.menus);
    }, 20);
  },
  computed: {
    isActive() {
      return this.index === this.selectedTab;
    }
  }
};
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>