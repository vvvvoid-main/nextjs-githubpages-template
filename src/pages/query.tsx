import Head from 'next/head';
import { Box, chakra, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Query() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Query | vvvvoid main</title>
      </Head>
      <Container height="100%">
        <Box>
          <chakra.h1 color="gray">{id} page</chakra.h1>
        </Box>
      </Container>
    </>
  );
}
