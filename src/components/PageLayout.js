import React from "react";
import { Box } from "theme-ui";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <Box as="main" sx={{ width: "100%" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
