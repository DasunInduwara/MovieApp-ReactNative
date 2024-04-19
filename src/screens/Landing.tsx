import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../config';
import React from 'react';

interface ILanding {}

const Landing: React.FC<ILanding> = props => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{'Landing'}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.primery,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.white,
  },
});

export default Landing;
