import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';
import StepCard from './StepCard';

const subscriptionSteps = [
  {
    id: '1',
    title: 'Pick your coffee',
    description:
      'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
  },
  {
    id: '2',
    title: 'Choose the frequency',
    description:
      'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
  },
  {
    id: '3',
    title: 'Receive and enjoy!',
    description:
      'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
  }
];

function SubscriptionSteps({ variant }) {
  return (
    <Box
      className="subscription-steps"
      sx={{
        display: [null, 'grid', 'grid'],
        gridTemplateColumns: [null, 'repeat(3, 1fr)'],
        my: '3em',

        // variant styling
        '>.step-card': {
          '&:not(:last-child)': {
            borderTop: [null, t => `2px solid ${t.colors.accent}`]
          },
          '>.step-title': { color: variant === 'light' ? 'white' : 'text' },
          '>.step-description': {
            color: variant === 'light' ? 'background' : 'text'
          }
        }
      }}
    >
      {subscriptionSteps.map(({ id, title, description }) => (
        <StepCard key={id} step={id} title={title} description={description} />
      ))}
    </Box>
  );
}

SubscriptionSteps.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default SubscriptionSteps;
