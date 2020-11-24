import React, { useRef, useState, useCallback } from 'react';
import { Image, TextInput, Keyboard, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

import * as Random from 'expo-random';
import * as Yup from 'yup';

import OrangeButton from '../../components/OrangeButton';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/icons/logo.png';

import * as S from './styles';
import { useAccount } from '../../hooks/accounts';

type SubmitFormData = {
  name: string;
  password: string;
  account: string;
  githubProfile: string;
};

const NewAccount: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);

  const githubProfileInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { addAccount, accounts } = useAccount();

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          account: Yup.string()
            .matches(/(\d{7}-\d{1})/, {
              message: 'Conta inválida',
            })
            .required(),
          name: Yup.string().required(),
          githubProfile: Yup.string(),
          password: Yup.string().min(6).max(8).required(),
        });

        await schema.validate(data, { abortEarly: false });

        setLoading(false);
        addAccount(data);

        navigation.navigate('Initial');
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigation, addAccount],
  );

  const activeTimeoutToSubmit = useCallback(
    (data: SubmitFormData) => {
      setLoading(true);

      setTimeout(() => {
        if (accounts.length >= 3) {
          setLoading(false);

          Alert.alert(
            'Numero máximo de contas',
            'Você já possui o numero máximo de contas cadastradas!',
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('SelectAccount');
                },
              },
            ],
          );

          return;
        }

        handleSubmit(data);
      }, 1500);
    },
    [handleSubmit, accounts.length, navigation],
  );

  return (
    <S.Container
      contentContainerStyle={{
        paddingBottom: 16,
      }}
    >
      <S.LogoBg>
        <Image source={logo} />
      </S.LogoBg>

      <S.Wrapper>
        <S.Form ref={formRef} onSubmit={activeTimeoutToSubmit}>
          <S.InputMask
            name="account"
            label="Qual a sua conta"
            placeholder="Conta com dígito"
            keyboardType="numeric"
            type="custom"
            options={{
              mask: '9999999-9',
            }}
            maxLength={9}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              nameInputRef.current?.focus();
            }}
          />

          <S.Input
            ref={nameInputRef}
            name="name"
            label="Qual o seu nome"
            placeholder="Seu nome completo"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="words"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              githubProfileInputRef.current?.focus();
            }}
          />

          <S.Input
            ref={githubProfileInputRef}
            name="githubProfile"
            label="Perfil do seu github"
            placeholder="github.com/seu-perfil"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />

          <S.Input
            secureTextEntry
            ref={passwordInputRef}
            name="password"
            label="Crie uma senha"
            placeholder="Sua senha"
            returnKeyType="send"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              Keyboard.dismiss();
              formRef.current?.submitForm();
            }}
          />

          <OrangeButton
            isLoading={loading}
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Criar
          </OrangeButton>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default NewAccount;
