import React from 'react';
import Head from 'next/head';
import { PageLayout } from 'components';
import {
  CollectionSection,
  HomeSection,
  HowItWorksSection,
  WhyUsSection
} from 'sections/home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <HomeSection />
        <CollectionSection />
        <WhyUsSection />
        <HowItWorksSection />
      </PageLayout>
    </div>
  );
}
