import React from 'react';
import { Center, Text, Box } from '@chakra-ui/react';

export type FooterProps = {
  height: number;
};

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom={0}
      width="full"
      shadow="sm"
      px={8}
      height={props.height}
    >
      <Center height="100%">
        <Text>vvvvoid main</Text>
      </Center>
    </Box>
  );
};

export default Footer;
