/* eslint-disable no-console */
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

/** Variável global do React Native que retorna true quando estamos emulando a aplicação em ambiente de desenvolvimento, não executará em ambiente de produção */
if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.1.242' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

// { host: '192.168.1.242' }
