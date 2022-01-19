import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Section from './Section';

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <Box as="main" sx={{ width: '100%' }}>
        {/* Test Banner */}
        <Section sx={{ height: 10, my: 0, bg: ['pink', 'blue', 'purple'] }} />
        {children}
      </Box>
      <Footer />
    </>
  );
}

PageLayout.propTypes = { children: PropTypes.node.isRequired };
