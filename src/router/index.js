import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Num from '@/components/number'
import Our from '@/components/our'
// 二级导航组件
import All from '@/components/topNav/all'
import Good from '@/components/topNav/good'
import Weex from '@/components/topNav/weex'
import Share from '@/components/topNav/share'
import Ask from '@/components/topNav/ask'
import Job from '@/components/topNav/job'
// 引入详情页面
import Info from '@/components/topNav/info'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
      // 首页默认全部
    {path:'/index',redirect:'/index/all'},
    {path:'/index',component:Index,
    	children:[
    		{path:'all',component:All},
    		{path:'good',component:Good},
    		// {path:'weex',component:Weex},
    		{path:'share',component:Share},
    		{path:'ask',component:Ask},
    		{path:'job',component:Job},
        {path:'info/:id',component:Info}
    	]
	},	
    // 公众号
    {path:'/num',component:Num},
    // 关于我们
    {path:'/our',component:Our}
  ]
})
