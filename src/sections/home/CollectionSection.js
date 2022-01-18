import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components';
import { Card, Image, Paragraph, Heading } from 'theme-ui';

function CoffeeCard({ title, description, src }) {
  return (
    <Card className="coffee-card" variant="coffee">
      <Image src={src} alt={`image-${title}`} />
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
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
    <Section sx={{ position: 'relative', mt: 150 }}>
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
