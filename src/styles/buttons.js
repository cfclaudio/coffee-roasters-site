export default {
  primary: {
    // button typography
    fontWeight: 900,
    fontSize: 18,
    lineheight: 25,

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
