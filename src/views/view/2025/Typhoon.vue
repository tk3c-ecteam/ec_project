<template>
  <div id="typhoon-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('typhoon/images/title_240722.png')" />
      </h2>
      <p class="umbrella">
         <img :src="$filters.siteUrl('typhoon/images/20210625_umbrella.png')" />
      </p>
    </div>

    <canvas id="canvas"></canvas>

    <!--商品樓層 -->
    <CommonFloor :floors="floors" :menu="menus"></CommonFloor>
  </div>

  <!-- 左側選單+手機版 -->
   <LeftAside></LeftAside>

   <!-- 右側選單 -->
   <RightAside :asideImage="asideImage"></RightAside> 
</template>

<script setup>
  const floors = [
    {
      "image":"wet/images/tk3cgo_bar.png"
    },
     {
      "image":"typhoon/images/20210626_bar03.png"
    },
     {
      "image":"typhoon/images/2307bar9.png"
    },
    {
      "image":"typhoon/images/20210626_bar04.png"
    },
     {
      "image":"typhoon/images/20210626_bar02.png"
    },
     {
      "image":"typhoon/images/bar00.png"
    },
     {
      "image":"typhoon/images/230724bar7.png"
    },
     {
      "image":"typhoon/images/20210626_bar06.png"
    },
     {
      "image":"typhoon/images/2307bar8.png"
    },
     {
      "image":"typhoon/images/20210626_bar05.png"
    },
     {
      "image":"typhoon/images/20210626_bar01.png"
    },
  ];

  const menus = [7246,1366,5052,1367,1365,2300,5016,
   1369, 5033,1368,1364
  ];

  const asideImage = 'typhoon/images/20210626_right_top.png';
</script>

<style lang="scss">
   @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/typhoon/images/";
$origin: "https://events.tk3c.com/events_net/events_net/typhoon/images/";

/*  共用樣式調整 */
form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image:$dir + '20210626_bg_01.jpg';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position: 0 45px,top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.aside-container {
  &:not(.left) {
    .aside-header {
      margin: 0 auto 0;
    }
  }
}

.bg01 {
  background: #284b53;
}

#typhoon-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 45%;
    .title {
      width: 48%;
      position: absolute;
      left: 29%;
      top: 12%;
      z-index: 5;
      animation: slide-down 1.5s linear;
      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        $image:$dir + 'light.png';
        background: url($image) no-repeat center;
        background-size: 35%;
        animation: hide-and-show 500ms linear infinite alternate;
        mix-blend-mode: screen;
        filter: brightness(100%);
        position: absolute;
        top: -29%;
        left: 0;
        right: 0;
        z-index: -1;
      }
    }
    .umbrella {
      width: 19%;
      height: auto;
      offset-path: path("M31 236 C88 84 190 45 199 124 Q245 291 453 25 450 179 557 201 494 314 788 218 757 365 898 442 650 460 890 580");
      animation: svg-move 3800ms infinite linear;
      position: absolute;
      bottom: 0;
    }
  }
}

.floor {
  .title {
    width: 100%;
    margin: 0 auto 0;
  }
  &:first-of-type {
    .title {
      width: 60%;
      margin: 0 auto 2%;
    }
  }
}


/*  電腦版其他尺寸 */
@include media-query("mobile", "992px") {
  #typhoon-container {
    .background {
      padding-bottom: 52vw;
      .title {
        width: 60%;
        top: 10vw;
        left: 23vw;
      }
    }
  }

  .floor {
    &:first-of-type {
      .title {
        width: 80%;
      }
    }
  }
}

/* 手機版 */
@include media-query("mobile", "576px") {
  #typhoon-container {
    .background {
      padding-bottom: 90vw;
      .title {
        width: 90%;
        top: 29vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .umbrella {
        width: 35%;
        bottom: 10%;
      }
    }
  }

  .floor {
    &:first-of-type {
      .title {
        width: 95%;
      }
    }
  }
}
</style>
