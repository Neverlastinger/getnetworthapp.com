/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from './TextPage.module.scss';

export default function TextPage({ children }) {
  return (
    <main className={styles.textPage}>
      {children}

      <Link href="/" className="back">
        <a className={styles.back}>back</a>
      </Link>
    </main>
  );
}
