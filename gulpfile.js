const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));

gulp.task("message", async () => {
  return console.log("Message");
});

gulp.task("compress", async () => {
  return gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
});

gulp.task("sass", async () => {
  return gulp
    .src("src/assets/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("default", gulp.series("message", "compress", "sass"));
