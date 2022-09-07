import {render, screen, fireEvent, waitFor, act} from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';

import { Provider } from "react-redux";
import {Route} from "@react-navigation/native";

import initializeStore from "../../../store";

import CustomerForm from "./CustomerForm";

const mockSave = jest.fn((firstName, lastName) => {
  return Promise.resolve({firstName, lastName});
});

describe('<CustomerForm />', () => {
  const testNS = 'TouchCRM.CustomerForm';

  const simpleName = [{
    fieldName: 'firstName',
    label: { text: 'First Name', style: {} },
    placeholder: 'John',
    style: {},
    rules: { required: true },
    hidden: false,
    errorMessage: 'First name is required'
  }, {
    fieldName: 'lastName',
    label: { text: 'Last Name', style: {} },
    placeholder: 'John',
    style: {},
    rules: { required: true },
    hidden: false,
    errorMessage: 'First name is required'
  }];

  beforeEach(async () => {
    render(
      <Provider store={initializeStore()}>
        <CustomerForm formConfig={simpleName} saveCustomer={mockSave} route={{}} />
      </Provider>
    );
  });

  it('should display an error if required value is missing', async () => {
    fireEvent.press(screen.getByTestId(`${testNS}.submit`));

    await waitFor(() => {
      screen.getByTestId(`${testNS}.errors.firstName`) &&
        screen.getByTestId(`${testNS}.errors.lastName`);
    });
  });

  it('should properly submit when values are provided', async () => {
    fireEvent.changeText(
      screen.getByTestId(`${testNS}.firstName`), 'Tony'
    );
    fireEvent.changeText(
      screen.getByTestId(`${testNS}.lastName`), 'Taylor'
    );
    fireEvent.press(screen.getByTestId(`${testNS}.submit`));

    await waitFor(() => {
      const expected = {firstName: 'Tony', lastName: 'Taylor'};
      expect(mockSave).toHaveBeenCalledWith(expected);
    });
  });
})