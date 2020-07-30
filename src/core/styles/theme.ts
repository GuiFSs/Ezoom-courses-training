import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

export const mainTheme: DefaultTheme = {
  colors: {
    background: '#F3F3F3',
    text: '#333',
    text2: '#FB5000',
  },
};
