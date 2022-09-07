import { render, waitFor } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';
import { Provider } from "react-redux";

import initializeStore from "../store";

import AppNavigation from './index';

describe('<AppNavigation />', () => {
  it('renders the Home route on default', async () => {
    const { getByTestId } = render(
      <Provider store={initializeStore()}>
        <AppNavigation />
      </Provider>
    );
    await waitFor(() => getByTestId('Home'));
  });

  it('renders the Customers route when authenticated', async () => {
    const { getByTestId } = render(
      <Provider store={initializeStore({ auth: { value : 'foo' }, customers: {}})}>
        <AppNavigation />
      </Provider>
    );
    await waitFor(() => getByTestId('Customers'));
  })
});