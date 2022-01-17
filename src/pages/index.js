import React from "react";
import Head from "next/head";
import { Box } from "theme-ui";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Roasters | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">Great coffe made simple.</Box>
      <Box as="footer">Coffee Roasters</Box>
    </div>
  );
}
