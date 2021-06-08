import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Poppins-Regular',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
    },
    light: {
      fontFamily: 'Poppins-Light',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
    },
    logo: {
      fontFamily: 'Comfortaa-Regular',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Poppins-Regular',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
    },
    light: {
      fontFamily: 'Poppins-Light',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
    },
    logo: {
      fontFamily: 'Comfortaa-Regular',
    },
  },
  android: {
    regular: {
      fontFamily: 'Poppins-Regular',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
    },
    light: {
      fontFamily: 'Poppins-Light',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
    },
    logo: {
      fontFamily: 'Comfortaa-Regular',
    },
  },
};

const lightThemeColors = {
  ...DefaultTheme.colors,
  primary: '#0094ff',
  cta: '#0094ff',
  ctaText: '#fff',
  primaryButtonBackground: '#0094ff',
  primaryButtonText: '#fff',
  primaryButtonBorder: '#0094ff',
  outlineButtonBorder: '#0094ff',
  outlineButtonBackground: '#fff',
  outlineButtonText: '#2B2B2B',
  textInputBackground: '#fff',
  textInputBorderColor: '#e5e5e5',
  placeholderColor: '#625E59',
  checkboxColorPrimary: '#44CBB3',
  checkboxColorSecondary: '#fff',
  background: '#FFB850',
  text: '#2B2B2B',
  textButton: '#0094ff',
  disabled: 'gray',
}

// #TODO to support dark theme in future.
const darkThemeColors = {
  ...DefaultTheme.colors,
  primary: '#0094ff',
  cta: '#0094ff',
  ctaText: '#fff',
  primaryButtonBackground: '#0094ff',
  primaryButtonText: '#fff',
  primaryButtonBorder: '#0094ff',
  outlineButtonBorder: '#0094ff',
  outlineButtonBackground: '#fff',
  outlineButtonText: '#2B2B2B',
  background: '#FFB850',
  text: '#2B2B2B',
  textButton: '#0094ff',
  disabled: 'gray',
}

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightThemeColors
  },
  fonts: configureFonts(fontConfig),
};

export default Theme;
