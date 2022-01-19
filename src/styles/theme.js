import buttons from './buttons';
import cards from './cards';
import colors from './colors';
import text from './text';

const pageMargin = ['1em', '2em', '50px'];

export default {
  buttons,
  cards,
  colors,
  text,
  breakpoints: [
    // "@media screen and (max-width: 480px)",
    '@media screen and (min-width: 480px)',
    '@media screen and (min-width: 1440px)'
  ], // [mobile, tablet, desktop]
  fonts: {
    body: 'Barlow, sans-serif',
    heading: 'Fraunces, serif'
  },
  fontWeights: {
    normal: 400,
    heavy: 900
  },
  radii: {
    card: 10
  },
  sections: {
    default: {
      mx: pageMargin,
      my: '80px',
      '&.first-section': { mt: 0 }
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      my: '2em',
      mx: pageMargin
    },
    navLinks: {
      display: 'flex',
      '>:not(:last-child)': { mr: '3em' },
      '>.nav-link': {
        textTransform: 'uppercase',
        color: 'grey',
        display: ['none', 'revert']
      }
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      bg: 'secondary',
      color: 'white',
      px: 80,
      py: 30,
      mx: pageMargin
    }
  }
};
