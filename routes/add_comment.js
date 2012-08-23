export.add_comment = function(req, res){
  articleProvider.addCommentToArticle(req.param('_id'), {
    person: req.param('person'),
    comment: req.param('comment'),
    created_at: new Date()
  }, function(error, docs){
    res.redirect('/blog/' + req.param('_id'));
  });
});