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
          menuPro: 8058,
          title: 'office3c/images/TT_office.png',
          floors: [
            {
              text: '印表機/事務機',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=16917"
            },
            {
              text: '墨水匣',
              url: "https://www.tk3c.com/dic1.aspx?cid=16917&aid=23126"
            },
            {
              text: '掃描器',
              url: "https://www.tk3c.com/dic1.aspx?cid=16917&aid=22415"
            },
            {
              text: '標籤機',
              url: "https://www.tk3c.com/dic1.aspx?cid=16917&aid=22415"
            },
            {
              text: '繪圖板/手寫板',
              url: "https://www.tk3c.com/dic1.aspx?cid=14719&aid=5964"
            },
          ],
          menus: [8071, 8072, 8073, 8074, 8075]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/sass/common618.scss';
</style>
