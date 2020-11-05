import React, { useContext } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components';

import * as S from './styles';

type OrangeButtonProps = RectButtonProperties & {
  children: string;
  isLoading?: boolean;
};

const OrangeButton: React.FC<OrangeButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  const { colors } = useContext(ThemeContext);
  return (
    <S.Container {...rest}>
      <S.ContainerBg>
        {isLoading ? (
          <ActivityIndicator size={20} color={colors.white} />
        ) : (
          <S.ContainerText>{children}</S.ContainerText>
        )}
      </S.ContainerBg>
    </S.Container>
  );
};

export default OrangeButton;
