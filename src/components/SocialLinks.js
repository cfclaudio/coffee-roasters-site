import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

function SocialLinks({ sx, ...props }) {
  return (
    <Box sx={{ '>svg': { mx: '12px' }, ...sx }} {...props}>
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </Box>
  );
}

SocialLinks.propTypes = { sx: PropTypes.shape() };
SocialLinks.defaultProps = { sx: {} };

export default SocialLinks;
