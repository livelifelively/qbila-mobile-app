import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const Alert = ({ alertState, onAcknowledgePress }) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(200, 200, 200, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.alert}>
        <View
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            paddingTop: 30,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                marginBottom: 30,
                paddingHorizontal: 20,
              }}
            >
              {alertState.title}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onAcknowledgePress}
              style={{
                backgroundColor: '#EFEFEF',
                width: '100%',
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
                padding: 15,
              }}
            >
              <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold' }}>
                {alertState?.ctas?.acknowledge?.label}
              </Text>
            </TouchableOpacity>
          </View>
          {alertState.body && <Text style={{ textAlign: 'center', marginBottom: 15 }}>{alertState.body}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    width: '80%',
  },
  prompt: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    width: '100%',
  },
  actionButton: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Alert;
