import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Camera } from "../screens/Camera";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="produtos" component={Produtos} />
      <Screen name="camera" component={Camera} />
    </Navigator>
  );
}
