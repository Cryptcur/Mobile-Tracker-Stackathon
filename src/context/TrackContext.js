import CreateDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return action.payload;
    default:
      return state;
  }
};

const getTracks = dispatch => async () => {
  const res = await trackerApi("/tracks");
  dispatch({ type: "GET_TRACKS", payload: res.data });
};

const createTracks = dispatch => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  { getTracks, createTracks },
  []
);
