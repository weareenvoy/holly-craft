# HollyCraft

#### ENVOYsites Gulp build system and boilerplate for Craft 3.

## Requirements
**Node 6 recommended, tested on 6.9.5**

## Install
To get **holly** set up on your Craft 3 project, we recommend that Yarn package manager is installed on your machine. 
https://yarnpkg.com/en/docs/install

1. After Yarn is installed, open the terminal and `cd` to your project's root directory and install **holly** for Craft 3.

        yarn add weareenvoy/holly-craft

2. After successful installation, a `gulpfile.js` should automatically be generated at your project's root directory. 

3. Initialize **holly** and answer a few prompts to scaffold starter boilerplate files. 

        gulp init

## Usage

* `gulp`

    Start **holly** in *development* mode. Styles and scripts will *not* be minified. Starts up "watch" task. 

* `gulp --prod`

    Start **holly** in *production* mode. Styles and scripts will be minified.
