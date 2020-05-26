import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route, navigation }) => {
  navigation.setOptions({
    title: "Track Details"
  });
  const _id = route.params._id;
  const { state } = useContext(TrackContext);

  const track = state.find(location => location._id === _id);
  const initCoords = track.locations[0].coords;

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 35 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.001,
          latitudeDelta: 0.001,
          ...initCoords
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map(location => location.coords)}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
