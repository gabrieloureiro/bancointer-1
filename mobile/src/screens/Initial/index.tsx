import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import UserInfo from '../../components/UserInfo';
import Isafe from '../../components/Isafe';

import logo from '../../assets/icons/logo.png';
import interpagIcon from '../../assets/icons/interpag.png';
import payIcon from '../../assets/icons/pay.png';
import receiveIcon from '../../assets/icons/receive.png';

import * as S from './styles';

const Login = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.LogoBg>
        <Image source={logo} />
      </S.LogoBg>

      <S.Cards>
        <S.CardLogin>
          <UserInfo
            buttonText="trocar"
            onPress={() => navigation.navigate('SelectAccount')}
          />

          <S.LoginButton>
            <S.LoginButtonBg>
              <S.LoginButtonTxt>Entrar</S.LoginButtonTxt>
            </S.LoginButtonBg>
          </S.LoginButton>
        </S.CardLogin>

        <Isafe />

        <S.Card>
          <Image source={interpagIcon} />

          <S.Wrapper>
            <S.IconWrapper
              onPress={() => navigation.navigate('Modals', { screen: 'Pay' })}
            >
              <Image source={payIcon} />
              <S.IconLabel>Pagar</S.IconLabel>
            </S.IconWrapper>

            <S.IconWrapper
              onPress={() => {
                navigation.navigate('Modals', { screen: 'Receive' });
              }}
            >
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
