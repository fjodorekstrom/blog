
/*
 * GET home page.
 */

exports.index = function(req, res){
  articleProvider.findAll(function(error, docs){
  	res.render('index.jade',{
  		title: 'Blog',
  		articles: docs
  	});
  });
};