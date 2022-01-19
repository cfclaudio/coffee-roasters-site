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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:wght@900&display=swap"
          rel="stylesheet"
        />
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
