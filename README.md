# HollyCraft

#### ENVOYsites Gulp build system and boilerplate for Craft 3.

## Requirements
**Node 6 recommended, tested on 6.11**

## Install
To get **holly** set up on your Craft 3 project, we recommend that NPM 5 or greater is installed on your machine.

To check the installed version of NPM, run:

        npm -v

To upgrade NPM to the latest, run:

        npm install -g npm

1. Now, open the terminal and `cd` to your project's root directory and install **holly** for Craft 3.

        npm install envoy-holly-craft --save-dev

2. After successful installation, a `gulpfile.js` and `.gitignore` should be generated automatically at your project's root directory.

3. Initialize **holly** and answer a few prompts to scaffold starter boilerplate files. 

        gulp init

## Post-Install
After installing **holly**, the following entries should be added to the project's `.gitignore` file.

        /web/dist
        /node_modules

## Usage

* `gulp`

    Start **holly** in *development* mode. Styles and scripts will *not* be minified. Starts up "watch" task. 

* `gulp --prod`

    Start **holly** in *production* mode. Styles and scripts will be minified.
