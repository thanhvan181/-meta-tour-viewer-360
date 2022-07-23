import styled from 'styled-components';

export const Contact = styled.div`
  background-image: url(https://meta.tourzy.vn/public/frontend/showroom/images/vr-bg.png);
  background-size: cover;
  background-attachment: fixed;
  background-position: 50%;
  width: 100%;
  padding: 40px 0;
    label {
      color: #fff;
    }  
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding-bottom: 40px;
      .title h1 {
        display: flex;
        font-size: 30px;
        color: #fff;
      }
      p {
        color: #fff;
        font-size: 18px;
      }
    }
  }
`;
