import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  cancelAnimation,
  withTiming,
  Easing,
  sequence,
  repeat,
  delay,
} from 'react-native-reanimated';

import { AccountData, useAccount } from '../../../hooks/accounts';

import chevronRightIcon from '../../../assets/icons/chevron-right.png';
import getFirstLetterOfName from '../../../utils/getFirstLettersOfName';

import * as S from './styles';

type GestureHandlerContext = {
  posX: number;
};

type AccountProps = {
  account: AccountData;
  first?: boolean;
};

const Account: React.FC<AccountProps> = ({ account, first = false }) => {
  const [isValidImageUrl, setIsValidImageUrl] = useState(true);

  const navigation = useNavigation();
  const { removeAccount, setCurrentAccount } = useAccount();

  const positionX = useSharedValue(0);
  const screenWidth = Dimensions.get('screen').width;

  const selectAccount = useCallback(() => {
    setCurrentAccount(account);

    navigation.navigate('Initial');
  }, [navigation, account, setCurrentAccount]);

  const handleGestureEvent = useAnimatedGestureHandler<GestureHandlerContext>({
    onStart: (event, context) => {
      context.posX = positionX.value;

      cancelAnimation(positionX);
    },
    onActive: (event, context) => {
      positionX.value = context.posX + event.translationX;
    },
    onEnd: () => {
      if (positionX.value < -screenWidth / 3) {
        positionX.value = withTiming(
          -screenWidth,
          {
            duration: 300,
          },
          () => {
            removeAccount(account.id);
          },
        );
      } else {
        positionX.value = withTiming(0, {
          duration: 1000,
          easing: Easing.bounce,
        });
      }
    },
  });

  const initialAnimation = useCallback(() => {
    positionX.value = delay(
      1000,
      repeat(
        sequence(
          withTiming(-60, { duration: 500 }),
          withTiming(0, { duration: 1000, easing: Easing.bounce }),
          withTiming(0, { duration: 300 }),
        ),
        5,
      ),
    );
  }, [positionX]);

  const accountContentAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (first) initialAnimation();

    return () => {
      cancelAnimation(positionX);
    };
  }, [initialAnimation, first, positionX]);

  useEffect(() => {
    setIsValidImageUrl(true);
  }, [account]);

  return (
    <S.Container onPress={selectAccount}>
      <S.AccountRemove>
        <S.AccountRemoveText>Remover</S.AccountRemoveText>
      </S.AccountRemove>

      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <S.AccountContent style={accountContentAnimationStyle}>
          {isValidImageUrl ? (
            <S.Avatar
              onError={() => setIsValidImageUrl(false)}
              source={{
                uri: `https://github.com/${account.githubProfile}.png`,
              }}
            />
          ) : (
            <S.NoAvatar>
              <S.NoAvatarText>
                {getFirstLetterOfName(account.name as string)}
              </S.NoAvatarText>
            </S.NoAvatar>
          )}

          <S.Info>
            <S.InfoName>{account.name}</S.InfoName>
            <S.InfoAgency>{account.account}</S.InfoAgency>
          </S.Info>

          <S.Image source={chevronRightIcon} />
        </S.AccountContent>
      </PanGestureHandler>
    </S.Container>
  );
};

export default Account;
