<template>
  <div class="weui-panel weui-panel_access" style="padding-bottom: 53px;">
    <!--<div class="weui-panel__hd">图文组合列表</div>-->
    <div class="weui-panel__bd">
      <router-link v-for="item in list" :key="item.index" :to="item.navigator" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="item.img">
          <span v-if="item.newsNums > 0" class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">{{item.newsNums}}</span>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">
            {{item.name}}
            <span class="weui-media-box__title-after">{{item.time}}</span>
          </h4>
          <p class="weui-media-box__desc">{{item.desc}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return{
        list: [//列表数据
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',name: '刘亦菲',desc: '小胡明天一起去看电影',newsNums: 3,time: '08:56',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar2.jpg',name: '胡歌',desc: '好的，什么时候？',newsNums: 3,time: '08:57',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar3.jpg',name: '秃驴',desc: '你好',newsNums: 0,time: '08:56',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',name: '刘亦菲',desc: '小胡明天一起去看电影',newsNums: 3,time: '08:56',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',name: '胡歌',desc: '小胡明天一起去看电影',newsNums: 3,time: '08:56',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',name: '刘亦菲',desc: '小胡明天一起去看电影',newsNums: 3,time: '08:56',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',name: '胡歌',desc: '小胡明天一起去看电影',newsNums: 3,time: '08:56',navigator: ''},
          {img: 'http://jqweui.com/dist/demos/images/avatar.jpg',name: '刘亦菲',desc: '小胡明天一起去看电影',newsNums: 3,time: '08:56',navigator: ''},
        ]
      }
    }
  }
</script>
<style>
  .weui-media-box{
    padding: 8px 15px;
  }
</style>
