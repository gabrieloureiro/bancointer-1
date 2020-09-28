import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

import Animated from 'react-native-reanimated';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === 'android'
    ? `${StatusBar.currentHeight}px`
    : 0};
  background: rgba(0, 0, 0, 0.5);
`;

export const DraggableContainer = styled(Animated.View)`
  flex: 1;
  background: ${props => props.theme.colors.white};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.View`
  height: 66px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.white};
  position: relative;
`;

export const Drag = styled.View`
  position: absolute;
  top: 8px;
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background: ${props => props.theme.colors.light_gray_complement};
`;
