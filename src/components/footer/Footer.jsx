import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Conditions of Use
          </a>
          <a href="#" className={styles.link}>
            Privacy Notice
          </a>
          <a href="#" className={styles.link}>
            Interest-Based Ads
          </a>
        </div>
        <div className={styles.copyright}>
          © 2026 Morrow Market. Made for everyday living.
        </div>
      </div>
    </footer>
  );
}
