export default {
  image: {
    borderRadius: 'card'
  },
  location: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  coffee: {
    display: ['grid', 'grid', 'block'],
    gridTemplateColumns: ['1fr', '1fr 1fr'],
    columnGap: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: ['center', 'center', 'start'],
    textAlign: ['center', 'left', 'center'],
    mb: '5em'
  },
  reason: {
    display: 'grid',
    gridTemplateColumns: ['1fr', 'auto 1fr', '1fr'],
    columnGap: '30px',
    alignItems: 'center',
    textAlign: ['center', 'left', 'center'],
    bg: 'primary',
    borderRadius: 8,
    margin: ['1em 2em', '1em 2em', '0 1em'],
    px: '3em',
    py: ['4em', '2em', '4em'],
    maxWidth: [null, '580px', '350px']
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    my: '2em'
  }
};
