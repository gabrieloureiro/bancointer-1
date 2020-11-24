import React from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

import { useAccount } from '../../hooks/accounts';

import * as S from './styles';

type UserInfoProps = TouchableOpacityProps & {
  buttonText: string;
  onPress: (event: GestureResponderEvent) => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ buttonText, ...rest }) => {
  const { currentAccount } = useAccount();

  return (
    <S.Container>
      <S.Avatar
        source={{
          uri: `https://github.com/${currentAccount?.githubProfile}.png`,
        }}
      />

      <S.Info>
        <S.InfoName>{currentAccount?.name}</S.InfoName>
        <S.InfoAgency>{currentAccount?.account}</S.InfoAgency>
      </S.Info>

      <S.ChangeButton {...rest}>
        <S.ChangeButtonTxt>{buttonText}</S.ChangeButtonTxt>
      </S.ChangeButton>
    </S.Container>
  );
};

export default UserInfo;
