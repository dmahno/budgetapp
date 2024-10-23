declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// eslint-disable-next-line no-restricted-syntax
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare module '*.svg' {
  const content: string;
  export default content;
}
