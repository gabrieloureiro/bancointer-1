import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import UserInfo from '../UserInfo';

import * as S from './styles';

const Login: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputWrapperMarginTop = useSharedValue(-75);

  const navigation = useNavigation();

  const openLogin = useCallback(() => {
    setIsOpen(true);

    inputWrapperMarginTop.value = withTiming(30, {
      duration: 500,
    });
  }, [inputWrapperMarginTop]);

  const closeLogin = useCallback(() => {
    setIsOpen(false);

    inputWrapperMarginTop.value = withTiming(-75, {
      duration: 500,
    });
  }, [inputWrapperMarginTop]);

  const handlerBackButton = useCallback(() => {
    if (isOpen) closeLogin();
    else BackHandler.exitApp();

    return true;
  }, [isOpen, closeLogin]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlerBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlerBackButton);
    };
  }, [handlerBackButton]);

  const inputWrapperAnimation = useAnimatedStyle(() => ({
    marginTop: inputWrapperMarginTop.value,
    opacity: interpolate(inputWrapperMarginTop.value, [-75, 0, 30], [0, 0, 1]),
    transform: [
      {
        translateY: interpolate(
          inputWrapperMarginTop.value,
          [-75, -50],
          [-500, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const forgotPasswordTextAnimation = useAnimatedStyle(() => ({
    marginTop: interpolate(inputWrapperMarginTop.value, [-75, 30], [-28, 30]),
    opacity: interpolate(inputWrapperMarginTop.value, [-75, 0, 30], [0, 0, 1]),
  }));

  const problemsTextAnimation = useAnimatedStyle(() => ({
    marginTop: interpolate(inputWrapperMarginTop.value, [-75, 30], [-16, 40]),
    opacity: interpolate(inputWrapperMarginTop.value, [-75, 0, 30], [0, 0, 1]),
  }));

  return (
    <S.Container>
      <UserInfo
        buttonText="trocar"
        onPress={() => navigation.navigate('SelectAccount')}
      />

      <S.InputWrapper style={inputWrapperAnimation}>
        <S.Label>Senha</S.Label>
        <S.Input
          placeholder="Senha"
          keyboardType="default"
          autoCapitalize="none"
          returnKeyType="join"
          secureTextEntry
        />
      </S.InputWrapper>

      <S.LoginButton onPress={openLogin}>
        <S.LoginButtonBg>
          <S.LoginButtonTxt>Entrar</S.LoginButtonTxt>
        </S.LoginButtonBg>
      </S.LoginButton>

      <S.ForgotPasswordText style={forgotPasswordTextAnimation}>
        Esqueci minha senha
      </S.ForgotPasswordText>

      <S.ProblemsText style={problemsTextAnimation}>
        Problemas para entrar?
      </S.ProblemsText>
    </S.Container>
  );
};

export default Login;