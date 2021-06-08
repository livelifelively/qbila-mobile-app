import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function EtheriumIcon() {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <Svg width="11" height="18" viewBox="0 0 11 18" fill="none">
        <Path
          d="M5.326 0.565674L5.21094 0.955074V12.2546L5.326 12.3689L10.5939 9.26857L5.326 0.565674Z"
          fill="#343434"
        />
        <Path d="M5.32671 0.565674L0.0588379 9.26855L5.32671 12.3689V6.88452V0.565674Z" fill="#8C8C8C" />
        <Path
          d="M5.32595 13.362L5.26111 13.4407V17.4659L5.32595 17.6544L10.597 10.2632L5.32595 13.362Z"
          fill="#3C3C3B"
        />
        <Path d="M5.3261 17.6544V13.362L0.0582275 10.2632L5.3261 17.6544Z" fill="#8C8C8C" />
        <Path d="M5.32593 12.369L10.5937 9.26863L5.32593 6.88458V12.369Z" fill="#141414" />
        <Path d="M0.0582275 9.26854L5.32602 12.3689V6.88452L0.0582275 9.26854Z" fill="#393939" />
      </Svg>
    </View>
  );
}
