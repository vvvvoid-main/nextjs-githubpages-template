import Head from 'next/head';
import { Box, chakra, Container } from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <Head>
        <title>About | vvvvoid main</title>
      </Head>
      <Container>
        <Box>
          <chakra.h1 color="gray">This is About</chakra.h1>
        </Box>
        <Box>
          <chakra.h1 color="gray">This is About</chakra.h1>
        </Box>
        <Box>
          <chakra.h1 color="gray">This is About</chakra.h1>
        </Box>
      </Container>
    </>
  );
}
