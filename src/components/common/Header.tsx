import React from 'react';
import {
  Flex,
  Heading,
  Box,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import Link from '@/components/common/Link';
import { IconButton, useColorMode, useDisclosure } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

export type HeaderProps = {
  height: number;
};

export const Header = ({ ...props }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        width="full"
        shadow="sm"
        py={4}
        px={8}
        height={props.height}
      >
        <Box>
          <Link href="/">
            <Heading>vvvvoid main</Heading>
          </Link>
        </Box>
        <Spacer />
        <IconButton
          _focus={{ _focus: 'none' }}
          aria-label="dark mode Switch"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
        <IconButton
          variant="outline"
          _focus={{ _focus: 'none' }}
          display={{ base: 'block', md: 'none' }}
          aria-label="menu"
          icon={<HamburgerIcon />}
          ml={2}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{ _focus: 'none' }} />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
