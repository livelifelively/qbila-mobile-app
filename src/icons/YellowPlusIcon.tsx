import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function YellowPlusIcon() {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.76486 1.43298C7.76486 0.880699 7.31715 0.432983 6.76486 0.432983C6.21258 0.432983 5.76486 0.880699 5.76486 1.43298V5.45553L1.74243 5.45552C1.19015 5.45552 0.742432 5.90324 0.742432 6.45552C0.742432 7.00781 1.19015 7.45552 1.74243 7.45552L5.76486 7.45553V11.478C5.76486 12.0303 6.21258 12.478 6.76486 12.478C7.31715 12.478 7.76486 12.0303 7.76486 11.478V7.45553H11.7875C12.3398 7.45553 12.7875 7.00781 12.7875 6.45553C12.7875 5.90324 12.3398 5.45553 11.7875 5.45553H7.76486V1.43298Z"
          fill="#FFB850"
        />
      </Svg>
    </View>
  );
}
