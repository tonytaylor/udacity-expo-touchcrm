import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { zip, flatten, compose } from "ramda";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";

import styles from "../../../components/styles";

const testNS = 'TouchCRM.CustomerForm';

/**
 * Returns a collated list of component labels/inputs/error message triplets for a
 * given form configuration.
 *
 * @param fields Form field configuration collection.
 * @param errors Error field configuration collection.
 * @param control React Hook Form registration component.
 * @returns {Array[React.ReactElement]}
 */
const ControlledInputTriplets = ({ fields, errors, control }) => {
  const inputs = (fields.map((item, index) => (
    <ControlledInput
      key={`input_${index}`}
      isHidden={item.hidden}
      errorMessage={item.errorMessage}
      control={control}
      errors={errors}
      rules={item.rules}
      style={item.style}
      placeholder={item.placeholder}
      defaultValue={item.defaultValue || ''}
      fieldName={item.fieldName} />
  )));
  const messages = (fields.map((item, index) => (
    <ControlledError key={`err_${index}`} errorMessage={item.errorMessage} fieldName={item.fieldName} errors={errors} />
  )));
  const labels = (fields.map((item, index) => (
    <Text key={`label_${index}`} style={item.label.style}>{item.label.text}</Text>
  )));

  return flatten(compose(zip, zip)(labels, inputs)(messages));
};

const ControlledError = ({errors, fieldName, errorMessage}) => {
  return errors
    && errors[fieldName]
    && (<Text style={styles.error} testID={`${testNS}.errors.${fieldName}`}>{errorMessage}</Text>);
};

const ControlledInput = ({ isHidden = true, fieldName, placeholder, defaultValue, style, rules, control }) => {
  return (
    <Controller
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }}) => (
        !isHidden && <TextInput
          style={style}
          testID={`${testNS}.${fieldName}`}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value} />
      )}
      name={fieldName} />
  );
}

export const getCustomerFields = () => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return [{
    fieldName: 'created',
    label: { text: '', style: styles.testing },
    placeholder: '',
    style: null,
    rules: { required: false },
    hidden: true,
    errorMessage: ''
  }, {
    fieldName: 'source',
    label: { text: '', style: styles.testing },
    placeholder: '',
    style: null,
    rules: { required: false },
    hidden: true,
    errorMessage: ''
  }, {
    fieldName: 'salesRegion',
    label: { text: '', style: styles.testing },
    placeholder: '',
    style: null,
    rules: { required: false },
    hidden: true,
    errorMessage: ''
  }, {
    fieldName: 'id',
    label: { text: '', style: styles.testing },
    placeholder: '',
    style: null,
    rules: { required: false },
    hidden: true,
    errorMessage: 'First name is required'
  }, {
    fieldName: 'firstName',
    label: { text: 'First Name', style: styles.formLabel },
    placeholder: 'John',
    style: styles.input.text,
    rules: { required: true },
    hidden: false,
    errorMessage: 'First name is required'
  }, {
    fieldName: 'lastName',
    label: { text: 'Last Name', style: styles.formLabel },
    placeholder: 'Doe',
    style: styles.input.text,
    rules: { required: true, maxLength: 100 },
    hidden: false,
    errorMessage: 'Last name is required'
  }, {
    fieldName: 'email',
    label: { text: 'Email', style: styles.formLabel },
    placeholder: 'jdoe@example.com',
    style: styles.input.text,
    rules: {
      required: true,
      pattern: { value: emailRegex, message: 'Please enter a valid email' }
    },
    hidden: false,
    errorMessage: 'A valid email is required'
  }, {
    fieldName: 'phoneNumber',
    label: { text: 'Phone #', style: styles.formLabel },
    placeholder: '+1 773-555-1212',
    style: styles.input.text,
    rules: {
      required: true,
      pattern: {
        value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        message: 'Please enter a valid phone number'
      }
    },
    hidden: false,
    errorMessage: 'A valid phone number is required'
  }, {
    fieldName: 'notes',
    label: { text: 'Notes', style: styles.formLabel },
    placeholder: 'Share your thoughts here',
    style: styles.input.textArea,
    rules: { required: false, maxLength: 1000 },
    hidden: false,
    errorMessage: 'Content containing more than 1000 characters will be truncated.'
  }];
}


const CustomerForm = ({ saveCustomer = console.log, formConfig, customers, route }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const { params } = route;
  const customer = Object.values(customers).filter((customer) => customer.id === params?.id)[0] || null;

  const mixRecordWithConfig = (config, record) => {
    return (record) ?
      config.map((configItem) => {
        return Object.assign(configItem, {
          defaultValue: record[configItem.fieldName]
        });
      }) :
      config;
  };


  const onSubmit = async (data) => {
    await saveCustomer(data);
    reset();
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 18 }}>
        <Text style={styles.screenTitle}>Add Customer</Text>
        {ControlledInputTriplets({fields: mixRecordWithConfig(formConfig, customer), errors, control})}
        <TouchableOpacity
          testID={"TouchCRM.CustomerForm.submit"}
          style={styles.formButton.container}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.formButton.text}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
};

const mapStateToProps = ({ customers }, { dispatch }) => {
  return { customers };
};

export default connect(mapStateToProps)(CustomerForm);