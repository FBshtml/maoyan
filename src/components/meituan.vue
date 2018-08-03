<template>
  <div> 

<div class="header">
 <div>
          <form id="logupdetail"  >
            <input type="" name="" placeholder="账户/手机号/E-mail" class="username" style="height:40px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;"><br>
            <input type="" name="" placeholder="请输入您的密码" class="password" style="height:40px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;"><br>
          </form>
          <button class="btn" style="width:355px;
			height:50px;
			background-color: #df2d2d;
			color: white;
			border:0;
			margin-top: 15px;
			margin-left: 10px;
			text-align: center;
			border-radius: 5px;">登录</button>
        </div>
</div>
	

<router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'film'
}
</script>

<style scoped>

</style>
