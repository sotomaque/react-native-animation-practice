import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSpring } from 'react-native-redash';

import { AnimatedCard, Button, cards, StyleGuide } from '@components';

const Transitions = (): React.ReactElement => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpring(toggled);
  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        label={toggled ? 'Reset' : 'Start'}
        primary
        onPress={() => setToggle(prev => !prev)}
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
