var fs = require('fs')

var prjPath = '../..'

// Scaffold initial gulpfile
fs.readFile('./templates/gulpfile.tpl.js', 'utf8', function (err, data) {

  if (err) return console.error(err)

  // Write template file contents to new file
  fs.writeFile(prjPath + '/gulpfile.js', data, 'utf8', function (err) {
    if (err) return console.error(err)
    console.log('Created gulpfile.js')
  })
})
