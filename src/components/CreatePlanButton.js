import React from 'react';
import { Button } from 'theme-ui';

import { useRouter } from 'next/router';

function CreatePlanButton(props) {
  const { push } = useRouter();
  return (
    <Button
      onClick={() => push('/create-your-plan')}
      sx={{ p: '16px 32px' }}
      {...props}
    >
      Create your plan
    </Button>
  );
}

export default CreatePlanButton;
