import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

export const Container = styled.ScrollView`
  background: ${props => props.theme.colors.white};
  padding-left: 16px;
`;

export const Header = styled.View`
  position: relative;
  height: 46px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text_base};
`;

export const InitialText = styled.Text`
  font-size: 15px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_complement};
  margin-top: 15px;
`;

export const Form = styled(Unform)`
  margin-top: 23px;
  padding-top: 30px;
  padding-right: 16px;
  border-top-width: 1px;
  border-color: ${props => props.theme.colors.light_gray_complement};
`;
