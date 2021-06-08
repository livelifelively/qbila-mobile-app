import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function BackIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="9" height="16" viewBox="0 0 9 16" fill="none">
        <Path
          d="M7.64893 0.972534L1.52188 7.74418L7.64893 14.6112"
          stroke="#625E59"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </Svg>
    </View>
  );
}
