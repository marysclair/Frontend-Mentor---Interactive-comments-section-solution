/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-rubik)",
      },
    },
    colors: {
      verylightgray: "hsl(228, 33%, 97%)",
      grayishblue: "hsl(211, 10%, 45%)",
      white: "hsl(0, 0%, 100%)",
      darkblue: "hsl(212, 24%, 26%)",
      moderateblue: "hsl(238, 40%, 52%)",
      lightgray: "hsl(223, 19%, 93%)",
      softred: "hsl(358, 79%, 66%)",
      lightgrayishblue: "hsl(239, 57%, 85%)",
    },
  },
  plugins: [],
};
