import React from 'react';
import { Box } from 'theme-ui';
import NavLinks from './Navigation/NavLinks';
import CompanyLogo from './CompanyLogo';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <Box as="footer" variant="sections.footer">
      <CompanyLogo color="white" />
      <NavLinks variant="footer-links" />
      <SocialLinks />
    </Box>
  );
}

export default Footer;
