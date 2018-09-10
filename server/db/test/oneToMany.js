let Sequelize=require('sequelize')
let connection=require('./../index')
//图像和帖子中都存在评论，属于1-n的关系
//帖子
const Post = connection.define('post', {
  title: Sequelize.STRING,
  text: Sequelize.STRING
});

//图像
const Image = connection.define('image', {
  title: Sequelize.STRING,
  link: Sequelize.STRING
});

//评论
const Comment = connection.define('comment', {
  title: Sequelize.STRING,
  commentable: Sequelize.STRING,
  commentableId: Sequelize.INTEGER
});

// Post.Comment=Post.hasMany(Comment);
// Image.Comment=Image.hasMany(Comment);
Post.Comment=Comment.belongsTo(Post);
Image.Comment=Comment.belongsTo(Image);
Post.sync({force:false});
Image.sync({force:false});
Comment.sync({force:false});

Comment.create({
  title:'commentTitle',
  post:{
    title:'postTitle'
  }
},{
  include:[
    {
      association:Post.Comment
    }
  ]
})

module.exports={Post,Image,Comment}
