import React from 'react';
import { CreatePlanButton, Section } from 'components';
import { Heading } from 'theme-ui';
import SubscriptionSteps from '../shared/SubscriptionSteps';

function HowItWorksSection() {
  return (
    <Section
      className="how-it-works-section"
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Heading sx={{ color: 'grey' }}>How it works</Heading>
      <SubscriptionSteps variant="dark" />
      <CreatePlanButton />
    </Section>
  );
}

export default HowItWorksSection;
