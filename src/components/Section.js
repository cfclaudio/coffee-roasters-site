import React from 'react';
import { Box } from 'theme-ui';

function Section(props) {
  return (
    <Box
      as="section"
      className="section"
      variant="sections.default"
      {...props}
    />
  );
}

export default Section;
