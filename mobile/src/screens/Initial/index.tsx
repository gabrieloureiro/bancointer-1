import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/icons/logo.png';

import isafeIcon from '../../assets/icons/isafe.png';
import interpagIcon from '../../assets/icons/interpag.png';
import dotsIcon from '../../assets/icons/dots.png';
import payIcon from '../../assets/icons/pay.png';
import receiveIcon from '../../assets/icons/receive.png';

import * as S from './styles';

const Login = (): JSX.Element => {
  return (
    <S.Container>
      <S.LogoBg>
        <Image source={logo} />
      </S.LogoBg>

      <S.Cards>
        <S.CardLogin>
          <S.Wrapper>
            <S.Avatar source={{ uri: 'https://github.com/maurodesouza.png' }} />

            <S.Info>
              <S.InfoName>Mauro Antonio Aires de Souza Junior</S.InfoName>
              <S.InfoAgency>1234567-8</S.InfoAgency>
            </S.Info>

            <S.ChangeButton>
              <S.ChangeButtonTxt>Trocar</S.ChangeButtonTxt>
            </S.ChangeButton>
          </S.Wrapper>

          <S.LoginButton>
            <S.LoginButtonBg>
              <S.LoginButtonTxt>Entrar</S.LoginButtonTxt>
            </S.LoginButtonBg>
          </S.LoginButton>
        </S.CardLogin>

        <S.Card>
          <Image source={isafeIcon} />
          <S.IconWrapper>
            <Image source={dotsIcon} />

            <S.IconLabel>Gerar</S.IconLabel>
          </S.IconWrapper>
        </S.Card>

        <S.Card>
          <Image source={interpagIcon} />

          <S.Wrapper>
            <S.IconWrapper>
              <Image source={payIcon} />
              <S.IconLabel>Pagar</S.IconLabel>
            </S.IconWrapper>

            <S.IconWrapper>
              <Image source={receiveIcon} />
              <S.IconLabel>Receber</S.IconLabel>
            </S.IconWrapper>
          </S.Wrapper>
        </S.Card>
      </S.Cards>
    </S.Container>
  );
};

export default Login;
