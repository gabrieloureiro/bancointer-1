import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { AccountData } from '../../hooks/accounts';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

export const Separator = styled.View`
  height: 1px;
  margin-left: 16px;
  background: ${props => props.theme.colors.light_gray_complement};
`;

export const Accounts = styled(FlatList as new () => FlatList<AccountData>)`
  height: 100%;
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
