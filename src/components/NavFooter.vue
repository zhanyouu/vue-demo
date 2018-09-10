<template>
  <footer class="footer">
    <div class="footer-text">
      <span>
        Copyright © {{year}} SHU All Rights Reserved.
      </span>
    </div>
  </footer>
</template>
<style>
.footer-text{
  border-top: 1px solid  #909399;
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  color:black
}
</style>

<script>
  export default{
    name:'Footer',
    data(){
      return {
        year:''
      }
    },
    created(){
      this.year=new Date().getFullYear()
    }
  }
</script>
