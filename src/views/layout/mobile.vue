<template>
  <!-- 手機版選單(置底) -->
  <div class="nav-footer">
     <div class="footer-bg" :style="{'display': mobileBg}" @click="closeNav"></div>
    <div class="nav-box">
      <ul>
        <li @click="changeMobile('type')" :class="[mobileStatus == 'type' ? 'active' : '']">
          <span class="icon"><i class="fa-solid fa-shop"></i>熱門品類</span>
        </li>
         <li @click="changeMobile('service')" :class="[mobileStatus == 'service' ? 'active' : '']">
          <span class="icon"><i class="fa-solid fa-people-arrows"></i>燦坤服務</span>
        </li>
      </ul>
    </div>
    <div class="box-area type" :class="[mobileStatus == 'type' ? 'footer-nav-open' : '']" @click="closeNav">
      <slot name="asides"></slot>
    </div>
    <!-- 燦坤服務 -->
    <div class="box-area service" :class="[mobileStatus == 'service' ? 'footer-nav-open' : '']">
      <slot name="service"></slot>
    </div>
  </div>

  <!-- go top -->
  <a class="gotop-mobile" :class="{'isShow':isGoTop}" @click="goTop"></a>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener('scroll',this.showMobileTop);
    },
    beforeUnmount() {
        window.removeEventListener('scroll',this.showMobileTop);
     }
  }
</script>