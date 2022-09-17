/* eslint-disable camelcase */
import './src/service/notificationConfigs';

import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
// import { Home } from './src/screens/Home';
import { Loading } from './src/screens/Loading/Loading';
// eslint-disable-next-line no-unused-vars
import { getPushNotificationToken } from './src/service/getPushNotificationToken';

function App() {
  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // eslint-disable-next-line no-console
        console.log(notification);
      });

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      });

    // importante para limpar os listeners da memória
    return () => {
      if (getNotificationListener.current && responseNotificationListener) {
        // eslint-disable-next-line prettier/prettier
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        // eslint-disable-next-line prettier/prettier
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    };
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

export default App;
