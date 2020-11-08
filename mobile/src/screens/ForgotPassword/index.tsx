import React, { useCallback, useRef, useState } from 'react';
import { Image, TextInput } from 'react-native';

import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';

import { TextInputMask } from 'react-native-masked-text';

import * as Yup from 'yup';

import { Input, InputMask } from '../../components/Inputs';
import OrangeButton from '../../components/OrangeButton';

import arrowLeftIcon from '../../assets/icons/arrow-left.png';

import getValidationErrors from '../../utils/getValidationErrors';

import validateDateEntry from '../../utils/validateDateEntry';
import * as S from './styles';

type SubmitFormData = {
  motherName: string;
  rg: string;
  cpf: string;
  bornDate: string;
};

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const bornDateInputRef = useRef<TextInputMask>(null);

  const rgInputRef = useRef<TextInputMask>(null);
  const motherNameInputRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = useCallback(
    async (data: SubmitFormData) => {
      setLoading(true);
      formRef.current?.setErrors({});

      try {
        const schema = Yup.object().shape({
          motherName: Yup.string().required(),
          rg: Yup.string()
            .matches(/(\d{2}\.)(\d{3}\.)(\d{3}-)(\d{1})/gi, {
              message: 'RG inválido',
            })
            .required(),
          cpf: Yup.string()
            .matches(/(\d{3}\.){2}(\d{3}-)(\d{2})/gi, {
              message: 'CPF inválido',
            })
            .required(),
          bornDate: Yup.string()
            .matches(/(\d{2}\/){2}(\d{4})/gi, {
              message: 'Data inválida',
            })
            .test('Validate date', 'Data inválida', validateDateEntry)
            .required(),
        });

        await schema.validate(data, { abortEarly: false });

        setLoading(false);
        navigation.navigate('Initial');
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigation],
  );

  const activeTimeoutToSubmit = useCallback(
    (data: SubmitFormData) => {
      setLoading(true);

      setTimeout(() => handleSubmit(data), 1500);
    },
    [handleSubmit],
  );

  return (
    <S.Container
      contentContainerStyle={{
        paddingTop: 37,
        paddingBottom: 15,
      }}
    >
      <S.Header>
        <S.ImageWrapper onPress={() => navigation.goBack()}>
          <Image source={arrowLeftIcon} />
        </S.ImageWrapper>
        <S.HeaderTitle>Dados Pessoais</S.HeaderTitle>
      </S.Header>

      <S.InitialText>
        Para sua segurança, antes de utilizar a sua conta precisamos conferir
        algumas informações pessoais
      </S.InitialText>

      <S.Form ref={formRef} onSubmit={activeTimeoutToSubmit}>
        <InputMask
          name="cpf"
          label="CPF"
          keyboardType="numeric"
          maxLength={14}
          type="custom"
          options={{
            mask: '999.999.999-99',
          }}
          placeholder="Apenas números"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            bornDateInputRef.current?.getElement().focus();
          }}
        />

        <InputMask
          ref={bornDateInputRef}
          name="bornDate"
          label="Data de nascimento"
          keyboardType="numeric"
          maxLength={10}
          type="custom"
          options={{
            mask: '99/99/9999',
          }}
          placeholder="DD/MM/AAAA"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            rgInputRef.current?.getElement().focus();
          }}
        />

        <InputMask
          ref={rgInputRef}
          name="rg"
          label="Documento de identificação"
          keyboardType="numeric"
          maxLength={12}
          type="custom"
          options={{
            mask: '99.999.999-9',
          }}
          placeholder="RG"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            motherNameInputRef.current?.focus();
          }}
        />

        <Input
          ref={motherNameInputRef}
          name="motherName"
          label="Nome completo da mãe"
          placeholder="Nome completo"
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="words"
          returnKeyType="send"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            formRef.current?.submitForm();
          }}
        />
      </S.Form>

      <OrangeButton
        isLoading={loading}
        onPress={() => {
          formRef.current?.submitForm();
        }}
      >
        Continuar
      </OrangeButton>
    </S.Container>
  );
};

export default ForgotPassword;
