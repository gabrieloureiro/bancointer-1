import 'react-native-masked-text';
import { TextInput } from 'react-native';

declare module 'react-native-masked-text' {
  export interface TextInputMask {
    getElement: () => TextInput;
  }
}
