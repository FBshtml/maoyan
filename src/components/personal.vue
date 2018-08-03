<template>
  <div> 

<div class="header">
	<div>猫眼电影</div>
</div>
	<ul class="nav">
	<router-link class="left" activeClass="Tibbers" tag="li" to="/personal/meituan">美团账号登陆</router-link>
		<router-link class="rigth" activeClass="Tibbers" tag="li" to="/personal/cellphone">手机验证登陆</router-link>

	</ul>
	

<router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'personal'
}
</script>

<style scoped>
.Tibbers{
	border-bottom: 3px solid #e54847;
	color: #e54847
}
.nav{
	font-weight: 700;
	display: flex;
width: 100%;
height:30px; 

}
.header{

	line-height: 50px;
	width: 100%;
	height: 50px;
	background:#e54847;
	position: relative;
	left: 0;
	top: 0;
	color: #fff;
	font-size:24px;
	text-align: center;
}
li{
	text-align: center;
	flex: 1;
	height:30px;
	line-height: 30px;
	list-style: none;
}
</style>
