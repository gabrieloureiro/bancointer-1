import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

type LabelProps = {
  isFocused: boolean;
};

export const Label = styled.Text<LabelProps>`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.text_complement};
  font-size: 14px;
  margin-left: 4px;

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.primary_light};
    `}
`;

export const InputWrapper = styled.View`
  position: relative;
  width: 100%;
  margin-top: 4px;
`;

export const Input = styled.TextInput.attrs(props => ({
  selectionColor: props.theme.colors.primary_light,
}))`
  width: 100%;
  height: 49px;
  background: ${props => props.theme.colors.light_gray_bg};
  border-radius: 8px;
  padding: 0 16px;

  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_input};
  font-size: 15px;
`;

export const InputMask = styled(TextInputMask).attrs(props => ({
  selectionColor: props.theme.colors.primary_light,
}))`
  width: 100%;
  height: 49px;
  background: ${props => props.theme.colors.light_gray_bg};
  border-radius: 8px;
  padding: 0 16px;

  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_input};
  font-size: 15px;
`;

export const ErrorIcon = styled.Image`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-10.5px);
`;

export const ErrorText = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.remove};
  font-size: 13px;
  margin-top: 6px;
  text-align: right;
`;
