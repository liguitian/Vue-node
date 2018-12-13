<template>
  <div id="app">
    <transition >
      <router-view></router-view>
    </transition>

  <!-- 底部导航 -->
  <nav class="footer">
    <ul>
      <router-link to="/index" tag="li"><span class="iconfont icon-yinle"></span><p>首页</p></router-link>
      <router-link to="/num" tag="li"><span class="iconfont icon-xinwen"></span><p>公众号</p></router-link>
      <router-link to="/our" tag="li"><span class="iconfont icon-guanyuwomen"></span><p>我们</p></router-link>
    </ul>
  </nav>
  <!-- 底部导航 end -->  
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
/*引入公共样式*/
@import './assets/sass/base.scss';
.footer{
  width:100%;
  height:rem(90px);
  position:fixed;
  left:0;
  bottom:0;
  background:#eee;
  ul{
    width:100%;
    height:rem(90px);
    display:flex;
    li{
      width:33.333%;
      text-align:center;
      font-size:rem(30px);
      .iconfont{
        font-size:rem(45px); 
      }
    }
    .router-link-active{
        background:rgb(38, 97, 50);
        color:#fff;
      }
  }
}
.v-enter{
  opacity:0;
  transform:translateX(100%);
}
.v-leave-to{
  position:absolute;
  opacity:0;
  transform:translateX(-100%);
}
.v-enter-active,.v-leave-active{
  transition:all .5s;
}
</style>
