exports.blog_show = function(req, res){
  articleProvider.findById(req.params.id, function(error, article){
    res.render('blog_show.jade', {
      title: article.title,
      article:article
    });
  });
});