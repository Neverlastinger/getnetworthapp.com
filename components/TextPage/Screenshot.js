import styles from './TextPage.module.scss';

export default function Screenshot({ img, alt }) {
  return (
    <div className={styles.screenshot}>
      <img className={styles.phoneImage} src="/transparent-iphone-11-pro-silver.png" alt="Net Worth Performance app functionalities" />
      <img className={styles.appImage} src={`/how-to/${img}`} alt={alt} />
    </div>
  );
}
