import Head from 'next/head';
import { Box, chakra, Container } from '@chakra-ui/react';
import Link from '@/components/common/Link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World | vvvvoid main</title>
      </Head>
      <>
        <Container height="100%">
          <Box>
            <chakra.h1 color="gray">Hello World!</chakra.h1>
          </Box>
          <Box>
            <Link href="/about">- about page</Link>
          </Box>
          <Box>
            <Link href="/query?id=222">- query page</Link>
          </Box>
        </Container>
      </>
    </>
  );
}
