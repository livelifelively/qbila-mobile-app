import Svg, { Path } from 'react-native-svg';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function PencilIcon() {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <Svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <Path
          d="M0.40918 8.39562V10.5831H2.59668L9.04835 4.13146L6.86085 1.94396L0.40918 8.39562ZM10.74 2.43979C10.9675 2.21229 10.9675 1.84479 10.74 1.61729L9.37501 0.25229C9.14751 0.02479 8.78001 0.02479 8.55251 0.25229L7.48501 1.31979L9.67251 3.50729L10.74 2.43979Z"
          fill="#625E59"
        />
      </Svg>
    </View>
  );
}
