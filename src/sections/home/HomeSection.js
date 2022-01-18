import React from 'react';
import { Section } from 'components';
import { Card, Image, Paragraph, Heading, Box, Button } from 'theme-ui';

function HomeSection() {
  return (
    <Section className="home-section first-section">
      <Card variant="image" sx={{ position: 'relative' }}>
        <Image
          src="/about/mobile/image-hero-whitecup.jpg"
          alt="image-hero-whitecup"
        />
        <Box
          sx={{
            position: 'absolute',
            color: 'white',
            top: '0',
            mx: '1em',
            height: '100%',
            textAlign: 'center'
          }}
        >
          <Heading>Great coffee made simple.</Heading>
          <Paragraph>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </Paragraph>
          <Button>Create your plan</Button>
        </Box>
      </Card>
    </Section>
  );
}

export default HomeSection;
