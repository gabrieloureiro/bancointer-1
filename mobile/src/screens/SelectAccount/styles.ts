import styled from 'styled-components/native';

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
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
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
  color: ${props => props.theme.colors.primary_darken};
  font-size: 15px;
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
