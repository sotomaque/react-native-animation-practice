import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card } from '@components';

const cards = [
  {
    id: 1,
  },
];

const ValuesAndIdentities = (): React.ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ opacity: show ? 1 : 0 }}>
          <Card card={cards[0]} />
        </View>
      </View>

      <Button
        label={show ? 'Hide' : 'Show'}
        primary
        onPress={() => setShow(prev => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ValuesAndIdentities;
