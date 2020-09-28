import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';
import { Camera as ExpoCamera } from 'expo-camera';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

export const Camera = styled(ExpoCamera)`
  flex: 1;
`;

export const OverlayVertical = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.6);
  align-items: center;
`;

export const OverlayHorizontal = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.6);
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Focus = styled.View`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  background: transparent;
  justify-content: center;
  align-items: center;
`;

export const RedLine = styled(Animated.View)`
  width: 98%;
  height: 1.5px;
  background: ${props => props.theme.colors.primary_darken};
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text_base};
  font-size: 15px;
  width: 277px;
  text-align: center;
  margin-top: 20px;
`;
