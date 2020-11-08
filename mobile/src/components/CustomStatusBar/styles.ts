import styled from 'styled-components/native';

import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(() => ({
  colors: ['rgba(0, 0, 0, 0.7)', 'transparent'],
  start: [0, 0],
  end: [0, 1],
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${StatusBar.currentHeight}px;
`;
