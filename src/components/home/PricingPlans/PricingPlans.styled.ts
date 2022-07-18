import styled from 'styled-components';

export const Container = styled.div`
  padding: 64px 0;
`;

export const PlanCardWraper = styled.div`
  width: 100%;
  display: flex;
  max-width: 1440px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  /* @media screen and (min-width: 768px) {
    flex-basis: calc(33% - 1rem);
    margin: 0;
  } */
  @media (max-width: 576px) {
    width: 140%;
    flex-direction: column;
  }
`;

export const CardPlan = styled.div`
  border-radius: 1rem 1rem 0.5rem 0.5rem;
  background: white;
  box-shadow: 0 0 10px 4px #f3f2f2;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0) 15%,
    #fff 0,
    #fff
  );
`;

export const CardTop = styled.div`
  text-align: center;
  padding: 0 0 8px;
  font-size: 1.3rem;
  color: #fff;
  border-radius: 15px 15px 0 0;
`;

export const PlanName = styled.h1`
  text-align: center;
  padding: 1.5rem 0 10px 0;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 700;
  font-size: 2rem;
  color: #555;
  background-color: #fff;
`;

export const PlanInfo = styled.span`
  font-size: 1.2rem;
  color: #555;
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
`;

export const PlanValuation = styled.div`
  color: #585858;
  text-align: center;
`;

export const Price = styled.span`
  font-size: 2.3rem;
`;

export const Period = styled.sub`
  margin-left: 1.2rem;
  font-size: 1.4rem;
  bottom: -0.25em;
`;

export const Start = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.div`
  border: none;
  background: #f5402d;
  color: white;
  padding: 8px 80px;
  font-size: 1.2rem;
  border-radius: 50px;
  margin: 20px 0;
`;

export const PlanList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1rem 0 3rem 0;
  color: #777;
`;

export const PlanContent = styled.span`
  font-size: 18px;
  padding-top: 1rem;
`;
