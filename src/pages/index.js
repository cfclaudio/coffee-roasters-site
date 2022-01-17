import React from "react";
import Head from "next/head";
import { PageLayout } from "components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>Great Coffee made simple.</PageLayout>
    </div>
  );
}
