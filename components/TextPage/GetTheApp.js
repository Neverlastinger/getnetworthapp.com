import styles from './TextPage.module.scss';

export default function GetTheApp() {
  return (
    <div className={styles.getTheApp}>
      <div className={styles.text}>Get the app.</div>
      <div className={styles.images}>
        <img src="/app-store.png" alt="Go to the Apple App Store" />
        <img src="/play-store.png" alt="Go to the Android Play Store" />
      </div>
    </div>
  );
}
