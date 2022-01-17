import React from "react";
import { Box } from "theme-ui";
import { CompanyLogo } from "components";
import NavLinks from "./NavLinks";

export default () => (
  <Box className="navigation" variant="sections.navigation">
    <CompanyLogo />
    <NavLinks />
  </Box>
);
