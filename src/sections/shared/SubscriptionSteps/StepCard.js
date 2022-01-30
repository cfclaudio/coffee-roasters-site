import React from 'react';
import PropTypes from 'prop-types';
import { Card, Heading, Paragraph } from 'theme-ui';
import { BulletIcon } from 'components/icons';

function StepCard({ title, description, step }) {
  return (
    <Card className="step-card" variant="step">
      {/* Bullet Icon */}
      <BulletIcon
        sx={{
          display: ['none', 'revert', 'revert'],
          position: 'absolute',
          top: t => `calc(${t.space.bulletIcon} / -2)`,
          left: 0
        }}
      />
      <Heading className="step-number" sx={{ color: 'accent', fontSize: 72 }}>
        {step.padStart(2, '0')}
      </Heading>
      <Heading
        className="step-title"
        sx={{
          minHeight: '70px',
          maxWidth: [null, '200px'],
          minWidth: [null, '200px'],
          py: '1rem'
        }}
      >
        {title}
      </Heading>
      <Paragraph
        sx={{ maxWidth: [null, '270px'] }}
        className="step-description"
      >
        {description}
      </Paragraph>
    </Card>
  );
}

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired
};

export default StepCard;
