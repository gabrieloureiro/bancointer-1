import React, { useCallback, useState, forwardRef } from 'react';
import { TextInputMaskProps, TextInputMask } from 'react-native-masked-text';

import Input from '../Input';

type InputMaskProps = TextInputMaskProps & {
  label?: string;
  name: string;
  hasNext?: boolean;
};

const InputMask: React.ForwardRefRenderFunction<
  TextInputMask,
  InputMaskProps
> = ({ type, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback(
    (maskedValue: string, unmaskedValue = '') => {
      setValue(maskedValue);
      setRawValue(unmaskedValue);
    },
    [],
  );

  return (
    <TextInputMask
      ref={ref}
      includeRawValueInChangeText
      type={type}
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        rawValue,
        ...rest,
      }}
      {...rest}
    />
  );
};

export default forwardRef(InputMask);
