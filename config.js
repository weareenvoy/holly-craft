/**
 * ./config.js
 * Build system configuration object. 
 * @author Keenan Staffieri
 */

var srcRoot = './src'
var distRoot = './web/dist'

module.exports = {
  paths: {
    hollyRoot: __dirname,
    srcRoot: srcRoot,
    distRoot: distRoot
  },
  assets: {
    paths: {
      src: srcRoot + '/assets',
      output: distRoot + '/assets'
    }
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
