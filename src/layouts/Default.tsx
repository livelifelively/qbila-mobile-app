import React from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

interface DefaultLayoutProps {
  style?: Record<string, unknown>;
  backgroundColor?: string;
  paddingHorizontal?: number;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  backgroundColor = styles.container.backgroundColor,
  paddingHorizontal = styles.wrapper.paddingHorizontal,
}) => {
  const { height } = useWindowDimensions();
  return (
    <ScrollView style={{ ...styles.container, backgroundColor }}>
      <View style={{ ...styles.wrapper, paddingHorizontal, minHeight: height }}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    position: 'relative',
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 65,
  },
});
