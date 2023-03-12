/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      fontSize: {
        dashboardIcons: "24px",
        dashboardText: "12px",
        dashboardNotificationFont: "8px"
      },
      colors: {
        dashboardGradientTop: "#39a4dc",
        dashboardGradientBottom: "#2763ab",
        dashboardEmployees: "#2765ac",
        dashboardPseudo: "#59c203",
        dashboardNotificationColor: "#ff6a6a"
      }
    },
  },
  plugins: [],
}
