<template>
  <div class="our">
    <h1>关于我们</h1>
    <div class="about">
    	<p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
    	<p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
    	<p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
    	<p>社区目前由 @alsotang 在维护，有问题请联系：<a href="https://github.com/alsotang">https://github.com/alsotang</a></p>
    	<p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'our',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*引入公共样式*/
@import '../assets/sass/base.scss';
.our{
	width:100%;
	margin:0 auto;
	text-align:center;
	// padding-top:rem(100px);
	background:url(../../static/images/5.jpg)no-repeat;
	background-size:100%;
	.about{
		border-top:rem(2px) solid #999;
		border-bottom:rem(2px) solid #999;
		
		p{
			margin:rem(50px) 0;
			font-weight:bold;
		}
	}
	h1{
		margin-bottom:rem(50px);
		background:rgb(38, 97, 50);
			color:#fff;
		padding:rem(20px) 0;
	}
}
</style>
