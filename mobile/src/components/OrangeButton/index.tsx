import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import * as S from './styles';

type OrangeButtonProps = RectButtonProperties & {
  children: string;
};

const OrangeButton: React.FC<OrangeButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container {...rest}>
      <S.ContainerBg>
        <S.ContainerText>{children}</S.ContainerText>
      </S.ContainerBg>
    </S.Container>
  );
};

export default OrangeButton;
