import Home from "./home";
import Login from "./login";
import Support from "./support";

import AddCustomer from "./customer/Add";
import ViewAllCustomers from "./customer/ViewAll";
import ViewOneCustomer from "./customer/ViewOne";
import ViewAllRegions from "./region/ViewAll";

export default {
  anon : {
    Home,
    Login,
    Support
  },
  auth: {
    Customers: ViewAllCustomers,
    Customer: ViewOneCustomer,
    Regions: ViewAllRegions,
    AddCustomer
  }
};