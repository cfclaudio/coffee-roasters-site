import React from "react";
import { Box } from "theme-ui";
import { NavLinks, CoffeeRoastersLogo, CompanyLogo } from "components";

const Footer = () => {
  return (
    <Box as="footer" variant="sections.footer">
      <CompanyLogo color="white" />
      <NavLinks />
      {/* TODO: Add Social Links */}
    </Box>
  );
};

export default Footer;
