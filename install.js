var fs = require('fs')
var path = require('path')
var ncp = require('ncp').ncp
var config = require('./config')

var prjPath = '../..'

ncp.limit = 16

// Scaffold initial gulpfile
fs.readFileSync('./templates/gulpfile.tpl.js', 'utf8', function (err, data) {

  if (err) return console.error(err)

  // Write template file contents to new file
  fs.writeFileSync(prjPath + '/gulpfile.js', data, function (err) {
    if (err) return console.error(err)
    console.log('Created gulpfile.js')
    copySourceFiles()
  })
})

function copySourceFiles () {
  ncp('./templates/src', prjPath + '/src', function (err) {
    if (err) return console.error(err)
    console.log('Copied over default source files.')
  })
}

// Scaffold initial source directories
// Root source directory
// var srcDir = path.relative(__dirname, config.root)
// if ( ! fs.existsSync(srcDir)) {
//   fs.mkdirSync(srcDir)
// }

// Styles
// if (! fs.existsSync(prjPath + config.styles.src)) {
//   fs.mkdirSync(prjPath + config.styles.src)
// }

// // Scripts
// if (! fs.existsSync(prjPath + config.scripts.src)) {
//   fs.mkdirSync(prjPath + config.scripts.src)
// }
