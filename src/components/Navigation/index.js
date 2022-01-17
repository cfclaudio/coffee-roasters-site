import React from "react";
import { Box, Paragraph } from "theme-ui";
import NavLink from "./NavLink";

export default () => (
  <Box className="navigation" variant="sections.navigation">
    <Paragraph variant="logo">coffeeroasters</Paragraph>
    <Box className="nav-links" variant="sections.navLinks">
      <NavLink label="Home" href="/" />
      <NavLink label="About Us" href="/about-us" />
      <NavLink label="Create Your Plan" href="/create-your-plan" />
    </Box>
  </Box>
);
