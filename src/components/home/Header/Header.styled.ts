import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.section`
  position: relative;
  height: 75vh;
  width: 100%;
`;

export const HeaderImage = styled.div`
  max-width: 50%;
  visibility: visible;
  height: 100%;
  float: right;
  margin-right: 5%;
`;
export const HeaderUl = styled.ul`
  transform: translateX(0px);
  padding: 0;
  list-style: none;
`;

export const HeaderLi = styled.li`
  transition: opacity 800ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s;
  width: 680px;
  background-image: url(https://meta.tourzy.vn/public/frontend/showroom/_nuxt/img/39c2f87.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;
  height: 80vh;
  @media (min-width: 992px) {
    line-height: 24px;
  }
`;

export const HeaderHero = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroTitle = styled.div`
  position: absolute;
  top: 30%;
  color: #333;
  padding-left: 3%;
`;

export const HeroTitleHeading = styled.div`
  color: #333;
`;

export const HeadingH1 = styled.h1`
  color: #000;
  font-family: 'Cantata One', serif;
  font-size: 4.3rem;
  line-height: 1.3;
  margin: 1rem 0;
  cursor: default;
`;

export const HeadingSp = styled.span`
  font-size: 3rem;
`;

export const HeadingDesc = styled.div`
  font-size: 2.5vw;
  font-weight: lighter;
`;

export const HeaderCta = styled.div`
  padding: 2rem 0;
  z-index: 10;
`;

export const HeaderBtn = styled.a`
  padding: 0.8rem 2.5rem;
  margin: 0;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  margin: 0 15px;
  border-radius: 10px;
`;
