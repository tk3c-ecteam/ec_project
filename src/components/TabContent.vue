<template>
  <transition appear>
    <div class="tab-content" v-if="isActive">
      <slot>
        <a v-if="banners != undefined" class="banner" v-for="banner in banners" :href="$filters.addGALink(banner.url)" target="_blank">
          <img class="pc" :src="$filters.siteUrl(banner.pc)">
          <img class="mobile" :src="$filters.siteUrl(banner.mobile)">
        </a>
        
        <listF v-if="isSwiper && products[menus[index]] != undefined" :isSwiper="1" :pro="products[menus[index]].Data" :name="`box${index + 1}`"></listF>
         <listF v-else-if="products[menus[index]] != undefined" :pro="products[menus[index]].Data"></listF> 
          <a v-if="moreUrl" class="more" :href="$filters.addGALink(moreUrl)" target="_blank">
            MORE
            <img v-if="moreImage" :src="$filters.siteUrl(moreImage)">
          </a>
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
    }
  },
  mounted() {
    this.getFloorData(this.menus);
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