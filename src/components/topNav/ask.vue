<template>
  <div class="ask">
		<list :type="type"></list>
  </div>
</template>

<script>
// 引入主题列表组件
import list from '@/components/topNav/list'
export default {
  name: 'ask',
  data () {
    return {
    	type:'ask'
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
