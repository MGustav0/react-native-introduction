import Reactotron from 'reactotron-react-native';

/** Variável global do React Native que retorna true quando estamos emulando a aplicação em ambiente de desenvolvimento, não executará em ambiente de produção */
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.242' })
    .useReactNative()
    .connect();

  tron.clear();
}

// { host: '192.168.1.242' }
