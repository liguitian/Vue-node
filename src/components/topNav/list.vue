<template>
  <div class="list">
		<ul class="items">
			<li class="item" v-for="item in items" :key="item.id">
				<img :src="item.author.avatar_url" alt="">
				<div class="tab">
					<div class="mo" v-if="item.top">置顶</div>
					<div class="mo" v-else-if="item.good">精华</div>
					<div v-else>{{tabs[item.tab]}}</div>
				</div>
				<router-link :to="'/index/info/'+item.id" tag="div" class="title">{{item.title}}</router-link>
			</li>
		</ul>
		<infinite-loading @infinite="infiniteHandler" v-if="show"></infinite-loading>
		<p style="text-align:center;color:#999" v-if="!show">已经是最后一条数据咯，小老弟</p>
  </div>
</template>

<script>
// 引入获取数据模块
import {getTopic} from '@/getData/getTopic.js'
// 引入滑动分页组件
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'list',
  data () {
    return {
    	items:[],
      tabs:{
      weex:'weex',
      ask:'问答',
      share:'分享',
      job:'招聘'
    	},
    	i:1,
    	show:true
  	}
	},
	components:{
		InfiniteLoading
	},
	props:['type'],
	mounted:function(){
  	getTopic({tab:this.type}).then((response) =>{
  		this.items = response.data.data;
  		// console.log(this.items)
  		// console.log(response)

  	})
	},
	methods:{
		infiniteHandler($state) {
      setTimeout(() =>{
        getTopic({tab:this.type,limit:20,page:++this.i}).then((response) =>{
          this.items = this.items.concat(response.data.data);
          	if(response.data.data.length == 0){
          		this.show = false;
          		return;
          	}
            $state.loaded();
        });
      },1000)
    },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*引入公共样式*/
@import '../../assets/sass/base.scss';	
.items{
	width:rem(730px);
	margin:0 auto;
	/*margin-top:rem(500px);*/
	/*margin-bottom:rem(110px);*/
	.item{
		width:100%;
		height:rem(90px);
		display:flex;
		align-items:center;
		border-bottom:rem(2px) solid #999;
		img{
			width:rem(80px);
			border-radius:rem(10px);
			}
		.tab{
			margin:0 rem(20px);
			div{
				width:rem(80px);
				height:rem(50px);
				font-size:rem(25px);
        border-radius:rem(10px);
        text-align:center;
        line-height:rem(50px);
        border-radius:rem(10px);
       	background:#ccc;
       	color:#999;
			}
			.mo{
				 background:rgb(38, 97, 50);
	        	color:#fff;
				}
			}
		.title{
			font-size:rem(30px);
			flex:1;
      color:#333;
      overflow:hidden;
      white-space:nowrap;
      text-overflow:ellipsis;
		}
	}
}
</style>
