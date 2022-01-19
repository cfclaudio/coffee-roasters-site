import React from 'react';
import { Box } from 'theme-ui';
import NavLinks from './NavLinks';
import CompanyLogo from '../CompanyLogo';

function Navigation() {
  return (
    <Box className="navigation" variant="sections.navigation">
      <CompanyLogo />
      <NavLinks variant="nav-links" />
    </Box>
  );
}

export default Navigation;
