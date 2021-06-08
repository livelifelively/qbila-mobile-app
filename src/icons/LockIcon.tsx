import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LockIcon() {
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <Path
          d="M19.8926 11.0938H5.89258C4.78801 11.0938 3.89258 11.9892 3.89258 13.0938V20.0938C3.89258 21.1983 4.78801 22.0938 5.89258 22.0938H19.8926C20.9971 22.0938 21.8926 21.1983 21.8926 20.0938V13.0938C21.8926 11.9892 20.9971 11.0938 19.8926 11.0938Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.89258 11.0938V7.09375C7.89258 5.76767 8.41936 4.4959 9.35704 3.55822C10.2947 2.62053 11.5665 2.09375 12.8926 2.09375C14.2187 2.09375 15.4904 2.62053 16.4281 3.55822C17.3658 4.4959 17.8926 5.76767 17.8926 7.09375V11.0938"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
