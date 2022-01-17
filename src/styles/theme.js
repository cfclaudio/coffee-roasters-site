const pageMargin = ["1.5em", "2em", "50px"];

export default {
  breakpoints: [
    // "@media screen and (max-width: 480px)",
    "@media screen and (min-width: 768px)",
    "@media screen and (min-width: 1440px)",
  ], // [mobile, tablet, desktop]
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
    default: {
      bg: ["pink", "blue", "purple"], // for testing
      mx: pageMargin,
    },
    navigation: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      my: "2em",
      mx: pageMargin,
    },
    navLinks: {
      display: "flex",
      ">:not(:last-child)": { mr: "3em" },
      ">.nav-link": {
        textTransform: "uppercase",
        color: "grey",
      },
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      bg: "secondary",
      color: "white",
      px: 80,
      py: 30,
      mx: pageMargin,
    },
  },
};
