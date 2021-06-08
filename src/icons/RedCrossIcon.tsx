import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function RedCrossIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="16" height="17" viewBox="0 0 16 17" fill="none">
        <Path
          d="M14.6038 3.59921C15.2446 2.95838 15.2446 1.91938 14.6038 1.27855C13.9629 0.63772 12.9239 0.63772 12.2831 1.27855L7.46103 6.10061L2.99074 1.63031C2.3499 0.989481 1.31091 0.989482 0.670078 1.63031C0.0292452 2.27115 0.0292446 3.31014 0.670078 3.95097L5.14038 8.42127L0.679796 12.8819C0.038963 13.5227 0.0389634 14.5617 0.679796 15.2025C1.32063 15.8433 2.35962 15.8433 3.00046 15.2025L7.46103 10.7419L12.2734 15.5543C12.9142 16.1951 13.9532 16.1951 14.594 15.5543C15.2349 14.9134 15.2349 13.8744 14.594 13.2336L9.78169 8.42127L14.6038 3.59921Z"
          fill="#EA6D6D"
        />
      </Svg>
    </View>
  );
}
