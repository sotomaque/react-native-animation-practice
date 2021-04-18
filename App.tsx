import React from 'react';
import { RootNavigator } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
