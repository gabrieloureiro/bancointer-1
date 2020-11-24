import React, { useEffect } from 'react';
import { Image, View, Alert } from 'react-native';

import { useNavigation, useIsFocused } from '@react-navigation/native';

import { useAccount } from '../../hooks/accounts';

import Login from '../../components/Login';
import Isafe from '../../components/Isafe';

import logo from '../../assets/icons/logo.png';
import interpagIcon from '../../assets/icons/interpag.png';
import payIcon from '../../assets/icons/pay.png';
import receiveIcon from '../../assets/icons/receive.png';

import * as S from './styles';

const Initial: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { currentAccount } = useAccount();

  useEffect(() => {
    if (isFocused && !currentAccount) {
      Alert.alert(
        '',
        'Você precisa selecionar uma conta antes de ir para a tela de login',
        [
          {
            text: 'Selecionar conta',
            onPress: () => navigation.navigate('SelectAccount'),
          },
        ],
      );
    }
  }, [currentAccount, navigation, isFocused]);

  return currentAccount ? (
    <S.Container
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        paddingBottom: 15,
      }}
    >
      <S.LogoBg>
        <Image source={logo} />
      </S.LogoBg>

      <S.Cards>
        <Login />

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
  ) : (
    <View />
  );
};

export default Initial;
