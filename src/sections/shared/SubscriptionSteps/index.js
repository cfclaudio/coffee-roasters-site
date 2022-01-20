import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import StepCard from './StepCard';

function SubscriptionSteps({ variant }) {
  return (
    <Box
      className="subscription-steps"
      sx={{
        '>.step-card': {
          '>.step-title': { color: variant === 'light' ? 'white' : 'text' },
          '>.step-description': {
            color: variant === 'light' ? 'background' : 'text'
          }
        }
      }}
    >
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
    </Box>
  );
}

SubscriptionSteps.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default SubscriptionSteps;
