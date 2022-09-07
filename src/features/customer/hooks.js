
export const useCustomerForm = () => {
  const fields = {
    name: {
      firstName: '',
      lastName: '',
    },
    firstName: '',
    lastName: ''
  };

  return {
    fields,
    setCustomerFormField: (fieldName) => {
      return (value) => {
        console.log(`Updating field ${fieldName} to ${value}`);
        fields[fieldName] = value;
      };
    }
  }
}