import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../config';
import {IMainProps} from '../navigation/MainStack';
import {api} from '../api';
import {API_KEY} from '@env';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IMain extends IMainProps {}

const Main: React.FC<IMain> = props => {
  const {width, height} = useWindowDimensions();
  const {top, bottom} = useSafeAreaInsets();

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<ApiTypes.SearchResponse>();
  const [loading, setLoading] = useState(true); // set loading to true initially

  const handleClearBtnPress = () => {
    setSearchText('');
  };

  useEffect(() => {
    getMovies('batman');
  }, []);

  const getMovies = async (query: String) => {
    try {
      setLoading(true);
      // const response = await api.get<ApiTypes.SearchResponse>('', {
      //   params: {
      //     s: query,
      //     apikey: API_KEY,
      //   },
      // });

      // setSearchResults(response.data);
      // console.log(response.data); // move console.log inside then block
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Movies search failed!',
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <View style={styles.mainViewContainer}>
      {loading ? (
        <View style={styles.animContainer}>
          <LottieView
            source={require('../assets/animations/loading.json')}
            autoPlay
            loop
            style={{aspectRatio: 1, width: 180}}
          />
        </View>
      ) : (
        <View
          style={[
            styles.mainContainer,
            {
              paddingTop: top + 8,
              paddingBottom: bottom,
            },
          ]}>
          <View style={styles.header}>
            <Text style={styles.logoText}>{'CINEMA'}</Text>
            <Image
              source={require('../assets/icons/menu.png')}
              style={styles.menuIcon}
            />
          </View>
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchIcon}
              source={require('../assets/icons/search.png')}
            />

            <TextInput
              style={styles.searchInput}
              placeholder={'Find Your Movie'}
              placeholderTextColor={theme.black}
              autoCorrect={false}
              value={searchText}
              onChangeText={query => setSearchText(query)}
            />

            <View style={styles.clearBtnContainer}>
              {searchText.length == 0 ? null : (
                <TouchableOpacity onPress={handleClearBtnPress}>
                  <Image
                    style={styles.clearIcon}
                    source={require('../assets/icons/clear.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewContainer: {
    backgroundColor: theme.black,
    flex: 1,
  },
  animContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoText: {
    color: theme.primery,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  menuIcon: {
    width: 28,
    height: 28,
    tintColor: theme.primery,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.primery,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
  },

  searchInput: {
    flex: 2,
  },

  clearBtnContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },

  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  clearIcon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
});

export default Main;
