let Sequelize=require('sequelize')
let connection=require('./../index')

const Post = connection.define('post', {
  title: Sequelize.STRING,
  text: Sequelize.STRING
});

const Tag=connection.define('tag',{
  name:Sequelize.STRING,
  status:Sequelize.STRING
})