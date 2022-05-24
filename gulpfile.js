const gulp=require('gulp');
const browsersync=require('browser-sync').create();


gulp.task('server',function(){
    browsersync.init({
        server:{
            baseDir:'./build/'
        }
    })
})

