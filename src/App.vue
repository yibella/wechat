<template>
    <div class="weui-tab">
      <div class="weui-navbar">
        <div class="main-top">
          <div>微信</div>
          <div class="search">
            <router-link to="/search">
              <div style="display: inline-block;height: 100%;padding: 0 10px;">
                <i class="weui-icon-search" style="font-size: 20px;color: #fff;"></i>
              </div>
            </router-link>
          </div>
          <div style="font-size: 28px;">＋</div>
        </div>
      </div>
      <div class="weui-tab__bd" style="">
        <div class="weui-tab__bd-item weui-tab__bd-item--active main-bg">
          <router-view/>
        </div>
      </div>
      <div class="weui-tabbar">
        <router-link to="/weui" class="weui-tabbar__item">
          <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>-->
          <div class="weui-tabbar__icon">
            <img src="./assets/img/icon_nav_button.png" alt="">
          </div>
          <p class="weui-tabbar__label">微信</p>
        </router-link>
        <router-link to="/translation" class="weui-tabbar__item">
          <div class="weui-tabbar__icon">
            <img src="./assets/img/icon_nav_msg.png" alt="">
          </div>
          <p class="weui-tabbar__label">通讯录</p>
        </router-link>
        <router-link to="/find" class="weui-tabbar__item">
          <div class="weui-tabbar__icon">
            <img src="./assets/img/icon_nav_article.png" alt="">
          </div>
          <p class="weui-tabbar__label">发现</p>
        </router-link>
        <router-link to="/me" class="weui-tabbar__item">
          <div class="weui-tabbar__icon">
            <img src="./assets/img/icon_nav_cell.png" alt="">
          </div>
          <p class="weui-tabbar__label">我</p>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
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
  .search{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 50px;
    line-height: 50px;
    text-align: right;
  }
  .router-link-active .weui-tabbar__label{
    color: #04BE02;
  }
</style>
