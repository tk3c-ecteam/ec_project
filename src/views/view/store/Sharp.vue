<script setup>
  import { nextTick,ref } from "vue";

  const contents = ref([
    {
      logoImage: "sharp/images/logo2.png",
      dropMenus: [
        {
          id: 0,
          href: "pro8281",
          text: "熱銷商品",
        },
        {
          id: 1,
          href: "pro8282",
          text: "廚房調理",
        },
        {
          text: "生活家電",
          id: 2,
          children: [
            {
              id: 2,
              name: '冰箱',
              href: 'pro8283',
            },
            {
              id: 3,
              name: '洗衣機',
              href: 'pro8284',
            },
            {
              id: 4,
              name: '燈具',
              href: 'pro8285',
            },
          ]
        },
        {
          text: "居家影視",
          id:5,
          children: [
            {
              id: 5,
              name: '電視/顯示器',
              href: 'pro8286',
            },
            {
              id: 6,
              name: '劇院/揚聲器',
              href: 'pro8287'
            }
          ]
        },
        {
          text: "空氣淨化",
          id:7,
          children: [
            {
              id: 7,
              name: '清淨機',
              href: 'pro8288',
            },
            {
              id: 8,
              name: '空調',
              href: 'pro8289',
            },
            {
              id: 9,
              name: '除濕機',
              href: 'pro8290',
            },
            {
              id: 10,
              name: '電風扇',
              href: 'pro8291',
            }
          ]
        },
        {
          id: 11,
          href: "pro8292",
          text: "展示/福利出清",
        }
      ],
      floorImg: [
        {
          href: "pro8281",
          text: "熱銷商品",
        },
        {
          href: "pro8282",
          text: "廚房調理",
          url: "https://www.tk3c.com/dic2.aspx?cid=83186&aid=18682&hid=84831",
        },
        {
          text: '冰箱',
          href: 'pro8283',
          url: 'https://www.tk3c.com/dic2.aspx?cid=12504&aid=4878&hid=12525'
        },
        {
          text: '洗衣機',
          href: 'pro8284',
          url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18620&hid=84586'
        },
        {
          text: '燈具',
          href: 'pro8285',
          url: 'https://www.tk3c.com/dic2.aspx?cid=842&aid=23158&hid=119341'
        },
        {
          text: '電視/顯示器',
          href: 'pro8286',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11337'
        },
        {
          text: '劇院/揚聲器',
          href: 'pro8287'
        },
        {
          text: '清淨機',
          href: 'pro8288',
          url: 'https://www.tk3c.com/dic2.aspx?cid=71323&aid=16887&hid=71364'
        },
        {
          text: '空調',
          href: 'pro8289',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=107383'
        },
        {
          text: '除濕機',
          href: 'pro8290',
          url: 'https://www.tk3c.com/dic2.aspx?cid=71323&aid=16881&hid=71328'
        },
        {
          text: '電風扇',
          href: 'pro8291',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=114892'
        },
        {
          text: "pro8292",
          text: "展示/福利出清",
          url: "https://www.tk3c.com/dictitleurl.aspx?cid=89383",
        }
      ],
      slides:[
        {
          pc:'sharp/images/bn2025_1.jpg',
          mobile:'sharp/images/bn2025_1M.jpg'
        },
        {
          pc:'sharp/images/bn2025_2.jpg',
          mobile:'sharp/images/bn2025_2M.jpg'
        },
      ],
      singleImage: 'sharp/images/bar_bg2.png',
      menu:[8281,8282,8283,8284,8285,8286,
      8287,8288,8289,8290,8291,8292],
      status: null
    }
  ]);
  const today = new Date();
</script>

<template>
  <StoreDefault2 :contents="contents">
    <!-- 影片 -->
    <template #special>
      <div class="w:58% w:full@<992 h:0 pb:33% pb:60%@<992 rel m:0|auto|5%">
        <iframe
          class="w:full h:full abs left:0 right:0 m:auto"
          frameborder="0"
          src="https://www.youtube.com/embed/qMC9blOvgAk?autoplay=1&mute=1&loop=1"
        ></iframe>
      </div>
    </template>
  </StoreDefault2>
</template>

<style lang="scss">

/*  共用樣式調整 */
body {
  background: #404040;
}

.bg01 {
  background: #000;
  border-radius: 10px;
  box-sizing: border-box;
}

section {
  .title {
    width: 52%;
  }
}

nav {
  background: #f70011;
  .dropdown {
    background: #f70011;
  }

  ul {
    &.menu {
      li {
        &.active {
          color: #000;
        }
      }
    }
  }
}

#store-container {
  .background {
    padding-bottom: 29%;
    margin: 0 auto 3%;
    .swiper-pagination {
      .swiper-pagination-bullet-active {
        background: #f70011 !important;
      }
    }
  }
  .logo {
    background: #fff;
  }
}

.navigation-header {
  background: #f70011;
}

.floor {
  .title {
    b {
      top: 48%;
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #store-container {
    .background {
      padding-bottom: 94vw;
    }
  }

  section {
    .title {
      width: 65%;
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #store-container {
    .background {
      padding-bottom: 98vw;
      .swiper-pagination {
        bottom: 12% !important;
      }
    }
  }

  section {
    .title {
      width: 90%;
    }
  }
}

</style>
