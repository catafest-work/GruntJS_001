# intro 

*Grunt is a command line Javascript task runner utilizing Node.js platform. It runs custom defined repetitious tasks and manages process automation.*

# create a new NodeJS project for GRUNT

- create a new NodeJS project and make all settings:

```mkdir GruntJS_001

cd GruntJS_001

GruntJS_001>npm node -v
9.6.6

GruntJS_001>npm install -g grunt-cli

GruntJS_001>npm init

GruntJS_001>npm install --save-dev grunt
```

# create javascript files 

 - create a new javascript file named 'Gruntfile.js' for tasks, plugins, load plugins, register tasks and more;

 - add grunt.registerTask to define a 'test_command' and use in the command shell to run like this: 'grunt test_command';

 - install concat plugin for grunt:

  ```npm install grunt-contrib-concat --save-dev```

 - create two folders named 'js' and 'css'; 

 - add content to these folders and this content will be concatened;

 - for this task is need to make settings available in the 'initConfig' area from 'Gruntfile.js';

 - create a folder named 'sass' in 'css' folder for compiling SASS files;

 - add Sass files named 'mixing.scss' and 'styles.scss' in this folder;

 - install sass plugin on NodeJS:

 ```
 npm install sass --save-dev
 npm install node-sass --save-dev
 npm install grunt-sass --save-dev
 
 ```