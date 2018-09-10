let Sequelize=require('sequelize')
let connection=require('./../index')
const User=connection.define('user',{
  jobNumber:{
    type:Sequelize.STRING
  },
  password:{
    type:Sequelize.STRING
  }
})

User.sync({force:false}).then(()=>{
  return User.create({
    jobNumber:'admin',
    password:'admin'
  })
})

module.exports=User