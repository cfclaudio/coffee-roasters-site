import text from './text';

export default {
  primary: {
    ...text.h4,
    bg: 'primary',
    color: 'lightCream',
    borderRadius: 6,

    '&:hover': {
      cursor: 'pointer',
      bg: 'cyan'
    },
    '&:disabled': {
      bg: 'lightGrey'
    }
  }
};
