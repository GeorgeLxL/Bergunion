// load the things we need
var express = require('express');
var app = express();
var sass = require('node-sass');
const fs = require('fs');
app.use(express.static(__dirname + '/public'));

sass.render({
    file:"scss/style.scss",
    outFile: "public/css/style.css",
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
      // No errors during the compilation, write this result on the disk
      fs.writeFile("public/css/style.css", result.css, function(err){
        if(!err){
          //file written on disk
        }
      });
    }
  });


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page

// about page
app.get('/', function(req, res) {
 
    res.render('pages/login');
});

app.get('/0', function(req, res) {
  res.render('pages/page0');
});

app.get('/1-2', function(req, res) {
  res.render('pages/page1-2');
});

app.get('/1-3', function(req, res) {
  res.render('pages/page1-3');
});

app.get('/1-4', function(req, res) {
  
  res.render('pages/page1-4');
});

app.get('/1-5', function(req, res) {
  res.render('pages/page1-5');
});

app.get('/1-6', function(req, res) {
  
  res.render('pages/page1-6');
});

app.get('/1-7', function(req, res) {
  res.render('pages/page1-7');
});

app.get('/1-8', function(req, res) {
  res.render('pages/page1-8');
});

app.get('/2-1', function(req, res) {

  res.render('pages/page2-1');
});

app.get('/2-2', function(req, res) {
  
  res.render('pages/page2-2');
});

app.get('/2-3', function(req, res) {
  res.render('pages/page2-3');
});

app.get('/3-1', function(req, res) {
  
  res.render('pages/page3-1');
});

app.get('/3-2', function(req, res) {
  res.render('pages/page3-2');
});

app.get('/3-3', function(req, res) {
  res.render('pages/page3-3');
});

app.get('/3-4', function(req, res) {
  res.render('pages/page3-4');
});

app.get('/3-5', function(req, res) {
  res.render('pages/page3-5');
});

app.get('/4-1', function(req, res) {

  res.render('pages/page4-1');
});

app.get('/4-2', function(req, res) {
  res.render('pages/page3-2');
});


app.get('/4-3', function(req, res) {

  res.render('pages/page4-3');
});

app.get('/4-4', function(req, res) {

  res.render('pages/page4-4');
});

app.get('/4-5', function(req, res) {
  res.render('pages/page4-5');
});

app.get('/5-1', function(req, res) {
  res.render('pages/page5-1');
});

app.get('/5-2', function(req, res) {

  res.render('pages/page5-2');
});

app.get('/5-3', function(req, res) {
  res.render('pages/page5-3');
});

app.get('/6-1', function(req, res) {
  res.render('pages/page6-1');
});

app.get('/6-2', function(req, res) {
  res.render('pages/page6-2');
});


app.get('/6-3', function(req, res) {
 
  res.render('pages/page6-3');
});

app.get('/7-1', function(req, res) {

  res.render('pages/page7-1');
});

app.get('/7-2', function(req, res) {
  res.render('pages/page7-2');
});

app.get('/7-3', function(req, res) {
  res.render('pages/page7-3');
});

app.get('/8-1', function(req, res) {
  res.render('pages/page8-1');
});

app.get('/8-2', function(req, res) {
  res.render('pages/page8-2');
});

app.get('/8-3', function(req, res) {

  res.render('pages/page8-3');
});

app.get('/8-4', function(req, res) {

  res.render('pages/page8-4');
});
app.listen(8080);
console.log('8080 is the magic port');