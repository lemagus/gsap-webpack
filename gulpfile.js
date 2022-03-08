const gulp = require('gulp');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');

function bundle(done) {

    gulp.src('./src/index.js')
        .pipe(webpackStream(
            require('./gulp.webpack.config.js'),
            webpack
            ))
        .pipe(gulp.dest('dist/'));

    done();
}

exports.default = bundle;