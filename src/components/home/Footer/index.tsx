import Link from 'next/link';
import {AiFillFacebook, AiFillYoutube} from 'react-icons/ai';
// import logo from '../../../public/images/logo-tourzy.png';

import * as S from './Footer.styled';

type Props = {};

const Footer = (props: Props) => {
  return (
    <S.Container>
      <S.LogoFooter>
        <Link href="">
          <img
            src="https://meta.tourzy.vn/public/frontend/showroom/images/logo-tourzy-2.png"
            alt=""
            width={175}
            height={57}
          />
        </Link>
        <S.Icon>
          <S.Ul>
            <S.Li>
              <Link href="" target={`_blank`}>
                <AiFillFacebook />
              </Link>
            </S.Li>
            <S.Li>
              <Link href="" target={`_blank`}>
                <AiFillYoutube />
              </Link>
            </S.Li>
          </S.Ul>
        </S.Icon>
      </S.LogoFooter>
      <S.Work>
        <S.Title>Về chúng tôi...</S.Title>
        <S.WorkTitle>
          <strong>Chúng tôi tin vào tiềm năng của thực tế ảo</strong>
          <br />
          Showroom ảo Tourzy là nền tảng giúp bạn tự tạo ra những trải nghiệm
          thực tế ảo cho khách hàng một cách dễ dàng, nhanh chóng và tiết kiệm
          nhất.
        </S.WorkTitle>
        <S.WorkCoppy>
          Copyright © 2022{' '}
          <Link href={`https:/tourzy.vn`}>
            <a style={{color: '#777', textDecoration: 'none'}}>Tourzy Media</a>
          </Link>
          . All rights reserved.
        </S.WorkCoppy>
      </S.Work>
    </S.Container>
  );
};

export default Footer;
