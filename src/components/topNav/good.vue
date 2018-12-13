<template>
  <div class="good">
		<list :type="type"></list>
  </div>
</template>

<script>
// 引入主题列表组件
import list from '@/components/topNav/list'
export default {
  name: 'good',
  data () {
    return {
    	type:'good'
    }
  },
 	components:{
		list
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
