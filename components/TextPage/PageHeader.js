import styles from './TextPage.module.scss';

export default function PageHeader({ children }) {
  return (
    <div className={styles.header}>
      <img className={styles.desktopLogo} src="/logo-device.svg" alt="Net Worth Performance" />
      <h1>{children}</h1>
      <img className={styles.mobileLogo} src="/logo-full.svg" alt="Net Worth Performance" />
    </div>
  );
}
