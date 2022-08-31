import { createStackNavigator } from "@react-navigation/stack";
import screens from "../../screens";

const Stack = createStackNavigator();


const AuthNavigation = () => {
  const authedScreens = screens.auth;
  return (
    <Stack.Navigator initialRouteName={"Customers"}>
      {Object.entries(authedScreens).map(([k, v]) => (
        <Stack.Screen key={k} name={k} component={v} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigation;