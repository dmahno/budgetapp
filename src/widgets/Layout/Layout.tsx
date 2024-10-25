import {ReactNode} from 'react';

import {Header} from '../Header/Header';
import styles from './Layout.module.scss';

interface ILayout {
  children: ReactNode;
}

export const Layout: React.FC<ILayout> = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
    </>
  );
};
