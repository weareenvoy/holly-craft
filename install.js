var fs = require('fs')

// console.log('dir: ' + process.cwd())

fs.writeFile('../../gulpfile.js', "require('./node_modules/holly/buildsys');", function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('Gulpfile created!')
})
