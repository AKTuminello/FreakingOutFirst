import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';

const HappyBlob = () => {
  const [isBreathing, setBreathing] =useState(false);
  const animatedBlobSize=new Animated.Value(100);

  const startBreathing = () => {
    setBreathing(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedBlobSize, {
          toValue: 120,
          duration: 4000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedBlobSize, {
          toValue: 120,
          duration: 7000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedBlobSize, {
          toValue: 100,
          duration: 8000,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setBreathing(false);
      }),
  };

  const handleTouchStart=() => {
    Animated.timing(animatedBlobSize, {
      toValue: 100,,
      duration)


