import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TrackCreateScreen from "./TrackCreateScreen";
import AccountScreen from "./AccountScreen";
import TrackListScreen from "./TrackListScreen";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createMaterialBottomTabNavigator();

const TrackFlow = ({ navigation }) => {
  navigation.setOptions({
    headerLeft: () => null
    // header: () => null
  });
  return (
    <BottomTab.Navigator initialRouteName="TrackFlow">
      <BottomTab.Screen
        name="TrackFlow"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="list" size={30} color="black" />
          )
        }}
        component={TrackListScreen}
      />
      <BottomTab.Screen
        options={{
          title: "Add Tracks",
          tabBarIcon: () => <MaterialIcons name="add" size={30} color="black" />
        }}
        name="TrackCreate"
        component={TrackCreateScreen}
      />
      <BottomTab.Screen
        name="Account"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-settings"
              size={30}
              color="black"
            />
          )
        }}
        component={AccountScreen}
      />
    </BottomTab.Navigator>
  );
};

export default TrackFlow;
