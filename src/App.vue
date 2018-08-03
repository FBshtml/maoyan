<template>
  <div> 
 
 <router-view></router-view>
<navbar></navbar>
  
  </div>
  
</template>

<script>
import navbar from "./components/common/navbar.vue"


export default {
  
  name: 'App',
  data(){
    return{
    	name:"猫眼电影"
    }
  },
  components:{
    navbar
  }

}
</script>

<style  >
*{
	margin:0;
	padding: 0;
}
</style>
