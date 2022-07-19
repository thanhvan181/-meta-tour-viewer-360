import * as S from './Header.styled';
type Props = {};

const HeaderHome = (props: Props) => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderImage>
          <div>
            <S.HeaderUl>
              <S.HeaderLi></S.HeaderLi>
            </S.HeaderUl>
          </div>
        </S.HeaderImage>
        <S.HeaderHero>
          <S.HeroTitle>
            <S.HeroTitleHeading>
              <S.HeadingH1>
                <S.HeadingSp>
                  Metaverse Platform
                  <S.HeadingDesc>
                    Đưa thực tế ảo gần hơn với cuộc sống
                  </S.HeadingDesc>
                </S.HeadingSp>
              </S.HeadingH1>
            </S.HeroTitleHeading>
            <S.HeaderCta>
              <S.HeaderBtn href="/" target={'_blank'}>
                Xem demo
              </S.HeaderBtn>
              <S.HeaderBtn href="/" target={'_blank'}>
                Dùng thử
              </S.HeaderBtn>
              <S.HeaderBtn href="/" target={'_blank'}>
                Khám phá ngay
              </S.HeaderBtn>
            </S.HeaderCta>
          </S.HeroTitle>
        </S.HeaderHero>
      </S.Header>
    </S.Container>
  );
};

export default HeaderHome;
