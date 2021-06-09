import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const SkipOrNextButton = ({ onSkipClick, onNextClick }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipOrNext} onPress={onSkipClick}>
          <Text style={{ textAlign: 'left' }}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipOrNext} onPress={onNextClick}>
          <Text style={{ textAlign: 'right' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  skipOrNext: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '50%',
  },
});

export default SkipOrNextButton;
