import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function HomeIcon({ style = {}, strokeColor = '#FFBC5A' }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="22.5" height="24" viewBox="0 0 30 32" fill="none">
        <Path
          d="M2.30444 12.5773C2.30444 11.9601 2.58939 11.3775 3.07656 10.9986L13.6766 2.75415C14.3988 2.19242 15.4101 2.19242 16.1323 2.75415L26.7323 10.9986C27.2195 11.3775 27.5044 11.9601 27.5044 12.5773V26.9991C27.5044 27.7417 27.2094 28.4539 26.6843 28.979C26.1592 29.5041 25.447 29.7991 24.7044 29.7991H5.10444C4.36184 29.7991 3.64965 29.5041 3.12454 28.979C2.59944 28.4539 2.30444 27.7417 2.30444 26.9991V12.5773Z"
          stroke={strokeColor}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.7043 29.7991V15.7991H19.1043V29.7991"
          stroke={strokeColor}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
