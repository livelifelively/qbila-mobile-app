{
  /*  */
}
import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function CopyOutlineIcon() {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <Path
          d="M19.103 8.4137H10.103C8.99846 8.4137 8.10303 9.30913 8.10303 10.4137V19.4137C8.10303 20.5183 8.99846 21.4137 10.103 21.4137H19.103C20.2076 21.4137 21.103 20.5183 21.103 19.4137V10.4137C21.103 9.30913 20.2076 8.4137 19.103 8.4137Z"
          stroke="#625E59"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M4.10303 14.4137H3.10303C2.57259 14.4137 2.06389 14.203 1.68881 13.8279C1.31374 13.4528 1.10303 12.9441 1.10303 12.4137V3.4137C1.10303 2.88326 1.31374 2.37456 1.68881 1.99948C2.06389 1.62441 2.57259 1.4137 3.10303 1.4137H12.103C12.6335 1.4137 13.1422 1.62441 13.5172 1.99948C13.8923 2.37456 14.103 2.88326 14.103 3.4137V4.4137"
          stroke="#625E59"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
