import React, { useState, useEffect } from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

import { useAccount } from '../../hooks/accounts';
import getFirstLetterOfName from '../../utils/getFirstLettersOfName';

import * as S from './styles';

type UserInfoProps = TouchableOpacityProps & {
  buttonText: string;
  onPress: (event: GestureResponderEvent) => void;
};

const UserInfo: React.FC<UserInfoProps> = ({ buttonText, ...rest }) => {
  const [isValidImageUrl, setIsValidImageUrl] = useState(true);
  const { currentAccount } = useAccount();

  useEffect(() => {
    setIsValidImageUrl(true);
  }, [currentAccount]);

  return (
    <S.Container>
      {isValidImageUrl ? (
        <S.Avatar
          onError={() => setIsValidImageUrl(false)}
          source={{
            uri: `https://github.com/${currentAccount?.githubProfile}.png`,
          }}
        />
      ) : (
        <S.NoAvatar>
          <S.NoAvatarText>
            {getFirstLetterOfName(currentAccount?.name as string)}
          </S.NoAvatarText>
        </S.NoAvatar>
      )}

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
