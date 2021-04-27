import styles from './TextPage.module.scss';

export default function GetTheApp() {
  return (
    <div className={styles.getTheApp}>
      <div className={styles.text}>Get the app.</div>
      <div className={styles.images}>
        <img src="/app-store.png" alt="Go to the Apple App Store" />
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://play.google.com/store/apps/details?id=com.radoslavpopov.networthperformance" target="_blank">
          <img src="/play-store.png" alt="Go to the Android Play Store" />
        </a>
      </div>
    </div>
  );
}
