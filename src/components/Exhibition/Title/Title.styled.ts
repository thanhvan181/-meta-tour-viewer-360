import styled from 'styled-components';

export const Wrapper = styled.a`
  width: 100%;
  /* background: #000; */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fc633e;
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 50px;
  padding-bottom: 5px;
  &::before {
    position: absolute;
    content: '';
    width: 300px;
    left: calc(50% - 150px);
    bottom: 0;
    height: 3px;
    background: #fc633e;
  }
`;
