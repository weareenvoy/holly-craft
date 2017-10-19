/**
  - - - - -
  H O L L Y
  - - - - -
  ENVOYsites frontend Gulp build system and boilerplate.
  ** Craft 3 CMS Edition **
  @author ENVOY web development team
 */

global.config = require('./node_modules/envoy-holly/config')

// Craft-specific config overrides
var distRoot = './web/dist'
config.buildName = 'holly-craft'
config.runStandalone = false
config.paths.distRoot = distRoot
config.assets.paths.output = distRoot + '/assets'
config.styles.paths.output = distRoot + '/css'
config.scripts.paths.output = distRoot + '/js'

require('./node_modules/envoy-holly/buildsys')
