/**
 * ./buildsys/index.js
 * Index of buildsys. Handles autoloading of all tasks and setting up environment.
 * @author Keenan Staffieri
 */

var fs = require('fs')

/**
 * Require all gulp tasks...
 */
// const tasks = fs.readdirSync('./buildsys/tasks/')
var tasks = fs.readdirSync(__dirname + '/tasks/')
tasks.forEach(function (task) {
  if (/\.js/.test(task)) {
    console.log(`holly-craft: Requiring task ${task}...`)
    require(`./tasks/${task}`)
  }
})
