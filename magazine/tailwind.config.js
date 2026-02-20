module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'bg-pink-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-purple-200',
    'bg-red-200',
    'bg-indigo-200',
    'bg-orange-200',
    'p-4',
    'p-5',
    'p-6',
    'text-2xl',
    'text-3xl',
    'text-4xl',
  ],
};