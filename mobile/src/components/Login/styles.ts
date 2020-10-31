import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  background: ${props => props.theme.colors.light_gray_bg};
  padding: 26px 16px 20px;
  border-radius: 8px;
`;

export const InputWrapper = styled(Animated.View)``;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.primary_light};
  font-size: 15px;

  padding-left: 4px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput.attrs(props => ({
  selectionColor: props.theme.colors.primary_light,
}))`
  width: 100%;
  height: 49px;
  padding: 0 15px;

  background: ${props => props.theme.colors.white};
  border-radius: 4px;

  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_input};
  font-size: 15px;
`;

export const LoginButton = styled(RectButton)`
  position: relative;
  z-index: 2;
  margin: 35px auto 0;
  height: 48px;
  width: 220px;
`;

export const LoginButtonBg = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.colors.primary_darken, props.theme.colors.primary_light],
  start: [0, 0],
  end: [1, 0],
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const LoginButtonTxt = styled.Text`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 16px;
`;

export const ForgotPasswordText = styled(Animated.Text)`
  align-self: center;
  margin-top: -28px;
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.primary_light};
  text-transform: uppercase;
  font-size: 16px;
`;

export const ProblemsText = styled(Animated.Text)`
  align-self: center;
  margin-top: -14px;
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.primary_light};
  text-transform: uppercase;
  font-size: 14px;
`;
