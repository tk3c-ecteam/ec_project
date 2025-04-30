<script setup>
 const today = new Date();

 //熱門活動區
 let mainName = (today >= new Date('2025/05/01')) ? '202505event' : 'lovemama',
  mainUrl = `https://events.tk3c.com/events_net/${mainName}/index.html`,
   location = window.location.pathname.split('/'),
  folderName = (location[2] == 'events_net') ? location[3] : location[2],
  main = null,
  statusTopic = null;

  let events = [
    {"name":"夜深價更深","url":"https://events.tk3c.com/events_net/nightsale/index.html"},
    {"name":"銀行優惠","url":"https://events.tk3c.com/events_net/events_net/banks/bank.html"},
    {"name":"環保集點","url":"https://events.tk3c.com/events_net/green_subsidy/index.html"},
    {"name":"空調場勘","url":"https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2"},
  ];

  let topics = [
    {"name":"冰箱洗衣機","url":"https://events.tk3c.com/events_net/icewash2209/index.html"},
    {"name":"空調","url":"https://events.tk3c.com/events_net/airConditionerLAB/index.html"},
    {"name":"電視","url":"https://events.tk3c.com/events_net/2020TVforever/index.html"},
    {"name":"電腦週邊","url":"https://events.tk3c.com/events_net/2024083C/index.html"},
    {"name":"風扇","url":"https://events.tk3c.com/events_net/fan_hot/index.html"},
    {"name":"咖啡","url":"https://events.tk3c.com/events_net/crown_202204/index.html"},
    {"name":"寵物","url":"https://events.tk3c.com/events_net/pet_product/index.html"},
  ];

  switch (folderName) {
    case 'icewash2209':
      statusTopic = 0;
      break;
  
    case 'airConditionerLAB':
      statusTopic = 1;
      break;

     case '2020TVforever':
      statusTopic = 2;
      break;  
    
     case '2024083C':
      statusTopic = 3;
      break; 

     case 'fan_hot':
      statusTopic = 4;
      break; 

      case 'crown_202204':
      statusTopic = 5;
      break;
      
      case 'pet_product':
        statusTopic = 6;
      break; 
  } 

  if (folderName != mainName) {
    main = [
      {"name":"回主會場","url": mainUrl},
    ];
    topics.splice(statusTopic,1);
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

  //3c頁樓層錨點
  const go3cFloor = defineModel('go3cFloor',{
    type:Function
  });
</script>

<script>
  export default {
    data() {
      return {
        swiper:null,
        status:null,
        itemNum:''
      }
    },
    mounted() {
      //左側選單 1520 以下裝置不展開
      this.smallDeviceLeft();
      window.addEventListener('resize',this.smallDeviceLeft);
      //左右側選單顯示隱藏
      window.addEventListener('scroll',this.showAside);
     if(this.go3cFloor == undefined)  window.addEventListener('scroll',this.scrollPos);
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
          this.goSlide(i);
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
      <div class="aside-content rt:15px box:border-box bg:#000000b8">
        <ul class="flex flex-wrap:wrap">
          <li class="main" v-if="main != null">
            <a :href="$filters.addGALink(main[0].url)">{{ main[0].name }}</a>
          </li>
          <li class="color:#fff bg:#955038">燦坤服務</li>
           <li v-for="(event,e) in events" :key="e" class="bank">
            <a class="bg:#fff!" :href="$filters.addGALink(event.url)" target="_blank">{{ event.name }}</a>
            </li>
          <li class="color:#fff bg:#955038">主題活動館</li>
           <li v-for="(topic,t) in topics" :key="t" class="w:49.8%!">
            <a class="bg:none!" :href="$filters.addGALink(topic.url)" target="_blank">{{ topic.name }}</a>
           </li>
        </ul>
      </div>
      <a href="#" class="go-top" @click="goTop">GO TOP</a>
    </div>
  </aside>

   <!-- 手機版選單 置頂 -->
  <mobile3 v-if="type == 'mobile3'">
    <!-- 主會場 -->
    <template v-slot:main="{ closeNav2 }">
      <li v-if="main != null" @click="closeNav2">
         <a :href="$filters.addGALink(main[0].url)" target="_blank">主會場</a>
      </li>
    </template>

    <!-- 主題活動館 -->
    <template #topics>
       <ul>
        <li v-for="(topic,t) in topics" :key="t" class="w:31%!">
              <a class="word-break:keep-all" :href="$filters.addGALink(topic.url)" target="_blank">{{ topic.name }}</a>
            </li>
      </ul>
    </template>

    <!-- 燦坤服務 -->
     <template #events>
       <h2 class="color:#fff pt:2% box:border-box f:1.2em f:bold">燦坤服務</h2>
       <span class="w:80% h:auto block m:auto bb:1px|solid|#fff box:border-box"></span>
       <ul>
        <li v-for="(event,e) in events" :key="e" class="w:31%!">
          <a class="word-break:keep-all" :href="$filters.addGALink(event.url)" target="_blank">{{ event.name }}</a>
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
         <a v-if="go3cFloor" :href="aside.href" @click="go3cFloor(aside.id)">{{ aside.text }}</a>
          <a v-else :href="aside.href">{{ aside.text }}</a>
      </swiper-slide>
      </swiper>
    </template>
    <template #mobileList>
       <ul class="grid-cols:2">
        <li v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}">
           <a v-if="go3cFloor" :href="aside.href" @click="go3cFloor(aside.id)">{{ aside.text }}</a>
          <a v-else :href="aside.href">{{ aside.text }}</a>
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