import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';

const OnboardingItem = ({ slide }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={{ width, flex: 0.7, justifyContent: 'center' }}></View>
      <View style={{ width, flex: 0.3 }}>
        <Text style={styles.titleText}>{slide.item.title}</Text>
        <Text style={styles.description}>{slide.item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 40
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default OnboardingItem;
