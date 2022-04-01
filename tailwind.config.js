const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./public/*.html', './public/**/*.html'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
