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
      mb: '110px'
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      my: '2em',
      mx: pageMargin
    },
    'footer-links': {
      display: 'flex',
      flexDirection: ['column', 'row'],
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      mt: ['2em', '2em', 0],
      mb: ['2em', 55, 0],
      '>:not(:last-child)': { mr: [0, '3em'] },
      '>.nav-link': {
        my: ['1em', 0],
        '&:hover': { color: 'background' }
      }
    },
    'nav-links': {
      display: ['none', 'flex'],
      '>:not(:last-child)': { mr: [0, '3em'] },
      '>.nav-link': {
        '&:hover': { color: 'text' }
      }
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
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    '&.isHidden': {
      display: 'none'
    },
    '>.overlay-content': {
      position: 'fixed',
      bg: 'secondary',
      width: '80%',
      height: 'auto',
      top: '50%',
      left: '50%',
      transform: "translate('-50%', '-50%')",
      zIndex: 5
    }
  }
};
