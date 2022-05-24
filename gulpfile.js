const gulp=require('gulp');
const browsersync=require('browser-sync').create();
const watch=require('gulp-watch');
const gulpSass=require('gulp-sass');
const dartSass=require('sass');
const sass=gulpSass(dartSass);
const autoprefixer=require('gulp-autoprefixer');
const sourcemaps=require('gulp-sourcemaps');
const plumber=require('gulp-plumber');
const notify=require('gulp-notify');
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


gulp.task('scss',function(callback){
    return gulp.src('./sass/style.scss')
    .pipe(plumber({
        errorHandler:notify.onError(function(err){
            return {
                title:'styles',
                sound:false,
                message:err.message
            }
        })
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
        overrideBrowserslid:['last 3 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
     callback()
})

gulp.task('default',gulp.parallel('server','watch','scss'))