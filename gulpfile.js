var gulp = require("gulp"),
util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
log = util.log;

gulp.task("sass", function(){
	log("Generate CSS files " + (new Date()).toString());
    gulp.src('./scss/a.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest("./public/css"))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/css'));
});

var ejs = require('gulp-ejs');

gulp.task('ejs', function(){
    return gulp.src('./views/pages/*.ejs')
     .pipe(ejs({},{}, {ext:'.html'}))
     .pipe(rename({ extname: ".html" }))
     .pipe(gulp.dest('./public'))
  });