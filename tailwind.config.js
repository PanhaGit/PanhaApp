/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#aaa",
        customBlack: "#000",
        customWhite: "#F5F7F8",
      },
      backgroundColor: {
        bgCustomBlue: "#3572EF",
        bgCustomWhite: "#fff",
      },
      fontFamily: {
        Poppins: ["Poppins", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        btn_shadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        shadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;",
        shadowBtn:
          "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;",
      },
    },
  },
  plugins: [],
};
