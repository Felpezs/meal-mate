import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: "0px",
      1: "0.3125rem",
      2: "0.625rem",
      3: "0.9375rem",
      4: "1.25rem",
      5: "1.5625rem",
      6: "1.875rem",
      7: "2.1875rem",
      8: "2.5rem",
      9: "2.8125rem",
      10: "3.125rem",
      11: "3.4375rem",
      12: "3.75rem",
      13: "4.0625rem",
      14: "4.375rem",
      15: "4.6875rem",
      16: "5rem",
    },
    fontSize:{
      xs:"0.625rem",
      sm: '0.8rem',
      base: '1rem',
      md:"1.25rem",
      lg: '1.563rem',
      xl: '1.938rem',
      '2xl': '2.438rem',
      '3xl': '3.063rem',
      '4xl': '3.813rem',
    },
    extend: {
      colors: {
        accent: {
          "500": "#BCED09",
          "900": "#4B5D0B",
        },
        primary: {
          "50": "#F6F0FB",
          "100": "#E2D1F2",
          "200": "#D3BBEC",
          "500": "#A06CD5",
        },
        purple: {
          light: {
            primary: "#F7EEFF",
            secondary: "#F0EFF2",
          },
          dark: {
            primary: "#250E39",
            secondary: "#4D4554",
          },
        },
        surface: {
          dark: "#272838",
          foreground: "#35374D",
          light: "#FDFDFF",
        },
        danger: {
          "50": "#F6E6E6",
          "100": "#E2B0B0",
          "500": "#A30000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
