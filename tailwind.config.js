module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00ca92',
          'primary-focus': '#19cf9c',
          'primary-content': '#ffffff',
          secondary: '#414a59',
          'secondary-focus': '#535b69',
          'secondary-content': '#ffffff',
          accent: '#00ca92',
          'accent-focus': '#19cf9c',
          'accent-content': '#ffffff',
          neutral: '#414a59',
          'neutral-focus': '#535b69',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#babdbf',
          'base-content': '#414a59',
          info: '#2c97de',
          success: '#00ca92',
          warning: '#ffc200',
          error: '#de1118',
        },
      },
    ],
  },
};
