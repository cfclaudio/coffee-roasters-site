import React from 'react';
import PropTypes from 'prop-types';
import { Card, Heading, Paragraph } from 'theme-ui';

function StepCard({ title, description, step }) {
  return (
    <Card className="step-card" variant="step">
      <Heading className="step-number" sx={{ color: 'accent', fontSize: 72 }}>
        {step}
      </Heading>
      <Heading className="step-title">{title}</Heading>
      <Paragraph className="step-description">{description}</Paragraph>
    </Card>
  );
}

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired
};

export default StepCard;
