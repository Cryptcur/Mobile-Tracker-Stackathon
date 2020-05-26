import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, Signup } = useContext(AuthContext);

  navigation.setOptions({
    header: () => null
  });
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <AuthForm
        headerText="Sign Up from Track"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={Signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
        navigate={navigation.navigate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SignupScreen;
