import { extendTheme } from "@chakra-ui/core";

const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
};

const customTheme = extendTheme({ fontWeights });

export default customTheme;
