import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

export const Accounts = styled.View`
  flex: 1;
  margin-left: 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.light_gray_complement};
`;

export const Account = styled.View`
  position: relative;
`;

export const AccountContent = styled(Animated.View)`
  padding: 20px 25px 20px 0;
  flex-direction: row;
  align-items: center;

  background: ${props => props.theme.colors.white};
`;

export const AccountRemove = styled.View`
  align-items: flex-end;
  padding-right: 16px;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${props => props.theme.colors.remove};
`;

export const AccountRemoveText = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.white};
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  margin-right: 26px;
  flex-shrink: 0;
`;

export const Info = styled.View`
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
  color: ${props => props.theme.colors.primary_darken};
  font-size: 15px;
`;

export const Image = styled.Image`
  margin-left: 40px;
  flex-shrink: 0;
`;

export const Footer = styled.View`
  height: 95px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.primary_light};
  font-size: 18px;
`;
