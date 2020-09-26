import { DefaultTheme, Theme } from '@react-navigation/native';

const theme = {
  name: 'default',

  colors: {
    primary_darken: '#FF510F',
    primary: '#ED6E01',
    primary_light: '#FF8701',

    remove: '#FD4F47',

    white: '#fff',

    light_gray_bg: '#F5F6FA',
    light_gray: '#ECEDF2',
    light_gray_complement: '#E6E7F0',

    text_base: '#4B4E5C',
    text_light: '#727375',
    text_complement: '#8C91A9',
  },

  fonts: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semi_bold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
};

export const NavigationTheme: Theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    text: theme.colors.text_base,
  },
};

export default theme;
