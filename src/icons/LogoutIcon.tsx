import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LogoutIcon() {
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
        <Path
          d="M12.8254 5.92175L12.8253 3.74996C12.8356 2.64544 11.9486 1.74166 10.8441 1.7313L3.84444 1.66566C2.73991 1.6553 1.83613 2.5423 1.82577 3.64682L1.6945 17.6462C1.68414 18.7507 2.57113 19.6545 3.67565 19.6649L10.6753 19.7305C11.7799 19.7409 12.6837 18.8539 12.694 17.7493L12.694 15.1578"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path d="M10.6479 10.6982L20.9998 10.6983" stroke="black" stroke-width="2" stroke-linecap="round" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.3752 6.6188C16.9389 6.28015 16.3107 6.35928 15.9721 6.79555C15.6334 7.23182 15.7126 7.86002 16.1488 8.19868L19.3688 10.6982L16.1488 13.1977C15.7126 13.5363 15.6334 14.1645 15.9721 14.6008C16.3107 15.0371 16.9389 15.1162 17.3752 14.7776L21.5953 11.5018C21.6335 11.4734 21.6701 11.442 21.7046 11.4076C22.0586 11.0567 22.103 10.4887 21.7896 10.085C21.7651 10.0534 21.739 10.0236 21.7116 9.99579M17.3752 6.6188L21.5945 9.894L17.3752 6.6188Z"
          fill="black"
        />
      </Svg>
    </View>
  );
}
