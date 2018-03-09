<template>
  <div class="weui-panel weui-panel_access">
    <!--<div class="weui-panel__hd">图文组合列表</div>-->
    <div class="weui-panel__bd">
      <router-link v-for="item in list" :key="item.index" :to="item.navigator" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="item.img">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">
            {{item.label}}
          </h4>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        list: [
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',label: '新的朋友',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',label: '群聊',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',label: '标签',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',label: '公众号',navigator: ''},
        ]
      }
    }
  }
</script>
<style scoped>
  .weui-media-box_appmsg .weui-media-box__hd{
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .weui-media-box{
    padding: 10px;
  }
</style>
