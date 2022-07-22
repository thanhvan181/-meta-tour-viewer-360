import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperForm = styled.form`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const SignUpField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  ::before {
    display: inline-block;
    position: absolute;
    width: 0px;
    height: 2px;
    background: #a4243b;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.4s ease;
  }
  :hover::before {
    width: 100%;
  }
`;
export const SignUpInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  padding: 10px 2px 0;
  border-bottom: 2px solid gray;
  border: none;
  outline: none;
  :focus {
    top: 0;

    font-size: 1rem;
    background-color: white;
  }
  :valid {
    top: 0;
    font-size: 2rem;
    background-color: white;
  }
`;
export const SignUpLabel = styled.label`
  color: #bdbdbd;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  top: 0;
  font-size: 1rem;
  background-color: white;
`;

export const WrapperButton = styled.button`
  background: #fc633e;
  color: white;
  padding: 12px 0;
  font-size: 1.2rem;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  :hover {
    background: #4b111b;
  }
`;
export const Span = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: #fc633e;
`;
export const h1 = styled.h1`
  text-align: center;
  color: #fc633e;
`;

export const h2 = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: lighter;

  margin-bottom: 40px;
  text-decoration: underline;
  cursor: pointer;
  color: #fc633e;
`;
