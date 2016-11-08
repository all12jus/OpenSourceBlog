var _exp = {};
var Post = require('../models/posts');

_exp.postOne = function (req, res) {
  var post = new Post({
    title: 'New Post: ' + new Date(),
    content : "Random content:  " + new Date()
  });

  post.save(function (err, data) {
    if(err){
      return res.status(500).send({
        success : false,
        error : err
      });
    } else {
      return res.send({
        success : true,
        post : post
      });
    }
  });
}

_exp.getByID = function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err){
      console.log("blog.js",err);
      return res.status(500).send({
        success : false,
        error : err
      });
    } else {
      if(post == undefined){
        return res.status(404).send({
          success : false,
          error : "Not Found"
        });
      } else {
        return res.send({
          success : true,
          post : post
        });
      }
    }
  });
}
_exp.getAll = function (req, res) {
  Post.find(function (err, posts) {
    if(err){
      console.log("blog.js",err);
      return res.status(500).send({
        success : false,
        error : err
      });
    } else {
      if(posts == undefined){
        return res.status(404).send({
          success : false,
          error : "Not Found"
        });
      } else if(posts.length == 0) {
        return res.status(404).send({
          success : false,
          error : "None Found"
        });
      } else {
        return res.send({
          success : true,
          posts : posts
        });
      }
    }
  });
}

module.exports = _exp;