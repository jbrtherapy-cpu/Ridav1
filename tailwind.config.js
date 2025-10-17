
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        skysoft: '#EAF6FB',
        calmteal: '#6AA5A0',
        warmneutral: '#F7F4EE',
        deeptext: '#1F2D2E',
        sands: '#F5F2EE',
        sagesoft: '#8FB7B0'
      },
      fontFamily: {
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Georgia', 'serif']
      }
    }
  },
  plugins: []
}
