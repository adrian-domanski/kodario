import 'styled-components';

declare module 'styled-components' {
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

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
