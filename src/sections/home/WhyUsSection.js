import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'components';
import { Card, Image, Paragraph, Heading, Box } from 'theme-ui';

function ReasonCard({ title, description, src }) {
  return (
    <Card className="reason-card" variant="reason">
      <Image
        src={src}
        alt={`icon ${title}`}
        sx={{ my: '2em', mx: ['auto', '30px', 'auto'] }}
      />
      <Box>
        <Heading
          sx={{ color: 'white', mt: ['1.2em', 0], mb: ['1.2em', '1em'] }}
        >
          {title}
        </Heading>
        <Paragraph sx={{ color: 'background', opacity: '80%' }}>
          {description}
        </Paragraph>
      </Box>
    </Card>
  );
}

ReasonCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

function WhyUsSection() {
  return (
    <Section sx={{ position: 'relative', mt: 150 }}>
      <Card
        className="background-card"
        sx={{
          position: 'absolute',
          height: ['62%', '67%', '76%'],
          width: '100%',
          bg: 'secondary',
          top: 0,
          zIndex: -4,
          borderRadius: 'card',
          textAlign: 'center'
        }}
      />
      <Box
        sx={{
          textAlign: 'center',
          padding: '4em 2em',
          maxWidth: [null, '600px'],
          margin: '0 auto'
        }}
      >
        <Heading
          sx={{
            color: 'White',
            mb: '1em',
            fontSize: ['28px', '34px', '40px'],
            lineHeight: ['28px', '48px']
          }}
        >
          Why choose us?
        </Heading>
        <Paragraph sx={{ color: 'background', opacity: '80%' }}>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </Paragraph>
      </Box>
      <Box
        className="card-container"
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ReasonCard
          src="/home/desktop/icon-coffee-bean.svg"
          title="Best quality"
          description="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
        />
        <ReasonCard
          src="/home/desktop/icon-gift.svg"
          title="Exclusive benefits"
          description="Special offers and swag when you subscribe, including 30% off your first shipment."
        />
        <ReasonCard
          src="/home/desktop/icon-truck.svg"
          title="Free shipping"
          description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
        />
      </Box>
    </Section>
  );
}

export default WhyUsSection;
