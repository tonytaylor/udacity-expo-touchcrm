import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import AuthNavigation from "./auth";
import AnonNavigation from "./anon";


const AppNavigation = ({ auth }) => {
  return (
    <NavigationContainer>
      { (auth && auth.value === null) ? <AnonNavigation /> : <AuthNavigation /> }
    </NavigationContainer>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(AppNavigation);

