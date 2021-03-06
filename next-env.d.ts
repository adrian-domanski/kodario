/// <reference types="next" />
/// <reference types="next/types/global" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      darkerBlue: string;
      lightWhite: string;
      darkerSection: string;
      backgroundColor: string;
    };
    fontFamily: string;
  }
}
