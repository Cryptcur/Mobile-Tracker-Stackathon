import "../_mockLocation";
import React, { useContext, useEffect, useCallback } from "react";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import useLocation from "../hooks/useLocation";
import TrackFrom from "../components/TrackForm";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import { MaterialIcons } from "@expo/vector-icons";

const TrackCreateScreen = ({ navigation }) => {
  navigation.setOptions({
    header: "Add A Track"
  });
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const isFocused = useIsFocused();

  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackFrom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
