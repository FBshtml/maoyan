<template>
  <div> 
<ul class="list" v-for="datalist in filmList"  @click="handleClick(datalist.id)">
	<li><img :src="datalist.img" alt=""></li>
	<li>
	<ul class="right">
		<li class="name"><h4>{{datalist.nm}}</h4></li>
		<li class="sc">评分:{{datalist.sc}}</li>
		<li class="star">主演:{{datalist.star}}</li>
		<li class="star">{{datalist.showInfo}}</li>
	</ul>
	</li>
</ul>

  </div>
</template>

<script>
import router from "../router"
import axios from 'axios'
export default {
  name: 'film',
  data(){
  	return{
  		filmList:[]
  	}
  },
  methods:{	
  	handleClick(data){
				// console.log(data)
				router.push(`/detail/${data}`); // /detail/222
			}

  },

  mounted(){
  	axios.get('/ajax/movieOnInfoList?token=').then(res=>{
  	this.filmList=res.data.movieList;
  	console.log(res.data.movieList);

  	for(var i =0;i<this.filmList.length;i++){
		this.filmList[i].img=this.filmList[i].img.slice(0,22)+ "170.230" + this.filmList[i].img.slice(25)
		};		

  })
  }
}
</script>

<style scoped>
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
.list{
	height: 114px;
	padding:10px;
}
.right{
	
	padding-left: 30px;
	float: left;
	overflow: hidden;
}
.list{
	border-bottom: 1px solid #eee;

}
.name{

}
</style>
