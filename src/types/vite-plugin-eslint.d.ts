declare module 'vite-plugin-eslint' {
  import {Plugin} from 'vite';

  interface IESLintPluginOptions {
    fix?: boolean;
    cache?: boolean;
  }

  export default function eslintPlugin(options?: IESLintPluginOptions): Plugin;
}
