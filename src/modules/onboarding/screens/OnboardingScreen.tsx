import React, { useRef, useContext, useState } from 'react';
import { StyleSheet, FlatList, View, Animated } from 'react-native';

import OnboardingItem from '../../../components/business/OnboardingItem';
import slides from '../Slides';
import Paginator from '../../../components/design/Paginator';
import SkipOrNextButton from '../../../components/design/SkipOrNextButton';
import { AuthContext } from '../../auth/AuthProvider';

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const { userOnboard } = useContext(AuthContext);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const gotToAut = () => {
    userOnboard();
  };

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      gotToAut();
    }
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={(item) => <OnboardingItem slide={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          keyExtractor={(key) => key.id.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <SkipOrNextButton onNextClick={scrollTo} onSkipClick={gotToAut} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
