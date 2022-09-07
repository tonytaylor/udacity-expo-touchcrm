import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@touchcrm_storage';

export const clearStorage = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, null);
  } catch (exception) {
    console.error('storage error occurred while attempting to clear:', exception.message);
  }
}

export const writeToStorage = async (value) => {
  try {
    const jsonifiedValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonifiedValue);
  } catch (exception) {
    console.error('storage error occurred while attempting to write:', exception.message);
  }
};

export const readFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return (value !== null) ? JSON.parse(value) : null;
  } catch (exception) {
    console.error('storage error occurred while attempting to read:', exception.message);
  }
};

export const initializeStorage = async () => {
  const data = { test: {
    firstName: 'Rob',
      lastName: 'Johnson',
      email: 'robj@example.com',
      created: Date.now(),
      salesRegion: 'e',
      source: 'none',
      id: 'test',
      phoneNumber: '+0 912 166 8280'
    }
  };
  try {
    return await writeToStorage(data);
  } catch (exception) {
    console.error('error occurred attempting to load initial data:', exception.message);
  }
};