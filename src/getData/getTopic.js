// 引入axios模块 ajax
import axios from 'axios'
// 创建基本请求
var $http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});
// 请求全部主题的数据方法
function getTopic(options,id){
	// 默认参数
	var newoption = Object.assign({
		tab:'all',
		limit:20,
		page:1
	},options)

	return $http({
		url:'/topics',
		params:newoption
	})
}
// 请求内容的数据
function getInfo(id){
return $http.get('/topic/'+id)
}


// 暴露方法
export {getTopic,getInfo}