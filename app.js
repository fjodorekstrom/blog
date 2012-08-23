
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , ArticleProvider = require('./articleprovider-mongodb').ArticleProvider;
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var articleProvider = new ArticleProvider('alex@mongohq.com', 10034);

app.get('/', routes.index);

app.get('/blog/new', routes.blog_new);

app.post('/blog/new',  routes.blog_new_post);

app.get('/blog/:id', routes.blog_show);

app.post('/blog/addComment', routes.add_comment);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
