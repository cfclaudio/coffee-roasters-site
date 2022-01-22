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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    bg: 'primary',
    borderRadius: 8,
    margin: '1em 2em',
    padding: '5em 2em'
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    my: '2em'
  }
};
