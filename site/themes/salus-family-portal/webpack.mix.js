const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

mix.sass('sass/salus-family-portal.scss', 'css')
.options({
  processCssUrls: false,
  postCss: [ tailwindcss('./tailwind.js') ],
})

mix.browserSync({
  proxy: 'https://salus-family-portal.lndo.site',
  files: ["css/*.css", "js/*.js", "templates/*.*", "partials/*.*", "img/*.*", "layouts/*.*"]
});

mix.disableNotifications();

if (mix.inProduction()) {
    mix.purgeCss({
        enabled: true,
        globs: [
            path.join(__dirname, 'layouts/*.html'),
            path.join(__dirname, 'templates/*.html'),
            path.join(__dirname, 'templates/**/*.html'),
            path.join(__dirname, 'partials/*.html'),
            path.join(__dirname, 'partials/**/*.html'),
            path.join(__dirname, 'js/**.js'),
            path.join(__dirname, 'img/**.svg'),
        ],
        extensions: ['html', 'js', 'php', 'vue', 'svg'],
    })
};
