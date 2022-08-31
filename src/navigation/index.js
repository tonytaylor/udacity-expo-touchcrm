import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./auth";
import AnonNavigation from "./anon";


export default ({ auth = null }) => {
  return (
    <NavigationContainer>
      { (auth === null) ? <AnonNavigation /> : <AuthNavigation /> }
    </NavigationContainer>
  );
};