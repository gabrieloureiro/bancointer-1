import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { Form as Unform } from '@unform/mobile';

import {
  Input as CustomInput,
  InputMask as CustomInputMask,
} from '../../components/Inputs';

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

export const Wrapper = styled.View`
  padding: 0 15px;
  margin-top: -25px;
`;

export const Form = styled(Unform)`
  background: ${props => props.theme.colors.light_gray_bg};
  padding: 26px 16px;
  border-radius: 8px;
`;

export const Input = styled(CustomInput)`
  background: ${props => props.theme.colors.white};
`;

export const InputMask = styled(CustomInputMask)`
  background: ${props => props.theme.colors.white};
`;
