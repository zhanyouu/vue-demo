let Sequelize=require('sequelize')
let connection=require('./../index')
const BufferLayer1=connection.define('bufferLayer1',{
  id:{
    type:Sequelize.BIGINT,
    autoIncrement:true,
    primaryKey:true,
    comment:"主键"
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false,
    comment:"姓名"
  },
  age:{
    type:Sequelize.STRING,
    allowNull:false,
    comment:"年龄"
  },
  province:{
    type:Sequelize.STRING,
    allowNull:false,
    comment:"省份"
  },
  city:{
    type:Sequelize.STRING,
    allowNull:false,
    comment:"城市"
  },
  address:{
    type:Sequelize.STRING,
    allowNull:false,
    comment:"地址"
  },
  post:{
    type:Sequelize.STRING,
    allowNull:false,
    comment:"邮编"
  }
})

const Picture=connection.define('picture',{
  id:{
    type:Sequelize.BIGINT,
    autoIncrement:true,
    primaryKey:true,
    comment:"主键"
  },
  picName:{
    type:Sequelize.STRING,
    comment:'照片的名字'
  },
  picUrl:{
    type:Sequelize.STRING,
    comment:'照片的url'
  }
})
Picture.BufferLayer1=BufferLayer1.hasOne(Picture);
// Picture.BufferLayer1=Picture.belongsTo(BufferLayer1);
BufferLayer1.sync({force:false});
Picture.sync({force:false});

module.exports={BufferLayer1,Picture}