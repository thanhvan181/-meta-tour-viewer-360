import styled from 'styled-components';

export const Section = styled.section`
  background-image: linear-gradient(-135deg, #f5402d, #fe5f32 80%);
  margin-bottom: 20px;
  @media (max-width: 425px) {
    width: 465px;
    text-align: center;
  }
`;

export const Container1 = styled.div`
  display: flex;
  padding-top: 2.5rem;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
  max-width: 100%;

  margin: auto;
  padding-bottom: 20px;

  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`;

export const Title2 = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  line-height: 45px;
  font-weight: 400;
`;

export const CallToBtn = styled.div`
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 15px;
  line-height: 1.4;
  font-size: 1rem;
  min-width: 200px;
  margin: 1rem auto;
  border-radius: 50px;
  text-align: center;
`;
