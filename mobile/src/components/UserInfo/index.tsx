import React from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type UserInfoProps = TouchableOpacityProps & {
  buttonText: string;
  onPress: (event: GestureResponderEvent) => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ buttonText, ...rest }) => {
  return (
    <S.Container>
      <S.Avatar source={{ uri: 'https://github.com/maurodesouza.png' }} />

      <S.Info>
        <S.InfoName>Mauro Antonio Aires de Souza Junior</S.InfoName>
        <S.InfoAgency>1234567-8</S.InfoAgency>
      </S.Info>

      <S.ChangeButton {...rest}>
        <S.ChangeButtonTxt>{buttonText}</S.ChangeButtonTxt>
      </S.ChangeButton>
    </S.Container>
  );
};

export default UserInfo;
