import Head from "next/head";
import { Box, Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {getCuratedPhotos} from "../lib/api"
export default function Home({data}) {
  const [photos, setPhotos] = useState(data);
  return (
    <div>
      <Head>
        <title> NextJS Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="purple.300" minH="100vh">
      <Container>
  <Text
    color="green.800"
    fontWeight="semibold"
    mb="1rem"
    textAlign="center"
    textDecoration="underline"
    fontSize={["4xl", "4xl", "5xl", "5xl"]}
  >
    NextJS Image Gallery
  </Text>
</Container>
{
  photos.map((pic) => (
    <img src={pic.src.original} width="500" height="500" />
  ))
}
</Box>

    </div>
  );
}
export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}