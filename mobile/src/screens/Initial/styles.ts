import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
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

export const CardLogin = styled.View`
  background: ${props => props.theme.colors.light_gray_bg};
  padding: 26px 16px 16px;
  border-radius: 8px;
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

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const Info = styled.View`
  margin-right: 14px;
  flex: 1;
`;

export const InfoName = styled.Text.attrs(() => ({
  numberOfLines: 2,
}))`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_base};
  font-size: 15px;
`;

export const InfoAgency = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text_complement};
  font-size: 15px;
`;

export const ChangeButton = styled.TouchableOpacity`
  width: 100px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-shrink: 0;
  border: 1px solid ${props => props.theme.colors.light_gray_complement};
`;

export const ChangeButtonTxt = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text_base};
  font-size: 14px;
  text-transform: uppercase;
`;

export const LoginButton = styled.TouchableOpacity`
  margin: 35px auto 0;
  border-radius: 4px;
  overflow: hidden;
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
`;

export const LoginButtonTxt = styled.Text`
  font-family: ${props => props.theme.fonts.semi_bold};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 16px;
`;

export const IconWrapper = styled.View`
  margin-left: 26px;
  align-items: center;
`;

export const IconLabel = styled.Text`
  margin-top: 5px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_base};
  font-size: 13px;
`;
