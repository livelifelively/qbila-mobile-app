import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const TwoColorDoughnutChart = ({
  size = 134,
  strokeWidth = 20,
  secondPercent = 0,
  firstColor = '#FF7E42',
  secondColor = '#363EFF',
  children,
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle stroke={firstColor} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
          <Circle
            stroke={secondColor}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * secondPercent) / 100}
          />
        </G>
        <View
          style={{
            // position: 'absolute',
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <Text style={{ textAlign: 'center' }}>TEXT HERE</Text> */}
          {children}
        </View>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TwoColorDoughnutChart;
