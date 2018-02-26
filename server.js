var express = require('express');
var useragent = require('express-useragent');
var app = express();

app.use(useragent.express());

app.get("/api/whoami", function(req, res, next) {
  var ipaddress = req.ip;
  var language = req.acceptsLanguages();
  //var software = req.get('User-Agent');
  var software = "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser;
  
  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
