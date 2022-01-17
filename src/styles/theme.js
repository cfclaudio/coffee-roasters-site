const pageMargin = ["1em", "2em", "50px"];

export default {
  breakpoints: [
    // "@media screen and (max-width: 480px)",
    "@media screen and (min-width: 480px)",
    "@media screen and (min-width: 1440px)",
  ], // [mobile, tablet, desktop]
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#2C343E", // dark grey blue
    background: "#FEFCF7",
    primary: "#0E8784", // teal
    secondary: "#2C343E", // dark grey blue
    accent: "#FDD6BA", // pale orange
    grey: "#83888F",
    lightGrey: "#F4F1EB",
  },
  radii: {
    card: 10,
  },
  sections: {
    default: {
      mx: pageMargin,
      my: "80px",
      "&.first-section": { mt: 0 },
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
        display: ["none", "revert"],
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
  cards: {
    image: {
      objectFit: "cover",
      borderRadius: "card",
      overflow: "hidden",
    },
    location: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  },
};
