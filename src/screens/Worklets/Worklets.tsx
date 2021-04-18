import React, { useState } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import Animated, {
  runOnUI,
  runOnJS,
  useSharedValue,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

import { Button } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const formatDatetime = (datetime: Date) => {
  'worklet';
  return datetime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const sayHello = (
  text: Animated.SharedValue<string>,
  from: string,
  cb: () => void
) => {
  'worklet';
  text.value = `Hello from ${from}(${Platform.OS}) at ${formatDatetime(
    new Date()
  )}`;
  runOnJS(cb)();
};

const Worklets = (): React.ReactElement => {
  const [jsText, setJsText] = useState('');
  const text = useSharedValue('');
  const sayHelloOnTheJSThread = () =>
    setJsText(`Hello world at ${formatDatetime(new Date())}`);
  return (
    <View style={styles.container}>
      <Text>JS thread says:</Text>
      <Text>{jsText}</Text>

      <Text>UI thread says:</Text>
      <ReText {...{ text }} />
      <Button
        onPress={() =>
          runOnUI(sayHello)(
            text,
            'Beautiful Zuerich Switzerland',
            sayHelloOnTheJSThread
          )
        }
        label='Say Hello'
        primary
      />
    </View>
  );
};

export default Worklets;
