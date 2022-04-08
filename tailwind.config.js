const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./resources/views/*.{html,php}'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],

    corePlugins: {
        // preflight: false, // 预设样式开关
    },

    // prefix: 'tw-', // 自定义前缀
};
