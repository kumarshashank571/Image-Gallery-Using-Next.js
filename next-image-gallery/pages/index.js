import Head from "next/head";
import { Box } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <Head>
        <title> NextJS Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="purple.300" minH="100vh"></Box>
    </div>
  );
}