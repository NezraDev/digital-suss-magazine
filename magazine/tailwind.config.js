module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        logo: {
          primary: "#0d3b66",
          "primary-hover": "#0a2f52", // darker
          secondary: "#92140c",
          "secondary-hover": "#75100a", // darker
        },
        accent: {
          cream: "#c8b9a6",
          "cream-hover": "#aa9d8d", // darker
          rose: "#ecdfdb",
          "rose-hover": "#c9beba", // darker
          mint: "#f1faee",
          "mint-hover": "#cdd5ca", // darker
          teal: "#58a4b0",
          "teal-hover": "#46838d", // darker
          green: "#0c7c59",
          "green-hover": "#0a6347", // darker
          gold: "#f4d35e",
          "gold-hover": "#c3a94b", // darker
        },
        page: {
          background: "#fff8f0",
          "background-hover": "#e6dfd8", // darker
          text: "#1e1e24",
          "text-hover": "#18181d", // darker
          dark: "#2b303a",
          "dark-hover": "#22262e", // darker
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "bg-pink-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-red-200",
    "bg-indigo-200",
    "bg-orange-200",
    "p-4",
    "p-5",
    "p-6",
    "text-2xl",
    "text-3xl",
    "text-4xl",
  ],
};
