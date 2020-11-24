import React, {
  useEffect,
  useRef,
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
} from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import errorIcon from '../../../assets/icons/error.png';

import * as S from '../styles';

type InputProps = TextInputProps & {
  label: string;
  name: string;
  onChangeText?: (text: string) => void;
  rawValue?: string;
  hasNext?: boolean;
};

type InputValueRef = {
  value: string;
};

type InputElementRef = {
  focus: () => void;
};

const Input: React.ForwardRefRenderFunction<InputElementRef, InputProps> = (
  { name, label, hasNext = true, onChangeText, rawValue = '', ...rest },
  ref,
) => {
  const { registerField, fieldName, defaultValue = '', error } = useField(name);

  const inputValueRef = useRef<InputValueRef>({
    value: defaultValue,
  });

  const inputElementRef = useRef<TextInput>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleOnChangeText = useCallback(
    (text: string) => {
      if (inputValueRef.current) inputValueRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputElementRef.current?.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,

      getValue: input => {
        return rawValue || input.value;
      },

      clearValue: (_, newValue) => {
        inputElementRef.current?.clear();
        inputValueRef.current.value = newValue;
      },
    });
  }, [registerField, fieldName, rawValue]);

  return (
    <S.Container hasNext={hasNext}>
      <S.Label isFocused={isFocused}>{label}</S.Label>

      <S.InputWrapper>
        <S.Input
          ref={inputElementRef}
          defaultValue={defaultValue}
          onChangeText={handleOnChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {error && <S.ErrorIcon source={errorIcon} />}
      </S.InputWrapper>

      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Container>
  );
};

export default forwardRef(Input);
