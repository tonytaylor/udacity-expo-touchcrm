import {render, fireEvent, waitFor} from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';

import Btn from "./index";

describe('<Btn />', () => {
  it('renders w/default props', async () => {
    const { getByText } = render(<Btn />);
    await waitFor(() => getByText('No title provided.'));
  });

  it('renders w/an onPress callback', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Btn title={"Go!"} onPress={onPress} />);
    fireEvent.press(getByTestId('TouchCRM.Button'));
    expect(onPress).toHaveBeenCalled();
  });
});