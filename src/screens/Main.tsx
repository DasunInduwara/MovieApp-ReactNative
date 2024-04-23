import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../config';
import {IMainProps} from '../navigation/MainStack';
import {api} from '../api';
import {API_KEY} from '@env';
import Toast from 'react-native-toast-message';
import LottieView from 'lottie-react-native';

interface IMain extends IMainProps {}

const Main: React.FC<IMain> = props => {
  const {width, height} = useWindowDimensions();
  const [searchResults, setSearchResults] = useState<ApiTypes.SearchResponse>();
  const [loading, setLoading] = useState(true); // set loading to true initially

  useEffect(() => {
    getMovies('batman');
  }, []);

  const getMovies = async (query: String) => {
    try {
      setLoading(true);
      const response = await api.get<ApiTypes.SearchResponse>('', {
        params: {
          s: query,
          apikey: API_KEY,
        },
      });

      setSearchResults(response.data);
      console.log(response.data); // move console.log inside then block
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
    <View style={styles.mainContainer}>
      {loading ? (
        <LottieView
          source={require('../assets/animations/loading.json')}
          autoPlay
          loop
          style={{aspectRatio: 1, width: 180}}
        />
      ) : (
        <View>
          <Text style={styles.text}>{'CINEMA'}</Text>
        </View>
      )}
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
  text: {
    color: theme.primery,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Main;
