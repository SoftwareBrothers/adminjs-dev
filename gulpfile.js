const { spawn } = require('child_process')
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const nodemon = require('gulp-nodemon')
const concat = require('gulp-concat')
const path = require('path')

gulp.task('sass', () => {
  gulp.src('packages/adminjs/src/frontend/styles/**/*.sass')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('packages/adminjs/src/frontend/assets/styles'))
})

gulp.task('js', () => {
  gulp.src(path.join('packages/adminjs/src/frontend/scripts/', '*.js'), { base: 'app' })
    .pipe(concat('app.js'))
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('packages/adminjs/src/frontend/assets/scripts'))
})

gulp.task('react', () => {
  gulp.src(path.join('packages/adminjs/src/frontend/app.js'), { base: 'app' })
    .pipe(concat('app.bundle.js'))
    .pipe(babel({
      presets: ['@babel/env', '@babel/react'],
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('packages/adminjs/src/frontend/assets/scripts'))
})

gulp.task('debug', () => {
  spawn('yarn', ['start'], { cwd: './', stdio: 'inherit' })
})

gulp.task('dbCreate', (done) => {
  spawn('yarn', ['run', 'sequelize', 'db:create'], { cwd: 'packages/adminjs-example-app/', stdio: 'inherit' })
    .on('close', () => {
      spawn('yarn', ['run', 'sequelize', 'db:migrate'], { cwd: 'packages/adminjs-example-app/', stdio: 'inherit' })
      .on('close', done)
    });
});

gulp.task('watch', () => {
  gulp.watch('packages/adminjs/src/frontend/styles/**/*.sass', ['sass'])
  gulp.watch('packages/adminjs/src/frontend/scripts/**/*.js', ['js'])
})

gulp.task('default', ['dbCreate', 'sass', 'js', 'watch', 'debug'])
