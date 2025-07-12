import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {screenHeight} from '@utils/Constants';
import MenuHeader from './molecules/MenuHeader';
import SearchBar from './molecules/SearchBar';
import MainList from './templates/MainList';

const Home = () => {
  const insets = useSafeAreaInsets();
  const scrollYGlobal = useSharedValue(0);

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100],
      [0, -100],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY}],
    };
  });

  return (
    <View
      style={[
        styles.container,
       
      ]}>
      <StatusBar
        barStyle="dark-content" backgroundColor="transparent" translucent
      />

      <Animated.View style={[moveUpStyle]}>
        <MenuHeader scrollY={scrollYGlobal} />
        <SearchBar/>
      </Animated.View>

      <Animated.View
        style={[moveUpStyle, {height: screenHeight}]}
      >
        <MainList scrollYGlobal={scrollYGlobal} />
        </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
});

export default Home;
