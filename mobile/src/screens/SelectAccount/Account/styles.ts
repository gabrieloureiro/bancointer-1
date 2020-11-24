import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.TouchableOpacity`
  position: relative;
`;

export const AccountContent = styled(Animated.View)`
  padding: 20px 25px 20px 16px;
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

  background: ${props => props.theme.colors.light_gray_complement};
`;

export const NoAvatar = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  margin-right: 26px;
  flex-shrink: 0;

  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.light_gray_complement};
`;

export const NoAvatarText = styled.Text`
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.regular};
  font-size: 26px;
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
