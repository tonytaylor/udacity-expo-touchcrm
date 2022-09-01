import { Provider } from "react-redux";

import AppNavigation from './src/navigation';

import initializeStore from "./src/store";

const store = initializeStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
