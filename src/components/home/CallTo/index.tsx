import Link from 'next/link';
import * as S from './CallTo.styled';
type Props = {};

const CallTo = (props: Props) => {
  return (
    <S.Section>
      <S.Container1>
        <div>
          <S.Title2>Bắt kịp xu hướng thực tế ảo ngay bây giờ!</S.Title2>
        </div>
        <div>
          <Link href="">
            <a style={{textDecoration: 'none'}}>
              <S.CallToBtn>Bắt đầu ngay</S.CallToBtn>
            </a>
          </Link>
        </div>
      </S.Container1>
    </S.Section>
  );
};

export default CallTo;
