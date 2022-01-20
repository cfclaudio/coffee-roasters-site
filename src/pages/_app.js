import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'theme-ui';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.shape().isRequired
};

export default MyApp;
