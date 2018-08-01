<template>
  <div> 
	<ul>
	<router-link tag="li" to="/film/nowplaying">正在热映</router-link>
		<router-link tag="li" to="/film/comingsoon">即将上映</router-link>

	</ul>
	

<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>

</style>
