import Head from 'next/head';
import { ReactNode } from 'react';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Playlist 🎧</title>
      </Head>
      <section>
        <main className={styles.main}>{children}</main>
      </section>
    </div>
  );
}

export default Layout;
