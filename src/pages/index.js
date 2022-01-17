import React from "react";
import Head from "next/head";
import { Box } from "theme-ui";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Box as="main">Great coffe made simple.</Box>
      <Footer />
    </div>
  );
}
