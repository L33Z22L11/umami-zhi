import { CURRENT_VERSION, HOMEPAGE_URL } from '@/lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={HOMEPAGE_URL}>
        <b>umami</b> {`v${CURRENT_VERSION}`}
      </a>
      <a href="https://zhilu.cyou">
        <b>旨</b> 是 <b>纸鹿</b> 翻译的名称。
      </a>
    </footer>
  );
}

export default Footer;
