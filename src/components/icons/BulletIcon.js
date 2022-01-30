import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

function BulletIcon({ sx }) {
  return <Box
    sx={{
      border: '2px solid',
      borderColor: 'primary',
      borderRadius: '50%',
      height: 31,
      width: 31,
      bg: 'background',
      ...sx
    }}
  />
}

BulletIcon.propTypes = { sx: PropTypes.shape() };
BulletIcon.defaultProps = { sx: {} };

export default BulletIcon;
