import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@components';

const ValuesAndIdentities = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Hi</Text>
      </View>
      <Button
        label='Toggle'
        primary
        onPress={() => {
          console.log('hi');
        }}
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
