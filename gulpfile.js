var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autofix', function() {
    gulp.src('css/sizing.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
    gulp.watch('css/sizing.css', ['autofix'])
})
