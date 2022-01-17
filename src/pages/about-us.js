import React from "react";
import Head from "next/head";
import { PageLayout } from "components";

export default function AboutUsPage() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>About Us</PageLayout>
    </div>
  );
}
