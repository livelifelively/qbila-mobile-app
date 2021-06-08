import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GreenTickIcon, RedCrossIcon } from '../../icons';
import { WhiteTouchableOpacity } from './WhiteTouchableOpacity';

const Prompt = ({ alertState, onRejectPress, onConfirmPress }) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(200, 200, 200, 0.8)',
      }}
    >
      <View style={styles.alert}>
        <SafeAreaView
          style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 30,
          }}
        >
          <View>
            <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 18, marginBottom: 30 }}>
              {alertState.title}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
              <WhiteTouchableOpacity onPress={onRejectPress} style={styles.actionButton}>
                <View style={{ width: 25, height: 25, marginRight: 5 }}>
                  <RedCrossIcon />
                </View>
                <Text style={{ fontSize: 12, color: '#EA6D6D', fontFamily: 'Poppins-Bold' }}>
                  {alertState?.ctas?.reject.label}
                </Text>
              </WhiteTouchableOpacity>
              <WhiteTouchableOpacity onPress={onConfirmPress} style={styles.actionButton}>
                <View style={{ width: 25, height: 25, marginRight: 5 }}>
                  <GreenTickIcon />
                </View>
                <Text style={{ fontSize: 12, fontFamily: 'Poppins-Bold' }}>{alertState?.ctas?.confirm.label}</Text>
              </WhiteTouchableOpacity>
            </View>
          </View>
          {alertState.body && <Text style={{ textAlign: 'center', marginBottom: 15 }}>{alertState.body}</Text>}
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
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

export default Prompt;
