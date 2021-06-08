import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function VaultIcon({ style = {} }) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }, style]}>
      <Svg width="20" height="25" viewBox="0 0 20 25" fill="none">
        <Path
          d="M14.9155 0.33429H2.91553C1.81553 0.33429 0.915527 1.31267 0.915527 2.50847V17.7278H2.91553V2.50847H14.9155V0.33429ZM13.9155 4.68266L19.9155 11.2052V22.0761C19.9155 23.2719 19.0155 24.2503 17.9155 24.2503H6.90553C5.80553 24.2503 4.91553 23.2719 4.91553 22.0761L4.92553 6.85684C4.92553 5.66104 5.81553 4.68266 6.91553 4.68266H13.9155ZM12.9155 12.2923H18.4155L12.9155 6.31329V12.2923Z"
          fill="#FFB850"
        />
      </Svg>
    </View>
  );
}
