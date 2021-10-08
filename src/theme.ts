import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Noto Sans JP',
    body: 'Noto Sans JP',
  },
  styles: {
    global: (props: any) => ({
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
      },
      header: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
      },
      footer: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
        transitionProperty: 'background-color',
        transitionDuration: 'normal',
      },
    }),
  },
  components: {
    // https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Link: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
});

export default theme;
