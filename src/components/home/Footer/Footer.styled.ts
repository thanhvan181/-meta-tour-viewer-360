import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 183px;
  display: flex;
  padding: 48px 0;
  @media (max-width: 1024px) {
    display: grid;
    justify-content: center;
  }
  @media (max-width: 425px) {
    display: grid;
  }
`;
export const LogoFooter = styled.div`
  text-align: center;
  padding-top: 80px;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1.8rem;
  margin: 3%;
`;

export const Icon = styled.div`
  width: 468px;
`;

export const Li = styled.li``;

export const Title = styled.h4`
  font-size: 1.8em;
  font-weight: 200;
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const Work = styled.div`
  color: #777;
  padding: 0 15px;
  @media (max-width: 425px) {
    padding: 0 30px !important;
    text-align: center;
  }
`;

export const WorkTitle = styled.div`
  margin-bottom: 20px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 17px;
  @media (max-width: 425px) {
    padding-left: 20px;
    text-align: center;
  }
`;

export const WorkCoppy = styled.p`
  text-align: right;
  line-height: 60px;
`;
