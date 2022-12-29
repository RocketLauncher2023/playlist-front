import { ReactNode } from 'react';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <section>
        <main className={styles.main}>{children}</main>
      </section>
    </div>
  );
}

export default Layout;
