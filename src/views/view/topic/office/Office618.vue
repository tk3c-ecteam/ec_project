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
          menuPro: 8256,
          title: 'office3c/images/TT_office2.png',
          floors: [
            {
              text: '噴墨印表機',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=16917"
            },
            {
              text: '雷射印表機',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=83623"
            },
            {
              text: '印表機耗材',
              url: "https://www.tk3c.com/dic1.aspx?cid=16917&aid=19080"
            },
            {
              text: '鍵盤',
              url: "https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020"
            },
            {
              text: '滑鼠',
              url: "https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040"
            },
            {
              text: '螢幕',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=44823"
            },
            {
              text: '路由器',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=43403"
            },
            {
              text: '升降桌',
              url: "https://www.tk3c.com/dic1.aspx?cid=11684&aid=23765"
            },
            {
              text: '護貝/碎紙/點鈔機',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=11684"
            },
            {
              text: '延長線/電池',
              url: "https://www.tk3c.com/dic1.aspx?cid=43450&aid=11643"
            },
          ],
          menus: [8245,8246,8247,8248,8249,8258,8257,8259,8262,8263]
        }
      ]
    }
  }
}
</script>
