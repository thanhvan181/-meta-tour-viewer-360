import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 20px;
`;

export const Industry = styled.div`
  position: absolute;
  width: 100%;
  background: url(https://meta.tourzy.vn/public/frontend/showroom/images/home-bg.png)
    no-repeat;
  background-size: cover;
  top: -30vh;
  height: calc(100% + 200px);
`;

export const SecWording = styled.div`
  position: relative;
  text-align: center;

  @media screen and (min-width: 992px) {
    max-width: 970px;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    max-width: 750px;
    margin: auto;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-top: 2rem;
  color: #fff;
`;

export const Desc = styled.p`
  color: #fff;
  font-size: 1.2rem;
  width: 100%;
  margin: 0 auto 2rem;
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  margin: auto;
  grid-gap: 50px;

  @media only screen and (max-width: 1200px) {
    max-width: 1170px;
  }
  @media screen and (min-width: 992px) {
    max-width: 1170px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 750px;
    flex-direction: column;
  }
`;

export const IndustryCard = styled.div`
  text-align: center;
  position: relative;

  @media screen and (max-width: 1200px) {
    flex-basis: 33%;
  }
`;

export const WordingCard = styled.div`
  background: #fff;
  margin-top: 160px;
`;

export const Wording = styled.div`
  padding: 1.5rem 0.5rem 0;
`;

export const WordingTitle = styled.h4`
  color: #333;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const WordingDesc = styled.p`
  color: #333;
  font-size: 1rem;
  padding: 0 1rem;
  margin-top: 2rem;
  height: 158px;
`;

export const RectanBtn = styled.a`
  margin-bottom: 1rem;
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 0.8rem 2.5rem;
  cursor: pointer;
`;

export const Img = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  padding: 0 1.5rem;
`;

export const Platform = styled.div`
  margin: 3rem auto;
  padding-bottom: 3rem;
  width: 80%;
  max-width: 1170px;
  padding: 0.5rem 2%;
  @media screen and (min-width: 992px) {
    height: auto;
  }
`;

export const ClientWrap = styled.div`
  overflow: hidden;
`;

export const Mar = styled.marquee`
  margin-bottom: 50px;
`;

export const ClientLogos = styled.div`
  display: inline-flex;
  width: 1170px;
  grid-gap: 5px;
  gap: 35px;
`;
export const ClientLogo = styled.div`
  height: 60px;
  min-width: 140px;
  text-align: center;
`;
