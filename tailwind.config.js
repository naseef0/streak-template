/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        DEFAULT: "#fa3c7a",
        dark: "#c82e61",
      },
      secondary: "#000",
      tertiary: "#1799b0",
      red: {
        DEFAULT: "#D92832",
        light: "#F3C1C3",
      },
      green: {
        light: "#E7F3E3",
        dark: "#A1B999",
        darker: "#2C322B",
      },
      orange: {
        light: "#FFE7D2",
      },
      blue: {
        DEFAULT: "#4285F4",
        light: "#C8EAF4",
      },
      cyan: {
        DEFAULT: "#007AA0",
      },
      yellow: {
        light: "#FFFAC2",
      },
      orange: {
        light: "#FFE7D2",
      },
      pink: {
        DEFAULT: "#EC008C",
        light: "#FFE9F6",
      },
      gray: {
        DEFAULT: "#fafafa",
        100: "#f5f5f5",
        200: "#efefef",
        300: "#dedede",
        400: "#cccccc",
        500: "#8e8e8e",
        600: "#666666",
        700: "#787878",
        800: "#3a3a3a",
        900: "#242424",
      },
    },

    fontFamily: {
      primary: ['"Bembo"', "serif"],
      secondary: ['"Avenir"', "sans-serif"],
      "secondary-italic": ['"AvenirBI"', "sans-serif"],
    },

    fontSize: {
      xs: "0.625rem", //10px
      sm: "0.75rem", //12px
      base: "0.813rem", //14px
      md: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      h1: "3rem", //48px
      h2: "2rem", //32px
      h3: "1.75rem", //28px
      h4: "1.5rem", //24px
      h5: "1.375rem", //22px
      h6: "0.875rem", //14px
    },

    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "1.5rem",
      },

      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        xxl: "1200px",
      },
    },

    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      17: "4.25rem",
      18: "4.5rem",
      19: "4.75rem",
      20: "5rem",
    },

    borderRadius: {
      none: "0",
      sm: ".188rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
  },

  plugins: [],
};
