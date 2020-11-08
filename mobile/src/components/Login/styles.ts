import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import { Input as CustomInput } from '../Inputs';

export const Container = styled.View`
  background: ${props => props.theme.colors.light_gray_bg};
  padding: 26px 16px 20px;
  border-radius: 8px;
`;

export const InputWrapper = styled(Animated.View)`
  margin-bottom: 35px;
`;

export const Input = styled(CustomInput)`
  background: ${props => props.theme.colors.white};
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
