let Sequelize=require('sequelize')
let connection=require('./../index')

const UserInfo=connection.define('userInfo',{
  id:{
    type:Sequelize.BIGINT,
    autoIncrement:true,
    primaryKey:true,
    comments:"主键"
  },
  name:{
    type:Sequelize.STRING,
    allowNull:true,
    comments:'姓名'
  },
  age:{
    type:Sequelize.BIGINT,
    allowNull:false,
    comments:'年龄'
  },
  birthday:{
    type:Sequelize.STRING,
    allowNull:false,
    comments:'初生日期'
  }
});


const Picture=connection.define('picture',{
  id:{
    type:Sequelize.BIGINT,
    autoIncrement:true,
    primaryKey:true,
    comments:"主键"
  },
  desc:{
    type:Sequelize.STRING,
    allowNull:true,
    comments:'照片描述'
  },
  url:{
    type:Sequelize.STRING,
    allowNull:false,
    comments:'照片url'
  }
});
Picture.UserInfo=UserInfo.hasOne(Picture);
// Picture.UserInfo=Picture.belongsTo(UserInfo);
UserInfo.sync({force:false});
Picture.sync({force:false});
//函数调用者先建表
// Picture.create({
//   desc:'zy',
//   url:'zy.jpg',
//   userInfo:{
//     name:'zhanyou',
//     age:25,
//     birthday:'1993',
//   }
// },{
//   include:[
//     {
//       association:Picture.UserInfo
//     }
//   ]
// })
UserInfo.create({
  name:'zhanyou',
  age:25,
  birthday:'1993',
  picture:{
    desc:'zy',
    url:'zy.jpg',
  }
},{
  include:[
    {
      association:Picture.UserInfo
    }
  ]
})

module.exports={ UserInfo,Picture}