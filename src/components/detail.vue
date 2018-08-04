<template>
	<div  v-if="filminfo">
		<div class="header">
			 <router-link tag="div" to="/film/nowplaying"><i class="iconfont icon-left"></i>{{filminfo.nm}} </router-link>
		</div>
      	<div v-if="filminfo">
<ul class="detail">
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
	<h4>剧情简介：</h4>
	<p class="p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{filminfo.dra}}</p>



	<div class="falls">
		<h4>上映地点：</h4>
		<div class="list" v-for="datalist in cinemaList">
			<div class="h1">{{datalist.nm}}</div> 
		
			<p class="addr">&nbsp;&nbsp;&nbsp;&nbsp;{{datalist.addr}}</p><div>{{datalist.distance}}</div>
			<div class="spanParent">
			
			
				
			</div>
			
			<!--<span v-if="datalist.tag.endorse" class="blue">卡</span>
			<span class="last">{{datalist.promotion.cardPromotionTag}}</span>-->


		</div>
	</div>
</div>
</template>

<script>
import axios from "axios";
import router from "../router"
	export default {
		name:"detail",
		data(){
			return {
				cinemaList:[],
				filminfo:null,
				filterCinemas: [],
				filterdistrict:[]
			}
		},

		mounted(){
			//页面加载完 ，接受路由参数
			//console.log(this.$route.params.Tibbersid);
			//ajax请求数据
				axios.get('/ajax/cinemaList?day=2018-08-01&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1533121602991&cityId=65').then(res=>{
  	this.cinemaList=res.data.cinemas;
  //	console.log(res.data.cinemas)
  })

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

  				//console.log(res.data.brand.subItems)
  				//console.log(res.data.district.subItems)
  				
  })
		}
	}
</script>

<style scoped>
h4{
	display: inline-block;
}

.falls{width: 95%;
		height: 120px;
		margin: 0 auto;
		background:#fff;                              
		margin-top: 50px;} 

.list{
margin-top: 10px;
	   border-bottom: 1px solid #ccc;
	   padding-bottom: 10px;}
.h1{font-size: 16px;
	font-weight: 600;
   display: inline-block;
				}
.span{font-size: 14px;
	  color: #f3645f;
	  margin-right: 50px}
.span span{font-size: 14px;
margin-right:-25px }

span{position: absolute;
	right: 0;
	width:50px;
				}


.spanParent span{	margin-top: 3px;
	margin-bottom: 3px;
	border:1px solid #57c0f8;
	border-radius: 2px;
	color:#57c0f8;
	font-size: 12px;
}

.detail{
	margin-left: 20px
}
.cinemalist{padding-top: 20px;
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
.p{
	color: #333;
margin-left: 10px}

li{list-style: none;}
img{
	float: left;
	height: 114px
}
.sc{
	font-weight: 600;
}
.star{
	overflow: hidden;
	width: 220px;
}
.list{

	height: 70px;
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
.addr{
	font-size: 12px;
	color: #555
}
</style>
