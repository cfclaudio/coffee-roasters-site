import React from 'react';
import Head from 'next/head';
import { PageLayout } from 'components';
import { PlanHeaderSection, StepsSection } from 'sections/plan';

export default function PlanPage() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | Create Your Plan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <PlanHeaderSection />
        <StepsSection />
      </PageLayout>
    </div>
  );
}
