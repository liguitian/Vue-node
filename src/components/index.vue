<template>
  <div class="index">
	<!-- 顶部轮播 -->
	<div class="play">
		  <!-- Swiper -->
	  <div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1540036693,3082868215&fm=26&gp=0.jpg" alt=""></div>
	      <div class="swiper-slide"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3687275460,2552911267&fm=26&gp=0.jpg" alt=""></div>
	      <div class="swiper-slide"><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2713354457,2849533057&fm=26&gp=0.jpg" alt=""></div>
	      <div class="swiper-slide"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1985167276,2390730828&fm=26&gp=0.jpg" alt=""></div>
	    </div>
    <!-- Add Pagination -->
	    <div class="swiper-pagination"></div>
	  </div>
	</div>
	<!-- 顶部导航 -->
	<nav class="top">
		<div class="ul">
			<ul>
				<router-link to="/index/all" tag="li">全部</router-link>
				<router-link to="/index/good" tag="li">精华</router-link>
<!-- 				<router-link to="/index/weex" tag="li">weex</router-link> -->
				<router-link to="/index/share" tag="li">分享</router-link>
				<router-link to="/index/ask" tag="li">问答</router-link>
				<router-link to="/index/job" tag="li">招聘</router-link>
			</ul>
		</div>
	</nav>
		<transition>
			<router-view></router-view>
		</transition>
		
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
     
    }
  },
  mounted:function(){
  	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
        autoplay:true,
        loop:true
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*引入公共样式*/
@import '../assets/sass/base.scss';
.index{
	padding-top:rem(500px);
	padding-bottom:rem(110px);
	width:rem(750px);
}
/*轮播图*/
.play{
	width:100%;
	position:fixed;
	top:0;
	left:0;
	overflow:hidden;
	img{
		width:100%;
	}
}
	/*顶部导航*/
	nav.top{
		position:fixed;
		left:0;
		top:rem(420px);
		width:100%;
		background:#eee;
		overflow:auto;
		&::-webkit-scrollbar {
        display: none;
  	 }
		.ul{
			width:130%;
			height:rem(80px);
			ul{
				display:flex;
				height:rem(80px);
				justify-content:space-around;
				align-items:center;
				li{
					width:20%;
					font-size:rem(30px);
					text-align:center;
					border-radius:rem(10px);
				}
				.router-link-active{
					background:rgb(38, 97, 50);
        	color:#fff;
				}
			}	
		}
	}
</style>
