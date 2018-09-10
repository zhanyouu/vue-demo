<template>
  <div id="app">
    <nav-header></nav-header>
    <div class='index-content'>
      <div class="index-navigation">
        <ul>
          <li><router-link to="/read">查看数据</router-link></li>
          <li><router-link to="/upload">上传数据</router-link></li>
          <li><a href="">下载数据</a></li>
        </ul>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
  export default{
    name:'App',
    components:{
      NavHeader,
      NavFooter
    }
  }
</script>
<style lang='scss' scoped>
  @import './../../assets/variable.scss';
  @import './../../assets/reset.css';
  .index-content{
    width:992px;
    height: 460px;
    margin: 20px auto;
    font-size: 0;
  }
  .index-content .index-navigation{
    display: inline-block;
    vertical-align: top;
    height: 100%;
    font-size: 14px;
  }
  .index-content .index-navigation>ul{
    box-sizing: border-box;
    list-style: none;
    height: 100%;
    width: 192px;
    padding: 20px 0;
    background-color: $fourth_border_color;
  }
  .index-content .index-navigation>ul>li{
    position: relative;
    transition: all .2s;
    cursor: pointer;
  }
  // .index-content .index-navigation>ul>li .glyphicon.glyphicon-menu-right{
	// 	padding-right: 10px;
	// 	float: right;
	// 	line-height: 36px;
	// 	color: #636363;
	// }
  .index-content .index-navigation>ul>li>a{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 152px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    color: $main_text_color;
    font-weight: bolder;
  }
  .index-content .index-navigation>ul>li:hover>a{
    text-decoration: none;
    color: $main_color;
  }
  .main-content{
    display: inline-block;
    width: 800px;
    height: 100%;
  }
.index-content .index-navigation>ul>li> .router-link-active{
  color: $main_color;
}
  </style>
