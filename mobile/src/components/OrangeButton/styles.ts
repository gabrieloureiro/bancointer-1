import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  height: 48px;
  width: 220px;
`;

export const ContainerBg = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.colors.primary_darken, props.theme.colors.primary_light],
  start: [0, 0],
  end: [1, 0],
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ContainerText = styled.Text`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 16px;
`;
