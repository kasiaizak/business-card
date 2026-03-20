"use strict";

import gulp from "gulp";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import browserSync from "browser-sync";
import gulpSass from "gulp-sass";
import dartSass from "sass";

const gulpSassCompiler = gulpSass(dartSass);
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import fs from 'fs';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import webpackStream from 'webpack-stream';

const errorHandler = (err) => {
    notify.onError({
      title: `Gulp error in ${err.plugin}`,
      message: err.toString()
    })(err);
}

export const assets = function() {
  return gulp
    .src("./src/assets/**/*", { encoding: false })
    .pipe(gulp.dest("./dist/assets"));
};

export const html = function() {
  return gulp
    .src("./src/content/**/*.html")
    .pipe(
      plumber(errorHandler)
    )
    .pipe(gulp.dest("./dist/"));
};

export const js = function() {
  return gulp
    .src("src/js/main.js")
    .pipe(
      plumber(errorHandler)
    )
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(uglify())
    .on('error', errorHandler)
    .pipe(gulp.dest("dist/js"));
};

export const sass = () => {
  return gulp
    .src("./src/scss/main.scss")
    .pipe(
      plumber({
        errorHandler: function(err) {
          notify.onError({
            title: `Gulp error in ${err.plugin}`,
            message: err.toString()
          })(err);
        }
      })
    )
    .pipe(sourcemaps.init())
    .pipe(gulpSassCompiler())
    .on("error", gulpSassCompiler.logError)
    .pipe(
      postcss([
        autoprefixer({ grid: true })
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
};

export const serve = gulp.series(gulp.parallel(sass, html, js, assets), (done) => {
  browserSync.init({
    server: "./dist",
    open: true // set to false to disable browser autostart
  });
  gulp.watch("src/scss/**/*", gulp.series(sass));
  gulp.watch("src/content/**/*.html", gulp.series(html));
  gulp.watch("src/js/*.js", gulp.series(js));
  gulp.watch("src/assets/**/*", gulp.series(assets));
  gulp.watch("dist/**/*").on("change", browserSync.reload);
  done();
});

import { execSync } from 'child_process';

export const build = gulp.series(sass, html, js, assets);

export const test = gulp.series(build, (done) => {
  execSync('node scripts/validate-png-headers.js', { stdio: 'inherit' });
  done();
});

export default gulp.series(serve);
