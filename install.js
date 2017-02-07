var fs = require('fs')

fs.readFile('./templates/gulpfile.tpl.js', 'utf8', function (err, data) {

  if (err) return console.log(err)

  // Write template file contents to new file
  fs.writeFile('../../gulpfile.js', data, function (err) {
    if (err) return console.log(err)
    console.log('Created gulpfile.js')
  })
})
