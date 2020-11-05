import React, {
  useEffect,
  useRef,
  forwardRef,
  useCallback,
  useState,
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
};

type InputValueRef = {
  value: string;
};

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  { name, label, onChangeText, rawValue = '', ...rest },
  ref,
) => {
  const { registerField, fieldName, defaultValue = '', error } = useField(name);

  const inputValueRef = useRef<InputValueRef>({
    value: defaultValue,
  });

  const [isFocused, setIsFocused] = useState(false);

  const handleOnChangeText = useCallback(
    (text: string) => {
      if (inputValueRef.current) inputValueRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',

      getValue: ref => {
        return rawValue || (ref.value as string);
      },
    });
  }, [registerField, fieldName, rawValue]);

  return (
    <S.Container>
      <S.Label isFocused={isFocused}>{label}</S.Label>

      <S.InputWrapper>
        <S.Input
          ref={ref}
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
