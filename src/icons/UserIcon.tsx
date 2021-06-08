import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function UserIcon() {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
        <Path
          d="M20 21.6564V19.6564C20 18.5955 19.5786 17.5781 18.8284 16.8279C18.0783 16.0778 17.0609 15.6564 16 15.6564H8C6.93913 15.6564 5.92172 16.0778 5.17157 16.8279C4.42143 17.5781 4 18.5955 4 19.6564V21.6564"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 11.6564C14.2091 11.6564 16 9.86551 16 7.65637C16 5.44723 14.2091 3.65637 12 3.65637C9.79086 3.65637 8 5.44723 8 7.65637C8 9.86551 9.79086 11.6564 12 11.6564Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
