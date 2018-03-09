<template>
  <div>
    <div class="weui-panel weui-panel_access" style="margin-top: 20px">
      <!--<div class="weui-panel__hd">图文组合列表</div>-->
      <div class="weui-panel__bd">
        <router-link to="/me/user" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../assets/img/avatar.jpg">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">刘亦菲</h4>
            <p class="weui-media-box__desc">微信号：1232456789</p>
          </div>
          <div class="weui-media-box__ft"><i class="fa fa-qrcode fa-lg" style="color: #333;"></i></div>
        </router-link>
      </div>
    </div>
    <div class="weui-cells">
      <router-link to="/me/purse">
        <div class="weui-cell">
          <!--<div class="weui-cell__hd img-box"><img src="../../assets/img/gear.png"></div>-->
          <div class="weui-cell__hd img-box"><i class="fa fa-cc-visa fa-lg" style="color: #0FAEFF;"></i></div>
          <div class="weui-cell__bd default-color">
            <p>钱包</p>
          </div>
          <!--<div class="weui-cell__ft">说明文字</div>-->
        </div>
      </router-link>
    </div>
    <div class="weui-cells">
      <router-link to="/me/collection">
        <div class="weui-cell">
          <!--<div class="weui-cell__hd img-box"><img src="../../assets/img/gear.png"></div>-->
          <div class="weui-cell__hd img-box"><i class="fa fa-cube fa-lg" style="color: #0FAEFF;"></i></div>
          <div class="weui-cell__bd default-color">
            <p>收藏</p>
          </div>
          <!--<div class="weui-cell__ft">说明文字</div>-->
        </div>
      </router-link>
      <div class="weui-cell">
        <div class="weui-cell__hd img-box"><i class="fa fa-image fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>相册</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd img-box"><i class="fa fa-folder fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>卡包</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd img-box"><i class="fa fa-meh-o fa-lg" style="color: #0FAEFF;"></i></div>
        <div class="weui-cell__bd">
          <p>表情</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd img-box">
          <div class="weui-cell__hd img-box"><i class="fa fa-sun-o fa-lg" style="color: #0FAEFF;"></i></div>
        </div>
        <div class="weui-cell__bd">
          <p>设置</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
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
  .default-color{
    color: #333;
  }
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
