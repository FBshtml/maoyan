<template>
	<div class="falls">
		<div class="list" v-for="datalist in cinemaList">
			<h1>{{datalist.nm}}</h1>
			<span class="span">{{datalist.sellPrice}}<span>元起</span></span>
			<p>{{datalist.addr}}<span>{{datalist.distance}}</span></p>
			<div class="spanParent">
				<span v-if="datalist.tag.allowRefund" class="blu">退</span>
				<span v-if="datalist.tag.buyout" class="blu">改签</span>
				<span v-if="datalist.tag.cityCardTag" class="yellow">小吃</span>
				<span v-if="datalist.tag.deal" class="yellow">折扣卡</span>
				
				<span v-if="datalist.tag.halltype" class="blu">厅</span>
			</div>
			
			<span v-if="datalist.tag.endorse" class="blue">卡</span>
			<span class="last">{{datalist.promotion.cardPromotionTag}}</span>


		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cinema',
  data(){
	return {
		cinemaList:[],
		// str:[
		// {"IMAX厅"}，
		// {"RealD 6FL厅"}，
		// {"4D厅"},
		// {'4DX厅'}
		// ]
	}
  },
   components:{
  	
  },
  mounted(){
  	axios.get('/ajax/cinemaList?day=2018-08-01&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1533121602991&cityId=65').then(res=>{
  	this.cinemaList=res.data.cinemas;
  	console.log(res.data.cinemas)
  })
  }
}
</script>

<style lang="scss" scoped>
	.falls{
		width: 95%;
		height: 7.5rem;
		margin: 0 auto;
		background:#fff;
		margin-top: 9.6875rem; 
		.list{
			margin-top: 1.25rem;
			border-bottom: 1px solid #ccc;
			padding-bottom: 1.25rem;

			h1{
				font-size: 1rem;
				display: inline-block;
				}
			.span{
			font-size: 1.125rem;
			color: #f3645f;
 				span{
					font-size: 0.875rem;
				}
			}

			p{
				width:18.75rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow:ellipsis;
				font-size: 0.75rem;
				margin-top: 0.3125rem;
				color: #a5a5a5;
				span{
					position: absolute;
					right: 0;
					width:3.125rem;
				}
			}
			.spanParent{
				margin-top: 0.1875rem;
				margin-bottom: 0.1875rem;
			}
			.spanParent span{
				border:1px solid #57c0f8;
				border-radius: 2px;
				color:#57c0f8;
				font-size: 0.75rem;
			}
			.blue{
				border:1px solid #57c0f8;
				background: #57c0f8;
				color: #b3e2fb;
				font-size: 0.75rem;


			}
			.last{
				font-size: 0.75rem;
				color: #9f9f9f;
			}
		}
	}

</style>

