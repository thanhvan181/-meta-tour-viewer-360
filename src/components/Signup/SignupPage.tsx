// import React from 'react'
import * as S from './style';

type Props = {};

const SignupPage = (props: Props) => {
  return (
    <S.Wrapper>
        
          <S.WrapperForm>
              
                  <S.h1>Create account</S.h1>
                  <S.h2>
                      Already have an account? <S.Span>Sign in</S.Span>
                  </S.h2>

                  <S.SignUpField>
                      <S.SignUpInput type="text" name="username" id="username" required />
                      <S.SignUpLabel>Username</S.SignUpLabel>
                  </S.SignUpField>

                  <S.SignUpField>
                      <S.SignUpInput type="text" name="email" id="email" required />
                      <S.SignUpLabel>Email</S.SignUpLabel>
                  </S.SignUpField>

                  <S.SignUpField>
                      <S.SignUpInput
                          type="password"
                          name="password"
                          id="password"
                          required
                      />
                      <S.SignUpLabel>Password</S.SignUpLabel>
                  </S.SignUpField>
                  <S.SignUpField>
                      <S.SignUpInput
                          type="password"
                          name="password"
                          id="password"
                          required
                      />
                      <S.SignUpLabel>Reset Password</S.SignUpLabel>
                  </S.SignUpField>


                  <S.WrapperButton>Sign up</S.WrapperButton>
             

          </S.WrapperForm>
          
    
    </S.Wrapper>
  );
};

export default SignupPage;
