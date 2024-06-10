/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary: "#5d60c1",
      dark: "#1e1ele",
    light: "#f5f5f5",
  "lightBlue": "#dbedf7"
  },
  fontFamily:{
    sans:['Poppins','sans-serif']
  },
  container:{
    center:true,
    padding:{
      DEFAULT:"3rem",
      sm:"4rem"
    },

  },
},

    },
  plugins: [],
}