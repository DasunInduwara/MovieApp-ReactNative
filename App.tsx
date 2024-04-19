import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer}  from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
