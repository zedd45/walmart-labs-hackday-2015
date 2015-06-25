var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    serve = require('browser-sync'),
    sequence = require('run-sequence');

var paths = {
    entry: './client/app/app.js',
    output: './client',
    app: 'client/app/**/*.{js, html, styl}',
};

var webpackConfig = require('./webpack.config');

gulp.task('default', ['build']);

gulp.task('build', function () {
    return gulp.src(paths.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.output));
});


gulp.task('watch', function () {
    gulp.watch(paths.app, ['build']);
});
