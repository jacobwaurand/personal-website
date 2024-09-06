/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      // primary
      "primary": "#21a8fd",
      "primary-50": "#def2ff",
      "primary-100": "#d3eeff", // #d3eeff
      "primary-200": "#c8e9ff", // #c8e9ff
      "primary-300": "#a6dcfe", // #a6dcfe
      "primary-400": "#64c2fe", // #64c2fe
      "primary-500": "#21a8fd",
      "primary-600": "#1e97e4", // #1e97e4
      "primary-700": "#197ebe", // #197ebe
      "primary-800": "#146598", // #146598
      "primary-900": "#10527c", // #10527c
      // secondary | #10b769 
      "secondary": "#10b769",
      "secondary-50": "#dbf4e9", // #dbf4e9
      "secondary-100": "#cff1e1", // #cff1e1
      "secondary-200": "#c3edda", // #c3edda
      "secondary-300": "#9fe2c3", // #9fe2c3
      "secondary-400": "#58cd96", // #58cd96
      "secondary-500": "#10b769", // #10b769
      "secondary-600": "#0ea55f", // #0ea55f
      "secondary-700": "#0c894f", // #0c894f
      "secondary-800": "#0a6e3f", // #0a6e3f
      "secondary-900": "#085a33", // #085a33
      // tertiary | #09668f 
      "tertiary": "#09668f",
      "tertiary-50": "#dae8ee", // #dae8ee
      "tertiary-100": "#cee0e9", // #cee0e9
      "tertiary-200": "#c2d9e3", // #c2d9e3
      "tertiary-300": "#9dc2d2", // #9dc2d2
      "tertiary-400": "#5394b1", // #5394b1
      "tertiary-500": "#09668f", // #09668f
      "tertiary-600": "#085c81", // #085c81
      "tertiary-700": "#074d6b", // #074d6b
      "tertiary-800": "#053d56", // #053d56
      "tertiary-900": "#043246", // #043246
      // success | #27a404 
      "success": "#27a404",
      "success-50": "#dff1d9", // #dff1d9
      "success-100": "#d4edcd", // #d4edcd
      "success-200": "#c9e8c0", // #c9e8c0
      "success-300": "#a9db9b", // #a9db9b
      "success-400": "#68bf4f", // #68bf4f
      "success-500": "#27a404", // #27a404
      "success-600": "#239404", // #239404
      "success-700": "#1d7b03", // #1d7b03
      "success-800": "#176202", // #176202
      "success-900": "#135002", // #135002
      // warning | #d9b120
      "warning": "#d9b120", 
      "warning-50": "#f9f3de", // #f9f3de
      "warning-100": "#f7efd2", // #f7efd2
      "warning-200": "#f6ecc7", // #f6ecc7
      "warning-300": "#f0e0a6", // #f0e0a6
      "warning-400": "#e4c863", // #e4c863
      "warning-500": "#d9b120", // #d9b120
      "warning-600": "#c39f1d", // #c39f1d
      "warning-700": "#a38518", // #a38518
      "warning-800": "#826a13", // #826a13
      "warning-900": "#6a5710", // #6a5710
      // error | #9b2222 
      "error": "#9b2222",
      "error-50": "#f0dede", // #f0dede
      "error-100": "#ebd3d3", // #ebd3d3
      "error-200": "#e6c8c8", // #e6c8c8
      "error-300": "#d7a7a7", // #d7a7a7
      "error-400": "#b96464", // #b96464
      "error-500": "#9b2222", // #9b2222
      "error-600": "#8c1f1f", // #8c1f1f
      "error-700": "#741a1a", // #741a1a
      "error-800": "#5d1414", // #5d1414
      "error-900": "#4c1111", // #4c1111
      // surface
      "surface": "#424242",
      "surface-50": "#e3e3e3", // #e3e3e3
      "surface-100": "#d9d9d9", // #d9d9d9
      "surface-200": "#d0d0d0", // #d0d0d0
      "surface-300": "#b3b3b3", // #b3b3b3
      "surface-400": "#7b7b7b", // #7b7b7b
      "surface-500": "#424242", // #424242
      "surface-600": "#3b3b3b", // #3b3b3b
      "surface-700": "#323232", // #323232
      "surface-800": "#282828", // #282828
      "surface-900": "#202020", // #202020
      // transparent 
      "transparent": "rgba(0,0,0,0)"
    },
    fontFamily: {
      fantasy: ['fantasy'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      verdana: ['verdana']
    }
  },
  plugins: [],
}

