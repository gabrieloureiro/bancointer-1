import styled from 'styled-components/native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text_base};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 26px;
`;

export const TextOrange = styled.Text`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.bold};
  font-size: 26px;
  padding-right: 10px;
`;

export const Avatar = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  margin-top: 60px;
`;

export const SocialIcons = styled.View`
  margin-top: 40px;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(Feather)`
  color: ${props => props.theme.colors.primary_light};
`;

export const MadeBy = styled.Text`
  margin: 40px 0 80px;
  text-align: center;
  color: ${props => props.theme.colors.text_base};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`;

export const MadeByName = styled.Text`
  color: ${props => props.theme.colors.primary_light};
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
`;
