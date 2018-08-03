<template>
	<div  v-if="filminfo">
		<div class="header">
			 <router-link tag="div" to="/film/nowplaying"><span><i class="iconfont icon-left"></i></span>{{filminfo.nm}} </router-link>
		</div>
      	<div v-if="filminfo">
<ul >
	<li><img :src="filminfo.img" alt=""></li>
	<li>
	<ul class="right">
		<li class="name"><h3>{{filminfo.nm}}</h3></li>
		<li class="sc">评分:{{filminfo.sc}}</li>
		<li class="star">主演:{{filminfo.star}}</li>
		<li class="star">{{filminfo.showInfo}}</li>
		<li class="star">{{filminfo.pubDesc}}</li>
		<li class="star">地区{{filminfo.src}}</li>
	</ul>
	</li>
</ul>
	</div>

	<ul class="cinemalist" v-if="filterCinemas" >本地上映影院：
		<li><div   v-if="filterCinemas" v-for="datalist,index  in filterCinemas">{{datalist.name}}</div></li>
	</ul>
</div>
</template>

<script>
import axios from "axios";
import router from "../router"
	export default {
		name:"detail",
		data(){
			return {
				filminfo:null,
				filterCinemas: [],
				filterdistrict:[]
			}
		},

		mounted(){
			//页面加载完 ，接受路由参数
			//console.log(this.$route.params.Tibbersid);
			//ajax请求数据
			axios.get(`/ajax/detailmovie?movieId=${this.$route.params.Tibbersid}`).then(res=>{
				// console.log(res.data);
				this.filminfo = res.data.detailMovie//
				//console.log(this.filminfo.nm);
				this.filminfo.img=this.filminfo.img.slice(0,22)+ "170.230" + this.filminfo.img.slice(25)
				//this.$store.dispatch("mytitleAction",this.filminfo.nm)
				//dispatch("对应哪个action？"，传的值);
			}),
			axios.get(`/ajax/filterCinemas?movieId=${this.$route.params.Tibbersid}`).then(res=>{
  				this.filterCinemas=res.data.brand.subItems;
  				this.filterdistrict=res.data.district.subItems;

  				console.log(res.data.brand.subItems)
  				console.log(res.data.district.subItems)
  				
  })
		}
	}
</script>

<style scoped>
.cinemalist{padding-top: 170px;
	margin-left: 20px;
}
.cinemalist li{
	


}
.header i{
	float: left;
	font-size: 24px;


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

li{list-style: none;}
img{
	float: left;
	height: 114px
}
.star{
	overflow: hidden;
	width: 220px;
}
.list{

	height: 114px;
	padding:10px;
}
.right{
	padding-left: 30px;
	float: left;
	overflow: hidden;
	height: 114px;
	
}
.list{
	border-bottom: 1px solid #eee;

}
</style>
