<template>
  <div class="main-bg">
    <!--顶部导航栏-->
    <div class="weui-navbar">
      <div class="main-top">
        <div style="padding-right: 15px;border-right: 1px solid #000;" ontouchend="history.back()"><i class="fa fa-arrow-left fa-lg" style="color: #fff;"></i></div>
        <div style="padding-left: 15px;">
          个人信息
        </div>
      </div>
    </div>
    <div class="weui-cells" style="margin-top: 70px;">
      <div class="weui-cell">
        <div class="weui-cell__hd">头像</div>
        <div class="weui-cell__bd"></div>
        <div class="weui-cell__ft img-box-lg"><img src="../../../assets/img/avatar.jpg"></div>
      </div>
      <div class="weui-cell">
        <!--<div class="weui-cell__hd img-box"><img src="../../../assets/img/gear.png"></div>-->
        <div class="weui-cell__bd">
          <p>昵称</p>
        </div>
        <div class="weui-cell__ft">第三方</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>微信号</p>
        </div>
        <div class="weui-cell__ft">123456789</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>二维码名片</p>
        </div>
        <div class="weui-cell__ft"><i class="fa fa-qrcode fa-lg" style="color: #333;"></i></div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>更多</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>我的地址</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>我的发票抬头</p>
        </div>
        <!--<div class="weui-cell__ft">说明文字</div>-->
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
  /*.child-page{*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*z-index: 9999;*/
  /*}*/
  .main-top{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    color: #fff;
    background: #383A3F;
  }
  .img-box-lg{
    width: 60px;
    height:60px;
  }
  .img-box-lg img{
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
</style>
