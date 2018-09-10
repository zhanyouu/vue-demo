var express=require('express')
var router=express.Router();
var path=require('path')
var fileUploadUtil=require('../../../utils/uploadFile')
var formidable=require('formidable')
var node_xlsx=require('node-xlsx')
var BufferLayer1=require('./../../db/bufferLayer1/bufferLayer1').BufferLayer1
var Picture=require('./../../db/bufferLayer1/bufferLayer1').Picture

//上传图片
router.post('/img', fileUploadUtil.upload(path.resolve(__dirname, '../../../attachment/BufferLayer1'), 'file'), fileUploadUtil.uploadRes)
//上传excel
router.post('/excel',function(req,res,err){
  let form=new formidable.IncomingForm()
  form.encoding='utf-8'
  form.parse(req,(err,fields,files)=>{
    let workbook=node_xlsx.parse(files.file.path)
    let data=workbook[0].data.slice(1)
    for(let item of data){
        BufferLayer1.create({
        name:item[0],
        age:item[1],
        province:item[2],
        city:item[3],
        address:item[4],
        post:item[5],
        picture:{
          picName:item[6]
        }
      },{
        include:[
          {
            association:Picture.BufferLayer1
          }
        ]
      })  
    }
    res.json({
      status:'0',
      msg:'',
      result:'sucess'
    })
    // res.send('sucess')
  })
})
router.get('/read',function(req,res,next){
  BufferLayer1.findAll().then(doc=>{
    let data=[];
    doc.forEach(element => {
      data.push(element.dataValues)
    });
    console.log(data);
    res.json({
      status:'0',
      msg:'',
      result:data
    })
  })
})

router.post('/readPicture',function(req,res,next){
  let buff_id=req.body.id;
  Picture.findOne({where:{id:buff_id}}).then(doc=>{
    if(doc){
      let picUrl=doc.picUrl;
      res.json({
        status:0,
        msg:'',
        result:picUrl
      })
    }else{
      res.json({
        status:1,
        msg:'',
        result:''
      })
    }
  })
})
module.exports=router