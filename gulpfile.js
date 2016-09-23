var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src';
elixir.config.sourcemaps = false;

elixir(function (mix) {
    mix.browserify('main.js')
        .less('main.less')
        .copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'dist/css/bootstrap.min.css')
        .copy('node_modules/dragula/dist/dragula.min.css', 'dist/css/dragula.min.css')
        .copy('node_modules/bootstrap/dist/fonts', 'dist/fonts')
        .browserSync({
            proxy: null,
            server: {
                baseDir: './'
            },
            open: false
        });
});
