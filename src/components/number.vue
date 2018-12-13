<template>
  <div class="number">
		<h1>关注领教学视频</h1>
		<img src="../../static/images/gzh_code.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'number',
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
	.number{
		width:100%;
		margin:0 auto;
		h1{
			text-align:center;
			padding:rem(20px) 0;
			background:rgb(38, 97, 50);
			color:#fff;
		}
		img{
			width:100%;
		}
	}
</style>
