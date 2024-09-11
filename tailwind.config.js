/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "0.5rem": "0.5rem",
        "0.7rem": "0.7rem",
        "1rem": "1rem",
        "2rem": "2rem",
        "2.5rem": "2.5rem",
        "4rem": "4rem",
        "4.5rem": "4.5rem",
        "5.5rem": "5.5rem",
        "6rem": "6rem",
      },
      colors: {
        skyblue: "rgba(224, 241, 255, 0.863)",
        navy: "rgb(32, 32, 36)",
        hoverNavy: "rgb(49, 49, 96)",
      },
      height: {
        "85vh": "85vh",
      },
      fontFamily: {
        content: ["content"],
      },
    },
  },
  plugins: [],
};
