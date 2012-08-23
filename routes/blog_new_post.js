exports.blog_new_post = function(req, res){
  articleProvider.save({
    title: req.param('title'),
    body: req.param('body')
	}, function(error, docs){
		res.redirect('/');
	});
};