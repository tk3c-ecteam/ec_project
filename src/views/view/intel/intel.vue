<script> 
   export default {
    data() {
      return {
        tabs:[
          {
            0: [
              {
                "title": "IGD2024/images/bara.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=117913",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, 
                  "image": "IGD2024/images/bna01.png" ,
                    "menu":7251
                  },
                  {
                    "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`,
                    "image": "IGD2024/images/bna02.png",
                    "menu": 7252
                  },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, "image": "IGD2024/images/bna03.png" ,
                    "menu":7253
                  },
                ],
              },
            ],
            1: [
              {
                "title": "IGD2024/images/barb.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=11124",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb01.png","menu":7254 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb02.png","menu":7255 },
                ]
              },
            ],
            2: [
              {
                "title": "IGD2024/images/barc.png",
                "url": "https://www.tk3c.com/dictitleurl.aspx?cid=114130",
                "content": [
                  { "image": "IGD2024/images/bnc01.png", "menu": 7256 },
                  { "image": "IGD2024/images/bnc02.png", "menu": 7257 },
                ]
              },
            ]
          }
        ],
        status:0,
        today:new Date()
      }
    },
    mounted() {
      const {tabs} = this;
      
      for (const [t, tab] of Object.entries(tabs[0])) {
      //撈取無頁籤商品樓層 
      if (tab[0].content == undefined) {
         //無頁籤商品樓層
        this.getFloorSingle(tab[0].menu)
      }
     }
    },
  methods: {
    message(id) {
      //活動辦法
      let infoHtml = "";

      if (id == 1) {
        infoHtml = `
          <img width="100%" src="https://events.tk3c.com/events_net/events_net/IGD2024/images/Game_bundle.jpg">
        `;
      } else {
        infoHtml = `
        <iframe width="100%" height="500" src="https://events.tk3c.com/events_net/events_net/IGD2024/info.pdf"></iframe>
      `;
      }

      Swal.fire({
        width: 1200,
        title: "<p style='margin-bottom:5px';>活動詳情</p>",
        html: infoHtml,
        confirmButtonText: "關閉",
        position: 'center',
        showCloseButton: true,
        returnFocus: false,
      });
    }
  }
   }
</script>

<script setup>
  const contents = [
    {
      title:'IGD2024/images/title2.png',
      tabs:[
          {
            0: [
              {
                "text":"飆速電競",
                "title": "IGD2024/images/bara.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=117913",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, 
                  "image": "IGD2024/images/bna01.png" ,
                    "menu":7251
                  },
                  {
                    "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`,
                    "image": "IGD2024/images/bna02.png",
                    "menu": 7252
                  },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, "image": "IGD2024/images/bna03.png" ,
                    "menu":7253
                  },
                ],
              },
            ],
            1: [
              {
                "text":"輕薄商務",
                "title": "IGD2024/images/barb.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=11124",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb01.png","menu":7254 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb02.png","menu":7255 },
                ]
              },
            ],
            2: [
              {
                "text":"高效桌機",
                "title": "IGD2024/images/barc.png",
                "url": "https://www.tk3c.com/dictitleurl.aspx?cid=114130",
                "content": [
                  { "image": "IGD2024/images/bnc01.png", "menu": 7256 },
                  { "image": "IGD2024/images/bnc02.png", "menu": 7257 },
                ]
              },
            ]
          }
        ],
        proBig:[
          {
            image:"IGD2024/images/pd_250820_c.png",
            url:"https://www.tk3c.com/pt.aspx?pid=250820"
          },
          {
            image:"IGD2024/images/pd_245544_c.png",
            url:"https://www.tk3c.com/pt.aspx?pid=245544"
          },
          {
            image:"IGD2024/images/pd_250608_c.png",
            url:"https://www.tk3c.com/pt.aspx?pid=250608"
          },
          {
            image:"IGD2024/images/pd_248562_c.png",
            url:"https://www.tk3c.com/pt.aspx?pid=248562"
          },
          {
            image:"IGD2024/images/pd_245520_c.png",
            url:"https://www.tk3c.com/pt.aspx?pid=245520"
          },
        ],
    }
  ];
</script>

<template>
  <IntelCommon :contents="contents">
    <template #special>
      <swiper-slide>
        <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=121466&aid=23844')" target="_blank">
          <img :src="$filters.siteUrl('IGD2024/images/sp05_1_b.png')">
        </a>
      </swiper-slide>
    </template>
  </IntelCommon>
</template>
