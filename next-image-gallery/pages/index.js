import Head from "next/head";
//import { Box, Container, Text } from "@chakra-ui/react";
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
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
<Wrap px="1rem" spacing={4} justify="center">
  {photos.map((pic) => (
    <Image src={pic.src.portrait} height={600} width={400} alt={pic.url} />
  ))}
</Wrap>
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