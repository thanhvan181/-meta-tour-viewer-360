import * as S from './Banner.styled';
type Props = {};

const Banner = (props: Props) => {
  return (
    <S.Container>
      <S.Industry></S.Industry>
      <S.SecWording>
        <S.Title>Nâng tầm doanh nghiệp của bạn</S.Title>
        <S.Desc style={{lineHeight: '1.5rem'}}>
          Tạo, xây dựng, chỉnh sửa và chia sẻ những trải nghiệm ảo đáng kinh
          ngạc. Cho phép khách hàng của bạn hình dung và khám phá những gì bạn
          cung cấp một cách ấn tượng nhất trong môi trường ảo.
        </S.Desc>
      </S.SecWording>
      <S.CardBox>
        <S.IndustryCard>
          <S.WordingCard>
            <S.Wording>
              <S.WordingTitle>
                <span>Chụp ảnh 360</span>
              </S.WordingTitle>
              <S.WordingDesc>
                Ảnh toàn cảnh 360 độ cho phép bạn thưởng thức không gian ở mọi
                góc độ, không giới hạn góc nhìn với độ phân giải sắc nét và thực
                hiện xử lý hậu kỳ chuyên nghiệp!
              </S.WordingDesc>
            </S.Wording>

            <S.RectanBtn href="https://tourzy.vn">Tìm hiểu ngay</S.RectanBtn>
          </S.WordingCard>
          <S.Img
            src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/home-1.png"
            alt=""
          />
        </S.IndustryCard>
        <S.IndustryCard>
          <S.WordingCard>
            <S.Wording>
              <S.WordingTitle>
                <span>Showroom ảo</span>
              </S.WordingTitle>
              <S.WordingDesc>
                Showroom ảo là nơi mà doanh nghiệp trưng bày và giới thiệu sản
                phẩm đến với khách hàng. Với công nghệ chúng tôi cung cấp, bạn
                có thể tự tạo ra một showroom ảo nhanh chóng, dễ dàng mà vẫn đảm
                bảo hấp dẫn, mới lạ cho khách tham quan.
              </S.WordingDesc>
            </S.Wording>

            <S.RectanBtn href="https://tourzy.vn">Tìm hiểu ngay</S.RectanBtn>
          </S.WordingCard>
          <S.Img
            src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/home-2.png"
            alt=""
          />
        </S.IndustryCard>
        <S.IndustryCard>
          <S.WordingCard>
            <S.Wording>
              <S.WordingTitle>
                <span>Triển lãm ảo</span>
              </S.WordingTitle>
              <S.WordingDesc>
                Tối đa hóa giá trị triển lãm của bạn bằng cách mở rộng triển lãm
                thực tế sang triển lãm ảo! Với mỗi lần click chuột, khách tham
                quan sẽ được điều hướng đến bất cứ không gian triển lãm nào
                trong chốc lát.
              </S.WordingDesc>
            </S.Wording>

            <S.RectanBtn href="https://tourzy.vn">Tìm hiểu ngay</S.RectanBtn>
          </S.WordingCard>
          <S.Img
            src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/home-3.png"
            alt=""
          />
        </S.IndustryCard>
      </S.CardBox>
      <S.Platform>
        <S.ClientWrap>
          <S.Mar>
            <S.ClientLogos>
              <S.ClientLogo>
                No Coppy
                <img
                  alt="techfest-247"
                  src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/fpt.png"
                />
                No Coppy
              </S.ClientLogo>
            </S.ClientLogos>
          </S.Mar>
        </S.ClientWrap>
      </S.Platform>
    </S.Container>
  );
};

export default Banner;
