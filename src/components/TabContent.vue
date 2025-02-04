<template>
  <transition appear>
    <div class="tab-content" v-if="isActive">
      <slot>
        <a v-if="banners != undefined" class="banner" :href="$filters.addGALink(banners.url)" target="_blank">
          <img class="pc" :src="$filters.siteUrl(banners.pc)" loading="lazy">
          <img class="mobile" :src="$filters.siteUrl(banners.mobile)" loading="lazy">
        </a>
        
        <listF v-if="isSwiper && products[menus[index]] != undefined" :isSwiper="1" :pro="products[menus[index]].Data" :name="`box${index + 1}`"></listF>
         <listF v-else-if="products[menus[index]] != undefined" :pro="products[menus[index]].Data"></listF> 
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
      default:0
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