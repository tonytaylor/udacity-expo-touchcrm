import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

global.window = {};
global.window = global;

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // We override this with a no-op.
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Provides AsyncStorage support
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing.
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')