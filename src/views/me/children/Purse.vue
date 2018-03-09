<template>
  <div class="main-bg">
    <div class="weui-navbar" style="position: fixed;">
      <div class="main-top">
        <div ontouchend="history.back()" style="padding-right: 15px;"><i class="fa fa-arrow-left fa-lg" style="color: #fff;"></i></div>
        <div class="top-title">
          我的钱包
        </div>
        <div><i class="fa fa-th-large fa-lg" style="color: #fff;"></i></div>
      </div>
    </div>
    <div class="top-nav weui-flex">
      <div class="weui-flex__item">
        <div>
          <i class="weui-icon-success" style="color: #ffffff;"></i>
        </div>
        <div>
          收付款
        </div>
      </div>
      <div class="weui-flex__item">
        <div>
          <i class="fa fa-rmb fa-lg" style="color: #fff;"></i>
        </div>
        <div>
          零钱
        </div>
        <div>
          <p>￥8.88</p>
        </div>
      </div>
      <div class="weui-flex__item">
        <div>
          <i class="fa fa-credit-card fa-lg" style="color: #fff;"></i>
        </div>
        <div>
          银行卡
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">腾讯服务</div>
      <div class="weui-panel__bd">
        <div class="weui-grids">
          <router-link v-for="item in tencentServices" :key="item.index" :to="item.url" class="weui-grid js_grid">
            <div class="weui-grid__icon">
              <i :class="item.icon"></i>
            </div>
            <p class="weui-grid__label">
              {{item.label}}
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">第三方服务</div>
      <div class="weui-panel__bd">
        <div class="weui-grids">
          <router-link v-for="item in otherServices" :key="item.index" :to="item.url" class="weui-grid js_grid">
            <div class="weui-grid__icon">
              <i :class="item.icon"></i>
            </div>
            <p class="weui-grid__label">
              {{item.label}}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tencentServices: [
          {label: '信用卡还款',icon: 'fa fa-credit-card-alt fa-lg color1',url: ''},
          {label: '手机充值',icon: 'fa fa-mobile-phone fa-lg color2',url: ''},
          {label: '理财通',icon: 'fa fa-ravelry fa-lg color3',url: ''},
          {label: '生活缴费',icon: 'fa fa-tint fa-lg color1',url: ''},
          {label: 'Q币充值',icon: 'fa fa-qq fa-lg color2',url: ''},
          {label: '城市服务',icon: 'fa fa-umbrella fa-lg color1',url: ''},
          {label: '腾讯公益',icon: 'fa fa-sign-language fa-lg color4',url: ''}
        ],
        otherServices: [
          {label: '火车票机票',icon: 'fa fa-train fa-lg color1',url: ''},
          {label: '滴滴出行',icon: 'fa fa-car fa-lg color5',url: ''},
          {label: '京东优选',icon: 'fa fa-shopping-bag fa-lg color4',url: ''},
          {label: '美团外卖',icon: 'fa fa-motorcycle fa-lg color5',url: ''},
          {label: '电影演出赛事',icon: 'fa fa-qq fa-lg color4',url: ''},
          {label: '吃喝玩乐',icon: 'fa fa-cutlery fa-lg color5',url: ''},
          {label: '酒店',icon: 'fa fa-hospital-o fa-lg color4',url: ''},
          {label: '摩拜单车',icon: 'fa fa-bicycle fa-lg color4',url: ''},
          {label: '蘑菇街女装',icon: 'fa fa-female fa-lg color4',url: ''},
          {label: '58到家',icon: 'fa fa-home fa-lg color6',url: ''}
        ]
      }
    }
  }
</script>
<style scoped>
  .top-nav{
    margin-top: 49px;
    padding: 20px 0 10px 0;
    background-color: #686F78;
    color: #ffffff;
    text-align: center;
  }
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
    background: #686F78;
  }
  .top-title{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    /*text-align: right;*/
  }
  .weui-grid__icon{
    text-align: center;
  }
  .color1{
    color: #01B25E;
  }
  .color2{
    color: #478DC9;
  }
  .color3{/**理财通**/
    color: #429DD1;
  }
  .color4{
    color: #EC6066;
  }
  .color5{
    color: #F19333;
  }
  .color6{/**58到家**/
    color: #F06065;
  }
</style>
