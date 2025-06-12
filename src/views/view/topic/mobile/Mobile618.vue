<template>
  <Template618 :contents="contents"></Template618>
</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
      contents: [
        {
          menuPro: 8274,
          title: 'mobile3c/images/TT_mobile2.png',
          floors: [
            {
              text: '智慧型手機',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=12406'
            },
            {
              text: '平板電腦',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=10890'
            },
            {
              text: '藍牙耳機',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=118133'
            },
            {
              text: '智慧穿戴',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=40343"
            },
            {
              text: '行動電源',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=112782'
            },
            {
              text: '週邊配件',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=28825"
            },
          ],
          menus: [8275,8276,8277,8278,8279,8280]
        }
      ],
    }
  }
}
</script>

