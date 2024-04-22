import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {ROUTE_NAMES} from '../config';
import Landing from '../screens/Landing';
import Main from '../screens/Main';

export type RootStackParamsList = {
  Landing: undefined;
  Main: undefined;
};

export interface ILandingProps {
  navigation: StackNavigationProp<RootStackParamsList, ROUTE_NAMES.LANDING>;
}
export interface IMainProps {
  navigation: StackNavigationProp<RootStackParamsList, ROUTE_NAMES.MAIN>;
}

const Stack = createStackNavigator<RootStackParamsList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.LANDING}>
      <Stack.Screen
        name={ROUTE_NAMES.LANDING}
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTE_NAMES.MAIN}
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
