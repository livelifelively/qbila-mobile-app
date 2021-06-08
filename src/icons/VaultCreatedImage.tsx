import Svg, { Circle, Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function VaultCreatedImage({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="121" height="121" viewBox="0 0 121 121" fill="none">
        <Path
          d="M35.805 60.5129L49.0931 74.9485C50.4055 76.3743 52.6375 76.4308 54.0204 75.0734L86.39 43.3002"
          stroke="#FFB850"
          stroke-width="16.016"
          stroke-linecap="round"
        />
        <Circle cx="60.9459" cy="60.2827" r="53.5484" stroke="#FFB850" stroke-width="13" />
      </Svg>
    </View>
  );
}
