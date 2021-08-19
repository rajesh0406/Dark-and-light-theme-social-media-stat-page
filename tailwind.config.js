module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
       limegreen:"#1db489",
       brightred:"#dc414c",
       facebook:"#198ff5",
       twitter:"#1ca0f2",
       youtube:"#c4032a",
       light:{
        backgroundcolor:"#ffffff",
        bgpattern:"#f5f7ff",
        cardbg:"#f0f2fa",
        hovercard:"#d9def2",
        text1:"#63687e",
        text2:"#1e202a",
       },
       dark:{
        backgroundcolor:"#1e202a",
        bgpattern:"#1f212e",
        cardbg:"#252a41",
        hovercard:"#383f61",
        text1:"#8b97c6",
        text2:"#ffffff",
      
       },
       white:"#ffffff",
       black:"#000000"
      },
      
    extend: {
      fontFamily: {
        'Inter':['Inter','sans-serif']
      },
      backgroundImage: theme => ({
        dark:{toggle:"linear-gradient(to right, #378fe6 , #3eda82)"},
        light:{toggle:"#aeb3cb"},
        instagram:"linear-gradient(to right, #fdc468, #df4996)"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
