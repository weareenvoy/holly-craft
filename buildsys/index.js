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
var tasksPath = __dirname + '/tasks/'
if (fs.existsSync(tasksPath)) {
  var tasks = fs.readdirSync(tasksPath)
  tasks.forEach(function (task) {
    if (/\.js/.test(task)) {
      console.log(`holly-craft: Requiring task ${task}...`)
      require(`./tasks/${task}`)
    }
  })
}

/**
 * Require default gulp commands
 */
var taskList = require('./default-tasks')

// Append special tasks to base 'holly' tasks
if (taskList.length > 0) {
  global.taskList.push(taskList)
}

// Append 'watch' task for dev env
if (env === 'dev') {
  global.taskList.push('watch')
}

/* --- $ gulp --- */
gulp.task('default', function (cb) {
  return runSequence.apply(null, global.taskList)
})
