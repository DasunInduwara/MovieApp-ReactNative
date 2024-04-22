import {Alert, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {ROUTE_NAMES, theme} from '../config';
import React from 'react';
import LottieView from 'lottie-react-native';
import {runOnJS} from 'react-native-reanimated';
import {ILandingProps} from '../navigation/MainStack';

interface ILanding extends ILandingProps {}

const Landing: React.FC<ILanding> = props => {
  const {width, height} = useWindowDimensions();
  const {navigation} = props;

  const onAnimastionFinished = () => {
    setTimeout(() => {
      navigation.replace(ROUTE_NAMES.MAIN);
    }, 900);
  };

  return (
    <View style={style.container}>
      <LottieView
        source={require('../assets/animations/landing.json')}
        autoPlay
        loop={false}
        style={{aspectRatio: 1, width: width}}
        onAnimationFinish={() => onAnimastionFinished()}
      />
      <Text style={style.text}>{'CINEMA'}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.primery,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Landing;
