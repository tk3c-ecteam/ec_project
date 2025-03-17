<template>
  <transition appear>
    <div class="tab-content" v-show="isActive">
      <slot>
        <a v-if="banners != undefined" class="banner" v-for="banner in banners" :href="$filters.addGALink(banner.url)" target="_blank">
          <img class="pc" :src="$filters.siteUrl(banner.pc)">
          <img class="mobile" :src="$filters.siteUrl(banner.mobile)">
        </a>

      
        <JimmyFloor :id="floor.id" :name="name" :isSwiper="floor.isSwiper"></JimmyFloor>
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
    name:{
      type:String
    },
    floor:{
      type:Object,
      required:true
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