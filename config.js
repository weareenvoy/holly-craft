/**
 * ./config.js
 * Build system configuration object. 
 * @author Keenan Staffieri
 */

var srcRoot = './src'
var distRoot = './dist'

module.exports = {
  paths: {
    hollyRoot: __dirname,
    srcRoot: srcRoot,
    distRoot: distRoot
  },
  styles: {
    paths: {
      src: srcRoot + '/styles',
      output: distRoot + '/css'
    }
  },
  scripts: {
    paths: {
      src: srcRoot + '/scripts',
      output: distRoot + '/js'
    }
  }
}
