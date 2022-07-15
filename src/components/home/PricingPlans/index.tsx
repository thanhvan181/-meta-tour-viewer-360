import * as S from './PricingPlans.styled';

type Props = {};

const Pricing = (props: Props) => {
  return (
    <S.Container>
      <S.PlanCardWraper>
        <S.CardPlan style={{zIndex: 0}}>
          <div>
            <div></div>
            <S.CardTop style={{backgroundColor: '#a963ff'}}>
              Gói <b>Showroom</b> ảo
            </S.CardTop>
            <div>
              <S.PlanName>Basic</S.PlanName>
              <div
                data-v-21ab6224=""
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px 0px',
                }}>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
              </div>
              <S.PlanInfo>Tạo showroom ảo 24/7</S.PlanInfo>
              <S.PlanValuation>
                <S.Price>300.000đ ($15)</S.Price> <S.Period>/ tháng</S.Period>
              </S.PlanValuation>
              <S.Start>
                <S.Btn>Bắt đầu</S.Btn>
              </S.Start>
            </div>
          </div>
          <S.PlanList>
            <S.PlanContent>
              Phù hợp với doanh nghiệp nhỏ, ít sản phẩm trưng bày
            </S.PlanContent>
            <S.PlanContent>Nền tảng chỉnh sửa trực tuyến</S.PlanContent>
            <S.PlanContent>
              Dễ dàng tạo dựng Showroom ảo nhanh chóng
            </S.PlanContent>
          </S.PlanList>
        </S.CardPlan>
        <S.CardPlan
          style={{transform: 'scale(1.08)', marginBottom: 30, zIndex: 2}}>
          <div>
            <div></div>
            <S.CardTop style={{backgroundColor: '#ff5745'}}>
              Gói <b>Showroom</b> ảo
            </S.CardTop>
            <div>
              <S.PlanName>Medium</S.PlanName>
              <div
                data-v-21ab6224=""
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px 0px',
                }}>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
              </div>
              <S.PlanInfo>Tạo showroom ảo 24/7</S.PlanInfo>
              <S.PlanValuation>
                <S.Price>1.100.000đ ($50) </S.Price>{' '}
                <S.Period>/ tháng</S.Period>
              </S.PlanValuation>
              <S.Start>
                <S.Btn>Bắt đầu</S.Btn>
              </S.Start>
            </div>
          </div>
          <S.PlanList>
            <S.PlanContent>Phù hợp với doanh nghiệp vừa và nhỏ</S.PlanContent>
            <S.PlanContent>Đầy đủ các tính năng của Gói Basic</S.PlanContent>
            <S.PlanContent>Thêm các tính năng nâng cao</S.PlanContent>
          </S.PlanList>
        </S.CardPlan>{' '}
        <S.CardPlan>
          <div>
            <div></div>
            <S.CardTop style={{backgroundColor: '#6375ff'}}>
              Gói <b>Showroom</b> ảo
            </S.CardTop>
            <div>
              <S.PlanName>Advance</S.PlanName>
              <div
                data-v-21ab6224=""
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '20px 0px',
                }}>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
                <svg
                  data-v-21ab6224=""
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    data-v-21ab6224=""
                    d="M0 5L3.93934 3.93934L5 0L6.06066 3.93934L10 5L6.06066 6.06066L5 10L3.93934 6.06066L0 5Z"
                    fill="black"
                    fillOpacity="0.7"></path>
                </svg>
              </div>
              <S.PlanInfo>Tạo showroom ảo 24/7</S.PlanInfo>
              <S.PlanValuation>
                <S.Price>2.000.000đ ($90)</S.Price> <S.Period>/ tháng</S.Period>
              </S.PlanValuation>
              <S.Start>
                <S.Btn>Bắt đầu</S.Btn>
              </S.Start>
            </div>
          </div>
          <S.PlanList>
            <S.PlanContent>
              Phù hợp với doanh nghiệp có nhiều sản phẩm trưng bày
            </S.PlanContent>
            <S.PlanContent>Đầy đủ các tính năng của Gói Medium</S.PlanContent>
            <S.PlanContent>Thêm các tính năng nâng cao</S.PlanContent>
          </S.PlanList>
        </S.CardPlan>
      </S.PlanCardWraper>
    </S.Container>
  );
};

export default Pricing;
