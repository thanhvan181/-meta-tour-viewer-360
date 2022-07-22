import Link from 'next/link';
import styles from './Banner.module.css';
type Props = {};

const BannerShowroom = (props: Props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1>Virtual Expo</h1>
        <span>
          Triển lãm ảo <br />
          Dẫn đầu xu hướng thời đại số
        </span>
      </div>
      <div className={styles.btn_contact}>
        <Link href="/">Liên hệ ngay</Link>
      </div>
    </div>
  );
};

export default BannerShowroom;
