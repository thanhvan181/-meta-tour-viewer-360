import styled from 'styled-components';
export const FeaturesCard = styled.div`
  /* width: 1000px; */
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* justify-content: space-between; */
  /* background: #000; */
  :nth-child(even) {
    flex-direction: row-reverse;
  }
  .images {
    width: 500px;
    /* padding: 30px; */
  }
  .images img {
    width: 100%;
  }
  .detail {
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: #fc633e;
      font-size: 35.2;
      font-weight: 100;
      line-height: 45px;
      mix-blend-mode: 32px;
    }
    .detail_main {
      line-height: 24px;
      color: #777777;
      font-weight: 300;
      ul {
        padding: 0;
        li {
          list-style: none;
          display: flex;
          gap: 5px;
          font-size: 14px;
          svg {
            font-size: 30px;
          }
        }
      }
    }
  }
`;
