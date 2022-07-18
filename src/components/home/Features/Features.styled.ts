import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const H2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: black;
`;

export const Desc = styled.p`
  width: 60%;
  margin: 0 auto;
  color: #777;
`;

export const FeaturesCard = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1200px) {
    max-width: 1170px;
    margin: auto;
    gap: 50px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    width: 140%;
    text-align: center;
  }
`;

export const Picture = styled.div`
  width: 35%;
  margin: 0 1rem;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
`;

export const TitleFeature = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 32px;
  margin-bottom: 0.5rem;
`;

export const DescFeature = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 300;
  margin: 0 1rem 1.5rem 0;
  color: #777;
`;
