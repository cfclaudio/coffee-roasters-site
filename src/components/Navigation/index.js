import React from 'react';
import { Box } from 'theme-ui';
import NavLinks from './NavLinks';
import CompanyLogo from '../CompanyLogo';

function Navigation() {
  return <Box className="navigation" variant="sections.navigation">
    <CompanyLogo />
    <NavLinks />
  </Box>
}

export default Navigation;
