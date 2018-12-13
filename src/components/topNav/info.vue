<template>
  <div class="info">
  <!-- 头部信息 -->
 		<div class="title">
 			<div class="tab">
 				<div class="mo" v-if="items.top">置顶</div>
				<div class="mo" v-else-if="items.good">精华</div>
				<div v-else>{{tabs[items.tab]}}</div>
 			</div>
 			<div class="text">
 				<h1>{{items.title}}</h1>
 			</div>
 			<div class="author">
 				<ul>
 					<li>发布于 {{ctime}}</li>
 					<li>作者 {{author}}</li>
 					<li>{{items.visit_count}} 次浏览</li>
 					<li>来自 {{tabs[items.tab]}}</li>
 				</ul>
 			</div>
 		</div>
 		<!-- 详细内容 -->
 		<div class="content" v-html="items.content"></div>
 		<!-- 评论区 -->
 		<div class="replies">
 		<div style="background:#ccc;font-size:20px"><span>{{math}}</span><span>回复</span></div>
 			<ul>
 				<li v-for="(list,i) in items.replies" style="background:#eee;margin:20px 0" :key="list.id">
					<div class="msg">
						<img :src="list.author.avatar_url" alt="">
						<span>{{list.author.loginname}}</span>
						<span>{{i+1}}楼</span>
						<span>{{list.create_at.substring(0,10)}}</span>
					</div>
					<div v-html="list.content"></div>
 				</li>
 			</ul>
 		</div>
  </div>
</template>

<script>
// 引入获取数据模块
import {getInfo} from '@/getData/getTopic.js'
export default {
  name: 'Info',
  data () {
    return {
      items:[],
      tabs:{
      weex:'weex',
      ask:'问答',
      share:'分享',
      job:'招聘'
    	},
    	ctime:'',
    	author:'',
    	math:'',
    }
  },
  mounted:function(){
  	// console.log(this.$route.params.id)
		getInfo(this.$route.params.id).then((response) =>{
		this.items = response.data.data;
		// console.log(this.$route.params.id)
		 var str = response.data.data.create_at;
		this.ctime = str.substring(0,10);
		this.author = response.data.data.author.loginname;
		this.math = response.data.data.replies.length;
		// console.log(response)
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/*引入公共样式*/
@import '../../assets/sass/base.scss';
.info{
	width:rem(730px);
	margin:0 rem(10px);
	.title{
		padding-bottom:rem(20px);
		border-bottom:rem(2px) solid #999;
		.tab{
			div{
				width:rem(80px);
			border-radius:rem(10px);
			font-size:rem(25px);
			background:#ccc;
			color:#fff;
			text-align:center;
			}
			.mo{
				background:#fd5353;
				color:#fff;
			}
		}
		.text h1{
			text-align:center;
		}
		.author{
			margin:rem(10px) 0;
			font-size:rem(20px);
			color:#999;
			ul{
				display:flex;
				justify-content:space-around;
			}
		}
	}
	.content{
		overflow:hidden;
		padding:rem(50px) rem(20px);
		font-size:rem(20px);
		img{
			width:100%;
		}
	}
	.replies{
		overflow:hidden;
		padding-bottom:rem(30px);
		.msg{
			width:100%;
			height:rem(80px);
			display:flex;
			align-items:center;
			img{
				width:rem(60px);
			}
			span{
				font-size:rem(25px);
				margin:0 rem(20px);
				margin-bottom:rem(50px);
				color:#69f;
			}
		}
	}
}

</style>
