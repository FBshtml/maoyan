<template>
  <div> 
	
<swipe class="my-swipe">
  <swipe-item class="slide1" v-for="datalist in loopList">
  	<img :src="datalist.img" alt=""></swipe-item>

</swipe>


	<ul class="list" v-for="datalist in comingList"   @click="handleClick(datalist.id)">
	<li><img :src="datalist.img" alt=""></li>
<li>	<ul class="right">
		<li class="name"><h4>{{datalist.nm}}</h4></li>
		<li class="sc">评分:{{datalist.sc}}</li>
		<li class="star">主演:{{datalist.star}}</li>
		<li class="star">{{datalist.showInfo}}</li>

	</ul></li>
</ul>

  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'
import router from "../router"
export default {
  name: 'App',
  data(){
  	return{
  		comingList:[],
  		loopList:[]
  	}
  },
  components:{

  	Swipe, SwipeItem

  },

   methods:{	
  	handleClick(data){
				// console.log(data)
				router.push(`/detail/${data}`); // /detail/222
			}

  },
   mounted(){
  	axios.get('/ajax/comingList?ci=65&token=&limit=10').then(res=>{
  	this.comingList=res.data.coming;
  //	console.log(res.data.coming);
  	for(var i =0;i<this.comingList.length;i++){
		this.comingList[i].img=this.comingList[i].img.slice(0,22)+ "170.230" + this.comingList[i].img.slice(25)}
	 })	

	axios.get('/ajax/mostExpected?ci=65&limit=10&offset=0&token=').then(res=>{
  	this.loopList=res.data.coming;
  	console.log(res.data.coming);
  	for(var i =0;i<this.loopList.length;i++){
		this.loopList[i].img=this.loopList[i].img.slice(0,22)+ "170.230" + this.loopList[i].img.slice(25)}
	 })			
  }

}
</script>

<style scoped>
.my-swipe {
  height:115px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.header{
	
	float: left;
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

li{list-style: none;}
img{
	float: left;
	height: 114px
}
.star{
	overflow: hidden;
	width: 220px;
}
.header{
	
	float: left;
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


.list{	border-bottom: 1px solid #eee;
	height: 114px;
	padding:10px;
}
.right{
	padding-left: 30px;
	float: left;
	overflow: hidden;
}
.list .name{

}
</style>
