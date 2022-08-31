import { render, fireEvent, waitFor } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';

import AppNavigation from './index';

describe('<AppNavigation />', () => {
  it('renders the Home route on default', async () => {
    const { getByTestId } = render(<AppNavigation />);
    await waitFor(() => getByTestId('Home'));
  });

  it('renders the Customers route when authenticated', async () => {
    const { getByTestId } =render(<AppNavigation auth={true} />);
    await waitFor(() => getByTestId('Customers'));
  })
});