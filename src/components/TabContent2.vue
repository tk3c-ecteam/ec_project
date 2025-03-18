<template>
  <transition appear>
    <div class="tab-content" v-show="isActive">
      <slot>
        <a v-if="banners != undefined" class="banner" v-for="bn in banners" :href="$filters.addGALink(bn.url)" target="_blank">
          <img class="pc" :src="$filters.siteUrl(bn.pc)">
          <img class="mobile" :src="$filters.siteUrl(bn.mobile)">
        </a>

        <JimmyFloor :id="id" :name="name" :isSwiper="isSwiper"></JimmyFloor>
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
    //輪播class(左右按鈕不重複class)
    name:{
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