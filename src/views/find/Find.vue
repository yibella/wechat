<template>
  <div>
    <div class="weui-cells">
      <router-link to="">
        <div class="weui-cell">
          <div class="weui-cell__hd img-box"><i class="fa fa-cc-visa fa-lg" style="color: #0FAEFF;"></i></div>
          <div class="weui-cell__bd" style="color: #333;">
            <p>朋友圈</p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <!--<div class="weui-cell__hd img-box"><img src="../../assets/img/gear.png"></div>-->
        <div class="weui-cell__hd img-box"><i class="fa fa-cube fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>扫一扫</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd img-box"><i class="fa fa-image fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>摇一摇</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <!--<div class="weui-cell__hd img-box"><img src="../../assets/img/gear.png"></div>-->
        <div class="weui-cell__hd img-box"><i class="fa fa-cube fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>看一看</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd img-box"><i class="fa fa-image fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>搜一搜</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd img-box">
          <div class="weui-cell__hd img-box"><i class="fa fa-sun-o fa-lg" style="color: #0FAEFF;"></i></div>
        </div>
        <div class="weui-cell__bd">
          <p>附近的人</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <!--<div class="weui-cell__hd img-box"><img src="../../assets/img/gear.png"></div>-->
        <div class="weui-cell__hd img-box"><i class="fa fa-cube fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>购物</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd img-box"><i class="fa fa-image fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>游戏</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd img-box">
          <div class="weui-cell__hd img-box"><i class="fa fa-sun-o fa-lg" style="color: #0FAEFF;"></i></div>
        </div>
        <div class="weui-cell__bd">
          <p>小程序</p>
        </div>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        // transitionName: 'slide-right'
      }
    },
    // watch:{
    //   '$route'(to,from){ //ES6新写法 和 '$route':fun()一样
    //     const toDepth = to.path.split('/').length
    //     const fromDepth = from.path.split('/').length
    //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //     console.log(this.transitionName)
    //   }
    // }
  }
</script>
<style scoped>
  .img-box{
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin-right: .8em;
    text-align: center;
  }
  .img-box img{
    width: 100%;
    max-height: 100%;
    vertical-align: top;
  }
  .child-view {
    position: absolute;
    top: 0;
    bottom: 0;
    width:100%;
    transition: all .6s cubic-bezier(.55,0,.1,1);
    z-index: 9999;
  }
  /*.slide-left-enter, .slide-right-leave-active {*/
  /*!*opacity: 0;*!*/
  /*-webkit-transform: translate(100%, 0);*/
  /*transform: translate(100%, 0);*/
  /*}*/
  /*.slide-left-leave-active, .slide-right-enter {*/
  /*!*opacity: 0;*!*/
  /*-webkit-transform: translate(-100%, 0);*/
  /*transform: translate(-100%, 0);*/
  /*}*/

  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all .6s ease;
  }
  .slide-fade-leave-active {

    transition: all .8s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    transform: translateX(100%);
    opacity: 1;
  }
</style>
