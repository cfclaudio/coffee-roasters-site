import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components';
import { Card, Image, Paragraph, Heading, Box } from 'theme-ui';

function CoffeeCard({ title, description, src }) {
  return (
    <Card className="coffee-card" variant="coffee">
      <Image
        src={src}
        alt={`image-${title}`}
        sx={{
          maxWidth: ['200px', '255px'],
          justifySelf: ['center', 'right', 'center']
        }}
      />
      <Box sx={{ alignSelf: ['start'] }}>
        <Heading
          sx={{
            my: ['0.8em', '1em'],
            fontSize: '24px',
            lineHeight: '32px'
          }}
        >
          {title}
        </Heading>
        <Paragraph
          sx={{
            p: ['0 50px 0 50px', '0 20px 0 0', '0 10px 0 10px'],
            maxWidth: ['auto', '290px']
          }}
        >
          {description}
        </Paragraph>
      </Box>
    </Card>
  );
}

CoffeeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

function CollectionSection() {
  return (
    <Section
      sx={{
        mt: 50,
        textAlign: 'center',
        position: 'relative',
        pt: [0, 50, 100],
        display: 'flex',
        flexDirection: ['column', 'column', 'row'],
        justifyContent: 'center',
        '>div': { mx: '0.5em' }
      }}
    >
      {/* Our Collection */}
      <Heading
        sx={{
          position: ['relative', 'absolute'],
          top: 0,
          left: '50%',
          width: '100%',
          zIndex: '-2',
          transform: 'translateX(-50%)',
          my: ['1em', 0],
          fontSize: ['44px', '96px', '150px'],
          lineHeight: ['72px', '96px', '150px'],
          backgroundClip: 'text',
          textFillColor: 'transparent',
          backgroundColor: '#B9B9B9',
          backgroundImage:
            'linear-gradient(180deg, rgba(254, 252, 247, 0.0001) 0%, #FEFCF7 100%)'
        }}
      >
        our collection
      </Heading>
      <CoffeeCard
        src="/home/desktop/image-gran-espresso.png"
        title="Gran Espresso"
        description="Light and flavorful blend with cocoa and black pepper for an intense experience"
      />
      <CoffeeCard
        src="/home/desktop/image-planalto.png"
        title="Planalto"
        description="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
      />
      <CoffeeCard
        src="/home/desktop/image-piccollo.png"
        title="Piccollo"
        description="Mild and smooth blend featuring notes of toasted almond and dried cherry"
      />
      <CoffeeCard
        src="/home/desktop/image-danche.png"
        title="Danche"
        description="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
      />
    </Section>
  );
}

export default CollectionSection;
