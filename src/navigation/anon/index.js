import { createStackNavigator } from "@react-navigation/stack";
import screens from "../../screens";

const Stack = createStackNavigator();


const AnonNavigation = () => {
  const anonScreens = screens.anon;
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      {Object.entries(anonScreens).map(([k, v]) => (
        <Stack.Screen key={k} name={k} component={v} />
      ))}
    </Stack.Navigator>
  );
};

export default AnonNavigation;