import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

export const LogoBg = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.colors.primary_darken, props.theme.colors.primary],
  start: [0, 0],
  end: [1, 0],
}))`
  align-items: center;
  justify-content: center;
  height: 137px;
`;

export const Cards = styled.View`
  padding: 0 15px;
  margin-top: -25px;
`;

export const Card = styled.View`
  background: ${props => props.theme.colors.light_gray_bg};
  margin-top: 16px;
  padding: 26px 16px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-left: 26px;
  align-items: center;
`;

export const IconLabel = styled.Text`
  margin-top: 5px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_base};
  font-size: 13px;
`;
