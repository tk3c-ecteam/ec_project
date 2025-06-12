<script setup>
  //燦坤服務
  const services = [
    {"name":"燦坤聯名卡","url":"https://events.tk3c.com/events_net/tk3c_creditcard/index.html"},
    {"name":"銀行活動","url":"https://events.tk3c.com/events_net/events_net/banks/bank.html"},
    {"name":"電氣醫院","url":"https://www.tk3c.com/DrTK.aspx"},
    {"name":"舊換新估價","url":"https://www.tk3c.com/3COldChangeNew/index.aspx"},
    {"name":"預約空調場勘","url":"https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2"},
    {"name":"VVIP尊榮安裝","url":"https://events.tk3c.com/events_net/2021airconditioning/index.html#/airconditioner"},
    {"name":"Apple授權維修中心","url":"https://events.tk3c.com/events_net/apple_service/reservation.aspx"},
  ];
</script>

<template>
  <li class="service" v-for="(service,s) in services" :key="s">
    <a :href="$filters.addGALink(service.url)" target="_blank">{{ service.name }}</a>
    <em v-if="s != services.length -1" class="w:80% h:auto block m:auto bb:2px|solid|#fff rel box:border-box"></em>
   </li>
</template>