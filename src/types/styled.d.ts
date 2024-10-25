declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}
