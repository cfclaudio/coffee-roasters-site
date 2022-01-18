import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import CoffeeLogo from './CoffeeLogo';
import CoffeeRoastersLogo from './CoffeeRoastersLogo';

function CompanyLogo({ color }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CoffeeLogo style={{ marginRight: '0.5em' }} />
      <CoffeeRoastersLogo color={color} />
    </Box>
  );
}

CompanyLogo.propTypes = {
  color: PropTypes.string
};

CompanyLogo.defaultProps = {
  color: 'text'
};

export default CompanyLogo;
