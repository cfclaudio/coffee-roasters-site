import React from "react";
import { Box } from "theme-ui";
import { Image } from "theme-ui";

const CompanyLogo = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Image alt="company-logo" src="company-logo.png" />
    </Box>
  );
};

export default CompanyLogo;
