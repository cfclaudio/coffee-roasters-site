import React from "react";
import Head from "next/head";
import { PageLayout } from "components";
import {
  AboutUsSection,
  CommitmentSection,
  HeadquartersSection,
  QualitySection,
} from "sections/about";

export default function AboutUsPage() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <AboutUsSection />
        <CommitmentSection />
        <QualitySection />
        <HeadquartersSection />
      </PageLayout>
    </div>
  );
}
