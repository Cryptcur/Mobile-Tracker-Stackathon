import React, { useContext, useEffect } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-navigation";
import { useIsFocused } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";

const Stack = createStackNavigator();

const BottomTab = createMaterialBottomTabNavigator();

// const TrackFlow = () => {
//   return (
//     <BottomTab.Navigator>
//       <BottomTab.Screen />
//     </BottomTab.Navigator>
//   );
// };

const TrackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { state, getTracks } = useContext(TrackContext);

  useEffect(() => {
    getTracks();
  }, [state]);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      {isFocused ? (
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetail", { _id: item._id });
              }}
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
