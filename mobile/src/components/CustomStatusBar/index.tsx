import React from 'react';

import { StatusBar } from 'react-native';

import * as S from './styles';

const CustomStatusBar: React.FC = () => {
  return (
    <S.Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </S.Container>
  );
};

export default CustomStatusBar;
