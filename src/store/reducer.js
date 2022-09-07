
import authReducer from '../features/auth';
import customerReducer from '../features/customer/customerSlice';

export default {
  auth: authReducer,
  customers: customerReducer
};