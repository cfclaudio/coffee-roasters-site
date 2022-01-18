import React from 'react';
import PropTypes from 'prop-types';
import { CreatePlanButton, Section } from 'components';
import { Card, Paragraph, Heading } from 'theme-ui';

function StepCard({ title, description, step }) {
  return (
    <Card className="step-card" variant="step">
      <Heading sx={{ color: 'accent', fontSize: 72 }}>{step}</Heading>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
}

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired
};

function HowItWorksSection() {
  return (
    <Section className="how-it-works-section" sx={{ textAlign: 'center' }}>
      <Heading sx={{ color: 'grey' }}>How it works</Heading>
      <StepCard
        step={0}
        title="Pick your coffee"
        description="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
      />
      <StepCard
        step={1}
        title="Choose the frequency"
        description="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
      />
      <StepCard
        step={3}
        title="Receive and enjoy!"
        description="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
      />
      <CreatePlanButton />
    </Section>
  );
}

export default HowItWorksSection;
