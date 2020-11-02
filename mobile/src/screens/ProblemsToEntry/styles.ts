import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.text_base};
  font-size: 16px;
  margin: 27px 0 23px;
`;

export const Tips = styled(ScrollView)`
  align-self: stretch;
  /* flex: 1; */
`;

export const Wrapper = styled.View`
  position: relative;
  padding-left: 26px;
  margin-bottom: 23px;
`;

export const Dot = styled.View`
  position: absolute;
  top: 7px;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${props => props.theme.colors.text_complement};
`;

export const TipText = styled.Text`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.text_complement};
  font-size: 16px;
  margin-bottom: 3px;
`;

export const TipTextItalic = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_complement};
  font-size: 14.5px;
  font-style: italic;
`;

export const WhiteSpace = styled.View`
  height: 15px;
`;

export const Footer = styled.View`
  padding: 15px 0 15px;
`;
