const express       = require('express')
      ,path         = require('path')
      ,bodyParser   = require('body-parser')
      ,ejs          = require('ejs')
      ,routes       = require('./routes')
      ,errorHandler = require('errorhandler')
      ,app          = express();

//to serve static files use express.static middleware

app.set( 'port', process.env.PORT || 3000 );
app.set( 'views',path.join( __dirname, 'views' ) );
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use( '/static', express.static( path.join( __dirname , 'public' ), { extensions :['html'] } ) );

app.use( '/', routes );


if( app.get('env') === 'development' ){
  app.use(errorHandler());
}

app.listen( app.get('port'), ()=>{
  console.log( 'Server is running on PORT :' + app.get('port') );
});
