import React from "react";
import { Box } from "theme-ui";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <Box className="nav-links" variant="sections.navLinks">
      <NavLink label="Home" href="/" />
      <NavLink label="About Us" href="/about-us" />
      <NavLink label="Create Your Plan" href="/create-your-plan" />
    </Box>
  );
};

export default NavLinks;
