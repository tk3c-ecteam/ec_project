<script>
  export default {
    props:{
      /*
      文字- :type="'text'"
      圖片- :type="'image'" 
      */
      type:{
        type:String
      }
    },
    data() {
      return {
        isOpen:false
      }
    },
    methods: {
      //開啟視窗
      openAlert() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
      },
      //關閉視窗
      closeAlert(event) {
        if (event.currentTarget.className == 'content') return false;
        this.isOpen = false;
        document.body.style.overflow = 'auto';
      }
    },
  }
</script>

<template>
  <!-- 彈出視窗 -->
  <div class="alert-box fixed w:full h:full left:0 right:0 top:0 bottom:0 m:auto z:999 bg:#000000b0" v-if="isOpen">
    <div :class="[type == 'image' ? 'img-content' : '' ]" class="content w:50% w:90%@<992 h:70% abs left:0 right:0 top:50% translateY(-50%) m:auto r:15px box:border-box overflow:hidden overflow-y:auto">
      <!-- 標題(有文字活動辦法才有標題) -->
      <div class="alert-header bg:#ffe400 sticky left:0 right:0 m:auto top:0 z:20" v-if="type == 'text'">
        <h1 class="f:1.5vw f:1.5rem@<992 f:bold p:5px|0|5px box:border-box">活動辦法</h1>
      </div> 
      <div class="alert-body bg:#fff p:2% p:4%@<576 box:border-box">
        <!-- 主內容 -->
         <!-- 圖片 -->
        <div class="w:90% m:auto" v-if="type == 'image'">
           <slot></slot>
        </div>
        <!-- 文字活動辦法 -->
         <div v-if="type == 'text'" class="alert-text w:full m:auto text:left">
            <slot></slot>
         </div>
      </div>
       <div class="bg:#ffe400 rb:15px box:border-box sticky left:0 right:0 m:auto bottom:0">
        <a class="rel z:10 f:1.5vw f:1.5rem@<992 f:bold pt:10px pt:5px@<576 box:border-box"
          @click="closeAlert">關閉</a>
      </div>
    </div>
    <div class="w:full h:full" @click="closeAlert"></div>
  </div>
</template>

<style lang="scss">
.alert-box {
  .img-content {
    width: 30%;
    height: auto;
    padding-top: 5%;
    box-sizing:border-box;
    overflow: hidden;
  }
 }
 .alert-text {
  .title {
    width: 100%;
    margin-bottom: 15px;
    font-weight: bold;
    color: #1559f9;
  }
  ul {
    justify-content: left;
    li {
      width: 100%;
      margin-bottom: 10px;
      text-align: left;
      box-sizing: border-box;
      &.last {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid gray;
        box-sizing: border-box;
      }
    }
  }
 }

 @include media-query("mobile", "992px") {
  .alert-box {
    .img-content {
      width: 90%;
    }
  }
 }
</style>