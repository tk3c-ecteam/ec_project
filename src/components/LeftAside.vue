<script setup>
 const today = new Date();

 //熱門活動區
 let mainName = (today >= new Date('2025/05/16')) ? 'awesomepet' : '202505event',
  mainUrl = `https://events.tk3c.com/events_net/${mainName}/index.html`,
   location = window.location.pathname.split('/'),
  folderName = (location[2] == 'events_net') ? location[3] : location[2],
  main = null,
  statusTopic = null;

  let topics = [
    {"name":"冰箱洗衣機","url":"https://events.tk3c.com/events_net/icewash2209/index.html"},
    {"name":"空調主題館","url":"https://events.tk3c.com/events_net/airConditionerLAB/index.html"},
    {"name":"電視主題館","url":"https://events.tk3c.com/events_net/2020TVforever/index.html"},
    {"name":"電腦系統週邊","url":"https://events.tk3c.com/events_net/2024083C/index.html"},
    {"name":"季節/風扇/熨燙","url":"https://events.tk3c.com/events_net/fan_hot/index.html"},
    {"name":"綠點週末10倍送","url":"https://events.tk3c.com/events_net/green_subsidy/index.html"},
    {"name":"夜深價更深","url":"https://events.tk3c.com/events_net/nightsale/index.html"},
    {"name":"福利品特賣","url":"https://events.tk3c.com/events_net/OUTLET/index.html"},
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

     case 'green_subsidy':
      statusTopic = 5;
      break;  

     case 'nightsale':
      statusTopic = 6;
      break;
      
     case 'pet_product':
      statusTopic = 7;
      break;
  } 

  if (folderName != mainName) {
    main = [
      {"name":"回主會場","url": mainUrl},
    ];
    topics.splice(statusTopic,1);
  }

  //手機版類型
  //預設: mobile3 
  const type = defineModel('type', {
    type: String,
    default:'mobile3'
  });

  //3c頁樓層錨點
  const go3cFloor = defineModel('go3cFloor',{
    type:Function
  });

  // 自訂右側選單樓層標題項目
   const asideExtra = defineModel('asideExtra',{
    type:Object
  });
</script>

<script>
  export default {
    data() {
      return {
        swiper:null,
        status:null,
        itemNum:'',
        asides:[]
      }
    },
    mounted() {
      //左側選單 1520 以下裝置不展開
      this.smallDeviceLeft();
      window.addEventListener('resize',this.smallDeviceLeft);
      //左右側選單顯示隱藏
      window.addEventListener('scroll',this.showAside);
      if(this.go3cFloor === undefined) window.addEventListener('scroll',this.scrollPos);
    },
    beforeUpdate() {
       //確保 DOM 更新後再取得樓層標題和 ID
       this.asides = this.getFloorTitle('section.scroll');
       // 如果是自訂的選單項目則覆蓋舊有的
       if(this.asideExtra) this.asides = this.asideExtra;
    },
    unmounted() {
      window.removeEventListener('resize',this.smallDeviceLeft);
      window.removeEventListener('scroll',this.scrollPos);
    },
    methods: {
      scrollPos() {
        //先取得第一個區域px位置
        
        const sectionS = document.querySelectorAll('section.scroll');
        if (sectionS.length === 0) return;

        const firstAreaTop = sectionS[0].getBoundingClientRect().top,
          scrollTop = window.scrollY;

         this.itemNum = 'auto';
        sectionS.forEach((el, i) => {
          const top = el.getBoundingClientRect().top + scrollTop - 150,
            bottom = top + window.innerHeight;

          // 檢查當前滾動位置是否在當前區域內
          if (scrollTop > top && scrollTop < bottom) {
            this.status = i;
            this.goSlide(i);
          }
        });

        // 當滾動位置在第一區域上方時，重置狀態
        if (scrollTop < firstAreaTop) {
          this.status = null;
          this.goSlide(0);
        }
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
        <ul class="flex flex:wrap jc:flex-start">
          <li class="main" v-if="main != null">
            <a :href="$filters.addGALink(main[0].url)" target="_blank">{{ main[0].name }}</a>
          </li>
          <li class="color:#fff bg:#767070 f:bold">主題活動館</li>
           <li v-for="(topic,t) in topics" :key="t">
            <a class="bg:none! white-space:nowrap text:ellipsis overflow:hidden box:border-box" :href="$filters.addGALink(topic.url)" target="_blank">{{ topic.name }}</a>
            <em v-if="t != topics.length -1 " class="w:75% h:auto block m:auto bb:2px|solid|#fff rel box:border-box"></em>
           </li>
           <li class="color:#fff bg:#767070 f:bold mb:5px">熱門品類</li>
           <li v-for="(aside, a) in asides" class="w:44%! m:0|3px!" :class="{'stay': status == a,'br:2px|solid|#fff': a % 2 == 0}" :key="a">
                <a class="bg:none! word-break:keep-all white-space:nowrap text:ellipsis overflow:hidden box:border-box" :href="aside.href">{{ aside.text }}</a>
                <em class="w:75% h:auto block m:auto bb:2px|solid|#fff rel box:border-box"></em>
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
    <template #topic>
       <ul>
        <li v-for="(topic,t) in topics" :key="t" class="w:31%!">
              <a class="word-break:keep-all" :href="$filters.addGALink(topic.url)" target="_blank">{{ topic.name }}</a>
            </li>
      </ul>
    </template>

    <!-- 燦坤服務 -->
     <template #service>
      <ul>
        <Service></Service>
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
         <a v-if="go3cFloor" @click="go3cFloor(aside.id,aside.href)">{{ aside.text }}</a>
          <a v-else :href="aside.href">{{ aside.text }}</a>
      </swiper-slide>
      </swiper>
    </template>
    <template #mobileList>
       <ul class="grid-cols:2">
        <li v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}">
           <a v-if="go3cFloor" @click="go3cFloor(aside.id,aside.href)">{{ aside.text }}</a>
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