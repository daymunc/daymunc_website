var gulp = require('gulp');
var excel2json = require('gulp-excel2json');

// gulp.task('UpdateCountryAssignments', function(){
//
// 		gulp.src('static/assignments/CountryAssignments.xlsx')
// 			.pipe(excel2json({
// 				headRow: 1
// 			}).toJson)
// 			.pipe(gulp.dest('static/assets/'));
// });
//


convertExcel = require('excel-as-json').processFile;
convertExcel('static/assignments/CountryAssignments.xlsx', 'static/assets/CountryAssignments.json');


const imagemin = require('gulp-imagemin');

gulp.task('minify_images', () =>
	gulp.src('static/images/original/*')
		.pipe(imagemin())
		.pipe(gulp.dest('static/images/minified'))
);