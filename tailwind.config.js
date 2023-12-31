/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumslateblue: {
          "100": "#9966ff",
          "200": "#7556eb",
        },
        gray: {
          "100": "#0a2540",
          "200": "#072137",
          "300": "#181818",
        },
        dimgray: "#535354",
        whitesmoke: {
          "100": "#f4f8fb",
          "200": "#f1f1f1",
        },
        lightgray: "#d5d5d6",
        lightsteelblue: "#adbdcc",
        tomato: "#ff6154",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        xl: "20px",
        sm: "14px",
      },
    },
    fontSize: {
      "base-9": "16.9px",
      mid: "17px",
      "mid-3": "17.3px",
      "mid-4": "17.4px",
      lg: "18px",
      "mid-7": "17.7px",
      "xl-3": "20.3px",
      "mid-9": "17.9px",
      "mid-2": "17.2px",
      "xl-8": "20.8px",
      "mid-6": "17.6px",
      "8xl": "27px",
      "7xl-4": "26.4px",
      "22xl-8": "41.8px",
      "3xl-3": "22.3px",
      "3xl-7": "22.7px",
      "3xl-1": "22.1px",
      "22xl-4": "41.4px",
      "2xl-8": "21.8px",
      "3xl-5": "22.5px",
      "22xl-6": "41.6px",
      "6xl-9": "25.9px",
      "9xl": "28px",
      "22xl-1": "41.1px",
      "4xl-1": "23.1px",
      "3xl-9": "22.9px",
      "22xl-3": "41.3px",
      "base-5": "16.5px",
      "87xl-8": "106.8px",
      "17xl": "36px",
      "77xl-3": "96.3px",
      "88xl-2": "107.2px",
      "16xl-8": "35.8px",
      "17xl-5": "36.5px",
      "9xl-2": "28.2px",
      "17xl-2": "36.2px",
      "25xl-6": "44.6px",
      base: "16px",
      "4xs": "9px",
      "base-4": "15.4px",
      "base-6": "16.6px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
