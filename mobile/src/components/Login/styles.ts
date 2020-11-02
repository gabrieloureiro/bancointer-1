import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  background: ${props => props.theme.colors.light_gray_bg};
  padding: 26px 16px 20px;
  border-radius: 8px;
`;

export const InputWrapper = styled(Animated.View)`
  margin-bottom: 35px;
`;

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
