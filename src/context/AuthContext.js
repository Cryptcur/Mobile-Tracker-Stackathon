import { AsyncStorage } from "react-native";
import CreateDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { errorMessage: "", token: action.payload };
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const localSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGN_IN", payload: token });
    navigate("Tracks");
  } else {
    navigate("Signup");
  }
};

const clearError = dispatch => () => {
  dispatch({ type: "CLEAR_ERROR" });
};

const Signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN_IN", payload: response.data.token });
    navigate("Tracks");
  } catch (ex) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Invalid email or password"
    });
  }
};
const Signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN_IN", payload: response.data.token });
    navigate("Tracks");
  } catch (ex) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Invalid email or password"
    });
  }
};
const Signout = dispatch => async () => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGN_OUT" });
    navigate("Signup");
  } catch (ex) {}
};

export const { Provider, Context } = CreateDataContext(
  AuthReducer,
  { Signin, Signout, Signup, clearError, localSignIn },
  { token: null, errorMessage: "" }
);
