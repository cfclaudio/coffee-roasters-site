import React from 'react';
import { Box } from 'theme-ui';
import NavLinks from '../Navigation/NavLinks';
import CompanyLogo from '../CompanyLogo';

function Footer() {
  return (
    <Box as="footer" variant="sections.footer">
      <CompanyLogo color="white" />
      <NavLinks />
      {/* TODO: Add Social Links */}
    </Box>
  );
}

export default Footer;
