/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img0: "url('./src/Assets/Items/bibimbap-4887417_1280.jpg')",
        img1: "url('./src/Assets/Items/burger-4967868_1280.jpg')",
        img2: "url('./src/Assets/Items/goulash-soup-3773134_1280.jpg')",
        img3: "url('./src/Assets/Items/indian-cuisine-8458954_1280.jpg')",
      },
      boxShadow: {
        "bg-shadow": "inset 20px 20px 100px 100px rgba(0, 0, 0,0.5)",
      },
    },
  },
  plugins: [],
};
