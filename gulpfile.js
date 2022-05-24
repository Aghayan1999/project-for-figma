const gulp=require('gulp');
const browsersync=require('browser-sync').create();
const watch=require('gulp-watch');

gulp.task('watch',function(){
    watch(['./build/*.html','./build/css/**/*.css'],gulp.parallel(browsersync.reload))
})

gulp.task('server',function(){
    browsersync.init({
        server:{
            baseDir:'./build/'
        }
    })
})

gulp.task('default',gulp.parallel('server','watch'))