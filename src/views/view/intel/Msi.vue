<script setup>
  const contents = [
    {
      title: 'IGD2024/images/msi/title2.png',
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
                    "menu":7299
                  },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, "image": "IGD2024/images/bna03.png" ,
                    "menu":7301
                  },
                ],
              },
            ],
            1: [
              {
                "text":"輕薄商務",
                "title": "IGD2024/images/barb.png",
                "url":"https://www.tk3c.com/dic1.aspx?cid=11124&aid=5059",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb01.png","menu":7302 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb02.png","menu":7303 },
                ]
              },
            ],
            2:[
              {
                "text":"高效桌機",
                "title": "IGD2024/images/barc.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=114130",
                "content":[
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=114130`, "image": "IGD2024/images/bnb01.png","menu":7304 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=114130`, "image": "IGD2024/images/bnb02.png","menu":7305 },
                ]
              }
            ],
          }
        ],
        proBig:[
          {
            image:"IGD2024/images/msi/pd_248185.png",
            url:"https://www.tk3c.com/pt.aspx?pid=248185"
          },
          {
            image:"IGD2024/images/msi/pd_248187.png",
            url:"https://www.tk3c.com/pt.aspx?pid=248187"
          },
          {
            image:"IGD2024/images/msi/pd_250185b.png",
            url:"https://www.tk3c.com/pt.aspx?pid=250185"
          },
          {
            image:"IGD2024/images/msi/pd_250608.png",
            url:"https://www.tk3c.com/pt.aspx?pid=250608"
          },
        ]
    }
  ]
</script>

<template>
  <IntelCommon :contents="contents">
    <template #special>
      <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123501')" target="_blank">
        <img :src="$filters.siteUrl('IGD2024/images/msi/sp08.png')">
      </a>
    </template>
  </IntelCommon>
</template>

