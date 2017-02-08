/**
 * ./buildsys/tasks/init.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Init
 * 'gulp init'
 */

/* $ gulp init */
gulp.task('init', function () {
  return gulp.src('./node_modules/holly-craft/templates/src/**/*')
    .pipe(gulp.dest(config.root))
})
