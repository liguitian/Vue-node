<template>
  <div class="all">
		<list :type="type"></list>
  </div>
</template>

<script>
// 引入主题列表组件
import list from '@/components/topNav/list'
export default {
  name: 'all',
  data () {
    return {
      type:'all'
    }
  },
	components:{
		list
	 }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
