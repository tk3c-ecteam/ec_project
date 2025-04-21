<template>
  <transition>
    <div class="tab-content" v-if="isActive">
      <slot>
        <a v-if="banners != undefined" class="banner" v-for="banner in banners" :href="$filters.addGALink(banner.url)" target="_blank">
          <img class="pc" :src="$filters.siteUrl(banner.pc)">
          <img class="mobile" :src="$filters.siteUrl(banner.mobile)">
        </a>
        
        <listF v-if="isSwiper" :isSwiper="1" :pro="product2[menus]" :name="`box${index + 1}`"></listF>
        <component v-else :is="type" :pro="product2[menus]"></component>
          <a v-if="moreUrl" class="more" :href="$filters.addGALink(moreUrl)" target="_blank">
            MORE
            <img v-if="moreImage" :src="$filters.siteUrl(moreImage)">
          </a>
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
    //看更多按鈕
    moreUrl:{
      type:String
    },
    moreImage:{
      type:String
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
  .v-enter-active, .v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>