<template>
  <div id="app">
   <nav-header></nav-header>
   <div class="index-content">
     <div class="index-navigation">
       <ul>
         <li>
           <a>电极层1</a>
           <i class='el-icon-arrow-right'></i>
           <div class="secondary-navigation">
             <dl>
               <dt>
                 <a>电极层1</a>
               </dt>
               <dd>
                 <a target="_blank" href="/bufferLayer1.html#/read">查看数据</a>
                 <a target="_blank" href="/bufferLayer1.html#/upload">上传数据</a>
                 <a target="_blank" href="javascript:;">下载数据</a>
               </dd>
             </dl>
           </div>
         </li>
         <li>
           <a target="_blank" href="/test.html">测试</a>
         </li>
       </ul>
     </div>
     <div class="img-slider">
        <div class="swiper-container">
          <el-carousel trigger="click" style="height:100%">
              <el-carousel-item>
                <img src="./assets/1.jpeg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img src="./assets/2.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img src="./assets/3.png" alt="">
              </el-carousel-item>
          </el-carousel>
        </div>
     </div>
   </div>
   <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from './../../components/NavFooter'
export default {
  name: 'App',
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
  .el-icon-arrow-right{
    margin: {
      right: 10px;
    }
    line-height: 36px;
    float: right;
  }
  .index-navigation .secondary-navigation{
    z-index: 9;
    display:none;
    position: absolute;
    width: 800px;
    left: 100%;
    top:0;
  }
  .index-content .index-navigation>ul>li:nth-last-child(-n+3) .secondary-navigation{
		bottom: 0;
		top: auto;
	}
  .index-content .index-navigation>ul>li:hover .secondary-navigation{
		display: block;
		background-color: $third_border_color;
	}
   .index-navigation .secondary-navigation>dl{
    display: block;
    margin: 10px;
    line-height: 20px;
  }
  .index-navigation .secondary-navigation>dl>dt{
    font-size: 14px;
    font-weight: bold;
    padding-right: 10px;
    columns: $common_text_color;
  }
  .index-navigation .secondary-navigation>dl>dd{
    font-size: 0;
    margin-top: 10px;
  }
  .index-navigation .secondary-navigation>dl>dd>a{
    display: inline-block;
    font-size: 14px;
    margin: 4px 0;
    padding: 0 20px 0 6px;
    border-left: 2px solid rgba(0,0,0,.4);
    color: $common_text_color;
    white-space: nowrap;
  }
  .index-navigation .secondary-navigation>dl>dd>a:hover {
		border-left: 2px solid $main_color;
		color: $main_color;
	}
  .index-content .img-slider{
    display: inline-block;
    vertical-align: top;
    width: 800px;
    height: 100%;
  }
  .swiper-container {
    height: 100%;
  }

  // .el-card.is-hover-shadow{
	// 	border: none;
	// 	&:hover{
	// 		box-shadow: none;
	// 	}
	// }

</style>
<style lang='scss' >
	// .el-card.is-hover-shadow{
	// 	border: none;
	// 	&:hover{
	// 		box-shadow: none;
	// 	}
	// }
  .el-carousel__container{
		height: 100%;
		.el-carousel__item{
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
