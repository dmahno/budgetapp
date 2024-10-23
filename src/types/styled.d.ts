declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// eslint-disable-next-line no-restricted-syntax
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
