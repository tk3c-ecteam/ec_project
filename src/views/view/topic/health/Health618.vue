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
          title: 'healthbeauty/images/TT_health.png',
          floors: [
            {
              text: '吹風機',
            },
            {
              text: '美容儀',
            },
            {
              text: '按摩椅',
            },
            {
              text: '筋膜槍',
              url: "https://www.tk3c.com/dic2.aspx?cid=842&aid=2492&hid=117994"
            },
          ],
          menus: [8071, 8072, 8073, 8074]
        }
      ],
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/sass/common618.scss';
</style>
