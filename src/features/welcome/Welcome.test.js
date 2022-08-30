import React from 'react';
import { render, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';

import Welcome from '.';


describe('<Welcome />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Welcome />);
    expect(getByTestId('staticMsg')).toBeTruthy();
  });
  it('clicking "Click here" will toggle the display of the message "how are ya?"', async () => {
    const { getByTestId, findByTestId, queryByTestId } = render(<Welcome />);
    fireEvent.press(getByTestId('mainBtn'));
    expect(findByTestId('responseMsg')).toBeTruthy();
    fireEvent.press(getByTestId('mainBtn'));
    expect(queryByTestId('responseMsg')).toBeFalsy();
  });
});