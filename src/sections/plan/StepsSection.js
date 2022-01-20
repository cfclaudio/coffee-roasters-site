import React from 'react';
import { Section } from 'components';
import { Card } from 'theme-ui';
import SubscriptionSteps from '../shared/SubscriptionSteps';

function StepsSection() {
  return (
    <Section className="steps-section" sx={{ textAlign: 'center' }}>
      <Card sx={{ borderRadius: 'card', bg: 'secondary' }}>
        <SubscriptionSteps variant="light" />
      </Card>
    </Section>
  );
}

StepsSection.propTypes = {};

export default StepsSection;
