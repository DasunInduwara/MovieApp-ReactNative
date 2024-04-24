import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {IMapProps} from '../navigation/MainStack';
import {theme} from '../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IMap extends IMapProps {}

const Map: React.FC<IMap> = props => {
  const {navigation} = props;
  const {top, bottom} = useSafeAreaInsets();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.mainContainer, {paddingTop: top + 8}]}>
      <View style={styles.header}>
        <TouchableOpacity style={{flex: 1}} onPress={handleGoBack}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'Our Cinema Location'}</Text>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -33.8688,
          longitude: 151.2093,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: -33.8688, longitude: 151.2093}}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}
          image={require('../assets/icons/location.png')}
        />
      </MapView>
      <View style={styles.outletContainer}>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.black,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  headerText: {
    color: theme.primery,
    fontSize: 24,
    flex: 3,
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  backIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: theme.primery,
  },
  map: {
    flex: 1,
    borderRadius: 12,
    marginTop: 10,
    marginHorizontal: 25,
  },
  outletContainer: {
    flex: 1,
  },
});
