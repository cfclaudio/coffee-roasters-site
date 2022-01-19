import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import NavLink from './NavLink';

function NavLinks({ variant }) {
  return (
    <Box className={variant} variant={`sections.${variant}`}>
      <NavLink label="Home" href="/" />
      <NavLink label="About Us" href="/about-us" />
      <NavLink label="Create Your Plan" href="/create-your-plan" />
    </Box>
  );
}

NavLinks.propTypes = {
  variant: PropTypes.oneOf(['nav-links', 'footer-links'])
};

NavLinks.defaultProps = {
  variant: 'nav-links'
};

export default NavLinks;
