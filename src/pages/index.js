import React from 'react';
import Head from 'next/head';
import { PageLayout } from 'components';
import Section from 'components/Section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Section>Home Page</Section>
      </PageLayout>
    </div>
  );
}
