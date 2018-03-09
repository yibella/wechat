<template>
  <div class="page">
    <!--顶部导航栏-->
    <div class="weui-navbar">
      <div class="main-top">
        <div style="padding-right: 15px;border-right: 1px solid #000;" ontouchend="history.back()"><i class="fa fa-arrow-left fa-lg" style="color: #fff;"></i></div>
        <div style="padding-left: 15px;">
          我的收藏
        </div>
        <div class="search">
          <!--<router-link to="/search">-->
            <div style="display: inline-block;height: 100%;padding: 0 10px;">
              <i class="weui-icon-search" style="font-size: 20px;color: #fff;"></i>
            </div>
          <!--</router-link>-->
        </div>
        <div style="font-size: 28px;">＋</div>
      </div>
    </div>
    <ul class="collec-list">
      <li v-for="item in collections">
        <router-link to="" >
          <div class="weui-media-box weui-media-box_appmsg" style="padding-bottom: 5px;">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb label-img" :src="item.img">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="two-title">
                {{item.title}}
              </h4>
            </div>
          </div>
          <div class="btm-txt">
            <span>{{item.type}}</span>
            <span>{{item.time}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        collections: [
          {img: 'http://p0.so.qhimgs1.com/t011828c4b13276c89c.jpg' ,title: '2017年崛起的JS项目', type: '前端早读课', time: '2018-1-21'},
          {img: 'http://img12.dayoo.com/travel/attachement/jpg/site1/20120731/001372af5835118177ed04.jpg' ,title: '2017年崛起的JS项目', type: 'JavaScript', time: '2018-1-21'},
          {img: 'http://upload.17u.net/uploadpicbase/2014/6/3/aa/201406030436307235.jpg' ,title: '【第1176期】2017年JavaScript明星项目', type: '前端早读课', time: '2018-1-2'},
          {img: 'http://p3.so.qhimgs1.com/bdr/200_200_/t01c249c607e6cd2783.jpg' ,title: '2017年崛起的JS项目', type: 'JavaScript', time: '2018-1-21'},
          {img: 'http://www.86ps.com/uploadfiles/jpg/2011-9/2011092914224556291.jpg' ,title: '2017年崛起的JS项目', type: '前端早读课', time: '2018-1-21'},
          {img: 'http://img03.taobaocdn.com/bao/uploaded/i3/TB1SB.pLXXXXXcBXVXXXXXXXXXX_!!0-item_pic.jpg_300x300.jpg' ,title: '2017年崛起的JS项目', type: 'JavaScript', time: '2018-1-21'}
        ]
      }
    }
  }
</script>
<style scoped>
  .page{
    /*padding: 0 15px;*/
    background-color: #EAEBEB;
  }
  .collec-list{
    margin: 50px 15px 0 15px;
  }
  .collec-list li{
    margin-top: 10px;
    background-color: #ffffff;
  }
  .btm-txt{
    padding: 0 0 15px 15px;
    color: #999;
  }
  .label-img{
    width: 100%;
    height: 100%;
  }
  .two-title{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
