import styles from './Header.module.css';

import {AiTwotoneAppstore} from 'react-icons/ai';
import {AiFillCaretDown} from 'react-icons/ai';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://meta.tourzy.vn/public/frontend/showroom/images/logo-tourzy-2.png"
          alt=""
        />
      </div>
      <div className={styles.menu}>
        <ul>
          <li className={styles.sub_menu}>
            <a href="asas">Giải pháp</a>
            <AiFillCaretDown />
            <ul className={styles.sub_menu_main}>
              <li>
                <a href="asdasd">Showroom ảo</a>
              </li>
              <li>
                <a href="">Triển lãm ảo</a>
              </li>
              <li>
                <a href="">Ảnh 360</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Thư viện</a>
          </li>
          <li>
            <a href="">Bảng giá</a>
          </li>
        </ul>
      </div>
      <div className={styles.nav}>
        <button className={styles.sub_menu}>
          <AiTwotoneAppstore />
          <ul className={styles.sub_menu_main}>
            <li>
              <a href="asdasd">Đăng ký</a>
            </li>
            <li>
              <a href="">Đăng nhập</a>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Header;
