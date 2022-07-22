import * as S from './FeaturesCard.styled';
type Props = {};
import {AiOutlineCheck} from 'react-icons/ai';

const FeaturesCard = (props: Props) => {
  return (
    <S.FeaturesCard>
      <div className="images">
        <img
          src="https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/88a05bf.jpg"
          alt=""
        />
      </div>
      <div className="detail">
        <h1>Tham quan gian hàng 3D</h1>
        <div className="detail_main">
          <p>
            Trải nghiệm công nghệ hiện đại, mang đến cảm giác chân thực cho
            khách hàng với hình ảnh 360 độ toàn cảnh, không bị giới hạn điểm
            nhìn.
          </p>
          <ul>
            <li>
              <AiOutlineCheck />
              Tham quan các gian hàng nhờ khả năng di chuyển điểm nhìn 360 độ
              bằng các thao tác đơn giản trên các máy tính hay điện thoại
            </li>
            <li>
              <AiOutlineCheck />
              Quảng bá thương hiệu và giới thiệu sản phẩm với nhiều hình thức:
              video, hình ảnh 2D, 3D, livestream, VR tour
            </li>
          </ul>
        </div>
      </div>
    </S.FeaturesCard>
  );
};

export default FeaturesCard;
