import React from 'react';
import { Button } from 'theme-ui';

import { useRouter } from 'next/router';

function CreatePlanButton(props) {
  const { push } = useRouter();
  return (
    <Button onClick={() => push('/create-your-plan')} {...props}>
      Create your plan
    </Button>
  );
}

export default CreatePlanButton;
