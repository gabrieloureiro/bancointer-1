import React, { useCallback, useEffect, useState, useRef } from 'react';
import { BackHandler, TextInput } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import UserInfo from '../UserInfo';
import OrangeButton from '../OrangeButton';

import * as S from './styles';

const Login: React.FC = () => {
  const inputWrapperMarginTop = useSharedValue(-75);

  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);

  const [isOpen, setIsOpen] = useState(false);

  const openLogin = useCallback(() => {
    setIsOpen(true);

    inputWrapperMarginTop.value = withTiming(
      30,
      {
        duration: 500,
      },
      () => {
        inputRef.current?.focus();
      },
    );
  }, [inputWrapperMarginTop]);

  const closeLogin = useCallback(() => {
    setIsOpen(false);

    inputWrapperMarginTop.value = withTiming(-75, {
      duration: 500,
    });
  }, [inputWrapperMarginTop]);

  const handlerBackButton = useCallback(() => {
    if (isOpen) {
      closeLogin();

      return true;
    }

    return false;
  }, [isOpen, closeLogin]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlerBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlerBackButton);
    };
  }, [handlerBackButton]);

  useFocusEffect(useCallback(() => () => closeLogin(), [closeLogin]));

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
          ref={inputRef}
          placeholder="Senha"
          keyboardType="default"
          autoCapitalize="none"
          returnKeyType="join"
          secureTextEntry
        />
      </S.InputWrapper>

      <OrangeButton onPress={openLogin}>Entrar</OrangeButton>

      <S.ForgotPasswordText style={forgotPasswordTextAnimation}>
        Esqueci minha senha
      </S.ForgotPasswordText>

      <S.ProblemsText
        style={problemsTextAnimation}
        onPress={() => {
          navigation.navigate('Modals', {
            screen: 'ProblemsToEntry',
          });
        }}
      >
        Problemas para entrar?
      </S.ProblemsText>
    </S.Container>
  );
};

export default Login;
