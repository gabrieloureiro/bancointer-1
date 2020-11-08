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

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import * as Yup from 'yup';

import UserInfo from '../UserInfo';
import OrangeButton from '../OrangeButton';

import getValidationErrors from '../../utils/getValidationErrors';

import * as S from './styles';

type SubmitFormData = {
  password: string;
};

const Login: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const inputWrapperMarginTop = useSharedValue(-75);

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

    inputWrapperMarginTop.value = withTiming(
      -75,
      {
        duration: 500,
      },
      () => {
        formRef.current?.setErrors({});
      },
    );
  }, [inputWrapperMarginTop]);

  const handlerBackButton = useCallback(() => {
    if (isOpen) {
      closeLogin();

      return true;
    }

    return false;
  }, [isOpen, closeLogin]);

  const handleSubmit = useCallback(async (data: SubmitFormData) => {
    setLoading(true);
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        password: Yup.string().required(),
      });

      await schema.validate(data, { abortEarly: false });

      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        inputRef.current?.focus();
      }
    }
  }, []);

  const activeTimeoutToSubmit = useCallback(
    (data: SubmitFormData) => {
      setLoading(true);

      setTimeout(() => handleSubmit(data), 1500);
    },
    [handleSubmit],
  );

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
        <Form ref={formRef} onSubmit={activeTimeoutToSubmit}>
          <S.Input
            secureTextEntry
            ref={inputRef}
            name="password"
            label="Senha"
            placeholder="Senha"
            hasNext={false}
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />
        </Form>
      </S.InputWrapper>

      <OrangeButton
        isLoading={loading}
        onPress={() => (isOpen ? formRef.current?.submitForm() : openLogin())}
      >
        Entrar
      </OrangeButton>

      <S.ForgotPasswordText
        style={forgotPasswordTextAnimation}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
      >
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
