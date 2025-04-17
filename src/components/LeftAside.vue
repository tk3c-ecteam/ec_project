<script setup>
 const today = new Date();

 //熱門活動區
 let mainName = (today >= new Date('2025/04/10')) ? '202504vip' : '25spring_part3',
  mainUrl = `https://events.tk3c.com/events_net/${mainName}/index.html`,
   location = window.location.pathname.split('/'),
  folderName = (location[2] == 'events_net') ? location[3] : location[2],
  statusClass = '';

  var num = 0;

  let events = [
    {"name":"回主會場","url": mainUrl},
    {"name":"燦坤服務","class":"title"},
    {"name":"夜深價更深","url":"https://events.tk3c.com/events_net/nightsale/index.html","class":"bank"},
    {"name":"銀行優惠","url":"https://events.tk3c.com/events_net/events_net/banks/bank.html","class":'bank'},
    {"name":"環保集點","url":"https://events.tk3c.com/events_net/green_subsidy/index.html","class":'bank'},
    {"name":"主題活動館","class":"title"},
    {"name":"冰箱洗衣機","url":"https://events.tk3c.com/events_net/icewash2209/index.html"},
    {"name":"空調主題館","url":"https://events.tk3c.com/events_net/airConditionerLAB/index.html"},
    {"name":"電視主題館","url":"https://events.tk3c.com/events_net/2020TVforever/index.html"},
    {"name":"電腦系統週邊","url":"https://events.tk3c.com/events_net/2024083C/index.html"},
    {"name":"風扇主題館","url":"https://events.tk3c.com/events_net/fan_hot/index.html"}
  ];

  switch (folderName) {
    case 'icewash2209':
      num = 6;
      break;
  
    case 'airConditionerLAB':
      num = 7;
      break;

     case '2020TVforever':
      num = 8;
      break;  
    
     case '2024083C':
      num = 9;
      break; 

     case 'fan_hot':
      num = 10;
      break; 
  } 

  if (folderName == mainName) {
    events.splice(0,1);
    statusClass = 'main';
  }
  
  if(folderName != mainName) {
    events.splice(num,1); 
    statusClass = 'main';
  }
  
  //選單項目(各樓層的標題)
  const asides = defineModel('asides', {
    type: Object
  });

  /*手機版類型
  * 預設: mobile3 
  */
  const type = defineModel('type', {
    type: String,
    default:'mobile3'
  });
</script>

<script>
  export default {
    data() {
      return {
        swiper:null,
        status:null,
        itemNum:0
      }
    },
    mounted() {
      //左側選單 1520 以下裝置不展開
      this.smallDeviceLeft();
      window.addEventListener('resize',this.smallDeviceLeft);
      //左右側選單顯示隱藏
      window.addEventListener('scroll',this.showAside);
      window.addEventListener('scroll',this.scrollPos);
    },
    unmounted() {
      window.removeEventListener('resize',this.smallDeviceLeft);
      window.removeEventListener('scroll',this.scrollPos);
    },
    methods: {
      scrollPos() {
        //先取得第一個區域px位置
        if (document.querySelectorAll('section.scroll').length <= 0) return false;
       let firstArea =  document.querySelectorAll('section.scroll')[0].getBoundingClientRect().top;
      document.querySelectorAll('section.scroll').forEach((el, i) => {
        this.itemNum = 'auto';
        let scrollTop = window.scrollY,
          top = el.getBoundingClientRect().top + scrollTop - 150,
          bottom = top + window.innerHeight;
        /* 目前滑鼠滾動位置滾到每個樓層區，所屬項目加上 .active 標記,
        */
        if (scrollTop > top && scrollTop < bottom) {
          this.status = i;
          this.goSlide(this.status);
        }

        //在第一區域上面的 樓層標題項目歸0
        if (scrollTop < firstArea) {
          this.status = null;
          this.goSlide(0);
        }
      });
    },
    onSwiper(swiper) {
      this.swiper = swiper
    },
    goSlide(id) {
      this.swiper.slideTo(id); 
    }
    },
  }
</script>

<template>
   <!-- 左側選單 -->
  <aside class="aside-container left" v-show="isAsideTop" :class="{'close-left': isLeftAside}">
    <span class="collaspe" @click="switchLeftAside">
      <i v-if="!isLeftAside" class="fas fa-chevron-left"></i>
      <i v-else class="fas fa-chevron-right"></i>
    </span>  
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(event,e) in events" :key="e" :class="[e == 0 ? statusClass : event.class]">
            <a v-if="event.url" :href="$filters.addGALink(event.url)">{{ event.name }}</a>
            <a v-else class="bg:#955038!  cursor:auto pointer-events:none">{{ event.name }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top" @click="goTop">GO TOP</a>
    </div>
  </aside>

   <!-- 手機版選單 置頂 -->
  <mobile3 v-if="type == 'mobile3'">
    <!-- 熱門活動 -->
    <template #events>
       <ul>
        <li v-for="(event,e) in events" :key="e" :class="[event.class ? event.class : '']">
              <a :href="$filters.addGALink(event.url)">{{ event.name }}</a>
            </li>
      </ul>
    </template>

    <!-- 上方快速選單 -->
    <template #topAsides>
      <swiper
      :loop="false"
      :spaceBetween="10"
      :slidesPerView="itemNum"
      @swiper="onSwiper"
      >
      <swiper-slide v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}" class="color:#ffe400.active width:fit-content!">
         <a :href="aside.href">{{ aside.text }}</a>
      </swiper-slide>
      </swiper>
    </template>
    <template #mobileList>
       <ul class="grid-cols:2">
        <li v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}">
          <a :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile3>
</template>

<style lang="scss">
  .mobile-for-product{
    &.open {
      ul {
        li {
          width: auto;
          margin: 0 3px 5%;
        }
      }
    }
    .switch {
      top: 0;
    }
  }
</style>