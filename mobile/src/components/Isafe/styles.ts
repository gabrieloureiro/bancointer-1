import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.View`
  background: ${props => props.theme.colors.light_gray_bg};
  margin-top: 16px;
  padding: 26px 16px;
  border-radius: 8px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const RightSide = styled.View`
  flex-shrink: 0;
  margin-left: 52px;
`;

export const LeftSide = styled.View`
  position: relative;
  flex: 1;
  height: 70px;
`;

export const Image = styled(Animated.Image)`
  position: absolute;
`;

export const IconWrapper = styled.TouchableOpacity`
  align-items: center;
`;

export const IconLabel = styled.Text`
  margin-top: 5px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text_base};
  font-size: 13px;
`;

export const Code = styled(Animated.View)`
  margin-top: auto;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
`;

export const NumbersWrapper = styled.View`
  flex-direction: row;
  align-items: stretch;
  padding: 0 8px 5px;
`;

export const Number = styled.Text`
  flex: 1;
  font-family: ${props => props.theme.fonts.medium};
  font-size: 20px;
  color: ${props => props.theme.colors.text_complement};
`;

export const Timer = styled.View`
  position: relative;
  height: 3px;
  width: 100%;
  background: ${props => props.theme.colors.light_gray};
`;

export const RedBar = styled(Animated.View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.colors.primary_darken};
  width: 60%;
`;

export const WrapperAlert = styled(Animated.View)`
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const AlertIcon = styled.Image`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-10.5px);
`;

export const AlertText = styled.Text`
  text-align: center;
  width: 82%;

  font-family: ${props => props.theme.fonts.medium};
  font-size: 13px;
  color: ${props => props.theme.colors.text_light};
`;
