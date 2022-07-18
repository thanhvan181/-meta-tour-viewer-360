import * as S from './Features.styled';

type Props = {};

const Features = (props: Props) => {
  return (
    <S.Container>
      <S.Title>
        <S.H2>Tạo trải nghiệm ảo nhanh chóng và dễ dàng</S.H2>
        <S.Desc>
          Tương tác với khách hàng 24/7 trong không gian ảo do chính bạn tạo ra
        </S.Desc>
      </S.Title>
      <S.FeaturesCard>
        <S.Picture>
          <img
            width={'100%'}
            loading="lazy"
            src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/home-4.png"
            alt=""
          />
        </S.Picture>
        <div>
          <S.TitleFeature>Đơn giản, nhanh chóng</S.TitleFeature>
          <S.DescFeature>
            Nâng cấp trải nghiệm ảo của khách hàng với nền tảng thực tế ảo tự
            làm, dễ sử dụng của chúng tôi.
          </S.DescFeature>
        </div>
      </S.FeaturesCard>
      <S.FeaturesCard>
        <S.Picture>
          <img
            width={'100%'}
            loading="lazy"
            src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/a789260.jpg"
            alt=""
          />
        </S.Picture>
        <div>
          <S.TitleFeature>Tăng tính tương tác</S.TitleFeature>
          <S.DescFeature>
            Hỗ trợ các tính năng cho phép khách tham quan tương tác trực tiếp
            với doanh nghiệp, tạo kết nối không giới hạn.
          </S.DescFeature>
        </div>
      </S.FeaturesCard>
      <S.FeaturesCard>
        <S.Picture>
          <img
            width={'100%'}
            loading="lazy"
            src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/home-6.png"
            alt=""
          />
        </S.Picture>
        <div>
          <S.TitleFeature>Phân tích, thống kê</S.TitleFeature>
          <S.DescFeature>
            Theo dõi và đánh giá được tương tác của khách tham quan dễ dàng,
            tiện lợi nhờ bộ công cụ có sẵn trong nền tảng.
          </S.DescFeature>
        </div>
      </S.FeaturesCard>
    </S.Container>
  );
};

export default Features;
