import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AnimatedCard, Button, cards, StyleGuide } from '@components';
import Animated, {
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface UseAnimationProps {
  state: boolean | number;
  config?: Animated.WithTimingConfig;
}

const Transitions = (): React.ReactElement => {
  const toggled = useSharedValue(false);
  const transition = useDerivedValue(() => {
    return withSpring(toggled.value);
  });
  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled ? 'Reset' : 'Start'}
        primary
        onPress={() => (toggled.value = !toggled.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
    justifyContent: 'flex-end',
  },
});

export default Transitions;
