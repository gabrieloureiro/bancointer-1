import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

import Animated from 'react-native-reanimated';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android'
    ? `${StatusBar.currentHeight}px`
    : 0};
  background: rgba(0, 0, 0, 0.5);

  flex-direction: row;
  align-items: flex-end;
`;

export const DraggableContainer = styled(Animated.View)`
  flex: 1;
  background: ${props => props.theme.colors.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
`;

export const Drag = styled.View`
  margin-top: 8px;
  align-self: center;
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background: ${props => props.theme.colors.light_gray_complement};
`;
