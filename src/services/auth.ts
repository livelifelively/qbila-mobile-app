import AsyncStorage from '@react-native-community/async-storage';
import Logger from './logger';

export const authToken = async () => {
  const userDataStringFromStorage = await AsyncStorage.getItem('user');

  if (userDataStringFromStorage) {
    const userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
    Logger.debug('SERVICE_AUTH__AUTH_TOKEN--ACCESS-SUCESS', {});
    return userDataObjectFromStorage;
  }
  Logger.debug('SERVICE_AUTH__AUTH_TOKEN--ACCESS-FAILED', {});
  return {};
};
