<script setup>
 const today = new Date();

 //熱門活動區
 let mainName = (today >= new Date('2025/03/24')) ? '25spring_part3' : '25spring2',
  mainUrl = `https://events.tk3c.com/events_net/${mainName}/index.html`,
   location = window.location.pathname.split('/'),
  folderName = (location[2] == 'events_net') ? location[3] : location[2],
  statusClass = '';

  var num = 0;

  let events = [
    {"name":"回主會場","url": mainUrl},
    {"name":"夜深價更深","url":"https://events.tk3c.com/events_net/nightsale/index.html","class":"bank"},
    {"name":"銀行優惠","url":"https://events.tk3c.com/events_net/events_net/banks/bank.html","class":'bank'},
    {"name":"環保集點","url":"https://events.tk3c.com/events_net/green_subsidy/index.html","class":'bank'},
    {"name":"冰箱洗衣機","url":"https://events.tk3c.com/events_net/icewash2209/index.html"},
    {"name":"空調主題館","url":"https://events.tk3c.com/events_net/airConditionerLAB/index.html"},
    {"name":"電視主題館","url":"https://events.tk3c.com/events_net/2020TVforever/index.html"},
    {"name":"電腦系統週邊","url":"https://events.tk3c.com/events_net/2024083C/index.html"},
    {"name":"風扇主題館","url":"https://events.tk3c.com/events_net/fan_hot/index.html"}
  ];

  switch (folderName) {
    case 'icewash2209':
      num = 4;
      break;
  
    case 'airConditionerLAB':
      num = 5;
      break;

     case '2020TVforever':
      num = 6;
      break;  
    
     case '2024083C':
      num = 7;
      break; 

     case 'fan_hot':
      num = 8;
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

  /* 3C頁用類別 START */ 
  const tab1 = defineModel('tab1', {
    type: Object
  });

  const tab2 = defineModel('tab2', {
    type: Object
  });

   const statusGift = defineModel('statusGift', {
    type: Number
  });
  /*3C頁用類別 END */

  /*手機版類型
  * 預設: mobile3 
    type == 'mobileAi' 啟動3c用手機版選單
  */
  const type = defineModel('type', {
    type: String,
    default:'mobile3'
  });
</script>

<script>
 //左側選單 1520 以下裝置不展開
  export default {
    mounted() {
      this.smallDeviceLeft();
      window.addEventListener('resize',this.smallDeviceLeft);
    },
    unmounted() {
      window.removeEventListener('resize',this.smallDeviceLeft);
    }
  }
</script>

<template>
   <!-- 左側選單 -->
  <aside class="aside-container left" :class="{'close-left': isLeftAside}">
    <span class="collaspe" @click="switchLeftAside">
      <i v-if="!isLeftAside" class="fas fa-chevron-left"></i>
      <i v-else class="fas fa-chevron-right"></i>
    </span>  
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(event,e) in events" :class="[e == 0 ? statusClass : event.class]">
            <a :href="$filters.addGALink(event.url)">{{ event.name }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top" @click="goTop">GO TOP</a>
    </div>
  </aside>

   <!-- 手機版選單 -->
  <mobile3 v-if="type == 'mobile3'">
    <!-- 熱門活動 -->
    <template #events>
       <ul>
        <li v-for="event in events" :class="[event.class ? event.class : '']">
              <a :href="$filters.addGALink(event.url)">{{ event.name }}</a>
            </li>
      </ul>
    </template>

    <!-- 上方快速選單 -->
    <template #topAsides>
     <ul>
       <li v-for="aside in asides">
          <a :href="aside.href">{{ aside.text }}</a>
       </li>
      </ul>
    </template>
  </mobile3>

  <!-- 3c頁手機版選單 -->
   <mobileAi v-if="type == 'mobileAi'">
       <!-- 熱門活動 -->
    <template #events>
       <ul>
        <li v-for="event in events" :class="[event.class ? event.class : '']">
              <a :href="$filters.addGALink(event.url)">{{ event.name }}</a>
            </li>
        </ul>
    </template>

     <!-- 上方快速選單 -->
    <template #typeAside>
       <ul class="a1" v-show="statusGift == 0">
          <li v-for="(t1,t) in tab1[0]">
            <a :href="t1[0].href">{{ t1[0].text }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
        <ul class="a2" v-show="statusGift == 1">
          <li v-for="(t2,t) in tab2[0]">
            <a :href="t2[0].href">{{ t2[0].text }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
    </template>
   </mobileAi>
</template>