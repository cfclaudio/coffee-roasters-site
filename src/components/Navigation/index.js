import React from 'react';
import { Box } from 'theme-ui';
import NavLinks from './NavLinks';
import CompanyLogo from '../CompanyLogo';
import MenuOverlay from '../MenuOverlay/MenuOverlay';

function Navigation() {
  return (
    <Box className="navigation" variant="sections.navigation">
      <CompanyLogo />
      <NavLinks variant="nav-links" />
      <MenuOverlay />
    </Box>
  );
}

export default Navigation;
