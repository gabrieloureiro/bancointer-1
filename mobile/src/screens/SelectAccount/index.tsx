import React, { useCallback, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  cancelAnimation,
  withTiming,
  sequence,
  repeat,
  Easing,
  delay,
} from 'react-native-reanimated';

import chevronRightIcon from '../../assets/icons/chevron-right.png';
import * as S from './styles';

type GestureHandlerContext = {
  posX: number;
};

const SelectAccount: React.FC = () => {
  const positionX = useSharedValue(0);

  const handleGestureEvent = useAnimatedGestureHandler<GestureHandlerContext>({
    onStart: (event, context) => {
      context.posX = positionX.value;

      cancelAnimation(positionX);
    },
    onActive: (event, context) => {
      positionX.value = context.posX + event.translationX;
    },
    onEnd: () => {
      positionX.value = withTiming(0, {
        duration: 1000,
        easing: Easing.bounce,
      });
    },
  });

  const animation = useCallback(() => {
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
    animation();
  }, [animation]);

  return (
    <S.Container>
      <S.Accounts>
        <S.Account>
          <S.AccountRemove>
            <S.AccountRemoveText>Remover</S.AccountRemoveText>
          </S.AccountRemove>

          <PanGestureHandler onGestureEvent={handleGestureEvent}>
            <S.AccountContent style={accountContentAnimationStyle}>
              <S.Avatar
                source={{ uri: 'https://github.com/maurodesouza.png' }}
              />

              <S.Info>
                <S.InfoName>Mauro Antonio Aires de Souza Junior</S.InfoName>
                <S.InfoAgency>1234567-8</S.InfoAgency>
              </S.Info>

              <S.Image source={chevronRightIcon} />
            </S.AccountContent>
          </PanGestureHandler>
        </S.Account>
      </S.Accounts>

      <S.Footer>
        <TouchableWithoutFeedback>
          <S.FooterText>Entrar com outra conta</S.FooterText>
        </TouchableWithoutFeedback>
      </S.Footer>
    </S.Container>
  );
};

export default SelectAccount;
