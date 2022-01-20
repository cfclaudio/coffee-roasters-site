import React from 'react';
import { Section } from 'components';
import { Card, Image, Paragraph, Heading, Box } from 'theme-ui';

function PlanHeaderSection() {
  return (
    <Section className="about-us-section first-section">
      <Card variant="image" sx={{ position: 'relative' }}>
        <Image
          src="/plan/mobile/image-hero-blackcup.jpg"
          alt="image-hero-blackcup"
        />
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            mx: '1em',
            height: '100%',
            textAlign: 'center'
          }}
        >
          <Heading color="white">Create</Heading>
          <Paragraph color="background">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </Paragraph>
        </Box>
      </Card>
    </Section>
  );
}

export default PlanHeaderSection;
