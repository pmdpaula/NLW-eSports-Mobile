import * as Notifications from 'expo-notifications';

export const getPushNotificationToken = async (): Promise<
  string | undefined
> => {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    // eslint-disable-next-line no-console
    console.log('NOTIFICATION TOKEN =>', pushToken.data);

    return pushToken.data;
  }

  return undefined;
};
