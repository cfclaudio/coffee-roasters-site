import React from 'react';
import { CreatePlanButton, Section } from 'components';
import { Card, Paragraph, Heading } from 'theme-ui';

function HomeSection() {
  return (
    <Section className="home-section first-section">
      <Card
        variant="image"
        sx={{
          py: '125px',
          backgroundImage: [
            `url('/home/mobile/image-hero-coffeepress.jpg')`,
            `url('/home/tablet/image-hero-coffeepress.jpg')`,
            `url('/home/desktop/image-hero-coffeepress.jpg')`
          ],
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          top: '0',
          px: ['24px', '58px', '86px'],
          display: 'flex',
          flexDirection: 'column',
          alignItems: ['center', 'start'],
          textAlign: ['center', 'left']
        }}
      >
        <Heading
          sx={{
            color: 'white',
            fontSize: ['40px', '48px'],
            lineHeight: ['40px', '48px'],
            maxWidth: ['auto', '400px']
          }}
        >
          Great coffee made simple.
        </Heading>
        <Paragraph
          sx={{
            color: 'lightCream',
            opacity: '80%',
            my: '45px',
            fontSize: ['15px'],
            lineHeight: ['25px'],
            maxWidth: ['auto', '415px']
          }}
        >
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </Paragraph>
        <CreatePlanButton />
      </Card>
    </Section>
  );
}

export default HomeSection;
