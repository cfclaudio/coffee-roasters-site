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
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      mt: ['2em', '2em', 0],
      mb: ['2em', 55, 0],
      '>:not(:last-child)': { mr: [0, '3em'] },
      '>.nav-link': { my: ['1em', 0] }
    },
    footer: {
      display: 'flex',
      flexDirection: ['column', 'column', 'row'],
      justifyContent: 'space-between',
      alignItems: 'center',
      bg: 'secondary',
      color: 'white',
      py: 55,
      px: [30, 30, 60],
      mx: pageMargin,
      my: '4em'
    }
  }
};
