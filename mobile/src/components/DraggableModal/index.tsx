import React from 'react';
import { useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import * as S from './styles';

const DraggableModal: React.FC = ({ children }) => {
  const positionY = useSharedValue(0);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleGestureevent = useAnimatedGestureHandler({
    onActive: event => {
      if (positionY.value < 0) return;

      positionY.value = event.translationY;
    },
    onFinish: () => {
      if (positionY.value > 150) {
        positionY.value = withTiming(
          height,
          {
            duration: 300,
          },
          () => {
            navigation.goBack();
          },
        );
      } else {
        positionY.value = withTiming(0, {
          duration: 200,
          easing: Easing.bounce,
        });
      }
    },
  });

  const draggableContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: positionY.value }],
    };
  });

  return (
    <S.Container>
      <PanGestureHandler onGestureEvent={handleGestureevent}>
        <S.DraggableContainer style={draggableContainerAnimatedStyle}>
          <S.Wrapper>
            <S.Drag />
          </S.Wrapper>

          {children}
        </S.DraggableContainer>
      </PanGestureHandler>
    </S.Container>
  );
};

export default DraggableModal;
