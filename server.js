var express = require('express'),
    fs = require('fs'),
    compression = require('compression'),
    hbs = require('hbs'),
    url = require('url'),
    path = require('path'),
    mime = require('mime'),
    http = require('http');

var ASSETS_PATH = path.join(process.env.PWD, 'assets');

app = express();
app.use(compression());
app.set('port', (process.env.PORT || 9001));

// Serve a request for '/assets' from that folder rather than public build folder
// This route covers the mesh and shader files
app.use('/assets/*', function(req, res, next) {
  res.sendFile(path.resolve(ASSETS_PATH, req.params[0]));
});

// Error handlers
// move this into a module
// http://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs
// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"

// app.use(function(req, res, next) {
//   res.status(404);

//   // respond with html page
//   if (req.accepts('html')) {
//     res.render('404', { url: req.url });
//     return;
//   }

//   // respond with json
//   if (req.accepts('json')) {
//     res.send({ error: 'Not found' });
//     return;
//   }

//   // default to plain-text. send()
//   res.type('txt').send('Not found');
// });

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
    console.log('http://localhost:' + app.get('port'));
});