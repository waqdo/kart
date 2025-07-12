import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {menuData} from '@utils/db';
import MenuItem from '../atoms/MenuItem';
import Icon from '@components/atoms/Icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '@utils/Constants';

const MenuHeader: FC<{scrollY: any}> = ({scrollY}) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const opacityFadingStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
    return {
      opacity,
    };
  });
  const insets = useSafeAreaInsets();
  return (
    <Animated.View style={[styles.container, opacityFadingStyle]}>
      <View style={styles.flexRow}>
        {menuData.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              isFocused={focusedIndex === index}
              onSelect={() => setFocusedIndex(index)}
            />
          );
        })}
      </View>
      <View style={styles.addressContainer}>
        <Icon size={16} name="home" iconFamily="Ionicons" />
        <Text style={styles.homeText}>Home</Text>
        <Text numberOfLines={1} style={styles.addressText}>
          House 7 street 7 block E Fazaia housing scheme Tarnol, islamabad
        </Text>
        <Icon size={16} name="chevron-forward-sharp" iconFamily="Ionicons" />
      </View>
    </Animated.View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: Colors.text,
  },
  addressText: {
    flex: 1,
    fontSize: RFValue(9),
    color: Colors.text,
  },
});
