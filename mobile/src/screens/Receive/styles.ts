import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0px 16px 40px;
`;

export const Header = styled.View`
  margin-bottom: 28px;
  padding-top: 16px;
  height: 66px;
  flex-direction: row;
`;

export const WhiteSpace = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const QRWrapper = styled.View`
  margin: 42px 0;
  align-self: center;
`;

export const Label = styled.Text`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text_complement};
  font-size: 15px;
  width: 277px;
  text-align: center;
  align-self: center;
`;
