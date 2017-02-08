/**
 * ./buildsys/index.js
 * Index of buildsys. Handles autoloading of all tasks and setting up environment.
 * @author Keenan Staffieri
 */

var fs = require('fs')
var runSequence = require('run-sequence')

/**
 * Require all gulp tasks...
 */
var tasks = fs.readdirSync(__dirname + '/tasks/')
tasks.forEach(function (task) {
  if (/\.js/.test(task)) {
    console.log(`holly-craft: Requiring task ${task}...`)
    require(`./tasks/${task}`)
  }
})

/**
 * Require default gulp commands
 */
var taskList = require('./default-tasks')

// Append special tasks to base 'holly' tasks
taskList = global.taskList.push(taskList)

// Append 'watch' task for dev env
if (env === 'dev') {
  taskList.push('watch')
}

/* --- $ gulp --- */
gulp.task('default', function (cb) {
  return runSequence.apply(null, taskList)
})
