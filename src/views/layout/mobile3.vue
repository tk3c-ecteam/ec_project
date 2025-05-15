<script>
  export default {
    mounted() {
      window.addEventListener('scroll',this.showMobileTop);
    },
    beforeUnmount() {
        window.removeEventListener('scroll',this.showMobileTop);
    },
    methods: {
      closeNav2() {
        setTimeout(() => {
          this.mobileStatus = '';
          this.mobileBg = 'none';
          document.body.style.overflow = 'auto';
        }, 50);
      }
    },
  }
</script>

<template>
  <!-- 手機版選單(有熱門活動版本) -->
  <div class="nav-footer">
    <div class="footer-bg" :style="{'display': mobileBg}" @click="closeNav"></div>
    <div class="nav-box">
      <ul>
        <li @click="changeMobile('topic')" :class="[mobileStatus == 'topic' ? 'active' : '']">主題活動館</li>
        <slot name="main" :closeNav2="closeNav2"></slot>
        <li @click="changeMobile('service')" :class="[mobileStatus == 'service' ? 'active' : '']">燦坤服務</li>
      </ul>
    </div>

    <!-- 主題活動館 -->
   <div class="box-area topic" :class="[mobileStatus == 'topic' ? 'footer-nav-open' : '']">
      <slot name="topic"></slot>
    </div>

    <!-- 燦坤服務 -->
    <div class="box-area service" :class="[mobileStatus == 'service' ? 'footer-nav-open' : '']">
      <slot name="service"></slot>
    </div>
  </div>

  <!-- go top -->
  <a class="gotop-mobile" :class="{'isShow':isGoTop}" @click="goTop"></a>

  <div class="mobile-for-product" :class="{'open': isMobileOpen}">
    <div v-if="isMobileOpen" @click="changeNav" class="abs w:full h:full left:0 top:0 z:-1"></div>
    <div class="top-nav">
      <div v-if="!isMobileOpen"><slot name="topAsides"></slot></div>
    </div>
    <a class="switch" @click="switchMobile">
      <i v-if="!isMobileOpen" class="fa-solid fa-angle-down"></i>
      <i v-else class="fa-solid fa-xmark"></i>
    </a>
    <div v-if="isMobileOpen">
      <h3 class="title">快速選單</h3>
      <div @click="changeNav">
         <slot name="mobileList"></slot>
      </div>
    </div>
  </div>
</template>
