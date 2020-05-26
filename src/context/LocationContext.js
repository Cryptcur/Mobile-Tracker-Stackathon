import CreateDataContext from "./CreateDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CURRENT_LOCATION":
      return { ...state, currentLocation: action.payload };
    case "ADD_LOCATION":
      return { ...state, locations: [...state.locations, action.payload] };
    case "BEGIN_RECORDING":
      return { ...state, recording: true };
    case "STOP_RECORDING":
      return { ...state, recording: false };
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "RESET":
      return { ...state, name: "", locations: [] };
    default:
      return state;
  }
};

const beginRecording = dispatch => async () => {
  dispatch({ type: "BEGIN_RECORDING" });
};
const stopRecording = dispatch => async () => {
  dispatch({ type: "STOP_RECORDING" });
};
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });
  if (recording) {
    dispatch({ type: "ADD_LOCATION", payload: location });
  }
};

const changeName = dispatch => name => {
  dispatch({ type: "CHANGE_NAME", payload: name });
};

const reset = dispatch => () => {
  dispatch({ type: "RESET" });
};

export const { Context, Provider } = CreateDataContext(
  locationReducer,
  { reset, beginRecording, stopRecording, addLocation, changeName },
  { name: "", recording: false, locations: [], currentLocation: null }
);
