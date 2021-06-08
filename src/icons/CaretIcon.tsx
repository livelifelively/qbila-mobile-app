import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function CaretIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="8" height="5" viewBox="0 0 8 5" fill="none">
        <Path d="M4.19757 4.7984L0.476004 0.2984L7.91914 0.298401L4.19757 4.7984Z" fill="#C4C4C4" />
      </Svg>
    </View>
  );
}
