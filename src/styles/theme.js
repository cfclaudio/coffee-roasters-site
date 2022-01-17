export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#2C343E",
    background: "#FEFCF7",
    primary: "#0E8784", // teal
    secondary: "#2C343E", // dark blue
    accent: "#FDD6BA", // salmon
    grey: "#83888F",
    lightGrey: "#F4F1EB",
  },
  sections: {
    navigation: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      my: "2em",
    },
    navLinks: {
      display: "flex",
      ">:not(:last-child)": { mr: "3em" },
      ">.nav-link": {
        textTransform: "uppercase",
      },
    },
  },
  text: {},
};
