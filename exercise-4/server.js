var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(8080, function(){
	console.log("Server started on http://localhost:8080");
});