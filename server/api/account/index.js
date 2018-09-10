var express=require('express');
var router=express.Router();
const Sequelize=require('sequelize');
let User=require('../../db/user/user')

router.post('/login',function(req,res,next){
  let jobNumber=req.body.jobNumber;
  let password=req.body.password;
  if(jobNumber==''||password==''){
    res.json({
      status:'1',
      msg:'工号或密码不能为空'
    })
  }else{
    User.findOne({where:{jobNumber,password}}).then(user=>{
      if(user){
        console.log(user.jobNumber);
          res.cookie("jobNumber",user.jobNumber,{
            path:'/',
            maxAge:1000*60*60
          });
          res.json({
            status:'0',
            msg:'',
            result:''
          });
    }else{
      res.json({
          status:'1',
          msg:'用户名或者密码错误',
          result:''
      });
    }
    })
  }
})
router.get('/logout',function(req,res,next){
  res.cookie('jobNumber','',{
    path:'/',
    maxAge:-1
  })
  res.json({
    status:'0',
    msg:'',
    result:''
  })
})
router.get('/checkLogin',function(req,res,next){
  if(req.cookies.jobNumber){
    res.json({
      status:'0',
      msg:'',
      result:req.cookies.jobNumber||''
    });
  }else{
    res.json({
      status:'1',
      msg:'当前未登录',
      result:''
    })
  }
})

module.exports = router;