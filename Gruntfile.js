module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: { 
          options: { 
            browsers: ["last 2 version", "ie 10"] 
        }, 
          style: { 
            src: "source/css/style.css" 
          }
        },

        sass: {
          style: {
            files: {
              'source/css/style.css': 'source/sass/style.scss'
            }
          }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('do', 
      ['sass',
      'autoprefixer'
      ]);

};
