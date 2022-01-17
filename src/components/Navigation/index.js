import React from "react";
import { Box } from "theme-ui";
import { CompanyLogo } from "components";
import NavLinks from "./NavLinks";

const Navigation = () => (
  <Box className="navigation" variant="sections.navigation">
    <CompanyLogo />
    <NavLinks />
  </Box>
);

export default Navigation;
