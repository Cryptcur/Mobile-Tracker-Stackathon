import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackFlow from "./src/screens/TrackFlow";
import { setNavigator } from "./src/navigationRef";
import Loading from "./src/screens/Loading";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer ref={navigator => setNavigator(navigator)}>
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Tracks" component={TrackFlow} />
          <Stack.Screen name="TrackList" component={TrackListScreen} />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
          <Stack.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
