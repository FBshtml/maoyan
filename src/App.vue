<template>
  <div> 
 <router-view></router-view>



  <ul>
  	<router-link activeClass="Tibbers" tag="li" to="/film">
     <i  class="iconfont icon-dianying"></i>
    <div >电影</div>
    </router-link>
  	<router-link activeClass="Tibbers" tag="li" to="/cinema">
    <i  class="iconfont icon-tupian"></i>
    <div >影院</div>
    </router-link>
   	<router-link activeClass="Tibbers" tag="li" to="/personal">
     <i  class="iconfont icon-21"></i>
    <div >我的</div>
    </router-link>

  </ul>
  
  
  </div>
  
</template>

<script>
import cinema from"./components/cinema"
import film from"./components/film"
import personal from"./components/personal"


export default {
  name: 'App'
}
</script>

<style  scoped>

ul{padding-top: 8px; 
  border-top: 1px solid #ccc;
  position: fixed;
  bottom:0px;
  left: 0;
  width: 100%;
  height: 48px;}
ul li{
  float: left;
  list-style: none;
  width: 33.3%;
  height: 48px;}
  ul li div{
    height: 12px;
    line-height: 12px;
    margin-top:5px; 
    font-size: 12px;
  }
  i{
    margin-left: 0px;
    margin-bottom:3px; 
    display: block;
    height: 25px;
    width: 25px;
    font-size: 24px
  }
.Tibbers{
  color: red
}

</style>
