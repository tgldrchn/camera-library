import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraPage from "./component/Camera";
import LibraryPage from "./component/Library";
import HomePage from "./component/Home";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="camera" component={CameraPage} />
      <Stack.Screen name="library" component={LibraryPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
