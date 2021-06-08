import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Toast = ({ alertState }) => {
  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(230, 230, 230, 0.8)',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <View style={styles.alert}>
        <Text
          style={{
            textAlign: 'center',
            color: '#50CFB8',
          }}
        >
          {alertState.title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  alert: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 70,
    fontSize: 10,
  },
});

export default Toast;
