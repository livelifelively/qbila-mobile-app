import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function GreenTickIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="20" height="15" viewBox="0 0 20 15" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.6988 2.93619C19.2759 2.34192 19.2621 1.39227 18.6678 0.815095C18.0735 0.237916 17.1239 0.25177 16.5467 0.846039L6.67927 11.0056L3.13489 7.4612C2.5491 6.87541 1.59936 6.87541 1.01357 7.46119C0.427776 8.04697 0.427769 8.99672 1.01355 9.58251L5.31867 13.8877C5.40659 13.9756 5.50271 14.0503 5.60457 14.1119C5.62814 14.1382 5.65281 14.1639 5.67856 14.1889C6.27283 14.7661 7.22247 14.7523 7.79965 14.158L18.6988 2.93619Z"
          fill="#44CBB3"
        />
      </Svg>
    </View>
  );
}
