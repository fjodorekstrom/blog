exports.blog_new = function(req, res){
	res.render('blog_new.jade', {
		title: 'New Post'
	});
};