import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../config';

type Props = {};

const Main = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;


