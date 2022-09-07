
import authReducer from '../features/auth';
import customerReducer from '../features/customer/components/customerSlice';

export default {
  auth: authReducer,
  customers: customerReducer
};