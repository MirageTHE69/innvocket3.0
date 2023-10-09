/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  flags: {
    QUERY_ON_DEMAND: false,
  },
  theme: {
    extend: {
      fontFamily: {
        leagueGothic: ["League Gothic", "sans"],
        InterTight:["InterTight","sans"]
      },
    },
  },
  plugins: [],
}
