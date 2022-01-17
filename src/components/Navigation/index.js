import React from "react";
import { Box } from "theme-ui";
import { CompanyLogo } from "components";
import NavLink from "./NavLink";

export default () => (
  <Box className="navigation" variant="sections.navigation">
    <CompanyLogo />
    <Box className="nav-links" variant="sections.navLinks">
      <NavLink label="Home" href="/" />
      <NavLink label="About Us" href="/about-us" />
      <NavLink label="Create Your Plan" href="/create-your-plan" />
    </Box>
  </Box>
);
