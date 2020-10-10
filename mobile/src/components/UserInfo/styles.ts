import styled from 'styled-components/native';

export const Container = styled.View`
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
  min-width: 100px;
  padding: 0 12px;
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
