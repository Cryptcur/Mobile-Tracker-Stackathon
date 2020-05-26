import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    beginRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={beginRecording} />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button title="Save Recording" onPress={saveTrack} />
      ) : null}
    </>
  );
};

export default TrackForm;
