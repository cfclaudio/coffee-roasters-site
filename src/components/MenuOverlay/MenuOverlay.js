import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { HamburgerIcon } from '../icons';

function MenuOverlay() {
  const [isOverlayOpen, setIsOverlayOpen] = useState();
  console.log('isOverlayOpen', isOverlayOpen);

  return (
    <Box
      onClick={() => setIsOverlayOpen(true)}
      sx={{ display: ['block', 'none'] }}
    >
      <HamburgerIcon />
    </Box>
  );
}

MenuOverlay.propTypes = {};

export default MenuOverlay;
