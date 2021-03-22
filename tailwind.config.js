const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./{components,pages}/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: "#2563EB",
        black: "#353535",
        red: "#EF4444",
        "off-white": "#FAFAFA",
        "dirty-white": "#F2F2F2",
        "faded-black": "#353535",
        
      },
      height: {
        112: "28rem",
      },
      rotate: {
        '-25': '-25deg',
      },
      boxShadow: {
        'thank-you': '-2.63365px 5.92572px 8.55938px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      // serif: ["'EB Garamond'", ...defaultTheme.fontFamily.serif],
      serif: ["Dystopian", ...defaultTheme.fontFamily.sans],
      headline: ["Dystopian", ...defaultTheme.fontFamily.sans],
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      borderRadius: ["hover"],
      fontStyle: ["hover"],
      textColor: ["checked"],
    },
  },
};
