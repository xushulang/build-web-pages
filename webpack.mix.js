const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'js')
    .postCss('resources/css/app.css', 'css', [require('postcss-import'), require('tailwindcss')])
    .setPublicPath('public')
    .extract();

if (mix.inProduction()) {
    mix.version();
}
